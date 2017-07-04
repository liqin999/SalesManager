<template>
  <div class="">
    <div class="" :class="{error: validation.hasError('email')}">
      <div class="label">* Email</div>
      <div class="content">
        <input type="text" class="" v-model="email" placeholder="you Email"/>
      </div>
      <div class="message">{{ validation.firstError('email') }}</div>
    </div>
    <div class="">
      <div class="actions">
        <button type="button" class="btn btn-primary" @click="submit">Submit</button>
      </div>
    </div>
  </div>
</template>
<script>
  /*引入vee验证插件*/
  import Vue from 'vue'
  import SimpleVueValidation from 'simple-vue-validator';
  var Validator = SimpleVueValidation.Validator;
  Vue.use(SimpleVueValidation);
  export default {
    data: function () {
      return {
        email: ''
      };
    },
    validators: {
      email: function (value) {
        return Validator.value(value).required().email();
      }
    },
    methods: {
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
