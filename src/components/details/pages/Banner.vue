<template>
  <div class="banner">
    <div @click="showSwiper">
      <div class="banner-img">
        <img
          src="//img1.qunarzz.com/sight/p0/201305/31/1e09178fd22121bbc8d65eac.jpg_600x330_267b2bd4.jpg"
          alt
        />
      </div>
      <div class="banner-icon">
        <span class="iconfont icon-img"></span>
        <span class="number">15</span>
      </div>
      <div class="banner-title">丰都鬼城(AAAA景区)</div>
    </div>

 

    <div class="img-swiper" v-show="imgSwiper" @click='hideSwiper'>
       <swiper :options="swiperOptions" ref="mySwiper">
      <swiper-slide v-for="(item,index) in bannerList" :key="index">
        <img :src="item.imgUrl" alt />
      </swiper-slide>
    </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgSwiper: false,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
           type: "fraction",
        },
        speed: 1000,
        loop: true,
        autoplay: {
          delay: 3000
        }
      },
      bannerList:[
          {
              id:"01",
              imgUrl:"https://imgs.qunarzz.com/sight/p0/201305/31/1e09178fd22121bbc8d65eac.jpg_r_800x800_e6781a28.jpg"
          },
           {
              id:"02",
              imgUrl:"https://imgs.qunarzz.com/sight/p0/1803/86/86e7ff05c1818403a3.img.jpg_r_800x800_7cb0b060.jpg"
          },
           {
              id:"03",
              imgUrl:"https://imgs.qunarzz.com/sight/p0/201305/31/fea4fdb59ff02c5cc8d65eac.jpg_r_800x800_7cf9734e.jpg"
          }
      ]
    };
  },
  methods: {
      showSwiper(){
          this.imgSwiper = true;
      },
      hideSwiper(){
          this.imgSwiper = false;

      }
  },
};
</script>
<style scoped>
.banner {
  position: relative;
}
.banner-img {
  width: 100%;
  overflow: hidden;
}
.banner-img img {
  width: 100%;
}
.banner-title {
  position: absolute;
  bottom: 18px;
  left: 15px;
  font-size: 18px;
  color: #fff;
}
.banner-icon {
  width: 60px;
  height: 20px;
  position: absolute;
  bottom: 45px;
  left: 15px;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  color: #fff;
  line-height: 20px;
  text-align: center;
}
.img-swiper {
  background-color: #000;
  position: fixed;
  bottom: 0;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-swiper img {
  width: 100%;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 30px;
    width: 100%;
    font-size: 16px;
    color: #fff;
}
</style>