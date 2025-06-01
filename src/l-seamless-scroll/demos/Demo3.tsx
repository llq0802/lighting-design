import type { LSeamlessScrollInstance } from 'lighting-design';
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
  const scrollRef = useRef<LSeamlessScrollInstance>();

  return (
    <LSeamlessScroll
      list={listData}
      scrollRef={scrollRef}
      singleHeight={30}
      wrapperClassName="my-LSeamlessScroll"
      wrapperHeight={500}
      copyNum={2}
    >
      {listData.map((item, index) => (
        <div key={index} style={{ height: 30 }}>
          <span style={{ marginRight: 22 }}>{item.title}</span>
          <span>{item.date}</span>
        </div>
      ))}
    </LSeamlessScroll>
  );
};

export default Demo3;
