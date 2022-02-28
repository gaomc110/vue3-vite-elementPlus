import axios from 'axios'
import store from '../store/index'
//import baseURL from './baseURL'
import { ElLoading, ElNotification } from 'element-plus'

let loading;
const http = {}

const instance = axios.create({
    timeout: 5000
})

// 异常拦截处理器
const errorHandler = (error) => {
    loading.close()
    console.log(`err${error}`)
    ElNotification({
        title: '请求失败',
        message: error.message,
        type: 'error'
    })
    return Promise.reject(error)
}

// 添加请求拦截
instance.interceptors.request.use(
    function (config) {
        loading = ElLoading.service({
            lock: true,
            text: 'Loading',
            background: 'rgba(0, 0, 0, 0.4)'
        })
        // 请求头
        /*if(store.state.UserToken){
            config.headers.Authorization = store.state.UserToken
        }*/
        return config
    },errorHandler)

// 响应拦截器的异常处理
instance.interceptors.response.use(
      response =>{
          loading.close()
          return response.data
      },
      err => {
          loading.close()
          if(err && err.response){
              switch (err.response.status) {
                  case 400:
                      err.message ='请求出错'
                      break;
                  case 401:
                      /*ElMessage({
                          showClose: true,
                          message: '授权是吧，请重新登录',
                          type: 'warning',
                      })*/
                      ElNotification({
                          title,
                          message: '授权是吧，请重新登录',
                          type: 'error'
                      })
                      store.commit('LOGIN_OUT')
                      setTimeout(()=>{
                          window.location.reload()
                      })
                      return
                  case 403:
                      err.message = '拒绝访问'
                      break
                  case 404:
                      err.message = '请求错误，未找到该资源'
                      break
                  case 500:
                      err.message = '服务器段出错'
                      break
              }
          } else {
              err.message = '连接服务器失败'
          }
          ElNotification({
              title,
              message: err.message,
              type: 'error'
          })
          return Promise.reject(err.response)
      }
)


http.get = function (url, options) {
    return new Promise((resolve,reject)=>{
        instance.get(url,options).then(response=>{
            if(response.code === 0){
                resolve(response.data)
            } else {
                /*Message.error({
                    message:response.message
                })*/
                ElMessage({
                    showClose: true,
                    message: response.message,
                    type: 'error',
                })
                reject(response.message)
            }
        }).catch(e=>{
            console.log(e)
        })
    })
}

http.post = function (url,data,options) {
    return new Promise((resolve,reject)=>{
        instance.post(url,data,options).then(response=>{
            if(response.code ===0){
                resolve(response.data)
            } else {
                /*Message.error({
                    message: response.message
                })*/
                ElMessage({
                    showClose: true,
                    message: response.message,
                    type: 'error',
                })
                reject(response.message)
            }
        }).catch(e=>{
            console.log(e)
        })
    })
}

export default http
