import holidays from '../data/holidays'

const data = JSON.parse(holidays.holidays)

export default {
  getCountries: function () {
    let result = []
    for (let item of data) {
      if (!item.code2) {
        continue
      }
      result.push({
        name: item.englishName,
        code: item.code2.toLowerCase()
      })
    }

    return result
  },
  getHolidays: function (country) {
    for (let item of data) {
      if (!item.code2) {
        continue
      }
      if (item.englishName === country) {
        return item.holidays
      }
    }
    return null
  }
}
