<template>
  <div id="app" class="container-fluid p-relative">
    <!--导航条-->
    <nav class="navbar nav-pills p-fixed" style="z-index: 8;width: 100%;top: -2px;">
      <div class="container-fluid s-heade">
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <img class="headlogo" src="./assets/headlogo.jpg" alt=""/>
          <ul class="nav navbar-nav" style="margin-top: 8px;">
            <router-link to="/" exact tag="li"></router-link>
            <li>
              <router-link :to="{path:'/bi'}"  active-class="activeClass">
                <i class="h-icon h-icon1"></i>
                <span>BI系统</span>
              </router-link>
            </li>
            <li>
              <router-link  :to="{path:'/bs'}"  active-class="activeClass">
                <i class="h-icon h-icon1"></i>
                <span>商务代表</span>
              </router-link>
            </li>
            <li>
              <router-link  :to="{path:'/order'}"  active-class="activeClass">
                <i class="h-icon h-icon1"></i>
                <span>订单管理</span>
              </router-link>
            </li>
              <li><a href="#">
                ICP备案
              </a></li>
              <li><a href="#">
                业务受理
              </a></li>
              <li><a href="#">
                事件系统
              </a></li>
              <li><a href="#">
                财务到账
              </a></li>
              <li><a href="#">
                商务特批
              </a></li>

           </ul>
          <div class="head-right" >
              <div class="mt10">
                <span class="pointer">个人设置</span>
                <span class="pointer">帮助</span>
                <span class="pointer">退出</span>
              </div>
              <div class="mt5">
                <span class="mr15">李钦!</span><span>欢迎您登陆</span>
              </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="container-fluid" >
      <div class="row-fluid">
        <div class="mainCon p-relative">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
//控制文档的高度
window.onload= function () {
  var _docH=document.documentElement.clientHeight || document.body.clientHeight;
  var app=document.getElementById("app");
  app.style.height=_docH+"px";
};
</script>

<style>
/*由于头部导航个侧边栏的用到的类名的冲突，所以增加一个手机端的适配方案*/
 @media (max-width: 768px){
    .collapse{display: block}
 }



.s-heade{color: #fff}
.mainCon{ width: 100%;border: 3px solid green;min-height: 800px; }
.rightInfo{float: left;margin-left: 200px }
.headlogo{float: left}
.head-right{width: 200px;float: right}
.head-right .pointer:hover{text-decoration: underline}
.nav-pills{background: url("./assets/img/skin/headbg.jpg") repeat-x 0 0;  height: 70px;  clear: both}
  .navbar-nav>li{float: left}
  .navbar-nav{overflow:hidden}
.navbar-nav>li>a{color: #fff}
  @media (max-width: 768px)
  {
    .headlogo {
     width: 195px;
      height: 35px;
    }
    .nav>li>a{
      padding: 10px 9px;
      font-size: 8px;
    }

  }
  
#app {  font-family: 'Avenir', Helvetica, Arial, sans-serif;  -webkit-font-smoothing: antialiased;  -moz-osx-font-smoothing: grayscale;  text-align: center;  color: #2c3e50;  border: 1px solid firebrick;}
</style>
