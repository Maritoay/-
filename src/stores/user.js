import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  // 定义状态
  const userInfo = ref('')
  const token = ref('')
  
  // 定义方法
  const setUserInfo = (info) => {
    userInfo.value = info
  }
  const getUserInfo = () => userInfo.value
  const removeUserInfo = () => {
    userInfo.value = ''
    token.value = ''
  }
  
  // 返回状态和方法
  return {
    userInfo,
    token,
    setUserInfo,
    getUserInfo,
    removeUserInfo
  }
}, {
  // 持久化配置（必须作为第三个参数）
  persist: true
})