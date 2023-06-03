"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[3932],{57838:function(de,V,p){p.d(V,{Z:function(){return Y}});var Q=p(67294);function Y(){const[,J]=Q.useReducer(z=>z+1,0);return J}},69814:function(de,V,p){p.d(V,{Z:function(){return Ve}});var Q=p(89739),Y=p(63606),J=p(4340),z=p(97937),pe=p(94184),R=p.n(pe),fe=p(10366),n=p(67294),ge=p(53124),re=p(87462),se=p(91),oe={className:"",percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,style:{},trailColor:"#D9D9D9",trailWidth:1,gapPosition:"bottom"},ne=function(){var t=(0,n.useRef)([]),r=(0,n.useRef)(null);return(0,n.useEffect)(function(){var s=Date.now(),o=!1;t.current.forEach(function(a){if(a){o=!0;var c=a.style;c.transitionDuration=".3s, .3s, .3s, .06s",r.current&&s-r.current<100&&(c.transitionDuration="0s, 0s")}}),o&&(r.current=Date.now())}),t.current},me=["className","percent","prefixCls","strokeColor","strokeLinecap","strokeWidth","style","trailColor","trailWidth","transition"],q=function(t){var r=t.className,s=t.percent,o=t.prefixCls,a=t.strokeColor,c=t.strokeLinecap,i=t.strokeWidth,l=t.style,f=t.trailColor,u=t.trailWidth,g=t.transition,h=(0,se.Z)(t,me);delete h.gapPosition;var C=Array.isArray(s)?s:[s],v=Array.isArray(a)?a:[a],y=ne(),m=i/2,k=100-i/2,d="M ".concat(c==="round"?m:0,",").concat(m,`
         L `).concat(c==="round"?k:100,",").concat(m),b="0 0 100 ".concat(i),$=0;return n.createElement("svg",(0,re.Z)({className:R()("".concat(o,"-line"),r),viewBox:b,preserveAspectRatio:"none",style:l},h),n.createElement("path",{className:"".concat(o,"-line-trail"),d,strokeLinecap:c,stroke:f,strokeWidth:u||i,fillOpacity:"0"}),C.map(function(O,x){var I=1;switch(c){case"round":I=1-i/100;break;case"square":I=1-i/2/100;break;default:I=1;break}var E={strokeDasharray:"".concat(O*I,"px, 100px"),strokeDashoffset:"-".concat($,"px"),transition:g||"stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear"},w=v[x]||v[v.length-1];return $+=O,n.createElement("path",{key:x,className:"".concat(o,"-line-path"),d,strokeLinecap:c,stroke:w,strokeWidth:i,fillOpacity:"0",ref:function(S){y[x]=S},style:E})}))};q.defaultProps=oe,q.displayName="Line";var ve=q,B=p(71002),ye=p(97685),he=p(98924),ie=0,Ce=(0,he.Z)();function Se(){var e;return Ce?(e=ie,ie+=1):e="TEST_OR_SSR",e}var $e=function(e){var t=n.useState(),r=(0,ye.Z)(t,2),s=r[0],o=r[1];return n.useEffect(function(){o("rc_progress_".concat(Se()))},[]),e||s},ke=["id","prefixCls","steps","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor","percent"];function ae(e){return+e.replace("%","")}function ce(e){var t=e!=null?e:[];return Array.isArray(t)?t:[t]}var M=100,_=function(t,r,s,o,a,c,i,l,f,u){var g=arguments.length>10&&arguments[10]!==void 0?arguments[10]:0,h=s/100*360*((360-c)/360),C=c===0?0:{bottom:0,top:180,left:90,right:-90}[i],v=(100-o)/100*r;return f==="round"&&o!==100&&(v+=u/2,v>=r&&(v=r-.01)),{stroke:typeof l=="string"?l:void 0,strokeDasharray:"".concat(r,"px ").concat(t),strokeDashoffset:v+g,transform:"rotate(".concat(a+h+C,"deg)"),transformOrigin:"0 0",transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",fillOpacity:0}},ee=function(t){var r=t.id,s=t.prefixCls,o=t.steps,a=t.strokeWidth,c=t.trailWidth,i=t.gapDegree,l=i===void 0?0:i,f=t.gapPosition,u=t.trailColor,g=t.strokeLinecap,h=t.style,C=t.className,v=t.strokeColor,y=t.percent,m=(0,se.Z)(t,ke),k=$e(r),d="".concat(k,"-gradient"),b=M/2-a/2,$=Math.PI*2*b,O=l>0?90+l/2:-90,x=$*((360-l)/360),I=(0,B.Z)(o)==="object"?o:{count:o,space:2},E=I.count,w=I.space,N=_($,x,0,100,O,l,f,u,g,a),S=ce(y),P=ce(v),A=P.find(function(L){return L&&(0,B.Z)(L)==="object"}),U=ne(),Qe=function(){var W=0;return S.map(function(Z,j){var G=P[j]||P[P.length-1],T=G&&(0,B.Z)(G)==="object"?"url(#".concat(d,")"):void 0,X=_($,x,W,Z,O,l,f,G,g,a);return W+=Z,n.createElement("circle",{key:j,className:"".concat(s,"-circle-path"),r:b,cx:0,cy:0,stroke:T,strokeLinecap:g,strokeWidth:a,opacity:Z===0?0:1,style:X,ref:function(K){U[j]=K}})}).reverse()},Ye=function(){var W=Math.round(E*(S[0]/100)),Z=100/E,j=0;return new Array(E).fill(null).map(function(G,T){var X=T<=W-1?P[0]:u,ue=X&&(0,B.Z)(X)==="object"?"url(#".concat(d,")"):void 0,K=_($,x,j,Z,O,l,f,X,"butt",a,w);return j+=(x-K.strokeDashoffset+w)*100/x,n.createElement("circle",{key:T,className:"".concat(s,"-circle-path"),r:b,cx:0,cy:0,stroke:ue,strokeWidth:a,opacity:1,style:K,ref:function(Je){U[T]=Je}})})};return n.createElement("svg",(0,re.Z)({className:R()("".concat(s,"-circle"),C),viewBox:"".concat(-M/2," ").concat(-M/2," ").concat(M," ").concat(M),style:h,id:r,role:"presentation"},m),A&&n.createElement("defs",null,n.createElement("linearGradient",{id:d,x1:"100%",y1:"0%",x2:"0%",y2:"0%"},Object.keys(A).sort(function(L,W){return ae(L)-ae(W)}).map(function(L,W){return n.createElement("stop",{key:W,offset:L,stopColor:A[L]})}))),!E&&n.createElement("circle",{className:"".concat(s,"-circle-trail"),r:b,cx:0,cy:0,stroke:u,strokeLinecap:g,strokeWidth:c||a,style:N}),E?Ye():Qe())};ee.defaultProps=oe,ee.displayName="Circle";var le=ee,ze={Line:ve,Circle:le},be=p(83062),te=p(16397);function D(e){return!e||e<0?0:e>100?100:e}function F(e){let{success:t,successPercent:r}=e,s=r;return t&&"progress"in t&&(s=t.progress),t&&"percent"in t&&(s=t.percent),s}const xe=e=>{let{percent:t,success:r,successPercent:s}=e;const o=D(F({success:r,successPercent:s}));return[o,D(D(t)-o)]},Pe=e=>{let{success:t={},strokeColor:r}=e;const{strokeColor:s}=t;return[s||te.presetPrimaryColors.green,r||null]},H=(e,t,r)=>{var s,o,a,c;let i=-1,l=-1;if(t==="step"){const f=r.steps,u=r.strokeWidth;typeof e=="string"||typeof e=="undefined"?(i=e==="small"?2:14,l=u!=null?u:8):typeof e=="number"?[i,l]=[e,e]:[i=14,l=8]=e,i*=f}else if(t==="line"){const f=r==null?void 0:r.strokeWidth;typeof e=="string"||typeof e=="undefined"?l=f||(e==="small"?6:8):typeof e=="number"?[i,l]=[e,e]:[i=-1,l=8]=e}else(t==="circle"||t==="dashboard")&&(typeof e=="string"||typeof e=="undefined"?[i,l]=e==="small"?[60,60]:[120,120]:typeof e=="number"?[i,l]=[e,e]:(i=(o=(s=e[0])!==null&&s!==void 0?s:e[1])!==null&&o!==void 0?o:120,l=(c=(a=e[0])!==null&&a!==void 0?a:e[1])!==null&&c!==void 0?c:120));return[i,l]},Ee=3,Oe=e=>Ee/e*100;var Ie=e=>{const{prefixCls:t,trailColor:r=null,strokeLinecap:s="round",gapPosition:o,gapDegree:a,width:c=120,type:i,children:l,success:f,size:u=c}=e,[g,h]=H(u,"circle");let{strokeWidth:C}=e;C===void 0&&(C=Math.max(Oe(g),6));const v={width:g,height:h,fontSize:g*.15+6},y=n.useMemo(()=>{if(a||a===0)return a;if(i==="dashboard")return 75},[a,i]),m=o||i==="dashboard"&&"bottom"||void 0,k=Object.prototype.toString.call(e.strokeColor)==="[object Object]",d=Pe({success:f,strokeColor:e.strokeColor}),b=R()(`${t}-inner`,{[`${t}-circle-gradient`]:k}),$=n.createElement(le,{percent:xe(e),strokeWidth:C,trailWidth:C,strokeColor:d,strokeLinecap:s,trailColor:r,prefixCls:t,gapDegree:y,gapPosition:m});return n.createElement("div",{className:b,style:v},g<=20?n.createElement(be.Z,{title:l},n.createElement("span",null,$)):n.createElement(n.Fragment,null,$,l))},Le=function(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(r[s[o]]=e[s[o]]);return r};const Ne=e=>{let t=[];return Object.keys(e).forEach(r=>{const s=parseFloat(r.replace(/%/g,""));isNaN(s)||t.push({key:s,value:e[r]})}),t=t.sort((r,s)=>r.key-s.key),t.map(r=>{let{key:s,value:o}=r;return`${o} ${s}%`}).join(", ")},We=(e,t)=>{const{from:r=te.presetPrimaryColors.blue,to:s=te.presetPrimaryColors.blue,direction:o=t==="rtl"?"to left":"to right"}=e,a=Le(e,["from","to","direction"]);if(Object.keys(a).length!==0){const c=Ne(a);return{backgroundImage:`linear-gradient(${o}, ${c})`}}return{backgroundImage:`linear-gradient(${o}, ${r}, ${s})`}};var De=e=>{const{prefixCls:t,direction:r,percent:s,size:o,strokeWidth:a,strokeColor:c,strokeLinecap:i="round",children:l,trailColor:f=null,success:u}=e,g=c&&typeof c!="string"?We(c,r):{backgroundColor:c},h=i==="square"||i==="butt"?0:void 0,C={backgroundColor:f||void 0,borderRadius:h},v=o!=null?o:[-1,a||(o==="small"?6:8)],[y,m]=H(v,"line",{strokeWidth:a}),k=Object.assign({width:`${D(s)}%`,height:m,borderRadius:h},g),d=F(e),b={width:`${D(d)}%`,height:m,borderRadius:h,backgroundColor:u==null?void 0:u.strokeColor},$={width:y<0?"100%":y,height:m};return n.createElement(n.Fragment,null,n.createElement("div",{className:`${t}-outer`,style:$},n.createElement("div",{className:`${t}-inner`,style:C},n.createElement("div",{className:`${t}-bg`,style:k}),d!==void 0?n.createElement("div",{className:`${t}-success-bg`,style:b}):null)),l)},we=e=>{const{size:t,steps:r,percent:s=0,strokeWidth:o=8,strokeColor:a,trailColor:c=null,prefixCls:i,children:l}=e,f=Math.round(r*(s/100)),u=t==="small"?2:14,g=t!=null?t:[u,o],[h,C]=H(g,"step",{steps:r,strokeWidth:o}),v=h/r,y=new Array(r);for(let m=0;m<r;m++){const k=Array.isArray(a)?a[m]:a;y[m]=n.createElement("div",{key:m,className:R()(`${i}-steps-item`,{[`${i}-steps-item-active`]:m<=f-1}),style:{backgroundColor:m<=f-1?k:c,width:v,height:C}})}return n.createElement("div",{className:`${i}-steps-outer`},y,l)},Ae=p(27431),je=p(67968),Re=p(45503),Me=p(14747);const Ze=new Ae.Keyframes("antProgressActive",{"0%":{transform:"translateX(-100%) scaleX(0)",opacity:.1},"20%":{transform:"translateX(-100%) scaleX(0)",opacity:.5},to:{transform:"translateX(0) scaleX(1)",opacity:0}}),Te=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:Object.assign(Object.assign({},(0,Me.Wf)(e)),{display:"inline-block","&-rtl":{direction:"rtl"},"&-line":{position:"relative",width:"100%",fontSize:e.fontSize,marginInlineEnd:e.marginXS,marginBottom:e.marginXS},[`${t}-outer`]:{display:"inline-block",width:"100%"},[`&${t}-show-info`]:{[`${t}-outer`]:{marginInlineEnd:`calc(-2em - ${e.marginXS}px)`,paddingInlineEnd:`calc(2em + ${e.paddingXS}px)`}},[`${t}-inner`]:{position:"relative",display:"inline-block",width:"100%",overflow:"hidden",verticalAlign:"middle",backgroundColor:e.progressRemainingColor,borderRadius:e.progressLineRadius},[`${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorInfo}},[`${t}-success-bg, ${t}-bg`]:{position:"relative",backgroundColor:e.colorInfo,borderRadius:e.progressLineRadius,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`},[`${t}-success-bg`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,backgroundColor:e.colorSuccess},[`${t}-text`]:{display:"inline-block",width:"2em",marginInlineStart:e.marginXS,color:e.progressInfoTextColor,lineHeight:1,whiteSpace:"nowrap",textAlign:"start",verticalAlign:"middle",wordBreak:"normal",[r]:{fontSize:e.fontSize}},[`&${t}-status-active`]:{[`${t}-bg::before`]:{position:"absolute",inset:0,backgroundColor:e.colorBgContainer,borderRadius:e.progressLineRadius,opacity:0,animationName:Ze,animationDuration:e.progressActiveMotionDuration,animationTimingFunction:e.motionEaseOutQuint,animationIterationCount:"infinite",content:'""'}},[`&${t}-status-exception`]:{[`${t}-bg`]:{backgroundColor:e.colorError},[`${t}-text`]:{color:e.colorError}},[`&${t}-status-exception ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorError}},[`&${t}-status-success`]:{[`${t}-bg`]:{backgroundColor:e.colorSuccess},[`${t}-text`]:{color:e.colorSuccess}},[`&${t}-status-success ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorSuccess}}})}},Xe=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:{[`${t}-circle-trail`]:{stroke:e.progressRemainingColor},[`&${t}-circle ${t}-inner`]:{position:"relative",lineHeight:1,backgroundColor:"transparent"},[`&${t}-circle ${t}-text`]:{position:"absolute",insetBlockStart:"50%",insetInlineStart:0,width:"100%",margin:0,padding:0,color:e.colorText,lineHeight:1,whiteSpace:"normal",textAlign:"center",transform:"translateY(-50%)",[r]:{fontSize:`${e.fontSize/e.fontSizeSM}em`}},[`${t}-circle&-status-exception`]:{[`${t}-text`]:{color:e.colorError}},[`${t}-circle&-status-success`]:{[`${t}-text`]:{color:e.colorSuccess}}},[`${t}-inline-circle`]:{lineHeight:1,[`${t}-inner`]:{verticalAlign:"bottom"}}}},Be=e=>{const{componentCls:t}=e;return{[t]:{[`${t}-steps`]:{display:"inline-block","&-outer":{display:"flex",flexDirection:"row",alignItems:"center"},"&-item":{flexShrink:0,minWidth:e.progressStepMinWidth,marginInlineEnd:e.progressStepMarginInlineEnd,backgroundColor:e.progressRemainingColor,transition:`all ${e.motionDurationSlow}`,"&-active":{backgroundColor:e.colorInfo}}}}}},Fe=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:{[`${t}-small&-line, ${t}-small&-line ${t}-text ${r}`]:{fontSize:e.fontSizeSM}}}};var He=(0,je.Z)("Progress",e=>{const t=e.marginXXS/2,r=(0,Re.TS)(e,{progressLineRadius:100,progressInfoTextColor:e.colorText,progressDefaultColor:e.colorInfo,progressRemainingColor:e.colorFillSecondary,progressStepMarginInlineEnd:t,progressStepMinWidth:t,progressActiveMotionDuration:"2.4s"});return[Te(r),Xe(r),Be(r),Fe(r)]}),Ue=function(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(r[s[o]]=e[s[o]]);return r};const tt=null,Ge=["normal","exception","active","success"];var Ke=n.forwardRef((e,t)=>{const{prefixCls:r,className:s,rootClassName:o,steps:a,strokeColor:c,percent:i=0,size:l="default",showInfo:f=!0,type:u="line",status:g,format:h}=e,C=Ue(e,["prefixCls","className","rootClassName","steps","strokeColor","percent","size","showInfo","type","status","format"]),v=n.useMemo(()=>{var N,S;const P=F(e);return parseInt(P!==void 0?(N=P!=null?P:0)===null||N===void 0?void 0:N.toString():(S=i!=null?i:0)===null||S===void 0?void 0:S.toString(),10)},[i,e.success,e.successPercent]),y=n.useMemo(()=>!Ge.includes(g)&&v>=100?"success":g||"normal",[g,v]),{getPrefixCls:m,direction:k}=n.useContext(ge.E_),d=m("progress",r),[b,$]=He(d),O=n.useMemo(()=>{if(!f)return null;const N=F(e);let S;const P=h||(U=>`${U}%`),A=u==="line";return h||y!=="exception"&&y!=="success"?S=P(D(i),D(N)):y==="exception"?S=A?n.createElement(J.Z,null):n.createElement(z.Z,null):y==="success"&&(S=A?n.createElement(Q.Z,null):n.createElement(Y.Z,null)),n.createElement("span",{className:`${d}-text`,title:typeof S=="string"?S:void 0},S)},[f,i,v,y,u,d,h]),x=Array.isArray(c)?c[0]:c,I=typeof c=="string"||Array.isArray(c)?c:void 0;let E;u==="line"?E=a?n.createElement(we,Object.assign({},e,{strokeColor:I,prefixCls:d,steps:a}),O):n.createElement(De,Object.assign({},e,{strokeColor:x,prefixCls:d,direction:k}),O):(u==="circle"||u==="dashboard")&&(E=n.createElement(Ie,Object.assign({},e,{strokeColor:x,prefixCls:d,progressStatus:y}),O));const w=R()(d,{[`${d}-inline-circle`]:u==="circle"&&H(l,"circle")[0]<=20,[`${d}-${u==="dashboard"&&"circle"||a&&"steps"||u}`]:!0,[`${d}-status-${y}`]:!0,[`${d}-show-info`]:f,[`${d}-${l}`]:typeof l=="string",[`${d}-rtl`]:k==="rtl"},s,o,$);return b(n.createElement("div",Object.assign({ref:t,className:w,role:"progressbar"},(0,fe.Z)(C,["trailColor","strokeWidth","width","gapDegree","gapPosition","strokeLinecap","success","successPercent"])),E))}),Ve=Ke}}]);
