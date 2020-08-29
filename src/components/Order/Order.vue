<template>
  <div>
    <OrderHeader></OrderHeader>
    <OrderTab></OrderTab>
    <keep-alive>
    <router-view></router-view>
    
    </keep-alive>

  </div>
</template>
<script>
import OrderHeader from "./pages/Header";
import OrderTab from "./pages/Tab";
export default {
  components: {
    OrderHeader,
    OrderTab
  }
};
</script>
<style scoped>
</style>