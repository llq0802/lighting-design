import { Card, List } from 'antd';
import { LList } from 'lighting-design';

const data: any[] = [];
for (let index = 0; index < 30; index++) {
  data[index] = {
    title: `Title ${index + 1}`,
  };
}

const Demo2 = () => (
  <LList
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
        <Card title={item.title}>Card content</Card>
      </List.Item>
    )}
  />
);

export default Demo2;
