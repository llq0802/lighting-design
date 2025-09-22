import { Card } from 'antd';
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
  return (
    <>
      <Card title={<h3>垂直模式</h3>}>
        <LDescriptions
          layout="vertical"
          colon={false}
          itemBottom={24}
          columns={[
            { title: <b>编码</b>, dataIndex: 'guid', emptyNode: '---' },
            { title: <b>姓名</b>, dataIndex: 'name' },
            { title: <b>性别</b>, dataIndex: 'sex' },
            { title: <b>年龄</b>, dataIndex: 'age' },
            { title: <b>出生日期</b>, dataIndex: 'date' },
            { title: <b>地址</b>, dataIndex: 'address' },
            { title: <b>IP</b>, dataIndex: 'ip', emptyNode: '127.0.0.1' },
            { title: <b>手机号</b>, dataIndex: 'phone' },
            { title: <b>邮箱</b>, dataIndex: 'email' },
            { title: <b>版本</b>, dataIndex: 'version', emptyNode: '0.0.0' },
            { title: <b>描述</b>, dataIndex: 'desc', emptyNode: '---' },
          ]}
          record={record}
        />
      </Card>
    </>
  );
};

export default Demo3;
