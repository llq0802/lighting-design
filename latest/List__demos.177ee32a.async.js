"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[708],{80517:function(T,o,t){t.r(o);var _=t(27424),l=t.n(_),g=t(27790),e=t(98293),i=t(58867),n=t(67294),s=t(85893),d="https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo",c=500,u=function(){var m=(0,n.useState)([]),D=l()(m,2),j=D[0],P=D[1],E=function(){fetch(d).then(function(r){return r.json()}).then(function(r){P(j.concat(r.results)),g.ZP.destroy("updatable")})};(0,n.useEffect)(function(){E()},[]);var I=function(){console.log("onScrollBottom"),g.ZP.loading({key:"updatable",duration:0,content:"\u52A0\u8F7D\u4E2D..."}),setTimeout(function(){E()},1e3)};return(0,s.jsx)(i.Z,{dataSource:j,height:c,itemMinHeight:10,rowKey:"email",onScrollBottom:I,renderItem:function(r){return(0,s.jsxs)("div",{style:{border:"1px solid",marginBottom:10},children:[(0,s.jsx)(e.C,{src:r.picture.large}),(0,s.jsx)("div",{children:r.name.last}),(0,s.jsx)("div",{children:r.email})]})}})};o.default=u},66121:function(T,o,t){t.r(o);for(var _=t(51158),l=t(4393),g=t(58867),e=t(85893),i=[],n=0;n<30;n++)i[n]={title:"Title ".concat(n+1)};var s=function(){return(0,e.jsx)(g.Z,{grid:{gutter:16,xs:1,sm:2,md:4,lg:4,xl:6,xxl:3},dataSource:i,pagination:{onChange:function(u){console.log(u)},pageSize:6},renderItem:function(u){return(0,e.jsx)(_.ZP.Item,{children:(0,e.jsx)(l.Z,{title:u.title,children:"Card content"})})}})};o.default=s},49693:function(T,o,t){t.r(o);for(var _=t(98293),l=t(58867),g=t(67294),e=t(85893),i=[],n=0;n<500;n++)i[n]={id:"".concat(n,"0"),name:"jack",email:"958614130@qq.com",img:"https://randomuser.me/api/portraits/men/".concat(n+1,".jpg")};var s=500,d=function(){return(0,e.jsx)(l.Z,{className:"my-LList",style:{border:"2px solid red"},dataSource:i,height:s,itemMinHeight:10,rowKey:"id",renderItem:function(a){return(0,e.jsxs)("div",{style:{border:"1px solid",margin:10},children:[(0,e.jsx)(_.C,{src:a.img}),(0,e.jsx)("div",{children:a.name}),(0,e.jsx)("div",{children:a.email})]})}})};o.default=d},71235:function(T,o,t){t.r(o),t.d(o,{default:function(){return D}});var _=t(861),l=t.n(_),g=t(27424),e=t.n(g),i=t(48054),n=t(96074),s=t(98293),d=t(58867),c=t(67294),u=t(58533),a=t(85893),m=function(){var P=(0,c.useState)(!1),E=e()(P,2),I=E[0],v=E[1],r=(0,c.useState)([]),f=e()(r,2),O=f[0],L=f[1],M=function(){I||(v(!0),fetch("https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo").then(function(h){return h.json()}).then(function(h){L([].concat(l()(O),l()(h.results))),v(!1)}).catch(function(){v(!1)}))};return(0,c.useEffect)(function(){M()},[]),(0,a.jsx)("div",{id:"scrollableDiv",style:{height:400,overflow:"auto",padding:"0 16px",border:"1px solid rgba(140, 140, 140, 0.35)"},children:(0,a.jsx)(u.Z,{dataLength:O.length,next:M,hasMore:O.length<200,loader:(0,a.jsx)(i.Z,{avatar:!0,paragraph:{rows:1},active:!0}),endMessage:(0,a.jsx)(n.Z,{plain:!0,children:"\u6CA1\u6709\u66F4\u591A\u4E86..."}),scrollableTarget:"scrollableDiv",children:(0,a.jsx)(d.Z,{dataSource:O,renderItem:function(h){return(0,a.jsxs)(d.Z.Item,{children:[(0,a.jsx)(d.Z.Item.Meta,{avatar:(0,a.jsx)(s.C,{src:h.picture.large}),title:(0,a.jsx)("a",{href:"https://ant.design",children:h.name.last}),description:h.email}),(0,a.jsx)("div",{children:"Content"})]},h.email)}})})})},D=m},58867:function(T,o,t){var _=t(42122),l=t.n(_),g=t(70215),e=t.n(g),i=t(51158),n=t(73453),s=t(67294),d=t(85893),c=["rowKey","height","itemMinHeight","onScrollBottom","renderItem"],u=function(m){var D,j=m.rowKey,P=m.height,E=P===void 0?0:P,I=m.itemMinHeight,v=m.onScrollBottom,r=m.renderItem,f=e()(m,c),O=function(M){var C=Math.ceil(M.currentTarget.scrollHeight),h=Math.ceil(M.currentTarget.scrollTop);E+h>=C&&(v==null||v())};return E?(0,d.jsx)(i.ZP,l()(l()({itemLayout:"vertical"},f),{},{children:(0,d.jsx)(n.Z,{data:(D=f.dataSource)!==null&&D!==void 0?D:[],height:E,itemHeight:I,itemKey:j,onScroll:O,children:function(M,C){return r==null?void 0:r(M,C)}})})):(0,d.jsx)(i.ZP,l()({renderItem:r},f))};u.Item=i.ZP.Item,o.Z=u}}]);
