import { Card, Input, Select, Space, Switch } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { LForm, LFormItem } from 'lighting-design';
import React from 'react';
import AgeSelect from './components/AgeSelect';
import MyCheckbox from './components/MyCheckbox';

const Demo2 = () => {
  const [form] = LForm.useForm();
  return (
    <>
      <LForm
        labelWrap
        form={form}
        labelCol={{ flex: '120px' }}
        submitter={{ buttonAlign: 120 }}
        onFinish={(values) => {
          console.log('onFinish', values);
        }}
      >
        <LFormItem
          label="姓名"
          name="l-name"
          className="lightd-form-item-classname"
          contentClassName="lightd-form-item-content-classname"
          contentAfter={<b>后面元素</b>}
          required
          contentProps={{ placeholder: '输入姓名' }}
        >
          <Input />
        </LFormItem>

        <LFormItem
          label="label与children垂直居中对齐"
          name="l-name161"
          required
          wrapperAlignItems="center"
        >
          <TextArea placeholder="看看这一项的对齐效果" style={{ height: 100 }} />
        </LFormItem>

        <LFormItem name="l-sex" label="性别" required contentBefore={<b>前面元素</b>}>
          <Select
            onChange={(val) => {
              console.log('val-Select', val);
            }}
            placeholder="选择性别"
            options={[
              { value: '1', label: '男' },
              { value: '0', label: '女' },
            ]}
          />
        </LFormItem>

        <LFormItem
          required
          name="age"
          className="l-age"
          label="年龄"
          contentAlignItems="end"
          contentAfter={<strong>岁</strong>}
          dependencies={['sex']}
          contentProps={{
            placeholder: '选择年龄',
          }}
        >
          <AgeSelect />
        </LFormItem>

        <LFormItem
          valuePropName="checked"
          name="switch"
          label="开关"
          contentAfter={<b>contentInline 为 true 的效果</b>}
          contentInline
        >
          <Switch />
        </LFormItem>
        <LFormItem
          valuePropName="checked"
          name="checkbox"
          label="复选"
          contentAfter={<b>contentInline 为 false 的效果</b>}
        >
          <MyCheckbox />
        </LFormItem>

        <LFormItem
          label="自定义渲染Field"
          name="my-name2"
          className="lightd-form-item-className2"
          contentClassName="lightd-form-item-contentClassName2"
          renderField={(dom) => {
            // 这儿的 props 为组件内部注册 需要手动调用 value和onChange
            const CustomField = (props: {
              value: any;
              onChange: (val: any) => void;
              id: string;
            }) => {
              return (
                <Space>
                  <b>renderField 渲染 :</b>
                  {React.cloneElement(dom, props)}
                </Space>
              );
            };
            return <CustomField />;
          }}
        >
          <Input placeholder="自定义渲染Field" />
        </LFormItem>
        <LFormItem
          name="Input132"
          label="renderFormItem"
          contentAfter={<b>contentAfter</b>}
          renderFormItem={(dom) => {
            return (
              <Card title="重新渲染整个 LFormItem" style={{ marginBottom: 24 }} hoverable>
                {dom}
              </Card>
            );
          }}
        >
          <Input placeholder="自定义渲染整个组件" />
        </LFormItem>
      </LForm>
    </>
  );
};

export default Demo2;
