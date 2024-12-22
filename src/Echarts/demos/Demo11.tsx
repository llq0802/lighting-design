import * as echarts from 'echarts';
import { LECharts } from 'lighting-design';
import cq2 from './cq2.json';
echarts.registerMap('cq2', {
  geoJSON: cq2,
  specialAreas: {},
});

const option = {
  backgroundColor: '#062343',
  geo: [
    // 高亮虚影层
    {
      map: 'cq2',
      aspectScale: 1,
      roam: false, // 是否允许缩放
      zoom: 1.2, // 默认显示级别
      silent: true,
      layoutSize: '80%',
      layoutCenter: ['50%', '50%'],
      itemStyle: {
        borderColor: 'rgba(68, 173, 254,1)',
        borderWidth: 6,
        shadowColor: 'rgba(68, 173, 254,1)',
        shadowOffsetY: 0,
        shadowBlur: 4,
      },
      zlevel: -1,
    },
    // 实际层
    {
      map: 'cq2',
      aspectScale: 1,
      roam: false, // 是否允许缩放
      zoom: 1.2, // 默认显示级别
      // silent: true,
      layoutSize: '80%',
      layoutCenter: ['50%', '50%'],
      itemStyle: {
        borderColor: 'rgba(68, 173, 254,.2)',
        borderWidth: 2,
        areaColor: '#094987',
      },
      emphasis: {
        itemStyle: {
          areaColor: '#0160AD',
        },
      },
      zlevel: 1,
    },
    // 底部重影层
    {
      map: 'cq2',
      aspectScale: 1,
      roam: false, // 是否允许缩放
      zoom: 1.2, // 默认显示级别
      silent: true,
      layoutSize: '80%',
      layoutCenter: ['50%', '50.6%'],
      itemStyle: {
        borderColor: 'rgba(68, 173, 254,.2)',
        borderWidth: 1,
        areaColor: '#094987',
      },
      zlevel: -2,
    },
    {
      map: 'cq2',
      aspectScale: 1,
      roam: false, // 是否允许缩放
      zoom: 1.2, // 默认显示级别
      silent: true,
      layoutSize: '80%',
      layoutCenter: ['50%', '51.2%'],
      itemStyle: {
        borderColor: 'rgba(68, 173, 254,.2)',
        borderWidth: 1,
        areaColor: '#094987',
      },
      zlevel: -3,
    },
    {
      map: 'cq2',
      aspectScale: 1,
      roam: false, // 是否允许缩放
      zoom: 1.2, // 默认显示级别
      silent: true,
      layoutSize: '80%',
      layoutCenter: ['50%', '52.2%'],
      itemStyle: {
        borderColor: 'rgba(68, 173, 254,.2)',
        borderWidth: 1,
        areaColor: '#094987',
      },
      zlevel: -3,
    },
  ],
  series: [
    // map
    {
      type: 'map',
      map: 'cq2',
      aspectScale: 1,
      roam: false, // 是否允许缩放
      zoom: 1.2, // 默认显示级别
      layoutSize: '80%',
      layoutCenter: ['50%', '50%'],
      itemStyle: {
        borderColor: 'rgba(192,245,249,.8)',
        borderWidth: 4,
        shadowColor: '#6FFDFF',
        shadowOffsetY: 0,
        shadowBlur: 10,
        areaColor: 'rgba(29,85,139,.6)',
      },
      emphasis: {
        itemStyle: {
          areaColor: '#0160AD',
        },
      },
    },
  ],
};

const Demo11 = () => {
  return (
    <LECharts
      option={option}
      style={{
        height: '70vh',
      }}
    />
  );
};

export default Demo11;
