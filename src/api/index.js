import http from '../utils/http'
import store from '../store/index'

// 根据权限请求
export function fetchPermission(){
    return http.get('/api/permission?UserRole='+ store.state.users.UserData.role)
}

export function login(user){
    return http.get('/api/login?account='+user.account+'&password='+user.password)
}
