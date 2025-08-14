<template>
  <view class="page-wrapper">
    <view class="assets">
      <text class="assets-title">Total Assets</text>
      <view class="assets-money-row">
        <text class="assets-money">$---</text>
      </view>
      <text class="assets-sub">🔜---</text>
    </view>
    <view class="collections-title-row">
      <text class="icon">🔜</text>
      <text class="collections-title">My Collections</text>
    </view>
    <view class="empty-block">
      <text class="empty-title">Your collection is empty.</text>
      <view class="empty-desc-wrapper">
		  <text class="empty-desc">
          Explore The Exchange To Browse Items For Purchase Or Send Your Items To Lend With Erent.
          </text>
	  </view>
    </view>
    <view class="btns">
      <<button class="browse-btn">Browse</button>
      <button class="claim-btn">Claim</button>
    </view>
  </view>
</template>
<script>
export default {
  name: "MyCollection",
};
</script>
<style scoped>
	.page-wrapper {
	  min-height: 100vh;
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
	.assets {
	  margin-left: 40rpx;
	  margin-top: 90rpx;
	}
	.assets-title {
	  font-size: 28rpx;
	  color: rgba(255, 255, 255, 0.5);
	}
	.assets-money {
	  font-weight: 400;
	  font-style: normal;
	  font-size: 72rpx;
	  color: rgba(255, 255, 255, 1);
	  line-height: 1.35;
	  letter-spacing: 0px;
	}
	
	.assets-sub {
	  color: rgba(128, 128, 128, 0.55);
	  font-size: 30rpx;
	  line-height: 40rpx;
	  letter-spacing: -0.48rpx;
	  text-align: center;
	}
	
	.collections-title-row {
	  margin-left: 40rpx;
	  margin-top: 60rpx;
	}
	
	.collections-title {
	  color: rgba(255, 255, 255, 1);
	  font-size: 32rpx;
	  line-height: 48rpx;
	  letter-spacing: 0rpx;
	  text-align: center;
	}
	
	.empty-block {
	  margin-left: 80rpx;
	  margin-top: 90rpx;
	  width: 722rpx;
	}
	
	.empty-title {
	  font-size: 48rpx;
	  line-height: 57.6rpx;
	  color: rgba(250, 250, 250, 1);
	}
	
	.empty-desc-wrapper {
	  margin-top: 70rpx;
	  width: 642rpx;
	}
	
	.empty-desc {
	  font-size: 36rpx;
	  line-height: 48.6rpx;
	  text-transform: capitalize;
	  color: rgba(187, 187, 187, 1);
	}
	
	.btns {
	  margin: 0 auto;
	  margin-top: 370rpx;
	  width: 630rpx;
	}
	
	.browse-btn {
	  background: linear-gradient(to right, #ae4ef1, #fa7171);
	  border-radius: 30rpx;
	  color: #fff;
	  font-size: 32rpx;
	  border: none;
	  height: 100rpx;
	}
	.claim-btn {
	  margin-top: 40rpx;
	  background: rgba(234, 208, 255, 1);
	  border-radius: 30rpx;
	  color: rgba(151, 71, 255, 1);
	  font-size: 36rpx;
	  border: none;
	  height: 100rpx;
	  font-weight: 600;
	}
</style>