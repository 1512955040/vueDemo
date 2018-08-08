
import Vue from 'vue'
import App from './App';
import {store} from './store/store';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Routes from "./routes.js"
import VueRouter from 'vue-router';
Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.config.productionTip = false
//创建路由
const router =new VueRouter({
	routes:Routes,
	mode:"history"
})
new Vue({
  store:store,
  router:router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
