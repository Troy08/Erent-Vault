<template>
  <view class="container">
    <view class="form-box">
      <text class="title">Sign In</text>
      <text class="subtitle"><br /><br />Log In To Unlock More.</text>

      <view class="input-group">
        <text class="label"><br />Email</text>
        <br />
        <view class="input-field">
          <text class="icon"
            ><img src="/static/userid.png" width="17.44px" height="16.72px"
          /></text>
          <input type="text" placeholder="Email Address" class="input" />
        </view>
      </view>

      <view class="input-group">
        <text class="label">Password</text>
        <view class="input-field">
          <text class="icon"
            ><img
              src="/static/passwordicon.png"
              width="17.44px"
              height="16.72px"
          /></text>
          <input type="password" placeholder="Password" class="input" />
        </view>
        <text class="forgot">Forget Password</text>
      </view>

      <button class="sign-in-button">Sign In</button>

      <view class="divider">
        <view class="line"></view>
        <text class="or-text">Or continue with</text>
        <view class="line"></view>
      </view>

      <view class="social-icons">
        <image src="/static/facebooklogin.png" class="icon-img" />
        <image src="/static/googlelogin.png" class="icon-img" />
        <image src="/static/applellogin.png" class="icon-img" />
      </view>

      <view class="signup">
        <text>Don’t have an account? </text>
        <navigator url="/pages/signup/signup" class="create-link"
          >Create One</navigator
        >
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "SignInPage",
};
</script>

<style scoped>
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
.forgot {
  color: #ccc;
  font-size: 24rpx;
  text-align: right;
  margin-top: 10rpx;
  text-decoration: underline;
}
.sign-in-button {
  background: linear-gradient(to right, #ae4ef1, #fa7171);
  border-radius: 50rpx;
  color: #fff;
  font-size: 32rpx;
  padding: 20rpx 0;
  margin-top: 20rpx;
}
.divider {
  display: flex;
  align-items: center;
  margin: 40rpx 0;
}
.line {
  flex: 1;
  height: 1px;
  background-color: #555;
}
.or-text {
  color: #ccc;
  margin: 0 20rpx;
  font-size: 24rpx;
}
.social-icons {
  display: flex;
  justify-content: center;
  gap: 30rpx;
  margin-bottom: 20rpx;
}

.icon-img {
  width: 90rpx;
  height: 80rpx;
}
.signup {
  text-align: center;
  color: #ccc;
  font-size: 26rpx;
}
.create-link {
  color: #ae85ff;
  text-decoration: underline;
}
</style>
