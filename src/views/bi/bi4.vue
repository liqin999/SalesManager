<template>
    <div class="mt50" >
    <span style="font-size: 30px;color: greenyellow">vuex-- 状态管理信息</span>
      <br/>
      <br/>
      <input type="button" value="增加+" @click="increment"/>
      <input type="button" value="减少-" @click="decrement"/>
      <input type="button" value="偶数点击" @click="clickOdd"/>
      <input type="button" value="点击异步" @click="clickAsync">
      <br/>
      <br/>
      <div>
        现在的数字是 {{count}}，它现在是{{getOdd}}

      </div>
    </div>
</template>
<script>
  import { mapGetters , mapActions} from 'vuex'
  export default {
     computed: {
      // 使用对象展开运算符将 getters 混入 computed 对象中 计算属性用来取到用于计算的值
      ...mapGetters([
        'count',
        'getOdd',

      ])
      },
      methods:{
      ...mapActions([
          'increment', // 映射 this.increment() 为 this.$store.dispatch('increment')
          'decrement',
          'clickOdd',
          'clickAsync'
        ])

      },
    data: function () {
      return {

      }
    },
    watch:{
      $route: function () {

      }
    },
    created: function () {
    },

  }

</script>
<style>
</style>
