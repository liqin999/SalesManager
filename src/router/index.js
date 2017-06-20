import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import index from '@/components/index'
import bi from '@/components/bi'
import bs from '@/components/bs'
import order from '@/components/order'


Vue.use(Router);

let router = new Router({//路由配置项 嵌套路由
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: function (to,from,savePosition) {
    if( to.hash){
      return {
        selector: to.hash
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      alias: '/home'//组件的别名
    },
    {
      path: '/bi',
      name: 'BI',
      component: bi
    },
    {
      path: '/bs',
      name: 'BS',
      component: bs
    },
    {
      path: '/order',
      name: 'Order',
      component: order
    }
  ]
});
export default router;
