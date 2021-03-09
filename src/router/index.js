import Vue from 'vue'
import VueRouter from 'vue-router'
import { getStore } from '@/utils/index.js'
import { Toast } from 'vant'
Vue.use(VueRouter)
const routes = [
    {
        path: '/login',
        name: 'login',
        // component:login
        component: () => import('@/views/login.vue'),
        meta: {
            name: '登录',
            isOpen: true
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/register.vue'),
        meta: {
            name: '注册',
            isOpen: true
        }
    },
    {
        path: '/forgetpd',
        name: 'forgetpd',
        component: () => import('@/views/forgetpd.vue'),
        meta: {
            name: '忘记密码',
            isOpen: true
        }
    },
    {
        path: '/',
        redirect: '/tabbar/campus',
        component: () => import('@/tabbar/index.vue'),
    },
    {
        path: '/tabbar',
        name: 'tabbar',
        component: () => import('@/tabbar/index.vue'),
        children: [
            {
                path: 'me',
                name: 'me',
                component: () => import('@/views/me.vue'),
                meta: {
                    name: '个人',
                    isOpen: true
                }
            },
            {
                path: 'bookcase',
                name: 'bookcase',
                component: () => import('@/views/bookcase.vue'),
                meta: {
                    name: '书架',
                    isOpen: true
                }
            },
            {
                path: 'campus',
                name: 'campus',
                component: () => import('@/views/campus.vue'),
                meta: {
                    name: '校园',
                    isOpen: true
                }
            },
            {
                path: 'sale',
                name: 'change',
                component: () => import('@/views/sale.vue'),
                meta: {
                    name: '置换',
                    isOpen: true
                }
            },
        ]
    },
    {
        path: '/history',
        name: 'history',
        component: () => import('@/views/history.vue'),
        meta: {
            name: '历史上的今天',
            isOpen: true
        }
    },
    {
        path: '/changeCity',
        name: 'changeCity',
        component: () => import('@/views/changeCity.vue'),
        meta: {
            name: '更换城市',
            isOpen: true
        }
    },
    {
        path: '/today',
        name: 'today',
        component: () => import('@/views/today.vue'),
        meta: {
            name: '天气详情',
            isOpen: true
        }
    },
    {
        path: '/tourism',
        name: 'tourism',
        component: () => import('@/views/tourism.vue'),
        meta: {
            name: '热门景点',
            isOpen: true
        }
    },
    {
        path: '/music',
        name: 'music',
        component: () => import('@/views/music.vue'),
        meta: {
            name: '推荐歌曲',
            isOpen: true
        },

    },
    {
        path: '/saleRule',
        name: 'saleRule',
        component: () => import('@/views/saleRule.vue'),
        meta: {
            name: '联系方式',
            isOpen: true
        }
    },
    {
        path: '/set',
        name: 'set',
        component: () => import('@/views/set.vue'),
        meta: {
            name: '设置',
            isOpen: true
        }
    },
    {
        path: '/safe',
        name: 'safe',
        component: () => import('@/views/safe.vue'),
        meta: {
            name: '安全',
            isOpen: true
        }
    },
    {
        path: '/bookDetail/:Mid',
        name: "bookDetail",
        component: () => import('@/views/bookDetail.vue'),
        meta: {
            name: "书籍详情",
            isOpen: true
        }
    }
]
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}
const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})
export default router
