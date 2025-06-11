<template>
  <div class="center-page mt-36">
    <div class="first-container">
      <div class="test p-12 min-w-[800px] box-border bg-[#dff2ff] rounded-2xl shadow-2xl">
        <el-tabs tab-position="left" style="font-size: 24px;" class="demo-tabs">
            <el-tab-pane label="个人信息">
            <el-form ref="ruleFormRef" :form="form" :rules="rules">
                <el-form-item label="修改昵称" prop="name" label-position="top">
                  <el-input v-model="form.name" style="width: 480px;" size="large"></el-input>
                </el-form-item>
                <el-form-item label="修改头像" label-position="top">

                </el-form-item>
                <el-form-item label="修改国籍" prop="country" label-position="top">
                  <el-input v-model="form.country" style="width: 480px;" size="large"></el-input>
                </el-form-item>
                <el-form-item label="修改地区" prop="region" label-position="top">
                  <el-input v-model="form.region" style="width: 480px;" size="large"></el-input>
                </el-form-item>
                <el-form-item label="修改毕业院校" prop="graduationSchool" label-position="top">
                <el-cascader
                    size="large"
                    v-model="form.graduationSchool"
                    :options="schoolOptions"
                    @change="handleChange"
                />
                </el-form-item>
                <el-form-item label="修改出生年月" prop="birthDate" label-position="top">
                <el-date-picker
                    v-model="form.birthDate"
                    type="date"
                    placeholder="选择日期"
                    size="large"
                />
                </el-form-item>
                <el-form-item label="修改教学经验" prop="experience" label-position="top">
                  <el-input style="width: 480px;" size="large"></el-input>
                </el-form-item>
                <el-form-item label="编辑教学特长" prop="expertise" label-position="top">
                  <el-input
                      v-model="form.expertise"
                      style="width: 560px"
                      :autosize="{ minRows: 3 }"
                      type="textarea"
                      placeholder="Please input"
                  />
                </el-form-item>
                <el-form-item label="编辑教学风格" prop="style" label-position="top">
                  <el-input
                      v-model="form.expertise"
                      style="width: 560px"
                      :autosize="{ minRows: 3 }"
                      type="textarea"
                      placeholder="Please input"
                  />
                </el-form-item>
            </el-form>
            </el-tab-pane>
            <el-tab-pane label="修改密码">
              <el-form
                ref="ruleFormRef1"
                :form="form1"
                :rules="rules1"
              >
                <el-form-item label="原密码" label-position="top" prop="oldPassword">
                  <el-input v-model="form1.oldPassword" style="width: 480px;"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="newPassword" label-position="top">
                  <el-input v-model="form1.newPassword" style="width: 480px;"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary">确认修改</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="消息通知">消息通知</el-tab-pane>
            <el-tab-pane label="退出登录">退出登录</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const userInfo = ref(userStore.getUserInfo())
console.log(userInfo.value)

const ruleFormRef = ref(null)
const form = ref({
  name: userInfo.value.name || '',
  region: userInfo.value.region || '',
  experience: userInfo.value.experience || '',
  country: userInfo.value.country || '',
  graduationSchool: userInfo.value.graduationSchool || '',
  birthDate: userInfo.value.birthDate || '',
  style: userInfo.value.style || '',
  expertise: userInfo.value.expertise || ''
})
const rules = ref({
  name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
  region: [{ required: true, message: '请选择地区', trigger: 'blur' }],
  experience: [{ required: true, message: '请输入工作经验', trigger: 'blur' }],
  country: [{ required: true, message: '请选择国家', trigger: 'blur' }],
  graduationSchool: [{ required: true, message: '请输入毕业院校', trigger: 'blur' }],
  birthDate: [{ required: true, message: '请选择出生日期', trigger: 'change' }],
  style: [{ required: true, message: '请输入教学风格', trigger: 'blur' }],
  expertise: [{ required: true, message: '请输入专业领域', trigger: 'blur' }]
})

const schoolOptions = [
  {
    value: '广东省',
    label: '广东省',
    children: [
      {
        value: '中山大学',
        label: '中山大学'
      },
      {
        value: '华南理工大学',
        label: '华南理工大学'
      }
    ]
  },
  {
    value: '北京市',
    label: '北京市',
    children: [
      {
        value: '清华大学',
        label: '清华大学'
      },
      {
        value: '北京大学',
        label: '北京大学'
      }
    ]
  },
  {
    value: '上海市',
    label: '上海市',
    children: [
      {
        value: '复旦大学',
        label: '复旦大学'
      },
      {
        value: '上海交通大学',
        label: '上海交通大学'
      }
    ]
  }
]

const ruleFormRef1 = ref(null)
const form1 = ref({
  oldPassword: '',
  newPassword: ''
})
const rules1 = ref({
  oldPassword: [{ required: true, message: '请输入原密码', trigger: 'blur' }],
  newPassword: [{ required: true, message: '请输入新密码', trigger: 'blur' }]
})

</script>

<style lang="less" scoped>
.center-page {
  height: 100%;
  overflow: auto;
  .first-container {
    padding: 0 40px;
    width: 100%;
    overflow: auto; /* 如果子元素超出，显示滚动条 */
    box-sizing: border-box; /* padding 不影响总宽度 */
  }
}
</style>