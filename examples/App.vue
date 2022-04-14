<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="测试打包一个组件"/> -->
    <test-dome></test-dome>
    <chart-line-area
      :rowData="stjcData"
      :symbolSize="3"
      width="300px"
      height="450px"
      :barColor="[ // 背景样式
        '#1CAEDE',
        'rgba(30,181,231,0)',
        '#1CAEDE',
        'rgba(30,181,231,.45)',
      ]"
      :legIsShow="false"
      :fontStyle="{ // 文字样式
        Xfont: { // x轴
          color: '#BFEBFF',
          fontSize: 18,
          fontFamily: 'Adobe 黑体 Std',
          padding: [0, 10, 0, 0]
        },
        Yfont: {
          color: '#BFEBFF',
          fontSize: 18,
          fontFamily: 'Helvetica',
        },
        nameTextStyle: {
          color: '#BFEBFF',
          fontSize: 20,
          padding: 2,
          fontFamily: '苹方',
        },
      }"
      top="20%"
    ></chart-line-area>
    <charts-radar style="height: 245px" class="mt10" :datas="QZXQ_RADAR" :indicator="QZXQ_indicator"></charts-radar>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    // HelloWorld
  },
  data() {
    return {
      QZXQ_RADAR: [
        { category: '需求', value: [200, 300, 200, 400, 500] },
      ],
      QZXQ_indicator: [
        { name: '营商环境', max: 500 },
        { name: '生态监测', max: 500 },
        { name: '要素保障', max: 500 },
        { name: '基础设施', max: 500 },
        { name: '企业风险', max: 500 },
      ],
      stjcData: [
        {
          name: "00:00",
          value: 90,
        },
        {
          name: "02:00",
          value: 150,
        },
        {
          name: "04:00",
          value: 130,
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
