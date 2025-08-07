<template>
	
  <view class="page-wrapper">
    <!-- Fixed Top Search Header -->
    <view class="search-header">
      <text class="title">Search</text>
      <view class="search-bar">
        <text class="icon">
          <img class="icons" src="/static/icons/search-icon.png" />
        </text>
        <input class="input" placeholder="Search cards..." />
      </view>
      <view class="filters">
        <view class="filter">Nearby</view>
        <view class="filter">Popular</view>
        <view class="filter">Eco-Friendly</view>
      </view>
    </view>

    <!-- Scrollable Content -->
    <scroll-view scroll-y class="scroll-area" show-scrollbar="false">
      <view class="container">
        <!-- Featured Collections -->
        <view class="section">
          <view class="section-bar">
            <text class="section-title">
              <img class="icons" src="/static/icons/heart-icon.png" />
              Featured Collections
            </text>
          </view>
          <scroll-view
            scroll-x="true"
            class="horizontal-scroll"
            show-scrollbar="false"
          >
            <view class="card-list">
              <view class="card">
                <image
                  src="/static/cards/paokemon-card.png"
                  class="card-image"
                />
                <text class="card-text">Pokemon Card</text>
              </view>
              <view class="card">
                <image src="/static/cards/nba-card.png" class="card-image" />
                <text class="card-text">NBA Sports Card</text>
              </view>
              <view class="card">
                <image
                  src="/static/cards/paokemon-card.png"
                  class="card-image"
                />
                <text class="card-text">Pokemon Card</text>
              </view>
              <view class="card">
                <image src="/static/cards/nba-card.png" class="card-image" />
                <text class="card-text">NBA Sports Card</text>
              </view>
              <view class="card">
                <image
                  src="/static/cards/paokemon-card.png"
                  class="card-image"
                />
                <text class="card-text">Pokemon Card</text>
              </view>
              <view class="card">
                <image src="/static/cards/nba-card.png" class="card-image" />
                <text class="card-text">NBA Sports Card</text>
              </view>
            </view>
          </scroll-view>
        </view>

        <!-- Market Trends -->
        <view class="section">
          <view class="section-bar">
            <text class="section-title">
              <img class="icons" src="/static/icons/trend-icon.png" /> Market
              Trends
            </text>
          </view>
          <view class="trend-row">
            <view class="trend-card green">
                <view class="trend-title-row">
                  <text class="trend-title">Pokemon</text>
                  <view class="trend-metrics">
                    <text class="trend-percent">33.79%</text>
                    <img class="trend-img" src="/static/icons/green-trend.png" />
                  </view>
                </view>
              </view>
			  
            <view class="trend-card red">
				<view class="trend-title-row">
				  <text class="trend-title">Basketball</text>
				  <view class="trend-metrics">
				    <text class="trend-percent">5.79%</text>
				    <img class="trend-img" src="/static/icons/red-trend.png" />
				  </view>
				</view>
			</view>
			
            <view class="trend-card green">
                <view class="trend-title-row">
                  <text class="trend-title">Pokemon</text>
                  <view class="trend-metrics">
                    <text class="trend-percent">33.79%</text>
                    <img class="trend-img" src="/static/icons/green-trend.png" />
                  </view>
                </view>
              </view>
			  
            <view class="trend-card red">
            	<view class="trend-title-row">
            	  <text class="trend-title">Basketball</text>
            	  <view class="trend-metrics">
            	    <text class="trend-percent">5.79%</text>
            	    <img class="trend-img" src="/static/icons/red-trend.png" />
            	  </view>
            	</view>
            </view>
			
            <view class="trend-card green">
                <view class="trend-title-row">
                  <text class="trend-title">Pokemon</text>
                  <view class="trend-metrics">
                    <text class="trend-percent">33.79%</text>
                    <img class="trend-img" src="/static/icons/green-trend.png" />
                  </view>
                </view>
              </view>
			  
            <view class="trend-card red">
            	<view class="trend-title-row">
            	  <text class="trend-title">Basketball</text>
            	  <view class="trend-metrics">
            	    <text class="trend-percent">5.79%</text>
            	    <img class="trend-img" src="/static/icons/red-trend.png" />
            	  </view>
            	</view>
            </view>
          </view>
        </view>

        <!-- Hot Cards -->
        <view class="section">
          <view class="section-bar">
            <text class="section-title">
              <img class="icons" src="/static/icons/hot-icon.png" /> Hot Cards
            </text>
          </view>
          <view class="hot-card">
            <image src="/static/cards/hot-card.png" class="hot-card-img" />
            <view class="hot-card-info">
              <text class="hot-card-name">Eevee</text>
              <text class="hot-card-price"
                ><img
                  class="dollar-icon"
                  src="/static/icons/dollar-icon.png"
                />355.02</text
              >
            </view>
          </view>
          <view class="hot-card">
            <image src="/static/cards/hot-card.png" class="hot-card-img" />
            <view class="hot-card-info">
              <text class="hot-card-name">Eevee</text>
              <text class="hot-card-price"
                ><img
                  class="dollar-icon"
                  src="/static/icons/dollar-icon.png"
                />355.02</text
              >
            </view>
          </view>
          <view class="hot-card">
            <image src="/static/cards/hot-card.png" class="hot-card-img" />
            <view class="hot-card-info">
              <text class="hot-card-name">Eevee</text>
              <text class="hot-card-price"
                ><img
                  class="dollar-icon"
                  src="/static/icons/dollar-icon.png"
                />355.02</text
              >
            </view>
          </view>
          <view class="hot-card">
            <image src="/static/cards/hot-card.png" class="hot-card-img" />
            <view class="hot-card-info">
              <text class="hot-card-name">Eevee</text>
              <text class="hot-card-price"
                ><img
                  class="dollar-icon"
                  src="/static/icons/dollar-icon.png"
                />355.02</text
              >
            </view>
          </view>
        </view>
      </view>
    </scroll-view>

    <!-- Fixed Bottom Navigation -->
    <Footer />
  </view>
</template>

<script setup>
import Footer from "@/components/Footer.vue"; // adjust path as needed
</script>
<style scoped>
.page-wrapper {
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
}





/* Fixed Top Header */
.search-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #1a0033;
  z-index: 20;
  padding: 40rpx 30rpx 20rpx;
  color: white;
}

.search-header .title {
  font-size: 42rpx;
  font-weight: 600;
  margin-bottom: 20rpx;
}

.search-bar {
  border-radius: 40rpx;
  padding: 20rpx 24rpx;
  background: #2a0044;
  display: flex;
  align-items: center;
  height: auto;
  margin-bottom: 20rpx;
}

.input {
  flex: 1;
  font-size: 30rpx;
  color: white;
  background: transparent;
  border: none;
  padding-left: 16rpx;
}

.icon {
  margin-right: 10rpx;
}

.filters {
  display: flex;
  gap: 20rpx;
  flex-wrap: nowrap;
  overflow-x: auto;
}

.filter {
  padding: 14rpx 30rpx;
  border-radius: 999rpx;
  border: 2rpx solid #8a4dff;
  font-size: 26rpx;
  color: #fff;
  white-space: nowrap;
}

/* Scrollable Area */
.scroll-area {
  margin-top: 300rpx; /* header space */
  margin-bottom: 160rpx; /* footer space */
  flex: 1;
  overflow-y: scroll;
}

/* Content Container */
.container {
  color: #fff;
  padding: 0 30rpx 100rpx;
}

.section {
  margin-bottom: 10%;
}

.section-bar {
  margin-bottom: 15px;
}

.section-title {
  font-size: 36rpx;
  display: flex;
  align-items: center;
  gap: 10rpx;
}

/* Cards */
.horizontal-scroll {
  white-space: nowrap;
  overflow-x: scroll;
  display: flex;
  margin-top: 10%;
}

.card-list {
  display: flex;
  flex-direction: row;
  gap: 40rpx;
  padding: 10rpx 0;
}

.card {
  position: relative;
  flex-shrink: 0;
  width: 200px;
  height: 260px;
  border-radius: 80rpx; /* ⬅️ Make this bigger */
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  margin-right: 30rpx;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 80rpx; /* ⬅️ Match the parent */
}

/* Overlay text with gradient background */
.card-text {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20rpx 0;
  text-align: center;
  font-size: 28rpx;
  font-weight: bold;
  color: white;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.3) 40%, transparent 75%);
  z-index: 2;
  backdrop-filter: blur(1.5px);
}




/* Trends */
.trend-row {
  display: flex;
  gap: 20rpx;
  overflow-x: auto;
  padding-bottom: 10rpx;
  scroll-snap-type: x mandatory;
}

.trend-card {
  flex-shrink: 0;
  width: 240rpx;
  padding: 24rpx;
  border-radius: 28rpx;
  background: rgba(255, 255, 255, 0.06); /* translucent */
  backdrop-filter: blur(12px); /* frosted glass effect */
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}


.trend-header {
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 10rpx;
  margin-bottom: 10rpx;
}

.trend-title {
  font-size: 32rpx;
  font-weight: 500;
  color: #fff;
  text-align: left;
}

.trend-percent {
  font-size: 26rpx;
  font-weight: bold;
  color: inherit;
  padding-right: 5px;
}



.green {
  color: #00ff7f;
}

.red {
  color: #ff4444;
}

.trend-img {
  margin-top: 10rpx;
  width: 50px;
  height: 17.5px;
}

/* Hot Cards */
.hot-card {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  border-radius: 32rpx;
  padding: 24rpx 28rpx;
  margin-top: 24rpx;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
}


.hot-card-img {
  width: 100rpx;
  height: 100rpx;
  border-radius: 10rpx;
  margin-right: 20rpx;
}

.hot-card-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hot-card-name {
  font-size: 28rpx;
  margin-bottom: 10rpx;
}

.hot-card-price {
  display: flex;
  align-items: center;
  font-size: 26rpx;
  font-weight: 500;
}

/* Footer */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #2a0044;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20rpx 0 40rpx;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.icons {
  height: 16px;
  width: 16px;
}

.dollar-icon {
  height: 16px;
  width: 16px;
  margin: 0px 5px;
}
</style>
