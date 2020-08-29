<template>
  <div class="tab">
    <router-link to="/" class="tab-item" tag="div">
      <span class="iconfont icon-homepage"></span>
      <span class="tab-link">首页</span>
    </router-link>
    <router-link to="/order" class="tab-item" tag="div">
      <span class="iconfont icon-order"></span>
      <span class="tab-link">订单</span>
    </router-link>
    <router-link to="/customer" class="tab-item" tag="div">
      <span class="iconfont icon-kefu"></span>
      <span class="tab-link">客服</span>
    </router-link>
    <router-link to="/mine" class="tab-item" tag="div">
      <span class="iconfont icon-my"></span>
      <span class="tab-link">我的</span>
    </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.tab {
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  height: 50px;
  font-size: 14px;
  background-color: white;
  border-top: 1px solid #eee;
}
.tab .tab-item {
  flex: 1;
  text-align: center;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.tab .tab-item .iconfont{
    font-size: 16px;
    margin-bottom: 6px;
}
.tab .tab-link {
  padding-bottom: 5px;
  color: #616161;
}
/* 当目标路由成功激活时，链接元素自动设置一个表示激活的 CSS 类名 */
.tab .tab-item.router-link-active {
  color: #00d0d4;
}
</style>