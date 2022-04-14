# test

## 安装依赖
```
npm install echarts --S
npm install less less-loader --S
npm install echarts-mini-vue
```
## 使用 配合echarts使用
import * as echarts from 'echarts'; 注意: 要先引入echarts
Vue.prototype.$echarts = echarts;

import sysTestDome from 'echarts-mini-vue'
Vue.use(sysTestDome);
```
### 折线图示例
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
>
</chart-line-area>
// 展示数据示例
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
]
### 雷达图示例
<charts-radar style="height: 245px" class="mt10" :datas="QZXQ_RADAR" :indicator="QZXQ_indicator"></charts-radar>
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


### 场景发布到npm
npm账号：sunyuese
密码：love201314+
邮箱：957685825@qq.com
```
npm run lib
npm login
npm publish
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
