<template>
  <view class="container">
    <text class="title">Create Account</text>
    <text class="subtitle"><br /><br />Trading Starts from now.</text>

    <view class="form-box">
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
            <img src="/static/passwordicon.png" width="17.44px" height="16.72px" />
          </text>
          <input type="password" placeholder="Password" class="input" />
        </view>
      </view>

      <view class="input-group">
        <text class="label">Re-enter Password</text>
        <view class="input-field">
          <text class="icon">
            <img src="/static/passwordicon.png" width="17.44px" height="16.72px" />
          </text>
          <input type="password" placeholder="Confirm Password" class="input" />
        </view>
      </view>

      <view class="checkbox-agree">
        <checkbox class="checkbox" />
        <text>I agree to <text class="link">Terms</text> and <text class="link">Privacy Policy</text></text>
      </view>

      <button class="sign-in-button">Continue</button>

      <view class="signup">
        <text>Already have an account? </text>
        <navigator url="/pages/signinup/signinup" class="create-link">Sign In</navigator>
      </view>
    </view>
  </view>
</template>

<script>
export default { name: 'SignUpPage' };
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
  flex-direction: column;    /* stack title / subtitle / card */
  align-items: center;       /* center horizontally */
  justify-content: flex-start;
  padding: 40rpx 0 32rpx;    /* breathing room */
  overflow: auto;            /* allow scroll on short screens */
}

/* keep title/subtitle/card aligned to the same width */
.title,
.subtitle,
.form-box {
  width: 86vw;
  max-width: 640rpx;
  margin-left: auto;
  margin-right: auto;
}

/* ===== original visuals preserved below ===== */
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
  margin-bottom: 60rpx;
  font-size: 28rpx;
  text-align: left;
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

.label { color: #ccc; margin-bottom: 20rpx; }
.input-group { margin-top: 20rpx; margin-bottom: 40rpx; }

.input-field {
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 20rpx;
  display: flex;
  align-items: center;
  padding: 20rpx;
  margin-top: 20rpx;
  border: 1rpx solid rgba(255, 255, 255, 0.2);
  box-shadow: inset 0 1rpx 2rpx rgba(255, 255, 255, 0.05);
}

.icon { color: #ccc; font-size: 36rpx; margin-right: 20rpx; }
.input { flex: 1; color: #fff; font-size: 30rpx; }

.sign-in-button {
  background: linear-gradient(to right, #ae4ef1, #fa7171);
  border-radius: 24rpx;
  color: #fff;
  font-size: 32rpx;
  margin-top: 60rpx;
}

.signup {
  text-align: center;
  color: #ccc;
  font-size: 26rpx;
  margin-top: 40rpx;
}

.create-link { color: #ae85ff; text-decoration: underline; }

.checkbox-agree {
  display: flex;
  align-items: center;
  gap: 12rpx;
  margin-bottom: 30rpx;
  color: #ccc;
  font-size: 24rpx;
}
.checkbox { transform: scale(0.7); }
.link { color: #ae85ff; text-decoration: underline; }
</style>

