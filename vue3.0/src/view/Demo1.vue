<template>
<div class="demo_1">
  <h2>子组件1</h2>
  <p v-if="x && y">x坐标为{{ x }},y坐标为{{ y }}</p>
</div>
</template>

<script>
import useMouse from 'mouse'
const  { x, y } = useMouse('.demo_1')
export default {
  name: "Demo1",
  data(){
    return{
      x,y
    };
  },

}
</script>

<style scoped>
.demo_1{
  height: 100px;
  background: salmon;
}
</style>