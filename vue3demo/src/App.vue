<template>
  <div>
    <h2>App</h2>
    <h2>
      <button @click="Demo1Visible = false">销毁子组件1</button>
      <button @click="Demo2Visible = false">销毁子组件2</button>
    </h2>
    <Demo v-if="Demo1Visible"></Demo>
    <Demo2 v-if="Demo2Visible"></Demo2>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Demo1 from './views/Demo1.vue'
import Demo2 from './views/Demo2.vue'
const Demo1Visible = ref(true)
const Demo2Visible = ref(true)
</script>