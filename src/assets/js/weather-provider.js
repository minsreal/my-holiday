import axios from 'axios'
import constant from './constant'

export default {
  getNow: function (location) {
    let params = {
      'key': constant.key,
      'lang': 'en',
      'location': location
    }

    return axios.get('https://devapi.qweather.com/v7/weather/now', {
      params: params
    })
  },
  get3D: function (location) {
    let params = {
      'key': constant.key,
      'lang': 'en',
      'location': location
    }

    return axios.get('https://devapi.qweather.com/v7/weather/3d', {
      params: params
    })
  }
}
