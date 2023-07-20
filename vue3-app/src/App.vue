<template >

  <div class="common-layout" >
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>
          <html >
        <el-progress :percentage ="10" :format ="format"></el-progress>
        </html>
        </el-header>
        <el-main ><div>
          <el-config-provider :message="config">
            <el-button @click="open">OPEN</el-button>
          </el-config-provider>
          <el-button type="primary" :loading="true">加载中</el-button>
        </div></el-main>
        <el-footer>
          <el-link href="https://element-plus.org" type="success">success</el-link>
        </el-footer>
      </el-container>
    </el-container>

  </div>




</template>

<script>

import { reactive } from 'vue'
import { ElMessage } from 'element-plus'
const config = reactive({
  max: 3,
})
const open = () => {
  ElMessage('按钮按一次')
}

export default {
  methods:{
    format(percentage){
      return percentage === 100 ? '满' : `${percentage}%`;
    }
  },
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

<style scoped>
.el-link {
  margin-right: 8px;
}


</style>