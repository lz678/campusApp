import router from '@/router/index.js'
import { Toast } from 'vant'
import {getStore} from '@/utils/index.js'
// 路由跳转之前
router.beforeEach(async(to, from, next) => {
   
    // to and from are both route objects. must call `next`.
    // let list=['login','register','forgetpw']
    // const ishavetoken=getStore('token')
    // const isopen=to.meta.isOpen
    // if(isopen){
        
    //     this.$toast('暂未开放！')
    // }else if(list.includes(to.name)){
    //     // next('/login')
    //     next()
    // }else if(ishavetoken){
    //     next('/login')
    // }
    




//     const whiterList = ['login', 'register', 'forgetpw']
  const Open = to.meta.isOpen
//   const stoToken = store.state.token
  if (isOpen) {
    this.$toast('暂未开放，敬请期待！')
    // next(false)
//   } else if (stoToken) {
//     // handleNext(next)
//     next()
//   }
//   else if (whiterList.includes(to.name)) {
//     // handleNext(next)
//     next()
//   } else {
//     const locToken = getStore('token')
//     if (locToken) {
//       // handleLocToken(next)
//       const hasToken = await store.dispatch('checktLoginToken')
//       hasToken ? next() : next('/login')
//     } else {
//       next('/login')
//     }
next()
  }
})