<template>
  <div class="hello">
    <test-compontent @click="handel('success','成功')" type="success">成功</test-compontent>
    <test-compontent @click="handel('warn','警告')" type="warn">警告</test-compontent>
    <test-compontent @click="handel('error','失败')" type="error">失败</test-compontent>
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
    handel (type, text) {
      // TODO test
      this.$toast[type](text)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
