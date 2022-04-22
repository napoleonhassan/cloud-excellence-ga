import { ApiCallNoAuth } from '@/services/common'

const BASE_URL = 'https://api'

export const postPass = (payload) => {
  console.log(payload)
  return ApiCallNoAuth('POST', `${BASE_URL}/login`, payload)
}
