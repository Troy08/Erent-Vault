<template>
  <view class="page-wrapper">
    <!-- Header Section -->
    <view class="lease-header">
      <view class="lease-header-row">
        <text class="contract-count">Total Contracts</text>
        <text class="contract-number">10</text>
      </view>

      <!-- Tab Switcher -->
      <view class="tabs">
        <view
          class="tab"
          :class="{ active: activeTab === 'collection', inactive: activeTab !== 'collection' }"
          @click="goToCollection"
        >
          My Collection
        </view>
        <view
          class="tab"
          :class="{ active: activeTab === 'lease', inactive: activeTab !== 'lease' }"
          @click="goToLease"
        >
          My Lease
        </view>
      </view>
    </view> <!-- 👈 close .lease-header -->

    <!-- Lease List -->
    <scroll-view scroll-y class="scroll-area" show-scrollbar="false">
      <view class="lease-section">
        <text class="lease-subtitle">💜 My Lease</text>

        <view
          class="lease-card"
          v-for="(item, index) in leases"
          :key="index"
          @click="goToLeaseDetail(item)"
        >
          <text class="lease-index">{{ index + 1 }}</text>
          <image :src="item.image" class="lease-image" />

          <view class="lease-info">
            <text class="lease-name">{{ item.name }}</text>
            <text class="lease-category">{{ item.category }}</text>
          </view>

          <view class="lease-metrics">
            <view class="price-row">
              <image src="/static/icons/token-icon.png" class="token-icon" />
              <text class="lease-price">{{ item.price }}</text>
            </view>
            <text
              v-if="item.change !== 0"
              :class="{ positive: item.change > 0 }"
              class="lease-change"
            >
              {{ item.change }}%
            </text>
          </view>
        </view>
      </view>
    </scroll-view>

    <!-- Bottom Navigation -->
    <Footer />
  </view>
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import { ref } from 'vue'

const leases = [
  { name: 'Eevee', category: 'Pokemon', image: '/static/cards/lease-card.png', price: '355.02', change: 0 },
  { name: "Ethan's Ho-Oh", category: 'Pokemon', image: '/static/cards/lease-card.png', price: '20.82', change: 20.22 },
]

// on this page we’re on “My Lease”
const activeTab = ref('lease')

function goToCollection() {
  uni.navigateTo({ url: '/pages/collect/myCollection' })
}

function goToLease() {
  // stay here; or navigate explicitly if you split pages
  // uni.navigateTo({ url: '/pages/leasePage/leasePage' })
}

function goToLeaseDetail(item) {
  uni.navigateTo({
    url: `/pages/leasePage/lease-detail/lease-detail?name=${encodeURIComponent(item.name)}&price=${item.price}&category=${item.category}`,
  })
}
</script>

<style scoped>
.page-wrapper { height: 100vh; display: flex; flex-direction: column; background: radial-gradient(circle at center, #3a0066 0%, #1f003d 40%, #1a0033 70%, #0f0020 100%); }
.lease-header { padding: 80rpx 30rpx 30rpx; color: white; background: transparent; }
.lease-header-row { display: flex; flex-direction: column; align-items: flex-start; gap: 6rpx; margin-bottom: 30rpx; }
.contract-count { font-size: 24rpx; color: #888; font-weight: 400; }
.contract-number { font-size: 48rpx; font-weight: 700; color: #fff; }
.tabs { display: flex; border-radius: 20rpx; overflow: hidden; background: #2c003f; margin-bottom: 40rpx; }
.tab { flex: 1; text-align: center; padding: 20rpx 0; font-size: 28rpx; font-weight: 500; color: #fff; }
.tab.inactive { background: none; color: #aaa; }
.tab.active { background: linear-gradient(to right, #a755ff, #ff5975); color: #fff; }
.scroll-area { flex: 1; padding: 0 20rpx 160rpx; }
.lease-section { color: #fff; }
.lease-subtitle { font-size: 28rpx; color: #ccf; margin-bottom: 20rpx; }
.lease-card { display: flex; align-items: flex-start; flex-wrap: wrap; background: none; padding: 20rpx 50rpx 20rpx 0; margin-bottom: 10rpx; border-bottom: 2rpx solid rgba(255,255,255,0.05); }
.lease-index { font-size: 28rpx; width: 30rpx; margin-right: 10rpx; line-height: 120rpx; }
.lease-image { width: 90rpx; height: 120rpx; border-radius: 12rpx; margin-right: 10rpx; }
.lease-info { flex: 1; display: flex; flex-direction: column; justify-content: center; min-width: 120rpx; margin-right: auto; }
.lease-name { font-size: 30rpx; font-weight: 600; line-height: 1.2; word-break: break-word; }
.lease-category { font-size: 24rpx; color: #aaa; line-height: 1.2; }
.lease-metrics { max-width: 140rpx; text-align: right; white-space: normal; margin-left: auto; word-break: break-word; }
.price-row { display: flex; align-items: center; justify-content: flex-end; gap: 6rpx; flex-wrap: wrap; }
.token-icon { width: 20rpx; height: 20rpx; }
.lease-price { font-size: 28rpx; font-weight: bold; color: #fff; word-break: break-word; }
.lease-change { font-size: 24rpx; margin-top: 6rpx; font-weight: 500; }
.positive { color: #00ff7f; }
</style>
