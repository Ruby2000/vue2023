<template>
  <div
      @mousemove="onMousemove"
      :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
      class="moveArea"
  >
    <p>Move your mouse across this div...</p>
    <p>x: {{ x }}</p>
  </div>
</template>

<script>
export default {
  name: "ztQd",
  data(){
    return{
      x:0
    }
  },
  methods:{
    onMousemove(e){
      this.x = e.clientX
    }
  }
}
</script>

<style scoped>
.moveArea {
  transition: 0.3s background-color ease;
}
</style>