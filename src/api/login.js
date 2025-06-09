import request from "@/utils/request"

export const postTeacherLoginAPI = (data) => {
  return request({
    url: '/teacher/login',
    method: 'post',
    data: {
      data: {
        ...data
      }
    }
  })
}