import request from "@/utils/request"

// 上传头像
export const postUploadImgAPI = (files) => {
  return request({
    url: '/common/uploadImg',
    method: 'post',
    data: {
      files
    }
  })
}

// 上传视频
export const postUploadVideoAPI = (files) => {
  return request({
    url: '/common/uploadVideo',
    method: 'post',
    data: {
      files
    }
  })
}