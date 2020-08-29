<template>
  <div class="content">
    <div class="img">
      <img src="//s.qunarzz.com/ordercenter_mobile/images/order_login.png" alt />
    </div>
    <span class="msg">没有查询到相关订单</span>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.content {
    background: #f0f2f4;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
}
.content .img {
  height: 147px;
  width: 66%;
  position: absolute;
  top: 75px;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
}
.img img {
  display: block;
  margin: 0 auto;
  width: 191px;
}

.content .msg {
  position: absolute;
  top: 200px;
  left: 0;
  right: 0;
  margin: auto;
  height: 26px;
  line-height: 26px;
  color: #666;
  font-size: 15px;
}
</style>