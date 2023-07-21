<template>
<div>
  <h2>App</h2>
  <Suspense>
    <Demo></Demo>
    <template #fallback> 加载中....</template>
  </Suspense>
</div>
</template>

<script>


import Demo from "@/view/Demo";
export default {
  name: "child7",
  components: {Demo}
}
</script>

<style scoped>

</style>