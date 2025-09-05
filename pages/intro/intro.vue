<template>
  <view class="container">
    <!-- Text content -->
    <view class="content">
      <view class="headline">
        <text class="headline-line">Rent the risk.</text>
        <text class="headline-line">Keep the reward.</text>
      </view>

      <text class="subtext">
        Turning Trading Cards Into On-
      </text>
	  <text class="subtext">
	    Chain NFTs For Rent And Purchase.
	  </text>
    </view>

    <!-- Button -->
    <view class="button-container">
      <button class="get-started" @click="goNext">Get Started</button>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goNext() {
      uni.navigateTo({ url: '/pages/signinup/signinup' })
    },
  },
}
</script>

<style>
/* Fullscreen background */
html, body {
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow: hidden;
}

.container {
  height: 100vh;
  width: 100vw;
  background: url('/static/intro.png') no-repeat center center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* Safe padding top/bottom to align with design */
  padding: 120rpx 40rpx 80rpx;
  box-sizing: border-box;
  font-family: 'Helvetica Neue', 'SF Pro Display', Roboto, Arial, sans-serif;
}

/* Centered content block */
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  /* Push text into upper-mid section of the screen */
  margin-top: 8vh;
}

/* Headline with two lines */
.headline {
  display: flex;
  flex-direction: column;
  gap: 10rpx;
  margin-bottom: 28rpx;
}

.headline-line {
  color: #fff;
  font-weight: 200;
  font-size: 56rpx; /* adjust to 60–64rpx if still too small */
  line-height: 1.1;
  letter-spacing: 0.5rpx;
  text-shadow: 0 2rpx 6rpx rgba(0,0,0,0.35);
}

/* Subtext narrower width for readability */
.subtext {
  color: #b3b3b3;        /* light grey */
  font-size: 28rpx;     /* ~14–16px */
  line-height: 1.5;
  letter-spacing: 0.2rpx;
  max-width: 600rpx;
  padding: 0 12rpx;
}

/* Button container aligned to bottom */
.button-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 160rpx;
}

/* Gradient button with rounded corners */
.get-started {
  width: 72%;
  max-width: 640rpx;
  height: 96rpx;
  border: none;
  border-radius: 24rpx;

  background: linear-gradient(90deg, #a44fff 0%, #ff6e6e 100%);
  color: #fff;
  font-weight: 400;
  font-size: 32rpx; /* ~16px */
  letter-spacing: 0.5rpx;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 12rpx 20rpx rgba(255, 110, 110, 0.25),
              0 8rpx 18rpx rgba(164, 79, 255, 0.18);
}

/* Slight pressed effect */
.get-started:active {
  transform: translateY(2rpx);
  opacity: 0.96;
}

/* Adjustments for very small screens */
@media (max-width: 360px) {
  .container { padding: 100rpx 36rpx 72rpx; }
  .headline-line { font-size: 52rpx; }
  .get-started { width: 78%; height: 92rpx; }
}

/* Remove scrollbar for H5 */
body::-webkit-scrollbar { display: none; }
</style>

