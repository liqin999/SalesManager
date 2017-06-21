import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import index from '@/components/index'
import bi from '@/components/bi'
import bs from '@/components/bs'
import order from '@/components/order'
import bi1 from '@/views/bi1'
import bi2 from '@/views/bi2'
import bi3 from '@/views/bi3'


Vue.use(Router);

var routerObj=[];//定义所有的路由信息

var  router = new Router({//路由配置项 嵌套路由
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
        path: '/bi/tj/bi1', // 默认的子路由  /about
        name: 'bi1',
        components: {
          default: bi,
          center: bi2//命名路由
        }
    },
    {
      path: '/bi',//动态路由的形式
      component: bi,
      children: [
        {
          path: '/bi/tj/bi1', // 默认的子路由  /about
          name: 'bi1',
          components: {
            default: bi,
            center: bi2//命名路由
          }
        },
        {
          path: '/bi/tj/bi2',  // /work
          name: 'bi2',
          components: {
            default: bi,
            center: bi2
          }
        },
        {
          path: '/bi/tj/bi3',  // /work
          name: 'bi3',
          components: {
            default: bi,
            center: bi3
          }
        }
      ]

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


