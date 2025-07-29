import Mock from 'better-mock';
import { LForm, LFormItemSelect } from 'lighting-design';
import { sleep } from 'lighting-design/test';
import React from 'react';

const options = Mock.mock({ 'list|10': [{ label: '@cname', value: '@id' }] }).list;
const opts2 = Mock.mock({ 'list|20': [{ code: '@id', city: '@city' }] }).list;

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
      <LFormItemSelect label="基础" name="select1" options={options} />
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
        optionFilterProp="city"
      />
      <LFormItemSelect
        label="request"
        name="select6"
        request={async () => {
          await sleep();
          return Mock.mock({ 'list|6': [{ label: '@city', value: '@id' }] }).list;
        }}
      />
    </LForm>
  );
};

export default App;
