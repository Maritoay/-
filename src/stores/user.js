import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  // 存储userInfo
  const userInfo = ref('')
  // 存储token
  const setUserInfo = (info) => {
    userInfo.value = info
  }
  // 获取userInfo
  const getUserInfo = () => {
    return userInfo.value
  }
  // 删除userInfo
  const removeUserInfo = () => {
    userInfo.value = ''
  }
  return {
    userInfo,
    setUserInfo,
    getUserInfo,
    removeUserInfo
  }
}, {
  persist: true // 开启持久化存储
})