<template>
  <div>
    <h2>过滤器排序功能：</h2>
    {{message | capitalize }}
    <hr/>
    <input type="button" value="年龄升序" @click="sortFn(0,'age')" style="margin-left: 20px;margin-bottom: 20px;"/>
    <input type="button" value="年龄降序" @click="sortFn(1,'age')" style="margin-left: 20px;margin-bottom: 20px;"/>

    <input type="button" value="姓名升序" @click="sortFn(0,'name')" style="margin-left: 20px;margin-bottom: 20px;"/>
    <input type="button" value="姓名降序" @click="sortFn(1,'name')" style="margin-left: 20px;margin-bottom: 20px;"/>

    <input type="button" value="新增" @click="addFn" style="margin-left: 20px;margin-bottom: 20px;"/>
    <table border="1" style="margin: 0 auto">
      <thead>
      <tr>
        <th style="cursor: pointer;">名字</th>
        <th style="cursor: pointer">年龄</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in dataList">
        <td v-for="(val, key, index) in item">{{val}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  //监听到路由发生呢变化的时候，让页面可以重新点击
  export default {
    data: function () {
      return {
        message:"hello",
        dataList1:[],
        dataList:[
          {
            name:"liqin",
            age:12
          },
          {
            name:"daiwei",
            age:10
          },
          {
            name:"aaaa",
            age:1
          },
          {
            name:"zhaoliu1",
            age:33
          },
          {
            name:"xiaoming",
            age:13
          }
        ]
      }
    },
    watch:{
      $route: function () {

      }
    },
    created: function () {
    },
    methods:{
      addFn:function(){
        this.dataList.push({
          name:"李白",
          age:22
        })
      },
      sortFn: function (flag,str) {
        var temp={};
        if(flag == 0){
          temp = this.dataList[0];
          for(var i=1;i<this.dataList.length;i++){
            if(this.dataList[i][str] < this.dataList[i-1][str]){
              temp = this.dataList[i-1];
              this.dataList[i-1] = this.dataList[i];
              this.dataList[i] = temp;
              this.sortFn(0,str);//每次执行之后，再次调用这个方法，执行函数，递归
            }else{
              temp=this.dataList[i-1]
            }
          }
        }else if(flag == 1){//将temp保存最大值
          temp = this.dataList[0];
          for(var i=1;i<this.dataList.length;i++){
            if(this.dataList[i][str] > this.dataList[i-1][str]){
              temp = this.dataList[i];
              this.dataList[i] = this.dataList[i-1];
              this.dataList[i-1] = temp;
              this.sortFn(1,str)
            }else{
              temp=this.dataList[i-1];
            };
          }
        }
        this.dataList = this.dataList.splice(0);//解决在vue数组中，数据更新后，视图不更新
        temp={};//每次执行排序后，将临时的对象清空
      }
    },
      filters:{
    capitalize: function (value) {
      value = value.toString();//toString() 方法可把一个逻辑值转换为字符串，并返回结果。   toString  将逻辑值转化成一个字符串的形式  charAt()找到字符串中某个位置的字符
      return value.charAt(0).toLocaleUpperCase() + value.slice(1)
       }
     }
  }

</script>
<style>
</style>
