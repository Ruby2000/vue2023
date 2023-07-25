<template>
<div>
  <button @click="add" style="font-size: 20px;color: salmon" >
    +
  </button>
  <span>{{num}}</span>
  <button @click="sub" style="font-size: 20px">
    -
  </button>

</div>
</template>

<script>
 export default {
   data(){
     return{
       num:1
     }
   },
   methods:{
     sub:function (){
       if(this.num>0){
         this.num--;
       }else {
         alert("不能再减了，已经是最小值了~")
       }
     },
     add:function (){
       if(this.num<10){
         this.num++;
       }else{
         alert("不能再加了，已经是最大值了~")
       }
     }
   }
 }

</script>

<style scoped>
button{
  padding: 2px;
  width: 20px;
}
</style>