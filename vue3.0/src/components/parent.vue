<template>
<div class="parent">
  I am parent
  <child msg="传递信息" name="张三" @sendparentMsg="getMsg"/>
</div>
</template>

<script>
import Child from "@/components/child";
export default {
  name: "parent",
  components: {Child},
  methods: {
    getMsg(msg){
      console.log(msg)
    }
  }
}
</script>

<style scoped>
.parent{
  padding: 10px;
  background-color: red;
}
</style>