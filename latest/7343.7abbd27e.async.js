!(function(){"use strict";var ht=Object.defineProperty,gt=Object.defineProperties;var mt=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var lt=Object.prototype.hasOwnProperty,ct=Object.prototype.propertyIsEnumerable;var st=($,i,r)=>i in $?ht($,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):$[i]=r,K=($,i)=>{for(var r in i||(i={}))lt.call(i,r)&&st($,r,i[r]);if(_)for(var r of _(i))ct.call(i,r)&&st($,r,i[r]);return $},ot=($,i)=>gt($,mt(i));var dt=($,i)=>{var r={};for(var o in $)lt.call($,o)&&i.indexOf(o)<0&&(r[o]=$[o]);if($!=null&&_)for(var o of _($))i.indexOf(o)<0&&ct.call($,o)&&(r[o]=$[o]);return r};(self.webpackChunklighting_design=self.webpackChunklighting_design||[]).push([[7343],{90768:function($,i,r){var o=r(97582),c=r(67294),O=r(92770),w=r(22638),D=r(90105);function d(m,E){m===void 0&&(m={}),E===void 0&&(E={});var I=E.defaultValue,Y=E.defaultValuePropName,N=Y===void 0?"defaultValue":Y,p=E.valuePropName,P=p===void 0?"value":p,v=E.trigger,C=v===void 0?"onChange":v,T=m[P],u=m.hasOwnProperty(P),e=(0,c.useMemo)(function(){return u?T:m.hasOwnProperty(N)?m[N]:I},[]),a=(0,c.useRef)(e);u&&(a.current=T);var l=(0,D.Z)();function f(y){for(var S=[],t=1;t<arguments.length;t++)S[t-1]=arguments[t];var n=(0,O.mf)(y)?y(a.current):y;u||(a.current=n,l()),m[C]&&m[C].apply(m,(0,o.ev)([n],(0,o.CR)(S),!1))}return[a.current,(0,w.Z)(f)]}i.Z=d},16932:function($,i,r){r.d(i,{J$:function(){return D}});var o=r(77794),c=r(93590);const O=new o.Keyframes("antFadeIn",{"0%":{opacity:0},"100%":{opacity:1}}),w=new o.Keyframes("antFadeOut",{"0%":{opacity:1},"100%":{opacity:0}}),D=function(d){let m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const{antCls:E}=d,I=`${E}-fade`,Y=m?"&":"";return[(0,c.R)(I,O,w,d.motionDurationMid,m),{[`
        ${Y}${I}-enter,
        ${Y}${I}-appear
      `]:{opacity:0,animationTimingFunction:"linear"},[`${Y}${I}-leave`]:{animationTimingFunction:"linear"}}]}},72269:function($,i,r){r.d(i,{Z:function(){return z}});var o=r(67294),c=r(50888),O=r(94184),w=r.n(O),D=r(87462),d=r(4942),m=r(97685),E=r(91),I=r(21770),Y=r(15105),N=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],p=o.forwardRef(function(s,g){var W,b=s.prefixCls,x=b===void 0?"rc-switch":b,L=s.className,X=s.checked,M=s.defaultChecked,A=s.disabled,k=s.loadingIcon,tt=s.checkedChildren,et=s.unCheckedChildren,B=s.onClick,G=s.onChange,j=s.onKeyDown,V=(0,E.Z)(s,N),nt=(0,I.Z)(!1,{value:X,defaultValue:M}),J=(0,m.Z)(nt,2),Z=J[0],at=J[1];function Q(F,rt){var q=Z;return A||(q=F,at(q),G==null||G(q,rt)),q}function it(F){F.which===Y.Z.LEFT?Q(!1,F):F.which===Y.Z.RIGHT&&Q(!0,F),j==null||j(F)}function ut(F){var rt=Q(!Z,F);B==null||B(rt,F)}var ft=w()(x,L,(W={},(0,d.Z)(W,"".concat(x,"-checked"),Z),(0,d.Z)(W,"".concat(x,"-disabled"),A),W));return o.createElement("button",(0,D.Z)({},V,{type:"button",role:"switch","aria-checked":Z,disabled:A,className:ft,ref:g,onKeyDown:it,onClick:ut}),k,o.createElement("span",{className:"".concat(x,"-inner")},o.createElement("span",{className:"".concat(x,"-inner-checked")},tt),o.createElement("span",{className:"".concat(x,"-inner-unchecked")},et)))});p.displayName="Switch";var P=p,v=r(45353),C=r(53124),T=r(98866),u=r(98675),e=r(10274),a=r(14747),l=r(67968),f=r(45503);const y=s=>{const{componentCls:g,trackHeightSM:W,trackPadding:b,trackMinWidthSM:x,innerMinMarginSM:L,innerMaxMarginSM:X,handleSizeSM:M}=s,A=`${g}-inner`;return{[g]:{[`&${g}-small`]:{minWidth:x,height:W,lineHeight:`${W}px`,[`${g}-inner`]:{paddingInlineStart:X,paddingInlineEnd:L,[`${A}-checked`]:{marginInlineStart:`calc(-100% + ${M+b*2}px - ${X*2}px)`,marginInlineEnd:`calc(100% - ${M+b*2}px + ${X*2}px)`},[`${A}-unchecked`]:{marginTop:-W,marginInlineStart:0,marginInlineEnd:0}},[`${g}-handle`]:{width:M,height:M},[`${g}-loading-icon`]:{top:(M-s.switchLoadingIconSize)/2,fontSize:s.switchLoadingIconSize},[`&${g}-checked`]:{[`${g}-inner`]:{paddingInlineStart:L,paddingInlineEnd:X,[`${A}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${A}-unchecked`]:{marginInlineStart:`calc(100% - ${M+b*2}px + ${X*2}px)`,marginInlineEnd:`calc(-100% + ${M+b*2}px - ${X*2}px)`}},[`${g}-handle`]:{insetInlineStart:`calc(100% - ${M+b}px)`}},[`&:not(${g}-disabled):active`]:{[`&:not(${g}-checked) ${A}`]:{[`${A}-unchecked`]:{marginInlineStart:s.marginXXS/2,marginInlineEnd:-s.marginXXS/2}},[`&${g}-checked ${A}`]:{[`${A}-checked`]:{marginInlineStart:-s.marginXXS/2,marginInlineEnd:s.marginXXS/2}}}}}}},S=s=>{const{componentCls:g,handleSize:W}=s;return{[g]:{[`${g}-loading-icon${s.iconCls}`]:{position:"relative",top:(W-s.fontSize)/2,color:s.switchLoadingIconColor,verticalAlign:"top"},[`&${g}-checked ${g}-loading-icon`]:{color:s.switchColor}}}},t=s=>{const{componentCls:g,motion:W,trackPadding:b,handleBg:x,handleShadow:L,handleSize:X}=s,M=`${g}-handle`;return{[g]:{[M]:{position:"absolute",top:b,insetInlineStart:b,width:X,height:X,transition:`all ${s.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:x,borderRadius:X/2,boxShadow:L,transition:`all ${s.switchDuration} ease-in-out`,content:'""'}},[`&${g}-checked ${M}`]:{insetInlineStart:`calc(100% - ${X+b}px)`},[`&:not(${g}-disabled):active`]:W?{[`${M}::before`]:{insetInlineEnd:s.switchHandleActiveInset,insetInlineStart:0},[`&${g}-checked ${M}::before`]:{insetInlineEnd:0,insetInlineStart:s.switchHandleActiveInset}}:{}}}},n=s=>{const{componentCls:g,trackHeight:W,trackPadding:b,innerMinMargin:x,innerMaxMargin:L,handleSize:X}=s,M=`${g}-inner`;return{[g]:{[M]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:L,paddingInlineEnd:x,transition:`padding-inline-start ${s.switchDuration} ease-in-out, padding-inline-end ${s.switchDuration} ease-in-out`,[`${M}-checked, ${M}-unchecked`]:{display:"block",color:s.colorTextLightSolid,fontSize:s.fontSizeSM,transition:`margin-inline-start ${s.switchDuration} ease-in-out, margin-inline-end ${s.switchDuration} ease-in-out`,pointerEvents:"none"},[`${M}-checked`]:{marginInlineStart:`calc(-100% + ${X+b*2}px - ${L*2}px)`,marginInlineEnd:`calc(100% - ${X+b*2}px + ${L*2}px)`},[`${M}-unchecked`]:{marginTop:-W,marginInlineStart:0,marginInlineEnd:0}},[`&${g}-checked ${M}`]:{paddingInlineStart:x,paddingInlineEnd:L,[`${M}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${M}-unchecked`]:{marginInlineStart:`calc(100% - ${X+b*2}px + ${L*2}px)`,marginInlineEnd:`calc(-100% + ${X+b*2}px - ${L*2}px)`}},[`&:not(${g}-disabled):active`]:{[`&:not(${g}-checked) ${M}`]:{[`${M}-unchecked`]:{marginInlineStart:b*2,marginInlineEnd:-b*2}},[`&${g}-checked ${M}`]:{[`${M}-checked`]:{marginInlineStart:-b*2,marginInlineEnd:b*2}}}}}},h=s=>{const{componentCls:g,trackHeight:W,trackMinWidth:b}=s;return{[g]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,a.Wf)(s)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:b,height:W,lineHeight:`${W}px`,verticalAlign:"middle",background:s.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${s.motionDurationMid}`,userSelect:"none",[`&:hover:not(${g}-disabled)`]:{background:s.colorTextTertiary}}),(0,a.Qy)(s)),{[`&${g}-checked`]:{background:s.switchColor,[`&:hover:not(${g}-disabled)`]:{background:s.colorPrimaryHover}},[`&${g}-loading, &${g}-disabled`]:{cursor:"not-allowed",opacity:s.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${g}-rtl`]:{direction:"rtl"}})}};var R=(0,l.Z)("Switch",s=>{const g=(0,f.TS)(s,{switchDuration:s.motionDurationMid,switchColor:s.colorPrimary,switchDisabledOpacity:s.opacityLoading,switchLoadingIconSize:s.fontSizeIcon*.75,switchLoadingIconColor:`rgba(0, 0, 0, ${s.opacityLoading})`,switchHandleActiveInset:"-30%"});return[h(g),n(g),t(g),S(g),y(g)]},s=>{const{fontSize:g,lineHeight:W,controlHeight:b,colorWhite:x}=s,L=g*W,X=b/2,M=2,A=L-M*2,k=X-M*2;return{trackHeight:L,trackHeightSM:X,trackMinWidth:A*2+M*4,trackMinWidthSM:k*2+M*2,trackPadding:M,handleBg:x,handleSize:A,handleSizeSM:k,handleShadow:`0 2px 4px 0 ${new e.C("#00230b").setAlpha(.2).toRgbString()}`,innerMinMargin:A/2,innerMaxMargin:A+M+M*2,innerMinMarginSM:k/2,innerMaxMarginSM:k+M+M*2}}),U=function(s,g){var W={};for(var b in s)Object.prototype.hasOwnProperty.call(s,b)&&g.indexOf(b)<0&&(W[b]=s[b]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,b=Object.getOwnPropertySymbols(s);x<b.length;x++)g.indexOf(b[x])<0&&Object.prototype.propertyIsEnumerable.call(s,b[x])&&(W[b[x]]=s[b[x]]);return W};const H=o.forwardRef((s,g)=>{const{prefixCls:W,size:b,disabled:x,loading:L,className:X,rootClassName:M,style:A}=s,k=U(s,["prefixCls","size","disabled","loading","className","rootClassName","style"]),{getPrefixCls:tt,direction:et,switch:B}=o.useContext(C.E_),G=o.useContext(T.Z),j=(x!=null?x:G)||L,V=tt("switch",W),nt=o.createElement("div",{className:`${V}-handle`},L&&o.createElement(c.Z,{className:`${V}-loading-icon`})),[J,Z]=R(V),at=(0,u.Z)(b),Q=w()(B==null?void 0:B.className,{[`${V}-small`]:at==="small",[`${V}-loading`]:L,[`${V}-rtl`]:et==="rtl"},X,M,Z),it=Object.assign(Object.assign({},B==null?void 0:B.style),A);return J(o.createElement(v.Z,{component:"Switch"},o.createElement(P,Object.assign({},k,{prefixCls:V,className:Q,style:it,disabled:j,ref:g,loadingIcon:nt}))))});H.__ANT_SWITCH=!0;var z=H},86010:function($,i,r){r.r(i),r.d(i,{clsx:function(){return c}});function o(O){var w,D,d="";if(typeof O=="string"||typeof O=="number")d+=O;else if(typeof O=="object")if(Array.isArray(O))for(w=0;w<O.length;w++)O[w]&&(D=o(O[w]))&&(d&&(d+=" "),d+=D);else for(w in O)O[w]&&(d&&(d+=" "),d+=w);return d}function c(){for(var O,w,D=0,d="";D<arguments.length;)(O=arguments[D++])&&(w=o(O))&&(d&&(d+=" "),d+=w);return d}i.default=c},54857:function($,i,r){Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"DraggableCore",{enumerable:!0,get:function(){return E.default}}),i.default=void 0;var o=p(r(67294)),c=Y(r(45697)),O=Y(r(73935)),w=Y(r(86010)),D=r(81825),d=r(2849),m=r(9280),E=Y(r(80783)),I=Y(r(55904));function Y(e){return e&&e.__esModule?e:{default:e}}function N(e){if(typeof WeakMap!="function")return null;var a=new WeakMap,l=new WeakMap;return(N=function(f){return f?l:a})(e)}function p(e,a){if(!a&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var l=N(a);if(l&&l.has(e))return l.get(e);var f={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var S in e)if(S!=="default"&&Object.prototype.hasOwnProperty.call(e,S)){var t=y?Object.getOwnPropertyDescriptor(e,S):null;t&&(t.get||t.set)?Object.defineProperty(f,S,t):f[S]=e[S]}return f.default=e,l&&l.set(e,f),f}function P(){return P=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var f in l)Object.prototype.hasOwnProperty.call(l,f)&&(e[f]=l[f])}return e},P.apply(this,arguments)}function v(e,a,l){return a=C(a),a in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}function C(e){var a=T(e,"string");return typeof a=="symbol"?a:String(a)}function T(e,a){if(typeof e!="object"||e===null)return e;var l=e[Symbol.toPrimitive];if(l!==void 0){var f=l.call(e,a||"default");if(typeof f!="object")return f;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}class u extends o.Component{static getDerivedStateFromProps(a,l){let{position:f}=a,{prevPropsPosition:y}=l;return f&&(!y||f.x!==y.x||f.y!==y.y)?((0,I.default)("Draggable: getDerivedStateFromProps %j",{position:f,prevPropsPosition:y}),{x:f.x,y:f.y,prevPropsPosition:K({},f)}):null}constructor(a){super(a),v(this,"onDragStart",(l,f)=>{if((0,I.default)("Draggable: onDragStart: %j",f),this.props.onStart(l,(0,d.createDraggableData)(this,f))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),v(this,"onDrag",(l,f)=>{if(!this.state.dragging)return!1;(0,I.default)("Draggable: onDrag: %j",f);const y=(0,d.createDraggableData)(this,f),S={x:y.x,y:y.y,slackX:0,slackY:0};if(this.props.bounds){const{x:n,y:h}=S;S.x+=this.state.slackX,S.y+=this.state.slackY;const[R,U]=(0,d.getBoundPosition)(this,S.x,S.y);S.x=R,S.y=U,S.slackX=this.state.slackX+(n-S.x),S.slackY=this.state.slackY+(h-S.y),y.x=S.x,y.y=S.y,y.deltaX=S.x-this.state.x,y.deltaY=S.y-this.state.y}if(this.props.onDrag(l,y)===!1)return!1;this.setState(S)}),v(this,"onDragStop",(l,f)=>{if(!this.state.dragging||this.props.onStop(l,(0,d.createDraggableData)(this,f))===!1)return!1;(0,I.default)("Draggable: onDragStop: %j",f);const S={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:n,y:h}=this.props.position;S.x=n,S.y=h}this.setState(S)}),this.state={dragging:!1,dragged:!1,x:a.position?a.position.x:a.defaultPosition.x,y:a.position?a.position.y:a.defaultPosition.y,prevPropsPosition:K({},a.position),slackX:0,slackY:0,isElementSVG:!1},a.position&&!(a.onDrag||a.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement!="undefined"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var a,l;return(a=(l=this.props)===null||l===void 0||(l=l.nodeRef)===null||l===void 0?void 0:l.current)!==null&&a!==void 0?a:O.default.findDOMNode(this)}render(){const X=this.props,{axis:a,bounds:l,children:f,defaultPosition:y,defaultClassName:S,defaultClassNameDragging:t,defaultClassNameDragged:n,position:h,positionOffset:R,scale:U}=X,H=dt(X,["axis","bounds","children","defaultPosition","defaultClassName","defaultClassNameDragging","defaultClassNameDragged","position","positionOffset","scale"]);let z={},s=null;const W=!!!h||this.state.dragging,b=h||y,x={x:(0,d.canDragX)(this)&&W?this.state.x:b.x,y:(0,d.canDragY)(this)&&W?this.state.y:b.y};this.state.isElementSVG?s=(0,D.createSVGTransform)(x,R):z=(0,D.createCSSTransform)(x,R);const L=(0,w.default)(f.props.className||"",S,{[t]:this.state.dragging,[n]:this.state.dragged});return o.createElement(E.default,P({},H,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),o.cloneElement(o.Children.only(f),{className:L,style:K(K({},f.props.style),z),transform:s}))}}i.default=u,v(u,"displayName","Draggable"),v(u,"propTypes",ot(K({},E.default.propTypes),{axis:c.default.oneOf(["both","x","y","none"]),bounds:c.default.oneOfType([c.default.shape({left:c.default.number,right:c.default.number,top:c.default.number,bottom:c.default.number}),c.default.string,c.default.oneOf([!1])]),defaultClassName:c.default.string,defaultClassNameDragging:c.default.string,defaultClassNameDragged:c.default.string,defaultPosition:c.default.shape({x:c.default.number,y:c.default.number}),positionOffset:c.default.shape({x:c.default.oneOfType([c.default.number,c.default.string]),y:c.default.oneOfType([c.default.number,c.default.string])}),position:c.default.shape({x:c.default.number,y:c.default.number}),className:m.dontSetMe,style:m.dontSetMe,transform:m.dontSetMe})),v(u,"defaultProps",ot(K({},E.default.defaultProps),{axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1}))},80783:function($,i,r){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=Y(r(67294)),c=E(r(45697)),O=E(r(73935)),w=r(81825),D=r(2849),d=r(9280),m=E(r(55904));function E(u){return u&&u.__esModule?u:{default:u}}function I(u){if(typeof WeakMap!="function")return null;var e=new WeakMap,a=new WeakMap;return(I=function(l){return l?a:e})(u)}function Y(u,e){if(!e&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var a=I(e);if(a&&a.has(u))return a.get(u);var l={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in u)if(y!=="default"&&Object.prototype.hasOwnProperty.call(u,y)){var S=f?Object.getOwnPropertyDescriptor(u,y):null;S&&(S.get||S.set)?Object.defineProperty(l,y,S):l[y]=u[y]}return l.default=u,a&&a.set(u,l),l}function N(u,e,a){return e=p(e),e in u?Object.defineProperty(u,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):u[e]=a,u}function p(u){var e=P(u,"string");return typeof e=="symbol"?e:String(e)}function P(u,e){if(typeof u!="object"||u===null)return u;var a=u[Symbol.toPrimitive];if(a!==void 0){var l=a.call(u,e||"default");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(u)}const v={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let C=v.mouse;class T extends o.Component{constructor(){super(...arguments),N(this,"dragging",!1),N(this,"lastX",NaN),N(this,"lastY",NaN),N(this,"touchIdentifier",null),N(this,"mounted",!1),N(this,"handleDragStart",e=>{if(this.props.onMouseDown(e),!this.props.allowAnyClick&&typeof e.button=="number"&&e.button!==0)return!1;const a=this.findDOMNode();if(!a||!a.ownerDocument||!a.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:l}=a;if(this.props.disabled||!(e.target instanceof l.defaultView.Node)||this.props.handle&&!(0,w.matchesSelectorAndParentsTo)(e.target,this.props.handle,a)||this.props.cancel&&(0,w.matchesSelectorAndParentsTo)(e.target,this.props.cancel,a))return;e.type==="touchstart"&&e.preventDefault();const f=(0,w.getTouchIdentifier)(e);this.touchIdentifier=f;const y=(0,D.getControlPosition)(e,f,this);if(y==null)return;const{x:S,y:t}=y,n=(0,D.createCoreData)(this,S,t);(0,m.default)("DraggableCore: handleDragStart: %j",n),(0,m.default)("calling",this.props.onStart),!(this.props.onStart(e,n)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,w.addUserSelectStyles)(l),this.dragging=!0,this.lastX=S,this.lastY=t,(0,w.addEvent)(l,C.move,this.handleDrag),(0,w.addEvent)(l,C.stop,this.handleDragStop))}),N(this,"handleDrag",e=>{const a=(0,D.getControlPosition)(e,this.touchIdentifier,this);if(a==null)return;let{x:l,y:f}=a;if(Array.isArray(this.props.grid)){let t=l-this.lastX,n=f-this.lastY;if([t,n]=(0,D.snapToGrid)(this.props.grid,t,n),!t&&!n)return;l=this.lastX+t,f=this.lastY+n}const y=(0,D.createCoreData)(this,l,f);if((0,m.default)("DraggableCore: handleDrag: %j",y),this.props.onDrag(e,y)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch(t){const n=document.createEvent("MouseEvents");n.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(n)}return}this.lastX=l,this.lastY=f}),N(this,"handleDragStop",e=>{if(!this.dragging)return;const a=(0,D.getControlPosition)(e,this.touchIdentifier,this);if(a==null)return;let{x:l,y:f}=a;if(Array.isArray(this.props.grid)){let n=l-this.lastX||0,h=f-this.lastY||0;[n,h]=(0,D.snapToGrid)(this.props.grid,n,h),l=this.lastX+n,f=this.lastY+h}const y=(0,D.createCoreData)(this,l,f);if(this.props.onStop(e,y)===!1||this.mounted===!1)return!1;const t=this.findDOMNode();t&&this.props.enableUserSelectHack&&(0,w.removeUserSelectStyles)(t.ownerDocument),(0,m.default)("DraggableCore: handleDragStop: %j",y),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,t&&((0,m.default)("DraggableCore: Removing handlers"),(0,w.removeEvent)(t.ownerDocument,C.move,this.handleDrag),(0,w.removeEvent)(t.ownerDocument,C.stop,this.handleDragStop))}),N(this,"onMouseDown",e=>(C=v.mouse,this.handleDragStart(e))),N(this,"onMouseUp",e=>(C=v.mouse,this.handleDragStop(e))),N(this,"onTouchStart",e=>(C=v.touch,this.handleDragStart(e))),N(this,"onTouchEnd",e=>(C=v.touch,this.handleDragStop(e)))}componentDidMount(){this.mounted=!0;const e=this.findDOMNode();e&&(0,w.addEvent)(e,v.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const e=this.findDOMNode();if(e){const{ownerDocument:a}=e;(0,w.removeEvent)(a,v.mouse.move,this.handleDrag),(0,w.removeEvent)(a,v.touch.move,this.handleDrag),(0,w.removeEvent)(a,v.mouse.stop,this.handleDragStop),(0,w.removeEvent)(a,v.touch.stop,this.handleDragStop),(0,w.removeEvent)(e,v.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,w.removeUserSelectStyles)(a)}}findDOMNode(){var e,a;return(e=this.props)!==null&&e!==void 0&&e.nodeRef?(a=this.props)===null||a===void 0||(a=a.nodeRef)===null||a===void 0?void 0:a.current:O.default.findDOMNode(this)}render(){return o.cloneElement(o.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}i.default=T,N(T,"displayName","DraggableCore"),N(T,"propTypes",{allowAnyClick:c.default.bool,children:c.default.node.isRequired,disabled:c.default.bool,enableUserSelectHack:c.default.bool,offsetParent:function(u,e){if(u[e]&&u[e].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:c.default.arrayOf(c.default.number),handle:c.default.string,cancel:c.default.string,nodeRef:c.default.object,onStart:c.default.func,onDrag:c.default.func,onStop:c.default.func,onMouseDown:c.default.func,scale:c.default.number,className:d.dontSetMe,style:d.dontSetMe,transform:d.dontSetMe}),N(T,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1})},61193:function($,i,r){const{default:o,DraggableCore:c}=r(54857);$.exports=o,$.exports.default=o,$.exports.DraggableCore=c},81825:function($,i,r){Object.defineProperty(i,"__esModule",{value:!0}),i.addClassName=y,i.addEvent=E,i.addUserSelectStyles=l,i.createCSSTransform=C,i.createSVGTransform=T,i.getTouch=e,i.getTouchIdentifier=a,i.getTranslation=u,i.innerHeight=p,i.innerWidth=P,i.matchesSelector=d,i.matchesSelectorAndParentsTo=m,i.offsetXYFromParent=v,i.outerHeight=Y,i.outerWidth=N,i.removeClassName=S,i.removeEvent=I,i.removeUserSelectStyles=f;var o=r(9280),c=w(r(38650));function O(t){if(typeof WeakMap!="function")return null;var n=new WeakMap,h=new WeakMap;return(O=function(R){return R?h:n})(t)}function w(t,n){if(!n&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var h=O(n);if(h&&h.has(t))return h.get(t);var R={},U=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var H in t)if(H!=="default"&&Object.prototype.hasOwnProperty.call(t,H)){var z=U?Object.getOwnPropertyDescriptor(t,H):null;z&&(z.get||z.set)?Object.defineProperty(R,H,z):R[H]=t[H]}return R.default=t,h&&h.set(t,R),R}let D="";function d(t,n){return D||(D=(0,o.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(h){return(0,o.isFunction)(t[h])})),(0,o.isFunction)(t[D])?t[D](n):!1}function m(t,n,h){let R=t;do{if(d(R,n))return!0;if(R===h)return!1;R=R.parentNode}while(R);return!1}function E(t,n,h,R){if(!t)return;const U=K({capture:!0},R);t.addEventListener?t.addEventListener(n,h,U):t.attachEvent?t.attachEvent("on"+n,h):t["on"+n]=h}function I(t,n,h,R){if(!t)return;const U=K({capture:!0},R);t.removeEventListener?t.removeEventListener(n,h,U):t.detachEvent?t.detachEvent("on"+n,h):t["on"+n]=null}function Y(t){let n=t.clientHeight;const h=t.ownerDocument.defaultView.getComputedStyle(t);return n+=(0,o.int)(h.borderTopWidth),n+=(0,o.int)(h.borderBottomWidth),n}function N(t){let n=t.clientWidth;const h=t.ownerDocument.defaultView.getComputedStyle(t);return n+=(0,o.int)(h.borderLeftWidth),n+=(0,o.int)(h.borderRightWidth),n}function p(t){let n=t.clientHeight;const h=t.ownerDocument.defaultView.getComputedStyle(t);return n-=(0,o.int)(h.paddingTop),n-=(0,o.int)(h.paddingBottom),n}function P(t){let n=t.clientWidth;const h=t.ownerDocument.defaultView.getComputedStyle(t);return n-=(0,o.int)(h.paddingLeft),n-=(0,o.int)(h.paddingRight),n}function v(t,n,h){const U=n===n.ownerDocument.body?{left:0,top:0}:n.getBoundingClientRect(),H=(t.clientX+n.scrollLeft-U.left)/h,z=(t.clientY+n.scrollTop-U.top)/h;return{x:H,y:z}}function C(t,n){const h=u(t,n,"px");return{[(0,c.browserPrefixToKey)("transform",c.default)]:h}}function T(t,n){return u(t,n,"")}function u(t,n,h){let{x:R,y:U}=t,H="translate(".concat(R).concat(h,",").concat(U).concat(h,")");if(n){const z="".concat(typeof n.x=="string"?n.x:n.x+h),s="".concat(typeof n.y=="string"?n.y:n.y+h);H="translate(".concat(z,", ").concat(s,")")+H}return H}function e(t,n){return t.targetTouches&&(0,o.findInArray)(t.targetTouches,h=>n===h.identifier)||t.changedTouches&&(0,o.findInArray)(t.changedTouches,h=>n===h.identifier)}function a(t){if(t.targetTouches&&t.targetTouches[0])return t.targetTouches[0].identifier;if(t.changedTouches&&t.changedTouches[0])return t.changedTouches[0].identifier}function l(t){if(!t)return;let n=t.getElementById("react-draggable-style-el");n||(n=t.createElement("style"),n.type="text/css",n.id="react-draggable-style-el",n.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,n.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,t.getElementsByTagName("head")[0].appendChild(n)),t.body&&y(t.body,"react-draggable-transparent-selection")}function f(t){if(t)try{if(t.body&&S(t.body,"react-draggable-transparent-selection"),t.selection)t.selection.empty();else{const n=(t.defaultView||window).getSelection();n&&n.type!=="Caret"&&n.removeAllRanges()}}catch(n){}}function y(t,n){t.classList?t.classList.add(n):t.className.match(new RegExp("(?:^|\\s)".concat(n,"(?!\\S)")))||(t.className+=" ".concat(n))}function S(t,n){t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(?:^|\\s)".concat(n,"(?!\\S)"),"g"),"")}},38650:function($,i){Object.defineProperty(i,"__esModule",{value:!0}),i.browserPrefixToKey=c,i.browserPrefixToStyle=O,i.default=void 0,i.getPrefix=o;const r=["Moz","Webkit","O","ms"];function o(){var d;let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window=="undefined")return"";const E=(d=window.document)===null||d===void 0||(d=d.documentElement)===null||d===void 0?void 0:d.style;if(!E||m in E)return"";for(let I=0;I<r.length;I++)if(c(m,r[I])in E)return r[I];return""}function c(d,m){return m?"".concat(m).concat(w(d)):d}function O(d,m){return m?"-".concat(m.toLowerCase(),"-").concat(d):d}function w(d){let m="",E=!0;for(let I=0;I<d.length;I++)E?(m+=d[I].toUpperCase(),E=!1):d[I]==="-"?E=!0:m+=d[I];return m}var D=i.default=o()},55904:function($,i){Object.defineProperty(i,"__esModule",{value:!0}),i.default=r;function r(){}},2849:function($,i,r){Object.defineProperty(i,"__esModule",{value:!0}),i.canDragX=D,i.canDragY=d,i.createCoreData=E,i.createDraggableData=I,i.getBoundPosition=O,i.getControlPosition=m,i.snapToGrid=w;var o=r(9280),c=r(81825);function O(p,P,v){if(!p.props.bounds)return[P,v];let{bounds:C}=p.props;C=typeof C=="string"?C:Y(C);const T=N(p);if(typeof C=="string"){const{ownerDocument:u}=T,e=u.defaultView;let a;if(C==="parent"?a=T.parentNode:a=u.querySelector(C),!(a instanceof e.HTMLElement))throw new Error('Bounds selector "'+C+'" could not find an element.');const l=a,f=e.getComputedStyle(T),y=e.getComputedStyle(l);C={left:-T.offsetLeft+(0,o.int)(y.paddingLeft)+(0,o.int)(f.marginLeft),top:-T.offsetTop+(0,o.int)(y.paddingTop)+(0,o.int)(f.marginTop),right:(0,c.innerWidth)(l)-(0,c.outerWidth)(T)-T.offsetLeft+(0,o.int)(y.paddingRight)-(0,o.int)(f.marginRight),bottom:(0,c.innerHeight)(l)-(0,c.outerHeight)(T)-T.offsetTop+(0,o.int)(y.paddingBottom)-(0,o.int)(f.marginBottom)}}return(0,o.isNum)(C.right)&&(P=Math.min(P,C.right)),(0,o.isNum)(C.bottom)&&(v=Math.min(v,C.bottom)),(0,o.isNum)(C.left)&&(P=Math.max(P,C.left)),(0,o.isNum)(C.top)&&(v=Math.max(v,C.top)),[P,v]}function w(p,P,v){const C=Math.round(P/p[0])*p[0],T=Math.round(v/p[1])*p[1];return[C,T]}function D(p){return p.props.axis==="both"||p.props.axis==="x"}function d(p){return p.props.axis==="both"||p.props.axis==="y"}function m(p,P,v){const C=typeof P=="number"?(0,c.getTouch)(p,P):null;if(typeof P=="number"&&!C)return null;const T=N(v),u=v.props.offsetParent||T.offsetParent||T.ownerDocument.body;return(0,c.offsetXYFromParent)(C||p,u,v.props.scale)}function E(p,P,v){const C=!(0,o.isNum)(p.lastX),T=N(p);return C?{node:T,deltaX:0,deltaY:0,lastX:P,lastY:v,x:P,y:v}:{node:T,deltaX:P-p.lastX,deltaY:v-p.lastY,lastX:p.lastX,lastY:p.lastY,x:P,y:v}}function I(p,P){const v=p.props.scale;return{node:P.node,x:p.state.x+P.deltaX/v,y:p.state.y+P.deltaY/v,deltaX:P.deltaX/v,deltaY:P.deltaY/v,lastX:p.state.x,lastY:p.state.y}}function Y(p){return{left:p.left,top:p.top,right:p.right,bottom:p.bottom}}function N(p){const P=p.findDOMNode();if(!P)throw new Error("<DraggableCore>: Unmounted during event!");return P}},9280:function($,i){Object.defineProperty(i,"__esModule",{value:!0}),i.dontSetMe=w,i.findInArray=r,i.int=O,i.isFunction=o,i.isNum=c;function r(D,d){for(let m=0,E=D.length;m<E;m++)if(d.apply(d,[D[m],m,D]))return D[m]}function o(D){return typeof D=="function"||Object.prototype.toString.call(D)==="[object Function]"}function c(D){return typeof D=="number"&&!isNaN(D)}function O(D){return parseInt(D,10)}function w(D,d,m){if(D[d])return new Error("Invalid prop ".concat(d," passed to ").concat(m," - do not set this, set it on the child."))}}}]);
}());