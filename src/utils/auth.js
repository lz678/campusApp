import router from '@/router/index.js'
// import { Toast } from 'vant'
import {getStore} from '@/utils/index.js'
// 路由跳转之前
router.beforeEach((to, from, next) => {
   const token=getStore('token')
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
    // if(!token){
    //   router.push('/login')
    // }




//     const whiterList = ['login', 'register', 'forgetpw']
  const isOpen = to.meta.isOpen
//   const stoToken = store.state.token
  if (!isOpen) {
    this.$toast('暂未开放，敬请期待！')
    next(false)
    console.log(1111);
    
 

  }else{
    next()
  }
})