import { Button, Form } from 'antd';
import { LFormItemDate } from 'lighting-design';
import LFormItemUpload from '..';

const Demo1 = () => {
  const [form] = Form.useForm();

  return (
    <Form name="LFormItemSelect" form={form}>
      <LFormItemDate label="日期选择" name="date1" required disabledDateAfter={1} />

      {/* action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76', */}
      {/* <UploadWrapper action="https://www.mocky.io/v2/5cc8019d300000980a055e76" accept=".jpg">
        <Button>Click to Upload</Button>
      </UploadWrapper> */}

      {/* <UploadAvatar
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        // onChange={(info: UploadChangeParam) => {
        //   const { file, fileList } = info;
        //   console.log('UploadAvatar-onChange', file, fileList);
        // }
      /> */}

      <LFormItemUpload
        name="avatar"
        label="头像上传"
        // required
        accept=".jpg, .jpeg"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        // normalize={(value, prevValue, prevValues) => {
        //   console.log('normalize ', value, prevValue, prevValues);
        //   return value.map((item) => item.name);
        // }}
        initialValue={[
          {
            name: 'meinv',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
        ]}
        required
        rules={[
          {
            validator(rules, value) {
              console.log('value ', value);
              let errMsg = '';
              if (!value || (Array.isArray(value) && value.length <= 0)) {
                errMsg = '请上传';
              }
              if (errMsg) {
                return Promise.reject(errMsg);
              }
              return Promise.resolve();
            },
          },
        ]}
      />
      <LFormItemUpload
        name="image"
        label="图片上传"
        required
        uploadType="image"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        initialValue={[
          {
            name: 'meinv',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
        ]}
        rules={[
          {
            validator(rules, value) {
              console.log('value ', value);
              let errMsg = '';
              if (!value || (Array.isArray(value) && value.length <= 0)) {
                errMsg = '请上传';
              }
              if (errMsg) {
                return Promise.reject(errMsg);
              }
              return Promise.resolve();
            },
          },
        ]}
      />
      <LFormItemUpload
        uploadType="dragger"
        name="dragger"
        label="拖动上传"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        // normalize={(value, prevValue, prevValues) => {
        //   console.log('normalize ', value, prevValue, prevValues);
        //   return value.map((item) => item.name);
        // }}
        initialValue={[
          {
            name: 'meinv',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
        ]}
      />

      <br />
      <br />
      <Button
        onClick={() => {
          form.validateFields().then((res) => {
            console.log(' res ', res);
          });
        }}
      >
        验证
      </Button>
      <Button
        onClick={() => {
          console.log(' form.getFieldsValue()  ', form.getFieldsValue());
        }}
      >
        获取
      </Button>
    </Form>
  );
};
export default Demo1;
