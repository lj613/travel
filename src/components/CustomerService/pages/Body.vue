<template>
  <div class="body">
    <div class="title">常见问题</div>
    <div class="list"></div>
    <div class="list-item">
      <div class="wrapper ellipsis">
        <span class="iconfont icon-ellipsis"></span>
      </div>
      <div class="content">闪游卡</div>
    </div>
    <div class="list-item">
      <div class="wrapper my">
        <span class="iconfont icon-my2"></span>
      </div>
      <div class="content">实名认证</div>
    </div>
    <div class="list-item">
      <div class="wrapper my">
        <span class="iconfont icon-my2"></span>
      </div>
      <div class="content">返现金额如何提现</div>
    </div>
    <div class="list-item">
      <div class="wrapper my">
        <span class="iconfont icon-my2"></span>
      </div>
      <div class="content">账户安全险问题</div>
    </div>
    <div class="list-item">
      <div class="wrapper my">
        <span class="iconfont icon-my2"></span>
      </div>
      <div class="content">找不到订单</div>
    </div>
    <div class="list-item">
      <div class="wrapper train">
        <span class="iconfont icon-train"></span>
      </div>
      <div class="content">火车票退票手续费怎么算</div>
    </div>
    <div class="list-item">
      <div class="wrapper house">
        <span class="iconfont icon-house"></span>
      </div>
      <div class="content">到店无法入住</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.body {
  width: 100%;
  height: 100%;
}
.body .title {
  width: 100%;
  height: 28px;
  background-color: #ebeced;
  color: #666;
  font-size: 12px;
  padding: 5px 0 5px 10px;
  line-height: 28px;
}
.list-item {
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
.wrapper .iconfont {
  line-height: 29px;
  font-size: 18px;
}
.wrapper .house{
  background-color: #f55;
  font-weight: bold;
}
.wrapper .train{
  background-color: #03a9f4;
  font-weight: bold;
}
.wrapper.house2{
  background-color: #26a69a;
}
.wrapper .coco {
  background-color: #7eb63d;
}
.wrapper .car {
  background-color: #5d73e5;
  font-weight: bold;
}
.wrapper.my {
  background-color: #ffcf00;
}
.wrapper .ellipsis {
  background-color: #ff9800;
  font-weight: bold;
}
</style>