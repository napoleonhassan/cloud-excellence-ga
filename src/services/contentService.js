import { ApiCallNoAuth } from '@/services/common'

const BASE_URL = 'https://api'

export const getContent = (payload) => {
  console.log(payload)
  return ApiCallNoAuth('GET', `${BASE_URL}/content`, payload)
}

export const postContent = (payload) => {
  console.log(payload)
  return ApiCallNoAuth('POST', `${BASE_URL}/content`, payload)
}
