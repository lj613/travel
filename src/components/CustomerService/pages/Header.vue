<template>
  <div class="header">
    <div class="top">
      <div class="header-back">
        <span class="iconfont icon-back" @click="goHome"></span>
      </div>
      <div class="center">
        <div class="order">订单服务</div>
        <div class="product">产品服务</div>
      </div>
      <div class="right">
        <span class="iconfont icon-tel"></span>
      </div>
    </div>
    <div class="icons">
      <div class="icon-item">
        <div class="wrap plane">
          <span class="iconfont icon-plane"></span>
        </div>
        <p class="title">机票问题</p>
      </div>
      <div class="icon-item">
        <div class="wrap house">
          <span class="iconfont icon-house"></span>
        </div>
        <p class="title">机票问题</p>
      </div>
      <div class="icon-item">
        <div class="wrap train">
          <span class="iconfont icon-train"></span>
        </div>
        <p class="title">机票问题</p>
      </div>
      <div class="icon-item">
        <div class="wrap house2">
          <span class="iconfont icon-house2"></span>
        </div>
        <p class="title">机票问题</p>
      </div>
      <div class="icon-item">
        <div class="wrap coco">
          <span class="iconfont icon-coco"></span>
        </div>
        <p class="title">机票问题</p>
      </div>
      <div class="icon-item">
        <div class="wrap car">
          <span class="iconfont icon-car"></span>
        </div>
        <p class="title">机票问题</p>
      </div>
      <div class="icon-item">
        <div class="wrap my">
          <span class="iconfont icon-my2"></span>
        </div>
        <p class="title">机票问题</p>
      </div>
      <div class="icon-item">
        <div class="wrap ellipsis">
          <span class="iconfont icon-ellipsis"></span>
        </div>
        <p class="title">机票问题</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 100%;
}
.header .top {
  width: 100%;
  height: 44px;
  background-color: #00bcd4;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-back {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  width: 36px;
}

.header-back .icon-back {
  font-size: 22px;
  font-weight: bold;
}
.header .top .center {
  display: flex;
  width: 212px;
  height: 28px;
  font-size: 14px;
  color: #fff;
  align-items: center;
  margin: 0 auto;
}
.header .top .center .order {
  width: 106px;
  height: 28px;
  border: 1px solid #fff;
  line-height: 28px;
}
.header .top .center .product {
  width: 106px;
  height: 28px;
  line-height: 28px;
  border: 1px solid #fff;
}
.header .top .right {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 44px;
}
.header .top .right .icon-tel {
  font-size: 20px;
  color: #fff;
}
.header .icons {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 150px;
  align-items: center;
  justify-content: space-around;
  padding: 15px 0;
}
.header .icons .icon-item {
  width: 87px;
  height: 66px;
  margin-bottom: 10px;
  text-align: center;
}
.header .icons .icon-item .wrap {
  width: 40px;
  height: 43px;
  color: #26c6da;
  margin: 0 auto;
  border-radius: 18px;
  text-align: center;
  font-size: 0;
  background-color: #26c6da;
  box-sizing: border-box;
}

.header .icons .icon-item .house {
  background-color: #f55;
  font-weight: bold;
}
.header .icons .icon-item .train {
  background-color: #03a9f4;
  font-weight: bold;
}
.header .icons .icon-item .house2 {
  background-color: #26a69a;
}
.header .icons .icon-item .coco {
  background-color: #7eb63d;
}
.header .icons .icon-item .car {
  background-color: #5d73e5;
  font-weight: bold;
}
.header .icons .icon-item .my {
  background-color: #ffcf00;
}
.header .icons .icon-item .ellipsis {
  background-color: #ff9800;
  font-weight: bold;
}
.header .icons .icon-item .iconfont {
  line-height: 45px;
  font-size: 20px;
  color: #fff;
}

.header .icons .icon-item .title {
  margin-top: 5px;
  font-size: 12px;
}
</style>