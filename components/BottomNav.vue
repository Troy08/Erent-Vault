<template>
  <view
    class="bottom-nav"
    :class="{ 'nav-expanded': isNavExpanded }"
    @touchstart="handleNavTouch"
    @touchmove="handleNavDrag"
    @touchend="handleNavEnd"
  >
    <view class="nav-item" @click="navigateTo('/pages/home/home')">
      <image class="nav-icon" src="/static/Home.png" mode="aspectFit" />
    </view>
    <view class="nav-item" @click="navigateTo('/pages/explore/explore')">
      <image class="nav-icon" src="/static/Explore.png" mode="aspectFit" />
    </view>
    <view class="nav-item nav-active" @click="handleCameraClick">
      <view class="nav-hexagon-button">
        <image class="hexagon-bg" src="/static/Polygon 3.png" mode="aspectFit" />
        <image class="frame-icon" src="/static/Frame.png" mode="aspectFit" />
      </view>
    </view>
    <view class="nav-item" @click="navigateTo('/pages/stats/stats')">
      <image class="nav-icon" src="/static/Stats.png" mode="aspectFit" />
    </view>
    <view class="nav-item" @click="navigateTo('/pages/user/user')">
      <image class="nav-icon" src="/static/User.png" mode="aspectFit" />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isNavExpanded: false,
      startY: 0,
      currentY: 0
    }
  },
  methods: {
    handleCameraClick() {
      uni.scanCode({
        scanType: ['qrCode'],
        success: (res) => {
          uni.showToast({
            title: 'QR Code: ' + res.result,
            icon: 'none',
            duration: 3000
          })
        },
        fail: () => {
          uni.showToast({
            title: 'Camera access failed',
            icon: 'none'
          })
        }
      })
    },
    navigateTo(url) {
      uni.switchTab({ url })
    },
    handleNavTouch(e) {
      this.startY = e.touches[0].clientY
    },
    handleNavDrag(e) {
      this.currentY = e.touches[0].clientY
      const deltaY = this.startY - this.currentY
      if (deltaY > 50) this.isNavExpanded = true
      else if (deltaY < -30) this.isNavExpanded = false
    },
    handleNavEnd() {
      this.startY = 0
      this.currentY = 0
    }
  }
}
</script>

<style scoped lang="scss">
.bottom-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 5vw;
  background: linear-gradient(270deg, #2D0A3D 0%, #14081D 100%);
  backdrop-filter: blur(20rpx);
  border-radius: 60rpx 60rpx 0 0;
  box-shadow: 0 -10rpx 30rpx rgba(0, 0, 0, 0.3);
  position: relative;
  height: 120rpx;
  z-index: 5;

  &.nav-expanded {
    transform: translateY(-80rpx);
    background: #6B279A;
  }

  .nav-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80rpx;
    height: 80rpx;

    &:active {
      transform: scale(0.95);
    }

    .nav-icon {
      width: 70rpx;
      height: 70rpx;
      opacity: 0.85;
      transition: opacity 0.2s;
    }

    &:active .nav-icon {
      opacity: 1;
    }
  }

  .nav-item.nav-active {
    width: 240rpx;
    height: 120rpx;
    position: relative;
    margin-top: -80rpx;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.nav-hexagon-button {
  width: 270rpx;
  height: 270rpx;
  position: relative;
  margin-top: -130rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(30rpx);
}

.hexagon-bg {
  position: absolute;
  width: 250rpx;
  height: 250rpx;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 1;
}

.frame-icon {
  width: 64rpx;
  height: 64rpx;
  z-index: 2;
  transform: translateY(10rpx);
}
</style>
