<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button type="button" name="button" v-on:click="getmsg">send</el-button>
    <el-button type="button" name="button" v-on:click="postmsg">send</el-button>
    <el-button type="button" name="button" v-on:click="postlogin">登录</el-button>
    <el-button type="button" name="button" v-on:click="getuserinfo">获取用户信息</el-button>
    <el-button type="button" name="button" v-on:click="getTableData">获取表格信息</el-button>
    <el-button type="button" name="button" v-on:click="getLeftTree">获取左侧树信息getLeftTree</el-button>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: '测试接口信息',
        loginForm: {
          forceLogin: true,
          userName: "001001", // 用户名
          password: "1", // 密码
          year: "2021" // 年份
        },
        token:''
      }
    },
    methods: {
      getmsg () {
        this.$axios.get('/nodeapi/request?dong=123').then(function (res) {
          console.log('res=', res)
        })
      },
      postmsg () {
        this.$axios.post('/nodeapi/postrequest', {name: '123'}).then(function (res) {
          console.log('post res = ', res)
        })
      },
      postlogin() {
        let _that = this;
        this.$axios.post('/nodeapi/users/login',this.loginForm).then(function (res) {
          console.log('登陆', res)
          console.log(res.data.token)
          _that.token = res.data.token;
          _that.$store.commit("setTokenData", res.data.token);
          _that.getuserinfo()
        })
      },
      getuserinfo(){
        let _that = this;
        this.$axios.post('/nodeapi/users/userinfodata',{"token":_that.token}).then(function (res) {
          console.log('获取用户信息', res.data)
          _that.$store.commit("setUserData", res.data.data); //保存用户信息缓存
          //this.$router.push("/mainindex");
        })
      },
      getTableData(){
        let _that = this;
        let congparms = {
          agencys:  ["001001"],
          tablecode: "V_BGT_NTAX_INCOME_PLAN",
          taskguid: "111AD0289F26B51891C5FB0A4B84E907",
          stage: 1,
          tokenid: this.token,
          waitflag: "willaudit",
          nodestatus: "",
          submenu:"bdm004311"
        };
        this.$axios.post('/nodeapi/users/getTableData',congparms).then(function (res) {
          console.log('获取表格信息', res.data)

        })

      },
      getLeftTree(){
        let _that = this;
        let query = {
          submenu: "bdm004311",
          taskguid: "111AD0289F26B51891C5FB0A4B84E907",
          tokenid: this.token,
          waitflag: "willaudit",
          menu: "budgetenter",
          urlwfstatus: null,
          filter: "",
          byappid: "bgt",
          year: 2022
        };
        this.$axios.post('/nodeapi/users/getLeftTree',query).then(function (res) {
          console.log('获取页面头部按钮信息', res.data)

        })

      }
    }
  }
</script>

<style lang="scss" scoped>
  .hello{
    text-align: center;
    h1{
      padding: 40px 0;
    }
  }
</style>
