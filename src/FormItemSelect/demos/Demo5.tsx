import type { SelectProps } from 'antd';
import { Tag } from 'antd';
import Mock from 'better-mock';
import { LForm, LFormItemSelect } from 'lighting-design';

const opts1 = Mock.mock({ 'list|10': [{ label: '@cname', value: '@id' }] }).list;

type TagRender = SelectProps['tagRender'];
const tagRender: TagRender = (props) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
};

const Demo1 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      form={form}
      labelWidth={180}
      submitter={{ buttonAlign: 'center' }}
      onFinish={(vals) => {
        console.log('onFinish', vals);
      }}
    >
      <LFormItemSelect
        label="selectProps使用"
        name="select1"
        required
        options={opts1}
        mode="multiple"
        selectProps={{ tagRender, popupClassName: 'mydsasdsada999' }}
      />
    </LForm>
  );
};
export default Demo1;
