<template>
  <div class="entercourse-page mt-36 px-5 py-3 overflow-auto box-border"> 
      <div class="p-5 min-w-[1000px] bg-[#dff2ff] rounded-2xl shadow-2xl">
          <!-- 顶部区域 -->
          <div class="mb-5 flex">
            <el-button type="primary" :icon="ArrowLeft" circle />
            <div class="ml-5 text-xl text-[#606266] font-bold">
                直播课：故乡的春节
            </div>
          </div>
          <!--  -->
          <div class="flex justify-center">
            <div class="mr-6">
              <!-- 先用图片代替一下 -->
              <div class="mb-4">
                <el-image style="height: 500px;max-width: 750px;" src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>
              </div>
              <!--  -->
              <div class="px-5 py-2 flex justify-center bg-white rounded-full shadow-md">
                <div class="mr-5 font-bold">
                  <el-switch
                    v-model="showCamera"
                    size="large"
                    inline-prompt
                    :active-action-icon="View"
                    :inactive-action-icon="Hide"
                    active-text="打开"
                    inactive-text="关闭"
                  />
                  <el-text style="margin-left: 5px" size="large">摄像机</el-text>
                </div>
                <div class="font-bold">
                  <el-switch
                    v-model="showCamera"
                    size="large"
                    inline-prompt
                    :active-action-icon="Microphone"
                    :inactive-action-icon="Mute"
                    active-text="打开"
                    inactive-text="关闭"
                  />
                  <el-text style="margin-left: 5px" size="large">麦克风</el-text>
                </div>
              </div>
            </div>
            <div>
              <div class="mb-5">
                <el-row :gutter="24">
                  <el-col :span="12">
                      <el-card body-style="display: flex; flex-direction: column; items-align: center;">
                        <div class="flex justify-center">
                            <el-avatar src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-avatar>
                        </div>
                        <el-text size="large">Sandy</el-text>
                      </el-card>
                  </el-col>
                  <el-col :span="12">
                    <el-card body-style="display: flex; flex-direction: column; items-align: center;">
                      <div class="flex justify-center">
                        <el-avatar src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-avatar>
                      </div>
                      <el-text size="large">Kimberly</el-text>
                    </el-card>
                  </el-col>
                </el-row>
              </div>
              <div>
                <el-card style="max-height: 300px; max-width: 480px; min-width: 220px; overflow: auto;">
                  <template #header>
                    <div>聊天框</div>
                  </template>
                  <template #default>
                    <div>  
                    </div>
                    <div>  
                    </div>
                  </template>
                  <template #footer>
                    <el-row :gutter="24">
                      <el-col :span="20">
                        <el-input placeholder="请输入您要发送的消息"></el-input>
                      </el-col>
                      <el-col :span="4">
                        <el-button type="primary" :icon="Promotion" circle />
                      </el-col>
                    </el-row>
                  </template>
                </el-card>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {  ArrowLeft, View, Hide, Microphone, Mute, Promotion  } from '@element-plus/icons-vue'

const showCamera = ref(false)
</script>