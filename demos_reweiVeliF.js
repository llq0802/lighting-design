(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{cGsy:function(e,t,a){"use strict";a.r(t);a("DYRE");var n=a("zeV3"),c=a("0Owb"),l=(a("+L6B"),a("2/Rp")),o=a("tJVT"),i=a("q1tI"),p=a.n(i),s=a("zK1H"),r=!1,f=r?"/":"/lighting-design/",m={audio:{url:"".concat(f,"test.mp3"),fileName:"test.mp3",fileType:"audio"},video:{url:"".concat(f,"test.mp4"),fileName:"test.mp4",fileType:"video"},pdf:{url:"".concat(f,"test.pdf"),fileName:"test.pdf",fileType:"pdf"},word:{url:"".concat(f,"test.docx"),fileName:"test.docx",fileType:""},excel:{url:"".concat(f,"test.xlsx"),fileName:"test.xlsx",fileType:""}};function u(){var e=Object(i["useState"])(!1),t=Object(o["a"])(e,2),a=t[0],r=t[1],f=Object(i["useState"])({url:"",fileName:"",fileType:""}),u=Object(o["a"])(f,2),d=u[0],j=u[1],g=e=>{j(m[e]),r(!0)};return p.a.createElement(n["b"],null,p.a.createElement(l["a"],{onClick:()=>g("audio")},"\u9884\u89c8\u97f3\u9891"),p.a.createElement(l["a"],{onClick:()=>g("video")},"\u9884\u89c8\u89c6\u9891"),p.a.createElement(l["a"],{onClick:()=>g("pdf")},"\u9884\u89c8pdf"),p.a.createElement(l["a"],{onClick:()=>g("word")},"\u9884\u89c8word"),p.a.createElement(l["a"],{onClick:()=>g("excel")},"\u9884\u89c8excel"),p.a.createElement(s["j"],Object(c["a"])({},d,{open:a,onCancel:()=>r(!1)})))}t["default"]=u},yiUA:function(e,t,a){"use strict";a.r(t);a("DYRE");var n=a("zeV3"),c=(a("+L6B"),a("2/Rp")),l=a("tJVT"),o=a("q1tI"),i=a.n(o),p=a("zK1H"),s=!1,r=s?"/":"/lighting-design/",f=["https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg","https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg","https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png","https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"];function m(){var e=Object(o["useState"])(!1),t=Object(l["a"])(e,2),a=t[0],s=t[1],m=Object(o["useState"])(!1),u=Object(l["a"])(m,2),d=u[0],j=u[1];return i.a.createElement(n["b"],null,i.a.createElement(c["a"],{onClick:()=>s(!0)},"\u9884\u89c8\u5355\u5f20\u56fe\u7247"),i.a.createElement(c["a"],{onClick:()=>j(!0)},"\u9884\u89c8\u591a\u5f20\u56fe\u7247"),i.a.createElement(p["j"],{fileType:"image",url:["".concat(r,"test.jpg")],open:a,onOpenChange:s}),i.a.createElement(p["j"],{fileType:"image",url:f,open:d,onOpenChange:j}))}t["default"]=m}}]);