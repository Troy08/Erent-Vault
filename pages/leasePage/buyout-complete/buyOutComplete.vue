<template>
  <view class="page-wrapper">
    <video
      class="full-video"
      src="/static/img/order/buyOutComplete.mp4"
      autoplay
      muted
      :controls="false"
      playsinline
      show-center-play-btn="false"
    ></video>
	<button class="done-btn" @click="goToMyCollection">Done</button>
  </view>
</template>


<script>
	export default {
	  methods: {
	    goToMyCollection() {
	      uni.switchTab({
	        url: '/pages/collect/myCollection'
	      });
	    }
	  }
	}
</script>

<style>
	.page-wrapper {
	  width: 100vw;
	  height: 100vh;
	  overflow: hidden;
	  position: relative;
	}
	
	.full-video {
	  width: 100%;
	  height: 100%;
	  object-fit: cover;
	  display: block;
	}

    .done-btn {
      background: linear-gradient(to right, #ae4ef1, #fa7171);
      border-radius: 30rpx;
      color: #fff;
      font-size: 32rpx;
      padding: 10rpx 0;
      margin-top: 20rpx;
      position: absolute;
      bottom: 130rpx;
      left: 5%;
      right: 5%;
      border: none;
    }
</style>