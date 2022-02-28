<template>
    <el-sub-menu v-if='menuList.children && menuList.children.length > 0' :key='menuList.name' :index='menuList.name'>
        <template #title>
            <i class="iconfont" :class='menuList.meta.icon || "el-icon-location"' />
            <span>{{ menuList.meta.name }}</span>
        </template>
        <el-menu-item-group>
            <menubar-item v-for='v in menuList.children' :key='v.name' :index='v.name' :menu-list='v' />
        </el-menu-item-group>
    </el-sub-menu>

    <el-menu-item
        v-else
        :key='menuList.name'
        :index='menuList.name'
    >
        <i class="iconfont" :class='menuList.meta.icon || "el-icon-setting"' />
        <template #title>
            {{ menuList.meta.name }}
        </template>
    </el-menu-item>
</template>

<script>
import { defineComponent } from 'vue'
//import { IMenubarList } from '/@/type/store/layout'

export default defineComponent({
    name: 'MenubarItem',
    props: {
        menuList: {
            type: Object,
            default: () => {return {}}
        }
    },
    setup() {
        return {}
    }
})
</script>
