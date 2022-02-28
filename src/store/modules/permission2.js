// 根据请求不同的用户权限的获取的路由
import {fetchPermission } from "@/api/index"
// 初始化路由
import router,{ DynamicRoutes } from '../../router/index'
// 本地定义的所有的权限路由(全部路由)
import dynamicRouter from '@/router/dynamic-router'

// 比对权限的方法和设置默认的方法
import { recursionRouter,setDefaultRoute } from '@/utils/recursion-router'

import { setLocal, getLocal, decode } from '@/utils/tools'

const setting = getLocal('setting')
//const { ACCESS_TOKEN } = getLocal('token')

export default {
    namespaced:true,
    state: {
        permissionList:null, // 所有路由
        /*MenuData:[], //导航菜单
        currentMenu:'', //选中高亮
        isCollapse: false, //是否收缩*/
        menubar: {
            status: document.body.offsetWidth < 768 ? 3 : 0,
            menuList: [],
            isPhone: document.body.offsetWidth < 768
        },
        // 标签栏
        tags: {
            tagsList: [],
            cachedViews: []
        },
        setting: {
            theme: setting.theme !== undefined ? setting.theme : 0,
            showTags: setting.showTags !== undefined ? setting.showTags : true,
            color: {
                primary: setting.color !== undefined ? setting.color.primary : '#409eff'
            },
            usePinyinSearch: setting.usePinyinSearch !== undefined ? setting.usePinyinSearch : false,
            mode: setting.mode || 'vertical'
        },
        status: {
            isLoading: false,
            //ACCESS_TOKEN: ACCESS_TOKEN || ''
        }
    },
    mutations:{
        setPermission(state,data){
            state.permissionList = data
        },
        clearPermission(state){
            state.permissionList = null
        },
        setMenuData(state,data){
            //state.MenuData = data
            state.menubar.menuList = data
        },
        clearMenuData(state){
            //state.MenuData = []
            state.menubar.menuList = []
        },
        setIsCollapse(state){
            state.isCollapse = !state.isCollapse
        },
        setCurrentMenu(state,data){
            state.currentMenu = data;
        },
    },
    getters: {
        getMenubar(state) {
            return state.menubar
        },
        getTags(state) {
            console.log(state)
            return state.tags
        },
        getSetting(state) {
            return state.setting
        },
        getStatus(state) {
            return state.status
        }
    },
    actions: {
        async FECTH_PERMISSION({commit,state}){
            let permissionList = await fetchPermission();
            //console.log(permissionList)
            // 筛选 (获取比对之后的数据，该用户能看的菜单
            let routes = recursionRouter(permissionList,dynamicRouter)
            console.log(routes)
            console.log(DynamicRoutes)
            let MainContainer = DynamicRoutes.find(v => v.path === '')
            console.log(MainContainer)
            let children = MainContainer.children;
            children.push(...routes);

            // 生成菜单
            commit("setMenuData",children)

            // 设置默认路由
            setDefaultRoute([MainContainer])
            //console.log(MainContainer)
            // 获取初始化路由
            let initialRoutes = router.options.routes;
            // 将请求过滤到处理后的路由菜单动态添加到主路由整体里面去

            DynamicRoutes.forEach((item) => {
                router.addRoute(item);
            })
            console.log(initialRoutes)
            console.log(DynamicRoutes)

            // 合并初始化路由和过滤处理的所有权限路由得出的整体路由菜单
            commit("setPermission",[...initialRoutes,...DynamicRoutes])
            console.log(state.permissionList)
        },
        changeCollapsed({commit,state}) {
            console.log(state)
            state.menubar.status = state.menubar.isPhone
                ? state.menubar.status === 3
                    ? 2
                    : 3
                : state.menubar.status === 1
                    ? 0
                    : 1
        },
        changeDeviceWidth({commit,state}) {
            state.menubar.isPhone = document.body.offsetWidth < 768
            state.menubar.status = state.menubar.isPhone ? 3 : 0
        },
        // 切换导航，记录打开的导航
        changeTagNavList({ commit, state },cRouter) {
            console.log(cRouter)
            if(!state.setting.showTags) return // 判断是否开启多标签页
            // if(cRouter.meta.hidden && !cRouter.meta.activeMenu) return // 隐藏的菜单如果不是子菜单则不添加到标签
            console.log(cRouter.path)
            if(new RegExp('^\/redirect').test(cRouter.path)) return
            console.log(23)
            const index = state.tags.tagsList.findIndex(v => v.path === cRouter.path)
            console.log(345345)
            console.log(index)
            console.log(345345)
            state.tags.tagsList.forEach(v => v.isActive = false)
            // 判断页面是否打开过
            if(index !== -1) {
                state.tags.tagsList[index].isActive = true
                return
            }
            const tagsList = {
                name: cRouter.name,
                title: cRouter.meta.name,
                path: cRouter.path,
                isActive: true
            }
            console.log(tagsList)
            state.tags.tagsList.push(tagsList)
        },
        removeTagNav({ commit, state },obj) {
            const index = state.tags.tagsList.findIndex(v => v.path === obj.tagsList.path)
            if(state.tags.tagsList[index].path === obj.cPath) {
                state.tags.tagsList.splice(index, 1)
                const i = index === state.tags.tagsList.length ? index - 1 : index
                state.tags.tagsList[i].isActive = true
                this.removeCachedViews({ name: obj.tagsList.name, index })
                router.push({ path: this.tags.tagsList[i].path })
            }else{
                state.tags.tagsList.splice(index, 1)
                this.removeCachedViews({ name: obj.tagsList.name, index })
            }
        },
        removeOtherTagNav({ commit, state },tagsList) {
            const index = state.tags.tagsList.findIndex(v => v.path === tagsList.path)
            state.tags.tagsList.splice(index + 1)
            state.tags.tagsList.splice(0, index)
            state.tags.cachedViews.splice(index + 1)
            state.tags.cachedViews.splice(0, index)
            router.push({ path: tagsList.path })
        },
        removeAllTagNav({ commit, state }) {
            state.tags.tagsList.splice(0)
            state.tags.cachedViews.splice(0)
            router.push({ path: '/' })
        },
        // 添加缓存页面
        addCachedViews({ commit, state },obj) {
            console.log(obj)
            if(!state.setting.showTags) return // 判断是否开启多标签页
            if(obj.noCache || state.tags.cachedViews.includes(obj.name)) return
            state.tags.cachedViews.push(obj.name)
            console.log(state.tags.cachedViews)
        },
        // 删除缓存页面
        removeCachedViews({ commit, state },obj) {
            // 判断标签页是否还有该页面
            if(state.tags.tagsList.map(v => v.name).includes(obj.name)) return
            state.tags.cachedViews.splice(obj.index, 1)
        },
        /*logout() {
            this.status.ACCESS_TOKEN = ''
            localStorage.removeItem('token')
            history.go(0)
        },*/
        /*setToken(token) {
            this.status.ACCESS_TOKEN = token
            setLocal('token', this.status, 1000 * 60 * 60)
        },*/
        setRoutes(data) {
            this.menubar.menuList = data
        },
        /*concatAllowRoutes() {
            allowRouter.reverse().forEach(v => this.menubar.menuList.unshift(v))
        },*/
        // 修改主题
        /*changeTheme(num) {
            if(num === this.setting.theme) return
            if(typeof num !== 'number') num = this.setting.theme
            this.setting.theme = num
            localStorage.setItem('setting', JSON.stringify(this.setting))
        },
        // 修改主题色
        changeThemeColor(color) {
            this.setting.color.primary = color
            localStorage.setItem('setting', JSON.stringify(this.setting))
        },*/
        changeTagsSetting({ commit, state },showTags) {
            state.setting.showTags = showTags
            localStorage.setItem('setting', JSON.stringify(this.setting))

            if(showTags) {
                const index = state.tags.tagsList.findIndex(v => v.path === router.currentRoute.value.path)
                if(index !== -1) {
                    state.tags.tagsList.forEach(v => v.isActive = false)
                    state.tags.tagsList[index].isActive = true
                }else{
                    this.changeTagNavList(router.currentRoute.value)
                }
            }
        },
        changePinSearchSetting({ commit, state },showPinyinSearch) {
            state.setting.usePinyinSearch = showPinyinSearch
            localStorage.setItem('setting', JSON.stringify(state.setting))
        },
        // 下次进去该页面刷新该页面(解决子页面保存之后，回到父页面页面不刷新问题)
        refreshPage({ commit, state },path) {
            const name = state.tags.tagsList.filter(v => v.path === path)[0]?.name
            if(!name) return
            const index = state.tags.cachedViews.findIndex(v => v === name)
            state.tags.cachedViews.splice(index, 1)
        },
        changemenubarMode({ commit, state },mode) {
            state.setting.mode = mode
            localStorage.setItem('setting', JSON.stringify(state.setting))
        },
        /*async login(param) {
            const res = await login(param)
            const token = res.data.Data
            this.status.ACCESS_TOKEN = token
            setLocal('token', this.status, 1000 * 60 * 60)
            const { query } = router.currentRoute.value
            router.push(typeof query.from === 'string' ? decode(query.from) : '/')
        },*/
        /*async GenerateRoutes() {
            const res = await getRouterList()
            const { Data } = res.data
            generatorDynamicRouter(Data)
        }*/
    }
}
