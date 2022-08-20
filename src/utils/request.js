import axios from 'axios'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  timeout: process.env.VUE_APP_BASE_API_TIMEOUT, // request timeout
  withCredentials: true
})

service.interceptors.request.use(
    config => {
      config.headers['Content-Type'] = 'application/json;charset=UTF-8'
      config.headers['Access-Control-Allow-Origin'] = '*'
      config.headers['Access-Control-Allow-Headers'] = '*'
      return config
    },
    error => {
      // Do something with request error
      Promise.reject(error)
    }
)
// HTTP 응답 인터셉터
service.interceptors.response.use(response => {
  return response
},
error => {
  if (error.code === 'ECONNABORTED') {
    error.message = '서버 요청에 실패했습니다. 다시 시도해주세요.'// '서버 요청에 실패했습니다. 다시 시도해주세요.'
  }

  if (error.response) {
    console.log('error22', error)
    return Promise.reject(error.response)
  }
  return Promise.reject(error)
})

export default service
