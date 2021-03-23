import Vue from 'vue'
import 'lib-flexible/flexible'
import './veeValidate'
import {Button} from 'mint-ui' 
// import 'mint-ui/lib/style.css'
import './mock/mockServer'
import Swiper, { Pagination, Navigation } from 'swiper'

import * as API from './api'
import router from './router'
import store from './store'
import GshopHeader from './components/GshopHeader/GshopHeader.vue'




import App from './App.vue'

Vue.prototype.$API = API
Vue.component('GshopHeader',GshopHeader)
Vue.component(Button.name,Button)
Vue.config.productionTip = false
Swiper.use([Pagination, Navigation])
// Vue.use(MintUI)

new Vue({
  /* el:'#app',
  components:{App},
  template:'<App/>', */
  render: h => h(App),
  router,
  store
}).$mount('#app')
