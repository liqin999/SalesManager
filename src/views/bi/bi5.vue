<template>
<div class="mt50">
    <span style="font-size: 30px;color: darkblue">
        我是element-ui组件的内容(实际查看用户信息有变)
    </span>
  <el-table
    :data="tableData"
    border
    style="width: 100%">

    <el-table-column
      fixed
      prop="id"
      label="订单号"
      width="200">
    </el-table-column>

    <el-table-column
      prop="date"
      label="日期"
      width="200">
    </el-table-column>
    <el-table-column
      label="姓名"
      >
       <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>

    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="180">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
       width="380"
     >
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="190">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
    
</div>

</template>

<script>
//零宽断言  ?=  可以匹配前面的字符串，不包括断言后的语句
var reg = /\b\w+(?=ing\b)/g;
var str = "I am singing while you're dancing";
/*console.log(str.match(reg));*/
  export default {
    data: function () {
      return {
            tableData: [{
          id:'1',
          date: '2016-05-03',
          name: '王小虎1',
          province: '北京',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
           id:'2',
          date: '2016-05-02',
          name: '王小虎2',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
           id:'3',
          date: '2016-05-04',
          name: '王小虎3',
          province: '南京',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
           id:'4',
          date: '2016-05-01',
          name: '王小虎4',
          province: '郑州',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    },
    watch:{
      $route: function () {

      }
    },
    created: function () {
    },
    methods:{
       handleClick(data) {
        console.log(data);
        //在真是的场景中，点击查看用户的信息的时候，将当前的唯一的标示（id）作为参数，传递到params params: { code: scope.row.busiOppoCode }  然后在路由中设置动态路由信息  path: 'xt/editbi5/:code',
        // 然后在编辑页面中（editbi5）向后台发送ajax请求，并传递参数（busiOppoCode:this.$route.params.code）根据路由信息对象中的唯一的参数信息对象，传递到后台，得到数据，渲染到对应的editbi5页面。
        this.$router.push({
          name:'editbi5',
          params:{
            data:data
          }
        })
      }
    }
  }

</script>
<style>
.el-table th{text-align: center;}
</style>
