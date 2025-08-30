<template>
  <view class="scan-bg">
    <view class="scan-title">Take a Photo of Your Card</view>
    <view class="scan-rect">
      <view class="scan-corner tl"></view>
      <view class="scan-corner tr"></view>
      <view class="scan-corner bl"></view>
      <view class="scan-corner br"></view>
    </view>
    <view class="scan-bottom-bar">
		<view class="scan-icon-wrap" @click="chooseFromAlbum">
			<image
			  class="scan-icon"
			  src="/static/img/common/album-icon.png"
			  mode="widthFix"
			/>
		</view>
      
      <view class="scan-shutter" @click="takePhoto">
        <view class="scan-shutter-inner"></view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'Scanning',
  methods: {
    // Take a photo
    takePhoto() {
      uni.chooseImage({
        count: 1,
        sourceType: ['camera'],
        success: (res) => {
          // Handle the photo taken, res.tempFilePaths[0]
          // For example, jump to the next page or upload
        }
      })
    },
    // Select from album
    chooseFromAlbum() {
      uni.chooseImage({
        count: 1,
        sourceType: ['album'],
        success: (res) => {
          // Handle the selected image, res.tempFilePaths[0]
        }
      })
    }
  }
}
</script>

<style scoped>
.scan-bg {
  min-height: 100vh;
  width: 100vw;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.scan-title {
  color: #fff;
  font-size: 5vw;
  margin-top: 8vh;
  margin-bottom: 6vh;
  text-align: center;
  width: 100vw;
}
.scan-rect {
  width: 70vw;
  max-width: 420rpx;
  height: 38vh;
  max-height: 560rpx;
  border: 1rpx solid #444;
  position: relative;
  margin: 0 auto;
  margin-top: 4vh;
  margin-bottom: 10vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
.scan-corner {
  width: 8vw;
  max-width: 32rpx;
  height: 8vw;
  max-height: 32rpx;
  border: 1vw solid #a97fff;
  max-border-width: 8rpx;
  position: absolute;
}
.tl {
  left: -1vw; top: -1vw;
  border-right: none; border-bottom: none;
}
.tr {
  right: -1vw; top: -1vw;
  border-left: none; border-bottom: none;
}
.bl {
  left: -1vw; bottom: -1vw;
  border-right: none; border-top: none;
}
.br {
  right: -1vw; bottom: -1vw;
  border-left: none; border-top: none;
}
.scan-bottom-bar {
  position: fixed;
  left: 0; right: 0; bottom: 8vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100vw;
  z-index: 10;
  box-sizing: border-box;
}

.scan-icon-wrap {
  position: relative;
  margin-right: 12vw;
  left: -18vw;
  top: -8vh;
}

.scan-icon {
  width: 32px;
  height: 32px;
  display: block;
}
.scan-shutter {
  width: 22vw;
  max-width: 120rpx;
  height: 22vw;
  max-height: 120rpx;
  border-radius: 50%;
  border: 0.7vw solid #fff;
  max-border-width: 4rpx;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: -9vw;
  margin-bottom: 6vh;
}
.scan-shutter-inner {
  width: 18vw;
  max-width: 100rpx;
  height: 18vw;
  max-height: 100rpx;
  border-radius: 50%;
  background: #fff;
}
</style>
