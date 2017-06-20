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
  var data=[
    {
      title:"统计分析",
      nextmemu:["经营概况","会员概况","订单统计"]
    },
    {
      title:"系统设置",
      nextmemu:["模板管理","商城设置","验证码设置"]
    },
    {
      title:"会员管理",
      nextmemu:["会员列表","会员等级","验证码设置"]
    }
  ];

  export default {
    data: function () {
      return {
        slideList:data,
        slideInfo:{},
        isBlock:false

      }
    },
    methods:{
      //执行的函数形式
    }
  }

  var frame={//功能方法
    sideBarToggle:function(num,delay){//左侧菜单展开收缩
      var sideBar=$(".sideBar"),_left=sideBar.position().left,other=$(".container,.copyright");
      //获得元素的坐标
      if(!sideBar.is(":animated")){//if(!sideBar.is(":animated"))   判断元素是否在动画状态
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
  })

</script>
<style>
.sideList dd.block{display: block}
</style>
