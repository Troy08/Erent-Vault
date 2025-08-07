<template>
  <view class="grid">
    <view class="property-title">Properties</view>
    <view v-for="item in propsList" :key="item.label" class="property">
      <view class="properties-box">
        <text class="label">{{ item.label }}</text>
        <text class="value">{{ item.value }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      propsList: [
        { label: "Environment", value: "Altostratus Clouds" },
        { label: "Body", value: "Nudity" },
        { label: "Chin Elements", value: "None" },
        { label: "Costumes", value: "Polo T-shirt" },
        { label: "Eye", value: "Red White Eye" },
        { label: "Eyebrows", value: "Thin" },
        { label: "Middle Ground", value: "None" },
        { label: "Mouth", value: "Smiley" },
      ],
    };
  },
};
</script>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 100px;
  margin-top: 20px;
}
.property {
  width: 150px;
  background: rgba(255, 255, 255, 0.05);
  margin-bottom: 16rpx;
  padding: 16rpx;
  border-radius: 12rpx;
  display: flex;
  flex-direction: row;
}
.properties-box {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.label {
  font-size: 24rpx;
  color: #9747ff;
}
.value {
  font-size: 28rpx;
}
.property-title {
  font-size: 18px;
  font-family: inherit;
  width: 100%;
  margin-bottom: 20px;
}
</style>
