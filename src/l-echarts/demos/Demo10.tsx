import * as echarts from 'echarts';
import type { LEChartsInstance } from 'lighting-design';
import { LECharts } from 'lighting-design';
import { useEffect, useRef } from 'react';
import main_cq_geojson from './main_cq_geojson.json';

echarts.registerMap('mapKey', {
  geoJSON: main_cq_geojson,
  specialAreas: {},
});

const mapData = [
  {
    name: '江北区',
    tradeBidsectionCount: 100,
    tradeProjectCount: 200,
    coordinate: [108.320004, 22.82402],
  },
  {
    name: '渝北区',
    tradeBidsectionCount: 100,
    tradeProjectCount: 200,
    coordinate: [108.320004, 22.82402],
  },
  {
    name: '北碚区',
    tradeBidsectionCount: 100,
    tradeProjectCount: 200,
    coordinate: [109.411703, 24.314617],
  },
  {
    name: '沙坪坝区',
    tradeBidsectionCount: 100,
    tradeProjectCount: 200,
    coordinate: [110.299121, 25.274215],
  },
  {
    name: '渝中区',
    tradeBidsectionCount: 100,
    tradeProjectCount: 200,
    coordinate: [111.297604, 23.474803],
  },
  {
    name: '南岸区',
    tradeBidsectionCount: 100,
    tradeProjectCount: 200,
    coordinate: [109.119254, 21.473343],
  },
  {
    name: '九龙坡区',
    tradeBidsectionCount: 100,
    tradeProjectCount: 200,
    coordinate: [108.345478, 21.614631],
  },
  {
    name: '大渡口区',
    tradeBidsectionCount: 100,
    tradeProjectCount: 200,
    coordinate: [108.624175, 21.967127],
  },
  {
    name: '巴南区',
    tradeBidsectionCount: 100,
    tradeProjectCount: 200,
    coordinate: [109.602146, 23.0936],
  },
];

const option = {
  backgroundColor: '#f5f5f5',
  tooltip: {
    trigger: 'item',
    position: function (point, params, dom, rect, size) {
      let x = 0; // x坐标位置
      let y = 0; // y坐标位置
      // 当前鼠标位置
      let pointX = point[0];
      let pointY = point[1];
      // 提示框大小
      let boxWidth = size.contentSize[0];
      let boxHeight = size.contentSize[1];

      // boxWidth > pointX 说明鼠标左边放不下提示框
      if (boxWidth > pointX) {
        x = pointX + 10;
      } else {
        // 左边放的下
        x = pointX - boxWidth - 10;
      }
      // boxHeight > pointY 说明鼠标上边放不下提示框
      if (boxHeight > pointY) {
        y = 5;
      } else {
        // 上边放得下
        y = pointY - boxHeight;
      }
      return [x, y];
    },
    show: true,
    enterable: true,
    textStyle: {
      fontSize: 14,
      color: '#fff',
    },
    backgroundColor: 'rgba(0,2,89,0.8)',
    formatter: function (params) {
      // console.log(params);
      let tipHtml = '';
      tipHtml = `
            <div class="ui-map-img">
                <div class='ui-maptxt'>${params.name}</div>
                <div class='ui-mapNum'>标段数: ${params.data?.tradeBidsectionCount}</div>
                <div class='ui-mapNum'>项目数: ${params.data?.tradeProjectCount}</div>
            </div>
        `;
      return tipHtml;
    },
  },
  visualMap: {
    min: 0,
    max: 100000,
    left: 26,
    bottom: 40,
    showLabel: true,
    text: ['高', '低'],
    pieces: [
      {
        gt: 10000,
        label: '> 10000人',
        color: '#7f1100',
      },
      {
        gte: 1000,
        lte: 10000,
        label: '1000 - 10000人',
        color: '#ff5428',
      },
      {
        gte: 100,
        lt: 1000,
        label: '100 - 1000人',
        color: '#ff8c71',
      },
      {
        gte: 10,
        lt: 100,
        label: '10 - 100人',
        color: '#ffd768',
      },
      {
        gte: 1,
        lt: 10,
        label: '1 - 10人',
        color: '#BEDAEE',
      },
    ],
    show: true,
  },
  // geo: {
  //   map: 'mapKey',
  //   roam: true,
  //   scaleLimit: {
  //     min: 1,
  //     max: 2,
  //   },
  //   zoom: 1.13,
  //   label: {
  //     show: true,
  //     fontSize: 14,
  //     color: '#86a5bf',
  //   },
  //   itemStyle: {
  //     areaColor: '#275398',
  //     borderWidth: 3,
  //     borderColor: '#9efcfe',

  //     // shadowBlur: 5,
  //     // shadowColor: '#275398',
  //     // shadowOffsetX: 10,
  //     // shadowOffsetY: 10,
  //   },
  //   emphasis: {
  //     itemStyle: {
  //       areaColor: 'red',
  //       borderWidth: 3,
  //       borderColor: '#9efcfe',

  //       shadowBlur: 5,
  //       shadowColor: '#275398',
  //       shadowOffsetX: 10,
  //       shadowOffsetY: 10,
  //     },
  //   },
  // },
  series: [
    {
      data: mapData,
      type: 'map',
      mapType: 'mapKey',
      // aspectScale: 0.95,
      layoutCenter: ['50%', '50%'], // 地图位置
      layoutSize: '90%',
      selectedMode: 'single', // 设置为单选模式
      zoom: 1, // 当前视角的缩放比例
      // roam: true, //是否开启平游或缩放
      scaleLimit: {
        // 滚轮缩放的极限控制
        min: 1,
        max: 2,
      },
      label: {
        show: true,
        textStyle: {
          color: '#fff',
        },
        emphasis: {
          textStyle: {
            color: '#fff',
          },
        },
      },
      itemStyle: {
        normal: {
          areaColor: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.9,
            colorStops: [
              {
                offset: 0,
                color: 'RGBA(40, 99, 113, 1)', // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'RGBA(28, 79, 105, 0.6)', // 100% 处的颜色
              },
            ],
          },
          borderColor: 'RGBA(52, 140, 250, 1)',
          borderWidth: 2,
          shadowColor: '#092f8f', // 外发光
          shadowBlur: 20,
          shadowOffsetX: 10,
          shadowOffsetY: 10,
        },
        emphasis: {
          areaColor: '#0c274b',
          // borderColor: '#087cf9',
          // borderWidth: 5,
          label: {
            color: '#fff',
          },
        },
      },
    },
  ],
};

const Demo10 = () => {
  const showTipTimer = useRef<NodeJS.Timeout>();
  const curIndex = useRef(0); // 播放所在下标
  const echartsRef = useRef<LEChartsInstance>();

  useEffect(() => {
    const ins = echartsRef.current?.getEchartsInstance();

    showTipTimer.current = setInterval(() => {
      ins!.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: curIndex.current,
      });
      curIndex.current++;
      if (curIndex.current > mapData.length) {
        curIndex.current = 0;
      }
    }, 2000);

    return () => {
      clearInterval(showTipTimer.current);
    };
  }, []);

  return (
    <LECharts
      actionRef={echartsRef}
      style={{ height: '70vh' }}
      option={option}
      onEvents={{
        mouseover(params, myChart) {
          console.log('params', params);

          showTipTimer.current && clearInterval(showTipTimer.current);
          myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: params.dataIndex,
          });
        },
        mouseout(params, myChart) {
          showTipTimer.current && clearInterval(showTipTimer.current);

          showTipTimer.current = setInterval(function () {
            myChart.dispatchAction({
              type: 'showTip',
              seriesIndex: 0,
              dataIndex: curIndex.current,
            });
            curIndex.current++;
            if (curIndex.current > mapData.length) {
              curIndex.current = 0;
            }
          }, 2000);
        },
      }}
    />
  );
};

export default Demo10;
