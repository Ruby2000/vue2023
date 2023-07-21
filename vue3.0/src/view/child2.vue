<template>
 <div class="sun">
   <h1>这里是孙组件</h1>
   <h5 v-show="car">车名： {{car.name}}</h5>
   <h5 v-show="car">加个：{{car.price}}</h5>
  <child5/>
 </div>

</template>

<script>
import { inject, watch } from "vue";
import Child5 from "@/view/child5";




export default {
  components: {Child5},
  setup(){
     let car = inject("car")
     watch(car,(newVal)=>{
       console.log( newVal );
     },{deep:true,immediate:true})
     return{
       car
     }
   }

}
</script>

<style scoped>
.sun{
  background-color: skyblue;
  padding: 30px;
  /*transform: translate(61.1%,45%);*/

}


</style>