<template>
      <div class="dropDown">
       <slot name='header'></slot>
        <ul class="oUi">
        <!-- li中的隔行变色的效果 循环的额时候将值，传递到函数中 -->
          <li 
          @click="pushValue(item)"
          class="hoverGreen" 
          v-for="(item, index) in sportList" 
          :key='item.name'>
            {{item.name}}
          </li>
        </ul>
        <slot name='footer'></slot>
      </div>  
</template>
<script>
  //监听到路由发生呢变化的时候，让页面可以重新点击
  export default {
    data: function () {
      return {
         sportList:[]
      }
    },
    props:["data"],
    methods:{
      pushValue(value){
        console.log(value.name);//父子组件之间的通信 props event slot 
        this.$emit("getData",value.name);
      },
      mouseover(index){
        
      }
    },
    mounted(){
      this.sportList = this.data;
      //拿到父组件的数据 赋值到当前的数组上面
    }
  }

</script>
<style>
.dropDown{
  width: 500px;
  margin: 0px auto;
  border:1px solid red;
}
.oUi{
overflow: hidden;
clear: both;
padding-left: 0
}
.oUi li{
   list-style: none;
   cursor: pointer;

}
.oUi li.active{
  background-color: yellow; 
}
/*//实现隔行变色的效果*/
.hoverGreen:hover{
  background-color: green;
}
</style>
