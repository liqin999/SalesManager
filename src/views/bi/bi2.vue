<template>
    <div>
      <div class="mt50" style="font-size: 30px;color:red">
         体育爱好组件
      </div> 
      <input type="text" 
      placeholder="请选择" 
      v-model="getVal">
      <drop :data='sportList' v-on:getData="handleData">
      </drop>
    </div>
</template>
<script>
  //监听到路由发生呢变化的时候，让页面可以重新点击
  // 引入组价并调用
  import drop from "@/components/dropDown"
  export default {
    data: function () {
      return {
         getVal:'',
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
      handleData(val){
        this.getVal = val;
      }
    }
  }

</script>
<style>
</style>
