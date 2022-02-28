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

export default {
    namespaced:true,
    state: {
        permissionList:null, // 所有路由
        menubar: {
            status: document.body.offsetWidth < 768 ? 3 : 0,
            menuList: [], //导航菜单
            isPhone: document.body.offsetWidth < 768
        },
        // 标签栏
        tags: {
            tagsList: [],
            cachedViews: []
        },
        // 主题布局和样式
        setting: {
            theme: setting.theme !== undefined ? setting.theme : 0,
            showTags: setting.showTags !== undefined ? setting.showTags : true,
            color: {
                primary: setting.color !== undefined ? setting.color.primary : '#409eff'
            },
            usePinyinSearch: setting.usePinyinSearch !== undefined ? setting.usePinyinSearch : false,
            mode: setting.mode || 'vertical'
        },
        /*status: {
            isLoading: false,
        }*/
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
            let MainContainer = DynamicRoutes.find(v => v.path === '')
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

            // 合并初始化路由和过滤处理的所有权限路由得出的整体路由菜单
            commit("setPermission",[...initialRoutes,...DynamicRoutes])
        },
        changeCollapsed({commit,state}) {
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
        setRoutes({commit,state},data) {
            state.menubar.menuList = data
        },

        // 修改主题
        changeTheme({commit,state},num) {
            if(num === state.setting.theme) return
            if(typeof num !== 'number') num = state.setting.theme
            state.setting.theme = num
            localStorage.setItem('setting', JSON.stringify(state.setting))
        },
        // 修改主题色
        changeThemeColor({commit,state},color) {
            state.setting.color.primary = color
            localStorage.setItem('setting', JSON.stringify(state.setting))
        },
        changemenubarMode({commit,state},mode){
            state.setting.mode = mode
            localStorage.setItem('setting', JSON.stringify(state.setting))
        },
    }
}
