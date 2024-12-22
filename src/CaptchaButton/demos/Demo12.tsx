import { Button, Layout, theme } from 'antd';
import React, { useState } from 'react';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="my-laofs">
      <Sider collapsedWidth={0} trigger={null} collapsible collapsed={collapsed}>
        Sider
      </Sider>

      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            onClick={() => setCollapsed(!collapsed)}
            style={{
              width: 5,
              height: 80,
              background: '#474648',
            }}
          />
        </Header>
        789
      </Layout>
      <div>88</div>
    </Layout>
  );
};

export default App;
