"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[3932],{57838:function(ge,Q,f){f.d(Q,{Z:function(){return J}});var Y=f(67294);function J(){const[,z]=Y.useReducer(q=>q+1,0);return z}},69814:function(ge,Q,f){f.d(Q,{Z:function(){return Ye}});var Y=f(89739),J=f(63606),z=f(4340),q=f(97937),me=f(94184),M=f.n(me),ve=f(10366),n=f(67294),ye=f(53124),oe=f(87462),ne=f(91),ie={className:"",percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,style:{},trailColor:"#D9D9D9",trailWidth:1,gapPosition:"bottom"},ae=function(){var t=(0,n.useRef)([]),r=(0,n.useRef)(null);return(0,n.useEffect)(function(){var s=Date.now(),o=!1;t.current.forEach(function(a){if(a){o=!0;var c=a.style;c.transitionDuration=".3s, .3s, .3s, .06s",r.current&&s-r.current<100&&(c.transitionDuration="0s, 0s")}}),o&&(r.current=Date.now())}),t.current},he=["className","percent","prefixCls","strokeColor","strokeLinecap","strokeWidth","style","trailColor","trailWidth","transition"],_=function(t){var r=t.className,s=t.percent,o=t.prefixCls,a=t.strokeColor,c=t.strokeLinecap,i=t.strokeWidth,l=t.style,g=t.trailColor,u=t.trailWidth,m=t.transition,v=(0,ne.Z)(t,he);delete v.gapPosition;var C=Array.isArray(s)?s:[s],y=Array.isArray(a)?a:[a],S=ae(),d=i/2,k=100-i/2,$="M ".concat(c==="round"?d:0,",").concat(d,`
         L `).concat(c==="round"?k:100,",").concat(d),h="0 0 100 ".concat(i),p=0;return n.createElement("svg",(0,oe.Z)({className:M()("".concat(o,"-line"),r),viewBox:h,preserveAspectRatio:"none",style:l},v),n.createElement("path",{className:"".concat(o,"-line-trail"),d:$,strokeLinecap:c,stroke:g,strokeWidth:u||i,fillOpacity:"0"}),C.map(function(N,x){var P=1;switch(c){case"round":P=1-i/100;break;case"square":P=1-i/2/100;break;default:P=1;break}var O={strokeDasharray:"".concat(N*P,"px, 100px"),strokeDashoffset:"-".concat(p,"px"),transition:m||"stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear"},w=y[x]||y[y.length-1];return p+=N,n.createElement("path",{key:x,className:"".concat(o,"-line-path"),d:$,strokeLinecap:c,stroke:w,strokeWidth:i,fillOpacity:"0",ref:function(A){S[x]=A},style:O})}))};_.defaultProps=ie,_.displayName="Line";var Ce=_,F=f(71002),Se=f(97685),$e=f(98924),ce=0,be=(0,$e.Z)();function ke(){var e;return be?(e=ce,ce+=1):e="TEST_OR_SSR",e}var xe=function(e){var t=n.useState(),r=(0,Se.Z)(t,2),s=r[0],o=r[1];return n.useEffect(function(){o("rc_progress_".concat(ke()))},[]),e||s},Pe=["id","prefixCls","steps","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor","percent"];function le(e){return+e.replace("%","")}function ue(e){var t=e!=null?e:[];return Array.isArray(t)?t:[t]}var T=100,ee=function(t,r,s,o,a,c,i,l,g,u){var m=arguments.length>10&&arguments[10]!==void 0?arguments[10]:0,v=s/100*360*((360-c)/360),C=c===0?0:{bottom:0,top:180,left:90,right:-90}[i],y=(100-o)/100*r;return g==="round"&&o!==100&&(y+=u/2,y>=r&&(y=r-.01)),{stroke:typeof l=="string"?l:void 0,strokeDasharray:"".concat(r,"px ").concat(t),strokeDashoffset:y+m,transform:"rotate(".concat(a+v+C,"deg)"),transformOrigin:"0 0",transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",fillOpacity:0}},te=function(t){var r=t.id,s=t.prefixCls,o=t.steps,a=t.strokeWidth,c=t.trailWidth,i=t.gapDegree,l=i===void 0?0:i,g=t.gapPosition,u=t.trailColor,m=t.strokeLinecap,v=t.style,C=t.className,y=t.strokeColor,S=t.percent,d=(0,ne.Z)(t,Pe),k=xe(r),$="".concat(k,"-gradient"),h=T/2-a/2,p=Math.PI*2*h,N=l>0?90+l/2:-90,x=p*((360-l)/360),P=(0,F.Z)(o)==="object"?o:{count:o,space:2},O=P.count,w=P.space,j=ee(p,x,0,100,N,l,g,u,m,a),A=ue(S),E=ue(y),b=E.find(function(I){return I&&(0,F.Z)(I)==="object"}),L=ae(),G=function(){var W=0;return A.map(function(Z,R){var K=E[R]||E[E.length-1],X=K&&(0,F.Z)(K)==="object"?"url(#".concat($,")"):void 0,B=ee(p,x,W,Z,N,l,g,K,m,a);return W+=Z,n.createElement("circle",{key:R,className:"".concat(s,"-circle-path"),r:h,cx:0,cy:0,stroke:X,strokeLinecap:m,strokeWidth:a,opacity:Z===0?0:1,style:B,ref:function(V){L[R]=V}})}).reverse()},se=function(){var W=Math.round(O*(A[0]/100)),Z=100/O,R=0;return new Array(O).fill(null).map(function(K,X){var B=X<=W-1?E[0]:u,fe=B&&(0,F.Z)(B)==="object"?"url(#".concat($,")"):void 0,V=ee(p,x,R,Z,N,l,g,B,"butt",a,w);return R+=(x-V.strokeDashoffset+w)*100/x,n.createElement("circle",{key:X,className:"".concat(s,"-circle-path"),r:h,cx:0,cy:0,stroke:fe,strokeWidth:a,opacity:1,style:V,ref:function(Je){L[X]=Je}})})};return n.createElement("svg",(0,oe.Z)({className:M()("".concat(s,"-circle"),C),viewBox:"".concat(-T/2," ").concat(-T/2," ").concat(T," ").concat(T),style:v,id:r,role:"presentation"},d),b&&n.createElement("defs",null,n.createElement("linearGradient",{id:$,x1:"100%",y1:"0%",x2:"0%",y2:"0%"},Object.keys(b).sort(function(I,W){return le(I)-le(W)}).map(function(I,W){return n.createElement("stop",{key:W,offset:I,stopColor:b[I]})}))),!O&&n.createElement("circle",{className:"".concat(s,"-circle-trail"),r:h,cx:0,cy:0,stroke:u,strokeLinecap:m,strokeWidth:c||a,style:j}),O?se():G())};te.defaultProps=ie,te.displayName="Circle";var de=te,ze={Line:Ce,Circle:de},Ee=f(83062),re=f(16397);function D(e){return!e||e<0?0:e>100?100:e}function H(e){let{success:t,successPercent:r}=e,s=r;return t&&"progress"in t&&(s=t.progress),t&&"percent"in t&&(s=t.percent),s}const Oe=e=>{let{percent:t,success:r,successPercent:s}=e;const o=D(H({success:r,successPercent:s}));return[o,D(D(t)-o)]},Le=e=>{let{success:t={},strokeColor:r}=e;const{strokeColor:s}=t;return[s||re.presetPrimaryColors.green,r||null]},U=(e,t,r)=>{var s,o,a,c;let i=-1,l=-1;if(t==="step"){const g=r.steps,u=r.strokeWidth;typeof e=="string"||typeof e=="undefined"?(i=e==="small"?2:14,l=u!=null?u:8):typeof e=="number"?[i,l]=[e,e]:[i=14,l=8]=e,i*=g}else if(t==="line"){const g=r==null?void 0:r.strokeWidth;typeof e=="string"||typeof e=="undefined"?l=g||(e==="small"?6:8):typeof e=="number"?[i,l]=[e,e]:[i=-1,l=8]=e}else(t==="circle"||t==="dashboard")&&(typeof e=="string"||typeof e=="undefined"?[i,l]=e==="small"?[60,60]:[120,120]:typeof e=="number"?[i,l]=[e,e]:(i=(o=(s=e[0])!==null&&s!==void 0?s:e[1])!==null&&o!==void 0?o:120,l=(c=(a=e[0])!==null&&a!==void 0?a:e[1])!==null&&c!==void 0?c:120));return[i,l]},Ie=3,Ne=e=>Ie/e*100;var We=e=>{const{prefixCls:t,trailColor:r=null,strokeLinecap:s="round",gapPosition:o,gapDegree:a,width:c=120,type:i,children:l,success:g,size:u=c}=e,[m,v]=U(u,"circle");let{strokeWidth:C}=e;C===void 0&&(C=Math.max(Ne(m),6));const y={width:m,height:v,fontSize:m*.15+6},S=n.useMemo(()=>{if(a||a===0)return a;if(i==="dashboard")return 75},[a,i]),d=o||i==="dashboard"&&"bottom"||void 0,k=Object.prototype.toString.call(e.strokeColor)==="[object Object]",$=Le({success:g,strokeColor:e.strokeColor}),h=M()(`${t}-inner`,{[`${t}-circle-gradient`]:k}),p=n.createElement(de,{percent:Oe(e),strokeWidth:C,trailWidth:C,strokeColor:$,strokeLinecap:s,trailColor:r,prefixCls:t,gapDegree:S,gapPosition:d});return n.createElement("div",{className:h,style:y},m<=20?n.createElement(Ee.Z,{title:l},n.createElement("span",null,p)):n.createElement(n.Fragment,null,p,l))},De=function(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(r[s[o]]=e[s[o]]);return r};const we=e=>{let t=[];return Object.keys(e).forEach(r=>{const s=parseFloat(r.replace(/%/g,""));isNaN(s)||t.push({key:s,value:e[r]})}),t=t.sort((r,s)=>r.key-s.key),t.map(r=>{let{key:s,value:o}=r;return`${o} ${s}%`}).join(", ")},je=(e,t)=>{const{from:r=re.presetPrimaryColors.blue,to:s=re.presetPrimaryColors.blue,direction:o=t==="rtl"?"to left":"to right"}=e,a=De(e,["from","to","direction"]);if(Object.keys(a).length!==0){const c=we(a);return{backgroundImage:`linear-gradient(${o}, ${c})`}}return{backgroundImage:`linear-gradient(${o}, ${r}, ${s})`}};var Ae=e=>{const{prefixCls:t,direction:r,percent:s,size:o,strokeWidth:a,strokeColor:c,strokeLinecap:i="round",children:l,trailColor:g=null,success:u}=e,m=c&&typeof c!="string"?je(c,r):{backgroundColor:c},v=i==="square"||i==="butt"?0:void 0,C={backgroundColor:g||void 0,borderRadius:v},y=o!=null?o:[-1,a||(o==="small"?6:8)],[S,d]=U(y,"line",{strokeWidth:a}),k=Object.assign({width:`${D(s)}%`,height:d,borderRadius:v},m),$=H(e),h={width:`${D($)}%`,height:d,borderRadius:v,backgroundColor:u==null?void 0:u.strokeColor},p={width:S<0?"100%":S,height:d};return n.createElement(n.Fragment,null,n.createElement("div",{className:`${t}-outer`,style:p},n.createElement("div",{className:`${t}-inner`,style:C},n.createElement("div",{className:`${t}-bg`,style:k}),$!==void 0?n.createElement("div",{className:`${t}-success-bg`,style:h}):null)),l)},Re=e=>{const{size:t,steps:r,percent:s=0,strokeWidth:o=8,strokeColor:a,trailColor:c=null,prefixCls:i,children:l}=e,g=Math.round(r*(s/100)),u=t==="small"?2:14,m=t!=null?t:[u,o],[v,C]=U(m,"step",{steps:r,strokeWidth:o}),y=v/r,S=new Array(r);for(let d=0;d<r;d++){const k=Array.isArray(a)?a[d]:a;S[d]=n.createElement("div",{key:d,className:M()(`${i}-steps-item`,{[`${i}-steps-item-active`]:d<=g-1}),style:{backgroundColor:d<=g-1?k:c,width:y,height:C}})}return n.createElement("div",{className:`${i}-steps-outer`},S,l)},Me=f(96909),Te=f(14747),Ze=f(67968),Xe=f(45503);const pe=e=>{const t=e?"100%":"-100%";return new Me.Keyframes(`antProgress${e?"RTL":"LTR"}Active`,{"0%":{transform:`translateX(${t}) scaleX(0)`,opacity:.1},"20%":{transform:`translateX(${t}) scaleX(0)`,opacity:.5},to:{transform:"translateX(0) scaleX(1)",opacity:0}})},Be=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:Object.assign(Object.assign({},(0,Te.Wf)(e)),{display:"inline-block","&-rtl":{direction:"rtl"},"&-line":{position:"relative",width:"100%",fontSize:e.fontSize,marginInlineEnd:e.marginXS,marginBottom:e.marginXS},[`${t}-outer`]:{display:"inline-block",width:"100%"},[`&${t}-show-info`]:{[`${t}-outer`]:{marginInlineEnd:`calc(-2em - ${e.marginXS}px)`,paddingInlineEnd:`calc(2em + ${e.paddingXS}px)`}},[`${t}-inner`]:{position:"relative",display:"inline-block",width:"100%",overflow:"hidden",verticalAlign:"middle",backgroundColor:e.progressRemainingColor,borderRadius:e.progressLineRadius},[`${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorInfo}},[`${t}-success-bg, ${t}-bg`]:{position:"relative",backgroundColor:e.colorInfo,borderRadius:e.progressLineRadius,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`},[`${t}-success-bg`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,backgroundColor:e.colorSuccess},[`${t}-text`]:{display:"inline-block",width:"2em",marginInlineStart:e.marginXS,color:e.progressInfoTextColor,lineHeight:1,whiteSpace:"nowrap",textAlign:"start",verticalAlign:"middle",wordBreak:"normal",[r]:{fontSize:e.fontSize}},[`&${t}-status-active`]:{[`${t}-bg::before`]:{position:"absolute",inset:0,backgroundColor:e.colorBgContainer,borderRadius:e.progressLineRadius,opacity:0,animationName:pe(),animationDuration:e.progressActiveMotionDuration,animationTimingFunction:e.motionEaseOutQuint,animationIterationCount:"infinite",content:'""'}},[`&${t}-rtl${t}-status-active`]:{[`${t}-bg::before`]:{animationName:pe(!0)}},[`&${t}-status-exception`]:{[`${t}-bg`]:{backgroundColor:e.colorError},[`${t}-text`]:{color:e.colorError}},[`&${t}-status-exception ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorError}},[`&${t}-status-success`]:{[`${t}-bg`]:{backgroundColor:e.colorSuccess},[`${t}-text`]:{color:e.colorSuccess}},[`&${t}-status-success ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorSuccess}}})}},Fe=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:{[`${t}-circle-trail`]:{stroke:e.progressRemainingColor},[`&${t}-circle ${t}-inner`]:{position:"relative",lineHeight:1,backgroundColor:"transparent"},[`&${t}-circle ${t}-text`]:{position:"absolute",insetBlockStart:"50%",insetInlineStart:0,width:"100%",margin:0,padding:0,color:e.colorText,lineHeight:1,whiteSpace:"normal",textAlign:"center",transform:"translateY(-50%)",[r]:{fontSize:`${e.fontSize/e.fontSizeSM}em`}},[`${t}-circle&-status-exception`]:{[`${t}-text`]:{color:e.colorError}},[`${t}-circle&-status-success`]:{[`${t}-text`]:{color:e.colorSuccess}}},[`${t}-inline-circle`]:{lineHeight:1,[`${t}-inner`]:{verticalAlign:"bottom"}}}},He=e=>{const{componentCls:t}=e;return{[t]:{[`${t}-steps`]:{display:"inline-block","&-outer":{display:"flex",flexDirection:"row",alignItems:"center"},"&-item":{flexShrink:0,minWidth:e.progressStepMinWidth,marginInlineEnd:e.progressStepMarginInlineEnd,backgroundColor:e.progressRemainingColor,transition:`all ${e.motionDurationSlow}`,"&-active":{backgroundColor:e.colorInfo}}}}}},Ue=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:{[`${t}-small&-line, ${t}-small&-line ${t}-text ${r}`]:{fontSize:e.fontSizeSM}}}};var Ge=(0,Ze.Z)("Progress",e=>{const t=e.marginXXS/2,r=(0,Xe.TS)(e,{progressLineRadius:100,progressInfoTextColor:e.colorText,progressDefaultColor:e.colorInfo,progressRemainingColor:e.colorFillSecondary,progressStepMarginInlineEnd:t,progressStepMinWidth:t,progressActiveMotionDuration:"2.4s"});return[Be(r),Fe(r),He(r),Ue(r)]}),Ke=function(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(r[s[o]]=e[s[o]]);return r};const tt=null,Ve=["normal","exception","active","success"];var Qe=n.forwardRef((e,t)=>{const{prefixCls:r,className:s,rootClassName:o,steps:a,strokeColor:c,percent:i=0,size:l="default",showInfo:g=!0,type:u="line",status:m,format:v,style:C}=e,y=Ke(e,["prefixCls","className","rootClassName","steps","strokeColor","percent","size","showInfo","type","status","format","style"]),S=n.useMemo(()=>{var E,b;const L=H(e);return parseInt(L!==void 0?(E=L!=null?L:0)===null||E===void 0?void 0:E.toString():(b=i!=null?i:0)===null||b===void 0?void 0:b.toString(),10)},[i,e.success,e.successPercent]),d=n.useMemo(()=>!Ve.includes(m)&&S>=100?"success":m||"normal",[m,S]),{getPrefixCls:k,direction:$,progress:h}=n.useContext(ye.E_),p=k("progress",r),[N,x]=Ge(p),P=n.useMemo(()=>{if(!g)return null;const E=H(e);let b;const L=v||(se=>`${se}%`),G=u==="line";return v||d!=="exception"&&d!=="success"?b=L(D(i),D(E)):d==="exception"?b=G?n.createElement(z.Z,null):n.createElement(q.Z,null):d==="success"&&(b=G?n.createElement(Y.Z,null):n.createElement(J.Z,null)),n.createElement("span",{className:`${p}-text`,title:typeof b=="string"?b:void 0},b)},[g,i,S,d,u,p,v]),O=Array.isArray(c)?c[0]:c,w=typeof c=="string"||Array.isArray(c)?c:void 0;let j;u==="line"?j=a?n.createElement(Re,Object.assign({},e,{strokeColor:w,prefixCls:p,steps:a}),P):n.createElement(Ae,Object.assign({},e,{strokeColor:O,prefixCls:p,direction:$}),P):(u==="circle"||u==="dashboard")&&(j=n.createElement(We,Object.assign({},e,{strokeColor:O,prefixCls:p,progressStatus:d}),P));const A=M()(p,`${p}-status-${d}`,`${p}-${u==="dashboard"&&"circle"||a&&"steps"||u}`,{[`${p}-inline-circle`]:u==="circle"&&U(l,"circle")[0]<=20,[`${p}-show-info`]:g,[`${p}-${l}`]:typeof l=="string",[`${p}-rtl`]:$==="rtl"},h==null?void 0:h.className,s,o,x);return N(n.createElement("div",Object.assign({ref:t,style:Object.assign(Object.assign({},h==null?void 0:h.style),C),className:A,role:"progressbar","aria-valuenow":S},(0,ve.Z)(y,["trailColor","strokeWidth","width","gapDegree","gapPosition","strokeLinecap","success","successPercent"])),j))}),Ye=Qe}}]);
