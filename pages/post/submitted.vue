<template>
	<view class="page-wrapper">
		<view class="header">
		    <text class="header-title">We&apos;ve got your request!</text>
		    <br>
		    <text class="header-subtitle">
		        Lorem Ipsum Dolor Sit Amet Consectetur.  
		        Lorem Nec Ullamcorper Aliquam<br>Id Dolor Id Volutpat Mollis.
		    </text>
		</view>
		<view class="timeline">
		      <view class="timeline-line"></view>

		      <view class="timeline-item">
		        <view class="timeline-point active"></view>
		        <view class="timeline-content">
		          <text class="item-title">Card is delivered.</text>
		          <br>
		          <text class="item-time">Sun. May 16, 2024, 12:06 PM</text>
		        </view>
		      </view>
		
		      <view class="timeline-item">
		        <view class="timeline-point"></view>
		        <view class="timeline-content">
		          <text class="item-title">Shipping Label Created</text>
		          <br>
		          <text class="item-time">Sun. May 16, 2024, 12:06 PM</text>
		        </view>
		      </view>
		
		      <view class="timeline-item">
		        <view class="timeline-point"></view>
		        <view class="timeline-content">
		          <text class="item-title">Request Submitted</text>
		          <br>
		          <text class="item-time">Sun. May 16, 2024, 12:06 PM</text>
		        </view>
		      </view>
		    </view>
		<button class="got-it-btn">Got it</button>
	</view>
</template>
<script>
export default {
  name: "Submitted",
};
</script>
<style scoped>
	.page-wrapper {
	  height: 100vh;
	  display: flex;
	  flex-direction: column;
	  position: relative;
	  background: radial-gradient(
	    circle at center,
	    #3a0066 0%,     
	    #1f003d 40%,    
	    #1a0033 70%,    
	    #0f0020 100%    
	  );
	}
	/* Header */
	.header {
	  margin-bottom: 60rpx;
	  margin-top: 150rpx;
	}
	.header-title {
	  font-size: 45rpx;
	  color: #fff;
	  font-weight: bold;
	  position: relative;
	  left: 45rpx;
	}
	.header-subtitle {
	  margin-top: 20rpx;
	  position: relative;
	  left: 45rpx;
	  font-size: 28rpx;
	  color: rgba(255,255,255,0.7);
	  line-height: 40rpx;
	}
	
	/* Timeline container */
	.timeline {
	  position: relative;
	  padding-left: 40rpx;
	  margin-top: 150rpx;
	}
	
	/* Vertical line */
	.timeline-line {
	  position: absolute;
	  left: 55rpx;
	  top: 0;
	  bottom: 140rpx;
	  width: 4rpx;
	  background: rgba(255,255,255,0.3);
	}
	
	/* Timeline item */
	.timeline-item {
	  position: relative;
	  display: flex;
	  margin-bottom: 60rpx;
	}
	
	/* Dot */
	.timeline-point {
	  width: 32rpx;
	  height: 32rpx;
	  border-radius: 50%;
	  background: #808080;
	  flex-shrink: 0;
	}
	.timeline-point.active {
	  /* Highlighted dot uses gradient */
	  background: linear-gradient(45deg, #ae4ef1, #fa7171);
	}
	
	/* Text content */
	.timeline-content {
	  margin-left: 24rpx;
	}
	.item-title {
	  font-size: 32rpx;
	  color: #fff;
	  font-weight: 500;
	}
	.item-time {
	  margin-top: 10rpx;
	  font-size: 24rpx;
	  color: rgba(255,255,255,0.6);
	}
	
	/* Got it button */
	.got-it-btn {
	  background: linear-gradient(to right, #ae4ef1, #fa7171);
	  border-radius: 20rpx;
	  color: #fff;
	  font-size: 32rpx;
	  padding: 10rpx 0;
	  margin-top: 20rpx;
	  position: absolute;
	  bottom: 50rpx;
	  left: 10%;
	  right: 10%;
	  border: none;
	}
</style>