<template>
  <button @click="increment()" >
    From A: {{ count }}
  </button>

</template>

<script >

import {store} from "./store";
export default {
//  并且暴露在'this'上
  data(){
    return{
      // store: store,
      count:store.count,
    }
  },
  created() {

  },
  methods:{
    increment(){
      console.log(store)
      store.increment();
      console.log(store.count)
      this.count  = store.count;
      console.log(this.count)
    }
  }

}

</script>

<style scoped>

</style>