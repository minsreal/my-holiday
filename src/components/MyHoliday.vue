<template>
  <div class="my-holiday">
    <div class="my-holiday-wrapper">
      <div class="my-holiday-top">
        <country-selector
          @selectCity="selectCity"
          @selectCountry="selectCountry"
        />
        <weather
          :location="city"
        />
      </div>
      <div class="my-holiday-bottom">
        <holiday
          :country="country"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CountrySelector from '@/components/CountrySelector'
import Weather from '@/components/Weather'
import Holiday from '@/components/Holiday'
export default {
  name: 'MyHoliday',
  components: {CountrySelector, Weather, Holiday},
  data () {
    return {
      city: {},
      country: null
    }
  },
  methods: {
    selectCity (city) {
      this.city = city
    },
    selectCountry (country) {
      this.country = country.name
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
.my-holiday {
  width: 100%;
  display: flex;
  justify-content: center;
}
.my-holiday-top {
  display: flex;
}
</style>
