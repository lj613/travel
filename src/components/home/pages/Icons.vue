<template>
  <div class="icons">
    <div class="icons-item l" v-for="item in iconsListL" :key="item.id">
      <img :src="item.imgUrl" alt />
      <p>{{item.title}}</p>
    </div>
    <div class="icons-item m" v-for="(item,index) in iconsListM" :key="index">
      <img :src="item.imgUrl" alt />
      <p>{{item.title}}</p>
    </div>
  </div>
</template>
<script>
export default {
   props:['iconsListL','iconsListM'],
  data() {
    return {
     
      
    };
  }
};
</script>
<style scoped>
.icons {
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
}
.icons-item {
  width: 20%;
  padding-bottom: 10px;
}
.icons-item.l img {
  width: 55px;
  height: 55px;
  display: block;
  margin: 0 auto;
  padding-top: 10px;
}
.icons-item.m img {
  width: 29px;
  height: 29px;
  display: block;
  margin: 0 auto;
  padding-top: 10px;
}
.icons-item p {
  margin-top: 5px;
  font-size: 12px;
  text-align: center;
}
</style>