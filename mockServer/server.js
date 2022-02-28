const express = require('express')
const app = express()
const vipLogin = require('./data/vip_login')
const adminLogin = require('./data/admin_login')

const vip_permission = require('./data/vip_permission.json')
const admin_permission = require('./data/admin_permission.json')
const url = require('url')

app.get('/login', function (req, res) {
    /*res.end(`好好学习天天向上`)*/

    const userInfo = url.parse(req.url,true).query;
    console.log(userInfo)
    if(userInfo.account=='admin' && userInfo.password == '1234'){
        res.send(adminLogin)
    } else if(userInfo.account=='vip' && userInfo.password == '1234'){
        res.send(vipLogin)
    } else {
        res.send({
            "code":1,
            "message": "用户名或者密码错误",
            "data":{}
        })
    }
})

app.get('/permission', function (req, res) {
    const UserRole = url.parse(req.url,true).query.UserRole;

    console.log(UserRole)
    if(UserRole=='1'){
        res.send(admin_permission)
    } else if(UserRole=='2'){
        res.send(vip_permission)
    } else {
        res.send({
            "code":1,
            "message": "加载失败",
            "data":{}
        })
    }
})

app.listen(3300, () => {
    console.log(`服务器3300起好了`)
})
