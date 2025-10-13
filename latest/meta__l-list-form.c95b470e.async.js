"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[4693],{89698:function(u,t,n){var i;n.r(t),n.d(t,{demos:function(){return I}});var h=n(90228),o=n.n(h),L=n(87999),p=n.n(L),a=n(75271),g=n(26253),c=n(48402),f=n(69243),I={"l-list-form-demo-demo1":{component:a.memo(a.lazy(function(){return n.e(329).then(n.bind(n,87785))})),asset:{type:"BLOCK",id:"l-list-form-demo-demo1",refAtomIds:["l-list-form"],dependencies:{"index.tsx":{type:"FILE",value:n(42890).Z},"@ant-design/icons":{type:"NPM",value:"6.0.0"},antd:{type:"NPM",value:"5.27.3"},"lighting-design":{type:"NPM",value:"3.0.0"}},entry:"index.tsx"},context:{"@ant-design/icons":g,antd:c,"lighting-design":f},renderOpts:{compile:function(){var s=p()(o()().mark(function m(){var l,d=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(8816).then(n.bind(n,28816));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,d));case 3:case"end":return e.stop()}},m)}));function r(){return s.apply(this,arguments)}return r}()}},"l-list-form-demo-demo2":{component:a.memo(a.lazy(function(){return n.e(329).then(n.bind(n,99318))})),asset:{type:"BLOCK",id:"l-list-form-demo-demo2",refAtomIds:["l-list-form"],dependencies:{"index.tsx":{type:"FILE",value:n(66970).Z},"@ant-design/icons":{type:"NPM",value:"6.0.0"},antd:{type:"NPM",value:"5.27.3"},"lighting-design":{type:"NPM",value:"3.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@ant-design/icons":g,antd:c,"lighting-design":f,react:i||(i=n.t(a,2))},renderOpts:{compile:function(){var s=p()(o()().mark(function m(){var l,d=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(8816).then(n.bind(n,28816));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,d));case 3:case"end":return e.stop()}},m)}));function r(){return s.apply(this,arguments)}return r}()}},"l-list-form-demo-demo3":{component:a.memo(a.lazy(function(){return n.e(329).then(n.bind(n,50272))})),asset:{type:"BLOCK",id:"l-list-form-demo-demo3",refAtomIds:["l-list-form"],dependencies:{"index.tsx":{type:"FILE",value:n(83053).Z},"@ant-design/icons":{type:"NPM",value:"6.0.0"},antd:{type:"NPM",value:"5.27.3"},"lighting-design":{type:"NPM",value:"3.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@ant-design/icons":g,antd:c,"lighting-design":f,react:i||(i=n.t(a,2))},renderOpts:{compile:function(){var s=p()(o()().mark(function m(){var l,d=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(8816).then(n.bind(n,28816));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,d));case 3:case"end":return e.stop()}},m)}));function r(){return s.apply(this,arguments)}return r}()}}}},97884:function(u,t,n){n.r(t),n.d(t,{texts:function(){return i}});const i=[{value:"LFormItem \u6570\u7EC4\u5316\u7BA1\u7406\uFF0C\u63D0\u4F9B\u8F6C\u6362\u3001\u6821\u9A8C\u7B49\u529F\u80FD\u3002",paraId:0,tocIndex:0},{value:"LListForm",paraId:1},{value:" \u4E0B\u7684\u5B57\u6BB5\u4E0D\u5E94\u8BE5\u914D\u7F6E ",paraId:1},{value:"initialValue\uFF0C\u4F60\u59CB\u7EC8\u5E94\u8BE5\u901A\u8FC7",paraId:1},{value:" ",paraId:1},{value:"LLoginForm",paraId:1},{value:" \u7684 ",paraId:1},{value:"initialValue",paraId:1},{value:" \u6216\u8005 ",paraId:1},{value:"LForm",paraId:1},{value:" \u7684 ",paraId:1},{value:"initialValues",paraId:1},{value:" \u6765\u914D\u7F6E\u3002",paraId:1},{value:"\u5D4C\u5957\u8868\u5355\u5B57\u6BB5\u9700\u8981\u5BF9 ",paraId:2},{value:"field",paraId:2},{value:" \u8FDB\u884C\u62D3\u5C55\uFF0C\u5C06 ",paraId:2},{value:"field.name",paraId:2},{value:" \u5E94\u7528\u4E8E\u63A7\u5236\u5B57\u6BB5\u3002",paraId:2},{value:`import { LLoginForm } from 'lighting-design';
`,paraId:3},{value:"\u540C antd \u7684 ",paraId:4},{value:"Form.List",paraId:4},{value:`<LListForm>
  {(fields) =>
    fields.map((field) => (
      <LFormItem {...field}>
        <Input />
      </LFormItem>
    ))
  }
</LListForm>
`,paraId:5}]},42890:function(u,t){t.Z=`import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { LForm, LFormItem, LFormItemInput, LListForm } from 'lighting-design';

const Demo1 = () => {
  return (
    <div>
      <LForm
        onFinish={(values) => {
          console.log('values', values);
        }}
        submitter={{ position: 'center' }}
        // initialValues={{
        //   input: '\u540D\u5B57',
        //   list: [
        //     { first: '345', last: '57' },
        //     { first: '687', last: '3278' },
        //   ],
        // }}
      >
        <LFormItemInput name="input" label="\u5176\u4ED6\u8F93\u5165\u7684\u5B57\u6BB5" />

        <LListForm name="list">
          {(fields, { add, remove, move }, { errors }) => {
            return (
              <>
                {fields.map((field) => {
                  const { key, name, ...restField } = field;
                  console.log('==field====>', field);
                  return (
                    <LFormItem label="\u540D\u5B57" key={key} style={{ marginBottom: 0 }}>
                      <Space key={key} style={{ display: 'flex', width: '100%' }} align="baseline">
                        <LFormItemInput {...restField} placeholder="\u8BF7\u8F93\u5165 First \u540D" required name={[name, 'first']} />
                        <LFormItemInput {...restField} placeholder="\u8BF7\u8F93\u5165 Last \u540D" required name={[name, 'last']} />

                        <MinusCircleOutlined onClick={() => remove(name)} />
                        <PlusOutlined onClick={() => add()} />
                      </Space>
                    </LFormItem>
                  );
                })}

                <LFormItem>
                  <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                    \u589E\u52A0\u4E00\u9879
                  </Button>
                </LFormItem>
              </>
            );
          }}
        </LListForm>
      </LForm>
    </div>
  );
};

export default Demo1;
`},66970:function(u,t){t.Z=`import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { LForm, LFormItem, LFormItemInput, LListForm } from 'lighting-design';
import React from 'react';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

const Demo2: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };

  return (
    <LForm
      name="dynamic_form_item"
      submitter={{ position: 'center' }}
      // {...formItemLayoutWithOutLabel}
      onFinish={onFinish}
      // style={{ maxWidth: 600 }}
    >
      <LListForm
        name="names"
        rules={[
          {
            validator: async (_, names) => {
              if (!names || names.length < 2) {
                return Promise.reject(new Error('\u81F3\u5C11\u9700\u8981\u4E24\u9879!'));
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field) => (
              <LFormItem key={field.key} label="Label">
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <LFormItemInput
                    {...field}
                    validateTrigger={['onChange', 'onBlur']}
                    style={{
                      width: '95%',
                      marginBottom: 0,
                    }}
                  />

                  {fields.length > 1 ? (
                    <MinusCircleOutlined className="dynamic-delete-button" onClick={() => remove(field.name)} />
                  ) : null}
                </div>
              </LFormItem>
            ))}

            <LFormItem>
              <Button block type="dashed" onClick={() => add()} icon={<PlusOutlined />} style={{ marginBottom: 20 }}>
                \u589E\u52A0\u4E00\u9879
              </Button>
              <Button block type="dashed" onClick={() => add('\u6DFB\u52A0\u5728\u5934\u90E8\u7684\u6570\u636E', 0)} icon={<PlusOutlined />}>
                \u589E\u52A0\u4E00\u9879\u5728\u5934\u90E8\uFF0C\u5E76\u6709\u9ED8\u8BA4\u503C
              </Button>
              <LForm.ErrorList errors={errors} />
            </LFormItem>
          </>
        )}
      </LListForm>
    </LForm>
  );
};

export default Demo2;
`},83053:function(u,t){t.Z=`import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Space } from 'antd';
import { LForm, LFormItem, LFormItemInput, LFormItemSelect, LListForm } from 'lighting-design';
import React from 'react';

const sights = {
  Beijing: [
    { label: '\u5317\u4EAC1', value: 'Beijing1' },
    { label: '\u5317\u4EAC2', value: 'Beijing2' },
    { label: '\u5317\u4EAC3', value: 'Beijing3' },
  ],
  Shanghai: [
    { label: '\u4E0A\u6D771', value: 'Shanghai1' },
    { label: '\u4E0A\u6D772', value: 'Shanghai2' },
    { label: '\u4E0A\u6D773', value: 'Shanghai3' },
  ],
  Chongqing: [
    { label: '\u91CD\u5E861', value: 'chongqing1' },
    { label: '\u91CD\u5E862', value: 'chongqing2' },
    { label: '\u91CD\u5E863', value: 'chongqing3' },
  ],
};

type SightsKeys = keyof typeof sights;

const App: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };

  return (
    <LForm
      form={form}
      name="dynamic_form_complex"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      autoComplete="off"
      onValuesChange={(changedValues: any, values: any) => {
        console.log('changedValues', changedValues);
        console.log('values', values);
      }}
    >
      <LFormItemSelect
        name="area"
        label="\u533A\u57DF"
        options={[
          { label: '\u5317\u4EAC', value: 'Beijing' },
          { label: '\u4E0A\u6D77', value: 'Shanghai' },
          { label: '\u91CD\u5E86', value: 'Chongqing' },
        ]}
        selectProps={{
          onChange(val) {
            console.log('val', val);
          },
        }}
      />

      <LListForm name="sights">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <Space key={field.key} align="baseline">
                <LFormItem
                  noStyle
                  shouldUpdate={(prevValues, curValues) =>
                    prevValues.area !== curValues.area || prevValues.sights !== curValues.sights
                  }
                >
                  {() => (
                    <LFormItemSelect
                      {...field}
                      required
                      label="\u666F\u70B9"
                      disabled={!form.getFieldValue('area')}
                      name={[field.name, 'sight']}
                      options={sights[form.getFieldValue('area') as SightsKeys] || []}
                    />
                  )}
                </LFormItem>
                <LFormItemInput {...field} label="\u4EF7\u683C" required name={[field.name, 'price']} />

                <MinusCircleOutlined onClick={() => remove(field.name)} />
              </Space>
            ))}

            <LFormItem>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                \u65B0\u589E\u666F\u70B9
              </Button>
            </LFormItem>
          </>
        )}
      </LListForm>
    </LForm>
  );
};

export default App;
`}}]);
