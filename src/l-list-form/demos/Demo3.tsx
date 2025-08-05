import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Space } from 'antd';
import { LForm, LFormItem, LFormItemInput, LFormItemSelect, LListForm } from 'lighting-design';
import React from 'react';

const sights = {
  Beijing: [
    { label: '北京1', value: 'Beijing1' },
    { label: '北京2', value: 'Beijing2' },
    { label: '北京3', value: 'Beijing3' },
  ],
  Shanghai: [
    { label: '上海1', value: 'Shanghai1' },
    { label: '上海2', value: 'Shanghai2' },
    { label: '上海3', value: 'Shanghai3' },
  ],
  Chongqing: [
    { label: '重庆1', value: 'chongqing1' },
    { label: '重庆2', value: 'chongqing2' },
    { label: '重庆3', value: 'chongqing3' },
  ],
};

type SightsKeys = keyof typeof sights;

const App: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };

  return (
    <LForm
      form={form}
      name="dynamic_form_complex"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      autoComplete="off"
      onValuesChange={(changedValues: any, values: any) => {
        console.log('changedValues', changedValues);
        console.log('values', values);
      }}
    >
      <LFormItemSelect
        name="area"
        label="区域"
        options={[
          { label: '北京', value: 'Beijing' },
          { label: '上海', value: 'Shanghai' },
          { label: '重庆', value: 'Chongqing' },
        ]}
        selectProps={{
          onChange(val) {
            console.log('val', val);
          },
        }}
      />

      <LListForm name="sights">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <Space key={field.key} align="baseline">
                <LFormItem
                  noStyle
                  shouldUpdate={(prevValues, curValues) =>
                    prevValues.area !== curValues.area || prevValues.sights !== curValues.sights
                  }
                >
                  {() => (
                    <LFormItemSelect
                      {...field}
                      required
                      label="景点"
                      disabled={!form.getFieldValue('area')}
                      name={[field.name, 'sight']}
                      options={sights[form.getFieldValue('area') as SightsKeys] || []}
                    />
                  )}
                </LFormItem>
                <LFormItemInput {...field} label="价格" required name={[field.name, 'price']} />

                <MinusCircleOutlined onClick={() => remove(field.name)} />
              </Space>
            ))}

            <LFormItem>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                新增景点
              </Button>
            </LFormItem>
          </>
        )}
      </LListForm>
    </LForm>
  );
};

export default App;
