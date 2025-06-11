import request from "@/utils/request"

// 查询网络课程
export const postTeacherGetOnlineCourseListAPI = (data) => {
  return request({
    url: '/teacher/getOnlineCourseList',
    method: 'post',
    data: {
      data: {
        ...data
      }
    }
  })
}

// 上传课程
export const postTeacherUploadOnlineCourseAPI = (data) => {
  return request({
    url: '/teacher/uploadOnlineCourse',
    method: 'post',
    data: {
        data: {
            ...data
        }
    }
  })
}

// 查找网络课程详情
export const getCourseDetailAPI = (onlineCourseId) => {
    return request({
        url: `/teacher/getOnlineCourseDetail/${onlineCourseId}`
    })
}