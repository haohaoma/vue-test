<template>
  <div id="toastbox" class="me-btn_box">
    <button @click="click" class="btn" :class="btnType">
      <slot>{{msg}}</slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'test-compontent',
  data () {
    return {
      msg: process.env.NODE_ENV
    }
  },
  props: {
    type: {
      type: String
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  },
  computed: {
    btnType () {
      return this.type
    }
  }
}
</script>

<style>
  .me-btn_box{
    margin-bottom: 10px;
  }
  .btn{
    outline: none;
    border: none;
    width: 80px;
    height: 36px;
    cursor: pointer;
    border-radius: 3px;
  }
  .btn.success{
    background: green;
    color: #fff;
  }
  .btn.warn{
    background: yellow;
    color: #666;
  }
  .btn.error{
    background: red;
    color: #fff;
  }
  .toast{
    position: fixed;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    background: #ccc;
    animation: fadein .3s linear;
    padding: 20px 60px;
  }
  .toast.success {
    color: green;
  }
  .toast.warn {
    color: yellow;
  }
  .toast.error {
    color: red;
  }
  @keyframes fadein {
    from {
      top: 0;
    }
    to {
      top: 200px;
    }
  }
</style>
