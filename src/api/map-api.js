import axios from 'axios'

// 根据城市名查询经纬度
export const getLocationByCityName = city => {
  return axios({
    url: '/map/geocoder',
    method: 'get',
    params: {
      address: '北京',
      output: 'json',
      key: '16afeaf4efc105ab4062a2172736768c',
      city
    }
  })
}