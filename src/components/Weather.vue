<template>
  <div class="weather">
    <div class="weather-location">{{city}}</div>
    <div class="weather-wrapper">
      <div class="weather-left">
        <div class="temp-txt">{{temp}}°</div>
        <div class="now-txt">{{nowTxt}}</div>
      </div>
      <div class="weather-right">
        <div class="weather-future"
             v-for="(item,index) in daily"
             :key="index"
        >
          <div class="weather-future-date">{{item.date}}</div>
          <div class="weather-future-txt">{{item.textDay}}</div>
          <div class="weather-future-temp">{{item.tempMin}}°/{{item.tempMax}}°</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WeatherProvider from '@/assets/js/weather-provider'
export default {
  name: 'Weather',
  props: {
    'location': {
      type: Object
    }
  },
  data () {
    return {
      city: null,
      temp: 0,
      nowTxt: null,
      daily: []
    }
  },
  watch: {
    'location': {
      immediate: true,
      deep: true,
      handler (val) {
        if (!val) {
          return
        }
        this.city = val.name
        this.fetchWeather(val)
      }
    }
  },
  methods: {
    async fetchWeather (location) {
      if (!location.lat || !location.lon) {
        return
      }
      let now = await WeatherProvider.getNow(location.lat + ',' + location.lon)
      let threeDay = await WeatherProvider.get3D(location.lat + ',' + location.lon)
      this.renderNow(now)
      this.render3D(threeDay)
    },
    renderNow (now) {
      if (now.data.code !== '200') {
        return
      }
      this.temp = now.data.now.temp
      this.nowTxt = now.data.now.text
    },
    render3D (threeDay) {
      if (threeDay.data.code !== '200') {
        return
      }
      for (let item of threeDay.data.daily) {
        let cuts = item.fxDate.split('-')
        item.date = cuts[1] + '/' + cuts[2]
      }
      this.daily = threeDay.data.daily
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
.weather-location {
  width: 100%;
  font-size: 1.5em;
  color: #fff;
  display: inline-block;
  text-align: left;
  padding: .4em 0 0 .6em;
}
.weather-wrapper {
  width: 100%;
  display: flex;
}
.weather-left, .weather-right {
  height: 103px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.weather-left {
  width: 30%;
  flex-direction: column;
}
.weather-right {
  width: 70%;
  border-left: 1px solid rgba(204, 204, 204, 0.5);
}
.temp-txt {
  color: white;
  font-size: 2.7em;
}
.now-txt {
  color: white;
  font-size: 1.5em;
}
.weather-future-date, .weather-future-txt, .weather-future-temp {
  color: white;
}
.weather-future {
  margin-left: 1em;
}
.weather-future:first-child {
  margin-left: 0;
}
.weather-future-txt {
  margin-top: .5em;
  font-size: 1.4em;
}
.weather-future-temp {
  margin-top: .5em;
}
.weather-future-date, .weather-future-temp {
  font-size: 1.2em;
}
</style>
