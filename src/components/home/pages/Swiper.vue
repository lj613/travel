<template>
  <div class="header-swiper">
    <swiper :options="swiperOptions" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item,index) in swiperList" :key="index">
        <img :src="item.imgUrl" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "MySwiper",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        speed: 1000,
        loop: true,
        autoplay: {
          delay: 3000
        }
      }
    };
  },
  props:['swiperList'],
 
};
</script>
<style scoped>
.header-swiper {
  background-color: #ccc;
  height: 0;
  margin-left: 10px;
  margin-right: 10px;
  padding-bottom: 26.67%;
  margin-bottom: 20px;
}
.header-swiper img {
  width: 100%;
  height: 100%;
}
</style>

