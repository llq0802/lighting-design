"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[8248],{27609:function(d,a,e){e.r(a),e.d(a,{demos:function(){return s}});var r=e(90228),t=e.n(r),o=e(87999),I=e.n(o),l=e(75271),p=e(69243),s={"l-form-item-number-range-demo-demo":{component:l.memo(l.lazy(function(){return e.e(5411).then(e.bind(e,4359))})),asset:{type:"BLOCK",id:"l-form-item-number-range-demo-demo",refAtomIds:["l-form-item-number-range"],dependencies:{"index.tsx":{type:"FILE",value:e(4065).Z},"lighting-design":{type:"NPM",value:"3.0.0"}},entry:"index.tsx"},context:{"lighting-design":p},renderOpts:{compile:function(){var m=I()(t()().mark(function v(){var u,c=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(8816).then(e.bind(e,28816));case 2:return n.abrupt("return",(u=n.sent).default.apply(u,c));case 3:case"end":return n.stop()}},v)}));function i(){return m.apply(this,arguments)}return i}()}}}},26844:function(d,a,e){e.r(a),e.d(a,{texts:function(){return r}});const r=[{value:"\u6570\u5B57\u8303\u56F4\u8F93\u5165\u6846",paraId:0,tocIndex:0},{value:"\u7279\u70B9",paraId:1,tocIndex:0},{value:"\u5931\u7126\u81EA\u52A8\u4EA4\u6362\u6570\u503C\u5927\u5C0F",paraId:2,tocIndex:0},{value:`import { LFormItemNumberRange } from 'lighting-design';
`,paraId:3,tocIndex:3},{value:"\u9664\u4E86\u4EE5\u4E0B\u53C2\u6570\uFF0C\u5176\u4F59\u548C ",paraId:4,tocIndex:3},{value:"LFormItem",paraId:5,tocIndex:3},{value:" \u4E00\u6837\u3002",paraId:4,tocIndex:3},{value:"\u53C2\u6570",paraId:6,tocIndex:3},{value:"\u8BF4\u660E",paraId:6,tocIndex:3},{value:"\u7C7B\u578B",paraId:6,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:3},{value:"placeholder",paraId:6,tocIndex:3},{value:"placeholder",paraId:6,tocIndex:3},{value:"[string,string]",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"separator",paraId:6,tocIndex:3},{value:"\u4E2D\u95F4\u8FDE\u63A5\u7B26\u53F7",paraId:6,tocIndex:3},{value:"string",paraId:6,tocIndex:3},{value:"'~'",paraId:6,tocIndex:3},{value:"separatorWidth",paraId:6,tocIndex:3},{value:"\u4E2D\u95F4\u8FDE\u63A5\u7B26\u53F7\u7684\u5BBD\u5EA6",paraId:6,tocIndex:3},{value:"number|string",paraId:6,tocIndex:3},{value:"30",paraId:6,tocIndex:3},{value:"separatorStyle",paraId:6,tocIndex:3},{value:"\u4E2D\u95F4\u5143\u7D20\u7684\u6837\u5F0F",paraId:6,tocIndex:3},{value:"CSSProperties",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"disabled",paraId:6,tocIndex:3},{value:"InputNumberProps['disabled']",paraId:6,tocIndex:3},{value:"InputNumberProps['disabled']",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"variant",paraId:6,tocIndex:3},{value:"InputNumberProps['variant']",paraId:6,tocIndex:3},{value:"InputNumberProps['variant']",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"size",paraId:6,tocIndex:3},{value:"InputNumberProps['size'",paraId:6,tocIndex:3},{value:"]",paraId:6,tocIndex:3},{value:"InputNumberProps['size']",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"leftNumberProps",paraId:6,tocIndex:3},{value:"\u5DE6\u8FB9",paraId:6,tocIndex:3},{value:"InputNumber",paraId:6,tocIndex:3},{value:"\u7684\u5C5E\u6027",paraId:6,tocIndex:3},{value:"InputNumberProps",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"rightNumberProps",paraId:6,tocIndex:3},{value:"\u53F3\u8FB9",paraId:6,tocIndex:3},{value:"InputNumber",paraId:6,tocIndex:3},{value:"\u7684\u5C5E\u6027",paraId:6,tocIndex:3},{value:"InputNumberProps",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3}]},4065:function(d,a){a.Z=`import { LForm, LFormItemNumberRange } from 'lighting-design';

export default function Demo() {
  return (
    <LForm
      labelWidth={120}
      initialValues={{
        numberRange4: [1, 99],
      }}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <LFormItemNumberRange
        label="\u6570\u5B571"
        name="numberRange1"
        required
        separatorWidth="4rem"
        placeholder={['\u8BF7\u8F93\u5165\u5DE6\u8FB9\u6570', '\u8BF7\u8F93\u5165\u53F3\u8FB9\u6570']}
      />
      <LFormItemNumberRange label="\u6570\u5B572" name="numberRange2" disabled />
      <LFormItemNumberRange label="\u6570\u5B574" name="numberRange4" />
      <LFormItemNumberRange variant="filled" label="\u6570\u5B573" name="numberRange3" separator="-" required />
    </LForm>
  );
}
`}}]);
