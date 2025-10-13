"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[2877],{23395:function(s,n,e){var t;e.r(n),e.d(n,{demos:function(){return c}});var l=e(90228),o=e.n(l),i=e(87999),u=e.n(i),d=e(75271),I=e(69243),c={"l-iframe-demo-demo":{component:d.memo(d.lazy(function(){return e.e(4989).then(e.bind(e,13109))})),asset:{type:"BLOCK",id:"l-iframe-demo-demo",refAtomIds:["l-iframe"],dependencies:{"index.tsx":{type:"FILE",value:e(53418).Z},"lighting-design":{type:"NPM",value:"3.0.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"lighting-design":I,react:t||(t=e.t(d,2))},renderOpts:{compile:function(){var p=u()(o()().mark(function g(){var r,h=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(8816).then(e.bind(e,28816));case 2:return a.abrupt("return",(r=a.sent).default.apply(r,h));case 3:case"end":return a.stop()}},g)}));function m(){return p.apply(this,arguments)}return m}()}}}},51333:function(s,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"\u4E8C\u6B21\u5C01\u88C5\u7684 iframe \u7EC4\u4EF6\uFF0C\u7B80\u5316 iframe \u7684\u901A\u4FE1\u4F7F\u7528\u3002",paraId:0,tocIndex:0},{value:`LIframe
`,paraId:1,tocIndex:0},{value:"\u7528\u6237\u5D4C\u5957\u5B50\u9875\u9762",paraId:2,tocIndex:0},{value:`useLIframeParent
`,paraId:1,tocIndex:0},{value:"\u5728\u5B50\u9875\u9762\u4E2D\u4E0E\u7236\u9875\u9762\u8FDB\u884C\u901A\u4FE1",paraId:3,tocIndex:0},{value:`import { LIframe, useLIframeParent } from 'lighting-design';
`,paraId:4,tocIndex:2},{value:"\u5C5E\u6027\u540D",paraId:5,tocIndex:3},{value:"\u8BF4\u660E",paraId:5,tocIndex:3},{value:"\u7C7B\u578B",paraId:5,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:3},{value:"\u7248\u672C",paraId:5,tocIndex:3},{value:"src",paraId:5,tocIndex:3},{value:"iframe \u7684\u6E90\u5730\u5740",paraId:5,tocIndex:3},{value:"string",paraId:5,tocIndex:3},{value:"-",paraId:5,tocIndex:3},{value:"-",paraId:5,tocIndex:3},{value:"width",paraId:5,tocIndex:3},{value:"iframe \u5BBD\u5EA6",paraId:5,tocIndex:3},{value:"string | number",paraId:5,tocIndex:3},{value:"'100%'",paraId:5,tocIndex:3},{value:"-",paraId:5,tocIndex:3},{value:"height",paraId:5,tocIndex:3},{value:"iframe \u9AD8\u5EA6",paraId:5,tocIndex:3},{value:"string | number",paraId:5,tocIndex:3},{value:"'100%'",paraId:5,tocIndex:3},{value:"-",paraId:5,tocIndex:3},{value:"methods",paraId:5,tocIndex:3},{value:"\u7236\u9875\u9762\u63D0\u4F9B\u7ED9\u5B50\u9875\u9762\u8C03\u7528\u7684\u65B9\u6CD5\u96C6\u5408",paraId:5,tocIndex:3},{value:"object",paraId:5,tocIndex:3},{value:"-",paraId:5,tocIndex:3},{value:"-",paraId:5,tocIndex:3},{value:"setChildMethods",paraId:5,tocIndex:3},{value:"\u8BBE\u7F6E\u5B50\u9875\u9762\u65B9\u6CD5\u7684\uFF0C\u5FC5\u987B\u662F useState \u521B\u5EFA",paraId:5,tocIndex:3},{value:"React.Dispatch<React.SetStateAction<any>>",paraId:5,tocIndex:3},{value:"-",paraId:5,tocIndex:3},{value:"-",paraId:5,tocIndex:3},{value:"allowedOrigins",paraId:5,tocIndex:3},{value:"\u5141\u8BB8\u901A\u4FE1\u7684\u6E90\u5217\u8868",paraId:5,tocIndex:3},{value:"string[]",paraId:5,tocIndex:3},{value:"-",paraId:5,tocIndex:3},{value:"-",paraId:5,tocIndex:3},{value:"timeout",paraId:5,tocIndex:3},{value:"\u901A\u4FE1\u8D85\u65F6\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09",paraId:5,tocIndex:3},{value:"number",paraId:5,tocIndex:3},{value:"-",paraId:5,tocIndex:3},{value:"-",paraId:5,tocIndex:3},{value:"onError",paraId:5,tocIndex:3},{value:"\u9519\u8BEF\u5904\u7406\u56DE\u8C03\u51FD\u6570",paraId:5,tocIndex:3},{value:"Function",paraId:5,tocIndex:3},{value:"-",paraId:5,tocIndex:3},{value:"-",paraId:5,tocIndex:3},{value:`export declare function useLIframeParent<ParentMethods extends Methods>(
  connectOptions: ConnectOptions,
  allowedOrigins?: string[],
): {
  connection: Connection<Methods>;
  parentMethods: RemoteProxy<ParentMethods>;
};
`,paraId:6,tocIndex:4}]},53418:function(s,n){n.Z=`import { LIframe } from 'lighting-design';
import React, { useEffect, useState } from 'react';

type PropsType = {};

type ChildMethods = {
  onMessage: (msg: string) => Promise<string>;
};
const ParentPage: React.FC<PropsType> = ({}) => {
  const [message, setMessage] = useState<string>('');
  const [childMethods, setChildMethods] = useState<ChildMethods>(null!);

  useEffect(() => {
    if (!childMethods) return;
    childMethods?.onMessage('hello\uFF0C\u6211\u662F\u7236\u9875\u9762').then((res) => {
      console.log('===res==>', res);
    });
  }, [childMethods]);

  return (
    <div
      style={{
        height: 500,
      }}
    >
      <h3>\u5B50\u9875\u9762\uFF1A{message}</h3>
      <LIframe
        src="http://localhost:5173/penpal"
        methods={{
          onMessage(message: string) {
            setMessage(message);
          },
        }}
        setChildMethods={setChildMethods}
        style={{
          border: '1px solid red',
        }}
      />
    </div>
  );
};

export default ParentPage;

// import { useLIframeParent } from 'lighting-design';

// type ParentMethods = {
//   onMessage(msg: string): Reply<string>;
// };

// function Penpal() {
//   const [message, setMessage] = useState('');
//   const { parentMethods, connection } = useLIframeParent<ParentMethods>(
//     {
//       methods: {
//         onMessage(message: string) {
//           setMessage(message);
//           return 'ok';
//         },
//       },
//     },
//     ['*'],
//   );

//   useEffect(() => {
//     if (connection && parentMethods) {
//       console.log('===parentMethods==>', parentMethods);
//       parentMethods.onMessage('Hello \u6211\u662F\u5B50\u9875\u9762');
//     }
//   }, [connection, parentMethods]);

//   return (
//     <div>
//       <h1>{message}</h1>
//     </div>
//   );
// }
// export default Penpal;
`}}]);
