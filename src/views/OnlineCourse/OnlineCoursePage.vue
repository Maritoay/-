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
                  <!-- 上传课程封面 -->
                  <el-form-item label="上传课程封面">
                    <el-upload
                      class="avatar-uploader"
                      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload"
                    >
                      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                      <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
                    </el-upload>
                  </el-form-item>
                  <!-- 上传教学视频 -->
                  <el-form-item label="上传教学视频">
                    <el-upload
                      class="avatar-uploader"
                      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload"
                    >
                      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                      <el-icon v-else class="avatar-uploader-icon"><VideoCamera /></el-icon>
                    </el-upload>
                  </el-form-item>
                </el-form>
                <!-- 设置课后作业 -->
                <div>
                  <!-- 标题 -->
                  <div class="mb-3 text-xl text-[#606266]">
                    <el-tag type="primary" size="large">设置课后作业</el-tag>
                    <el-button round style="margin-left: 10px;" size="small">添加作业</el-button>
                  </div>
                  <div>
                    <div class="p-3 border-1 border-slate-200">
                      <div class="mb-2 flex">
                        <el-text style="margin-right: 10px;" size="large">选择题型:</el-text>
                        <el-select style="max-width: 200px;" placeholder="请选择题型">
                          <el-option
                          v-for="item in questionCatrgories"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                          
                          <template #footer>
                            <el-button v-if="!isAdding" text bg size="small" @click="onAddOption">
                              新增选项
                            </el-button>
                            <template v-else>
                              <el-input
                                v-model="optionName"
                                class="option-input"
                                placeholder="输入选项名称"
                                size="small"
                              />
                              <el-button type="primary" size="small" @click="onConfirm">
                                确定
                              </el-button>
                              <el-button size="small" @click="clear">取消</el-button>
                            </template>
                          </template>
                        </el-select>
                      </div>
                      <div class="flex">
                        <el-text style="margin-right: 10px;" size="large">上传题目:</el-text>
                        <el-input style="max-width: 480px;" type="textarea" placeholder="请输入题目..."></el-input>
                      </div>
                    </div>
                  </div>
                </div>
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
import { Search, Microphone, Collection, Plus, School, VideoCamera } from '@element-plus/icons-vue'
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
  // const res = await postTeacherGetOnlineCourseListAPI({
  //   courseCategory: activeTab.value,
  //   pageSize: pageSize.value,
  //   currentPage: currentPage.value,
  // })
  // console.log(res)
}

// 抽屉所需的变量
const ruleFormRef = ref(null)
const isShowDialog = ref(false)
const optionName = ref('')
const isAdding = ref(false)
const questionCatrgories = ref([
  { label: '单选题', value: '单选题' },
  { label: '多选题', value: '多选题' },
  { label: '填空题', value: '填空题' }
])
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
const onConfirm = () => {
  if (optionName.value) {
    questionCatrgories.value.push({
      label: optionName.value,
      value: optionName.value,
    })
    clear()
  }
}
const clear = () => {
  optionName.value = ''
  isAdding.value = false
}
const onAddOption = () => {
  isAdding.value = true
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
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}
.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 150px;
  height: 150px;
  text-align: center;
}
</style>