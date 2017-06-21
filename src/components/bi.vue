<template>
  <div>
    <div class="sideBar">
      <div class="sideList">
        <dl v-for="(outeritem,index) in slideList">
          <dt class="dtcurr">{{outeritem.title}} {{ index }} <i></i></dt>
          <!--dd选项实现路由机制-->
         <!-- <dd  router-link   key="index" v-for="(inneritem,innerindex) in outeritem.nextmemu" :to="{path:'/bi/'+inneritem.id,query:{info:'follow'}}"  :class="{ block: (index === 0) }">
          <a href="#">{{inneritem}}{{ innerindex }}</a>
          </dd>-->
          <dd  key="index"  v-for="(inneritem,innerindex) in outeritem.nextmemu" :class="{ block: (index === 0) }">
            <router-link exact :to="{path:'/bi/'+outeritem.msg+'/'+inneritem.info}"  >
              {{inneritem.menu}}{{ innerindex }}
            </router-link>
          </dd>
        </dl>

        <div class="accordion" id="accordion2">
          <div class="accordion-group">
            <div class="accordion-heading">
              <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne">
               菜单一
              </a>
            </div>
            <div id="collapseOne" class="accordion-body">
              <div class="accordion-inner">
                Anim pariatur cliche...
              </div>
            </div>
          </div>

          <div class="accordion-group">
            <div class="accordion-heading">
              <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">
                菜单一
              </a>
            </div>
            <div id="collapseTwo" class="accordion-body collapse">
              <div class="accordion-inner">
                Anim pariatur cliche...
              </div>
            </div>
          </div>

          <div class="accordion-group">
            <div class="accordion-heading">
              <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapsethree">
                菜单三
              </a>
            </div>
            <div id="collapsethree" class="accordion-body collapse">
              <div class="accordion-inner">
                Anim pariatur cliche...
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
  var data=[//后期使用ajax从后台获取到数据
    {
      title:"统计分析",//返回名字
      msg:"tj",
      nextmemu:[
        {id:1,menu:"经营概况",info:"bi1"},
        {id:2,menu:"会员概况",info:"bi2"},
        {id:3,menu:"订单统计",info:"bi3"}
      ]
    },
    {
      title:"系统设置",
      msg:"xt",
      nextmemu:[
        {id:1,menu:"模板管理",info:"bi4"},
        {id:2,menu:"商城设置",info:"bi5"},
        {id:3,menu:"验证码设置",info:"bi6"}
      ]
    },
    {
      title:"会员管理",
      msg:"hy",
      nextmemu:[
        {id:1,menu:"会员列表",info:"bi7"},
        {id:2,menu:"会员等级",info:"bi8"},
        {id:3,menu:"验证码设置",info:"bi9"}
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
        this.getData();
        this.slideMenu();
      }
    },
    created: function () {
      // 渲染这个组件会调用一次这个生命周期函数
      // 复用这个组件，这个函数不会再次被调用了
      this.getData();
      this.slideMenu();
    },
    methods:{
      getData: function () {//从后台获取数据
        let id = this.$route.params;
      },
      //执行的函数形式
      slideMenu:function(){
        var frame={//功能方法
        sideBarToggle:function(num,delay){
          var sideBar=$(".sideBar"),_left=sideBar.position().left,other=$(".container,.copyright");
          sideBar.stop();
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
