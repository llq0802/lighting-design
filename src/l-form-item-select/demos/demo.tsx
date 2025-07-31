import { Tag, type SelectProps } from 'antd';
import Mock from 'better-mock';
import { LForm, LFormItemSelect } from 'lighting-design';
import { sleep } from 'lighting-design/test';
import React from 'react';

const options = Mock.mock({ 'list|15': [{ label: '@cname', value: '@id' }] }).list;
const opts2 = Mock.mock({ 'list|20': [{ code: '@id', city: '@city' }] }).list;

type TagRender = SelectProps['tagRender'];
const tagRender: TagRender = (props) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag onMouseDown={onPreventMouseDown} closable={closable} onClose={onClose} style={{ marginRight: 4 }} color="blue">
      {label}
    </Tag>
  );
};

type FieldType = {
  select1?: string;
  select2?: string;
  select3?: string;
  select4?: string;
  select5?: string;
  select6?: string;
};

const App: React.FC = () => {
  const [form] = LForm.useForm<FieldType>();

  return (
    <LForm<FieldType>
      labelWidth={120}
      form={form}
      onFinish={(values) => {
        console.log('===onFinish===', values);
      }}
    >
      <LFormItemSelect label="基础" name="select1" options={options} selectProps={{ allowClear: true }} />
      <LFormItemSelect label="可搜索" name="select2" required options={options} showSearch />
      <LFormItemSelect label="多选" name="select3" mode="multiple" required options={options} />
      <LFormItemSelect label="变形" name="select4" required variant="filled" options={options} />
      <LFormItemSelect
        showSearch
        label="fieldNames"
        name="select5"
        required
        options={opts2}
        fieldNames={{ label: 'city', value: 'code' }}
      />
      <LFormItemSelect
        label="request"
        name="select6"
        request={async () => {
          await sleep();
          return Mock.mock({ 'list|6': [{ label: '@city', value: '@id' }] }).list;
        }}
      />
      <LFormItemSelect
        label="selectProps使用"
        name="select7"
        options={options}
        mode="multiple"
        selectProps={{ tagRender, maxCount: 6, listHeight: 300 }}
      />
    </LForm>
  );
};

export default App;
