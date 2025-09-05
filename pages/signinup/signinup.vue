<template>
  <view class="container">
    <text class="title">Sign In</text>
    <text class="subtitle">Log In To Unlock More.</text>

    <view class="form-box">
      <!-- Email -->
      <view class="input-group">
        <text class="label">Email</text>
        <view class="input-field">
          <text class="icon">
            <img src="/static/userid.png" width="17.44px" height="16.72px" />
          </text>
          <input type="text" placeholder="Email Address" class="input" />
        </view>
      </view>

      <!-- Password -->
      <view class="input-group">
        <text class="label">Password</text>
        <view class="input-field">
          <text class="icon">
            <img src="/static/passwordicon.png" width="17.44px" height="16.72px" />
          </text>
          <input type="password" placeholder="Password" class="input" />
        </view>
        <text class="forgot">Forgot Password</text>
      </view>

      <!-- Sign In Button -->
      <button class="sign-in-button">Sign In</button>

      <!-- Divider -->
      <view class="divider">
        <view class="line"></view>
        <text class="or-text">Or continue with</text>
        <view class="line"></view>
      </view>

      <!-- Social Icons -->
      <view class="social-icons">
        <image src="/static/facebooklogin.png" class="icon-img" />
        <image src="/static/googlelogin.png" class="icon-img" />
        <image src="/static/applellogin.png" class="icon-img" />
      </view>

      <!-- Create Account -->
      <view class="signup">
        <text>Don’t have an account? </text>
        <navigator url="/pages/signup/signup" class="create-link">
          Create One
        </navigator>
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
/* ===== layout-only fixes (no font/color changes) ===== */
.container {
  background: url("/static/app-background.png") no-repeat center center;
  background-size: cover;

  /* layout */
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;   /* stack title/subtitle/card vertically */
  align-items: center;      /* center horizontally */
  justify-content: flex-start;
  padding: 40rpx 0 32rpx;   /* breathing room */
  overflow: auto;           /* allow scroll on short screens */
}

/* keep title/subtitle aligned to the same width as the card */
.title,
.subtitle,
.form-box {
  width: 86vw;
  max-width: 640rpx;
  
  margin-left: auto;
  margin-right: auto;
}

/* ===== original visuals preserved ===== */
.title {
  display: block;
  color: #fff;
  font-size: 60rpx;
  font-weight: 200;
  text-align: left;
  margin-top: 80rpx;
}

.subtitle {
  display: block;
  color: #b3b3b3;
  font-size: 28rpx;
  text-align: left;
  margin-top: 40rpx;
}

/* Glass card  */
.form-box {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  box-sizing: border-box;

  z-index: 1000;
  padding: 40rpx 80rpx 80rpx;
  border-radius: 28rpx 28rpx 0 0;

  background:
    linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.06)),
    linear-gradient(180deg, rgba(44,12,70,0.22) 20%, rgba(34,8,60,0.48) 100%);
  box-shadow:
    0 24rpx 60rpx rgba(11, 0, 30, 0.45),
    inset 0 1rpx 0 rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(16rpx);
  overflow: hidden;

  border-top: 1rpx solid rgba(255,255,255,0.2);
}


.label {
  color: #ccc;
  margin-bottom: 10rpx;
}

.input-group {
  margin-bottom: 40rpx;
}

.input-field {
  background-color: rgba(255, 255, 255, 0.08); /* softer glass background */
  border-radius: 20rpx;
  display: flex;
  align-items: center;
  padding: 20rpx;
  margin-top: 20rpx;

  /* border line */
  border: 1rpx solid rgba(255, 255, 255, 0.2);

  /* subtle depth */
  box-shadow: inset 0 1rpx 2rpx rgba(255, 255, 255, 0.05);
}

.icon {
  color: #ccc;
  font-size: 24rpx;
  margin-right: 20rpx;
}

.input {
  flex: 1;
  color: #fff;
  font-size: 30rpx;
}

.forgot {
  display: block;
  text-align: right;
  color: #ccc;
  font-size: 24rpx;
  margin-top: 10rpx;
  text-decoration: underline;
}

.sign-in-button {
  background: linear-gradient(to right, #ae4ef1, #fa7171);
  border-radius: 24rpx;
  color: #fff;
  font-size: 32rpx;
  margin-top: 60rpx;
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
  margin-top: 120rpx;
  text-align: center;
  color: #ccc;
  font-size: 26rpx;
}

.create-link {
  color: #ae85ff;
  text-decoration: underline;
}
</style>

