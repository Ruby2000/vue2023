<template>
<div :class="{ shake: disabled}">
  <button @click="warnDisabled">Click me</button>
  <span  v-if="disabled" style="color: brown"> 出现错误</span>

</div>
</template>

<script>
export default {
  name: "myCss",
  data(){
    return{
      disabled: false
    }
  },
  methods:{
    warnDisabled(){
      this.disabled = true
      setTimeout(() => {
        this.disabled = false
      },1500)
    }
  }
}
</script>

<style scoped>
.shake{
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0,0,0);
}
@keyframes shake {
  10%,
  90%{
    transform: translate3d(-1px,0,0);
  }
  20%,
  80%{
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70%{
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60%{
    transform: translate3d(4px, 0, 0);
  }
}
</style>