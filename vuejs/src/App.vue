<template>
  <h3 class="title">计算器</h3>
  <div class="myComputed">
    <div class="result">
      <div class="text" >
        <el-tag type="" v-model="result">{{ result }}</el-tag>
      </div>
    </div>
    <div>
      <el-row>
        <el-button type="primary" @click="getButtonNumber($event)" round value="7">7</el-button>
        <el-button type="primary" @click="getButtonNumber($event)" round value="8">8</el-button>
        <el-button type="primary" @click="getButtonNumber($event)" round value="9">9</el-button>
        <el-button type="primary" @click="add($event)" value="+" round>+</el-button>
      </el-row>
      <el-row>
        <el-button type="primary" @click="getButtonNumber($event)" round value="4">4</el-button>
        <el-button type="primary" @click="getButtonNumber($event)" round value="5">5</el-button>
        <el-button type="primary" @click="getButtonNumber($event)" round value="6">6</el-button>
        <el-button type="primary" @click="sub($event)" value="-" round>-</el-button>
      </el-row>
      <el-row>
        <el-button type="primary" @click="getButtonNumber($event)" round value="1">1</el-button>
        <el-button type="primary" @click="getButtonNumber($event)" round value="2">2</el-button>
        <el-button type="primary" @click="getButtonNumber($event)" round value="3">3</el-button>
        <el-button type="primary" @click="multiply($event)" round value="*">*</el-button>
      </el-row>
      <el-row>
        <el-button type="primary" @click="clear" round>C</el-button>
        <el-button type="primary" @click="getButtonNumber($event)" value="0" round>0</el-button>
        <el-button type="primary" @click="getButtonNumber($event)" value="." round>.</el-button>
        <el-button type="primary" @click="equal" round>=</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
import { ref }  from "vue"
export default {
  name: "app",
  setup(){
    let result = ref(0);
    function getButtonNumber(e){
      //拿到绑定的值
      //console.log(e,currentTarget.value);
      let value = e.currentTarget.value;
      result.value =result.value +value;
    }
    //加法
    function add(e){
      let add = e.currentTarget.value;
      result.value = result.value + add;
    }
    // 减法
    function sub(e){
      let add = e.currentTarget.value;
      result.value = result.value +add;
    }
    //乘法
    function multiply(e){
      let add = e.currentTarget.value;
      result.value = result.value + add;
    }
    // 清除
    function  clear(){
      result.value = 0;
    }
    //  等于
    function equal(){
      console.log("======");
      if (result.value.includes("+")){
        let value = result.value.split("+");
        result.value = Number(value[0] + Number(value[1]));
      }
      if (result.value.includes("-")){
        let value = result.value.split("-");
        result.value = Number(value[0]) - Number(value[1]);
      }
      if (result.value.includes("*")){
        let value = result.value.split("*");
        result.value = Number(value[0]) * Number(value[1]);
      }
    }
    return {
      result,
      getButtonNumber,
      add,
      sub,
      multiply,
      clear,
      equal,
    };
  },
};
</script>

<style scoped>

</style>