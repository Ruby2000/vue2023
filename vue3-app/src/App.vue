<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
      </el-aside>
      <el-container>
        <el-header>

          <el-row :gutter="10">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
              <div class="grid-content ep-bg-purple"/>
            </el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
            ><div class="grid-content ep-bg-purple-light"
            /></el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
            ><div class="grid-content ep-bg-purple"
            /></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
            ><div class="grid-content ep-bg-purple-light"
            /></el-col>
          </el-row>

        </el-header>
        <el-main >
            <el-scrollbar height="400px">
              <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
            </el-scrollbar>
        </el-main>
        <el-footer>
          <el-button type="primary" loading>
            <template #loading>
              <div class="custom-loading">
                <svg class="circular" viewBox="-10, -10, 50, 50">
                  <path
                      class="path"
                      d="
                     M 30 15
                     L 28 17
                     M 25.61 25.61
                     A 15 15, 0, 0, 1, 15 30
                     A 15 15, 0, 1, 1, 27.99 7.5
                     L 15 15
                     "
                      style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
                </svg>
              </div>
            </template>
            响应中
          </el-button>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
.el-col{
  border-radius: 4px;
}
.grid-content{
  border-radius: 4px;
  min-height: 36px;
}
.el-header{
  background-color: aqua;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-aside{
  background-color: chocolate;
  color: #333;
  test-align: center;
  line-height: 800px;
}
.el-footer{
   background-color: teal;
  color: #333;
  text-align: center;
  line-height: normal;

}

.el-button .custom-loading .circular {
  margin-right: 6px;
  width: 18px;
  height: 18px;
  animation: loading-rotate 2s linear infinite;
}
.el-button .custom-loading .circular .path{
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90,150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: var(--el-button-text-color);
  stroke-linecap: round;
}
</style>