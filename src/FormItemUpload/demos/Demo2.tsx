import { LForm, LFormItemUpload } from 'lighting-design';
import { upload } from './services';
import './styles.less';

const Demo2 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      labelWidth={90}
      submitter={{ buttonAlign: 90 }}
      form={form}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <LFormItemUpload
        name="default2"
        label="默认上传"
        accept=".jpg, .jpeg"
        onUpload={upload}
        buttonProps={{
          type: 'primary',
        }}
        uploadProps={{ name: 'fileName' }}
      />

      <LFormItemUpload
        required
        onUpload={upload}
        uploadType="avatar2"
        name="avatar"
        label="头像上传"
        uploadProps={{
          className: 'my-avatar',
          name: 'fileName',
        }}
      />

      <LFormItemUpload
        name="image2"
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
export default Demo2;
