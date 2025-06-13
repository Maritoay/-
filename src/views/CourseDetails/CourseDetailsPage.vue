<template>
    <div class="detail-page mt-36 px-5 py-3 overflow-auto bg-[#dff2ff] rounded-2xl shadow-2xl box-border">
      <div class="mb-5 min-w-[800px]">
        <el-button type="primary" :icon="ArrowLeft"></el-button>
      </div>
      <div class="mb-8 p-3 min-w-[800px] bg-white shadow-lg rounded-xl">
          <!--  -->
          <el-descriptions
          class="margin-top"
          title="课程要求"
          :column="4"
          size="large"
          style="width: 100%;"
          border
        >
          <template #extra>
            <el-button type="primary">确认预约</el-button>
          </template>
          <el-descriptions-item label="学生名称" :rowspan="2" :width="140">
            <el-avatar
              style="width: 100px; height: 100px"
              src="/src//assets/img/avatar.png"
              round
            />
          </el-descriptions-item>
          <el-descriptions-item label="课程话题">春节的相关习俗</el-descriptions-item>
          <el-descriptions-item label="预约时间">2025-03-29 09:00:00</el-descriptions-item>
          <el-descriptions-item label="时长">2 hours</el-descriptions-item>
          <el-descriptions-item label="教师评分">4.8以上</el-descriptions-item>
          <el-descriptions-item label="教师擅长领域">口语</el-descriptions-item>
          <el-descriptions-item label="教学经验">1-3年</el-descriptions-item>
          <el-descriptions-item label="课程难度">中级</el-descriptions-item>
          <el-descriptions-item label="课程内容">口语</el-descriptions-item>
        </el-descriptions>
      </div>
      <!-- 提交关键词 -->
      <div class="mb-8 p-3 min-w-[800px] bg-white shadow-lg rounded-xl">
        <!-- 标题 -->
        <div class="mb-3 text-lg text-[#303133] font-bold">提交关键词</div>
        <div class="flex gap-2 text-md">
          <el-tag  size="large" type="primary">航拍</el-tag>
          <el-tag  size="large" type="primary">订票</el-tag>
          <el-tag  size="large" type="primary">退票</el-tag>
        </div>
      </div>
      <!-- 生成话轮 -->
      <div class="mb-8 p-3 min-w-[800px] bg-white shadow-lg rounded-xl">
        <div class="mb-3 text-lg text-[#303133] font-bold">生成话轮</div>
        <div class="">
          <div class="mb-3">
            <div class="text-lg text-[#303133] font-bold">
              话轮2 
              <el-tag size="small" type="danger">已选择</el-tag>
              <el-button style="margin-left: 10px" type="primary" :icon="Headset">播放语音</el-button>
            </div>
          </div>
          <div>
            <el-collapse v-model="activeCollapse" style="max-width: 640px;">
              <el-collapse-item title="话轮详情" name="1">
                <div>A: 我订的航班时间不合适，可以改签吗？</div>
                <div>B: 可以的，你可以联系航空公司或订票平台申请改签，但可能需要支付改签费。</div>
                <div>A: 改签的费用高吗？</div>
                <div>B: 费用因航空公司和票价类型而异，通常特价票改签费用会高一些。</div>
                <div>A: 如果航班取消了怎么办？</div>
                <div>B: 如果航班取消，航空公司一般会安排免费改签或退票，你可以根据自己的需求选择。</div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </div>
      <!-- 生词列表 -->
      <div class="mb-8 p-3 min-w-[800px] bg-white shadow-lg rounded-xl">
        <!-- 标题 -->
        <div class="mb-3 text-lg text-[#303133] font-bold">生词列表</div>
        <!-- 列表 -->
        <div class="mb-5 flex gap-x-3">
          <el-tag  size="large" type="info">航拍</el-tag>
          <el-tag  size="large" type="info">订票</el-tag>
          <el-tag  size="large" type="info">退票</el-tag>
        </div>
        <!-- 表格 -->
        <div>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="word" label="词语" />
            <el-table-column prop="pinyin" label="拼音" />
            <el-table-column prop="bilingualTranslation" label="双语翻译" />
            <el-table-column prop="chineseInterpretation" label="中文释义" />
            <el-table-column prop="englishInterpretation" label="英文释义" />
          </el-table>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import {  ArrowLeft, Headset  } from '@element-plus/icons-vue'

const activeCollapse = ref(1)

const tableData = ref([{
  word: 1,
  pinyin: 1,
  bilingualTranslation: 1,
  chineseInterpretation: 1,
  englishInterpretation: 1
}])
</script>

<style lang="less" scoped>

</style>