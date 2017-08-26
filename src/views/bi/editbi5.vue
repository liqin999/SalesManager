<template>
<div class="mt50">
   <span style="color:red;font-size:24px;text-align:left;marginBottom:20px;display:inline-block">查看用户信息页面</span>
<el-row :gutter="20">

  <el-col :span="6">
  <div class="">
    <b>注册时间:</b>{{data.date}}
  </div>
  </el-col>
  <el-col :span="6">
  <div class="">
    <b>用户名:</b>{{data.name}}
  </div>
  </el-col>

  <el-col :span="6">
  <div class="">
    <b>所在区域:</b>{{data.address}}
  </div>
  </el-col>
  <el-col :span="6">
  <div class="">
    <b>邮编:</b>{{data.zip}}
  </div>
  </el-col>
<el-button style='marginTop:100px' type="primary" @click='back'>返回上一级</el-button>
</el-row>
</div>

</template>

<script>
  export default {
    data: function () {
      return {
        data:{}
      }
    },
    watch:{
      $route: function () {

      }
    },
    created: function () {//将保存的落雨信息对象中的数据获取出来
        this.data = this.$route.params.data;
    },
    methods:{
     back(){
        this.$router.go(-1)
     }
    }
  }

</script>
<style>

</style>
