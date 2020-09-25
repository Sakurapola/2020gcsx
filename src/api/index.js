import axios from 'axios'
import { serverBaseUrl } from '@/config'

axios.defaults.baseURL = serverBaseUrl

/* 热门列表 */
export const getHotList = params => {
  return axios({
    url: '/hotList',
    method: 'get',
    params
  })
}

/* 城市详情 */
export const getCityDetail = params => {
  return axios({
    url: '/cityDetail',
    method: 'get',
    params
  })
}

/* 景点 */
export const getSceneDetail = params => {
  return axios({
    url: '/sceneDetail',
    method: 'get',
    params
  })
}

/* 热门列表 */
export const getFoods = params => {
  return axios({
    url: '/foods',
    method: 'get',
    params
  })
}