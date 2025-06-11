<template>
    <div class="onlineCourse-page mt-36 px-24 overflow-auto box-border">
        <div class="p-12 min-w-[600px] rounded-2xl bg-[#eff9ff] shadow-2xl box-border">
            <!-- 顶部区域 -->
            <div class="flex">
                <!-- tabs栏 -->
                <div class="mr-8">
                    <el-tabs
                        v-model="activeTab"
                        type="card"
                        class="demo-tabs"
                        @tab-change="handleTabChange"
                    >
                        <el-tab-pane label="口语" name="speaking">
                            <template #label>
                                <span class="custom-tabs-label">
                                    <el-icon><Microphone /></el-icon>
                                    <span>口语</span>
                                </span>
                            </template>
                            <!-- 此处用于放置el-table -->
                        </el-tab-pane>
                        <el-tab-pane label="语法" name="grammar">
                            <template #label>
                                <span class="custom-tabs-label">
                                    <el-icon><Collection /></el-icon>
                                    <span>语法</span>
                                </span>
                            </template>
                        </el-tab-pane>
                    </el-tabs>
                </div>
                <!-- 搜索框和上传按钮 -->
                <div class="flex-1 flex justify-between">
                    <el-input
                        v-model="input3"
                        style="max-width: 300px; height: 40px"
                        placeholder="请输入您要搜索的内容"
                        class="input-with-select"
                    >
                        <template #append>
                            <el-button :icon="Search" />
                        </template>
                    </el-input>
                    <el-button @click="uploadCourse" type="primary" :icon="Plus">上传课程</el-button>
                </div>
            </div>
            <!-- 内容区域 -->
            <div v-if="activeTab==='speech'" class="grid gap-8 grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
              <div class="" v-for="item in 12" :key="item">
                <el-card>
                    <template #header>
                        <div>购物对话学习</div>
                    </template>
                    <el-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-image>
                    <el-text class="mx-1">
                        当你来到一个商场，想尽情购买的时候，应该怎么和售货员对话呢？
                    </el-text>
                    <template #footer>
                        <el-button type="primary" plain :icon="School">进入学习</el-button>
                    </template>
                </el-card>
              </div>
            </div>
            <div v-else class="grid gap-8 grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
              <div class="" v-for="item in 12" :key="item">
                <el-card>
                    <template #header>
                        <div>购物对话学习</div>
                    </template>
                    <el-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>
                    <el-text class="mx-1">
                        当你来到一个商场，想尽情购买的时候，应该怎么和售货员对话呢？
                    </el-text>
                    <template #footer>
                        <el-button type="primary" plain :icon="School">进入学习</el-button>
                    </template>
                </el-card>
              </div>
            </div>
            <!-- 存放上传课程drawer -->
            <el-drawer
              v-model="isShowDialog"
              size="40%"
              lock-scroll="true"
            >
              <template #header>
                <div>上传课程</div>
              </template>
              <template #default>
                <el-form
                  ref="ruleFormRef"
                  :model="form"
                  :rules="rules"
                >
                  <el-form-item label="课程名称" prop="courseTitle">
                    <el-input v-model="form.courseTitle" placeholder="请输入课程名称"></el-input>
                  </el-form-item>
                  <el-form-item label="课程分类" prop="courseCategory">
                    <el-input v-model="form.courseCategory" placeholder="请输入课程分类"></el-input>
                  </el-form-item>
                  <el-form-item label="课程简介" label-position="top" prop="introduction">
                    <el-input v-model="form.introduction" placeholder="请输入课程简介" type="textarea"></el-input>
                  </el-form-item>
                  <el-form-item label="教学计划" label-position="top" prop="coursePlan">
                    <el-input v-model="form.coursePlan" placeholder="请输入教学计划" type="textarea"></el-input>
                  </el-form-item>
                  <!--  -->
                  <el-form-item>

                  </el-form-item>
                </el-form>
              </template>
              <template #footer>
                <el-button type="danger">取消</el-button>
                <el-button type="primary" plain @click="confirmClick">确认</el-button>
              </template>
            </el-drawer>
            <!-- 分页器 -->
            <div class="mt-24 flex justify-center">
              <el-pagination
                v-model:current-page="currentPage"
                v-model:page-size="pageSize"
                size="large"
                background
                layout="total, prev, pager, next, jumper"
                :total="400"
                @current-change="handleCurrentChange"
              />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Search, Microphone, Collection, Plus, School } from '@element-plus/icons-vue'
import { getCourseDetailAPI, postTeacherUploadOnlineCourseAPI, postTeacherGetOnlineCourseListAPI } from '@/api/onlineCourse'

// 页面加载的同时，获取网络课程列表，默认为口语
onMounted(async () => {
  const res = await postTeacherGetOnlineCourseListAPI({
    courseCategory: activeTab.value,
    pageSize: pageSize.value,
    currentPage: currentPage.value,
  })
  console.log(res)
})

// tabs栏所需变量
const activeTab = ref('speaking')

// 分页器所需变量
const currentPage = ref(1)
const pageSize = ref(12)

// tabs栏所需函数
const handleTabChange = async () => {
  // tabs栏切换的时候，获取不同tabs对应的网络课程列表
  console.log(activeTab.value)
  
  const res = await postTeacherGetOnlineCourseListAPI({
    courseCategory: activeTab.value,
    pageSize: pageSize.value,
    currentPage: currentPage.value,
  })
  console.log(res)
}
// 分页器所需函数
const handleCurrentChange = async (val) => {
  console.log(val)
  // 发起分页请求
  const res = await postTeacherGetOnlineCourseListAPI({
    courseCategory: activeTab.value,
    pageSize: pageSize.value,
    currentPage: currentPage.value,
  })
  console.log(res)
}

// 抽屉所需的变量
const ruleFormRef = ref(null)
const isShowDialog = ref(false)
const form = ref({
  courseTitle: '',
  courseCategory: '',
  introduction: '',
  coursePlan: ''
})
const rules = ref({
  courseTitle: [{ required: true, message: '请输入课程名称', trigger: 'blur' }],
  courseCategory: [{ required: true, message: '请输入课程分类', trigger: 'blur' }],
  introduction: [{ required: true, message: '请上传课程视频', trigger: 'blur' }],
  coursePlan: [{ required: true, message: '请上传课程封面', trigger: 'blur' }]
})
const uploadCourse = () => {
  isShowDialog.value = true
}
const confirmClick = async () => {
  console.log(111)
  
  await ruleFormRef.value.validate()
}
</script>

<style lang="less" scope>
.onlineCourse-page {
  min-height: 100vh;
}
</style>

<style>
.demo-tabs > .el-tabs__content {
  /* padding: 32px; */
  color: #6b778c;
  /* font-size: 32px; */
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>