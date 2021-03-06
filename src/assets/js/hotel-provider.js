import img1 from '@/assets/images/unnamed.jpg'
import img2 from '@/assets/images/dating_sheji-005.jpg'
import img3 from '@/assets/images/20091a0000018os8g9FB2_Z_550_412_R5_Q70_D.jpg'
import img4 from '@/assets/images/08162951nyn8.jpg'
import img5 from '@/assets/images/1590653441.jpg'
import img6 from '@/assets/images/20190909224841_71.jpg'
import img7 from '@/assets/images/bangkokhotel_3074700625bfe12177e00d.jpg'
import img8 from '@/assets/images/daheeh.jpg'
import img9 from '@/assets/images/veer-170455033.jpg'
import img10 from '@/assets/images/Hero Image.jpg'
import img11 from '@/assets/images/hkgop_swimming_pool_1900x1000.jpg'
import img12 from '@/assets/images/hotel-giftcard-1074.jpg'
import img13 from '@/assets/images/ldjgaljeljge.jpg'
import img14 from '@/assets/images/src=http___pavo.elongstatic.com_i_mobile960_nw_WRhkLzG8Te.jpg&refer=http___pavo.elongstatic.jpg'
import img15 from '@/assets/images/unnamed (1).jpg'

const Images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15]

function getRandomInt (max) {
  return Math.floor(Math.random() * max)
}

export default {
  getHotels (city) {
    if (!city) {
      return []
    }
    let result = []
    for (let i = 0; i < 10; i++) {
      result.push({
        name: city + '\'s Hotel ' + (i + 1),
        price: '$200',
        cover: Images[getRandomInt(Images.length)]
      })
    }
    return result
  }
}
