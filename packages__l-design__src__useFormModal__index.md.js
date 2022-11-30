(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[66,38],{MZF8:function(e,a,t){"use strict";var n=t("ogwx");t.d(a,"a",(function(){return n["b"]}));t("VCU9")},"sL+5":function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),l=t("dEAq"),o=t("Zxc8"),c=t("H1Ra"),m=t("dMo/"),d=r.a.memo((e=>{var a=e.demos,t=a["useformmodal-demo1"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"useformmodal"},r.a.createElement(l["AnchorLink"],{to:"#useformmodal","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"useFormModal"),r.a.createElement("p",null,"\u4f7f\u7528 hooks \u65b9\u5f0f\u7684\u5f39\u7a97\u8868\u5355\u7ec4\u4ef6 \u3001\u7528\u4e8e\u4e1a\u52a1\u529f\u80fd\u4ee3\u7801\u5206\u79bb\u3001\u907f\u514d\u8fc7\u591a\u72b6\u6001\u548c Form \u7ec4\u4ef6\u4e1a\u52a1\u4ee3\u7801\u96c6\u4e2d\u5728\u4e00\u4e2a\u6587\u4ef6\u4e0a\u3002"),r.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.a.createElement(l["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),r.a.createElement(o["default"],a["useformmodal-demo1"].previewerProps,r.a.createElement(t,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement(c["a"],{code:"const useFormModal: (\n  FormSlot: (props: FormSlotProps, ref: React.MutableRefObject<FormInstance<any>>) => JSX.Element,\n  modalProps?: DraggableModalProps,\n) => {\n  FormModal: (formSlotProps: FormSlotProps) => JSX.Element;\n  form: FormInstance;\n  onOpen: () => void;\n  onClose: () => void;\n};",lang:"ts"}),r.a.createElement("h3",{id:"params"},r.a.createElement(l["AnchorLink"],{to:"#params","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Params"),r.a.createElement(m["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{align:"center"},"Name"),r.a.createElement("th",{align:"center"},"Description"),r.a.createElement("th",{align:"center"},"Type"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{align:"center"},"FormSlot"),r.a.createElement("td",{align:"center"},"\u4e1a\u52a1 ant Form \u7ec4\u4ef6"),r.a.createElement("td",{align:"center"},r.a.createElement("code",null,"(props: FormSlotProps, ref: React.MutableRefObject<FormInstance<any>>) => JSX.Element,"))),r.a.createElement("tr",null,r.a.createElement("td",{align:"center"},"modalProps"),r.a.createElement("td",{align:"center"},"antd-Modal \u7684 Props"),r.a.createElement("td",{align:"center"},r.a.createElement("code",null,"DraggableModalProps"))))),r.a.createElement("h3",{id:"result"},r.a.createElement(l["AnchorLink"],{to:"#result","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Result"),r.a.createElement(m["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{align:"center"},"Name"),r.a.createElement("th",{align:"center"},"Description"),r.a.createElement("th",{align:"center"},"Type"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{align:"center"},"FormModal"),r.a.createElement("td",{align:"center"},"\u4f20\u5165\u7684 FormSlot \u7ec4\u4ef6"),r.a.createElement("td",{align:"center"},r.a.createElement("code",null,"(formSlotProps: FormSlotProps) => JSX.Element"))),r.a.createElement("tr",null,r.a.createElement("td",{align:"center"},"form"),r.a.createElement("td",{align:"center"},"antd Form \u5b9e\u4f8b"),r.a.createElement("td",{align:"center"},r.a.createElement("code",null,"FormInstance"))),r.a.createElement("tr",null,r.a.createElement("td",{align:"center"},"onOpen"),r.a.createElement("td",{align:"center"},"\u6253\u5f00\u5f39\u7a97"),r.a.createElement("td",{align:"center"},r.a.createElement("code",null,"() => void"))),r.a.createElement("tr",null,r.a.createElement("td",{align:"center"},"onClose"),r.a.createElement("td",{align:"center"},"\u5173\u95ed\u5f39\u7a97"),r.a.createElement("td",{align:"center"},r.a.createElement("code",null,"() => void"))))),r.a.createElement("h3",{id:"\u7c7b\u578b"},r.a.createElement(l["AnchorLink"],{to:"#\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u7c7b\u578b"),r.a.createElement(c["a"],{code:"export type DraggableModalProps = {\n  /*\u662f\u5426\u80fd\u62d6\u52a8*/\n  isDraggable: boolean;\n} & ModalProps; // \u7ee7\u627fantd Modal\u7684\u5176\u4ed6\u5c5e\u6027\n\nexport interface FormSlotProps extends FormProps {\n  /*form\u7ed1\u5b9a\u7684\u503c*/\n  formValues?: Record<string, any>;\n  /*\u70b9\u51fb\u786e\u5b9a\u6309\u94ae\u89e6\u53d1, \u7528\u4e8e\u63d0\u4ea4form\u8868\u5355, \u5e76\u4f1a\u89e6\u53d1\u8868\u5355\u9a8c\u8bc1*/\n  submit?: (fields: Record<string, any>, form: FormInstance) => any;\n  /*\u9700\u8981\u4f20\u7ed9 FormSlot \u7ec4\u4ef6\u7684\u5176\u4ed6\u5c5e\u6027\u6216\u65b9\u6cd5*/\n  [key: string]: any;\n}",lang:"ts"}))))}));a["default"]=e=>{var a=r.a.useContext(l["context"]),t=a.demos;return r.a.useEffect((()=>{var a;null!==e&&void 0!==e&&null!==(a=e.location)&&void 0!==a&&a.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(d,{demos:t})}}}]);