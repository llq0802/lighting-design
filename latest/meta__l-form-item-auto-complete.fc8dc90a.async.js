"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[9761],{48285:function(l,n,e){var t;e.r(n),e.d(n,{demos:function(){return m}});var i=e(90228),d=e.n(i),u=e(87999),s=e.n(u),o=e(75271),p=e(69243),m={"l-form-item-auto-complete-demo-demo":{component:o.memo(o.lazy(function(){return e.e(5377).then(e.bind(e,5305))})),asset:{type:"BLOCK",id:"l-form-item-auto-complete-demo-demo",refAtomIds:["l-form-item-auto-complete"],dependencies:{"index.tsx":{type:"FILE",value:e(76298).Z},"lighting-design":{type:"NPM",value:"3.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"lighting-design":p,react:t||(t=e.t(o,2))},renderOpts:{compile:function(){var I=s()(d()().mark(function v(){var r,_=arguments;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(8816).then(e.bind(e,28816));case 2:return a.abrupt("return",(r=a.sent).default.apply(r,_));case 3:case"end":return a.stop()}},v)}));function c(){return I.apply(this,arguments)}return c}()}}}},86342:function(l,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"\u81EA\u52A8\u8054\u60F3\u8F93\u5165\u6846",paraId:0,tocIndex:0},{value:"\u7279\u70B9",paraId:1,tocIndex:0},{value:"\u652F\u6301\u81EA\u5B9A\u4E49\u8F93\u5165\u7EC4\u4EF6\u3002",paraId:2,tocIndex:0},{value:`import { LFormItemAutoComplete } from 'lighting-design';
`,paraId:3,tocIndex:2},{value:"\u5305\u542B ",paraId:4,tocIndex:2},{value:"LFormItemSelect",paraId:5,tocIndex:2},{value:" \u7684 ",paraId:4,tocIndex:2},{value:"request",paraId:4,tocIndex:2},{value:" ",paraId:4,tocIndex:2},{value:"requestOptions",paraId:4,tocIndex:2},{value:" ",paraId:4,tocIndex:2},{value:"spin",paraId:4,tocIndex:2},{value:" ",paraId:4,tocIndex:2},{value:"actionRef",paraId:4,tocIndex:2},{value:" ",paraId:4,tocIndex:2},{value:"options",paraId:4,tocIndex:2},{value:" ",paraId:4,tocIndex:2},{value:"fieldNames",paraId:4,tocIndex:2},{value:" ",paraId:4,tocIndex:2},{value:"placeholder",paraId:4,tocIndex:2},{value:" ",paraId:4,tocIndex:2},{value:"disabled",paraId:4,tocIndex:2},{value:" ",paraId:4,tocIndex:2},{value:"variant",paraId:4,tocIndex:2},{value:" ",paraId:4,tocIndex:2},{value:"size",paraId:4,tocIndex:2},{value:"\u9664\u4E86\u4EE5\u4E0B\u53C2\u6570\uFF0C\u5176\u4F59\u548C ",paraId:6,tocIndex:2},{value:"LFormItem",paraId:7,tocIndex:2},{value:" \u4E00\u6837\u3002",paraId:6,tocIndex:2},{value:"\u53C2\u6570",paraId:8,tocIndex:2},{value:"\u8BF4\u660E",paraId:8,tocIndex:2},{value:"\u7C7B\u578B",paraId:8,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:2},{value:"options",paraId:8,tocIndex:2},{value:"\u6570\u636E",paraId:8,tocIndex:2},{value:"AutoCompleteProps['options']",paraId:8,tocIndex:2},{value:"-",paraId:8,tocIndex:2},{value:"autoCompleteProps",paraId:8,tocIndex:2},{value:"antd",paraId:8,tocIndex:2},{value:"\u81EA\u52A8\u8865\u5168\u7EC4\u4EF6 Props",paraId:8,tocIndex:2},{value:"AutoCompleteProps",paraId:8,tocIndex:2},{value:"-",paraId:8,tocIndex:2}]},76298:function(l,n){n.Z=`import { LForm, LFormItemAutoComplete } from 'lighting-design';
import React, { useState } from 'react';
// \u90AE\u7BB1\u540E\u7F00
const EmailSuffix = [
  '@qq.com',
  '@126.com',
  '@163.com',
  '@sina.com',
  '@gmail.com',
  '@hotmail.com',
  '@yahoo.com',
  '@outlook.com',
];
type FieldType = {
  time1?: string;
  time2?: string;
};

const App: React.FC = () => {
  const [form] = LForm.useForm<FieldType>();
  const [options, setOptions] = useState<{ value: string; label: string }[]>([]);

  const updateOptions = (val?: string) => {
    if (!val) {
      setOptions([]);
      return;
    }
    const [valPrefix, valSuffix] = val.split('@');
    const opts = val
      ? EmailSuffix.filter((suffix) => {
          if (!valSuffix) {
            return true;
          }
          return suffix.indexOf(valSuffix) > 0;
        }).map((suffix) => {
          const opt = valPrefix + suffix;
          return {
            label: opt,
            value: opt,
          };
        })
      : [];
    setOptions(opts);
  };

  return (
    <LForm<FieldType>
      labelWidth={100}
      form={form}
      onFinish={(values) => {
        console.log('===onFinish===', values);
      }}
    >
      <LFormItemAutoComplete
        required
        name="time1"
        label="\u57FA\u7840"
        options={[
          { id: 'open', name: 'open' },
          { id: 'closed', name: 'closed' },
          { id: 'processing', name: 'processing' },
        ]}
        fieldNames={{ label: 'name', value: 'id' }}
        autoCompleteProps={{
          filterOption: (inputValue, option) => {
            return (option?.label ?? '')?.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
          },
        }}
      />
      <LFormItemAutoComplete
        label="\u90AE\u7BB1\u8054\u60F3"
        required
        name="time2"
        validateTrigger="onBlur"
        options={options}
        autoCompleteProps={{
          onFocus: (e) => updateOptions((e.target as HTMLInputElement).value),
          onSearch: updateOptions,
        }}
      />
    </LForm>
  );
};

export default App;
`}}]);
