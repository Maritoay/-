import request from "@/utils/request"

export const getTeacherGetTeacherFirstPageAPI = () => {
  return request({
    url: '/teacher/getTeacherFirstPage',
    method: 'get'
  })
}