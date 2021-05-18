<template>
  <div class="country-selector">
    <div class="country">
      <div class="country-txt">Country:</div>
      <selector
        :list="countries"
      />
    </div>
    <div class="city">
      <div class="city">City:</div>
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
