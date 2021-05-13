import axios from 'axios'
import Router from '@/router/index.js'
import {getStore,removeStore} from '@/utils/index.js'
// import {getStore} from '@/utils/index.js'
//设置全局请求路径
axios.defaults.baseURL='http://www.runing.xyz:3000/'
//设置请求超时时间
const reg=/^(http|https)/
//axios请求拦截器（request）
// axios.interceptors.request.use(
//     // 在请求发送之前做一些事
    
//     config => {
      
//       if (!reg.test(config.url))
//         // config.url = host + '/api/' + config.url
  
//         let token = getStore('token')
//         if (token) {
//           config.headers['token'] = token.token
//         }
//       }
//       return config
//     },
//     // 当出现请求错误是做一些事
//     err => {
//       console.log('err' + err)
//     }
//   )
  
 
//axios响应拦截器
axios.interceptors.response.use(
    res=>{
        var data=res.data
        if(data.code===1001){
            removeStore('userInfo')
            removeStore('token')
            Router.push('/login')
            console.log(data.code);
        }
        else{
            return data
        }
    }
)
export default axios