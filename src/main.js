import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
// 导入资源文件
import { i18n, vantLocales } from './lang'

// vant-ui组件国际化
vantLocales(i18n.locale)
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
