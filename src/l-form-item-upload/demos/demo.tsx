// import { UploadOutlined } from '@ant-design/icons';
// import type { UploadProps } from 'antd';
// import { Button, message, Upload } from 'antd';
// import React from 'react';

// const props: UploadProps = {
//   name: 'file',
//   action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
//   headers: {
//     authorization: 'authorization-text',
//   },
//   onChange(info) {
//     console.log(info.file.status);
//     if (info.file.status === 'error') {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//     if (info.file.status !== 'uploading') {
//     }
//     if (info.file.status === 'done') {
//       message.success(`${info.file.name} file uploaded successfully`);
//     }
//   },
//   onDownload(file) {
//     console.log('===onDownload==>');
//   },
//   onPreview(file) {
//     console.log('===onPreview==>');
//   },
//   onRemove(file) {
//     console.log('===onRemove==>');
//   },
// };

// const App: React.FC = () => (
//   <Upload {...props} listType="picture-circle" showUploadList={false}>
//     <Button icon={<UploadOutlined />}>Click to Upload</Button>
//   </Upload>
// );

// export default App;
import { Button } from 'antd';
import { LForm, LFormItemUpload } from 'lighting-design';
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
        name="time1"
        label="上传"
        required
        alignItems="center"
        uploadProps={{
          children: <Button>上传</Button>,
        }}
      />
    </LForm>
  );
};

export default App;
