<!-- 备注： 修改router-link 里面的 path 对应相应的父路由 -->
<template>
  <div>
       <div class="info" v-for="item in items">
          <div class="list">
            <span>名称:</span>
            <span class="ft-green">{{item.name}}</span>
          </div>
           <div class="list">
            <span>价格:</span>
           <span class="ft-green">{{item.price}}</span>
          </div>
            <div class="list">
            <span>数量:</span>
           <span class="ft-green">{{item.count}}</span>
          </div>
        </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        items:this.proData//单项数据流  子组件的数据的改变不应该影响到父组件的数据
      }
    },
    props:["proData"],
    watch:{
      $route: function () {
        //路由发生变化的时候 $route会重新赋值 监控这个属性，执行函数

      }
    },
    mounted: function () {
      // 渲染这个组件会调用一次这个生命周期函数
       console.log(this.proData)
    },
    methods:{

    }
  }

</script>
<style>
  .info{

  width: 200px;
  border: 1px solid red;
  font-size: 18px;
  margin:10px 50px;
}
.ft-green{
  color: green
}
</style>
