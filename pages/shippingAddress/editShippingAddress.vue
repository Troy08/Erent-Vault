<template>
  <view class="container">
    <!-- Header -->
    <view class="header">
      <text @click="goBack">
        <image class="back" src="/static/icons/back-button.png" />
      </text>
      <text class="title">Edit My Shipping Address</text>
    </view>

    <!-- Form -->
    <view class="form">
      <view class="field">
        <text class="label">Street Address</text>
        <input v-model="form.street"  class="input"/>
      </view>

      <view class="field">
        <text class="label">Street Address (Optional)</text>
        <input v-model="form.street2"  class="input"/>
      </view>

      <view class="field">
        <text class="label">City</text>
        <input v-model="form.city"  class="input"/>
      </view>

      <view class="row">
        <view class="field half">
          <text class="label">State</text>
          <select v-model="form.state"  class="custom-select">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
        </select>
        </view>
        <view class="field half">
          <text class="label">Zip Code</text>
          <input v-model="form.zip"  class="input"/>
        </view>
      </view>

      <view class="field">
        <text class="label">Country</text>
        <select v-model="form.country"  class="custom-select">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
        </select>
      </view>
    </view>

    <!-- Save Button -->
    <button class="save-btn" @click="saveAddress">Save Address</button>

    <!-- Footer -->
    <Footer />
  </view>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "EditShippingAddress",
  components: { Footer },
  data() {
    return {
      form: {
        street: "",
        street2: "",
        city: "",
        state: "",
        zip: "",
        country: "",
      },
    };
  },
  methods: {
    goBack() {
      uni.navigateBack();
    },
    saveAddress() {
      console.log("Saved address:", this.form);
      // TODO: Call API or store address in DB
      uni.showToast({
        title: "Address saved!",
        icon: "success",
      });
    },
  },
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 40rpx;
  background: radial-gradient(
    circle at center,
    #3a0066 0%,
    #1f003d 40%,
    #1a0033 70%,
    #0f0020 100%
  );
  color: #fff;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom: 40rpx;
}
.custom-select{
  width: 100%;
  padding: 10px 14px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 12rpx;
  font-size: 16px;
  border: none;
  height: 55px;
  margin-top: 10px;

background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='20' viewBox='0 0 24 24' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
}

.back {
  width: 28px;
  height: 28px;
  margin-right: 20rpx;
}

.title {
  font-size: 22px;
  font-weight: 400;
  margin-top: 27px;
}

.form {
  flex: 1;
}

.field {
  margin-bottom: 30rpx;
}

.label {
  font-size: 15px;
  font-weight: 500;
  color: #bbb;
  margin-bottom: 10rpx;
}

.input {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 12rpx;
  padding: 20rpx;
  color: #fff;
  font-size: 28rpx;
  margin-top: 10px;
  height: 35px;
}

.row {
  display: flex;
  justify-content: space-between;
}

.half {
  width: 48%;
}

.save-btn {
  margin-top: 30rpx;
  background: #8b5cf6;
  color: #fff;
  font-size: 32rpx;
  padding: 20rpx;
  border-radius: 16rpx;
}
</style>
