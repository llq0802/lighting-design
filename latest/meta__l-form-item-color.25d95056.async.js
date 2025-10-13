"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[6595],{2915:function(l,n,e){e.r(n),e.d(n,{demos:function(){return i}});var a=e(90228),r=e.n(a),s=e(87999),m=e.n(s),t=e(75271),u=e(69243),i={"l-form-item-color-demo-demo1":{component:t.memo(t.lazy(function(){return e.e(2226).then(e.bind(e,27928))})),asset:{type:"BLOCK",id:"l-form-item-color-demo-demo1",refAtomIds:["l-form-item-color"],dependencies:{"index.tsx":{type:"FILE",value:e(94510).Z},"lighting-design":{type:"NPM",value:"3.0.0"}},entry:"index.tsx"},context:{"lighting-design":u},renderOpts:{compile:function(){var I=m()(r()().mark(function c(){var d,p=arguments;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(8816).then(e.bind(e,28816));case 2:return o.abrupt("return",(d=o.sent).default.apply(d,p));case 3:case"end":return o.stop()}},c)}));function _(){return I.apply(this,arguments)}return _}()}}}},25650:function(l,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"\u989C\u8272\u9009\u62E9",paraId:0,tocIndex:0},{value:"\u7279\u70B9",paraId:1,tocIndex:0},{value:"\u652F\u6301\u591A\u79CD\u6A21\u5F0F\u7684\u989C\u8272\u9009\u62E9",paraId:2,tocIndex:0},{value:`import { LFormItemColor } from 'lighting-design';
`,paraId:3,tocIndex:2},{value:"\u9664\u4E86\u4EE5\u4E0B\u53C2\u6570\uFF0C\u5176\u4F59\u548C ",paraId:4,tocIndex:2},{value:"LFormItem",paraId:5,tocIndex:2},{value:" \u4E00\u6837\u3002",paraId:4,tocIndex:2},{value:"\u53C2\u6570",paraId:6,tocIndex:2},{value:"\u8BF4\u660E",paraId:6,tocIndex:2},{value:"\u7C7B\u578B",paraId:6,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:2},{value:"showText",paraId:6,tocIndex:2},{value:"\u663E\u793A\u989C\u8272\u6587\u672C",paraId:6,tocIndex:2},{value:"boolean | (color: Color) => React.ReactNode",paraId:6,tocIndex:2},{value:"-",paraId:6,tocIndex:2},{value:"colorFormat",paraId:6,tocIndex:2},{value:"\u989C\u8272\u683C\u5F0F",paraId:6,tocIndex:2},{value:"rgb | hex | hsb",paraId:6,tocIndex:2},{value:"hex",paraId:6,tocIndex:2},{value:"colorProps",paraId:6,tocIndex:2},{value:"ColorPicker",paraId:6,tocIndex:2},{value:"\u7EC4\u4EF6 Props",paraId:6,tocIndex:2},{value:"ColorProps",paraId:6,tocIndex:2},{value:"-",paraId:6,tocIndex:2}]},94510:function(l,n){n.Z=`import { LForm, LFormItemColor } from 'lighting-design';

const Demo1 = () => {
  const [form] = LForm.useForm();
  return (
    <LForm
      form={form}
      onFinish={(values) => {
        console.log('==values====>', values);
      }}
    >
      <LFormItemColor label="\u989C\u8272\u9009\u62E91" name="color1" required showText colorFormat="hsb" />
      <LFormItemColor label="\u989C\u8272\u9009\u62E92" name="color2" required colorFormat="rgb" />
      <LFormItemColor label="\u989C\u8272\u9009\u62E93" name="color3" required initialValue="#996060" />
      <LFormItemColor disabled label="\u7981\u7528\u9009\u62E9" name="color4" />
    </LForm>
  );
};
export default Demo1;
`}}]);
