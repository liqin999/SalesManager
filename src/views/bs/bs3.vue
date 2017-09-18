<template>
  <div class="mt50" style="font-size: 35px;" >
    <h2 style="font-size: 30px;color: blue">我是BS第3个内容:Axios的内容项目</h2>
    <div>
      <input type="button" value="get" @click="getData"/>
      <div>
        <span style="float: left">后台获取的内容内容：</span>
        <span style="float: left">{{message}}</span>
      </div>
    </div>
  </div>
</template>

<script>


  //监听到路由发生呢变化的时候，让页面可以重新点击
  export default {
    data: function () {
      return {
        message:"我是默认的数据"
      }
    },
    watch:{
      $route: function () {

      }
    },
    created: function () {
    },
    methods:{
      getData:function(){
        let This= this;
        var _url="http://easy-mock.com/mock/596b79eaa1d30433d8347de3/menu/getinfo";
        this.$http.get(_url)
          .then((response)=>{
          This.message=response.data.data;

        })
        .catch((error) =>{
          console.log(error)
        })
      }

    }
  }

</script>
<style>
</style>
