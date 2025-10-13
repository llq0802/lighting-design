"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[4923],{30588:function(v,l,e){var d;e.r(l),e.d(l,{demos:function(){return m}});var T=e(90228),o=e.n(T),E=e(87999),I=e.n(E),r=e(75271),h=e(48402),c=e(69243),g=e(6494),t=e(61291),P=e.n(t),m={"l-trigger-demo-demo1":{component:r.memo(r.lazy(function(){return e.e(2368).then(e.bind(e,38307))})),asset:{type:"BLOCK",id:"l-trigger-demo-demo1",refAtomIds:["l-trigger"],dependencies:{"index.tsx":{type:"FILE",value:e(72217).Z},antd:{type:"NPM",value:"5.27.3"},"lighting-design":{type:"NPM",value:"3.0.0"},"./components/child-table1.tsx":{type:"FILE",value:e(46128).Z},"better-mock":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"./components/child-table1.tsx":g,antd:h,"lighting-design":c,"/Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/l-trigger/demos/components/child-table1.tsx":g,"better-mock":t,react:d||(d=e.t(r,2))},renderOpts:{compile:function(){var u=I()(o()().mark(function p(){var n,s=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(8816).then(e.bind(e,28816));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,s));case 3:case"end":return a.stop()}},p)}));function i(){return u.apply(this,arguments)}return i}()}},"l-trigger-demo-demo7":{component:r.memo(r.lazy(function(){return e.e(2368).then(e.bind(e,56241))})),asset:{type:"BLOCK",id:"l-trigger-demo-demo7",refAtomIds:["l-trigger"],dependencies:{"index.tsx":{type:"FILE",value:e(71585).Z},antd:{type:"NPM",value:"5.27.3"},"lighting-design":{type:"NPM",value:"3.0.0"},"./components/child-table1.tsx":{type:"FILE",value:e(46128).Z},"better-mock":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"./components/child-table1.tsx":g,antd:h,"lighting-design":c,"/Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/l-trigger/demos/components/child-table1.tsx":g,"better-mock":t,react:d||(d=e.t(r,2))},renderOpts:{compile:function(){var u=I()(o()().mark(function p(){var n,s=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(8816).then(e.bind(e,28816));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,s));case 3:case"end":return a.stop()}},p)}));function i(){return u.apply(this,arguments)}return i}()}},"l-trigger-demo-demo3":{component:r.memo(r.lazy(function(){return e.e(2368).then(e.bind(e,36292))})),asset:{type:"BLOCK",id:"l-trigger-demo-demo3",refAtomIds:["l-trigger"],dependencies:{"index.tsx":{type:"FILE",value:e(97525).Z},antd:{type:"NPM",value:"5.27.3"},"lighting-design":{type:"NPM",value:"3.0.0"},"./components/child-table1.tsx":{type:"FILE",value:e(46128).Z},"better-mock":{type:"NPM",value:"0.3.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"./components/child-table1.tsx":g,antd:h,"lighting-design":c,"/Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/l-trigger/demos/components/child-table1.tsx":g,"better-mock":t,react:d||(d=e.t(r,2))},renderOpts:{compile:function(){var u=I()(o()().mark(function p(){var n,s=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(8816).then(e.bind(e,28816));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,s));case 3:case"end":return a.stop()}},p)}));function i(){return u.apply(this,arguments)}return i}()}},"l-trigger-demo-demo8":{component:r.memo(r.lazy(function(){return e.e(2368).then(e.bind(e,63267))})),asset:{type:"BLOCK",id:"l-trigger-demo-demo8",refAtomIds:["l-trigger"],dependencies:{"index.tsx":{type:"FILE",value:e(87947).Z},"lighting-design":{type:"NPM",value:"3.0.0"}},entry:"index.tsx"},context:{"lighting-design":c},renderOpts:{compile:function(){var u=I()(o()().mark(function p(){var n,s=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(8816).then(e.bind(e,28816));case 2:return a.abrupt("return",(n=a.sent).default.apply(n,s));case 3:case"end":return a.stop()}},p)}));function i(){return u.apply(this,arguments)}return i}()}}}},6494:function(v,l,e){e.r(l);var d=e(88981),T=e(61291),o=e.n(T),E=e(75271),I=e(52676),r=[{title:"Name",dataIndex:"name",render:function(t){return(0,I.jsx)("a",{children:t})}},{title:"Age",dataIndex:"age"},{title:"Address",dataIndex:"address"}],h=o().mock({"list|25":[{"key|+1":1,name:"@cname",address:"@county(true)","age|10-30":10}]}).list,c=function(t){var P=t.open,m=t.value,u=t.onChange,i=t.setOpen,p=t.labelInValue,n=t.mode;function s(){return n!=null&&n.includes("radio")?"radio":"checkbox"}function x(){var b=p?m==null?void 0:m.value:m;return n==="radio"||n==="radioTag"?[b]:b}var a={preserveSelectedRowKeys:!0,type:s(),selectedRowKeys:x(),onChange:function(M,f){var y=f==null?void 0:f.map(function(C){return C==null?void 0:C.name}),L=M;(n==="radio"||n==="radioTag")&&(y=y[0],L=L[0]),u({label:y,value:L}),n!=null&&n.includes("radio")&&i(!1)}};return(0,I.jsx)(d.Z,{pagination:{defaultPageSize:6},size:"small",rowSelection:a,columns:r,dataSource:h})};l.default=c},66706:function(v,l,e){e.r(l),e.d(l,{texts:function(){return d}});const d=[{value:"\u4E00\u4E2A\u7075\u6D3B\u7684\u89E6\u53D1\u5668\u7EC4\u4EF6\uFF0C\u652F\u6301\u591A\u79CD\u9009\u62E9\u6A21\u5F0F\u548C\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002",paraId:0,tocIndex:0},{value:`import { LTrigger } from 'lighting-design';
`,paraId:1,tocIndex:6},{value:"\u5F39\u51FA\u5C42\u7684\u5BBD\u5EA6\u7531 ",paraId:2},{value:"children",paraId:2},{value:" \u7EC4\u4EF6\u63A7\u5236",paraId:2},{value:"children",paraId:3},{value:" \u7EC4\u4EF6\u4F1A\u63A5\u53D7\u5230 ",paraId:3},{value:"mode",paraId:3},{value:" ,",paraId:3},{value:"labelInValue",paraId:3},{value:",",paraId:3},{value:"open",paraId:3},{value:"\uFF0C",paraId:3},{value:"setOpen",paraId:3},{value:"\uFF0C",paraId:3},{value:"value",paraId:3},{value:"\uFF0C",paraId:3},{value:"onChange",paraId:3},{value:" \u5FC5\u987B\u5728 ",paraId:3},{value:"children",paraId:3},{value:" \u7EC4\u4EF6\u4E2D\u7ED1\u5B9A ",paraId:3},{value:"value\uFF0ConChange",paraId:3},{value:"\u9ED8\u8BA4",paraId:4},{value:"children",paraId:4},{value:"\u63A5\u53D7\u7684",paraId:4},{value:"value",paraId:4},{value:"\u4E3A",paraId:4},{value:"value.value",paraId:4},{value:", \u5982\u679C",paraId:4},{value:"labelInValue",paraId:4},{value:"\u4E3A",paraId:4},{value:"true",paraId:4},{value:", ",paraId:4},{value:"children",paraId:4},{value:"\u63A5\u53D7\u7684",paraId:4},{value:"value",paraId:4},{value:"\u4E3A ",paraId:4},{value:"{ label: xxx; value: xxx }",paraId:4},{value:" , ",paraId:4},{value:"onChange",paraId:4},{value:"\u4F20\u7684\u503C\u5FC5\u987B\u662F",paraId:4},{value:"{ label: xxx; value: xxx }",paraId:4},{value:"\u4E0E\u8868\u683C\u7ED3\u5408\u65F6 ",paraId:5},{value:"rowSelection",paraId:5},{value:" \u4E2D\u7684 ",paraId:5},{value:"preserveSelectedRowKeys",paraId:5},{value:" \u5C5E\u6027\u5EFA\u8BAE\u8BBE\u7F6E\u4E3A ",paraId:5},{value:"true",paraId:5},{value:" \u5373\u5F53\u6570\u636E\u88AB\u5220\u9664\u65F6\u4ECD\u7136\u4FDD\u7559\u9009\u9879\u7684 key",paraId:5},{value:"\u5F53\u5C4F\u5E55\u7A7A\u95F4\u8DB3\u591F\u65F6\uFF0C\u4F1A\u6309\u7167 ",paraId:6},{value:"placement",paraId:6},{value:" \u7684\u8BBE\u7F6E\u8FDB\u884C\u5F39\u5C42\u3002\u5F53\u7A7A\u95F4\u4E0D\u8DB3\u65F6\u5219\u4F1A\u53D6\u53CD\u5411\u4F4D\u7F6E\u8FDB\u884C\u5F39\u5C42",paraId:6},{value:"\uFF08\u4F8B\u5982 top \u4E0D\u591F\u65F6\uFF0C\u4F1A\u6539\u4E3A bottom\uFF0CtopLeft \u4E0D\u591F\u65F6\u4F1A\u6539\u4E3A bottomLeft\uFF09",paraId:6},{value:"\u3002\u5355\u4E00\u65B9\u5411\u5982 ",paraId:6},{value:"top bottom left right",paraId:6},{value:"\u5F53\u8D34\u8FB9\u65F6\u8FDB\u884C\u81EA\u52A8\u4F4D\u79FB",paraId:6},{value:"\u7EC4\u4EF6\u8FD8\u652F\u6301 antd Select \u7EC4\u4EF6\u7684\u5176\u4ED6\u5C5E\u6027 ",paraId:7},{value:"\u90E8\u5206\u5C5E\u6027\u5185\u90E8\u5DF2\u7ECF\u91CD\u5199",paraId:7},{value:"\u3002",paraId:7},{value:"\u53C2\u6570",paraId:8},{value:"\u8BF4\u660E",paraId:8},{value:"\u7C7B\u578B",paraId:8},{value:"\u9ED8\u8BA4\u503C",paraId:8},{value:"defaultValue",paraId:8},{value:"\u9ED8\u8BA4\u503C",paraId:8},{value:"LTriggerValue",paraId:8},{value:"-",paraId:8},{value:"value",paraId:8},{value:"\u53D7\u63A7\u503C",paraId:8},{value:"LTriggerValue",paraId:8},{value:"-",paraId:8},{value:"labelInValue",paraId:8},{value:"\u662F\u5426\u5C06\u4F20\u5165\u5B50\u7EC4\u4EF6\u7684 value \u503C\u8F6C\u6362\u4E3A{ value: xxx, label: xxx }\u683C\u5F0F",paraId:8},{value:"boolean",paraId:8},{value:"false",paraId:8},{value:"mode",paraId:8},{value:"\u9009\u62E9\u56DE\u663E\u7684\u6A21\u5F0F\uFF0C\u53EF\u9009\u503C\uFF1A",paraId:8},{value:"radio",paraId:8},{value:" | ",paraId:8},{value:"checkbox",paraId:8},{value:" | ",paraId:8},{value:"radioTag",paraId:8},{value:" | ",paraId:8},{value:"checkboxTag",paraId:8},{value:"string",paraId:8},{value:"'radio'",paraId:8},{value:"split",paraId:8},{value:"checkbox \u6A21\u5F0F\u4E0B\u7684\u5206\u9694\u7B26",paraId:8},{value:"string",paraId:8},{value:"' / '",paraId:8},{value:"open",paraId:8},{value:"\u662F\u5426\u6253\u5F00\u5F39\u51FA\u5C42",paraId:8},{value:"boolean",paraId:8},{value:"-",paraId:8},{value:"defaultOpen",paraId:8},{value:"\u9ED8\u8BA4\u662F\u5426\u6253\u5F00\u5F39\u51FA\u5C42",paraId:8},{value:"boolean",paraId:8},{value:"false",paraId:8},{value:"width",paraId:8},{value:"\u89E6\u53D1\u5668\u5BBD\u5EA6",paraId:8},{value:"number",paraId:8},{value:" | ",paraId:8},{value:"string",paraId:8},{value:"250",paraId:8},{value:"placement",paraId:8},{value:"\u5F39\u51FA\u5C42\u65B9\u5411",paraId:8},{value:"PopoverProps['placement']",paraId:8},{value:"'bottomLeft'",paraId:8},{value:"destroyOnHide",paraId:8},{value:"\u5173\u95ED\u65F6\u662F\u5426\u9500\u6BC1\u5F39\u51FA\u5C42\u5185\u5BB9",paraId:8},{value:"boolean",paraId:8},{value:"false",paraId:8},{value:"popupArrow",paraId:8},{value:"\u662F\u5426\u663E\u793A\u5F39\u51FA\u5C42\u7BAD\u5934",paraId:8},{value:"boolean",paraId:8},{value:" | ",paraId:8},{value:"{ pointAtCenter: boolean }",paraId:8},{value:"false",paraId:8},{value:"getPopupContainer",paraId:8},{value:"\u81EA\u5B9A\u4E49\u5F39\u51FA\u5C42\u7684\u6302\u8F7D\u8282\u70B9",paraId:8},{value:"(triggerNode: HTMLElement) => HTMLElement",paraId:8},{value:"-",paraId:8},{value:"popoverProps",paraId:8},{value:"\u5F39\u51FA\u5C42\u7684\u989D\u5916\u5C5E\u6027",paraId:8},{value:"PopoverProps",paraId:8},{value:"-",paraId:8},{value:"onOpenChange",paraId:8},{value:"\u5F39\u51FA\u5C42\u5F00\u5173\u72B6\u6001\u53D8\u5316\u56DE\u8C03",paraId:8},{value:"(open: boolean) => void",paraId:8},{value:"-",paraId:8},{value:"onChange",paraId:8},{value:"value \u53D8\u5316\u7684\u56DE\u8C03",paraId:8},{value:"(v: LTriggerValue) => void",paraId:8},{value:"-",paraId:8},{value:"children",paraId:8},{value:"\u5B50\u7EC4\u4EF6",paraId:8},{value:"ReactNode",paraId:8},{value:" | ",paraId:8},{value:"(props: LTriggerChildrenProps) => ReactElement",paraId:8},{value:"-",paraId:8},{value:"\u5F53 children \u4E3A\u51FD\u6570\u65F6\u7684\u53C2\u6570\u7C7B\u578B\uFF1A",paraId:9,tocIndex:7},{value:"\u53C2\u6570",paraId:10,tocIndex:7},{value:"\u8BF4\u660E",paraId:10,tocIndex:7},{value:"\u7C7B\u578B",paraId:10,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:7},{value:"value",paraId:10,tocIndex:7},{value:"\u5F53\u524D\u503C",paraId:10,tocIndex:7},{value:"LTriggerValue | LValueType",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"onChange",paraId:10,tocIndex:7},{value:"\u503C\u6539\u53D8\u56DE\u8C03",paraId:10,tocIndex:7},{value:"(value: LTriggerValue) => void",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"open",paraId:10,tocIndex:7},{value:"\u5F53\u524D\u5F39\u51FA\u5C42\u662F\u5426\u6253\u5F00",paraId:10,tocIndex:7},{value:"boolean",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"setOpen",paraId:10,tocIndex:7},{value:"\u8BBE\u7F6E\u5F39\u51FA\u5C42\u5F00\u5173\u72B6\u6001",paraId:10,tocIndex:7},{value:"(open: boolean) => void",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"labelInValue",paraId:10,tocIndex:7},{value:"\u662F\u5426\u542F\u7528 labelInValue \u6A21\u5F0F",paraId:10,tocIndex:7},{value:"boolean",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"mode",paraId:10,tocIndex:7},{value:"\u5F53\u524D\u9009\u62E9\u6A21\u5F0F",paraId:10,tocIndex:7},{value:"LTriggerMode",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"radio",paraId:11,tocIndex:8},{value:": \u5355\u9009\u6A21\u5F0F",paraId:11,tocIndex:8},{value:"\u5B50\u7EC4\u4EF6 onChange \u8C03\u7528\u65B9\u5F0F\uFF1A",paraId:12,tocIndex:8},{value:"onChange({ label: string, value: string|number })",paraId:12,tocIndex:8},{value:"checkbox",paraId:13,tocIndex:8},{value:": \u591A\u9009\u6A21\u5F0F",paraId:13,tocIndex:8},{value:"\u5B50\u7EC4\u4EF6 onChange \u8C03\u7528\u65B9\u5F0F\uFF1A",paraId:14,tocIndex:8},{value:"onChange({ label: string, value: (string|number)[] })",paraId:14,tocIndex:8},{value:"\u5EFA\u8BAE label \u7684\u503C\u7528 ",paraId:14,tocIndex:8},{value:"-",paraId:14,tocIndex:8},{value:" \u6216 ",paraId:14,tocIndex:8},{value:"/",paraId:14,tocIndex:8},{value:" \u6216 ",paraId:14,tocIndex:8},{value:",",paraId:14,tocIndex:8},{value:" \u5206\u9694",paraId:14,tocIndex:8},{value:"radioTag",paraId:15,tocIndex:8},{value:": \u5355\u9009\u6807\u7B7E\u6A21\u5F0F",paraId:15,tocIndex:8},{value:"\u5B50\u7EC4\u4EF6 onChange \u8C03\u7528\u65B9\u5F0F\uFF1A",paraId:16,tocIndex:8},{value:"onChange({ label: string, value: string|number })",paraId:16,tocIndex:8},{value:"checkboxTag",paraId:17,tocIndex:8},{value:": \u591A\u9009\u6807\u7B7E\u6A21\u5F0F",paraId:17,tocIndex:8},{value:"\u5B50\u7EC4\u4EF6 onChange \u8C03\u7528\u65B9\u5F0F\uFF1A",paraId:18,tocIndex:8},{value:"onChange({ label: string[], value: (string|number)[] })",paraId:18,tocIndex:8},{value:`export type LValueType = string | number | (string | number)[];
`,paraId:19,tocIndex:9},{value:`export type LTriggerValue<T = LValueType> = {
  label: T; // \u663E\u793A\u6587\u672C
  value: T; // \u5B9E\u9645\u503C
};
`,paraId:20,tocIndex:10}]},46128:function(v,l){l.Z=`import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';
import Mock from 'better-mock';
import type { LTriggerMode } from 'lighting-design';
import React from 'react';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

interface LTriggerChildProps {
  value?: any;
  onChange?: (value: any) => void;
  open?: boolean;
  setOpen?: (open: boolean) => void;
  labelInValue?: boolean;
  mode?: LTriggerMode;
  [key: string]: any;
}

const columns: ColumnsType<DataType> = [
  { title: 'Name', dataIndex: 'name', render: (text: string) => <a>{text}</a> },
  { title: 'Age', dataIndex: 'age' },
  { title: 'Address', dataIndex: 'address' },
];

const dataSource: DataType[] = Mock.mock({
  'list|25': [{ 'key|+1': 1, name: '@cname', address: '@county(true)', 'age|10-30': 10 }],
}).list;

const ChildTable1: React.FC<LTriggerChildProps> = (props) => {
  const { open, value, onChange: outOnChange, setOpen, labelInValue, mode } = props;

  function getType() {
    return mode?.includes('radio') ? 'radio' : 'checkbox';
  }
  function getValue() {
    const innerVal = labelInValue ? value?.value : value;
    if (mode === 'radio' || mode === 'radioTag') {
      return [innerVal];
    }
    return innerVal;
  }

  const rowSelection = {
    preserveSelectedRowKeys: true,
    type: getType(),
    selectedRowKeys: getValue(),
    onChange: (selectedRowKeys: (string | number)[], selectedRows: DataType[]) => {
      let selectedNames = selectedRows?.map((item) => item?.name);
      let selectedKeys = selectedRowKeys;

      if (mode === 'radio' || mode === 'radioTag') {
        selectedNames = selectedNames[0];
        selectedKeys = selectedKeys[0];
      }

      outOnChange!({
        label: selectedNames,
        value: selectedKeys,
      });

      if (mode?.includes('radio')) setOpen!(false);
    },
  };

  return (
    <Table
      pagination={{ defaultPageSize: 6 }}
      size="small"
      rowSelection={rowSelection as TableRowSelection<DataType>}
      columns={columns}
      dataSource={dataSource}
    />
  );
};

export default ChildTable1;
`},72217:function(v,l){l.Z=`import { Flex } from 'antd';
import { LTrigger } from 'lighting-design';
import ChildTable1 from './components/child-table1';

const Demo1 = () => {
  return (
    <div>
      <Flex gap="small" align="center">
        <h5>\u8868\u683C\u5355\u9009</h5>
        <LTrigger>
          <ChildTable1 />
        </LTrigger>
      </Flex>
      <Flex gap="small" align="center">
        <h5>\u5BBD\u5EA6\u767E\u5206\u6BD4</h5>
        <LTrigger width="60%">
          <ChildTable1 />
        </LTrigger>
      </Flex>
      <Flex gap="small" align="center">
        <h5>popupArrow</h5>
        <LTrigger popupArrow>
          <ChildTable1 />
        </LTrigger>
      </Flex>
      <Flex gap="small" align="center">
        <h5>\u5F39\u51FA\u65B9\u5411</h5>
        <LTrigger placement="topRight" popupArrow>
          <ChildTable1 />
        </LTrigger>
      </Flex>
      <Flex gap="small" align="center">
        <h5>\u5F62\u6001\u53D8\u4F53 ( antd\u7248\u672C\u5927\u4E8E5.13.0\u53EF\u7528 )</h5>
        <LTrigger variant="filled">
          <ChildTable1 />
        </LTrigger>
      </Flex>
      <Flex gap="small" align="center">
        <h5>\u9690\u85CF\u5F39\u51FA\u5C42\u65F6\u9500\u6BC1 DOM</h5>
        <LTrigger destroyOnHidden placeholder="\u8BF7\u9009\u62E9\u6478\u9C7C\u5458\u5DE5">
          <ChildTable1 />
        </LTrigger>
      </Flex>
      <Flex gap="small" align="center">
        <h5>\u7981\u7528</h5>
        <LTrigger disabled>
          <ChildTable1 />
        </LTrigger>
      </Flex>
      <Flex gap="small" align="center">
        <h5>\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D</h5>
        <LTrigger labelInValue fieldNames={{ label: 'name', value: 'id' }}>
          <ChildTable1 />
        </LTrigger>
      </Flex>
    </div>
  );
};
export default Demo1;
`},97525:function(v,l){l.Z=`import { Tag } from 'antd';
import { LTrigger } from 'lighting-design';
import ChildTable1 from './components/child-table1';

const tagRender = (props) => {
  const { label, value } = props;
  // console.log('props', props);
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag color="#3e9bed" onMouseDown={onPreventMouseDown} style={{ marginRight: 4 }}>
      {label}
    </Tag>
  );
};

const Demo1 = () => {
  return (
    <div>
      <h4>Tags\u5355\u9009\u5185\u5BB9</h4>
      <LTrigger mode="radioTag" placement="right">
        <ChildTable1 />
      </LTrigger>
      <h4>Tags\u591A\u9009\u5185\u5BB9</h4>
      <LTrigger mode="checkboxTag" width={400}>
        <ChildTable1 />
      </LTrigger>

      <h4>Tags\u81EA\u5B9A\u4E49</h4>
      <LTrigger mode="checkboxTag" tagRender={tagRender} width={400}>
        <ChildTable1 />
      </LTrigger>
    </div>
  );
};
export default Demo1;
`},71585:function(v,l){l.Z=`import { Flex } from 'antd';
import { LTrigger } from 'lighting-design';
import ChildTable1 from './components/child-table1';

const Demo1 = () => {
  return (
    <div>
      <Flex gap="small" align="center">
        <h5>\u8868\u683C\u591A\u90091</h5>
        <LTrigger width="50%" mode="checkbox">
          <ChildTable1 />
        </LTrigger>
      </Flex>
      <Flex gap="small" align="center">
        <h5>\u8868\u683C\u591A\u90091</h5>
        <LTrigger width="50%" mode="checkbox" split="\uFF0C">
          <ChildTable1 />
        </LTrigger>
      </Flex>
    </div>
  );
};
export default Demo1;
`},87947:function(v,l){l.Z=`import { LTrigger } from 'lighting-design';

export default function Demo8() {
  return (
    <div>
      <h5>\u65E0\u7EBF\u6EDA\u52A8</h5>
      <LTrigger>
        {(props) => {
          // console.log('==props====>', props);
          return (
            <div
              style={{
                height: '100px',
              }}
            >
              \u8FD9\u91CC\u4E5F\u53EF\u4EE5\u914D\u5408\u865A\u62DF\u5217\u8868\u5B9E\u73B0\u5927\u91CF\u6570\u636E{' '}
            </div>
          );
        }}
      </LTrigger>
    </div>
  );
}
`}}]);
