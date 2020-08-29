<template>
  <div class="onSale">
    <div class="onSale-title">特惠门票</div>
    <div class="onSale-head">
      <ul class="head-title-nav">
        <li class="active">
          <a href="#">当季景点门票</a>
        </li>
        <li>
          <a href="#">特惠门票</a>
        </li>
      </ul>
    </div>
    <div class="onSale-body">
      <a class="body-item" @click="toDetails" v-for="item in scenicList" :key="item.id">
        <div class="top">
          <img
            :src="item.imgUrl"
            alt
          />
        </div>
        <div class="bottom">
          <p class="title">
            <span>{{item.titel}}</span>
          </p>
          <p class="detail">{{item.detail}}</p>
          <p class="price">
            <span>{{item.mark}}</span>
            <span>{{item.price}}起</span>
          </p>
        </div>
      </a>
    
    </div>
    <span class="more">
      <a href="#">
        <span>更多特惠门票</span>
        <span class="iconfont icon-right-arrow"></span>
      </a>
    </span>
  </div>
</template>
<script>
export default {
   props:['scenicList'],

    data(){
        return{
            // scenicList:[
            //     {
            //         id:"01",
            //         imgUrl:"//imgs.qunarzz.com/sight/p0/1507/8d/8d1817185ad3f395.img.jpg_256x144_6df03aa6.jpg",
            //         titel:"武隆天生三桥风景区",
            //         detail:"变形金刚大战黄金甲",
            //         mark:"¥",
            //         price:"105"
            //     },
            //     {
            //         id:"02",
            //         imgUrl:"//imgs.qunarzz.com/sight/p0/1910/a7/a7863ded4e64b6faa3.img.jpg_256x144_a4434c8e.jpg",
            //         titel:"洪崖洞",
            //         detail:"老重庆的真实写照，极具巴渝传统特色",
            //         mark:"¥",
            //         price:"25"
            //     },
            //     {
            //         id:"03",
            //         imgUrl:"//imgs.qunarzz.com/sight/p0/201305/31/1e09178fd22121bbc8d65eac.jpg_256x144_8ab6fe83.jpg",
            //         titel:"丰都鬼城",
            //         detail:"鬼城寻鬼，阴朝地府走一遭",
            //         mark:"¥",
            //         price:"85"
            //     },
            //     {
            //         id:"04",
            //         imgUrl:"//imgs.qunarzz.com/sight/p0/201308/06/144bcaa27bd8641cc8d65eac.jpg_256x144_ddecc83a.jpg",
            //         titel:"龙水峡地缝 ",
            //         detail:"天坑地缝不分家",
            //         mark:"¥",
            //         price:"100"
            //     }
                
            // ]
                
            
        }
    },
    methods: {
      toDetails(){
        this.$router.push("/detail")
      }
    },
};
</script>

<style scoped>
.onSale {
  width: 100%;
}
.onSale .onSale-title {
  color: #26282a;
  font-weight: 700;
  font-size: 18px;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
}

.onSale-head .head-title-nav {
  display: flex;
  font-size: 0;
}
.head-title-nav li {
  width: 80px;
  height: 34px;
  margin-left: 10px;
  line-height: 34px;
  padding-left: 6px;
  padding-right: 6px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #d7d7d7;
}
.head-title-nav li.active {
  color: #fff;
  background: #17c0c8;
  border: 1px solid #17c0c8;
}
.head-title-nav li.active a {
  color: #fff;
}
.head-title-nav li a {
  font-size: 12px;
  color: #666;
  font-weight: normal;
}
.onSale-body {
  margin: 4px 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.onSale-body .body-item {
  width: 170px;
  height: 175px;
}
.onSale-body .body-item .top {
  width: 170;
}
.onSale-body .body-item .top img {
  width: 170px;
  height: 108px;
}
.body-item .bottom .title span {
  margin-right: 5px;
  overflow: hidden;
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #000;
  font-size: 14px;
  font-weight: 450;
  margin-bottom: 5px;
}
.body-item .bottom .detail {
  margin-right: 5px;
  overflow: hidden;
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12px;
  font-weight: 100;
  color: #555;
  font-weight: 450;
  margin-bottom: 5px;
}
.body-item .bottom .price {
  color: #ff7400;
  font-size: 18px;
}
.onSale .more {
  display: block;
  width: 343px;
  height: 41px;
  text-align: center;
  border-radius: 4px;
  border: 0.5px solid #00d0d4;
  margin: 16px auto;
  font-size: 0;
}
.onSale .more a {
  color: #00d0d4;
  font-weight: 400;
  font-size: 14px;
  line-height: 40px;
}
.onSale .more .iconfont {
  color: #00d0d4;
  font-weight: 400;
  font-size: 14px;
}
</style>