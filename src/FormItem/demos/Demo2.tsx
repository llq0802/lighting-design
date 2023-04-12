import { Input, Select, Switch } from 'antd';
import { LForm, LFormItem } from 'lighting-design';
import AgeSelect from './components/AgeSelect';
import MyCheckbox from './components/MyCheckbox';

const Demo2 = () => {
  const [form] = LForm.useForm();
  return (
    <>
      <LForm
        name="LForm"
        form={form}
        labelCol={{ flex: '90px' }}
        submitter={{ buttonAlign: 90 }}
        onFinish={(fields) => {
          console.log('fields', fields);
        }}
      >
        <LFormItem
          label="姓名"
          name="l-name"
          className="lightd-form-item-classname"
          contentClassName="lightd-form-item-content-classname"
          contentAfter={<div>后面</div>}
          required
          contentProps={{ placeholder: '输入姓名' }}
        >
          <Input />
        </LFormItem>
        <LFormItem name="l-sex" label="性别" required contentBefore={<>前面</>}>
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
          alignItems="end"
          contentAfter={<div>岁</div>}
          dependencies={['sex']}
        >
          <AgeSelect />
        </LFormItem>

        <LFormItem
          valuePropName="checked"
          name="switch"
          label="开关"
          contentAfter={<div>contentInline为true的效果</div>}
          contentInline={true}
        >
          <Switch />
        </LFormItem>
        <LFormItem
          valuePropName="checked"
          name="checkbox"
          label="复选"
          contentAfter={<div>contentInline为false的效果</div>}
        >
          <MyCheckbox />
        </LFormItem>

        <LFormItem
          label="自定义渲染"
          name="l-name2"
          className="lightd-form-item-className2"
          contentClassName="lightd-form-item-contentClassName2"
          renderField={(dom) => <Input placeholder="自定义渲染" />}
        />
      </LForm>
    </>
  );
};

export default Demo2;
