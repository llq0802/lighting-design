import { LForm, LFormItemUpload } from 'lighting-design';
import { sleep } from 'lighting-design/test';
import React from 'react';

type FieldType = {
  time1?: string;
};

const App: React.FC = () => {
  const [form] = LForm.useForm<FieldType>();
  return (
    <LForm<FieldType>
      labelWidth={100}
      form={form}
      onFinish={(values) => {
        console.log('===onFinish===', values);
      }}
    >
      <LFormItemUpload
        // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        name="time1"
        label="上传"
        required
        onUpload={async () => {
          await sleep(10000);
          return {
            thumbUrl: 'h111',
          };
        }}
        // uploadType="dragger"
        // initialValue={[
        //   {
        //     name: 'image.png',
        //     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        //   },
        // ]}
      />
    </LForm>
  );
};

export default App;
