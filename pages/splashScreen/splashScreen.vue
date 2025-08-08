<template>
  <view class="container">
    <view class="background">
      <view class="rectangles-container">
        <view 
          v-for="(rect, index) in rectangles" 
          :key="index"
          class="rectangle"
          :style="rect.style"
        ></view>
      </view>

      <view class="overlay overlay-black-35"></view>
      <view class="overlay overlay-blur"></view>
      <view class="overlay overlay-dark-60"></view>
    </view>

    <!-- Status Bar -->
    <!-- <view class="status-bar"> -->
     <!-- <view class="status-time">
        {{ currentTime }}
      </view> -->
      <!-- <view class="status-icons"> -->
        <!-- Signal Strength -->
        <!-- <view 
          class="signal-bar"
          :style="{ width: Math.max(signalStrength * 0.4, 4) + 'px' }"
        ></view> -->
        
        <!-- WiFi Icon -->
        <!-- <view class="wifi-icon" :class="{ 'wifi-connected': wifiConnected }">
          <view class="wifi-outer">
            <view class="wifi-inner"></view>
          </view>
        </view> -->
        
        <!-- Battery -->
        <!-- <view class="battery-container">
          <view class="battery-body">
            <view class="battery-tip"></view>
          </view>
          <view 
            class="battery-level"
            :style="{ width: (batteryLevel * 0.16) + 'px' }"
          ></view>
        </view> -->
      <!-- </view> -->
    <!-- </view> -->

    <!-- Main Content -->
    <view class="main-content">
      <text class="main-heading">
        Rent the risk.
Keep the reward.
      </text>
      
      <text class="subtitle">
        Turning Trading Cards Into On-Chain NFTs For Rent And Purchase.
      </text>
      
      <!-- Get Started Button -->
      <view class="button-container">
        <view
          class="get-started-button"
          :class="{ 'button-pressed': isPressed }"
          @touchstart="onTouchStart"
          @touchend="onTouchEnd"
          @mouseover="onMouseOver"
          @mouseout="onMouseOut"
          @tap="handleGetStarted"
        >
          <!-- Pulse Wave -->
          <view 
            class="pulse-wave pulse-wave-1"
            :class="{ 'pulse-animate': showPulse }"
          ></view>
          <view 
            class="pulse-wave pulse-wave-2"
            :class="{ 'pulse-animate': showPulse }"
          ></view>
          <view 
            class="pulse-wave pulse-wave-3"
            :class="{ 'pulse-animate': showPulse }"
          ></view>
          
          <text class="button-text">Get Started</text>
        </view>
      </view>
    </view>

    <!-- Home Indicator -->
    <view class="home-indicator"></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      currentTime: '',
      isPressed: false,
      showPulse: false,
      batteryLevel: 85,
      signalStrength: 75,
      wifiConnected: true,
      rectangles: [],
      timeInterval: null,
      statusInterval: null
    }
  },
  
  onLoad() {
    this.generateRectangles();
    this.updateTime();
    this.startTimeUpdate();
    this.updateStatusIcons();
    this.startStatusUpdate();
  },
  
  onUnload() {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
    if (this.statusInterval) {
      clearInterval(this.statusInterval);
    }
  },
  
  methods: {
    generateRectangles() {
      const numRects = 8;
      const rectWidth = 100 / numRects;
      const rectangles = [];
      const colors = [
        'rgba(103, 0, 180, 0.8)',
        'rgba(128, 0, 204, 0.75)',
        'rgba(153, 0, 230, 0.7)',
        'rgba(178, 0, 255, 0.65)',
        'rgba(153, 51, 255, 0.6)',
        'rgba(128, 102, 255, 0.55)',
        'rgba(102, 153, 255, 0.5)',
        'rgba(77, 204, 255, 0.45)'
      ];
      const heights = [100, 90, 80, 70, 60, 50, 45, 40];

      for (let i = 0; i < numRects; i++) {
        rectangles[i] = {
          style: {
            left: `${i * rectWidth}%`,
            width: `${rectWidth + 1}%`,
            height: `${heights[i]}%`,
            background: `
              linear-gradient(
                180deg,
                ${colors[i]} 0%,
                rgba(0, 0, 0, 0) ${heights[i]}%
              )
            `,
            mixBlendMode: 'screen',
            filter: 'blur(8px)',
            position: 'absolute',
            transform: 'translateY(0%)',
            zIndex: 1
          }
        };
      }

      this.rectangles = rectangles;
    },
    
    updateTime() {
      const now = new Date();
      this.currentTime = 
        now.getHours().toString().padStart(2, '0') + ':' + 
        now.getMinutes().toString().padStart(2, '0');
    },
    
    startTimeUpdate() {
      this.timeInterval = setInterval(() => {
        this.updateTime();
      }, 60000);
    },
    
    async updateStatusIcons() {
      this.wifiConnected = navigator.onLine;

      if ('connection' in navigator && navigator.connection) {
        const connection = navigator.connection;
        const type = connection.effectiveType || '4g';
        const strengthMap = {
          'slow-2g': 20,
          '2g': 40,
          '3g': 60,
          '4g': 80,
          '5g': 100
        };
        this.signalStrength = strengthMap[type] || 75;
      } else {
        this.signalStrength = Math.floor(Math.random() * 100);
      }

      if ('getBattery' in navigator) {
        try {
          const battery = await navigator.getBattery();
          this.batteryLevel = Math.floor(battery.level * 100);
        } catch (e) {
          console.error('Battery API error:', e);
          this.batteryLevel = Math.floor(Math.random() * 100);
        }
      } else {
        this.batteryLevel = Math.floor(Math.random() * 100);
      }
    },
    
    startStatusUpdate() {
      this.statusInterval = setInterval(() => {
        this.updateStatusIcons();
      }, 30000);
    },
    
    handleGetStarted() {
      console.log('Get Started button pressed');
    },
    
    onTouchStart() {
      this.isPressed = true;
    },
    
    onTouchEnd() {
      setTimeout(() => {
        this.isPressed = false;
      }, 150);
    },
    
    onMouseOver() {
      this.isPressed = true;
      this.showPulse = true;
    },
    
    onMouseOut() {
      this.isPressed = false;
      this.showPulse = false;
    }
  }
}
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  background: #000000;
  background: linear-gradient(180deg, #1a0029 0%, #000000 100%);
}

.rectangles-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.rectangle {
  height: 100%;
  position: absolute;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.overlay-black-35 {
  background: #00000059;
  opacity: 0.35;
}

.overlay-blur {
  backdrop-filter: blur(70px);
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' fill='%2300000099' opacity='0.6'/%3E%3C/svg%3E");
  mix-blend-mode: overlay;
}

.overlay-dark-60 {
  background: #00000099;
  opacity: 0.6;
}

.status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px 8px 20px;
  height: 64px;
  z-index: 50;
  position: relative;
}

.status-time {
  color: white;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.025em;
}

.status-icons {
  display: flex;
  align-items: center;
  gap: 12px;
}

.signal-bar {
  height: 12px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s;
}

.wifi-icon {
  position: relative;
  opacity: 0.5;
}

.wifi-icon.wifi-connected {
  opacity: 1;
}

.wifi-outer {
  width: 16px;
  height: 16px;
  border: 2px solid white;
  border-bottom: 0;
  border-radius: 16px 16px 0 0;
  position: relative;
}

.wifi-inner {
  position: absolute;
  width: 8px;
  height: 8px;
  border: 1px solid white;
  border-bottom: 0;
  border-radius: 8px 8px 0 0;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
}

.battery-container {
  position: relative;
  width: 24px;
  height: 12px;
}

.battery-body {
  width: 20px;
  height: 12px;
  border: 1px solid white;
  border-radius: 2px;
  position: relative;
}

.battery-tip {
  position: absolute;
  right: 0;
  top: 4px;
  width: 4px;
  height: 4px;
  background: white;
  border-radius: 0 2px 2px 0;
}

.battery-level {
  position: absolute;
  top: 2px;
  left: 2px;
  height: 8px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 32px;
  text-align: center;
  position: relative;
  z-index: 10;
}

.main-heading {
  font-size: 32px;
  font-weight: 300;
  color: white;
  margin-bottom: 32px;
  line-height: 1.2;
  text-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
  animation: slideUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both;
  white-space: pre-line;
}

.subtitle {
  font-size: 18px;
  color: #D1D5DB;
  margin-bottom: 64px;
  line-height: 1.5;
  max-width: 320px;
  animation: slideUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s both;
}

.button-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 64px;
}

.get-started-button {
  position: relative;
  overflow: visible;
  padding: 16px 48px;
  border-radius: 50px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation: slideUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s both;
}

.get-started-button.button-pressed {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.pulse-wave {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50px;
  pointer-events: none;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: transparent;
  opacity: 0;
  width: 60%;
  height: 60%;
  z-index: 1;
}

.pulse-wave.pulse-animate {
  animation: pulseExpand 2s ease-out infinite;
}

.pulse-wave-1 {
  animation-delay: 0s;
}

.pulse-wave-2 {
  animation-delay: 0.4s;
}

.pulse-wave-3 {
  animation-delay: 0.8s;
}

.button-text {
  position: relative;
  z-index: 10;
  color: white;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.025em;
}

.home-indicator {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: 128px;
  height: 4px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 2px;
  z-index: 50;
}

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulseExpand {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.8;
    border-width: 2px;
  }
  50% {
    opacity: 0.4;
    border-width: 1px;
  }
  100% {
    transform: translate(-50%, -50%) scale(2.5);
    opacity: 0;
    border-width: 0px;
  }
}

/* Responsive design for different screen sizes */
@media screen and (min-width: 768px) {
  .main-heading {
    font-size: 40px;
  }
}</style>