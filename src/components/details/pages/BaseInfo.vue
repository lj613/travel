<template>
  <div class="base-info">
    <div class="mp-flex-card">
      <div class="item">
        <div class="left">
          <div class="top">
            <span class="score">4.8</span>
            <span class="text">分</span>
            <span class="desc">很棒</span>
          </div>
          <div class="bottom">
            <span class="comment">2467条评论</span>
            <span class>5条攻略</span>
          </div>
        </div>
        <div class="right">
          <span class="iconfont icon-right-arrow"></span>
        </div>
      </div>
      <div class="item">
        <div class="left">
          <div class="top">
            <span class="text title">景点介绍</span>
            <span class="desc"></span>
          </div>
          <div class="bottom">
            <span class="comment">开放时间、贴士</span>
          </div>
        </div>
        <div class="right">
          <span class="iconfont icon-right-arrow"></span>
        </div>
      </div>
    </div>
    <div class="address">
      <div class="left">
        <span class="iconfont icon-location"></span>
        <span class="name">重庆市丰都县名山镇名山路152号</span>
      </div>
      <span class="iconfont icon-right-arrow"></span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.base-info {
  overflow: hidden;
  width: 100%;
  height: 100px;
}
.base-info .mp-flex-card {
  display: flex;
  width: 100%;
  height: 62px;
}
.base-info .mp-flex-card .item {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  box-sizing: border-box;
}
.mp-flex-card .item .left .top {
  color: #ff8300;
  font-size: 0;
}
.mp-flex-card .item .left .title {
  color: #212121;
}
.mp-flex-card .item .left .score {
  font-size: 24px;
}
.mp-flex-card .item .left .text {
  font-size: 14px;
}
.mp-flex-card .item .left .desc {
  font-size: 14px;
  margin-left: 10px;
}
.mp-flex-card .item .left .bottom {
  margin-top: 6px;
  font-size: 12px;
  color: #9e9e9e;
}
.mp-flex-card .item .right {
  font-size: 18px;
  color: #9e9e9e;
}
.base-info .address {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 38px;
  border-top: 1px solid #eee;
  font-size: 14px;
  line-height: 38px;
}
.address .icon-location {
  margin: 0 10px;
  color: #9e9e9e;
}
.address .icon-right-arrow {
  margin-right: 10px;
  color: #9e9e9e;
}
</style>