import axios, { AxiosResponse } from 'axios'
import { Message } from 'element-ui'

/*
 * axios配置
 * axios.create创建拦截器
 */

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/' : process.env.BASE_URL, // 开发环境baseURL用'/'，否则不好做反向代理
  timeout: 20000 // request timeout
})

/*
 * 请求拦截
 * 让每个请求携带token
 */
service.interceptors.request.use(
  serviceConfig => {
    let token = sessionStorage.getItem('token')
    serviceConfig.headers.common['Authorization'] = 'Bearer ' + token
    serviceConfig.headers.common['token'] = token
    return serviceConfig
  },
  error => {
    Promise.reject(error)
  }
)

/*
 * 响应拦截
 * 200 成功，否则提示错误
 * 请求拒绝则表明超时或断网
 */
service.interceptors.response.use(
  response => {
    if (response.data.code === 200) {
      return response // 此处直接返回response而不是response.data.data，因为有些地方需要用到response.data.code
    } else {
      Message.error(response.data.msg || '请求失败，请稍后重试')
      throw response
    }
  },
  error => {
    if (!error.response) {
      // 断网 或者 请求超时 状态
      if (error.message.includes('timeout')) {
        // 请求超时状态
        console.log('超时了')
        Message.error('请求超时，请检查网络是否连接正常')
      } else {
        // 断网状态
        console.log('断网了')
        Message.error('请求失败，请检查网络是否已连接')
      }
      return
    } else {
      Message.error(error.message)
      Promise.reject(error)
    }
    return Promise.reject(error)
  }
)

export default service
