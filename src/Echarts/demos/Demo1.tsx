import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import { LECharts } from 'lighting-design';

const Chart2 = () => {
  const option = {
    tooltip: {},
    legend: {
      data: ['销量2'],
      textStyle: {
        fontSize: 14,
      },
    },
    xAxis: {
      data: ['衬衫2', '羊毛衫2', '雪纺衫2', '裤子2', '高跟鞋2', '袜子2'],
    },
    yAxis: {},
    series: [
      {
        name: '销量2',
        type: 'bar',
        itemStyle: {
          color: {
            type: 'linear',
            x: 0, // 右
            y: 0, // 下
            x2: 0, // 左
            y2: 1, // 上
            colorStops: [
              {
                offset: 0,
                color: 'red', // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'blue', // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
          // opacity: 0.5,
        },
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };

  return <LECharts option={option} />;
};
const Chart1 = () => {
  const option = {
    tooltip: {},
    legend: {
      data: ['销量1'],
      textStyle: {
        fontSize: 14,
      },
    },
    xAxis: {
      data: ['衬衫1', '羊毛衫1', '雪纺衫1', '裤子1', '高跟鞋1', '袜子1'],
    },
    yAxis: {},
    series: [
      {
        name: '销量1',
        type: 'bar',
        itemStyle: {
          color: {
            type: 'linear',
            x: 1, // 右
            y: 1, // 下
            x2: 0, // 左
            y2: 0, // 上
            colorStops: [
              {
                offset: 0,
                color: 'red', // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'blue', // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
          // opacity: 0.5,
        },
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };

  return <LECharts option={option} />;
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab 1',
    children: <Chart1></Chart1>,
  },
  {
    key: '2',
    label: 'Tab 2',
    children: <Chart2></Chart2>,
  },
  {
    key: '3',
    label: 'Tab 3',
    children: <Chart2></Chart2>,
  },
];

const Demo1 = () => {
  return <Tabs defaultActiveKey="1" items={items} />;
};

export default Demo1;
