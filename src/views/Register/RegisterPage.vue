<template>
  <div class="register-page">
    <!-- 步骤条1 -->
    <div class="mb-5 hidden 2xl:block">
      <el-steps style="width: 1400px" :active="activeSteps" align-center>
        <el-step title="注册账号" :icon="Edit" />
        <el-step title="完善信息" :icon="User" />
        <el-step title="进入平台" :icon="Check" />
      </el-steps>
      
    </div>
    <!-- 步骤条2 -->
    <div class="mb-5 block 2xl:hidden">
      <el-steps  style="width: 1000px" :active="2" align-center>
        <el-step title="注册账号"  />
        <el-step title="完善信息"  />
        <el-step title="进入平台"  />
      </el-steps>
    </div>

    <!-- 表单1 -->
    <div v-if="activeSteps === 0" class="px-12 py-16 w-192 xl:w-256 rounded-2xl bg-[#dff2ff] shadow-lg">
      <!-- 标题 -->
      <div class="mb-5 flex items-center">
        <img class="mr-3 w-16 h-16" src="/src/assets/img/logo.png" alt="">
        <img class="h-16" src="/src//assets/img/textLogo.png" alt="">
      </div>
      <!-- 表单区域 -->
      <div>
        <el-form
          ref="ruleFormRef"
          :model="form"
          :rules="rules"
        >
          <el-form-item label="邮箱" label-position="top" prop="email">
            <el-input
              size="large"
              v-model="form.email"
              placeholder="请输入您的邮箱"
            >
                <template #append>
                  <el-select size="large" v-model="selectEmail" placeholder="选择邮箱" style="width: 115px;">
                    <el-option label="@qq.com" value="@qq.com" />
                    <el-option label="@163.com" value="@163.com" />
                    <el-option label="@gmail.com" value="@gmail.com" />
                  </el-select>
                </template>
            </el-input>
          </el-form-item>
          <el-form-item label="邮箱验证码" label-position="top" prop="verifyCode">
            <el-input size="large" v-model="form.verifyCode" placeholder="请输入您的邮箱验证码">
                <template #append>
                  <el-button @click="sendVerifyCode" type="primary">点击获取验证码</el-button>
                </template>
            </el-input>
          </el-form-item>
          <el-form-item label="密码" label-position="top" prop="password">
            <el-input v-model="form.password" placeholder="请输入您的密码" size="large"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" label-position="top" prop="confirmPassword">
            <el-input v-model="form.confirmPassword" placeholder="请再次输入您的密码" size="large"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <!-- 注册按钮 -->
      <div class="mt-8 flex justify-center">
        <button @click="goRegister" class="py-6 px-24 text-3xl text-white font-bold bg-[#7cc4f8] rounded-full shadow-md hover:text-[#7cc4f8] hover:bg-white hover:ring-2 hover:ring-[#7cc4f8] duration-300 cursor-pointer">登录</button>
      </div>
      <!-- 忘记密码 -->
      <div class="mt-3 flex justify-end text-xl hover:text-blue-300 duration-300 cursor-pointer">
        忘记密码？
      </div>
      <!-- 协议 -->
      <div class="flex justify-center items-center mt-5">
         <el-checkbox v-model="checked1" /> 
         <div class="ml-3 text-xl text-slate-600">我已阅读并同意 <span>《用户服务协议》</span> 和 <span>《隐私协议》</span></div>
      </div>
      <div class="mt-5 flex justify-center text-xl text-slate-500">
        GCEP V1.0
      </div>
    </div>

    <!-- 表单2 -->
    <div v-else-if="activeSteps === 1" class="px-12 py-16 w-192 xl:w-256 rounded-2xl bg-[#dff2ff] shadow-lg">
      <!-- 标题 -->
      <div class="mb-5 flex items-center">
        <img class="mr-3 w-16 h-16" src="/src/assets/img/logo.png" alt="">
        <img class="h-16" src="/src//assets/img/textLogo.png" alt="">
      </div>
      <!--  -->
      <div class="mb-3 text-3xl text-slate-500">欢迎 18320226822@163.com</div>
      <div class="mb-5 text-3xl text-slate-500">
        为了更好的进行中文学习，现在需要您完善个人信息！
      </div>
      <!-- 依旧表单 -->
      <div>
        <el-form
          :rules="rules1"
          ref="ruleFormRef1"
          :model="form1"
        >
          <el-form-item label="教师昵称" label-position="top" prop="name">
            <el-input size="large" v-model="form1.name" placeholder="请输入您的教师昵称">
            </el-input>
          </el-form-item>
          <el-row :gutter="20">
            <el-col :span="10">
              <el-form-item label="国籍" label-position="top" prop="country">
                <el-input size="large" v-model="form1.country" placeholder="请输入您的国籍">
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="地区" label-position="top" prop="region">
                <el-input size="large" v-model="form1.area" placeholder="请输入您的所在地区">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="10">
              <el-form-item label="毕业院校" label-position="top" prop="graduationSchool">
                <el-cascader
                  size="large"
                  v-model="form1.graduationSchool"
                  :options="schoolOptions"
                  @change="handleChange"
                />
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="生日" label-position="top" prop="birthDate">
                <el-date-picker
                v-model="form1.birthDate"
                type="date"
                placeholder="选择您的生日"
                size="large"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="教学经验" label-position="top" prop="experience">
            <el-input size="large" v-model="form1.experience" placeholder="请输入您的教学经验">
            </el-input>
          </el-form-item>
          <el-form-item label="擅长领域" label-position="top" prop="expertise">
            <el-input size="large" v-model="form1.expertise" placeholder="请输入您的擅长领域">
            </el-input>
          </el-form-item>
          <el-form-item label="教学风格" label-position="top" prop="style">
            <el-input size="large" v-model="form1.style" placeholder="请输入您的教学风格">
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="flex justify-center">
        <button @click="goNext" class="py-6 px-16 text-2xl text-white font-bold bg-[#7cc4f8] rounded-full shadow-md hover:text-[#7cc4f8] hover:bg-white hover:ring-2 hover:ring-[#7cc4f8] duration-300 cursor-pointer">下一步</button>
      </div>
    </div>

    <!-- 表单3 -->
    <div v-else class="px-12 py-16 w-192 xl:w-256 rounded-2xl bg-[#dff2ff] shadow-lg">
      <div class="mb-24 flex items-center">
        <img class="mr-3 w-16 h-16" src="/src/assets/img/logo.png" alt="">
        <img class="h-16" src="/src//assets/img/textLogo.png" alt="">
      </div>
      <div class="flex flex-col items-center xl:text-3xl text-2xl">
        <div class="mb-3 font-bold">Sandy，欢迎你！</div>
        <div class="mb-3 font-bold">海内存知己，天涯若比邻</div>
        <div class="mb-3 font-bold">无论您身处何地，这里都是您学习中文、探索文化的家园</div>
        <div class="font-bold">让我们一起开启这段美妙的语言之旅吧！</div>
      </div>
      <div class="mt-16 flex justify-center">
        <button 
          @click="goHome" 
          class="py-6 px-24 text-2xl xl:text-3xl text-white font-bold bg-[#7cc4f8] rounded-full shadow-md hover:text-[#7cc4f8] hover:bg-white hover:ring-2 hover:ring-[#7cc4f8] duration-300 cursor-pointer"
        >
          进入国际中文教育平台
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { postCommonSendRegisterEmailCodeAPI } from '@/api/register.js'
import { Edit, User, Check } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const activeSteps = ref(0)

// 表单1
const ruleFormRef = ref(null)
const form = ref({
  email: '',
  verifyCode: '',
  password: '',
  confirmPassword: ''
})
const rules = ref({
  email: [
      { required: true, message: '请输入邮箱', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, message: '请再次输入密码', trigger: 'blur' }
  ],
  verifyCode: [
    { required: true, message: '请输入邮箱验证码', trigger: 'blur' }
  ]
})

const selectEmail = ref('@qq.com')

const sendVerifyCode = async () => {
  const email = form.value.email + selectEmail.value
  const res = await postCommonSendRegisterEmailCodeAPI(email)
  console.log(res)
  // 提醒用户发送验证码成功
  ElMessage({
    message: '验证码发送成功~',
    type: 'success',
  }) 
}

const goRegister = async () => {
  // await ruleFormRef.value.validate()
  // 发起注册的请求
  activeSteps.value = 1
}

// 表单2
const ruleFormRef1 = ref(null)
const form1 = ref({
  name: '',
  country: '',
  region: '',
  graduationSchool: '',
  experience: '',
  birthDate: '',
  expertise: '',
  style: ''
})
const rules1 = ref({
  name: [
      { required: true, message: '请输入邮箱', trigger: 'blur' }
  ],
  country: [
    { required: true, message: '请输入您所处的国家', trigger: 'blur' }
  ],
  region: [
    { required: true, message: '请输入您所处的地区', trigger: 'blur' }
  ],
  graduationSchool: [
    { required: true, message: '请选择毕业院校', trigger: 'change' }
  ],
  experience: [
    { required: true, message: '请输入您的教学经验', trigger: 'blur' }
  ],
  birthDate: [
    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
  ],
  style: [
    { required: true, message: '请输入您的教学风格', trigger: 'blur' }
  ],
  expertise: [
    { required: true, message: '请输入您的教学经验', trigger: 'blur' }
  ]
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
const goNext = async () => {
  await ruleFormRef1.value.validate()
  activeSteps.value = 2
}

const goHome = () => {
  ElMessage({
    message: '国际中文教育平台欢迎你！',
    type: 'success',
  })
  setTimeout(() => {
    router.push('/home')
  }, 1000)
}
</script>

<style lang="less" scoped>
.register-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
  background-image: url('@/assets/img/background.png');
  background-size: cover;
  background-repeat: no-repeat;
  .register-container {
    background-color: #dff2ff;      
  }
}
</style>