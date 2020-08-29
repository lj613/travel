<template>
  <div class="header">
    <div class="header-back" v-show="showHander">
      <span class="border"></span>
      <span class="iconfont icon-back" @click="goHome"></span>
    </div>
    <div class="header-top" v-show="!showHander" :style="styleOpacity">
      <div class="header-left">
        <span class="iconfont icon-back" @click="goHome"></span>
      </div>
      丰都鬼城
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            showHander:true,
            styleOpacity:{
                opacity:0
            }
        }
    },
    methods: {
        goHome(){
            this.$router.push("/");
        }
    },
    mounted() {
        let _this = this;
        window.addEventListener("scroll",function(){
            let top = document.documentElement.scrollTop;
            // console.log(top)
            if(top>45){
                let opacity = top/130;
                opacity >1 ? 1:opacity;
                _this.styleOpacity={opacity:opacity};
                _this.showHander = false;
            }else{
                _this.showHander = true;

            }
        })
    },
};
</script>
<style >
.header-back {
  position: absolute;
  left: 4px;
  top: 4px;
  width: 36px;
  height: 36px;
}
.border {
  display: block;
  width: 36px;
  height: 36px;
  background-color: #000;
  opacity: 0.5;
  border-radius: 50%;
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
}
.header-top {
  position: fixed;
  top: 0;
  width: 100%;
  line-height: 44px;
  background-color: #00bcd4;
  color: #fff;
  font-size: 14px;
  text-align: center;
  z-index:6;
}
.header-left {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  padding: 0 10px;
  text-align: center;
}
.header-left .icon-back {
  font-size: 18px;
}
</style>