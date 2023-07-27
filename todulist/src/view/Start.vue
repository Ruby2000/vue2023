<template>
  <div class="title">
    <h1>欢迎来到前端杂货铺</h1>
    <button @click="start">开始任务</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "use-router";
export default {

  setup() {
    // router 是全局路由对象
    let router = useRouter();
    let name = ref(10);
    // 点击进行路由跳转
    let start = () => {
      router.push({
        name: "Home",
        params: {
          name: name.value,
        },
      });
    };
    return {
      start,
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  color: orange;
  text-align: center;
  margin-top: 20%;
}
button {
  margin-top: 20px;
  width: 100px;
  height: 50px;
  background: skyblue;
  color: white;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
}
button:hover {
  font-weight: bold;
  background: white;
  color: skyblue;
  cursor: pointer;
}
</style>
