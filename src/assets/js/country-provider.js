import holidays from '../data/holidays'

const data = JSON.parse(holidays.holidays)

export default {
  getCountries: function () {
    let result = []
    for (let item of data) {
      result.push({
        name: item.englishName
      })
    }

    return result
  }
}
