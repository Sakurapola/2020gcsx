import axios from 'axios'
import { serverBaseUrl } from '@/config'

axios.baseUrl = serverBaseUrl

/* 热门列表 */
export const getHotList = param => {
  return axios({
    url: '/api/hotlist',
    method: 'get',
    param
  })
}

/* 城市详情 */
export const getCityDetail = param => {
  return axios({
    url: '/api/cityDetail',
    method: 'get',
    param
  })
}

/* 景点 */
export const getSceneDetail = param => {
  return axios({
    url: '/api/sceneDetail',
    method: 'get',
    param
  })
}

/* 热门列表 */
export const getFoods = param => {
  return axios({
    url: '/api/foods',
    method: 'get',
    param
  })
}
