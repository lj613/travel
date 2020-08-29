<template>
  <div>
    <div class="th-back-top" v-show="show" @click="backTopHandler">
      <transition name="slide-to">
        <span class="bg-backtop"></span>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "BackTop",
  data() {
    return {
      show: false
    };
  },
  /**
   * 当页面滚动高度超过一屏就显示出来
   */
  mounted() {
    const winHeight = document.documentElement.clientHeight;
    window.addEventListener("scroll", () => {
      // 滚动高度
      let scrollHeight = document.documentElement.scrollTop;
      if (scrollHeight > winHeight) {
        this.show = true;
      } else {
        this.show = false;
      }
    });
  },
  methods: {
      
   scrollAnimation(currentY, targetY) {
      // 获取当前位置方法
      // 计算需要移动的距离 
      let needScrollTop = targetY - currentY
      let _currentY = currentY
      setTimeout(() => {
        // 一次调用滑动帧数，每次调用会不一样
        const dist = Math.ceil(needScrollTop / 10)
        _currentY += dist
        window.scrollTo(_currentY, currentY)
       // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
        if (needScrollTop > 10 || needScrollTop < -10) {
          this.scrollAnimation(_currentY, targetY)
        } else {
          window.scrollTo(_currentY, targetY)
        }
       }, 1)
   },
    backTopHandler() {
        const currentY = document.documentElement.scrollTop || document.body.scrollTop  
        this.$options.methods.scrollAnimation(currentY,0);
    }
  }
};
</script>
<style scoped>
.th-back-top {
  position: fixed;
  right: 15px;
  bottom: 104px;
  height: 39px;
  width: 39px;
  z-index: 0;
  opacity: 0.8;
}
.bg-backtop {
  display: inline-block;
  background: url("../../assets/images/goTop.png") no-repeat 0 0;
  background-size: 39px 39px;
  width: 39px;
  height: 39px;
}

</style>