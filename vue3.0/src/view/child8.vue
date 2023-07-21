<template>
  <div>
    <h2>App</h2>
    <h2>
      <button @click="Demo1Visible = false">销毁子组件1</button>
      <button @click="Demo2Visible = false">销毁子组件2</button>
    </h2>
    <Demo1 v-if="Demo1Visible"></Demo1>
    <Demo2 v-if="Demo2Visible"></Demo2>
  </div>
</template>

<script>
import { ref } from 'vue'
import Demo2 from "@/view/Demo2";
import Demo1 from "@/view/Demo1";
const Demo1Visible = ref(true)
const Demo2Visible = ref(true)

export default {

  components: {Demo2,Demo1},
  data() {
    return{
      Demo1Visible,Demo2Visible
    }

  }
}
</script>

<style scoped>

</style>