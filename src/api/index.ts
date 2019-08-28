import axios from './axios'
import { AxiosPromise } from 'axios'
interface data<T> {
  code: number
  msg: string
  data: T
}
interface Response<T> extends AxiosPromise<data<T>> {}
/*
 * 接口方法
 */
// 获取规则
export function getData (data: { id: string }): Response<ApiTypes.ReturnGetRulesData[]> {
  return axios({
    url: '/data',
    method: 'get',
    data
  })
}
