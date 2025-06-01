import { LFileViewer, LForm, LFormItemUpload } from 'lighting-design';
import { useRef, useState } from 'react';
import { upload } from './services';
const Demo3 = () => {
  const [form] = LForm.useForm();
  const [visible, setVisible] = useState(false);
  const urlsRef = useRef<string[]>([]);
  // const previewCurrentRef = useRef(0);

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
          name="image-1"
          label="图片上传"
          uploadType="image"
          onUpload={upload}
          uploadProps={{
            name: 'fileName',
            async previewFile(file) {
              // 解决文件较大时会卡顿  file.thumbUrl 不再是base64 而是blob地址
              return URL.createObjectURL(file);
            },
            onPreview(file) {
              // console.log('file', file);
              // const fileList = form.getFieldValue('image-1');
              // previewCurrentRef.current = fileList.findIndex((item) => item.uid === file.uid);
              // urlsRef.current = form
              //   ?.getFieldValue('image-1')
              //   ?.map((item) => item.thumbUrl || item.url || item.previewUrl);
              urlsRef.current.unshift(
                file.thumbUrl || file.url || file.preview || file.response?.url,
              );

              setVisible(true);
            },
          }}
        />
      </LForm>
      {/* 方式一*/}
      <LFileViewer
        fileType="image"
        url={urlsRef.current}
        open={visible}
        onOpenChange={setVisible}
      />

      {/* 方式二 */}
      {/* <div style={{ display: 'none' }}>
        <Image.PreviewGroup
          preview={{
            visible,
            onVisibleChange: (open) => setVisible(open),
            current: previewCurrentRef.current,
          }}
        >
          {form.getFieldValue('image-1')?.map((item) => {
            return <Image src={item.preview || item.thumbUrl || item.url} key={item.uid} />;
          })}
        </Image.PreviewGroup>
      </div> */}
    </>
  );
};
export default Demo3;
