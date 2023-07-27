<template>
<div class="a">
  <button>
    111111
  </button>
  <ztQd/>
  <button>
    <router-link to="/" >去首页</router-link>
  </button>
</div>
</template>

<script>
import ztQd from "@/components/ztQd";
export default {
  name: "myCw",
  components:ztQd,
}
</script>

<style scoped>
.a{
  height: 100%;
  width: 100%;
}
</style>