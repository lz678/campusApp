import axios from '@/request/index.js'
export default{
    quiteOrder(data){
        return axios.post('api/index/message',data)
    },
    userLogin(data){
        return axios.get('api/user/login',{params:data})
    },
    // getweaher(data){
    //     return axios.get('https://free-api.heweather.net/s6/weather/now?location=beijing&key=54fe7c4881b942b9b2b32ae14bd7ec54'
    //     ,{params:data})
    // }
}