<template>
<div class='w-screen h-screen bg-gray-800'>
    <div class='layout-login' @keyup='enterSubmit'>
        <h3 class='text-2xl font-semibold text-gray-100 text-center mb-6'>系统登陆</h3>
         <el-form
                 ref="ruleFormRef"
                 :model="ruleForm"
                 :rules="rules"
                 label-position='right'
                 label-width="80px"
                 class="demo-ruleForm"
                 :size="formSize"
         >
             <el-form-item class='mb-6 -ml-20' label="账号" prop="account">
                 <el-input v-model="ruleForm.account"></el-input>
             </el-form-item>
             <el-form-item class='mb-6 -ml-20' label="密码" prop="password">
                 <el-input v-model="ruleForm.password"></el-input>
             </el-form-item>
             <el-form-item class='mb-6 -ml-20'>
                 <el-button class='w-full' type="primary" @click="submitForm()"
                 >登录</el-button
                 >
             </el-form-item>
             <div class='flex justify-between'>
                 <div class='text-gray-300'>
                     <p class='leading-6 text-sm'><span class='w-24 inline-block'>账号: admin</span> 密码: 1234</p>
                     <p class='leading-6 text-sm'><span class='w-24 inline-block'>账号: vip</span> 密码: 1234</p>
                     <p class='leading-6 text-sm'><span class='w-24 inline-block'>账号: test</span> 密码: 1234</p>
                 </div>
                 <div><el-button type='primary'>第三方登录</el-button></div>
             </div>
         </el-form>
     </div>
</div>
</template>

<script>
    import { login } from '@/api'
    import { unref,ref,reactive } from 'vue'
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';
    import { ElNotification } from 'element-plus'
    export default {
        setup(props,context){
            const router = useRouter()
            const store = useStore()

            const ruleFormRef = ref(null);

            const enterSubmit = (e) => {
                if(e.key === 'Enter') {
                    console.log(1)
                    submitForm()
                }
            }

            const formSize = ref('')
            let ruleForm = reactive({
                  account:'',
                  password:''
            })
            // 校验
            const rules = reactive({
                account: [
                    {
                        required: true,
                        message: '请输入账号',
                        trigger: 'blur',
                    }
                ],
                password: [
                    {
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur',
                    }
                ]
            })

            const submitForm = async () => {
                const form = unref(ruleFormRef);
                if (!form) return
                try {
                    //const { account, password } = ruleForm
                    if(!await form.validate()) return
                    //console.log(account, password)

                    let data = await login(ruleForm)
                    //console.log(data)
                    let token = data.token;
                    let UserInfo = data.userInfo;
                    // 本地存储 或者vuex
                    /*console.log(token)
                    console.log(UserInfo)
                    console.log(store)*/

                    store.commit('users/setUserToken',token)
                    store.commit('users/setUserData',UserInfo)
                    console.log(store)
                    router.replace('/')
                    ElNotification({
                        title: '欢迎',
                        message: '欢迎回来',
                        type: 'success'
                    })


                } catch (error) {
                }
            }

            return {
              ruleFormRef,
              formSize,
              ruleForm,
              rules,
              enterSubmit,
              submitForm
            }
        }
    }
</script>

<style lang="scss" scoped>
    .layout-login {
        padding-top: 200px;
        width: 400px;
        margin: 0 auto;

        ::v-deep(.el-input__inner) {
            border: 1px solid hsla(0, 0%, 100%, 0.1);
            background: rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            color: #ddd;
        }
    }
</style>
