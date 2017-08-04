<template>
    <div>
      <span class="mt50" style="font-size: 30px;color:red">
         前端课程
      </span>
      <drop :data='sportList'></drop>
    </div>
</template>
<script>
  //监听到路由发生呢变化的时候，让页面可以重新点击
  // 引入组价并调用
  import drop from "@/components/dropDown"
  export default {
    data: function () {
      return {
         sportList:[
         {
          name:'篮球121'
         },{
          name:'足球'
         },{
          name:'排球'
         }]
      }
    },
    components:{
      drop,
    },
    methods:{
    }
  }

</script>
<style>
</style>
