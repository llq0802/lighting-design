import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import Mock from 'better-mock';
import { LForm, LFormItemSegmented } from 'lighting-design';
import React from 'react';
const opts1 = Mock.mock({ 'list|4': [{ label: '@cname', value: '@id' }] }).list;
const opts2 = Mock.mock({ 'list|4': [{ code: '@id', city: '@city' }] }).list;
type FieldType = {
  segmented1?: string;
  segmented2?: string;
};

const App: React.FC = () => {
  const [form] = LForm.useForm<FieldType>();

  return (
    <LForm<FieldType>
      labelWidth={100}
      form={form}
      onFinish={(values) => {
        console.log('===onFinish===', values);
      }}
    >
      <LFormItemSegmented label="基础" required name="segmented1" options={opts1} />
      <LFormItemSegmented label="block" block required name="segmented2" options={opts1} />
      <LFormItemSegmented label="shape" shape="round" required name="segmented3" options={opts1} />
      <LFormItemSegmented
        required
        name="segmented4"
        label="fieldNames"
        options={opts2}
        fieldNames={{ label: 'city', value: 'code' }}
      />

      <LFormItemSegmented
        label="选择"
        name="segmented5"
        initialValue="1"
        options={[
          {
            label: (
              <div style={{ padding: 4 }}>
                {' '}
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> <div>User 1</div>{' '}
              </div>
            ),
            value: '1',
          },
          {
            label: (
              <div style={{ padding: 4 }}>
                {' '}
                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar> <div>User 2</div>{' '}
              </div>
            ),
            value: '2',
          },
          {
            label: (
              <div style={{ padding: 4 }}>
                {' '}
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} /> <div>User 3</div>{' '}
              </div>
            ),
            value: '3',
          },
        ]}
      />
    </LForm>
  );
};

export default App;
