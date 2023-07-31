import { LFileViewer, LForm, LFormItemUpload } from 'lighting-design';
import { useState } from 'react';
import { upload } from './services';
const Demo3 = () => {
  const [form] = LForm.useForm();
  const [visible, setVisible] = useState(false);

  // const previewCurrentRef = useRef(0);

  console.log(form.getFieldValue('image'));
  const urls = form
    .getFieldValue('image')
    ?.map((item) => item.thumbUrl || item.url || item.previewUrl);

  return (
    <>
      <LForm
        labelWidth={90}
        submitter={{ buttonAlign: 90 }}
        form={form}
        onFinish={(values) => {
          console.log('values', values);
        }}
      >
        <LFormItemUpload
          name="image3"
          label="图片上传"
          uploadType="image"
          onUpload={upload}
          uploadProps={{
            name: 'fileName',
            async previewFile(file) {
              // 解决文件较大时会卡顿
              return URL.createObjectURL(file);
            },
            onPreview(file) {
              // const fileList = form.getFieldValue('image');
              // previewCurrentRef.current = fileList.findIndex((item) => item.uid === file.uid);
              setVisible(true);
            },
          }}
        />
      </LForm>
      <LFileViewer
        fileType="image"
        url={urls}
        open={visible}
        onOpenChange={setVisible}
      />
      {/* <div style={{ display: 'none' }}>
        <Image.PreviewGroup
          preview={{
            visible,
            onVisibleChange: (open) => setVisible(open),
            current: previewCurrentRef.current,
          }}
        >
          {form.getFieldValue('image')?.map((item) => {
            return <Image src={item.preview || item.thumbUrl || item.url} key={item.uid} />;
          })}
        </Image.PreviewGroup>
      </div> */}
    </>
  );
};
export default Demo3;
