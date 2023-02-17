import { LForm, LFormItemUpload } from 'lighting-design';
import { upload } from './services';

const Demo1 = () => {
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
        required
        name="default"
        label="默认上传"
        accept=".jpg, .jpeg"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        uploadProps={{ name: 'fileName' }}
      />

      <LFormItemUpload
        required
        onUpload={upload}
        uploadType="avatar"
        name="avatar"
        label="头像上传"
        initialValue={[
          {
            name: 'meinv',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
        ]}
        uploadProps={{
          className: 'my-avatar',
          name: 'fileName',
        }}
      />

      <LFormItemUpload
        required
        name="image"
        label="图片上传"
        uploadType="image"
        onUpload={upload}
        // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        initialValue={[
          {
            name: 'meinv',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
        ]}
        uploadProps={{ name: 'fileName' }}
      />
      <LFormItemUpload
        required
        uploadType="dragger"
        name="dragger"
        label="拖动上传"
        uploadProps={{ name: 'fileName' }}
      />
    </LForm>
  );
};
export default Demo1;
