<template>
  <div class="login-page">
    <div class="bg-[#dff2ff] px-12 py-16 w-256 rounded-2xl shadow-lg">
      <div class="mb-3 text-4xl font-bold">欢迎登录</div>
      <div class="text-4xl font-bold">国际中文教育平台</div>
      <div class="mt-5 mb-8 flex">
        <div class="mr-5 flex items-center px-5 py-4 text-3xl font-bold rounded-xl hover:ring-4 duration-550 hover:ring-blue-300  bg-[#c5e2f6]">
          <img class="w-16 h-16" src="/src/assets/img/teacher.svg" alt="">
          我是教师
        </div>
        <div class="mr-5 flex items-center px-5 py-4 text-3xl font-bold rounded-xl hover:ring-4 hover:ring-blue-300 duration-550 bg-white">
          <img class="w-16 h-16" src="/src/assets/img/admin.svg" alt="">
          我是教师
        </div>
      </div>
      <!-- 输入用户名和密码 -->
      <div class="">
        <el-form
          ref="ruleFormRef"
          :model="form"
          :rules="rules"
        >
          <el-form-item label="邮箱" label-position="top" prop="email">
            <el-input v-model="form.email" size="large" placeholder="请输入您的邮箱" style="height: 50px;"></el-input>
          </el-form-item>
          <el-form-item label="密码" label-position="top" prop="password">
            <el-input v-model="form.password" size="large" placeholder="请输入您的密码" style="height: 50px;"></el-input>
          </el-form-item>
        </el-form>
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
      <!-- 注册按钮 -->
      <div class="mt-8 flex justify-center">
        <button @click="goLogin" class="py-6 px-24 text-3xl text-white font-bold bg-[#7cc4f8] rounded-full shadow-md hover:text-[#7cc4f8] hover:bg-white hover:ring-2 hover:ring-[#7cc4f8] duration-300 cursor-pointer">登录</button>
      </div>
      <!-- 忘记密码 -->
      <div class="mt-5 flex justify-center">
        <div @click="$router.push('/register')" class="text-2xl text-slate-600 underline cursor-pointer">还没有账号？点击注册</div>
      </div>
      <div class="mt-5 flex justify-center text-xl text-slate-500">
        GCEP V1.0
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { postTeacherLoginAPI } from '@/api/login'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const ruleFormRef = ref(null)
const form = ref({
  email: '',
  password: ''
})
const rules = ref({
  email: [
      { required: true, message: '请输入邮箱', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ]
})

const checked1 = ref(false)

const goLogin = async () => {
  await ruleFormRef.value.validate()
  // 发起登录请求
  const res = await postTeacherLoginAPI(form.value)
  console.log(res)
  // 存储用户信息
  userStore.setUserInfo(res.data)
  // 提醒用户登陆成功
  ElMessage({
    message: '登录成功！',
    type: 'success',
  })
  setTimeout(() => {
    // 跳转到教师首页
    router.push('/home')
  }, 1000)
}
</script>

<style lang="less" scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/img/background.png');
  background-size: cover;
  background-repeat: no-repeat;
  .login-container {
    background-color: #dff2ff;      
  }
}
</style>