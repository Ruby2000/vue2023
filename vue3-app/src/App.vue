<template>
  <div>
    <div m="b-2">
      <el-checkbox v-model="config.autoInsertSpace"
      >autoInsertSpace</el-checkbox
      >
    </div>

    <el-config-provider :button="config">
      <el-button>中文</el-button>
    </el-config-provider>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'
const config = reactive({
  max: 3,
})
const open = () => {
  ElMessage('This is a message.')
}
export default {
//  并且暴露在'this'上
  data() {
    return{
      // store: store,
      open:null,
      config:null,
    }

  },
  created() {
    this.open = open;
    this.config = config;

  }
}
</script>

