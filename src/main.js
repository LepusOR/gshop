import Vue from 'vue'
import 'lib-flexible/flexible'
import router from './router'
import store from './store'
import GshopHeader from './components/GshopHeader/GshopHeader.vue'
import Swiper, { Pagination, Navigation } from 'swiper'



import App from './App.vue'

Vue.component('GshopHeader',GshopHeader)
Vue.config.productionTip = false
Swiper.use([Pagination, Navigation])

new Vue({
  /* el:'#app',
  components:{App},
  template:'<App/>', */
  render: h => h(App),
  router,
  store
}).$mount('#app')
