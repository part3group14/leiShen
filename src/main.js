import Vue from 'vue'
import App from './App.vue'

import './assets/styles/reset.css'
import './assets/font/iconfont.css'

import './assets/css/swiper.css'

import axios from 'axios'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import router from './router/index';

axios.defaults.baseURL="http://localhost:3000/"
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
