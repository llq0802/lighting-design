"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[708],{80517:function(T,i,t){t.r(i);var g=t(27424),l=t.n(g),u=t(27790),e=t(98293),a=t(58867),r=t(67294),c=t(85893),s="https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo",d=500,D=function(){var m=(0,r.useState)([]),E=l()(m,2),O=E[0],f=E[1],_=function(){fetch(s).then(function(o){return o.json()}).then(function(o){f(O.concat(o.results)),u.ZP.destroy("updatable")})};(0,r.useEffect)(function(){_()},[]);var I=function(){console.log("onScrollBottom"),u.ZP.loading({key:"updatable",duration:0,content:"\u52A0\u8F7D\u4E2D..."}),setTimeout(function(){_()},1e3)};return(0,c.jsx)(a.Z,{dataSource:O,height:d,itemMinHeight:10,rowKey:"email",onScrollBottom:I,renderItem:function(o){return(0,c.jsxs)("div",{style:{border:"1px solid",marginBottom:10},children:[(0,c.jsx)(e.C,{src:o.picture.large}),(0,c.jsx)("div",{children:o.name.last}),(0,c.jsx)("div",{children:o.email})]})}})};i.default=D},66121:function(T,i,t){t.r(i);for(var g=t(4393),l=t(58867),u=t(85893),e=[],a=0;a<30;a++)e[a]={title:"Title ".concat(a+1)};var r=function(){return(0,u.jsx)(l.Z,{grid:{gutter:16,xs:1,sm:2,md:4,lg:4,xl:6,xxl:3},dataSource:e,pagination:{onChange:function(d){console.log(d)},pageSize:6},renderItem:function(d){return(0,u.jsx)(l.Z.Item,{children:(0,u.jsx)(g.Z,{title:d.title,children:"Card content"})})}})};i.default=r},49693:function(T,i,t){t.r(i);for(var g=t(98293),l=t(58867),u=t(67294),e=t(85893),a=[],r=0;r<500;r++)a[r]={id:"".concat(r,"0"),name:"jack",email:"958614130@qq.com",img:"https://randomuser.me/api/portraits/men/".concat(r+1,".jpg")};var c=500,s=function(){return(0,e.jsx)(l.Z,{className:"my-LList",style:{border:"2px solid red"},dataSource:a,height:c,itemMinHeight:10,rowKey:"id",renderItem:function(n){return(0,e.jsxs)("div",{style:{border:"1px solid",margin:10},children:[(0,e.jsx)(g.C,{src:n.img}),(0,e.jsx)("div",{children:n.name}),(0,e.jsx)("div",{children:n.email})]})}})};i.default=s},71235:function(T,i,t){t.r(i),t.d(i,{default:function(){return E}});var g=t(861),l=t.n(g),u=t(27424),e=t.n(u),a=t(48054),r=t(96074),c=t(98293),s=t(58867),d=t(67294),D=t(58533),n=t(85893),m=function(){var f=(0,d.useState)(!1),_=e()(f,2),I=_[0],v=_[1],o=(0,d.useState)([]),P=e()(o,2),j=P[0],x=P[1],M=function(){I||(v(!0),fetch("https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo").then(function(h){return h.json()}).then(function(h){x([].concat(l()(j),l()(h.results))),v(!1)}).catch(function(){v(!1)}))};return(0,d.useEffect)(function(){M()},[]),(0,n.jsx)("div",{id:"scrollableDiv",style:{height:400,overflow:"auto",padding:"0 16px",border:"1px solid rgba(140, 140, 140, 0.35)"},children:(0,n.jsx)(D.Z,{dataLength:j.length,next:M,hasMore:j.length<200,loader:(0,n.jsx)(a.Z,{avatar:!0,paragraph:{rows:1},active:!0}),endMessage:(0,n.jsx)(r.Z,{plain:!0,children:"\u6CA1\u6709\u66F4\u591A\u4E86..."}),scrollableTarget:"scrollableDiv",children:(0,n.jsx)(s.Z,{dataSource:j,renderItem:function(h){return(0,n.jsxs)(s.Z.Item,{children:[(0,n.jsx)(s.Z.Item.Meta,{avatar:(0,n.jsx)(c.C,{src:h.picture.large}),title:(0,n.jsx)("a",{href:"https://ant.design",children:h.name.last}),description:h.email}),(0,n.jsx)("div",{children:"Content"})]},h.email)}})})})},E=m},58867:function(T,i,t){var g=t(42122),l=t.n(g),u=t(70215),e=t.n(u),a=t(51158),r=t(73453),c=t(67294),s=t(85893),d=["rowKey","height","itemMinHeight","onScrollBottom","renderItem"],D=function(m){var E,O=m.rowKey,f=m.height,_=f===void 0?0:f,I=m.itemMinHeight,v=m.onScrollBottom,o=m.renderItem,P=e()(m,d),j=function(M){var C=Math.ceil(M.currentTarget.scrollHeight),h=Math.ceil(M.currentTarget.scrollTop);_+h>=C&&(v==null||v())};return _?(0,s.jsx)(a.ZP,l()(l()({itemLayout:"vertical"},P),{},{children:(0,s.jsx)(r.Z,{data:(E=P.dataSource)!==null&&E!==void 0?E:[],height:_,itemHeight:I,itemKey:O,onScroll:j,children:function(M,C){return o==null?void 0:o(M,C)}})})):(0,s.jsx)(a.ZP,l()({renderItem:o},P))};D.Item=a.ZP.Item,i.Z=D}}]);
