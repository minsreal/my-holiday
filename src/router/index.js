import Vue from 'vue'
import Router from 'vue-router'
import MyHoliday from '@/components/MyHoliday'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/MyHoliday',
      name: 'MyHoliday',
      component: MyHoliday
    }
  ]
})
