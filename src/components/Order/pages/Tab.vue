<template>
  <div class="tab">
    <router-link to="/order/all" class="tab-item" tag="div">
      <span class="tab-link">全部</span>
    </router-link>
    <router-link to="/order/go" class="tab-item" tag="div">
      <span class="tab-link">待出行</span>
    </router-link>
    <router-link to="/order/paid" class="tab-item" tag="div">
      <span class="tab-link">待支付</span>
    </router-link>
    <router-link to="/order/refund" class="tab-item" tag="div">
      <span class="tab-link">退款单</span>
    </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.tab {
  display: flex;
  height: 44px;
  line-height: 44px;
  font-size: 14px;
  color: black;
  background-color: #fff;
}
.tab .tab-item {
  flex: 1;
  text-align: center;
}
.tab .tab-link {
  padding-bottom: 5px;
}
/* 当目标路由成功激活时，链接元素自动设置一个表示激活的 CSS 类名 */
.tab .tab-item.router-link-active{
  color: #00bcd4;
  border-bottom: 2px solid #00bcd4;
}
</style>