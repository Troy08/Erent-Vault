<template>
  <view class="requestPage">
    <view class="formContainer">
      <view class="button-container"
        ><img src="/static/icons/back-button.png" class="back-button"
      /></view>
      <view class="title-page">Initiate A Request</view>

      <view class="form">
        <view class="title">Cert Number</view>
        <view>
          <input
            type="text"
            class="input-field"
            placeholder="Please Enter Cert Number"
          />
        </view>

        <view class="title">Agency</view>
        <view>
          <select class="input-field">
            <option class="select-option" value="" disabled selected hidden>
              Please select Agency
            </option>
            <option class="select-option">select 2</option>
            <option class="select-option">select 3</option>
          </select>
        </view>

        <view class="title">Rank</view>
        <view>
          <select class="input-field">
            <option class="select-option" value="" disabled selected hidden>
              Please select Rank
            </option>
            <option class="select-option">select 2</option>
            <option class="select-option">select 3</option>
          </select>
        </view>

        <view class="title">IP Category</view>
        <view>
          <select class="input-field">
            <option class="select-option" value="" disabled selected hidden>
              Please select IP Category
            </option>
            <option class="select-option">select 2</option>
            <option class="select-option">select 3</option>
          </select>
        </view>

        <view>
          <button class="submit" @click="goNext">Submit</button>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  components: {},
  methods: {
    goNext() {
      uni.navigateTo({ url: "/pages/cardstatus/cardstatus" });
    },
  },
};
</script>

<style>
.requestPage {
  background-color: #211134;
  color: #a4a4a4;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
}

.formContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title-page {
  font-size: 22px;
  color: white;
  margin-bottom: 20px;
  align-self: flex-start;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 15px;
  align-items: center;
}

.title {
  color: #a4a4a4;
  align-self: flex-start;
}

.input-field {
  background-color: #ffffff39;
  box-sizing: border-box;
  width: 354px;
  height: 55px;
  border: 1px solid #ffffff50;
  padding: 0 15px;
  border-radius: 12px;
  color: #a4a4a4;
  opacity: 80%;
  font-size: 16px;
  appearance: none;
}

.input-field:focus {
  outline: none;
  border-color: #a44fff;
  box-shadow: 0 0 5px #a44fff66;
}

.input-field::placeholder {
  color: #cccccc;
  opacity: 1;
  font-style: italic;
}

.select-option[disabled] {
  color: #cccccc;
}

/* Submit button */
.submit {
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

.submit:hover {
  opacity: 0.85;
}
input {
  max-width: 354px;
}
.back-button {
  height: 24px;
  width: 24px;
}
.button-container {
  align-self: flex-start;
  margin-bottom: 40px;
}
</style>
