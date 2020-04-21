import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta:{
      name:'登录',
      isOpen:true
    }
     
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register.vue'),
    meta:{
      name:'注册',
      isOpen:true
    }
  },
  {
    path: '/forgetpd',
    name: 'forgetpd',
    component: () => import('@/views/forgetpd.vue'),
    meta:{
      name:'忘记密码',
      isOpen:true
    }
  },
  {
    path: '/',
    redirect: '/tabbar/campus',
    component: () => import('@/tabbar/index.vue'),
    meta:{
      name:'个人',
      isOpen:true
    }
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
        meta:{
          name:'个人',
          isOpen:true
        }
      },
      {
        path: 'bookcase',
        name: 'bookcase',
        component: () => import('@/views/bookcase.vue'),
        meta:{
          name:'书架',
          isOpen:true
        }
      },
      {
        path: 'campus',
        name: 'campus',
        component: () => import('@/views/campus.vue'),
        meta:{
          name:'校园',
          isOpen:true
        }
      },
      {
        path: 'mill',
        name: 'mill',
        component: () => import('@/views/mill.vue'),
        meta:{
          name:'矿机',
          isOpen:true
        }
      },
      {
        path: 'change',
        name: 'change',
        component: () => import('@/views/change.vue'),
        meta:{
          name:'置换',
          isOpen:true
        }
      },
    ]
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('@/views/history.vue'),
    meta:{
      name:'历史上的今天',
      isOpen:true
    }
  },
  {
    path: '/changeCity',
    name: 'changeCity',
    component: () => import('@/views/changeCity.vue'),
    meta:{
      name:'更换城市',
      isOpen:true
    }
  },


]
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
