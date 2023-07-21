<template>
  <div class="demo_2">
    <h2> 子组件2</h2>
    <p v-if="x && y">x坐标为 {{ x }},y坐标为{{ y }}</p>
  </div>
</template>

<script>
import useMouse from 'mouse'
const { x,y } =useMouse('.demo_2')
export default {
  data(){
    return{
      x,y
    }},
  created() {
    this.x = useMouse('.demo-2')
    this.y = useMouse('.demo-2')
  },

  }

</script>

<style scoped>
.demo_2{
  height: 100px;
  background: salmon;
}
</style>