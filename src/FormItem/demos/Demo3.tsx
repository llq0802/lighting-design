import { Form, Input, Select } from 'antd';
import { LFormItem } from 'lighting-design';
import AgeSelect from './components/AgeSelect';

const Demo3 = () => {
  const [form] = Form.useForm<{ name: string; age: number }>();
  const newSex = Form.useWatch('sex', form);

  return (
    <>
      <Form name="LForm3" form={form}>
        <LFormItem name="sex" label="性别" required>
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

        {newSex === '1' ? (
          <LFormItem
            label="信息"
            name="l-info"
            className="lightd-form-item-className1"
            contentClassName="lightd-form-item-contentClassName1"
            required
            contentProps={{ placeholder: '输入信息' }}
          >
            <Input />
          </LFormItem>
        ) : null}
      </Form>
    </>
  );
};

export default Demo3;
