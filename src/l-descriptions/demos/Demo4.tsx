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
      <Card title={<h3>内联模式</h3>}>
        <LDescriptions
          layout="inline"
          colon={false}
          columns={[
            { title: <h4>编码:</h4>, dataIndex: 'guid', emptyNode: '---' },
            { title: <h4>姓名:</h4>, dataIndex: 'name' },
            { title: <h4>性别:</h4>, dataIndex: 'sex' },
            { title: <h4>年龄:</h4>, dataIndex: 'age' },
            { title: <h4>出生日期:</h4>, dataIndex: 'date' },
            { title: <h4>地址:</h4>, dataIndex: 'address' },
            { title: <h4>IP:</h4>, dataIndex: 'ip', emptyNode: '127.0.0.1' },
            { title: <h4>手机号:</h4>, dataIndex: 'phone' },
            { title: <h4>邮箱:</h4>, dataIndex: 'email' },
            { title: <h4>版本:</h4>, dataIndex: 'version', emptyNode: '0.0.0' },
            { title: <h4>描述:</h4>, dataIndex: 'desc', emptyNode: '---' },
          ]}
          record={record}
        />
      </Card>
      <br />
      <br />
      <Card title={<h3>垂直模式</h3>}>
        <LDescriptions
          layout="vertical"
          colon={false}
          marginBottom={24}
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
