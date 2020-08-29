<template>
  <div class="onSale">
    <div class="onSale-title">特惠度假</div>
    <div class="onSale-head">
      <ul class="head-title-nav">
        <li class="active">
          <a href="#">当季热门度假</a>
        </li>
        <li>
          <a href="#">今日特惠度假</a>
        </li>
      </ul>
    </div>
    <div class="onSale-body">
      <a class="body-item" @click="toDetails" v-for="item in onSaleList" :key="item.id">
        <div class="top">
          <img :src="item.imgUrl" alt />
        </div>
        <div class="bottom">
          <p class="words">
            <span>{{item.content}}</span>
          </p>
          <p class="price">
            <span>{{item.mark}}</span>
            <span>{{item.price}}</span>
          </p>
        </div>
      </a>
   
    </div>
    <span class="more">
      <a href="#">
        <span>更多特惠度假</span>
        <span class="iconfont icon-right-arrow"></span>
      </a>
    </span>
  </div>
</template>
<script>
export default {
  props: ["onSaleList"],
  methods: {
    toDetails() {
      this.$router.push("/detail");
    }
  },
  data() {
    return {
    
    };
  }
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
  /* background-color: blue; */
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
  height: 160px;
}
.onSale-body .body-item .top {
  width: 170;
}
.onSale-body .body-item .top img {
  width: 170px;
  height: 108px;
}
.body-item .bottom .words span {
  margin-right: 5px;
  overflow: hidden;
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #000;
  font-size: 14px;
  font-weight: 450;
  margin-bottom: 6px;
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