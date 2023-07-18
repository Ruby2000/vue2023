<template>
  <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
  <div v-else-if="data">
    Data loaded:
    <pre>{{ data }}</pre>
  </div>
  <div v-else> loading.... </div>
</template>

<script setup>
import { useFetch } from "@/fetch"

const  { data, error } = useFetch('...')
</script>

<style>

</style>