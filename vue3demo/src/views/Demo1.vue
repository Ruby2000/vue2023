<template>
 <div class="demo_1">
   <h2>子组件1</h2>
   <p v-if="x && y">x坐标为{{ x }}，y坐标为{{ y }}</p>
 </div>
</template>

<script>
  import useMouse from './mouse'
  const {x,y} = useMouse('.demp_1')
</script>

<style scoped>
.demo_1{
  height: 100px;
  background: salmon;
}

</style>