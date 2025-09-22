import { message } from 'antd';
import { LForm, LFormItemUpload } from 'lighting-design';
import React from 'react';

type FieldType = {
  upload1?: string;
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
      <LFormItemUpload action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload" name="upload1" label="default" />
      <LFormItemUpload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        name="upload2"
        label="avatar"
        uploadType="avatar"
        onError={(err) => {
          console.log('===onError===', err);
          message.error('上传失败');
        }}
        initialValue={[
          {
            name: 'avatar.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
        ]}
      />
      <LFormItemUpload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        name="upload3"
        label="image"
        uploadType="image"
        onError={(err) => {
          console.log('===onError===', err);
          message.error('上传失败');
        }}
      />
      <LFormItemUpload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        name="upload4"
        label="dragger"
        uploadType="dragger"
        onError={(err) => {
          console.log('===onError===', err);
          message.error('上传失败');
        }}
      />
    </LForm>
  );
};

export default App;
