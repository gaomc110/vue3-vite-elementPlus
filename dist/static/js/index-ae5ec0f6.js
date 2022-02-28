var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,l,n)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[l]=n,o=(e,t)=>{for(var l in t||(t={}))a.call(t,l)&&r(e,l,t[l]);if(n)for(var l of n(t))s.call(t,l)&&r(e,l,t[l]);return e},c=(e,n)=>t(e,l(n));import{m as i,f as u,o as d,g as m,D as f,C as g,G as p,H as b,s as h,x as y,J as v,p as x,K as w,L as k,I as _,u as C,M,B as L,i as S,N as F,O as E,r as T,P as z,Q as P,b as B,R as j,h as O,t as U,w as I,T as q,q as D}from"./vendor-ad157f17.js";import{_ as N,c as V,t as R,a as A}from"./index-95fa0fb7.js";const W=i({name:"LayoutContent",setup(){}}),$=(e=>(p("data-v-60a28a13"),e=e(),b(),e))((()=>h("div",null,[h("i",{class:"iconfont icon-fanhuidingbu text-3xl"})],-1)));var G=N(W,[["render",function(e,t,l,n,a,s){const r=u("router-view"),o=u("el-backtop"),c=u("el-scrollbar");return d(),m(c,null,{default:f((()=>[g(r),g(o,{target:".layout-main-content>.el-scrollbar>.el-scrollbar__wrap",bottom:15,right:15},{default:f((()=>[$])),_:1})])),_:1})}],["__scopeId","data-v-60a28a13"]]);const H=i({name:"MenubarItem",props:{menuList:{type:Object,default:()=>({})}},setup:()=>({})});var J=N(i({name:"LayoutMenubar",components:{MenubarItem:N(H,[["render",function(e,t,l,n,a,s){const r=u("menubar-item",!0),o=u("el-menu-item-group"),c=u("el-sub-menu"),i=u("el-menu-item");return e.menuList.children&&e.menuList.children.length>0?(d(),m(c,{key:e.menuList.name,index:e.menuList.name},{title:f((()=>[h("i",{class:y(["iconfont",e.menuList.meta.icon||"el-icon-location"])},null,2),h("span",null,v(e.menuList.meta.name),1)])),default:f((()=>[g(o,null,{default:f((()=>[(d(!0),x(k,null,w(e.menuList.children,(e=>(d(),m(r,{key:e.name,index:e.name,"menu-list":e},null,8,["index","menu-list"])))),128))])),_:1})])),_:1},8,["index"])):(d(),m(i,{key:e.menuList.name,index:e.menuList.name},{title:f((()=>[_(v(e.menuList.meta.name),1)])),default:f((()=>[h("i",{class:y(["iconfont",e.menuList.meta.icon||"el-icon-setting"])},null,2)])),_:1},8,["index"]))}]])},setup(){const e=C(),t=M(),l=L(),n=S((()=>e.getters["permission/getMenubar"])),a=S((()=>e.getters["permission/getSetting"])),s=S((()=>t.name));return{Menubar:n,setting:a,activeMenu:s,onOpenChange:t=>{l.push({name:t}),2===n.status&&e.dispatch("permission/changeCollapsed")}}}}),[["render",function(e,t,l,n,a,s){const r=u("menubar-item"),o=u("el-menu");return d(),m(o,{mode:e.Menubar.isPhone?"vertical":e.setting.mode,"default-active":e.activeMenu,collapse:1===e.Menubar.status||3===e.Menubar.status,class:y({"el-menu-vertical-demo":!0,"w-64":0===e.Menubar.status||2===e.Menubar.status,"w-0":3===e.Menubar.status,"w-16":1===e.Menubar.status,"w-full":"horizontal"===e.setting.mode&&!e.Menubar.isPhone}),"collapse-transition":!1,"unique-opened":!0,onSelect:e.onOpenChange},{default:f((()=>[(d(!0),x(k,null,w(e.Menubar.menuList,(e=>(d(),m(r,{key:e.name,index:e.name,"menu-list":e},null,8,["index","menu-list"])))),128))])),_:1},8,["mode","default-active","collapse","class","onSelect"])}]]);const K=i({name:"List",props:{data:{type:Array,default:()=>[]},type:{type:String,default:"default"}},setup:()=>({})}),Q={key:0},X={class:"flex justify-between items-center"},Y={class:"flex items-center"},Z={key:0,class:"mr-4"},ee={class:"text-sm mb-1"},te={key:1,class:"text-sm mb-1"},le={key:2,class:"text-xs text-gray-500"},ne={key:1,class:"component-list-card"},ae={key:0,class:"flex items-center py-1 text-black font-medium"},se={class:"px-4 truncate text-base"},re={class:"py-1 h-16 overflow-ellipsis overflow-hidden leading-6"},oe={class:"text-sm mb-1"},ce={key:1},ie={class:"flex items-center justify-between"};const ue=i({name:"Notice",components:{List:N(K,[["render",function(e,t,l,n,a,s){const r=u("el-avatar"),o=u("el-tag"),c=u("el-link"),i=u("el-col"),p=u("el-row"),b=u("el-card");return d(),x(k,null,["default"===e.type?(d(),x("div",Q,[(d(!0),x(k,null,w(e.data,((t,l)=>(d(),x("div",{key:l,class:"py-2 border-b hover:bg-gray-100"},[h("div",X,[h("div",Y,[t.imgUrl||t.iconClass?(d(),x("div",Z,[t.imgUrl?(d(),m(r,{key:0,size:"large",src:t.imgUrl},null,8,["src"])):F("",!0),t.iconClass?(d(),x("i",{key:1,class:y({"text-3xl":!0,[t.iconClass]:!0})},null,2)):F("",!0)])):F("",!0),h("div",null,[t.href?(d(),m(c,{key:0,type:"primary",underline:!1,href:t.href},{default:f((()=>[h("p",ee,[_(v(t.subTitle)+" ",1),t.tag?(d(),m(o,{key:0},{default:f((()=>[_(v(t.tag),1)])),_:2},1024)):F("",!0)])])),_:2},1032,["href"])):(d(),x("p",te,[_(v(t.subTitle)+" ",1),t.tag?(d(),m(o,{key:0},{default:f((()=>[_(v(t.tag),1)])),_:2},1024)):F("",!0)])),t.time?(d(),x("p",le,v(t.time),1)):F("",!0)])]),E(e.$slots,"default",{item:t},void 0,!0)])])))),128))])):F("",!0),"card"===e.type?(d(),x("div",ne,[g(b,{shadow:"never",class:"mb-2"},{header:f((()=>[E(e.$slots,"header",{},void 0,!0)])),default:f((()=>[g(p,null,{default:f((()=>[(d(!0),x(k,null,w(e.data,((e,t)=>(d(),m(i,{key:t,xs:24,sm:12,md:8,class:"c-list-card-body h-40 text-sm text-gray-400"},{default:f((()=>[e.title?(d(),x("div",ae,[h("div",null,[e.imgUrl?(d(),m(r,{key:0,size:"small",src:e.imgUrl},null,8,["src"])):F("",!0),e.iconClass?(d(),x("i",{key:1,class:y({"text-3xl":!0,[e.iconClass]:!0})},null,2)):F("",!0)]),h("div",se,v(e.title),1)])):F("",!0),h("div",re,[e.href?(d(),m(c,{key:0,type:"primary",underline:!1,href:e.href},{default:f((()=>[h("p",oe,v(e.subTitle),1)])),_:2},1032,["href"])):(d(),x("p",ce,v(e.subTitle),1))]),h("div",ie,[h("div",null,v(e.tag),1),h("div",null,v(e.time),1)])])),_:2},1024)))),128))])),_:1})])),_:3})])):F("",!0)],64)}],["__scopeId","data-v-37bc2a60"]])},setup:()=>({data:[{imgUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",subTitle:"斗通关无际县军连用知政以该果思快领a。",time:"2021/01/28 15:21:32",href:"javascript:;"},{imgUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",subTitle:"斗通关无际县军连用知政以该果思快领a。",time:"2021/01/28 15:21:32"},{imgUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",subTitle:"斗通关无际县军连用知政以该果思快领a。",time:"2021/01/28 15:21:32"},{imgUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",subTitle:"斗通关无际县军连用知政以该果思快领a。",time:"2021/01/28 15:21:32"},{imgUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",subTitle:"斗通关无际县军连用知政以该果思快领a。",time:"2021/01/28 15:21:32"},{imgUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",subTitle:"斗通关无际县军连用知政以该果思快领a。",time:"2021/01/28 15:21:32"}]})}),de=(e=>(p("data-v-8458bf42"),e=e(),b(),e))((()=>h("i",{class:"iconfont icon-lingdang-xianxing text-xl"},null,-1)));var me=N(ue,[["render",function(e,t,l,n,a,s){const r=u("el-badge"),o=u("list"),c=u("el-pagination"),i=u("el-scrollbar"),p=u("el-tab-pane"),b=u("el-tabs"),h=u("el-dropdown-menu"),y=u("el-dropdown");return d(),m(y,{trigger:"click"},{dropdown:f((()=>[g(h,null,{default:f((()=>[g(b,{type:"border-card",class:"notice-tabs z-10"},{default:f((()=>[g(p,{label:"通知",class:"notice-tabs-pane"},{default:f((()=>[g(i,{class:"scrollbar-wrapper"},{default:f((()=>[g(o,{data:e.data},null,8,["data"]),g(c,{layout:"prev, pager, next",total:1e3,"hide-on-single-page":!1,small:"","pager-count":5})])),_:1})])),_:1}),g(p,{label:"关注",class:"notice-tabs-pane"},{default:f((()=>[g(i,{class:"scrollbar-wrapper"},{default:f((()=>[g(o,{data:e.data},null,8,["data"])])),_:1})])),_:1}),g(p,{label:"待办",class:"notice-tabs-pane"},{default:f((()=>[g(i,{class:"scrollbar-wrapper"},{default:f((()=>[g(o,{data:e.data},null,8,["data"])])),_:1})])),_:1})])),_:1})])),_:1})])),default:f((()=>[g(r,{value:6,type:"danger",class:"el-dropdown-link item mx-2 cursor-pointer leading-none"},{default:f((()=>[de])),_:1})])),_:1})}],["__scopeId","data-v-8458bf42"]]);const fe=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],ge=(()=>{const e=fe[0],t={};for(const l of fe){if((null==l?void 0:l[1])in document){for(const[n,a]of l.entries())t[e[n]]=a;return t}}return!1})(),pe={change:ge.fullscreenchange,error:ge.fullscreenerror};let be={request:(e=document.documentElement,t)=>new Promise(((l,n)=>{const a=()=>{be.off("change",a),l()};be.on("change",a);const s=e[ge.requestFullscreen](t);s instanceof Promise&&s.then(a).catch(n)})),exit:()=>new Promise(((e,t)=>{if(!be.isFullscreen)return void e();const l=()=>{be.off("change",l),e()};be.on("change",l);const n=document[ge.exitFullscreen]();n instanceof Promise&&n.then(l).catch(t)})),toggle:(e,t)=>be.isFullscreen?be.exit():be.request(e,t),onchange(e){be.on("change",e)},onerror(e){be.on("error",e)},on(e,t){const l=pe[e];l&&document.addEventListener(l,t,!1)},off(e,t){const l=pe[e];l&&document.removeEventListener(l,t,!1)},raw:ge};Object.defineProperties(be,{isFullscreen:{get:()=>Boolean(document[ge.fullscreenElement])},element:{enumerable:!0,get:()=>{var e;return null!=(e=document[ge.fullscreenElement])?e:void 0}},isEnabled:{enumerable:!0,get:()=>Boolean(document[ge.fullscreenEnabled])}}),ge||(be={isEnabled:!1});var he=be;const ye=i({name:"Screenfull",setup(){const e=T(!1),t=()=>{he.isEnabled&&(e.value=he.isFullscreen)};return z((()=>he.isEnabled&&he.on("change",t))),P((()=>he.isEnabled&&he.off("change",t))),{isFullscreen:e,changeScreenfull:()=>{he.isEnabled?he.toggle():B({message:"浏览器不支持全屏",type:"warning"})}}}}),ve={class:"hidden-xs-only px-2"};var xe="./static/png/icon-9764f0e7.png";const we=i({name:"LayoutNavbar",components:{ArrowDown:j,Screenfull:N(ye,[["render",function(e,t,l,n,a,s){const r=u("svg-icon");return d(),x("div",ve,[e.isFullscreen?(d(),m(r,{key:1,"class-name":"cursor-pointer","icon-class":"svg-exit-fullscreen",onClick:e.changeScreenfull},null,8,["onClick"])):(d(),m(r,{key:0,"class-name":"cursor-pointer","icon-class":"svg-fullscreen",onClick:e.changeScreenfull},null,8,["onClick"]))])}]]),Notice:me},setup(){const e=C(),t=M(),l=O({Menubar:S((()=>e.getters["permission/getMenubar"])),setting:S((()=>e.getters["permission/getSetting"])),userInfo:S((()=>e.state.users.UserData))});return c(o(c(o({},U(l)),{changeCollapsed:()=>{e.dispatch("permission/changeCollapsed")},logout:()=>{e.dispatch("users/logout")}}),(e=>{const t=()=>{const t=[],l=["home","layout"];return e.matched.filter((e=>e.meta&&e.meta.name&&!l.includes(e.name))).forEach((e=>{const l={name:e.meta.name,path:e.path};t.push(l)})),t};let l=O({breadcrumbList:t()});return I((()=>e.path),(()=>l.breadcrumbList=t())),{data:l}})(t)),{icon:xe})}}),ke=e=>(p("data-v-6e62fa0c"),e=e(),b(),e),_e={key:0,class:"flex items-center px-4 flex-wrap h-12 leading-12"},Ce={class:"px-4"},Me=_("首页"),Le={key:1,class:"flex items-center px-4 flex-wrap h-12 flex-1"},Se={class:"layout-sidebar-logo flex relative shadow-lg w-40 leading-12 items-center"},Fe=["src"],Ee={key:0,class:"pl-2"},Te=ke((()=>h("div",{class:"layout-sidebar-menubar flex flex-1 overflow-hidden"},null,-1))),ze={class:"flex items-center flex-row-reverse px-4 min-width-32"},Pe={class:"el-dropdown-link flex flex-center px-2"},Be={class:"ml-2"},je=_("个人中心"),Oe=_("项目地址"),Ue=_("退出登录");var Ie=N(we,[["render",function(e,t,l,n,a,s){const r=u("el-breadcrumb-item"),o=u("el-breadcrumb"),c=u("el-avatar"),i=u("arrow-down"),p=u("el-icon"),b=u("el-link"),C=u("el-dropdown-item"),M=u("el-dropdown-menu"),L=u("el-dropdown"),S=u("Notice"),E=u("Screenfull");return d(),x(k,null,["vertical"===e.setting.mode||e.Menubar.isPhone?(d(),x("div",_e,[h("span",{class:y(["text-2xl cursor-pointer h-12 leading-12",{"iconfont icon-zhankai1":!e.Menubar.status,"iconfont icon-shousuo1":e.Menubar.status}]),onClick:t[0]||(t[0]=(...t)=>e.changeCollapsed&&e.changeCollapsed(...t))},null,2),h("div",Ce,[g(o,{separator:"/"},{default:f((()=>[g(q,{name:"breadcrumb"},{default:f((()=>[g(r,{key:"/",to:{path:"/"}},{default:f((()=>[Me])),_:1}),(d(!0),x(k,null,w(e.data.breadcrumbList,(e=>(d(),m(r,{key:e.name,to:e.path},{default:f((()=>[_(v(e.name),1)])),_:2},1032,["to"])))),128))])),_:1})])),_:1})])])):(d(),x("div",Le,[h("div",Se,[h("img",{class:"w-6 h-8",src:e.icon},null,8,Fe),0===e.Menubar.status||2===e.Menubar.status?(d(),x("span",Ee,"hsianglee")):F("",!0)]),Te])),h("div",ze,[g(L,null,{dropdown:f((()=>[g(M,null,{default:f((()=>[g(C,null,{default:f((()=>[g(b,{href:"https://github.com/hsiangleev",target:"_blank",underline:!1},{default:f((()=>[je])),_:1})])),_:1}),g(C,null,{default:f((()=>[g(b,{href:"https://github.com/hsiangleev/element-plus-admin",target:"_blank",underline:!1},{default:f((()=>[Oe])),_:1})])),_:1}),g(C,{divided:"",onClick:e.logout},{default:f((()=>[Ue])),_:1},8,["onClick"])])),_:1})])),default:f((()=>[h("span",Pe,[g(c,{size:30,src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}),h("span",Be,v(e.userInfo.name),1),g(p,{class:"el-icon--right"},{default:f((()=>[g(i)])),_:1})])])),_:1}),g(S),g(E)])],64)}],["__scopeId","data-v-6e62fa0c"]]);const qe=i({name:"LayoutTheme",setup(){const e=C(),t=O({setting:S((()=>e.getters["permission/getSetting"]))});return{defaultTheme:T(t.setting.color.primary),changeThemeColor:V}}});const De=i({name:"LayoutSideSetting",components:{LayoutTheme:N(qe,[["render",function(e,t,l,n,a,s){const r=u("el-color-picker");return d(),x("div",null,[g(r,{modelValue:e.defaultTheme,"onUpdate:modelValue":t[0]||(t[0]=t=>e.defaultTheme=t),predefine:["#409EFF","#1890ff","#304156","#212121","#11a983","#13c2c2","#6959CD","#f5222d"],size:"default",onChange:e.changeThemeColor},null,8,["modelValue","onChange"])])}]])},setup(){const e=C(),t=T(!1),l=S((()=>e.getters["permission/getSetting"])),n=T(l.showTags),a=T(l.usePinyinSearch);return{drawer:t,theme:R(),changeTheme:t=>{e.dispatch("permission/changeTheme",t)},setting:l,showTags:n,showPinyinSearch:a,changemenubarMode:t=>{e.dispatch("permission/changemenubarMode",t)}}}}),Ne={class:"pt-4"},Ve=h("p",{class:"py-2"},"整体风格设置",-1),Re=["onClick"],Ae={class:"flex flex-col w-4 h-12"},We={class:"flex flex-col flex-1"},$e=h("p",{class:"py-2"},"导航模式",-1),Ge={class:"flex flex-col flex-1"},He={class:"flex flex-col flex-1"},Je={class:"mt-5 text-sm"},Ke={class:"flex justify-between items-center py-1"},Qe=h("div",null,"主题色",-1);const Xe=i({name:"Layout",components:{LayoutContent:G,LayoutMenubar:J,LayoutNavbar:Ie,LayoutSideSetting:N(De,[["render",function(e,t,l,n,a,s){const r=u("el-col"),o=u("el-row"),c=u("layout-theme"),i=u("el-drawer");return d(),x(k,null,[h("i",{class:"iconfont icon-xitongshezhi text-2xl px-2 py-1 cursor-pointer rounded-l-md",onClick:t[0]||(t[0]=t=>e.drawer=!e.drawer)}),g(i,{modelValue:e.drawer,"onUpdate:modelValue":t[3]||(t[3]=t=>e.drawer=t),title:"系统布局配置",size:"280px"},{default:f((()=>[h("div",Ne,[Ve,g(o,{gutter:20},{default:f((()=>[(d(!0),x(k,null,w(e.theme,((t,l)=>(d(),m(r,{key:l,span:8},{default:f((()=>[h("div",{class:"flex shadow-lg border border-gray-100 w-18 cursor-pointer m-1",onClick:t=>e.changeTheme(l)},[h("div",Ae,[h("div",{class:"h-3",style:D({backgroundColor:t.logoBg||t.sidebarBg})},null,4),h("div",{class:"flex-1",style:D({backgroundColor:t.sidebarBg})},null,4)]),h("div",We,[h("div",{class:"h-3",style:D({backgroundColor:t.navbarBg||"#fff"})},null,4),e.setting.showTags?(d(),x("div",{key:0,class:"h-2",style:D({backgroundColor:t.tagsBg||"#fff"})},null,4)):F("",!0),h("div",{class:"flex-1 relative",style:D({backgroundColor:t.mainBg})},[e.setting.theme===l?(d(),x("i",{key:0,class:"iconfont icon-duihao absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4",style:D({color:e.setting.color.primary})},null,4)):F("",!0)],4)])],8,Re)])),_:2},1024)))),128))])),_:1}),$e,g(o,{gutter:20},{default:f((()=>[g(r,{span:8},{default:f((()=>[h("div",{class:"flex shadow-lg border border-gray-100 w-18 cursor-pointer m-1",onClick:t[1]||(t[1]=t=>e.changemenubarMode("vertical"))},[h("div",{class:"flex flex-col w-4 h-12",style:D({backgroundColor:e.theme[e.setting.theme].logoBg||e.theme[e.setting.theme].sidebarBg})},null,4),h("div",Ge,[h("div",{class:"h-3",style:D({backgroundColor:e.theme[e.setting.theme].tagsBg||"#fff"})},null,4),h("div",{class:"flex-1 relative",style:D({backgroundColor:e.theme[e.setting.theme].mainBg})},["vertical"===e.setting.mode?(d(),x("i",{key:0,class:"iconfont icon-duihao absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4",style:D({color:e.setting.color.primary})},null,4)):F("",!0)],4)])])])),_:1}),g(r,{span:8},{default:f((()=>[h("div",{class:"flex flex-col shadow-lg border border-gray-100 w-18 cursor-pointer m-1 h-12",onClick:t[2]||(t[2]=t=>e.changemenubarMode("horizontal"))},[h("div",{class:"flex flex-col h-4",style:D({backgroundColor:e.theme[e.setting.theme].logoBg||e.theme[e.setting.theme].sidebarBg})},null,4),h("div",He,[h("div",{class:"flex-1 relative",style:D({backgroundColor:e.theme[e.setting.theme].mainBg})},["horizontal"===e.setting.mode?(d(),x("i",{key:0,class:"iconfont icon-duihao absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4",style:D({color:e.setting.color.primary})},null,4)):F("",!0)],4)])])])),_:1})])),_:1}),h("div",Je,[h("div",Ke,[Qe,g(c)])])])])),_:1},8,["modelValue"])],64)}]])},setup(){const e=C();z((async()=>{e.dispatch("permission/changeDeviceWidth");const t=A(300);window.addEventListener("resize",(async function(){await t(),e.dispatch("permission/changeDeviceWidth")}),!0)}));const t=O({Menubar:S((()=>e.getters["permission/getMenubar"])),setting:S((()=>e.getters["permission/getSetting"]))});return c(o({},U(t)),{changeCollapsed:()=>{e.dispatch("permission/changeCollapsed")},icon:xe})}}),Ye={class:"layout flex h-screen"},Ze={class:"layout-sidebar-logo flex h-12 relative flex-center shadow-lg"},et=["src"],tt={key:0,class:"pl-2"},lt={class:"layout-sidebar-menubar flex flex-1 overflow-hidden"},nt={class:"layout-main flex flex-1 flex-col overflow-x-hidden overflow-y-auto"},at={class:"layout-main-navbar flex justify-between items-center h-12 shadow-sm overflow-hidden relative z-10"},st={class:"layout-main-content flex-1 overflow-hidden"},rt={class:"layout-sidebar-sidesetting fixed right-0 top-64 z-10"};var ot=N(Xe,[["render",function(e,t,l,n,a,s){const r=u("layout-menubar"),o=u("el-scrollbar"),c=u("layout-navbar"),i=u("layout-content"),m=u("layout-side-setting");return d(),x("div",Ye,[h("div",{class:y(["layout-sidebar-mask fixed w-screen h-screen bg-black bg-opacity-25 z-20",{hidden:2!==e.Menubar.status}]),onClick:t[0]||(t[0]=(...t)=>e.changeCollapsed&&e.changeCollapsed(...t))},null,2),"vertical"===e.setting.mode||e.Menubar.isPhone?(d(),x("div",{key:0,class:y(["layout-sidebar flex flex-col h-screen transition-width duration-200 shadow",{"w-64":0===e.Menubar.status||2===e.Menubar.status,"w-0":3===e.Menubar.status,"w-16":1===e.Menubar.status,"absolute z-30":2===e.Menubar.status||3===e.Menubar.status}])},[h("div",Ze,[h("img",{class:"w-8 h-8",src:e.icon},null,8,et),0===e.Menubar.status||2===e.Menubar.status?(d(),x("span",tt,"信息系统")):F("",!0)]),h("div",lt,[g(o,{"wrap-class":"scrollbar-wrapper"},{default:f((()=>[g(r)])),_:1})])],2)):F("",!0),h("div",nt,[h("div",at,[g(c)]),h("div",st,[g(i)])]),h("div",rt,[g(m)])])}],["__scopeId","data-v-16c9dc96"]]);export{ot as default};