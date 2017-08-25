<template>
  <div>
    <button @click="click">
      <slot>按钮</slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'test-compontent',
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style>

</style>
