<template>
  <div class="form-bg">
    <div class="form-container">
      <div class="form-title">Initiate A Request</div>
      <div class="form-group">
        <label class="form-label">Cert Number</label>
        <input class="form-input" type="text" placeholder="123" />
      </div>
      <div class="form-group">
        <label class="form-label">Agency</label>
        <select class="form-select">
          <option>PSA</option>
          <option>BGS</option>
          <option>CGC</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Rank</label>
        <select class="form-select">
          <option>10</option>
          <option>9</option>
          <option>8</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">IP Category</label>
        <select class="form-select">
          <option>Pokemon</option>
          <option>Yugioh</option>
          <option>Magic</option>
        </select>
      </div>
    </div>
    <button class="submit-btn">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'FillingForm',
};
</script>

<style scoped>
.form-bg {
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background: radial-gradient(
    circle at center,
    #3a0066 0%,
    #1f003d 40%,
    #1a0033 70%,
    #0f0020 100%
  );
  align-items: center;
  justify-content: center;
  padding-bottom: 200rpx;
}
.form-container {
  width: 720rpx;
  background: transparent;
  border-radius: 24rpx;
  padding: 40rpx 32rpx;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 48rpx;
  margin-top: -80rpx;
}
.form-title {
  color: #fff;
  font-size: 36rpx;
  font-weight: 500;
  margin-bottom: 16rpx;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 12rpx;
}
.form-label {
  color: #bdb7d6;
  font-size: 24rpx;
  margin-bottom: 4rpx;
}
.form-input,
.form-select {
  width: 100%;
  height: 100rpx;
  background: rgba(170, 0, 127, 0.1);
  border: 4rpx solid #4d2a7a;
  border-radius: 25rpx;
  color: #fff;
  font-size: 24rpx;
  padding: 0 20rpx;
  outline: none;
  box-sizing: border-box;
  transition: border 0.2s;
}
.form-input:focus,
.form-select:focus {
  border: 4rpx solid #a97fff;
}
option {
  color: #aa007f;
}
.submit-btn {
  background: linear-gradient(to right, #ae4ef1, #fa7171);
  border-radius: 20rpx;
  color: #fff;
  font-size: 32rpx;
  padding: 10rpx 0;
  margin-top: 20rpx;
  position: absolute;
  bottom: 180rpx;
  left: 10%;
  right: 10%;
  border: none;
  width: 80%;
  text-align: center;
  cursor: pointer;
}
</style>