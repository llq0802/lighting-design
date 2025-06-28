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
        uploadType="image"
        isSerial
        maxCount={5}
        onUpload={async () => {
          // 随机生成 100 到 5000 的数字
          const time = Math.floor(Math.random() * (3000 - 100 + 1) + 100);
          await sleep(5000);
          return {
            thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
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
