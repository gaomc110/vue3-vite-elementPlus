<template>
    <div class='content'>
        <a href='https://github.com/hsiangleev/element-plus-admin' class='absolute right-0 top-0 z-10'>
            <img width='149' height='149' src='https://layuiextend.hsianglee.cn/layui/images/forkme_right_red_aa0000.png' class='attachment-full size-full' alt='Fork me on GitHub' data-recalc-dims='1'>
        </a>
        <el-card class='mb-2' shadow='hover'>
            <div class='py-4 font-bold'>工作台</div>
            <el-row>
                <el-col :xs='24' :md='16'>
                    <div class='flex items-center'>
                        <div class='pr-4 flex items-center'>
                            <el-avatar class='w-16 h-16' src='https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' />
                        </div>
                        <div>
                            <div class='text-xl'>你好，{{ UserInfo.name }} ，祝你开心每一天！</div>
                            <div class='text-sm text-gray-400 pt-2'>欢迎登录我们的平台</div>
                        </div>
                    </div>
                </el-col>
                <el-col :xs='24' :md='8'>
                    <div class='flex items-center flex-row-reverse'>
                        <div class='px-1 text-center'>
                            <div class='text-sm text-gray-400 pb-2'>访问量</div>
                            <div class='text-xl'>3,344</div>
                        </div>
                        <el-divider direction='vertical' class='h-8' />
                        <div class='px-1 text-center'>
                            <div class='text-sm text-gray-400 pb-2'>排名</div>
                            <div class='text-xl'>1/100</div>
                        </div>
                        <el-divider direction='vertical' class='h-8' />
                        <div class='px-1 text-center'>
                            <div class='text-sm text-gray-400 pb-2'>项目数量</div>
                            <div class='text-xl'>100</div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-card>

        <el-row :gutter='15'>
            <el-col :md='24' :lg='16'>
                sdf
            </el-col>

            <el-col :md='24' :lg='8'>
                3423

            </el-col>
        </el-row>
    </div>
</template>

<script>
    import { defineComponent,computed } from 'vue'
    import { useStore  } from 'vuex'
    export default defineComponent({
        name: 'home',
        components: {
        },
        setup() {
            const store = useStore()

            const UserInfo = computed(()=> store.state.users.UserData)
            console.log(UserInfo)

            return {
                UserInfo
            }
        }
    })
</script>
