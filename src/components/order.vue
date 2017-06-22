<!-- 备注： 修改router-link 里面的 path 对应相应的父路由 -->
<template>
  <div>
    <div class="sideBar">
      <div class="sideList">
        <div class="accordion" id="accordion2">
          <div class="accordion-group slideWrap"  v-for="(outeritem,index) in slideList">
            <div class="accordion-heading slideHead">
              <!--字符串的拼接-->
              <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2"  :href=" '#'+index" >
                {{outeritem.title}}
              </a>
            </div>
            <div :id='index' class="accordion-body collapse in">
              <div  class="accordion-inner slideInner"  v-for="(inneritem,innerindex) in outeritem.nextmemu" :class="{ block: (index === 0) }">
                <router-link exact :to="{path:'/order/'+outeritem.msg+'/'+inneritem.info}" style="color: #666" >
                  {{inneritem.menu}}
                </router-link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!--嵌套路由-->
    <div class="rightInfos">
      <transition  mode="out-in">
        <router-view  name="center"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  //动态路由机制  这些数据是从后台动态 暂时造假数据

  var data=[//后期使用ajax从后台获取到
    {
      title:"订单管理",//返回名字
      msg:"ddgl",
      nextmemu:[
        {menu:"客户检索",info:"order1"},
        {menu:"暂存录入",info:"order2"},
        {menu:"产品检索",info:"order3"},
        {menu:"我提交的特批",info:"order4"},
        {menu:"特批查阅",info:"order5"},
        {menu:"订购修改",info:"order6"},

        {menu:"变更查询",info:"order7"},
        {menu:"订单修改",info:"order8"},
        {menu:"我负责的订单",info:"order9"},
        {menu:"我管理的订单",info:"order10"},
        {menu:"ZTS可交付(无尾款)",info:"order11"},
        {menu:"ZTS可交付(有尾款)",info:"order12"},
        {menu:"ZTS不可交付产品",info:"order13"}
      ]
    },
    {
      title:"结算单管理",
      msg:"jsd",
      nextmemu:[
        {menu:"审核",info:"dd14"},
        {menu:"特批",info:"dd15"},
        {menu:"退赔",info:"dd16"},
        {menu:"待付款",info:"dd17"},
        {menu:"结算单查询",info:"dd18"},
        {menu:"我的结算单",info:"dd19"},
        {menu:"在线购买单",info:"dd20"},
        {menu:"退转款查询",info:"dd21"},
        {menu:"5.19前合同退转款查询",info:"dd22"},
        {menu:"5.19前合同退转款添加",info:"dd23"},
        {menu:"付款列表",info:"dd24"}
      ]
    }
  ];

  //监听到路由发生呢变化的时候，让页面可以重新点击
  export default {
    data: function () {
      return {
        slideList:data,
        slideInfo:{},
        isBlock:false
      }
    },
    watch:{
      $route: function () {
        //路由发生变化的时候 $route会重新赋值 监控这个属性，执行函数

      }
    },
    created: function () {
      // 渲染这个组件会调用一次这个生命周期函数
      // 复用这个组件，这个函数不会再次被调用了
    },
    methods:{

    }
  }

</script>
<style>
  .sideList dd.block{display: block}
</style>
