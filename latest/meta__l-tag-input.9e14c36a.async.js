(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[6365],{26794:function(v,e,n){"use strict";var c;n.r(e),n.d(e,{demos:function(){return o}});var s=n(90228),m=n.n(s),u=n(87999),E=n.n(u),I=n(75271),p=n(48402),_=n(3111),l=n(78855),g=n(85484),i=n.n(g),r=n(9649),d=n(36175),b=n(85714),o={"l-tag-input-demo-demo":{component:I.memo(I.lazy(function(){return n.e(3247).then(n.bind(n,75505))})),asset:{type:"BLOCK",id:"l-tag-input-demo-demo",refAtomIds:["l-tag-input"],dependencies:{"index.tsx":{type:"FILE",value:n(98681).Z},antd:{type:"NPM",value:"5.27.3"},react:{type:"NPM",value:"18.3.1"},"...tsx":{type:"FILE",value:n(86960).Z},ahooks:{type:"NPM",value:"3.9.0"},"./interface.ts":{type:"FILE",value:n(31983).Z},"./styles.ts":{type:"FILE",value:n(21064).Z},"./use-selection-change.ts":{type:"FILE",value:n(87227).Z},"lighting-design":{type:"NPM",value:"3.0.0"}},entry:"index.tsx"},context:{"...tsx":_,"./interface.ts":g,"./styles.ts":r,"./use-selection-change.ts":d,antd:p,react:c||(c=n.t(I,2)),"/Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/l-tag-input/index.tsx":_,ahooks:l,"/Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/l-tag-input/interface.ts":g,"/Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/l-tag-input/styles.ts":r,"/Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/l-tag-input/use-selection-change.ts":d,"lighting-design/styles":b},renderOpts:{compile:function(){var C=E()(m()().mark(function B(){var O,k=arguments;return m()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.all([n.e(6379),n.e(8816)]).then(n.bind(n,28816));case 2:return x.abrupt("return",(O=x.sent).default.apply(O,k));case 3:case"end":return x.stop()}},B)}));function A(){return C.apply(this,arguments)}return A}()}}}},3111:function(v,e,n){"use strict";n.r(e);var c=n(26068),s=n.n(c),m=n(48305),u=n.n(m),E=n(67825),I=n.n(E),p=n(61964),_=n(35523),l=n(75271),g=n(9649),i=n(36175),r=n(52676),d=n(85484),b=n.n(d),o={};for(var C in d)C!=="default"&&(o[C]=function(a){return d[a]}.bind(0,C));n.d(e,o);var A=["defaultValue","placeholder","style","className","tagClassName","actionRef","inputStyle","inputClassName","placeholderStyle","disabled","autoFocus","prefix","suffix","onInput","onChange","onKeyDown","onEnter"],B=/<i(?=[^>]*\bdata-label="([^"]+)")(?=[^>]*\bdata-value="([^"]+)")[^>]*>.*?<\/i>/g,O=/{{#([^#]+)\.([^#]+)#}}/g,k=l.forwardRef(function(a,x){var K=a.defaultValue,$=a.placeholder,Y=$===void 0?"\u8BF7\u8F93\u5165":$,q=a.style,nn=a.className,L=a.tagClassName,en=a.actionRef,tn=a.inputStyle,an=a.inputClassName,rn=a.placeholderStyle,h=a.disabled,Z=a.autoFocus,on=Z===void 0?!0:Z,ln=a.prefix,sn=a.suffix,N=a.onInput,W=a.onChange,j=a.onKeyDown,H=a.onEnter,dn=I()(a,A),V=(0,g.useStyles)({disabled:h}),T=V.styles,z=V.cx,f=(0,l.useRef)(null),un=(0,p.Z)(K!=null?K:""),G=u()(un,2),S=G[0],cn=G[1],_n=(0,p.Z)(!S),J=u()(_n,2),pn=J[0],F=J[1],X=(0,i.default)(h),U=X.rangeObjRef,gn=X.contentId,Q=function(t){if(!h){var y=t.target,P=y.textContent,D=y.innerHTML==="<br>"?"":y.innerHTML,M=D.replace(B,function(w,mn,In){return"{{#".concat(mn,".").concat(In,"#}}")});y.dataset.value=M,cn(M),F(!(P!=null&&P.length)),N==null||N(t),W==null||W(t)}},fn=function(t,y){var P;if(!h){var D=document.createElement("i");if(L&&D.classList.add(L),D.dataset.label=t,D.dataset.value=y,D.innerHTML=t,U.current){var M;U.current.deleteContents(),U.current.insertNode(D),(M=U.current)===null||M===void 0||M.collapse(!1)}else{var w;(w=f.current)===null||w===void 0||w.appendChild(D)}on&&((P=f.current)===null||P===void 0||P.focus()),Q({target:f.current})}};(0,l.useImperativeHandle)(en,function(){return{inset:fn,focus:function(){var t;h||(t=f.current)===null||t===void 0||t.focus()},blur:function(){var t;h||(t=f.current)===null||t===void 0||t.blur()},clear:function(){h||(f.current.dataset.value="",f.current.innerHTML="",F(!0))},getValue:function(){if(!h)return f.current.dataset.value}}}),(0,_.Z)(function(){S&&(f.current.dataset.value=S,f.current.innerHTML=S.replace(O,function(R,t,y){return L?"<i class=".concat(L,' data-label="').concat(t,'" data-value="').concat(y,'">').concat(t,"</i>"):'<i data-label="'.concat(t,'" data-value="').concat(y,'">').concat(t,"</i>")}),F(!1))});var vn=(0,r.jsxs)("div",{className:T.content_wapper,children:[(0,r.jsx)("div",s()(s()({contentEditable:!0},dn),{},{tabIndex:-1,"data-disabled":h,style:tn,id:gn,className:z(T.content,an),ref:function(t){t&&(x&&(x.current=t),f.current=t)},onInput:Q,onKeyDown:function(t){h||(j==null||j(t),t.key==="Enter"&&(t.preventDefault(),H==null||H(t)))}})),pn&&(0,r.jsx)("div",{className:T.placeholder,style:rn,children:Y})]});return(0,r.jsxs)("div",{className:z(T.container,nn),style:q,children:[ln,vn,sn]})});e.default=k},85484:function(){},9649:function(v,e,n){"use strict";n.r(e),n.d(e,{useStyles:function(){return _}});var c=n(53649),s=n.n(c),m=n(85714),u,E,I,p,_=(0,m.createStyles)(function(l,g){var i=g.disabled,r=l.css,d=l.cx,b=l.prefixCls,o=l.token;return{container:r(u||(u=s()([`
      display: flex;
      align-items: center;
      gap: 8px;
      position: relative;
      box-sizing: border-box;
      width: 100%;
      height: `,`px;
      padding: 0 10px;
      border-width: `,`px;
      border-style: solid;
      border-color: #d9d9d9;
      color: rgba(0, 0, 0, 0.88);
      font-size: 14px;
      border-radius: `,`px;
      transition: all 0.2s;
      outline: none;
      cursor: `,`;
      background: `,`;

      &:hover {
        border-color: `,`;
      }
      &:focus,
      &:focus-within {
        border-color: `,`;
      }
    `])),o.controlHeight,o.lineWidth,o.borderRadius,i?"not-allowed":"text",i?o.colorBgContainerDisabled:o.colorBgContainer,i?"#d9d9d9":o.colorPrimary,i?"#d9d9d9":o.colorPrimary),content_wapper:r(E||(E=s()([`
      flex: 1;
      width: 0;
      outline: none;
      border: none;
    `]))),content:r(I||(I=s()([`
      width: 100%;
      outline: none;
      border: none;
      background: transparent;
      box-sizing: border-box;
      white-space: nowrap;
      word-break: break-word;
      overflow-x: auto;
      scrollbar-width: none;
      -webkit-user-modify: `,` !important;

      &::-webkit-scrollbar {
        display: none;
      }

      & i {
        display: inline-block;
        position: relative;
        font-style: normal;
        -webkit-user-modify: read-only !important;
        background: `,`;
        color: `,`;
        padding: 0px 8px;
        margin: 0 4px;
        border-radius: 4px;
        white-space: nowrap;
        cursor: default;
        pointer-events: none;
        user-select: none;
        width: fit-content;
      }
    `])),i?"read-only":"read-write-plaintext-only",o.colorPrimary,o.colorWhite),placeholder:r(p||(p=s()([`
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      user-select: none;
      color: rgba(0, 0, 0, 0.25);
      user-select: none;
      text-overflow: inherit;
      overflow-wrap: normal;
      -webkit-user-modify: read-only !important;
      white-space: pre;
      overflow: hidden;
    `])))}})},36175:function(v,e,n){"use strict";n.r(e),n.d(e,{default:function(){return I}});var c=n(48305),s=n.n(c),m=n(59885),u=n(75271);function E(){for(var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,_="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",l="",g=_.length,i=0;i<p;i++){var r=Math.floor(Math.random()*g);l+=_.charAt(r)}return l}function I(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,_=(0,u.useRef)(),l=(0,u.useState)(function(){return"l-tag-input-".concat(E(10))}),g=s()(l,1),i=g[0],r=(0,m.Z)(function(){var d;if(!p){var b=window.getSelection(),o=b&&b.rangeCount>0?b==null?void 0:b.getRangeAt(0):null;o&&((d=document)===null||d===void 0||(d=d.activeElement)===null||d===void 0?void 0:d.id)===i&&(_.current=o)}});return(0,u.useEffect)(function(){return document.addEventListener("selectionchange",r),function(){document.removeEventListener("selectionchange",r)}},[]),{rangeObjRef:_,contentId:i}}},85714:function(v,e,n){"use strict";n.r(e),n.d(e,{ThemeProvider:function(){return u},createStyles:function(){return m}});var c=n(16584),s=(0,c.F)({key:"lightd"}),m=s.createStyles,u=s.ThemeProvider},17831:function(v,e,n){"use strict";n.r(e),n.d(e,{texts:function(){return c}});const c=[{value:"\u9AD8\u7EA7\u6807\u7B7E\u8F93\u5165\u6846",paraId:0,tocIndex:0},{value:"\u4E0D\u652F\u6301\u53D7\u63A7\u6A21\u5F0F",paraId:1,tocIndex:0},{value:`import { LTagInput } from 'lighting-design';
`,paraId:2,tocIndex:2},{value:"\u53C2\u6570\u540D",paraId:3,tocIndex:2},{value:"\u7C7B\u578B",paraId:3,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:2},{value:"\u63CF\u8FF0",paraId:3,tocIndex:2},{value:"defaultValue",paraId:3,tocIndex:2},{value:"string",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"\u8F93\u5165\u6846\u7684\u9ED8\u8BA4\u503C",paraId:3,tocIndex:2},{value:"onChange",paraId:3,tocIndex:2},{value:"(val: string) => void",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"\u503C\u6539\u53D8\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:3,tocIndex:2},{value:"disabled",paraId:3,tocIndex:2},{value:"boolean",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"\u662F\u5426\u7981\u7528\u8F93\u5165\u6846",paraId:3,tocIndex:2},{value:"placeholder",paraId:3,tocIndex:2},{value:"string",paraId:3,tocIndex:2},{value:'"\u8BF7\u8F93\u5165"',paraId:3,tocIndex:2},{value:"\u8F93\u5165\u6846\u5360\u4F4D\u7B26",paraId:3,tocIndex:2},{value:"style",paraId:3,tocIndex:2},{value:"React.CSSProperties",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"\u5916\u5C42\u5BB9\u5668\u7684\u6837\u5F0F",paraId:3,tocIndex:2},{value:"className",paraId:3,tocIndex:2},{value:"string",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"\u5916\u5C42\u5BB9\u5668\u7684\u7C7B\u540D",paraId:3,tocIndex:2},{value:"tagClassName",paraId:3,tocIndex:2},{value:"string",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"\u6807\u7B7E\u5143\u7D20\u7684\u7C7B\u540D",paraId:3,tocIndex:2},{value:"actionRef",paraId:3,tocIndex:2},{value:"React.MutableRefObject<LTagInputActionRef | undefined>",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"\u7528\u4E8E\u66B4\u9732\u7EC4\u4EF6\u65B9\u6CD5\u7684 ref",paraId:3,tocIndex:2},{value:"inputStyle",paraId:3,tocIndex:2},{value:"React.CSSProperties",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"\u8F93\u5165\u6846\u7684\u6837\u5F0F",paraId:3,tocIndex:2},{value:"inputClassName",paraId:3,tocIndex:2},{value:"string",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"\u8F93\u5165\u6846\u7684\u7C7B\u540D",paraId:3,tocIndex:2},{value:"placeholderStyle",paraId:3,tocIndex:2},{value:"React.CSSProperties",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"\u5360\u4F4D\u7B26\u7684\u6837\u5F0F",paraId:3,tocIndex:2},{value:"onEnter",paraId:3,tocIndex:2},{value:"React.KeyboardEventHandler<HTMLDivElement>",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"\u6309\u4E0B\u56DE\u8F66\u952E\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:3,tocIndex:2},{value:"prefix",paraId:3,tocIndex:2},{value:"React.ReactNode",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"\u8F93\u5165\u6846\u524D\u7F00\u5185\u5BB9",paraId:3,tocIndex:2},{value:"suffix",paraId:3,tocIndex:2},{value:"React.ReactNode",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"\u8F93\u5165\u6846\u540E\u7F00\u5185\u5BB9",paraId:3,tocIndex:2}]},98681:function(v,e){"use strict";e.Z=`import { Button, Flex } from 'antd';
import React, { useRef } from 'react';
import LTagInput from '..';

type PropsType = {};

const Index: React.FC<PropsType> = ({}) => {
  const actionRef = useRef<any>();
  const ref = useRef();

  return (
    <Flex gap="24px">
      <LTagInput
        ref={ref}
        actionRef={actionRef}
        tagClassName="LTagInput-tag"
        prefix={<div>prefix</div>}
        suffix={<div>suffix</div>}
        // defaultValue="dasdsadasDFSD"
        // onFocus={(e) => {
        //   console.log('=== onFocus==>', e);
        // }}
        // onBlur={(e) => {
        //   console.log('=== onBlur==>', e);
        // }}
        // onChange={(val) => {
        //   console.log('=== onChange==>', val);
        // }}
        // onEnter={(e) => {
        //   console.log('=== onEnter==>', e);
        // }}
      />
      <Button onClick={() => actionRef.current.inset('hello', '111')}>\u63D2\u5165</Button>
      <Button onClick={() => actionRef.current.clear()}>\u6E05\u9664</Button>
    </Flex>
  );
};

export default Index;
`},86960:function(v,e){"use strict";e.Z=`import { useMount, useRafState } from 'ahooks';
import React, { useImperativeHandle, useRef } from 'react';
import type { LTagInputProps } from './interface';
import { useStyles } from './styles';
import useSelectionChange from './use-selection-change';

const regex1 = /<i(?=[^>]*\\bdata-label="([^"]+)")(?=[^>]*\\bdata-value="([^"]+)")[^>]*>.*?<\\/i>/g;
const regex2 = /{{#([^#]+)\\.([^#]+)#}}/g;

const LTagInput = React.forwardRef<any, LTagInputProps>((props, ref) => {
  const {
    defaultValue,
    placeholder = '\u8BF7\u8F93\u5165',
    style,
    className,
    tagClassName,
    actionRef,
    inputStyle,
    inputClassName,
    placeholderStyle,
    disabled,
    autoFocus = true,
    prefix,
    suffix,
    //
    onInput,
    onChange,
    onKeyDown,
    onEnter,
    ...restProps
  } = props;

  const { styles, cx } = useStyles({ disabled });
  const inputRef = useRef<HTMLDivElement>(null!);
  const [state, setState] = useRafState<string>(defaultValue ?? '');
  const [showPlaceholder, setshowPlaceholder] = useRafState(!state);
  const { rangeObjRef, contentId } = useSelectionChange(disabled);

  const handleInput = (e) => {
    if (disabled) return;
    const inputDom = e.target;
    const textContent = inputDom.textContent;
    const innerHTML = inputDom.innerHTML === '<br>' ? '' : inputDom.innerHTML;
    const replacedStr = innerHTML.replace(regex1, (match, p1: string, p2: string) => \`{{#\${p1}.\${p2}#}}\`);
    inputDom.dataset.value = replacedStr;
    setState(replacedStr);
    setshowPlaceholder(!textContent?.length);
    onInput?.(e);
    onChange?.(e);
  };

  const inset = (taglabel: string, tagvalue: string) => {
    if (disabled) return;
    const node = document.createElement('i');
    if (tagClassName) node.classList.add(tagClassName);
    node.dataset['label'] = taglabel;
    node.dataset['value'] = tagvalue;
    node.innerHTML = taglabel;
    if (rangeObjRef.current) {
      rangeObjRef.current.deleteContents();
      rangeObjRef.current.insertNode(node);
      rangeObjRef.current?.collapse(false);
    } else {
      inputRef.current?.appendChild(node);
    }
    if (autoFocus) inputRef.current?.focus();
    handleInput({ target: inputRef.current });
  };

  useImperativeHandle(actionRef, () => ({
    inset,
    focus: () => {
      if (disabled) return;
      inputRef.current?.focus();
    },
    blur: () => {
      if (disabled) return;
      inputRef.current?.blur();
    },
    clear: () => {
      if (disabled) return;
      inputRef.current.dataset.value = '';
      inputRef.current.innerHTML = '';
      setshowPlaceholder(true);
    },
    getValue: () => {
      if (disabled) return;
      return inputRef.current.dataset.value;
    },
  }));

  useMount(() => {
    if (!state) return;
    inputRef.current.dataset.value = state;
    inputRef.current.innerHTML = state.replace(regex2, (match, p1, p2) => {
      return tagClassName
        ? \`<i class=\${tagClassName} data-label="\${p1}" data-value="\${p2}">\${p1}</i>\`
        : \`<i data-label="\${p1}" data-value="\${p2}">\${p1}</i>\`;
    });
    setshowPlaceholder(false);
  });

  const contentdom = (
    <div className={styles.content_wapper}>
      <div
        contentEditable
        {...restProps}
        tabIndex={-1}
        data-disabled={disabled}
        style={inputStyle}
        id={contentId}
        className={cx(styles.content, inputClassName)}
        ref={(r) => {
          if (!r) return;
          if (ref) ref.current = r;
          inputRef.current = r;
        }}
        onInput={handleInput}
        onKeyDown={(e) => {
          if (disabled) return;
          onKeyDown?.(e);
          if (e.key === 'Enter') {
            e.preventDefault();
            onEnter?.(e);
          }
        }}
      />
      {showPlaceholder && (
        <div className={styles.placeholder} style={placeholderStyle}>
          {placeholder}
        </div>
      )}
    </div>
  );

  return (
    <div className={cx(styles.container, className)} style={style}>
      {prefix}
      {contentdom}
      {suffix}
    </div>
  );
});
export default LTagInput;
export * from './interface';
`},31983:function(v,e){"use strict";e.Z=`export type LTagInputActionRef = {
  inset: (taglabel: string, value: string) => void;
  focus: () => void;
  blur: () => void;
  clear: () => void;
};

export type LTagInputProps = {
  defaultValue?: string;
  onChange?: (val: string) => void;
  disabled?: boolean;
  placeholder?: string;
  style?: React.CSSProperties;
  className?: string;
  tagClassName?: string;
  actionRef?: React.MutableRefObject<LTagInputActionRef | undefined>;
  inputStyle?: React.CSSProperties;
  inputClassName?: string;
  placeholderStyle?: React.CSSProperties;
  onEnter?: React.KeyboardEventHandler<HTMLDivElement>;
  prefix: React.ReactNode;
  suffix: React.ReactNode;
  [x: string]: any;
} & React.HTMLAttributes<HTMLInputElement>;
`},21064:function(v,e){"use strict";e.Z=`import { createStyles } from 'lighting-design/styles';

export const useStyles = createStyles((p, { disabled }: any) => {
  const { css, cx, prefixCls, token } = p;
  return {
    container: css\`
      display: flex;
      align-items: center;
      gap: 8px;
      position: relative;
      box-sizing: border-box;
      width: 100%;
      height: \${token.controlHeight}px;
      padding: 0 10px;
      border-width: \${token.lineWidth}px;
      border-style: solid;
      border-color: #d9d9d9;
      color: rgba(0, 0, 0, 0.88);
      font-size: 14px;
      border-radius: \${token.borderRadius}px;
      transition: all 0.2s;
      outline: none;
      cursor: \${disabled ? 'not-allowed' : 'text'};
      background: \${disabled ? token.colorBgContainerDisabled : token.colorBgContainer};

      &:hover {
        border-color: \${disabled ? '#d9d9d9' : token.colorPrimary};
      }
      &:focus,
      &:focus-within {
        border-color: \${disabled ? '#d9d9d9' : token.colorPrimary};
      }
    \`,
    content_wapper: css\`
      flex: 1;
      width: 0;
      outline: none;
      border: none;
    \`,
    content: css\`
      width: 100%;
      outline: none;
      border: none;
      background: transparent;
      box-sizing: border-box;
      white-space: nowrap;
      word-break: break-word;
      overflow-x: auto;
      scrollbar-width: none;
      -webkit-user-modify: \${disabled ? 'read-only' : 'read-write-plaintext-only'} !important;

      &::-webkit-scrollbar {
        display: none;
      }

      & i {
        display: inline-block;
        position: relative;
        font-style: normal;
        -webkit-user-modify: read-only !important;
        background: \${token.colorPrimary};
        color: \${token.colorWhite};
        padding: 0px 8px;
        margin: 0 4px;
        border-radius: 4px;
        white-space: nowrap;
        cursor: default;
        pointer-events: none;
        user-select: none;
        width: fit-content;
      }
    \`,

    placeholder: css\`
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      user-select: none;
      color: rgba(0, 0, 0, 0.25);
      user-select: none;
      text-overflow: inherit;
      overflow-wrap: normal;
      -webkit-user-modify: read-only !important;
      white-space: pre;
      overflow: hidden;
    \`,
  };
});
`},87227:function(v,e){"use strict";e.Z=`import { useMemoizedFn } from 'ahooks';
import { useEffect, useRef, useState } from 'react';

function generateRandomString(length: number = 10): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters.charAt(randomIndex);
  }
  return result;
}

export default function useSelectionChange(disabled = false) {
  const rangeObjRef = useRef<Range>();
  const [contentId] = useState(() => \`l-tag-input-\${generateRandomString(10)}\`);

  const selecthandler = useMemoizedFn(() => {
    if (disabled) return;
    const sel = window.getSelection();
    const range = sel ? (sel.rangeCount > 0 ? sel?.getRangeAt(0) : null) : null;
    if (range && document?.activeElement?.id === contentId) {
      rangeObjRef.current = range;
    }
  });

  useEffect(() => {
    document.addEventListener('selectionchange', selecthandler);
    return () => {
      document.removeEventListener('selectionchange', selecthandler);
    };
  }, []);

  return {
    rangeObjRef,
    contentId,
  };
}
`}}]);
