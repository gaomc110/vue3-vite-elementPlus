/* 订单管理*/
const Order = () => import('../views/order-manage/index.vue')
const OrderList = () => import('../views/order-manage/order-list/index.vue')
const ProductManage = () => import('../views/order-manage/product-manage/index.vue')
const ProductionList = () => import('../views/order-manage/product-manage/production-list/index.vue')
const ReviewManage = () => import('../views/order-manage/product-manage/review-manage/index.vue')
const ReturnGoods = () => import('../views/order-manage/return-goods/index.vue')

/* 产品管理*/
const Goods = () => import('../views/goods-manage/index.vue')
const GoodsList = () => import('../views/goods-manage/goods-list/index.vue')
const GoodsClassify = () => import('../views/goods-manage/goods-classify/index.vue')

// 这边是全部路由地址
/* 需要权限判断的路由*/
const dynamicRoutes = [
     {
        path: '/order',
        component: Order,
        name:'order-manage',
        meta:{
            name:'订单管理',
            icon:'icon-danjuzhongxin'
        },
        children:[
            {
                path:'list',
                component:OrderList,
                name:'order-list',
                meta:{
                    name:'订单列表',
                    icon:'icon-baobiaozhongxin'
                }
            },
            {
                path:'product',
                component:ProductManage,
                name:'product-manage',
                meta:{
                    name:'生产管理',
                    icon:'icon-mobanshezhi'
                },
                children:[
                    {
                        path:'list',
                        name:'production-list',
                        component:ProductionList,
                        meta:{
                            name:'生产列表',
                            icon:'icon-caijibiaolieweihu'
                        }
                    },
                    {
                        path:'review',
                        name:'review-manage',
                        component:ReviewManage,
                        meta:{
                            name:'审核管理',
                            icon:'icon-shenhedingyi'
                        }
                    }
                ]
            },
            {
                path:'returnGoods',
                name:'return-goods',
                component: ReturnGoods,
                meta:{
                    name:'退货管理',
                    icon:'icon-dengjixitongziduan'
                }
            }
         ]
    },
    {
        path:'/goods',
        component: Goods,
        name:'goods',
        meta:{
            name:'产品管理',
            icon:'icon-xianxiacaiji'
        },
        children:[
            {
                path:'list',
                name:'goods-list',
                component:GoodsList,
                meta:{
                    name:'产品列表',
                    icon:'icon-xianxiacaiji'
                }
            },
            {
                path:'classify',
                name:'goods-classify',
                component:GoodsClassify,
                meta:{
                    name:'产品分类',
                    icon:'icon-xianxiacaiji'
                }
            }
        ]
    }
]

export default dynamicRoutes
