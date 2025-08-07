<template>
  <view class="card-status">
    <view class="button-container"
      ><img src="/static/icons/back-button.png" class="back-button"
    /></view>
    <view class="title-text"> We’ve got your request! </view>
    <view class="description">
      Lorem ipsum dolor sit amet consectetur. Lorem nec ullamcorper aliquam id
      dolor id volutpat mollis.
    </view>
    <view class="timeline">
      <view v-for="(item, index) in events" :key="index" class="timeline-item">
        <view class="dot" :class="{ active: index === 0 }"></view>
        <view class="line" v-if="index !== events.length - 1"></view>
        <view class="content">
          <view
            ><text class="title">{{ item.title }}</text></view
          >
          <view
            ><text class="date">{{ item.date }}</text></view
          >
        </view>
      </view>
    </view>
    <view><button class="submit-button">Got it</button> </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      events: [
        { title: "Request Submitted", date: "Sun. May 16, 2024, 12:06 PM" },
        {
          title: "Shipping Label Created",
          date: "Sun. May 16, 2024, 12:06 PM",
        },
        { title: "Card is delivered.", date: "Sun. May 16, 2024, 12:06 PM" },
      ],
    };
  },
};
</script>

<style scoped>
.title-text {
  color: white;
  font-size: 24px;
  align-self: flex-start;
  padding: 0px 15px;
}
.card-status {
  background-color: #211134;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.description {
  color: #bbbbbb;
  align-self: flex-start;
  padding: 0px 15px;
}
.timeline {
  position: relative;
  padding-left: 30rpx;
  align-self: flex-start;
  padding: 0px 15px;
}

.timeline-item {
  position: relative;
  margin-bottom: 60rpx;
}

.dot {
  width: 16rpx;
  height: 16rpx;
  border-radius: 50%;
  background-color: #ccc;
  position: absolute;
  left: 0;
  top: 6rpx;
  z-index: 1;
}

.dot.active {
  background-color: #e940c3;
}

.line {
  position: absolute;
  width: 2rpx;
  background-color: #888;
  top: 20rpx;
  bottom: -60rpx;
  left: 7rpx;
}

.content {
  padding-left: 30rpx;
}

.title {
  font-size: 28rpx;
  color: #ffffff;
}

.date {
  font-size: 24rpx;
  color: #aaaaaa;
}
.submit-button {
  background: linear-gradient(90deg, #a44fff, #ff6e6e);
  width: 354px;
  height: 50px;
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 18px;
  margin-top: 20px;
  cursor: pointer;
  transition: opacity 0.3s ease;
  justify-content: center;
}
.back-button {
  height: 24px;
  width: 24px;
}
.button-container {
  align-self: flex-start;
  padding: 0px 15px;
  margin-bottom: 40px;
}
</style>
