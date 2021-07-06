import Vue from 'vue'
import App from './App'
// 引入uview
import uView from "uview-ui";
Vue.use(uView);
Vue.config.productionTip = false

App.mpType = 'app'
// 引入地址
import URL from "./ulits/config.js"
Vue.prototype.$URL=URL

import http from "./ulits/request.js"
Vue.prototype.$http=http



// 挂载提示框
import tips from "./ulits/tips.js"
Vue.prototype.$tips=tips

require("./test.js")

const app = new Vue({
    ...App
})
app.$mount()
