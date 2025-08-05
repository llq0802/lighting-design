import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { LForm, LFormItem, LFormItemInput, LListForm } from 'lighting-design';
import React from 'react';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

const Demo2: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };

  return (
    <LForm
      name="dynamic_form_item"
      submitter={{ position: 'center' }}
      // {...formItemLayoutWithOutLabel}
      onFinish={onFinish}
      // style={{ maxWidth: 600 }}
    >
      <LListForm
        name="names"
        rules={[
          {
            validator: async (_, names) => {
              if (!names || names.length < 2) {
                return Promise.reject(new Error('至少需要两项!'));
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field) => (
              <LFormItem key={field.key} label="Label">
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <LFormItemInput
                    {...field}
                    validateTrigger={['onChange', 'onBlur']}
                    style={{
                      width: '95%',
                      marginBottom: 0,
                    }}
                  />

                  {fields.length > 1 ? (
                    <MinusCircleOutlined className="dynamic-delete-button" onClick={() => remove(field.name)} />
                  ) : null}
                </div>
              </LFormItem>
            ))}

            <LFormItem>
              <Button block type="dashed" onClick={() => add()} icon={<PlusOutlined />} style={{ marginBottom: 20 }}>
                增加一项
              </Button>
              <Button block type="dashed" onClick={() => add('添加在头部的数据', 0)} icon={<PlusOutlined />}>
                增加一项在头部，并有默认值
              </Button>
              <LForm.ErrorList errors={errors} />
            </LFormItem>
          </>
        )}
      </LListForm>
    </LForm>
  );
};

export default Demo2;
