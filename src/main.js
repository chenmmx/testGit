// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import '../node_modules/mint-ui/lib/style.css'
import './assets/vendor/mui/dist/css/mui.css'
import Axios from 'axios'
import store from './store'

Axios.defaults.baseURL = 'http://localhost:3000/api'
Axios.interceptors.request.use(function (config) {
  Mint.Indicator.open({
    spinnerType: 'fading-circle'
  })
  return config
})
Axios.interceptors.response.use(function (config) {
  Mint.Indicator.close()
  return config
})

Vue.config.productionTip = false
Vue.use(Mint)
Vue.prototype.$ajax = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
