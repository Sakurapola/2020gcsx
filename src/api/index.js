import axios from 'axios'

/* 疫情数据 */
export const getEpidemic = () => {
  return axios({
    url: '../assets/data/data.json',
    method: 'get',
  })
}