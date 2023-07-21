<template>
<div :title="msg" class="test1">{{msg}}
  <el-tooltip class="item" effect="dark" content="左上" placement="top-start">
    <button>上左</button>
  </el-tooltip>

  <button>1</button>
</div>
  <div>
    <button></button>
  </div>

</template>

<script>
export default {
  name: "child9"
}
</script>

<style scoped>
.test1{
  background: antiquewhite;
  padding: 30px;
}
.item{
  background: lightslategray;
  padding: 10px;
}
</style>