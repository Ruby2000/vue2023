<template>
  <input v-focus />
</template>

<script setup>
// 在模板中启用v-focus

const  vFocus = {
  mounted: (el) => el.focus()
  }

</script>

<style>

</style>