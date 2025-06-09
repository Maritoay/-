<template>
  <div class="home-page px-16 xl:px-24">
    <!-- 第一个盒子 -->
    <div class="mb-8 flex pt-36 pb-8 px-24 items-center bg-[#dff2ff] shadow-xl rounded-3xl">
      <!-- 左侧 -->
      <div class="LeftFirstContainer mr-16 flex items-center">
        <!-- 头像框 -->
        <div class="AvatarContainer mr-5 xl:mr-8 2xl:mr-12">
          <img
            class="h-36 w-36 xl:h-42 xl:w-42 2xl:w-48 2xl:h-48 rounded-full"
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
      <div class="RightFirstContainer flex flex-1 flex-wrap items-center">
        <div class="mr-12 flex flex-col items-center justify-center bg-white rounded-2xl w-64 h-56 hover:ring-4 hover:ring-blue-300 duration-550 shadow-md">
          <div class="mb-5 text-3xl font-bold text-[#797979]">
            今日课程
          </div>
          <div class="text-4xl font-bold">
            3
          </div>
        </div>
        <div class="mr-12 bg-white rounded-2xl w-64 h-56 hover:ring-4 hover:ring-blue-300 duration-550 shadow-md">
          <div class="mr-12 flex flex-col items-center justify-center bg-white rounded-2xl w-64 h-56 hover:ring-4 hover:ring-blue-300 duration-550 shadow-md">
            <div class="mb-5 text-3xl font-bold text-[#797979]">
              发布的录播课
            </div>
            <div class="text-4xl font-bold">
              10
            </div>
          </div>
        </div>
        <div class="mr-12 bg-white rounded-2xl w-64 h-56 hover:ring-4 hover:ring-blue-300 duration-550 shadow-md">
          <div class="mr-12 flex flex-col items-center justify-center bg-white rounded-2xl w-64 h-56 hover:ring-4 hover:ring-blue-300 duration-550 shadow-md">
            <div class="mb-5 text-3xl font-bold text-[#797979]">
              直播课
            </div>
            <div class="text-4xl font-bold">
              5
            </div>
          </div>
        </div>
        <div class="bg-white rounded-2xl w-64 h-56 hover:ring-4 hover:ring-blue-300 duration-550 shadow-md">
          <div class="mr-12 flex flex-col items-center justify-center bg-white rounded-2xl w-64 h-56 hover:ring-4 hover:ring-blue-300 duration-550 shadow-md">
            <div class="mb-5 text-3xl font-bold text-[#797979]">
              已上课时数
            </div>
            <div class="text-4xl font-bold">
              11h
            </div>
        </div>
        </div>
      </div>
    </div>
    <!-- 第二个盒子 -->
    <div class="mb-8 py-5 px-12 rounded-2xl bg-[#dff2ff] shadow-xl">
      <!-- 今日课程 -->
      <div class="mb-5">
        <div class="py-3 w-36 text-center text-2xl font-bold rounded-full bg-[#ff7a68]">
          今日课程
        </div>
      </div>
      <!-- 列表 -->
      <div>
        <div class="px-5 py-3 flex items-center justify-between bg-white rounded-3xl shadow-md hover:ring-2 hover:ring-[#8ec5ff] duration-300">
          <!-- 左侧 -->
          <div class="flex items-center">
            <img class="mr-5 w-16 h-16 rounded-full" src="/src/assets/img/avatar.png" alt="">
            <!-- 昵称 -->
            <div class="mr-6 text-2xl">Kimberly</div>
            <div class="mr-12 text-2xl text-slate-500">|</div>
            <!-- 课程话题 -->
            <div class="mr-12 text-2xl">课程话题：春节下的中国</div>
            <!-- 预约时间 -->
            <div class="mr-24 text-2xl">预约时间：2025/2/11 16：00~17：00</div>
            <!-- 查看教案 -->
            <div class="font-thin text-2xl hover:text-blue-300 duration-300 cursor-pointer">
                查看教案
            </div>
          </div>
          <!-- 右侧 -->
          <div>
            <div class="px-5 py-2 text-xl font-thin bg-[#7cc4f8] hover:bg-white hover:ring-2 hover:ring-[#8ec5ff] hover:text-[#7cc4f8] duration-300 rounded-full cursor-pointer">
              进入课堂
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 第三个盒子 -->
    <div class="mb-8 py-5 px-12 rounded-2xl bg-[#dff2ff] shadow-xl">
      <!-- 今日课程 -->
      <div class="mb-5">
        <div class="py-3 w-36 text-center text-2xl font-bold rounded-full bg-[#7cc4f8]">
          今日课程
        </div>
      </div>
      <!-- 列表 -->
      <div>
        <div class="px-5 py-3 flex items-center justify-between bg-white rounded-3xl shadow-md hover:ring-2 hover:ring-[#8ec5ff] duration-300">
          <!-- 左侧 -->
          <div class="flex items-center">
            <img class="mr-5 w-16 h-16 rounded-full" src="/src/assets/img/avatar.png" alt="">
            <!-- 昵称 -->
            <div class="mr-6 text-2xl">Kimberly</div>
            <div class="mr-12 text-2xl text-slate-500">|</div>
            <!-- 课程话题 -->
            <div class="mr-12 text-2xl">课程话题：春节下的中国</div>
            <!-- 预约时间 -->
            <div class="mr-24 text-2xl">预约时间：2025/2/11 16：00~17：00</div>
            <!-- 查看教案 -->
            <div class="font-thin text-2xl hover:text-blue-300 duration-300 cursor-pointer">
                查看教案
            </div>
          </div>
          <!-- 右侧 -->
          <div>
            <div class="px-5 py-2 text-xl font-thin bg-[#7cc4f8] hover:bg-white hover:ring-2 hover:ring-[#8ec5ff] hover:text-[#7cc4f8] duration-300 rounded-full cursor-pointer">
              接受预约
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 第四个盒子 -->
    <div class="py-5 px-12 rounded-2xl bg-[#dff2ff] shadow-xl">
      <!-- 今日课程 -->
      <div class="mb-5">
        <div class="py-3 w-36 text-center text-2xl font-bold rounded-full bg-[#ced5d9]">
          今日课程
        </div>
      </div>
      <!-- 列表 -->
      <div>
        <div class="px-5 py-3 flex items-center justify-between bg-white rounded-3xl shadow-md hover:ring-2 hover:ring-[#8ec5ff] duration-300">
          <!-- 左侧 -->
          <div class="flex items-center">
            <img class="mr-5 w-16 h-16 rounded-full" src="/src/assets/img/avatar.png" alt="">
            <!-- 昵称 -->
            <div class="mr-6 text-2xl">Kimberly</div>
            <div class="mr-12 text-2xl text-slate-500">|</div>
            <!-- 课程话题 -->
            <div class="mr-12 text-2xl">课程话题：春节下的中国</div>
            <!-- 预约时间 -->
            <div class="mr-24 text-2xl">预约时间：2025/2/11 16：00~17：00</div>
            <!-- 查看教案 -->
            <div class="font-thin text-2xl hover:text-blue-300 duration-300 cursor-pointer">
                查看教案
            </div>
          </div>
          <!-- 右侧 -->
          <div>
            <div class="px-5 py-2 text-xl font-thin bg-[#7cc4f8] hover:bg-white hover:ring-2 hover:ring-[#8ec5ff] hover:text-[#7cc4f8] duration-300 rounded-full cursor-pointer">
              接受预约
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getTeacherGetTeacherFirstPageAPI } from '@/api/home'

// 获取教师端相关内容
const getTeacherGetTeacherFirstPage = async () => {
    const res = await getTeacherGetTeacherFirstPageAPI()
    console.log(res)
}

getTeacherGetTeacherFirstPage()
</script>

<style lang="less" scoped>
.home-page {
  margin: 0 auto;
  max-width: 2000px;
}
</style>