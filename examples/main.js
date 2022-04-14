import Vue from 'vue'
import App from './App.vue'
import * as echarts from 'echarts';
// import demo from 'sys-test-dome'
// import demo from '../packages/index.js'
import echartsMiniVue from 'echarts-mini-vue'
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;

Vue.use(echartsMiniVue);
// Vue.use(demo);
new Vue({
  render: h => h(App),
}).$mount('#app')
