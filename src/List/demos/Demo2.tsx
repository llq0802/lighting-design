import { Card, List } from 'antd';
import Mock from 'better-mock';
import { LList } from 'lighting-design';

const data = Mock.mock({
  'list|36': [
    {
      id: '@guid',
      name: '@cname',
      title: '@ctitle',
    },
  ],
}).list;

const Demo2 = () => (
  <LList
    rowKey="id"
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3,
    }}
    dataSource={data}
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 6,
    }}
    renderItem={(item) => (
      <List.Item>
        <Card title={item.name}>{item.title}</Card>
      </List.Item>
    )}
  />
);

export default Demo2;
