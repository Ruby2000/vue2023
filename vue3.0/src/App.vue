<template>
  <div>
    <input v-model="keyWord" type="text">
    <br>
    <h1>{{keyWord}}</h1>
  </div>
</template>

<script>
import { customRef } from "vue";
export default {
  name: "App",
  setup(){
    function myref(value,delay){
      let timer = null
      return customRef((track,trigger) =>{
        return{
          get(){
            console.log("读取了value值",value);
            track()//追逐 最新的值
            return value
          },
          set(newVal){
            console.log("修改后的最新值时",newVal);
            clearTimeout(timer)
                timer=setInterval(()=>{
               value = newVal
              trigger()
            },delay)
          }
        }
      })
    }
    let keyWord = myref('hello',500)

    return {
      keyWord
    };
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
