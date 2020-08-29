<template>
  <div class="header">
    <div class="header-search">
      <span class="iconfont icon-search"></span>
      <span class="content">搜索景点门票</span>
    </div>
    <div class="header-right">
      <img src="../../../assets/images/logo.gif" alt />
      <div class="download">下载app</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.header {
  width: 100%;
  height: 44px;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-top: 16px;
}   
.header-search {
  width: calc(100% - 50px);
  flex: 1;
  margin:0 20px;
  background-color: #eee;
  line-height: 30px;
}
.header-search .icon-search{
  color: #a5a5a5;
  font-size: 18px;
  line-height: 30px;
  margin-left: 4px;

}
.header-search .content {
  color: #a5a5a5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  padding: 2px;
}
.header-right {
  width: 50px;
  margin-right: 20px;
  text-align: center;
}
.header-right img {
  width: 24px;
  height: 24px;
  display: inline-block;
}
.header-right .download{
     color: #616161;
    font-weight: 400;
    font-size: 10px;
    margin-top: 3px;
}

</style>