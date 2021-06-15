import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import moment from 'moment'
import * as filters from './util/filters'
import './util/permission'
import 'animate.css'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import './assets/css/common.scss'
import {
  Locale
} from 'vant';
import enUS from 'vant/lib/locale/lang/en-US';
import {
  cloneDeep
} from 'lodash'
import * as baseContent from './util/base-content'

Locale.use('en-US', enUS);

import request from './util/request'
Vue.prototype.$http = request;

// 格式化moment
moment.locale('zh-cn');

/* 注入filter */
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* 注入基本选项 */
Object.keys(baseContent).forEach(key => {
  Vue.prototype[key] = baseContent[key]
})

/* 注入常用方法 */
const commenFunction = {
  cloneDeep
}
Object.assign(Vue.prototype, commenFunction)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')