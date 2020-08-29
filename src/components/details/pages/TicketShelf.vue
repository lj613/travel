<template>
  <div class="ticket-shelf">
    <div class="ticket-shelf-container">
      <div class="title">景点门票</div>
      <div class="container-list">
        <div class="ticket-name">
          <div class="border"></div>
          <span>丰都鬼城门票</span>
        </div>
        <div class="ticket-list">
          <div class="left">成人票</div>
          <div class="right">
            <span class="mark">￥</span>
            <span class="price">85</span>
            <span class="text">起</span>
            <span class="iconfont icon-dropdown"></span>
          </div>
        </div>
      </div>
      <div class="container-list">
        <div class="ticket-name">
          <div class="border"></div>
          <span>丰都鬼城门票</span>
        </div>
        <div class="ticket-list">
          <div class="left">成人票</div>
          <div class="right">
            <span class="mark">￥</span>
            <span class="price">85</span>
            <span class="text">起</span>
            <span class="iconfont icon-dropdown"></span>
          </div>
        </div>
      </div>
    </div>
     <div class="ticket-shelf-container">
      <div class="title">一日游</div>
      <div class="container-list-m ">
        <div class="ticket-list-m">
          <div class="left">【重庆出发】重庆解放碑1日游</div>
          <div class="right">
            <span class="mark">￥</span>
            <span class="price">85</span>
            <span class="text">起</span>
            <span class="iconfont icon-dropdown"></span>
          </div>
        </div>
         <div class="ticket-list-m">
          <div class="left">【重庆出发】丰都鬼城1日游</div>
          <div class="right">
            <span class="mark">￥</span>
            <span class="price">85</span>
            <span class="text">起</span>
            <span class="iconfont icon-dropdown"></span>
          </div>
        </div>
      </div>
    
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.ticket-shelf {
  overflow: hidden;
  width: 100%;
  background-color: #eee;
}
.ticket-shelf-container {
  width: 100%;
  overflow: hidden;
  margin-top: 10px;
  background-color: #fff;
}
.ticket-shelf-container .title {
  width: 100%;
  height: 44px;
  font-size: 20px;
  font-weight: bold;
  line-height: 44px;
  padding: 5px 0 0 10px;
}
.container-list {
  border: 1px solid pink;
  box-sizing: border-box;
}
.container-list-m{
  border: 1px solid pink;
  margin: 10px;
  box-sizing: border-box;
  box-shadow: 2px 2px 3px rgba(51, 51, 51, 0.5);
}
.container-list .ticket-name {
  font-size: 16px;
  line-height: 22px;
  font-weight: bold;
  color: #212121;
  align-items: baseline;
  display: flex;
  padding-top: 14px;
}

.ticket-name .border {
  background-image: linear-gradient(126deg, #00e0ca 0, #00bfd4 100%);
  border-radius: 3px;
  height: 12px;
  width: 4px;
  margin-left: 10px;
  margin-right: 6px;
}
.ticket-list {
  display: flex;
  height: 55px;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin: 15px 10px;
  border-radius: 8px;
  box-shadow: 2px 2px 3px rgba(51, 51, 51, 0.5);
}
.ticket-list-m{
 display: flex;
  height: 55px;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin: 0 3px;
  border: 1px solid #eee;
  box-sizing: border-box;
}

.ticket-list .left,
.ticket-list-m .left{
  color: #333;
  font-size: 15px;
}
.ticket-list .right,
.ticket-list-m .right {
  color: #ff9800;
  font-size: 0px;
  margin-right: 10px;
}
.ticket-list .right .mark,
.ticket-list-m .right .mark {
  font-size: 12px;
}
.ticket-list .right .price,
.ticket-list-m .right .price {
  font-size: 20px;
}
.ticket-list .right .text,
.ticket-list-m .right .text {
  font-size: 12px;
}
.ticket-list .right .icon-dropdown,
.ticket-list-m .right .icon-dropdown {
  color: #bbb;
}
</style>
