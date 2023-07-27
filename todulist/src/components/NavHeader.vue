<template>
  <div>
    <div class="container">
      <input
          type="text"
          placeholder="请输入任务名称"
          v-model="value"
          @keyup.enter="enter"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "navHeader",
  // 接收的数据，上下文
  setup(props, ctx) {
    let value = ref("");
    // 按回车键确认
    let enter = () => {
      // 把输入框的内容传递给父组件
      ctx.emit("add", value.value);
      // 清空输入框
      value.value = "";
    };
    return {
      value,
      enter,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  margin-top: 220px;
}
.container input {
  height: 25px;
  width: 200px;
  margin-bottom: 10px;
}
</style>
