<template>
  <button @click="count++" >
    From A: {{ store.count }}
  </button>

</template>

<script setup>

import {store} from "@/store";


</script>

<style scoped>

</style>