import { Button, Form } from 'antd';
import { LFormItemInput, LFormItemRadio } from 'lighting-design';
import { useState } from 'react';

const Demo1 = () => {
  const [form] = Form.useForm();
  const [opts, setOpts] = useState([]);

  return (
    <Form name="LFormItemSelect" form={form}>
      <LFormItemInput
        name="userName"
        label="名字"
        required
        tooltip="禁止空格"
        disabledWhiteSpace
        alignItems="end"
        contentAfter={<div>后面</div>}
        inputProps={{ placeholder: '请输入名字' }}
      />
      <LFormItemRadio
        label="选择"
        name="select"
        all
        required
        // dependencies={['userName']}
        // disabled
        // debounceTime={300}
        // request={async (params) => {
        //   console.log(' params', params);
        //   // if (!params) return [];
        //   return [
        //     { label: 'open', value: 'open' },
        //     { label: 'closed', value: 'closed' },
        //     { label: 'processing', value: 'processing' },
        //   ];
        // }}
        options={[
          { label: 'Unresolved', value: 'open' },
          { label: 'Resolved', value: 'closed' },
          { label: 'Resolving', value: 'processing' },
        ]}
      />

      <Button
        onClick={() => {
          form.validateFields().then((res) => {
            console.log(' res ', res);
          });
        }}
      >
        验证
      </Button>
      <Button
        onClick={() => {
          console.log(' form.getFieldsValue()  ', form.getFieldsValue());
        }}
      >
        获取
      </Button>
      <Button
        onClick={() => {
          setOpts([]);
        }}
      >
        强制更新
      </Button>
    </Form>
  );
};
export default Demo1;
