<template>
  <view class="container">
    <!-- Back Button -->
    <view class="header">
      <text  @click="goBack"><img class="back" src="/static/icons/back-button.png"/></text>
      
    </view>
    <view class="title"><text class="title">Shipping Address</text>
      <text class="edit" @click="editAddress"><img class="back" src="/static/icons/editOutlined.png"/></text></view>

    <!-- Address Card -->
     
    <view class="card">
      <view class="field">
        <text class="label">Street Address</text>
        <text class="value">7500 Gateway Blvd</text>
      </view>
      <view class="field">
        <text class="label">City</text>
        <text class="value">Newark</text>
      </view>
      <view class="field">
        <text class="label">State</text>
        <text class="value">CA</text>
      </view>
      <view class="field">
        <text class="label">Zip Code</text>
        <text class="value">94560</text>
      </view>
      <view class="field">
        <text class="label">Country</text>
        <text class="value">United States</text>
      </view>
      
    </view>

    <!-- Note -->
    <view class="note">
      Your updated address will be applied to your next order.  
      If you want to change address for current order, please contact customer service:  
      <text class="email">helloerent@gmail.com</text>
    </view>
    <Footer />
  </view>
  
</template>

<script>
import Footer from "@/components/Footer.vue"; // Adjust the path as needed
export default {
  name: "ShippingAddress",
  components:{
    Footer
  },
  methods: {
    goBack() {
      uni.navigateBack();
    },
    editAddress() {
      uni.navigateTo({
        url: "/pages/shippingAddress/editShippingAddress",
      });
    },
  },
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  padding-top: 40px;
  display: block; /* default block layout */
  /* flex-direction: column; */
  background: radial-gradient(
    circle at center,
    #3a0066 0%,     
    #1f003d 40%,    
    #1a0033 70%,    
    #0f0020 100%    
  );
  color: #fff;
  padding: 40rpx;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50rpx;
  margin-top: 40px;
}

.title {
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* pushes items to opposite ends */
  align-items: center;            /* keeps them aligned vertically */
}

.back {
  width: 24px;
  height: 24px;
}
.card{
    margin-top: 20px;
}

.title {
  font-size: 36rpx;
  font-weight: 400;
}

.edit {
  font-size: 34rpx;
  color: #ccc;
}

.content {
  flex: 1;
}

.field {
  margin-bottom: 30rpx;
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 26rpx;
  color: #bbb;
}

.value {
  font-size:16px;
  margin-top: 4rpx;
}

.note {
  font-size: 26rpx;
  color: #bbb;
  margin-top: 40rpx;
}

.email {
  color: #8ab4f8;
}
</style>
