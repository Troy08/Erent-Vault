<template>
  <view class="bottom-nav">
    <!-- Home -->
    <view class="nav-icon" @click="goNext('mainPage/mainPage','mainPage')">
      <img class="footer-icons" 
        :src="page==='mainPage' 
          ? '/static/icons/home-icon.png' 
          : '/static/icons/home-outlined-icon.png'" />
    </view>

    <!-- Hammer -->
    <view class="nav-icon" @click="goNext('hammer/hammer','hammer')">
      <img class="footer-icons" src="/static/icons/hammer-icon.png" />
    </view>

    <!-- Scan (center button) -->
    <view class="nav-center" @click="goNext('scan/scan','scan')">
      <img class="footer-icons-scan" src="/static/icons/footer-scan.png" />
    </view>

    <!-- Lease -->
    <view class="nav-icon" @click="goNext('leasePage/leasePage','leasePage')">
      <img class="footer-icons" 
        :src="page==='leasePage' 
          ? '/static/icons/bars-filled.png' 
          : '/static/icons/bars-icon.png'" />
    </view>

    <!-- Profile -->
    <view class="nav-icon" @click="goNext('profile/profile','profile')">
      <img :class="page==='profile' ? 'footer-icon-profile' : 'footer-icons'"
        :src="page==='profile' 
          ? '/static/icons/user-filled.png' 
          : '/static/icons/user-icon.png'" />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      page: '' // current active page
    }
  },
  mounted() {
    this.updatePage()
  },
  methods: {
    updatePage() {
      const pages = getCurrentPages()
      // e.g. "pages/profile/profile" -> we want "profile"
      this.page = pages[pages.length - 1].route.split('/')[1]
      console.log("Active page:", this.page)
    },
    goNext(endpoint, name) {
      uni.navigateTo({ url: `/pages/${endpoint}` })
      this.page = name
    }
  }
}
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
  z-index: 999;
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

.footer-icon-profile {
  width: 44px;
  height: 44px;
}

.footer-icons-scan {
  width: 140px;
  height: 140px;
  object-fit: contain;
}
</style>
