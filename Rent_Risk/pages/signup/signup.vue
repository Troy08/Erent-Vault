<template>
  <view class="container">
    <view class="form-box">
      <text class="title">Create Account</text>
      <text class="subtitle"><br /><br />Trading Starts from now.</text>

      <view class="input-group">
        <text class="label"><br />Email</text>
        <br />
        <view class="input-field">
          <text class="icon">
            <img src="/static/userid.png" width="17.44px" height="16.72px" />
          </text>
          <input type="text" placeholder="Email Address" class="input" />
        </view>
      </view>

      <view class="input-group">
        <text class="label">Password</text>
        <view class="input-field">
          <text class="icon">
            <img
              src="/static/passwordicon.png"
              width="17.44px"
              height="16.72px"
            />
          </text>
          <input type="password" placeholder="Password" class="input" />
        </view>
      </view>

      <view class="input-group">
        <text class="label">Re-enter Password</text>
        <view class="input-field">
          <text class="icon">
            <img
              src="/static/passwordicon.png"
              width="17.44px"
              height="16.72px"
            />
          </text>
          <input type="password" placeholder="Confirm Password" class="input" />
        </view>
      </view>

      <view class="checkbox-agree">
        <checkbox class="checkbox" />
        <text
          >I agree to <text class="link">Terms</text> and
          <text class="link">Privacy Policy</text></text
        >
      </view>

      <button class="sign-in-button">Continue</button>

      <view class="signup">
        <text>Already have an account? </text>
        <navigator url="/pages/signinup/signinup" class="create-link"
          >Sign In</navigator
        >
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "SignUpPage",
};
</script>

<style scoped>
/* same styles as provided above */
.container {
  background: url("/static/app-background.png") no-repeat center center;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-box {
  width: 90%;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 30rpx;
  padding: 40rpx;
}
.title {
  color: #fff;
  font-size: 60rpx;
  font-weight: bold;
}
.subtitle {
  color: #ccc;
  margin-bottom: 60rpx;
  font-size: 28rpx;
}
.label {
  color: #ccc;
  margin-bottom: 10rpx;
}
.input-group {
  margin-bottom: 40rpx;
}
.input-field {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20rpx;
  display: flex;
  align-items: center;
  padding: 20rpx;
}
.icon {
  color: #ccc;
  font-size: 36rpx;
  margin-right: 20rpx;
}
.input {
  flex: 1;
  color: #fff;
  font-size: 30rpx;
}
.sign-in-button {
  background: linear-gradient(to right, #ae4ef1, #fa7171);
  border-radius: 50rpx;
  color: #fff;
  font-size: 32rpx;
  padding: 20rpx 0;
  margin-top: 20rpx;
}
.signup {
  text-align: center;
  color: #ccc;
  font-size: 26rpx;
  margin-top: 40rpx;
}
.create-link {
  color: #ae85ff;
  text-decoration: underline;
}
.checkbox-agree {
  display: flex;
  align-items: center;
  gap: 12rpx;
  margin-bottom: 30rpx;
  color: #ccc;
  font-size: 24rpx;
}
.checkbox {
  transform: scale(0.7);
}
.link {
  color: #ae85ff;
  text-decoration: underline;
}
</style>
