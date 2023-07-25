<template>
  <div class="demo_2">
    <h2> 子组件2</h2>
    <p v-if="x">x坐标为{{x}}</p>
    <p v-if="y">y坐标为{{y}}</p>
  </div>
</template>

<script >
import useMouse from 'mouse'

export default {
  data(){
    return{
      x:"",
      y:""
    };
  },
  created() {
    this.x = 'q'
    this.y = useMouse

  },

}
</script>

<style scoped>
.demo_2{
  height: 100px;
  background: black;
}
</style>