<template>
  <div class="mt50">
        <h2  style="font-size: 10px;color: blue">
            使用循环组件
        </h2>
  
        <div class="info">
          <div class="list">
            <span>名称:</span>
            <span>1111</span>
          </div>
           <div class="list">
            <span>价格:</span>
            <span>222</span>
          </div>
            <div class="list">
            <span>数量:</span>
            <span>3333</span>
          </div>
        </div>

  </div>
</template>

<script>


  //监听到路由发生呢变化的时候，让页面可以重新点击
  export default {
    data: function () {
      return {
          proData:[
          {
            "name":"男鞋",
            "price":100,
            "count":10
          },{
            "name":"上衣",
            "price":200,
            "count":20
          },{
              "name":"裤子",
              "price":300,
              "count":30
          }]
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
.info{
  margin-left: 300px;
  width: 200px;
  border: 1px solid red;

}
</style>
