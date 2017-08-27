// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/app.css'
import '@/assets/js/bootstrap.min'
import '@/assets/js/common'
import '@/assets/lib/bootstrap.js'
import '@/assets/lib/vue-resource.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import Loading from '@/components/loading/index.js'

import store from '@/store/index.js'

Vue.use(ElementUI);
Vue.use(Loading);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});

/*$(function () {
 $("body").css("backgroundColor","#ddd")
})*/

