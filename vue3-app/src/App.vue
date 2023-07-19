<template>

  <div class="common-layout">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>
          <html class="dark">
        <el-progress :percentage ="10" :format ="format"></el-progress>
        </html>
        </el-header>
        <el-main ><div>
          <el-config-provider :message="config">
            <el-button @click="open">OPEN</el-button>
          </el-config-provider>
        </div></el-main>
        <el-footer>

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

<style>

</style>