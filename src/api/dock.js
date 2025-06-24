import request from "@/utils/request"

export const getAppointmentCourseListAPI = () => {
  return request({
    url: '/teacher/getAppointmentCourseList',
    method: 'get'    
  })
}