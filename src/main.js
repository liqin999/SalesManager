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

// 引入移动端mint-ui组件

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import Axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,Axios);//将引入的作为vue中的插件，也就是扩展到原型上面去  在其他的组件中可以直接使用 this表示每个组件的实例
//this.$http.get

Vue.use(MintUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});

