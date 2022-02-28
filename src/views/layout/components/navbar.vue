<template>
    <div v-if='setting.mode === "vertical" || Menubar.isPhone' class='flex items-center px-4 flex-wrap h-12 leading-12'>
        <span class='text-2xl cursor-pointer h-12 leading-12' :class='{ "iconfont icon-zhankai1": !Menubar.status, "iconfont icon-shousuo1": Menubar.status }' @click='changeCollapsed' />
        <!-- 面包屑导航 -->
        <div class='px-4'>
            <el-breadcrumb separator='/'>
                <transition-group name='breadcrumb'>
                    <!--很明显 首页 一定是存在的 所以这里直接写死-->
                    <el-breadcrumb-item key='/' :to='{ path: "/" }'>首页</el-breadcrumb-item>
                    <el-breadcrumb-item v-for='v in data.breadcrumbList' :key='v.name' :to='v.path'>{{ v.name }}</el-breadcrumb-item>
                </transition-group>
            </el-breadcrumb>
        </div>
    </div>
    <div v-else class='flex items-center px-4 flex-wrap h-12 flex-1'>
        <div class='layout-sidebar-logo flex relative shadow-lg w-40 leading-12 items-center'>
            <img class='w-6 h-8' :src='icon'>
            <span v-if='Menubar.status === 0 || Menubar.status === 2' class='pl-2'>hsianglee</span>
        </div>
        <div class='layout-sidebar-menubar flex flex-1 overflow-hidden'>
            <!--<layout-menubar />-->
        </div>
    </div>
    <div class='flex items-center flex-row-reverse px-4 min-width-32'>
        <!-- 用户下拉 -->
        <el-dropdown>
            <span class='el-dropdown-link flex flex-center px-2'>
                <el-avatar :size='30' src='https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png' />
                <span class='ml-2'>{{ userInfo.name }}</span>
                <el-icon class="el-icon--right">
                    <arrow-down />
                  </el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>
                        <el-link href='https://github.com/hsiangleev' target='_blank' :underline='false'>个人中心</el-link>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <el-link href='https://github.com/hsiangleev/element-plus-admin' target='_blank' :underline='false'>项目地址</el-link>
                    </el-dropdown-item>
                    <el-dropdown-item divided @click='logout'>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>

        <Notice />
        <Screenfull />
        <!--<Search />-->
    </div>
</template>

<script>
import { defineComponent, reactive, watch,computed,toRefs } from 'vue'
import { useStore } from 'vuex'
import { ArrowDown } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
import Notice from './notice.vue' // 头部信息邮件
import Screenfull from './screenfull.vue'
/*import Search from './components/search.vue'
import LayoutMenubar from '/@/layout/components/menubar.vue'*/
import icon from '@/assets/images/icon.png'

// 面包屑导航
const breadcrumb = (route) => {
    console.log(route)
    const fn = () => {
        const breadcrumbList = []
         const notShowBreadcrumbList = ['home','layout'] // 不显示面包屑的导航 --格式如 ['','']
        //if(route.matched[0] && (notShowBreadcrumbList.includes(route.matched[0].name))) return breadcrumbList

        // 过滤 currentRoute.matched 数组里面有meta.name的item
        let matched = route.matched.filter((item) => item.meta && item.meta.name && !notShowBreadcrumbList.includes(item.name))
        matched.forEach(v => {
            const obj = {
                name: v.meta.name,
                path: v.path
            }
            breadcrumbList.push(obj)
        })
        /*route.matched.forEach(v => {
            const obj = {
                name: v.meta.name,
                path: v.path
            }
            breadcrumbList.push(obj)
        })*/
        return breadcrumbList
    }
    let data = reactive({
        breadcrumbList: fn()
    })
    watch(() => route.path, () => data.breadcrumbList = fn())
    return { data }
}

export default defineComponent ({
    name: 'LayoutNavbar',
    components: {
        ArrowDown,
        Screenfull,
        Notice,
        /*Search,
        LayoutMenubar*/
    },
    setup() {

        const store = useStore();
        const route = useRoute()

        const data = reactive({
            Menubar: computed(()=> store.getters['permission/getMenubar']),
            setting: computed(()=> store.getters['permission/getSetting']),
            userInfo: computed(()=> store.state.users.UserData)
        })

        /*const Menubar = computed(()=> store.getters['permission/getMenubar'])
        const setting = computed(()=> store.getters['permission/getSetting'])
        const userInfo = computed(()=> store.state.users.UserData)*/

        // 收缩切换
        const changeCollapsed = () =>{
            console.log('切换')
            store.dispatch("permission/changeCollapsed");
        }

        const logout = () => {
           store.dispatch('users/logout')
        }

        return {
            /*Menubar: Menubar,
            setting: setting,
            userInfo: userInfo,*/
            ...toRefs(data),
            changeCollapsed,
            logout,
            ...breadcrumb(route),
            icon
        }
    }
})
</script>

<style lang='postcss' scoped>
.breadcrumb-enter-active,
.breadcrumb-leave-active {
    transition: all 0.5s;
}

.breadcrumb-enter-from,
.breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(20px);
}

.breadcrumb-move {
    transition: all 0.5s;
}

.breadcrumb-leave-active {
    position: absolute;
}
</style>
