<template>
  <div id ="app">
    <h1>这里是根组件</h1>
    <button @click="sendData">点击---发送数据----修改价格</button>
  <h2>
    App
  </h2>
    <Suspense>
      <template #fallback> 加载中</template>
    </Suspense>
    <child1/>
  <ModalButton/>
  </div>
</template>

<script>
import  { reactive,provide } from 'vue';
import Child1 from "@/view/child1";
import ModalButton from "@/view/ModalButton";


export default {
  name: "App",
  components: {ModalButton, Child1},
  setup() {
    let car = reactive({
      name:"奔驰",
      price:20
    })
    provide('car',car)
    function sendData(){
      car.price++
    }
    return{
      car,
      sendData
    };
  },
};
</script>

<style>
#app {
  color: #2c3e50;
  background-color: gold;
  padding: 10px;
}
</style>
