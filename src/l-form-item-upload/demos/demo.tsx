import { Button } from 'antd';
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
        alignItems="center"
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
        renderUploadChildren={(opts) => {
          return <Button disabled>upload</Button>;
        }}
      />
    </LForm>
  );
};

export default App;

// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
// import { Button, Form, Select, Space, Upload } from 'antd';
// import React, { useState } from 'react';

// const formItemLayout = {
//   labelCol: { span: 6 },
//   wrapperCol: { span: 14 },
// };

// const normFile = (e: any) => {
//   console.log('Upload event:', e);
//   if (Array.isArray(e)) {
//     return e;
//   }
//   return e?.fileList;
// };

// const onFinish = (values: any) => {
//   console.log('Received values of form: ', values);
// };

// const App: React.FC = () => {
//   const [loading, setLoading] = useState(false);

//   const uploadButton = (
//     <button style={{ border: 0, background: 'none' }} type="button">
//       {loading ? <LoadingOutlined /> : <PlusOutlined />}
//       <div style={{ marginTop: 8 }}>上传</div>
//     </button>
//   );
//   return (
//     <Form
//       name="validate_other"
//       {...formItemLayout}
//       onFinish={onFinish}
//       initialValues={{
//         'input-number': 3,
//         'checkbox-group': ['A', 'B'],
//         rate: 3.5,
//         'color-picker': null,
//       }}
//       style={{ maxWidth: 600 }}
//     >
//       <Form.Item
//         name="upload"
//         label="Upload"
//         valuePropName="fileList"
//         getValueFromEvent={normFile}
//         initialValue={[
//           {
//             name: 'image.png',
//             src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//           },
//         ]}
//       >
//         <Upload
//           showUploadList={false}
//           name="logo"
//           action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
//           listType="picture-card"
//           maxCount={1}
//           onChange={(info) => {
//             {
//               if (info.file.status === 'uploading') {
//                 setLoading(true);
//               }
//               if (info.file.status === 'done') {
//                 setLoading(false);
//               }
//               if (info.file.status === 'error') {
//                 setLoading(false);
//               }
//             }
//           }}
//         >
//           {uploadButton}
//         </Upload>
//       </Form.Item>
//       <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
//         <Space>
//           <Button type="primary" htmlType="submit">
//             Submit
//           </Button>
//           <Button htmlType="reset">reset</Button>
//         </Space>
//       </Form.Item>
//     </Form>
//   );
// };

// export default App;
