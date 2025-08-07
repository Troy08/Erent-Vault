<template>
  <view class="profile-page">
    <view class="profile-header">
      <view class="avatar-wrapper">
        <image class="avatar" src="/static/avatar.png" alt="Avatar" />
        <view>
          <img src="/static/icons/edit-icon.png" class="edit-button" />
        </view>
      </view>
      <text class="username">Serafina Yu</text>
      <text class="membership">Silver Membership since 2025</text>
    </view>

    <view class="card-list">
      <view class="card-item">
        <text>Auction Submissions</text>
        <text class="chevron">›</text>
      </view>
      <view class="card-item">
        <text>Past Bids</text>
        <text class="chevron">›</text>
      </view>
      <view class="card-item">
        <text>Purchases</text>
        <text class="chevron">›</text>
      </view>
      <view class="card-item">
        <text>Offers</text>
        <text class="chevron">›</text>
      </view>
      <view class="card-item">
        <text>Watchlist</text>
        <text class="chevron">›</text>
      </view>
    </view>

    <Footer />
  </view>
</template>

<script setup>
import Footer from "@/components/Footer.vue"; // Adjust the path as needed
</script>

<style scoped>
.profile-page {
  background-color: #100021;
  min-height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
}

.edit-button {
  height: 31px;
  width: 31px;
}
.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.avatar-wrapper {
  position: relative;
  width: 139px;
  height: 139px;
}

.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #fff;
}

.edit-button {
  position: absolute;
  bottom: 0;
  right: 0;
}

.username {
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
}

.membership {
  font-size: 13px;
  color: #aaa;
  margin-top: 4px;
}

.card-list {
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card-item {
  /* background-color: #1d003b; */
  /* border-radius: 12px; */
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px #9747ff solid;
  /* border: 1px solid #2c005e; */
}

.chevron {
  font-size: 18px;
  color: #ccc;
}
</style>
