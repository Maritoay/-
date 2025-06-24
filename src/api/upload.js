import request from "@/utils/request"

// 上传图片
export const postUploadImgAPI = (fd) => {
  return request({
    url: '/common/uploadImg',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data: fd
  })
}

// 上传视频
export const postUploadVideoAPI = (fd) => {
  return request({
    url: '/common/uploadVideo',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data: fd
  })
}