<template>
  <div class="checkdetails-page mt-36 px-5 py-3 overflow-auto bg-[#dff2ff] rounded-2xl shadow-2xl box-border">
    <div class="mb-5">
      <el-button :icon="ArrowLeft" circle />
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
              <el-button v-if="isBooking === false" @click="clickBooking" type="primary">确认预约</el-button>
              <el-button v-else type="success" plain @click="clickBooking">已预约</el-button>
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
      <el-dialog
        v-model="dialogVisible"
        title="确认预约"
        width="500"
        :before-close="handleClose"
      >
        <span>您是否取消预约该课程？</span>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="cancelBooking">
              确认
            </el-button>
          </div>
        </template>
      </el-dialog>
    </div>
    <!-- 标题 -->
    <div class="mb-8 p-3 min-w-[800px] bg-white shadow-lg rounded-xl">
      <!-- 标题 -->
      <div class="mb-3 text-xl text-[#303133] font-bold">提交关键词</div>
      <div class="flex gap-2 text-md">
        <el-tag  size="large" type="primary">航拍</el-tag>
        <el-tag  size="large" type="primary">订票</el-tag>
        <el-tag  size="large" type="primary">退票</el-tag>
      </div>
    </div>
    <!-- 生成话轮 -->
    <div v-if="isNeedChange === false" class="mb-8 p-3 min-w-[800px] bg-white shadow-lg rounded-xl">
      <div class="mb-3 flex items-center">
        <div class="text-xl text-[#303133] font-bold">生成话轮</div>
        <el-button @click="isNeedChange = true" v-if="isBooking === true" class="ml-3 text-xl text-[#303133] font-bold" size="small">完善教案</el-button>
      </div>
      <div class="mb-5 p-3 border-2 border-[#f5f7fa] rounded-xl hover:ring-2 hover:ring-[#dff2ff] duration-200">
        <!-- 标题 -->
        <div class="mb-3 text-lg font-bold">话轮1</div>
        <div>
          <el-collapse v-model="activeCollapse" style="max-width: 720px;">
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
      <div class="mb-5 p-3 border-2 border-[#f5f7fa] rounded-xl hover:ring-2 hover:ring-[#dff2ff] duration-200">
        <!-- 标题 -->
        <div class="mb-3 text-lg font-bold">
          话轮2
        </div>
        <div>
          <el-collapse v-model="activeCollapse" style="max-width: 720px;">
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
      <div class="mb-5 p-3 border-2 border-[#f5f7fa] rounded-xl hover:ring-2 hover:ring-[#dff2ff] duration-200">
        <!-- 标题 -->
        <div class="mb-3 text-lg font-bold">
          话轮3
          <el-tag size="small" type="danger">已选择</el-tag>
        </div>
        <div>
          <el-collapse v-model="activeCollapse" style="max-width: 720px;">
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
    <!-- 完善教案 -->
    <div v-else class="mb-8 p-3 min-w-[800px] bg-white shadow-lg rounded-xl">
      <div class="mb-3">
        <el-button @click="isNeedChange = false" round :icon="Promotion">返回</el-button>
      </div>
      <div class="mb-3 text-xl text-[#303133] font-bold">
        <el-tag size="large" style="margin-right: 10px;">完善教案</el-tag> 
      </div>
      <div class="mb-5 p-3 border-2 border-[#f5f7fa] rounded-xl hover:ring-2 hover:ring-[#dff2ff] duration-200">
        <div class="mb-3">
          <el-input
            v-model="textarea"
            style="width: 720px"
            :rows="2"
            type="textarea"
            placeholder="Please input"
          />
        </div>
        <el-button round size="small" type="info" :icon="EditPen">修改</el-button>
      </div>
      <!-- 添加语法点 -->
      <div class="mb-3 text-xl text-[#303133] font-bold">
        <el-tag size="large" style="margin-right: 10px;">添加语法点</el-tag> 
        <el-button type="primary" circle :icon="Plus" size="small"></el-button>
      </div>
      <div class="mb-5 p-3 border-2 border-[#f5f7fa] rounded-xl hover:ring-2 hover:ring-[#dff2ff] duration-200">
        <el-form>
          <el-form-item label="语法点" label-position="top">
            <el-input size="large" style="max-width: 560px;"></el-input>
          </el-form-item>
          <el-form-item label="对应话轮内容" label-position="top">
            <el-input size="large" style="max-width: 560px;"></el-input>
          </el-form-item>
          <el-form-item label="上传学案" label-position="top">
            <el-upload
              v-model:file-list="fileList"
              class="upload-demo"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              multiple
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              :limit="3"
              :on-exceed="handleExceed"
            >
              <el-button type="primary">上传学案</el-button>
              <template #tip>
              <div class="el-upload__tip">
              jpg/png files with a size less than 500KB.
              </div>
              </template>
            </el-upload>
            </el-form-item>
        </el-form>
        <el-button size="large">确认</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ArrowLeft, Promotion, EditPen, Plus } from '@element-plus/icons-vue'

const dialogVisible = ref(false)
const cancelBooking = () => {
  ElMessage({
    message: '取消预约成功！',
    type: 'success',
  })
  dialogVisible.value = false
  isBooking.value = false
  isNeedChange.value = false
}
const handleClose = () => {
  dialogVisible.value = false
}

const isBooking = ref(false)
const clickBooking = () => {
  if (isBooking.value) {
    dialogVisible.value = true
    return
  }
  isBooking.value = true
  
  ElMessage({
    message: '预约成功！',
    type: 'success',
    plain: true,
  })
}

const isNeedChange = ref(false)

</script>