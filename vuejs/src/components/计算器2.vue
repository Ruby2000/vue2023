<template>
  <div>
    <h1>计算结果：{{numCount}}</h1>
    <div >数字1：<input type="number" v-model="form.num1" ></div>
    <div >数字2：<input type="number" v-model="form.num2" ></div>
    <div class="buttonList" >
      <button @click="btn('+')" >+</button>
      <button @click="btn('-')">-</button>
      <button @click="btn('*')">*</button>
      <button @click="btn('/')">/</button>
      <button @click="btn('c')">clear</button>
    </div>
  </div>
</template>

<script>
import { ref,reactive }  from "vue"
export default {
  setup() {
    let numCount = ref(0);
    let form = reactive({
      num1:'',
      num2:''
    })
    function  btn(type){
      if((!form.num1 || !form.num2)&&type!='c'){
        alert('请输入数值');
        return
      }
      switch (type){
        case '+':
          numCount.value = (form.num1)+(form.num2);
          break;
        case '-':
          numCount.value = (form.num1)-(form.num2);
          break;
        case '*':
          numCount.value = (form.num1)*(form.num2);
          break;
        case '/':
          numCount.value = (form.num1)/(form.num2);
          break;
        case 'c':
          numCount.value = 0;
          form.num1 = "";
          form.num2 = "";
          break;
      }
    }
    return{
      numCount,
      form,
      btn
    }
  }}
</script>

<style scoped>
.buttonList{
  marin-top:10px;
}
button{
  padding: 10px 10px;
  margin: 0 5px;
}
</style>