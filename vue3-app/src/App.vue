<template>
  Count is: {{ count }}
</template>

<script>
export default {
  data() {
    return{
      obj: {
        nested: { count: 0 },
      }
    }
  },
  methods: {
    increment(){
      this.count++
    }
  },
  mounted() {
    //在其他方法或是生命周期中也可以调用方法
    this.increment()
  }
  //
  // mounted() {
  //   console.log(this.count)
  //
  //   this.count = 3
  // }
}
</script>

<style>

</style>
