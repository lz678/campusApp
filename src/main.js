import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
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
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
