<template>
 <div class="xi">
   <h1>这里是小组件</h1>
   <button @click="inShow = true" style="height: 40px;width: 100%">打开弹幕</button>
   <teleport to="body">
     <div v-if="inShow" class="mark">
       <div v-if="inShow" class="dialog">
         <button @click="inShow = false">关闭弹窗</button>
         <h1>这里是弹窗</h1>
         <h3>这里是内容</h3>
         <h3>这里是内容</h3>
         <h3>这里是内容</h3>
         <h3>这里是内容</h3>
         <h3>这里是内容</h3>
       </div>
     </div>
   </teleport>
   <Child5/>

 </div>

</template>

<script>
import { ref } from "@vue/reactivity";
import Child5 from "@/view/child5";

export default {
  components: { Child5},
  setup(){
    let inShow = ref(false);
    return { inShow };
  },
};
</script>

<style scoped>
.xi{
  background-color: slateblue;
  padding: 3px;
  width: 36.7%;
  /*transform: translate(173%,-509%);*/

}
.dialog{
  position: absolute;
  left: 50%;
  top:50%;
  transform: translate(-50%,-50%);
  width: 300px;
  height: 300px;
  padding: 20px;
  background-color: #42b983;
  color: honeydew;
  border-radius: 10px;
}
.mark{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: saddlebrown;
}
</style>