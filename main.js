import App from './App'


// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import { myRequest } from "./utils/api.js"
Vue.config.productionTip = false
Vue.prototype.$appName = 'Cheng-Family'
Vue.prototype.$myRequest = myRequest
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  // app.config.globalProperties.msg = 'hello'
  // app.config.globalProperties.myRequest = myRequest
  return {
    app
  }
}
// #endif