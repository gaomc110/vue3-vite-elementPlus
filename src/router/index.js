import { createRouter, createWebHistory } from 'vue-router'
import { configure, start, done } from 'nprogress'
import store from '../store/index'
//import permission from "../store/modules/permission";

// 初始化路由
/*const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/index')
    },
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home/index')
    }
]*/

// 仅做示例，根据业务修改路径等
const Login = () => import('../views/login/index.vue')

const routes = [
    {
        path: '/login',
        component: Login,
        name: 'Login',
        meta: { name: '登录', icon: 'el-icon-eleme', hidden: true }
    }
]

/**
 * 根据用户的权限不同，所能看到的页面和可操作性页不同
 * admin -> 所有页面都可以看
 * vip -> 属于vip权限
 * svip -> 更多vip的权限
 *
 * 用addRouter的方式添加
 */

// 准备动态加载的路由
export const DynamicRoutes = [
    {
        path:"",
        component:() => import('../views/layout/index.vue'),
        name:'layout',
        redirect:"home",
        meta:{
            requiresAuth: true,
            name:"首页"
        },
        children:[
            {
                path:'home',
                component:() => import('../views/home/index.vue'),
                name:'home',
                meta: {
                    //配置规则
                    name:'首页',
                    icon:'icon-gailan'
                }
            }
        ]
    },
    {
        path:'/401',
        name:'401',
        component:() => import('../views/ErrorPage/401.vue'),
         meta: { title: '401', icon: 'el-icon-s-tools' }
    },
    {
        path:'/404',
        component:() => import('../views/ErrorPage/404.vue'),
        meta: { title: '404', icon: 'el-icon-s-tools' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

configure({ showSpinner: false })

router.beforeEach((to,from,next)=>{
    start()
    // 修改页面title
    const reg = new RegExp(/^(.+)(\s\|\s.+)$/)
    const appTitle = import.meta.env.VITE_APP_TITLE
    document.title = !to.meta.name
        ? appTitle
        : appTitle.match(reg)
            ? appTitle.replace(reg, `${to.meta.name}$2`)
            : `${to.meta.name} | ${appTitle}`

    if(!store.state.users.UserToken){
        //未登录 页面是否需要登录
        if(to.matched.length >0 && !to.matched.some(record => record.meta.requiresAuth)){
            next();
        } else {
            next({
                path:'/login'
            })
        }
    } else {
        // 用户已经登录 路由的访问权限
        if(!store.state.permission.permissionList){
            store.dispatch("permission/FECTH_PERMISSION").then(()=>{
                console.log(to.path)
                next({
                    path:to.path
                })
            })
        }else{
            //store存在权限
            if(to.path !== '/login'){
                next()
            } else {
                next(from.fullPath)
                console.log(3)
            }
        }
    }
})

router.afterEach(() => {
    done()
})

export default router
