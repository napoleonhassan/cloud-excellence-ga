import axios from 'axios'

const ApiCallBase = ({
  method, url, headers, data
}) => axios.request({
  url,
  method,
  headers,
  data
})

export const ApiCallNoAuth = (method, url, data, headers) => ApiCallBase({
  method,
  url,
  data,
  headers
})
