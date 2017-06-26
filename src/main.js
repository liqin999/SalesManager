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

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

/*$(function () {
 $("body").css("backgroundColor","#ddd")
})*/

/*在主函数中定义分页中的搜索页过滤器*/
Vue.filter('onlyNumeric', {
  // model -> view
  // 在更新 `<input>` 元素之前格式化值
  read: function (val) {
   return val;
   },
  // view -> model
  // 在写回数据之前格式化值
  write: function (val, oldVal) {
    var number = +val.replace(/[^\d]/g, '');
    return isNaN(number) ? 1 : parseFloat(number.toFixed(2))
  }
})
