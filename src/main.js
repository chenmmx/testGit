// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import '../node_modules/mint-ui/lib/style.css'
import './assets/vendor/mui/dist/css/mui.css'

Vue.config.productionTip = false
Vue.use(Mint)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
