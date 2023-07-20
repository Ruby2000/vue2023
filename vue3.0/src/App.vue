<template>
  <div>

<!--    <h1>姓名 : {{sum.n}}</h1>-->
<!--    <button @click="sum.n++">点击+</button>-->

        <h1>姓名 : {{sum}}</h1>
        <button @click="sum++">点击+</button>
  </div>
</template>

<script>
import { shallowRef} from 'vue';
export default {
  name: "App",
  setup() {
     let sum =shallowRef(
         0// {n: 0}
     )

    return {
      sum,

    };
  }
};
</script>

<style>

</style>
