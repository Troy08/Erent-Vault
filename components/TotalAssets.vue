<template>
  <view class="assets-section">
    <text class="assets-label">Total Assets</text>
    <text class="assets-amount">$---</text>
    <view class="assets-meta">
      <view class="purple-dot"></view>
      <text class="assets-placeholder">---</text>
    </view>
  </view>
</template>

<style scoped lang="scss">
.assets-section {
  margin-bottom: 60rpx;

  .assets-label {
    color: #C4B5DB;
    font-size: 28rpx;
    display: block;
    margin-bottom: 12rpx;        
  }

  .assets-amount {
    color: #FFFFFF;
    font-size: 50rpx;
    font-weight: 300;
    display: block;
    line-height: 1;              
  }

  /* small row with dot + placeholder */
  .assets-meta {
    display: flex;
    align-items: center;
    gap: 12rpx;
    margin-top: 30rpx;
  }

  .purple-dot {
    width: 16rpx;
    height: 16rpx;
    background: #8B5CF6;
    border-radius: 50%;
  }

  .assets-placeholder {
    color: #C4B5DB;
    font-size: 28rpx;
  }
}
</style>
