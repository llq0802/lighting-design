import { useMount } from 'ahooks';
import Mock from 'better-mock';
import { LForm, LFormItemCheckbox, type LFormItemActionRef } from 'lighting-design';
import { sleep } from 'lighting-design/test';
import React, { useRef } from 'react';

const opts1 = Mock.mock({ 'list|4': [{ label: '@cname', value: '@id' }] }).list;
const opts2 = Mock.mock({ 'list|4': [{ code: '@id', city: '@city' }] }).list;

type FieldType = {
  checkbox1?: string;
  checkbox2?: string;
  checkbox3?: string;
  checkbox4?: string;
  checkbox5?: string;
  checkbox6?: string;
};

const App: React.FC = () => {
  const [form] = LForm.useForm<FieldType>();

  const actionRef = useRef<LFormItemActionRef>();

  useMount(() => {
    setTimeout(() => {
      actionRef.current?.run();
    }, 1000);
  });

  return (
    <LForm<FieldType>
      labelWidth={120}
      submitter={{
        position: 'center',
      }}
      form={form}
      onFinish={async (values) => {
        await sleep();
        console.log('===onFinish===', values);
      }}
    >
      <LFormItemCheckbox label="基础" name="checkbox1" required options={opts1} />
      <LFormItemCheckbox
        label="disabled"
        name="checkbox3"
        required
        options={[
          { label: '上班', value: '1', disabled: true },
          { label: '睡觉', value: '2' },
          { label: '摸鱼', value: '3' },
          { label: '打豆豆', value: '4' },
        ]}
      />
      <LFormItemCheckbox
        label="fieldNames"
        name="checkbox2"
        options={opts2}
        fieldNames={{ label: 'city', value: 'code' }}
      />
      <LFormItemCheckbox
        label="request"
        name="checkbox4"
        required
        request={async () => {
          await sleep();
          return Mock.mock({ 'list|4': [{ label: '@cname', value: '@id' }] }).list;
        }}
      />
      <LFormItemCheckbox
        label="checkboxProps"
        name="checkbox5"
        required
        options={Mock.mock({ 'list|4': [{ label: '@cname', value: '@id' }] }).list}
        checkboxProps={{ name: 'checkboxProps-checkbox5' }}
      />
      <LFormItemCheckbox
        actionRef={actionRef}
        label="actionRef"
        name="checkbox6"
        request={async () => {
          await sleep();
          return Mock.mock({ 'list|4': [{ label: '@cname', value: '@id' }] }).list;
        }}
        requestOptions={{
          cacheKey: 'LFormItemCheckbox-Demo1-1',
          manual: true,
        }}
      />
    </LForm>
  );
};

export default App;
