// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/global.css'
import './assets/css/font-awesome.css'
import Axios from 'axios'
import MyUl from '@/components/Common/MyUl'
import MyLi from '@/components/Common/MyLi'
import NavBar from '@/components/Common/NavBar'
Vue.component(MyUl.name, MyUl)
Vue.component(MyLi.name, MyLi)
Vue.component(NavBar.name, NavBar)
Axios.defaults.baseURL = 'https://www.sinya.online/api/'
Vue.prototype.$axios = Axios
Vue.use(MintUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
