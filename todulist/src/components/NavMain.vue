<template>
  <div class="container">
    <div v-if="list.length > 0">
      <div v-for="(item, index) in list" :key="index">
        <div class="item">
          <input type="checkbox" v-model="item.complete" />
          {{ item.title }}
          <button class="del" @click="del(item, index)">删除</button>
        </div>
      </div>
    </div>
    <div v-else>
      暂无任务
    </div>
  </div>
</template>

<script>
export default {
  name: "navMain",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  // 分发事件的属性名
  emits: ["del"],
  setup(props, ctx) {
    // 删除任务
    let del = (item, index) => {
      ctx.emit("del", index);
      console.log(index, item);
    };
    return {
      del,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: auto;
  border: 2px solid #ccc;
  width: 200px;
  margin-bottom: 20px;

}
.item {
  height: 35px;
  line-height: 35px;
  position: relative;
  width: 200px;
  button {
    cursor: pointer;
    position: absolute;
    right: 4px;
    top: 6px;
    display: none;
    z-index: 99;
  }
  &:hover {
    background: #ddd;
    button {
      display: block;
    }
  }
}
</style>
