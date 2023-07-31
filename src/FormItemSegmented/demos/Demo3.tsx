import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { LForm, LFormItemSegmented } from 'lighting-design';
const Demo3 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm form={form} submitter={false}>
      <LFormItemSegmented
        label="选择"
        name="segmented369"
        initialValue="user3-1"
        options={[
          {
            label: (
              <div style={{ padding: 4 }}>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <div>User 1</div>
              </div>
            ),
            value: 'user3-1',
          },
          {
            label: (
              <div style={{ padding: 4 }}>
                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                <div>User 2</div>
              </div>
            ),
            value: 'user3-2',
          },
          {
            label: (
              <div style={{ padding: 4 }}>
                <Avatar
                  style={{ backgroundColor: '#87d068' }}
                  icon={<UserOutlined />}
                />
                <div>User 3</div>
              </div>
            ),
            value: 'user3-3',
          },
        ]}
      />
    </LForm>
  );
};
export default Demo3;
