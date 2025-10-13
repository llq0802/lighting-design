import type { TabsProps } from 'antd';
import { LCard, LTabs } from 'lighting-design';
import React from 'react';

type PropsType = {};
const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];
const Index: React.FC<PropsType> = ({}) => {
  return (
    <div
      style={{
        height: 500,
        border: '1px solid red',
      }}
    >
      <LCard size="small">
        <LTabs items={items}></LTabs>
      </LCard>
    </div>
  );
};

export default Index;
