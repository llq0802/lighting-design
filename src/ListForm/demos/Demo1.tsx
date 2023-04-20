import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
import { LForm, LFormItem, LFormItemInput, LListForm } from 'lighting-design';

const Demo1 = () => {
  return (
    <div>
      <LForm
        onFinish={(values) => {
          console.log('values', values);
        }}
      >
        <LFormItemInput name="input" label="输入框" />
        <LListForm name="list">
          {(fields, { add, remove, move }, { errors }) => {
            return (
              <>
                {fields.map(({ key, name, ...restField }) => {
                  return (
                    <Form.Item
                      label="名称"
                      key={key}
                      style={{ marginBottom: 0 }}
                    >
                      <Space
                        key={key}
                        style={{ display: 'flex', width: '100%' }}
                        align="baseline"
                      >
                        <Form.Item
                          {...restField}
                          name={[name, 'first']}
                          rules={[
                            { required: true, message: 'Missing first name' },
                          ]}
                        >
                          <Input placeholder="First Name" />
                        </Form.Item>

                        <Form.Item
                          name={[name, 'last']}
                          rules={[
                            { required: true, message: 'Missing Last name' },
                          ]}
                        >
                          <Input placeholder="Last Name" />
                        </Form.Item>

                        <MinusCircleOutlined onClick={() => remove(name)} />
                        <PlusOutlined onClick={() => add()} />
                      </Space>
                    </Form.Item>
                  );
                })}

                <LFormItem>
                  <Button
                    type="dashed"
                    onClick={() => {
                      add();
                    }}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add field
                  </Button>
                </LFormItem>
              </>
            );
          }}
        </LListForm>
      </LForm>
    </div>
  );
};

export default Demo1;
