<template>
  <div class="content">
    <div class="content-item wallent">
      <div class="my-wallent list">
        <div class="wrapper">
          <span class="iconfont icon-wallent"></span>
        </div>
        <div class="title">我的钱包</div>
      </div>
      <div class="money">
        <div class="money-item">
          <span class="count">0.00</span>
          <p class="msg">账户余额</p>
        </div>
        <div class="money-item">
          <span class="count">0.00</span>
          <p class="msg">星券</p>
        </div>
        <div class="money-item">
          <span class="count">0 张</span>
          <p class="msg">银行卡</p>
        </div>
      </div>
    </div>
    <div class="content-item order">
      <div class="list">
        <div class="wrapper safe">
          <span class="iconfont icon-order"></span>
        </div>
        <div class="title">我的订单</div>
        <div class="arrow">
          <span class="iconfont icon-right-arrow"></span>
        </div>
      </div>
      <div class="list">
        <div class="wrapper info">
          <span class="iconfont icon-refund"></span>
        </div>
        <div class="title">我的退款</div>
        <div class="arrow">
          <span class="iconfont icon-right-arrow"></span>
        </div>
      </div>
      <div class="list">
        <div class="wrapper info">
          <span class="iconfont icon-ticket"></span>
        </div>
        <div class="title">我的发票</div>
        <div class="arrow">
          <span class="iconfont icon-right-arrow"></span>
        </div>
      </div>
      <div class="list">
        <div class="wrapper info">
          <span class="iconfont icon-book"></span>
        </div>
        <div class="title">我的攻略</div>
        <div class="arrow">
          <span class="iconfont icon-right-arrow"></span>
        </div>
      </div>
    </div>
    <div class="content-item setting">
      <div class="list">
        <div class="wrapper set">
          <span class="iconfont icon-my"></span>
        </div>
        <div class="title">设置</div>
        <div class="arrow">
            个人信息、安全设置等
          <span class="iconfont icon-right-arrow"></span>
        </div>
      </div>
      <div class="list">
        <div class="wrapper set">
          <span class="iconfont icon-about"></span>
        </div>
        <div class="title">意见反馈</div>
        <div class="arrow">
          <span class="iconfont icon-right-arrow"></span>
        </div>
      </div>
      <div class="list">
        <div class="wrapper set">
          <span class="iconfont icon-order"></span>
        </div>
        <div class="title">关于去哪儿网</div>
        <div class="arrow">
          <span class="iconfont icon-right-arrow"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.content {
  width: 100%;
  height: 100%;
     background-color: #ebeced;
}
.content-item {
  margin-top: 10px;
  background-color: #fff;
  overflow: hidden;
}
.content-item.wallent {
  height: 125px;
}
.list {
  display: flex;
  height: 45px;
  padding: 0 12px;
  color: #4d4d4d;
  font-size: 16px;
  border: 10x solid skyblue;
  align-items: center;
  border-bottom: 1px solid #eee;
  position: relative;
}
.list .arrow {
  position: absolute;
  right: 12px;
  font-size: 12px;
      color: #bfbfbf;
}
.wrapper {
  background-color: #ff7043;
  width: 29px;
  height: 29px;
  text-align: center;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 40%;
  margin-right: 11px;
}
.wrapper.safe {
  background-color: #4fc3f7;
}
.wrapper.info {
  background-color: #ffa21f;
}
.wrapper.set {
  background-color: #90a4ae;
}
.wrapper .iconfont {
  line-height: 29px;
  font-size: 18px;
}
.wallent .money {
  width: 100%;
  display: flex;
  height: 80px;
  justify-content: space-evenly;
  align-items: center;
}
.wallent .money .money-item {
  flex: 1;
  height: 80px;
  color: #4d4d4d;
  text-align: center;
  box-sizing: border-box;
  padding-top: 15px;
}
.money-item .count {
  display: block;
  height: 24px;
  line-height: 24px;
  font-size: 16px;
}
.money-item .msg {
  height: 18px;
  line-height: 18px;
  font-size: 12px;
  margin-top: 6px;
}
</style>