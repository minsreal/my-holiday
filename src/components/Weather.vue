<template>
  <div class="weather">
    <div class="weather-left"></div>
    <div class="weather-right"></div>
  </div>
</template>

<script>
export default {
  name: 'Weather',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="css">
.wv-lt-location > a {
  display: none !important;
}
.weather {
  width: 450px;
  height: 150px;
  font-size: 12px;
  background-image: url(https://cdn.heweather.com/img/plugin/190516/bg/view/101d.png);
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 100%;
  border-radius: 0;
}
</style>
