import { Select } from 'antd';
import { LForm, LFormItem } from 'lighting-design';
import AgeSelect from './components/AgeSelect';
import DepInout from './components/DepInout';

const Demo4 = () => {
  const [form] = LForm.useForm<{ name: string; age: number }>();

  return (
    <>
      <LForm
        labelCol={{ flex: '90px' }}
        form={form}
        submitter={{ buttonAlign: 90 }}
      >
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
          contentAlignItems="end"
          contentAfter={<div>岁</div>}
        >
          <AgeSelect />
        </LFormItem>

        <LFormItem
          label="信息"
          name="l-info"
          dependencies={['sex']}
          className="lightd-form-item-className1"
          contentClassName="lightd-form-item-contentClassName1"
          contentProps={{ placeholder: '选择性别为男时才不会禁用' }}
        >
          {/* 子组件会接收到dependencies依赖项的值 */}
          <DepInout />

          {/* 函数写法 */}
          {/* {(form) => {
            // form.getFieldsValue(['sex']) 自定义更新
            return <DepInout />;
          }} */}
        </LFormItem>
      </LForm>
    </>
  );
};

export default Demo4;
