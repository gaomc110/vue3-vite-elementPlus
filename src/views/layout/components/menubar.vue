<template>
    <el-menu
        :mode='Menubar.isPhone ? "vertical" : setting.mode'
        :default-active='activeMenu'
        :collapse='Menubar.status === 1 || Menubar.status === 3'
        :class='{
            "el-menu-vertical-demo": true,
            "w-64": Menubar.status === 0 || Menubar.status === 2,
            "w-0": Menubar.status === 3,
            "w-16": Menubar.status === 1,
            "w-full": setting.mode === "horizontal" && !Menubar.isPhone,
        }'
        :collapse-transition='false'
        :unique-opened='true'
        @select='onOpenChange'
    >
        <menubar-item v-for='v in Menubar.menuList' :key='v.name' :index='v.name' :menu-list='v' />
    </el-menu>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import MenubarItem from './menubarItem.vue'
/*import { IMenubarList } from '/@/type/store/layout'
import { useLayoutStore } from '/@/store/modules/layout'*/

// 过滤隐藏的菜单，并提取单条的子菜单
/*const filterMenubar = (menuList:IMenubarList[]) => {
    const f = (menuList:IMenubarList[]) => {
        let arr:IMenubarList[] = []
        menuList.filter(v => !v.meta.hidden).forEach(v => {
            let child = v.children && v.children.filter(v => !v.meta.hidden)
            let currentItem = v
            if(!v.meta.alwaysShow && child && child.length === 1) {
                [currentItem] = child
            }
            arr.push(currentItem)
            if(currentItem.children && currentItem.children.length > 0) {
                arr[arr.length - 1].children = f(currentItem.children)
            }
        })
        return arr
    }
    return f(menuList)
}*/

export default defineComponent ({
    name: 'LayoutMenubar',
    components: {
        MenubarItem
    },
    setup() {
        const store = useStore()
        const route = useRoute()
        const router = useRouter()

        const Menubar = computed(()=> store.getters['permission/getMenubar'])
        const setting = computed(()=> store.getters['permission/getSetting'])

        const activeMenu = computed(() => {
            console.log(route)
            //if(route.meta.activeMenu) return route.meta.activeMenu
            return route.name
        })
        const onOpenChange = (d) => {
            console.log(d)
            router.push({ name: d })
            console.log(Menubar)
            Menubar.status === 2 && store.dispatch("permission/changeCollapsed")
        }
        return {
            Menubar,
            setting,
            activeMenu,
            onOpenChange
        }
    }
})
</script>
