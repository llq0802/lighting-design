import { Tabs } from 'antd';
import LECharts from '../index';

const Chart2 = () => {
  const option = {
    tooltip: {},
    legend: {
      data: ['销量-2'],
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {},
    series: [
      {
        name: '销量-2',
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

  return <LECharts style={{}} option={option} />;
};
const Chart1 = () => {
  const option = {
    tooltip: {},
    legend: {
      data: ['销量'],
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {},
    series: [
      {
        name: '销量',
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

  return <LECharts style={{}} option={option} />;
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
    children: 'Content of Tab Pane 3',
  },
];

const Demo1 = () => {
  const onChange = (key: string) => {
    // console.log(key);
  };

  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};

export default Demo1;
