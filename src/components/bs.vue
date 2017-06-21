<template>
  <div class="sideBar">
    <div class="sideList">
      <dl v-for="(outeritem,index) in slideList">
        <dt class="dtcurr">{{outeritem.title}} {{ index }} <i></i></dt>
        <dd v-for="(inneritem,innerindex) in outeritem.nextmemu" :class="{ block: (index === 0) }">
          <a href="#">{{inneritem}}{{ innerindex }}</a>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
  //动态路由机制

  var data=[//后期使用ajax从后台获取到
    {
      title:"商务分析one",
      nextmemu:["经营概况","会员概况","订单统计"]
    },
    {
      title:"商务分析two",
      nextmemu:["模板管理","商城设置","验证码设置"]
    },
    {
      title:"商务分析three",
      nextmemu:["会员列表","会员等级","验证码设置"]
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
        this.slideMenu();
      }
    },
    created: function () {
      // 渲染这个组件会调用一次这个生命周期函数
      // 复用这个组件，这个函数不会再次被调用了
      this.slideMenu();
    },
    methods:{
      //执行的函数形式
      slideMenu:function(){
        var frame={//功能方法
          sideBarToggle:function(num,delay){
            var sideBar=$(".sideBar"),_left=sideBar.position().left,other=$(".container,.copyright");
            //获得元素的坐标
            if(!sideBar.is(":animated")){
              if(_left==0){
                sideBar.animate({left:-num+"px"},delay);
                other.animate({marginLeft:0},delay);
              }else{
                sideBar.animate({left:0},delay);
                other.animate({marginLeft:num+"px"},delay);
              }
            }
          },
          menuToggle:function(obj){//展开或收起二级菜单
            obj.toggleClass("dtcurr").siblings("dd").slideToggle();
          },
          menuCurrent:function(obj){//选中当前二级菜单
            $("title",document).text(function(){
              return obj.text();
            })
            $(".sideList dd").removeClass("ddcurr")
            obj.addClass("ddcurr");
          }
        };
        $(function () {
          $(".sideBarBtn").click(function(){
            frame.sideBarToggle(187,300);
          });
          $(".sideList").on("click","dt",function(){
            frame.menuToggle($(this))
          });
          $(".sideList").on("click","dd",function(){
            frame.menuCurrent($(this))
          })
        })}
    }
  }

</script>
<style>
  .sideList dd.block{display: block}
</style>
