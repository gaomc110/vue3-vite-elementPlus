<template>
    <div class='layout flex h-screen'>
        <div class='layout-sidebar-mask fixed w-screen h-screen bg-black bg-opacity-25 z-20' :class='{"hidden": Menubar.status !== 2 }' @click='changeCollapsed' />
        <div
                v-if='setting.mode === "vertical" || Menubar.isPhone'
                class='layout-sidebar flex flex-col h-screen transition-width duration-200 shadow'
                :class='{
                "w-64": Menubar.status === 0 || Menubar.status === 2,
                "w-0": Menubar.status === 3,
                "w-16": Menubar.status === 1,
                "absolute z-30": Menubar.status === 2 || Menubar.status === 3,
            }'
        >
            <div class='layout-sidebar-logo flex h-12 relative flex-center shadow-lg'>
                <img class='w-8 h-8' :src='icon'>
                <span v-if='Menubar.status === 0 || Menubar.status === 2' class='pl-2'>信息系统</span>
            </div>
            <div class='layout-sidebar-menubar flex flex-1 overflow-hidden'>
                <el-scrollbar wrap-class='scrollbar-wrapper'>
                    <layout-menubar />
                </el-scrollbar>
            </div>
        </div>
        <div class='layout-main flex flex-1 flex-col overflow-x-hidden overflow-y-auto'>
            <div class='layout-main-navbar flex justify-between items-center h-12 shadow-sm overflow-hidden relative z-10'>
                <layout-navbar />
            </div>
            <!--<div
                    v-if='setting.showTags'
                    class='layout-main-tags h-8 leading-8 text-sm text-gray-600 relative'
            >
               <layout-tags />
            </div>-->
            <div class='layout-main-content flex-1 overflow-hidden'>
                <layout-content />
            </div>
        </div>
        <div class='layout-sidebar-sidesetting fixed right-0 top-64 z-10'>
            <layout-side-setting />
        </div>
    </div>
</template>

<script>
    import { defineComponent, onMounted, reactive,computed,toRefs } from 'vue'
    import { useStore } from 'vuex'
    import LayoutContent from './components/content.vue'
    import LayoutMenubar from './components/menubar.vue'
    import LayoutNavbar from './components/navbar.vue'
    //import LayoutTags from './components/tags.vue'
    import LayoutSideSetting from './components/sideSetting.vue'
    import { throttle } from '@/utils/tools'
    import icon from '@/assets/images/icon.png'

    export default defineComponent ({
        name: 'Layout',
        components: {
            LayoutContent,
            LayoutMenubar,
            LayoutNavbar,
            //LayoutTags,
            LayoutSideSetting
        },
        setup() {
            const store = useStore();

            onMounted(async() => {
                store.dispatch("permission/changeDeviceWidth");
                const throttleFn = throttle(300)
                let throttleF = async function() {
                    await throttleFn()
                    store.dispatch("permission/changeDeviceWidth");
                }
                window.addEventListener('resize', throttleF, true)
            })

            const data = reactive({
                Menubar: computed(()=> store.getters['permission/getMenubar']),
                setting: computed(()=> store.getters['permission/getSetting'])
            })
            console.log(data)

            //const Menubar = computed(()=> store.getters['permission/getMenubar'])
            //const setting = computed(()=> store.getters['permission/getSetting'])


            const changeCollapsed = () =>{
                store.dispatch("permission/changeCollapsed");
            }

            return {
                //Menubar: Menubar,
                //setting: setting,
                ...toRefs(data),
                changeCollapsed,
                icon
            }
        }
    })
</script>

<style lang='postcss' scoped>
    ::v-deep(.layout-sidebar-sidesetting .el-drawer__header) {
        margin-bottom: 0;
    }

    ::v-deep(.el-menu--horizontal>.el-menu-item) {
        height: 48px;
    }

    ::v-deep(.el-menu--horizontal>.el-sub-menu .el-sub-menu__title) {
        height: 48px;
        line-height: 48px;
    }
</style>
