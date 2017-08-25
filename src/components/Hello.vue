<template>
  <div class="hello">
    <test-compontent @click="handel">{{msg}}</test-compontent>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'gogogo'
    }
  },
  methods: {
    handel () {
      // TODO test
      this.$myMethod.success('成功')
      this.$myMethod.warn('警告')
      this.$myMethod.error('失败')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
