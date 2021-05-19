<template>
  <div class="holiday">
    <div class="holiday-item"
         v-for="(item,index) in holidays"
         :key="index"
    >
      <div class="item-left">
        <div>{{item.date}}</div>
      </div>
      <div class="item-right"></div>
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
          item.date = cuts[1] + '/' + cuts[2]
        }
        this.holidays = holidays
        console.log(this.holidays)
      }
    }
  }
</script>
<style lang="css" scoped>

</style>
