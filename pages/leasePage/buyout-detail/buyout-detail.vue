<template>
  <view class="buyout-detail-wrapper">
    <!-- Header -->
    <view class="buyout-header">
      <text class="header-title">Cliam</text>
    </view>

    <!-- Card Display -->
    <view class="card-display">
      <image :src="card.image" class="card-image" mode="aspectFit" />
    </view>

    <!-- Card Info -->
    <view class="card-info">
      <view class="card-title-row">
        <text class="card-name">{{ card.name }}</text>
        <text class="card-id">#{{ card.id }}</text>
      </view>
      <text class="token-id">Token ID: {{ card.tokenId }}</text>

      <view class="card-stats-price">
        <view class="card-stats">
          <view class="stat-box">
            <text class="stat-label">PSA</text>
            <text class="stat-value">{{ card.psa }}</text>
          </view>
          <view class="stat-box">
            <text class="stat-label">POP</text>
            <text class="stat-value">{{ card.pop }}</text>
          </view>
        </view>

        <view class="price-box">
          <text class="price-label">Price To Claim</text>
          <view class="price-row">
            <image src="/static/icons/dollar-icon.png" class="token-icon" />
            <text class="price-value">{{ card.priceToClaim }}</text>
          </view>
        </view>
      </view>
    </view>

    <!-- Price & Taxes Section -->
    <view class="price-section">
      <view class="price-row-2">
        <view class="price-line"
          ><text class="price-title">Price</text><br />
          <text class="price-num">
            <image src="/static/icons/dollar-icon.png" class="token-icon" />
            {{ card.price }}
            <img src="/static/icons/up-arrow.png" class="arrow-icon" /></text
        ></view>

        <!-- Confirm Button -->
        <view class="confirm-button-wrapper">
          <button class="confirm-button">Continue</button>
        </view>
      </view>
      <view class="price-row-2">
        <text class="price-title">Market Price</text>
        <text class="price-num"
          ><image src="/static/icons/dollar-icon.png" class="token-icon" />
          {{ card.marketPrice }}</text
        >
      </view>
      <view class="hr-line" />
      <view class="price-row-2">
        <text class="price-title">Taxes</text>
        <text class="price-num"
          ><image src="/static/icons/dollar-icon.png" class="token-icon" />
          {{ card.taxes }}</text
        >
      </view>
      <text class="disclaimer">
        By selecting “Continue”, you agree to buy out the card with market
        price.
      </text>
      <Footer />
    </view>
  </view>
</template>

<script setup>
import Footer from "@/components/footer.vue";
const card = {
  name: "Eevee",
  id: 2815,
  tokenId: "lsigladifbakfbndf",
  image: "/static/cards/lease-card.png",
  psa: 8,
  pop: 4,
  priceToClaim: "30.32",
  price: "36.37",
  marketPrice: "30.32",
  taxes: "6.05",
};
</script>

<style scoped>
.buyout-detail-scroll {
  height: 100vh;
  overflow-y: scroll;
}

.buyout-detail-wrapper {
  min-height: 100vh;
  background: radial-gradient(circle at center, #3a0066, #1f003d, #0f0020);
  padding: 60rpx 0rpx 0rpx;
  color: white;
}

.buyout-header {
  text-align: center;
  margin-bottom: 30rpx;
}

.header-title {
  font-size: 36rpx;
  font-weight: 700;
  color: white;
}

.card-display {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30rpx 0;
}

.card-image {
  width: 226px;
  height: 314px;
  border-radius: 16rpx;
}

.card-info {
  margin-top: 30rpx;
}

.card-title-row {
  display: flex;
  justify-content: space-between;
  padding: 0 30rpx;
  font-size: 30rpx; /* normalized */
  font-weight: 500;
}

.card-id {
  font-size: 24rpx;
  color: #999;
  font-weight: 400;
}

.token-id {
  font-size: 20rpx;
  color: #aaa;
  padding-left: 30rpx;
  margin-top: 10rpx;
}

.card-stats-price {
  display: flex;
  justify-content: space-between;
  margin-top: 30rpx;
  padding: 0 30rpx;
}

.card-stats {
  display: flex;
  gap: 30rpx;
}

.stat-box {
  text-align: center;
  display: flex;
  flex-direction: column;
}

.stat-label {
  font-size: 26rpx;
  color: #aaa;
}

.stat-value {
  font-size: 36rpx;
  color: #cc99ff;
  font-weight: 700;
}

.price-box {
  text-align: right;
}

.price-label {
  font-size: 26rpx;
  color: #aaa;
}

.price-row {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10rpx;
  margin-top: 4rpx;
}

.token-icon {
  width: 24rpx;
  height: 24rpx;
}

.price-value {
  font-size: 36rpx;
  font-weight: bold;
  color: white;
}
.buyout-detail-scroll {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.price-section {
  border-radius: 25px 25px 0 0;
  padding: 30rpx 30rpx 0rpx 30rpx;
  margin-top: 40rpx;
  background-color: rgba(25, 12, 38, 0.4); /* more transparent */
  margin-bottom: 0px;
}

.price-row-2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40rpx;
  justify-content: space-between;
  margin-bottom: 16rpx;
}

.price-title {
  font-size: 24rpx;
  color: #aaa;
}

.price-num {
  font-size: 28rpx;
  color: white;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.confirm-button-wrapper {
}

.confirm-button {
  width: 140px;
  height: 36.5px;
  font-size: 28rpx;
  font-weight: 500;
  border-radius: 16rpx;
  background: linear-gradient(to right, #a755ff, #ff5975);
  color: white;
  border: none;
}

.disclaimer {
  font-size: 20rpx;
  color: #888;
  padding: 10rpx 0rpx 10rpx;
  text-align: center;
}

.bottom-nav {
  margin-top: 0px;
}

.hr-line {
  height: 1px;
  width: 100%;
  background-color: #8080808c;
  margin: 20rpx 0;
}

.arrow-icon {
  height: 24px;
  width: 24px;
  margin-left: 10px;
}

.price-line {
}
</style>
