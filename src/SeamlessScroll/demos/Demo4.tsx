import type { LSeamlessScrollInstance } from 'lighting-design';
import { LSeamlessScroll } from 'lighting-design';
import { useEffect, useRef, useState } from 'react';

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

  const scrollRef = useRef<LSeamlessScrollInstance>();

  useEffect(() => {
    const timer = setInterval(() => {
      setData((pList) => {
        if (pList.length > 50) {
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
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <LSeamlessScroll list={data} scrollRef={scrollRef} step={0.5} wrapperHeight={320}>
      {data.map((item, index) => (
        <div key={index} style={{ height: 22 }}>
          <span style={{ marginRight: 22 }}>{item.title}</span>
          <span>{item.date}</span>
        </div>
      ))}
    </LSeamlessScroll>
  );
};

export default Demo1;
