<template>
  <div class="radar-container">
    <div class="chart-radar" ref="radar"></div>
  </div>
</template>

<script>
export default {
  name: "ChartsRadar",
  props: {
    unit: {
      default: "单位：分钟",
      color: "",
    },
    indicator: {
      type: Array,
      default: () => {
        return [
          { name: "0", max: 300 },
          { name: "60", max: 300 },
          { name: "120", max: 300 },
          { name: "180", max: 300 },
        ];
      },
    },
    datas: {
      default: () => {
        return [
          { name: "1", category: "今日", value: 1220 },
          { name: "1", category: "昨天", value: 2000 },
          { name: "2", category: "今日", value: 4200 },
          { name: "3", category: "今日", value: 1420 }
        ];
      }
    },
    lineColors: {
      default: () => {
        return ["rgb(0,191,255)", "rgb(0,199,234)"];
      },
    },
    max: {
      default: 300,
    },
  },
  data() {
    return {
      chartInstance: null,
    };
  },
  mounted() {
    this.initChart();
  },
  watch: {
    datas() {
      this.initChart();
    },
  },
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.radar);
      let legend = Array.from(new Set(this.datas.map((e) => e.category)));
      let option = {
        legend: {
          show: false,
          bottom: 0,
          icon: "rect",
          itemWidth: 16,
          itemHeight: 1,
          textStyle: {
            fontFamily: "微软雅黑",
            fontSize: 14,
            color: "#BFEBFF",
          },
          orient: "horizontal",
          data: legend,
        },
        radar: {
          center: ["center", "60%"],
          radius: "60%",
          splitArea: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              type: "dashed",
            },
          },
          indicator: this.indicator,
        },
        series: [
          {
            name: "radar",
            type: "radar",
            data: legend.map((e, i) => {
              let data = {
                name: e,
                value: [],
                areaStyle: {
                  color: 'rgba(0,191,255, 0)',
                },
                lineStyle: {
                  color: this.lineColors[i],
                },
                itemStyle: {
                  color: this.lineColors[i],
                },
              };
              this.datas.forEach((c) => {
                if (c.category === e) {
                  data.value = c.value;
                }
              });
              return data;
            })
          }
        ]
      };
      this.chartInstance.setOption(option);
    },
  },
};
</script>
<style scoped lang="less">
.radar-container {
  width: 100%;
  height: 100%;

  .chart-radar {
    width: 100%;
    height: 100%;
  }
}
</style>
