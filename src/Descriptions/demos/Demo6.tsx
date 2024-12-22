import { Badge, Card, Tag, Typography, Watermark } from 'antd';
import Mock from 'better-mock';
import { LDescriptions } from 'lighting-design';

const record = Mock.mock({
  name: '@cname',
  address: '@county(true)',
  'age|20-50': 20,
  date: '@date',
  phone: '@phone',
  email: '@email(163.com)',
  sex: '@pick(["男", "女",])',
});

const Demo3 = () => {
  Object.keys(record).forEach((key) => {
    if (key === 'age') {
      record[key] = (
        <div
          style={{
            display: 'grid',
            placeItems: 'center',
            width: 'fit-content',
            aspectRatio: '1/1',
            padding: `1px 4px`,
            backgroundColor: '#000',
            color: '#fff',
            borderRadius: '50%',
          }}
        >
          {record[key]}
        </div>
      );
    }
  });

  return (
    <Watermark content="Lighting Design">
      <Card>
        <LDescriptions
          colon={false}
          columns={[
            {
              title: <h4>姓名:</h4>,
              dataIndex: 'name',
              render(curVal, record, index) {
                return <Tag color="blue">{curVal}</Tag>;
              },
            },
            {
              title: <h4>性别:</h4>,
              dataIndex: 'sex',
              render(curVal, record, index) {
                return <Badge status="success" text={curVal} />;
              },
            },
            { title: <h4>年龄:</h4>, dataIndex: 'age' },
            {
              title: <h4>出生日期:</h4>,
              dataIndex: 'date',
              render(curVal, record, index) {
                return <Typography.Text keyboard>{curVal}</Typography.Text>;
              },
            },
            {
              title: <h4>手机号:</h4>,
              dataIndex: 'phone',
              render(curVal, record, index) {
                return (
                  <Tag bordered={false} color="magenta">
                    {' '}
                    {curVal}{' '}
                  </Tag>
                );
              },
            },
            {
              title: <h4>邮箱:</h4>,
              dataIndex: 'email',
              render(curVal, record, index) {
                return <Tag color="success">{curVal}</Tag>;
              },
            },
            {
              title: <h4>地址:</h4>,
              dataIndex: 'address',
              render(curVal, record, index) {
                return <Typography.Text code>{curVal}</Typography.Text>;
              },
            },
          ]}
          record={record}
        />
      </Card>
    </Watermark>
  );
};

export default Demo3;
