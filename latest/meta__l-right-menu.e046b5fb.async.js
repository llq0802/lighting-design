"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[1362],{64113:function(l,t,n){n.r(t),n.d(t,{demos:function(){return c}});var r=n(90228),d=n.n(r),h=n(87999),g=n.n(h),a=n(75271),p=n(69243),v=n(48402),c={"l-right-menu-demo-demo1":{component:a.memo(a.lazy(function(){return n.e(5593).then(n.bind(n,98610))})),asset:{type:"BLOCK",id:"l-right-menu-demo-demo1",refAtomIds:["l-right-menu"],dependencies:{"index.tsx":{type:"FILE",value:n(83901).Z},"lighting-design":{type:"NPM",value:"3.0.0"}},entry:"index.tsx"},context:{"lighting-design":p},renderOpts:{compile:function(){var u=g()(d()().mark(function o(){var i,m=arguments;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(8816).then(n.bind(n,28816));case 2:return e.abrupt("return",(i=e.sent).default.apply(i,m));case 3:case"end":return e.stop()}},o)}));function s(){return u.apply(this,arguments)}return s}()}},"l-right-menu-demo-demo2":{component:a.memo(a.lazy(function(){return n.e(5593).then(n.bind(n,20691))})),asset:{type:"BLOCK",id:"l-right-menu-demo-demo2",refAtomIds:["l-right-menu"],dependencies:{"index.tsx":{type:"FILE",value:n(78340).Z},antd:{type:"NPM",value:"5.27.3"},"lighting-design":{type:"NPM",value:"3.0.0"}},entry:"index.tsx"},context:{antd:v,"lighting-design":p},renderOpts:{compile:function(){var u=g()(d()().mark(function o(){var i,m=arguments;return d()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(8816).then(n.bind(n,28816));case 2:return e.abrupt("return",(i=e.sent).default.apply(i,m));case 3:case"end":return e.stop()}},o)}));function s(){return u.apply(this,arguments)}return s}()}}}},48713:function(l,t,n){n.r(t),n.d(t,{texts:function(){return r}});const r=[{value:"\u57FA\u4E8E antd.Dropdown \u5B9E\u73B0\u7684\u7B80\u6613\u7684\u53F3\u952E\u83DC\u5355",paraId:0,tocIndex:0},{value:"LRightMenu",paraId:1},{value:" \u7684 ",paraId:1},{value:"children",paraId:1},{value:" \u5FC5\u987B\u53EA\u5305\u542B",paraId:1},{value:"\u4E00\u4E2A\u6839 div",paraId:1},{value:`import { LRightMenu } from 'lighting-design';
`,paraId:2,tocIndex:4},{value:"\u9664\u4E86\u4EE5\u4E0B\u53C2\u6570\uFF0C\u5176\u4F59\u548C antd ",paraId:3,tocIndex:4},{value:"Dropdown",paraId:3,tocIndex:4},{value:" \u7EC4\u4EF6\u4E00\u6837\u3002",paraId:3,tocIndex:4},{value:"\u53C2\u6570",paraId:4,tocIndex:4},{value:"\u8BF4\u660E",paraId:4,tocIndex:4},{value:"\u7C7B\u578B",paraId:4,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:4},{value:"children",paraId:4,tocIndex:4},{value:"\u9700\u8981\u53F3\u952E\u83DC\u5355\u7684\u5BB9\u5668",paraId:4,tocIndex:4},{value:"ReactNode",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4}]},83901:function(l,t){t.Z=`import { type MenuProps } from 'antd';
import { LRightMenu } from 'lighting-design';

const items: MenuProps['items'] = [
  { label: '1st menu item', key: '1' },
  { label: '2nd menu item', key: '2' },
  { label: '3rd menu item', key: '3' },
];

export default function Demo1() {
  return (
    <LRightMenu menu={{ items }}>
      <div
        style={{
          height: 200,
          textAlign: 'center',
          lineHeight: '200px',
          background: '#f5f5f5',
          border: '1px solid rgb(235, 237, 240)',
        }}
      >
        \u53F3\u952E\u70B9\u51FB\u6211\u8BD5\u8BD5
      </div>
    </LRightMenu>
  );
}
`},78340:function(l,t){t.Z=`import { Divider, type MenuProps } from 'antd';
import { LRightMenu } from 'lighting-design';

const items: MenuProps['items'] = [
  { label: '1st menu item', key: '1' },
  { label: <Divider style={{ margin: 1 }} />, key: 'Divider-1', disabled: true },
  { label: '2nd menu item', key: '2' },
  { label: <hr />, key: 'Divider-2', disabled: true },
  { label: '3rd menu item', key: '3' },
];

export default function Demo2() {
  return (
    <LRightMenu menu={{ items }}>
      <div
        style={{
          textAlign: 'center',
          lineHeight: '200px',
          background: '#f5f5f5',
          border: '1px solid rgb(235, 237, 240)',
        }}
      >
        \u53F3\u952E\u70B9\u51FB\u6211\u8BD5\u8BD5
      </div>
    </LRightMenu>
  );
}
`}}]);
