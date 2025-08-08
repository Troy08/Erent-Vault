<template>
  <view class="collections-section">
    <view class="collections-header">
      <text class="heart-icon">💜</text>
      <text class="collections-title">My Collections</text>
    </view>

    <view class="content-indent">
      <view class="empty-state">
        <view class="empty-title">Your collection is empty.</view>
        <view class="empty-description">
          Explore The Exchange To Browse Items For Purchase Or Send Your Items To Lend With Erent.
        </view>
      </view>

      <view class="action-buttons">
        <button class="browse-btn" @click="$emit('browse')">Browse</button>
        <button class="claim-btn"  @click="$emit('claim')">Claim</button>
      </view>
    </view>
  </view>
</template>


<script>
export default { name: 'MyCollections' }
</script>

<style scoped lang="scss">
.collections-section {
  .collections-header {
    display: flex;
    align-items: center;
    margin-bottom: 48rpx;

    .heart-icon        { font-size: 32rpx; margin-right: 16rpx; }
    .collections-title { color: #fff; font-size: 32rpx; font-weight: 500; }
  }

  .content-indent { margin-left: 48rpx; }

  /* ---------- empty state ---------- */
  .empty-state {
    margin-bottom: 56rpx;

    .empty-title       { color: #fff; font-size: 42rpx; font-weight: 400; margin-bottom: 24rpx; line-height: 1.3; }
    .empty-description { color: #C4B5DB; font-size: 28rpx; line-height: 1.5;  }
  }

  /* ---------- buttons ---------- */
  .action-buttons {
    display: flex;
    flex-direction: column;
    gap: 24rpx;

    button {
      width: 100%;                 
      min-height: 96rpx;           
      border-radius: 36rpx;
      font-size: 30rpx;
      font-weight: 600;
      padding: 20rpx 0;
      border: none;
    }

    .browse-btn { background: linear-gradient(90.3deg, #9C3FE4 0.16%, #C65647 101.62%); color: #fff; }
    .claim-btn  { background: #EAD0FF; color: #7C3AED; }
  }
}
</style>
