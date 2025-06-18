<template>
  <div class="home-page px-[40px] w-full overflow-auto box-border">
    <!-- 第一个盒子 -->
    <div class="mb-8 min-w-[600px] flex flex-col xxxl:flex-row pt-36 px-24 items-center bg-[#dff2ff] shadow-xl rounded-3xl">
      <!-- 左侧 -->
      <div class="LeftFirstContainer mr-16 mb-8 xxxl:mb-0 flex items-center">
        <!-- 头像框 -->
        <div class="AvatarContainer mr-5 xl:mr-8 2xl:mr-12">
          <img
            class="h-42 w-42 xxxl:w-48 xxxl:h-48 rounded-full"
            src="/src/assets/img/avatar.png"
            alt=""
          />
        </div>
        <!-- 教师名称职称 -->
        <div class="TeacherInfoContainer flex flex-col items-center">
          <div class="Name mb-3 text-2xl xl:text-3xl 2xl:text-5xl font-bold">
            <span>Sandy</span>
          </div>
          <div class="JobTitle py-3 px-12 text-2xl bg-yellow-300 rounded-3xl">
            <span>教师</span>
          </div>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="RightFirstContainer flex items-center flex-wrap">
        <div class="mr-12 mb-8 flex flex-col items-center justify-center bg-white rounded-2xl w-42 h-42 xxl:w-48 xxl:h-48 xxxl:w-64 xxxl:h-56 hover:ring-4 hover:ring-blue-300 duration-550 shadow-md">
          <div class="mb-5 text-xl xxxl:text-3xl font-bold text-[#797979]">
            今日课程
          </div>
          <div class="text-2xl xxxl:text-4xl font-bold">
            3
          </div>
        </div>
        <div class="mr-12 mb-8 flex flex-col items-center justify-center bg-white rounded-2xl w-42 h-42 xxl:w-48 xxl:h-48 xxxl:w-64 xxxl:h-56 hover:ring-4 hover:ring-blue-300 duration-550 shadow-md">
          <div class="mb-5 text-xl xxxl:text-3xl font-bold text-[#797979]">
            发布的录播课
          </div>
          <div class="text-2xl xxxl:text-4xl font-bold">
            10
          </div>
        </div>
        <div class="mr-12 mb-8 flex flex-col items-center justify-center bg-white rounded-2xl w-42 h-42 xxl:w-48 xxl:h-48 xxxl:w-64 xxxl:h-56 hover:ring-4 hover:ring-blue-300 duration-550 shadow-md">
          <div class="mb-5 text-xl xxxl:text-3xl font-bold text-[#797979]">
            直播课
          </div>
          <div class="text-2xl xxxl:text-4xl font-bold">
            5
          </div>
        </div>
        <div class="flex mb-8 flex-col items-center justify-center bg-white rounded-2xl w-42 h-42 xxl:w-48 xxl:h-48 xxxl:w-64 xxxl:h-56 hover:ring-4 hover:ring-blue-300 duration-550 shadow-md">
          <div class="mb-5 text-xl xxxl:text-3xl font-bold text-[#797979]">
            已上课时数
          </div>
          <div class="text-2xl xxxl:text-4xl font-bold">
            11h
          </div>
        </div>
      </div>
    </div>
    <!-- 第二个盒子 -->
    <div class="mb-8 py-5 px-12 min-w-[600px] rounded-2xl bg-[#dff2ff] shadow-xl">
      <!-- 今日课程 -->
      <div class="mb-5">
        <div class="py-3 w-36 text-center text-2xl font-bold rounded-full bg-[#ff7a68]">
          今日课程
        </div>
      </div>
      <!-- 列表 -->
      <div>
        <div class="px-5 py-5 flex items-center justify-between bg-white rounded-3xl shadow-md hover:ring-4 hover:ring-[#8ec5ff] duration-300">
          <el-descriptions
            class="margin-top"
            title="课程信息"
            :column="3"
            size="large"
            style="width: 100%;"
            border
          >
            <template #extra>
              <el-button type="primary" plain>查看教案</el-button>
              <el-button type="primary">预约上课</el-button>
            </template>
            <el-descriptions-item label="教师名称" :rowspan="2" :width="140">
              <el-avatar
                style="width: 100px; height: 100px"
                src="/src//assets/img/avatar.png"
                round
              />
            </el-descriptions-item>
            <el-descriptions-item label="课程话题">春节的相关习俗</el-descriptions-item>
            <el-descriptions-item label="开始时间">2025-03-29 09:00:00</el-descriptions-item>
            <el-descriptions-item label="时长">2 hours</el-descriptions-item>
            <el-descriptions-item label="标签">
              <el-tag size="small">今日课程</el-tag>
            </el-descriptions-item>
          </el-descriptions>
        </div>
      </div>
    </div>
    <!-- 第三个盒子 -->
    <div class="mb-8 py-5 px-12 min-w-[600px] rounded-2xl bg-[#dff2ff] shadow-xl">
      <!-- 今日课程 -->
      <div class="mb-5">
        <div class="py-3 w-36 text-center text-2xl font-bold rounded-full bg-[#7cc4f8]">
          今日课程
        </div>
      </div>
      <!-- 列表 -->
      <div>
        <div class="px-5 py-5 flex items-center justify-between bg-white rounded-3xl shadow-md hover:ring-4 hover:ring-[#8ec5ff] duration-300">
          <el-descriptions
            class="margin-top"
            title="课程信息"
            :column="3"
            size="large"
            style="width: 100%;"
            border
          >
            <template #extra>
              <el-button type="warning" plain>查看教案</el-button>
              <el-button type="warning">预约上课</el-button>
            </template>
            <el-descriptions-item label="教师名称" :rowspan="2" :width="140">
              <el-avatar
                style="width: 100px; height: 100px"
                src="/src//assets/img/avatar.png"
                round
              />
            </el-descriptions-item>
            <el-descriptions-item label="课程话题">春节的相关习俗</el-descriptions-item>
            <el-descriptions-item label="开始时间">2025-03-29 09:00:00</el-descriptions-item>
            <el-descriptions-item label="时长">2 hours</el-descriptions-item>
            <el-descriptions-item label="标签">
              <el-tag size="small">今日课程</el-tag>
            </el-descriptions-item>
          </el-descriptions>
        </div>
      </div>
    </div>
    <!-- 第四个盒子 -->
    <div class="mb-24 py-5 px-12 min-w-[600px] rounded-2xl bg-[#dff2ff] shadow-xl">
      <!-- 今日课程 -->
      <div class="mb-5">
        <div class="py-3 w-36 text-center text-2xl font-bold rounded-full bg-[#ced5d9]">
          今日课程
        </div>
      </div>
      <!-- 列表 -->
      <div>
        <div class="px-5 py-5 flex items-center justify-between bg-white rounded-3xl shadow-md hover:ring-4 hover:ring-[#8ec5ff] duration-300">
          <el-descriptions
            class="margin-top"
            title="课程信息"
            :column="3"
            size="large"
            style="width: 100%;"
            border
          >
            <template #extra>
              <el-button type="info" plain>查看教案</el-button>
              <el-button type="info">预约上课</el-button>
            </template>
            <el-descriptions-item label="教师名称" :rowspan="2" :width="140">
              <el-avatar
                style="width: 100px; height: 100px"
                src="/src//assets/img/avatar.png"
                round
              />
            </el-descriptions-item>
            <el-descriptions-item label="课程话题">春节的相关习俗</el-descriptions-item>
            <el-descriptions-item label="开始时间">2025-03-29 09:00:00</el-descriptions-item>
            <el-descriptions-item label="时长">2 hours</el-descriptions-item>
            <el-descriptions-item label="标签">
              <el-tag size="small">今日课程</el-tag>
            </el-descriptions-item>
          </el-descriptions>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getTeacherGetTeacherFirstPageAPI } from '@/api/home'

const teacherFirstPageContent = ref({})
// 获取教师端相关内容
const getTeacherGetTeacherFirstPage = async () => {
    const res = await getTeacherGetTeacherFirstPageAPI()
    console.log(res)
    teacherFirstPageContent.value = res.data
}

getTeacherGetTeacherFirstPage()
</script>

<style lang="less" scoped>
.home-page {
  margin: 0 auto;
  min-height: 100%;
  // max-width: 2000px;
  // min-width: 100%;
}
</style>