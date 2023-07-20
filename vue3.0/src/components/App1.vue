<template>
  <div>
    <h1>vue3.0</h1>
    <h3>这是vue3----name-----{{person.name}}</h3>
    <h3>这是vue3-----age-----{{person.age}}</h3>
    <h3>这是vue3-----job-----{{person.obj.kind}}</h3>
    <h3>这是vue3-----salary-----{{person.obj.salary}}</h3>
    <button @click="sengmenth3">点我触发vue3的方法</button>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    let person = reactive({
      name:"张三",
      age:18,
      obj:{
        kind:"工程师",
        salary:'30k'
      }
    })
    function sengmenth3() {
      console.log( person );
      person.name="李四"
      person.age=20
      person.obj.kind='ui工程师'
      person.obj.salary='60k'
    }
    return {
      person,
      sengmenth3
    };
  }
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
