<template>
  <view class="bottom-nav">
    <view class="nav-icon" @click="goNext('mainPage/mainPage')"
      ><img class="footer-icons" src="/static/icons/home-icon.png"
    /></view>
    <view class="nav-icon"
      ><img class="footer-icons" src="/static/icons/hammer-icon.png"
    /></view>
    <view class="nav-center" @click="goNext('scan/scan')"
      ><img class="footer-icons-scan" src="/static/icons/footer-scan.png"
    /></view>
    <view class="nav-icon" @click="goNext('leasePage/leasePage')">
  <img class="footer-icons" src="/static/icons/bars-icon.png" />
</view>

    <view class="nav-icon" @click="goNext('profile/profile')"
      ><img class="footer-icons" src="/static/icons/user-icon.png"
    /></view>
  </view>
</template>
<script>
export default {
  components: {},
  methods: {
    goNext(endpoint) {
      uni.navigateTo({ url: `/pages/${endpoint}` });
    },
  },
};
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100rpx;
  background: #2a0044;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
  padding-bottom: 60rpx;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}

.nav-icon {
  width: 60rpx;
  height: 60rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-center {
  transform: translateY(-50rpx);
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-icons {
  width: 44px;
  height: 44px;
}

.footer-icons-scan {
  width: 140px;
  height: 140px;
  object-fit: contain;
}
</style>
