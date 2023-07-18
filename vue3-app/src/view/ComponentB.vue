<template>
<button @click="store.count++">
  From B: {{ store.count }}
</button>
</template>

<script>
export default {
  name: "ComponentB"
}
</script>

<style scoped>

</style>