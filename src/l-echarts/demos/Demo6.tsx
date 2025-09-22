import * as echarts from 'echarts';
import { LECharts } from 'lighting-design';

const fontColor = '#30eee9';
const option = {
  backgroundColor: '#11183c',

  title: {
    text: '分所销售水量占比',
    top: '5%',
    left: 'center',
    textStyle: {
      color: '#FFF',
      align: 'center',
    },
  },
  grid: {
    left: '9%',
    right: '10%',
    top: '20%',
    bottom: '15%',
    containLabel: true,
  },
  tooltip: {
    show: true,
    trigger: 'item',
  },
  legend: {
    show: true,
    x: 'center',
    top: '12%',
    y: '35',
    icon: 'stack',
    itemWidth: 10,
    itemHeight: 10,
    textStyle: {
      color: '#1bb4f6',
    },
    data: ['大户', '市中', '历下', '天桥', '槐荫', '历城'],
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisLabel: {
        color: fontColor,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#397cbc',
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: '#195384',
        },
      },
      data: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
      ],
    },
  ],
  yAxis: [
    {
      type: 'value',
      name: '立方米',
      min: 0,
      max: 1000,
      axisLabel: {
        formatter: '{value}',
        textStyle: {
          color: '#2ad1d2',
        },
      },
      axisLine: {
        lineStyle: {
          color: '#27b4c2',
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#11366e',
        },
      },
    },
    {
      type: 'value',
      name: '占比',
      min: 0,
      max: 1000,
      axisLabel: {
        formatter: '{value} %',
        textStyle: {
          color: '#186afe',
        },
      },
      axisLine: {
        lineStyle: {
          color: '#186afe',
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#11366e',
        },
      },
    },
  ],
  series: [
    {
      name: '大户',
      type: 'line',
      stack: '总量',
      symbol: 'circle',
      symbolSize: 8,
      itemStyle: {
        color: '#0092f6',
        lineStyle: {
          color: '#0092f6',
          width: 1,
        },
        areaStyle: {
          // color: '#94C9EC'
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
              offset: 0,
              color: 'rgba(7,44,90,0.3)',
            },
            {
              offset: 1,
              color: 'rgba(0,146,246,0.9)',
            },
          ]),
        },
      },
      markPoint: {
        itemStyle: {
          color: 'red',
        },
      },
      data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 260, 280],
    },
    {
      name: '市中',
      type: 'line',
      stack: '总量',
      symbol: 'circle',
      symbolSize: 8,

      itemStyle: {
        normal: {
          color: '#00d4c7',
          lineStyle: {
            color: '#00d4c7',
            width: 1,
          },
          areaStyle: {
            // color: '#94C9EC'
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              {
                offset: 0,
                color: 'rgba(7,44,90,0.3)',
              },
              {
                offset: 1,
                color: 'rgba(0,212,199,0.9)',
              },
            ]),
          },
        },
      },
      data: [220, 182, 191, 210, 230, 270, 270, 201, 154, 140, 240, 250],
    },
    {
      name: '历下',
      type: 'line',
      stack: '总量',
      symbol: 'circle',
      symbolSize: 8,
      itemStyle: {
        normal: {
          color: '#aecb56',
          lineStyle: {
            color: '#aecb56',
            width: 1,
          },
          areaStyle: {
            // color: '#94C9EC'
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              {
                offset: 0,
                color: 'rgba(7,44,90,0.3)',
              },
              {
                offset: 1,
                color: 'rgba(114,144,89,0.9)',
              },
            ]),
          },
        },
      },
      data: [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190],
    },
    {
      name: '天桥',
      type: 'line',
      stack: '总量',
      symbol: 'circle',
      symbolSize: 8,
      itemStyle: {
        normal: {
          color: '#3A44FB',
          lineStyle: {
            color: '#3A44FB',
            width: 1,
          },
          areaStyle: {
            // color: '#94C9EC'
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              {
                offset: 0,
                color: 'rgba(7,46,101,0.3)',
              },
              {
                offset: 1,
                color: 'rgba(0,166,246,0.9)',
              },
            ]),
          },
        },
      },
      data: [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190],
    },
    {
      name: '槐荫',
      type: 'line',
      stack: '总量',
      symbol: 'circle',
      symbolSize: 8,
      itemStyle: {
        normal: {
          color: '#6FE81A',
          lineStyle: {
            color: '#6FE81A',
            width: 1,
          },
          areaStyle: {
            // color: '#94C9EC'
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              {
                offset: 0,
                color: 'rgba(7,44,90,0.3)',
              },
              {
                offset: 1,
                color: 'rgba(0,212,199,0.9)',
              },
            ]),
          },
        },
      },
      data: [150, 232, 201, 154, 190, 180, 210, 150, 182, 201, 154, 190],
    },
    {
      name: '历城',
      type: 'line',
      stack: '总量',
      symbol: 'circle',
      symbolSize: 8,
      itemStyle: {
        normal: {
          color: '#aecb56',
          lineStyle: {
            color: '#aecb56',
            width: 1,
          },
          areaStyle: {
            // color: '#94C9EC'
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              {
                offset: 0,
                color: 'rgba(7,44,90,0.3)',
              },
              {
                offset: 1,
                color: 'rgba(0,212,199,0.9)',
              },
            ]),
          },
        },
      },
      data: [200, 232, 201, 200, 190, 190, 210, 190, 182, 201, 154, 190],
    },
  ],
};

const Demo6 = () => {
  return (
    <LECharts
      option={option}
      opts={{ renderer: 'svg' }}
      style={{
        height: '50vh',
      }}
    />
  );
};

export default Demo6;
