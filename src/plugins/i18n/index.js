import { createI18n } from 'vue-i18n' //引入vue-i18n组件
import { localesConfigs } from "./config"

// 实例化I18n
const i18n = createI18n({
    locale: "zh", // 初始化配置语言
    fallbackLocale: "zh",
    messages: localesConfigs
})

export default i18n
