import { Button, Form } from 'antd';
import { LFormItemDate, LFormItemDateRange } from 'lighting-design';
import UploadWrapper from '../base/uploadWrapper';

const Demo1 = () => {
  const [form] = Form.useForm();

  return (
    <Form name="LFormItemSelect" form={form}>
      <LFormItemDate
        label="日期选择"
        name="date1"
        required
        disabledDateAfter={1}
        dateValueType="string"
      />
      <LFormItemDate label="月份选择" name="date3" required disabledDateBefore={1} picker="month" />
      <LFormItemDateRange
        label="range选择1"
        name="range1"
        required
        dateValueType="string"
        disabledDateAfter={1}
      />

      <UploadWrapper
        // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        accept=".jpg"
      >
        <Button>Click to Upload</Button>
      </UploadWrapper>

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
