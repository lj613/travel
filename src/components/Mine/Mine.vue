<template>
  <div>
    <MineHeader></MineHeader>
    <MineContent></MineContent>
  </div>
</template>
<script>
import MineHeader from "./pages/Header";
import MineContent from "./pages/Content";
export default {
  components: {
    MineHeader,
    MineContent
  }
};
</script>

<style scoped>
* {
  height: 100%;
}
</style>