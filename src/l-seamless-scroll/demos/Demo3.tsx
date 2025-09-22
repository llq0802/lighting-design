import { Flex } from 'antd';
import type { LSeamlessScrollActionRef } from 'lighting-design';
import { LSeamlessScroll } from 'lighting-design';
import { useRef } from 'react';

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
const Demo3 = () => {
  const actionRef = useRef<LSeamlessScrollActionRef>();

  return (
    <LSeamlessScroll
      height={300}
      list={listData}
      actionRef={actionRef}
      singleHeight={30}
      renderItem={(item, index) => (
        <Flex key={index} style={{ height: 30 }}>
          <span>
            {item.title} - {item.date}
          </span>
        </Flex>
      )}
    />
  );
};

export default Demo3;
