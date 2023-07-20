<template>
  <div>
    <h1>vue3.0</h1>
    <input type="text" v-model="p.startName" >
    <br>
    <input type="text" v-model="p.endName" >
    <br>
    <input type="text" v-model="p.fullName" >
    <h1>{{personone}}</h1>
    <hr>
    <h3>{{nameone}}</h3>
    <h3>{{sexone}}</h3>
    <h3>{{content.fit.age}}</h3>
    <h3>{{content.fit.money}}</h3>
    <button @click="nameone+=`--`">修改名字</button>
    <button @click="sexone+=`-`">修改性别</button>
    <button @click="content.fit.age+=1">修改性别</button>
    <button @click="content.fit.money+=1">修改年薪</button>
  </div>
</template>

<script>
import { reactive,computed,toRefs } from "vue";

export default {
  name: "App",
  setup() {
    let personone = reactive(({
      nameone: '张三',
      sexone:"男",
      content:{
        fit:{
          age:18,
          money:20
        }
      }
    }))
    let p = reactive({
      startName:"张",
      endName:'三'
    })
    // get 当属性被读取时 触发
    // set 当属性被修改时 触发
    p.fullName = computed({
      get(){
        return p.startName + '-' + p.endName
      },
      set(val){
        let res = val.split('-')
        p.startName = res[0]
        p.endName = res[1]
      }
    })
    return {
      p,personone,
      ...toRefs(personone)
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

