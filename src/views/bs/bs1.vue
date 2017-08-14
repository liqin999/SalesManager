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
      ChangeRegions(){
        console.log(this.formCreate.provinceOptions);//可以将选择的数据传递到后台
      }
    }
  }

</script>
<style>
</style>
