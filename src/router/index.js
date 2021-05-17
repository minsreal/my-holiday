import Vue from 'vue'
import Router from 'vue-router'
import Weather from '@/components/weather'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Weather',
      component: Weather
    }
  ]
})
