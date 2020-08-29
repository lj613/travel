<template>
  <div>
    <DetailBanner></DetailBanner>
    <DetailHeader></DetailHeader>
    <DetailBaseInfo></DetailBaseInfo>
    <TicketShelf></TicketShelf>
    <div style="height:1000px"></div>
  </div>
</template>

<script>
import DetailBanner from "./pages/Banner";
import DetailHeader from "./pages/Header";
import DetailBaseInfo from "./pages/BaseInfo";
import TicketShelf from "./pages/TicketShelf";
export default {
  components: {
    DetailBanner,
    DetailHeader,
    DetailBaseInfo,
    TicketShelf
  },
  activated(){
      document.documentElement.scrollTop = 0;
  }
};
</script>
<style scoped>
</style>