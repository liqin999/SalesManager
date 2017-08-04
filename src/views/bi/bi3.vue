<template>
    <div>
      <div class="mt50" style="font-size: 30px;color:black">
         前端技能组件:
      </div>

      <input type="text" placeholder="请选择" v-model='getVal'>

      <drop :data='sportList' v-on:getData="handleData">
        <div slot='header'>
          我是标题：
        </div>
        <div slot='footer'>
          我是底部的插槽
        </div>
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
          name:'javascript'
         },{
          name:'html'
         },{
          name:'css'
         }]
      }
    },
    components:{
      drop,
    },
    methods:{
      handleData(val){//接受到自组件传递的数据，然后覆盖到页面上
        // alert(val)
        this.getVal = val;
      }
    }
  }

</script>
<style>
</style>
