import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/scss/base/index.scss'
// import VueAMap from 'vue-amap';
import echarts from 'echarts'
// import 'echarts/map/js/china'

import china from 'echarts/map/json/china.json'
echarts.registerMap('china', china)

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

Vue.use(ElementUI)
// Vue.use(VueAMap)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
