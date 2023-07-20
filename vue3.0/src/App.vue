<template>
  <div>
    <h1>{{num.y}}</h1>
    <h1>{{num1.y}}</h1>
    <button @click="num.y++">num ++ 1</button>
    <button @click="num1.y++">num1 ++ 1</button>
    <hr>
    <h1>{{person}}</h1>
    <h3>姓名：{{ name }}</h3>
    <h3>年龄：{{ age }}</h3>
    <h3>薪资：{{ content.fit.salary }}</h3>
    <hr>
    <button @click="name+=`--`">修改名字</button>
    <button @click="age++">修改年龄</button>
    <button @click="content.fit.salary++">修改年薪</button>
  </div>
</template>

<script>
import { shallowRef, shallowReactive,toRefs } from 'vue';
export default {
  name: "App",
  setup() {
    // shallowReactive 浅响应式
    let person = shallowReactive({
      name:"张三",
      age:18,
      content:{
        fit:{
          salary:20
        }
      }
    })
    // 被 shallowRef 包裹的对象无法实现响应式
    let num = shallowRef({
      y:0
    })
    let num1 = shallowRef({
      y:0
    })
    return {
      num,
      num1,
      ...toRefs(person)
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
