<template>
    <el-scrollbar>
    <router-view></router-view>
        <el-backtop target='.layout-main-content>.el-scrollbar>.el-scrollbar__wrap' :bottom='15' :right='15'>
            <div><i class='iconfont icon-fanhuidingbu text-3xl' /></div>
        </el-backtop>
    </el-scrollbar>
    <!--<el-scrollbar>
        <router-view v-slot='{ Component }'>
            <transition name='fade-transform' mode='out-in'>
                <keep-alive :include='setting.showTags ? "" : []'>
                    <component :is='Component' :key='key' class='page m-3 relative' />
                </keep-alive>
            </transition>
        </router-view>
        <el-backtop target='.layout-main-content>.el-scrollbar>.el-scrollbar__wrap' :bottom='15' :right='15'>
            <div><i class='el-icon-caret-top' /></div>
        </el-backtop>
    </el-scrollbar>-->
</template>

<script>
import { defineComponent, reactive, watch,computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent ({
    name: 'LayoutContent',
    setup() {
       /* const route = useRoute()
        const store = useStore()

        const Tags = computed(()=> store.getters['permission/getTags'])
        console.log(Tags)
        const setting = computed(()=> store.getters['permission/getSetting'])
        console.log(setting)
        const key = computed(() => route.path)
        console.log(key)

        let data = reactive({
            cachedViews: [...Tags.value.cachedViews]
        })
        // keep-alive的include重新赋值，解决bug https://github.com/vuejs/vue-next/issues/2550
        watch(
            () => Tags.value.cachedViews.length,
            () => data.cachedViews = [...Tags.value.cachedViews]
        )
        return {
            key,
            data,
            setting
        }*/
    }
})
</script>

<style lang='scss' scoped>

::v-deep(.el-card) {
    overflow: visible;
}

/* ::v-deep(.el-scrollbar__view) {
    height: 100%;
} */

.fade-transform-leave-active,
.fade-transform-enter-active {
    transition: all 0.5s;
}

.fade-transform-enter-from {
    opacity: 0;
    transform: translateX(-30px);
}

.fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
