<template>
    <i class='iconfont icon-xitongshezhi text-2xl px-2 py-1 cursor-pointer rounded-l-md' @click='drawer=!drawer' />
    <el-drawer v-model='drawer' title='系统布局配置' size='280px'>
        <div class='pt-4'>
            <p class='py-2'>整体风格设置</p>
            <el-row :gutter='20'>
                <el-col v-for='(val,index) in theme' :key='index' :span='8'>
                    <div class='flex shadow-lg border border-gray-100 w-18 cursor-pointer m-1' @click='changeTheme(index)'>
                        <div class='flex flex-col w-4 h-12'>
                            <div class='h-3' :style='{"backgroundColor": (val.logoBg || val.sidebarBg)}' />
                            <div class='flex-1' :style='{"backgroundColor": val.sidebarBg}' />
                        </div>
                        <div class='flex flex-col flex-1'>
                            <div class='h-3' :style='{"backgroundColor": val.navbarBg || "#fff"}' />
                            <div v-if='setting.showTags' class='h-2' :style='{"backgroundColor": val.tagsBg || "#fff"}' />
                            <div class='flex-1 relative' :style='{"backgroundColor": val.mainBg}'>
                                <i v-if='setting.theme===index' class='iconfont icon-duihao absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4' :style='{"color": setting.color.primary}' />
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>

            <p class='py-2'>导航模式</p>
            <el-row :gutter='20'>
                <el-col :span='8'>
                    <div class='flex shadow-lg border border-gray-100 w-18 cursor-pointer m-1' @click='changemenubarMode("vertical")'>
                        <div class='flex flex-col w-4 h-12' :style='{"backgroundColor": (theme[setting.theme].logoBg || theme[setting.theme].sidebarBg)}' />
                        <div class='flex flex-col flex-1'>
                            <div class='h-3' :style='{"backgroundColor": theme[setting.theme].tagsBg || "#fff"}' />
                            <div class='flex-1 relative' :style='{"backgroundColor": theme[setting.theme].mainBg}'>
                                <i v-if='setting.mode === "vertical"' class='iconfont icon-duihao absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4' :style='{"color": setting.color.primary}' />
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span='8'>
                    <div class='flex flex-col shadow-lg border border-gray-100 w-18 cursor-pointer m-1 h-12' @click='changemenubarMode("horizontal")'>
                        <div class='flex flex-col h-4' :style='{"backgroundColor": (theme[setting.theme].logoBg || theme[setting.theme].sidebarBg)}' />
                        <div class='flex flex-col flex-1'>
                            <div class='flex-1 relative' :style='{"backgroundColor": theme[setting.theme].mainBg}'>
                                <i v-if='setting.mode === "horizontal"' class='iconfont icon-duihao absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4' :style='{"color": setting.color.primary}' />
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>

            <div class='mt-5 text-sm'>
                <!--<div class='flex justify-between items-center py-1'>
                    <div>开启 Tags-View</div>
                    <el-switch v-model='showTags' />
                </div>-->
                <div class='flex justify-between items-center py-1'>
                    <div>主题色</div>
                    <layout-theme />
                </div>
                <!--<div class='flex justify-between items-center py-1'>
                    <div>菜单支持拼音搜索</div>
                    <el-switch v-model='showPinyinSearch' />
                </div>-->
            </div>
        </div>
    </el-drawer>
</template>

<script>
import { ref, defineComponent, watch,computed } from 'vue'
import { useStore } from 'vuex'
import theme from '@/config/theme'
import LayoutTheme from './theme.vue'

export default defineComponent ({
    name: 'LayoutSideSetting',
    components: {
        LayoutTheme
    },
    setup() {
        //const { changeTheme, getSetting, changeTagsSetting, changePinSearchSetting, changemenubarMode } = useLayoutStore()
        const store = useStore()
        const drawer = ref(false)

        const setting = computed(()=> store.getters['permission/getSetting'])
        console.log(setting)

        const showTags = ref(setting.showTags)
        const showPinyinSearch = ref(setting.usePinyinSearch)

        // 整体风格
        const changeTheme = (index) =>{
            store.dispatch('permission/changeTheme',index)
        }

        //watch(() => showTags.value, () => changeTagsSetting(showTags.value))
        //watch(() => showPinyinSearch.value, () => changePinSearchSetting(showPinyinSearch.value))

        const changemenubarMode = (v) =>{
             store.dispatch('permission/changemenubarMode',v)
        }

        return {
            drawer,
            theme: theme(),
            changeTheme,
            setting,
            showTags,
            showPinyinSearch,
            changemenubarMode
        }
    }
})
</script>
