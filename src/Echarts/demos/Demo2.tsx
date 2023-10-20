import { Button } from 'antd';
import Mock from 'better-mock';
import type { EChartsOption } from 'echarts';
import { cloneDeep } from 'lodash-es';
import { useState } from 'react';
import LECharts from '../index';

const defaultOption = {
  tooltip: {},
  legend: {
    data: ['销量'],
    textStyle: {
      fontSize: 20,
    },
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
      },
      data: [
        Mock.Random.integer(5, 50),
        Mock.Random.integer(5, 50),
        Mock.Random.integer(5, 50),
        Mock.Random.integer(5, 50),
        Mock.Random.integer(5, 50),
        Mock.Random.integer(5, 50),
      ],
    },
  ],
};

const Chart1 = () => {
  const [count, setCount] = useState(0);
  const [option, setOption] = useState<EChartsOption>(defaultOption);
  return (
    <div>
      <div>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          更新count: {count}
        </Button>

        <Button
          onClick={() => {
            const newOpt = cloneDeep(option);
            newOpt.series[0].data = [
              Mock.Random.integer(5, 40),
              Mock.Random.integer(5, 40),
              Mock.Random.integer(5, 40),
              Mock.Random.integer(5, 40),
              Mock.Random.integer(5, 40),
              Mock.Random.integer(5, 40),
            ];
            setOption({
              ...newOpt,
            });
          }}
        >
          更新option
        </Button>
      </div>
      <LECharts option={option} />
    </div>
  );
};

export default Chart1;
