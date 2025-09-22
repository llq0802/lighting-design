import { Button } from 'antd';
import Mock from 'better-mock';
import { LDescriptions } from 'lighting-design';

const record = Mock.mock({
  name: '@cname',
  address: '@county(true)',
  ip: '@ip',
  'age|20-50': 20,
  date: '@date',
  phone: '@phone',
  email: '@email(163.com)',
  desc: '@cparagraph(2)',
  sex: '@pick(["男", "女",])',
  guid: '@id',
  version: '@version',
});

const Demo2 = () => {
  return (
    <div>
      <LDescriptions
        colon={false}
        titleWidth={200}
        titleAlign="right"
        title={<h3>用户信息</h3>}
        extra={<Button type="primary">操作</Button>}
        columns={[
          { title: <h4>编码:</h4>, dataIndex: 'guid' },
          { title: <h4>姓名:</h4>, dataIndex: 'name' },
          { title: <h4>性别:</h4>, dataIndex: 'sex' },
          { title: <h4>年龄:</h4>, dataIndex: 'age' },
          { title: <h4>出生日期:</h4>, dataIndex: 'date' },
          { title: <h4>地址:</h4>, dataIndex: 'address' },
          { title: <h4>IP:</h4>, dataIndex: 'ip' },
          { title: <h4>手机号:</h4>, dataIndex: 'phone' },
          { title: <h4>邮箱:</h4>, dataIndex: 'email' },
          { title: <h4>版本:</h4>, dataIndex: 'version' },
          { title: <h4>描述:</h4>, dataIndex: 'desc' },
        ]}
        record={record}
      />
    </div>
  );
};

export default Demo2;
