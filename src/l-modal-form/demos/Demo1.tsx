// import { Button, Form, Input, message } from 'antd';
// import { LForm, LFormItemRadio, LModalForm } from 'lighting-design';
// import { sleep } from '../../test';

// const Demo1 = () => {
//   const [form] = LForm.useForm();

//   return (
//     <div>
//       <LModalForm
//         form={form}
//         title="弹窗"
//         onFinish={async (values) => {
//           console.log('onFinish-values ', values);
//           await sleep();
//           message.success('提交成功');
//           return true;
//         }}
//         // initialValues={{
//         //   name: '刘德华1',
//         // }}
//         trigger={<Button type="primary">打开弹窗</Button>}
//       >
//         <Form.Item
//           name="title"
//           label="Title"
//           rules={[{ required: true, message: 'Please input the title of collection!' }]}
//         >
//           <Input />
//         </Form.Item>
//         <LFormItemRadio
//           label="单选2"
//           name="radio"
//           required
//           options={[
//             { label: 'AA', value: 'a' },
//             { label: 'BB', value: 'b' },
//             { label: 'CC', value: 'c' },
//           ]}
//         />

//         <Form.Item name="description" label="Description">
//           <Input type="textarea" />
//         </Form.Item>
//       </LModalForm>
//     </div>
//   );
// };

// export default Demo1;

import { Button, Form, Input, Modal } from 'antd';
import React, { useState } from 'react';

interface Values {
  title?: string;
  description?: string;
  modifier?: string;
}

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<Values>();
  const [open, setOpen] = useState(false);

  const onCreate = (values: Values) => {
    console.log('Received values of form: ', values);
    setFormValues(values);
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        New Collection
      </Button>
      <pre>{JSON.stringify(formValues, null, 2)}</pre>
      <Modal
        open={open}
        title="Create a new collection"
        okText="Create"
        cancelText="Cancel"
        okButtonProps={{ autoFocus: false }}
        focusTriggerAfterClose={false}
        onCancel={() => setOpen(false)}
        // onOk={() => form.submit()}
        destroyOnHidden
        modalRender={(dom) => (
          <Form
            layout="vertical"
            form={form}
            name="form_in_modal"
            initialValues={{ modifier: 'public' }}
            clearOnDestroy
            onFinish={(values) => onCreate(values)}
          >
            {dom}
          </Form>
        )}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please input the title of collection!' }]}
        >
          <Input />
        </Form.Item>
        {/* <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item> */}
      </Modal>
    </>
  );
};

export default App;
