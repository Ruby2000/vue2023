<template>

    <h2 style="width: 100%;text-align: center;">天知道</h2>
    <div class="sy1" >
      <input placeholder="请输入查询的天气" class="sy2" v-model="city" @keyup.enter="searchWeather"/>
      <button  @click="sky">搜索</button>
    </div>
    <div class="sy1">
      <button class="sy3" @click="changeCity('北京')" >北京</button>
      <button class="sy3" @click="changeCity('上海')" >上海</button>
      <button class="sy3" @click="changeCity('广州')" >广州</button>
      <button class="sy3" @click="changeCity('深圳')" >深圳</button>
      <button class="sy3" @click="changeCity('武汉')" >武汉</button>
      <button class="sy3" @click="changeCity('佛山')" >佛山</button>
    </div>
    <div>
      <div ><span>{{item.type}}</span></div>
      <div>
        <b>{{item.low}}</b>
        <b>{{item.low}}</b>
      </div>
      <div class="info_date"><span>{{item.date}}</span></div>
    </div>



</template>

<script>
import axios from "axios"
export default {


}
</script>

<style scoped>

</style>