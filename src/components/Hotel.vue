<template>
  <div class="hotel">
    <div class="hotel-item"
         v-for="(item,index) in hotels"
         :key="index"
    >
      <div class="item-left">
        <div class="item-left-img">
          <img :src="item.cover" alt="" />
        </div>
      </div>
      <div class="item-right">
        <div class="hotel-name">{{item.name}}</div>
        <div class="hotel-price">{{item.price}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import HotelProvider from '@/assets/js/hotel-provider'

export default {
  name: 'Hotel',
  data () {
    return {
      hotels: []
    }
  },
  props: ['city'],
  watch: {
    city: function (val) {
      this.fetchHotels(val)
    }
  },
  methods: {
    fetchHotels (city) {
      this.hotels = HotelProvider.getHotels(city)
      console.log(this.hotels)
    }
  }
}
</script>
<style lang="css" scoped>
.hotel {
  width: 450px;
}
.hotel-item {
  display: flex;
  padding: 12px 20px;
}
.hotel-item:hover {
  background: #F5F8FA;
}
.item-right {
  padding-left: 12px;
}
.item-left-img > img {
  width: 125px;
}
</style>
