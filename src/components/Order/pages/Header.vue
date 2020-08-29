<template>
  <div class="header-top">
    <div class="header-left">
      <span class="iconfont icon-back" @click="goHome"></span>
    </div>
    <div class="header-center">
        我的订单
        <span class="iconfont icon-dropdown"></span>
    </div>
    <div class="header-right">
        <span>订单查询</span>
    </div>
  </div>
  
</template>
<script>
export default {
    data(){
        return{

        }
    },
     methods: {
        goHome(){
            this.$router.push("/");
        }
    },
};
</script>
<style scoped>
.header-top {
  display: flex;
  width: 100%;
  line-height: 44px;
  background-color: white;
  color: #000;
  font-size: 14px;
  text-align: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
}
.header-left {
  width: 20px;
  padding: 0 10px;
  text-align: center;
}
.header-left .icon-back {
  font-size: 18px;
}
.header-center{
   font-size: 18px;
}
.header-center .icon-dropdown{
    color: #b1abab;
    font-size:14px;
}

.header-right{
    font-size: 14px;
   margin-right: 15px;
  color: #00bcd4;
}
</style>