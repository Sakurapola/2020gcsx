import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/scss/base/index.scss'
import VueAMap from 'vue-amap'
// import VueAMap from 'vue-amap';
// import echarts from 'echarts'
// import 'echarts/map/js/china'

// import china from 'echarts/map/json/china.json'
// echarts.registerMap('china', china)

// Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

Vue.use(ElementUI)
// Vue.use(VueAMap)
Vue.use(VueAMap)

VueAMap.initAMapApiLoader({
  key: '16afeaf4efc105ab4062a2172736768c',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
