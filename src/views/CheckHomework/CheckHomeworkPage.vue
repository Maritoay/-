<template>
  <div class="checkhomework-page mt-36 mb-24 px-5 py-3 overflow-auto bg-[#dff2ff] rounded-2xl shadow-2xl box-border">
    <div class="mb-8 p-3 flex items-center min-w-[800px]  shadow-lg rounded-xl">
      <div class="">
        <el-button :icon="ArrowLeft" circle />
      </div>
      <div class="ml-5 flex-1 px-5 py-3 flex items-center justify-between bg-white rounded-2xl shadow-xl">
        <div class="text-3xl text-[#303133] font-bold">
          作业：购物对话
        </div>
        <div>
          <el-tag style="margin-right: 10px;" size="large" type="danger">90分</el-tag>
          <el-button type="primary" :icon="Check">提交批改</el-button>
        </div>
      </div>
    </div>
    <div class="">
      <!--  -->
      <el-tabs type="border-card" tab-position="left" class="checkhomework-tabs">
        <el-tab-pane style="height: 800px; overflow: auto;">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><Sunrise /></el-icon>
              <span>选择题</span>
            </span>
          </template>
          <div class="mb-5 flex">
            <div class="mr-3 text-3xl text-bold text-[#606266]">
              (1)
            </div>
            <div>
              <div class="mb-5 flex items-center">
                <div>
                  <div class="mb-3 text-3xl text-bold text-[#606266]">
                    A：请问收银台在哪里？
                  </div>
                  <div class="flex text-3xl text-bold text-[#606266]">
                    B：收银台在<span class="px-3 border-b-1 text-[#409eff] border-black">左边</span>。(左边/右边)
                  </div>
                </div>
                <div class="ml-5">
                  <el-tag style="margin-right: 10px;" type="success" size="large">正确答案：左边</el-tag>
                  <el-tag type="warning" size="large">分值：10分</el-tag>
                </div>
              </div>
              <div>
                <el-radio-group v-model="radio">
                  <el-radio value="right" size="large" border>正确</el-radio>
                  <el-radio value="wrong" size="large" border>错误</el-radio>
                </el-radio-group>
              </div>
            </div>
          </div>
          <div class="mb-5 flex">
            <div class="mr-3 text-3xl text-bold text-[#606266]">
              (2)
            </div>
            <div>
              <div class="mb-5 flex items-center">
                <div>
                  <div class="mb-3 text-3xl text-bold text-[#606266]">
                    A：你想买什么?
                  </div>
                  <div class="flex text-3xl text-bold text-[#606266]">
                    B：我想买<span class="px-3 border-b-1 text-[#409eff] border-black">一件外套</span>。(一件外套/一件围巾)
                  </div>
                </div>
                <div class="ml-5">
                  <el-tag style="margin-right: 10px;" type="success" size="large">正确答案：一件围巾</el-tag>
                  <el-tag type="warning" size="large">分值：10分</el-tag>
                </div>
              </div>
              <div>
                <el-radio-group v-model="radio">
                  <el-radio value="right" size="large" border>正确</el-radio>
                  <el-radio value="wrong" size="large" border>错误</el-radio>
                </el-radio-group>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><Sunny /></el-icon>
              <span>选择题</span>
            </span>
          </template>
          填空题
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ArrowLeft, Check, Sunny, Sunrise } from '@element-plus/icons-vue'

const radio = ref('right')
</script>


<style>
.checkhomework-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.checkhomework-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.checkhomework-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>