import { LForm, LFormItemTextArea } from 'lighting-design';
import renderFieldWithPopover from '../../FormItemInput/demos/renderFieldWithPopover';

const Demo3 = () => {
  const [form] = LForm.useForm();

  return (
    <LForm
      isEnterSubmit={false}
      form={form}
      submitter={{ buttonAlign: 'center' }}
    >
      <LFormItemTextArea
        className="myLFormItemInput"
        name="TextArea1"
        label="备注1"
        required
      />
      <LFormItemTextArea
        name="TextArea12"
        label="备注2"
        required
        wrapperAlignItems="center"
        textAreaProps={{
          showCount: true,
          autoSize: { minRows: 4, maxRows: 6 },
        }}
      />

      <LFormItemTextArea
        label="自定义渲染"
        name="with-popover"
        tooltip="该方案可用于所有表单项"
        renderField={renderFieldWithPopover({
          content: '该方案可用于所有表单项',
        })}
      />
    </LForm>
  );
};
export default Demo3;
