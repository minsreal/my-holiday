<template>
  <div class="holiday">
    <div class="holiday-item"
         v-for="(item,index) in holidays"
         :key="index"
    >
      <div class="item-left">
        <div class="item-left-date">
          <div class="item-left-day">{{item.day}}</div>
          <div class="item-left-year">{{item.year}}</div>
        </div>
      </div>
      <div class="item-right">
        <div class="holiday-name">{{item.name}}</div>
        <div class="holiday-week">{{item.week}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CountryProvider from '@/assets/js/country-provider'

export default {
  name: 'Holiday',
  data () {
    return {
      holidays: []
    }
  },
  props: ['country'],
  watch: {
    country: function (val) {
      this.fetchHolidays(val)
    }
  },
  methods: {
    fetchHolidays (country) {
      let holidays = CountryProvider.getHolidays(country)
      for (let item of holidays) {
        let cuts = item.date.split('-')
        item.day = cuts[1] + '/' + cuts[2]
        item.year = cuts[0]
      }
      this.holidays = holidays
    }
  }
}
</script>
<style lang="css" scoped>
.holiday {
  width: 450px;
}
.holiday-item {
  display: flex;
  padding: 12px 20px;
}
.holiday-item:hover {
  background: #F5F8FA;
}
.item-left-day {
  color: #133E84;
  font-size: 2.5em;
  font-weight: bold;
}
.item-left-year {
  color: #9AA1AB;
}
.item-right {
  padding-left: 12px;
}
.holiday-name {
  color: #133E84;
  font-size: 1.3em;
  text-align: left;
}
.holiday-week {
  margin-top: .8em;
  text-align: left;
}
</style>
