<template>
  <div class="country-selector">
    <div class="country">
      <selector
        label="Country:"
        :list="countries"
        placeholder="Please select a country"
        @chooseFn="selectCountry"
      />
    </div>
    <div class="city">
      <selector
        label="City:"
        :list="cities"
        :placeholder="cityPlaceholder"
      />
    </div>
  </div>
</template>

<script>
import Selector from '@/components/Selector'
import CountryProvider from '@/assets/js/country-provider'
import CityProvider from '@/assets/js/city-provider'

export default {
  name: 'CountrySelector',
  components: {Selector},
  data () {
    return {
      countries: [],
      cities: [],
      cityPlaceholder: 'Please select a country first'
    }
  },
  created () {
    this.countries = CountryProvider.getCountries()
  },
  methods: {
    async selectCountry (item) {
      let result = await CityProvider.getCities(item.code)
      if (result.data && result.data.code !== '200') {
        console.error('Get city failed.')
        return
      }
      this.cities = result.data.topCityList
      this.cityPlaceholder = 'Please select a city'
      this.$emit('selectCountry', item)
    },
    async selectCity (item) {
      this.$emit('selectCity', item)
    }
  }
}
</script>
<style lang="css" scoped>
.country-selector {
  width: 400px;
}
.city {
  margin-top: 20px;
}
</style>
