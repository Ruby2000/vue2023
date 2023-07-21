<template>
  <div>
    <h2>异步组件</h2>
    <h3>{{ res }}</h3>
  </div>


</template>

<script>

const res = await new Promise((resolve) => {
  setTimeout(() => {
    resolve({ name: 'zs', age: 12, sex: '男' })
  }, 1000)

export default {
  name: "Demo"
}
</script>

<style scoped>

div {
  padding: 10px;
  background: salmon;
  border: 1px solid #ccc;
}
</style>