(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{SE1X:function(e,a,l){"use strict";l.r(a);l("5NDa");var t=l("5rEg"),n=(l("OaEy"),l("2fM7")),r=l("tJVT"),m=l("q1tI"),c=l.n(m),s=l("zK1H"),o=l("lpcK"),u=()=>{var e=s["j"].useForm(),a=Object(r["a"])(e,1),l=a[0],m=s["j"].useWatch("sex",l);return c.a.createElement(c.a.Fragment,null,c.a.createElement(s["j"],{labelWidth:90,name:"LForm3",form:l,submitter:{buttonAlign:90}},c.a.createElement(s["k"],{name:"sex",label:"\u6027\u522b",required:!0},c.a.createElement(n["a"],{placeholder:"\u9009\u62e9\u6027\u522b",options:[{value:"1",label:"\u7537"},{value:"0",label:"\u5973"}]})),c.a.createElement(s["k"],{required:!0,name:"age",className:"l-age",label:"\u5e74\u9f84",alignItems:"end",contentAfter:c.a.createElement("div",null,"\u5c81"),dependencies:["sex"]},c.a.createElement(o["a"],null)),"1"===m?c.a.createElement(s["k"],{label:"\u4fe1\u606f",name:"l-info",className:"lightd-form-item-className1",contentClassName:"lightd-form-item-contentClassName1",required:!0,contentProps:{placeholder:"\u8f93\u5165\u4fe1\u606f"}},c.a.createElement(t["a"],null)):null))};a["default"]=u},gJDd:function(e,a,l){"use strict";l.r(a);l("OaEy");var t=l("2fM7"),n=l("tJVT"),r=l("q1tI"),m=l.n(r),c=l("zK1H"),s=l("lpcK"),o=(l("5NDa"),l("5rEg")),u=l("0Owb"),i=l("PpiC"),d=["sex"],E=e=>{var a=e.sex,l=Object(i["a"])(e,d),t="1"!==a;return m.a.createElement(o["a"],Object(u["a"])({},l,{disabled:t}))},b=E,g=()=>{var e=c["j"].useForm(),a=Object(n["a"])(e,1),l=a[0];return m.a.createElement(m.a.Fragment,null,m.a.createElement(c["j"],{labelWidth:90,name:"LForm3",form:l,submitter:{buttonAlign:90}},m.a.createElement(c["k"],{name:"sex",label:"\u6027\u522b",required:!0},m.a.createElement(t["a"],{placeholder:"\u9009\u62e9\u6027\u522b",options:[{value:"1",label:"\u7537"},{value:"0",label:"\u5973"}]})),m.a.createElement(c["k"],{required:!0,name:"age",className:"l-age",label:"\u5e74\u9f84",alignItems:"end",contentAfter:m.a.createElement("div",null,"\u5c81")},m.a.createElement(s["a"],null)),m.a.createElement(c["k"],{label:"\u4fe1\u606f",name:"l-info",dependencies:["sex"],className:"lightd-form-item-className1",contentClassName:"lightd-form-item-contentClassName1",contentProps:{placeholder:"\u9009\u62e9\u6027\u522b\u4e3a\u7537\u65f6\u624d\u4e0d\u4f1a\u7981\u7528"}},m.a.createElement(b,null))))};a["default"]=g},hCop:function(e,a,l){"use strict";l.r(a);l("BoS7");var t=l("Sdc0"),n=(l("OaEy"),l("2fM7")),r=(l("5NDa"),l("5rEg")),m=l("tJVT"),c=l("q1tI"),s=l.n(c),o=l("zK1H"),u=l("lpcK"),i=()=>{var e=o["j"].useForm(),a=Object(m["a"])(e,1),l=a[0];return s.a.createElement(s.a.Fragment,null,s.a.createElement(o["j"],{labelWidth:90,name:"LForm1",form:l,submitter:{buttonAlign:90},transformValues:e=>(console.log("val-transformValues",e),e.switch=+!!e.switch,e),onFinish:e=>{console.log("values",e)}},s.a.createElement(o["k"],{label:"\u59d3\u540d",name:"l-name",className:"lightd-form-item-className",contentClassName:"lightd-form-item-contentClassName",contentAfter:s.a.createElement("div",null,"\u540e\u9762"),required:!0,contentProps:{placeholder:"\u8f93\u5165\u59d3\u540d"}},s.a.createElement(r["a"],null)),s.a.createElement(o["k"],{name:"l-sex",label:"\u6027\u522b",required:!0,contentBefore:s.a.createElement(s.a.Fragment,null,"\u524d\u9762")},s.a.createElement(n["a"],{onChange:e=>{console.log("val-Select",e)},placeholder:"\u9009\u62e9\u6027\u522b",options:[{value:"1",label:"\u7537"},{value:"0",label:"\u5973"}]})),s.a.createElement(o["k"],{required:!0,name:"age",className:"l-age",label:"\u5e74\u9f84",alignItems:"end",contentAfter:s.a.createElement("div",null,"\u5c81"),dependencies:["sex"]},s.a.createElement(u["a"],null)),s.a.createElement(o["k"],{valuePropName:"checked",name:"switch",label:"\u5f00\u5173",contentAfter:s.a.createElement("div",null,"contentInline\u4e3atrue\u7684\u6548\u679c"),contentInline:!0},s.a.createElement(t["a"],null)),s.a.createElement(o["k"],{label:"\u81ea\u5b9a\u4e49\u6e32\u67d3",name:"l-name2",className:"lightd-form-item-className2",contentClassName:"lightd-form-item-contentClassName2",required:!0,renderField:e=>s.a.createElement(r["a"],{placeholder:"\u81ea\u5b9a\u4e49\u6e32\u67d3"})})))};a["default"]=i},lpcK:function(e,a,l){"use strict";l("OaEy");var t=l("2fM7"),n=l("q1tI"),r=l.n(n),m=e=>r.a.createElement(r.a.Fragment,null,r.a.createElement(t["a"],{value:e.value,placeholder:"\u9009\u62e9\u5e74\u9f84",options:[{value:"18",label:"18"},{value:"19",label:"19"},{value:"20",label:"20"},{value:"21",label:"21"},{value:"22",label:"22"}],onChange:e.onChange}));a["a"]=m},rpNA:function(e,a,l){"use strict";l.r(a);l("5NDa");var t=l("5rEg"),n=(l("OaEy"),l("2fM7")),r=l("tJVT"),m=l("q1tI"),c=l.n(m),s=l("zK1H"),o=l("lpcK"),u=()=>{var e=s["j"].useForm(),a=Object(r["a"])(e,1),l=a[0];return c.a.createElement(c.a.Fragment,null,c.a.createElement(s["j"],{labelWidth:90,name:"LForm2",form:l,submitter:{buttonAlign:90}},c.a.createElement(s["k"],{name:"sex",label:"\u6027\u522b",required:!0},c.a.createElement(n["a"],{placeholder:"\u9009\u62e9\u6027\u522b",options:[{value:"1",label:"\u7537"},{value:"0",label:"\u5973"}]})),c.a.createElement(s["k"],{required:!0,name:"age",className:"l-age",label:"\u5e74\u9f84",alignItems:"end",contentAfter:c.a.createElement("div",null,"\u5c81"),dependencies:["sex"]},c.a.createElement(o["a"],null)),c.a.createElement(s["k"],{noStyle:!0,shouldUpdate:(e,a)=>e.sex!==a.sex},(e=>{var a=e.getFieldValue;return"1"===a("sex")?c.a.createElement(s["k"],{label:"\u4fe1\u606f",name:"l-info",className:"lightd-form-item-className1",contentClassName:"lightd-form-item-contentClassName1",required:!0,contentProps:{placeholder:"\u8f93\u5165\u4fe1\u606f"}},c.a.createElement(t["a"],null)):null}))))};a["default"]=u}}]);