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
        <br>
        <label for="">邮件：</label>
        <input type="text" 
         v-model="email" 
        :class="{borderRed:isEmailShow}" 
         placeholder="输入邮件" 
         @input='checkInput()'>
        <div style='color:red' v-show="isEmailShow">
          {{emailTip}}
        </div>
    </div>
</template>
<script>
  //监听到路由发生呢变化的时候，让页面可以重新点击
  // 引入组价并调用  页面中资源的共享属性 export 
  import drop from "@/components/dropDown"
  import {Regexs} from "@/utils/index"
  export default {
    data: function () {
      return {
         getVal:'',
         email:'',
         emailTip:'',
         isEmailShow:false,//一个数据项控制两个显示的视图的地方
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
      checkInput(){
        if(this.email == ""){
           this.isEmailShow = true;
          this.emailTip = "输入不能为空";
        } else if(Regexs.Email.test(this.email)){
          this.isEmailShow = false;
          this.emailTip = "恭喜你输入正确的格式~~~"
          return true;
        }else{
          this.isEmailShow = true;
          this.emailTip = "格式不正确，重新输入邮箱号";
          return false;//结束执行
        }
      },
      handleData(val){//接受到自组件传递的数据，然后覆盖到页面上
        // alert(val)
        this.getVal = val;
      }
    }
  }

</script>
<style>
.borderRed{border:1px solid red;}
</style>
