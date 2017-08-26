<template>
  <div class="mt50">
    <span style="font-size: 10px;color: blue">
      自定义全局的Loading组件
    </span>
    <Loading></Loading>
    <hr/>

    <div>
      下一个的加载组件:
    </div>
    <Loading></Loading>


  </div>
</template>

<script>


  //监听到路由发生呢变化的时候，让页面可以重新点击
  export default {
    data: function () {
      return {
      }
    },
    watch:{
      $route: function () {

      }
    },
    created: function () {
    },
    methods:{
    }
  }

</script>


<style>
</style>
