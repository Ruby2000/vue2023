<template>
 <div class="zu">
   <h1>这里是子组件</h1>
   <child2 />

 </div>
</template>

<script>
import Child2 from "@/view/child2";

export default {
  components: { Child2 }
}
</script>

<style scoped>
.zu{
  width: 500px;
  background-color: pink;
  padding: 30px;
  transform: translate(-3.7%,1%);
}
</style>