import axios from '@/request/index.js'
// const HTTP=axios.create({
//     baseURL:'http://www.runing.xyz:3000/',
//     timeout: 10000,
//     headers: {
//         'Content-Type': 'application/json;charset=utf-8',
//     }
// })
export default{
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
    },
    // 发布旧书
    salebook(data){
        return axios.get('salebook',{params:data})
    },
    //获取书籍种类
    getbooktype(data){
        return axios.get('booktype',{params:data})
    },
    // 获取旧书列表
    getbooklist(data){
        return axios.get('booklist',{params:data})
    },
    // 获取个人页面信息
    getPersonInfo(data){
        return axios.get('info',{params:data})
    },
    // 获取出售价格规则
    getSaleRule(){
        return axios.get('salerule')
    },
    //安全建议
    getsafeinformation(){
        return axios.get('safe')
    },
    //重新设置昵称
    getResetNickName(data){
        return axios.get('resetNickName',{params:data})
    },
    // 获取书籍详情
    // getBookDetail(data){
    //     return axios.post('bookdetail',data)
    // },
    // //获取书籍详情
    getBookDetail(data){
        return axios.get('bookdetail',{params:data})
    }
    // getweaher(data){
    //     return axios.get('https://free-api.heweather.net/s6/weather/now?location=beijing&key=54fe7c4881b942b9b2b32ae14bd7ec54'
    //     ,{params:data})
    // }
}