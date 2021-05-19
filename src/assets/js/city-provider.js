import axios from 'axios'
import constant from './constant'

export default {
  getCities: function (country) {
    let params = {
      'range': country,
      'key': constant.key,
      'lang': 'en',
      'number': 20
    }

    return axios.get('https://geoapi.qweather.com/v2/city/top', {
      params: params
    })
  }
}
