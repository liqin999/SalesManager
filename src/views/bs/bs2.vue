<template>
  <div class="mt50">
        <h2  style="font-size: 10px;color: blue;font-size:50px;">
            商品的列表页使用循环引用组件
        </h2>
        <proList :proData="proData"></proList>
  </div>
</template>

<script>
import proList from "@/components/proList"
  //组价的循环使用  v-for循环
  export default {

    data: function () {
      return {
          proData:[//在项目中的组件，相当于JQ的插件的形式，在各个页面中可以重复的使用： 根据数据渲染组件 产生几个商品的列表  组件之间的传值 prop  由于不同的地方需要渲染的组件的个数不同，所以需要父组件将数据，传递到自组件中 然后子组件在根据数据循环出来不同个数的商品列表
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
   components:{
   
        proList,
       
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
