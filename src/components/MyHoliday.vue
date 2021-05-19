<template>
  <div class="my-holiday">
    <div class="my-holiday-wrapper">
      <div class="my-holiday-top">
        <country-selector />
        <weather />
      </div>
      <div class="my-holiday-bottom">
      </div>
    </div>
  </div>
</template>

<script>
import CountrySelector from '@/components/CountrySelector'
import Weather from '@/components/Weather'
export default {
  name: 'MyHoliday',
  components: {CountrySelector, Weather},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
</style>
