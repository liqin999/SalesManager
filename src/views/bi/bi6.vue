<template>
  <div class="mint-ui">
    <h2>qqq</h2>
    <mt-header title="固定在顶部"></mt-header>
    <hr/>
    <button @click="tipMsg">提示信息</button>
    <mt-button @click.native="handleClick">点击触发组件中 handleClick</mt-button>
    <mt-button @click.native="handleClick2">打开alert提示框</mt-button>
    <hr>
    <mt-radio
      class="textLeft"
      align="left"
      title="单选框列表"
      v-model="value"
      :options="options">
    </mt-radio>
    <div>
      <span>单选框的值:{{value}}</span>
    </div>
    <hr/>
  </div>
</template>
<script>
  import { Toast , MessageBox ,Radio } from 'mint-ui';
export default {
  data(){
    return {
      msg:"hello",
      value:"",
      options:[
        {
          label: '被禁用',
          value: '值F',
          disabled: true
        },
        {
          label: '选项A',
          value: '值A'
        },
        {
          label: '选项B',
          value: '值B'
        }
      ],
    }
  },
  methods:{
    tipMsg(){
      alert("ok");
    },
    handleClick(){
      Toast({
        message: '操作成功11',
        iconClass: 'icon icon-success'
      });
    },
    handleClick2(){
      MessageBox('提示', '操作成功');
    }
  }
}
</script>
<style>
.textLeft{text-align: left}
</style>
