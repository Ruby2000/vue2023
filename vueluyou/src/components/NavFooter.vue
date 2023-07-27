<template>
  <div class="container">
    已完成 {{ isCompelete }} / 全部 {{ list.length }}
    <span v-if="isCompelete" class="btn">
        <button @click="clear">清除已完成</button>
      </span>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "navFooter",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  setup(props, ctx) {
    let isCompelete = computed(() => {
      // 过滤已完成
      let arr = props.list.filter((item) => {
        return item.complete;
      });
      return arr.length;
    });
    // 清除已完成
    let clear = () => {
      // 过滤未完成的
      let arr = props.list.filter((item) => {
        return item.complete === false;
      });
      ctx.emit("clear", arr);
      console.log("clear");
    };

    return {
      isCompelete,
      clear,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}
</style>
