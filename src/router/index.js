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
import bi6 from '@/views/bi/bi6'
import editbi5 from '@/views/bi/editbi5'

import bs1 from '@/views/bs/bs1'
import bs2 from '@/views/bs/bs2'
import bs3 from '@/views/bs/bs3'
import bs4 from '@/views/bs/bs4'

import order1 from '@/views/order/order1'
import order2 from '@/views/order/order2'

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
      component: bi,//初始路由显示bi bi1
      children:[
        {
          path: '',
          components: {
            center: bi1
          }
        }
      ]
    },
    {
      path: '/bi',//动态路由的形式
      component: bi,
      children: [
        {
        /*  path: 'tj/bi1',*/
          path: '',//默认项
          components: {
            center: bi1//命名路由
          }
        },
        {
          path: 'tj/bi2',
          components: {
            center: bi2
          }
        },
        {
          path: 'tj/bi3',
          components: {
            center: bi3
          }
        },
        {
          path: 'xt/bi4',
          components: {
            center: bi4
          }
        },
        {
          path: 'xt/bi5',
          components: {
            center: bi5
          }
        },
        {
          path: 'xt/bi6',
          components: {
            center: bi6
          }
        },
         {
          path: 'xt/editbi5',
          name:'editbi5',
          components: {
            center: editbi5
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
          //path: 'ggzy/sw1',
          path: '',
          name: 'bs1',
          components: {
            center: bs1//命名路由
          }
        },
        {
          path: 'ggzy/sw2',
          name: 'bs2',
          components: {
            center: bs2
          }
        },
        {
          path: 'khdw/sw3',
          name: 'bs3',
          components: {
            center: bs3
          }
        },
        {
          path: 'tjkh/sw4',
          name: 'bs4',
          components: {
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
          /*path: 'ddgl/order1',*/
          path: '',//默认项
          name: 'order1',
          components: {
            center: order1
          }
        },
        {
          path: 'ddgl/order2',
          name: 'order2',
          components: {
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

export default router



