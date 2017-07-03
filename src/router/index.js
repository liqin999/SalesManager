import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import index from '@/components/index'
import bi from '@/components/bi'
import bs from '@/components/bs'
import order from '@/components/order'

import bi1 from '@/views/bi/bi1'
import bi2 from '@/views/bi/bi2'
import bi3 from '@/views/bi/bi3'
import bi4 from '@/views/bi/bi4'
import bi5 from '@/views/bi/bi5'

import bs1 from '@/views/bs/bs1'
import bs2 from '@/views/bs/bs2'
import bs3 from '@/views/bs/bs3'
import bs4 from '@/views/bs/bs4'

import order1 from '@/views/order/order1'
import order2 from '@/views/order/order2'

Vue.use(Router);

/*引入vee验证插件*/
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);


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
      component: bi,//初始路由显示
      alias: '/home'//组件的别名
    },
    {
      path: '/bi',//动态路由的形式
      component: bi,
      children: [
        {
          path: '/bi/tj/bi1',
          components: {
            default: bi,
            center: bi1//命名路由
          }
        },
        {
          path: '/bi/tj/bi2',
          components: {
            default: bi,
            center: bi2
          }
        },
        {
          path: '/bi/tj/bi3',
          components: {
            default: bi,
            center: bi3
          }
        },
        {
          path: '/bi/xt/bi4',
          components: {
            default: bi,
            center: bi4
          }
        },
        {
          path: '/bi/xt/bi5',
          components: {
            default: bi,
            center: bi5
          }
        },
        {
          path:"*",//子路由中默认显示
          redirect: {path: '/bi'}
        }
      ]

    },
    {
      path: '/bs',
      name: 'BS',
      component: bs,
      children: [
        {
          path: '/bs/ggzy/sw1',
          name: 'bs1',
          components: {
            default: bs,
            center: bs1//命名路由
          }
        },
        {
          path: '/bs/ggzy/sw2',
          name: 'bs2',
          components: {
            default: bs,
            center: bs2
          }
        },
        {
          path: '/bs/khdw/sw3',
          name: 'bs3',
          components: {
            default: bs,
            center: bs3
          }
        },
        {
          path: '/bs/tjkh/sw4',
          name: 'bs4',
          components: {
            default: bs,
            center: bs4
          }
        },
        {
          path:"*",//项目重定向
          redirect: {path: '/bs'}
        }

      ]
    },
    {
      path: '/order',
      name: 'Order',
      component: order,
      children: [
        {
          path: '/order/ddgl/order1',
          name: 'order1',
          components: {
            default: order,
            center: order1
          }
        },
        {
          path: '/order/ddgl/order2',
          name: 'order2',
          components: {
            default: order,
            center: order2
          }
        },
        {
          path:"*",
           redirect: {path: '/order'}
        }

      ]
    },
    {
      path:"*",
    /*  redirect: {path: '/bi'}*/
    }
  ]
});

export default router;


