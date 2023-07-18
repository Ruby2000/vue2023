<template>
  <h1>Here are many child components!</h1>

  <ButtonCounter />
  <ButtonCounter />
  <ButtonCounter />
  <ComponentA />
</template>


<script setup>
import ButtonCounter from './view/ButtonCounter.vue'
import ComponentA from "@/view/ComponentA"


</script>