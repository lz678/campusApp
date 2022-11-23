import axios from 'axios'
import Router from '@/router/index.js'
import { getStore, removeStore } from '@/utils/index.js'
// import {getStore} from '@/utils/index.js'
// 设置全局请求路径
// axios.defaults.baseURL = '/api'
axios.defaults.baseURL = 'http://www.runing.xyz:3000/'
// axios.defaults.baseURL='http://47.108.58.196:3000/'
//设置请求超时时间
const reg = /^(http|https)/
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // console.log(config);
    // config.headers['Access-Control-Allow-origin']="*"
    // config.headers['Access-Control-Allow-Credentials']="true"
    // config.headers['Access-Control-Allow-Methods']="GET, POST, PUT, DELETE, OPTIONS"
    // config.headers['Access-Control-Allow-Headers']="Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With"
    // config.headers['Content-Type']="text/html; charset=utf-8"
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});


//axios响应拦截器
axios.interceptors.response.use(
    res => {
        var data = res.data
        if (data.code === 1001) {
            removeStore('userInfo')
            removeStore('token')
            Router.push('/login')
            console.log(data.code);
        }
        else {
            return data
        }
    }
)
export default axios