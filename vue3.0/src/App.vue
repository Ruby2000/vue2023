<template>
  <div>
    <h1>{{num}}</h1>
    <button @click="num++">num +1</button>
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
import { readonly,shallowReadonly,toRefs, reactive, ref } from 'vue';
export default {
  name: "App",
  setup() {
    // shallowReactive 浅响应式
    let num = ref(0)
    let person = reactive({
      name:"张三",
      age:18,
      content:{
        fit:{
          salary:20
        }
      }
    })
    // 把 person 变为 只读 数据
    num = readonly(num)
    // 把 person 变为 浅读 对象,只有第一层对象的数据只能读,不能修改
    person = shallowReadonly(person)
    return {
      num,
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
