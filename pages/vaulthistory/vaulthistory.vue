<template>
  <view class="container">
    <!-- Header -->
    <view class="header">
      <text  @click="goBack"><img src="/static/icons/back-button.png" class="back"/></text>
      <text class="title">Vault History</text>
    </view>

    <!-- Vault History List -->
    <scroll-view class="history-list" scroll-y>
      <view 
        v-for="(item, index) in history" 
        :key="index" 
        class="history-card"
        @click="toLeaseDetails"
      ><text class="index">{{ index+1 }}</text>
        <img src="/static/cards/lease-card.png" class="card-img" />
        <view class="card-details">
          <text class="transaction">Transaction ID: {{ item.txId }}</text>
          <text class="name">{{ item.name }}</text>
          <text class="category">{{ item.category }}</text>
        </view>
      </view>
    </scroll-view>

    <!-- Footer / Tabbar -->
    <Footer />
  </view>
</template>

<script setup>
import Footer from "@/components/footer.vue";

const history = [
  {
    txId: "XoKqfeJbssog",
    name: "Eevee",
    category: "Pokemon",
    image: "/static/cards/lease-card.png",
  },
  {
    txId: "XoKqfeJbssog",
    name: "Eevee",
    category: "Pokemon",
    image: "/static/cards/lease-card.png",
  },
  {
    txId: "XoKqfeJbssog",
    name: "Eevee",
    category: "Pokemon",
    image: "/static/cards/lease-card.png",
  },
  {
    txId: "XoKqfeJbssog",
    name: "Eevee",
    category: "Pokemon",
    image: "/static/cards/lease-card.png",
  },
];

function goBack() {
  uni.navigateBack();
}

function toLeaseDetails(){
  uni.navigateTo({url:"/pages/leasePage/lease-detail/lease-detail"})
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: radial-gradient(circle at center,
    #3a0066 0%,     
    #1f003d 40%,    
    #1a0033 70%,    
    #0f0020 100%);
  color: #fff;
  padding: 20rpx 30rpx 120rpx; /* leave space for footer */
}

.header {
  display: flex;
  flex-direction: column;
  margin-bottom: 40rpx;
  margin-top: 50px;
  
}

.back {
  height: 24px;
  width: 24px;
  margin-right: 20rpx;
}

.title {
  font-size: 24px;
  font-weight: 400;
  margin-top: 30px;
}

.history-list {
  flex: 1;
}

.history-card {
  display: flex;
  align-items: center;
  background: rgba(255,255,255,0.05);
  border-radius: 16rpx;
  padding: 20rpx;
  margin-bottom: 20rpx;
}

.card-img {
  width: 40px;
  height: 60px;
  border-radius: 8rpx;
  margin-right: 20rpx;
  margin-left: 10px;
}

.card-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
}


.transaction {
  font-size: 24rpx;
  color: #aaa;
  margin-bottom: 6rpx;
}

.name {
  font-size: 30rpx;
  font-weight: bold;
}

.category {
  font-size: 24rpx;
  color: #bbb;
}

.index{
color: #aaa;
}
</style>
