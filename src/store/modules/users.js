/**
 * gaomingcong
 * 20220207
 * 主要存放token和用户等全局信息
 * @type {{mutations: {loginout: users.mutations.loginout, setTokenData: users.mutations.setTokenData, setUserData: users.mutations.setUserData}, state: (function(): {userData: {}, token: string})}}
 */

export default {
  namespaced:true,
  state: () => ({
    UserData: localStorage.getItem("UserData")
      ? JSON.parse(localStorage.getItem("UserData"))
      : {},
    UserToken: localStorage.getItem("UserToken")
      ? localStorage.getItem("UserToken")
      : '',
  }),
  mutations: {
    // 获取用户名
    setUserData: (state, data) => {
      state.UserData = data;
      localStorage.setItem("UserData", JSON.stringify(data));
    },
    //将token保存到sessionStorage里，token表示登陆状态
    setUserToken: (state, data) => {
      state.UserToken = data;
      localStorage.setItem("UserToken", data);
    },
    // 登出
    loginOut: (state) => {
      // 登出的时候要清除token
      state.UserToken = ''
      state.UserData = {}
      window.localStorage.removeItem('UserToken')
      window.localStorage.removeItem('UserData')
    }
  },
  actions:{
    async getUser({ commit, state }) {
      /*const res = await getUser()
      const userInfo = res.data.Data
      this.userInfo.name = userInfo.name
      this.userInfo.role = userInfo.role*/
    },
    logout({ commit, state }) {
      state.UserToken = ''
      state.UserData = {}
      localStorage.removeItem('UserToken')
      window.localStorage.removeItem('UserData')
      history.go(0)
    },
  }
};
