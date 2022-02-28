// 配置国际化配置

import enLocale from 'element-plus/lib/locale/lang/en'
import zhLocale from 'element-plus/lib/locale/lang/zh-cn'

// 菜单配置
export const menusConfig = {
    zh: {
        message:{
            hshome: "首页"
        }
    },
    en:{
        message: {
            hshome: "Home"
        }
    }
}

// 按钮配置
export const buttonConfig = {
    zh: {
        message:{
            hsløgin: "登录"
        }
    },
    en:{
        message: {
            hsløgin: "login"
        }
    }
}


const localesList = [menusConfig,buttonConfig];

export const localesConfigs = {
    zh:{
        message: Object.assign({},...localesList.map((v)=> v.zh.message)),
        ...zhLocale
    },
    en:{
        message: Object.assign({},...localesList.map((v)=> v.en.message)),
        ...enLocale
    }
}

console.log(localesConfigs)
