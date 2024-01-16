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

const Demo1 = () => {
  return (
    <div>
      <LDescriptions
        columns={[
          { title: '编码', dataIndex: 'guid' },
          { title: '姓名', dataIndex: 'name' },
          { title: '性别', dataIndex: 'sex' },
          { title: '年龄', dataIndex: 'age' },
          { title: '出生日期', dataIndex: 'date' },
          { title: '地址', dataIndex: 'address' },
          { title: 'IP', dataIndex: 'ip' },
          { title: '手机号', dataIndex: 'phone' },
          { title: '邮箱', dataIndex: 'email' },
          { title: '版本', dataIndex: 'version' },
          { title: '描述', dataIndex: 'desc' },
        ]}
        record={record}
      />
    </div>
  );
};

export default Demo1;
