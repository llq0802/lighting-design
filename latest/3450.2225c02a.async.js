(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[3450],{73475:function(y,z,a){"use strict";a.d(z,{Z:function(){return x}});var l=a(87462),p=a(67294),s={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"},P=s,T=a(13401),A=function(V,X){return p.createElement(T.Z,(0,l.Z)({},V,{ref:X,icon:P}))},x=p.forwardRef(A)},77101:function(y,z,a){"use strict";a.d(z,{Z:function(){return x}});var l=a(87462),p=a(67294),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"},P=s,T=a(13401),A=function(V,X){return p.createElement(T.Z,(0,l.Z)({},V,{ref:X,icon:P}))},x=p.forwardRef(A)},90768:function(y,z,a){"use strict";var l=a(97582),p=a(67294),s=a(92770),P=a(22638),T=a(90105);function A(x,R){x===void 0&&(x={}),R===void 0&&(R={});var V=R.defaultValue,X=R.defaultValuePropName,k=X===void 0?"defaultValue":X,v=R.valuePropName,E=v===void 0?"value":v,Q=R.trigger,J=Q===void 0?"onChange":Q,G=x[E],N=x.hasOwnProperty(E),W=(0,p.useMemo)(function(){return N?G:x.hasOwnProperty(k)?x[k]:V},[]),ee=(0,p.useRef)(W);N&&(ee.current=G);var ae=(0,T.Z)();function ie(re){for(var le=[],te=1;te<arguments.length;te++)le[te-1]=arguments[te];var h=(0,s.mf)(re)?re(ee.current):re;N||(ee.current=h,ae()),x[J]&&x[J].apply(x,(0,l.ev)([h],(0,l.CR)(le),!1))}return[ee.current,(0,P.Z)(ie)]}z.Z=A},90105:function(y,z,a){"use strict";var l=a(97582),p=a(67294),s=function(){var P=(0,l.CR)((0,p.useState)({}),2),T=P[1];return(0,p.useCallback)(function(){return T({})},[])};z.Z=s},4393:function(y,z,a){"use strict";a.d(z,{Z:function(){return je}});var l=a(67294),p=a(13144),s=a.n(p),P=a(10366),T=a(53124),A=a(98675),x=a(48054),R=a(52047),V=function(e,m){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&m.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,i=Object.getOwnPropertySymbols(e);c<i.length;c++)m.indexOf(i[c])<0&&Object.prototype.propertyIsEnumerable.call(e,i[c])&&(r[i[c]]=e[i[c]]);return r},k=e=>{var{prefixCls:m,className:r,hoverable:i=!0}=e,c=V(e,["prefixCls","className","hoverable"]);const{getPrefixCls:L}=l.useContext(T.E_),K=L("card",m),oe=s()(`${K}-grid`,r,{[`${K}-grid-hoverable`]:i});return l.createElement("div",Object.assign({},c,{className:oe}))},v=a(54548),E=a(14747),Q=a(91945),J=a(45503);const G=e=>{const{antCls:m,componentCls:r,headerHeight:i,cardPaddingBase:c,tabsMarginBottom:L}=e;return Object.assign(Object.assign({display:"flex",justifyContent:"center",flexDirection:"column",minHeight:i,marginBottom:-1,padding:`0 ${(0,v.unit)(c)}`,color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.headerFontSize,background:e.headerBg,borderBottom:`${(0,v.unit)(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`,borderRadius:`${(0,v.unit)(e.borderRadiusLG)} ${(0,v.unit)(e.borderRadiusLG)} 0 0`},(0,E.dF)()),{"&-wrapper":{width:"100%",display:"flex",alignItems:"center"},"&-title":Object.assign(Object.assign({display:"inline-block",flex:1},E.vS),{[`
          > ${r}-typography,
          > ${r}-typography-edit-content
        `]:{insetInlineStart:0,marginTop:0,marginBottom:0}}),[`${m}-tabs-top`]:{clear:"both",marginBottom:L,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,"&-bar":{borderBottom:`${(0,v.unit)(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`}}})},N=e=>{const{cardPaddingBase:m,colorBorderSecondary:r,cardShadow:i,lineWidth:c}=e;return{width:"33.33%",padding:m,border:0,borderRadius:0,boxShadow:`
      ${(0,v.unit)(c)} 0 0 0 ${r},
      0 ${(0,v.unit)(c)} 0 0 ${r},
      ${(0,v.unit)(c)} ${(0,v.unit)(c)} 0 0 ${r},
      ${(0,v.unit)(c)} 0 0 0 ${r} inset,
      0 ${(0,v.unit)(c)} 0 0 ${r} inset;
    `,transition:`all ${e.motionDurationMid}`,"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:i}}},W=e=>{const{componentCls:m,iconCls:r,actionsLiMargin:i,cardActionsIconSize:c,colorBorderSecondary:L,actionsBg:K}=e;return Object.assign(Object.assign({margin:0,padding:0,listStyle:"none",background:K,borderTop:`${(0,v.unit)(e.lineWidth)} ${e.lineType} ${L}`,display:"flex",borderRadius:`0 0 ${(0,v.unit)(e.borderRadiusLG)} ${(0,v.unit)(e.borderRadiusLG)}`},(0,E.dF)()),{"& > li":{margin:i,color:e.colorTextDescription,textAlign:"center","> span":{position:"relative",display:"block",minWidth:e.calc(e.cardActionsIconSize).mul(2).equal(),fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer","&:hover":{color:e.colorPrimary,transition:`color ${e.motionDurationMid}`},[`a:not(${m}-btn), > ${r}`]:{display:"inline-block",width:"100%",color:e.colorTextDescription,lineHeight:(0,v.unit)(e.fontHeight),transition:`color ${e.motionDurationMid}`,"&:hover":{color:e.colorPrimary}},[`> ${r}`]:{fontSize:c,lineHeight:(0,v.unit)(e.calc(c).mul(e.lineHeight).equal())}},"&:not(:last-child)":{borderInlineEnd:`${(0,v.unit)(e.lineWidth)} ${e.lineType} ${L}`}}})},ee=e=>Object.assign(Object.assign({margin:`${(0,v.unit)(e.calc(e.marginXXS).mul(-1).equal())} 0`,display:"flex"},(0,E.dF)()),{"&-avatar":{paddingInlineEnd:e.padding},"&-detail":{overflow:"hidden",flex:1,"> div:not(:last-child)":{marginBottom:e.marginXS}},"&-title":Object.assign({color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG},E.vS),"&-description":{color:e.colorTextDescription}}),ae=e=>{const{componentCls:m,cardPaddingBase:r,colorFillAlter:i}=e;return{[`${m}-head`]:{padding:`0 ${(0,v.unit)(r)}`,background:i,"&-title":{fontSize:e.fontSize}},[`${m}-body`]:{padding:`${(0,v.unit)(e.padding)} ${(0,v.unit)(r)}`}}},ie=e=>{const{componentCls:m}=e;return{overflow:"hidden",[`${m}-body`]:{userSelect:"none"}}},re=e=>{const{antCls:m,componentCls:r,cardShadow:i,cardHeadPadding:c,colorBorderSecondary:L,boxShadowTertiary:K,cardPaddingBase:oe,extraColor:U}=e;return{[r]:Object.assign(Object.assign({},(0,E.Wf)(e)),{position:"relative",background:e.colorBgContainer,borderRadius:e.borderRadiusLG,[`&:not(${r}-bordered)`]:{boxShadow:K},[`${r}-head`]:G(e),[`${r}-extra`]:{marginInlineStart:"auto",color:U,fontWeight:"normal",fontSize:e.fontSize},[`${r}-body`]:Object.assign({padding:oe,borderRadius:` 0 0 ${(0,v.unit)(e.borderRadiusLG)} ${(0,v.unit)(e.borderRadiusLG)}`},(0,E.dF)()),[`${r}-grid`]:N(e),[`${r}-cover`]:{"> *":{display:"block",width:"100%"},[`img, img + ${m}-image-mask`]:{borderRadius:`${(0,v.unit)(e.borderRadiusLG)} ${(0,v.unit)(e.borderRadiusLG)} 0 0`}},[`${r}-actions`]:W(e),[`${r}-meta`]:ee(e)}),[`${r}-bordered`]:{border:`${(0,v.unit)(e.lineWidth)} ${e.lineType} ${L}`,[`${r}-cover`]:{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1}},[`${r}-hoverable`]:{cursor:"pointer",transition:`box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,"&:hover":{borderColor:"transparent",boxShadow:i}},[`${r}-contain-grid`]:{borderRadius:`${(0,v.unit)(e.borderRadiusLG)} ${(0,v.unit)(e.borderRadiusLG)} 0 0 `,[`${r}-body`]:{display:"flex",flexWrap:"wrap"},[`&:not(${r}-loading) ${r}-body`]:{marginBlockStart:e.calc(e.lineWidth).mul(-1).equal(),marginInlineStart:e.calc(e.lineWidth).mul(-1).equal(),padding:0}},[`${r}-contain-tabs`]:{[`> ${r}-head`]:{minHeight:0,[`${r}-head-title, ${r}-extra`]:{paddingTop:c}}},[`${r}-type-inner`]:ae(e),[`${r}-loading`]:ie(e),[`${r}-rtl`]:{direction:"rtl"}}},le=e=>{const{componentCls:m,cardPaddingSM:r,headerHeightSM:i,headerFontSizeSM:c}=e;return{[`${m}-small`]:{[`> ${m}-head`]:{minHeight:i,padding:`0 ${(0,v.unit)(r)}`,fontSize:c,[`> ${m}-head-wrapper`]:{[`> ${m}-extra`]:{fontSize:e.fontSize}}},[`> ${m}-body`]:{padding:r}},[`${m}-small${m}-contain-tabs`]:{[`> ${m}-head`]:{[`${m}-head-title, ${m}-extra`]:{paddingTop:0,display:"flex",alignItems:"center"}}}}},te=e=>({headerBg:"transparent",headerFontSize:e.fontSizeLG,headerFontSizeSM:e.fontSize,headerHeight:e.fontSizeLG*e.lineHeightLG+e.padding*2,headerHeightSM:e.fontSize*e.lineHeight+e.paddingXS*2,actionsBg:e.colorBgContainer,actionsLiMargin:`${e.paddingSM}px 0`,tabsMarginBottom:-e.padding-e.lineWidth,extraColor:e.colorText});var h=(0,Q.I$)("Card",e=>{const m=(0,J.TS)(e,{cardShadow:e.boxShadowCard,cardHeadPadding:e.padding,cardPaddingBase:e.paddingLG,cardActionsIconSize:e.fontSize,cardPaddingSM:12});return[re(m),le(m)]},te),u=function(e,m){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&m.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,i=Object.getOwnPropertySymbols(e);c<i.length;c++)m.indexOf(i[c])<0&&Object.prototype.propertyIsEnumerable.call(e,i[c])&&(r[i[c]]=e[i[c]]);return r};const O=e=>{const{actionClasses:m,actions:r=[],actionStyle:i}=e;return l.createElement("ul",{className:m,style:i},r.map((c,L)=>{const K=`action-${L}`;return l.createElement("li",{style:{width:`${100/r.length}%`},key:K},l.createElement("span",null,c))}))};var F=l.forwardRef((e,m)=>{const{prefixCls:r,className:i,rootClassName:c,style:L,extra:K,headStyle:oe={},bodyStyle:U={},title:ge,loading:fe,bordered:he=!0,size:q,type:ve,cover:xe,actions:t,tabList:n,children:o,activeTabKey:d,defaultActiveTabKey:f,tabBarExtraContent:$,hoverable:C,tabProps:b={},classNames:g,styles:B}=e,H=u(e,["prefixCls","className","rootClassName","style","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps","classNames","styles"]),{getPrefixCls:D,direction:Y,card:j}=l.useContext(T.E_),ne=Z=>{var w;(w=e.onTabChange)===null||w===void 0||w.call(e,Z)},I=Z=>{var w;return s()((w=j==null?void 0:j.classNames)===null||w===void 0?void 0:w[Z],g==null?void 0:g[Z])},_=Z=>{var w;return Object.assign(Object.assign({},(w=j==null?void 0:j.styles)===null||w===void 0?void 0:w[Z]),B==null?void 0:B[Z])},ye=l.useMemo(()=>{let Z=!1;return l.Children.forEach(o,w=>{w&&w.type&&w.type===k&&(Z=!0)}),Z},[o]),M=D("card",r),[de,pe,be]=h(M),Ee=l.createElement(x.Z,{loading:!0,active:!0,paragraph:{rows:4},title:!1},o),Ce=d!==void 0,Pe=Object.assign(Object.assign({},b),{[Ce?"activeKey":"defaultActiveKey"]:Ce?d:f,tabBarExtraContent:$});let me;const ue=(0,A.Z)(q),Se=!ue||ue==="default"?"large":ue,ze=n?l.createElement(R.Z,Object.assign({size:Se},Pe,{className:`${M}-head-tabs`,onChange:ne,items:n.map(Z=>{var{tab:w}=Z,Me=u(Z,["tab"]);return Object.assign({label:w},Me)})})):null;if(ge||K||ze){const Z=s()(`${M}-head`,I("header")),w=s()(`${M}-head-title`,I("title")),Me=s()(`${M}-extra`,I("extra")),We=Object.assign(Object.assign({},oe),_("header"));me=l.createElement("div",{className:Z,style:We},l.createElement("div",{className:`${M}-head-wrapper`},ge&&l.createElement("div",{className:w,style:_("title")},ge),K&&l.createElement("div",{className:Me,style:_("extra")},K)),ze)}const Te=s()(`${M}-cover`,I("cover")),Be=xe?l.createElement("div",{className:Te,style:_("cover")},xe):null,Ie=s()(`${M}-body`,I("body")),Ne=Object.assign(Object.assign({},U),_("body")),we=l.createElement("div",{className:Ie,style:Ne},fe?Ee:o),Re=s()(`${M}-actions`,I("actions")),Ae=t&&t.length?l.createElement(O,{actionClasses:Re,actionStyle:_("actions"),actions:t}):null,Le=(0,P.Z)(H,["onTabChange"]),De=s()(M,j==null?void 0:j.className,{[`${M}-loading`]:fe,[`${M}-bordered`]:he,[`${M}-hoverable`]:C,[`${M}-contain-grid`]:ye,[`${M}-contain-tabs`]:n&&n.length,[`${M}-${ue}`]:ue,[`${M}-type-${ve}`]:!!ve,[`${M}-rtl`]:Y==="rtl"},i,c,pe,be),He=Object.assign(Object.assign({},j==null?void 0:j.style),L);return de(l.createElement("div",Object.assign({ref:m},Le,{className:De,style:He}),me,Be,we,Ae))}),ce=function(e,m){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&m.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,i=Object.getOwnPropertySymbols(e);c<i.length;c++)m.indexOf(i[c])<0&&Object.prototype.propertyIsEnumerable.call(e,i[c])&&(r[i[c]]=e[i[c]]);return r},Oe=e=>{const{prefixCls:m,className:r,avatar:i,title:c,description:L}=e,K=ce(e,["prefixCls","className","avatar","title","description"]),{getPrefixCls:oe}=l.useContext(T.E_),U=oe("card",m),ge=s()(`${U}-meta`,r),fe=i?l.createElement("div",{className:`${U}-meta-avatar`},i):null,he=c?l.createElement("div",{className:`${U}-meta-title`},c):null,q=L?l.createElement("div",{className:`${U}-meta-description`},L):null,ve=he||q?l.createElement("div",{className:`${U}-meta-detail`},he,q):null;return l.createElement("div",Object.assign({},K,{className:ge}),fe,ve)};const se=F;se.Grid=k,se.Meta=Oe;var je=se},48054:function(y,z,a){"use strict";a.d(z,{Z:function(){return xe}});var l=a(13144),p=a.n(l),s=a(67294),P=a(53124),T=a(10366),x=t=>{const{prefixCls:n,className:o,style:d,size:f,shape:$}=t,C=p()({[`${n}-lg`]:f==="large",[`${n}-sm`]:f==="small"}),b=p()({[`${n}-circle`]:$==="circle",[`${n}-square`]:$==="square",[`${n}-round`]:$==="round"}),g=s.useMemo(()=>typeof f=="number"?{width:f,height:f,lineHeight:`${f}px`}:{},[f]);return s.createElement("span",{className:p()(n,C,b,o),style:Object.assign(Object.assign({},g),d)})},R=a(54548),V=a(91945),X=a(45503);const k=new R.Keyframes("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),v=t=>({height:t,lineHeight:(0,R.unit)(t)}),E=t=>Object.assign({width:t},v(t)),Q=t=>({background:t.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:k,animationDuration:t.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}),J=(t,n)=>Object.assign({width:n(t).mul(5).equal(),minWidth:n(t).mul(5).equal()},v(t)),G=t=>{const{skeletonAvatarCls:n,gradientFromColor:o,controlHeight:d,controlHeightLG:f,controlHeightSM:$}=t;return{[`${n}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:o},E(d)),[`${n}${n}-circle`]:{borderRadius:"50%"},[`${n}${n}-lg`]:Object.assign({},E(f)),[`${n}${n}-sm`]:Object.assign({},E($))}},N=t=>{const{controlHeight:n,borderRadiusSM:o,skeletonInputCls:d,controlHeightLG:f,controlHeightSM:$,gradientFromColor:C,calc:b}=t;return{[`${d}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:C,borderRadius:o},J(n,b)),[`${d}-lg`]:Object.assign({},J(f,b)),[`${d}-sm`]:Object.assign({},J($,b))}},W=t=>Object.assign({width:t},v(t)),ee=t=>{const{skeletonImageCls:n,imageSizeBase:o,gradientFromColor:d,borderRadiusSM:f,calc:$}=t;return{[`${n}`]:Object.assign(Object.assign({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:d,borderRadius:f},W($(o).mul(2).equal())),{[`${n}-path`]:{fill:"#bfbfbf"},[`${n}-svg`]:Object.assign(Object.assign({},W(o)),{maxWidth:$(o).mul(4).equal(),maxHeight:$(o).mul(4).equal()}),[`${n}-svg${n}-svg-circle`]:{borderRadius:"50%"}}),[`${n}${n}-circle`]:{borderRadius:"50%"}}},ae=(t,n,o)=>{const{skeletonButtonCls:d}=t;return{[`${o}${d}-circle`]:{width:n,minWidth:n,borderRadius:"50%"},[`${o}${d}-round`]:{borderRadius:n}}},ie=(t,n)=>Object.assign({width:n(t).mul(2).equal(),minWidth:n(t).mul(2).equal()},v(t)),re=t=>{const{borderRadiusSM:n,skeletonButtonCls:o,controlHeight:d,controlHeightLG:f,controlHeightSM:$,gradientFromColor:C,calc:b}=t;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[`${o}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:C,borderRadius:n,width:b(d).mul(2).equal(),minWidth:b(d).mul(2).equal()},ie(d,b))},ae(t,d,o)),{[`${o}-lg`]:Object.assign({},ie(f,b))}),ae(t,f,`${o}-lg`)),{[`${o}-sm`]:Object.assign({},ie($,b))}),ae(t,$,`${o}-sm`))},le=t=>{const{componentCls:n,skeletonAvatarCls:o,skeletonTitleCls:d,skeletonParagraphCls:f,skeletonButtonCls:$,skeletonInputCls:C,skeletonImageCls:b,controlHeight:g,controlHeightLG:B,controlHeightSM:H,gradientFromColor:D,padding:Y,marginSM:j,borderRadius:ne,titleHeight:I,blockRadius:_,paragraphLiHeight:ye,controlHeightXS:M,paragraphMarginTop:de}=t;return{[`${n}`]:{display:"table",width:"100%",[`${n}-header`]:{display:"table-cell",paddingInlineEnd:Y,verticalAlign:"top",[`${o}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:D},E(g)),[`${o}-circle`]:{borderRadius:"50%"},[`${o}-lg`]:Object.assign({},E(B)),[`${o}-sm`]:Object.assign({},E(H))},[`${n}-content`]:{display:"table-cell",width:"100%",verticalAlign:"top",[`${d}`]:{width:"100%",height:I,background:D,borderRadius:_,[`+ ${f}`]:{marginBlockStart:H}},[`${f}`]:{padding:0,"> li":{width:"100%",height:ye,listStyle:"none",background:D,borderRadius:_,"+ li":{marginBlockStart:M}}},[`${f}> li:last-child:not(:first-child):not(:nth-child(2))`]:{width:"61%"}},[`&-round ${n}-content`]:{[`${d}, ${f} > li`]:{borderRadius:ne}}},[`${n}-with-avatar ${n}-content`]:{[`${d}`]:{marginBlockStart:j,[`+ ${f}`]:{marginBlockStart:de}}},[`${n}${n}-element`]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},re(t)),G(t)),N(t)),ee(t)),[`${n}${n}-block`]:{width:"100%",[`${$}`]:{width:"100%"},[`${C}`]:{width:"100%"}},[`${n}${n}-active`]:{[`
        ${d},
        ${f} > li,
        ${o},
        ${$},
        ${C},
        ${b}
      `]:Object.assign({},Q(t))}}},te=t=>{const{colorFillContent:n,colorFill:o}=t,d=n,f=o;return{color:d,colorGradientEnd:f,gradientFromColor:d,gradientToColor:f,titleHeight:t.controlHeight/2,blockRadius:t.borderRadiusSM,paragraphMarginTop:t.marginLG+t.marginXXS,paragraphLiHeight:t.controlHeight/2}};var h=(0,V.I$)("Skeleton",t=>{const{componentCls:n,calc:o}=t,d=(0,X.TS)(t,{skeletonAvatarCls:`${n}-avatar`,skeletonTitleCls:`${n}-title`,skeletonParagraphCls:`${n}-paragraph`,skeletonButtonCls:`${n}-button`,skeletonInputCls:`${n}-input`,skeletonImageCls:`${n}-image`,imageSizeBase:o(t.controlHeight).mul(1.5).equal(),borderRadius:100,skeletonLoadingBackground:`linear-gradient(90deg, ${t.gradientFromColor} 25%, ${t.gradientToColor} 37%, ${t.gradientFromColor} 63%)`,skeletonLoadingMotionDuration:"1.4s"});return[le(d)]},te,{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]}),O=t=>{const{prefixCls:n,className:o,rootClassName:d,active:f,shape:$="circle",size:C="default"}=t,{getPrefixCls:b}=s.useContext(P.E_),g=b("skeleton",n),[B,H,D]=h(g),Y=(0,T.Z)(t,["prefixCls","className"]),j=p()(g,`${g}-element`,{[`${g}-active`]:f},o,d,H,D);return B(s.createElement("div",{className:j},s.createElement(x,Object.assign({prefixCls:`${g}-avatar`,shape:$,size:C},Y))))},F=t=>{const{prefixCls:n,className:o,rootClassName:d,active:f,block:$=!1,size:C="default"}=t,{getPrefixCls:b}=s.useContext(P.E_),g=b("skeleton",n),[B,H,D]=h(g),Y=(0,T.Z)(t,["prefixCls"]),j=p()(g,`${g}-element`,{[`${g}-active`]:f,[`${g}-block`]:$},o,d,H,D);return B(s.createElement("div",{className:j},s.createElement(x,Object.assign({prefixCls:`${g}-button`,size:C},Y))))};const ce="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z";var Oe=t=>{const{prefixCls:n,className:o,rootClassName:d,style:f,active:$}=t,{getPrefixCls:C}=s.useContext(P.E_),b=C("skeleton",n),[g,B,H]=h(b),D=p()(b,`${b}-element`,{[`${b}-active`]:$},o,d,B,H);return g(s.createElement("div",{className:D},s.createElement("div",{className:p()(`${b}-image`,o),style:f},s.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:`${b}-image-svg`},s.createElement("path",{d:ce,className:`${b}-image-path`})))))},je=t=>{const{prefixCls:n,className:o,rootClassName:d,active:f,block:$,size:C="default"}=t,{getPrefixCls:b}=s.useContext(P.E_),g=b("skeleton",n),[B,H,D]=h(g),Y=(0,T.Z)(t,["prefixCls"]),j=p()(g,`${g}-element`,{[`${g}-active`]:f,[`${g}-block`]:$},o,d,H,D);return B(s.createElement("div",{className:j},s.createElement(x,Object.assign({prefixCls:`${g}-input`,size:C},Y))))},e=a(77101),r=t=>{const{prefixCls:n,className:o,rootClassName:d,style:f,active:$,children:C}=t,{getPrefixCls:b}=s.useContext(P.E_),g=b("skeleton",n),[B,H,D]=h(g),Y=p()(g,`${g}-element`,{[`${g}-active`]:$},H,o,d,D),j=C!=null?C:s.createElement(e.Z,null);return B(s.createElement("div",{className:Y},s.createElement("div",{className:p()(`${g}-image`,o),style:f},j)))},i=a(74902),L=t=>{const n=b=>{const{width:g,rows:B=2}=t;if(Array.isArray(g))return g[b];if(B-1===b)return g},{prefixCls:o,className:d,style:f,rows:$}=t,C=(0,i.Z)(Array($)).map((b,g)=>s.createElement("li",{key:g,style:{width:n(g)}}));return s.createElement("ul",{className:p()(o,d),style:f},C)},oe=t=>{let{prefixCls:n,className:o,width:d,style:f}=t;return s.createElement("h3",{className:p()(n,o),style:Object.assign({width:d},f)})};function U(t){return t&&typeof t=="object"?t:{}}function ge(t,n){return t&&!n?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function fe(t,n){return!t&&n?{width:"38%"}:t&&n?{width:"50%"}:{}}function he(t,n){const o={};return(!t||!n)&&(o.width="61%"),!t&&n?o.rows=3:o.rows=2,o}const q=t=>{const{prefixCls:n,loading:o,className:d,rootClassName:f,style:$,children:C,avatar:b=!1,title:g=!0,paragraph:B=!0,active:H,round:D}=t,{getPrefixCls:Y,direction:j,skeleton:ne}=s.useContext(P.E_),I=Y("skeleton",n),[_,ye,M]=h(I);if(o||!("loading"in t)){const de=!!b,pe=!!g,be=!!B;let Ee;if(de){const me=Object.assign(Object.assign({prefixCls:`${I}-avatar`},ge(pe,be)),U(b));Ee=s.createElement("div",{className:`${I}-header`},s.createElement(x,Object.assign({},me)))}let Ce;if(pe||be){let me;if(pe){const Se=Object.assign(Object.assign({prefixCls:`${I}-title`},fe(de,be)),U(g));me=s.createElement(oe,Object.assign({},Se))}let ue;if(be){const Se=Object.assign(Object.assign({prefixCls:`${I}-paragraph`},he(de,pe)),U(B));ue=s.createElement(L,Object.assign({},Se))}Ce=s.createElement("div",{className:`${I}-content`},me,ue)}const Pe=p()(I,{[`${I}-with-avatar`]:de,[`${I}-active`]:H,[`${I}-rtl`]:j==="rtl",[`${I}-round`]:D},ne==null?void 0:ne.className,d,f,ye,M);return _(s.createElement("div",{className:Pe,style:Object.assign(Object.assign({},ne==null?void 0:ne.style),$)},Ee,Ce))}return typeof C!="undefined"?C:null};q.Button=F,q.Avatar=O,q.Input=je,q.Image=Oe,q.Node=r;var ve=q,xe=ve},67771:function(y,z,a){"use strict";a.d(z,{Qt:function(){return T},Uw:function(){return P},fJ:function(){return s},ly:function(){return A},oN:function(){return v}});var l=a(54548),p=a(93590);const s=new l.Keyframes("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),P=new l.Keyframes("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),T=new l.Keyframes("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),A=new l.Keyframes("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),x=new l.Keyframes("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),R=new l.Keyframes("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}}),V=new l.Keyframes("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),X=new l.Keyframes("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}}),k={"slide-up":{inKeyframes:s,outKeyframes:P},"slide-down":{inKeyframes:T,outKeyframes:A},"slide-left":{inKeyframes:x,outKeyframes:R},"slide-right":{inKeyframes:V,outKeyframes:X}},v=(E,Q)=>{const{antCls:J}=E,G=`${J}-${Q}`,{inKeyframes:N,outKeyframes:W}=k[Q];return[(0,p.R)(G,N,W,E.motionDurationMid),{[`
      ${G}-enter,
      ${G}-appear
    `]:{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:E.motionEaseOutQuint,["&-prepare"]:{transform:"scale(1)"}},[`${G}-leave`]:{animationTimingFunction:E.motionEaseInQuint}}]}},9361:function(y,z,a){"use strict";a.d(z,{Z:function(){return te}});var l=a(54548),p=a(67164),s=a(2790),P=a(1393),A=h=>{const u=h!=null&&h.algorithm?(0,l.createTheme)(h.algorithm):(0,l.createTheme)(p.Z),O=Object.assign(Object.assign({},s.Z),h==null?void 0:h.token);return(0,l.getComputedToken)(O,{override:h==null?void 0:h.token},u,P.Z)},x=a(29691),R=a(33083),V=a(372);function X(h){const{sizeUnit:u,sizeStep:O}=h,S=O-2;return{sizeXXL:u*(S+10),sizeXL:u*(S+6),sizeLG:u*(S+2),sizeMD:u*(S+2),sizeMS:u*(S+1),size:u*S,sizeSM:u*S,sizeXS:u*(S-1),sizeXXS:u*(S-1)}}var k=a(69594),E=(h,u)=>{const O=u!=null?u:(0,p.Z)(h),S=O.fontSizeSM,F=O.controlHeight-4;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},O),X(u!=null?u:h)),(0,k.Z)(S)),{controlHeight:F}),(0,V.Z)(Object.assign(Object.assign({},O),{controlHeight:F})))},Q=a(16397),J=a(57),G=a(10274);const N=(h,u)=>new G.C(h).setAlpha(u).toRgbString(),W=(h,u)=>new G.C(h).lighten(u).toHexString(),ee=h=>{const u=(0,Q.generate)(h,{theme:"dark"});return{1:u[0],2:u[1],3:u[2],4:u[3],5:u[6],6:u[5],7:u[4],8:u[6],9:u[5],10:u[4]}},ae=(h,u)=>{const O=h||"#000",S=u||"#fff";return{colorBgBase:O,colorTextBase:S,colorText:N(S,.85),colorTextSecondary:N(S,.65),colorTextTertiary:N(S,.45),colorTextQuaternary:N(S,.25),colorFill:N(S,.18),colorFillSecondary:N(S,.12),colorFillTertiary:N(S,.08),colorFillQuaternary:N(S,.04),colorBgElevated:W(O,12),colorBgContainer:W(O,8),colorBgLayout:W(O,0),colorBgSpotlight:W(O,26),colorBgBlur:N(S,.04),colorBorder:W(O,26),colorBorderSecondary:W(O,19)}};var re=(h,u)=>{const O=Object.keys(s.M).map(F=>{const ce=(0,Q.generate)(h[F],{theme:"dark"});return new Array(10).fill(1).reduce(($e,Oe,se)=>($e[`${F}-${se+1}`]=ce[se],$e[`${F}${se+1}`]=ce[se],$e),{})}).reduce((F,ce)=>(F=Object.assign(Object.assign({},F),ce),F),{}),S=u!=null?u:(0,p.Z)(h);return Object.assign(Object.assign(Object.assign({},S),O),(0,J.Z)(h,{generateColorPalettes:ee,generateNeutralColorPalettes:ae}))};function le(){const[h,u,O]=(0,x.ZP)();return{theme:h,token:u,hashId:O}}var te={defaultConfig:R.u_,defaultSeed:R.u_.token,useToken:le,defaultAlgorithm:p.Z,darkAlgorithm:re,compactAlgorithm:E,getDesignToken:A}},96446:function(y,z,a){var l=a(37923);function p(s){if(Array.isArray(s))return l(s)}y.exports=p,y.exports.__esModule=!0,y.exports.default=y.exports},96936:function(y){function z(a){if(typeof Symbol!="undefined"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}y.exports=z,y.exports.__esModule=!0,y.exports.default=y.exports},88619:function(y){function z(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}y.exports=z,y.exports.__esModule=!0,y.exports.default=y.exports},19632:function(y,z,a){var l=a(96446),p=a(96936),s=a(96263),P=a(88619);function T(A){return l(A)||p(A)||s(A)||P()}y.exports=T,y.exports.__esModule=!0,y.exports.default=y.exports}}]);
