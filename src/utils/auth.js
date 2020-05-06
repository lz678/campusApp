import router from '@/router/index.js'
import { Toast } from 'vant'
import { getStore } from '@/utils/index.js'
// 路由跳转之前
router.beforeEach((to, from, next) => {
  const token = getStore('token')
  // to and from are both route objects. must call `next`.
  let list = ['login', 'register', 'forgetpd']
  const ishavetoken = getStore('token')
  const isopen = to.meta.isOpen
  if (!isopen) {
    // Toast('暂未开放！')
    // Toast({
    //   message:'暂未开放！',
    //   duration:500
    // })

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
