import{_ as e,l as s}from"./index-95fa0fb7.js";import{B as a,u as l,r as t,h as r,f as o,o as u,p as n,s as m,C as i,D as c,F as d,b as p,G as b,H as f,I as g}from"./vendor-ad157f17.js";const w={setup(e,o){const u=a(),n=l(),m=t(null),i=t("");let c=r({account:"",password:""});const b=r({account:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}),f=async()=>{const e=d(m);if(e)try{if(!(await e.validate()))return;let a=await s(c),l=a.token,t=a.userInfo;n.commit("users/setUserToken",l),n.commit("users/setUserData",t),u.replace("/"),p({title:"欢迎",message:"欢迎回来",type:"success"})}catch(a){}};return{ruleFormRef:m,formSize:i,ruleForm:c,rules:b,enterSubmit:e=>{"Enter"===e.key&&f()},submitForm:f}}},y=e=>(b("data-v-0b0b65a6"),e=e(),f(),e),x={class:"w-screen h-screen bg-gray-800"},F=y((()=>m("h3",{class:"text-2xl font-semibold text-gray-100 text-center mb-6"},"系统登陆",-1))),v=g("登录"),_={class:"flex justify-between"},k=y((()=>m("div",{class:"text-gray-300"},[m("p",{class:"leading-6 text-sm"},[m("span",{class:"w-24 inline-block"},"账号: admin"),g(" 密码: 1234")]),m("p",{class:"leading-6 text-sm"},[m("span",{class:"w-24 inline-block"},"账号: vip"),g(" 密码: 1234")]),m("p",{class:"leading-6 text-sm"},[m("span",{class:"w-24 inline-block"},"账号: test"),g(" 密码: 1234")])],-1))),h=g("第三方登录");var V=e(w,[["render",function(e,s,a,l,t,r){const d=o("el-input"),p=o("el-form-item"),b=o("el-button"),f=o("el-form");return u(),n("div",x,[m("div",{class:"layout-login",onKeyup:s[3]||(s[3]=(...e)=>l.enterSubmit&&l.enterSubmit(...e))},[F,i(f,{ref:"ruleFormRef",model:l.ruleForm,rules:l.rules,"label-position":"right","label-width":"80px",class:"demo-ruleForm",size:l.formSize},{default:c((()=>[i(p,{class:"mb-6 -ml-20",label:"账号",prop:"account"},{default:c((()=>[i(d,{modelValue:l.ruleForm.account,"onUpdate:modelValue":s[0]||(s[0]=e=>l.ruleForm.account=e)},null,8,["modelValue"])])),_:1}),i(p,{class:"mb-6 -ml-20",label:"密码",prop:"password"},{default:c((()=>[i(d,{modelValue:l.ruleForm.password,"onUpdate:modelValue":s[1]||(s[1]=e=>l.ruleForm.password=e)},null,8,["modelValue"])])),_:1}),i(p,{class:"mb-6 -ml-20"},{default:c((()=>[i(b,{class:"w-full",type:"primary",onClick:s[2]||(s[2]=e=>l.submitForm())},{default:c((()=>[v])),_:1})])),_:1}),m("div",_,[k,m("div",null,[i(b,{type:"primary"},{default:c((()=>[h])),_:1})])])])),_:1},8,["model","rules","size"])],32)])}],["__scopeId","data-v-0b0b65a6"]]);export{V as default};