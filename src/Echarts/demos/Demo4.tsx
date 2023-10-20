import { Button, Divider, message } from 'antd';
import { LECharts } from 'lighting-design';

let myData = [
  {
    value: 100,
    name: '脱贫不稳定户',
  },
  {
    value: 150,
    name: '边缘户',
  },
  {
    value: 206,
    name: '突发严重困难户',
  },
];
let colorA = ['#E40C0C', '#E8AE0B', '#14CAFB'];
let option = {
  backgroundColor: '#061C3D',
  title: {
    show: false,
    text: '特色产业',
    x: '28%',
    y: 'center',
    textStyle: {
      fontSize: 18,
      fontWeight: 'normal',
      color: '#FFAA45',
    },
  },
  legend: {
    orient: 'vertical',
    icon: 'rect',
    right: '2%',
    y: 'center',
    align: 'right',
    itemWidth: 14,
    itemHeight: 10,
    itemGap: 20,
    textStyle: {
      rich: {
        name: {
          fontSize: 14,
          color: '#fff',
        },
        value: {
          fontSize: 16,
          padding: [0, 5, 0, 15],
        },
      },
    },
    formatter: function (name) {
      let res = myData.filter((v) => v.name === name);
      res = res[0] || {};
      return `{name|${name}}`;
    },
  },
  series: [
    {
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['40%', '50%'],
      color: colorA,
      itemStyle: {
        normal: {
          borderColor: '#051D41',
          borderWidth: 3,
        },
      },
      data: myData,
      labelLine: {
        normal: {
          show: true,
          length: 10,
          length2: 30,
        },
      },
      label: {
        normal: {
          formatter: '{b|{b}}\n{d|{d}%}',
          rich: {
            b: {
              fontSize: 14,
              color: '#fff',
              align: 'left',
              padding: [0, 0, 0, 0],
            },
            d: {
              fontSize: 16,
              color: '#20DCF9',
              align: 'left',
              padding: [4, 0, 0, 0],
            },
          },
        },
      },
    },
    {
      // 外层刻度
      name: '',
      type: 'gauge',
      // splitNumber: 360, // 刻度数量
      radius: '60%', // 图表尺寸
      center: ['40%', '50%'],
      startAngle: 0,
      endAngle: 360,
      axisLine: {
        show: false,
        lineStyle: {
          width: 0,
          shadowBlur: 0,
          color: [[1, '#969696']],
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#03F3F7', // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#05327C', // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
          width: 2,
        },
        length: 5,
        splitNumber: 5,
      },
      splitLine: {
        show: true,
        length: 2,
        lineStyle: {
          color: 'auto',
        },
      },
      axisLabel: {
        show: false,
      },
    },
  ],
};

const Demo4 = () => {
  function onChartReady(echarts) {
    console.log('echarts is ready', echarts);
  }

  function onChartClick(param, echarts) {
    console.log('onChartClick', param, echarts);
    message.info('触发了 echarts-click 事件');
  }

  function onChartLegendselectchanged(param, echarts) {
    console.log('onChartLegendselectchanged', param, echarts);
    message.info('触发了 echarts-legendselectchanged 事件');
  }
  return (
    <>
      <LECharts
        onChartReady={onChartReady}
        option={option}
        onEvents={{
          click: onChartClick,
          legendselectchanged: onChartLegendselectchanged,
        }}
      />

      <Divider>
        <Button onClick={() => {}} type="primary">
          click here to get the DataURL of chart.
        </Button>
      </Divider>
    </>
  );
};

export default Demo4;
