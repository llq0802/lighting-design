// import LStepsForm from './base/StepsForm';
// export default LStepsForm;
// export * from './interface';

// import type { TabsProps } from 'antd';
// import { Steps, Tabs, theme } from 'antd';
// import React from 'react';

// const items = Array.from({ length: 3 }).map((_, i) => {
//   const id = String(i + 1);
//   return {
//     label: `Tab ${id}`,
//     key: id,
//     children: `Content of Tab Pane ${id}`,
//     style: i === 0 ? { height: 200 } : undefined,
//   };
// });

// const App: React.FC = () => {
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   const renderTabBar: TabsProps['renderTabBar'] = (props, DefaultTabBar) => {
//     const current = items.findIndex((item) => item.key === props.activeKey) || 0;
//     return <Steps current={current} items={items.map((item) => ({ key: item.key, title: item.label }))} />;
//   };
//   return (
//     <>
//       <Tabs defaultActiveKey="1" renderTabBar={renderTabBar} items={items} />
//     </>
//   );
// };
// export default App;
