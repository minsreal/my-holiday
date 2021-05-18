import holidays from '../data/holidays'

export default {
  getCountries: function () {
    let result = [];
    for (let item in holidays.holidays) {
      result.push({
        name: item.englishName
      })
    }

    return result
  }
}
