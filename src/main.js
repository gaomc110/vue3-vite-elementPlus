import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import i18n from './plugins/i18n/index'

import  ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//import 'element-plus/theme-chalk/display.css'

import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
VXETable.setup({
    version:0,
    zIndex: 100,
    table:{
        autoResize: true
    },
    // 对组件内置的提示进行国际化翻译
    i18n:(key, args) => i18n.global.t(key,args),
    // 可选，对参数中的列头，校验等提示进行自动翻译
    translate(key, args) {
        if(key && key.indexOf("message.")>-1){
            return i18n.global.t(key,args);
        }
        return key
    }
})


// 字体图标
import "./assets/font/iconfont.css";
// 路由加载效果
import 'nprogress/nprogress.css'
// 全局配置
import './assets/scss/reset.scss';
import "./assets/css/common.css";

import http from './utils/http'

import 'virtual:svg-icons-register';
// 需要全局引入再添加
import svgIcon from './components/SvgIcon/index.vue' // 全局svg图标组件*/

const app = createApp(App)

//全局配置引用axios
app.config.globalProperties.$http = http
app.component('svgIcon', svgIcon)
app.use(i18n)
app.use(ElementPlus)
app.use(VXETable)
app.use(store)
app.use(router)
app.mount('#app')
