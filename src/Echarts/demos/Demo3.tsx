import { Button, Divider } from 'antd';
import type { LEChartsInstance } from 'lighting-design';
import { LECharts } from 'lighting-design';
import { useRef } from 'react';

let Ydata = ['本月告警次数', '本月已处理告警数', '实时告警数'];
let Xdata = [35, 23, 13];
let myColor = ['#FC2D42', '#015DFD', '#015DFD'].reverse();
const option = {
  backgroundColor: '#0F1F45',
  xAxis: {
    type: 'value',
    show: false,
  },
  yAxis: {
    type: 'category',
    inverse: true,
    axisLabel: {
      show: true,
      margin: 15,
      textStyle: {
        color: '#fff',
        fontSize: 22,
      },
      // 调整左侧文字的3个属性，缺一不可
      verticalAlign: 'bottom',
      align: 'top',
      // 调整文字上右下左
      padding: [0, 0, 20, 15],
    },
    splitLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    data: Ydata,
  },
  series: [
    {
      type: 'bar',
      barWidth: 12,
      zlevel: 2,
      barGap: '-100%',
      showBackground: true,
      backgroundStyle: {
        color: '#042F61',
      },
      itemStyle: {
        borderRadius: 3,
        color: (params) => {
          let num = myColor.length;
          return {
            type: 'linear',
            x: 0, // 右
            y: 0, // 下
            x2: 1, // 左
            y2: 1, // 上
            colorStops: [
              {
                offset: 0,
                color: myColor[params.dataIndex % num],
              },
              {
                offset: 1,
                color: '#fff',
              },
            ],
          };
        },
      },
      label: {
        show: true,
        position: [650, -35],
        fontSize: 14,
        color: '#fff',
        formatter: function (data) {
          return `{a|${data.value}}`;
        },
        rich: {
          a: {
            color: '#fff',
            textBorderWidth: 1,
            fontSize: 22,
            align: 'right',
            width: 100,
            fontWeight: 'bold',
          },
        },
      },
      data: Xdata,
    },
  ],
};

const Demo3 = () => {
  const echartsRef = useRef<LEChartsInstance>();

  function clickBtn() {
    const echartsInstanceRef = echartsRef.current?.echartsInstanceRef.current;
    console.log('  echartsRef.current. ', echartsRef.current);
    const base64 = echartsInstanceRef?.getDataURL?.() as string;
    const img = new Image();
    img.src = base64;
    const newWin = window.open('', '_blank');
    newWin!.document.write(img.outerHTML);
  }

  return (
    <>
      <LECharts echartsRef={echartsRef} option={option} />

      <Divider>
        <Button onClick={clickBtn} type="primary">
          click here to get the DataURL of chart.
        </Button>
      </Divider>
    </>
  );
};

export default Demo3;
