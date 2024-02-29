import { Button } from 'antd';
import betterMock from 'better-mock';
import type { LFormItemActionRef } from 'lighting-design';
import { LForm, LFormItemSelect } from 'lighting-design';
import { useRef } from 'react';
import { awaitTime } from '../../_test';

const Demo2 = () => {
  const [form] = LForm.useForm();
  const actionRef = useRef<LFormItemActionRef>();

  return (
    <>
      <LForm form={form} labelWidth={80} submitter={{ buttonAlign: 80 }}>
        <LFormItemSelect
          label="select1"
          name="select1"
          required
          actionRef={actionRef}
          autoRequest={false}
          request={async () => {
            await awaitTime(500);
            const opts1 = betterMock.mock({ 'list|6': [{ label: '@city', value: '@id' }] }).list;
            return opts1;
          }}
        />
      </LForm>
      <br />
      <div>
        <Button type="primary" onClick={() => actionRef.current?.run()}>
          点击请求获取数据
        </Button>
      </div>
    </>
  );
};
export default Demo2;
