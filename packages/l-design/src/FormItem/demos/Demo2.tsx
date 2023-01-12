import { Input, Select } from 'antd';
import { LForm, LFormItem } from 'lighting-design';
import AgeSelect from './components/AgeSelect';

const Demo2 = () => {
  const [form] = LForm.useForm();
  return (
    <>
      <LForm
        // labelWidth={90}
        name="Form1"
        form={form}
        preserve={false}
        // submitter={{
        //   // wrapperCol: { offset: 4, span: 20 },
        // }}
      >
        <LFormItem
          name="name"
          className="l-name"
          label="姓名"
          contentAfter={<div>后面</div>}
          required
          contentProps={{
            placeholder: '输入姓名',
          }}
        >
          <Input />
        </LFormItem>
        <LFormItem name="l-sex" label="性别" required>
          <Select
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
      </LForm>
    </>
  );
};

export default Demo2;
