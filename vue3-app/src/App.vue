<template>
  <button @click="store.increment()">
    From B: {{store.count}}
  </button>
</template>

<script setup>
import { ref } from 'vue'

const data = ref(null)
</script>

<style>

</style>