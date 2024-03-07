"use strict";(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[7779],{9708:function(O,b,a){a.d(b,{F:function(){return g},Z:function(){return u}});var t=a(93967),p=a.n(t);const h=null;function u(l,d,s){return p()({[`${l}-status-success`]:d==="success",[`${l}-status-warning`]:d==="warning",[`${l}-status-error`]:d==="error",[`${l}-status-validating`]:d==="validating",[`${l}-has-feedback`]:s})}const g=(l,d)=>d||l},27833:function(O,b,a){var t=a(67294),p=a(65223);const h=["outlined","borderless","filled"],u=function(g){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0;const d=(0,t.useContext)(p.pg);let s;typeof g!="undefined"?s=g:l===!1?s="borderless":s=d!=null?d:"outlined";const S=h.includes(s);return[s,S]};b.Z=u},47673:function(O,b,a){a.d(b,{ik:function(){return f},nz:function(){return s},s7:function(){return E},x0:function(){return $}});var t=a(54548),p=a(14747),h=a(80110),u=a(91945),g=a(45503),l=a(20353),d=a(93900);const s=o=>({"&::-moz-placeholder":{opacity:1},"&::placeholder":{color:o,userSelect:"none"},"&:placeholder-shown":{textOverflow:"ellipsis"}}),S=o=>({borderColor:o.activeBorderColor,boxShadow:o.activeShadow,outline:0,backgroundColor:o.activeBg}),m=o=>{const{paddingBlockLG:i,lineHeightLG:e,borderRadiusLG:c,paddingInlineLG:x}=o;return{padding:`${(0,t.bf)(i)} ${(0,t.bf)(x)}`,fontSize:o.inputFontSizeLG,lineHeight:e,borderRadius:c}},$=o=>({padding:`${(0,t.bf)(o.paddingBlockSM)} ${(0,t.bf)(o.paddingInlineSM)}`,fontSize:o.inputFontSizeSM,borderRadius:o.borderRadiusSM}),f=o=>Object.assign(Object.assign({position:"relative",display:"inline-block",width:"100%",minWidth:0,padding:`${(0,t.bf)(o.paddingBlock)} ${(0,t.bf)(o.paddingInline)}`,color:o.colorText,fontSize:o.inputFontSize,lineHeight:o.lineHeight,borderRadius:o.borderRadius,transition:`all ${o.motionDurationMid}`},s(o.colorTextPlaceholder)),{"textarea&":{maxWidth:"100%",height:"auto",minHeight:o.controlHeight,lineHeight:o.lineHeight,verticalAlign:"bottom",transition:`all ${o.motionDurationSlow}, height 0s`,resize:"vertical"},"&-lg":Object.assign({},m(o)),"&-sm":Object.assign({},$(o)),"&-rtl":{direction:"rtl"},"&-textarea-rtl":{direction:"rtl"}}),E=o=>{const{componentCls:i,antCls:e}=o;return{position:"relative",display:"table",width:"100%",borderCollapse:"separate",borderSpacing:0,["&[class*='col-']"]:{paddingInlineEnd:o.paddingXS,"&:last-child":{paddingInlineEnd:0}},[`&-lg ${i}, &-lg > ${i}-group-addon`]:Object.assign({},m(o)),[`&-sm ${i}, &-sm > ${i}-group-addon`]:Object.assign({},$(o)),[`&-lg ${e}-select-single ${e}-select-selector`]:{height:o.controlHeightLG},[`&-sm ${e}-select-single ${e}-select-selector`]:{height:o.controlHeightSM},[`> ${i}`]:{display:"table-cell","&:not(:first-child):not(:last-child)":{borderRadius:0}},[`${i}-group`]:{["&-addon, &-wrap"]:{display:"table-cell",width:1,whiteSpace:"nowrap",verticalAlign:"middle","&:not(:first-child):not(:last-child)":{borderRadius:0}},"&-wrap > *":{display:"block !important"},"&-addon":{position:"relative",padding:`0 ${(0,t.bf)(o.paddingInline)}`,color:o.colorText,fontWeight:"normal",fontSize:o.inputFontSize,textAlign:"center",borderRadius:o.borderRadius,transition:`all ${o.motionDurationSlow}`,lineHeight:1,[`${e}-select`]:{margin:`${(0,t.bf)(o.calc(o.paddingBlock).add(1).mul(-1).equal())} ${(0,t.bf)(o.calc(o.paddingInline).mul(-1).equal())}`,[`&${e}-select-single:not(${e}-select-customize-input):not(${e}-pagination-size-changer)`]:{[`${e}-select-selector`]:{backgroundColor:"inherit",border:`${(0,t.bf)(o.lineWidth)} ${o.lineType} transparent`,boxShadow:"none"}},"&-open, &-focused":{[`${e}-select-selector`]:{color:o.colorPrimary}}},[`${e}-cascader-picker`]:{margin:`-9px ${(0,t.bf)(o.calc(o.paddingInline).mul(-1).equal())}`,backgroundColor:"transparent",[`${e}-cascader-input`]:{textAlign:"start",border:0,boxShadow:"none"}}}},[`${i}`]:{width:"100%",marginBottom:0,textAlign:"inherit","&:focus":{zIndex:1,borderInlineEndWidth:1},"&:hover":{zIndex:1,borderInlineEndWidth:1,[`${i}-search-with-button &`]:{zIndex:0}}},[`> ${i}:first-child, ${i}-group-addon:first-child`]:{borderStartEndRadius:0,borderEndEndRadius:0,[`${e}-select ${e}-select-selector`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`> ${i}-affix-wrapper`]:{[`&:not(:first-child) ${i}`]:{borderStartStartRadius:0,borderEndStartRadius:0},[`&:not(:last-child) ${i}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`> ${i}:last-child, ${i}-group-addon:last-child`]:{borderStartStartRadius:0,borderEndStartRadius:0,[`${e}-select ${e}-select-selector`]:{borderStartStartRadius:0,borderEndStartRadius:0}},[`${i}-affix-wrapper`]:{"&:not(:last-child)":{borderStartEndRadius:0,borderEndEndRadius:0,[`${i}-search &`]:{borderStartStartRadius:o.borderRadius,borderEndStartRadius:o.borderRadius}},[`&:not(:first-child), ${i}-search &:not(:first-child)`]:{borderStartStartRadius:0,borderEndStartRadius:0}},[`&${i}-group-compact`]:Object.assign(Object.assign({display:"block"},(0,p.dF)()),{[`${i}-group-addon, ${i}-group-wrap, > ${i}`]:{"&:not(:first-child):not(:last-child)":{borderInlineEndWidth:o.lineWidth,"&:hover":{zIndex:1},"&:focus":{zIndex:1}}},"& > *":{display:"inline-block",float:"none",verticalAlign:"top",borderRadius:0},[`
        & > ${i}-affix-wrapper,
        & > ${i}-number-affix-wrapper,
        & > ${e}-picker-range
      `]:{display:"inline-flex"},"& > *:not(:last-child)":{marginInlineEnd:o.calc(o.lineWidth).mul(-1).equal(),borderInlineEndWidth:o.lineWidth},[`${i}`]:{float:"none"},[`& > ${e}-select > ${e}-select-selector,
      & > ${e}-select-auto-complete ${i},
      & > ${e}-cascader-picker ${i},
      & > ${i}-group-wrapper ${i}`]:{borderInlineEndWidth:o.lineWidth,borderRadius:0,"&:hover":{zIndex:1},"&:focus":{zIndex:1}},[`& > ${e}-select-focused`]:{zIndex:1},[`& > ${e}-select > ${e}-select-arrow`]:{zIndex:1},[`& > *:first-child,
      & > ${e}-select:first-child > ${e}-select-selector,
      & > ${e}-select-auto-complete:first-child ${i},
      & > ${e}-cascader-picker:first-child ${i}`]:{borderStartStartRadius:o.borderRadius,borderEndStartRadius:o.borderRadius},[`& > *:last-child,
      & > ${e}-select:last-child > ${e}-select-selector,
      & > ${e}-cascader-picker:last-child ${i},
      & > ${e}-cascader-picker-focused:last-child ${i}`]:{borderInlineEndWidth:o.lineWidth,borderStartEndRadius:o.borderRadius,borderEndEndRadius:o.borderRadius},[`& > ${e}-select-auto-complete ${i}`]:{verticalAlign:"top"},[`${i}-group-wrapper + ${i}-group-wrapper`]:{marginInlineStart:o.calc(o.lineWidth).mul(-1).equal(),[`${i}-affix-wrapper`]:{borderRadius:0}},[`${i}-group-wrapper:not(:last-child)`]:{[`&${i}-search > ${i}-group`]:{[`& > ${i}-group-addon > ${i}-search-button`]:{borderRadius:0},[`& > ${i}`]:{borderStartStartRadius:o.borderRadius,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:o.borderRadius}}}})}},C=o=>{const{componentCls:i,controlHeightSM:e,lineWidth:c,calc:x}=o,y=16,I=x(e).sub(x(c).mul(2)).sub(y).div(2).equal();return{[i]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},(0,p.Wf)(o)),f(o)),(0,d.qG)(o)),(0,d.H8)(o)),(0,d.Mu)(o)),{'&[type="color"]':{height:o.controlHeight,[`&${i}-lg`]:{height:o.controlHeightLG},[`&${i}-sm`]:{height:e,paddingTop:I,paddingBottom:I}},'&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration':{"-webkit-appearance":"none"}})}},v=o=>{const{componentCls:i}=o;return{[`${i}-clear-icon`]:{margin:0,color:o.colorTextQuaternary,fontSize:o.fontSizeIcon,verticalAlign:-1,cursor:"pointer",transition:`color ${o.motionDurationSlow}`,"&:hover":{color:o.colorTextTertiary},"&:active":{color:o.colorText},"&-hidden":{visibility:"hidden"},"&-has-suffix":{margin:`0 ${(0,t.bf)(o.inputAffixPadding)}`}}}},r=o=>{const{componentCls:i,inputAffixPadding:e,colorTextDescription:c,motionDurationSlow:x,colorIcon:y,colorIconHover:I,iconCls:_}=o;return{[`${i}-affix-wrapper`]:Object.assign(Object.assign(Object.assign(Object.assign({},f(o)),{display:"inline-flex",[`&:not(${i}-disabled):hover`]:{zIndex:1,[`${i}-search-with-button &`]:{zIndex:0}},"&-focused, &:focus":{zIndex:1},[`> input${i}`]:{padding:0,fontSize:"inherit",border:"none",borderRadius:0,outline:"none",background:"transparent",color:"inherit","&::-ms-reveal":{display:"none"},"&:focus":{boxShadow:"none !important"}},"&::before":{display:"inline-block",width:0,visibility:"hidden",content:'"\\a0"'},[`${i}`]:{"&-prefix, &-suffix":{display:"flex",flex:"none",alignItems:"center","> *:not(:last-child)":{marginInlineEnd:o.paddingXS}},"&-show-count-suffix":{color:c},"&-show-count-has-suffix":{marginInlineEnd:o.paddingXXS},"&-prefix":{marginInlineEnd:e},"&-suffix":{marginInlineStart:e}}}),v(o)),{[`${_}${i}-password-icon`]:{color:y,cursor:"pointer",transition:`all ${x}`,"&:hover":{color:I}}})}},n=o=>{const{componentCls:i,borderRadiusLG:e,borderRadiusSM:c}=o;return{[`${i}-group`]:Object.assign(Object.assign(Object.assign({},(0,p.Wf)(o)),E(o)),{"&-rtl":{direction:"rtl"},"&-wrapper":Object.assign(Object.assign(Object.assign({display:"inline-block",width:"100%",textAlign:"start",verticalAlign:"top","&-rtl":{direction:"rtl"},"&-lg":{[`${i}-group-addon`]:{borderRadius:e,fontSize:o.inputFontSizeLG}},"&-sm":{[`${i}-group-addon`]:{borderRadius:c}}},(0,d.ir)(o)),(0,d.S5)(o)),{[`&:not(${i}-compact-first-item):not(${i}-compact-last-item)${i}-compact-item`]:{[`${i}, ${i}-group-addon`]:{borderRadius:0}},[`&:not(${i}-compact-last-item)${i}-compact-first-item`]:{[`${i}, ${i}-group-addon`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&:not(${i}-compact-first-item)${i}-compact-last-item`]:{[`${i}, ${i}-group-addon`]:{borderStartStartRadius:0,borderEndStartRadius:0}},[`&:not(${i}-compact-last-item)${i}-compact-item`]:{[`${i}-affix-wrapper`]:{borderStartEndRadius:0,borderEndEndRadius:0}}})})}},R=o=>{const{componentCls:i,antCls:e}=o,c=`${i}-search`;return{[c]:{[`${i}`]:{"&:hover, &:focus":{borderColor:o.colorPrimaryHover,[`+ ${i}-group-addon ${c}-button:not(${e}-btn-primary)`]:{borderInlineStartColor:o.colorPrimaryHover}}},[`${i}-affix-wrapper`]:{borderRadius:0},[`${i}-lg`]:{lineHeight:o.calc(o.lineHeightLG).sub(2e-4).equal({unit:!1})},[`> ${i}-group`]:{[`> ${i}-group-addon:last-child`]:{insetInlineStart:-1,padding:0,border:0,[`${c}-button`]:{marginInlineEnd:-1,paddingTop:0,paddingBottom:0,borderStartStartRadius:0,borderStartEndRadius:o.borderRadius,borderEndEndRadius:o.borderRadius,borderEndStartRadius:0,boxShadow:"none"},[`${c}-button:not(${e}-btn-primary)`]:{color:o.colorTextDescription,"&:hover":{color:o.colorPrimaryHover},"&:active":{color:o.colorPrimaryActive},[`&${e}-btn-loading::before`]:{insetInlineStart:0,insetInlineEnd:0,insetBlockStart:0,insetBlockEnd:0}}}},[`${c}-button`]:{height:o.controlHeight,"&:hover, &:focus":{zIndex:1}},[`&-large ${c}-button`]:{height:o.controlHeightLG},[`&-small ${c}-button`]:{height:o.controlHeightSM},"&-rtl":{direction:"rtl"},[`&${i}-compact-item`]:{[`&:not(${i}-compact-last-item)`]:{[`${i}-group-addon`]:{[`${i}-search-button`]:{marginInlineEnd:o.calc(o.lineWidth).mul(-1).equal(),borderRadius:0}}},[`&:not(${i}-compact-first-item)`]:{[`${i},${i}-affix-wrapper`]:{borderRadius:0}},[`> ${i}-group-addon ${i}-search-button,
        > ${i},
        ${i}-affix-wrapper`]:{"&:hover,&:focus,&:active":{zIndex:2}},[`> ${i}-affix-wrapper-focused`]:{zIndex:2}}}}},B=o=>{const{componentCls:i,paddingLG:e}=o,c=`${i}-textarea`;return{[c]:{position:"relative","&-show-count":{[`> ${i}`]:{height:"100%"},[`${i}-data-count`]:{position:"absolute",bottom:o.calc(o.fontSize).mul(o.lineHeight).mul(-1).equal(),insetInlineEnd:0,color:o.colorTextDescription,whiteSpace:"nowrap",pointerEvents:"none"}},"&-allow-clear":{[`> ${i}`]:{paddingInlineEnd:e}},[`&-affix-wrapper${c}-has-feedback`]:{[`${i}`]:{paddingInlineEnd:e}},[`&-affix-wrapper${i}-affix-wrapper`]:{padding:0,[`> textarea${i}`]:{fontSize:"inherit",border:"none",outline:"none",background:"transparent","&:focus":{boxShadow:"none !important"}},[`${i}-suffix`]:{margin:0,"> *:not(:last-child)":{marginInline:0},[`${i}-clear-icon`]:{position:"absolute",insetInlineEnd:o.paddingXS,insetBlockStart:o.paddingXS},[`${c}-suffix`]:{position:"absolute",top:0,insetInlineEnd:o.paddingInline,bottom:0,zIndex:1,display:"inline-flex",alignItems:"center",margin:"auto",pointerEvents:"none"}}}}}},w=o=>{const{componentCls:i}=o;return{[`${i}-out-of-range`]:{[`&, & input, & textarea, ${i}-show-count-suffix, ${i}-data-count`]:{color:o.colorError}}}};b.ZP=(0,u.I$)("Input",o=>{const i=(0,g.TS)(o,(0,l.e)(o));return[C(i),B(i),r(i),n(i),R(i),w(i),(0,h.c)(i)]},l.T)},20353:function(O,b,a){a.d(b,{T:function(){return h},e:function(){return p}});var t=a(45503);function p(u){return(0,t.TS)(u,{inputAffixPadding:u.paddingXXS})}const h=u=>{const{controlHeight:g,fontSize:l,lineHeight:d,lineWidth:s,controlHeightSM:S,controlHeightLG:m,fontSizeLG:$,lineHeightLG:f,paddingSM:E,controlPaddingHorizontalSM:C,controlPaddingHorizontal:v,colorFillAlter:r,colorPrimaryHover:n,colorPrimary:R,controlOutlineWidth:B,controlOutline:w,colorErrorOutline:o,colorWarningOutline:i,colorBgContainer:e}=u;return{paddingBlock:Math.max(Math.round((g-l*d)/2*10)/10-s,0),paddingBlockSM:Math.max(Math.round((S-l*d)/2*10)/10-s,0),paddingBlockLG:Math.ceil((m-$*f)/2*10)/10-s,paddingInline:E-s,paddingInlineSM:C-s,paddingInlineLG:v-s,addonBg:r,activeBorderColor:R,hoverBorderColor:n,activeShadow:`0 0 0 ${B}px ${w}`,errorActiveShadow:`0 0 0 ${B}px ${o}`,warningActiveShadow:`0 0 0 ${B}px ${i}`,hoverBg:e,activeBg:e,inputFontSize:l,inputFontSizeLG:$,inputFontSizeSM:l}}},93900:function(O,b,a){a.d(b,{$U:function(){return g},H8:function(){return E},Mu:function(){return m},S5:function(){return v},Xy:function(){return u},ir:function(){return S},qG:function(){return d}});var t=a(54548),p=a(45503);const h=r=>({borderColor:r.hoverBorderColor,backgroundColor:r.hoverBg}),u=r=>({color:r.colorTextDisabled,backgroundColor:r.colorBgContainerDisabled,borderColor:r.colorBorder,boxShadow:"none",cursor:"not-allowed",opacity:1,"input[disabled]":{cursor:"not-allowed"},"&:hover:not([disabled])":Object.assign({},h((0,p.TS)(r,{hoverBorderColor:r.colorBorder,hoverBg:r.colorBgContainerDisabled})))}),g=(r,n)=>({background:r.colorBgContainer,borderWidth:r.lineWidth,borderStyle:r.lineType,borderColor:n.borderColor,"&:hover":{borderColor:n.hoverBorderColor,backgroundColor:r.hoverBg},"&:focus, &:focus-within":{borderColor:n.activeBorderColor,boxShadow:n.activeShadow,outline:0,backgroundColor:r.activeBg}}),l=(r,n)=>({[`&${r.componentCls}-status-${n.status}:not(${r.componentCls}-disabled)`]:Object.assign(Object.assign({},g(r,n)),{[`${r.componentCls}-prefix, ${r.componentCls}-suffix`]:{color:n.affixColor}})}),d=(r,n)=>({"&-outlined":Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},g(r,{borderColor:r.colorBorder,hoverBorderColor:r.hoverBorderColor,activeBorderColor:r.activeBorderColor,activeShadow:r.activeShadow})),{[`&${r.componentCls}-disabled, &[disabled]`]:Object.assign({},u(r))}),l(r,{status:"error",borderColor:r.colorError,hoverBorderColor:r.colorErrorBorderHover,activeBorderColor:r.colorError,activeShadow:r.errorActiveShadow,affixColor:r.colorError})),l(r,{status:"warning",borderColor:r.colorWarning,hoverBorderColor:r.colorWarningBorderHover,activeBorderColor:r.colorWarning,activeShadow:r.warningActiveShadow,affixColor:r.colorWarning})),n)}),s=(r,n)=>({[`&${r.componentCls}-group-wrapper-status-${n.status}`]:{[`${r.componentCls}-group-addon`]:{borderColor:n.addonBorderColor,color:n.addonColor}}}),S=r=>({"&-outlined":Object.assign(Object.assign(Object.assign({[`${r.componentCls}-group`]:{"&-addon":{background:r.addonBg,border:`${(0,t.bf)(r.lineWidth)} ${r.lineType} ${r.colorBorder}`},"&-addon:first-child":{borderInlineEnd:0},"&-addon:last-child":{borderInlineStart:0}}},s(r,{status:"error",addonBorderColor:r.colorError,addonColor:r.colorErrorText})),s(r,{status:"warning",addonBorderColor:r.colorWarning,addonColor:r.colorWarningText})),{[`&${r.componentCls}-group-wrapper-disabled`]:{[`${r.componentCls}-group-addon`]:Object.assign({},u(r))}})}),m=(r,n)=>({"&-borderless":Object.assign({background:"transparent",border:"none","&:focus, &:focus-within":{outline:"none"},[`&${r.componentCls}-disabled, &[disabled]`]:{color:r.colorTextDisabled}},n)}),$=(r,n)=>({background:n.bg,borderWidth:r.lineWidth,borderStyle:r.lineType,borderColor:"transparent",["input&, & input, textarea&, & textarea"]:{color:n==null?void 0:n.inputColor},"&:hover":{background:n.hoverBg},"&:focus, &:focus-within":{outline:0,borderColor:n.activeBorderColor,backgroundColor:r.activeBg}}),f=(r,n)=>({[`&${r.componentCls}-status-${n.status}:not(${r.componentCls}-disabled)`]:Object.assign(Object.assign({},$(r,n)),{[`${r.componentCls}-prefix, ${r.componentCls}-suffix`]:{color:n.affixColor}})}),E=(r,n)=>({"&-filled":Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},$(r,{bg:r.colorFillTertiary,hoverBg:r.colorFillSecondary,activeBorderColor:r.colorPrimary})),{[`&${r.componentCls}-disabled, &[disabled]`]:Object.assign({},u(r))}),f(r,{status:"error",bg:r.colorErrorBg,hoverBg:r.colorErrorBgHover,activeBorderColor:r.colorError,inputColor:r.colorErrorText,affixColor:r.colorError})),f(r,{status:"warning",bg:r.colorWarningBg,hoverBg:r.colorWarningBgHover,activeBorderColor:r.colorWarning,inputColor:r.colorWarningText,affixColor:r.colorWarning})),n)}),C=(r,n)=>({[`&${r.componentCls}-group-wrapper-status-${n.status}`]:{[`${r.componentCls}-group-addon`]:{background:n.addonBg,color:n.addonColor}}}),v=r=>({"&-filled":Object.assign(Object.assign(Object.assign({[`${r.componentCls}-group`]:{"&-addon":{background:r.colorFillTertiary},[`${r.componentCls}-filled:not(:focus):not(:focus-within)`]:{"&:not(:first-child)":{borderInlineStart:`${(0,t.bf)(r.lineWidth)} ${r.lineType} ${r.colorSplit}`},"&:not(:last-child)":{borderInlineEnd:`${(0,t.bf)(r.lineWidth)} ${r.lineType} ${r.colorSplit}`}}}},C(r,{status:"error",addonBg:r.colorErrorBg,addonColor:r.colorErrorText})),C(r,{status:"warning",addonBg:r.colorWarningBg,addonColor:r.colorWarningText})),{[`&${r.componentCls}-group-wrapper-disabled`]:{[`${r.componentCls}-group`]:{"&-addon":{background:r.colorFillTertiary,color:r.colorTextDisabled},"&-addon:first-child":{borderInlineStart:`${(0,t.bf)(r.lineWidth)} ${r.lineType} ${r.colorBorder}`,borderTop:`${(0,t.bf)(r.lineWidth)} ${r.lineType} ${r.colorBorder}`,borderBottom:`${(0,t.bf)(r.lineWidth)} ${r.lineType} ${r.colorBorder}`},"&-addon:last-child":{borderInlineEnd:`${(0,t.bf)(r.lineWidth)} ${r.lineType} ${r.colorBorder}`,borderTop:`${(0,t.bf)(r.lineWidth)} ${r.lineType} ${r.colorBorder}`,borderBottom:`${(0,t.bf)(r.lineWidth)} ${r.lineType} ${r.colorBorder}`}}}})})}}]);