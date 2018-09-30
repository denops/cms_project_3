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
import Comment from '@/components/Common/Comment'
import NavBar from '@/components/Common/NavBar'
import MySwipe from '@/components/Common/MySwipe'
import VuePreview from 'vue-preview'
import Moment from 'moment'
Vue.use(VuePreview)
Vue.use(Moment)
Moment.locale('zh-cn')
Vue.component(MyUl.name, MyUl)
Vue.component(MyLi.name, MyLi)
Vue.component(MySwipe.name, MySwipe)
Vue.component(NavBar.name, NavBar)
Vue.component(Comment.name, Comment)
Axios.defaults.baseURL = 'https://www.sinya.online/api/'
Vue.prototype.$axios = Axios
Vue.use(MintUI)
Vue.config.productionTip = false
Axios.interceptors.request.use(function (config) {
  MintUI.Indicator.open({
    text: '玩命加载中...'
  })
  return config
})
Axios.interceptors.response.use(function (response) {
  MintUI.Indicator.close()
  return response
})
Vue.filter('relativeTime', function (previousTime) {
  return Moment(previousTime).fromNow()
})
Vue.filter('convertstr', function (str, count) {
  return str.substring(0, count) + '...'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
