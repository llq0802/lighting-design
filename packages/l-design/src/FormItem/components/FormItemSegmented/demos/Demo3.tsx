import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { LForm, LFormItemSegmented } from 'lighting-design';
const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm name="LFormItemSelect" form={form} submitter={false}>
      <LFormItemSegmented
        name="segmented"
        initialValue={'User1'}
        options={[
          {
            label: (
              <div style={{ padding: 4 }}>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <div>User 1</div>
              </div>
            ),
            value: 'User1',
          },
          {
            label: (
              <div style={{ padding: 4 }}>
                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                <div>User 2</div>
              </div>
            ),
            value: 'user2',
          },
          {
            label: (
              <div style={{ padding: 4 }}>
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                <div>User 3</div>
              </div>
            ),
            value: 'user3',
          },
        ]}
      />
    </LForm>
  );
};
export default Demo1;
