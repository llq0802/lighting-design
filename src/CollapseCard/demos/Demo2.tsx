import { SettingOutlined } from '@ant-design/icons';
import { LCollapseCard } from 'lighting-design';
import { useState } from 'react';

export default function Demo1() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <LCollapseCard
        collapsePosition="left"
        title="卡片标题"
        extra={<SettingOutlined />}
        collapsed={collapsed}
        onCollapsed={setCollapsed}
      >
        <div>卡片内容</div>
        <div>卡片内容</div>
      </LCollapseCard>
    </>
  );
}
