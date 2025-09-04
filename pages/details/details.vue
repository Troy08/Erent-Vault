<template>
  <scroll-view class="container" scroll-y="true" enable-back-to-top="true">

    <!-- Header with Card -->
    <view class="header-section">
      <view class="nav-buttons">
        <view class="nav-btn" @tap="goBack">
          <text class="nav-icon">‹</text>
        </view>
        <view class="nav-btn" @tap="toggleFavorite">
          <text class="nav-icon" :class="{ 'favorited': isFavorited }">{{ isFavorited ? '♥' : '♡' }}</text>
        </view>
      </view>
      <view class="card-container">
        <image 
          class="pokemon-card" 
          src="/static/mewtwo-card.png" 
          mode="aspectFill"
        />
      </view>
    </view>

    <!-- Title Section -->
    <view class="title-section">
      <text class="title">Eevee</text>
      <text class="card-number">#2815</text>
    </view>

    <!-- Collection Info -->
    <view class="collection-info">
      <text class="collection-label">Pokemon Collection</text>
      <text class="description">
        Lorem ipsum dolor sit amet consectetur. Sapien lectus scelerisque at varius viverra posuere bibendum in. Semper auctor sed turpis viverra.
      </text>
    </view>

    <!-- Token Info -->
    <view class="token-info">
      <view class="token-row">
        <text class="token-label">Token ID</text>
        <text class="token-value-simple">PSA</text>
      </view>
      <view class="token-row">
        <text class="token-label">Token ID</text>
        <text class="token-value">10</text>
      </view>
    </view>

    <!-- Price History Container -->
    <view class="price-history-container">
      <view class="price-header">
        <text class="price-title">Price history</text>
        <view class="avg-price">
          <text class="avg-label">All Time Avg Price</text>
          <text class="avg-value">● 56.54</text>
        </view>
      </view>
      
      <view class="chart-container">
        <canvas 
          class="price-chart" 
          canvas-id="priceChart"
          @touchstart="handleChartTouch"
          @touchmove="handleChartMove"
          @touchend="handleChartEnd"
        ></canvas>
        
        <!-- Tooltip -->
        <view 
          class="chart-tooltip" 
          v-if="showTooltip"
          :style="{ left: tooltipX + 'px', top: tooltipY + 'px' }"
        >
          <text class="tooltip-date">{{ tooltipDate }}</text>
          <view class="tooltip-price-container">
            <view class="tooltip-dot"></view>
            <text class="tooltip-price">{{ tooltipPrice }}</text>
          </view>
        </view>
      </view>
    </view>

    <!-- Properties -->
    <view class="properties-container">
      <text class="properties-title">Properties</text>
      
      <view class="properties-grid">
        <view class="property-item">
          <text class="property-label">Environment</text>
          <text class="property-value">Altostratuts Clouds</text>
        </view>
        <view class="property-item">
          <text class="property-label">Body</text>
          <text class="property-value">Nudity</text>
        </view>
        <view class="property-item">
          <text class="property-label">Chin Elements</text>
          <text class="property-value">None</text>
        </view>
        <view class="property-item">
          <text class="property-label">Costumes</text>
          <text class="property-value">Polo T-shirt</text>
        </view>
        <view class="property-item">
          <text class="property-label">Eye</text>
          <text class="property-value">Red White Eye</text>
        </view>
        <view class="property-item">
          <text class="property-label">Eyebrows</text>
          <text class="property-value">Thin</text>
        </view>
        <view class="property-item">
          <text class="property-label">Middle Ground</text>
          <text class="property-value">None</text>
        </view>
        <view class="property-item">
          <text class="property-label">Mouth</text>
          <text class="property-value">Smiley</text>
        </view>
      </view>
    </view>

    <view class="bottom-spacing"></view>
    <view class="bottom-section">
      <view class="price-rent-container">
        <view class="current-price">
          <text class="price-label">Price</text>
          <text class="price-amount">● 102.56</text>
        </view>
        <view class="rent-button" @tap="rentItem">
          <text class="rent-text">Rent</text>
        </view>
      </view>
      <view class="swipe-indicator"></view>
    </view>
  </scroll-view>
</template>

<script>
export default {
  data() {
    return {
      isFavorited: false,
      showTooltip: false,
      tooltipX: 0,
      tooltipY: 0,
      tooltipDate: 'Feb 17',
      tooltipPrice: '69.6904',
      chartPoints: [],
      chartData: [
        { month: 'Jan', value: 45000 },
        { month: 'Feb', value: 69690.4 },
        { month: 'Mar', value: 52000 },
        { month: 'Apr', value: 58000 },
        { month: 'May', value: 48000 },
        { month: 'Jun', value: 63000 }
      ]
    }
  },
  
  onReady() {
    this.drawChart();
  },
  
  methods: {
    goBack() {
      uni.navigateBack();
    },
    
    toggleFavorite() {
      this.isFavorited = !this.isFavorited;
    },
    
    rentItem() {
      console.log('Rent item');
    },
    
    drawChart() {
      const ctx = uni.createCanvasContext('priceChart', this);
      const canvasWidth = 450; 
      const canvasHeight = 180;
      const padding = 60; 
      const chartWidth = canvasWidth - (padding * 2);
      const chartHeight = canvasHeight - (padding * 2);
      
      // Store chart points for touch detection
      this.chartPoints = [];
      
      // Clear canvas
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      
      // Draw vertical grid lines
      ctx.setStrokeStyle('rgba(168, 85, 247, 0.1)');
      ctx.setLineWidth(1);
      
      for (let i = 0; i < this.chartData.length; i++) {
        const x = padding + (i * chartWidth) / (this.chartData.length - 1);
        ctx.beginPath();
        ctx.moveTo(x, padding);
        ctx.lineTo(x, canvasHeight - padding);
        ctx.stroke();
      }
      
      // Draw gradient background for the chart area
      const gradient = ctx.createLinearGradient(0, padding, 0, canvasHeight - padding);
      gradient.addColorStop(0, 'rgba(139, 69, 199, 0.3)');
      gradient.addColorStop(1, 'rgba(139, 69, 199, 0.05)');
      
      // Calculate points and store them
      const maxValue = Math.max(...this.chartData.map(d => d.value));
      const minValue = Math.min(...this.chartData.map(d => d.value));
      const valueRange = maxValue - minValue;
      
      this.chartData.forEach((point, index) => {
        const x = padding + (index * chartWidth) / (this.chartData.length - 1);
        const normalizedValue = (point.value - minValue) / valueRange;
        const y = canvasHeight - padding - (normalizedValue * chartHeight);
        this.chartPoints.push({ x, y, data: point });
      });
      
      // Draw area under curve
      ctx.beginPath();
      ctx.moveTo(padding, canvasHeight - padding);
      this.chartPoints.forEach((point, index) => {
        ctx.lineTo(point.x, point.y);
      });
      ctx.lineTo(canvasWidth - padding, canvasHeight - padding);
      ctx.closePath();
      ctx.setFillStyle(gradient);
      ctx.fill();
      
      // Draw line
      ctx.beginPath();
      this.chartPoints.forEach((point, index) => {
        if (index === 0) {
          ctx.moveTo(point.x, point.y);
        } else {
          ctx.lineTo(point.x, point.y);
        }
      });
      ctx.setStrokeStyle('#8B45C7');
      ctx.setLineWidth(3);
      ctx.stroke();
      
      // Draw points
      this.chartPoints.forEach((point, index) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 6, 0, 2 * Math.PI);
        ctx.setFillStyle('#FFFFFF');
        ctx.fill();
        
        // Inner circle (purple)
        ctx.beginPath();
        ctx.arc(point.x, point.y, 4, 0, 2 * Math.PI);
        ctx.setFillStyle('#8B45C7');
        ctx.fill();
      });
      
      // Draw month labels
      ctx.setFillStyle('rgba(255, 255, 255, 0.8)');
      ctx.setFontSize(12);
      ctx.setTextAlign('center');
      this.chartPoints.forEach((point, index) => {
        ctx.fillText(point.data.month, point.x, canvasHeight - 15);
      });
      
      ctx.draw();
    },
    
    handleChartTouch(e) {
      this.showTooltip = true;
      this.updateTooltipPosition(e);
    },
    
    handleChartMove(e) {
      if (this.showTooltip) {
        this.updateTooltipPosition(e);
      }
    },
    
    handleChartEnd(e) {
      setTimeout(() => {
        this.showTooltip = false;
      }, 3000);
    },
    
    updateTooltipPosition(e) {
      const touchX = e.touches[0].x;
      const touchY = e.touches[0].y;
      
      // Find closest chart point
      let closestPoint = null;
      let minDistance = Infinity;
      
      this.chartPoints.forEach(point => {
        const distance = Math.sqrt(
          Math.pow(touchX - point.x, 2) + Math.pow(touchY - point.y, 2)
        );
        if (distance < minDistance && distance < 40) { 
          minDistance = distance;
          closestPoint = point;
        }
      });
      
      if (closestPoint) {
        this.tooltipX = closestPoint.x - 60; 
        this.tooltipY = closestPoint.y - 80; 
        this.tooltipDate = closestPoint.data.month + ' 17';
        this.tooltipPrice = closestPoint.data.value.toLocaleString(); 
      }
    }
  }
}
</script>

<style>
.container {
  /* overlay (on top), then your original gradient (beneath) */
  background:
    linear-gradient(rgba(0,0,0,0.32), rgba(0,0,0,0.32)),
    linear-gradient(180deg, #4A3B5C 0%, #2D1B3D 50%, #1A0E23 100%);
  min-height: 100vh;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}


.status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
  font-size: 16px;
  font-weight: 600;
}

.time {
  color: white;
}

.status-icons {
  display: flex;
  align-items: center;
  gap: 5px;
}

.signal, .wifi {
  color: white;
  font-size: 14px;
}

.battery-container {
  display: flex;
  align-items: center;
  position: relative;
}

.battery-body {
  width: 22px;
  height: 11px;
  border: 1px solid white;
  border-radius: 2px;
  position: relative;
  background: transparent;
}

.battery-level {
  width: 85%;
  height: 7px;
  background: white;
  border-radius: 1px;
  margin: 1px;
}

.battery-tip {
  width: 2px;
  height: 6px;
  background: white;
  border-radius: 0 1px 1px 0;
  margin-left: 1px;
}

.header-section {
  padding: 0 20px;
  position: relative;
}

.nav-buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.nav-btn {
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-icon {
  color: white;
  font-size: 18px;
  font-weight: bold;
}

.nav-icon.favorited {
  color: #FF4757;
}

.card-container {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.pokemon-card {
  width: 280px;
  height: 390px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.title-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 10px;
}

.title {
  font-size: 32px;
  font-weight: bold;
  color: white;
}

.card-number {
  font-size: 18px;
  color: #A855F7;
  font-weight: 600;
}

.collection-info {
  padding: 0 20px;
  margin-bottom: 20px;
}

.collection-label {
  color: #A855F7;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  display: block;
}

.description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  line-height: 1.5;
}

.token-info {
  padding: 0 20px;
  margin-bottom: 20px;
}

.token-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.token-label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  
}

.token-value {
  color: white;
  font-size: 14px;
  font-weight: 600;
}

.token-value-simple {
  color: #A855F7;
  font-size: 14px;
  font-weight: 600;
  font-size: 18px;
}

.price-history-container {
  background: rgba(255, 255, 255, 0.08);
  margin: 0 20px 20px 20px;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid rgba(168, 85, 247, 0.2);
}

.price-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.price-title {
  font-size: 18px;
  font-weight: 600;
  color: white;
}

.avg-price {
  text-align: right;
}

.avg-label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  display: block;
  margin-bottom: 4px;
}

.avg-value {
  color: #A855F7;
  font-size: 14px;
  font-weight: 600;
}

.chart-container {
  position: relative;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto; 
  }

.price-chart {
  width: 450px;
  height: 180px;
}

.chart-tooltip {
  position: absolute;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  padding: 12px 16px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  z-index: 10;
  border: 1px solid rgba(255, 255, 255, 0.1);
  min-width: 120px;
}

.tooltip-date {
  color: white;
  font-size: 14px;
  font-weight: 500;
  display: block;
  margin-bottom: 8px;
  text-align: center;
}

.tooltip-price-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.tooltip-dot {
  width: 8px;
  height: 8px;
  background: #8B45C7;
  border-radius: 50%;
  border: 2px solid white;
}

.tooltip-price {
  color: white;
  font-size: 16px;
  font-weight: 600;
}

.properties-container {
  background: rgba(255, 255, 255, 0.08);
  margin: 0 20px 20px 20px;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid rgba(168, 85, 247, 0.2);
}

.properties-title {
  font-size: 18px;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
}

.properties-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 20px;
}

.property-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 16px 12px;
  border-radius: 12px;
  border: 1px solid rgba(168, 85, 247, 0.1);
}

.property-label {
  color: #A855F7;
  font-size: 12px;
  font-weight: 600;
  display: block;
  margin-bottom: 6px;
}

.property-value {
  color: white;
  font-size: 14px;
  font-weight: 500;
}

.bottom-spacing {
  height: 120px;
}

.bottom-section {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 100;
}

.swipe-indicator {
  width: 40px;
  height: 4px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 2px;
  margin: 8px auto;
}

.price-rent-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px 8px 20px;
}

.current-price {
  flex: 1;
}

.price-label {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  display: block;
  margin-bottom: 4px;
}

.price-amount {
  color: #A855F7;
  font-size: 18px;
  font-weight: 600;
}

.rent-button {
  background: linear-gradient(135deg, #A855F7 0%, #D946EF 100%);
  padding: 12px 32px;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(168, 85, 247, 0.4);
}

.rent-text {
  color: white;
  font-size: 16px;
  font-weight: 600;
}
</style>
