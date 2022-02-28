<template>
    <div>
        <el-color-picker
            v-model='defaultTheme'
            :predefine='["#409EFF", "#1890ff", "#304156","#212121","#11a983", "#13c2c2", "#6959CD", "#f5222d" ]'
            size='default'
            @change='changeThemeColor'
        />
    </div>
</template>
<script>
import { defineComponent, ref,computed,reactive } from 'vue'
import { useStore } from 'vuex'
import changeThemeColor from '@/utils/changeThemeColor'

export default defineComponent({
    name: 'LayoutTheme',
    setup() {
        const store = useStore()

        const data = reactive({
            setting: computed(()=> store.getters['permission/getSetting'])
        })

        //const setting = computed(()=> store.getters['permission/getSetting'])
        const defaultTheme = ref(data.setting.color.primary)
        return {
            defaultTheme,
            changeThemeColor
        }
    }
})
</script>
