<template>
  <div class="country-selector">
    <div class="country">
      <selector
        label="Country:"
        :list="countries"
        placeholder="Please select a country"
      />
    </div>
    <div class="city">
      <selector
        label="city:"
      />
    </div>
  </div>
</template>

<script>
import Selector from '@/components/Selector'
import CountryProvider from '@/assets/js/country-provider'
export default {
  name: 'CountrySelector',
  components: {Selector},
  data () {
    return {
      countries: [{

      }]
    }
  },
  created () {
    this.countries = CountryProvider.getCountries()
  }
}
</script>
<style lang="css" scoped>
.country-selector {
  width: 400px;
}
</style>
