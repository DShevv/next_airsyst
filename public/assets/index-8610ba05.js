var U0=Object.defineProperty;var V0=(e,t,n)=>t in e?U0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ee=(e,t,n)=>(V0(e,typeof t!="symbol"?t+"":t,n),n);function H0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function W0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var cm={exports:{}},il={},dm={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xo=Symbol.for("react.element"),Q0=Symbol.for("react.portal"),G0=Symbol.for("react.fragment"),q0=Symbol.for("react.strict_mode"),Y0=Symbol.for("react.profiler"),J0=Symbol.for("react.provider"),X0=Symbol.for("react.context"),Z0=Symbol.for("react.forward_ref"),ex=Symbol.for("react.suspense"),tx=Symbol.for("react.memo"),nx=Symbol.for("react.lazy"),Wf=Symbol.iterator;function rx(e){return e===null||typeof e!="object"?null:(e=Wf&&e[Wf]||e["@@iterator"],typeof e=="function"?e:null)}var fm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pm=Object.assign,hm={};function Ti(e,t,n){this.props=e,this.context=t,this.refs=hm,this.updater=n||fm}Ti.prototype.isReactComponent={};Ti.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ti.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mm(){}mm.prototype=Ti.prototype;function dd(e,t,n){this.props=e,this.context=t,this.refs=hm,this.updater=n||fm}var fd=dd.prototype=new mm;fd.constructor=dd;pm(fd,Ti.prototype);fd.isPureReactComponent=!0;var Qf=Array.isArray,gm=Object.prototype.hasOwnProperty,pd={current:null},vm={key:!0,ref:!0,__self:!0,__source:!0};function ym(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)gm.call(t,r)&&!vm.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Xo,type:e,key:o,ref:a,props:i,_owner:pd.current}}function ix(e,t){return{$$typeof:Xo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function hd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xo}function ox(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gf=/\/+/g;function Yl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ox(""+e.key):t.toString(36)}function Wa(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Xo:case Q0:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Yl(a,0):r,Qf(i)?(n="",e!=null&&(n=e.replace(Gf,"$&/")+"/"),Wa(i,t,n,"",function(u){return u})):i!=null&&(hd(i)&&(i=ix(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Gf,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Qf(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+Yl(o,s);a+=Wa(o,t,n,l,i)}else if(l=rx(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+Yl(o,s++),a+=Wa(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function _a(e,t,n){if(e==null)return e;var r=[],i=0;return Wa(e,r,"","",function(o){return t.call(n,o,i++)}),r}function ax(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ze={current:null},Qa={transition:null},sx={ReactCurrentDispatcher:Ze,ReactCurrentBatchConfig:Qa,ReactCurrentOwner:pd};q.Children={map:_a,forEach:function(e,t,n){_a(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _a(e,function(){t++}),t},toArray:function(e){return _a(e,function(t){return t})||[]},only:function(e){if(!hd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=Ti;q.Fragment=G0;q.Profiler=Y0;q.PureComponent=dd;q.StrictMode=q0;q.Suspense=ex;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sx;q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=pm({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=pd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)gm.call(t,l)&&!vm.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Xo,type:e.type,key:i,ref:o,props:r,_owner:a}};q.createContext=function(e){return e={$$typeof:X0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:J0,_context:e},e.Consumer=e};q.createElement=ym;q.createFactory=function(e){var t=ym.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:Z0,render:e}};q.isValidElement=hd;q.lazy=function(e){return{$$typeof:nx,_payload:{_status:-1,_result:e},_init:ax}};q.memo=function(e,t){return{$$typeof:tx,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=Qa.transition;Qa.transition={};try{e()}finally{Qa.transition=t}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(e,t){return Ze.current.useCallback(e,t)};q.useContext=function(e){return Ze.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return Ze.current.useDeferredValue(e)};q.useEffect=function(e,t){return Ze.current.useEffect(e,t)};q.useId=function(){return Ze.current.useId()};q.useImperativeHandle=function(e,t,n){return Ze.current.useImperativeHandle(e,t,n)};q.useInsertionEffect=function(e,t){return Ze.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return Ze.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return Ze.current.useMemo(e,t)};q.useReducer=function(e,t,n){return Ze.current.useReducer(e,t,n)};q.useRef=function(e){return Ze.current.useRef(e)};q.useState=function(e){return Ze.current.useState(e)};q.useSyncExternalStore=function(e,t,n){return Ze.current.useSyncExternalStore(e,t,n)};q.useTransition=function(){return Ze.current.useTransition()};q.version="18.2.0";dm.exports=q;var S=dm.exports;const It=W0(S),lx=H0({__proto__:null,default:It},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ux=S,cx=Symbol.for("react.element"),dx=Symbol.for("react.fragment"),fx=Object.prototype.hasOwnProperty,px=ux.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hx={key:!0,ref:!0,__self:!0,__source:!0};function xm(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)fx.call(t,r)&&!hx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:cx,type:e,key:o,ref:a,props:i,_owner:px.current}}il.Fragment=dx;il.jsx=xm;il.jsxs=xm;cm.exports=il;var c=cm.exports,Wu={},Am={exports:{}},ht={},wm={exports:{}},_m={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,I){var M=T.length;T.push(I);e:for(;0<M;){var ue=M-1>>>1,he=T[ue];if(0<i(he,I))T[ue]=I,T[M]=he,M=ue;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var I=T[0],M=T.pop();if(M!==I){T[0]=M;e:for(var ue=0,he=T.length,Ot=he>>>1;ue<Ot;){var X=2*(ue+1)-1,tt=T[X],Ve=X+1,nt=T[Ve];if(0>i(tt,M))Ve<he&&0>i(nt,tt)?(T[ue]=nt,T[Ve]=M,ue=Ve):(T[ue]=tt,T[X]=M,ue=X);else if(Ve<he&&0>i(nt,M))T[ue]=nt,T[Ve]=M,ue=Ve;else break e}}return I}function i(T,I){var M=T.sortIndex-I.sortIndex;return M!==0?M:T.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],d=1,f=null,h=3,A=!1,y=!1,x=!1,R=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(T){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=T)r(u),I.sortIndex=I.expirationTime,t(l,I);else break;I=n(u)}}function m(T){if(x=!1,v(T),!y)if(n(l)!==null)y=!0,Ie(_);else{var I=n(u);I!==null&&je(m,I.startTime-T)}}function _(T,I){y=!1,x&&(x=!1,g(D),D=-1),A=!0;var M=h;try{for(v(I),f=n(l);f!==null&&(!(f.expirationTime>I)||T&&!Ce());){var ue=f.callback;if(typeof ue=="function"){f.callback=null,h=f.priorityLevel;var he=ue(f.expirationTime<=I);I=e.unstable_now(),typeof he=="function"?f.callback=he:f===n(l)&&r(l),v(I)}else r(l);f=n(l)}if(f!==null)var Ot=!0;else{var X=n(u);X!==null&&je(m,X.startTime-I),Ot=!1}return Ot}finally{f=null,h=M,A=!1}}var j=!1,b=null,D=-1,G=5,K=-1;function Ce(){return!(e.unstable_now()-K<G)}function oe(){if(b!==null){var T=e.unstable_now();K=T;var I=!0;try{I=b(!0,T)}finally{I?vt():(j=!1,b=null)}}else j=!1}var vt;if(typeof p=="function")vt=function(){p(oe)};else if(typeof MessageChannel<"u"){var Wt=new MessageChannel,Qt=Wt.port2;Wt.port1.onmessage=oe,vt=function(){Qt.postMessage(null)}}else vt=function(){R(oe,0)};function Ie(T){b=T,j||(j=!0,vt())}function je(T,I){D=R(function(){T(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||A||(y=!0,Ie(_))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(h){case 1:case 2:case 3:var I=3;break;default:I=h}var M=h;h=I;try{return T()}finally{h=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,I){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var M=h;h=T;try{return I()}finally{h=M}},e.unstable_scheduleCallback=function(T,I,M){var ue=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?ue+M:ue):M=ue,T){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=M+he,T={id:d++,callback:I,priorityLevel:T,startTime:M,expirationTime:he,sortIndex:-1},M>ue?(T.sortIndex=M,t(u,T),n(l)===null&&T===n(u)&&(x?(g(D),D=-1):x=!0,je(m,M-ue))):(T.sortIndex=he,t(l,T),y||A||(y=!0,Ie(_))),T},e.unstable_shouldYield=Ce,e.unstable_wrapCallback=function(T){var I=h;return function(){var M=h;h=I;try{return T.apply(this,arguments)}finally{h=M}}}})(_m);wm.exports=_m;var mx=wm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm=S,pt=mx;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cm=new Set,ko={};function Rr(e,t){fi(e,t),fi(e+"Capture",t)}function fi(e,t){for(ko[e]=t,e=0;e<t.length;e++)Cm.add(t[e])}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qu=Object.prototype.hasOwnProperty,gx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qf={},Yf={};function vx(e){return Qu.call(Yf,e)?!0:Qu.call(qf,e)?!1:gx.test(e)?Yf[e]=!0:(qf[e]=!0,!1)}function yx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xx(e,t,n,r){if(t===null||typeof t>"u"||yx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function et(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ue[e]=new et(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ue[t]=new et(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ue[e]=new et(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ue[e]=new et(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ue[e]=new et(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ue[e]=new et(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ue[e]=new et(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ue[e]=new et(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ue[e]=new et(e,5,!1,e.toLowerCase(),null,!1,!1)});var md=/[\-:]([a-z])/g;function gd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(md,gd);Ue[t]=new et(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(md,gd);Ue[t]=new et(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(md,gd);Ue[t]=new et(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ue[e]=new et(e,1,!1,e.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ue[e]=new et(e,1,!1,e.toLowerCase(),null,!0,!0)});function vd(e,t,n,r){var i=Ue.hasOwnProperty(t)?Ue[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(xx(t,n,i,r)&&(n=null),r||i===null?vx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var bn=Sm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sa=Symbol.for("react.element"),Br=Symbol.for("react.portal"),Kr=Symbol.for("react.fragment"),yd=Symbol.for("react.strict_mode"),Gu=Symbol.for("react.profiler"),Em=Symbol.for("react.provider"),bm=Symbol.for("react.context"),xd=Symbol.for("react.forward_ref"),qu=Symbol.for("react.suspense"),Yu=Symbol.for("react.suspense_list"),Ad=Symbol.for("react.memo"),Ln=Symbol.for("react.lazy"),km=Symbol.for("react.offscreen"),Jf=Symbol.iterator;function qi(e){return e===null||typeof e!="object"?null:(e=Jf&&e[Jf]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Object.assign,Jl;function lo(e){if(Jl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Jl=t&&t[1]||""}return`
`+Jl+e}var Xl=!1;function Zl(e,t){if(!e||Xl)return"";Xl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Xl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?lo(e):""}function Ax(e){switch(e.tag){case 5:return lo(e.type);case 16:return lo("Lazy");case 13:return lo("Suspense");case 19:return lo("SuspenseList");case 0:case 2:case 15:return e=Zl(e.type,!1),e;case 11:return e=Zl(e.type.render,!1),e;case 1:return e=Zl(e.type,!0),e;default:return""}}function Ju(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kr:return"Fragment";case Br:return"Portal";case Gu:return"Profiler";case yd:return"StrictMode";case qu:return"Suspense";case Yu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bm:return(e.displayName||"Context")+".Consumer";case Em:return(e._context.displayName||"Context")+".Provider";case xd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ad:return t=e.displayName||null,t!==null?t:Ju(e.type)||"Memo";case Ln:t=e._payload,e=e._init;try{return Ju(e(t))}catch{}}return null}function wx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ju(t);case 8:return t===yd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Jn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _x(e){var t=Rm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ca(e){e._valueTracker||(e._valueTracker=_x(e))}function jm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Rm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function vs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xu(e,t){var n=t.checked;return xe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Xf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Jn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Om(e,t){t=t.checked,t!=null&&vd(e,"checked",t,!1)}function Zu(e,t){Om(e,t);var n=Jn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ec(e,t.type,n):t.hasOwnProperty("defaultValue")&&ec(e,t.type,Jn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Zf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ec(e,t,n){(t!=="number"||vs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var uo=Array.isArray;function ii(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Jn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function tc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return xe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ep(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(uo(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Jn(n)}}function Pm(e,t){var n=Jn(t.value),r=Jn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function tp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Nm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Nm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ea,Tm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ea=Ea||document.createElement("div"),Ea.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ea.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ro(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sx=["Webkit","ms","Moz","O"];Object.keys(ho).forEach(function(e){Sx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ho[t]=ho[e]})});function Dm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ho.hasOwnProperty(e)&&ho[e]?(""+t).trim():t+"px"}function Lm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Dm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Cx=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rc(e,t){if(t){if(Cx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function ic(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oc=null;function wd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ac=null,oi=null,ai=null;function np(e){if(e=ta(e)){if(typeof ac!="function")throw Error(P(280));var t=e.stateNode;t&&(t=ul(t),ac(e.stateNode,e.type,t))}}function Fm(e){oi?ai?ai.push(e):ai=[e]:oi=e}function zm(){if(oi){var e=oi,t=ai;if(ai=oi=null,np(e),t)for(e=0;e<t.length;e++)np(t[e])}}function Im(e,t){return e(t)}function Mm(){}var eu=!1;function Bm(e,t,n){if(eu)return e(t,n);eu=!0;try{return Im(e,t,n)}finally{eu=!1,(oi!==null||ai!==null)&&(Mm(),zm())}}function jo(e,t){var n=e.stateNode;if(n===null)return null;var r=ul(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var sc=!1;if(wn)try{var Yi={};Object.defineProperty(Yi,"passive",{get:function(){sc=!0}}),window.addEventListener("test",Yi,Yi),window.removeEventListener("test",Yi,Yi)}catch{sc=!1}function Ex(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var mo=!1,ys=null,xs=!1,lc=null,bx={onError:function(e){mo=!0,ys=e}};function kx(e,t,n,r,i,o,a,s,l){mo=!1,ys=null,Ex.apply(bx,arguments)}function Rx(e,t,n,r,i,o,a,s,l){if(kx.apply(this,arguments),mo){if(mo){var u=ys;mo=!1,ys=null}else throw Error(P(198));xs||(xs=!0,lc=u)}}function jr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Km(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function rp(e){if(jr(e)!==e)throw Error(P(188))}function jx(e){var t=e.alternate;if(!t){if(t=jr(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return rp(i),e;if(o===r)return rp(i),t;o=o.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function $m(e){return e=jx(e),e!==null?Um(e):null}function Um(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Um(e);if(t!==null)return t;e=e.sibling}return null}var Vm=pt.unstable_scheduleCallback,ip=pt.unstable_cancelCallback,Ox=pt.unstable_shouldYield,Px=pt.unstable_requestPaint,Se=pt.unstable_now,Nx=pt.unstable_getCurrentPriorityLevel,_d=pt.unstable_ImmediatePriority,Hm=pt.unstable_UserBlockingPriority,As=pt.unstable_NormalPriority,Tx=pt.unstable_LowPriority,Wm=pt.unstable_IdlePriority,ol=null,en=null;function Dx(e){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(ol,e,void 0,(e.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:zx,Lx=Math.log,Fx=Math.LN2;function zx(e){return e>>>=0,e===0?32:31-(Lx(e)/Fx|0)|0}var ba=64,ka=4194304;function co(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ws(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=co(s):(o&=a,o!==0&&(r=co(o)))}else a=n&~i,a!==0?r=co(a):o!==0&&(r=co(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Mt(t),i=1<<n,r|=e[n],t&=~i;return r}function Ix(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mx(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Mt(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=Ix(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function uc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qm(){var e=ba;return ba<<=1,!(ba&4194240)&&(ba=64),e}function tu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Mt(t),e[t]=n}function Bx(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Mt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Sd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Mt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ie=0;function Gm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qm,Cd,Ym,Jm,Xm,cc=!1,Ra=[],$n=null,Un=null,Vn=null,Oo=new Map,Po=new Map,zn=[],Kx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function op(e,t){switch(e){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":Un=null;break;case"mouseover":case"mouseout":Vn=null;break;case"pointerover":case"pointerout":Oo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(t.pointerId)}}function Ji(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ta(t),t!==null&&Cd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function $x(e,t,n,r,i){switch(t){case"focusin":return $n=Ji($n,e,t,n,r,i),!0;case"dragenter":return Un=Ji(Un,e,t,n,r,i),!0;case"mouseover":return Vn=Ji(Vn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Oo.set(o,Ji(Oo.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Po.set(o,Ji(Po.get(o)||null,e,t,n,r,i)),!0}return!1}function Zm(e){var t=ur(e.target);if(t!==null){var n=jr(t);if(n!==null){if(t=n.tag,t===13){if(t=Km(n),t!==null){e.blockedOn=t,Xm(e.priority,function(){Ym(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ga(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);oc=r,n.target.dispatchEvent(r),oc=null}else return t=ta(n),t!==null&&Cd(t),e.blockedOn=n,!1;t.shift()}return!0}function ap(e,t,n){Ga(e)&&n.delete(t)}function Ux(){cc=!1,$n!==null&&Ga($n)&&($n=null),Un!==null&&Ga(Un)&&(Un=null),Vn!==null&&Ga(Vn)&&(Vn=null),Oo.forEach(ap),Po.forEach(ap)}function Xi(e,t){e.blockedOn===t&&(e.blockedOn=null,cc||(cc=!0,pt.unstable_scheduleCallback(pt.unstable_NormalPriority,Ux)))}function No(e){function t(i){return Xi(i,e)}if(0<Ra.length){Xi(Ra[0],e);for(var n=1;n<Ra.length;n++){var r=Ra[n];r.blockedOn===e&&(r.blockedOn=null)}}for($n!==null&&Xi($n,e),Un!==null&&Xi(Un,e),Vn!==null&&Xi(Vn,e),Oo.forEach(t),Po.forEach(t),n=0;n<zn.length;n++)r=zn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<zn.length&&(n=zn[0],n.blockedOn===null);)Zm(n),n.blockedOn===null&&zn.shift()}var si=bn.ReactCurrentBatchConfig,_s=!0;function Vx(e,t,n,r){var i=ie,o=si.transition;si.transition=null;try{ie=1,Ed(e,t,n,r)}finally{ie=i,si.transition=o}}function Hx(e,t,n,r){var i=ie,o=si.transition;si.transition=null;try{ie=4,Ed(e,t,n,r)}finally{ie=i,si.transition=o}}function Ed(e,t,n,r){if(_s){var i=dc(e,t,n,r);if(i===null)du(e,t,r,Ss,n),op(e,r);else if($x(i,e,t,n,r))r.stopPropagation();else if(op(e,r),t&4&&-1<Kx.indexOf(e)){for(;i!==null;){var o=ta(i);if(o!==null&&qm(o),o=dc(e,t,n,r),o===null&&du(e,t,r,Ss,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else du(e,t,r,null,n)}}var Ss=null;function dc(e,t,n,r){if(Ss=null,e=wd(r),e=ur(e),e!==null)if(t=jr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Km(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ss=e,null}function eg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nx()){case _d:return 1;case Hm:return 4;case As:case Tx:return 16;case Wm:return 536870912;default:return 16}default:return 16}}var Mn=null,bd=null,qa=null;function tg(){if(qa)return qa;var e,t=bd,n=t.length,r,i="value"in Mn?Mn.value:Mn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return qa=i.slice(e,1<r?1-r:void 0)}function Ya(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ja(){return!0}function sp(){return!1}function mt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ja:sp,this.isPropagationStopped=sp,this}return xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ja)},persist:function(){},isPersistent:ja}),t}var Di={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kd=mt(Di),ea=xe({},Di,{view:0,detail:0}),Wx=mt(ea),nu,ru,Zi,al=xe({},ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zi&&(Zi&&e.type==="mousemove"?(nu=e.screenX-Zi.screenX,ru=e.screenY-Zi.screenY):ru=nu=0,Zi=e),nu)},movementY:function(e){return"movementY"in e?e.movementY:ru}}),lp=mt(al),Qx=xe({},al,{dataTransfer:0}),Gx=mt(Qx),qx=xe({},ea,{relatedTarget:0}),iu=mt(qx),Yx=xe({},Di,{animationName:0,elapsedTime:0,pseudoElement:0}),Jx=mt(Yx),Xx=xe({},Di,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zx=mt(Xx),e1=xe({},Di,{data:0}),up=mt(e1),t1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},r1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=r1[e])?!!t[e]:!1}function Rd(){return i1}var o1=xe({},ea,{key:function(e){if(e.key){var t=t1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ya(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?n1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rd,charCode:function(e){return e.type==="keypress"?Ya(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ya(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),a1=mt(o1),s1=xe({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cp=mt(s1),l1=xe({},ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rd}),u1=mt(l1),c1=xe({},Di,{propertyName:0,elapsedTime:0,pseudoElement:0}),d1=mt(c1),f1=xe({},al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),p1=mt(f1),h1=[9,13,27,32],jd=wn&&"CompositionEvent"in window,go=null;wn&&"documentMode"in document&&(go=document.documentMode);var m1=wn&&"TextEvent"in window&&!go,ng=wn&&(!jd||go&&8<go&&11>=go),dp=String.fromCharCode(32),fp=!1;function rg(e,t){switch(e){case"keyup":return h1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ig(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $r=!1;function g1(e,t){switch(e){case"compositionend":return ig(t);case"keypress":return t.which!==32?null:(fp=!0,dp);case"textInput":return e=t.data,e===dp&&fp?null:e;default:return null}}function v1(e,t){if($r)return e==="compositionend"||!jd&&rg(e,t)?(e=tg(),qa=bd=Mn=null,$r=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ng&&t.locale!=="ko"?null:t.data;default:return null}}var y1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!y1[e.type]:t==="textarea"}function og(e,t,n,r){Fm(r),t=Cs(t,"onChange"),0<t.length&&(n=new kd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vo=null,To=null;function x1(e){gg(e,0)}function sl(e){var t=Hr(e);if(jm(t))return e}function A1(e,t){if(e==="change")return t}var ag=!1;if(wn){var ou;if(wn){var au="oninput"in document;if(!au){var hp=document.createElement("div");hp.setAttribute("oninput","return;"),au=typeof hp.oninput=="function"}ou=au}else ou=!1;ag=ou&&(!document.documentMode||9<document.documentMode)}function mp(){vo&&(vo.detachEvent("onpropertychange",sg),To=vo=null)}function sg(e){if(e.propertyName==="value"&&sl(To)){var t=[];og(t,To,e,wd(e)),Bm(x1,t)}}function w1(e,t,n){e==="focusin"?(mp(),vo=t,To=n,vo.attachEvent("onpropertychange",sg)):e==="focusout"&&mp()}function _1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sl(To)}function S1(e,t){if(e==="click")return sl(t)}function C1(e,t){if(e==="input"||e==="change")return sl(t)}function E1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Vt=typeof Object.is=="function"?Object.is:E1;function Do(e,t){if(Vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Qu.call(t,i)||!Vt(e[i],t[i]))return!1}return!0}function gp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vp(e,t){var n=gp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gp(n)}}function lg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ug(){for(var e=window,t=vs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=vs(e.document)}return t}function Od(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function b1(e){var t=ug(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&lg(n.ownerDocument.documentElement,n)){if(r!==null&&Od(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=vp(n,o);var a=vp(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var k1=wn&&"documentMode"in document&&11>=document.documentMode,Ur=null,fc=null,yo=null,pc=!1;function yp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pc||Ur==null||Ur!==vs(r)||(r=Ur,"selectionStart"in r&&Od(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yo&&Do(yo,r)||(yo=r,r=Cs(fc,"onSelect"),0<r.length&&(t=new kd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ur)))}function Oa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vr={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionend:Oa("Transition","TransitionEnd")},su={},cg={};wn&&(cg=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function ll(e){if(su[e])return su[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in cg)return su[e]=t[n];return e}var dg=ll("animationend"),fg=ll("animationiteration"),pg=ll("animationstart"),hg=ll("transitionend"),mg=new Map,xp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zn(e,t){mg.set(e,t),Rr(t,[e])}for(var lu=0;lu<xp.length;lu++){var uu=xp[lu],R1=uu.toLowerCase(),j1=uu[0].toUpperCase()+uu.slice(1);Zn(R1,"on"+j1)}Zn(dg,"onAnimationEnd");Zn(fg,"onAnimationIteration");Zn(pg,"onAnimationStart");Zn("dblclick","onDoubleClick");Zn("focusin","onFocus");Zn("focusout","onBlur");Zn(hg,"onTransitionEnd");fi("onMouseEnter",["mouseout","mouseover"]);fi("onMouseLeave",["mouseout","mouseover"]);fi("onPointerEnter",["pointerout","pointerover"]);fi("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O1=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function Ap(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Rx(r,t,void 0,e),e.currentTarget=null}function gg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Ap(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Ap(i,s,u),o=l}}}if(xs)throw e=lc,xs=!1,lc=null,e}function de(e,t){var n=t[yc];n===void 0&&(n=t[yc]=new Set);var r=e+"__bubble";n.has(r)||(vg(t,e,2,!1),n.add(r))}function cu(e,t,n){var r=0;t&&(r|=4),vg(n,e,r,t)}var Pa="_reactListening"+Math.random().toString(36).slice(2);function Lo(e){if(!e[Pa]){e[Pa]=!0,Cm.forEach(function(n){n!=="selectionchange"&&(O1.has(n)||cu(n,!1,e),cu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pa]||(t[Pa]=!0,cu("selectionchange",!1,t))}}function vg(e,t,n,r){switch(eg(t)){case 1:var i=Vx;break;case 4:i=Hx;break;default:i=Ed}n=i.bind(null,t,n,e),i=void 0,!sc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function du(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=ur(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Bm(function(){var u=o,d=wd(n),f=[];e:{var h=mg.get(e);if(h!==void 0){var A=kd,y=e;switch(e){case"keypress":if(Ya(n)===0)break e;case"keydown":case"keyup":A=a1;break;case"focusin":y="focus",A=iu;break;case"focusout":y="blur",A=iu;break;case"beforeblur":case"afterblur":A=iu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=Gx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=u1;break;case dg:case fg:case pg:A=Jx;break;case hg:A=d1;break;case"scroll":A=Wx;break;case"wheel":A=p1;break;case"copy":case"cut":case"paste":A=Zx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=cp}var x=(t&4)!==0,R=!x&&e==="scroll",g=x?h!==null?h+"Capture":null:h;x=[];for(var p=u,v;p!==null;){v=p;var m=v.stateNode;if(v.tag===5&&m!==null&&(v=m,g!==null&&(m=jo(p,g),m!=null&&x.push(Fo(p,m,v)))),R)break;p=p.return}0<x.length&&(h=new A(h,y,null,n,d),f.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",h&&n!==oc&&(y=n.relatedTarget||n.fromElement)&&(ur(y)||y[_n]))break e;if((A||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,A?(y=n.relatedTarget||n.toElement,A=u,y=y?ur(y):null,y!==null&&(R=jr(y),y!==R||y.tag!==5&&y.tag!==6)&&(y=null)):(A=null,y=u),A!==y)){if(x=lp,m="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=cp,m="onPointerLeave",g="onPointerEnter",p="pointer"),R=A==null?h:Hr(A),v=y==null?h:Hr(y),h=new x(m,p+"leave",A,n,d),h.target=R,h.relatedTarget=v,m=null,ur(d)===u&&(x=new x(g,p+"enter",y,n,d),x.target=v,x.relatedTarget=R,m=x),R=m,A&&y)t:{for(x=A,g=y,p=0,v=x;v;v=Lr(v))p++;for(v=0,m=g;m;m=Lr(m))v++;for(;0<p-v;)x=Lr(x),p--;for(;0<v-p;)g=Lr(g),v--;for(;p--;){if(x===g||g!==null&&x===g.alternate)break t;x=Lr(x),g=Lr(g)}x=null}else x=null;A!==null&&wp(f,h,A,x,!1),y!==null&&R!==null&&wp(f,R,y,x,!0)}}e:{if(h=u?Hr(u):window,A=h.nodeName&&h.nodeName.toLowerCase(),A==="select"||A==="input"&&h.type==="file")var _=A1;else if(pp(h))if(ag)_=C1;else{_=_1;var j=w1}else(A=h.nodeName)&&A.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=S1);if(_&&(_=_(e,u))){og(f,_,n,d);break e}j&&j(e,h,u),e==="focusout"&&(j=h._wrapperState)&&j.controlled&&h.type==="number"&&ec(h,"number",h.value)}switch(j=u?Hr(u):window,e){case"focusin":(pp(j)||j.contentEditable==="true")&&(Ur=j,fc=u,yo=null);break;case"focusout":yo=fc=Ur=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,yp(f,n,d);break;case"selectionchange":if(k1)break;case"keydown":case"keyup":yp(f,n,d)}var b;if(jd)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else $r?rg(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(ng&&n.locale!=="ko"&&($r||D!=="onCompositionStart"?D==="onCompositionEnd"&&$r&&(b=tg()):(Mn=d,bd="value"in Mn?Mn.value:Mn.textContent,$r=!0)),j=Cs(u,D),0<j.length&&(D=new up(D,e,null,n,d),f.push({event:D,listeners:j}),b?D.data=b:(b=ig(n),b!==null&&(D.data=b)))),(b=m1?g1(e,n):v1(e,n))&&(u=Cs(u,"onBeforeInput"),0<u.length&&(d=new up("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=b))}gg(f,t)})}function Fo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Cs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=jo(e,n),o!=null&&r.unshift(Fo(e,o,i)),o=jo(e,t),o!=null&&r.push(Fo(e,o,i))),e=e.return}return r}function Lr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wp(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=jo(n,o),l!=null&&a.unshift(Fo(n,l,s))):i||(l=jo(n,o),l!=null&&a.push(Fo(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var P1=/\r\n?/g,N1=/\u0000|\uFFFD/g;function _p(e){return(typeof e=="string"?e:""+e).replace(P1,`
`).replace(N1,"")}function Na(e,t,n){if(t=_p(t),_p(e)!==t&&n)throw Error(P(425))}function Es(){}var hc=null,mc=null;function gc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vc=typeof setTimeout=="function"?setTimeout:void 0,T1=typeof clearTimeout=="function"?clearTimeout:void 0,Sp=typeof Promise=="function"?Promise:void 0,D1=typeof queueMicrotask=="function"?queueMicrotask:typeof Sp<"u"?function(e){return Sp.resolve(null).then(e).catch(L1)}:vc;function L1(e){setTimeout(function(){throw e})}function fu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),No(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);No(t)}function Hn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Cp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Li=Math.random().toString(36).slice(2),Xt="__reactFiber$"+Li,zo="__reactProps$"+Li,_n="__reactContainer$"+Li,yc="__reactEvents$"+Li,F1="__reactListeners$"+Li,z1="__reactHandles$"+Li;function ur(e){var t=e[Xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_n]||n[Xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cp(e);e!==null;){if(n=e[Xt])return n;e=Cp(e)}return t}e=n,n=e.parentNode}return null}function ta(e){return e=e[Xt]||e[_n],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Hr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function ul(e){return e[zo]||null}var xc=[],Wr=-1;function er(e){return{current:e}}function pe(e){0>Wr||(e.current=xc[Wr],xc[Wr]=null,Wr--)}function ce(e,t){Wr++,xc[Wr]=e.current,e.current=t}var Xn={},Ye=er(Xn),st=er(!1),yr=Xn;function pi(e,t){var n=e.type.contextTypes;if(!n)return Xn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function lt(e){return e=e.childContextTypes,e!=null}function bs(){pe(st),pe(Ye)}function Ep(e,t,n){if(Ye.current!==Xn)throw Error(P(168));ce(Ye,t),ce(st,n)}function yg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,wx(e)||"Unknown",i));return xe({},n,r)}function ks(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xn,yr=Ye.current,ce(Ye,e),ce(st,st.current),!0}function bp(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=yg(e,t,yr),r.__reactInternalMemoizedMergedChildContext=e,pe(st),pe(Ye),ce(Ye,e)):pe(st),ce(st,n)}var pn=null,cl=!1,pu=!1;function xg(e){pn===null?pn=[e]:pn.push(e)}function I1(e){cl=!0,xg(e)}function tr(){if(!pu&&pn!==null){pu=!0;var e=0,t=ie;try{var n=pn;for(ie=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}pn=null,cl=!1}catch(i){throw pn!==null&&(pn=pn.slice(e+1)),Vm(_d,tr),i}finally{ie=t,pu=!1}}return null}var Qr=[],Gr=0,Rs=null,js=0,At=[],wt=0,xr=null,mn=1,gn="";function ar(e,t){Qr[Gr++]=js,Qr[Gr++]=Rs,Rs=e,js=t}function Ag(e,t,n){At[wt++]=mn,At[wt++]=gn,At[wt++]=xr,xr=e;var r=mn;e=gn;var i=32-Mt(r)-1;r&=~(1<<i),n+=1;var o=32-Mt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,mn=1<<32-Mt(t)+i|n<<i|r,gn=o+e}else mn=1<<o|n<<i|r,gn=e}function Pd(e){e.return!==null&&(ar(e,1),Ag(e,1,0))}function Nd(e){for(;e===Rs;)Rs=Qr[--Gr],Qr[Gr]=null,js=Qr[--Gr],Qr[Gr]=null;for(;e===xr;)xr=At[--wt],At[wt]=null,gn=At[--wt],At[wt]=null,mn=At[--wt],At[wt]=null}var ft=null,dt=null,ge=!1,Ft=null;function wg(e,t){var n=Ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function kp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ft=e,dt=Hn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ft=e,dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xr!==null?{id:mn,overflow:gn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ft=e,dt=null,!0):!1;default:return!1}}function Ac(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wc(e){if(ge){var t=dt;if(t){var n=t;if(!kp(e,t)){if(Ac(e))throw Error(P(418));t=Hn(n.nextSibling);var r=ft;t&&kp(e,t)?wg(r,n):(e.flags=e.flags&-4097|2,ge=!1,ft=e)}}else{if(Ac(e))throw Error(P(418));e.flags=e.flags&-4097|2,ge=!1,ft=e}}}function Rp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ft=e}function Ta(e){if(e!==ft)return!1;if(!ge)return Rp(e),ge=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gc(e.type,e.memoizedProps)),t&&(t=dt)){if(Ac(e))throw _g(),Error(P(418));for(;t;)wg(e,t),t=Hn(t.nextSibling)}if(Rp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){dt=Hn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}dt=null}}else dt=ft?Hn(e.stateNode.nextSibling):null;return!0}function _g(){for(var e=dt;e;)e=Hn(e.nextSibling)}function hi(){dt=ft=null,ge=!1}function Td(e){Ft===null?Ft=[e]:Ft.push(e)}var M1=bn.ReactCurrentBatchConfig;function Tt(e,t){if(e&&e.defaultProps){t=xe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Os=er(null),Ps=null,qr=null,Dd=null;function Ld(){Dd=qr=Ps=null}function Fd(e){var t=Os.current;pe(Os),e._currentValue=t}function _c(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function li(e,t){Ps=e,Dd=qr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(it=!0),e.firstContext=null)}function kt(e){var t=e._currentValue;if(Dd!==e)if(e={context:e,memoizedValue:t,next:null},qr===null){if(Ps===null)throw Error(P(308));qr=e,Ps.dependencies={lanes:0,firstContext:e}}else qr=qr.next=e;return t}var cr=null;function zd(e){cr===null?cr=[e]:cr.push(e)}function Sg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,zd(t)):(n.next=i.next,i.next=n),t.interleaved=n,Sn(e,r)}function Sn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Fn=!1;function Id(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Sn(e,n)}return i=r.interleaved,i===null?(t.next=t,zd(r)):(t.next=i.next,i.next=t),r.interleaved=t,Sn(e,n)}function Ja(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sd(e,n)}}function jp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ns(e,t,n,r){var i=e.updateQueue;Fn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==a&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;a=0,d=u=l=null,s=o;do{var h=s.lane,A=s.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:A,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,x=s;switch(h=t,A=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){f=y.call(A,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,h=typeof y=="function"?y.call(A,f,h):y,h==null)break e;f=xe({},f,h);break e;case 2:Fn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else A={eventTime:A,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=A,l=f):d=d.next=A,a|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);wr|=a,e.lanes=a,e.memoizedState=f}}function Op(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var Eg=new Sm.Component().refs;function Sc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:xe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dl={isMounted:function(e){return(e=e._reactInternals)?jr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Xe(),i=Gn(e),o=vn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Wn(e,o,i),t!==null&&(Bt(t,e,i,r),Ja(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Xe(),i=Gn(e),o=vn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Wn(e,o,i),t!==null&&(Bt(t,e,i,r),Ja(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Xe(),r=Gn(e),i=vn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Wn(e,i,r),t!==null&&(Bt(t,e,r,n),Ja(t,e,r))}};function Pp(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Do(n,r)||!Do(i,o):!0}function bg(e,t,n){var r=!1,i=Xn,o=t.contextType;return typeof o=="object"&&o!==null?o=kt(o):(i=lt(t)?yr:Ye.current,r=t.contextTypes,o=(r=r!=null)?pi(e,i):Xn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=dl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Np(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&dl.enqueueReplaceState(t,t.state,null)}function Cc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Eg,Id(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=kt(o):(o=lt(t)?yr:Ye.current,i.context=pi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Sc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&dl.enqueueReplaceState(i,i.state,null),Ns(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function eo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===Eg&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Da(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Tp(e){var t=e._init;return t(e._payload)}function kg(e){function t(g,p){if(e){var v=g.deletions;v===null?(g.deletions=[p],g.flags|=16):v.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=qn(g,p),g.index=0,g.sibling=null,g}function o(g,p,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<p?(g.flags|=2,p):v):(g.flags|=2,p)):(g.flags|=1048576,p)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,p,v,m){return p===null||p.tag!==6?(p=Au(v,g.mode,m),p.return=g,p):(p=i(p,v),p.return=g,p)}function l(g,p,v,m){var _=v.type;return _===Kr?d(g,p,v.props.children,m,v.key):p!==null&&(p.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ln&&Tp(_)===p.type)?(m=i(p,v.props),m.ref=eo(g,p,v),m.return=g,m):(m=rs(v.type,v.key,v.props,null,g.mode,m),m.ref=eo(g,p,v),m.return=g,m)}function u(g,p,v,m){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=wu(v,g.mode,m),p.return=g,p):(p=i(p,v.children||[]),p.return=g,p)}function d(g,p,v,m,_){return p===null||p.tag!==7?(p=mr(v,g.mode,m,_),p.return=g,p):(p=i(p,v),p.return=g,p)}function f(g,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Au(""+p,g.mode,v),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Sa:return v=rs(p.type,p.key,p.props,null,g.mode,v),v.ref=eo(g,null,p),v.return=g,v;case Br:return p=wu(p,g.mode,v),p.return=g,p;case Ln:var m=p._init;return f(g,m(p._payload),v)}if(uo(p)||qi(p))return p=mr(p,g.mode,v,null),p.return=g,p;Da(g,p)}return null}function h(g,p,v,m){var _=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return _!==null?null:s(g,p,""+v,m);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Sa:return v.key===_?l(g,p,v,m):null;case Br:return v.key===_?u(g,p,v,m):null;case Ln:return _=v._init,h(g,p,_(v._payload),m)}if(uo(v)||qi(v))return _!==null?null:d(g,p,v,m,null);Da(g,v)}return null}function A(g,p,v,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return g=g.get(v)||null,s(p,g,""+m,_);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Sa:return g=g.get(m.key===null?v:m.key)||null,l(p,g,m,_);case Br:return g=g.get(m.key===null?v:m.key)||null,u(p,g,m,_);case Ln:var j=m._init;return A(g,p,v,j(m._payload),_)}if(uo(m)||qi(m))return g=g.get(v)||null,d(p,g,m,_,null);Da(p,m)}return null}function y(g,p,v,m){for(var _=null,j=null,b=p,D=p=0,G=null;b!==null&&D<v.length;D++){b.index>D?(G=b,b=null):G=b.sibling;var K=h(g,b,v[D],m);if(K===null){b===null&&(b=G);break}e&&b&&K.alternate===null&&t(g,b),p=o(K,p,D),j===null?_=K:j.sibling=K,j=K,b=G}if(D===v.length)return n(g,b),ge&&ar(g,D),_;if(b===null){for(;D<v.length;D++)b=f(g,v[D],m),b!==null&&(p=o(b,p,D),j===null?_=b:j.sibling=b,j=b);return ge&&ar(g,D),_}for(b=r(g,b);D<v.length;D++)G=A(b,g,D,v[D],m),G!==null&&(e&&G.alternate!==null&&b.delete(G.key===null?D:G.key),p=o(G,p,D),j===null?_=G:j.sibling=G,j=G);return e&&b.forEach(function(Ce){return t(g,Ce)}),ge&&ar(g,D),_}function x(g,p,v,m){var _=qi(v);if(typeof _!="function")throw Error(P(150));if(v=_.call(v),v==null)throw Error(P(151));for(var j=_=null,b=p,D=p=0,G=null,K=v.next();b!==null&&!K.done;D++,K=v.next()){b.index>D?(G=b,b=null):G=b.sibling;var Ce=h(g,b,K.value,m);if(Ce===null){b===null&&(b=G);break}e&&b&&Ce.alternate===null&&t(g,b),p=o(Ce,p,D),j===null?_=Ce:j.sibling=Ce,j=Ce,b=G}if(K.done)return n(g,b),ge&&ar(g,D),_;if(b===null){for(;!K.done;D++,K=v.next())K=f(g,K.value,m),K!==null&&(p=o(K,p,D),j===null?_=K:j.sibling=K,j=K);return ge&&ar(g,D),_}for(b=r(g,b);!K.done;D++,K=v.next())K=A(b,g,D,K.value,m),K!==null&&(e&&K.alternate!==null&&b.delete(K.key===null?D:K.key),p=o(K,p,D),j===null?_=K:j.sibling=K,j=K);return e&&b.forEach(function(oe){return t(g,oe)}),ge&&ar(g,D),_}function R(g,p,v,m){if(typeof v=="object"&&v!==null&&v.type===Kr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Sa:e:{for(var _=v.key,j=p;j!==null;){if(j.key===_){if(_=v.type,_===Kr){if(j.tag===7){n(g,j.sibling),p=i(j,v.props.children),p.return=g,g=p;break e}}else if(j.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ln&&Tp(_)===j.type){n(g,j.sibling),p=i(j,v.props),p.ref=eo(g,j,v),p.return=g,g=p;break e}n(g,j);break}else t(g,j);j=j.sibling}v.type===Kr?(p=mr(v.props.children,g.mode,m,v.key),p.return=g,g=p):(m=rs(v.type,v.key,v.props,null,g.mode,m),m.ref=eo(g,p,v),m.return=g,g=m)}return a(g);case Br:e:{for(j=v.key;p!==null;){if(p.key===j)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(g,p.sibling),p=i(p,v.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else t(g,p);p=p.sibling}p=wu(v,g.mode,m),p.return=g,g=p}return a(g);case Ln:return j=v._init,R(g,p,j(v._payload),m)}if(uo(v))return y(g,p,v,m);if(qi(v))return x(g,p,v,m);Da(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,v),p.return=g,g=p):(n(g,p),p=Au(v,g.mode,m),p.return=g,g=p),a(g)):n(g,p)}return R}var mi=kg(!0),Rg=kg(!1),na={},tn=er(na),Io=er(na),Mo=er(na);function dr(e){if(e===na)throw Error(P(174));return e}function Md(e,t){switch(ce(Mo,t),ce(Io,e),ce(tn,na),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:nc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=nc(t,e)}pe(tn),ce(tn,t)}function gi(){pe(tn),pe(Io),pe(Mo)}function jg(e){dr(Mo.current);var t=dr(tn.current),n=nc(t,e.type);t!==n&&(ce(Io,e),ce(tn,n))}function Bd(e){Io.current===e&&(pe(tn),pe(Io))}var ve=er(0);function Ts(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hu=[];function Kd(){for(var e=0;e<hu.length;e++)hu[e]._workInProgressVersionPrimary=null;hu.length=0}var Xa=bn.ReactCurrentDispatcher,mu=bn.ReactCurrentBatchConfig,Ar=0,ye=null,Pe=null,Le=null,Ds=!1,xo=!1,Bo=0,B1=0;function He(){throw Error(P(321))}function $d(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Vt(e[n],t[n]))return!1;return!0}function Ud(e,t,n,r,i,o){if(Ar=o,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xa.current=e===null||e.memoizedState===null?V1:H1,e=n(r,i),xo){o=0;do{if(xo=!1,Bo=0,25<=o)throw Error(P(301));o+=1,Le=Pe=null,t.updateQueue=null,Xa.current=W1,e=n(r,i)}while(xo)}if(Xa.current=Ls,t=Pe!==null&&Pe.next!==null,Ar=0,Le=Pe=ye=null,Ds=!1,t)throw Error(P(300));return e}function Vd(){var e=Bo!==0;return Bo=0,e}function Yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ye.memoizedState=Le=e:Le=Le.next=e,Le}function Rt(){if(Pe===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=Le===null?ye.memoizedState:Le.next;if(t!==null)Le=t,Pe=e;else{if(e===null)throw Error(P(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Le===null?ye.memoizedState=Le=e:Le=Le.next=e}return Le}function Ko(e,t){return typeof t=="function"?t(e):t}function gu(e){var t=Rt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=Pe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var d=u.lane;if((Ar&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,a=r):l=l.next=f,ye.lanes|=d,wr|=d}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,Vt(r,t.memoizedState)||(it=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ye.lanes|=o,wr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vu(e){var t=Rt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Vt(o,t.memoizedState)||(it=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Og(){}function Pg(e,t){var n=ye,r=Rt(),i=t(),o=!Vt(r.memoizedState,i);if(o&&(r.memoizedState=i,it=!0),r=r.queue,Hd(Dg.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,$o(9,Tg.bind(null,n,r,i,t),void 0,null),ze===null)throw Error(P(349));Ar&30||Ng(n,t,i)}return i}function Ng(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Tg(e,t,n,r){t.value=n,t.getSnapshot=r,Lg(t)&&Fg(e)}function Dg(e,t,n){return n(function(){Lg(t)&&Fg(e)})}function Lg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Vt(e,n)}catch{return!0}}function Fg(e){var t=Sn(e,1);t!==null&&Bt(t,e,1,-1)}function Dp(e){var t=Yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:e},t.queue=e,e=e.dispatch=U1.bind(null,ye,e),[t.memoizedState,e]}function $o(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zg(){return Rt().memoizedState}function Za(e,t,n,r){var i=Yt();ye.flags|=e,i.memoizedState=$o(1|t,n,void 0,r===void 0?null:r)}function fl(e,t,n,r){var i=Rt();r=r===void 0?null:r;var o=void 0;if(Pe!==null){var a=Pe.memoizedState;if(o=a.destroy,r!==null&&$d(r,a.deps)){i.memoizedState=$o(t,n,o,r);return}}ye.flags|=e,i.memoizedState=$o(1|t,n,o,r)}function Lp(e,t){return Za(8390656,8,e,t)}function Hd(e,t){return fl(2048,8,e,t)}function Ig(e,t){return fl(4,2,e,t)}function Mg(e,t){return fl(4,4,e,t)}function Bg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kg(e,t,n){return n=n!=null?n.concat([e]):null,fl(4,4,Bg.bind(null,t,e),n)}function Wd(){}function $g(e,t){var n=Rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$d(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ug(e,t){var n=Rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$d(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Vg(e,t,n){return Ar&21?(Vt(n,t)||(n=Qm(),ye.lanes|=n,wr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,it=!0),e.memoizedState=n)}function K1(e,t){var n=ie;ie=n!==0&&4>n?n:4,e(!0);var r=mu.transition;mu.transition={};try{e(!1),t()}finally{ie=n,mu.transition=r}}function Hg(){return Rt().memoizedState}function $1(e,t,n){var r=Gn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Wg(e))Qg(t,n);else if(n=Sg(e,t,n,r),n!==null){var i=Xe();Bt(n,e,r,i),Gg(n,t,r)}}function U1(e,t,n){var r=Gn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wg(e))Qg(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Vt(s,a)){var l=t.interleaved;l===null?(i.next=i,zd(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Sg(e,t,i,r),n!==null&&(i=Xe(),Bt(n,e,r,i),Gg(n,t,r))}}function Wg(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function Qg(e,t){xo=Ds=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sd(e,n)}}var Ls={readContext:kt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},V1={readContext:kt,useCallback:function(e,t){return Yt().memoizedState=[e,t===void 0?null:t],e},useContext:kt,useEffect:Lp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Za(4194308,4,Bg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Za(4194308,4,e,t)},useInsertionEffect:function(e,t){return Za(4,2,e,t)},useMemo:function(e,t){var n=Yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=$1.bind(null,ye,e),[r.memoizedState,e]},useRef:function(e){var t=Yt();return e={current:e},t.memoizedState=e},useState:Dp,useDebugValue:Wd,useDeferredValue:function(e){return Yt().memoizedState=e},useTransition:function(){var e=Dp(!1),t=e[0];return e=K1.bind(null,e[1]),Yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ye,i=Yt();if(ge){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),ze===null)throw Error(P(349));Ar&30||Ng(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Lp(Dg.bind(null,r,o,e),[e]),r.flags|=2048,$o(9,Tg.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Yt(),t=ze.identifierPrefix;if(ge){var n=gn,r=mn;n=(r&~(1<<32-Mt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Bo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=B1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},H1={readContext:kt,useCallback:$g,useContext:kt,useEffect:Hd,useImperativeHandle:Kg,useInsertionEffect:Ig,useLayoutEffect:Mg,useMemo:Ug,useReducer:gu,useRef:zg,useState:function(){return gu(Ko)},useDebugValue:Wd,useDeferredValue:function(e){var t=Rt();return Vg(t,Pe.memoizedState,e)},useTransition:function(){var e=gu(Ko)[0],t=Rt().memoizedState;return[e,t]},useMutableSource:Og,useSyncExternalStore:Pg,useId:Hg,unstable_isNewReconciler:!1},W1={readContext:kt,useCallback:$g,useContext:kt,useEffect:Hd,useImperativeHandle:Kg,useInsertionEffect:Ig,useLayoutEffect:Mg,useMemo:Ug,useReducer:vu,useRef:zg,useState:function(){return vu(Ko)},useDebugValue:Wd,useDeferredValue:function(e){var t=Rt();return Pe===null?t.memoizedState=e:Vg(t,Pe.memoizedState,e)},useTransition:function(){var e=vu(Ko)[0],t=Rt().memoizedState;return[e,t]},useMutableSource:Og,useSyncExternalStore:Pg,useId:Hg,unstable_isNewReconciler:!1};function vi(e,t){try{var n="",r=t;do n+=Ax(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function yu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ec(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Q1=typeof WeakMap=="function"?WeakMap:Map;function qg(e,t,n){n=vn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zs||(zs=!0,Lc=r),Ec(e,t)},n}function Yg(e,t,n){n=vn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ec(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ec(e,t),typeof r!="function"&&(Qn===null?Qn=new Set([this]):Qn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Fp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Q1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=sA.bind(null,e,t,n),t.then(e,e))}function zp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ip(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vn(-1,1),t.tag=2,Wn(n,t,1))),n.lanes|=1),e)}var G1=bn.ReactCurrentOwner,it=!1;function Je(e,t,n,r){t.child=e===null?Rg(t,null,n,r):mi(t,e.child,n,r)}function Mp(e,t,n,r,i){n=n.render;var o=t.ref;return li(t,i),r=Ud(e,t,n,r,o,i),n=Vd(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Cn(e,t,i)):(ge&&n&&Pd(t),t.flags|=1,Je(e,t,r,i),t.child)}function Bp(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ef(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Jg(e,t,o,r,i)):(e=rs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Do,n(a,r)&&e.ref===t.ref)return Cn(e,t,i)}return t.flags|=1,e=qn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Jg(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Do(o,r)&&e.ref===t.ref)if(it=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(it=!0);else return t.lanes=e.lanes,Cn(e,t,i)}return bc(e,t,n,r,i)}function Xg(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Jr,ct),ct|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ce(Jr,ct),ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ce(Jr,ct),ct|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ce(Jr,ct),ct|=r;return Je(e,t,i,n),t.child}function Zg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function bc(e,t,n,r,i){var o=lt(n)?yr:Ye.current;return o=pi(t,o),li(t,i),n=Ud(e,t,n,r,o,i),r=Vd(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Cn(e,t,i)):(ge&&r&&Pd(t),t.flags|=1,Je(e,t,n,i),t.child)}function Kp(e,t,n,r,i){if(lt(n)){var o=!0;ks(t)}else o=!1;if(li(t,i),t.stateNode===null)es(e,t),bg(t,n,r),Cc(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=kt(u):(u=lt(n)?yr:Ye.current,u=pi(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Np(t,a,r,u),Fn=!1;var h=t.memoizedState;a.state=h,Ns(t,r,a,i),l=t.memoizedState,s!==r||h!==l||st.current||Fn?(typeof d=="function"&&(Sc(t,n,d,r),l=t.memoizedState),(s=Fn||Pp(t,n,s,r,h,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Cg(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Tt(t.type,s),a.props=u,f=t.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=kt(l):(l=lt(n)?yr:Ye.current,l=pi(t,l));var A=n.getDerivedStateFromProps;(d=typeof A=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||h!==l)&&Np(t,a,r,l),Fn=!1,h=t.memoizedState,a.state=h,Ns(t,r,a,i);var y=t.memoizedState;s!==f||h!==y||st.current||Fn?(typeof A=="function"&&(Sc(t,n,A,r),y=t.memoizedState),(u=Fn||Pp(t,n,u,r,h,y,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return kc(e,t,n,r,o,i)}function kc(e,t,n,r,i,o){Zg(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&bp(t,n,!1),Cn(e,t,o);r=t.stateNode,G1.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=mi(t,e.child,null,o),t.child=mi(t,null,s,o)):Je(e,t,s,o),t.memoizedState=r.state,i&&bp(t,n,!0),t.child}function ev(e){var t=e.stateNode;t.pendingContext?Ep(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ep(e,t.context,!1),Md(e,t.containerInfo)}function $p(e,t,n,r,i){return hi(),Td(i),t.flags|=256,Je(e,t,n,r),t.child}var Rc={dehydrated:null,treeContext:null,retryLane:0};function jc(e){return{baseLanes:e,cachePool:null,transitions:null}}function tv(e,t,n){var r=t.pendingProps,i=ve.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ce(ve,i&1),e===null)return wc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=ml(a,r,0,null),e=mr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=jc(n),t.memoizedState=Rc,e):Qd(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return q1(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=qn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=qn(s,o):(o=mr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?jc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Rc,r}return o=e.child,e=o.sibling,r=qn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Qd(e,t){return t=ml({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function La(e,t,n,r){return r!==null&&Td(r),mi(t,e.child,null,n),e=Qd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function q1(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=yu(Error(P(422))),La(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ml({mode:"visible",children:r.children},i,0,null),o=mr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&mi(t,e.child,null,a),t.child.memoizedState=jc(a),t.memoizedState=Rc,o);if(!(t.mode&1))return La(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(P(419)),r=yu(o,r,void 0),La(e,t,a,r)}if(s=(a&e.childLanes)!==0,it||s){if(r=ze,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Sn(e,i),Bt(r,e,i,-1))}return Zd(),r=yu(Error(P(421))),La(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=lA.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,dt=Hn(i.nextSibling),ft=t,ge=!0,Ft=null,e!==null&&(At[wt++]=mn,At[wt++]=gn,At[wt++]=xr,mn=e.id,gn=e.overflow,xr=t),t=Qd(t,r.children),t.flags|=4096,t)}function Up(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_c(e.return,t,n)}function xu(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function nv(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Je(e,t,r.children,n),r=ve.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Up(e,n,t);else if(e.tag===19)Up(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ce(ve,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ts(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),xu(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ts(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}xu(t,!0,n,null,o);break;case"together":xu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function es(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Cn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=qn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Y1(e,t,n){switch(t.tag){case 3:ev(t),hi();break;case 5:jg(t);break;case 1:lt(t.type)&&ks(t);break;case 4:Md(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ce(Os,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ce(ve,ve.current&1),t.flags|=128,null):n&t.child.childLanes?tv(e,t,n):(ce(ve,ve.current&1),e=Cn(e,t,n),e!==null?e.sibling:null);ce(ve,ve.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return nv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ve,ve.current),r)break;return null;case 22:case 23:return t.lanes=0,Xg(e,t,n)}return Cn(e,t,n)}var rv,Oc,iv,ov;rv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oc=function(){};iv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,dr(tn.current);var o=null;switch(n){case"input":i=Xu(e,i),r=Xu(e,r),o=[];break;case"select":i=xe({},i,{value:void 0}),r=xe({},r,{value:void 0}),o=[];break;case"textarea":i=tc(e,i),r=tc(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Es)}rc(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ko.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ko.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&de("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};ov=function(e,t,n,r){n!==r&&(t.flags|=4)};function to(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function J1(e,t,n){var r=t.pendingProps;switch(Nd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return lt(t.type)&&bs(),We(t),null;case 3:return r=t.stateNode,gi(),pe(st),pe(Ye),Kd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ta(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ft!==null&&(Ic(Ft),Ft=null))),Oc(e,t),We(t),null;case 5:Bd(t);var i=dr(Mo.current);if(n=t.type,e!==null&&t.stateNode!=null)iv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return We(t),null}if(e=dr(tn.current),Ta(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Xt]=t,r[zo]=o,e=(t.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<fo.length;i++)de(fo[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Xf(r,o),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},de("invalid",r);break;case"textarea":ep(r,o),de("invalid",r)}rc(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Na(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Na(r.textContent,s,e),i=["children",""+s]):ko.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&de("scroll",r)}switch(n){case"input":Ca(r),Zf(r,o,!0);break;case"textarea":Ca(r),tp(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Es)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Nm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Xt]=t,e[zo]=r,rv(e,t,!1,!1),t.stateNode=e;e:{switch(a=ic(n,r),n){case"dialog":de("cancel",e),de("close",e),i=r;break;case"iframe":case"object":case"embed":de("load",e),i=r;break;case"video":case"audio":for(i=0;i<fo.length;i++)de(fo[i],e);i=r;break;case"source":de("error",e),i=r;break;case"img":case"image":case"link":de("error",e),de("load",e),i=r;break;case"details":de("toggle",e),i=r;break;case"input":Xf(e,r),i=Xu(e,r),de("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=xe({},r,{value:void 0}),de("invalid",e);break;case"textarea":ep(e,r),i=tc(e,r),de("invalid",e);break;default:i=r}rc(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Lm(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Tm(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ro(e,l):typeof l=="number"&&Ro(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ko.hasOwnProperty(o)?l!=null&&o==="onScroll"&&de("scroll",e):l!=null&&vd(e,o,l,a))}switch(n){case"input":Ca(e),Zf(e,r,!1);break;case"textarea":Ca(e),tp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Jn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ii(e,!!r.multiple,o,!1):r.defaultValue!=null&&ii(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Es)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)ov(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=dr(Mo.current),dr(tn.current),Ta(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xt]=t,(o=r.nodeValue!==n)&&(e=ft,e!==null))switch(e.tag){case 3:Na(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Na(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xt]=t,t.stateNode=r}return We(t),null;case 13:if(pe(ve),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&dt!==null&&t.mode&1&&!(t.flags&128))_g(),hi(),t.flags|=98560,o=!1;else if(o=Ta(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(P(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[Xt]=t}else hi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;We(t),o=!1}else Ft!==null&&(Ic(Ft),Ft=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ve.current&1?Ne===0&&(Ne=3):Zd())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return gi(),Oc(e,t),e===null&&Lo(t.stateNode.containerInfo),We(t),null;case 10:return Fd(t.type._context),We(t),null;case 17:return lt(t.type)&&bs(),We(t),null;case 19:if(pe(ve),o=t.memoizedState,o===null)return We(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)to(o,!1);else{if(Ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ts(e),a!==null){for(t.flags|=128,to(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ce(ve,ve.current&1|2),t.child}e=e.sibling}o.tail!==null&&Se()>yi&&(t.flags|=128,r=!0,to(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ts(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),to(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ge)return We(t),null}else 2*Se()-o.renderingStartTime>yi&&n!==1073741824&&(t.flags|=128,r=!0,to(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Se(),t.sibling=null,n=ve.current,ce(ve,r?n&1|2:n&1),t):(We(t),null);case 22:case 23:return Xd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ct&1073741824&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function X1(e,t){switch(Nd(t),t.tag){case 1:return lt(t.type)&&bs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gi(),pe(st),pe(Ye),Kd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Bd(t),null;case 13:if(pe(ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(ve),null;case 4:return gi(),null;case 10:return Fd(t.type._context),null;case 22:case 23:return Xd(),null;case 24:return null;default:return null}}var Fa=!1,Ge=!1,Z1=typeof WeakSet=="function"?WeakSet:Set,L=null;function Yr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(e,t,r)}else n.current=null}function Pc(e,t,n){try{n()}catch(r){Ae(e,t,r)}}var Vp=!1;function eA(e,t){if(hc=_s,e=ug(),Od(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,d=0,f=e,h=null;t:for(;;){for(var A;f!==n||i!==0&&f.nodeType!==3||(s=a+i),f!==o||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(A=f.firstChild)!==null;)h=f,f=A;for(;;){if(f===e)break t;if(h===n&&++u===i&&(s=a),h===o&&++d===r&&(l=a),(A=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=A}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mc={focusedElem:e,selectionRange:n},_s=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,R=y.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:Tt(t.type,x),R);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(m){Ae(t,t.return,m)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return y=Vp,Vp=!1,y}function Ao(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Pc(t,n,o)}i=i.next}while(i!==r)}}function pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Nc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function av(e){var t=e.alternate;t!==null&&(e.alternate=null,av(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xt],delete t[zo],delete t[yc],delete t[F1],delete t[z1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sv(e){return e.tag===5||e.tag===3||e.tag===4}function Hp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Es));else if(r!==4&&(e=e.child,e!==null))for(Tc(e,t,n),e=e.sibling;e!==null;)Tc(e,t,n),e=e.sibling}function Dc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Dc(e,t,n),e=e.sibling;e!==null;)Dc(e,t,n),e=e.sibling}var Be=null,Dt=!1;function Pn(e,t,n){for(n=n.child;n!==null;)lv(e,t,n),n=n.sibling}function lv(e,t,n){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(ol,n)}catch{}switch(n.tag){case 5:Ge||Yr(n,t);case 6:var r=Be,i=Dt;Be=null,Pn(e,t,n),Be=r,Dt=i,Be!==null&&(Dt?(e=Be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(Dt?(e=Be,n=n.stateNode,e.nodeType===8?fu(e.parentNode,n):e.nodeType===1&&fu(e,n),No(e)):fu(Be,n.stateNode));break;case 4:r=Be,i=Dt,Be=n.stateNode.containerInfo,Dt=!0,Pn(e,t,n),Be=r,Dt=i;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Pc(n,t,a),i=i.next}while(i!==r)}Pn(e,t,n);break;case 1:if(!Ge&&(Yr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Ae(n,t,s)}Pn(e,t,n);break;case 21:Pn(e,t,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,Pn(e,t,n),Ge=r):Pn(e,t,n);break;default:Pn(e,t,n)}}function Wp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Z1),t.forEach(function(r){var i=uA.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Nt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Be=s.stateNode,Dt=!1;break e;case 3:Be=s.stateNode.containerInfo,Dt=!0;break e;case 4:Be=s.stateNode.containerInfo,Dt=!0;break e}s=s.return}if(Be===null)throw Error(P(160));lv(o,a,i),Be=null,Dt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ae(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)uv(t,e),t=t.sibling}function uv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nt(t,e),qt(e),r&4){try{Ao(3,e,e.return),pl(3,e)}catch(x){Ae(e,e.return,x)}try{Ao(5,e,e.return)}catch(x){Ae(e,e.return,x)}}break;case 1:Nt(t,e),qt(e),r&512&&n!==null&&Yr(n,n.return);break;case 5:if(Nt(t,e),qt(e),r&512&&n!==null&&Yr(n,n.return),e.flags&32){var i=e.stateNode;try{Ro(i,"")}catch(x){Ae(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Om(i,o),ic(s,a);var u=ic(s,o);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?Lm(i,f):d==="dangerouslySetInnerHTML"?Tm(i,f):d==="children"?Ro(i,f):vd(i,d,f,u)}switch(s){case"input":Zu(i,o);break;case"textarea":Pm(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var A=o.value;A!=null?ii(i,!!o.multiple,A,!1):h!==!!o.multiple&&(o.defaultValue!=null?ii(i,!!o.multiple,o.defaultValue,!0):ii(i,!!o.multiple,o.multiple?[]:"",!1))}i[zo]=o}catch(x){Ae(e,e.return,x)}}break;case 6:if(Nt(t,e),qt(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){Ae(e,e.return,x)}}break;case 3:if(Nt(t,e),qt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{No(t.containerInfo)}catch(x){Ae(e,e.return,x)}break;case 4:Nt(t,e),qt(e);break;case 13:Nt(t,e),qt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Yd=Se())),r&4&&Wp(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ge=(u=Ge)||d,Nt(t,e),Ge=u):Nt(t,e),qt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(L=e,d=e.child;d!==null;){for(f=L=d;L!==null;){switch(h=L,A=h.child,h.tag){case 0:case 11:case 14:case 15:Ao(4,h,h.return);break;case 1:Yr(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){Ae(r,n,x)}}break;case 5:Yr(h,h.return);break;case 22:if(h.memoizedState!==null){Gp(f);continue}}A!==null?(A.return=h,L=A):Gp(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Dm("display",a))}catch(x){Ae(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){Ae(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Nt(t,e),qt(e),r&4&&Wp(e);break;case 21:break;default:Nt(t,e),qt(e)}}function qt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(sv(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ro(i,""),r.flags&=-33);var o=Hp(e);Dc(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Hp(e);Tc(e,s,a);break;default:throw Error(P(161))}}catch(l){Ae(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tA(e,t,n){L=e,cv(e)}function cv(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Fa;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Ge;s=Fa;var u=Ge;if(Fa=a,(Ge=l)&&!u)for(L=i;L!==null;)a=L,l=a.child,a.tag===22&&a.memoizedState!==null?qp(i):l!==null?(l.return=a,L=l):qp(i);for(;o!==null;)L=o,cv(o),o=o.sibling;L=i,Fa=s,Ge=u}Qp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):Qp(e)}}function Qp(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ge||pl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Tt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Op(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Op(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&No(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Ge||t.flags&512&&Nc(t)}catch(h){Ae(t,t.return,h)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function Gp(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function qp(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pl(4,t)}catch(l){Ae(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Ae(t,i,l)}}var o=t.return;try{Nc(t)}catch(l){Ae(t,o,l)}break;case 5:var a=t.return;try{Nc(t)}catch(l){Ae(t,a,l)}}}catch(l){Ae(t,t.return,l)}if(t===e){L=null;break}var s=t.sibling;if(s!==null){s.return=t.return,L=s;break}L=t.return}}var nA=Math.ceil,Fs=bn.ReactCurrentDispatcher,Gd=bn.ReactCurrentOwner,Et=bn.ReactCurrentBatchConfig,J=0,ze=null,ke=null,$e=0,ct=0,Jr=er(0),Ne=0,Uo=null,wr=0,hl=0,qd=0,wo=null,rt=null,Yd=0,yi=1/0,dn=null,zs=!1,Lc=null,Qn=null,za=!1,Bn=null,Is=0,_o=0,Fc=null,ts=-1,ns=0;function Xe(){return J&6?Se():ts!==-1?ts:ts=Se()}function Gn(e){return e.mode&1?J&2&&$e!==0?$e&-$e:M1.transition!==null?(ns===0&&(ns=Qm()),ns):(e=ie,e!==0||(e=window.event,e=e===void 0?16:eg(e.type)),e):1}function Bt(e,t,n,r){if(50<_o)throw _o=0,Fc=null,Error(P(185));Zo(e,n,r),(!(J&2)||e!==ze)&&(e===ze&&(!(J&2)&&(hl|=n),Ne===4&&In(e,$e)),ut(e,r),n===1&&J===0&&!(t.mode&1)&&(yi=Se()+500,cl&&tr()))}function ut(e,t){var n=e.callbackNode;Mx(e,t);var r=ws(e,e===ze?$e:0);if(r===0)n!==null&&ip(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ip(n),t===1)e.tag===0?I1(Yp.bind(null,e)):xg(Yp.bind(null,e)),D1(function(){!(J&6)&&tr()}),n=null;else{switch(Gm(r)){case 1:n=_d;break;case 4:n=Hm;break;case 16:n=As;break;case 536870912:n=Wm;break;default:n=As}n=yv(n,dv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function dv(e,t){if(ts=-1,ns=0,J&6)throw Error(P(327));var n=e.callbackNode;if(ui()&&e.callbackNode!==n)return null;var r=ws(e,e===ze?$e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ms(e,r);else{t=r;var i=J;J|=2;var o=pv();(ze!==e||$e!==t)&&(dn=null,yi=Se()+500,hr(e,t));do try{oA();break}catch(s){fv(e,s)}while(1);Ld(),Fs.current=o,J=i,ke!==null?t=0:(ze=null,$e=0,t=Ne)}if(t!==0){if(t===2&&(i=uc(e),i!==0&&(r=i,t=zc(e,i))),t===1)throw n=Uo,hr(e,0),In(e,r),ut(e,Se()),n;if(t===6)In(e,r);else{if(i=e.current.alternate,!(r&30)&&!rA(i)&&(t=Ms(e,r),t===2&&(o=uc(e),o!==0&&(r=o,t=zc(e,o))),t===1))throw n=Uo,hr(e,0),In(e,r),ut(e,Se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:sr(e,rt,dn);break;case 3:if(In(e,r),(r&130023424)===r&&(t=Yd+500-Se(),10<t)){if(ws(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=vc(sr.bind(null,e,rt,dn),t);break}sr(e,rt,dn);break;case 4:if(In(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Mt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nA(r/1960))-r,10<r){e.timeoutHandle=vc(sr.bind(null,e,rt,dn),r);break}sr(e,rt,dn);break;case 5:sr(e,rt,dn);break;default:throw Error(P(329))}}}return ut(e,Se()),e.callbackNode===n?dv.bind(null,e):null}function zc(e,t){var n=wo;return e.current.memoizedState.isDehydrated&&(hr(e,t).flags|=256),e=Ms(e,t),e!==2&&(t=rt,rt=n,t!==null&&Ic(t)),e}function Ic(e){rt===null?rt=e:rt.push.apply(rt,e)}function rA(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Vt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function In(e,t){for(t&=~qd,t&=~hl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Mt(t),r=1<<n;e[n]=-1,t&=~r}}function Yp(e){if(J&6)throw Error(P(327));ui();var t=ws(e,0);if(!(t&1))return ut(e,Se()),null;var n=Ms(e,t);if(e.tag!==0&&n===2){var r=uc(e);r!==0&&(t=r,n=zc(e,r))}if(n===1)throw n=Uo,hr(e,0),In(e,t),ut(e,Se()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sr(e,rt,dn),ut(e,Se()),null}function Jd(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(yi=Se()+500,cl&&tr())}}function _r(e){Bn!==null&&Bn.tag===0&&!(J&6)&&ui();var t=J;J|=1;var n=Et.transition,r=ie;try{if(Et.transition=null,ie=1,e)return e()}finally{ie=r,Et.transition=n,J=t,!(J&6)&&tr()}}function Xd(){ct=Jr.current,pe(Jr)}function hr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,T1(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(Nd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bs();break;case 3:gi(),pe(st),pe(Ye),Kd();break;case 5:Bd(r);break;case 4:gi();break;case 13:pe(ve);break;case 19:pe(ve);break;case 10:Fd(r.type._context);break;case 22:case 23:Xd()}n=n.return}if(ze=e,ke=e=qn(e.current,null),$e=ct=t,Ne=0,Uo=null,qd=hl=wr=0,rt=wo=null,cr!==null){for(t=0;t<cr.length;t++)if(n=cr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}cr=null}return e}function fv(e,t){do{var n=ke;try{if(Ld(),Xa.current=Ls,Ds){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ds=!1}if(Ar=0,Le=Pe=ye=null,xo=!1,Bo=0,Gd.current=null,n===null||n.return===null){Ne=1,Uo=t,ke=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=$e,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var A=zp(a);if(A!==null){A.flags&=-257,Ip(A,a,s,o,t),A.mode&1&&Fp(o,u,t),t=A,l=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(l),t.updateQueue=x}else y.add(l);break e}else{if(!(t&1)){Fp(o,u,t),Zd();break e}l=Error(P(426))}}else if(ge&&s.mode&1){var R=zp(a);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Ip(R,a,s,o,t),Td(vi(l,s));break e}}o=l=vi(l,s),Ne!==4&&(Ne=2),wo===null?wo=[o]:wo.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=qg(o,l,t);jp(o,g);break e;case 1:s=l;var p=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Qn===null||!Qn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var m=Yg(o,s,t);jp(o,m);break e}}o=o.return}while(o!==null)}mv(n)}catch(_){t=_,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(1)}function pv(){var e=Fs.current;return Fs.current=Ls,e===null?Ls:e}function Zd(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),ze===null||!(wr&268435455)&&!(hl&268435455)||In(ze,$e)}function Ms(e,t){var n=J;J|=2;var r=pv();(ze!==e||$e!==t)&&(dn=null,hr(e,t));do try{iA();break}catch(i){fv(e,i)}while(1);if(Ld(),J=n,Fs.current=r,ke!==null)throw Error(P(261));return ze=null,$e=0,Ne}function iA(){for(;ke!==null;)hv(ke)}function oA(){for(;ke!==null&&!Ox();)hv(ke)}function hv(e){var t=vv(e.alternate,e,ct);e.memoizedProps=e.pendingProps,t===null?mv(e):ke=t,Gd.current=null}function mv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=X1(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,ke=null;return}}else if(n=J1(n,t,ct),n!==null){ke=n;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Ne===0&&(Ne=5)}function sr(e,t,n){var r=ie,i=Et.transition;try{Et.transition=null,ie=1,aA(e,t,n,r)}finally{Et.transition=i,ie=r}return null}function aA(e,t,n,r){do ui();while(Bn!==null);if(J&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Bx(e,o),e===ze&&(ke=ze=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||za||(za=!0,yv(As,function(){return ui(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Et.transition,Et.transition=null;var a=ie;ie=1;var s=J;J|=4,Gd.current=null,eA(e,n),uv(n,e),b1(mc),_s=!!hc,mc=hc=null,e.current=n,tA(n),Px(),J=s,ie=a,Et.transition=o}else e.current=n;if(za&&(za=!1,Bn=e,Is=i),o=e.pendingLanes,o===0&&(Qn=null),Dx(n.stateNode),ut(e,Se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zs)throw zs=!1,e=Lc,Lc=null,e;return Is&1&&e.tag!==0&&ui(),o=e.pendingLanes,o&1?e===Fc?_o++:(_o=0,Fc=e):_o=0,tr(),null}function ui(){if(Bn!==null){var e=Gm(Is),t=Et.transition,n=ie;try{if(Et.transition=null,ie=16>e?16:e,Bn===null)var r=!1;else{if(e=Bn,Bn=null,Is=0,J&6)throw Error(P(331));var i=J;for(J|=4,L=e.current;L!==null;){var o=L,a=o.child;if(L.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(L=u;L!==null;){var d=L;switch(d.tag){case 0:case 11:case 15:Ao(8,d,o)}var f=d.child;if(f!==null)f.return=d,L=f;else for(;L!==null;){d=L;var h=d.sibling,A=d.return;if(av(d),d===u){L=null;break}if(h!==null){h.return=A,L=h;break}L=A}}}var y=o.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var R=x.sibling;x.sibling=null,x=R}while(x!==null)}}L=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,L=a;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ao(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,L=g;break e}L=o.return}}var p=e.current;for(L=p;L!==null;){a=L;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,L=v;else e:for(a=p;L!==null;){if(s=L,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:pl(9,s)}}catch(_){Ae(s,s.return,_)}if(s===a){L=null;break e}var m=s.sibling;if(m!==null){m.return=s.return,L=m;break e}L=s.return}}if(J=i,tr(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(ol,e)}catch{}r=!0}return r}finally{ie=n,Et.transition=t}}return!1}function Jp(e,t,n){t=vi(n,t),t=qg(e,t,1),e=Wn(e,t,1),t=Xe(),e!==null&&(Zo(e,1,t),ut(e,t))}function Ae(e,t,n){if(e.tag===3)Jp(e,e,n);else for(;t!==null;){if(t.tag===3){Jp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qn===null||!Qn.has(r))){e=vi(n,e),e=Yg(t,e,1),t=Wn(t,e,1),e=Xe(),t!==null&&(Zo(t,1,e),ut(t,e));break}}t=t.return}}function sA(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Xe(),e.pingedLanes|=e.suspendedLanes&n,ze===e&&($e&n)===n&&(Ne===4||Ne===3&&($e&130023424)===$e&&500>Se()-Yd?hr(e,0):qd|=n),ut(e,t)}function gv(e,t){t===0&&(e.mode&1?(t=ka,ka<<=1,!(ka&130023424)&&(ka=4194304)):t=1);var n=Xe();e=Sn(e,t),e!==null&&(Zo(e,t,n),ut(e,n))}function lA(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gv(e,n)}function uA(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),gv(e,n)}var vv;vv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)it=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return it=!1,Y1(e,t,n);it=!!(e.flags&131072)}else it=!1,ge&&t.flags&1048576&&Ag(t,js,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;es(e,t),e=t.pendingProps;var i=pi(t,Ye.current);li(t,n),i=Ud(null,t,r,e,i,n);var o=Vd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,lt(r)?(o=!0,ks(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Id(t),i.updater=dl,t.stateNode=i,i._reactInternals=t,Cc(t,r,e,n),t=kc(null,t,r,!0,o,n)):(t.tag=0,ge&&o&&Pd(t),Je(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(es(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=dA(r),e=Tt(r,e),i){case 0:t=bc(null,t,r,e,n);break e;case 1:t=Kp(null,t,r,e,n);break e;case 11:t=Mp(null,t,r,e,n);break e;case 14:t=Bp(null,t,r,Tt(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tt(r,i),bc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tt(r,i),Kp(e,t,r,i,n);case 3:e:{if(ev(t),e===null)throw Error(P(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Cg(e,t),Ns(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=vi(Error(P(423)),t),t=$p(e,t,r,n,i);break e}else if(r!==i){i=vi(Error(P(424)),t),t=$p(e,t,r,n,i);break e}else for(dt=Hn(t.stateNode.containerInfo.firstChild),ft=t,ge=!0,Ft=null,n=Rg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hi(),r===i){t=Cn(e,t,n);break e}Je(e,t,r,n)}t=t.child}return t;case 5:return jg(t),e===null&&wc(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,gc(r,i)?a=null:o!==null&&gc(r,o)&&(t.flags|=32),Zg(e,t),Je(e,t,a,n),t.child;case 6:return e===null&&wc(t),null;case 13:return tv(e,t,n);case 4:return Md(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mi(t,null,r,n):Je(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tt(r,i),Mp(e,t,r,i,n);case 7:return Je(e,t,t.pendingProps,n),t.child;case 8:return Je(e,t,t.pendingProps.children,n),t.child;case 12:return Je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ce(Os,r._currentValue),r._currentValue=a,o!==null)if(Vt(o.value,a)){if(o.children===i.children&&!st.current){t=Cn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=vn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),_c(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(P(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),_c(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Je(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,li(t,n),i=kt(i),r=r(i),t.flags|=1,Je(e,t,r,n),t.child;case 14:return r=t.type,i=Tt(r,t.pendingProps),i=Tt(r.type,i),Bp(e,t,r,i,n);case 15:return Jg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tt(r,i),es(e,t),t.tag=1,lt(r)?(e=!0,ks(t)):e=!1,li(t,n),bg(t,r,i),Cc(t,r,i,n),kc(null,t,r,!0,e,n);case 19:return nv(e,t,n);case 22:return Xg(e,t,n)}throw Error(P(156,t.tag))};function yv(e,t){return Vm(e,t)}function cA(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,t,n,r){return new cA(e,t,n,r)}function ef(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dA(e){if(typeof e=="function")return ef(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xd)return 11;if(e===Ad)return 14}return 2}function qn(e,t){var n=e.alternate;return n===null?(n=Ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function rs(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")ef(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Kr:return mr(n.children,i,o,t);case yd:a=8,i|=8;break;case Gu:return e=Ct(12,n,t,i|2),e.elementType=Gu,e.lanes=o,e;case qu:return e=Ct(13,n,t,i),e.elementType=qu,e.lanes=o,e;case Yu:return e=Ct(19,n,t,i),e.elementType=Yu,e.lanes=o,e;case km:return ml(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Em:a=10;break e;case bm:a=9;break e;case xd:a=11;break e;case Ad:a=14;break e;case Ln:a=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Ct(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function mr(e,t,n,r){return e=Ct(7,e,r,t),e.lanes=n,e}function ml(e,t,n,r){return e=Ct(22,e,r,t),e.elementType=km,e.lanes=n,e.stateNode={isHidden:!1},e}function Au(e,t,n){return e=Ct(6,e,null,t),e.lanes=n,e}function wu(e,t,n){return t=Ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fA(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tu(0),this.expirationTimes=tu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function tf(e,t,n,r,i,o,a,s,l){return e=new fA(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ct(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Id(o),e}function pA(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Br,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function xv(e){if(!e)return Xn;e=e._reactInternals;e:{if(jr(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(lt(n))return yg(e,n,t)}return t}function Av(e,t,n,r,i,o,a,s,l){return e=tf(n,r,!0,e,i,o,a,s,l),e.context=xv(null),n=e.current,r=Xe(),i=Gn(n),o=vn(r,i),o.callback=t??null,Wn(n,o,i),e.current.lanes=i,Zo(e,i,r),ut(e,r),e}function gl(e,t,n,r){var i=t.current,o=Xe(),a=Gn(i);return n=xv(n),t.context===null?t.context=n:t.pendingContext=n,t=vn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Wn(i,t,a),e!==null&&(Bt(e,i,a,o),Ja(e,i,a)),a}function Bs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function nf(e,t){Xp(e,t),(e=e.alternate)&&Xp(e,t)}function hA(){return null}var wv=typeof reportError=="function"?reportError:function(e){console.error(e)};function rf(e){this._internalRoot=e}vl.prototype.render=rf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));gl(e,t,null,null)};vl.prototype.unmount=rf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_r(function(){gl(null,e,null,null)}),t[_n]=null}};function vl(e){this._internalRoot=e}vl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zn.length&&t!==0&&t<zn[n].priority;n++);zn.splice(n,0,e),n===0&&Zm(e)}};function of(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zp(){}function mA(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Bs(a);o.call(u)}}var a=Av(t,r,e,0,null,!1,!1,"",Zp);return e._reactRootContainer=a,e[_n]=a.current,Lo(e.nodeType===8?e.parentNode:e),_r(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Bs(l);s.call(u)}}var l=tf(e,0,!1,null,null,!1,!1,"",Zp);return e._reactRootContainer=l,e[_n]=l.current,Lo(e.nodeType===8?e.parentNode:e),_r(function(){gl(t,l,n,r)}),l}function xl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=Bs(a);s.call(l)}}gl(t,a,e,i)}else a=mA(n,t,e,i,r);return Bs(a)}qm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=co(t.pendingLanes);n!==0&&(Sd(t,n|1),ut(t,Se()),!(J&6)&&(yi=Se()+500,tr()))}break;case 13:_r(function(){var r=Sn(e,1);if(r!==null){var i=Xe();Bt(r,e,1,i)}}),nf(e,1)}};Cd=function(e){if(e.tag===13){var t=Sn(e,134217728);if(t!==null){var n=Xe();Bt(t,e,134217728,n)}nf(e,134217728)}};Ym=function(e){if(e.tag===13){var t=Gn(e),n=Sn(e,t);if(n!==null){var r=Xe();Bt(n,e,t,r)}nf(e,t)}};Jm=function(){return ie};Xm=function(e,t){var n=ie;try{return ie=e,t()}finally{ie=n}};ac=function(e,t,n){switch(t){case"input":if(Zu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ul(r);if(!i)throw Error(P(90));jm(r),Zu(r,i)}}}break;case"textarea":Pm(e,n);break;case"select":t=n.value,t!=null&&ii(e,!!n.multiple,t,!1)}};Im=Jd;Mm=_r;var gA={usingClientEntryPoint:!1,Events:[ta,Hr,ul,Fm,zm,Jd]},no={findFiberByHostInstance:ur,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},vA={bundleType:no.bundleType,version:no.version,rendererPackageName:no.rendererPackageName,rendererConfig:no.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$m(e),e===null?null:e.stateNode},findFiberByHostInstance:no.findFiberByHostInstance||hA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ia.isDisabled&&Ia.supportsFiber)try{ol=Ia.inject(vA),en=Ia}catch{}}ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gA;ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!of(t))throw Error(P(200));return pA(e,t,null,n)};ht.createRoot=function(e,t){if(!of(e))throw Error(P(299));var n=!1,r="",i=wv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=tf(e,1,!1,null,null,n,!1,r,i),e[_n]=t.current,Lo(e.nodeType===8?e.parentNode:e),new rf(t)};ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=$m(t),e=e===null?null:e.stateNode,e};ht.flushSync=function(e){return _r(e)};ht.hydrate=function(e,t,n){if(!yl(t))throw Error(P(200));return xl(null,e,t,!0,n)};ht.hydrateRoot=function(e,t,n){if(!of(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=wv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Av(t,null,e,1,n??null,i,!1,o,a),e[_n]=t.current,Lo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new vl(t)};ht.render=function(e,t,n){if(!yl(t))throw Error(P(200));return xl(null,e,t,!1,n)};ht.unmountComponentAtNode=function(e){if(!yl(e))throw Error(P(40));return e._reactRootContainer?(_r(function(){xl(null,null,e,!1,function(){e._reactRootContainer=null,e[_n]=null})}),!0):!1};ht.unstable_batchedUpdates=Jd;ht.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!yl(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return xl(e,t,n,!1,r)};ht.version="18.2.0-next-9e3b772b8-20220608";function _v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_v)}catch(e){console.error(e)}}_v(),Am.exports=ht;var Sv=Am.exports,eh=Sv;Wu.createRoot=eh.createRoot,Wu.hydrateRoot=eh.hydrateRoot;var qe=function(){return qe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},qe.apply(this,arguments)};function Ks(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var fe="-ms-",So="-moz-",ne="-webkit-",Cv="comm",Al="rule",af="decl",yA="@import",Ev="@keyframes",xA="@layer",AA=Math.abs,sf=String.fromCharCode,Mc=Object.assign;function wA(e,t){return Fe(e,0)^45?(((t<<2^Fe(e,0))<<2^Fe(e,1))<<2^Fe(e,2))<<2^Fe(e,3):0}function bv(e){return e.trim()}function fn(e,t){return(e=t.exec(e))?e[0]:e}function Q(e,t,n){return e.replace(t,n)}function is(e,t){return e.indexOf(t)}function Fe(e,t){return e.charCodeAt(t)|0}function xi(e,t,n){return e.slice(t,n)}function Jt(e){return e.length}function kv(e){return e.length}function po(e,t){return t.push(e),e}function _A(e,t){return e.map(t).join("")}function th(e,t){return e.filter(function(n){return!fn(n,t)})}var wl=1,Ai=1,Rv=0,jt=0,be=0,Fi="";function _l(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:wl,column:Ai,length:a,return:"",siblings:s}}function Dn(e,t){return Mc(_l("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Fr(e){for(;e.root;)e=Dn(e.root,{children:[e]});po(e,e.siblings)}function SA(){return be}function CA(){return be=jt>0?Fe(Fi,--jt):0,Ai--,be===10&&(Ai=1,wl--),be}function Kt(){return be=jt<Rv?Fe(Fi,jt++):0,Ai++,be===10&&(Ai=1,wl++),be}function gr(){return Fe(Fi,jt)}function os(){return jt}function Sl(e,t){return xi(Fi,e,t)}function Bc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function EA(e){return wl=Ai=1,Rv=Jt(Fi=e),jt=0,[]}function bA(e){return Fi="",e}function _u(e){return bv(Sl(jt-1,Kc(e===91?e+2:e===40?e+1:e)))}function kA(e){for(;(be=gr())&&be<33;)Kt();return Bc(e)>2||Bc(be)>3?"":" "}function RA(e,t){for(;--t&&Kt()&&!(be<48||be>102||be>57&&be<65||be>70&&be<97););return Sl(e,os()+(t<6&&gr()==32&&Kt()==32))}function Kc(e){for(;Kt();)switch(be){case e:return jt;case 34:case 39:e!==34&&e!==39&&Kc(be);break;case 40:e===41&&Kc(e);break;case 92:Kt();break}return jt}function jA(e,t){for(;Kt()&&e+be!==47+10;)if(e+be===42+42&&gr()===47)break;return"/*"+Sl(t,jt-1)+"*"+sf(e===47?e:Kt())}function OA(e){for(;!Bc(gr());)Kt();return Sl(e,jt)}function PA(e){return bA(as("",null,null,null,[""],e=EA(e),0,[0],e))}function as(e,t,n,r,i,o,a,s,l){for(var u=0,d=0,f=a,h=0,A=0,y=0,x=1,R=1,g=1,p=0,v="",m=i,_=o,j=r,b=v;R;)switch(y=p,p=Kt()){case 40:if(y!=108&&Fe(b,f-1)==58){is(b+=Q(_u(p),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:b+=_u(p);break;case 9:case 10:case 13:case 32:b+=kA(y);break;case 92:b+=RA(os()-1,7);continue;case 47:switch(gr()){case 42:case 47:po(NA(jA(Kt(),os()),t,n,l),l);break;default:b+="/"}break;case 123*x:s[u++]=Jt(b)*g;case 125*x:case 59:case 0:switch(p){case 0:case 125:R=0;case 59+d:g==-1&&(b=Q(b,/\f/g,"")),A>0&&Jt(b)-f&&po(A>32?rh(b+";",r,n,f-1,l):rh(Q(b," ","")+";",r,n,f-2,l),l);break;case 59:b+=";";default:if(po(j=nh(b,t,n,u,d,i,s,v,m=[],_=[],f,o),o),p===123)if(d===0)as(b,t,j,j,m,o,f,s,_);else switch(h===99&&Fe(b,3)===110?100:h){case 100:case 108:case 109:case 115:as(e,j,j,r&&po(nh(e,j,j,0,0,i,s,v,i,m=[],f,_),_),i,_,f,s,r?m:_);break;default:as(b,j,j,j,[""],_,0,s,_)}}u=d=A=0,x=g=1,v=b="",f=a;break;case 58:f=1+Jt(b),A=y;default:if(x<1){if(p==123)--x;else if(p==125&&x++==0&&CA()==125)continue}switch(b+=sf(p),p*x){case 38:g=d>0?1:(b+="\f",-1);break;case 44:s[u++]=(Jt(b)-1)*g,g=1;break;case 64:gr()===45&&(b+=_u(Kt())),h=gr(),d=f=Jt(v=b+=OA(os())),p++;break;case 45:y===45&&Jt(b)==2&&(x=0)}}return o}function nh(e,t,n,r,i,o,a,s,l,u,d,f){for(var h=i-1,A=i===0?o:[""],y=kv(A),x=0,R=0,g=0;x<r;++x)for(var p=0,v=xi(e,h+1,h=AA(R=a[x])),m=e;p<y;++p)(m=bv(R>0?A[p]+" "+v:Q(v,/&\f/g,A[p])))&&(l[g++]=m);return _l(e,t,n,i===0?Al:s,l,u,d,f)}function NA(e,t,n,r){return _l(e,t,n,Cv,sf(SA()),xi(e,2,-2),0,r)}function rh(e,t,n,r,i){return _l(e,t,n,af,xi(e,0,r),xi(e,r+1,-1),r,i)}function jv(e,t,n){switch(wA(e,t)){case 5103:return ne+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ne+e+e;case 4789:return So+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ne+e+So+e+fe+e+e;case 5936:switch(Fe(e,t+11)){case 114:return ne+e+fe+Q(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ne+e+fe+Q(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ne+e+fe+Q(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ne+e+fe+e+e;case 6165:return ne+e+fe+"flex-"+e+e;case 5187:return ne+e+Q(e,/(\w+).+(:[^]+)/,ne+"box-$1$2"+fe+"flex-$1$2")+e;case 5443:return ne+e+fe+"flex-item-"+Q(e,/flex-|-self/g,"")+(fn(e,/flex-|baseline/)?"":fe+"grid-row-"+Q(e,/flex-|-self/g,""))+e;case 4675:return ne+e+fe+"flex-line-pack"+Q(e,/align-content|flex-|-self/g,"")+e;case 5548:return ne+e+fe+Q(e,"shrink","negative")+e;case 5292:return ne+e+fe+Q(e,"basis","preferred-size")+e;case 6060:return ne+"box-"+Q(e,"-grow","")+ne+e+fe+Q(e,"grow","positive")+e;case 4554:return ne+Q(e,/([^-])(transform)/g,"$1"+ne+"$2")+e;case 6187:return Q(Q(Q(e,/(zoom-|grab)/,ne+"$1"),/(image-set)/,ne+"$1"),e,"")+e;case 5495:case 3959:return Q(e,/(image-set\([^]*)/,ne+"$1$`$1");case 4968:return Q(Q(e,/(.+:)(flex-)?(.*)/,ne+"box-pack:$3"+fe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ne+e+e;case 4200:if(!fn(e,/flex-|baseline/))return fe+"grid-column-align"+xi(e,t)+e;break;case 2592:case 3360:return fe+Q(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,fn(r.props,/grid-\w+-end/)})?~is(e+(n=n[t].value),"span")?e:fe+Q(e,"-start","")+e+fe+"grid-row-span:"+(~is(n,"span")?fn(n,/\d+/):+fn(n,/\d+/)-+fn(e,/\d+/))+";":fe+Q(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return fn(r.props,/grid-\w+-start/)})?e:fe+Q(Q(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Q(e,/(.+)-inline(.+)/,ne+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jt(e)-1-t>6)switch(Fe(e,t+1)){case 109:if(Fe(e,t+4)!==45)break;case 102:return Q(e,/(.+:)(.+)-([^]+)/,"$1"+ne+"$2-$3$1"+So+(Fe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~is(e,"stretch")?jv(Q(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Q(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,s,l,u){return fe+i+":"+o+u+(a?fe+i+"-span:"+(s?l:+l-+o)+u:"")+e});case 4949:if(Fe(e,t+6)===121)return Q(e,":",":"+ne)+e;break;case 6444:switch(Fe(e,Fe(e,14)===45?18:11)){case 120:return Q(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ne+(Fe(e,14)===45?"inline-":"")+"box$3$1"+ne+"$2$3$1"+fe+"$2box$3")+e;case 100:return Q(e,":",":"+fe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Q(e,"scroll-","scroll-snap-")+e}return e}function $s(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function TA(e,t,n,r){switch(e.type){case xA:if(e.children.length)break;case yA:case af:return e.return=e.return||e.value;case Cv:return"";case Ev:return e.return=e.value+"{"+$s(e.children,r)+"}";case Al:if(!Jt(e.value=e.props.join(",")))return""}return Jt(n=$s(e.children,r))?e.return=e.value+"{"+n+"}":""}function DA(e){var t=kv(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function LA(e){return function(t){t.root||(t=t.return)&&e(t)}}function FA(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case af:e.return=jv(e.value,e.length,n);return;case Ev:return $s([Dn(e,{value:Q(e.value,"@","@"+ne)})],r);case Al:if(e.length)return _A(n=e.props,function(i){switch(fn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Fr(Dn(e,{props:[Q(i,/:(read-\w+)/,":"+So+"$1")]})),Fr(Dn(e,{props:[i]})),Mc(e,{props:th(n,r)});break;case"::placeholder":Fr(Dn(e,{props:[Q(i,/:(plac\w+)/,":"+ne+"input-$1")]})),Fr(Dn(e,{props:[Q(i,/:(plac\w+)/,":"+So+"$1")]})),Fr(Dn(e,{props:[Q(i,/:(plac\w+)/,fe+"input-$1")]})),Fr(Dn(e,{props:[i]})),Mc(e,{props:th(n,r)});break}return""})}}var zA={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},wi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",lf=typeof window<"u"&&"HTMLElement"in window,IA=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Cl=Object.freeze([]),_i=Object.freeze({});function MA(e,t,n){return n===void 0&&(n=_i),e.theme!==n.theme&&e.theme||t||n.theme}var Ov=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),BA=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,KA=/(^-|-$)/g;function ih(e){return e.replace(BA,"-").replace(KA,"")}var $A=/(a)(d)/gi,oh=function(e){return String.fromCharCode(e+(e>25?39:97))};function $c(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=oh(t%52)+n;return(oh(t%52)+n).replace($A,"$1-$2")}var Su,Xr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Pv=function(e){return Xr(5381,e)};function UA(e){return $c(Pv(e)>>>0)}function VA(e){return e.displayName||e.name||"Component"}function Cu(e){return typeof e=="string"&&!0}var Nv=typeof Symbol=="function"&&Symbol.for,Tv=Nv?Symbol.for("react.memo"):60115,HA=Nv?Symbol.for("react.forward_ref"):60112,WA={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},QA={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Dv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},GA=((Su={})[HA]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Su[Tv]=Dv,Su);function ah(e){return("type"in(t=e)&&t.type.$$typeof)===Tv?Dv:"$$typeof"in e?GA[e.$$typeof]:WA;var t}var qA=Object.defineProperty,YA=Object.getOwnPropertyNames,sh=Object.getOwnPropertySymbols,JA=Object.getOwnPropertyDescriptor,XA=Object.getPrototypeOf,lh=Object.prototype;function Lv(e,t,n){if(typeof t!="string"){if(lh){var r=XA(t);r&&r!==lh&&Lv(e,r,n)}var i=YA(t);sh&&(i=i.concat(sh(t)));for(var o=ah(e),a=ah(t),s=0;s<i.length;++s){var l=i[s];if(!(l in QA||n&&n[l]||a&&l in a||o&&l in o)){var u=JA(t,l);try{qA(e,l,u)}catch{}}}}return e}function Sr(e){return typeof e=="function"}function uf(e){return typeof e=="object"&&"styledComponentId"in e}function fr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function uh(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Vo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Uc(e,t,n){if(n===void 0&&(n=!1),!n&&!Vo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Uc(e[r],t[r]);else if(Vo(t))for(var r in t)e[r]=Uc(e[r],t[r]);return e}function cf(e,t){Object.defineProperty(e,"toString",{value:t})}function Cr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ZA=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Cr(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),l=(a=0,n.length);a<l;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return n},e}(),ss=new Map,Us=new Map,Eu=1,Ma=function(e){if(ss.has(e))return ss.get(e);for(;Us.has(Eu);)Eu++;var t=Eu++;return ss.set(e,t),Us.set(t,e),t},ew=function(e,t){ss.set(e,t),Us.set(t,e)},tw="style[".concat(wi,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),nw=new RegExp("^".concat(wi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),rw=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},iw=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(nw);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(ew(d,u),rw(e,d,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}};function ow(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Fv=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var l=Array.from(s.querySelectorAll("style[".concat(wi,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(wi,"active"),r.setAttribute("data-styled-version","6.0.7");var a=ow();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},aw=function(){function e(t){this.element=Fv(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw Cr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),sw=function(){function e(t){this.element=Fv(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),lw=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),ch=lf,uw={isServer:!lf,useCSSOMInjection:!IA},zv=function(){function e(t,n,r){t===void 0&&(t=_i),n===void 0&&(n={});var i=this;this.options=qe(qe({},uw),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&lf&&ch&&(ch=!1,function(o){for(var a=document.querySelectorAll(tw),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute(wi)!=="active"&&(iw(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),cf(this,function(){return function(o){for(var a=o.getTag(),s=a.length,l="",u=function(f){var h=function(g){return Us.get(g)}(f);if(h===void 0)return"continue";var A=o.names.get(h),y=a.getGroup(f);if(A===void 0||y.length===0)return"continue";var x="".concat(wi,".g").concat(f,'[id="').concat(h,'"]'),R="";A!==void 0&&A.forEach(function(g){g.length>0&&(R+="".concat(g,","))}),l+="".concat(y).concat(x,'{content:"').concat(R,'"}').concat(`/*!sc*/
`)},d=0;d<s;d++)u(d);return l}(i)})}return e.registerId=function(t){return Ma(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(qe(qe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new lw(i):r?new aw(i):new sw(i)}(this.options),new ZA(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ma(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ma(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ma(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),cw=/&/g,dw=/^\s*\/\/.*$/gm;function Iv(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Iv(n.children,t)),n})}function fw(e){var t,n,r,i=e===void 0?_i:e,o=i.options,a=o===void 0?_i:o,s=i.plugins,l=s===void 0?Cl:s,u=function(h,A,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):h},d=l.slice();d.push(function(h){h.type===Al&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(cw,n).replace(r,u))}),a.prefix&&d.push(FA),d.push(TA);var f=function(h,A,y,x){A===void 0&&(A=""),y===void 0&&(y=""),x===void 0&&(x="&"),t=x,n=A,r=new RegExp("\\".concat(n,"\\b"),"g");var R=h.replace(dw,""),g=PA(y||A?"".concat(y," ").concat(A," { ").concat(R," }"):R);a.namespace&&(g=Iv(g,a.namespace));var p=[];return $s(g,DA(d.concat(LA(function(v){return p.push(v)})))),p};return f.hash=l.length?l.reduce(function(h,A){return A.name||Cr(15),Xr(h,A.name)},5381).toString():"",f}var pw=new zv,Vc=fw(),Mv=It.createContext({shouldForwardProp:void 0,styleSheet:pw,stylis:Vc});Mv.Consumer;It.createContext(void 0);function dh(){return S.useContext(Mv)}var hw=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Vc);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,cf(this,function(){throw Cr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Vc),this.name+t.hash},e}(),mw=function(e){return e>="A"&&e<="Z"};function fh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;mw(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Bv=function(e){return e==null||e===!1||e===""},Kv=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Bv(o)&&(Array.isArray(o)&&o.isCss||Sr(o)?r.push("".concat(fh(i),":"),o,";"):Vo(o)?r.push.apply(r,Ks(Ks(["".concat(i," {")],Kv(o),!1),["}"],!1)):r.push("".concat(fh(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in zA||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function vr(e,t,n,r){if(Bv(e))return[];if(uf(e))return[".".concat(e.styledComponentId)];if(Sr(e)){if(!Sr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return vr(i,t,n,r)}var o;return e instanceof hw?n?(e.inject(n,r),[e.getName(r)]):[e]:Vo(e)?Kv(e):Array.isArray(e)?Array.prototype.concat.apply(Cl,e.map(function(a){return vr(a,t,n,r)})):[e.toString()]}function gw(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Sr(n)&&!uf(n))return!1}return!0}var vw=Pv("6.0.7"),yw=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&gw(t),this.componentId=n,this.baseHash=Xr(vw,n),this.baseStyle=r,zv.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=fr(i,this.staticRulesId);else{var o=uh(vr(this.rules,t,n,r)),a=$c(Xr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}i=fr(i,a),this.staticRulesId=a}else{for(var l=Xr(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var h=uh(vr(f,t,n,r));l=Xr(l,h),u+=h}}if(u){var A=$c(l>>>0);n.hasNameForId(this.componentId,A)||n.insertRules(this.componentId,A,r(u,".".concat(A),void 0,this.componentId)),i=fr(i,A)}}return i},e}(),Vs=It.createContext(void 0);Vs.Consumer;function xw(e){var t=It.useContext(Vs),n=S.useMemo(function(){return function(r,i){if(!r)throw Cr(14);if(Sr(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Cr(8);return i?qe(qe({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?It.createElement(Vs.Provider,{value:n},e.children):null}var bu={};function Aw(e,t,n){var r=uf(e),i=e,o=!Cu(e),a=t.attrs,s=a===void 0?Cl:a,l=t.componentId,u=l===void 0?function(v,m){var _=typeof v!="string"?"sc":ih(v);bu[_]=(bu[_]||0)+1;var j="".concat(_,"-").concat(UA("6.0.7"+_+bu[_]));return m?"".concat(m,"-").concat(j):j}(t.displayName,t.parentComponentId):l,d=t.displayName;d===void 0&&function(v){return Cu(v)?"styled.".concat(v):"Styled(".concat(VA(v),")")}(e);var f=t.displayName&&t.componentId?"".concat(ih(t.displayName),"-").concat(t.componentId):t.componentId||u,h=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,A=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;A=function(v,m){return y(v,m)&&x(v,m)}}else A=y}var R=new yw(n,f,r?i.componentStyle:void 0);function g(v,m){return function(_,j,b){var D=_.attrs,G=_.componentStyle,K=_.defaultProps,Ce=_.foldedComponentIds,oe=_.styledComponentId,vt=_.target,Wt=It.useContext(Vs),Qt=dh(),Ie=_.shouldForwardProp||Qt.shouldForwardProp,je=function(Ot,X,tt){for(var Ve,nt=qe(qe({},X),{className:void 0,theme:tt}),yt=0;yt<Ot.length;yt+=1){var Dr=Sr(Ve=Ot[yt])?Ve(nt):Ve;for(var Gt in Dr)nt[Gt]=Gt==="className"?fr(nt[Gt],Dr[Gt]):Gt==="style"?qe(qe({},nt[Gt]),Dr[Gt]):Dr[Gt]}return X.className&&(nt.className=fr(nt.className,X.className)),nt}(D,j,MA(j,Wt,K)||_i),T=je.as||vt,I={};for(var M in je)je[M]===void 0||M[0]==="$"||M==="as"||M==="theme"||(M==="forwardedAs"?I.as=je.forwardedAs:Ie&&!Ie(M,T)||(I[M]=je[M]));var ue=function(Ot,X){var tt=dh(),Ve=Ot.generateAndInjectStyles(X,tt.styleSheet,tt.stylis);return Ve}(G,je),he=fr(Ce,oe);return ue&&(he+=" "+ue),je.className&&(he+=" "+je.className),I[Cu(T)&&!Ov.has(T)?"class":"className"]=he,I.ref=b,S.createElement(T,I)}(p,v,m)}var p=It.forwardRef(g);return p.attrs=h,p.componentStyle=R,p.shouldForwardProp=A,p.foldedComponentIds=r?fr(i.foldedComponentIds,i.styledComponentId):"",p.styledComponentId=f,p.target=r?i.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(m){for(var _=[],j=1;j<arguments.length;j++)_[j-1]=arguments[j];for(var b=0,D=_;b<D.length;b++)Uc(m,D[b],!0);return m}({},i.defaultProps,v):v}}),cf(p,function(){return".".concat(p.styledComponentId)}),o&&Lv(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function ph(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var hh=function(e){return Object.assign(e,{isCss:!0})};function ww(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Sr(e)||Vo(e)){var r=e;return hh(vr(ph(Cl,Ks([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?vr(i):hh(vr(ph(i,t)))}function Hc(e,t,n){if(n===void 0&&(n=_i),!t)throw Cr(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,ww.apply(void 0,Ks([i],o,!1)))};return r.attrs=function(i){return Hc(e,t,qe(qe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Hc(e,t,qe(qe({},n),i))},r}var $v=function(e){return Hc(Aw,e)},E=$v;Ov.forEach(function(e){E[e]=$v(e)});const _w={borderRadius:"5px",colors:{primary:"#F6F7FC",primaryDark:"#E4E6EE",secondary:"#195CDF",secondaryLight:"#EFF4FF",secondaryDark:"#CBD5E9",background:"#FFFFFF",text:"#000000",textGrayDark:"#515151",textGray:"#868686",textGrayLight:"#6D6D6D",textWhite:"#FFFFFF"}};/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function me(){return me=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},me.apply(this,arguments)}var Ee;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ee||(Ee={}));const mh="popstate";function Sw(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return Ho("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Er(i)}return Ew(t,n,null,e)}function W(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Si(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Cw(){return Math.random().toString(36).substr(2,8)}function gh(e,t){return{usr:e.state,key:e.key,idx:t}}function Ho(e,t,n,r){return n===void 0&&(n=null),me({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?kn(t):t,{state:n,key:t&&t.key||r||Cw()})}function Er(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function kn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ew(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=Ee.Pop,l=null,u=d();u==null&&(u=0,a.replaceState(me({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function f(){s=Ee.Pop;let R=d(),g=R==null?null:R-u;u=R,l&&l({action:s,location:x.location,delta:g})}function h(R,g){s=Ee.Push;let p=Ho(x.location,R,g);n&&n(p,R),u=d()+1;let v=gh(p,u),m=x.createHref(p);try{a.pushState(v,"",m)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;i.location.assign(m)}o&&l&&l({action:s,location:x.location,delta:1})}function A(R,g){s=Ee.Replace;let p=Ho(x.location,R,g);n&&n(p,R),u=d();let v=gh(p,u),m=x.createHref(p);a.replaceState(v,"",m),o&&l&&l({action:s,location:x.location,delta:0})}function y(R){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof R=="string"?R:Er(R);return W(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let x={get action(){return s},get location(){return e(i,a)},listen(R){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(mh,f),l=R,()=>{i.removeEventListener(mh,f),l=null}},createHref(R){return t(i,R)},createURL:y,encodeLocation(R){let g=y(R);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:A,go(R){return a.go(R)}};return x}var _e;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(_e||(_e={}));const bw=new Set(["lazy","caseSensitive","path","id","index","children"]);function kw(e){return e.index===!0}function Wc(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,o)=>{let a=[...n,o],s=typeof i.id=="string"?i.id:a.join("-");if(W(i.index!==!0||!i.children,"Cannot specify children on an index route"),W(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),kw(i)){let l=me({},i,t(i),{id:s});return r[s]=l,l}else{let l=me({},i,t(i),{id:s,children:void 0});return r[s]=l,i.children&&(l.children=Wc(i.children,t,a,r)),l}})}function Zr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?kn(t):t,i=zi(r.pathname||"/",n);if(i==null)return null;let o=Uv(e);Rw(o);let a=null;for(let s=0;a==null&&s<o.length;++s)a=zw(o[s],Bw(i));return a}function Uv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(W(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=yn([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(W(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Uv(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Lw(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of Vv(o.path))i(o,a,l)}),t}function Vv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Vv(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function Rw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Fw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const jw=/^:\w+$/,Ow=3,Pw=2,Nw=1,Tw=10,Dw=-2,vh=e=>e==="*";function Lw(e,t){let n=e.split("/"),r=n.length;return n.some(vh)&&(r+=Dw),t&&(r+=Pw),n.filter(i=>!vh(i)).reduce((i,o)=>i+(jw.test(o)?Ow:o===""?Nw:Tw),r)}function Fw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function zw(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=Iw({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let f=s.route;o.push({params:r,pathname:yn([i,d.pathname]),pathnameBase:Vw(yn([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=yn([i,d.pathnameBase]))}return o}function Iw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Mw(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,d,f)=>{if(d==="*"){let h=s[f]||"";a=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return u[d]=Kw(s[f]||"",d),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Mw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Si(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Bw(e){try{return decodeURI(e)}catch(t){return Si(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Kw(e,t){try{return decodeURIComponent(e)}catch(n){return Si(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function zi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function $w(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?kn(e):e;return{pathname:n?n.startsWith("/")?n:Uw(n,t):t,search:Hw(r),hash:Ww(i)}}function Uw(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ku(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ra(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function El(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=kn(e):(i=me({},e),W(!i.pathname||!i.pathname.includes("?"),ku("?","pathname","search",i)),W(!i.pathname||!i.pathname.includes("#"),ku("#","pathname","hash",i)),W(!i.search||!i.search.includes("#"),ku("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(r||a==null)s=n;else{let f=t.length-1;if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}s=f>=0?t[f]:"/"}let l=$w(i,s),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const yn=e=>e.join("/").replace(/\/\/+/g,"/"),Vw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Hw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ww=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class df{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Hv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Wv=["post","put","patch","delete"],Qw=new Set(Wv),Gw=["get",...Wv],qw=new Set(Gw),Yw=new Set([301,302,303,307,308]),Jw=new Set([307,308]),Ru={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Xw={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ro={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Qv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zw=e=>({hasErrorBoundary:!!e.hasErrorBoundary});function e_(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;W(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let w=e.detectErrorBoundary;i=C=>({hasErrorBoundary:w(C)})}else i=Zw;let o={},a=Wc(e.routes,i,void 0,o),s,l=e.basename||"/",u=me({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),d=null,f=new Set,h=null,A=null,y=null,x=e.hydrationData!=null,R=Zr(a,e.history.location,l),g=null;if(R==null){let w=xt(404,{pathname:e.history.location.pathname}),{matches:C,route:O}=Eh(a);R=C,g={[O.id]:w}}let p=!R.some(w=>w.route.lazy)&&(!R.some(w=>w.route.loader)||e.hydrationData!=null),v,m={historyAction:e.history.action,location:e.history.location,matches:R,initialized:p,navigation:Ru,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||g,fetchers:new Map,blockers:new Map},_=Ee.Pop,j=!1,b,D=!1,G=!1,K=[],Ce=[],oe=new Map,vt=0,Wt=-1,Qt=new Map,Ie=new Set,je=new Map,T=new Map,I=new Map,M=!1;function ue(){return d=e.history.listen(w=>{let{action:C,location:O,delta:F}=w;if(M){M=!1;return}Si(I.size===0||F!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let H=$f({currentLocation:m.location,nextLocation:O,historyAction:C});if(H&&F!=null){M=!0,e.history.go(F*-1),Aa(H,{state:"blocked",location:O,proceed(){Aa(H,{state:"proceeding",proceed:void 0,reset:void 0,location:O}),e.history.go(F)},reset(){let $=new Map(m.blockers);$.set(H,ro),X({blockers:$})}});return}return yt(C,O)}),m.initialized||yt(Ee.Pop,m.location),v}function he(){d&&d(),f.clear(),b&&b.abort(),m.fetchers.forEach((w,C)=>Ul(C)),m.blockers.forEach((w,C)=>Kf(C))}function Ot(w){return f.add(w),()=>f.delete(w)}function X(w){m=me({},m,w),f.forEach(C=>C(m))}function tt(w,C){var O,F;let H=m.actionData!=null&&m.navigation.formMethod!=null&&Lt(m.navigation.formMethod)&&m.navigation.state==="loading"&&((O=w.state)==null?void 0:O._isRedirect)!==!0,$;C.actionData?Object.keys(C.actionData).length>0?$=C.actionData:$=null:H?$=m.actionData:$=null;let U=C.loaderData?Ch(m.loaderData,C.loaderData,C.matches||[],C.errors):m.loaderData,B=m.blockers;B.size>0&&(B=new Map(B),B.forEach((le,Me)=>B.set(Me,ro)));let z=j===!0||m.navigation.formMethod!=null&&Lt(m.navigation.formMethod)&&((F=w.state)==null?void 0:F._isRedirect)!==!0;s&&(a=s,s=void 0),D||_===Ee.Pop||(_===Ee.Push?e.history.push(w,w.state):_===Ee.Replace&&e.history.replace(w,w.state)),X(me({},C,{actionData:$,loaderData:U,historyAction:_,location:w,initialized:!0,navigation:Ru,revalidation:"idle",restoreScrollPosition:Vf(w,C.matches||m.matches),preventScrollReset:z,blockers:B})),_=Ee.Pop,j=!1,D=!1,G=!1,K=[],Ce=[]}async function Ve(w,C){if(typeof w=="number"){e.history.go(w);return}let O=Qc(m.location,m.matches,l,u.v7_prependBasename,w,C==null?void 0:C.fromRouteId,C==null?void 0:C.relative),{path:F,submission:H,error:$}=yh(u.v7_normalizeFormMethod,!1,O,C),U=m.location,B=Ho(m.location,F,C&&C.state);B=me({},B,e.history.encodeLocation(B));let z=C&&C.replace!=null?C.replace:void 0,le=Ee.Push;z===!0?le=Ee.Replace:z===!1||H!=null&&Lt(H.formMethod)&&H.formAction===m.location.pathname+m.location.search&&(le=Ee.Replace);let Me=C&&"preventScrollReset"in C?C.preventScrollReset===!0:void 0,ae=$f({currentLocation:U,nextLocation:B,historyAction:le});if(ae){Aa(ae,{state:"blocked",location:B,proceed(){Aa(ae,{state:"proceeding",proceed:void 0,reset:void 0,location:B}),Ve(w,C)},reset(){let we=new Map(m.blockers);we.set(ae,ro),X({blockers:we})}});return}return await yt(le,B,{submission:H,pendingError:$,preventScrollReset:Me,replace:C&&C.replace})}function nt(){if($l(),X({revalidation:"loading"}),m.navigation.state!=="submitting"){if(m.navigation.state==="idle"){yt(m.historyAction,m.location,{startUninterruptedRevalidation:!0});return}yt(_||m.historyAction,m.navigation.location,{overrideNavigation:m.navigation})}}async function yt(w,C,O){b&&b.abort(),b=null,_=w,D=(O&&O.startUninterruptedRevalidation)===!0,B0(m.location,m.matches),j=(O&&O.preventScrollReset)===!0;let F=s||a,H=O&&O.overrideNavigation,$=Zr(F,C,l);if(!$){let we=xt(404,{pathname:C.pathname}),{matches:De,route:rr}=Eh(F);Vl(),tt(C,{matches:De,loaderData:{},errors:{[rr.id]:we}});return}if(m.initialized&&!G&&o_(m.location,C)&&!(O&&O.submission&&Lt(O.submission.formMethod))){tt(C,{matches:$});return}b=new AbortController;let U=oo(e.history,C,b.signal,O&&O.submission),B,z;if(O&&O.pendingError)z={[ei($).route.id]:O.pendingError};else if(O&&O.submission&&Lt(O.submission.formMethod)){let we=await Dr(U,C,O.submission,$,{replace:O.replace});if(we.shortCircuited)return;B=we.pendingActionData,z=we.pendingActionError,H=Ba(C,O.submission),U=new Request(U.url,{signal:U.signal})}let{shortCircuited:le,loaderData:Me,errors:ae}=await Gt(U,C,$,H,O&&O.submission,O&&O.fetcherSubmission,O&&O.replace,B,z);le||(b=null,tt(C,me({matches:$},B?{actionData:B}:{},{loaderData:Me,errors:ae})))}async function Dr(w,C,O,F,H){H===void 0&&(H={}),$l();let $=c_(C,O);X({navigation:$});let U,B=qc(F,C);if(!B.route.action&&!B.route.lazy)U={type:_e.error,error:xt(405,{method:w.method,pathname:C.pathname,routeId:B.route.id})};else if(U=await io("action",w,B,F,o,i,l),w.signal.aborted)return{shortCircuited:!0};if(ci(U)){let z;return H&&H.replace!=null?z=H.replace:z=U.location===m.location.pathname+m.location.search,await Wi(m,U,{submission:O,replace:z}),{shortCircuited:!0}}if(Co(U)){let z=ei(F,B.route.id);return(H&&H.replace)!==!0&&(_=Ee.Push),{pendingActionData:{},pendingActionError:{[z.route.id]:U.error}}}if(pr(U))throw xt(400,{type:"defer-action"});return{pendingActionData:{[B.route.id]:U.data}}}async function Gt(w,C,O,F,H,$,U,B,z){let le=F||Ba(C,H),Me=H||$||Rh(le),ae=s||a,[we,De]=xh(e.history,m,O,Me,C,G,K,Ce,je,Ie,ae,l,B,z);if(Vl(se=>!(O&&O.some(Pt=>Pt.route.id===se))||we&&we.some(Pt=>Pt.route.id===se)),Wt=++vt,we.length===0&&De.length===0){let se=Mf();return tt(C,me({matches:O,loaderData:{},errors:z||null},B?{actionData:B}:{},se?{fetchers:new Map(m.fetchers)}:{})),{shortCircuited:!0}}if(!D){De.forEach(Pt=>{let On=m.fetchers.get(Pt.key),ql=ao(void 0,On?On.data:void 0);m.fetchers.set(Pt.key,ql)});let se=B||m.actionData;X(me({navigation:le},se?Object.keys(se).length===0?{actionData:null}:{actionData:se}:{},De.length>0?{fetchers:new Map(m.fetchers)}:{}))}De.forEach(se=>{oe.has(se.key)&&jn(se.key),se.controller&&oe.set(se.key,se.controller)});let rr=()=>De.forEach(se=>jn(se.key));b&&b.signal.addEventListener("abort",rr);let{results:ir,loaderResults:Qi,fetcherResults:Hl}=await zf(m.matches,O,we,De,w);if(w.signal.aborted)return{shortCircuited:!0};b&&b.signal.removeEventListener("abort",rr),De.forEach(se=>oe.delete(se.key));let un=bh(ir);if(un){if(un.idx>=we.length){let se=De[un.idx-we.length].key;Ie.add(se)}return await Wi(m,un.result,{replace:U}),{shortCircuited:!0}}let{loaderData:cn,errors:wa}=Sh(m,O,we,Qi,z,De,Hl,T);T.forEach((se,Pt)=>{se.subscribe(On=>{(On||se.done)&&T.delete(Pt)})});let Wl=Mf(),Ql=Bf(Wt),Gl=Wl||Ql||De.length>0;return me({loaderData:cn,errors:wa},Gl?{fetchers:new Map(m.fetchers)}:{})}function Ff(w){return m.fetchers.get(w)||Xw}function L0(w,C,O,F){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");oe.has(w)&&jn(w);let H=s||a,$=Qc(m.location,m.matches,l,u.v7_prependBasename,O,C,F==null?void 0:F.relative),U=Zr(H,$,l);if(!U){xa(w,C,xt(404,{pathname:$}));return}let{path:B,submission:z,error:le}=yh(u.v7_normalizeFormMethod,!0,$,F);if(le){xa(w,C,le);return}let Me=qc(U,B);if(j=(F&&F.preventScrollReset)===!0,z&&Lt(z.formMethod)){F0(w,C,B,Me,U,z);return}je.set(w,{routeId:C,path:B}),z0(w,C,B,Me,U,z)}async function F0(w,C,O,F,H,$){if($l(),je.delete(w),!F.route.action&&!F.route.lazy){let Oe=xt(405,{method:$.formMethod,pathname:O,routeId:C});xa(w,C,Oe);return}let U=m.fetchers.get(w),B=d_($,U);m.fetchers.set(w,B),X({fetchers:new Map(m.fetchers)});let z=new AbortController,le=oo(e.history,O,z.signal,$);oe.set(w,z);let Me=vt,ae=await io("action",le,F,H,o,i,l);if(le.signal.aborted){oe.get(w)===z&&oe.delete(w);return}if(ci(ae))if(oe.delete(w),Wt>Me){let Oe=Mr(void 0);m.fetchers.set(w,Oe),X({fetchers:new Map(m.fetchers)});return}else{Ie.add(w);let Oe=ao($);return m.fetchers.set(w,Oe),X({fetchers:new Map(m.fetchers)}),Wi(m,ae,{submission:$,isFetchActionRedirect:!0})}if(Co(ae)){xa(w,C,ae.error);return}if(pr(ae))throw xt(400,{type:"defer-action"});let we=m.navigation.location||m.location,De=oo(e.history,we,z.signal),rr=s||a,ir=m.navigation.state!=="idle"?Zr(rr,m.navigation.location,l):m.matches;W(ir,"Didn't find any matches after fetcher action");let Qi=++vt;Qt.set(w,Qi);let Hl=ao($,ae.data);m.fetchers.set(w,Hl);let[un,cn]=xh(e.history,m,ir,$,we,G,K,Ce,je,Ie,rr,l,{[F.route.id]:ae.data},void 0);cn.filter(Oe=>Oe.key!==w).forEach(Oe=>{let Gi=Oe.key,Hf=m.fetchers.get(Gi),$0=ao(void 0,Hf?Hf.data:void 0);m.fetchers.set(Gi,$0),oe.has(Gi)&&jn(Gi),Oe.controller&&oe.set(Gi,Oe.controller)}),X({fetchers:new Map(m.fetchers)});let wa=()=>cn.forEach(Oe=>jn(Oe.key));z.signal.addEventListener("abort",wa);let{results:Wl,loaderResults:Ql,fetcherResults:Gl}=await zf(m.matches,ir,un,cn,De);if(z.signal.aborted)return;z.signal.removeEventListener("abort",wa),Qt.delete(w),oe.delete(w),cn.forEach(Oe=>oe.delete(Oe.key));let se=bh(Wl);if(se){if(se.idx>=un.length){let Oe=cn[se.idx-un.length].key;Ie.add(Oe)}return Wi(m,se.result)}let{loaderData:Pt,errors:On}=Sh(m,m.matches,un,Ql,void 0,cn,Gl,T);if(m.fetchers.has(w)){let Oe=Mr(ae.data);m.fetchers.set(w,Oe)}let ql=Bf(Qi);m.navigation.state==="loading"&&Qi>Wt?(W(_,"Expected pending action"),b&&b.abort(),tt(m.navigation.location,{matches:ir,loaderData:Pt,errors:On,fetchers:new Map(m.fetchers)})):(X(me({errors:On,loaderData:Ch(m.loaderData,Pt,ir,On)},ql||cn.length>0?{fetchers:new Map(m.fetchers)}:{})),G=!1)}async function z0(w,C,O,F,H,$){let U=m.fetchers.get(w),B=ao($,U?U.data:void 0);m.fetchers.set(w,B),X({fetchers:new Map(m.fetchers)});let z=new AbortController,le=oo(e.history,O,z.signal);oe.set(w,z);let Me=vt,ae=await io("loader",le,F,H,o,i,l);if(pr(ae)&&(ae=await Yv(ae,le.signal,!0)||ae),oe.get(w)===z&&oe.delete(w),le.signal.aborted)return;if(ci(ae))if(Wt>Me){let De=Mr(void 0);m.fetchers.set(w,De),X({fetchers:new Map(m.fetchers)});return}else{Ie.add(w),await Wi(m,ae);return}if(Co(ae)){let De=ei(m.matches,C);m.fetchers.delete(w),X({fetchers:new Map(m.fetchers),errors:{[De.route.id]:ae.error}});return}W(!pr(ae),"Unhandled fetcher deferred data");let we=Mr(ae.data);m.fetchers.set(w,we),X({fetchers:new Map(m.fetchers)})}async function Wi(w,C,O){let{submission:F,replace:H,isFetchActionRedirect:$}=O===void 0?{}:O;C.revalidate&&(G=!0);let U=Ho(w.location,C.location,me({_isRedirect:!0},$?{_isFetchActionRedirect:!0}:{}));if(W(U,"Expected a location on the redirect navigation"),n){let le=!1;if(C.reloadDocument)le=!0;else if(Qv.test(C.location)){const Me=e.history.createURL(C.location);le=Me.origin!==t.location.origin||zi(Me.pathname,l)==null}if(le){H?t.location.replace(C.location):t.location.assign(C.location);return}}b=null;let B=H===!0?Ee.Replace:Ee.Push,z=F||Rh(w.navigation);if(Jw.has(C.status)&&z&&Lt(z.formMethod))await yt(B,U,{submission:me({},z,{formAction:C.location}),preventScrollReset:j});else if($)await yt(B,U,{overrideNavigation:Ba(U),fetcherSubmission:z,preventScrollReset:j});else{let le=Ba(U,z);await yt(B,U,{overrideNavigation:le,preventScrollReset:j})}}async function zf(w,C,O,F,H){let $=await Promise.all([...O.map(z=>io("loader",H,z,C,o,i,l)),...F.map(z=>z.matches&&z.match&&z.controller?io("loader",oo(e.history,z.path,z.controller.signal),z.match,z.matches,o,i,l):{type:_e.error,error:xt(404,{pathname:z.path})})]),U=$.slice(0,O.length),B=$.slice(O.length);return await Promise.all([kh(w,O,U,U.map(()=>H.signal),!1,m.loaderData),kh(w,F.map(z=>z.match),B,F.map(z=>z.controller?z.controller.signal:null),!0)]),{results:$,loaderResults:U,fetcherResults:B}}function $l(){G=!0,K.push(...Vl()),je.forEach((w,C)=>{oe.has(C)&&(Ce.push(C),jn(C))})}function xa(w,C,O){let F=ei(m.matches,C);Ul(w),X({errors:{[F.route.id]:O},fetchers:new Map(m.fetchers)})}function Ul(w){let C=m.fetchers.get(w);oe.has(w)&&!(C&&C.state==="loading"&&Qt.has(w))&&jn(w),je.delete(w),Qt.delete(w),Ie.delete(w),m.fetchers.delete(w)}function jn(w){let C=oe.get(w);W(C,"Expected fetch controller: "+w),C.abort(),oe.delete(w)}function If(w){for(let C of w){let O=Ff(C),F=Mr(O.data);m.fetchers.set(C,F)}}function Mf(){let w=[],C=!1;for(let O of Ie){let F=m.fetchers.get(O);W(F,"Expected fetcher: "+O),F.state==="loading"&&(Ie.delete(O),w.push(O),C=!0)}return If(w),C}function Bf(w){let C=[];for(let[O,F]of Qt)if(F<w){let H=m.fetchers.get(O);W(H,"Expected fetcher: "+O),H.state==="loading"&&(jn(O),Qt.delete(O),C.push(O))}return If(C),C.length>0}function I0(w,C){let O=m.blockers.get(w)||ro;return I.get(w)!==C&&I.set(w,C),O}function Kf(w){m.blockers.delete(w),I.delete(w)}function Aa(w,C){let O=m.blockers.get(w)||ro;W(O.state==="unblocked"&&C.state==="blocked"||O.state==="blocked"&&C.state==="blocked"||O.state==="blocked"&&C.state==="proceeding"||O.state==="blocked"&&C.state==="unblocked"||O.state==="proceeding"&&C.state==="unblocked","Invalid blocker state transition: "+O.state+" -> "+C.state);let F=new Map(m.blockers);F.set(w,C),X({blockers:F})}function $f(w){let{currentLocation:C,nextLocation:O,historyAction:F}=w;if(I.size===0)return;I.size>1&&Si(!1,"A router only supports one blocker at a time");let H=Array.from(I.entries()),[$,U]=H[H.length-1],B=m.blockers.get($);if(!(B&&B.state==="proceeding")&&U({currentLocation:C,nextLocation:O,historyAction:F}))return $}function Vl(w){let C=[];return T.forEach((O,F)=>{(!w||w(F))&&(O.cancel(),C.push(F),T.delete(F))}),C}function M0(w,C,O){if(h=w,y=C,A=O||null,!x&&m.navigation===Ru){x=!0;let F=Vf(m.location,m.matches);F!=null&&X({restoreScrollPosition:F})}return()=>{h=null,y=null,A=null}}function Uf(w,C){return A&&A(w,C.map(F=>u_(F,m.loaderData)))||w.key}function B0(w,C){if(h&&y){let O=Uf(w,C);h[O]=y()}}function Vf(w,C){if(h){let O=Uf(w,C),F=h[O];if(typeof F=="number")return F}return null}function K0(w){o={},s=Wc(w,i,void 0,o)}return v={get basename(){return l},get state(){return m},get routes(){return a},initialize:ue,subscribe:Ot,enableScrollRestoration:M0,navigate:Ve,fetch:L0,revalidate:nt,createHref:w=>e.history.createHref(w),encodeLocation:w=>e.history.encodeLocation(w),getFetcher:Ff,deleteFetcher:Ul,dispose:he,getBlocker:I0,deleteBlocker:Kf,_internalFetchControllers:oe,_internalActiveDeferreds:T,_internalSetRoutes:K0},v}function t_(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Qc(e,t,n,r,i,o,a){let s,l;if(o!=null&&a!=="path"){s=[];for(let d of t)if(s.push(d),d.route.id===o){l=d;break}}else s=t,l=t[t.length-1];let u=El(i||".",ra(s).map(d=>d.pathnameBase),zi(e.pathname,n)||e.pathname,a==="path");return i==null&&(u.search=e.search,u.hash=e.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!ff(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:yn([n,u.pathname])),Er(u)}function yh(e,t,n,r){if(!r||!t_(r))return{path:n};if(r.formMethod&&!l_(r.formMethod))return{path:n,error:xt(405,{method:r.formMethod})};let i=()=>({path:n,error:xt(400,{type:"invalid-body"})}),o=r.formMethod||"get",a=e?o.toUpperCase():o.toLowerCase(),s=qv(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Lt(a))return i();let h=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((A,y)=>{let[x,R]=y;return""+A+x+"="+R+`
`},""):String(r.body);return{path:n,submission:{formMethod:a,formAction:s,formEncType:r.formEncType,formData:void 0,json:void 0,text:h}}}else if(r.formEncType==="application/json"){if(!Lt(a))return i();try{let h=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:a,formAction:s,formEncType:r.formEncType,formData:void 0,json:h,text:void 0}}}catch{return i()}}}W(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=Gc(r.formData),u=r.formData;else if(r.body instanceof FormData)l=Gc(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=_h(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=_h(l)}catch{return i()}let d={formMethod:a,formAction:s,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Lt(d.formMethod))return{path:n,submission:d};let f=kn(n);return t&&f.search&&ff(f.search)&&l.append("index",""),f.search="?"+l,{path:Er(f),submission:d}}function n_(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function xh(e,t,n,r,i,o,a,s,l,u,d,f,h,A){let y=A?Object.values(A)[0]:h?Object.values(h)[0]:void 0,x=e.createURL(t.location),R=e.createURL(i),g=A?Object.keys(A)[0]:void 0,v=n_(n,g).filter((_,j)=>{if(_.route.lazy)return!0;if(_.route.loader==null)return!1;if(r_(t.loaderData,t.matches[j],_)||a.some(G=>G===_.route.id))return!0;let b=t.matches[j],D=_;return Ah(_,me({currentUrl:x,currentParams:b.params,nextUrl:R,nextParams:D.params},r,{actionResult:y,defaultShouldRevalidate:o||x.pathname+x.search===R.pathname+R.search||x.search!==R.search||Gv(b,D)}))}),m=[];return l.forEach((_,j)=>{if(!n.some(Ce=>Ce.route.id===_.routeId))return;let b=Zr(d,_.path,f);if(!b){m.push({key:j,routeId:_.routeId,path:_.path,matches:null,match:null,controller:null});return}let D=t.fetchers.get(j),G=qc(b,_.path),K=!1;u.has(j)?K=!1:s.includes(j)?K=!0:D&&D.state!=="idle"&&D.data===void 0?K=o:K=Ah(G,me({currentUrl:x,currentParams:t.matches[t.matches.length-1].params,nextUrl:R,nextParams:n[n.length-1].params},r,{actionResult:y,defaultShouldRevalidate:o})),K&&m.push({key:j,routeId:_.routeId,path:_.path,matches:b,match:G,controller:new AbortController})}),[v,m]}function r_(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function Gv(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Ah(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function wh(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];W(i,"No route found in manifest");let o={};for(let a in r){let l=i[a]!==void 0&&a!=="hasErrorBoundary";Si(!l,'Route "'+i.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!l&&!bw.has(a)&&(o[a]=r[a])}Object.assign(i,o),Object.assign(i,me({},t(i),{lazy:void 0}))}async function io(e,t,n,r,i,o,a,s){s===void 0&&(s={});let l,u,d,f=y=>{let x,R=new Promise((g,p)=>x=p);return d=()=>x(),t.signal.addEventListener("abort",d),Promise.race([y({request:t,params:n.params,context:s.requestContext}),R])};try{let y=n.route[e];if(n.route.lazy)if(y)u=(await Promise.all([f(y),wh(n.route,o,i)]))[0];else if(await wh(n.route,o,i),y=n.route[e],y)u=await f(y);else if(e==="action"){let x=new URL(t.url),R=x.pathname+x.search;throw xt(405,{method:t.method,pathname:R,routeId:n.route.id})}else return{type:_e.data,data:void 0};else if(y)u=await f(y);else{let x=new URL(t.url),R=x.pathname+x.search;throw xt(404,{pathname:R})}W(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(y){l=_e.error,u=y}finally{d&&t.signal.removeEventListener("abort",d)}if(s_(u)){let y=u.status;if(Yw.has(y)){let g=u.headers.get("Location");if(W(g,"Redirects returned/thrown from loaders/actions must have a Location header"),!Qv.test(g))g=Qc(new URL(t.url),r.slice(0,r.indexOf(n)+1),a,!0,g);else if(!s.isStaticRequest){let p=new URL(t.url),v=g.startsWith("//")?new URL(p.protocol+g):new URL(g),m=zi(v.pathname,a)!=null;v.origin===p.origin&&m&&(g=v.pathname+v.search+v.hash)}if(s.isStaticRequest)throw u.headers.set("Location",g),u;return{type:_e.redirect,status:y,location:g,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(s.isRouteRequest)throw{type:l===_e.error?_e.error:_e.data,response:u};let x,R=u.headers.get("Content-Type");return R&&/\bapplication\/json\b/.test(R)?x=await u.json():x=await u.text(),l===_e.error?{type:l,error:new df(y,u.statusText,x),headers:u.headers}:{type:_e.data,data:x,statusCode:u.status,headers:u.headers}}if(l===_e.error)return{type:l,error:u};if(a_(u)){var h,A;return{type:_e.deferred,deferredData:u,statusCode:(h=u.init)==null?void 0:h.status,headers:((A=u.init)==null?void 0:A.headers)&&new Headers(u.init.headers)}}return{type:_e.data,data:u}}function oo(e,t,n,r){let i=e.createURL(qv(t)).toString(),o={signal:n};if(r&&Lt(r.formMethod)){let{formMethod:a,formEncType:s}=r;o.method=a.toUpperCase(),s==="application/json"?(o.headers=new Headers({"Content-Type":s}),o.body=JSON.stringify(r.json)):s==="text/plain"?o.body=r.text:s==="application/x-www-form-urlencoded"&&r.formData?o.body=Gc(r.formData):o.body=r.formData}return new Request(i,o)}function Gc(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function _h(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function i_(e,t,n,r,i){let o={},a=null,s,l=!1,u={};return n.forEach((d,f)=>{let h=t[f].route.id;if(W(!ci(d),"Cannot handle redirect results in processLoaderData"),Co(d)){let A=ei(e,h),y=d.error;r&&(y=Object.values(r)[0],r=void 0),a=a||{},a[A.route.id]==null&&(a[A.route.id]=y),o[h]=void 0,l||(l=!0,s=Hv(d.error)?d.error.status:500),d.headers&&(u[h]=d.headers)}else pr(d)?(i.set(h,d.deferredData),o[h]=d.deferredData.data):o[h]=d.data,d.statusCode!=null&&d.statusCode!==200&&!l&&(s=d.statusCode),d.headers&&(u[h]=d.headers)}),r&&(a=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:a,statusCode:s||200,loaderHeaders:u}}function Sh(e,t,n,r,i,o,a,s){let{loaderData:l,errors:u}=i_(t,n,r,i,s);for(let d=0;d<o.length;d++){let{key:f,match:h,controller:A}=o[d];W(a!==void 0&&a[d]!==void 0,"Did not find corresponding fetcher result");let y=a[d];if(!(A&&A.signal.aborted))if(Co(y)){let x=ei(e.matches,h==null?void 0:h.route.id);u&&u[x.route.id]||(u=me({},u,{[x.route.id]:y.error})),e.fetchers.delete(f)}else if(ci(y))W(!1,"Unhandled fetcher revalidation redirect");else if(pr(y))W(!1,"Unhandled fetcher deferred data");else{let x=Mr(y.data);e.fetchers.set(f,x)}}return{loaderData:l,errors:u}}function Ch(e,t,n,r){let i=me({},t);for(let o of n){let a=o.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(i[a]=t[a]):e[a]!==void 0&&o.route.loader&&(i[a]=e[a]),r&&r.hasOwnProperty(a))break}return i}function ei(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Eh(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function xt(e,t){let{pathname:n,routeId:r,method:i,type:o}=t===void 0?{}:t,a="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(a="Bad Request",i&&n&&r?s="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"?s="defer() is not supported in actions":o==="invalid-body"&&(s="Unable to encode submission body")):e===403?(a="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(a="Not Found",s='No route matches URL "'+n+'"'):e===405&&(a="Method Not Allowed",i&&n&&r?s="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(s='Invalid request method "'+i.toUpperCase()+'"')),new df(e||500,a,new Error(s),!0)}function bh(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(ci(n))return{result:n,idx:t}}}function qv(e){let t=typeof e=="string"?kn(e):e;return Er(me({},t,{hash:""}))}function o_(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function pr(e){return e.type===_e.deferred}function Co(e){return e.type===_e.error}function ci(e){return(e&&e.type)===_e.redirect}function a_(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function s_(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function l_(e){return qw.has(e.toLowerCase())}function Lt(e){return Qw.has(e.toLowerCase())}async function kh(e,t,n,r,i,o){for(let a=0;a<n.length;a++){let s=n[a],l=t[a];if(!l)continue;let u=e.find(f=>f.route.id===l.route.id),d=u!=null&&!Gv(u,l)&&(o&&o[l.route.id])!==void 0;if(pr(s)&&(i||d)){let f=r[a];W(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await Yv(s,f,i).then(h=>{h&&(n[a]=h||n[a])})}}}async function Yv(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:_e.data,data:e.deferredData.unwrappedData}}catch(i){return{type:_e.error,error:i}}return{type:_e.data,data:e.deferredData.data}}}function ff(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function u_(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function qc(e,t){let n=typeof t=="string"?kn(t).search:t.search;if(e[e.length-1].route.index&&ff(n||""))return e[e.length-1];let r=ra(e);return r[r.length-1]}function Rh(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:o,json:a}=e;if(!(!t||!n||!r)){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:o,json:void 0,text:void 0};if(a!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:a,text:void 0}}}function Ba(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function c_(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function ao(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}function d_(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0," _hasFetcherDoneAnything ":!0}}function Mr(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hs(){return Hs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hs.apply(this,arguments)}const bl=S.createContext(null),pf=S.createContext(null),Or=S.createContext(null),kl=S.createContext(null),an=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Jv=S.createContext(null);function f_(e,t){let{relative:n}=t===void 0?{}:t;Ii()||W(!1);let{basename:r,navigator:i}=S.useContext(Or),{hash:o,pathname:a,search:s}=mf(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:yn([r,a])),i.createHref({pathname:l,search:s,hash:o})}function Ii(){return S.useContext(kl)!=null}function Mi(){return Ii()||W(!1),S.useContext(kl).location}function Xv(e){S.useContext(Or).static||S.useLayoutEffect(e)}function hf(){let{isDataRoute:e}=S.useContext(an);return e?k_():p_()}function p_(){Ii()||W(!1);let e=S.useContext(bl),{basename:t,navigator:n}=S.useContext(Or),{matches:r}=S.useContext(an),{pathname:i}=Mi(),o=JSON.stringify(ra(r).map(l=>l.pathnameBase)),a=S.useRef(!1);return Xv(()=>{a.current=!0}),S.useCallback(function(l,u){if(u===void 0&&(u={}),!a.current)return;if(typeof l=="number"){n.go(l);return}let d=El(l,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:yn([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,o,i,e])}const h_=S.createContext(null);function m_(e){let t=S.useContext(an).outlet;return t&&S.createElement(h_.Provider,{value:e},t)}function g_(){let{matches:e}=S.useContext(an),t=e[e.length-1];return t?t.params:{}}function mf(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=S.useContext(an),{pathname:i}=Mi(),o=JSON.stringify(ra(r).map(a=>a.pathnameBase));return S.useMemo(()=>El(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function v_(e,t,n){Ii()||W(!1);let{navigator:r}=S.useContext(Or),{matches:i}=S.useContext(an),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let l=Mi(),u;if(t){var d;let x=typeof t=="string"?kn(t):t;s==="/"||(d=x.pathname)!=null&&d.startsWith(s)||W(!1),u=x}else u=l;let f=u.pathname||"/",h=s==="/"?f:f.slice(s.length)||"/",A=Zr(e,{pathname:h}),y=__(A&&A.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:yn([s,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?s:yn([s,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n);return t&&y?S.createElement(kl.Provider,{value:{location:Hs({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ee.Pop}},y):y}function y_(){let e=b_(),t=Hv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,o)}const x_=S.createElement(y_,null);class A_ extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?S.createElement(an.Provider,{value:this.props.routeContext},S.createElement(Jv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function w_(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(bl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(an.Provider,{value:t},r)}function __(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let s=o.findIndex(l=>l.route.id&&(a==null?void 0:a[l.route.id]));s>=0||W(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,l,u)=>{let d=l.route.id?a==null?void 0:a[l.route.id]:null,f=null;n&&(f=l.route.errorElement||x_);let h=t.concat(o.slice(0,u+1)),A=()=>{let y;return d?y=f:l.route.Component?y=S.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=s,S.createElement(w_,{match:l,routeContext:{outlet:s,matches:h,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?S.createElement(A_,{location:n.location,revalidation:n.revalidation,component:f,error:d,children:A(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):A()},null)}var Zv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Zv||{}),Ws=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ws||{});function S_(e){let t=S.useContext(bl);return t||W(!1),t}function C_(e){let t=S.useContext(pf);return t||W(!1),t}function E_(e){let t=S.useContext(an);return t||W(!1),t}function ey(e){let t=E_(),n=t.matches[t.matches.length-1];return n.route.id||W(!1),n.route.id}function b_(){var e;let t=S.useContext(Jv),n=C_(Ws.UseRouteError),r=ey(Ws.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function k_(){let{router:e}=S_(Zv.UseNavigateStable),t=ey(Ws.UseNavigateStable),n=S.useRef(!1);return Xv(()=>{n.current=!0}),S.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Hs({fromRouteId:t},o)))},[e,t])}const R_="startTransition",jh=lx[R_];function j_(e){let{fallbackElement:t,router:n,future:r}=e,[i,o]=S.useState(n.state),{v7_startTransition:a}=r||{},s=S.useCallback(f=>{a&&jh?jh(()=>o(f)):o(f)},[o,a]);S.useLayoutEffect(()=>n.subscribe(s),[n,s]);let l=S.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:f=>n.navigate(f),push:(f,h,A)=>n.navigate(f,{state:h,preventScrollReset:A==null?void 0:A.preventScrollReset}),replace:(f,h,A)=>n.navigate(f,{replace:!0,state:h,preventScrollReset:A==null?void 0:A.preventScrollReset})}),[n]),u=n.basename||"/",d=S.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return S.createElement(S.Fragment,null,S.createElement(bl.Provider,{value:d},S.createElement(pf.Provider,{value:i},S.createElement(P_,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?S.createElement(O_,{routes:n.routes,state:i}):t))),null)}function O_(e){let{routes:t,state:n}=e;return v_(t,void 0,n)}function Oh(e){let{to:t,replace:n,state:r,relative:i}=e;Ii()||W(!1);let{matches:o}=S.useContext(an),{pathname:a}=Mi(),s=hf(),l=El(t,ra(o).map(d=>d.pathnameBase),a,i==="path"),u=JSON.stringify(l);return S.useEffect(()=>s(JSON.parse(u),{replace:n,state:r,relative:i}),[s,u,i,n,r]),null}function ty(e){return m_(e.context)}function re(e){W(!1)}function P_(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ee.Pop,navigator:o,static:a=!1}=e;Ii()&&W(!1);let s=t.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:s,navigator:o,static:a}),[s,o,a]);typeof r=="string"&&(r=kn(r));let{pathname:u="/",search:d="",hash:f="",state:h=null,key:A="default"}=r,y=S.useMemo(()=>{let x=zi(u,s);return x==null?null:{location:{pathname:x,search:d,hash:f,state:h,key:A},navigationType:i}},[s,u,d,f,h,A,i]);return y==null?null:S.createElement(Or.Provider,{value:l},S.createElement(kl.Provider,{children:n,value:y}))}new Promise(()=>{});function Yc(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let o=[...t,i];if(r.type===S.Fragment){n.push.apply(n,Yc(r.props.children,o));return}r.type!==re&&W(!1),!r.props.index||!r.props.children||W(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Yc(r.props.children,o)),n.push(a)}),n}function N_(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:S.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:S.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ci(){return Ci=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ci.apply(this,arguments)}function ny(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function T_(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function D_(e,t){return e.button===0&&(!t||t==="_self")&&!T_(e)}const L_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],F_=["aria-current","caseSensitive","className","end","style","to","children"];function z_(e,t){return e_({basename:t==null?void 0:t.basename,future:Ci({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:Sw({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||I_(),routes:e,mapRouteProperties:N_}).initialize()}function I_(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Ci({},t,{errors:M_(t.errors)})),t}function M_(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new df(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let o=window[i.__subType];if(typeof o=="function")try{let a=new o(i.message);a.stack="",n[r]=a}catch{}}if(n[r]==null){let o=new Error(i.message);o.stack="",n[r]=o}}else n[r]=i;return n}const B_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",K_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sn=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:u,preventScrollReset:d}=t,f=ny(t,L_),{basename:h}=S.useContext(Or),A,y=!1;if(typeof u=="string"&&K_.test(u)&&(A=u,B_))try{let p=new URL(window.location.href),v=u.startsWith("//")?new URL(p.protocol+u):new URL(u),m=zi(v.pathname,h);v.origin===p.origin&&m!=null?u=m+v.search+v.hash:y=!0}catch{}let x=f_(u,{relative:i}),R=$_(u,{replace:a,state:s,target:l,preventScrollReset:d,relative:i});function g(p){r&&r(p),p.defaultPrevented||R(p)}return S.createElement("a",Ci({},f,{href:A||x,onClick:y||o?r:g,ref:n,target:l}))}),Pr=S.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:s,to:l,children:u}=t,d=ny(t,F_),f=mf(l,{relative:d.relative}),h=Mi(),A=S.useContext(pf),{navigator:y}=S.useContext(Or),x=y.encodeLocation?y.encodeLocation(f).pathname:f.pathname,R=h.pathname,g=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;i||(R=R.toLowerCase(),g=g?g.toLowerCase():null,x=x.toLowerCase());let p=R===x||!a&&R.startsWith(x)&&R.charAt(x.length)==="/",v=g!=null&&(g===x||!a&&g.startsWith(x)&&g.charAt(x.length)==="/"),m=p?r:void 0,_;typeof o=="function"?_=o({isActive:p,isPending:v}):_=[o,p?"active":null,v?"pending":null].filter(Boolean).join(" ");let j=typeof s=="function"?s({isActive:p,isPending:v}):s;return S.createElement(sn,Ci({},d,{"aria-current":m,className:_,ref:n,style:j,to:l}),typeof u=="function"?u({isActive:p,isPending:v}):u)});var Ph;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Ph||(Ph={}));var Nh;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Nh||(Nh={}));function $_(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,s=hf(),l=Mi(),u=mf(e,{relative:a});return S.useCallback(d=>{if(D_(d,n)){d.preventDefault();let f=r!==void 0?r:Er(l)===Er(u);s(e,{replace:f,state:i,preventScrollReset:o,relative:a})}},[l,s,u,r,i,n,e,o,a])}function te(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error(typeof e=="number"?"[MobX] minified error nr: "+e+(n.length?" "+n.map(String).join(","):"")+". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts":"[MobX] "+e)}var U_={};function gf(){return typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:U_}var ry=Object.assign,Qs=Object.getOwnPropertyDescriptor,nn=Object.defineProperty,Rl=Object.prototype,Jc=[];Object.freeze(Jc);var iy={};Object.freeze(iy);var V_=typeof Proxy<"u",H_=Object.toString();function oy(){V_||te("Proxy not available")}function ay(e){var t=!1;return function(){if(!t)return t=!0,e.apply(this,arguments)}}var ti=function(){};function Ht(e){return typeof e=="function"}function br(e){var t=typeof e;switch(t){case"string":case"symbol":case"number":return!0}return!1}function jl(e){return e!==null&&typeof e=="object"}function En(e){if(!jl(e))return!1;var t=Object.getPrototypeOf(e);if(t==null)return!0;var n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n.toString()===H_}function sy(e){var t=e==null?void 0:e.constructor;return t?t.name==="GeneratorFunction"||t.displayName==="GeneratorFunction":!1}function ia(e,t,n){nn(e,t,{enumerable:!1,writable:!0,configurable:!0,value:n})}function ly(e,t,n){nn(e,t,{enumerable:!1,writable:!1,configurable:!0,value:n})}function Nr(e,t){var n="isMobX"+e;return t.prototype[n]=!0,function(r){return jl(r)&&r[n]===!0}}function Bi(e){return e instanceof Map}function oa(e){return e instanceof Set}var uy=typeof Object.getOwnPropertySymbols<"u";function W_(e){var t=Object.keys(e);if(!uy)return t;var n=Object.getOwnPropertySymbols(e);return n.length?[].concat(t,n.filter(function(r){return Rl.propertyIsEnumerable.call(e,r)})):t}var Ei=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:uy?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames;function cy(e){return e===null?null:typeof e=="object"?""+e:e}function xn(e,t){return Rl.hasOwnProperty.call(e,t)}var Q_=Object.getOwnPropertyDescriptors||function(t){var n={};return Ei(t).forEach(function(r){n[r]=Qs(t,r)}),n};function Th(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Y_(r.key),r)}}function vf(e,t,n){return t&&Th(e.prototype,t),n&&Th(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function bi(){return bi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bi.apply(this,arguments)}function dy(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Xc(e,t)}function Xc(e,t){return Xc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Xc(e,t)}function ju(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G_(e,t){if(e){if(typeof e=="string")return Dh(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dh(e,t)}}function Dh(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ni(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=G_(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q_(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Y_(e){var t=q_(e,"string");return typeof t=="symbol"?t:String(t)}var Zt=Symbol("mobx-stored-annotations");function rn(e){function t(n,r){aa(n,r,e)}return Object.assign(t,e)}function aa(e,t,n){xn(e,Zt)||ia(e,Zt,bi({},e[Zt])),oS(n)||(e[Zt][t]=n)}function J_(e){return xn(e,Zt)||ia(e,Zt,bi({},e[Zt])),e[Zt]}var V=Symbol("mobx administration"),sa=function(){function e(n){n===void 0&&(n="Atom"),this.name_=void 0,this.isPendingUnobservation_=!1,this.isBeingObserved_=!1,this.observers_=new Set,this.diffValue_=0,this.lastAccessedBy_=0,this.lowestObserverState_=Z.NOT_TRACKING_,this.onBOL=void 0,this.onBUOL=void 0,this.name_=n}var t=e.prototype;return t.onBO=function(){this.onBOL&&this.onBOL.forEach(function(r){return r()})},t.onBUO=function(){this.onBUOL&&this.onBUOL.forEach(function(r){return r()})},t.reportObserved=function(){return Py(this)},t.reportChanged=function(){ot(),Ny(this),N.stateVersion=N.stateVersion<Number.MAX_SAFE_INTEGER?N.stateVersion+1:Number.MIN_SAFE_INTEGER,at()},t.toString=function(){return this.name_},e}(),yf=Nr("Atom",sa);function fy(e,t,n){t===void 0&&(t=ti),n===void 0&&(n=ti);var r=new sa(e);return t!==ti&&aC(r,t),n!==ti&&My(r,n),r}function X_(e,t){return e===t}function Z_(e,t){return Cf(e,t)}function eS(e,t){return Cf(e,t,1)}function tS(e,t){return Object.is?Object.is(e,t):e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Gs={identity:X_,structural:Z_,default:tS,shallow:eS};function ki(e,t,n){return Vy(e)?e:Array.isArray(e)?Ke.array(e,{name:n}):En(e)?Ke.object(e,void 0,{name:n}):Bi(e)?Ke.map(e,{name:n}):oa(e)?Ke.set(e,{name:n}):typeof e=="function"&&!wf(e)&&!el(e)?sy(e)?Go(e):Qo(n,e):e}function nS(e,t,n){if(e==null||qo(e)||Dl(e)||Tr(e)||$i(e))return e;if(Array.isArray(e))return Ke.array(e,{name:n,deep:!1});if(En(e))return Ke.object(e,void 0,{name:n,deep:!1});if(Bi(e))return Ke.map(e,{name:n,deep:!1});if(oa(e))return Ke.set(e,{name:n,deep:!1})}function Ol(e){return e}function rS(e,t){return Cf(e,t)?t:e}var iS="override";function oS(e){return e.annotationType_===iS}function la(e,t){return{annotationType_:e,options_:t,make_:aS,extend_:sS}}function aS(e,t,n,r){var i;if((i=this.options_)!=null&&i.bound)return this.extend_(e,t,n,!1)===null?0:1;if(r===e.target_)return this.extend_(e,t,n,!1)===null?0:2;if(wf(n.value))return 1;var o=py(e,this,t,n,!1);return nn(r,t,o),2}function sS(e,t,n,r){var i=py(e,this,t,n);return e.defineProperty_(t,i,r)}function lS(e,t,n,r){t.annotationType_,r.value}function py(e,t,n,r,i){var o,a,s,l,u,d,f;i===void 0&&(i=N.safeDescriptors),lS(e,t,n,r);var h=r.value;if((o=t.options_)!=null&&o.bound){var A;h=h.bind((A=e.proxy_)!=null?A:e.target_)}return{value:Ri((a=(s=t.options_)==null?void 0:s.name)!=null?a:n.toString(),h,(l=(u=t.options_)==null?void 0:u.autoAction)!=null?l:!1,(d=t.options_)!=null&&d.bound?(f=e.proxy_)!=null?f:e.target_:void 0),configurable:i?e.isPlainObject_:!0,enumerable:!1,writable:!i}}function hy(e,t){return{annotationType_:e,options_:t,make_:uS,extend_:cS}}function uS(e,t,n,r){var i;if(r===e.target_)return this.extend_(e,t,n,!1)===null?0:2;if((i=this.options_)!=null&&i.bound&&(!xn(e.target_,t)||!el(e.target_[t]))&&this.extend_(e,t,n,!1)===null)return 0;if(el(n.value))return 1;var o=my(e,this,t,n,!1,!1);return nn(r,t,o),2}function cS(e,t,n,r){var i,o=my(e,this,t,n,(i=this.options_)==null?void 0:i.bound);return e.defineProperty_(t,o,r)}function dS(e,t,n,r){t.annotationType_,r.value}function my(e,t,n,r,i,o){o===void 0&&(o=N.safeDescriptors),dS(e,t,n,r);var a=r.value;if(el(a)||(a=Go(a)),i){var s;a=a.bind((s=e.proxy_)!=null?s:e.target_),a.isMobXFlow=!0}return{value:a,configurable:o?e.isPlainObject_:!0,enumerable:!1,writable:!o}}function xf(e,t){return{annotationType_:e,options_:t,make_:fS,extend_:pS}}function fS(e,t,n){return this.extend_(e,t,n,!1)===null?0:1}function pS(e,t,n,r){return hS(e,this,t,n),e.defineComputedProperty_(t,bi({},this.options_,{get:n.get,set:n.set}),r)}function hS(e,t,n,r){t.annotationType_,r.get}function Pl(e,t){return{annotationType_:e,options_:t,make_:mS,extend_:gS}}function mS(e,t,n){return this.extend_(e,t,n,!1)===null?0:1}function gS(e,t,n,r){var i,o;return vS(e,this),e.defineObservableProperty_(t,n.value,(i=(o=this.options_)==null?void 0:o.enhancer)!=null?i:ki,r)}function vS(e,t,n,r){t.annotationType_}var yS="true",xS=gy();function gy(e){return{annotationType_:yS,options_:e,make_:AS,extend_:wS}}function AS(e,t,n,r){var i,o;if(n.get)return Nl.make_(e,t,n,r);if(n.set){var a=Ri(t.toString(),n.set);return r===e.target_?e.defineProperty_(t,{configurable:N.safeDescriptors?e.isPlainObject_:!0,set:a})===null?0:2:(nn(r,t,{configurable:!0,set:a}),2)}if(r!==e.target_&&typeof n.value=="function"){var s;if(sy(n.value)){var l,u=(l=this.options_)!=null&&l.autoBind?Go.bound:Go;return u.make_(e,t,n,r)}var d=(s=this.options_)!=null&&s.autoBind?Qo.bound:Qo;return d.make_(e,t,n,r)}var f=((i=this.options_)==null?void 0:i.deep)===!1?Ke.ref:Ke;if(typeof n.value=="function"&&(o=this.options_)!=null&&o.autoBind){var h;n.value=n.value.bind((h=e.proxy_)!=null?h:e.target_)}return f.make_(e,t,n,r)}function wS(e,t,n,r){var i,o;if(n.get)return Nl.extend_(e,t,n,r);if(n.set)return e.defineProperty_(t,{configurable:N.safeDescriptors?e.isPlainObject_:!0,set:Ri(t.toString(),n.set)},r);if(typeof n.value=="function"&&(i=this.options_)!=null&&i.autoBind){var a;n.value=n.value.bind((a=e.proxy_)!=null?a:e.target_)}var s=((o=this.options_)==null?void 0:o.deep)===!1?Ke.ref:Ke;return s.extend_(e,t,n,r)}var _S="observable",SS="observable.ref",CS="observable.shallow",ES="observable.struct",vy={deep:!0,name:void 0,defaultDecorator:void 0,proxy:!0};Object.freeze(vy);function Ka(e){return e||vy}var yy=Pl(_S),bS=Pl(SS,{enhancer:Ol}),kS=Pl(CS,{enhancer:nS}),RS=Pl(ES,{enhancer:rS}),xy=rn(yy);function $a(e){return e.deep===!0?ki:e.deep===!1?Ol:OS(e.defaultDecorator)}function jS(e){var t;return e?(t=e.defaultDecorator)!=null?t:gy(e):void 0}function OS(e){var t,n;return e&&(t=(n=e.options_)==null?void 0:n.enhancer)!=null?t:ki}function Ay(e,t,n){if(br(t)){aa(e,t,yy);return}return Vy(e)?e:En(e)?Ke.object(e,t,n):Array.isArray(e)?Ke.array(e,t):Bi(e)?Ke.map(e,t):oa(e)?Ke.set(e,t):typeof e=="object"&&e!==null?e:Ke.box(e,t)}ry(Ay,xy);var PS={box:function(t,n){var r=Ka(n);return new di(t,$a(r),r.name,!0,r.equals)},array:function(t,n){var r=Ka(n);return(N.useProxies===!1||r.proxy===!1?jC:AC)(t,$a(r),r.name)},map:function(t,n){var r=Ka(n);return new Gy(t,$a(r),r.name)},set:function(t,n){var r=Ka(n);return new Jy(t,$a(r),r.name)},object:function(t,n,r){return Ky(N.useProxies===!1||(r==null?void 0:r.proxy)===!1?ha({},r):gC({},r),t,n)},ref:rn(bS),shallow:rn(kS),deep:xy,struct:rn(RS)},Ke=ry(Ay,PS),wy="computed",NS="computed.struct",_y=xf(wy),TS=xf(NS,{equals:Gs.structural}),Nl=function(t,n){if(br(n))return aa(t,n,_y);if(En(t))return rn(xf(wy,t));var r=En(n)?n:{};return r.get=t,r.name||(r.name=t.name||""),new Wo(r)};Object.assign(Nl,_y);Nl.struct=rn(TS);var Lh,Fh,qs=0,DS=1,LS=(Lh=(Fh=Qs(function(){},"name"))==null?void 0:Fh.configurable)!=null?Lh:!1,zh={value:"action",configurable:!0,writable:!1,enumerable:!1};function Ri(e,t,n,r){n===void 0&&(n=!1);function i(){return FS(e,n,t,r||this,arguments)}return i.isMobxAction=!0,LS&&(zh.value=e,nn(i,"name",zh)),i}function FS(e,t,n,r,i){var o=zS(e,t);try{return n.apply(r,i)}catch(a){throw o.error_=a,a}finally{IS(o)}}function zS(e,t,n,r){var i=!1,o=0,a=N.trackingDerivation,s=!t||!a;ot();var l=N.allowStateChanges;s&&(Ki(),l=ua(!0));var u=Af(!0),d={runAsAction_:s,prevDerivation_:a,prevAllowStateChanges_:l,prevAllowStateReads_:u,notifySpy_:i,startTime_:o,actionId_:DS++,parentActionId_:qs};return qs=d.actionId_,d}function IS(e){qs!==e.actionId_&&te(30),qs=e.parentActionId_,e.error_!==void 0&&(N.suppressReactionErrors=!0),ca(e.prevAllowStateChanges_),Eo(e.prevAllowStateReads_),at(),e.runAsAction_&&Yn(e.prevDerivation_),N.suppressReactionErrors=!1}function MS(e,t){var n=ua(e);try{return t()}finally{ca(n)}}function ua(e){var t=N.allowStateChanges;return N.allowStateChanges=e,t}function ca(e){N.allowStateChanges=e}var Sy;Sy=Symbol.toPrimitive;var di=function(e){dy(t,e);function t(r,i,o,a,s){var l;return o===void 0&&(o="ObservableValue"),s===void 0&&(s=Gs.default),l=e.call(this,o)||this,l.enhancer=void 0,l.name_=void 0,l.equals=void 0,l.hasUnreportedChange_=!1,l.interceptors_=void 0,l.changeListeners_=void 0,l.value_=void 0,l.dehancer=void 0,l.enhancer=i,l.name_=o,l.equals=s,l.value_=i(r,void 0,o),l}var n=t.prototype;return n.dehanceValue=function(i){return this.dehancer!==void 0?this.dehancer(i):i},n.set=function(i){this.value_,i=this.prepareNewValue_(i),i!==N.UNCHANGED&&this.setNewValue_(i)},n.prepareNewValue_=function(i){if(_t(this)){var o=St(this,{object:this,type:on,newValue:i});if(!o)return N.UNCHANGED;i=o.newValue}return i=this.enhancer(i,this.value_,this.name_),this.equals(this.value_,i)?N.UNCHANGED:i},n.setNewValue_=function(i){var o=this.value_;this.value_=i,this.reportChanged(),$t(this)&&Ut(this,{type:on,object:this,newValue:i,oldValue:o})},n.get=function(){return this.reportObserved(),this.dehanceValue(this.value_)},n.intercept_=function(i){return da(this,i)},n.observe_=function(i,o){return o&&i({observableKind:"value",debugObjectName:this.name_,object:this,type:on,newValue:this.value_,oldValue:void 0}),fa(this,i)},n.raw=function(){return this.value_},n.toJSON=function(){return this.get()},n.toString=function(){return this.name_+"["+this.value_+"]"},n.valueOf=function(){return cy(this.get())},n[Sy]=function(){return this.valueOf()},t}(sa),Cy;Cy=Symbol.toPrimitive;var Wo=function(){function e(n){this.dependenciesState_=Z.NOT_TRACKING_,this.observing_=[],this.newObserving_=null,this.isBeingObserved_=!1,this.isPendingUnobservation_=!1,this.observers_=new Set,this.diffValue_=0,this.runId_=0,this.lastAccessedBy_=0,this.lowestObserverState_=Z.UP_TO_DATE_,this.unboundDepsCount_=0,this.value_=new Js(null),this.name_=void 0,this.triggeredBy_=void 0,this.isComputing_=!1,this.isRunningSetter_=!1,this.derivation=void 0,this.setter_=void 0,this.isTracing_=Ys.NONE,this.scope_=void 0,this.equals_=void 0,this.requiresReaction_=void 0,this.keepAlive_=void 0,this.onBOL=void 0,this.onBUOL=void 0,n.get||te(31),this.derivation=n.get,this.name_=n.name||"ComputedValue",n.set&&(this.setter_=Ri("ComputedValue-setter",n.set)),this.equals_=n.equals||(n.compareStructural||n.struct?Gs.structural:Gs.default),this.scope_=n.context,this.requiresReaction_=n.requiresReaction,this.keepAlive_=!!n.keepAlive}var t=e.prototype;return t.onBecomeStale_=function(){HS(this)},t.onBO=function(){this.onBOL&&this.onBOL.forEach(function(r){return r()})},t.onBUO=function(){this.onBUOL&&this.onBUOL.forEach(function(r){return r()})},t.get=function(){if(this.isComputing_&&te(32,this.name_,this.derivation),N.inBatch===0&&this.observers_.size===0&&!this.keepAlive_)Zc(this)&&(this.warnAboutUntrackedRead_(),ot(),this.value_=this.computeValue_(!1),at());else if(Py(this),Zc(this)){var r=N.trackingContext;this.keepAlive_&&!r&&(N.trackingContext=this),this.trackAndCompute()&&VS(this),N.trackingContext=r}var i=this.value_;if(ls(i))throw i.cause;return i},t.set=function(r){if(this.setter_){this.isRunningSetter_&&te(33,this.name_),this.isRunningSetter_=!0;try{this.setter_.call(this.scope_,r)}finally{this.isRunningSetter_=!1}}else te(34,this.name_)},t.trackAndCompute=function(){var r=this.value_,i=this.dependenciesState_===Z.NOT_TRACKING_,o=this.computeValue_(!0),a=i||ls(r)||ls(o)||!this.equals_(r,o);return a&&(this.value_=o),a},t.computeValue_=function(r){this.isComputing_=!0;var i=ua(!1),o;if(r)o=Ey(this,this.derivation,this.scope_);else if(N.disableErrorBoundaries===!0)o=this.derivation.call(this.scope_);else try{o=this.derivation.call(this.scope_)}catch(a){o=new Js(a)}return ca(i),this.isComputing_=!1,o},t.suspend_=function(){this.keepAlive_||(ed(this),this.value_=void 0)},t.observe_=function(r,i){var o=this,a=!0,s=void 0;return tC(function(){var l=o.get();if(!a||i){var u=Ki();r({observableKind:"computed",debugObjectName:o.name_,type:on,object:o,newValue:l,oldValue:s}),Yn(u)}a=!1,s=l})},t.warnAboutUntrackedRead_=function(){},t.toString=function(){return this.name_+"["+this.derivation.toString()+"]"},t.valueOf=function(){return cy(this.get())},t[Cy]=function(){return this.valueOf()},e}(),Tl=Nr("ComputedValue",Wo),Z;(function(e){e[e.NOT_TRACKING_=-1]="NOT_TRACKING_",e[e.UP_TO_DATE_=0]="UP_TO_DATE_",e[e.POSSIBLY_STALE_=1]="POSSIBLY_STALE_",e[e.STALE_=2]="STALE_"})(Z||(Z={}));var Ys;(function(e){e[e.NONE=0]="NONE",e[e.LOG=1]="LOG",e[e.BREAK=2]="BREAK"})(Ys||(Ys={}));var Js=function(t){this.cause=void 0,this.cause=t};function ls(e){return e instanceof Js}function Zc(e){switch(e.dependenciesState_){case Z.UP_TO_DATE_:return!1;case Z.NOT_TRACKING_:case Z.STALE_:return!0;case Z.POSSIBLY_STALE_:{for(var t=Af(!0),n=Ki(),r=e.observing_,i=r.length,o=0;o<i;o++){var a=r[o];if(Tl(a)){if(N.disableErrorBoundaries)a.get();else try{a.get()}catch{return Yn(n),Eo(t),!0}if(e.dependenciesState_===Z.STALE_)return Yn(n),Eo(t),!0}}return ky(e),Yn(n),Eo(t),!1}}}function Ey(e,t,n){var r=Af(!0);ky(e),e.newObserving_=new Array(e.observing_.length+100),e.unboundDepsCount_=0,e.runId_=++N.runId;var i=N.trackingDerivation;N.trackingDerivation=e,N.inBatch++;var o;if(N.disableErrorBoundaries===!0)o=t.call(n);else try{o=t.call(n)}catch(a){o=new Js(a)}return N.inBatch--,N.trackingDerivation=i,BS(e),Eo(r),o}function BS(e){for(var t=e.observing_,n=e.observing_=e.newObserving_,r=Z.UP_TO_DATE_,i=0,o=e.unboundDepsCount_,a=0;a<o;a++){var s=n[a];s.diffValue_===0&&(s.diffValue_=1,i!==a&&(n[i]=s),i++),s.dependenciesState_>r&&(r=s.dependenciesState_)}for(n.length=i,e.newObserving_=null,o=t.length;o--;){var l=t[o];l.diffValue_===0&&jy(l,e),l.diffValue_=0}for(;i--;){var u=n[i];u.diffValue_===1&&(u.diffValue_=0,US(u,e))}r!==Z.UP_TO_DATE_&&(e.dependenciesState_=r,e.onBecomeStale_())}function ed(e){var t=e.observing_;e.observing_=[];for(var n=t.length;n--;)jy(t[n],e);e.dependenciesState_=Z.NOT_TRACKING_}function by(e){var t=Ki();try{return e()}finally{Yn(t)}}function Ki(){var e=N.trackingDerivation;return N.trackingDerivation=null,e}function Yn(e){N.trackingDerivation=e}function Af(e){var t=N.allowStateReads;return N.allowStateReads=e,t}function Eo(e){N.allowStateReads=e}function ky(e){if(e.dependenciesState_!==Z.UP_TO_DATE_){e.dependenciesState_=Z.UP_TO_DATE_;for(var t=e.observing_,n=t.length;n--;)t[n].lowestObserverState_=Z.UP_TO_DATE_}}var us=function(){this.version=6,this.UNCHANGED={},this.trackingDerivation=null,this.trackingContext=null,this.runId=0,this.mobxGuid=0,this.inBatch=0,this.pendingUnobservations=[],this.pendingReactions=[],this.isRunningReactions=!1,this.allowStateChanges=!1,this.allowStateReads=!0,this.enforceActions=!0,this.spyListeners=[],this.globalReactionErrorHandlers=[],this.computedRequiresReaction=!1,this.reactionRequiresObservable=!1,this.observableRequiresReaction=!1,this.disableErrorBoundaries=!1,this.suppressReactionErrors=!1,this.useProxies=!0,this.verifyProxies=!1,this.safeDescriptors=!0,this.stateVersion=Number.MIN_SAFE_INTEGER},cs=!0,Ry=!1,N=function(){var e=gf();return e.__mobxInstanceCount>0&&!e.__mobxGlobals&&(cs=!1),e.__mobxGlobals&&e.__mobxGlobals.version!==new us().version&&(cs=!1),cs?e.__mobxGlobals?(e.__mobxInstanceCount+=1,e.__mobxGlobals.UNCHANGED||(e.__mobxGlobals.UNCHANGED={}),e.__mobxGlobals):(e.__mobxInstanceCount=1,e.__mobxGlobals=new us):(setTimeout(function(){Ry||te(35)},1),new us)}();function KS(){if((N.pendingReactions.length||N.inBatch||N.isRunningReactions)&&te(36),Ry=!0,cs){var e=gf();--e.__mobxInstanceCount===0&&(e.__mobxGlobals=void 0),N=new us}}function $S(){return N}function US(e,t){e.observers_.add(t),e.lowestObserverState_>t.dependenciesState_&&(e.lowestObserverState_=t.dependenciesState_)}function jy(e,t){e.observers_.delete(t),e.observers_.size===0&&Oy(e)}function Oy(e){e.isPendingUnobservation_===!1&&(e.isPendingUnobservation_=!0,N.pendingUnobservations.push(e))}function ot(){N.inBatch++}function at(){if(--N.inBatch===0){Ty();for(var e=N.pendingUnobservations,t=0;t<e.length;t++){var n=e[t];n.isPendingUnobservation_=!1,n.observers_.size===0&&(n.isBeingObserved_&&(n.isBeingObserved_=!1,n.onBUO()),n instanceof Wo&&n.suspend_())}N.pendingUnobservations=[]}}function Py(e){var t=N.trackingDerivation;return t!==null?(t.runId_!==e.lastAccessedBy_&&(e.lastAccessedBy_=t.runId_,t.newObserving_[t.unboundDepsCount_++]=e,!e.isBeingObserved_&&N.trackingContext&&(e.isBeingObserved_=!0,e.onBO())),e.isBeingObserved_):(e.observers_.size===0&&N.inBatch>0&&Oy(e),!1)}function Ny(e){e.lowestObserverState_!==Z.STALE_&&(e.lowestObserverState_=Z.STALE_,e.observers_.forEach(function(t){t.dependenciesState_===Z.UP_TO_DATE_&&t.onBecomeStale_(),t.dependenciesState_=Z.STALE_}))}function VS(e){e.lowestObserverState_!==Z.STALE_&&(e.lowestObserverState_=Z.STALE_,e.observers_.forEach(function(t){t.dependenciesState_===Z.POSSIBLY_STALE_?t.dependenciesState_=Z.STALE_:t.dependenciesState_===Z.UP_TO_DATE_&&(e.lowestObserverState_=Z.UP_TO_DATE_)}))}function HS(e){e.lowestObserverState_===Z.UP_TO_DATE_&&(e.lowestObserverState_=Z.POSSIBLY_STALE_,e.observers_.forEach(function(t){t.dependenciesState_===Z.UP_TO_DATE_&&(t.dependenciesState_=Z.POSSIBLY_STALE_,t.onBecomeStale_())}))}var Xs=function(){function e(n,r,i,o){n===void 0&&(n="Reaction"),this.name_=void 0,this.onInvalidate_=void 0,this.errorHandler_=void 0,this.requiresObservable_=void 0,this.observing_=[],this.newObserving_=[],this.dependenciesState_=Z.NOT_TRACKING_,this.diffValue_=0,this.runId_=0,this.unboundDepsCount_=0,this.isDisposed_=!1,this.isScheduled_=!1,this.isTrackPending_=!1,this.isRunning_=!1,this.isTracing_=Ys.NONE,this.name_=n,this.onInvalidate_=r,this.errorHandler_=i,this.requiresObservable_=o}var t=e.prototype;return t.onBecomeStale_=function(){this.schedule_()},t.schedule_=function(){this.isScheduled_||(this.isScheduled_=!0,N.pendingReactions.push(this),Ty())},t.isScheduled=function(){return this.isScheduled_},t.runReaction_=function(){if(!this.isDisposed_){ot(),this.isScheduled_=!1;var r=N.trackingContext;if(N.trackingContext=this,Zc(this)){this.isTrackPending_=!0;try{this.onInvalidate_()}catch(i){this.reportExceptionInDerivation_(i)}}N.trackingContext=r,at()}},t.track=function(r){if(!this.isDisposed_){ot(),this.isRunning_=!0;var i=N.trackingContext;N.trackingContext=this;var o=Ey(this,r,void 0);N.trackingContext=i,this.isRunning_=!1,this.isTrackPending_=!1,this.isDisposed_&&ed(this),ls(o)&&this.reportExceptionInDerivation_(o.cause),at()}},t.reportExceptionInDerivation_=function(r){var i=this;if(this.errorHandler_){this.errorHandler_(r,this);return}if(N.disableErrorBoundaries)throw r;var o="[mobx] uncaught error in '"+this+"'";N.suppressReactionErrors||console.error(o,r),N.globalReactionErrorHandlers.forEach(function(a){return a(r,i)})},t.dispose=function(){this.isDisposed_||(this.isDisposed_=!0,this.isRunning_||(ot(),ed(this),at()))},t.getDisposer_=function(r){var i=this,o=function a(){i.dispose(),r==null||r.removeEventListener==null||r.removeEventListener("abort",a)};return r==null||r.addEventListener==null||r.addEventListener("abort",o),o[V]=this,o},t.toString=function(){return"Reaction["+this.name_+"]"},t.trace=function(r){},e}(),WS=100,td=function(t){return t()};function Ty(){N.inBatch>0||N.isRunningReactions||td(QS)}function QS(){N.isRunningReactions=!0;for(var e=N.pendingReactions,t=0;e.length>0;){++t===WS&&(console.error("[mobx] cycle in reaction: "+e[0]),e.splice(0));for(var n=e.splice(0),r=0,i=n.length;r<i;r++)n[r].runReaction_()}N.isRunningReactions=!1}var Zs=Nr("Reaction",Xs);function GS(e){var t=td;td=function(r){return e(function(){return t(r)})}}function bo(){return!1}function qS(e){return console.warn("[mobx.spy] Is a no-op in production builds"),function(){}}var Dy="action",YS="action.bound",Ly="autoAction",JS="autoAction.bound",XS="<unnamed action>",Fy=la(Dy),ZS=la(YS,{bound:!0}),zy=la(Ly,{autoAction:!0}),eC=la(JS,{autoAction:!0,bound:!0});function Iy(e){var t=function(r,i){if(Ht(r))return Ri(r.name||XS,r,e);if(Ht(i))return Ri(r,i,e);if(br(i))return aa(r,i,e?zy:Fy);if(br(r))return rn(la(e?Ly:Dy,{name:r,autoAction:e}))};return t}var ri=Iy(!1);Object.assign(ri,Fy);var Qo=Iy(!0);Object.assign(Qo,zy);ri.bound=rn(ZS);Qo.bound=rn(eC);function wf(e){return Ht(e)&&e.isMobxAction===!0}function tC(e,t){var n,r,i,o,a;t===void 0&&(t=iy);var s=(n=(r=t)==null?void 0:r.name)!=null?n:"Autorun",l=!t.scheduler&&!t.delay,u;if(l)u=new Xs(s,function(){this.track(h)},t.onError,t.requiresObservable);else{var d=rC(t),f=!1;u=new Xs(s,function(){f||(f=!0,d(function(){f=!1,u.isDisposed_||u.track(h)}))},t.onError,t.requiresObservable)}function h(){e(u)}return(i=t)!=null&&(o=i.signal)!=null&&o.aborted||u.schedule_(),u.getDisposer_((a=t)==null?void 0:a.signal)}var nC=function(t){return t()};function rC(e){return e.scheduler?e.scheduler:e.delay?function(t){return setTimeout(t,e.delay)}:nC}var iC="onBO",oC="onBUO";function aC(e,t,n){return By(iC,e,t,n)}function My(e,t,n){return By(oC,e,t,n)}function By(e,t,n,r){var i=typeof r=="function"?ji(t,n):ji(t),o=Ht(r)?r:n,a=e+"L";return i[a]?i[a].add(o):i[a]=new Set([o]),function(){var s=i[a];s&&(s.delete(o),s.size===0&&delete i[a])}}var sC="never",Ua="always",lC="observed";function uC(e){e.isolateGlobalState===!0&&KS();var t=e.useProxies,n=e.enforceActions;if(t!==void 0&&(N.useProxies=t===Ua?!0:t===sC?!1:typeof Proxy<"u"),t==="ifavailable"&&(N.verifyProxies=!0),n!==void 0){var r=n===Ua?Ua:n===lC;N.enforceActions=r,N.allowStateChanges=!(r===!0||r===Ua)}["computedRequiresReaction","reactionRequiresObservable","observableRequiresReaction","disableErrorBoundaries","safeDescriptors"].forEach(function(i){i in e&&(N[i]=!!e[i])}),N.allowStateReads=!N.observableRequiresReaction,e.reactionScheduler&&GS(e.reactionScheduler)}function Ky(e,t,n,r){var i=Q_(t),o=ha(e,r)[V];ot();try{Ei(i).forEach(function(a){o.extend_(a,i[a],n&&a in n?n[a]:!0)})}finally{at()}return e}function cC(e,t){return $y(ji(e,t))}function $y(e){var t={name:e.name_};return e.observing_&&e.observing_.length>0&&(t.dependencies=dC(e.observing_).map($y)),t}function dC(e){return Array.from(new Set(e))}var fC=0;function Uy(){this.message="FLOW_CANCELLED"}Uy.prototype=Object.create(Error.prototype);var Ih=hy("flow"),pC=hy("flow.bound",{bound:!0}),Go=Object.assign(function(t,n){if(br(n))return aa(t,n,Ih);var r=t,i=r.name||"<unnamed flow>",o=function(){var s=this,l=arguments,u=++fC,d=ri(i+" - runid: "+u+" - init",r).apply(s,l),f,h=void 0,A=new Promise(function(y,x){var R=0;f=x;function g(m){h=void 0;var _;try{_=ri(i+" - runid: "+u+" - yield "+R++,d.next).call(d,m)}catch(j){return x(j)}v(_)}function p(m){h=void 0;var _;try{_=ri(i+" - runid: "+u+" - yield "+R++,d.throw).call(d,m)}catch(j){return x(j)}v(_)}function v(m){if(Ht(m==null?void 0:m.then)){m.then(v,x);return}return m.done?y(m.value):(h=Promise.resolve(m.value),h.then(g,p))}g(void 0)});return A.cancel=ri(i+" - runid: "+u+" - cancel",function(){try{h&&Mh(h);var y=d.return(void 0),x=Promise.resolve(y.value);x.then(ti,ti),Mh(x),f(new Uy)}catch(R){f(R)}}),A};return o.isMobXFlow=!0,o},Ih);Go.bound=rn(pC);function Mh(e){Ht(e.cancel)&&e.cancel()}function el(e){return(e==null?void 0:e.isMobXFlow)===!0}function hC(e,t){return e?t!==void 0?qo(e)?e[V].values_.has(t):!1:qo(e)||!!e[V]||yf(e)||Zs(e)||Tl(e):!1}function Vy(e){return hC(e)}function hn(e,t){t===void 0&&(t=void 0),ot();try{return e.apply(t)}finally{at()}}function zr(e){return e[V]}var mC={has:function(t,n){return zr(t).has_(n)},get:function(t,n){return zr(t).get_(n)},set:function(t,n,r){var i;return br(n)?(i=zr(t).set_(n,r,!0))!=null?i:!0:!1},deleteProperty:function(t,n){var r;return br(n)?(r=zr(t).delete_(n,!0))!=null?r:!0:!1},defineProperty:function(t,n,r){var i;return(i=zr(t).defineProperty_(n,r))!=null?i:!0},ownKeys:function(t){return zr(t).ownKeys_()},preventExtensions:function(t){te(13)}};function gC(e,t){var n,r;return oy(),e=ha(e,t),(r=(n=e[V]).proxy_)!=null?r:n.proxy_=new Proxy(e,mC)}function _t(e){return e.interceptors_!==void 0&&e.interceptors_.length>0}function da(e,t){var n=e.interceptors_||(e.interceptors_=[]);return n.push(t),ay(function(){var r=n.indexOf(t);r!==-1&&n.splice(r,1)})}function St(e,t){var n=Ki();try{for(var r=[].concat(e.interceptors_||[]),i=0,o=r.length;i<o&&(t=r[i](t),t&&!t.type&&te(14),!!t);i++);return t}finally{Yn(n)}}function $t(e){return e.changeListeners_!==void 0&&e.changeListeners_.length>0}function fa(e,t){var n=e.changeListeners_||(e.changeListeners_=[]);return n.push(t),ay(function(){var r=n.indexOf(t);r!==-1&&n.splice(r,1)})}function Ut(e,t){var n=Ki(),r=e.changeListeners_;if(r){r=r.slice();for(var i=0,o=r.length;i<o;i++)r[i](t);Yn(n)}}function vC(e,t,n){var r=ha(e,n)[V];ot();try{var i;(i=t)!=null||(t=J_(e)),Ei(t).forEach(function(o){return r.make_(o,t[o])})}finally{at()}return e}var Ou=Symbol("mobx-keys");function pa(e,t,n){if(En(e))return Ky(e,e,t,n);var r=ha(e,n)[V];if(!e[Ou]){var i=Object.getPrototypeOf(e),o=new Set([].concat(Ei(e),Ei(i)));o.delete("constructor"),o.delete(V),ia(i,Ou,o)}ot();try{e[Ou].forEach(function(a){return r.make_(a,t&&a in t?t[a]:!0)})}finally{at()}return e}var Bh="splice",on="update",yC=1e4,xC={get:function(t,n){var r=t[V];return n===V?r:n==="length"?r.getArrayLength_():typeof n=="string"&&!isNaN(n)?r.get_(parseInt(n)):xn(tl,n)?tl[n]:t[n]},set:function(t,n,r){var i=t[V];return n==="length"&&i.setArrayLength_(r),typeof n=="symbol"||isNaN(n)?t[n]=r:i.set_(parseInt(n),r),!0},preventExtensions:function(){te(15)}},_f=function(){function e(n,r,i,o){n===void 0&&(n="ObservableArray"),this.owned_=void 0,this.legacyMode_=void 0,this.atom_=void 0,this.values_=[],this.interceptors_=void 0,this.changeListeners_=void 0,this.enhancer_=void 0,this.dehancer=void 0,this.proxy_=void 0,this.lastKnownLength_=0,this.owned_=i,this.legacyMode_=o,this.atom_=new sa(n),this.enhancer_=function(a,s){return r(a,s,"ObservableArray[..]")}}var t=e.prototype;return t.dehanceValue_=function(r){return this.dehancer!==void 0?this.dehancer(r):r},t.dehanceValues_=function(r){return this.dehancer!==void 0&&r.length>0?r.map(this.dehancer):r},t.intercept_=function(r){return da(this,r)},t.observe_=function(r,i){return i===void 0&&(i=!1),i&&r({observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:"splice",index:0,added:this.values_.slice(),addedCount:this.values_.length,removed:[],removedCount:0}),fa(this,r)},t.getArrayLength_=function(){return this.atom_.reportObserved(),this.values_.length},t.setArrayLength_=function(r){(typeof r!="number"||isNaN(r)||r<0)&&te("Out of range: "+r);var i=this.values_.length;if(r!==i)if(r>i){for(var o=new Array(r-i),a=0;a<r-i;a++)o[a]=void 0;this.spliceWithArray_(i,0,o)}else this.spliceWithArray_(r,i-r)},t.updateArrayLength_=function(r,i){r!==this.lastKnownLength_&&te(16),this.lastKnownLength_+=i,this.legacyMode_&&i>0&&t0(r+i+1)},t.spliceWithArray_=function(r,i,o){var a=this;this.atom_;var s=this.values_.length;if(r===void 0?r=0:r>s?r=s:r<0&&(r=Math.max(0,s+r)),arguments.length===1?i=s-r:i==null?i=0:i=Math.max(0,Math.min(i,s-r)),o===void 0&&(o=Jc),_t(this)){var l=St(this,{object:this.proxy_,type:Bh,index:r,removedCount:i,added:o});if(!l)return Jc;i=l.removedCount,o=l.added}if(o=o.length===0?o:o.map(function(f){return a.enhancer_(f,void 0)}),this.legacyMode_){var u=o.length-i;this.updateArrayLength_(s,u)}var d=this.spliceItemsIntoValues_(r,i,o);return(i!==0||o.length!==0)&&this.notifyArraySplice_(r,o,d),this.dehanceValues_(d)},t.spliceItemsIntoValues_=function(r,i,o){if(o.length<yC){var a;return(a=this.values_).splice.apply(a,[r,i].concat(o))}else{var s=this.values_.slice(r,r+i),l=this.values_.slice(r+i);this.values_.length+=o.length-i;for(var u=0;u<o.length;u++)this.values_[r+u]=o[u];for(var d=0;d<l.length;d++)this.values_[r+o.length+d]=l[d];return s}},t.notifyArrayChildUpdate_=function(r,i,o){var a=!this.owned_&&bo(),s=$t(this),l=s||a?{observableKind:"array",object:this.proxy_,type:on,debugObjectName:this.atom_.name_,index:r,newValue:i,oldValue:o}:null;this.atom_.reportChanged(),s&&Ut(this,l)},t.notifyArraySplice_=function(r,i,o){var a=!this.owned_&&bo(),s=$t(this),l=s||a?{observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:Bh,index:r,removed:o,added:i,removedCount:o.length,addedCount:i.length}:null;this.atom_.reportChanged(),s&&Ut(this,l)},t.get_=function(r){if(this.legacyMode_&&r>=this.values_.length){console.warn("[mobx] Out of bounds read: "+r);return}return this.atom_.reportObserved(),this.dehanceValue_(this.values_[r])},t.set_=function(r,i){var o=this.values_;if(this.legacyMode_&&r>o.length&&te(17,r,o.length),r<o.length){this.atom_;var a=o[r];if(_t(this)){var s=St(this,{type:on,object:this.proxy_,index:r,newValue:i});if(!s)return;i=s.newValue}i=this.enhancer_(i,a);var l=i!==a;l&&(o[r]=i,this.notifyArrayChildUpdate_(r,i,a))}else{for(var u=new Array(r+1-o.length),d=0;d<u.length-1;d++)u[d]=void 0;u[u.length-1]=i,this.spliceWithArray_(o.length,0,u)}},e}();function AC(e,t,n,r){n===void 0&&(n="ObservableArray"),r===void 0&&(r=!1),oy();var i=new _f(n,t,r,!1);ly(i.values_,V,i);var o=new Proxy(i.values_,xC);if(i.proxy_=o,e&&e.length){var a=ua(!0);i.spliceWithArray_(0,0,e),ca(a)}return o}var tl={clear:function(){return this.splice(0)},replace:function(t){var n=this[V];return n.spliceWithArray_(0,n.values_.length,t)},toJSON:function(){return this.slice()},splice:function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];var a=this[V];switch(arguments.length){case 0:return[];case 1:return a.spliceWithArray_(t);case 2:return a.spliceWithArray_(t,n)}return a.spliceWithArray_(t,n,i)},spliceWithArray:function(t,n,r){return this[V].spliceWithArray_(t,n,r)},push:function(){for(var t=this[V],n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.spliceWithArray_(t.values_.length,0,r),t.values_.length},pop:function(){return this.splice(Math.max(this[V].values_.length-1,0),1)[0]},shift:function(){return this.splice(0,1)[0]},unshift:function(){for(var t=this[V],n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.spliceWithArray_(0,0,r),t.values_.length},reverse:function(){return N.trackingDerivation&&te(37,"reverse"),this.replace(this.slice().reverse()),this},sort:function(){N.trackingDerivation&&te(37,"sort");var t=this.slice();return t.sort.apply(t,arguments),this.replace(t),this},remove:function(t){var n=this[V],r=n.dehanceValues_(n.values_).indexOf(t);return r>-1?(this.splice(r,1),!0):!1}};Te("concat",Rn);Te("flat",Rn);Te("includes",Rn);Te("indexOf",Rn);Te("join",Rn);Te("lastIndexOf",Rn);Te("slice",Rn);Te("toString",Rn);Te("toLocaleString",Rn);Te("every",nr);Te("filter",nr);Te("find",nr);Te("findIndex",nr);Te("flatMap",nr);Te("forEach",nr);Te("map",nr);Te("some",nr);Te("reduce",Hy);Te("reduceRight",Hy);function Te(e,t){typeof Array.prototype[e]=="function"&&(tl[e]=t(e))}function Rn(e){return function(){var t=this[V];t.atom_.reportObserved();var n=t.dehanceValues_(t.values_);return n[e].apply(n,arguments)}}function nr(e){return function(t,n){var r=this,i=this[V];i.atom_.reportObserved();var o=i.dehanceValues_(i.values_);return o[e](function(a,s){return t.call(n,a,s,r)})}}function Hy(e){return function(){var t=this,n=this[V];n.atom_.reportObserved();var r=n.dehanceValues_(n.values_),i=arguments[0];return arguments[0]=function(o,a,s){return i(o,a,s,t)},r[e].apply(r,arguments)}}var wC=Nr("ObservableArrayAdministration",_f);function Dl(e){return jl(e)&&wC(e[V])}var Wy,Qy,_C={},Kn="add",nl="delete";Wy=Symbol.iterator;Qy=Symbol.toStringTag;var Gy=function(){function e(n,r,i){var o=this;r===void 0&&(r=ki),i===void 0&&(i="ObservableMap"),this.enhancer_=void 0,this.name_=void 0,this[V]=_C,this.data_=void 0,this.hasMap_=void 0,this.keysAtom_=void 0,this.interceptors_=void 0,this.changeListeners_=void 0,this.dehancer=void 0,this.enhancer_=r,this.name_=i,Ht(Map)||te(18),this.keysAtom_=fy("ObservableMap.keys()"),this.data_=new Map,this.hasMap_=new Map,MS(!0,function(){o.merge(n)})}var t=e.prototype;return t.has_=function(r){return this.data_.has(r)},t.has=function(r){var i=this;if(!N.trackingDerivation)return this.has_(r);var o=this.hasMap_.get(r);if(!o){var a=o=new di(this.has_(r),Ol,"ObservableMap.key?",!1);this.hasMap_.set(r,a),My(a,function(){return i.hasMap_.delete(r)})}return o.get()},t.set=function(r,i){var o=this.has_(r);if(_t(this)){var a=St(this,{type:o?on:Kn,object:this,newValue:i,name:r});if(!a)return this;i=a.newValue}return o?this.updateValue_(r,i):this.addValue_(r,i),this},t.delete=function(r){var i=this;if(this.keysAtom_,_t(this)){var o=St(this,{type:nl,object:this,name:r});if(!o)return!1}if(this.has_(r)){var a=bo(),s=$t(this),l=s||a?{observableKind:"map",debugObjectName:this.name_,type:nl,object:this,oldValue:this.data_.get(r).value_,name:r}:null;return hn(function(){var u;i.keysAtom_.reportChanged(),(u=i.hasMap_.get(r))==null||u.setNewValue_(!1);var d=i.data_.get(r);d.setNewValue_(void 0),i.data_.delete(r)}),s&&Ut(this,l),!0}return!1},t.updateValue_=function(r,i){var o=this.data_.get(r);if(i=o.prepareNewValue_(i),i!==N.UNCHANGED){var a=bo(),s=$t(this),l=s||a?{observableKind:"map",debugObjectName:this.name_,type:on,object:this,oldValue:o.value_,name:r,newValue:i}:null;o.setNewValue_(i),s&&Ut(this,l)}},t.addValue_=function(r,i){var o=this;this.keysAtom_,hn(function(){var u,d=new di(i,o.enhancer_,"ObservableMap.key",!1);o.data_.set(r,d),i=d.value_,(u=o.hasMap_.get(r))==null||u.setNewValue_(!0),o.keysAtom_.reportChanged()});var a=bo(),s=$t(this),l=s||a?{observableKind:"map",debugObjectName:this.name_,type:Kn,object:this,name:r,newValue:i}:null;s&&Ut(this,l)},t.get=function(r){return this.has(r)?this.dehanceValue_(this.data_.get(r).get()):this.dehanceValue_(void 0)},t.dehanceValue_=function(r){return this.dehancer!==void 0?this.dehancer(r):r},t.keys=function(){return this.keysAtom_.reportObserved(),this.data_.keys()},t.values=function(){var r=this,i=this.keys();return Yo({next:function(){var a=i.next(),s=a.done,l=a.value;return{done:s,value:s?void 0:r.get(l)}}})},t.entries=function(){var r=this,i=this.keys();return Yo({next:function(){var a=i.next(),s=a.done,l=a.value;return{done:s,value:s?void 0:[l,r.get(l)]}}})},t[Wy]=function(){return this.entries()},t.forEach=function(r,i){for(var o=ni(this),a;!(a=o()).done;){var s=a.value,l=s[0],u=s[1];r.call(i,u,l,this)}},t.merge=function(r){var i=this;return Tr(r)&&(r=new Map(r)),hn(function(){En(r)?W_(r).forEach(function(o){return i.set(o,r[o])}):Array.isArray(r)?r.forEach(function(o){var a=o[0],s=o[1];return i.set(a,s)}):Bi(r)?(r.constructor!==Map&&te(19,r),r.forEach(function(o,a){return i.set(a,o)})):r!=null&&te(20,r)}),this},t.clear=function(){var r=this;hn(function(){by(function(){for(var i=ni(r.keys()),o;!(o=i()).done;){var a=o.value;r.delete(a)}})})},t.replace=function(r){var i=this;return hn(function(){for(var o=SC(r),a=new Map,s=!1,l=ni(i.data_.keys()),u;!(u=l()).done;){var d=u.value;if(!o.has(d)){var f=i.delete(d);if(f)s=!0;else{var h=i.data_.get(d);a.set(d,h)}}}for(var A=ni(o.entries()),y;!(y=A()).done;){var x=y.value,R=x[0],g=x[1],p=i.data_.has(R);if(i.set(R,g),i.data_.has(R)){var v=i.data_.get(R);a.set(R,v),p||(s=!0)}}if(!s)if(i.data_.size!==a.size)i.keysAtom_.reportChanged();else for(var m=i.data_.keys(),_=a.keys(),j=m.next(),b=_.next();!j.done;){if(j.value!==b.value){i.keysAtom_.reportChanged();break}j=m.next(),b=_.next()}i.data_=a}),this},t.toString=function(){return"[object ObservableMap]"},t.toJSON=function(){return Array.from(this)},t.observe_=function(r,i){return fa(this,r)},t.intercept_=function(r){return da(this,r)},vf(e,[{key:"size",get:function(){return this.keysAtom_.reportObserved(),this.data_.size}},{key:Qy,get:function(){return"Map"}}]),e}(),Tr=Nr("ObservableMap",Gy);function SC(e){if(Bi(e)||Tr(e))return e;if(Array.isArray(e))return new Map(e);if(En(e)){var t=new Map;for(var n in e)t.set(n,e[n]);return t}else return te(21,e)}var qy,Yy,CC={};qy=Symbol.iterator;Yy=Symbol.toStringTag;var Jy=function(){function e(n,r,i){r===void 0&&(r=ki),i===void 0&&(i="ObservableSet"),this.name_=void 0,this[V]=CC,this.data_=new Set,this.atom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.dehancer=void 0,this.enhancer_=void 0,this.name_=i,Ht(Set)||te(22),this.atom_=fy(this.name_),this.enhancer_=function(o,a){return r(o,a,i)},n&&this.replace(n)}var t=e.prototype;return t.dehanceValue_=function(r){return this.dehancer!==void 0?this.dehancer(r):r},t.clear=function(){var r=this;hn(function(){by(function(){for(var i=ni(r.data_.values()),o;!(o=i()).done;){var a=o.value;r.delete(a)}})})},t.forEach=function(r,i){for(var o=ni(this),a;!(a=o()).done;){var s=a.value;r.call(i,s,s,this)}},t.add=function(r){var i=this;if(this.atom_,_t(this)){var o=St(this,{type:Kn,object:this,newValue:r});if(!o)return this}if(!this.has(r)){hn(function(){i.data_.add(i.enhancer_(r,void 0)),i.atom_.reportChanged()});var a=!1,s=$t(this),l=s||a?{observableKind:"set",debugObjectName:this.name_,type:Kn,object:this,newValue:r}:null;s&&Ut(this,l)}return this},t.delete=function(r){var i=this;if(_t(this)){var o=St(this,{type:nl,object:this,oldValue:r});if(!o)return!1}if(this.has(r)){var a=!1,s=$t(this),l=s||a?{observableKind:"set",debugObjectName:this.name_,type:nl,object:this,oldValue:r}:null;return hn(function(){i.atom_.reportChanged(),i.data_.delete(r)}),s&&Ut(this,l),!0}return!1},t.has=function(r){return this.atom_.reportObserved(),this.data_.has(this.dehanceValue_(r))},t.entries=function(){var r=0,i=Array.from(this.keys()),o=Array.from(this.values());return Yo({next:function(){var s=r;return r+=1,s<o.length?{value:[i[s],o[s]],done:!1}:{done:!0}}})},t.keys=function(){return this.values()},t.values=function(){this.atom_.reportObserved();var r=this,i=0,o=Array.from(this.data_.values());return Yo({next:function(){return i<o.length?{value:r.dehanceValue_(o[i++]),done:!1}:{done:!0}}})},t.replace=function(r){var i=this;return $i(r)&&(r=new Set(r)),hn(function(){Array.isArray(r)?(i.clear(),r.forEach(function(o){return i.add(o)})):oa(r)?(i.clear(),r.forEach(function(o){return i.add(o)})):r!=null&&te("Cannot initialize set from "+r)}),this},t.observe_=function(r,i){return fa(this,r)},t.intercept_=function(r){return da(this,r)},t.toJSON=function(){return Array.from(this)},t.toString=function(){return"[object ObservableSet]"},t[qy]=function(){return this.values()},vf(e,[{key:"size",get:function(){return this.atom_.reportObserved(),this.data_.size}},{key:Yy,get:function(){return"Set"}}]),e}(),$i=Nr("ObservableSet",Jy),Kh=Object.create(null),$h="remove",Xy=function(){function e(n,r,i,o){r===void 0&&(r=new Map),o===void 0&&(o=xS),this.target_=void 0,this.values_=void 0,this.name_=void 0,this.defaultAnnotation_=void 0,this.keysAtom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.proxy_=void 0,this.isPlainObject_=void 0,this.appliedAnnotations_=void 0,this.pendingKeys_=void 0,this.target_=n,this.values_=r,this.name_=i,this.defaultAnnotation_=o,this.keysAtom_=new sa("ObservableObject.keys"),this.isPlainObject_=En(this.target_)}var t=e.prototype;return t.getObservablePropValue_=function(r){return this.values_.get(r).get()},t.setObservablePropValue_=function(r,i){var o=this.values_.get(r);if(o instanceof Wo)return o.set(i),!0;if(_t(this)){var a=St(this,{type:on,object:this.proxy_||this.target_,name:r,newValue:i});if(!a)return null;i=a.newValue}if(i=o.prepareNewValue_(i),i!==N.UNCHANGED){var s=$t(this),l=!1,u=s||l?{type:on,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,oldValue:o.value_,name:r,newValue:i}:null;o.setNewValue_(i),s&&Ut(this,u)}return!0},t.get_=function(r){return N.trackingDerivation&&!xn(this.target_,r)&&this.has_(r),this.target_[r]},t.set_=function(r,i,o){return o===void 0&&(o=!1),xn(this.target_,r)?this.values_.has(r)?this.setObservablePropValue_(r,i):o?Reflect.set(this.target_,r,i):(this.target_[r]=i,!0):this.extend_(r,{value:i,enumerable:!0,writable:!0,configurable:!0},this.defaultAnnotation_,o)},t.has_=function(r){if(!N.trackingDerivation)return r in this.target_;this.pendingKeys_||(this.pendingKeys_=new Map);var i=this.pendingKeys_.get(r);return i||(i=new di(r in this.target_,Ol,"ObservableObject.key?",!1),this.pendingKeys_.set(r,i)),i.get()},t.make_=function(r,i){if(i===!0&&(i=this.defaultAnnotation_),i!==!1){if(!(r in this.target_)){var o;if((o=this.target_[Zt])!=null&&o[r])return;te(1,i.annotationType_,this.name_+"."+r.toString())}for(var a=this.target_;a&&a!==Rl;){var s=Qs(a,r);if(s){var l=i.make_(this,r,s,a);if(l===0)return;if(l===1)break}a=Object.getPrototypeOf(a)}Vh(this,i,r)}},t.extend_=function(r,i,o,a){if(a===void 0&&(a=!1),o===!0&&(o=this.defaultAnnotation_),o===!1)return this.defineProperty_(r,i,a);var s=o.extend_(this,r,i,a);return s&&Vh(this,o,r),s},t.defineProperty_=function(r,i,o){o===void 0&&(o=!1);try{ot();var a=this.delete_(r);if(!a)return a;if(_t(this)){var s=St(this,{object:this.proxy_||this.target_,name:r,type:Kn,newValue:i.value});if(!s)return null;var l=s.newValue;i.value!==l&&(i=bi({},i,{value:l}))}if(o){if(!Reflect.defineProperty(this.target_,r,i))return!1}else nn(this.target_,r,i);this.notifyPropertyAddition_(r,i.value)}finally{at()}return!0},t.defineObservableProperty_=function(r,i,o,a){a===void 0&&(a=!1);try{ot();var s=this.delete_(r);if(!s)return s;if(_t(this)){var l=St(this,{object:this.proxy_||this.target_,name:r,type:Kn,newValue:i});if(!l)return null;i=l.newValue}var u=Uh(r),d={configurable:N.safeDescriptors?this.isPlainObject_:!0,enumerable:!0,get:u.get,set:u.set};if(a){if(!Reflect.defineProperty(this.target_,r,d))return!1}else nn(this.target_,r,d);var f=new di(i,o,"ObservableObject.key",!1);this.values_.set(r,f),this.notifyPropertyAddition_(r,f.value_)}finally{at()}return!0},t.defineComputedProperty_=function(r,i,o){o===void 0&&(o=!1);try{ot();var a=this.delete_(r);if(!a)return a;if(_t(this)){var s=St(this,{object:this.proxy_||this.target_,name:r,type:Kn,newValue:void 0});if(!s)return null}i.name||(i.name="ObservableObject.key"),i.context=this.proxy_||this.target_;var l=Uh(r),u={configurable:N.safeDescriptors?this.isPlainObject_:!0,enumerable:!1,get:l.get,set:l.set};if(o){if(!Reflect.defineProperty(this.target_,r,u))return!1}else nn(this.target_,r,u);this.values_.set(r,new Wo(i)),this.notifyPropertyAddition_(r,void 0)}finally{at()}return!0},t.delete_=function(r,i){if(i===void 0&&(i=!1),!xn(this.target_,r))return!0;if(_t(this)){var o=St(this,{object:this.proxy_||this.target_,name:r,type:$h});if(!o)return null}try{var a,s;ot();var l=$t(this),u=!1,d=this.values_.get(r),f=void 0;if(!d&&(l||u)){var h;f=(h=Qs(this.target_,r))==null?void 0:h.value}if(i){if(!Reflect.deleteProperty(this.target_,r))return!1}else delete this.target_[r];if(d&&(this.values_.delete(r),d instanceof di&&(f=d.value_),Ny(d)),this.keysAtom_.reportChanged(),(a=this.pendingKeys_)==null||(s=a.get(r))==null||s.set(r in this.target_),l||u){var A={type:$h,observableKind:"object",object:this.proxy_||this.target_,debugObjectName:this.name_,oldValue:f,name:r};l&&Ut(this,A)}}finally{at()}return!0},t.observe_=function(r,i){return fa(this,r)},t.intercept_=function(r){return da(this,r)},t.notifyPropertyAddition_=function(r,i){var o,a,s=$t(this),l=!1;if(s||l){var u=s||l?{type:Kn,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,name:r,newValue:i}:null;s&&Ut(this,u)}(o=this.pendingKeys_)==null||(a=o.get(r))==null||a.set(!0),this.keysAtom_.reportChanged()},t.ownKeys_=function(){return this.keysAtom_.reportObserved(),Ei(this.target_)},t.keys_=function(){return this.keysAtom_.reportObserved(),Object.keys(this.target_)},e}();function ha(e,t){var n;if(xn(e,V))return e;var r=(n=t==null?void 0:t.name)!=null?n:"ObservableObject",i=new Xy(e,new Map,String(r),jS(t));return ia(e,V,i),e}var EC=Nr("ObservableObjectAdministration",Xy);function Uh(e){return Kh[e]||(Kh[e]={get:function(){return this[V].getObservablePropValue_(e)},set:function(n){return this[V].setObservablePropValue_(e,n)}})}function qo(e){return jl(e)?EC(e[V]):!1}function Vh(e,t,n){var r;(r=e.target_[Zt])==null||delete r[n]}var bC=e0(0),Pu=0,Zy=function(){};function kC(e,t){Object.setPrototypeOf?Object.setPrototypeOf(e.prototype,t):e.prototype.__proto__!==void 0?e.prototype.__proto__=t:e.prototype=t}kC(Zy,Array.prototype);var Sf=function(e,t,n){dy(r,e);function r(o,a,s,l){var u;s===void 0&&(s="ObservableArray"),l===void 0&&(l=!1),u=e.call(this)||this;var d=new _f(s,a,l,!0);if(d.proxy_=ju(u),ly(ju(u),V,d),o&&o.length){var f=ua(!0);u.spliceWithArray(0,0,o),ca(f)}return Object.defineProperty(ju(u),"0",bC),u}var i=r.prototype;return i.concat=function(){this[V].atom_.reportObserved();for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return Array.prototype.concat.apply(this.slice(),s.map(function(u){return Dl(u)?u.slice():u}))},i[n]=function(){var o=this,a=0;return Yo({next:function(){return a<o.length?{value:o[a++],done:!1}:{done:!0,value:void 0}}})},vf(r,[{key:"length",get:function(){return this[V].getArrayLength_()},set:function(a){this[V].setArrayLength_(a)}},{key:t,get:function(){return"Array"}}]),r}(Zy,Symbol.toStringTag,Symbol.iterator);Object.entries(tl).forEach(function(e){var t=e[0],n=e[1];t!=="concat"&&ia(Sf.prototype,t,n)});function e0(e){return{enumerable:!1,configurable:!0,get:function(){return this[V].get_(e)},set:function(n){this[V].set_(e,n)}}}function RC(e){nn(Sf.prototype,""+e,e0(e))}function t0(e){if(e>Pu){for(var t=Pu;t<e+100;t++)RC(t);Pu=e}}t0(1e3);function jC(e,t,n){return new Sf(e,t,n)}function ji(e,t){if(typeof e=="object"&&e!==null){if(Dl(e))return t!==void 0&&te(23),e[V].atom_;if($i(e))return e.atom_;if(Tr(e)){if(t===void 0)return e.keysAtom_;var n=e.data_.get(t)||e.hasMap_.get(t);return n||te(25,t,nd(e)),n}if(qo(e)){if(!t)return te(26);var r=e[V].values_.get(t);return r||te(27,t,nd(e)),r}if(yf(e)||Tl(e)||Zs(e))return e}else if(Ht(e)&&Zs(e[V]))return e[V];te(28)}function n0(e,t){if(e||te(29),t!==void 0)return n0(ji(e,t));if(yf(e)||Tl(e)||Zs(e)||Tr(e)||$i(e))return e;if(e[V])return e[V];te(24,e)}function nd(e,t){var n;if(t!==void 0)n=ji(e,t);else{if(wf(e))return e.name;qo(e)||Tr(e)||$i(e)?n=n0(e):n=ji(e)}return n.name_}var Hh=Rl.toString;function Cf(e,t,n){return n===void 0&&(n=-1),rd(e,t,n)}function rd(e,t,n,r,i){if(e===t)return e!==0||1/e===1/t;if(e==null||t==null)return!1;if(e!==e)return t!==t;var o=typeof e;if(o!=="function"&&o!=="object"&&typeof t!="object")return!1;var a=Hh.call(e);if(a!==Hh.call(t))return!1;switch(a){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!=+e?+t!=+t:+e==0?1/+e===1/t:+e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object Symbol]":return typeof Symbol<"u"&&Symbol.valueOf.call(e)===Symbol.valueOf.call(t);case"[object Map]":case"[object Set]":n>=0&&n++;break}e=Wh(e),t=Wh(t);var s=a==="[object Array]";if(!s){if(typeof e!="object"||typeof t!="object")return!1;var l=e.constructor,u=t.constructor;if(l!==u&&!(Ht(l)&&l instanceof l&&Ht(u)&&u instanceof u)&&"constructor"in e&&"constructor"in t)return!1}if(n===0)return!1;n<0&&(n=-1),r=r||[],i=i||[];for(var d=r.length;d--;)if(r[d]===e)return i[d]===t;if(r.push(e),i.push(t),s){if(d=e.length,d!==t.length)return!1;for(;d--;)if(!rd(e[d],t[d],n-1,r,i))return!1}else{var f=Object.keys(e),h;if(d=f.length,Object.keys(t).length!==d)return!1;for(;d--;)if(h=f[d],!(xn(t,h)&&rd(e[h],t[h],n-1,r,i)))return!1}return r.pop(),i.pop(),!0}function Wh(e){return Dl(e)?e.slice():Bi(e)||Tr(e)||oa(e)||$i(e)?Array.from(e.entries()):e}function Yo(e){return e[Symbol.iterator]=OC,e}function OC(){return this}["Symbol","Map","Set"].forEach(function(e){var t=gf();typeof t[e]>"u"&&te("MobX requires global '"+e+"' to be available or polyfilled")});typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__=="object"&&__MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({spy:qS,extras:{getDebugName:nd},$mobx:V});if(!S.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!vC)throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");function PC(e){e()}function NC(e){e||(e=PC),uC({reactionScheduler:e})}function TC(e){return cC(e)}var DC=1e4,LC=1e4,FC=function(){function e(t){var n=this;Object.defineProperty(this,"finalize",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"registrations",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"sweepTimeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sweep",{enumerable:!0,configurable:!0,writable:!0,value:function(r){r===void 0&&(r=DC),clearTimeout(n.sweepTimeout),n.sweepTimeout=void 0;var i=Date.now();n.registrations.forEach(function(o,a){i-o.registeredAt>=r&&(n.finalize(o.value),n.registrations.delete(a))}),n.registrations.size>0&&n.scheduleSweep()}}),Object.defineProperty(this,"finalizeAllImmediately",{enumerable:!0,configurable:!0,writable:!0,value:function(){n.sweep(0)}})}return Object.defineProperty(e.prototype,"register",{enumerable:!1,configurable:!0,writable:!0,value:function(t,n,r){this.registrations.set(r,{value:n,registeredAt:Date.now()}),this.scheduleSweep()}}),Object.defineProperty(e.prototype,"unregister",{enumerable:!1,configurable:!0,writable:!0,value:function(t){this.registrations.delete(t)}}),Object.defineProperty(e.prototype,"scheduleSweep",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.sweepTimeout===void 0&&(this.sweepTimeout=setTimeout(this.sweep,LC))}}),e}(),zC=typeof FinalizationRegistry<"u"?FinalizationRegistry:FC,id=new zC(function(e){var t;(t=e.reaction)===null||t===void 0||t.dispose(),e.reaction=null}),r0={exports:{}},i0={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oi=S;function IC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var MC=typeof Object.is=="function"?Object.is:IC,BC=Oi.useState,KC=Oi.useEffect,$C=Oi.useLayoutEffect,UC=Oi.useDebugValue;function VC(e,t){var n=t(),r=BC({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return $C(function(){i.value=n,i.getSnapshot=t,Nu(i)&&o({inst:i})},[e,n,t]),KC(function(){return Nu(i)&&o({inst:i}),e(function(){Nu(i)&&o({inst:i})})},[e]),UC(n),n}function Nu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!MC(e,n)}catch{return!0}}function HC(e,t){return t()}var WC=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?HC:VC;i0.useSyncExternalStore=Oi.useSyncExternalStore!==void 0?Oi.useSyncExternalStore:WC;r0.exports=i0;var QC=r0.exports,GC=globalThis&&globalThis.__read||function(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,o=[],a;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(s){a={error:s}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return o},qC=function(){},o0=$S(),a0=typeof o0.stateVersion<"u";function Qh(e){e.reaction=new Xs("observer".concat(e.name),function(){var t;a0||(e.stateVersion=Symbol()),(t=e.onStoreChange)===null||t===void 0||t.call(e)})}function YC(e,t){t===void 0&&(t="observed");var n=It.useRef(null),r=GC(It.useState(),2),i=r[1];if(!n.current){var o={reaction:null,onStoreChange:null,stateVersion:Symbol(),name:t,subscribe:function(u){return id.unregister(o),o.onStoreChange=u,o.reaction||(Qh(o),i(Symbol())),function(){var d;o.onStoreChange=null,(d=o.reaction)===null||d===void 0||d.dispose(),o.reaction=null}},getSnapshot:function(){return a0?o0.stateVersion:o.stateVersion}};n.current=o}var a=n.current;a.reaction||(Qh(a),id.register(n,a,a)),It.useDebugValue(a.reaction,TC),QC.useSyncExternalStore(a.subscribe,a.getSnapshot,qC);var s,l;if(a.reaction.track(function(){try{s=e()}catch(u){l=u}}),l)throw l;return s}var s0=typeof Symbol=="function"&&Symbol.for,Gh=s0?Symbol.for("react.forward_ref"):typeof S.forwardRef=="function"&&S.forwardRef(function(e){return null}).$$typeof,qh=s0?Symbol.for("react.memo"):typeof S.memo=="function"&&S.memo(function(e){return null}).$$typeof;function gt(e,t){var n;if(qh&&e.$$typeof===qh)throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");var r=(n=t==null?void 0:t.forwardRef)!==null&&n!==void 0?n:!1,i=e,o=e.displayName||e.name;if(Gh&&e.$$typeof===Gh&&(r=!0,i=e.render,typeof i!="function"))throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var a=function(s,l){return YC(function(){return i(s,l)},o)};return a.displayName=e.displayName,Object.defineProperty(a,"name",{value:e.name,writable:!0,configurable:!0}),e.contextTypes&&(a.contextTypes=e.contextTypes),r&&(a=S.forwardRef(a)),a=S.memo(a),XC(e,a),a}var JC={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};function XC(e,t){Object.keys(e).forEach(function(n){JC[n]||Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}globalThis&&globalThis.__read;var Tu;NC(Sv.unstable_batchedUpdates);Tu=id.finalizeAllImmediately;const ZC=E.div`
  margin-bottom: 100px;

  @media screen and (max-width: 1169px) {
    width: 100%;

    margin-bottom: 46px;
  }

  @media screen and (max-width: 680px) {
    margin-bottom: 46px;
  }
`,eE=E.div`
  width: 100%;
  display: flex;
  gap: 30px;
  margin-bottom: 46px;

  @media screen and (max-width: 1169px) {
    gap: 20px;
    margin-bottom: 60px;
  }

  @media screen and (max-width: 680px) {
    align-items: center;
    gap: 6px;
    margin-bottom: 30px;
    flex-direction: column;
  }
`,tE=E.div`
  max-width: 370px;
  height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
  border-radius: ${e=>e.theme.borderRadius};
  color: ${e=>e.color};
  background-color: ${e=>e.bgcolor};
  font-family: "Rubik";
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  text-align: center;

  @media screen and (max-width: 1169px) {
    max-width: 300px;
    height: 58px;
    font-size: 20px;
  }

  @media screen and (max-width: 680px) {
    max-width: 340px;
    height: 38px;
    font-size: 15px;
    width: 100%;
  }
`,nE=E.div`
  max-width: 370px;
  height: 76px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;

  border-radius: ${e=>e.theme.borderRadius};
  color: ${e=>e.theme.colors.text};
  background-color: ${e=>e.theme.colors.primary};
  overflow: hidden;

  @media screen and (max-width: 1169px) {
    max-width: 300px;
    width: 100%;
    height: 58px;
  }

  @media screen and (max-width: 680px) {
    max-width: 340px;
    height: 38px;
  }

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 5px;
    bottom: 0;
    background-color: ${e=>e.theme.colors.primaryDark};
    z-index: 2;

    @media screen and (max-width: 1169px) {
      height: 3px;
    }

    @media screen and (max-width: 680px) {
      height: 2px;
    }
  }
  &::after {
    position: absolute;
    align-self: flex-start;
    content: "";
    width: ${e=>e.percentage}%;
    height: 5px;
    bottom: 0;
    background-color: ${e=>e.theme.colors.secondary};
    z-index: 3;

    @media screen and (max-width: 1169px) {
      height: 3px;
    }

    @media screen and (max-width: 680px) {
      height: 2px;
    }
  }
`,rE=E.div`
  display: block;
  text-align: center;
  font-family: "Rubik";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130.5%;

  @media screen and (max-width: 1169px) {
    font-size: 15px;
  }

  @media screen and (max-width: 720px) {
    font-size: 12px;
  }

  @media screen and (max-width: 680px) {
    font-size: 10px;
  }
`,iE=E.div`
  display: block;
  font-family: "Rubik";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;

  @media screen and (max-width: 1169px) {
    font-size: 22px;
  }

  @media screen and (max-width: 680px) {
    font-size: 18px;
  }

  span {
    font-size: 18px;

    @media screen and (max-width: 1169px) {
      font-size: 16px;
    }

    @media screen and (max-width: 680px) {
      font-size: 12px;
    }
  }
`;function Du(e){return e.color?c.jsx(tE,{bgcolor:e.bgcolor,color:e.color,children:e.children}):c.jsxs(nE,{percentage:e.percentage,children:[c.jsx(rE,{children:"До перехода в новый статус осталось"}),c.jsxs(iE,{children:[e.percentage,"%",c.jsxs("span",{children:[" (",e.point," BYN)"]})]})]})}class oE{constructor(){ee(this,"current");ee(this,"next");pa(this)}setCurrent(t){this.current=t}setNext(t){this.next=t}}const ma=new oE;ma.setCurrent({name:"Silver",percentage:5,condition:void 0,labelColor:"#000000",labelBackgroundColor:"#F6F7FC",backgroundColor:"#FFFFFF"});ma.setNext({name:"GOLD",percentage:20,condition:{percentage:60,point:15e4},labelColor:"#868686",labelBackgroundColor:"#FBF6E9",backgroundColor:"#FFFFFF"});const aE=gt(()=>{var n,r,i;const{next:e,current:t}=ma;return!(t!=null&&t.percentage)||!(e!=null&&e.percentage)||!((n=e.condition)!=null&&n.percentage)?c.jsx("div",{children:"...loading"}):c.jsxs(eE,{children:[c.jsx(Du,{color:t==null?void 0:t.labelColor,bgcolor:t==null?void 0:t.labelBackgroundColor,percentage:t==null?void 0:t.percentage,children:`Текущая скидка ${t==null?void 0:t.percentage}%`}),c.jsx(Du,{percentage:(r=e==null?void 0:e.condition)==null?void 0:r.percentage,point:(i=e==null?void 0:e.condition)==null?void 0:i.point}),c.jsxs(Du,{color:e==null?void 0:e.labelColor,bgcolor:e==null?void 0:e.labelBackgroundColor,percentage:e==null?void 0:e.percentage,children:[e==null?void 0:e.name,`(скидка ${e==null?void 0:e.percentage}%)`]})]})});class sE{constructor(){ee(this,"info",{isVisible:!1,text:"",link:"",buttonText:""});ee(this,"setInfo",t=>{this.info={...t}});ee(this,"setVisible",t=>{this.info={...this.info,isVisible:t}});pa(this)}}const ga=new sE,lE=E(sn)`
  justify-self: flex-end;
  width: 215px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  font-family: "Raleway";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 111.5%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.secondary};
  color: ${e=>e.theme.colors.textWhite};

  &:hover {
    background: #1245a9;
    box-shadow: 0px 5px 30px 0px rgba(81, 81, 81, 0.4);
    color: ${e=>e.theme.colors.textWhite};
    text-decoration: none;
  }

  &:focus {
    background: #1245a9;
    box-shadow: none;
  }
`;function Ef({to:e,children:t,onClick:n}){return c.jsx(lE,{to:e,onClick:n,children:t})}const bf="/assets/cross-52362f94.svg",uE=E.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 00%;
  left: 00%;
  display: ${e=>e.$visible?"flex":"none"};
  justify-content: center;
  align-items: center;
  z-index: 100;
  overflow: hidden;
  background: rgba(68, 75, 89, 0.97);
`,cE=E.div`
  position: relative;
  width: 770px;
  height: 330px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.primary};

  @media screen and (max-width: 1169px) {
    width: 550px;
  }

  @media screen and (max-width: 680px) {
    width: 340px;
  }
`,dE=E.div`
  max-width: 560px;
  color: ${e=>e.theme.colors.text};
  text-align: center;
  font-family: "Rubik";
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 130.5%;
`,fE=E(sn)`
  position: absolute;
  top: 7px;
  right: 7px;
  width: 22px;
  height: 22px;
  transform: rotate(90deg);
  background-image: url(${bf});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;

  @media screen and (max-width: 1169px) {
    width: 44px;
    height: 44px;
  }

  @media screen and (max-width: 680px) {
  }
`,kf=gt(()=>{const{info:e,setInfo:t}=ga,n=()=>{t({isVisible:!1,text:"",link:"",buttonText:""})};return S.useEffect(()=>{console.log(e)},[e]),c.jsx(uE,{$visible:e.isVisible,children:c.jsxs(cE,{children:[c.jsx(dE,{children:e.text}),c.jsx(Ef,{to:`/cab${e.link}`,onClick:n,children:e.buttonText}),c.jsx(fE,{to:e.link,onClick:n})]})})}),pE=gt(({user:e})=>{const t=hf();return e!=null&&e.data||t("/form"),c.jsxs(ZC,{children:[c.jsx(kf,{}),c.jsx(aE,{}),c.jsx(ty,{})]})}),hE="/assets/sight-a2bf1ff0.svg",mE=E.div`
  display: flex;

  label[for="agent"] {
    margin-bottom: 38px;
  }

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  input[type="checkbox"]:checked + label::after {
    position: absolute;
    width: 20px;
    height: 23px;
    bottom: 2px;
    left: 2px;
    content: "";
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${hE});
    background-size: contain;
    z-index: 2;
  }

  label {
    display: inline-flex;
    position: relative;
    align-items: center;
    height: 21px;
    user-select: none;
    cursor: pointer;
  }

  label::before {
    background-color: white;
    content: "";
    display: inline-block;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid ${e=>e.theme.colors.secondaryDark};
    border-radius: 3px;
    margin-right: 5px;
    z-index: 1;
  }

  @media screen and (max-width: 1169px) {
    label {
      font-size: 14px;
    }
  }
`;function kr({children:e,id:t,isChecked:n,onChange:r}){return c.jsxs(mE,{children:[c.jsx("input",{type:"checkbox",name:t,id:t,checked:n,onChange:()=>{r(!n)}}),c.jsx("label",{htmlFor:t,children:e})]})}const gE=E.input`
  max-width: 370px;
  width: 100%;
  height: 40px;
  padding: 10px 17px 10px 17px;
  border-radius: 3px;
  border: 1px solid ${e=>e.theme.colors.secondaryDark};
  color: ${e=>e.theme.colors.text};
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "Raleway";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130.5%;
  outline-color: ${e=>e.theme.colors.secondaryDark};
  grid-area: ${e=>e.area?e.area:""};

  ::placeholder {
    color: ${e=>e.theme.colors.textGrayLight};
  }

  &[type="number"] {
    appearance: textfield;
  }
  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  &.error {
    border-color: red;
  }

  @media screen and (max-width: 1169px) {
    max-width: 300px;
    min-width: 215px;
    padding: 10px 14px;
    flex: 1 1 auto;
  }

  @media screen and (max-width: 680px) {
    max-width: 100%;
  }
`;function Qe({children:e,className:t,type:n,placeholder:r,value:i,required:o,name:a,minLength:s,maxLength:l,area:u,onChange:d}){return c.jsx(gE,{type:n,className:t,placeholder:r,value:i,required:o,name:a,minLength:s,maxLength:l,area:u,onChange:f=>{d(f.target.value)},children:e})}const vE=E.div`
  margin-bottom: 22px;
  display: flex;
  gap: 5px;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;

  @media screen and (max-width: 680px) {
    font-size: 13px;
  }
`,yE="/assets/hint-3cce6d49.svg";function od({children:e,className:t}){return c.jsxs(vE,{className:t,children:[c.jsx("img",{src:yE,width:18,height:18,alt:""}),e]})}const xE=E(sn)`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  text-decoration: none;
`;function l0({children:e,className:t,to:n}){return c.jsx(xE,{to:n,className:t,children:e})}const AE=E.h2`
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 16px;
`,Lu=E.div`
  display: flex;
  gap: 30px;

  margin-bottom: 20px;

  @media screen and (max-width: 1169px) {
    gap: 10px;
  }

  @media screen and (max-width: 680px) {
    flex-direction: column;
    max-width: 370px;
  }
`,wE=E.div`
  display: flex;
  gap: 9px;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;

  @media screen and (max-width: 1169px) {
    max-width: 300px;
    min-width: 215px;
    flex: 1 1 auto;
  }

  @media screen and (max-width: 680px) {
    max-width: 370px;
  }
`,_E=E.form`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 680px) {
    max-width: 340px;
  }
`,SE=E.button`
  align-self: center;
  width: 370px;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  font-family: "Raleway";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 111.5%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.secondary};
  color: ${e=>e.theme.colors.textWhite};

  &:hover {
    background: #1245a9;
    box-shadow: 0px 21px 30px 0px rgba(81, 81, 81, 0.4);
  }

  &:active,
  &:focus {
    background: #1245a9;
    box-shadow: none;
    outline: none;
  }

  &:disabled {
    opacity: 0.7;
  }

  &:disabled:active,
  &:disabled:focus,
  &:disabled:hover {
    box-shadow: none;
    cursor: default;
    background-color: ${e=>e.theme.colors.secondary};
  }

  @media screen and (max-width: 1169px) {
    width: 300px;
  }

  @media screen and (max-width: 680px) {
    width: 100%;
  }
`,CE="/assets/loader-edfbca21.svg";function Ui({value:e,className:t,disabled:n,isLoading:r}){return c.jsxs(SE,{className:t,type:"submit",disabled:n,children:[!r&&e,r&&c.jsx("img",{src:CE,alt:""})]})}function EE(e){const t={result:!0,badFields:[]};return e.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)===null&&(t.result=!1,t.badFields.push("email")),t}function bE(e){const t={result:!0,badFields:[]};return e.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)===null&&(t.result=!1,t.badFields.push("email")),t}function kE(e){const t={result:!0,badFields:[]};return e.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)===null&&(t.result=!1,t.badFields.push("email")),e.password!==e.repeatedPassword&&(t.result=!1,t.badFields.push("repeatedPassword")),t}function u0(e){const t={result:!0,badFields:[]};return e.name.length<2&&(t.result=!1,t.badFields.push("name")),e.phone.match(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/)===null&&(t.result=!1,t.badFields.push("phone")),e.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)===null&&(t.result=!1,t.badFields.push("email")),e.organization.length<3&&(t.result=!1,t.badFields.push("organization")),e.uAddress.length<4&&(t.result=!1,t.badFields.push("uAddress")),e.fAddress&&e.fAddress.length<4&&(t.result=!1,t.badFields.push("fAddress")),e.INN.length!==8&&(t.result=!1,t.badFields.push("inn")),t}function RE(e){const t={result:!0,badFields:[]};return e.inn.length!==8&&(t.result=!1,t.badFields.push("inn")),e.name.length<2&&(t.result=!1,t.badFields.push("name")),e.address.length<4&&(t.result=!1,t.badFields.push("address")),e.mark.length<2&&(t.result=!1,t.badFields.push("mark")),e.count<=0&&(t.result=!1,t.badFields.push("count")),e.dealerManager.length<2&&(t.result=!1,t.badFields.push("dealerManager")),e.dealerName.length<2&&(t.result=!1,t.badFields.push("dealerName")),e.manager.length<2&&(t.result=!1,t.badFields.push("manager")),e.phone.match(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/)===null&&(t.result=!1,t.badFields.push("phone")),t}class jE{constructor(){ee(this,"user");ee(this,"isAuthorized",!1);ee(this,"setUser",t=>{this.user={...t},localStorage.setItem("user",JSON.stringify(t))});ee(this,"removeUser",()=>{this.user=void 0});ee(this,"setUserData",(t,n)=>{this.user&&(this.user={...this.user,data:t,email:n},localStorage.setItem("user",JSON.stringify(this.user)))});pa(this)}}const Vi=new jE;function OE(){const{setUserData:e}=Vi,[t,n]=S.useState({name:"",phone:"",email:"",isAgent:!1,organization:"",uAddress:"",isAddressEquals:!1,fAddress:"",INN:""}),[r,i]=S.useState({result:!1,badFields:[]});S.useEffect(()=>{t.isAddressEquals&&t.fAddress&&(t.fAddress=null),console.log(t)},[t]);const o=l=>S.useCallback(u=>{n({...t,[l]:u})},[l,t]),a=o("fAddress"),s=l=>{l.preventDefault();const u=u0(t);i(u),u.result&&(console.log("push to server"),e({name:t.name,phone:t.phone,companyName:t.organization,legalAddress:t.uAddress,physicalAddress:t.fAddress?t.fAddress:t.uAddress,inn:t.INN,isAgent:t.isAgent},t.email))};return c.jsxs(_E,{onSubmit:s,children:[c.jsx(AE,{children:"Введите контактные данные"}),c.jsxs(od,{children:[" ","Уже покупаете у нас? Войдите в"," ",c.jsx(l0,{to:"/login",children:"личный кабинет"})]}),c.jsxs(Lu,{children:[c.jsx(Qe,{type:"text",placeholder:"Имя",name:"firstName",required:!0,onChange:o("name"),className:r.badFields.find(l=>l==="name")?"error":""}),c.jsx(Qe,{type:"tel",placeholder:"Телефон",name:"phone",required:!0,onChange:o("phone"),className:r.badFields.find(l=>l==="phone")?"error":""}),c.jsx(Qe,{type:"email",placeholder:"Email",required:!0,onChange:o("email"),className:r.badFields.find(l=>l==="email")?"error":""})]}),c.jsx(kr,{id:"agent",onChange:o("isAgent"),isChecked:t.isAgent,children:"Я представитель юридического лица или ИП"}),c.jsx(od,{children:"Данной организации еше нет в нашей базе. Пожалуйста, введите по ней информацию."}),c.jsxs(Lu,{children:[c.jsx(Qe,{type:"text",placeholder:"Название организации*",name:"organization",required:!0,onChange:o("organization"),className:r.badFields.find(l=>l==="organization")?"error":""}),c.jsxs(wE,{children:[c.jsx(Qe,{type:"text",placeholder:"Юридический адрес*",name:"address",required:!0,onChange:o("uAddress"),className:r.badFields.find(l=>l==="uAddress")?"error":""}),c.jsx(kr,{id:"isAddressEquals",isChecked:t.isAddressEquals,onChange:o("isAddressEquals"),children:"Совпадает с физическим"})]}),t.isAddressEquals?void 0:c.jsx(Qe,{type:"text",placeholder:"Физический адрес*",name:"address",required:!0,onChange:a,className:r.badFields.find(l=>l==="fAddress")?"error":""})]}),c.jsx(Lu,{children:c.jsx(Qe,{type:"number",placeholder:"ИНН*",name:"INN",required:!0,minLength:8,maxLength:8,onChange:o("INN"),className:r.badFields.find(l=>l==="inn")?"error":""})}),c.jsx(Ui,{value:"Продолжить"})]})}const PE=E.div`
  width: 100%;
  height: 100%;
  background: ${e=>e.bgcolor};
  position: relative;
`,NE=E.div`
  width: 1170px;
  margin: 0 auto;
  padding-top: 47px;
  padding-bottom: 100px;

  background: ${e=>e.bgcolor};
  color: ${e=>e.theme.colors.text};
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "Raleway";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130.5%;

  @media screen and (max-width: 1169px) {
    width: auto;
    max-width: 970px;
    margin: auto;
    padding: 0 10px;
    padding-top: 25px;
    padding-bottom: 46px;
  }

  @media screen and (max-width: 680px) {
    width: auto;
    margin: 0 10px;
    padding: 0;
    margin-top: 27px;
    padding-bottom: 46px;
    padding-top: 12px;
    display: flex;
    justify-content: center;
  }
`,TE=E.h1`
  margin-bottom: 30px;
  color: ${e=>e.theme.colors.text};
  font-family: "Rubik";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130.5%;
  text-transform: uppercase;
`,DE=E.div`
  display: flex;
  width: 100%;
  gap: 18px;

  @media screen and (max-width: 680px) {
    flex-direction: column;
  }
`,LE=E.div`
  width: 100%;
  height: fit-content;
`,FE=E.li`
  width: 270px;
  height: 70px;

  @media screen and (max-width: 1169px) {
    width: 170px;
  }

  @media screen and (max-width: 680px) {
    width: 166px;
    height: 47px;
  }
`,zE=E.a`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 50px;
  position: relative;
  color: ${e=>e.theme.colors.textWhite};
  background-color: ${e=>e.theme.colors.secondary};
  border-radius: ${e=>e.theme.borderRadius};
  font-family: "Rubik";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
  outline: none;

  &:hover {
    color: ${e=>e.theme.colors.textWhite};
    text-decoration: none;
  }

  &.active {
    width: calc(100% - 2px);
    font-weight: 600;
    border-left: 2px solid ${e=>e.theme.colors.secondary};
  }

  @media screen and (max-width: 1169px) {
    padding-left: 13px;
    font-size: 16px;
  }

  @media screen and (max-width: 680px) {
    padding-left: 0;
    justify-content: center;
    font-size: 15px;
  }
`;function IE(){return c.jsx(FE,{onClick:()=>{localStorage.removeItem("user"),localStorage.removeItem("token")},children:c.jsx(zE,{href:"/cab",children:"Выйти"})})}const ME=E.li`
  width: 270px;
  height: 70px;

  @media screen and (max-width: 1169px) {
    width: 170px;
  }

  @media screen and (max-width: 680px) {
    width: 166px;
    height: 47px;
  }
`,BE=E(Pr)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 50px;
  position: relative;
  color: ${e=>e.theme.colors.text};
  background-color: ${e=>e.theme.colors.primary};
  border-radius: ${e=>e.theme.borderRadius};
  font-family: "Rubik";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
  outline: none;

  &.active {
    width: calc(100% - 2px);
    font-weight: 600;
    border-left: 2px solid ${e=>e.theme.colors.secondary};
  }

  @media screen and (max-width: 1169px) {
    padding-left: 13px;
    font-size: 16px;
  }

  @media screen and (max-width: 680px) {
    padding-left: 0;
    justify-content: center;
    font-size: 15px;
  }
`;function Nn({children:e,to:t}){return c.jsx(ME,{children:c.jsx(BE,{to:t,children:e})})}const KE=E.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;

  @media screen and (max-width: 1169px) {
    gap: 8px;
  }

  @media screen and (max-width: 680px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }
`;function $E(){return c.jsxs(KE,{children:[c.jsx(Nn,{to:"messages",children:"Сообщения"}),c.jsx(Nn,{to:"store",children:"Склад"}),c.jsx(Nn,{to:"documentation",children:"Документация"}),c.jsx(Nn,{to:"booking",children:"Бронирование"}),c.jsx(Nn,{to:"price",children:"Прайсы"}),c.jsx(Nn,{to:"my",children:"Моё оборудование"}),c.jsx(Nn,{to:"account",children:"Учётная запись"}),c.jsx(Nn,{to:"history",children:"История заказов"}),c.jsx(IE,{})]})}function UE(){return c.jsxs("div",{children:[c.jsx(TE,{children:"Личный кабинет"}),c.jsxs(DE,{children:[c.jsx($E,{}),c.jsx(LE,{children:c.jsx(ty,{})})]})]})}const VE=E.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,HE=E.div`
  display: flex;
  flex-direction: column;
`,Fu="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAC2AS8DAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+sigAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAP/Z",WE=[{image:Fu,title:"Toyota теперь предоставляет гарантию на автомобили до 10 лет",text:"Toyota запустила новую гарантию Toyota Relax для новых автомобилей и автомобилей с пробегом в Казахстане. Теперь у владельцев моделей Toyota есть уникальная возможность получить гарантию Toyota Relax до 10 лет. Toyota запустила новую гарантию Toyota Relax для новых автомобилей и автомобилей с пробегом в Казахстане. Теперь у владельцев моделей Toyota есть уникальная возможность получить гарантию Toyota Relax до 10 лет.",date:"2023-02-27",url:"google.com"},{image:Fu,title:"Toyota теперь предоставляет гарантию на автомобили до 10 лет",text:"Toyota запустила новую гарантию Toyota Relax для новых автомобилей и автомобилей с пробегом в Казахстане. Теперь у владельцев моделей Toyota есть уникальная возможность получить гарантию Toyota Relax до 10 лет. Toyota запустила новую гарантию Toyota Relax для новых автомобилей и автомобилей с пробегом в Казахстане. Теперь у владельцев моделей Toyota есть уникальная возможность получить гарантию Toyota Relax до 10 лет.",url:"google.com",date:"2023-02-27"},{image:Fu,title:"Toyota теперь предоставляет гарантию на автомобили до 10 лет",text:"Toyota запустила новую гарантию Toyota Relax для новых автомобилей и автомобилей с пробегом в Казахстане. Теперь у владельцев моделей Toyota есть уникальная возможность получить гарантию Toyota Relax до 10 лет. Toyota запустила новую гарантию Toyota Relax для новых автомобилей и автомобилей с пробегом в Казахстане. Теперь у владельцев моделей Toyota есть уникальная возможность получить гарантию Toyota Relax до 10 лет.",url:"google.com",date:"2023-02-27"}],QE=E(sn)`
  display: flex;
  padding: 22px;
  gap: 22px;
  background-color: ${e=>e.theme.colors.primary};
  border-radius: ${e=>e.theme.borderRadius};

  text-decoration: none;
  color: inherit;

  @media screen and (max-width: 1169px) {
    gap: 10px;
    padding: 18px 14px;
  }

  @media screen and (max-width: 680px) {
    gap: 14px;
    padding: 6px;
    flex-direction: column;
  }
`,GE=E.img`
  display: block;
  flex: 1 1 300px;
  object-fit: cover;
  object-position: center;
  max-width: 300px;
  min-width: 150px;

  @media screen and (max-width: 1169px) {
    flex: 1 1 270px;
  }

  @media screen and (max-width: 680px) {
    flex: none;
    max-width: 100%;
  }
`,qE=E.div`
  flex: 1 1 520px;

  @media screen and (max-width: 1169px) {
    flex: 1 1 470px;
  }

  @media screen and (max-width: 680px) {
    flex: none;
  }
`,YE=E.h3`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 17px;
  text-overflow: ellipsis;
  color: ${e=>e.theme.colors.text};
  font-family: "Rubik";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;

  @media screen and (max-width: 1169px) {
    font-size: 16px;
  }

  @media screen and (max-width: 680px) {
    font-size: 15px;
  }
`,JE=E.p`
  margin-bottom: 13px;
  color: ${e=>e.theme.colors.text};
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "Raleway";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media screen and (max-width: 1169px) {
    font-size: 15px;
  }
`,XE=E.time`
  color: ${e=>e.theme.colors.text};
  font-family: "Rubik";
  font-size: 16px;
  font-style: italic;
  font-weight: 300;
  line-height: 130%;

  @media screen and (max-width: 1169px) {
    font-size: 15px;
  }
`;function ZE({item:e,to:t}){return c.jsxs(QE,{to:t,children:[c.jsx(GE,{src:e.image,alt:""}),c.jsxs(qE,{children:[c.jsx(YE,{children:e.title}),c.jsx(JE,{children:e.text}),c.jsx(XE,{dateTime:e.date,children:e.date.split("-").reverse().join(".")})]})]})}const eb=E.button`
  margin-top: 27px;
  align-self: center;
  width: 215px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  font-family: "Raleway";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 111.5%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.secondary};
  color: ${e=>e.theme.colors.textWhite};

  &:hover {
    background: #1245a9;
    box-shadow: 0px 21px 30px 0px rgba(81, 81, 81, 0.4);
  }

  &:active,
  &:focus {
    background: #1245a9;
    box-shadow: none;
  }

  @media screen and (max-width: 1169px) {
    margin-top: 24px;
    font-size: 16px;
  }

  @media screen and (max-width: 680px) {
    margin-top: 20px;
  }
`;function tb({children:e,className:t}){return c.jsx(eb,{className:t,children:e})}function Yh(){return c.jsxs(HE,{children:[c.jsx(VE,{children:WE.map((e,t)=>c.jsx(ZE,{item:e,to:"/message1"},t))}),c.jsx(tb,{children:"Смотреть больше"})]})}const nb=E.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${e=>e.theme.colors.primary};
  border-radius: ${e=>e.theme.borderRadius};
`,rb=E.img`
  margin-bottom: 11px;
  width: 94px;
  height: 94px;
  object-fit: contain;
  object-position: center;
`,ib=E.div`
  color: ${e=>e.theme.colors.text};
  font-family: "Rubik";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 130.5%;
`,ob=E.a`
  text-decoration: underline;
  color: inherit;
`,ab="/assets/msexcel-f86bcc5f.svg";function c0({link:e,children:t}){return c.jsxs(nb,{children:[c.jsx(rb,{src:ab,alt:"Excel SpreadSheet"}),c.jsxs(ib,{children:[c.jsx(ob,{download:!0,href:e,children:"Скачать"})," ",t]})]})}function sb(){return c.jsx(c0,{link:"text.csv",children:"остатки"})}function lb(){return c.jsx(c0,{link:"text.csv",children:"прайс-лист"})}const ub=E(sn)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 420px;
  height: 160px;
  max-width: 420px;

  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.primary};
  color: ${e=>e.theme.colors.text};
  text-align: center;
  font-family: "Rubik";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 130.5%;
  text-decoration: none;

  @media screen and (max-width: 1169px) {
    flex: 1 1 370px;
    max-width: 370px;
  }

  @media screen and (max-width: 680px) {
    flex: none;
    width: 100%;
    font-size: 15px;
  }
`;function Va({children:e,to:t}){return c.jsx(ub,{to:t,children:e})}const cb=E.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 30px;
  justify-content: space-between;

  @media screen and (max-width: 1169px) {
    gap: 20px;
  }

  @media screen and (max-width: 680px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`;function db(){return c.jsxs(cb,{children:[c.jsx(Va,{to:"instructions",children:"Инструкции по эксплуатации"}),c.jsx(Va,{to:"certificates",children:"Сертификаты"}),c.jsx(Va,{to:"techinfo",children:"Техническая информация"}),c.jsx(Va,{to:"typedcomertial",children:"Образцы коммерческих предложений"})]})}const fb=E.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 17px 15px 10px 15px;
  height: 130px;

  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.primary};

  color: ${e=>e.theme.colors.text};
  font-family: "Rubik";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130.5%;
  text-decoration: none;

  @media screen and (max-width: 1169px) {
    height: 160px;
  }

  @media screen and (max-width: 680px) {
    height: 125px;
  }
`,pb=E.img`
  width: 15px;
  height: 15px;
  object-fit: contain;
  object-position: center;
`,hb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADfSURBVHgBlZMxDoJAEEU/xE4TKe3EE6iVsRILGyv0AuIp7IycwcrKwgPY2RpPoPECcgQ8gf51l0AQNrs/ecnuAH9nZhkHuVrkRN7kg38FZEoS1CgiK9TrTq7ELwbdwrqrc6dSsibHookLc7WJR2JyzkxsDJYkhOzDE6rchsGH4rQFZHk7FQvIxDQDT/dQZxCW9vOql3QljElPrbfEIRdYZLAhfTKEvOLYNgOhCPndw8ZggLx5L8iuC4mf6WFiMCKdiniiM0jVyTdygF6+Mvt1NpOYxj1Kw1KhJuTEzsTmC+hzH63aumPzAAAAAElFTkSuQmCC";function mb({title:e,link:t}){return c.jsxs(fb,{download:!0,href:t,children:[c.jsx("p",{children:e}),c.jsxs("p",{children:["Скачать ",c.jsx(pb,{src:hb})]})]})}const gb=[{title:"ins"},{title:"ins"},{title:"ins"},{title:"ins"},{title:"ins"},{title:"ins"},{title:"ins"},{title:"ins"},{title:"ins"},{title:"ins"}],vb=E.div`
  margin-bottom: 28px;

  color: ${e=>e.theme.colors.textGray};
  font-family: "Raleway";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 130.5%;

  span {
    color: ${e=>e.theme.colors.textGrayDark};
  }

  @media screen and (max-width: 680px) {
    font-size: 13px;
  }
`,yb=E.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px 23px;

  @media screen and (max-width: 1169px) {
    gap: 30px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media screen and (max-width: 680px) {
    gap: 10px;
    grid-template-columns: 1fr 1fr;
  }
`;function Ha({title:e}){return c.jsxs("div",{children:[c.jsxs(vb,{children:[c.jsx(sn,{to:"../../documentation",style:{textDecoration:"none",color:"inherit"},children:"Документация"})," ","/ ",c.jsx("span",{children:e})]}),c.jsx(yb,{children:gb.map((t,n)=>c.jsx(mb,{title:t.title,link:`/${n}`},n))})]})}const xb=E.div`
  display: flex;
  gap: 20px;
  width: 100%;
  flex-direction: column;
  border-radius: ${e=>e.theme.borderRadius};

  @media screen and (max-width: 1169px) {
  }

  @media screen and (max-width: 680px) {
    background-color: ${e=>e.theme.colors.primary};
    flex-direction: column-reverse;
  }
`,Ab=E.div`
  width: 100%;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: ${e=>e.theme.colors.primary};
  border-radius: ${e=>e.theme.borderRadius};
`,wb=E.div`
  display: flex;
  gap: 36px;

  @media screen and (max-width: 680px) {
    font-size: 13px;
  }
`,_b=E.div`
  display: grid;
  height: 40px;
  align-items: center;
  grid-template-columns: 1fr 3.5fr 15fr 4.5fr 4.5fr 4.5fr 1fr;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.textWhite};

  span {
    text-align: center;
  }

  @media screen and (max-width: 680px) {
    display: none;
  }
`,Sb=E.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
  gap: 7px;
  color: ${e=>e.theme.colors.textGrayDark};
  font-family: "Raleway";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  @media screen and (max-width: 680px) {
    font-size: 13px;
  }
`,Cb=E.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: ${e=>e.theme.colors.textGrayDark};
  font-family: "Raleway";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  @media screen and (max-width: 680px) {
    font-size: 13px;
  }
`,Eb=E.div`
  width: 25px;
  height: 25px;
  background: transparent;
  border: none;
  outline: none;
  background: url(${bf});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transform: rotate(90deg);
  cursor: pointer;
`;class bb{constructor(){ee(this,"items",[]);ee(this,"addItems",t=>{this.items=t});ee(this,"getCount",t=>t.filter(r=>r.isSelected===!0).reduce((r,i)=>i.count+r,0));ee(this,"setCount",(t,n)=>{const r=this.items.findIndex(o=>o.id===t.id),i={...t,count:n};this.items.splice(r,1,i)});ee(this,"getWeight",t=>t.filter(i=>i.isSelected===!0).reduce((i,o)=>o.weight*o.count+i,0)/1e3);ee(this,"getCost",t=>t.filter(r=>r.isSelected===!0).reduce((r,i)=>i.price*i.count+r,0));ee(this,"isItemSelected",t=>{const n=this.items.findIndex(r=>r.id===t.id);return this.items[n]?this.items[n].isSelected:!1});ee(this,"changeSelect",(t,n)=>{const r=this.items.findIndex(i=>i.id===t.id);this.items[r]={...this.items[r],isSelected:n}});ee(this,"getItem",t=>{const n=this.items.findIndex(r=>r.id===t);return this.items[n]});ee(this,"selectAll",()=>{this.items=this.items.map(t=>({...t,isSelected:!0}))});ee(this,"isAllSelected",()=>{let t=!0;return this.items.forEach(n=>{n.isSelected||(t=!1)}),t});ee(this,"onSelectAllClick",()=>{this.isAllSelected()?this.items=this.items.map(t=>({...t,isSelected:!1})):this.selectAll()});ee(this,"clearItems",()=>{this.items=[]});ee(this,"removeItem",t=>{this.items=this.items.filter(n=>n.id!==t.id)});ee(this,"removeSelected",()=>{this.items=this.items.filter(t=>t.isSelected===!1)});pa(this,{},{autoBind:!0})}}const Ll=new bb,kb=E.div`
  display: grid;
  grid-template-columns: 1fr 3.5fr 15fr 4.5fr 4.5fr 4.5fr 1fr;
  align-items: center;

  @media screen and (max-width: 680px) {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;
  }
`,Rb=E.img`
  display: flex;
  object-fit: contain;
  object-position: center;

  width: 100%;
  height: 44px;

  @media screen and (max-width: 680px) {
    width: 72px;
  }
`,jb=E.div`
  color: ${e=>e.theme.colors.text};
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 130.5%;
  text-transform: uppercase;

  &.disabled {
    color: ${e=>e.theme.colors.textGrayLight};
  }

  @media screen and (max-width: 1170px) {
    font-size: 15px;
  }

  @media screen and (max-width: 680px) {
    flex: 1 0 60%;
    font-size: 12px;
  }
`,Ob=E.div`
  text-align: center;
  color: ${e=>e.theme.colors.textGrayDark};
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "Raleway";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130.5%;
  text-transform: uppercase;
`,Pb=E.div`
  display: flex;
  text-align: center;
  justify-content: center;
  color: ${e=>e.theme.colors.secondary};
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "Raleway";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 130.5%; /* 20.88px */
  text-transform: uppercase;
`,Nb=E.button`
  width: 25px;
  height: 25px;
  background: transparent;
  border: none;
  outline: none;
  background: url(${bf});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transform: rotate(90deg);
  cursor: pointer;

  @media screen and (max-width: 680px) {
    display: none;
  }
`,Tb=E.div`
  display: none;
  @media screen and (max-width: 680px) {
    display: block;
    flex-basis: 100%;
    width: 0;
  }
`,Db=E.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 680px) {
    width: 120px;
  }
`,Lb=E.input`
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 2px;
  background-color: ${e=>e.theme.colors.textWhite};
  color: ${e=>e.theme.colors.text};
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "Raleway";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 111.5%;
  border: none;
  outline: none;

  &[type="number"] {
    appearance: textfield;
  }
  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
`,Jh=E.button`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  color: ${e=>e.theme.colors.text};
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "Raleway";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 111.5%;
  cursor: pointer;
  background-color: transparent;
`;function Fb({count:e,onChange:t}){return c.jsxs(Db,{children:[c.jsx(Jh,{onClick:()=>{t(e-1)},disabled:e===1,children:"-"}),c.jsx(Lb,{type:"number",value:e,onChange:n=>{t(Number(n.target.value))}}),c.jsx(Jh,{onClick:()=>{t(e+1)},children:"+"})]})}const zb=gt(({item:e})=>{const{changeSelect:t,setCount:n,removeItem:r}=Ll,i=S.useCallback(()=>a=>{t(e,a)},[t,e]),o=S.useCallback(()=>a=>{n(e,a)},[n,e]);return c.jsxs(kb,{children:[c.jsx(kr,{onChange:i(),id:e.id,isChecked:e.isSelected},`${e.id} ${e.isSelected}`),c.jsx(Rb,{src:e.image}),c.jsx(jb,{className:e.isAvailable?"":"disabled",children:e.name}),c.jsx(Tb,{}),e.isAvailable?c.jsxs(c.Fragment,{children:[c.jsxs(Ob,{children:[e.oldPrice," BYN"]}),c.jsx(Fb,{count:e.count,onChange:o()},e.toString()),c.jsxs(Pb,{children:[e.price," BYN"]})]}):c.jsxs(c.Fragment,{children:[c.jsx("div",{}),c.jsx("div",{}),c.jsx("div",{})]}),c.jsx(Nb,{onClick:()=>{r(e)}})]})}),Ib=E.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;function Mb({items:e}){return c.jsx(Ib,{children:e.map(t=>c.jsx(zb,{item:t},t.id))})}const Bb=gt(()=>{const{items:e,onSelectAllClick:t,isAllSelected:n,removeSelected:r}=Ll;return S.useEffect(()=>{console.log(e)},[e]),c.jsxs(Ab,{children:[c.jsxs(wb,{children:[c.jsx(Sb,{children:c.jsx(kr,{id:"selectAll",onChange:()=>{t()},isChecked:n(),children:"Выбрать все"})}),c.jsxs(Cb,{onClick:()=>{r()},children:[c.jsx(Eb,{}),"Удалить выбранное"]})]}),c.jsxs(_b,{children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{children:"Наименование"}),c.jsx("span",{children:"Цена"}),c.jsx("span",{children:"К-во"}),c.jsx("span",{children:"Стоимость"}),c.jsx("span",{})]}),c.jsx(Mb,{items:e})]})}),Kb=E.div`
  display: grid;
  gap: 25px;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  padding: 10px 14px;
  align-items: center;

  border-radius: ${e=>e.theme.borderRadius};
  background: ${e=>e.theme.colors.primary};

  @media screen and (max-width: 1169px) {
    gap: 10px;
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
  }

  @media screen and (max-width: 680px) {
    align-self: center;
    width: 340px;
    background: ${e=>e.theme.colors.textWhite};
    margin: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,zu=E.div`
  color: ${e=>e.theme.colors.textGrayDark};
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "Raleway";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130.5%;

  span:nth-child(1) {
    display: inline-block;
    white-space: normal;
  }

  span:nth-child(2) {
    color: ${e=>e.theme.colors.text};
    font-weight: 700;
    white-space: nowrap;
    min-width: 49px;
  }

  @media screen and (max-width: 1169px) {
  }

  @media screen and (max-width: 680px) {
    width: 100%;
    display: flex;
    padding: 0 50px;
    gap: 20px;
    font-size: 14px;

    span:nth-child(1) {
      width: 130px;
    }
  }
`,$b=E.button`
  justify-self: end;
  width: 215px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  font-family: "Raleway";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 111.5%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.secondary};
  color: ${e=>e.theme.colors.textWhite};

  &:hover {
    background: #1245a9;
    box-shadow: 0px 21px 30px 0px rgba(81, 81, 81, 0.4);
  }

  &:active,
  &:focus {
    background: #1245a9;
    box-shadow: none;
  }

  @media screen and (max-width: 1169px) {
    font-size: 16px;
    width: 170px;
  }

  @media screen and (max-width: 680px) {
    margin-top: 20px;
    align-self: center;
    width: 240px;
  }
`,Ub=E.div`
  margin-bottom: 10px;
  display: none;
  color: ${e=>e.theme.colors.text};
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "Raleway";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 130.5%;
  text-transform: uppercase;

  @media screen and (max-width: 680px) {
    display: block;
    text-align: center;
  }
`;function Vb(){const{getCount:e,getCost:t,getWeight:n,items:r}=Ll;return S.useEffect(()=>{console.log(r)},[r]),c.jsxs(Kb,{children:[c.jsx(Ub,{children:"ваш заказ"}),c.jsxs(zu,{children:[c.jsx("span",{children:"Выбрано товаров:"})," ",c.jsxs("span",{children:[e(r)," шт."]})]}),c.jsxs(zu,{children:[c.jsx("span",{children:"Вес заказа:"})," ",c.jsxs("span",{children:[n(r)," кг."]})]}),c.jsxs(zu,{children:[c.jsx("span",{children:"Итого:"})," ",c.jsxs("span",{children:[t(r)," BYN"]})]}),c.jsx($b,{children:"Выставить счёт"})]})}const Iu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAsCAYAAADGiP4LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA8rSURBVHgB5Vrrj1z3WX7O/Zy5z669u15fNnYcO3biOCRFJYQQt0loItILUJAQCPqh4gt8RIhvJAJRgdR/AAm1FXchFcSlNILgIAo0rh3Xjt04WV829l5nZ2bnes7MufK8v1n8gV7UZmZ3K/XnnOz9zJznPO/zPu/zOxq2V5Zl5/jh93g8zqOCH931Bo8vapr2JflCk/8RnFcwAueHbGXYfot7sV4lSK9oBOcz/OIL+CFZfD9IshTrWwHafoRU0+DaJg5NeXANAUtT/3YJt48IQOf5yTns4RqBkuGttT4uL/dxu95HmhnQdA1hmiLQLORtG3OOhqPFDB9eyONQ1YOu6djh9YYAlGEPV5omuLTew2tv3YUT+Zi1AlSKLnKWgZQlZtsu6oMUKwMLfmyjbRUQBBkeqgIvn65ioeyApUBG7QilWnsKUMxSeu3aCq5+6yY+NG+zhIByuUBKpUjIHCklw7TR6fWRy7kYZDpq3RCrfh5LSR69QYanDwA//8Q8XNPETqw9AyglAK9dfgedjQ0sTOdgWjqkYkxeaMafea4HPwhgWTYPA91uF6btwDJ0BEPgPZbhUrIPy76Nohbid184gipBnLQ27XgR//8l96PT6eDNCxegt1dxdK4A2zHgeS4MXScwrmpelB84FOckiRDFEQqFHAryOwQoTQLkwiYORbdxqtBBYHv4zb+6hnp/gEmvXWWQvNT169extbVFUY5RLBWhExSdiOQ8DzGB0AmAsKbVbsEmc3TDguM48Pt9RFGk9EZ+J001bNRauNcL0UyKeHs4hSlHx++/fBxlV8ptMlTaFYDkJZrNJhYXFwlFSl0xVNlYtoUsSZW+qu+zjQs4SZKRPQ6i0Of3DJbaQDHJtXPsbimGIZmimWix7BbvbMKr7MPNXoJ7+UcxE27i1U89Ase0MIm1oyWm2neS4Pq167h27ZpiS6lUgOtYBMJUzJALlnZezBfIkESB5RA4kGHhcAjf98kknRdss9R8ApPwY4zm1gZZ1SHrfGipj8qwicesGq5uAn/75hImtXZE+jNedERwbqx38MaVVdSHFGDrIHVDwxRb9FxJx4xOdoQhigUP/b6PYOCjVCwhjAbUIoMsGcLxHDkZYrKHpOKRoN1sk1U2hTxDIJoTDaHzbx5ZmEVidLExZeFvLgd46fHDmMq7YxfaxEosE2Xlf/W2jy9cqGElMnHpnU30qBEp21MmWsMSsh0bJdfCbDWPY9MGnpxNcGaKTAtaMCwNg8FAibZD/5NEsSqnjHoTDahBRClMYrS3GohToFHvoDo1Bdcz+LsaEiuHCzebqJUfw7F8hN/5+BkycrwimRxAPM3XFtfwh19ZxvuNEFYy4EXQx2i8Ek30gK5GM1gSMUgRGBTSfKGAKn3PsWkXHzkS4GSuB1NEWKce6fJR9KeD4SChXtmo1dZUmfr+gMCRfcUyXNdBr9snE8u8OW2khodv9XP4t5sa/u63fhxVsmicNRGAREf+6fI9/ME/LqG7RZ0gA+QWy90TkDRTV01FXsqQVxMm8YLlc5tg5SsFzO4rKrP40wcCFPS2ctjKHGcW2q01+ATEMhysrq1idvYgwpC/R4AHwximbrJEAzhuga/l4PLdLVwaHMEnT3j4hadOjFVmY4s0+YFLN2v4o3++TdEcqDJKWRrSigUXR8/ICoLFC9Z5SDeScozld/gzm1j69EVrK3X8+7ttfPG6hivNPIYRyynOUGvco6AXMQj6PHwsHHlQCb/n5gieSawt1QFdx2VZchRp1DHvZTjoRGT0Fsa9/2MDNGTJ/PE/XEe/R7HcnodclgZHTepCgpDdKOH3yAcKt4Eo1VkeCe/4AK3OAJ1hgmLOYbsP0aq3cHWphS9d7GCj1UWn3eCFF7F07yZm9i/AdsVVOwqQjOfr9doEgKCzanXdQqOxyZHEQSnvYI4zXT2Itm/hB19jd7H/fmcFt2ohNFFNLYbFdpzyc4kpMsGLYPGGkxGx6jwJSy7L5L6I59HRH0R4f83HVCXPhhTBYMkE7F5/cnMep0o9/FR5CceOnka7u47p6gGCWkOpUOF5Ir5WmS2f0JOJg+GAFqLMLhgrcXc1OvDURV9ugAx5ewXQVy6vEZBE6Y1FcZWWrNHnCGARZ6purUF/E7PExAiasDkvVadL6PkJYprAjAyUsaJFxtg8hy7jRBhRkH3ca1ioPHwEJb/HkirTXW9RlCuqxNKE034WKi/V6/kE2yIrh6rUbI4rRQLYaffJcAKED77GKjEB4MrtBrUgoTseEX9UZia6HA0ad5cx9Pv8MUGjJskh+hRzOi9oA5wsazg1XxyNDtSbYazBH4ZkAa0B27vOj19+18D1lrCSQPJfwPMKQ0VbJA/qdvoE3lJfl0qlkSvnzz0xnyVx3hhrjcWgXhDyGAWj2PZBUj0R77jfpK+pTMHiVK7zzXocLRJevOhSLyTT4hAbW+vKDx09uA93N8m2RBOseQ6WItlgE/Qsc/DX75lYeFID3QAGNIZhPOAYkpFNFg+P1SrsdGkHBorJ8n58stDSbOSd8YpkrL8OSV+dZcJbrsC5n1lxVNi/cIQaYcI0ZCKP4RV5N8kAn2Le4VxmSnsmc+otn3nPKvbvr6BHIxhEKRyZ5mkVAsYd4oVrLKevrhfxc/McYHk+k8B4rmhbqADROJcN+R7EOsgcJ0PtIAT2F1y41gfXn7EBIjwolC0CNWTX4t0mQgnfrMn6H9z5BozeIorZhjKGVuUQgsJR5A48CW9hDhpLL+gM0e50EfgBGpt1TM1MYyPUGbNmsNjprO2SzBPo19/z8ROk0GEvkBdm6QTUIbkXptI9kzdKZjTp6jFvSJ3nPXHwyCi/HmONpUEFW1OMoE/kifhWaNhYQ2hefxPtW1fhxS04Whf6oI5s821M117H/OKfYl/jKsolD2bewzAVYMksdpuQTthOOaTywmWsiOiaU5opFYMQ+K+uuQioVX0CGrJMTWrPkGwRoDT+rqSQKQW8x9lucaWJ58/M37ceewJQjvVdtpUdHx28iF69joStOOaFRKncUeqPl2N38VTJOWkbM43zyC2/zhlKQ65a4cVJGaRo0heVokCyWAS6eKbtRICl7JBJF++0EZhFVCsl+h2Ps5uhyspllpQQJUkp1zc2GYGs4vipszg2V8K4ayyAZFY6eYCdQ+iN0RTvsxUnsexS8M4ntmrDYuYkprAZaLn0OI6Twl77Orzb/0L/48GWqZ3+KKWp7LFLFfVIeSUJx7Rs5KekjJBaeHvL5kAbKnEWYCQvGtIDyZC72WhgjQC13MP41Y8+Qpc9fpoz1hmEvM88Ogs2G3aVUfAlZi/W5eJGuxA249ACs55cLk/g2GFSA5u1usqD5sN3UKxdxNRsGYmpqUG23w/og7rQGHck4qWoJ7JPJmKc5xjz1u02NPqcAQU8ojCLICcM3eS4c2sJ0fTD+Ni5J3CI890k1pgAafjwqTmCQIeSpqOBVLqa5ig9avbooKUP6VCt3qCehBw6hWlaFnF2yvBgdg1e1Ee+WFAsiqghW7QIJlmXZiPrYDMFSPh37AbYGlCU2foNGsO+PySzMtVJb7y7iHjfCbz4zBN49sRBdbMmEbqOzcE5JoRPP1xlmYmHieGQKRkBShmdspHjDk2ezVKQux2L/0mGmJnZpwAxmd/EQRtTravIcTJP2bVEs4QNtgQAjF1NMk0zDeUhxN8kHFA7saHctLBwq9nAxQuXcOiBk/jll87hscPTo32yCWXSYwMkY8KnnzrKbEYGzgRVXrxOu59xJtNMl+OCgdV2TunIkBFFpVJWHSeXz6PPMgk4oZfSFV4s8x8BQ8UizIv4u5kIdjIaU0xTZR+87BR9kknYVq9v4vKVq3jwoeP4xMc+iuNz1e3d1snt/Uwgk9Zw9sE5smgahAR5XrhVrvCCCrxgR0ZSfHMlwVCfRqlcVi3ZZK7ToU8RkZ+a2o+gvsxC7DFidaUWpS2yHAGP5zIZvlt6psRaV5mA+NJEzXcrK6s48dBJvPD8z9AP2WOnh99pTeSMBm/7Z58/jumCwxOmmDm8QCHNKQZlZFMcurhwS8PdLUMFXJ1OW7Vu6UBrq+tkE4dbBvQycEoZ6brMdg48ssaUwVddvLxSpvwTz4i7y8uYnprGJz/+CXjOeKnh91oTg/yBmQp+7bkjKiUUPSnOH4LuchC18zDYycLYxOWlFF+/k2FpI2RsOuRuqUzpNts0O5U5Kg1hQY6lpovHkdBNBhSJYGlKZZuo0+NGYa+BQq6Al178WdUhtZ3Zl1drYrsaUgCf/smTuLbcwetXG5g7NKuY1V67q0YQS1kAeaxlyJSQI4oXIW9TjDUfLscQzWK2M2jCzgaMUiv8G9YiZ62M5ZZJIMbOJz5pfrZCALt47tnnkM/lsNNrots+IgG//amznIO+gSvLPg4cOsDycbF2+44SZoutP8s6jCu43xUwERySJXTYMzMfgsuoQxt2UaoWYVfLLC1PvKUK6WUXNlNhvoXTcw5eePoZgpPfUebcv6ZJ76xK3tzo+viz/3off/8/y5BnNGQXolWjw61tIOWQqiU96OxOOvWleORhVA4+gKTXZZtnfk1RN3Pic1zRasUgk20+5cxWypn4/K+cxukD1Z163OXb1sQ3DsU87ivm8dlnj2Gz2cUbb28yI2agTjZ5+2cRcIsmTUMG+ows8jl4TBhjDp+yXOqKdCsOVlT+WI0wQ4q3xp0N6W7PndnPgK2K3Xwsb8f25oVJA44Bf/6fi/jL83fodwgKNw1liNW5MxoxEtHomzI6YUkIdYq0wblN5yGZsngqGUB1DrhiB548WcbnfvHHUHYns+f+/a4df3hBTn91qY7Pf/ki3ltjEsgRXZxxxHRRPb1BQylhrUSRhjwElbMRcqMwoYnMsQQjCtujR0v43C+dxUwlp2KV3VwC0BZ2/LHfTOXX/3p5CX9x/hZurPjyBBWZwm1lu0CmxOrJDkm7DGZEFreHJGMyaRBffmoOv3FOPFZO6c5uP/O66w9xxhTbS7fW8LUb67h4o4b3awHnM4bwDL8q3IaWeFa2nc+dmcWLZw/g8Qf2KbuwR0s9xHmOn5zHri71qIOarJrdAGtbPWbICc2fiRn1eIyJnKnvyOjwA67P/N+D5PIQ+SvYs3V/XwS7X0Tfdb1Cn/Xq/Xez/UD5r2OPn5ne49Xi8U2MwPkP+cb/An2aSrFJ7MGNAAAAAElFTkSuQmCC",Hb=gt(()=>{const{addItems:e,items:t}=Ll;return S.useEffect(()=>{e([{id:"1",image:Iu,name:"ВОЗДУШНЫЙ ФИЛЬТР ECO AE-704-22 ВОЗДУШНЫЙ ФИЛЬТР ECO AE-704-22",count:1,price:120,oldPrice:110,weight:500,isSelected:!1,isAvailable:!0},{id:"2",image:Iu,name:"ВОЗДУШНЫЙ ФИЛЬТР ECO AE-704-22 ВОЗДУШНЫЙ ФИЛЬТР ECO AE-704-22",count:2,price:120,oldPrice:110,weight:500,isSelected:!1,isAvailable:!0},{id:"3",image:Iu,name:"ВОЗДУШНЫЙ ФИЛЬТР ECO AE-704-22 ВОЗДУШНЫЙ ФИЛЬТР ECO AE-704-22",count:2,price:120,oldPrice:110,weight:500,isSelected:!1,isAvailable:!1}])},[]),c.jsxs(xb,{children:[c.jsx(Vb,{},t.toString()),c.jsx(Bb,{})]})}),Wb=E.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: transparent;
`,Qb=E.h1`
  width: 100%;
  color: ${e=>e.theme.colors.text};
  font-family: "Rubik";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 130.5%;
`,Gb=E.div`
  width: 100%;
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  grid-template-columns: 1fr 1fr;

  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.primary};
`,qb=E.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 14px;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.primary};
`,Yb="/assets/edit-d03e6800.svg",Jb=E.div`
  display: flex;
  align-items: center;
  gap: 5px;

  @media screen and (max-width: 1169px) {
    flex-direction: column;
  }

  @media screen and (max-width: 680px) {
  }
`,Xb=E.div`
  display: flex;
  align-items: flex-start;
  height: 100%;
  color: ${e=>e.theme.colors.textGray};
  font-family: "Raleway";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 130.5%;
  max-width: 90px;

  @media screen and (max-width: 1169px) {
    font-size: 10px;
    align-items: flex-end;
    width: 100%;
    max-width: 100%;
    height: 26px;
  }

  @media screen and (max-width: 680px) {
    font-size: 12px;
  }
`,Zb=E.div`
  display: flex;
  align-items: flex-start;
  height: 100%;
  color: ${e=>e.theme.colors.textGrayDark};
  font-family: "Raleway";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130.5%;

  @media screen and (max-width: 1169px) {
    font-size: 14px;
  }

  @media screen and (max-width: 680px) {
    font-size: 16px;
  }
`;function ds({title:e,children:t,className:n}){return c.jsxs(Jb,{className:n,children:[c.jsxs(Xb,{children:[e,":"]}),c.jsx(Zb,{children:t})]})}const ek=E.div`
  display: flex;
  height: 50px;
  gap: 5px;

  @media screen and (max-width: 680px) {
    height: max-content;
  }
`,tk=E.div`
  display: flex;
  align-items: flex-start;

  height: 100%;
  color: ${e=>e.theme.colors.textGray};
  font-family: "Raleway";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 130.5%;
  max-width: 90px;

  @media screen and (max-width: 1169px) {
    font-size: 10px;
  }

  @media screen and (max-width: 680px) {
    font-size: 12px;
  }
`,nk=E.div`
  display: flex;

  height: 100%;
  color: ${e=>e.theme.colors.textGrayDark};
  font-family: "Raleway";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130.5%;
  max-width: 180px;

  @media screen and (max-width: 1169px) {
    font-size: 14px;
  }

  @media screen and (max-width: 680px) {
    font-size: 18px;
  }
`;function lr({title:e,children:t,className:n}){return c.jsxs(ek,{className:n,children:[c.jsxs(tk,{children:[e,":"]}),c.jsx(nk,{children:t})]})}const rk=E.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &::after {
    content: "";
    position: absolute;
    width: 80%;
    transform: translateX(-50%);
    left: 50%;
    height: 2px;
    bottom: -15px;
    background: ${e=>e.theme.colors.secondaryDark};
  }

  &:last-child::after {
    display: none;
  }
`,ik=E.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 2fr 2fr 1.7fr 0.3fr;

  @media screen and (max-width: 1169px) {
    gap: 5px;
  }

  @media screen and (max-width: 680px) {
    grid-template-columns: 1fr 2fr 0.3fr;
  }
`,ok=E.div`
  display: ${e=>e.$isopened?"flex":"none"};
  flex-wrap: wrap;
  gap: 10px;

  @media screen and (max-width: 1169px) {
    display: ${e=>e.$isopened?"grid":"none"};
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 680px) {
    display: ${e=>e.$isopened?"flex":"none"};
    flex-direction: column;
  }
`;E.div`
  display: flex;
  align-items: center;
`;const Mu=E.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 1169px) {
    gap: 5px;
  }

  @media screen and (max-width: 680px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`,ak=E.div`
  width: 100%;
  padding: 10px;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.textWhite};

  @media screen and (max-width: 1169px) {
    display: flex;
    grid-row-start: 3;
    grid-column-start: 1;
    grid-column-end: 3;
  }
`,sk=E(sn)`
  width: 30px;
  height: 30px;
  background-image: url(${Yb});
  background-size: contain;
  background-position: center;
  cursor: pointer;

  @media screen and (max-width: 1169px) {
  }

  @media screen and (max-width: 680px) {
    grid-row-start: 1;
    grid-column-start: 3;
  }
`,lk=E(ds)`
  @media screen and (max-width: 680px) {
    grid-row-start: 2;
    grid-column-start: 2;
  }
`,uk=E(lr)`
  @media screen and (max-width: 680px) {
    word-break: break-all;
  }
`;function d0({item:e,pathToEdit:t}){const[n,r]=S.useState(!1),i=()=>{r(!n)};return c.jsxs(rk,{onClick:i,children:[c.jsxs(ik,{children:[c.jsx(ds,{title:"ИНН",children:e.inn}),c.jsx(ds,{title:"Конечный потребитель",children:e.name}),c.jsx(lk,{title:"Регион, Город потребителя",children:e.address}),c.jsx(ds,{title:"Дата бронирования",children:e.date}),c.jsx(sk,{to:`${t}/${e.id}`})]}),c.jsxs(ok,{$isopened:n,children:[c.jsxs(Mu,{children:[c.jsx(lr,{title:"Марка оборудования",children:e.mark}),c.jsx(lr,{title:"Количество",children:e.count})]}),c.jsxs(Mu,{children:[c.jsx(lr,{title:"Дилер",children:e.dealerName}),c.jsx(uk,{title:"Контактные данные дилера",children:e.phone})]}),c.jsxs(Mu,{children:[c.jsx(lr,{title:"Менеджер дилера",children:e.dealerManager}),c.jsx(lr,{title:"Менеджер AIRSYST",children:e.manager})]}),c.jsx(lr,{title:"Статус",children:e.status}),e.commentary.length>0&&c.jsx(ak,{children:e.commentary})]})]})}const ck=[{id:1,userID:1,inn:"12345678",name:"euroopt",address:"minks",mark:"aircool",count:2,date:"2014-09-11",dealerName:"Coollone",dealerManager:"Сапогов Михаил Петрович",manager:"Виктотров Михаил Петрович",phone:"375296388631",commentary:"lorem ipsum dolor sit ameter, consectetur adipiscing elit sed diam nonumy eirmod tempor invidunt ut labore et lorem ipsum dolor sit ameter, consectetur adipiscing elit sed diam nonumunt ut labore et",status:"pending"},{id:2,userID:2,inn:"12345679",name:"ООО Эйч Гэ Кондитион",address:"Ростовский регион, Шушары",mark:"aircool",count:2,date:"2014-09-11",dealerName:"Coollone",dealerManager:"Сапогов Михаил Петрович",manager:"Виктотров Михаил Петрович",phone:"375296388631",commentary:"",status:"pending"}];class dk{constructor(){ee(this,"list",[]);ee(this,"setBooking",t=>{this.list=t});ee(this,"clearBookings",()=>{this.list=[]});ee(this,"getBookingById",t=>this.list.find(n=>n.id==t));ee(this,"getBookingsByUser",t=>this.list.filter(r=>r.userID==t));pa(this)}}const Fl=new dk;Fl.setBooking(ck);const fk=E.div`
  color: ${e=>e.theme.colors.textGray};
  font-family: "Raleway";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 130.5%;

  span {
    color: ${e=>e.theme.colors.textGrayDark};
  }

  @media screen and (max-width: 680px) {
    font-size: 13px;
  }
`;function f0({children:e}){return c.jsx(fk,{children:e})}const pk=gt(()=>{const{list:e}=Fl,{current:t}=ma,{setInfo:n}=ga;return S.useEffect(()=>{(t==null?void 0:t.name)==="Silver"&&n({text:"Бронирование не доступно для текущего уровня. Необходимо повысить статус",link:"../",buttonText:"Понятно",isVisible:!0})},[t]),c.jsxs(Wb,{children:[c.jsxs(Gb,{children:[c.jsx(Qb,{children:"Бронирование"}),c.jsxs(f0,{children:[c.jsx("span",{children:"Все бронирования"})," /"," ",c.jsx(sn,{to:"mybooking",style:{color:"#000",fontWeight:700},children:"Мои бронирования"})]}),c.jsx(Ef,{to:"create",children:"Забронировать"})]}),c.jsx(qb,{children:e.map(r=>c.jsx(d0,{pathToEdit:"create",item:r},r.inn))})]})}),hk=E.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 30px;
`,mk=E.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 14px;
  background: ${e=>e.theme.colors.primary};
  border-radius: ${e=>e.theme.borderRadius};
`,gk=E.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  background: ${e=>e.theme.colors.primary};
  border-radius: ${e=>e.theme.borderRadius};
`,vk=E.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 14px;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.primary};
`,yk=E.h1`
  color: ${e=>e.theme.colors.text};
  font-family: "Rubik";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 130.5%;
`,xk=gt(()=>{const[e,t]=S.useState([]),{getBookingsByUser:n}=Fl,{user:r}=Vi;return S.useEffect(()=>{const i=n(r==null?void 0:r.id);t(i)},[]),c.jsxs(hk,{children:[c.jsxs(mk,{children:[c.jsx(yk,{children:"Мои бронирования"}),c.jsxs(f0,{children:[c.jsx(sn,{to:"../../booking",style:{color:"#000",fontWeight:700},children:"Все бронирования"})," ","/ ",c.jsx("span",{children:"Мои бронирования"})]}),c.jsx(Ef,{to:"../../booking/create",children:"Забронировать"})]}),c.jsx(gk,{children:c.jsx(vk,{children:e.map(i=>c.jsx(d0,{pathToEdit:"../create",item:i},i.inn))})})]})}),Ak=E.div`
  padding: 20px 14px;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.primary};
`,wk=E.form`
  width: 100%;
  display: grid;
  grid-template-areas:
    "inn name address"
    "mark mark count"
    "dName dName dName"
    "dManager dManager phone"
    "manager manager manager"
    "commentary commentary commentary"
    "submit submit submit";
  grid-template-rows: 1fr;
  row-gap: 20px;
  column-gap: 30px;

  @media screen and (max-width: 1169px) {
    grid-template-areas:
      "inn name name"
      "address address address"
      "mark mark count"
      "dName dName dName"
      "dManager dManager phone"
      "manager manager manager"
      "commentary commentary commentary"
      "submit submit submit";
  }

  @media screen and (max-width: 680px) {
  }
`,Bu=E(Qe)`
  @media screen and (max-width: 1169px) {
    min-width: 190px;
  }

  @media screen and (max-width: 680px) {
    font-size: 14px;
    padding: 5px 7px;
    min-width: 120px;

    &::placeholder {
      font-size: 10px;
    }
  }
`,Ir=E(Qe)`
  max-width: 100%;

  @media screen and (max-width: 680px) {
    font-size: 14px;
    padding: 5px 7px;
    min-width: 120px;

    &::placeholder {
      font-size: 10px;
    }
  }
`,_k=E.textarea`
  width: 100%;
  height: 200px;
  grid-area: ${e=>e.area};
  padding: 10px 17px 10px 17px;
  border-radius: 3px;
  border: 1px solid ${e=>e.theme.colors.secondaryDark};
  color: ${e=>e.theme.colors.text};
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "Raleway";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130.5%;
  outline-color: ${e=>e.theme.colors.secondaryDark};
  resize: none;

  ::placeholder {
    color: ${e=>e.theme.colors.textGrayLight};
  }

  @media screen and (max-width: 680px) {
    font-size: 14px;
    padding: 5px 7px;

    &::placeholder {
      font-size: 10px;
    }
  }
`,Sk=E(Ui)`
  grid-area: submit;
  justify-self: center;
`,Xh=gt(()=>{const{setInfo:e}=ga,{id:t}=g_(),{user:n}=Vi,{getBookingById:r,list:i}=Fl,[o,a]=S.useState(),[s,l]=S.useState(!1),[u,d]=S.useState({id:i.length+1,userID:n?n.id:0,status:"pending",date:new Date().toISOString(),inn:"",name:"",address:"",mark:"",count:0,dealerManager:"",dealerName:"",manager:"",commentary:"",phone:""});S.useEffect(()=>{t!==void 0&&a(r(Number(t))),console.log(1)},[]),S.useEffect(()=>{o&&d({...o,id:u.id,userID:u.userID,status:u.status,date:u.date})},[o]),S.useEffect(()=>{u.inn.length===8?l(!0):l(!1),console.log(u)},[u]);const f=A=>y=>{d({...u,[A]:y})},h=A=>{A.preventDefault(),RE(u).result&&(console.log("request to server",u),e({text:"Заявка на бронирование принята в обработку",link:"../booking",buttonText:"Продолжить",isVisible:!0}))};return c.jsx(Ak,{children:c.jsxs(wk,{onSubmit:h,children:[c.jsx(Bu,{type:"number",minLength:8,maxLength:8,required:!0,placeholder:"ИНН",area:"inn",value:u.inn,onChange:f("inn")}),s?c.jsxs(c.Fragment,{children:[c.jsx(Ir,{type:"text",required:!0,placeholder:"Конечный потребитель",name:"company",area:"name",onChange:f("name"),value:u.name}),c.jsx(Ir,{type:"text",required:!0,placeholder:"Регион, город потребителя",name:"address",area:"address",onChange:f("address"),value:u.address})]}):"",c.jsx(Ir,{type:"text",required:!0,placeholder:"Марка оборудования",name:"mark",area:"mark",onChange:f("mark"),value:u.mark}),c.jsx(Bu,{type:"number",required:!0,placeholder:"Количество",name:"count",area:"count",onChange:f("count"),value:u.count.toString()}),c.jsx(Ir,{type:"text",required:!0,placeholder:"Дилер",name:"dName",area:"dName",onChange:f("dealerName"),value:u.dealerName}),c.jsx(Ir,{type:"text",required:!0,placeholder:"Отв. менеджер дилера",name:"dManager",area:"dManager",onChange:f("dealerManager"),value:u.dealerManager}),c.jsx(Bu,{type:"tel",required:!0,placeholder:"Номер телефона",name:"phone",area:"phone",onChange:f("phone"),value:u.phone}),c.jsx(Ir,{type:"text",required:!0,placeholder:"Отв. менеджер AIRSYST",name:"manager",area:"manager",onChange:f("manager"),value:u.manager}),c.jsx(_k,{placeholder:"Комментарий",area:"commentary",value:u.commentary,onChange:A=>{d({...u,commentary:A.currentTarget.value})}}),c.jsx(Sk,{})]})})}),Ck=E.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.primary};
`,Ek=E.h2`
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 16px;
`,Ku=E.div`
  display: flex;
  gap: 30px;

  margin-bottom: 20px;

  @media screen and (max-width: 1169px) {
    gap: 10px;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 680px) {
    flex-direction: column;
    max-width: 370px;
  }
`,bk=E.div`
  display: flex;
  gap: 9px;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;

  @media screen and (max-width: 1169px) {
    max-width: 300px;
    min-width: 190px;
    flex: 1 1 auto;
    width: fit-content;
  }

  @media screen and (max-width: 680px) {
    max-width: 100%;
    width: 100%;
  }
`,kk=E.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.primary};
  padding: 18px;

  @media screen and (max-width: 1169px) {
    padding: 9px;
  }

  @media screen and (max-width: 680px) {
    max-width: 340px;
  }
`,or=E(Qe)`
  max-width: 270px;

  @media screen and (max-width: 1169px) {
    min-width: 190px;
    width: auto;
  }

  @media screen and (max-width: 680px) {
    max-width: 100%;
  }
`,Zh=E(od)`
  @media screen and (max-width: 680px) {
    font-size: 12px;
    display: inline-flex;
    justify-content: flex-start;
    gap: 3px;
  }
`;function Rk(){const{user:e,setUserData:t}=Vi,[n,r]=S.useState({name:"",phone:"",email:"",isAgent:!1,organization:"",uAddress:"",isAddressEquals:!1,fAddress:"",INN:""}),[i,o]=S.useState({result:!1,badFields:[]});S.useEffect(()=>{e&&e.data&&r({name:e.data.name,phone:e.data.phone,email:e.email,isAgent:e.data.isAgent,organization:e.data.companyName,uAddress:e.data.legalAddress,isAddressEquals:e.data.legalAddress===e.data.physicalAddress,fAddress:e.data.physicalAddress,INN:e.data.inn})},[]),S.useEffect(()=>{n.isAddressEquals&&n.fAddress&&(n.fAddress=null),console.log(n)},[n]);const a=u=>S.useCallback(d=>{r({...n,[u]:d})},[u,n]),s=a("fAddress"),l=u=>{u.preventDefault();const d=u0(n);o(d),d.result&&(console.log("push to server"),t({name:n.name,phone:n.phone,companyName:n.organization,legalAddress:n.uAddress,physicalAddress:n.fAddress!==null?n.fAddress:n.uAddress,inn:n.INN,isAgent:n.isAgent},n.email))};return c.jsx(Ck,{children:c.jsxs(kk,{onSubmit:l,children:[c.jsx(Ek,{children:"Введите контактные данные"}),c.jsxs(Zh,{children:[" ","Уже покупаете у нас? Войдите в"," ",c.jsx(l0,{to:"/login",children:"личный кабинет"})]}),c.jsxs(Ku,{children:[c.jsx(or,{type:"text",placeholder:"Имя",name:"firstName",required:!0,onChange:a("name"),className:i.badFields.find(u=>u==="name")?"error":"",value:n.name}),c.jsx(or,{type:"tel",placeholder:"Телефон",name:"phone",required:!0,onChange:a("phone"),className:i.badFields.find(u=>u==="phone")?"error":"",value:n.phone}),c.jsx(or,{type:"email",placeholder:"Email",required:!0,onChange:a("email"),className:i.badFields.find(u=>u==="email")?"error":"",value:n.email})]}),c.jsx(kr,{id:"agent",onChange:a("isAgent"),isChecked:n.isAgent,children:"Я представитель юридического лица или ИП"}),c.jsx(Zh,{children:"Данной организации еше нет в нашей базе. Пожалуйста, введите по ней информацию."}),c.jsxs(Ku,{children:[c.jsx(or,{type:"text",placeholder:"Название организации*",name:"organization",required:!0,onChange:a("organization"),className:i.badFields.find(u=>u==="organization")?"error":"",value:n.organization}),c.jsxs(bk,{children:[c.jsx(or,{type:"text",placeholder:"Юридический адрес*",name:"address",required:!0,onChange:a("uAddress"),className:i.badFields.find(u=>u==="uAddress")?"error":"",value:n.uAddress}),c.jsx(kr,{id:"isAddressEquals",onChange:a("isAddressEquals"),isChecked:n.isAddressEquals,children:"Совпадает с физическим"})]}),n.isAddressEquals?void 0:c.jsx(or,{type:"text",placeholder:"Физический адрес*",name:"address",required:!0,onChange:s,className:i.badFields.find(u=>u==="fAddress")?"error":"",value:n.fAddress!==null?n.fAddress:""})]}),c.jsx(Ku,{children:c.jsx(or,{type:"number",placeholder:"ИНН*",name:"INN",required:!0,minLength:8,maxLength:8,onChange:a("INN"),className:i.badFields.find(u=>u==="inn")?"error":"",value:n.INN})}),c.jsx(Ui,{value:"Изменить"})]})})}const jk=E.section`
  margin: 0 auto;
  margin-top: 23px;
  margin-bottom: 64px;
  padding: 25px;
  padding-bottom: 48px;
  width: 970px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background: #f6f7fc;

  color: ${e=>e.theme.colors.text};
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Raleway;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;

  @media screen and (max-width: 1169px) {
    width: 100%;
  }

  @media screen and (max-width: 470px) {
    width: 100%;
    padding: 27px 10px 28px 10px;
    background-color: transparent;
  }
`,Ok=E.h1`
  font-family: "Rubik";
  margin-bottom: 15px;
  color: ${e=>e.theme.colors.text};
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;

  @media screen and (max-width: 1169px) {
    font-style: 24px;
  }

  @media screen and (max-width: 470px) {
    font-style: 20px;
  }
`,Pk=E.p`
  margin-bottom: 18px;
`,Nk=E(Pr)`
  color: #195cdf;
  margin-bottom: 2px;
  text-align: center;
`,Tk=E(Pr)`
  color: #195cdf;
  text-transform: uppercase;
  text-align: center;
`,Dk=E.form`
  width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;

  @media screen and (max-width: 470px) {
    width: 100%;
    max-width: 370px;
  }
`;function p0(e,t){return function(){return e.apply(t,arguments)}}const{toString:Lk}=Object.prototype,{getPrototypeOf:Rf}=Object,zl=(e=>t=>{const n=Lk.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ln=e=>(e=e.toLowerCase(),t=>zl(t)===e),Il=e=>t=>typeof t===e,{isArray:Hi}=Array,Jo=Il("undefined");function Fk(e){return e!==null&&!Jo(e)&&e.constructor!==null&&!Jo(e.constructor)&&bt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const h0=ln("ArrayBuffer");function zk(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&h0(e.buffer),t}const Ik=Il("string"),bt=Il("function"),m0=Il("number"),Ml=e=>e!==null&&typeof e=="object",Mk=e=>e===!0||e===!1,fs=e=>{if(zl(e)!=="object")return!1;const t=Rf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Bk=ln("Date"),Kk=ln("File"),$k=ln("Blob"),Uk=ln("FileList"),Vk=e=>Ml(e)&&bt(e.pipe),Hk=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||bt(e.append)&&((t=zl(e))==="formdata"||t==="object"&&bt(e.toString)&&e.toString()==="[object FormData]"))},Wk=ln("URLSearchParams"),Qk=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function va(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Hi(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let s;for(r=0;r<a;r++)s=o[r],t.call(null,e[s],s,e)}}function g0(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const v0=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),y0=e=>!Jo(e)&&e!==v0;function ad(){const{caseless:e}=y0(this)&&this||{},t={},n=(r,i)=>{const o=e&&g0(t,i)||i;fs(t[o])&&fs(r)?t[o]=ad(t[o],r):fs(r)?t[o]=ad({},r):Hi(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&va(arguments[r],n);return t}const Gk=(e,t,n,{allOwnKeys:r}={})=>(va(t,(i,o)=>{n&&bt(i)?e[o]=p0(i,n):e[o]=i},{allOwnKeys:r}),e),qk=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Yk=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Jk=(e,t,n,r)=>{let i,o,a;const s={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&Rf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Xk=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Zk=e=>{if(!e)return null;if(Hi(e))return e;let t=e.length;if(!m0(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},eR=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Rf(Uint8Array)),tR=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},nR=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},rR=ln("HTMLFormElement"),iR=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),em=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),oR=ln("RegExp"),x0=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};va(n,(i,o)=>{let a;(a=t(i,o,e))!==!1&&(r[o]=a||i)}),Object.defineProperties(e,r)},aR=e=>{x0(e,(t,n)=>{if(bt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(bt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},sR=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Hi(e)?r(e):r(String(e).split(t)),n},lR=()=>{},uR=(e,t)=>(e=+e,Number.isFinite(e)?e:t),$u="abcdefghijklmnopqrstuvwxyz",tm="0123456789",A0={DIGIT:tm,ALPHA:$u,ALPHA_DIGIT:$u+$u.toUpperCase()+tm},cR=(e=16,t=A0.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function dR(e){return!!(e&&bt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const fR=e=>{const t=new Array(10),n=(r,i)=>{if(Ml(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Hi(r)?[]:{};return va(r,(a,s)=>{const l=n(a,i+1);!Jo(l)&&(o[s]=l)}),t[i]=void 0,o}}return r};return n(e,0)},pR=ln("AsyncFunction"),hR=e=>e&&(Ml(e)||bt(e))&&bt(e.then)&&bt(e.catch),k={isArray:Hi,isArrayBuffer:h0,isBuffer:Fk,isFormData:Hk,isArrayBufferView:zk,isString:Ik,isNumber:m0,isBoolean:Mk,isObject:Ml,isPlainObject:fs,isUndefined:Jo,isDate:Bk,isFile:Kk,isBlob:$k,isRegExp:oR,isFunction:bt,isStream:Vk,isURLSearchParams:Wk,isTypedArray:eR,isFileList:Uk,forEach:va,merge:ad,extend:Gk,trim:Qk,stripBOM:qk,inherits:Yk,toFlatObject:Jk,kindOf:zl,kindOfTest:ln,endsWith:Xk,toArray:Zk,forEachEntry:tR,matchAll:nR,isHTMLForm:rR,hasOwnProperty:em,hasOwnProp:em,reduceDescriptors:x0,freezeMethods:aR,toObjectSet:sR,toCamelCase:iR,noop:lR,toFiniteNumber:uR,findKey:g0,global:v0,isContextDefined:y0,ALPHABET:A0,generateString:cR,isSpecCompliantForm:dR,toJSONObject:fR,isAsyncFn:pR,isThenable:hR};function Y(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}k.inherits(Y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const w0=Y.prototype,_0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{_0[e]={value:e}});Object.defineProperties(Y,_0);Object.defineProperty(w0,"isAxiosError",{value:!0});Y.from=(e,t,n,r,i,o)=>{const a=Object.create(w0);return k.toFlatObject(e,a,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),Y.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};const mR=null;function sd(e){return k.isPlainObject(e)||k.isArray(e)}function S0(e){return k.endsWith(e,"[]")?e.slice(0,-2):e}function nm(e,t,n){return e?e.concat(t).map(function(i,o){return i=S0(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function gR(e){return k.isArray(e)&&!e.some(sd)}const vR=k.toFlatObject(k,{},null,function(t){return/^is[A-Z]/.test(t)});function Bl(e,t,n){if(!k.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=k.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,R){return!k.isUndefined(R[x])});const r=n.metaTokens,i=n.visitor||d,o=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&k.isSpecCompliantForm(t);if(!k.isFunction(i))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(k.isDate(y))return y.toISOString();if(!l&&k.isBlob(y))throw new Y("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(y)||k.isTypedArray(y)?l&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function d(y,x,R){let g=y;if(y&&!R&&typeof y=="object"){if(k.endsWith(x,"{}"))x=r?x:x.slice(0,-2),y=JSON.stringify(y);else if(k.isArray(y)&&gR(y)||(k.isFileList(y)||k.endsWith(x,"[]"))&&(g=k.toArray(y)))return x=S0(x),g.forEach(function(v,m){!(k.isUndefined(v)||v===null)&&t.append(a===!0?nm([x],m,o):a===null?x:x+"[]",u(v))}),!1}return sd(y)?!0:(t.append(nm(R,x,o),u(y)),!1)}const f=[],h=Object.assign(vR,{defaultVisitor:d,convertValue:u,isVisitable:sd});function A(y,x){if(!k.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+x.join("."));f.push(y),k.forEach(y,function(g,p){(!(k.isUndefined(g)||g===null)&&i.call(t,g,k.isString(p)?p.trim():p,x,h))===!0&&A(g,x?x.concat(p):[p])}),f.pop()}}if(!k.isObject(e))throw new TypeError("data must be an object");return A(e),t}function rm(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function jf(e,t){this._pairs=[],e&&Bl(e,this,t)}const C0=jf.prototype;C0.append=function(t,n){this._pairs.push([t,n])};C0.toString=function(t){const n=t?function(r){return t.call(this,r,rm)}:rm;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function yR(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function E0(e,t,n){if(!t)return e;const r=n&&n.encode||yR,i=n&&n.serialize;let o;if(i?o=i(t,n):o=k.isURLSearchParams(t)?t.toString():new jf(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class xR{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){k.forEach(this.handlers,function(r){r!==null&&t(r)})}}const im=xR,b0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},AR=typeof URLSearchParams<"u"?URLSearchParams:jf,wR=typeof FormData<"u"?FormData:null,_R=typeof Blob<"u"?Blob:null,SR=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),CR=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),zt={isBrowser:!0,classes:{URLSearchParams:AR,FormData:wR,Blob:_R},isStandardBrowserEnv:SR,isStandardBrowserWebWorkerEnv:CR,protocols:["http","https","file","blob","url","data"]};function ER(e,t){return Bl(e,new zt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return zt.isNode&&k.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function bR(e){return k.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function kR(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function k0(e){function t(n,r,i,o){let a=n[o++];const s=Number.isFinite(+a),l=o>=n.length;return a=!a&&k.isArray(i)?i.length:a,l?(k.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!s):((!i[a]||!k.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&k.isArray(i[a])&&(i[a]=kR(i[a])),!s)}if(k.isFormData(e)&&k.isFunction(e.entries)){const n={};return k.forEachEntry(e,(r,i)=>{t(bR(r),i,n,0)}),n}return null}function RR(e,t,n){if(k.isString(e))try{return(t||JSON.parse)(e),k.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Of={transitional:b0,adapter:zt.isNode?"http":"xhr",transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=k.isObject(t);if(o&&k.isHTMLForm(t)&&(t=new FormData(t)),k.isFormData(t))return i&&i?JSON.stringify(k0(t)):t;if(k.isArrayBuffer(t)||k.isBuffer(t)||k.isStream(t)||k.isFile(t)||k.isBlob(t))return t;if(k.isArrayBufferView(t))return t.buffer;if(k.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return ER(t,this.formSerializer).toString();if((s=k.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Bl(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),RR(t)):t}],transformResponse:[function(t){const n=this.transitional||Of.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&k.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?Y.from(s,Y.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:zt.classes.FormData,Blob:zt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],e=>{Of.headers[e]={}});const Pf=Of,jR=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),OR=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&jR[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},om=Symbol("internals");function so(e){return e&&String(e).trim().toLowerCase()}function ps(e){return e===!1||e==null?e:k.isArray(e)?e.map(ps):String(e)}function PR(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const NR=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Uu(e,t,n,r,i){if(k.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!k.isString(t)){if(k.isString(r))return t.indexOf(r)!==-1;if(k.isRegExp(r))return r.test(t)}}function TR(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function DR(e,t){const n=k.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}class Kl{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(s,l,u){const d=so(l);if(!d)throw new Error("header name must be a non-empty string");const f=k.findKey(i,d);(!f||i[f]===void 0||u===!0||u===void 0&&i[f]!==!1)&&(i[f||l]=ps(s))}const a=(s,l)=>k.forEach(s,(u,d)=>o(u,d,l));return k.isPlainObject(t)||t instanceof this.constructor?a(t,n):k.isString(t)&&(t=t.trim())&&!NR(t)?a(OR(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=so(t),t){const r=k.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return PR(i);if(k.isFunction(n))return n.call(this,i,r);if(k.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=so(t),t){const r=k.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Uu(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(a){if(a=so(a),a){const s=k.findKey(r,a);s&&(!n||Uu(r,r[s],s,n))&&(delete r[s],i=!0)}}return k.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||Uu(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return k.forEach(this,(i,o)=>{const a=k.findKey(r,o);if(a){n[a]=ps(i),delete n[o];return}const s=t?TR(o):String(o).trim();s!==o&&delete n[o],n[s]=ps(i),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return k.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&k.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[om]=this[om]={accessors:{}}).accessors,i=this.prototype;function o(a){const s=so(a);r[s]||(DR(i,a),r[s]=!0)}return k.isArray(t)?t.forEach(o):o(t),this}}Kl.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(Kl.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});k.freezeMethods(Kl);const An=Kl;function Vu(e,t){const n=this||Pf,r=t||n,i=An.from(r.headers);let o=r.data;return k.forEach(e,function(s){o=s.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function R0(e){return!!(e&&e.__CANCEL__)}function ya(e,t,n){Y.call(this,e??"canceled",Y.ERR_CANCELED,t,n),this.name="CanceledError"}k.inherits(ya,Y,{__CANCEL__:!0});function LR(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new Y("Request failed with status code "+n.status,[Y.ERR_BAD_REQUEST,Y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const FR=zt.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,a,s){const l=[];l.push(n+"="+encodeURIComponent(r)),k.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),k.isString(o)&&l.push("path="+o),k.isString(a)&&l.push("domain="+a),s===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function zR(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function IR(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function j0(e,t){return e&&!zR(t)?IR(e,t):t}const MR=zt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const s=k.isString(a)?i(a):a;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function BR(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function KR(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),d=r[o];a||(a=u),n[i]=l,r[i]=u;let f=o,h=0;for(;f!==i;)h+=n[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-a<t)return;const A=d&&u-d;return A?Math.round(h*1e3/A):void 0}}function am(e,t){let n=0;const r=KR(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,s=o-n,l=r(s),u=o<=a;n=o;const d={loaded:o,total:a,progress:a?o/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:i};d[t?"download":"upload"]=!0,e(d)}}const $R=typeof XMLHttpRequest<"u",UR=$R&&function(e){return new Promise(function(n,r){let i=e.data;const o=An.from(e.headers).normalize(),a=e.responseType;let s;function l(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}k.isFormData(i)&&(zt.isStandardBrowserEnv||zt.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(e.auth){const A=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(A+":"+y))}const d=j0(e.baseURL,e.url);u.open(e.method.toUpperCase(),E0(d,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function f(){if(!u)return;const A=An.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),x={data:!a||a==="text"||a==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:A,config:e,request:u};LR(function(g){n(g),l()},function(g){r(g),l()},x),u=null}if("onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(f)},u.onabort=function(){u&&(r(new Y("Request aborted",Y.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new Y("Network Error",Y.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let y=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const x=e.transitional||b0;e.timeoutErrorMessage&&(y=e.timeoutErrorMessage),r(new Y(y,x.clarifyTimeoutError?Y.ETIMEDOUT:Y.ECONNABORTED,e,u)),u=null},zt.isStandardBrowserEnv){const A=(e.withCredentials||MR(d))&&e.xsrfCookieName&&FR.read(e.xsrfCookieName);A&&o.set(e.xsrfHeaderName,A)}i===void 0&&o.setContentType(null),"setRequestHeader"in u&&k.forEach(o.toJSON(),function(y,x){u.setRequestHeader(x,y)}),k.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",am(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",am(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=A=>{u&&(r(!A||A.type?new ya(null,e,u):A),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const h=BR(d);if(h&&zt.protocols.indexOf(h)===-1){r(new Y("Unsupported protocol "+h+":",Y.ERR_BAD_REQUEST,e));return}u.send(i||null)})},hs={http:mR,xhr:UR};k.forEach(hs,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const O0={getAdapter:e=>{e=k.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=k.isString(n)?hs[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new Y(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(k.hasOwnProp(hs,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!k.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:hs};function Hu(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ya(null,e)}function sm(e){return Hu(e),e.headers=An.from(e.headers),e.data=Vu.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),O0.getAdapter(e.adapter||Pf.adapter)(e).then(function(r){return Hu(e),r.data=Vu.call(e,e.transformResponse,r),r.headers=An.from(r.headers),r},function(r){return R0(r)||(Hu(e),r&&r.response&&(r.response.data=Vu.call(e,e.transformResponse,r.response),r.response.headers=An.from(r.response.headers))),Promise.reject(r)})}const lm=e=>e instanceof An?e.toJSON():e;function Pi(e,t){t=t||{};const n={};function r(u,d,f){return k.isPlainObject(u)&&k.isPlainObject(d)?k.merge.call({caseless:f},u,d):k.isPlainObject(d)?k.merge({},d):k.isArray(d)?d.slice():d}function i(u,d,f){if(k.isUndefined(d)){if(!k.isUndefined(u))return r(void 0,u,f)}else return r(u,d,f)}function o(u,d){if(!k.isUndefined(d))return r(void 0,d)}function a(u,d){if(k.isUndefined(d)){if(!k.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function s(u,d,f){if(f in t)return r(u,d);if(f in e)return r(void 0,u)}const l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(u,d)=>i(lm(u),lm(d),!0)};return k.forEach(Object.keys(Object.assign({},e,t)),function(d){const f=l[d]||i,h=f(e[d],t[d],d);k.isUndefined(h)&&f!==s||(n[d]=h)}),n}const P0="1.5.0",Nf={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Nf[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const um={};Nf.transitional=function(t,n,r){function i(o,a){return"[Axios v"+P0+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,s)=>{if(t===!1)throw new Y(i(a," has been removed"+(n?" in "+n:"")),Y.ERR_DEPRECATED);return n&&!um[a]&&(um[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,s):!0}};function VR(e,t,n){if(typeof e!="object")throw new Y("options must be an object",Y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const s=e[o],l=s===void 0||a(s,o,e);if(l!==!0)throw new Y("option "+o+" must be "+l,Y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Y("Unknown option "+o,Y.ERR_BAD_OPTION)}}const ld={assertOptions:VR,validators:Nf},Tn=ld.validators;class rl{constructor(t){this.defaults=t,this.interceptors={request:new im,response:new im}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Pi(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&ld.assertOptions(r,{silentJSONParsing:Tn.transitional(Tn.boolean),forcedJSONParsing:Tn.transitional(Tn.boolean),clarifyTimeoutError:Tn.transitional(Tn.boolean)},!1),i!=null&&(k.isFunction(i)?n.paramsSerializer={serialize:i}:ld.assertOptions(i,{encode:Tn.function,serialize:Tn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=o&&k.merge(o.common,o[n.method]);o&&k.forEach(["delete","get","head","post","put","patch","common"],y=>{delete o[y]}),n.headers=An.concat(a,o);const s=[];let l=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(n)===!1||(l=l&&x.synchronous,s.unshift(x.fulfilled,x.rejected))});const u=[];this.interceptors.response.forEach(function(x){u.push(x.fulfilled,x.rejected)});let d,f=0,h;if(!l){const y=[sm.bind(this),void 0];for(y.unshift.apply(y,s),y.push.apply(y,u),h=y.length,d=Promise.resolve(n);f<h;)d=d.then(y[f++],y[f++]);return d}h=s.length;let A=n;for(f=0;f<h;){const y=s[f++],x=s[f++];try{A=y(A)}catch(R){x.call(this,R);break}}try{d=sm.call(this,A)}catch(y){return Promise.reject(y)}for(f=0,h=u.length;f<h;)d=d.then(u[f++],u[f++]);return d}getUri(t){t=Pi(this.defaults,t);const n=j0(t.baseURL,t.url);return E0(n,t.params,t.paramsSerializer)}}k.forEach(["delete","get","head","options"],function(t){rl.prototype[t]=function(n,r){return this.request(Pi(r||{},{method:t,url:n,data:(r||{}).data}))}});k.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,s){return this.request(Pi(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}rl.prototype[t]=n(),rl.prototype[t+"Form"]=n(!0)});const ms=rl;class Tf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(s=>{r.subscribe(s),o=s}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,s){r.reason||(r.reason=new ya(o,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Tf(function(i){t=i}),cancel:t}}}const HR=Tf;function WR(e){return function(n){return e.apply(null,n)}}function QR(e){return k.isObject(e)&&e.isAxiosError===!0}const ud={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ud).forEach(([e,t])=>{ud[t]=e});const GR=ud;function N0(e){const t=new ms(e),n=p0(ms.prototype.request,t);return k.extend(n,ms.prototype,t,{allOwnKeys:!0}),k.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return N0(Pi(e,i))},n}const Re=N0(Pf);Re.Axios=ms;Re.CanceledError=ya;Re.CancelToken=HR;Re.isCancel=R0;Re.VERSION=P0;Re.toFormData=Bl;Re.AxiosError=Y;Re.Cancel=Re.CanceledError;Re.all=function(t){return Promise.all(t)};Re.spread=WR;Re.isAxiosError=QR;Re.mergeConfig=Pi;Re.AxiosHeaders=An;Re.formToJSON=e=>k0(k.isHTMLForm(e)?new FormData(e):e);Re.getAdapter=O0.getAdapter;Re.HttpStatusCode=GR;Re.default=Re;const qR=Re,gs=qR.create({headers:{"Access-Control-Allow-Credentials":!0},baseURL:"https://cors-anywhere.herokuapp.com/http://79.137.203.212:8088"});gs.interceptors.request.use(e=>(e.headers.Authorization=localStorage.getItem("token"),e));class cd{static async login(t,n){return gs.post("/token",{username:t,password:n},{headers:{"Content-Type":"application/x-www-form-urlencoded"}})}static async getUser(){return gs.get("/users/me")}static async register(t,n){return gs.post("/register",{username:t,password:n})}}const YR=gt(()=>{const{setUser:e}=Vi,[t,n]=S.useState(!1),[r,i]=S.useState({email:"",password:"",rememberMe:!1}),[o,a]=S.useState({result:!1,badFields:[]}),s=u=>S.useCallback(d=>{i({...r,[u]:d})},[u,r]),l=async u=>{u.preventDefault();const d=EE(r);if(a(d),d.result)try{n(!0);const f=await cd.login(r.email,r.password);n(!1);const h=f.data;h.token_type=h.token_type.charAt(0).toUpperCase()+h.token_type.slice(1),localStorage.setItem("token",`${h.token_type} ${h.access_token}`),n(!0);const A=(await cd.getUser()).data;e({id:1,login:"test",email:A.username,data:void 0,token:h.access_token}),n(!1)}catch{n(!1),a({result:!1,badFields:["email","password"]})}};return c.jsxs(jk,{children:[c.jsx(Ok,{children:"Авторизация"}),c.jsx(Pk,{children:"Пожалуйста, авторизуйтесь"}),c.jsxs(Dk,{onSubmit:l,children:[c.jsx(Qe,{type:"email",name:"email",placeholder:"Email",value:r.email,onChange:s("email"),required:!0,className:o.badFields.find(u=>u==="email")?"error":""}),c.jsx(Qe,{type:"password",name:"password",placeholder:"Пароль",value:r.password,onChange:s("password"),required:!0,className:o.badFields.find(u=>u==="password")?"error":""}),c.jsx(kr,{id:"rememberMe",isChecked:r.rememberMe,onChange:s("rememberMe"),children:"Запомнить меня на этом компьютере"}),c.jsx(Ui,{value:"Войти",isLoading:t}),c.jsx(Nk,{to:"forgot",children:"Забыли пароль?"}),c.jsx(Tk,{to:"register",children:"Зарегистрироваться"})]})]})}),JR=E.section`
  margin: 0 auto;
  margin-top: 23px;
  margin-bottom: 64px;
  padding: 25px;
  padding-bottom: 48px;
  width: 970px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background: #f6f7fc;

  color: ${e=>e.theme.colors.text};
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Raleway;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;

  @media screen and (max-width: 1169px) {
    width: 100%;
  }

  @media screen and (max-width: 470px) {
    width: 100%;
    padding: 27px 10px 28px 10px;
    background-color: transparent;
  }
`,XR=E.h1`
  font-family: "Rubik";
  margin-bottom: 23px;
  color: ${e=>e.theme.colors.text};
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;

  @media screen and (max-width: 1169px) {
    font-style: 24px;
  }

  @media screen and (max-width: 470px) {
    font-style: 20px;
  }
`;E.p`
  margin-bottom: 18px;
`;E(Pr)`
  color: #195cdf;
  margin-bottom: 2px;
  text-align: center;
`;E(Pr)`
  color: #195cdf;
  text-transform: uppercase;
  text-align: center;
`;const ZR=E.form`
  width: 370px;
  display: flex;
  flex-direction: column;
  gap: 9px;
  align-items: center;

  @media screen and (max-width: 470px) {
    width: 100%;
    max-width: 370px;
  }
`,ej=gt(()=>{const{setInfo:e}=ga,[t,n]=S.useState({email:"",password:"",repeatedPassword:""}),[r,i]=S.useState({result:!1,badFields:[]}),o=s=>S.useCallback(l=>{n({...t,[s]:l})},[s,t]),a=s=>{s.preventDefault();const l=kE(t);i(l),l.result&&(console.log(l,t),cd.register(t.email,t.password),e({text:"Вам на почту было отправлено сообщения для завершения регистрации",link:"/",buttonText:"Понятно",isVisible:!0}))};return c.jsxs(JR,{children:[c.jsx(kf,{}),c.jsx(XR,{children:"Зарегистрироваться"}),c.jsxs(ZR,{onSubmit:a,children:[c.jsx(Qe,{type:"email",name:"email",placeholder:"Email",value:t.email,onChange:o("email"),required:!0,className:r.badFields.find(s=>s==="email")?"error":""}),c.jsx(Qe,{type:"password",name:"password",placeholder:"Пароль",value:t.password,onChange:o("password"),required:!0}),c.jsx(Qe,{type:"password",name:"password",placeholder:"Пароль",value:t.repeatedPassword,onChange:o("repeatedPassword"),required:!0,className:r.badFields.find(s=>s==="repeatedPassword")?"error":""}),c.jsx(Ui,{value:"Зарегистрировтаься"})]})]})}),tj=E.section`
  margin: 0 auto;
  margin-top: 23px;
  margin-bottom: 64px;
  padding: 25px;
  padding-bottom: 48px;
  width: 970px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background: #f6f7fc;

  color: ${e=>e.theme.colors.text};
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Raleway;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;

  @media screen and (max-width: 1169px) {
    width: 100%;
  }

  @media screen and (max-width: 470px) {
    width: 100%;
    padding: 27px 10px 28px 10px;
    background-color: transparent;
  }
`,nj=E.h1`
  font-family: "Rubik";
  margin-bottom: 32px;
  color: ${e=>e.theme.colors.text};
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;

  @media screen and (max-width: 1169px) {
    font-style: 24px;
  }

  @media screen and (max-width: 470px) {
    font-style: 20px;
  }
`;E.p`
  margin-bottom: 18px;
`;E(Pr)`
  color: #195cdf;
  margin-bottom: 2px;
  text-align: center;
`;E(Pr)`
  color: #195cdf;
  text-transform: uppercase;
  text-align: center;
`;const rj=E.form`
  width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;

  @media screen and (max-width: 470px) {
    width: 100%;
    max-width: 370px;
  }
`,ij=E.p`
  margin-bottom: 23px;
  display: inline-flex;
  color: #868686;
  font-size: 14px;
  line-height: 120%;
`,oj=gt(()=>{const{setInfo:e}=ga,[t,n]=S.useState({email:""}),[r,i]=S.useState({result:!1,badFields:[]}),o=s=>S.useCallback(l=>{n({...t,[s]:l})},[s,t]),a=s=>{s.preventDefault();const l=bE(t);i(l),l.result&&(console.log(l,t),e({text:"Вам на почту было отправлено сообщения для восстановления пароля",link:"/",buttonText:"Понятно",isVisible:!0}))};return c.jsxs(tj,{children:[c.jsx(kf,{}),c.jsx(nj,{children:"Забыли свой пароль?"}),c.jsxs(rj,{onSubmit:a,children:[c.jsx(Qe,{type:"email",name:"email",placeholder:"Email",value:t.email,onChange:o("email"),required:!0,className:r.badFields.find(s=>s==="email")?"error":""}),c.jsx(ij,{children:"Контрольная строка для смены пароля, а также ваши регистрационные данные, будут высланы вам по Email"}),c.jsx(Ui,{value:"Выслать"})]})]})});const aj="/assets/telegram-3b377e92.svg",sj="/assets/whatsapp-bdc45d39.svg",lj="/assets/viber-7cb50281.svg";function Ni({title:e,phones:t}){return c.jsxs("div",{className:"contacts",children:[c.jsxs("div",{className:"contacts__left",children:[c.jsx("div",{children:e}),c.jsxs("div",{className:"smm",children:[c.jsx("a",{target:"_blank",href:`https://t.me/${t[0]}`,className:"smm__item",children:c.jsx("img",{width:21,height:21,className:"lazyload",src:aj,alt:""})}),c.jsx("a",{target:"_blank",href:`https://wa.me/${t[0]}`,className:"smm__item",children:c.jsx("img",{width:21,height:21,className:"lazyload",src:sj,alt:""})}),c.jsx("a",{target:"_blank",href:`viber://chat?number=${t[0]}`,className:"smm__item",children:c.jsx("img",{width:21,height:21,className:"lazyload",src:lj,alt:""})})]})]}),c.jsx("div",{className:"contacts__right",children:t.map((n,r)=>c.jsx("a",{target:"_blank",href:`tel:${n}`,className:"tel",children:n},r))})]})}const uj="/assets/mail-5acc8481.svg";function Df(){return c.jsxs("div",{className:"mail",children:[c.jsx("img",{width:25,height:19,src:uj,alt:""}),c.jsx("a",{target:"_blank",href:"mailto:",children:"info@airsyst.kz"})]})}const cj="/assets/time-e21e70d6.svg";function Lf(){return c.jsxs("div",{className:"time-work",children:[c.jsx("img",{width:26,height:26,className:"lazyload",src:cj,alt:"Время работы"}),c.jsxs("div",{className:"time-work__items",children:[c.jsxs("div",{className:"time-work__item",children:[c.jsx("strong",{children:"Пн-Пт: "}),"10:00-18:00"]}),c.jsxs("div",{className:"time-work__item",children:[c.jsx("strong",{children:"Сб-Вс: "}),"Выходной"]})]})]})}const T0="/assets/user-680933f9.svg";function dj(){return c.jsxs("a",{className:"mail cab",href:"/cab",children:[c.jsx("img",{width:25,height:19,src:T0,alt:""}),c.jsx("span",{children:"Личный кабинет"})]})}function fj(){return c.jsx("header",{className:"header",children:c.jsxs("div",{className:"wrap",children:[c.jsx(Lf,{}),c.jsx(Ni,{title:"Отдел продаж",phones:["+7 702 660 20 47","+7 702 871 12 51"]}),c.jsx(Ni,{title:"Отдел сервиса",phones:["+7 702 660 20 47"]}),c.jsx(Df,{}),c.jsx(dj,{})]})})}const D0="/assets/airsyst-bd6a161e.svg",pj="/assets/nav-close-c3ca8ecc.svg",hj="/assets/nav-open-7fdb8a5f.svg",mj="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAZCAYAAABQDyyRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJqSURBVHgBxVVNbtNAFH5vZgJdmgVSUjY2P+u6JyA5ASwRGKk3gBs0OUHgBkEExI7eoM4JCGuQ7C5KI7HASEhtkD3DN65MozQ/Vmyln5SMZ+bNm/fzvTdMwN3nkS9F6tAMJsNHIW0BfA+Xa0Ff5jcMpZ1tGCFOP3pjQ9SZ/eWWkXhKN4XWyyhqBdExbQFq0aLRZsTMT5yDyEkGXrKII9VvVvFk4MW8aK/1InqNHPQtD6RWySKOVIah+LxB+wsjIAyFGqaxET448qYZRB2qEWy0Tyz6O2nq8zKh3SD6ZYwZnX24XzsZZyOslgmhGsbE/LiY18GD/2XNZPUmdq6Wi+uvSEa7+SxypSDnkgeKqgBO7P9E2cM73zAcpJUaTYi/V9TI2qfvHw6q8kBqSuzleeNjcuHgu5UGmFSOWVnCsG/nk6EXUg3IKAPxJL50uNKAyScvBhETY9gt1qrwoMg/s2jb8UKpdSnIiRjiRH7g6s3YjAdF/tHg9izBbYNbawDCdAIiOpaI9s3YlAdF/l101mlKSKl+W+ytMeCSiOaW3MMYV+XBNM3aMIe0aByXMuC2kuHflBKhs24z+PabKoCJHTKyjw+aimx0tb4GRdeimmBI9ybDB93SBlhYDiBWLoQdKPARw5gExevOXZNPkUZU15xMOewGJ4dQ1p052P0x9HpV5ctF4CByOaUI8cP7QD0cgnLyzxXdKcppU3lRxgCEzrWDlrJ7NvSODGW5J/Y5rSpfqqvsKBqjfslWQyv4zmDzYR67VMVV5UtFIEbYEELrBTyQn6HMz9k8R6hN5EuT0KKohos/aKVH13O/ifw/1J5Hzlm/Ua8AAAAASUVORK5CYII=";function gj(){const[e,t]=S.useState(!1),[n,r]=S.useState(0),i=()=>{t(!1)};return S.useEffect(()=>{const o=localStorage.getItem("cart");if(o!=null){const a=JSON.parse(o).length;r(a)}else r(0)},[]),c.jsxs(c.Fragment,{children:[c.jsx("nav",{className:"nav",children:c.jsxs("div",{className:"wrap",children:[c.jsx("a",{href:"/",className:"logo",children:c.jsx("img",{width:170,height:38,className:"lazyload",src:D0,alt:"AirSyst"})}),c.jsxs("div",{className:"nav__items",children:[c.jsx("a",{className:"nav__item",href:"/products",children:"Наши продукты"}),c.jsx("a",{className:"nav__item",href:"/about",children:"О компании"}),c.jsx("a",{className:"nav__item",href:"/news",children:"Новости"}),c.jsx("a",{className:"nav__item",href:"/projects",children:"Наши проекты"}),c.jsx("a",{className:"nav__item",href:"/sertifikaty",children:"Сертификаты"}),c.jsx("a",{className:"nav__item",href:"/contacts",children:"Контакты"}),c.jsx("a",{className:"nav__item",href:"/diallers",children:"Дилерам"})]}),c.jsxs("a",{className:"mail cab",href:"/cab",children:[c.jsx("img",{width:25,height:19,src:T0,alt:""}),c.jsx("span",{children:"Личный кабинет"})]}),c.jsx("a",{href:"/cart",className:"shopping-cart","attr-count":n,children:c.jsx("img",{width:30,height:25,className:"lazyload",src:mj,alt:"cart"})}),c.jsxs("div",{className:`nav__open mobile ${e&&"active"}`,onClick:()=>t(!e),children:[c.jsx("img",{width:37,height:18,className:"lazyload nav__open-img",src:hj,alt:"menu"}),c.jsx("img",{width:37,height:18,className:"lazyload nav__open-close-img",src:pj,alt:"close"})]})]})}),c.jsxs("div",{className:`nav-mobile mobile ${e&&"active"}`,children:[c.jsxs("div",{className:"nav__items",children:[c.jsx("a",{className:"nav__item",href:"/products",onClick:i,children:"Наши продукты"}),c.jsx("a",{className:"nav__item",href:"/about",onClick:i,children:"О компании"}),c.jsx("a",{className:"nav__item",href:"/news",onClick:i,children:"Новости"}),c.jsx("a",{className:"nav__item",href:"/projects",onClick:i,children:"Наши проекты"}),c.jsx("a",{className:"nav__item",href:"/sertifikaty",onClick:i,children:"Сертификаты"}),c.jsx("a",{className:"nav__item",href:"/contacts",onClick:i,children:"Контакты"}),c.jsx("a",{className:"nav__item",href:"/diallers",onClick:i,children:"Дилерам"})]}),c.jsx(Ni,{title:"Отдел продаж",phones:["+7 702 660 20 47","+7 702 871 12 51"]}),c.jsx(Ni,{title:"Отдел сервиса",phones:["+7 702 660 20 47"]}),c.jsx(Lf,{}),c.jsx(Df,{})]})]})}function vj(){return c.jsx("footer",{className:"footer",children:c.jsxs("div",{className:"wrap",children:[c.jsxs("div",{className:"footer__item",children:[c.jsx("a",{href:"/",className:"logo",children:c.jsx("img",{src:D0,width:170,height:38,alt:"Logo"})}),c.jsx("div",{className:"copyright",children:"© 2015-2023"})]}),c.jsxs("div",{className:"footer__item",children:[c.jsx("a",{className:"nav__item",href:"/products",children:"Наши продукты"}),c.jsx("a",{className:"nav__item",href:"/about",children:"О компании"}),c.jsx("a",{className:"nav__item",href:"/news",children:"Новости"}),c.jsx("a",{className:"nav__item",href:"/projects",children:"Наши проекты"}),c.jsx("a",{className:"nav__item",href:"/sertifikaty",children:"Сертификаты"}),c.jsx("a",{className:"nav__item",href:"/contacts",children:"Контакты"}),c.jsx("a",{className:"nav__item",href:"/diallers",children:"Дилерам"})]}),c.jsxs("div",{className:"footer__item",children:[c.jsx(Lf,{}),c.jsx(Df,{})]}),c.jsxs("div",{className:"footer__item",children:[c.jsx(Ni,{title:"Отдел продаж",phones:["+7 702 660 20 47","+7 702 871 12 51"]}),c.jsx(Ni,{title:"Отдел сервиса",phones:["+7 702 660 20 47"]})]})]})})}function yj(e){const t=localStorage.getItem("user");return e||t!=null?e!=null&&e.data?c.jsx(re,{path:"/cab",element:c.jsx(pE,{user:e}),children:c.jsxs(re,{path:"/cab",element:c.jsx(UE,{}),children:[c.jsx(re,{index:!0,element:c.jsx(Yh,{})}),c.jsx(re,{path:"messages",element:c.jsx(Yh,{})}),c.jsx(re,{path:"store",element:c.jsx(sb,{})}),c.jsxs(re,{path:"documentation",children:[c.jsx(re,{index:!0,element:c.jsx(db,{})}),c.jsx(re,{path:"instructions",element:c.jsx(Ha,{itemsHref:"/",title:"Инструкции по эксплуатации"})}),c.jsx(re,{path:"certificates",element:c.jsx(Ha,{itemsHref:"/",title:"Сертификаты"})}),c.jsx(re,{path:"techinfo",element:c.jsx(Ha,{itemsHref:"/",title:"Техническая информация"})}),c.jsx(re,{path:"typedcomertial",element:c.jsx(Ha,{itemsHref:"/",title:"Образцы коммерческих предложений"})})]}),c.jsxs(re,{path:"booking",children:[c.jsx(re,{index:!0,element:c.jsx(pk,{})}),c.jsx(re,{path:"mybooking",element:c.jsx(xk,{})}),c.jsx(re,{path:"create",element:c.jsx(Xh,{})}),c.jsx(re,{path:"create/:id",element:c.jsx(Xh,{})})]}),c.jsx(re,{path:"price",element:c.jsx(lb,{})}),c.jsx(re,{path:"my",element:c.jsx(c.Fragment,{children:"my"})}),c.jsx(re,{path:"account",element:c.jsx(Rk,{})}),c.jsx(re,{path:"history",element:c.jsx(Hb,{})})]})}):c.jsxs(c.Fragment,{children:[c.jsx(re,{path:"/cab",element:c.jsx(OE,{})}),c.jsx(re,{path:"/cab/*",element:c.jsx(Oh,{to:"/cab"})})," "]}):c.jsxs(re,{path:"/cab",children:[c.jsx(re,{path:"/cab",element:c.jsx(YR,{})}),c.jsx(re,{path:"forgot",element:c.jsx(oj,{})}),c.jsx(re,{path:"*",element:c.jsx(Oh,{to:"/cab"})}),c.jsx(re,{path:"register",element:c.jsx(ej,{})})]})}const xj=gt(()=>{const{current:e}=ma,{user:t,setUser:n}=Vi;S.useEffect(()=>{const i=localStorage.getItem("user");return console.log(i),i!=null&&n({...JSON.parse(i)}),()=>{t!=null&&localStorage.setItem("user",JSON.stringify(t))}},[]);const r=z_(Yc(c.jsx(re,{path:"/",children:yj(t)})));return c.jsxs(c.Fragment,{children:[c.jsx(fj,{}),c.jsx(gj,{}),c.jsx(PE,{bgcolor:e==null?void 0:e.backgroundColor,children:c.jsx(xw,{theme:_w,children:c.jsx(NE,{bgcolor:e==null?void 0:e.backgroundColor,children:c.jsx(j_,{router:r})})})}),c.jsx(vj,{})]})});Wu.createRoot(document.getElementById("root")).render(c.jsx(xj,{}));
