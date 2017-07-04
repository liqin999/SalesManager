<template>
  <div class="column is-12">
    <h2>检验插件</h2>
    <form action="" id="order2_form" novalidate>
      <span>邮箱：</span>
      <input v-validate="'required|email'" data-vv-as="邮箱"  :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email" >
      <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
      <br>
      <span>最大值</span>
      <input v-validate="{rules:{max:5,required:true}}" data-vv-as="最大值" :class="{'input': true, 'is-danger': errors.has('max_field') }" name="max_field" type="text" placeholder="5 Characters or shorter">
      <span v-show="errors.has('max_field')" class="help is-danger">{{ errors.first('max_field')}}</span>
      <br>
      <span>手机号</span>
      <input  v-validate="{ rules: { regex: /^1\d{10}$/} }" data-vv-as="手机号" :class="{'input': true, 'is-danger': errors.has('phone_field') }" name="phone_field" type="text" placeholder="you phone">
      <span v-show="errors.has('phone_field')" class="help is-danger">{{ errors.first('phone_field') }}</span>
      <input type="button" value="提交" @click="submit()"/>
    </form>
  </div>
</template>
<script>
  import VeeValidate, { Validator } from 'vee-validate';
  export default {
    data: function () {
      return {

      };
    },
    validators: {
      email: function (value) {
        return Validator.value(value).required().email();
      }
    },
    methods:{
      submit: function () {

          var _parent=document.getElementById("order2_form");
          var _child=_parent.querySelectorAll("input[type=text]");
          for(var i=0;i<_child.length;i++){
            _child[i].onblur= function () {

            }
          }

      }

    }
  }

</script>
<style>
</style>
