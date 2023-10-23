import * as echarts from 'echarts';
import { LECharts } from 'lighting-design';
import cq1 from './cq1.json';

echarts.registerMap('cq1', {
  geoJSON: cq1,
  specialAreas: {},
});

const option = {
  backgroundColor: '#013954',
  geo: {
    map: 'cq1',
    aspectScale: 0.75, // 长宽比
    zoom: 1.1,
    roam: false,
    itemStyle: {
      normal: {
        areaColor: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.8,
          colorStops: [
            {
              offset: 0,
              color: '#09132c', // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#274d68', // 100% 处的颜色
            },
          ],
          globalCoord: true, // 缺省为 false
        },
        shadowColor: 'rgb(58,115,192)',
        shadowOffsetX: 10,
        shadowOffsetY: 11,
      },
      emphasis: {
        areaColor: '#2AB8FF',
        borderWidth: 0,
        color: 'green',
        label: {
          show: false,
        },
      },
    },
  },
  series: [
    {
      type: 'map',
      roam: false,
      label: {
        normal: {
          show: true,
          textStyle: {
            color: '#1DE9B6',
          },
        },
        emphasis: {
          textStyle: {
            color: 'rgb(183,185,14)',
          },
        },
      },

      itemStyle: {
        normal: {
          borderColor: 'rgb(147, 235, 248)',
          borderWidth: 1,
          areaColor: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.8,
            colorStops: [
              {
                offset: 0,
                color: '#09132c', // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#274d68', // 100% 处的颜色
              },
            ],
            globalCoord: true, // 缺省为 false
          },
        },
        emphasis: {
          areaColor: 'rgb(46,229,206)',
          //    shadowColor: 'rgb(12,25,50)',
          borderWidth: 0.1,
        },
      },
      zoom: 1.1,
      //     roam: false,
      map: 'cq1', // 使用
      // data: this.difficultData //热力图数据   不同区域 不同的底色
    },
    // 可以加入line 点等效果
  ],
};

const Demo12 = () => {
  return (
    <LECharts
      option={option}
      style={{
        height: '70vh',
      }}
    />
  );
};

export default Demo12;
