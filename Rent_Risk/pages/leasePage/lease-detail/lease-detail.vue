<template>
  <scroll-view scroll-y class="lease-detail-scroll">
    <view class="lease-detail-wrapper">
      <view class="card-display">
        <image :src="card.image" class="card-image" mode="aspectFit" />
      </view>

      <view class="card-info">
        <view class="card-title-row">
          <text class="card-name">{{ card.name }}</text>
          <text class="card-id">#{{ card.id }}</text>
        </view>
        <text class="lease-label">My Lease</text>
        <view>
          <text class="token-id">Token ID: {{ card.tokenId }}</text>
        </view>
        <view class="card-stats-price">
          <view class="card-stats">
            <view class="stat-box">
              <view>
                <text class="stat-label">PSA</text>
              </view>
              <text class="stat-value">{{ card.psa }}</text>
            </view>
            <view class="stat-box">
              <view>
                <text class="stat-label">POP</text>
              </view>
              <text class="stat-value">{{ card.pop }}</text>
            </view>
          </view>

          <view class="price-box">
            <text class="price-label">Price To Claim</text>
            <view class="price-row">
              <image src="/static/icons/dollar-icon.png" class="token-icon" />
              <text class="price-value">{{ card.price }}</text>
            </view>
          </view>
        </view>
      </view>

      <view class="action-buttons">
        <view class="button-wrapper">
          <button
            class="sublease-btn"
            @click="
              goToBuyOutDetail({
                name: 'Eevvee',
                price: 30.45,
                category: 'Number1',
              })
            "
          >
            Sub Lease
          </button>
        </view>
        <view class="button-wrapper">
          <button
            class="buyout-btn"
            @click="
              goToBuyOutDetail({
                name: 'Eevvee',
                price: 30.45,
                category: 'Number1',
              })
            "
          >
            Claim
          </button>
        </view>
      </view>
      <PriceChart />
      <PropertyGrid />
      <Footer />
    </view>
  </scroll-view>
</template>

<script setup>
import Footer from "@/components/Footer.vue";
import PriceChart from "../../../components/priceChart.vue";
import PropertyGrid from "../../../components/propertyGrid.vue";

const card = {
  name: "Eevee",
  id: 2815,
  tokenId: "lsigladifbakfbndf",
  image: "/static/cards/lease-card.png",
  psa: 8,
  pop: 4,
  price: "30.32",
};
function goToBuyOutDetail(item) {
  uni.navigateTo({
    url: `/pages/leasePage/buyout-detail/buyout-detail?name=${encodeURIComponent(
      item.name
    )}&price=${item.price}&category=${item.category}`,
  });
}
</script>

<style scoped>
.lease-detail-wrapper {
  min-height: 100vh;
  background: radial-gradient(
    circle at center,
    #3a0066 0%,
    #1f003d 40%,
    #1a0033 70%,
    #0f0020 100%
  );
  padding: 60rpx 30rpx 160rpx;
  color: white;
}
.lease-detail-scroll {
  height: 100vh;
  overflow-y: scroll;
}

.lease-header-detail {
  text-align: center;
  margin-bottom: 40rpx;
}

.lease-title {
  font-size: 32rpx;
  color: #cccccc;
}

.card-display {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 800rpx;
  margin-bottom: 30rpx;
}

.card-image {
  width: 226px;
  height: 600px;
  border-radius: 12rpx;
}

.card-info {
  text-align: center;
}

.card-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10rpx;
  padding: 0 30rpx;
}

.card-name {
  font-size: 34rpx;
  font-weight: 700;
}

.card-id {
  font-size: 24rpx;
  color: #999;
  font-weight: 500;
}

.lease-label {
  font-size: 26rpx;
  color: #cc99ff;
  margin-top: 6rpx;
  font-weight: 500;
  text-align: left;
  display: block;
  margin-left: 30rpx;
}

.token-id {
  font-size: 20rpx;
  color: #aaa;
  margin-top: 10rpx;
  text-align: left;
  display: block;
  margin-left: 30rpx;
}

.card-stats-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30rpx 0;
  padding: 0 30rpx;
}

.card-stats {
  display: flex;
  gap: 40rpx;
}

.stat-box {
  text-align: center;
}

.stat-value {
  font-size: 36rpx;
  font-weight: 700;
  color: #cc99ff;
}

.stat-label {
  font-size: 26rpx;
  color: #999;
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
  align-items: center;
  justify-content: flex-end;
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

.action-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50rpx;
  gap: 20rpx;
  padding: 0 rpx;
  width: 100%;
}

.button-wrapper {
  width: 90%;
}

.sublease-btn,
.buyout-btn {
  width: 100%;
  height: 72rpx;
  font-size: 28rpx;
  font-weight: 600;
  border-radius: 16rpx;
  border: none;
}

.sublease-btn {
  background: linear-gradient(to right, #a755ff, #ff5975);
  color: white;
}

.buyout-btn {
  background: white;
  color: #1a0033;
}
</style>
