<template>
  <div class="container">
    <nav-header @add="add"></nav-header>
    <nav-main :list="list" @del="del"></nav-main>
    <nav-footer :list="list" @clear="clear"></nav-footer>
  </div>
</template>

<script>
import NavHeader from "@/components/NavHeader";
import NavMain from "@/components/NavMain";
import NavFooter from "@/components/NavFooter";
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {

  // 接收父组件的数据
  props: {},
  // 定义子组件
  components: {
    NavHeader,
    NavMain,
    NavFooter,
  },

  // 接收的数据，上下文
  setup(props, ctx) {
    let store = useStore();
    let list = computed(() => {
      return store.state.list;
    });
    let value = ref("");
    // 添加任务
    let add = (val) => {
      value.value = val;
      // 任务存在 不能重复添加
      let flag = true;
      list.value.map((item) => {
        if (item.title === value.value) {
          // 有重复任务
          flag = false;
          alert("任务已存在");
        }
      });
      // 没有重复任务
      if (flag == true) {
        // 调用 mutation
        store.commit("addTodo", {
          title: value.value,
          complete: false,
        });
      }
    };

    // 删除任务
    let del = (val) => {
      // 调用删除的 mutation
      store.commit('delTodo', val)
      console.log(val);
    }

    // 清除已完成
    let clear = (val) => {
      store.commit('clear', val)
    }

    return {
      add,
      list,
      del,
      clear
    };
  },
};
</script>
