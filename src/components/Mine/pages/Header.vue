<template>
  <div class="header">
    <img
      class="bg"
      src="https://s.qunarzz.com/usercenter_mobile/images/my/mybgnew-20161111.jpg"
      alt
    />
    <div class="header-back">
      <span class="iconfont icon-back" @click="goHome"></span>
    </div>
    <div class="my-info-content">
      <div class="content-img">
        <img
          src="https://qcommons.qunar.com/headshot/headshotsById/371701731.png?l&ssl=true&_=1598677202154"
          alt
        />
      </div>
      <div class="my-info-detail">
        <div class="name">还没有取名字</div>
        <p class="score">375</p>
        <p>信用分</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
};
</script>
<style >
.header {
  position: relative;
  width: 100%;

  background-color: #ebeced;
}
.header .bg {
  width: 100%;
  height: 640px;
  margin-top: -480px;
}
.header-back {
  position: absolute;
  left: 4px;
  top: 4px;
  width: 36px;
  height: 36px;
}

.header-back .icon-back {
  position: absolute;
  color: #fff;
  top: 0;
  left: 0;
  width: 36px;
  line-height: 36px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  font-size: 24px;
}
.my-info-content {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  display: flex;
  align-items: flex-end;
  color: #fff;
  width: 100%;
  box-sizing: border-box;
}

.content-img {
  display: inline-block;
  height: 71px;
  width: 71px;
  margin-left: 15px;
  border-radius: 50%;
  padding: 3px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.5);
}
.content-img img {
  width: 65px;
  height: 65px;
  border-radius: 100%;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.05);
  cursor: pointer;
}
.my-info-detail {
  height: 70px;
  font-size: 16px;
  color: #fff;
}
.my-info-detail .name {
  margin-left: 15px;
  width: 100%;
  padding: 6px 1px 15px 0;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.my-info-detail p {
  margin-left: 15px;
  font-size: 10px;
  margin-bottom: 3px;
}
.my-info-detail .score {
  font-size: 16px;
}
</style>