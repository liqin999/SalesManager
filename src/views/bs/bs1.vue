<template>
<div>
  <div class="mt50" style="font-size: 30px;color: blue">导入地址插件</div>

  <el-form :inline="true" :model="formCreate" class="demo-form-inline" label-position="right" label-width="120px">
     <el-form-item label="地区：" prop="provinceOptions">
       <el-cascader 
       :options="provinceOptions" 
       v-model="formCreate.provinceOptions"
        @change="ChangeRegions"
        ></el-cascader>
     </el-form-item>
    </el-form>

    <div>
      <div>{{msg}}</div>
      <input type="button" value='反转字符串' @click='reverse'>
      <div>变化之后的内容：{{msg}}</div>
    </div>


</div>
</template>
<script>
import citys from '@/utils/citys.js'
  export default {
    mounted(){
        console.log(citys);
    },
    data: function () {
      return {
        msg:'helloworld',
        provinceOptions: citys.regions,//将下拉的数据显示出来
        formCreate:{
          provinceOptions: [],
        }
      }
    },
    watch:{
      $route: function () {

      }
    },
    created: function () {
    },
    methods:{
      reverse(){//取值，改变 ,赋值的形式，可以借助于第三个变量
        /*let str = this.msg;
        str=str.split("").reverse().join("");
        console.log(str);
        this.msg = str;*/
        //将改变之后的值，重新的赋值给页面中
        this.msg=this.msg.split("").reverse().join("");
      },
      ChangeRegions(){
        console.log(this.formCreate.provinceOptions);//可以将选择的数据传递到后台
      }
    }
  }





</script>
<style>
</style>
