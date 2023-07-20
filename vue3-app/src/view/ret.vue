<template>
<h1>{{ message }}</h1>
  <button @click="reverseMessage">Reverse Message</button>
  <button @click="message +='!'">添加！</button>
  <a href="https://vuejs.org" @click.prevent="notify">
    A link with e.preventDefault(
  </a>
</template>

<script setup>
import { ref } from 'vue'
import ButtonCounter from "@/view/ButtonCounter";
const message = ref('Hello World!')
function  reverseMessage(){
  //通过其.value属性
  //访问/修改一个ref的值
  message.value = message.value.split('').reverse().join('')
}
function notify(){
  alert('navigation was prevented.')
}
export default {
  name: "return",
  components: {ButtonCounter}
}
</script>

<style scoped>
button, a{
  display: block;
  margin-bottom: 20px;
}
</style>