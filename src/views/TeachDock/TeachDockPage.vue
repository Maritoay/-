<template>
    <div class="dock-page mt-36 min-h-full px-8 overflow-auto box-border">
        <div class="mb-24 p-5 min-w-[800px] box-border bg-[#dff2ff] rounded-2xl shadow-xl">
            <div v-for="item in 5" :key="item" class="mb-5 py-3 px-4 rounded-xl shadow-xl bg-white">
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
                    <el-button type="primary" @click="$router.push('/coursedetail')">预约上课</el-button>
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
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getAppointmentCourseListAPI } from '@/api/dock'

const appointCourseList = ref([])
const getAppointmentCourseList = async () => {
  const res = await getAppointmentCourseListAPI()
  console.log(res)
}
onMounted(() => {
    getAppointmentCourseList()
})
</script>