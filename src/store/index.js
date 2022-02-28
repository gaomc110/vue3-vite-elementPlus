import { createStore } from 'vuex'
//vuex持久化插件：vuex-persistedstate这个插件就是让你的vuex的数据能保存到浏览器，解决刷新页面vuex数据丢失的问题
//默认存储到localStorage
//import createPersistedState from "vuex-persistedstate"

// 创建一个新的 store 实例
const initModule = () => {
    /**
     * 注意点
     * 自动引入模块时由于打包工具的不同，需要修改获取，模块的方式，下面放一下不同点
     * @type {Record<string, {[p: string]: any}>}
     */
    // webpack引入模块
    //const requireModules = require.context("./modules",true, /\.js$/)
    //vite引入模块 ---- 获取modules文件夹内所有的模块
    const requireModules = import.meta.globEager("./modules/*.js")

    const modules = {}
    for (let i in requireModules) {
        // 将模块路径切割出模块名
        const moduleName = i
            .split("/")
            [i.split("/").length - 1].replace(".js", "")
        // 将模块放入modules
        modules[moduleName] = requireModules[i].default
    }
    return modules
}

export default createStore({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: { ...initModule() },
    plugins: [
        //createPersistedState(),
    ]
})
