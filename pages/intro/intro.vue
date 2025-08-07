<template>
  <view class="container">
    <view class="content">
      <text class="headline">Rent the risk. <br />Keep the reward.</text>
      <text class="subtext">
        <br />Turning Trading Cards Into On-Chain NFTs For Rent And Purchase.
      </text>
    </view>
    <view class="button-container">
      <button class="get-started" @click="goNext">Get Started</button>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  methods: {
    goNext() {
      uni.navigateTo({ url: "/pages/signinup/signinup" });
    },
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100vh;
}
.container {
  height: 100vh;
  width: 100vw;
  background: url("/static/intro.png") no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 80rpx 30rpx 50rpx;
  box-sizing: border-box;
}

.content {
  text-align: center;
  margin-top: 30%;
}

.headline {
  font-size: 36rpx;
  font-weight: bold;
  color: white;
  margin-bottom: 20rpx;
  line-height: 1.5;
}

.subtext {
  font-size: 26rpx;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  padding: 0 20rpx;
}

.button-container {
  width: 100%;
}

.get-started {
  background: linear-gradient(90deg, #a44fff, #ff6e6e);
  color: white;
  border: none;
  border-radius: 24rpx;
  font-size: 18px;
  width: 80%;
  height: 90rpx;
  margin: 0 auto 25%;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
