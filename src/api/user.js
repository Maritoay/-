import request from "@/utils/request"

// 修改教师个人信息
export const postTeacherUpdateAPI = (data) => {
  return request({
    url: '/teacher/update',
    method: 'post',
    data: {
      data: {
        ...data
      }
    }
  })
}

// 教师资格证书上传
export const postTeacherUploadCertificateAPI = (data) => {
  return request({
    url: '/teacher/uploadCertificate',
    method: 'post',
    data: {
      data: {
        ...data
      }
    }
  })
}

// 教师头像上传
export const postTeacherUpdateAvatarAPI = (data) => {
  return request({
    url: '/teacher/updateAvatar',
    method: 'post',
    data: {
      data: {
        ...data
      }
    }
  })
}