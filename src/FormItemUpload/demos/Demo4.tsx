import { LForm, LFormItemUpload } from 'lighting-design';
import { upload } from './services';

const Demo4 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      name="LFormItemUpload"
      labelWidth={90}
      submitter={{ buttonAlign: 90 }}
      form={form}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <LFormItemUpload
        isCrop
        required
        onUpload={upload}
        uploadType="avatar"
        name="avatar"
        label="头像上传"
        uploadProps={{
          name: 'fileName',
        }}
      />

      <LFormItemUpload
        isCrop
        name="image"
        label="图片上传"
        uploadType="image"
        onUpload={upload}
        uploadProps={{
          name: 'fileName',
          async previewFile(file) {
            // 解决文件较大时会卡顿
            return URL.createObjectURL(file);
          },
        }}
      />
    </LForm>
  );
};
export default Demo4;
