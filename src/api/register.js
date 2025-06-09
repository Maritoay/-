import request from "@/utils/request"

// 获取邮箱验证码
export const postCommonSendRegisterEmailCodeAPI = (email) => {
  return request({
    url: '/common/sendRegisterEmailCode',
    method: 'post',
    data: {
      data: {
        email
      }
    }
  })
}