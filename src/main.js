//引入Vue
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入Vant框架
import Vant from 'vant';
import 'vant/lib/index.css';
import api from '@/api/index.js'
import axios from 'axios'
//权限配置
import auth from '@/utils/auth'
// Vue.use(axios);
Vue.prototype.axios = axios;
Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$api=api
// 创建一个Vue实例
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
