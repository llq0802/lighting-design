import { message } from 'antd';
import * as echarts from 'echarts';
import { LECharts } from 'lighting-design';
import localforage from 'localforage';
import { useEffect, useState } from 'react';

const store = localforage.createInstance({
  name: 'lightd',
});

const uploadedDataURL =
  'https://img.isqqw.com/profile/upload/2023/09/27/f99fb3b0-8d57-4f85-a15c-958cd18fda15.svg';

const provinces = [
  {
    city: true,
    name: '太原',
    coord: [1383.6, 759.1],
  },
  {
    name: '古交市',
    coord: [1287.7, 755.4],
  },
  {
    name: '清徐县',
    coord: [1322.5, 855],
  },
  {
    name: '娄烦县',
    coord: [1165.4, 708.5],
  },
  {
    name: '阳曲县',
    coord: [1496.5, 744.6],
  },
  {
    name: '小店县',
    coord: [1388.5, 804.2],
  },
  {
    name: '万柏林区',
    coord: [1337.3, 783.6],
  },
  // =======
  {
    city: true,
    name: '忻州',
    coord: [1544, 638],
  },
  {
    name: '保德县',
    coord: [1120, 436],
  },
  {
    name: '河曲县',
    coord: [1236, 359],
  },
  {
    name: '其岚县',
    coord: [1214, 483],
  },
  {
    name: '偏关县',
    coord: [1368, 342],
  },
  {
    name: '五寨县',
    coord: [1324, 483],
  },
  {
    name: '静乐县',
    coord: [1317, 611],
  },
  {
    name: '神池县',
    coord: [1460, 474],
  },
  {
    name: '宁武县',
    coord: [1546.2, 501.7],
  },
  {
    name: '原平市',
    coord: [1638, 547],
  },
  {
    name: '定襄县',
    coord: [1702, 639],
  },
  {
    name: '代县',
    coord: [1817, 507],
  },
  {
    name: '五台县',
    coord: [1861, 624],
  },
  {
    name: '繁峙县',
    coord: [1979, 513],
  },
  // ============
  {
    city: true,
    name: '朔州',
    coord: [1604, 391],
  },
  {
    name: '朔城区',
    coord: [1612.6, 430.6],
  },
  {
    name: '怀仁市',
    coord: [1898, 334],
  },
  {
    name: '应县',
    coord: [1920, 414],
  },
  {
    name: '山阴县',
    coord: [1732, 361],
  },
  {
    name: '右玉县',
    coord: [1711, 218],
  },
  {
    name: '平鲁区',
    coord: [1538.6, 332.6],
  },
  // =========
  {
    city: true,
    name: '大同',
    coord: [2102, 256],
  },
  {
    name: '大同县',
    coord: [2166, 351],
  },
  {
    name: '左云县',
    coord: [1826.7, 262.3],
  },
  {
    name: '阳高县',
    coord: [2229.9, 248.6],
  },
  {
    name: '浑源县',
    coord: [2140.5, 436.7],
  },
  {
    name: '天镇县',
    coord: [2386.3, 244.1],
  },
  {
    name: '广灵县',
    coord: [2296.2, 428],
  },
  {
    name: '灵丘县',
    coord: [2237.8, 503.2],
  },
  {
    name: '新荣区',
    coord: [2028.5, 215.6],
  },
  {
    name: '云冈区',
    coord: [2015.9, 281],
  },
  {
    name: '云州区',
    coord: [2195.8, 316.2],
  },
  // =========
  {
    city: true,
    name: '阳泉',
    coord: [1769.6, 861.7],
  },
  {
    name: '盂县',
    coord: [1759.3, 766.8],
  },
  {
    name: '平定县',
    coord: [1808, 881.4],
  },
  {
    name: '郊区',
    coord: [1760.2, 825.6],
  },
  {
    name: '矿区',
    coord: [1728, 844.8],
  },
  // =========
  {
    city: true,
    name: '吕梁',
    coord: [943, 804],
  },
  {
    name: '汾阳市',
    coord: [1076.3, 874.2],
  },
  {
    name: '孝义市',
    coord: [1013.2, 910.5],
  },
  {
    name: '临县',
    coord: [876.3, 625],
  },
  {
    name: '岚县',
    coord: [1115.2, 608.6],
  },
  {
    name: '兴县',
    coord: [990.9, 561.8],
  },
  {
    name: '方山县',
    coord: [997.1, 707.3],
  },
  {
    name: '中阳县',
    coord: [883, 862.8],
  },
  {
    name: '柳林县',
    coord: [791.7, 766.8],
  },
  {
    name: '文水县',
    coord: [1191, 864.9],
  },
  {
    name: '交城县',
    coord: [1171.1, 821],
  },
  {
    name: '交口县',
    coord: [818.5, 927.2],
  },
  {
    name: '石楼县',
    coord: [697.2, 871.1],
  },
  {
    name: '离石县',
    coord: [942.5, 876.7],
  },
  // =========
  {
    city: true,
    name: '晋中',
    coord: [1459, 905],
  },
  {
    name: '介休市',
    coord: [1063.3, 975.5],
  },
  {
    name: '祁县',
    coord: [1247.6, 943.3],
  },
  {
    name: '寿阳县',
    coord: [1620.6, 839.3],
  },
  {
    name: '昔阳县',
    coord: [1760.1, 966],
  },
  {
    name: '平遥县',
    coord: [1177.5, 954.1],
  },
  {
    name: '灵石县',
    coord: [967, 1010.2],
  },
  {
    name: '左权县',
    coord: [1598.3, 1051.3],
  },
  {
    name: '和顺县',
    coord: [1686.1, 1019],
  },
  {
    name: '榆社县',
    coord: [1444.1, 1022.9],
  },
  {
    name: '榆次区',
    coord: [1482.7, 922.4],
  },
  // =========
  {
    city: true,
    name: '临汾',
    coord: [808, 1162],
  },
  {
    name: '霍州市',
    coord: [946.3, 1095.4],
  },
  {
    name: '侯马市',
    coord: [656, 1264.1],
  },
  {
    name: '古县',
    coord: [988.5, 1161.9],
  },
  {
    name: '吉县',
    coord: [496.5, 1113],
  },
  {
    name: '隰县',
    coord: [725.3, 1025.3],
  },
  {
    name: '蒲县',
    coord: [666.3, 1136.4],
  },
  {
    name: '曲沃县',
    coord: [706, 1272.8],
  },
  {
    name: '翼城县',
    coord: [825.2, 1269.7],
  },
  {
    name: '襄汾县',
    coord: [1111, 1111],
  },
  {
    name: '洪洞县',
    coord: [871.2, 1137.9],
  },
  {
    name: '安泽县',
    coord: [1060.5, 1210.3],
  },
  {
    name: '浮山县',
    coord: [899.7, 1219.1],
  },
  {
    name: '乡宁县',
    coord: [537.8, 1165.9],
  },
  {
    name: '大宁县',
    coord: [551.9, 1053],
  },
  {
    name: '永和县',
    coord: [599.3, 977.3],
  },
  {
    name: '汾西县',
    coord: [856.4, 1057.9],
  },
  {
    name: '尧都县',
    coord: [815.1, 1202.5],
  },
  // =========
  {
    city: true,
    name: '长治',
    coord: [1336.6, 1222.4],
  },
  {
    name: '沁县',
    coord: [1246.7, 1076.4],
  },
  {
    name: '长子县',
    coord: [1251, 1256.2],
  },
  {
    name: '沁源县',
    coord: [1133.1, 1121.2],
  },
  {
    name: '平顺县',
    coord: [1491.9, 1238.5],
  },
  {
    name: '武乡县',
    coord: [1353, 1094.8],
  },
  {
    name: '襄垣县',
    coord: [1398.1, 1142.4],
  },
  {
    name: '黎城县',
    coord: [1501.9, 1157.2],
  },
  {
    name: '壶关县',
    coord: [1435.8, 1282.8],
  },
  {
    name: '屯留县',
    coord: [1258.3, 1155.4],
  },
  {
    name: '潞州区',
    coord: [1371.2, 1212.7],
  },
  {
    name: '潞城区',
    coord: [1405.4, 1197.7],
  },
  {
    name: '上党区',
    coord: [1303.9, 1310.6],
  },
  // =========
  {
    city: true,
    name: '运城',
    coord: [492, 1367],
  },
  {
    name: '河津市',
    coord: [410.9, 1249.3],
  },
  {
    name: '永济市',
    coord: [216.2, 1401.4],
  },
  {
    name: '夏县',
    coord: [1111, 1111],
  },
  {
    name: '绛县',
    coord: [732.8, 1337.7],
  },
  {
    name: '新绛县',
    coord: [545.1, 1290.9],
  },
  {
    name: '临猗县',
    coord: [317, 1350.1],
  },
  {
    name: '万荣县',
    coord: [385.9, 1311.7],
  },
  {
    name: '闻喜县',
    coord: [613.2, 1351.3],
  },
  {
    name: '稷山县',
    coord: [482.1, 1270.3],
  },
  {
    name: '垣曲县',
    coord: [700.8, 1407],
  },
  {
    name: '平陆县',
    coord: [447.2, 1451.8],
  },
  {
    name: '芮城县',
    coord: [280.8, 1434.5],
  },
  // =========
  {
    city: true,
    name: '晋城',
    coord: [1137, 1376],
  },
  {
    name: '高平市',
    coord: [1186.7, 1326.3],
  },
  {
    name: '泽州县',
    coord: [1185.2, 1390.3],
  },
  {
    name: '沁水县',
    coord: [917.3, 1348.7],
  },
  {
    name: '阳城县',
    coord: [986.3, 1394.9],
  },
  {
    name: '陵川县',
    coord: [1346.6, 1407.8],
  },
];

const datas = {
  from: [1381.1, 766.7],
  to: provinces
    .filter((item) => item.city === true)
    .map((item, index) => {
      item.value = index % 2 === 0 ? 1 : 10;
      if (item.coord[0] < 1380) {
        item.lineStyle = {
          curveness: -0.3,
        };
      }
      return item;
    }),
  other: provinces.filter((item) => item.city === undefined),
};

const defaultOption = {
  backgroundColor: '#040b1c',
  tooltip: {
    show: true,
    trigger: 'item',
    backgroundColor: 'rgba(166, 200, 76, 0.82)',
    borderColor: '#FFFFCC',
    showDelay: 0,
    hideDelay: 0,
    enterable: true,
    transitionDuration: 0,
    extraCssText: 'z-index:100',
    formatter: function (params, ticket, callback) {
      // 根据业务自己拓展要显示的内容
      let res = '';
      let name = params.name;
      let value = params.value[params.seriesIndex + 1] || params.value;
      res = `<span style='color:#fff;'>${name}</span><br/>数据：${value}`;
      return res;
    },
  },
  visualMap: {
    // 图例值控制
    min: 1,
    max: 10,
    calculable: true,
    show: false,
    color: ['#f44336', '#00eaff'],
    textStyle: {
      color: '#fff',
    },
  },
  geo: {
    // layoutCenter: ['50%', '50%'],
    // 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
    // layoutSize: 100,
    zoom: 1.3,
    map: 'mapSvgKey',
    itemStyle: {
      borderWidth: 0,
    },
    emphasis: {
      focus: 'none',
      itemStyle: {
        areaColor: 'red',
      },
      label: {
        show: false,
      },
    },
    regions: [
      {
        name: 'map11', // 对应svg标签里面的name
        itemStyle: {
          areaColor: 'red',
          color: 'red',
        },
      },
    ],
  },
  series: [
    {
      type: 'lines',
      coordinateSystem: 'geo',
      z: 1,
      zlevel: 2,
      animation: false,
      effect: {
        show: true,
        period: 6,
        trailLength: 0.6,
        symbolSize: 10,
        symbol: 'pin',
        loop: true,
      },
      lineStyle: {
        width: 1,
        curveness: 0.3,
      },

      data: datas.to.map((item) => {
        return {
          lineStyle: item?.lineStyle || {},
          coords: [datas.from, item.coord],
          name: item.name,
          value: item?.value,
        };
      }),
    },
    {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: {
        // 涟漪特效
        period: 4, // 动画时间，值越小速度越快
        brushType: 'stroke', // 波纹绘制方式 stroke, fill
        scale: 4, // 波纹圆环最大限制，值越大波纹越大
      },
      label: {
        show: false,
        position: 'right', // 显示位置
        offset: [5, 0], // 偏移设置
        formatter: function (params) {
          // 圆环显示文字
          return params.data.name;
        },
        fontSize: 13,
      },
      emphasis: {
        show: true,
      },
      symbol: 'circle',
      symbolSize: function (val) {
        return 5; // 圆环大小
      },
      itemStyle: {
        show: false,
        color: '#f00',
      },
      data: datas.to.map(function (item) {
        return {
          name: item.name,
          value: [...item.coord, item.value],
        };
      }),
      tooltip: {
        formatter: (params) => {
          return params.name;
        },
      },
    },
    // 被攻击点
    {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: {
        // 涟漪特效
        period: 4, // 动画时间，值越小速度越快
        brushType: 'stroke', // 波纹绘制方式 stroke, fill
        scale: 4, // 波纹圆环最大限制，值越大波纹越大
      },
      label: {
        show: false,
        position: 'right',
        // offset:[5, 0],
        color: '#0f0',
        formatter: '{b}',
        textStyle: {
          color: '#0f0',
        },
      },
      emphasis: {
        show: true,
        color: '#f60',
      },
      symbol: 'circle',
      symbolSize: function (val) {
        return 5; // 圆环大小
      },
      data: [
        {
          name: '平阳',
          value: [...datas.from, 10],
        },
      ],
      tooltip: {
        formatter: (params) => {
          return params.name;
        },
      },
    },
    {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 3,
      rippleEffect: {
        // 涟漪特效
        period: 4, // 动画时间，值越小速度越快
        brushType: 'stroke', // 波纹绘制方式 stroke, fill
        scale: 1, // 波纹圆环最大限制，值越大波纹越大
      },
      label: {
        show: false,
        position: 'right',
        // offset:[5, 0],
        color: '#0f0',
        formatter: '{b}',
        textStyle: {
          color: '#0f0',
        },
      },
      emphasis: {
        show: true,
        color: '#f60',
      },
      symbol: 'circle',
      symbolSize: function (val) {
        return 5; // 圆环大小
      },
      data: datas.other.map(function (item, index) {
        const color = index % 2 === 0 ? 'red' : 'yellow';
        return {
          name: item.name,
          value: [...item.coord, 1],
          itemStyle: {
            color,
          },
        };
      }),
      tooltip: {
        formatter: (params) => {
          return params.name;
        },
      },
    },
  ],
};

const Demo9 = () => {
  const [option, setOption] = useState();
  useEffect(() => {
    (async () => {
      // 将 svg 缓存到indexDB
      const storeRes = await store.getItem('mapSvgKey');

      if (storeRes) {
        echarts.registerMap('mapSvgKey', { svg: storeRes });
        setOption(defaultOption);
        return;
      }

      window
        .fetch(uploadedDataURL)
        .then((res) => res.text())
        .then(async (res) => {
          await store.setItem('mapSvgKey', res);
          echarts.registerMap('mapSvgKey', { svg: res });
          setOption(defaultOption);
        })
        .catch((error) => {
          console.log('error', error);
          message.error('地图数据获取失败');
        });
    })();
  }, []);
  return option ? (
    <LECharts
      style={{ height: '70vh' }}
      option={option}
      onEvents={{
        click: function (params, myChart) {
          myChart.dispatchAction({
            type: 'highlight',
            geoIndex: 0,
            name: params.name,
          });
        },
      }}
    />
  ) : (
    'loading...'
  );
};
export default Demo9;
