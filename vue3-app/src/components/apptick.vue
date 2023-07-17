<template>
<button @click="increment">{{ count }}</button>
</template>

<script>
export default {
  name: "apptick",
  data(){
    return{
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  mounted() {
    this.increment()
  }
}

</script>

<style scoped>

</style>