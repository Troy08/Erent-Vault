<template>
  <view class="chart-box">
    <view class="chart-title-container"
      ><view class="chart-title">Price History</view>
      <view class="tabs">
        <view class="tab inactive">Card</view>
        <view class="tab active">Lease</view>
      </view></view
    >
    <view>
      <view class="avg-price">All Time Avg. Price</view>
      <view
        ><img src="/static/icons/dollar-icon.png" class="dollar-icon" />
        56.54</view
      >
    </view>

    <view class="chart-container">
      <canvas
        canvas-id="lineChart"
        class="chart-canvas"
        @touchstart="handleTouch"
      />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      data: [60, 72.01, 66, 70, 68],
      tooltipIndex: null, // which point to show tooltip
    };
  },
  mounted() {
    this.drawLineChart();
  },
  methods: {
    drawLineChart() {
      const ctx = uni.createCanvasContext("lineChart", this);
      const { labels, data, tooltipIndex } = this;

      const width = 350;
      const height = 200;
      const padding = 40;

      const maxY = Math.max(...data) + 10;
      const stepX = (width - 2 * padding) / (data.length - 1);
      const stepY = (height - 2 * padding) / maxY;

      const points = [];

      // Background
      const bgGradient = ctx.createLinearGradient(0, 0, 0, height);
      bgGradient.addColorStop(0, "#1a002f");
      bgGradient.addColorStop(1, "#0d0b1e");
      ctx.setFillStyle(bgGradient);
      ctx.fillRect(0, 0, width, height);

      // Grid
      ctx.setStrokeStyle("rgba(255,255,255,0.1)");
      labels.forEach((_, i) => {
        const x = padding + i * stepX;
        ctx.beginPath();
        ctx.moveTo(x, padding);
        ctx.lineTo(x, height - padding);
        ctx.stroke();
      });

      // Line fill
      const lineGradient = ctx.createLinearGradient(0, 0, 0, height);
      lineGradient.addColorStop(0, "rgba(82,255,0,0.3)");
      lineGradient.addColorStop(1, "rgba(82,255,0,0.05)");

      ctx.beginPath();
      data.forEach((val, i) => {
        const x = padding + i * stepX;
        const y = height - padding - val * stepY;
        points.push({ x, y });
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.lineTo(points[points.length - 1].x, height - padding);
      ctx.lineTo(points[0].x, height - padding);
      ctx.closePath();
      ctx.setFillStyle(lineGradient);
      ctx.fill();

      // Line stroke
      ctx.beginPath();
      ctx.setStrokeStyle("#52ff00");
      ctx.setLineWidth(2);
      points.forEach((p, i) => {
        if (i === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      });
      ctx.stroke();

      // Dots
      ctx.setFillStyle("#52ff00");
      points.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, 2 * Math.PI);
        ctx.fill();
      });

      // Labels
      ctx.setFontSize(12);
      ctx.setFillStyle("#ccc");
      labels.forEach((label, i) => {
        const x = padding + i * stepX;
        ctx.fillText(label, x - 10, height - padding + 20);
      });

      // Tooltip if selected
      if (tooltipIndex !== null) {
        const x = points[tooltipIndex].x;
        const y = points[tooltipIndex].y;
        const price = data[tooltipIndex];
        const date = labels[tooltipIndex] + " 17";

        ctx.setFillStyle("#fff");
        ctx.fillRect(x - 30, y - 45, 60, 35);
        ctx.setFillStyle("#000");
        ctx.setFontSize(10);
        ctx.fillText(date, x - 20, y - 30);
        ctx.setFillStyle("#a500ff");
        ctx.setFontSize(12);
        ctx.fillText(`$ ${price.toFixed(2)}`, x - 15, y - 15);
      }

      ctx.draw();
      this._points = points; // save for touch
    },

    handleTouch(e) {
      const touchX = e.touches[0].x;
      const touchY = e.touches[0].y;

      const hitRadius = 10;

      for (let i = 0; i < this._points.length; i++) {
        const p = this._points[i];
        const dx = touchX - p.x;
        const dy = touchY - p.y;
        if (Math.sqrt(dx * dx + dy * dy) <= hitRadius) {
          this.tooltipIndex = i;
          this.drawLineChart();
          return;
        }
      }

      this.tooltipIndex = null;
      this.drawLineChart();
    },
  },
};
</script>

<style>
.chart-title {
  font-size: 18px;
}
.chart-canvas {
  width: 350px;
  height: 200px;
}
.chart-container {
  background-color: #0d0b1e;
  border-radius: 16px;
  padding: 10px;
  margin-top: 10px;
}
.tabs {
  display: flex;
  border-radius: 20rpx;
  overflow: hidden;
  background: #2c003f;
  margin-bottom: 10rpx;
  width: 108px;
}
.tab {
  flex: 1;
  text-align: center;
  padding: 20rpx 0;
  font-size: 28rpx;
  font-weight: 500;
  color: white;
}

.tab.inactive {
  background: none;
  color: #aaa;
}

.tab.active {
  background: linear-gradient(to right, #a755ff, #ff5975);
  color: white;
}
.chart-title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.chart-box {
  margin-top: 20px;
}
.dollar-icon {
  width: 15px;
  height: 15px;
}
.avg-price {
  font-size: 12px;
  color: #8c8c8c;
}
</style>
