<template>
  <div>
     <h1>姓名：{{name}}</h1>
    <h2>年龄: {{age}}</h2>
    <h3>最喜欢的水果:{{likeFood.fruits.apple}}</h3>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">修改年龄</button>
    <button @click="likeFood.fruits.apple += '!'">修改水果</button>
  </div>
</template>

<script>
import { toRefs, shallowReactive} from 'vue';
export default {
  name: "App",
  setup() {

    //   定义了一段数据
    let person = shallowReactive({ //只将第一层数据做了响应式处理
      name:"张三",
      age:18,
      likeFood:{
        fruits:{
          apple : '苹果 '   //深层次的数据将会是一个普通的对象
        }
      },
    })
    return {
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
