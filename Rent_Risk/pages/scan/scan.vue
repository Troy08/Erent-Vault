<template>
  <view class="container">
    <view class="background">
      <view class="text-info">
        Snap a Photo. <br />Get a valuation in 24-hours.
      </view>
      <view class="button-content"
        ><button @click="takePhoto">Take a Photo</button></view
      >
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    takePhoto() {
      uni.chooseImage({
        count: 1,
        sizeType: ["original", "compressed"],
        sourceType: ["camera"],
        success: (res) => {
          console.log("Image Path:", res.tempFilePaths[0]);
        },
        fail: (err) => {
          console.error("Camera access denied or failed", err);
        },
      });
    },
  },
};
</script>
<style>
.container {
  height: 100vh;
  width: 100vw;
  background-image: url("/static/scan.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.text-info {
  font-size: 28px;
  font-weight: 400;
  margin-top: 147px;
  color: aliceblue;
}
.button-content {
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.background {
  background-image: linear-gradient(
      to bottom,
      rgba(25, 1, 40, 0.6),
      rgba(10, 1, 15, 0.9)
    ),
    url("/static/scan-gradient.png");
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
  height: 100vh;
}

button {
  width: 315px;
  height: 50px;
  background: linear-gradient(#9c3fe4, #c65647);
  border-radius: 15px;
  font-size: 18px;
  color: aliceblue;
}
</style>
