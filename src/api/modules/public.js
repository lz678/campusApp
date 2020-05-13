import axios from '@/request/index.js'
export default{
    // quiteOrder(data){
    //     return axios.post('api/index/message',data)
    // },
    // 用户注册
    userRegister(data){
        return axios.get('register',{params:data})
    },
    // 用户登录
    userLogin(data){
        return axios.get('login',{params:data})
    },
    // 用户忘记重设密码
    userChangepd(data){
        return axios.get('changepwd',{params:data})
    },
    // 热门景点
    hotTour(){
        return axios.get('tourism')
    },
    //热门音乐
    hotMusic(data){
        return axios.get('hotMusic',{params:data})
    }
    // getweaher(data){
    //     return axios.get('https://free-api.heweather.net/s6/weather/now?location=beijing&key=54fe7c4881b942b9b2b32ae14bd7ec54'
    //     ,{params:data})
    // }
}