import { useInterval } from 'ahooks';
import { Flex } from 'antd';
import type { LSeamlessScrollActionRef } from 'lighting-design';
import { LSeamlessScroll } from 'lighting-design';
import { useRef, useState } from 'react';

const listData = [
  { title: '无缝滚动组件展示数据第1条', date: Date.now() },
  { title: '无缝滚动组件展示数据第2条', date: Date.now() },
  { title: '无缝滚动组件展示数据第3条', date: Date.now() },
  { title: '无缝滚动组件展示数据第4条', date: Date.now() },
  { title: '无缝滚动组件展示数据第5条', date: Date.now() },
  { title: '无缝滚动组件展示数据第6条', date: Date.now() },
  { title: '无缝滚动组件展示数据第7条', date: Date.now() },
  { title: '无缝滚动组件展示数据第8条', date: Date.now() },
  { title: '无缝滚动组件展示数据第9条', date: Date.now() },
  { title: '无缝滚动组件展示数据第10条', date: Date.now() },
];
const Demo1 = () => {
  const [data, setData] = useState(listData);
  const actionRef = useRef<LSeamlessScrollActionRef>();

  useInterval(() => {
    setData((pList) => {
      if (pList.length > 40) {
        return [...pList];
      }
      return [
        ...pList,
        {
          title: `无缝滚动组件展示数据第${pList.length + 1}条`,
          date: Date.now(),
        },
      ];
    });
  }, 1000);

  return (
    <LSeamlessScroll
      height={300}
      list={data}
      actionRef={actionRef}
      step={1}
      renderItem={(item, index) => (
        <Flex key={index} style={{ height: 30 }} data-index={index + 1}>
          <span>
            {item.title} - {item.date}
          </span>
        </Flex>
      )}
    />
  );
};

export default Demo1;
