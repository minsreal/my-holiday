<template>
  <div class="my-holiday">
    <country-selector />
  </div>
</template>

<script>
import CountrySelector from '@/components/CountrySelector'
export default {
  name: 'MyHoliday',
  components: {CountrySelector},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
