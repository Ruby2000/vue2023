<template>
  <div class="un">
    <h1>这里小小组件</h1>
    <button @click="iShow = true">打开弹窗</button>
    <teleport to="body">
      <div v-if="iShow" class="mark">
        <div v-if="iShow" class="dialog">
          <button @click="iShow = false"  class="close1">
            <el-icon :size="size" :color="color">
              <Edit />
            </el-icon>
            关闭弹窗</button>
          <h1>这里是弹窗</h1>
          <h3>这里是内容</h3>
          <h3>这里是内容</h3>
          <h3>这里是内容</h3>
          <h3>这里是内容</h3>
          <h3>这里是内容</h3>
        </div>
      </div>
    </teleport>
  </div>

</template>

<script>
import { ref } from "@vue/reactivity";


export default {
  setup() {
    let iShow = ref(false);
    return { iShow };
  },
};
</script>

<style scoped>
.un {
  background-color: lightsalmon;
  padding: 30px;
  /*transform: translate(-30%,-190%);*/
}
.dialog {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 300px;
  height: 300px;
  padding: 20px;
  background-color: green;
  color: honeydew;
  border-radius: 10px;
}
.mark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
.close1{
  width: 10px;
  height: 20px;
}

</style>
