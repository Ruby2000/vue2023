<template>
 <h3>计算器</h3>
  <div>
    <el-row>
      <el-tag type="" class="a" >{{result}}</el-tag>
    </el-row>
    <div>
      <el-row>
        <el-button type="primary" @click="getButtonNumber($event)" round value="7" >7</el-button>
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
        <el-button type="primary" @click="multiply($event)" round value="*" >*</el-button>
      </el-row>
      <el-row>
        <el-button type="primary" @click="clear" round >c</el-button>
        <el-button type="primary" @click="getButtonNumber($event)" round value="0" >0</el-button>
        <el-button type="primary" @click="getButtonNumber($event)" round value =".">.</el-button>
        <el-button type="primary" @click="equal" round>=</el-button>

      </el-row>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
export default {

  setup(){
    let result =ref(0);
    function  getButtonNumber(e){
      let value = e.currentPage.value;
      result.value = result.value +value;
    }
    function add(e){
      let add = e.currentTarget.value;
      result.value = result.value +add;
    }
    function sub(e){
      let add = e.currentTarget.value;
      result.value = result.value+add;
    }
    function multiply(e){
      let add = e.currentTarget.value;
      result.value = result.value +add;
    }
    function clear(){
      result.value = 0;
    }
    function equal(){
      console.log("=====");
      if(result.value.includes("+")){let value = result.value.split("+");
        // console.log(value);
        result.value = Number(value[0]) + Number(value[1]);
      }
      if (result.value.includes("-")) {
        let value = result.value.split("-");
        // console.log(value);
        result.value = Number(value[0]) - Number(value[1]);
      }
      if (result.value.includes("*")) {
        let value = result.value.split("*");
        // console.log(value);
        result.value = Number(value[0]) * Number(value[1]);
      }
    }
    return{
      result,
      getButtonNumber,
      add,
      sub,
      multiply,
      clear,
      equal,
    }
  }
}
</script>

<style scoped>
.a{
  width: 230px;
}
button{
  height: 40px;
  width: 50px;
}
</style>