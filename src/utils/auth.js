import router from '@/router/index.js'
import { Toast } from 'vant'
import { getStore } from '@/utils/index.js'
// 路由跳转之前
router.beforeEach((to, from, next) => {
  const token = getStore('token')
  let list = ['login', 'register', 'forgetpd']
  const ishavetoken = getStore('token')
  const isopen = to.meta.isOpen
  if (!isopen) {
    next(false)
  } else if (list.includes(to.name)) {
    next()
  } else {
    if (ishavetoken) {
      next()
    } else {
      next({ path: '/login' })
    }
  }

})
