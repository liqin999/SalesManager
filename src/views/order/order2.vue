<template>


  <div class="column is-12">
    <h2>检验插件</h2>
      <span>邮箱：</span>
      <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email" :length="5" date_format="{}">
      <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
    <br>
<span>最大值</span>
    <input v-validate="{rules:{max:5,required:true}}" data-vv-as="field" :class="{'input': true, 'is-danger': errors.has('max_field') }" name="max_field" type="text" placeholder="5 Characters or shorter">
    <span v-show="errors.has('max_field')" class="help is-danger">{{ errors.first('max_field') }}</span>
    <br>
    <span>手机号</span>
    <input  v-validate="{ rules: { regex: /^1\d{10}$/} }" data-vv-as="field" :class="{'input': true, 'is-danger': errors.has('num_field') }" name="num_field" type="text" placeholder="you phone">
    <span v-show="errors.has('num_field')" class="help is-danger">{{ errors.first('num_field') }}</span>
  </div>

</template>

<script>

  export default {
    data: function () {
      return {
        regex_field: '',
        max_field:"",
        name: 'basic-example'
      };
    },
    validators: {
      email: function (value) {
        return Validator.value(value).required().email();
      }
    },
    methods:{
      show: function () {
        $('#myModal').modal('show')
      },
      submit: function () {
        this.$validate()
          .then(function (success) {
            if (success) {
              alert('Validation succeeded!');
            }
          });
      }

    }
  }

</script>
<style>
</style>
