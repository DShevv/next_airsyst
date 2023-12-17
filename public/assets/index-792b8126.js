var I0=Object.defineProperty;var M0=(e,t,n)=>t in e?I0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ee=(e,t,n)=>(M0(e,typeof t!="symbol"?t+"":t,n),n);function B0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function U0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var am={exports:{}},ol={},sm={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ta=Symbol.for("react.element"),V0=Symbol.for("react.portal"),H0=Symbol.for("react.fragment"),W0=Symbol.for("react.strict_mode"),K0=Symbol.for("react.profiler"),G0=Symbol.for("react.provider"),q0=Symbol.for("react.context"),Q0=Symbol.for("react.forward_ref"),Y0=Symbol.for("react.suspense"),X0=Symbol.for("react.memo"),J0=Symbol.for("react.lazy"),Vf=Symbol.iterator;function Z0(e){return e===null||typeof e!="object"?null:(e=Vf&&e[Vf]||e["@@iterator"],typeof e=="function"?e:null)}var lm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},um=Object.assign,cm={};function $i(e,t,n){this.props=e,this.context=t,this.refs=cm,this.updater=n||lm}$i.prototype.isReactComponent={};$i.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};$i.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function dm(){}dm.prototype=$i.prototype;function sd(e,t,n){this.props=e,this.context=t,this.refs=cm,this.updater=n||lm}var ld=sd.prototype=new dm;ld.constructor=sd;um(ld,$i.prototype);ld.isPureReactComponent=!0;var Hf=Array.isArray,fm=Object.prototype.hasOwnProperty,ud={current:null},pm={key:!0,ref:!0,__self:!0,__source:!0};function hm(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)fm.call(t,r)&&!pm.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:ta,type:e,key:o,ref:a,props:i,_owner:ud.current}}function ex(e,t){return{$$typeof:ta,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function cd(e){return typeof e=="object"&&e!==null&&e.$$typeof===ta}function tx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wf=/\/+/g;function Yl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?tx(""+e.key):t.toString(36)}function qa(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ta:case V0:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Yl(a,0):r,Hf(i)?(n="",e!=null&&(n=e.replace(Wf,"$&/")+"/"),qa(i,t,n,"",function(u){return u})):i!=null&&(cd(i)&&(i=ex(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Wf,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Hf(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+Yl(o,s);a+=qa(o,t,n,l,i)}else if(l=Z0(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+Yl(o,s++),a+=qa(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ea(e,t,n){if(e==null)return e;var r=[],i=0;return qa(e,r,"","",function(o){return t.call(n,o,i++)}),r}function nx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ze={current:null},Qa={transition:null},rx={ReactCurrentDispatcher:Ze,ReactCurrentBatchConfig:Qa,ReactCurrentOwner:ud};Q.Children={map:Ea,forEach:function(e,t,n){Ea(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ea(e,function(){t++}),t},toArray:function(e){return Ea(e,function(t){return t})||[]},only:function(e){if(!cd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=$i;Q.Fragment=H0;Q.Profiler=K0;Q.PureComponent=sd;Q.StrictMode=W0;Q.Suspense=Y0;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rx;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=um({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ud.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)fm.call(t,l)&&!pm.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:ta,type:e.type,key:i,ref:o,props:r,_owner:a}};Q.createContext=function(e){return e={$$typeof:q0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:G0,_context:e},e.Consumer=e};Q.createElement=hm;Q.createFactory=function(e){var t=hm.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:Q0,render:e}};Q.isValidElement=cd;Q.lazy=function(e){return{$$typeof:J0,_payload:{_status:-1,_result:e},_init:nx}};Q.memo=function(e,t){return{$$typeof:X0,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=Qa.transition;Qa.transition={};try{e()}finally{Qa.transition=t}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(e,t){return Ze.current.useCallback(e,t)};Q.useContext=function(e){return Ze.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return Ze.current.useDeferredValue(e)};Q.useEffect=function(e,t){return Ze.current.useEffect(e,t)};Q.useId=function(){return Ze.current.useId()};Q.useImperativeHandle=function(e,t,n){return Ze.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return Ze.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return Ze.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return Ze.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return Ze.current.useReducer(e,t,n)};Q.useRef=function(e){return Ze.current.useRef(e)};Q.useState=function(e){return Ze.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return Ze.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return Ze.current.useTransition()};Q.version="18.2.0";sm.exports=Q;var S=sm.exports;const Ft=U0(S),ix=B0({__proto__:null,default:Ft},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ox=S,ax=Symbol.for("react.element"),sx=Symbol.for("react.fragment"),lx=Object.prototype.hasOwnProperty,ux=ox.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cx={key:!0,ref:!0,__self:!0,__source:!0};function mm(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)lx.call(t,r)&&!cx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ax,type:e,key:o,ref:a,props:i,_owner:ux.current}}ol.Fragment=sx;ol.jsx=mm;ol.jsxs=mm;am.exports=ol;var c=am.exports,Hu={},gm={exports:{}},ht={},vm={exports:{}},ym={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,F){var I=T.length;T.push(F);e:for(;0<I;){var ue=I-1>>>1,he=T[ue];if(0<i(he,F))T[ue]=F,T[I]=he,I=ue;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var F=T[0],I=T.pop();if(I!==F){T[0]=I;e:for(var ue=0,he=T.length,Ot=he>>>1;ue<Ot;){var J=2*(ue+1)-1,tt=T[J],He=J+1,nt=T[He];if(0>i(tt,I))He<he&&0>i(nt,tt)?(T[ue]=nt,T[He]=I,ue=He):(T[ue]=tt,T[J]=I,ue=J);else if(He<he&&0>i(nt,I))T[ue]=nt,T[He]=I,ue=He;else break e}}return F}function i(T,F){var I=T.sortIndex-F.sortIndex;return I!==0?I:T.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],d=1,f=null,m=3,x=!1,y=!1,w=!1,j=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(T){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=T)r(u),F.sortIndex=F.expirationTime,t(l,F);else break;F=n(u)}}function h(T){if(w=!1,v(T),!y)if(n(l)!==null)y=!0,Fe(b);else{var F=n(u);F!==null&&Re(h,F.startTime-T)}}function b(T,F){y=!1,w&&(w=!1,g(D),D=-1),x=!0;var I=m;try{for(v(F),f=n(l);f!==null&&(!(f.expirationTime>F)||T&&!Ee());){var ue=f.callback;if(typeof ue=="function"){f.callback=null,m=f.priorityLevel;var he=ue(f.expirationTime<=F);F=e.unstable_now(),typeof he=="function"?f.callback=he:f===n(l)&&r(l),v(F)}else r(l);f=n(l)}if(f!==null)var Ot=!0;else{var J=n(u);J!==null&&Re(h,J.startTime-F),Ot=!1}return Ot}finally{f=null,m=I,x=!1}}var R=!1,C=null,D=-1,q=5,B=-1;function Ee(){return!(e.unstable_now()-B<q)}function oe(){if(C!==null){var T=e.unstable_now();B=T;var F=!0;try{F=C(!0,T)}finally{F?vt():(R=!1,C=null)}}else R=!1}var vt;if(typeof p=="function")vt=function(){p(oe)};else if(typeof MessageChannel<"u"){var Kt=new MessageChannel,Gt=Kt.port2;Kt.port1.onmessage=oe,vt=function(){Gt.postMessage(null)}}else vt=function(){j(oe,0)};function Fe(T){C=T,R||(R=!0,vt())}function Re(T,F){D=j(function(){T(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,Fe(b))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var F=3;break;default:F=m}var I=m;m=F;try{return T()}finally{m=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,F){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var I=m;m=T;try{return F()}finally{m=I}},e.unstable_scheduleCallback=function(T,F,I){var ue=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?ue+I:ue):I=ue,T){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=I+he,T={id:d++,callback:F,priorityLevel:T,startTime:I,expirationTime:he,sortIndex:-1},I>ue?(T.sortIndex=I,t(u,T),n(l)===null&&T===n(u)&&(w?(g(D),D=-1):w=!0,Re(h,I-ue))):(T.sortIndex=he,t(l,T),y||x||(y=!0,Fe(b))),T},e.unstable_shouldYield=Ee,e.unstable_wrapCallback=function(T){var F=m;return function(){var I=m;m=F;try{return T.apply(this,arguments)}finally{m=I}}}})(ym);vm.exports=ym;var dx=vm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm=S,pt=dx;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wm=new Set,Oo={};function Or(e,t){mi(e,t),mi(e+"Capture",t)}function mi(e,t){for(Oo[e]=t,e=0;e<t.length;e++)wm.add(t[e])}var _n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wu=Object.prototype.hasOwnProperty,fx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kf={},Gf={};function px(e){return Wu.call(Gf,e)?!0:Wu.call(Kf,e)?!1:fx.test(e)?Gf[e]=!0:(Kf[e]=!0,!1)}function hx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function mx(e,t,n,r){if(t===null||typeof t>"u"||hx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function et(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ve[e]=new et(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ve[t]=new et(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ve[e]=new et(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ve[e]=new et(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ve[e]=new et(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ve[e]=new et(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ve[e]=new et(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ve[e]=new et(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ve[e]=new et(e,5,!1,e.toLowerCase(),null,!1,!1)});var dd=/[\-:]([a-z])/g;function fd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(dd,fd);Ve[t]=new et(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(dd,fd);Ve[t]=new et(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(dd,fd);Ve[t]=new et(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ve[e]=new et(e,1,!1,e.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ve[e]=new et(e,1,!1,e.toLowerCase(),null,!0,!0)});function pd(e,t,n,r){var i=Ve.hasOwnProperty(t)?Ve[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(mx(t,n,i,r)&&(n=null),r||i===null?px(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Cn=xm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ka=Symbol.for("react.element"),Vr=Symbol.for("react.portal"),Hr=Symbol.for("react.fragment"),hd=Symbol.for("react.strict_mode"),Ku=Symbol.for("react.profiler"),_m=Symbol.for("react.provider"),Sm=Symbol.for("react.context"),md=Symbol.for("react.forward_ref"),Gu=Symbol.for("react.suspense"),qu=Symbol.for("react.suspense_list"),gd=Symbol.for("react.memo"),$n=Symbol.for("react.lazy"),bm=Symbol.for("react.offscreen"),qf=Symbol.iterator;function Ji(e){return e===null||typeof e!="object"?null:(e=qf&&e[qf]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Object.assign,Xl;function fo(e){if(Xl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xl=t&&t[1]||""}return`
`+Xl+e}var Jl=!1;function Zl(e,t){if(!e||Jl)return"";Jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Jl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?fo(e):""}function gx(e){switch(e.tag){case 5:return fo(e.type);case 16:return fo("Lazy");case 13:return fo("Suspense");case 19:return fo("SuspenseList");case 0:case 2:case 15:return e=Zl(e.type,!1),e;case 11:return e=Zl(e.type.render,!1),e;case 1:return e=Zl(e.type,!0),e;default:return""}}function Qu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hr:return"Fragment";case Vr:return"Portal";case Ku:return"Profiler";case hd:return"StrictMode";case Gu:return"Suspense";case qu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sm:return(e.displayName||"Context")+".Consumer";case _m:return(e._context.displayName||"Context")+".Provider";case md:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gd:return t=e.displayName||null,t!==null?t:Qu(e.type)||"Memo";case $n:t=e._payload,e=e._init;try{return Qu(e(t))}catch{}}return null}function vx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qu(t);case 8:return t===hd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Jn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Em(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yx(e){var t=Em(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ca(e){e._valueTracker||(e._valueTracker=yx(e))}function km(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Em(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ys(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Yu(e,t){var n=t.checked;return xe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Qf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Jn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Cm(e,t){t=t.checked,t!=null&&pd(e,"checked",t,!1)}function Xu(e,t){Cm(e,t);var n=Jn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ju(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ju(e,t.type,Jn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ju(e,t,n){(t!=="number"||ys(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var po=Array.isArray;function si(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Jn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return xe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(po(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Jn(n)}}function Am(e,t){var n=Jn(t.value),r=Jn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Jf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ec(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Aa,Rm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Aa=Aa||document.createElement("div"),Aa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Aa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Po(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xx=["Webkit","ms","Moz","O"];Object.keys(vo).forEach(function(e){xx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vo[t]=vo[e]})});function Om(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||vo.hasOwnProperty(e)&&vo[e]?(""+t).trim():t+"px"}function Pm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Om(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var wx=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tc(e,t){if(t){if(wx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function nc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rc=null;function vd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ic=null,li=null,ui=null;function Zf(e){if(e=ia(e)){if(typeof ic!="function")throw Error(P(280));var t=e.stateNode;t&&(t=cl(t),ic(e.stateNode,e.type,t))}}function Nm(e){li?ui?ui.push(e):ui=[e]:li=e}function Tm(){if(li){var e=li,t=ui;if(ui=li=null,Zf(e),t)for(e=0;e<t.length;e++)Zf(t[e])}}function Dm(e,t){return e(t)}function Lm(){}var eu=!1;function $m(e,t,n){if(eu)return e(t,n);eu=!0;try{return Dm(e,t,n)}finally{eu=!1,(li!==null||ui!==null)&&(Lm(),Tm())}}function No(e,t){var n=e.stateNode;if(n===null)return null;var r=cl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var oc=!1;if(_n)try{var Zi={};Object.defineProperty(Zi,"passive",{get:function(){oc=!0}}),window.addEventListener("test",Zi,Zi),window.removeEventListener("test",Zi,Zi)}catch{oc=!1}function _x(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var yo=!1,xs=null,ws=!1,ac=null,Sx={onError:function(e){yo=!0,xs=e}};function bx(e,t,n,r,i,o,a,s,l){yo=!1,xs=null,_x.apply(Sx,arguments)}function Ex(e,t,n,r,i,o,a,s,l){if(bx.apply(this,arguments),yo){if(yo){var u=xs;yo=!1,xs=null}else throw Error(P(198));ws||(ws=!0,ac=u)}}function Pr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function zm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ep(e){if(Pr(e)!==e)throw Error(P(188))}function kx(e){var t=e.alternate;if(!t){if(t=Pr(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ep(i),e;if(o===r)return ep(i),t;o=o.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Fm(e){return e=kx(e),e!==null?Im(e):null}function Im(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Im(e);if(t!==null)return t;e=e.sibling}return null}var Mm=pt.unstable_scheduleCallback,tp=pt.unstable_cancelCallback,Cx=pt.unstable_shouldYield,Ax=pt.unstable_requestPaint,be=pt.unstable_now,jx=pt.unstable_getCurrentPriorityLevel,yd=pt.unstable_ImmediatePriority,Bm=pt.unstable_UserBlockingPriority,_s=pt.unstable_NormalPriority,Rx=pt.unstable_LowPriority,Um=pt.unstable_IdlePriority,al=null,en=null;function Ox(e){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(al,e,void 0,(e.current.flags&128)===128)}catch{}}var It=Math.clz32?Math.clz32:Tx,Px=Math.log,Nx=Math.LN2;function Tx(e){return e>>>=0,e===0?32:31-(Px(e)/Nx|0)|0}var ja=64,Ra=4194304;function ho(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ss(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=ho(s):(o&=a,o!==0&&(r=ho(o)))}else a=n&~i,a!==0?r=ho(a):o!==0&&(r=ho(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-It(t),i=1<<n,r|=e[n],t&=~i;return r}function Dx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lx(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-It(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=Dx(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function sc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vm(){var e=ja;return ja<<=1,!(ja&4194240)&&(ja=64),e}function tu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function na(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-It(t),e[t]=n}function $x(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-It(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function xd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-It(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ie=0;function Hm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wm,wd,Km,Gm,qm,lc=!1,Oa=[],Vn=null,Hn=null,Wn=null,To=new Map,Do=new Map,Fn=[],zx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function np(e,t){switch(e){case"focusin":case"focusout":Vn=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Wn=null;break;case"pointerover":case"pointerout":To.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(t.pointerId)}}function eo(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ia(t),t!==null&&wd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Fx(e,t,n,r,i){switch(t){case"focusin":return Vn=eo(Vn,e,t,n,r,i),!0;case"dragenter":return Hn=eo(Hn,e,t,n,r,i),!0;case"mouseover":return Wn=eo(Wn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return To.set(o,eo(To.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Do.set(o,eo(Do.get(o)||null,e,t,n,r,i)),!0}return!1}function Qm(e){var t=cr(e.target);if(t!==null){var n=Pr(t);if(n!==null){if(t=n.tag,t===13){if(t=zm(n),t!==null){e.blockedOn=t,qm(e.priority,function(){Km(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ya(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=uc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);rc=r,n.target.dispatchEvent(r),rc=null}else return t=ia(n),t!==null&&wd(t),e.blockedOn=n,!1;t.shift()}return!0}function rp(e,t,n){Ya(e)&&n.delete(t)}function Ix(){lc=!1,Vn!==null&&Ya(Vn)&&(Vn=null),Hn!==null&&Ya(Hn)&&(Hn=null),Wn!==null&&Ya(Wn)&&(Wn=null),To.forEach(rp),Do.forEach(rp)}function to(e,t){e.blockedOn===t&&(e.blockedOn=null,lc||(lc=!0,pt.unstable_scheduleCallback(pt.unstable_NormalPriority,Ix)))}function Lo(e){function t(i){return to(i,e)}if(0<Oa.length){to(Oa[0],e);for(var n=1;n<Oa.length;n++){var r=Oa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vn!==null&&to(Vn,e),Hn!==null&&to(Hn,e),Wn!==null&&to(Wn,e),To.forEach(t),Do.forEach(t),n=0;n<Fn.length;n++)r=Fn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Fn.length&&(n=Fn[0],n.blockedOn===null);)Qm(n),n.blockedOn===null&&Fn.shift()}var ci=Cn.ReactCurrentBatchConfig,bs=!0;function Mx(e,t,n,r){var i=ie,o=ci.transition;ci.transition=null;try{ie=1,_d(e,t,n,r)}finally{ie=i,ci.transition=o}}function Bx(e,t,n,r){var i=ie,o=ci.transition;ci.transition=null;try{ie=4,_d(e,t,n,r)}finally{ie=i,ci.transition=o}}function _d(e,t,n,r){if(bs){var i=uc(e,t,n,r);if(i===null)du(e,t,r,Es,n),np(e,r);else if(Fx(i,e,t,n,r))r.stopPropagation();else if(np(e,r),t&4&&-1<zx.indexOf(e)){for(;i!==null;){var o=ia(i);if(o!==null&&Wm(o),o=uc(e,t,n,r),o===null&&du(e,t,r,Es,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else du(e,t,r,null,n)}}var Es=null;function uc(e,t,n,r){if(Es=null,e=vd(r),e=cr(e),e!==null)if(t=Pr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=zm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Es=e,null}function Ym(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jx()){case yd:return 1;case Bm:return 4;case _s:case Rx:return 16;case Um:return 536870912;default:return 16}default:return 16}}var Mn=null,Sd=null,Xa=null;function Xm(){if(Xa)return Xa;var e,t=Sd,n=t.length,r,i="value"in Mn?Mn.value:Mn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Xa=i.slice(e,1<r?1-r:void 0)}function Ja(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pa(){return!0}function ip(){return!1}function mt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Pa:ip,this.isPropagationStopped=ip,this}return xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pa)},persist:function(){},isPersistent:Pa}),t}var zi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bd=mt(zi),ra=xe({},zi,{view:0,detail:0}),Ux=mt(ra),nu,ru,no,sl=xe({},ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ed,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==no&&(no&&e.type==="mousemove"?(nu=e.screenX-no.screenX,ru=e.screenY-no.screenY):ru=nu=0,no=e),nu)},movementY:function(e){return"movementY"in e?e.movementY:ru}}),op=mt(sl),Vx=xe({},sl,{dataTransfer:0}),Hx=mt(Vx),Wx=xe({},ra,{relatedTarget:0}),iu=mt(Wx),Kx=xe({},zi,{animationName:0,elapsedTime:0,pseudoElement:0}),Gx=mt(Kx),qx=xe({},zi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qx=mt(qx),Yx=xe({},zi,{data:0}),ap=mt(Yx),Xx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function e1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zx[e])?!!t[e]:!1}function Ed(){return e1}var t1=xe({},ra,{key:function(e){if(e.key){var t=Xx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ja(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ed,charCode:function(e){return e.type==="keypress"?Ja(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ja(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),n1=mt(t1),r1=xe({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sp=mt(r1),i1=xe({},ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ed}),o1=mt(i1),a1=xe({},zi,{propertyName:0,elapsedTime:0,pseudoElement:0}),s1=mt(a1),l1=xe({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),u1=mt(l1),c1=[9,13,27,32],kd=_n&&"CompositionEvent"in window,xo=null;_n&&"documentMode"in document&&(xo=document.documentMode);var d1=_n&&"TextEvent"in window&&!xo,Jm=_n&&(!kd||xo&&8<xo&&11>=xo),lp=String.fromCharCode(32),up=!1;function Zm(e,t){switch(e){case"keyup":return c1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wr=!1;function f1(e,t){switch(e){case"compositionend":return eg(t);case"keypress":return t.which!==32?null:(up=!0,lp);case"textInput":return e=t.data,e===lp&&up?null:e;default:return null}}function p1(e,t){if(Wr)return e==="compositionend"||!kd&&Zm(e,t)?(e=Xm(),Xa=Sd=Mn=null,Wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jm&&t.locale!=="ko"?null:t.data;default:return null}}var h1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!h1[e.type]:t==="textarea"}function tg(e,t,n,r){Nm(r),t=ks(t,"onChange"),0<t.length&&(n=new bd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wo=null,$o=null;function m1(e){fg(e,0)}function ll(e){var t=qr(e);if(km(t))return e}function g1(e,t){if(e==="change")return t}var ng=!1;if(_n){var ou;if(_n){var au="oninput"in document;if(!au){var dp=document.createElement("div");dp.setAttribute("oninput","return;"),au=typeof dp.oninput=="function"}ou=au}else ou=!1;ng=ou&&(!document.documentMode||9<document.documentMode)}function fp(){wo&&(wo.detachEvent("onpropertychange",rg),$o=wo=null)}function rg(e){if(e.propertyName==="value"&&ll($o)){var t=[];tg(t,$o,e,vd(e)),$m(m1,t)}}function v1(e,t,n){e==="focusin"?(fp(),wo=t,$o=n,wo.attachEvent("onpropertychange",rg)):e==="focusout"&&fp()}function y1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll($o)}function x1(e,t){if(e==="click")return ll(t)}function w1(e,t){if(e==="input"||e==="change")return ll(t)}function _1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ht=typeof Object.is=="function"?Object.is:_1;function zo(e,t){if(Ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Wu.call(t,i)||!Ht(e[i],t[i]))return!1}return!0}function pp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hp(e,t){var n=pp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pp(n)}}function ig(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ig(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function og(){for(var e=window,t=ys();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ys(e.document)}return t}function Cd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function S1(e){var t=og(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ig(n.ownerDocument.documentElement,n)){if(r!==null&&Cd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=hp(n,o);var a=hp(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var b1=_n&&"documentMode"in document&&11>=document.documentMode,Kr=null,cc=null,_o=null,dc=!1;function mp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dc||Kr==null||Kr!==ys(r)||(r=Kr,"selectionStart"in r&&Cd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_o&&zo(_o,r)||(_o=r,r=ks(cc,"onSelect"),0<r.length&&(t=new bd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kr)))}function Na(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gr={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionend:Na("Transition","TransitionEnd")},su={},ag={};_n&&(ag=document.createElement("div").style,"AnimationEvent"in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),"TransitionEvent"in window||delete Gr.transitionend.transition);function ul(e){if(su[e])return su[e];if(!Gr[e])return e;var t=Gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ag)return su[e]=t[n];return e}var sg=ul("animationend"),lg=ul("animationiteration"),ug=ul("animationstart"),cg=ul("transitionend"),dg=new Map,gp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(e,t){dg.set(e,t),Or(t,[e])}for(var lu=0;lu<gp.length;lu++){var uu=gp[lu],E1=uu.toLowerCase(),k1=uu[0].toUpperCase()+uu.slice(1);er(E1,"on"+k1)}er(sg,"onAnimationEnd");er(lg,"onAnimationIteration");er(ug,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er(cg,"onTransitionEnd");mi("onMouseEnter",["mouseout","mouseover"]);mi("onMouseLeave",["mouseout","mouseover"]);mi("onPointerEnter",["pointerout","pointerover"]);mi("onPointerLeave",["pointerout","pointerover"]);Or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Or("onBeforeInput",["compositionend","keypress","textInput","paste"]);Or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C1=new Set("cancel close invalid load scroll toggle".split(" ").concat(mo));function vp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ex(r,t,void 0,e),e.currentTarget=null}function fg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;vp(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;vp(i,s,u),o=l}}}if(ws)throw e=ac,ws=!1,ac=null,e}function de(e,t){var n=t[gc];n===void 0&&(n=t[gc]=new Set);var r=e+"__bubble";n.has(r)||(pg(t,e,2,!1),n.add(r))}function cu(e,t,n){var r=0;t&&(r|=4),pg(n,e,r,t)}var Ta="_reactListening"+Math.random().toString(36).slice(2);function Fo(e){if(!e[Ta]){e[Ta]=!0,wm.forEach(function(n){n!=="selectionchange"&&(C1.has(n)||cu(n,!1,e),cu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ta]||(t[Ta]=!0,cu("selectionchange",!1,t))}}function pg(e,t,n,r){switch(Ym(t)){case 1:var i=Mx;break;case 4:i=Bx;break;default:i=_d}n=i.bind(null,t,n,e),i=void 0,!oc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function du(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=cr(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}$m(function(){var u=o,d=vd(n),f=[];e:{var m=dg.get(e);if(m!==void 0){var x=bd,y=e;switch(e){case"keypress":if(Ja(n)===0)break e;case"keydown":case"keyup":x=n1;break;case"focusin":y="focus",x=iu;break;case"focusout":y="blur",x=iu;break;case"beforeblur":case"afterblur":x=iu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Hx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=o1;break;case sg:case lg:case ug:x=Gx;break;case cg:x=s1;break;case"scroll":x=Ux;break;case"wheel":x=u1;break;case"copy":case"cut":case"paste":x=Qx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=sp}var w=(t&4)!==0,j=!w&&e==="scroll",g=w?m!==null?m+"Capture":null:m;w=[];for(var p=u,v;p!==null;){v=p;var h=v.stateNode;if(v.tag===5&&h!==null&&(v=h,g!==null&&(h=No(p,g),h!=null&&w.push(Io(p,h,v)))),j)break;p=p.return}0<w.length&&(m=new x(m,y,null,n,d),f.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==rc&&(y=n.relatedTarget||n.fromElement)&&(cr(y)||y[Sn]))break e;if((x||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=u,y=y?cr(y):null,y!==null&&(j=Pr(y),y!==j||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=u),x!==y)){if(w=op,h="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=sp,h="onPointerLeave",g="onPointerEnter",p="pointer"),j=x==null?m:qr(x),v=y==null?m:qr(y),m=new w(h,p+"leave",x,n,d),m.target=j,m.relatedTarget=v,h=null,cr(d)===u&&(w=new w(g,p+"enter",y,n,d),w.target=v,w.relatedTarget=j,h=w),j=h,x&&y)t:{for(w=x,g=y,p=0,v=w;v;v=zr(v))p++;for(v=0,h=g;h;h=zr(h))v++;for(;0<p-v;)w=zr(w),p--;for(;0<v-p;)g=zr(g),v--;for(;p--;){if(w===g||g!==null&&w===g.alternate)break t;w=zr(w),g=zr(g)}w=null}else w=null;x!==null&&yp(f,m,x,w,!1),y!==null&&j!==null&&yp(f,j,y,w,!0)}}e:{if(m=u?qr(u):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var b=g1;else if(cp(m))if(ng)b=w1;else{b=y1;var R=v1}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(b=x1);if(b&&(b=b(e,u))){tg(f,b,n,d);break e}R&&R(e,m,u),e==="focusout"&&(R=m._wrapperState)&&R.controlled&&m.type==="number"&&Ju(m,"number",m.value)}switch(R=u?qr(u):window,e){case"focusin":(cp(R)||R.contentEditable==="true")&&(Kr=R,cc=u,_o=null);break;case"focusout":_o=cc=Kr=null;break;case"mousedown":dc=!0;break;case"contextmenu":case"mouseup":case"dragend":dc=!1,mp(f,n,d);break;case"selectionchange":if(b1)break;case"keydown":case"keyup":mp(f,n,d)}var C;if(kd)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Wr?Zm(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Jm&&n.locale!=="ko"&&(Wr||D!=="onCompositionStart"?D==="onCompositionEnd"&&Wr&&(C=Xm()):(Mn=d,Sd="value"in Mn?Mn.value:Mn.textContent,Wr=!0)),R=ks(u,D),0<R.length&&(D=new ap(D,e,null,n,d),f.push({event:D,listeners:R}),C?D.data=C:(C=eg(n),C!==null&&(D.data=C)))),(C=d1?f1(e,n):p1(e,n))&&(u=ks(u,"onBeforeInput"),0<u.length&&(d=new ap("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=C))}fg(f,t)})}function Io(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ks(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=No(e,n),o!=null&&r.unshift(Io(e,o,i)),o=No(e,t),o!=null&&r.push(Io(e,o,i))),e=e.return}return r}function zr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yp(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=No(n,o),l!=null&&a.unshift(Io(n,l,s))):i||(l=No(n,o),l!=null&&a.push(Io(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var A1=/\r\n?/g,j1=/\u0000|\uFFFD/g;function xp(e){return(typeof e=="string"?e:""+e).replace(A1,`
`).replace(j1,"")}function Da(e,t,n){if(t=xp(t),xp(e)!==t&&n)throw Error(P(425))}function Cs(){}var fc=null,pc=null;function hc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mc=typeof setTimeout=="function"?setTimeout:void 0,R1=typeof clearTimeout=="function"?clearTimeout:void 0,wp=typeof Promise=="function"?Promise:void 0,O1=typeof queueMicrotask=="function"?queueMicrotask:typeof wp<"u"?function(e){return wp.resolve(null).then(e).catch(P1)}:mc;function P1(e){setTimeout(function(){throw e})}function fu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Lo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Lo(t)}function Kn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _p(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Fi=Math.random().toString(36).slice(2),Jt="__reactFiber$"+Fi,Mo="__reactProps$"+Fi,Sn="__reactContainer$"+Fi,gc="__reactEvents$"+Fi,N1="__reactListeners$"+Fi,T1="__reactHandles$"+Fi;function cr(e){var t=e[Jt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Sn]||n[Jt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_p(e);e!==null;){if(n=e[Jt])return n;e=_p(e)}return t}e=n,n=e.parentNode}return null}function ia(e){return e=e[Jt]||e[Sn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function cl(e){return e[Mo]||null}var vc=[],Qr=-1;function tr(e){return{current:e}}function pe(e){0>Qr||(e.current=vc[Qr],vc[Qr]=null,Qr--)}function ce(e,t){Qr++,vc[Qr]=e.current,e.current=t}var Zn={},Qe=tr(Zn),st=tr(!1),xr=Zn;function gi(e,t){var n=e.type.contextTypes;if(!n)return Zn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function lt(e){return e=e.childContextTypes,e!=null}function As(){pe(st),pe(Qe)}function Sp(e,t,n){if(Qe.current!==Zn)throw Error(P(168));ce(Qe,t),ce(st,n)}function hg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,vx(e)||"Unknown",i));return xe({},n,r)}function js(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zn,xr=Qe.current,ce(Qe,e),ce(st,st.current),!0}function bp(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=hg(e,t,xr),r.__reactInternalMemoizedMergedChildContext=e,pe(st),pe(Qe),ce(Qe,e)):pe(st),ce(st,n)}var pn=null,dl=!1,pu=!1;function mg(e){pn===null?pn=[e]:pn.push(e)}function D1(e){dl=!0,mg(e)}function nr(){if(!pu&&pn!==null){pu=!0;var e=0,t=ie;try{var n=pn;for(ie=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}pn=null,dl=!1}catch(i){throw pn!==null&&(pn=pn.slice(e+1)),Mm(yd,nr),i}finally{ie=t,pu=!1}}return null}var Yr=[],Xr=0,Rs=null,Os=0,wt=[],_t=0,wr=null,mn=1,gn="";function ar(e,t){Yr[Xr++]=Os,Yr[Xr++]=Rs,Rs=e,Os=t}function gg(e,t,n){wt[_t++]=mn,wt[_t++]=gn,wt[_t++]=wr,wr=e;var r=mn;e=gn;var i=32-It(r)-1;r&=~(1<<i),n+=1;var o=32-It(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,mn=1<<32-It(t)+i|n<<i|r,gn=o+e}else mn=1<<o|n<<i|r,gn=e}function Ad(e){e.return!==null&&(ar(e,1),gg(e,1,0))}function jd(e){for(;e===Rs;)Rs=Yr[--Xr],Yr[Xr]=null,Os=Yr[--Xr],Yr[Xr]=null;for(;e===wr;)wr=wt[--_t],wt[_t]=null,gn=wt[--_t],wt[_t]=null,mn=wt[--_t],wt[_t]=null}var ft=null,dt=null,ge=!1,$t=null;function vg(e,t){var n=Et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ep(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ft=e,dt=Kn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ft=e,dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=wr!==null?{id:mn,overflow:gn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ft=e,dt=null,!0):!1;default:return!1}}function yc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xc(e){if(ge){var t=dt;if(t){var n=t;if(!Ep(e,t)){if(yc(e))throw Error(P(418));t=Kn(n.nextSibling);var r=ft;t&&Ep(e,t)?vg(r,n):(e.flags=e.flags&-4097|2,ge=!1,ft=e)}}else{if(yc(e))throw Error(P(418));e.flags=e.flags&-4097|2,ge=!1,ft=e}}}function kp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ft=e}function La(e){if(e!==ft)return!1;if(!ge)return kp(e),ge=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hc(e.type,e.memoizedProps)),t&&(t=dt)){if(yc(e))throw yg(),Error(P(418));for(;t;)vg(e,t),t=Kn(t.nextSibling)}if(kp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){dt=Kn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}dt=null}}else dt=ft?Kn(e.stateNode.nextSibling):null;return!0}function yg(){for(var e=dt;e;)e=Kn(e.nextSibling)}function vi(){dt=ft=null,ge=!1}function Rd(e){$t===null?$t=[e]:$t.push(e)}var L1=Cn.ReactCurrentBatchConfig;function Tt(e,t){if(e&&e.defaultProps){t=xe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ps=tr(null),Ns=null,Jr=null,Od=null;function Pd(){Od=Jr=Ns=null}function Nd(e){var t=Ps.current;pe(Ps),e._currentValue=t}function wc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function di(e,t){Ns=e,Od=Jr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(it=!0),e.firstContext=null)}function At(e){var t=e._currentValue;if(Od!==e)if(e={context:e,memoizedValue:t,next:null},Jr===null){if(Ns===null)throw Error(P(308));Jr=e,Ns.dependencies={lanes:0,firstContext:e}}else Jr=Jr.next=e;return t}var dr=null;function Td(e){dr===null?dr=[e]:dr.push(e)}function xg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Td(t)):(n.next=i.next,i.next=n),t.interleaved=n,bn(e,r)}function bn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var zn=!1;function Dd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,bn(e,n)}return i=r.interleaved,i===null?(t.next=t,Td(r)):(t.next=i.next,i.next=t),r.interleaved=t,bn(e,n)}function Za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xd(e,n)}}function Cp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ts(e,t,n,r){var i=e.updateQueue;zn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==a&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;a=0,d=u=l=null,s=o;do{var m=s.lane,x=s.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,w=s;switch(m=t,x=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){f=y.call(x,f,m);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,m=typeof y=="function"?y.call(x,f,m):y,m==null)break e;f=xe({},f,m);break e;case 2:zn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[s]:m.push(s))}else x={eventTime:x,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=x,l=f):d=d.next=x,a|=m;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Sr|=a,e.lanes=a,e.memoizedState=f}}function Ap(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var _g=new xm.Component().refs;function _c(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:xe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fl={isMounted:function(e){return(e=e._reactInternals)?Pr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Je(),i=Qn(e),o=vn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Gn(e,o,i),t!==null&&(Mt(t,e,i,r),Za(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Je(),i=Qn(e),o=vn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Gn(e,o,i),t!==null&&(Mt(t,e,i,r),Za(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Je(),r=Qn(e),i=vn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Gn(e,i,r),t!==null&&(Mt(t,e,r,n),Za(t,e,r))}};function jp(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!zo(n,r)||!zo(i,o):!0}function Sg(e,t,n){var r=!1,i=Zn,o=t.contextType;return typeof o=="object"&&o!==null?o=At(o):(i=lt(t)?xr:Qe.current,r=t.contextTypes,o=(r=r!=null)?gi(e,i):Zn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Rp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fl.enqueueReplaceState(t,t.state,null)}function Sc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=_g,Dd(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=At(o):(o=lt(t)?xr:Qe.current,i.context=gi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(_c(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&fl.enqueueReplaceState(i,i.state,null),Ts(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ro(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;s===_g&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function $a(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Op(e){var t=e._init;return t(e._payload)}function bg(e){function t(g,p){if(e){var v=g.deletions;v===null?(g.deletions=[p],g.flags|=16):v.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=Yn(g,p),g.index=0,g.sibling=null,g}function o(g,p,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<p?(g.flags|=2,p):v):(g.flags|=2,p)):(g.flags|=1048576,p)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,p,v,h){return p===null||p.tag!==6?(p=wu(v,g.mode,h),p.return=g,p):(p=i(p,v),p.return=g,p)}function l(g,p,v,h){var b=v.type;return b===Hr?d(g,p,v.props.children,h,v.key):p!==null&&(p.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===$n&&Op(b)===p.type)?(h=i(p,v.props),h.ref=ro(g,p,v),h.return=g,h):(h=os(v.type,v.key,v.props,null,g.mode,h),h.ref=ro(g,p,v),h.return=g,h)}function u(g,p,v,h){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=_u(v,g.mode,h),p.return=g,p):(p=i(p,v.children||[]),p.return=g,p)}function d(g,p,v,h,b){return p===null||p.tag!==7?(p=gr(v,g.mode,h,b),p.return=g,p):(p=i(p,v),p.return=g,p)}function f(g,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=wu(""+p,g.mode,v),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ka:return v=os(p.type,p.key,p.props,null,g.mode,v),v.ref=ro(g,null,p),v.return=g,v;case Vr:return p=_u(p,g.mode,v),p.return=g,p;case $n:var h=p._init;return f(g,h(p._payload),v)}if(po(p)||Ji(p))return p=gr(p,g.mode,v,null),p.return=g,p;$a(g,p)}return null}function m(g,p,v,h){var b=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:s(g,p,""+v,h);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ka:return v.key===b?l(g,p,v,h):null;case Vr:return v.key===b?u(g,p,v,h):null;case $n:return b=v._init,m(g,p,b(v._payload),h)}if(po(v)||Ji(v))return b!==null?null:d(g,p,v,h,null);$a(g,v)}return null}function x(g,p,v,h,b){if(typeof h=="string"&&h!==""||typeof h=="number")return g=g.get(v)||null,s(p,g,""+h,b);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ka:return g=g.get(h.key===null?v:h.key)||null,l(p,g,h,b);case Vr:return g=g.get(h.key===null?v:h.key)||null,u(p,g,h,b);case $n:var R=h._init;return x(g,p,v,R(h._payload),b)}if(po(h)||Ji(h))return g=g.get(v)||null,d(p,g,h,b,null);$a(p,h)}return null}function y(g,p,v,h){for(var b=null,R=null,C=p,D=p=0,q=null;C!==null&&D<v.length;D++){C.index>D?(q=C,C=null):q=C.sibling;var B=m(g,C,v[D],h);if(B===null){C===null&&(C=q);break}e&&C&&B.alternate===null&&t(g,C),p=o(B,p,D),R===null?b=B:R.sibling=B,R=B,C=q}if(D===v.length)return n(g,C),ge&&ar(g,D),b;if(C===null){for(;D<v.length;D++)C=f(g,v[D],h),C!==null&&(p=o(C,p,D),R===null?b=C:R.sibling=C,R=C);return ge&&ar(g,D),b}for(C=r(g,C);D<v.length;D++)q=x(C,g,D,v[D],h),q!==null&&(e&&q.alternate!==null&&C.delete(q.key===null?D:q.key),p=o(q,p,D),R===null?b=q:R.sibling=q,R=q);return e&&C.forEach(function(Ee){return t(g,Ee)}),ge&&ar(g,D),b}function w(g,p,v,h){var b=Ji(v);if(typeof b!="function")throw Error(P(150));if(v=b.call(v),v==null)throw Error(P(151));for(var R=b=null,C=p,D=p=0,q=null,B=v.next();C!==null&&!B.done;D++,B=v.next()){C.index>D?(q=C,C=null):q=C.sibling;var Ee=m(g,C,B.value,h);if(Ee===null){C===null&&(C=q);break}e&&C&&Ee.alternate===null&&t(g,C),p=o(Ee,p,D),R===null?b=Ee:R.sibling=Ee,R=Ee,C=q}if(B.done)return n(g,C),ge&&ar(g,D),b;if(C===null){for(;!B.done;D++,B=v.next())B=f(g,B.value,h),B!==null&&(p=o(B,p,D),R===null?b=B:R.sibling=B,R=B);return ge&&ar(g,D),b}for(C=r(g,C);!B.done;D++,B=v.next())B=x(C,g,D,B.value,h),B!==null&&(e&&B.alternate!==null&&C.delete(B.key===null?D:B.key),p=o(B,p,D),R===null?b=B:R.sibling=B,R=B);return e&&C.forEach(function(oe){return t(g,oe)}),ge&&ar(g,D),b}function j(g,p,v,h){if(typeof v=="object"&&v!==null&&v.type===Hr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ka:e:{for(var b=v.key,R=p;R!==null;){if(R.key===b){if(b=v.type,b===Hr){if(R.tag===7){n(g,R.sibling),p=i(R,v.props.children),p.return=g,g=p;break e}}else if(R.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===$n&&Op(b)===R.type){n(g,R.sibling),p=i(R,v.props),p.ref=ro(g,R,v),p.return=g,g=p;break e}n(g,R);break}else t(g,R);R=R.sibling}v.type===Hr?(p=gr(v.props.children,g.mode,h,v.key),p.return=g,g=p):(h=os(v.type,v.key,v.props,null,g.mode,h),h.ref=ro(g,p,v),h.return=g,g=h)}return a(g);case Vr:e:{for(R=v.key;p!==null;){if(p.key===R)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(g,p.sibling),p=i(p,v.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else t(g,p);p=p.sibling}p=_u(v,g.mode,h),p.return=g,g=p}return a(g);case $n:return R=v._init,j(g,p,R(v._payload),h)}if(po(v))return y(g,p,v,h);if(Ji(v))return w(g,p,v,h);$a(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,v),p.return=g,g=p):(n(g,p),p=wu(v,g.mode,h),p.return=g,g=p),a(g)):n(g,p)}return j}var yi=bg(!0),Eg=bg(!1),oa={},tn=tr(oa),Bo=tr(oa),Uo=tr(oa);function fr(e){if(e===oa)throw Error(P(174));return e}function Ld(e,t){switch(ce(Uo,t),ce(Bo,e),ce(tn,oa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ec(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ec(t,e)}pe(tn),ce(tn,t)}function xi(){pe(tn),pe(Bo),pe(Uo)}function kg(e){fr(Uo.current);var t=fr(tn.current),n=ec(t,e.type);t!==n&&(ce(Bo,e),ce(tn,n))}function $d(e){Bo.current===e&&(pe(tn),pe(Bo))}var ve=tr(0);function Ds(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hu=[];function zd(){for(var e=0;e<hu.length;e++)hu[e]._workInProgressVersionPrimary=null;hu.length=0}var es=Cn.ReactCurrentDispatcher,mu=Cn.ReactCurrentBatchConfig,_r=0,ye=null,Pe=null,Le=null,Ls=!1,So=!1,Vo=0,$1=0;function We(){throw Error(P(321))}function Fd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ht(e[n],t[n]))return!1;return!0}function Id(e,t,n,r,i,o){if(_r=o,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,es.current=e===null||e.memoizedState===null?M1:B1,e=n(r,i),So){o=0;do{if(So=!1,Vo=0,25<=o)throw Error(P(301));o+=1,Le=Pe=null,t.updateQueue=null,es.current=U1,e=n(r,i)}while(So)}if(es.current=$s,t=Pe!==null&&Pe.next!==null,_r=0,Le=Pe=ye=null,Ls=!1,t)throw Error(P(300));return e}function Md(){var e=Vo!==0;return Vo=0,e}function Yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ye.memoizedState=Le=e:Le=Le.next=e,Le}function jt(){if(Pe===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=Le===null?ye.memoizedState:Le.next;if(t!==null)Le=t,Pe=e;else{if(e===null)throw Error(P(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Le===null?ye.memoizedState=Le=e:Le=Le.next=e}return Le}function Ho(e,t){return typeof t=="function"?t(e):t}function gu(e){var t=jt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=Pe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var d=u.lane;if((_r&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,a=r):l=l.next=f,ye.lanes|=d,Sr|=d}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,Ht(r,t.memoizedState)||(it=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ye.lanes|=o,Sr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vu(e){var t=jt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Ht(o,t.memoizedState)||(it=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Cg(){}function Ag(e,t){var n=ye,r=jt(),i=t(),o=!Ht(r.memoizedState,i);if(o&&(r.memoizedState=i,it=!0),r=r.queue,Bd(Og.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,Wo(9,Rg.bind(null,n,r,i,t),void 0,null),ze===null)throw Error(P(349));_r&30||jg(n,t,i)}return i}function jg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Rg(e,t,n,r){t.value=n,t.getSnapshot=r,Pg(t)&&Ng(e)}function Og(e,t,n){return n(function(){Pg(t)&&Ng(e)})}function Pg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ht(e,n)}catch{return!0}}function Ng(e){var t=bn(e,1);t!==null&&Mt(t,e,1,-1)}function Pp(e){var t=Yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:e},t.queue=e,e=e.dispatch=I1.bind(null,ye,e),[t.memoizedState,e]}function Wo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Tg(){return jt().memoizedState}function ts(e,t,n,r){var i=Yt();ye.flags|=e,i.memoizedState=Wo(1|t,n,void 0,r===void 0?null:r)}function pl(e,t,n,r){var i=jt();r=r===void 0?null:r;var o=void 0;if(Pe!==null){var a=Pe.memoizedState;if(o=a.destroy,r!==null&&Fd(r,a.deps)){i.memoizedState=Wo(t,n,o,r);return}}ye.flags|=e,i.memoizedState=Wo(1|t,n,o,r)}function Np(e,t){return ts(8390656,8,e,t)}function Bd(e,t){return pl(2048,8,e,t)}function Dg(e,t){return pl(4,2,e,t)}function Lg(e,t){return pl(4,4,e,t)}function $g(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zg(e,t,n){return n=n!=null?n.concat([e]):null,pl(4,4,$g.bind(null,t,e),n)}function Ud(){}function Fg(e,t){var n=jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ig(e,t){var n=jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Mg(e,t,n){return _r&21?(Ht(n,t)||(n=Vm(),ye.lanes|=n,Sr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,it=!0),e.memoizedState=n)}function z1(e,t){var n=ie;ie=n!==0&&4>n?n:4,e(!0);var r=mu.transition;mu.transition={};try{e(!1),t()}finally{ie=n,mu.transition=r}}function Bg(){return jt().memoizedState}function F1(e,t,n){var r=Qn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ug(e))Vg(t,n);else if(n=xg(e,t,n,r),n!==null){var i=Je();Mt(n,e,r,i),Hg(n,t,r)}}function I1(e,t,n){var r=Qn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ug(e))Vg(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Ht(s,a)){var l=t.interleaved;l===null?(i.next=i,Td(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=xg(e,t,i,r),n!==null&&(i=Je(),Mt(n,e,r,i),Hg(n,t,r))}}function Ug(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function Vg(e,t){So=Ls=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xd(e,n)}}var $s={readContext:At,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},M1={readContext:At,useCallback:function(e,t){return Yt().memoizedState=[e,t===void 0?null:t],e},useContext:At,useEffect:Np,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ts(4194308,4,$g.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ts(4194308,4,e,t)},useInsertionEffect:function(e,t){return ts(4,2,e,t)},useMemo:function(e,t){var n=Yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=F1.bind(null,ye,e),[r.memoizedState,e]},useRef:function(e){var t=Yt();return e={current:e},t.memoizedState=e},useState:Pp,useDebugValue:Ud,useDeferredValue:function(e){return Yt().memoizedState=e},useTransition:function(){var e=Pp(!1),t=e[0];return e=z1.bind(null,e[1]),Yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ye,i=Yt();if(ge){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),ze===null)throw Error(P(349));_r&30||jg(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Np(Og.bind(null,r,o,e),[e]),r.flags|=2048,Wo(9,Rg.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Yt(),t=ze.identifierPrefix;if(ge){var n=gn,r=mn;n=(r&~(1<<32-It(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=$1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},B1={readContext:At,useCallback:Fg,useContext:At,useEffect:Bd,useImperativeHandle:zg,useInsertionEffect:Dg,useLayoutEffect:Lg,useMemo:Ig,useReducer:gu,useRef:Tg,useState:function(){return gu(Ho)},useDebugValue:Ud,useDeferredValue:function(e){var t=jt();return Mg(t,Pe.memoizedState,e)},useTransition:function(){var e=gu(Ho)[0],t=jt().memoizedState;return[e,t]},useMutableSource:Cg,useSyncExternalStore:Ag,useId:Bg,unstable_isNewReconciler:!1},U1={readContext:At,useCallback:Fg,useContext:At,useEffect:Bd,useImperativeHandle:zg,useInsertionEffect:Dg,useLayoutEffect:Lg,useMemo:Ig,useReducer:vu,useRef:Tg,useState:function(){return vu(Ho)},useDebugValue:Ud,useDeferredValue:function(e){var t=jt();return Pe===null?t.memoizedState=e:Mg(t,Pe.memoizedState,e)},useTransition:function(){var e=vu(Ho)[0],t=jt().memoizedState;return[e,t]},useMutableSource:Cg,useSyncExternalStore:Ag,useId:Bg,unstable_isNewReconciler:!1};function wi(e,t){try{var n="",r=t;do n+=gx(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function yu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var V1=typeof WeakMap=="function"?WeakMap:Map;function Wg(e,t,n){n=vn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Fs||(Fs=!0,Tc=r),bc(e,t)},n}function Kg(e,t,n){n=vn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){bc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){bc(e,t),typeof r!="function"&&(qn===null?qn=new Set([this]):qn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Tp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new V1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=rw.bind(null,e,t,n),t.then(e,e))}function Dp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Lp(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vn(-1,1),t.tag=2,Gn(n,t,1))),n.lanes|=1),e)}var H1=Cn.ReactCurrentOwner,it=!1;function Ye(e,t,n,r){t.child=e===null?Eg(t,null,n,r):yi(t,e.child,n,r)}function $p(e,t,n,r,i){n=n.render;var o=t.ref;return di(t,i),r=Id(e,t,n,r,o,i),n=Md(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,En(e,t,i)):(ge&&n&&Ad(t),t.flags|=1,Ye(e,t,r,i),t.child)}function zp(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Yd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Gg(e,t,o,r,i)):(e=os(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:zo,n(a,r)&&e.ref===t.ref)return En(e,t,i)}return t.flags|=1,e=Yn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Gg(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(zo(o,r)&&e.ref===t.ref)if(it=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(it=!0);else return t.lanes=e.lanes,En(e,t,i)}return Ec(e,t,n,r,i)}function qg(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(ei,ct),ct|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ce(ei,ct),ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ce(ei,ct),ct|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ce(ei,ct),ct|=r;return Ye(e,t,i,n),t.child}function Qg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ec(e,t,n,r,i){var o=lt(n)?xr:Qe.current;return o=gi(t,o),di(t,i),n=Id(e,t,n,r,o,i),r=Md(),e!==null&&!it?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,En(e,t,i)):(ge&&r&&Ad(t),t.flags|=1,Ye(e,t,n,i),t.child)}function Fp(e,t,n,r,i){if(lt(n)){var o=!0;js(t)}else o=!1;if(di(t,i),t.stateNode===null)ns(e,t),Sg(t,n,r),Sc(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=At(u):(u=lt(n)?xr:Qe.current,u=gi(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Rp(t,a,r,u),zn=!1;var m=t.memoizedState;a.state=m,Ts(t,r,a,i),l=t.memoizedState,s!==r||m!==l||st.current||zn?(typeof d=="function"&&(_c(t,n,d,r),l=t.memoizedState),(s=zn||jp(t,n,s,r,m,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,wg(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Tt(t.type,s),a.props=u,f=t.pendingProps,m=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=At(l):(l=lt(n)?xr:Qe.current,l=gi(t,l));var x=n.getDerivedStateFromProps;(d=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||m!==l)&&Rp(t,a,r,l),zn=!1,m=t.memoizedState,a.state=m,Ts(t,r,a,i);var y=t.memoizedState;s!==f||m!==y||st.current||zn?(typeof x=="function"&&(_c(t,n,x,r),y=t.memoizedState),(u=zn||jp(t,n,u,r,m,y,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return kc(e,t,n,r,o,i)}function kc(e,t,n,r,i,o){Qg(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&bp(t,n,!1),En(e,t,o);r=t.stateNode,H1.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=yi(t,e.child,null,o),t.child=yi(t,null,s,o)):Ye(e,t,s,o),t.memoizedState=r.state,i&&bp(t,n,!0),t.child}function Yg(e){var t=e.stateNode;t.pendingContext?Sp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Sp(e,t.context,!1),Ld(e,t.containerInfo)}function Ip(e,t,n,r,i){return vi(),Rd(i),t.flags|=256,Ye(e,t,n,r),t.child}var Cc={dehydrated:null,treeContext:null,retryLane:0};function Ac(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xg(e,t,n){var r=t.pendingProps,i=ve.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ce(ve,i&1),e===null)return xc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=gl(a,r,0,null),e=gr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ac(n),t.memoizedState=Cc,e):Vd(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return W1(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Yn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Yn(s,o):(o=gr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Ac(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Cc,r}return o=e.child,e=o.sibling,r=Yn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Vd(e,t){return t=gl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function za(e,t,n,r){return r!==null&&Rd(r),yi(t,e.child,null,n),e=Vd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function W1(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=yu(Error(P(422))),za(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=gl({mode:"visible",children:r.children},i,0,null),o=gr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&yi(t,e.child,null,a),t.child.memoizedState=Ac(a),t.memoizedState=Cc,o);if(!(t.mode&1))return za(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(P(419)),r=yu(o,r,void 0),za(e,t,a,r)}if(s=(a&e.childLanes)!==0,it||s){if(r=ze,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,bn(e,i),Mt(r,e,i,-1))}return Qd(),r=yu(Error(P(421))),za(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=iw.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,dt=Kn(i.nextSibling),ft=t,ge=!0,$t=null,e!==null&&(wt[_t++]=mn,wt[_t++]=gn,wt[_t++]=wr,mn=e.id,gn=e.overflow,wr=t),t=Vd(t,r.children),t.flags|=4096,t)}function Mp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),wc(e.return,t,n)}function xu(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Jg(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ye(e,t,r.children,n),r=ve.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mp(e,n,t);else if(e.tag===19)Mp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ce(ve,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ds(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),xu(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ds(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}xu(t,!0,n,null,o);break;case"together":xu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ns(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function En(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Sr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Yn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function K1(e,t,n){switch(t.tag){case 3:Yg(t),vi();break;case 5:kg(t);break;case 1:lt(t.type)&&js(t);break;case 4:Ld(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ce(Ps,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ce(ve,ve.current&1),t.flags|=128,null):n&t.child.childLanes?Xg(e,t,n):(ce(ve,ve.current&1),e=En(e,t,n),e!==null?e.sibling:null);ce(ve,ve.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Jg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ve,ve.current),r)break;return null;case 22:case 23:return t.lanes=0,qg(e,t,n)}return En(e,t,n)}var Zg,jc,ev,tv;Zg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jc=function(){};ev=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,fr(tn.current);var o=null;switch(n){case"input":i=Yu(e,i),r=Yu(e,r),o=[];break;case"select":i=xe({},i,{value:void 0}),r=xe({},r,{value:void 0}),o=[];break;case"textarea":i=Zu(e,i),r=Zu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Cs)}tc(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Oo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Oo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&de("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};tv=function(e,t,n,r){n!==r&&(t.flags|=4)};function io(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function G1(e,t,n){var r=t.pendingProps;switch(jd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return lt(t.type)&&As(),Ke(t),null;case 3:return r=t.stateNode,xi(),pe(st),pe(Qe),zd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(La(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$t!==null&&($c($t),$t=null))),jc(e,t),Ke(t),null;case 5:$d(t);var i=fr(Uo.current);if(n=t.type,e!==null&&t.stateNode!=null)ev(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Ke(t),null}if(e=fr(tn.current),La(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Jt]=t,r[Mo]=o,e=(t.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<mo.length;i++)de(mo[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Qf(r,o),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},de("invalid",r);break;case"textarea":Xf(r,o),de("invalid",r)}tc(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Da(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Da(r.textContent,s,e),i=["children",""+s]):Oo.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&de("scroll",r)}switch(n){case"input":Ca(r),Yf(r,o,!0);break;case"textarea":Ca(r),Jf(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Cs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Jt]=t,e[Mo]=r,Zg(e,t,!1,!1),t.stateNode=e;e:{switch(a=nc(n,r),n){case"dialog":de("cancel",e),de("close",e),i=r;break;case"iframe":case"object":case"embed":de("load",e),i=r;break;case"video":case"audio":for(i=0;i<mo.length;i++)de(mo[i],e);i=r;break;case"source":de("error",e),i=r;break;case"img":case"image":case"link":de("error",e),de("load",e),i=r;break;case"details":de("toggle",e),i=r;break;case"input":Qf(e,r),i=Yu(e,r),de("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=xe({},r,{value:void 0}),de("invalid",e);break;case"textarea":Xf(e,r),i=Zu(e,r),de("invalid",e);break;default:i=r}tc(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Pm(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Rm(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Po(e,l):typeof l=="number"&&Po(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Oo.hasOwnProperty(o)?l!=null&&o==="onScroll"&&de("scroll",e):l!=null&&pd(e,o,l,a))}switch(n){case"input":Ca(e),Yf(e,r,!1);break;case"textarea":Ca(e),Jf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Jn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?si(e,!!r.multiple,o,!1):r.defaultValue!=null&&si(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Cs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)tv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=fr(Uo.current),fr(tn.current),La(t)){if(r=t.stateNode,n=t.memoizedProps,r[Jt]=t,(o=r.nodeValue!==n)&&(e=ft,e!==null))switch(e.tag){case 3:Da(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Da(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Jt]=t,t.stateNode=r}return Ke(t),null;case 13:if(pe(ve),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&dt!==null&&t.mode&1&&!(t.flags&128))yg(),vi(),t.flags|=98560,o=!1;else if(o=La(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(P(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[Jt]=t}else vi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ke(t),o=!1}else $t!==null&&($c($t),$t=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ve.current&1?Ne===0&&(Ne=3):Qd())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return xi(),jc(e,t),e===null&&Fo(t.stateNode.containerInfo),Ke(t),null;case 10:return Nd(t.type._context),Ke(t),null;case 17:return lt(t.type)&&As(),Ke(t),null;case 19:if(pe(ve),o=t.memoizedState,o===null)return Ke(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)io(o,!1);else{if(Ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ds(e),a!==null){for(t.flags|=128,io(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ce(ve,ve.current&1|2),t.child}e=e.sibling}o.tail!==null&&be()>_i&&(t.flags|=128,r=!0,io(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ds(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),io(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ge)return Ke(t),null}else 2*be()-o.renderingStartTime>_i&&n!==1073741824&&(t.flags|=128,r=!0,io(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=be(),t.sibling=null,n=ve.current,ce(ve,r?n&1|2:n&1),t):(Ke(t),null);case 22:case 23:return qd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ct&1073741824&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function q1(e,t){switch(jd(t),t.tag){case 1:return lt(t.type)&&As(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xi(),pe(st),pe(Qe),zd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return $d(t),null;case 13:if(pe(ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));vi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(ve),null;case 4:return xi(),null;case 10:return Nd(t.type._context),null;case 22:case 23:return qd(),null;case 24:return null;default:return null}}var Fa=!1,Ge=!1,Q1=typeof WeakSet=="function"?WeakSet:Set,L=null;function Zr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(e,t,r)}else n.current=null}function Rc(e,t,n){try{n()}catch(r){we(e,t,r)}}var Bp=!1;function Y1(e,t){if(fc=bs,e=og(),Cd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,d=0,f=e,m=null;t:for(;;){for(var x;f!==n||i!==0&&f.nodeType!==3||(s=a+i),f!==o||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(x=f.firstChild)!==null;)m=f,f=x;for(;;){if(f===e)break t;if(m===n&&++u===i&&(s=a),m===o&&++d===r&&(l=a),(x=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=x}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pc={focusedElem:e,selectionRange:n},bs=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,j=y.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:Tt(t.type,w),j);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(h){we(t,t.return,h)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return y=Bp,Bp=!1,y}function bo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Rc(t,n,o)}i=i.next}while(i!==r)}}function hl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Oc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function nv(e){var t=e.alternate;t!==null&&(e.alternate=null,nv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Jt],delete t[Mo],delete t[gc],delete t[N1],delete t[T1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rv(e){return e.tag===5||e.tag===3||e.tag===4}function Up(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Cs));else if(r!==4&&(e=e.child,e!==null))for(Pc(e,t,n),e=e.sibling;e!==null;)Pc(e,t,n),e=e.sibling}function Nc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Nc(e,t,n),e=e.sibling;e!==null;)Nc(e,t,n),e=e.sibling}var Me=null,Dt=!1;function Nn(e,t,n){for(n=n.child;n!==null;)iv(e,t,n),n=n.sibling}function iv(e,t,n){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(al,n)}catch{}switch(n.tag){case 5:Ge||Zr(n,t);case 6:var r=Me,i=Dt;Me=null,Nn(e,t,n),Me=r,Dt=i,Me!==null&&(Dt?(e=Me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(Dt?(e=Me,n=n.stateNode,e.nodeType===8?fu(e.parentNode,n):e.nodeType===1&&fu(e,n),Lo(e)):fu(Me,n.stateNode));break;case 4:r=Me,i=Dt,Me=n.stateNode.containerInfo,Dt=!0,Nn(e,t,n),Me=r,Dt=i;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Rc(n,t,a),i=i.next}while(i!==r)}Nn(e,t,n);break;case 1:if(!Ge&&(Zr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){we(n,t,s)}Nn(e,t,n);break;case 21:Nn(e,t,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,Nn(e,t,n),Ge=r):Nn(e,t,n);break;default:Nn(e,t,n)}}function Vp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Q1),t.forEach(function(r){var i=ow.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Nt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Me=s.stateNode,Dt=!1;break e;case 3:Me=s.stateNode.containerInfo,Dt=!0;break e;case 4:Me=s.stateNode.containerInfo,Dt=!0;break e}s=s.return}if(Me===null)throw Error(P(160));iv(o,a,i),Me=null,Dt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){we(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ov(t,e),t=t.sibling}function ov(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nt(t,e),Qt(e),r&4){try{bo(3,e,e.return),hl(3,e)}catch(w){we(e,e.return,w)}try{bo(5,e,e.return)}catch(w){we(e,e.return,w)}}break;case 1:Nt(t,e),Qt(e),r&512&&n!==null&&Zr(n,n.return);break;case 5:if(Nt(t,e),Qt(e),r&512&&n!==null&&Zr(n,n.return),e.flags&32){var i=e.stateNode;try{Po(i,"")}catch(w){we(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Cm(i,o),nc(s,a);var u=nc(s,o);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?Pm(i,f):d==="dangerouslySetInnerHTML"?Rm(i,f):d==="children"?Po(i,f):pd(i,d,f,u)}switch(s){case"input":Xu(i,o);break;case"textarea":Am(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?si(i,!!o.multiple,x,!1):m!==!!o.multiple&&(o.defaultValue!=null?si(i,!!o.multiple,o.defaultValue,!0):si(i,!!o.multiple,o.multiple?[]:"",!1))}i[Mo]=o}catch(w){we(e,e.return,w)}}break;case 6:if(Nt(t,e),Qt(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){we(e,e.return,w)}}break;case 3:if(Nt(t,e),Qt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Lo(t.containerInfo)}catch(w){we(e,e.return,w)}break;case 4:Nt(t,e),Qt(e);break;case 13:Nt(t,e),Qt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Kd=be())),r&4&&Vp(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ge=(u=Ge)||d,Nt(t,e),Ge=u):Nt(t,e),Qt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(L=e,d=e.child;d!==null;){for(f=L=d;L!==null;){switch(m=L,x=m.child,m.tag){case 0:case 11:case 14:case 15:bo(4,m,m.return);break;case 1:Zr(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){we(r,n,w)}}break;case 5:Zr(m,m.return);break;case 22:if(m.memoizedState!==null){Wp(f);continue}}x!==null?(x.return=m,L=x):Wp(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Om("display",a))}catch(w){we(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){we(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Nt(t,e),Qt(e),r&4&&Vp(e);break;case 21:break;default:Nt(t,e),Qt(e)}}function Qt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(rv(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Po(i,""),r.flags&=-33);var o=Up(e);Nc(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Up(e);Pc(e,s,a);break;default:throw Error(P(161))}}catch(l){we(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function X1(e,t,n){L=e,av(e)}function av(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Fa;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Ge;s=Fa;var u=Ge;if(Fa=a,(Ge=l)&&!u)for(L=i;L!==null;)a=L,l=a.child,a.tag===22&&a.memoizedState!==null?Kp(i):l!==null?(l.return=a,L=l):Kp(i);for(;o!==null;)L=o,av(o),o=o.sibling;L=i,Fa=s,Ge=u}Hp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):Hp(e)}}function Hp(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ge||hl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Tt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ap(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ap(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Lo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Ge||t.flags&512&&Oc(t)}catch(m){we(t,t.return,m)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function Wp(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function Kp(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{hl(4,t)}catch(l){we(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){we(t,i,l)}}var o=t.return;try{Oc(t)}catch(l){we(t,o,l)}break;case 5:var a=t.return;try{Oc(t)}catch(l){we(t,a,l)}}}catch(l){we(t,t.return,l)}if(t===e){L=null;break}var s=t.sibling;if(s!==null){s.return=t.return,L=s;break}L=t.return}}var J1=Math.ceil,zs=Cn.ReactCurrentDispatcher,Hd=Cn.ReactCurrentOwner,kt=Cn.ReactCurrentBatchConfig,X=0,ze=null,Ae=null,Ue=0,ct=0,ei=tr(0),Ne=0,Ko=null,Sr=0,ml=0,Wd=0,Eo=null,rt=null,Kd=0,_i=1/0,cn=null,Fs=!1,Tc=null,qn=null,Ia=!1,Bn=null,Is=0,ko=0,Dc=null,rs=-1,is=0;function Je(){return X&6?be():rs!==-1?rs:rs=be()}function Qn(e){return e.mode&1?X&2&&Ue!==0?Ue&-Ue:L1.transition!==null?(is===0&&(is=Vm()),is):(e=ie,e!==0||(e=window.event,e=e===void 0?16:Ym(e.type)),e):1}function Mt(e,t,n,r){if(50<ko)throw ko=0,Dc=null,Error(P(185));na(e,n,r),(!(X&2)||e!==ze)&&(e===ze&&(!(X&2)&&(ml|=n),Ne===4&&In(e,Ue)),ut(e,r),n===1&&X===0&&!(t.mode&1)&&(_i=be()+500,dl&&nr()))}function ut(e,t){var n=e.callbackNode;Lx(e,t);var r=Ss(e,e===ze?Ue:0);if(r===0)n!==null&&tp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&tp(n),t===1)e.tag===0?D1(Gp.bind(null,e)):mg(Gp.bind(null,e)),O1(function(){!(X&6)&&nr()}),n=null;else{switch(Hm(r)){case 1:n=yd;break;case 4:n=Bm;break;case 16:n=_s;break;case 536870912:n=Um;break;default:n=_s}n=hv(n,sv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function sv(e,t){if(rs=-1,is=0,X&6)throw Error(P(327));var n=e.callbackNode;if(fi()&&e.callbackNode!==n)return null;var r=Ss(e,e===ze?Ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ms(e,r);else{t=r;var i=X;X|=2;var o=uv();(ze!==e||Ue!==t)&&(cn=null,_i=be()+500,mr(e,t));do try{tw();break}catch(s){lv(e,s)}while(1);Pd(),zs.current=o,X=i,Ae!==null?t=0:(ze=null,Ue=0,t=Ne)}if(t!==0){if(t===2&&(i=sc(e),i!==0&&(r=i,t=Lc(e,i))),t===1)throw n=Ko,mr(e,0),In(e,r),ut(e,be()),n;if(t===6)In(e,r);else{if(i=e.current.alternate,!(r&30)&&!Z1(i)&&(t=Ms(e,r),t===2&&(o=sc(e),o!==0&&(r=o,t=Lc(e,o))),t===1))throw n=Ko,mr(e,0),In(e,r),ut(e,be()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:sr(e,rt,cn);break;case 3:if(In(e,r),(r&130023424)===r&&(t=Kd+500-be(),10<t)){if(Ss(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=mc(sr.bind(null,e,rt,cn),t);break}sr(e,rt,cn);break;case 4:if(In(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-It(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*J1(r/1960))-r,10<r){e.timeoutHandle=mc(sr.bind(null,e,rt,cn),r);break}sr(e,rt,cn);break;case 5:sr(e,rt,cn);break;default:throw Error(P(329))}}}return ut(e,be()),e.callbackNode===n?sv.bind(null,e):null}function Lc(e,t){var n=Eo;return e.current.memoizedState.isDehydrated&&(mr(e,t).flags|=256),e=Ms(e,t),e!==2&&(t=rt,rt=n,t!==null&&$c(t)),e}function $c(e){rt===null?rt=e:rt.push.apply(rt,e)}function Z1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ht(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function In(e,t){for(t&=~Wd,t&=~ml,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-It(t),r=1<<n;e[n]=-1,t&=~r}}function Gp(e){if(X&6)throw Error(P(327));fi();var t=Ss(e,0);if(!(t&1))return ut(e,be()),null;var n=Ms(e,t);if(e.tag!==0&&n===2){var r=sc(e);r!==0&&(t=r,n=Lc(e,r))}if(n===1)throw n=Ko,mr(e,0),In(e,t),ut(e,be()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sr(e,rt,cn),ut(e,be()),null}function Gd(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(_i=be()+500,dl&&nr())}}function br(e){Bn!==null&&Bn.tag===0&&!(X&6)&&fi();var t=X;X|=1;var n=kt.transition,r=ie;try{if(kt.transition=null,ie=1,e)return e()}finally{ie=r,kt.transition=n,X=t,!(X&6)&&nr()}}function qd(){ct=ei.current,pe(ei)}function mr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,R1(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(jd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&As();break;case 3:xi(),pe(st),pe(Qe),zd();break;case 5:$d(r);break;case 4:xi();break;case 13:pe(ve);break;case 19:pe(ve);break;case 10:Nd(r.type._context);break;case 22:case 23:qd()}n=n.return}if(ze=e,Ae=e=Yn(e.current,null),Ue=ct=t,Ne=0,Ko=null,Wd=ml=Sr=0,rt=Eo=null,dr!==null){for(t=0;t<dr.length;t++)if(n=dr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}dr=null}return e}function lv(e,t){do{var n=Ae;try{if(Pd(),es.current=$s,Ls){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ls=!1}if(_r=0,Le=Pe=ye=null,So=!1,Vo=0,Hd.current=null,n===null||n.return===null){Ne=1,Ko=t,Ae=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=Ue,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=Dp(a);if(x!==null){x.flags&=-257,Lp(x,a,s,o,t),x.mode&1&&Tp(o,u,t),t=x,l=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(l),t.updateQueue=w}else y.add(l);break e}else{if(!(t&1)){Tp(o,u,t),Qd();break e}l=Error(P(426))}}else if(ge&&s.mode&1){var j=Dp(a);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Lp(j,a,s,o,t),Rd(wi(l,s));break e}}o=l=wi(l,s),Ne!==4&&(Ne=2),Eo===null?Eo=[o]:Eo.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=Wg(o,l,t);Cp(o,g);break e;case 1:s=l;var p=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(qn===null||!qn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var h=Kg(o,s,t);Cp(o,h);break e}}o=o.return}while(o!==null)}dv(n)}catch(b){t=b,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(1)}function uv(){var e=zs.current;return zs.current=$s,e===null?$s:e}function Qd(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),ze===null||!(Sr&268435455)&&!(ml&268435455)||In(ze,Ue)}function Ms(e,t){var n=X;X|=2;var r=uv();(ze!==e||Ue!==t)&&(cn=null,mr(e,t));do try{ew();break}catch(i){lv(e,i)}while(1);if(Pd(),X=n,zs.current=r,Ae!==null)throw Error(P(261));return ze=null,Ue=0,Ne}function ew(){for(;Ae!==null;)cv(Ae)}function tw(){for(;Ae!==null&&!Cx();)cv(Ae)}function cv(e){var t=pv(e.alternate,e,ct);e.memoizedProps=e.pendingProps,t===null?dv(e):Ae=t,Hd.current=null}function dv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=q1(n,t),n!==null){n.flags&=32767,Ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,Ae=null;return}}else if(n=G1(n,t,ct),n!==null){Ae=n;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);Ne===0&&(Ne=5)}function sr(e,t,n){var r=ie,i=kt.transition;try{kt.transition=null,ie=1,nw(e,t,n,r)}finally{kt.transition=i,ie=r}return null}function nw(e,t,n,r){do fi();while(Bn!==null);if(X&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if($x(e,o),e===ze&&(Ae=ze=null,Ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ia||(Ia=!0,hv(_s,function(){return fi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=kt.transition,kt.transition=null;var a=ie;ie=1;var s=X;X|=4,Hd.current=null,Y1(e,n),ov(n,e),S1(pc),bs=!!fc,pc=fc=null,e.current=n,X1(n),Ax(),X=s,ie=a,kt.transition=o}else e.current=n;if(Ia&&(Ia=!1,Bn=e,Is=i),o=e.pendingLanes,o===0&&(qn=null),Ox(n.stateNode),ut(e,be()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Fs)throw Fs=!1,e=Tc,Tc=null,e;return Is&1&&e.tag!==0&&fi(),o=e.pendingLanes,o&1?e===Dc?ko++:(ko=0,Dc=e):ko=0,nr(),null}function fi(){if(Bn!==null){var e=Hm(Is),t=kt.transition,n=ie;try{if(kt.transition=null,ie=16>e?16:e,Bn===null)var r=!1;else{if(e=Bn,Bn=null,Is=0,X&6)throw Error(P(331));var i=X;for(X|=4,L=e.current;L!==null;){var o=L,a=o.child;if(L.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(L=u;L!==null;){var d=L;switch(d.tag){case 0:case 11:case 15:bo(8,d,o)}var f=d.child;if(f!==null)f.return=d,L=f;else for(;L!==null;){d=L;var m=d.sibling,x=d.return;if(nv(d),d===u){L=null;break}if(m!==null){m.return=x,L=m;break}L=x}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var j=w.sibling;w.sibling=null,w=j}while(w!==null)}}L=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,L=a;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:bo(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,L=g;break e}L=o.return}}var p=e.current;for(L=p;L!==null;){a=L;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,L=v;else e:for(a=p;L!==null;){if(s=L,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:hl(9,s)}}catch(b){we(s,s.return,b)}if(s===a){L=null;break e}var h=s.sibling;if(h!==null){h.return=s.return,L=h;break e}L=s.return}}if(X=i,nr(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(al,e)}catch{}r=!0}return r}finally{ie=n,kt.transition=t}}return!1}function qp(e,t,n){t=wi(n,t),t=Wg(e,t,1),e=Gn(e,t,1),t=Je(),e!==null&&(na(e,1,t),ut(e,t))}function we(e,t,n){if(e.tag===3)qp(e,e,n);else for(;t!==null;){if(t.tag===3){qp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qn===null||!qn.has(r))){e=wi(n,e),e=Kg(t,e,1),t=Gn(t,e,1),e=Je(),t!==null&&(na(t,1,e),ut(t,e));break}}t=t.return}}function rw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&n,ze===e&&(Ue&n)===n&&(Ne===4||Ne===3&&(Ue&130023424)===Ue&&500>be()-Kd?mr(e,0):Wd|=n),ut(e,t)}function fv(e,t){t===0&&(e.mode&1?(t=Ra,Ra<<=1,!(Ra&130023424)&&(Ra=4194304)):t=1);var n=Je();e=bn(e,t),e!==null&&(na(e,t,n),ut(e,n))}function iw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),fv(e,n)}function ow(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),fv(e,n)}var pv;pv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)it=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return it=!1,K1(e,t,n);it=!!(e.flags&131072)}else it=!1,ge&&t.flags&1048576&&gg(t,Os,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ns(e,t),e=t.pendingProps;var i=gi(t,Qe.current);di(t,n),i=Id(null,t,r,e,i,n);var o=Md();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,lt(r)?(o=!0,js(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Dd(t),i.updater=fl,t.stateNode=i,i._reactInternals=t,Sc(t,r,e,n),t=kc(null,t,r,!0,o,n)):(t.tag=0,ge&&o&&Ad(t),Ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ns(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=sw(r),e=Tt(r,e),i){case 0:t=Ec(null,t,r,e,n);break e;case 1:t=Fp(null,t,r,e,n);break e;case 11:t=$p(null,t,r,e,n);break e;case 14:t=zp(null,t,r,Tt(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tt(r,i),Ec(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tt(r,i),Fp(e,t,r,i,n);case 3:e:{if(Yg(t),e===null)throw Error(P(387));r=t.pendingProps,o=t.memoizedState,i=o.element,wg(e,t),Ts(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=wi(Error(P(423)),t),t=Ip(e,t,r,n,i);break e}else if(r!==i){i=wi(Error(P(424)),t),t=Ip(e,t,r,n,i);break e}else for(dt=Kn(t.stateNode.containerInfo.firstChild),ft=t,ge=!0,$t=null,n=Eg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vi(),r===i){t=En(e,t,n);break e}Ye(e,t,r,n)}t=t.child}return t;case 5:return kg(t),e===null&&xc(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,hc(r,i)?a=null:o!==null&&hc(r,o)&&(t.flags|=32),Qg(e,t),Ye(e,t,a,n),t.child;case 6:return e===null&&xc(t),null;case 13:return Xg(e,t,n);case 4:return Ld(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yi(t,null,r,n):Ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tt(r,i),$p(e,t,r,i,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ce(Ps,r._currentValue),r._currentValue=a,o!==null)if(Ht(o.value,a)){if(o.children===i.children&&!st.current){t=En(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=vn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),wc(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(P(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),wc(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,di(t,n),i=At(i),r=r(i),t.flags|=1,Ye(e,t,r,n),t.child;case 14:return r=t.type,i=Tt(r,t.pendingProps),i=Tt(r.type,i),zp(e,t,r,i,n);case 15:return Gg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tt(r,i),ns(e,t),t.tag=1,lt(r)?(e=!0,js(t)):e=!1,di(t,n),Sg(t,r,i),Sc(t,r,i,n),kc(null,t,r,!0,e,n);case 19:return Jg(e,t,n);case 22:return qg(e,t,n)}throw Error(P(156,t.tag))};function hv(e,t){return Mm(e,t)}function aw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(e,t,n,r){return new aw(e,t,n,r)}function Yd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sw(e){if(typeof e=="function")return Yd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===md)return 11;if(e===gd)return 14}return 2}function Yn(e,t){var n=e.alternate;return n===null?(n=Et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function os(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Yd(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Hr:return gr(n.children,i,o,t);case hd:a=8,i|=8;break;case Ku:return e=Et(12,n,t,i|2),e.elementType=Ku,e.lanes=o,e;case Gu:return e=Et(13,n,t,i),e.elementType=Gu,e.lanes=o,e;case qu:return e=Et(19,n,t,i),e.elementType=qu,e.lanes=o,e;case bm:return gl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _m:a=10;break e;case Sm:a=9;break e;case md:a=11;break e;case gd:a=14;break e;case $n:a=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Et(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function gr(e,t,n,r){return e=Et(7,e,r,t),e.lanes=n,e}function gl(e,t,n,r){return e=Et(22,e,r,t),e.elementType=bm,e.lanes=n,e.stateNode={isHidden:!1},e}function wu(e,t,n){return e=Et(6,e,null,t),e.lanes=n,e}function _u(e,t,n){return t=Et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tu(0),this.expirationTimes=tu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xd(e,t,n,r,i,o,a,s,l){return e=new lw(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Et(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dd(o),e}function uw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function mv(e){if(!e)return Zn;e=e._reactInternals;e:{if(Pr(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(lt(n))return hg(e,n,t)}return t}function gv(e,t,n,r,i,o,a,s,l){return e=Xd(n,r,!0,e,i,o,a,s,l),e.context=mv(null),n=e.current,r=Je(),i=Qn(n),o=vn(r,i),o.callback=t??null,Gn(n,o,i),e.current.lanes=i,na(e,i,r),ut(e,r),e}function vl(e,t,n,r){var i=t.current,o=Je(),a=Qn(i);return n=mv(n),t.context===null?t.context=n:t.pendingContext=n,t=vn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gn(i,t,a),e!==null&&(Mt(e,i,a,o),Za(e,i,a)),a}function Bs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Jd(e,t){Qp(e,t),(e=e.alternate)&&Qp(e,t)}function cw(){return null}var vv=typeof reportError=="function"?reportError:function(e){console.error(e)};function Zd(e){this._internalRoot=e}yl.prototype.render=Zd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));vl(e,t,null,null)};yl.prototype.unmount=Zd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;br(function(){vl(null,e,null,null)}),t[Sn]=null}};function yl(e){this._internalRoot=e}yl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Fn.length&&t!==0&&t<Fn[n].priority;n++);Fn.splice(n,0,e),n===0&&Qm(e)}};function ef(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yp(){}function dw(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Bs(a);o.call(u)}}var a=gv(t,r,e,0,null,!1,!1,"",Yp);return e._reactRootContainer=a,e[Sn]=a.current,Fo(e.nodeType===8?e.parentNode:e),br(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Bs(l);s.call(u)}}var l=Xd(e,0,!1,null,null,!1,!1,"",Yp);return e._reactRootContainer=l,e[Sn]=l.current,Fo(e.nodeType===8?e.parentNode:e),br(function(){vl(t,l,n,r)}),l}function wl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=Bs(a);s.call(l)}}vl(t,a,e,i)}else a=dw(n,t,e,i,r);return Bs(a)}Wm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ho(t.pendingLanes);n!==0&&(xd(t,n|1),ut(t,be()),!(X&6)&&(_i=be()+500,nr()))}break;case 13:br(function(){var r=bn(e,1);if(r!==null){var i=Je();Mt(r,e,1,i)}}),Jd(e,1)}};wd=function(e){if(e.tag===13){var t=bn(e,134217728);if(t!==null){var n=Je();Mt(t,e,134217728,n)}Jd(e,134217728)}};Km=function(e){if(e.tag===13){var t=Qn(e),n=bn(e,t);if(n!==null){var r=Je();Mt(n,e,t,r)}Jd(e,t)}};Gm=function(){return ie};qm=function(e,t){var n=ie;try{return ie=e,t()}finally{ie=n}};ic=function(e,t,n){switch(t){case"input":if(Xu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=cl(r);if(!i)throw Error(P(90));km(r),Xu(r,i)}}}break;case"textarea":Am(e,n);break;case"select":t=n.value,t!=null&&si(e,!!n.multiple,t,!1)}};Dm=Gd;Lm=br;var fw={usingClientEntryPoint:!1,Events:[ia,qr,cl,Nm,Tm,Gd]},oo={findFiberByHostInstance:cr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},pw={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fm(e),e===null?null:e.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||cw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ma.isDisabled&&Ma.supportsFiber)try{al=Ma.inject(pw),en=Ma}catch{}}ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fw;ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ef(t))throw Error(P(200));return uw(e,t,null,n)};ht.createRoot=function(e,t){if(!ef(e))throw Error(P(299));var n=!1,r="",i=vv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Xd(e,1,!1,null,null,n,!1,r,i),e[Sn]=t.current,Fo(e.nodeType===8?e.parentNode:e),new Zd(t)};ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Fm(t),e=e===null?null:e.stateNode,e};ht.flushSync=function(e){return br(e)};ht.hydrate=function(e,t,n){if(!xl(t))throw Error(P(200));return wl(null,e,t,!0,n)};ht.hydrateRoot=function(e,t,n){if(!ef(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=vv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=gv(t,null,e,1,n??null,i,!1,o,a),e[Sn]=t.current,Fo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new yl(t)};ht.render=function(e,t,n){if(!xl(t))throw Error(P(200));return wl(null,e,t,!1,n)};ht.unmountComponentAtNode=function(e){if(!xl(e))throw Error(P(40));return e._reactRootContainer?(br(function(){wl(null,null,e,!1,function(){e._reactRootContainer=null,e[Sn]=null})}),!0):!1};ht.unstable_batchedUpdates=Gd;ht.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xl(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return wl(e,t,n,!1,r)};ht.version="18.2.0-next-9e3b772b8-20220608";function yv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yv)}catch(e){console.error(e)}}yv(),gm.exports=ht;var xv=gm.exports,Xp=xv;Hu.createRoot=Xp.createRoot,Hu.hydrateRoot=Xp.hydrateRoot;var qe=function(){return qe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},qe.apply(this,arguments)};function Us(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var fe="-ms-",Co="-moz-",ne="-webkit-",wv="comm",_l="rule",tf="decl",hw="@import",_v="@keyframes",mw="@layer",gw=Math.abs,nf=String.fromCharCode,zc=Object.assign;function vw(e,t){return $e(e,0)^45?(((t<<2^$e(e,0))<<2^$e(e,1))<<2^$e(e,2))<<2^$e(e,3):0}function Sv(e){return e.trim()}function dn(e,t){return(e=t.exec(e))?e[0]:e}function G(e,t,n){return e.replace(t,n)}function as(e,t){return e.indexOf(t)}function $e(e,t){return e.charCodeAt(t)|0}function Si(e,t,n){return e.slice(t,n)}function Xt(e){return e.length}function bv(e){return e.length}function go(e,t){return t.push(e),e}function yw(e,t){return e.map(t).join("")}function Jp(e,t){return e.filter(function(n){return!dn(n,t)})}var Sl=1,bi=1,Ev=0,Rt=0,Ce=0,Ii="";function bl(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Sl,column:bi,length:a,return:"",siblings:s}}function Ln(e,t){return zc(bl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Fr(e){for(;e.root;)e=Ln(e.root,{children:[e]});go(e,e.siblings)}function xw(){return Ce}function ww(){return Ce=Rt>0?$e(Ii,--Rt):0,bi--,Ce===10&&(bi=1,Sl--),Ce}function Bt(){return Ce=Rt<Ev?$e(Ii,Rt++):0,bi++,Ce===10&&(bi=1,Sl++),Ce}function vr(){return $e(Ii,Rt)}function ss(){return Rt}function El(e,t){return Si(Ii,e,t)}function Fc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _w(e){return Sl=bi=1,Ev=Xt(Ii=e),Rt=0,[]}function Sw(e){return Ii="",e}function Su(e){return Sv(El(Rt-1,Ic(e===91?e+2:e===40?e+1:e)))}function bw(e){for(;(Ce=vr())&&Ce<33;)Bt();return Fc(e)>2||Fc(Ce)>3?"":" "}function Ew(e,t){for(;--t&&Bt()&&!(Ce<48||Ce>102||Ce>57&&Ce<65||Ce>70&&Ce<97););return El(e,ss()+(t<6&&vr()==32&&Bt()==32))}function Ic(e){for(;Bt();)switch(Ce){case e:return Rt;case 34:case 39:e!==34&&e!==39&&Ic(Ce);break;case 40:e===41&&Ic(e);break;case 92:Bt();break}return Rt}function kw(e,t){for(;Bt()&&e+Ce!==47+10;)if(e+Ce===42+42&&vr()===47)break;return"/*"+El(t,Rt-1)+"*"+nf(e===47?e:Bt())}function Cw(e){for(;!Fc(vr());)Bt();return El(e,Rt)}function Aw(e){return Sw(ls("",null,null,null,[""],e=_w(e),0,[0],e))}function ls(e,t,n,r,i,o,a,s,l){for(var u=0,d=0,f=a,m=0,x=0,y=0,w=1,j=1,g=1,p=0,v="",h=i,b=o,R=r,C=v;j;)switch(y=p,p=Bt()){case 40:if(y!=108&&$e(C,f-1)==58){as(C+=G(Su(p),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:C+=Su(p);break;case 9:case 10:case 13:case 32:C+=bw(y);break;case 92:C+=Ew(ss()-1,7);continue;case 47:switch(vr()){case 42:case 47:go(jw(kw(Bt(),ss()),t,n,l),l);break;default:C+="/"}break;case 123*w:s[u++]=Xt(C)*g;case 125*w:case 59:case 0:switch(p){case 0:case 125:j=0;case 59+d:g==-1&&(C=G(C,/\f/g,"")),x>0&&Xt(C)-f&&go(x>32?eh(C+";",r,n,f-1,l):eh(G(C," ","")+";",r,n,f-2,l),l);break;case 59:C+=";";default:if(go(R=Zp(C,t,n,u,d,i,s,v,h=[],b=[],f,o),o),p===123)if(d===0)ls(C,t,R,R,h,o,f,s,b);else switch(m===99&&$e(C,3)===110?100:m){case 100:case 108:case 109:case 115:ls(e,R,R,r&&go(Zp(e,R,R,0,0,i,s,v,i,h=[],f,b),b),i,b,f,s,r?h:b);break;default:ls(C,R,R,R,[""],b,0,s,b)}}u=d=x=0,w=g=1,v=C="",f=a;break;case 58:f=1+Xt(C),x=y;default:if(w<1){if(p==123)--w;else if(p==125&&w++==0&&ww()==125)continue}switch(C+=nf(p),p*w){case 38:g=d>0?1:(C+="\f",-1);break;case 44:s[u++]=(Xt(C)-1)*g,g=1;break;case 64:vr()===45&&(C+=Su(Bt())),m=vr(),d=f=Xt(v=C+=Cw(ss())),p++;break;case 45:y===45&&Xt(C)==2&&(w=0)}}return o}function Zp(e,t,n,r,i,o,a,s,l,u,d,f){for(var m=i-1,x=i===0?o:[""],y=bv(x),w=0,j=0,g=0;w<r;++w)for(var p=0,v=Si(e,m+1,m=gw(j=a[w])),h=e;p<y;++p)(h=Sv(j>0?x[p]+" "+v:G(v,/&\f/g,x[p])))&&(l[g++]=h);return bl(e,t,n,i===0?_l:s,l,u,d,f)}function jw(e,t,n,r){return bl(e,t,n,wv,nf(xw()),Si(e,2,-2),0,r)}function eh(e,t,n,r,i){return bl(e,t,n,tf,Si(e,0,r),Si(e,r+1,-1),r,i)}function kv(e,t,n){switch(vw(e,t)){case 5103:return ne+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ne+e+e;case 4789:return Co+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ne+e+Co+e+fe+e+e;case 5936:switch($e(e,t+11)){case 114:return ne+e+fe+G(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ne+e+fe+G(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ne+e+fe+G(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ne+e+fe+e+e;case 6165:return ne+e+fe+"flex-"+e+e;case 5187:return ne+e+G(e,/(\w+).+(:[^]+)/,ne+"box-$1$2"+fe+"flex-$1$2")+e;case 5443:return ne+e+fe+"flex-item-"+G(e,/flex-|-self/g,"")+(dn(e,/flex-|baseline/)?"":fe+"grid-row-"+G(e,/flex-|-self/g,""))+e;case 4675:return ne+e+fe+"flex-line-pack"+G(e,/align-content|flex-|-self/g,"")+e;case 5548:return ne+e+fe+G(e,"shrink","negative")+e;case 5292:return ne+e+fe+G(e,"basis","preferred-size")+e;case 6060:return ne+"box-"+G(e,"-grow","")+ne+e+fe+G(e,"grow","positive")+e;case 4554:return ne+G(e,/([^-])(transform)/g,"$1"+ne+"$2")+e;case 6187:return G(G(G(e,/(zoom-|grab)/,ne+"$1"),/(image-set)/,ne+"$1"),e,"")+e;case 5495:case 3959:return G(e,/(image-set\([^]*)/,ne+"$1$`$1");case 4968:return G(G(e,/(.+:)(flex-)?(.*)/,ne+"box-pack:$3"+fe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ne+e+e;case 4200:if(!dn(e,/flex-|baseline/))return fe+"grid-column-align"+Si(e,t)+e;break;case 2592:case 3360:return fe+G(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,dn(r.props,/grid-\w+-end/)})?~as(e+(n=n[t].value),"span")?e:fe+G(e,"-start","")+e+fe+"grid-row-span:"+(~as(n,"span")?dn(n,/\d+/):+dn(n,/\d+/)-+dn(e,/\d+/))+";":fe+G(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return dn(r.props,/grid-\w+-start/)})?e:fe+G(G(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return G(e,/(.+)-inline(.+)/,ne+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xt(e)-1-t>6)switch($e(e,t+1)){case 109:if($e(e,t+4)!==45)break;case 102:return G(e,/(.+:)(.+)-([^]+)/,"$1"+ne+"$2-$3$1"+Co+($e(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~as(e,"stretch")?kv(G(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return G(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,s,l,u){return fe+i+":"+o+u+(a?fe+i+"-span:"+(s?l:+l-+o)+u:"")+e});case 4949:if($e(e,t+6)===121)return G(e,":",":"+ne)+e;break;case 6444:switch($e(e,$e(e,14)===45?18:11)){case 120:return G(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ne+($e(e,14)===45?"inline-":"")+"box$3$1"+ne+"$2$3$1"+fe+"$2box$3")+e;case 100:return G(e,":",":"+fe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return G(e,"scroll-","scroll-snap-")+e}return e}function Vs(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Rw(e,t,n,r){switch(e.type){case mw:if(e.children.length)break;case hw:case tf:return e.return=e.return||e.value;case wv:return"";case _v:return e.return=e.value+"{"+Vs(e.children,r)+"}";case _l:if(!Xt(e.value=e.props.join(",")))return""}return Xt(n=Vs(e.children,r))?e.return=e.value+"{"+n+"}":""}function Ow(e){var t=bv(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}function Pw(e){return function(t){t.root||(t=t.return)&&e(t)}}function Nw(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case tf:e.return=kv(e.value,e.length,n);return;case _v:return Vs([Ln(e,{value:G(e.value,"@","@"+ne)})],r);case _l:if(e.length)return yw(n=e.props,function(i){switch(dn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Fr(Ln(e,{props:[G(i,/:(read-\w+)/,":"+Co+"$1")]})),Fr(Ln(e,{props:[i]})),zc(e,{props:Jp(n,r)});break;case"::placeholder":Fr(Ln(e,{props:[G(i,/:(plac\w+)/,":"+ne+"input-$1")]})),Fr(Ln(e,{props:[G(i,/:(plac\w+)/,":"+Co+"$1")]})),Fr(Ln(e,{props:[G(i,/:(plac\w+)/,fe+"input-$1")]})),Fr(Ln(e,{props:[i]})),zc(e,{props:Jp(n,r)});break}return""})}}var Tw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ei=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",rf=typeof window<"u"&&"HTMLElement"in window,Dw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),kl=Object.freeze([]),ki=Object.freeze({});function Lw(e,t,n){return n===void 0&&(n=ki),e.theme!==n.theme&&e.theme||t||n.theme}var Cv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),$w=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zw=/(^-|-$)/g;function th(e){return e.replace($w,"-").replace(zw,"")}var Fw=/(a)(d)/gi,nh=function(e){return String.fromCharCode(e+(e>25?39:97))};function Mc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=nh(t%52)+n;return(nh(t%52)+n).replace(Fw,"$1-$2")}var bu,ti=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Av=function(e){return ti(5381,e)};function Iw(e){return Mc(Av(e)>>>0)}function Mw(e){return e.displayName||e.name||"Component"}function Eu(e){return typeof e=="string"&&!0}var jv=typeof Symbol=="function"&&Symbol.for,Rv=jv?Symbol.for("react.memo"):60115,Bw=jv?Symbol.for("react.forward_ref"):60112,Uw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Vw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ov={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Hw=((bu={})[Bw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},bu[Rv]=Ov,bu);function rh(e){return("type"in(t=e)&&t.type.$$typeof)===Rv?Ov:"$$typeof"in e?Hw[e.$$typeof]:Uw;var t}var Ww=Object.defineProperty,Kw=Object.getOwnPropertyNames,ih=Object.getOwnPropertySymbols,Gw=Object.getOwnPropertyDescriptor,qw=Object.getPrototypeOf,oh=Object.prototype;function Pv(e,t,n){if(typeof t!="string"){if(oh){var r=qw(t);r&&r!==oh&&Pv(e,r,n)}var i=Kw(t);ih&&(i=i.concat(ih(t)));for(var o=rh(e),a=rh(t),s=0;s<i.length;++s){var l=i[s];if(!(l in Vw||n&&n[l]||a&&l in a||o&&l in o)){var u=Gw(t,l);try{Ww(e,l,u)}catch{}}}}return e}function Er(e){return typeof e=="function"}function of(e){return typeof e=="object"&&"styledComponentId"in e}function pr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ah(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Go(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Bc(e,t,n){if(n===void 0&&(n=!1),!n&&!Go(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Bc(e[r],t[r]);else if(Go(t))for(var r in t)e[r]=Bc(e[r],t[r]);return e}function af(e,t){Object.defineProperty(e,"toString",{value:t})}function kr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Qw=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw kr(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),l=(a=0,n.length);a<l;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return n},e}(),us=new Map,Hs=new Map,ku=1,Ba=function(e){if(us.has(e))return us.get(e);for(;Hs.has(ku);)ku++;var t=ku++;return us.set(e,t),Hs.set(t,e),t},Yw=function(e,t){us.set(e,t),Hs.set(t,e)},Xw="style[".concat(Ei,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),Jw=new RegExp("^".concat(Ei,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Zw=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},e_=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(Jw);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(Yw(d,u),Zw(e,d,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}};function t_(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Nv=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var l=Array.from(s.querySelectorAll("style[".concat(Ei,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Ei,"active"),r.setAttribute("data-styled-version","6.0.7");var a=t_();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},n_=function(){function e(t){this.element=Nv(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw kr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),r_=function(){function e(t){this.element=Nv(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),i_=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),sh=rf,o_={isServer:!rf,useCSSOMInjection:!Dw},Tv=function(){function e(t,n,r){t===void 0&&(t=ki),n===void 0&&(n={});var i=this;this.options=qe(qe({},o_),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&rf&&sh&&(sh=!1,function(o){for(var a=document.querySelectorAll(Xw),s=0,l=a.length;s<l;s++){var u=a[s];u&&u.getAttribute(Ei)!=="active"&&(e_(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),af(this,function(){return function(o){for(var a=o.getTag(),s=a.length,l="",u=function(f){var m=function(g){return Hs.get(g)}(f);if(m===void 0)return"continue";var x=o.names.get(m),y=a.getGroup(f);if(x===void 0||y.length===0)return"continue";var w="".concat(Ei,".g").concat(f,'[id="').concat(m,'"]'),j="";x!==void 0&&x.forEach(function(g){g.length>0&&(j+="".concat(g,","))}),l+="".concat(y).concat(w,'{content:"').concat(j,'"}').concat(`/*!sc*/
`)},d=0;d<s;d++)u(d);return l}(i)})}return e.registerId=function(t){return Ba(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(qe(qe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new i_(i):r?new n_(i):new r_(i)}(this.options),new Qw(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ba(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ba(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ba(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),a_=/&/g,s_=/^\s*\/\/.*$/gm;function Dv(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Dv(n.children,t)),n})}function l_(e){var t,n,r,i=e===void 0?ki:e,o=i.options,a=o===void 0?ki:o,s=i.plugins,l=s===void 0?kl:s,u=function(m,x,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):m},d=l.slice();d.push(function(m){m.type===_l&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(a_,n).replace(r,u))}),a.prefix&&d.push(Nw),d.push(Rw);var f=function(m,x,y,w){x===void 0&&(x=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var j=m.replace(s_,""),g=Aw(y||x?"".concat(y," ").concat(x," { ").concat(j," }"):j);a.namespace&&(g=Dv(g,a.namespace));var p=[];return Vs(g,Ow(d.concat(Pw(function(v){return p.push(v)})))),p};return f.hash=l.length?l.reduce(function(m,x){return x.name||kr(15),ti(m,x.name)},5381).toString():"",f}var u_=new Tv,Uc=l_(),Lv=Ft.createContext({shouldForwardProp:void 0,styleSheet:u_,stylis:Uc});Lv.Consumer;Ft.createContext(void 0);function lh(){return S.useContext(Lv)}var c_=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Uc);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,af(this,function(){throw kr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Uc),this.name+t.hash},e}(),d_=function(e){return e>="A"&&e<="Z"};function uh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;d_(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var $v=function(e){return e==null||e===!1||e===""},zv=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!$v(o)&&(Array.isArray(o)&&o.isCss||Er(o)?r.push("".concat(uh(i),":"),o,";"):Go(o)?r.push.apply(r,Us(Us(["".concat(i," {")],zv(o),!1),["}"],!1)):r.push("".concat(uh(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Tw||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function yr(e,t,n,r){if($v(e))return[];if(of(e))return[".".concat(e.styledComponentId)];if(Er(e)){if(!Er(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return yr(i,t,n,r)}var o;return e instanceof c_?n?(e.inject(n,r),[e.getName(r)]):[e]:Go(e)?zv(e):Array.isArray(e)?Array.prototype.concat.apply(kl,e.map(function(a){return yr(a,t,n,r)})):[e.toString()]}function f_(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Er(n)&&!of(n))return!1}return!0}var p_=Av("6.0.7"),h_=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&f_(t),this.componentId=n,this.baseHash=ti(p_,n),this.baseStyle=r,Tv.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=pr(i,this.staticRulesId);else{var o=ah(yr(this.rules,t,n,r)),a=Mc(ti(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}i=pr(i,a),this.staticRulesId=a}else{for(var l=ti(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var m=ah(yr(f,t,n,r));l=ti(l,m),u+=m}}if(u){var x=Mc(l>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(u,".".concat(x),void 0,this.componentId)),i=pr(i,x)}}return i},e}(),Ws=Ft.createContext(void 0);Ws.Consumer;function m_(e){var t=Ft.useContext(Ws),n=S.useMemo(function(){return function(r,i){if(!r)throw kr(14);if(Er(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw kr(8);return i?qe(qe({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Ft.createElement(Ws.Provider,{value:n},e.children):null}var Cu={};function g_(e,t,n){var r=of(e),i=e,o=!Eu(e),a=t.attrs,s=a===void 0?kl:a,l=t.componentId,u=l===void 0?function(v,h){var b=typeof v!="string"?"sc":th(v);Cu[b]=(Cu[b]||0)+1;var R="".concat(b,"-").concat(Iw("6.0.7"+b+Cu[b]));return h?"".concat(h,"-").concat(R):R}(t.displayName,t.parentComponentId):l,d=t.displayName;d===void 0&&function(v){return Eu(v)?"styled.".concat(v):"Styled(".concat(Mw(v),")")}(e);var f=t.displayName&&t.componentId?"".concat(th(t.displayName),"-").concat(t.componentId):t.componentId||u,m=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;x=function(v,h){return y(v,h)&&w(v,h)}}else x=y}var j=new h_(n,f,r?i.componentStyle:void 0);function g(v,h){return function(b,R,C){var D=b.attrs,q=b.componentStyle,B=b.defaultProps,Ee=b.foldedComponentIds,oe=b.styledComponentId,vt=b.target,Kt=Ft.useContext(Ws),Gt=lh(),Fe=b.shouldForwardProp||Gt.shouldForwardProp,Re=function(Ot,J,tt){for(var He,nt=qe(qe({},J),{className:void 0,theme:tt}),yt=0;yt<Ot.length;yt+=1){var $r=Er(He=Ot[yt])?He(nt):He;for(var qt in $r)nt[qt]=qt==="className"?pr(nt[qt],$r[qt]):qt==="style"?qe(qe({},nt[qt]),$r[qt]):$r[qt]}return J.className&&(nt.className=pr(nt.className,J.className)),nt}(D,R,Lw(R,Kt,B)||ki),T=Re.as||vt,F={};for(var I in Re)Re[I]===void 0||I[0]==="$"||I==="as"||I==="theme"||(I==="forwardedAs"?F.as=Re.forwardedAs:Fe&&!Fe(I,T)||(F[I]=Re[I]));var ue=function(Ot,J){var tt=lh(),He=Ot.generateAndInjectStyles(J,tt.styleSheet,tt.stylis);return He}(q,Re),he=pr(Ee,oe);return ue&&(he+=" "+ue),Re.className&&(he+=" "+Re.className),F[Eu(T)&&!Cv.has(T)?"class":"className"]=he,F.ref=C,S.createElement(T,F)}(p,v,h)}var p=Ft.forwardRef(g);return p.attrs=m,p.componentStyle=j,p.shouldForwardProp=x,p.foldedComponentIds=r?pr(i.foldedComponentIds,i.styledComponentId):"",p.styledComponentId=f,p.target=r?i.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(h){for(var b=[],R=1;R<arguments.length;R++)b[R-1]=arguments[R];for(var C=0,D=b;C<D.length;C++)Bc(h,D[C],!0);return h}({},i.defaultProps,v):v}}),af(p,function(){return".".concat(p.styledComponentId)}),o&&Pv(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function ch(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var dh=function(e){return Object.assign(e,{isCss:!0})};function v_(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Er(e)||Go(e)){var r=e;return dh(yr(ch(kl,Us([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?yr(i):dh(yr(ch(i,t)))}function Vc(e,t,n){if(n===void 0&&(n=ki),!t)throw kr(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,v_.apply(void 0,Us([i],o,!1)))};return r.attrs=function(i){return Vc(e,t,qe(qe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Vc(e,t,qe(qe({},n),i))},r}var Fv=function(e){return Vc(g_,e)},k=Fv;Cv.forEach(function(e){k[e]=Fv(e)});const y_={borderRadius:"5px",colors:{primary:"#F6F7FC",primaryDark:"#E4E6EE",secondary:"#195CDF",secondaryLight:"#EFF4FF",secondaryDark:"#CBD5E9",background:"#FFFFFF",text:"#000000",textGrayDark:"#515151",textGray:"#868686",textGrayLight:"#6D6D6D",textWhite:"#FFFFFF"}};/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function me(){return me=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},me.apply(this,arguments)}var ke;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ke||(ke={}));const fh="popstate";function x_(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return qo("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Cr(i)}return __(t,n,null,e)}function K(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ci(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function w_(){return Math.random().toString(36).substr(2,8)}function ph(e,t){return{usr:e.state,key:e.key,idx:t}}function qo(e,t,n,r){return n===void 0&&(n=null),me({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?An(t):t,{state:n,key:t&&t.key||r||w_()})}function Cr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function An(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function __(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=ke.Pop,l=null,u=d();u==null&&(u=0,a.replaceState(me({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function f(){s=ke.Pop;let j=d(),g=j==null?null:j-u;u=j,l&&l({action:s,location:w.location,delta:g})}function m(j,g){s=ke.Push;let p=qo(w.location,j,g);n&&n(p,j),u=d()+1;let v=ph(p,u),h=w.createHref(p);try{a.pushState(v,"",h)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(h)}o&&l&&l({action:s,location:w.location,delta:1})}function x(j,g){s=ke.Replace;let p=qo(w.location,j,g);n&&n(p,j),u=d();let v=ph(p,u),h=w.createHref(p);a.replaceState(v,"",h),o&&l&&l({action:s,location:w.location,delta:0})}function y(j){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof j=="string"?j:Cr(j);return K(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let w={get action(){return s},get location(){return e(i,a)},listen(j){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(fh,f),l=j,()=>{i.removeEventListener(fh,f),l=null}},createHref(j){return t(i,j)},createURL:y,encodeLocation(j){let g=y(j);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:x,go(j){return a.go(j)}};return w}var Se;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Se||(Se={}));const S_=new Set(["lazy","caseSensitive","path","id","index","children"]);function b_(e){return e.index===!0}function Hc(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,o)=>{let a=[...n,o],s=typeof i.id=="string"?i.id:a.join("-");if(K(i.index!==!0||!i.children,"Cannot specify children on an index route"),K(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),b_(i)){let l=me({},i,t(i),{id:s});return r[s]=l,l}else{let l=me({},i,t(i),{id:s,children:void 0});return r[s]=l,i.children&&(l.children=Hc(i.children,t,a,r)),l}})}function ni(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?An(t):t,i=Mi(r.pathname||"/",n);if(i==null)return null;let o=Iv(e);E_(o);let a=null;for(let s=0;a==null&&s<o.length;++s)a=T_(o[s],$_(i));return a}function Iv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(K(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=yn([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(K(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Iv(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:P_(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let l of Mv(o.path))i(o,a,l)}),t}function Mv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Mv(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function E_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:N_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const k_=/^:\w+$/,C_=3,A_=2,j_=1,R_=10,O_=-2,hh=e=>e==="*";function P_(e,t){let n=e.split("/"),r=n.length;return n.some(hh)&&(r+=O_),t&&(r+=A_),n.filter(i=>!hh(i)).reduce((i,o)=>i+(k_.test(o)?C_:o===""?j_:R_),r)}function N_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function T_(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let s=n[a],l=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=D_({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let f=s.route;o.push({params:r,pathname:yn([i,d.pathname]),pathnameBase:M_(yn([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=yn([i,d.pathnameBase]))}return o}function D_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=L_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,d,f)=>{if(d==="*"){let m=s[f]||"";a=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return u[d]=z_(s[f]||"",d),u},{}),pathname:o,pathnameBase:a,pattern:e}}function L_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ci(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function $_(e){try{return decodeURI(e)}catch(t){return Ci(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function z_(e,t){try{return decodeURIComponent(e)}catch(n){return Ci(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Mi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function F_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?An(e):e;return{pathname:n?n.startsWith("/")?n:I_(n,t):t,search:B_(r),hash:U_(i)}}function I_(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Au(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function aa(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Cl(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=An(e):(i=me({},e),K(!i.pathname||!i.pathname.includes("?"),Au("?","pathname","search",i)),K(!i.pathname||!i.pathname.includes("#"),Au("#","pathname","hash",i)),K(!i.search||!i.search.includes("#"),Au("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(r||a==null)s=n;else{let f=t.length-1;if(a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}s=f>=0?t[f]:"/"}let l=F_(i,s),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const yn=e=>e.join("/").replace(/\/\/+/g,"/"),M_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),B_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,U_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class sf{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Bv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Uv=["post","put","patch","delete"],V_=new Set(Uv),H_=["get",...Uv],W_=new Set(H_),K_=new Set([301,302,303,307,308]),G_=new Set([307,308]),ju={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},q_={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ao={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Vv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Q_=e=>({hasErrorBoundary:!!e.hasErrorBoundary});function Y_(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;K(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let _=e.detectErrorBoundary;i=E=>({hasErrorBoundary:_(E)})}else i=Q_;let o={},a=Hc(e.routes,i,void 0,o),s,l=e.basename||"/",u=me({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),d=null,f=new Set,m=null,x=null,y=null,w=e.hydrationData!=null,j=ni(a,e.history.location,l),g=null;if(j==null){let _=xt(404,{pathname:e.history.location.pathname}),{matches:E,route:O}=Sh(a);j=E,g={[O.id]:_}}let p=!j.some(_=>_.route.lazy)&&(!j.some(_=>_.route.loader)||e.hydrationData!=null),v,h={historyAction:e.history.action,location:e.history.location,matches:j,initialized:p,navigation:ju,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||g,fetchers:new Map,blockers:new Map},b=ke.Pop,R=!1,C,D=!1,q=!1,B=[],Ee=[],oe=new Map,vt=0,Kt=-1,Gt=new Map,Fe=new Set,Re=new Map,T=new Map,F=new Map,I=!1;function ue(){return d=e.history.listen(_=>{let{action:E,location:O,delta:$}=_;if(I){I=!1;return}Ci(F.size===0||$!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let W=If({currentLocation:h.location,nextLocation:O,historyAction:E});if(W&&$!=null){I=!0,e.history.go($*-1),Sa(W,{state:"blocked",location:O,proceed(){Sa(W,{state:"proceeding",proceed:void 0,reset:void 0,location:O}),e.history.go($)},reset(){let U=new Map(h.blockers);U.set(W,ao),J({blockers:U})}});return}return yt(E,O)}),h.initialized||yt(ke.Pop,h.location),v}function he(){d&&d(),f.clear(),C&&C.abort(),h.fetchers.forEach((_,E)=>Vl(E)),h.blockers.forEach((_,E)=>Ff(E))}function Ot(_){return f.add(_),()=>f.delete(_)}function J(_){h=me({},h,_),f.forEach(E=>E(h))}function tt(_,E){var O,$;let W=h.actionData!=null&&h.navigation.formMethod!=null&&Lt(h.navigation.formMethod)&&h.navigation.state==="loading"&&((O=_.state)==null?void 0:O._isRedirect)!==!0,U;E.actionData?Object.keys(E.actionData).length>0?U=E.actionData:U=null:W?U=h.actionData:U=null;let V=E.loaderData?_h(h.loaderData,E.loaderData,E.matches||[],E.errors):h.loaderData,M=h.blockers;M.size>0&&(M=new Map(M),M.forEach((le,Ie)=>M.set(Ie,ao)));let z=R===!0||h.navigation.formMethod!=null&&Lt(h.navigation.formMethod)&&(($=_.state)==null?void 0:$._isRedirect)!==!0;s&&(a=s,s=void 0),D||b===ke.Pop||(b===ke.Push?e.history.push(_,_.state):b===ke.Replace&&e.history.replace(_,_.state)),J(me({},E,{actionData:U,loaderData:V,historyAction:b,location:_,initialized:!0,navigation:ju,revalidation:"idle",restoreScrollPosition:Bf(_,E.matches||h.matches),preventScrollReset:z,blockers:M})),b=ke.Pop,R=!1,D=!1,q=!1,B=[],Ee=[]}async function He(_,E){if(typeof _=="number"){e.history.go(_);return}let O=Wc(h.location,h.matches,l,u.v7_prependBasename,_,E==null?void 0:E.fromRouteId,E==null?void 0:E.relative),{path:$,submission:W,error:U}=mh(u.v7_normalizeFormMethod,!1,O,E),V=h.location,M=qo(h.location,$,E&&E.state);M=me({},M,e.history.encodeLocation(M));let z=E&&E.replace!=null?E.replace:void 0,le=ke.Push;z===!0?le=ke.Replace:z===!1||W!=null&&Lt(W.formMethod)&&W.formAction===h.location.pathname+h.location.search&&(le=ke.Replace);let Ie=E&&"preventScrollReset"in E?E.preventScrollReset===!0:void 0,ae=If({currentLocation:V,nextLocation:M,historyAction:le});if(ae){Sa(ae,{state:"blocked",location:M,proceed(){Sa(ae,{state:"proceeding",proceed:void 0,reset:void 0,location:M}),He(_,E)},reset(){let _e=new Map(h.blockers);_e.set(ae,ao),J({blockers:_e})}});return}return await yt(le,M,{submission:W,pendingError:U,preventScrollReset:Ie,replace:E&&E.replace})}function nt(){if(Ul(),J({revalidation:"loading"}),h.navigation.state!=="submitting"){if(h.navigation.state==="idle"){yt(h.historyAction,h.location,{startUninterruptedRevalidation:!0});return}yt(b||h.historyAction,h.navigation.location,{overrideNavigation:h.navigation})}}async function yt(_,E,O){C&&C.abort(),C=null,b=_,D=(O&&O.startUninterruptedRevalidation)===!0,$0(h.location,h.matches),R=(O&&O.preventScrollReset)===!0;let $=s||a,W=O&&O.overrideNavigation,U=ni($,E,l);if(!U){let _e=xt(404,{pathname:E.pathname}),{matches:De,route:ir}=Sh($);Hl(),tt(E,{matches:De,loaderData:{},errors:{[ir.id]:_e}});return}if(h.initialized&&!q&&tS(h.location,E)&&!(O&&O.submission&&Lt(O.submission.formMethod))){tt(E,{matches:U});return}C=new AbortController;let V=lo(e.history,E,C.signal,O&&O.submission),M,z;if(O&&O.pendingError)z={[ri(U).route.id]:O.pendingError};else if(O&&O.submission&&Lt(O.submission.formMethod)){let _e=await $r(V,E,O.submission,U,{replace:O.replace});if(_e.shortCircuited)return;M=_e.pendingActionData,z=_e.pendingActionError,W=Ua(E,O.submission),V=new Request(V.url,{signal:V.signal})}let{shortCircuited:le,loaderData:Ie,errors:ae}=await qt(V,E,U,W,O&&O.submission,O&&O.fetcherSubmission,O&&O.replace,M,z);le||(C=null,tt(E,me({matches:U},M?{actionData:M}:{},{loaderData:Ie,errors:ae})))}async function $r(_,E,O,$,W){W===void 0&&(W={}),Ul();let U=aS(E,O);J({navigation:U});let V,M=Gc($,E);if(!M.route.action&&!M.route.lazy)V={type:Se.error,error:xt(405,{method:_.method,pathname:E.pathname,routeId:M.route.id})};else if(V=await so("action",_,M,$,o,i,l),_.signal.aborted)return{shortCircuited:!0};if(pi(V)){let z;return W&&W.replace!=null?z=W.replace:z=V.location===h.location.pathname+h.location.search,await Qi(h,V,{submission:O,replace:z}),{shortCircuited:!0}}if(Ao(V)){let z=ri($,M.route.id);return(W&&W.replace)!==!0&&(b=ke.Push),{pendingActionData:{},pendingActionError:{[z.route.id]:V.error}}}if(hr(V))throw xt(400,{type:"defer-action"});return{pendingActionData:{[M.route.id]:V.data}}}async function qt(_,E,O,$,W,U,V,M,z){let le=$||Ua(E,W),Ie=W||U||kh(le),ae=s||a,[_e,De]=gh(e.history,h,O,Ie,E,q,B,Ee,Re,Fe,ae,l,M,z);if(Hl(se=>!(O&&O.some(Pt=>Pt.route.id===se))||_e&&_e.some(Pt=>Pt.route.id===se)),Kt=++vt,_e.length===0&&De.length===0){let se=$f();return tt(E,me({matches:O,loaderData:{},errors:z||null},M?{actionData:M}:{},se?{fetchers:new Map(h.fetchers)}:{})),{shortCircuited:!0}}if(!D){De.forEach(Pt=>{let Pn=h.fetchers.get(Pt.key),Ql=uo(void 0,Pn?Pn.data:void 0);h.fetchers.set(Pt.key,Ql)});let se=M||h.actionData;J(me({navigation:le},se?Object.keys(se).length===0?{actionData:null}:{actionData:se}:{},De.length>0?{fetchers:new Map(h.fetchers)}:{}))}De.forEach(se=>{oe.has(se.key)&&On(se.key),se.controller&&oe.set(se.key,se.controller)});let ir=()=>De.forEach(se=>On(se.key));C&&C.signal.addEventListener("abort",ir);let{results:or,loaderResults:Yi,fetcherResults:Wl}=await Df(h.matches,O,_e,De,_);if(_.signal.aborted)return{shortCircuited:!0};C&&C.signal.removeEventListener("abort",ir),De.forEach(se=>oe.delete(se.key));let ln=bh(or);if(ln){if(ln.idx>=_e.length){let se=De[ln.idx-_e.length].key;Fe.add(se)}return await Qi(h,ln.result,{replace:V}),{shortCircuited:!0}}let{loaderData:un,errors:ba}=wh(h,O,_e,Yi,z,De,Wl,T);T.forEach((se,Pt)=>{se.subscribe(Pn=>{(Pn||se.done)&&T.delete(Pt)})});let Kl=$f(),Gl=zf(Kt),ql=Kl||Gl||De.length>0;return me({loaderData:un,errors:ba},ql?{fetchers:new Map(h.fetchers)}:{})}function Tf(_){return h.fetchers.get(_)||q_}function P0(_,E,O,$){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");oe.has(_)&&On(_);let W=s||a,U=Wc(h.location,h.matches,l,u.v7_prependBasename,O,E,$==null?void 0:$.relative),V=ni(W,U,l);if(!V){_a(_,E,xt(404,{pathname:U}));return}let{path:M,submission:z,error:le}=mh(u.v7_normalizeFormMethod,!0,U,$);if(le){_a(_,E,le);return}let Ie=Gc(V,M);if(R=($&&$.preventScrollReset)===!0,z&&Lt(z.formMethod)){N0(_,E,M,Ie,V,z);return}Re.set(_,{routeId:E,path:M}),T0(_,E,M,Ie,V,z)}async function N0(_,E,O,$,W,U){if(Ul(),Re.delete(_),!$.route.action&&!$.route.lazy){let Oe=xt(405,{method:U.formMethod,pathname:O,routeId:E});_a(_,E,Oe);return}let V=h.fetchers.get(_),M=sS(U,V);h.fetchers.set(_,M),J({fetchers:new Map(h.fetchers)});let z=new AbortController,le=lo(e.history,O,z.signal,U);oe.set(_,z);let Ie=vt,ae=await so("action",le,$,W,o,i,l);if(le.signal.aborted){oe.get(_)===z&&oe.delete(_);return}if(pi(ae))if(oe.delete(_),Kt>Ie){let Oe=Ur(void 0);h.fetchers.set(_,Oe),J({fetchers:new Map(h.fetchers)});return}else{Fe.add(_);let Oe=uo(U);return h.fetchers.set(_,Oe),J({fetchers:new Map(h.fetchers)}),Qi(h,ae,{submission:U,isFetchActionRedirect:!0})}if(Ao(ae)){_a(_,E,ae.error);return}if(hr(ae))throw xt(400,{type:"defer-action"});let _e=h.navigation.location||h.location,De=lo(e.history,_e,z.signal),ir=s||a,or=h.navigation.state!=="idle"?ni(ir,h.navigation.location,l):h.matches;K(or,"Didn't find any matches after fetcher action");let Yi=++vt;Gt.set(_,Yi);let Wl=uo(U,ae.data);h.fetchers.set(_,Wl);let[ln,un]=gh(e.history,h,or,U,_e,q,B,Ee,Re,Fe,ir,l,{[$.route.id]:ae.data},void 0);un.filter(Oe=>Oe.key!==_).forEach(Oe=>{let Xi=Oe.key,Uf=h.fetchers.get(Xi),F0=uo(void 0,Uf?Uf.data:void 0);h.fetchers.set(Xi,F0),oe.has(Xi)&&On(Xi),Oe.controller&&oe.set(Xi,Oe.controller)}),J({fetchers:new Map(h.fetchers)});let ba=()=>un.forEach(Oe=>On(Oe.key));z.signal.addEventListener("abort",ba);let{results:Kl,loaderResults:Gl,fetcherResults:ql}=await Df(h.matches,or,ln,un,De);if(z.signal.aborted)return;z.signal.removeEventListener("abort",ba),Gt.delete(_),oe.delete(_),un.forEach(Oe=>oe.delete(Oe.key));let se=bh(Kl);if(se){if(se.idx>=ln.length){let Oe=un[se.idx-ln.length].key;Fe.add(Oe)}return Qi(h,se.result)}let{loaderData:Pt,errors:Pn}=wh(h,h.matches,ln,Gl,void 0,un,ql,T);if(h.fetchers.has(_)){let Oe=Ur(ae.data);h.fetchers.set(_,Oe)}let Ql=zf(Yi);h.navigation.state==="loading"&&Yi>Kt?(K(b,"Expected pending action"),C&&C.abort(),tt(h.navigation.location,{matches:or,loaderData:Pt,errors:Pn,fetchers:new Map(h.fetchers)})):(J(me({errors:Pn,loaderData:_h(h.loaderData,Pt,or,Pn)},Ql||un.length>0?{fetchers:new Map(h.fetchers)}:{})),q=!1)}async function T0(_,E,O,$,W,U){let V=h.fetchers.get(_),M=uo(U,V?V.data:void 0);h.fetchers.set(_,M),J({fetchers:new Map(h.fetchers)});let z=new AbortController,le=lo(e.history,O,z.signal);oe.set(_,z);let Ie=vt,ae=await so("loader",le,$,W,o,i,l);if(hr(ae)&&(ae=await Kv(ae,le.signal,!0)||ae),oe.get(_)===z&&oe.delete(_),le.signal.aborted)return;if(pi(ae))if(Kt>Ie){let De=Ur(void 0);h.fetchers.set(_,De),J({fetchers:new Map(h.fetchers)});return}else{Fe.add(_),await Qi(h,ae);return}if(Ao(ae)){let De=ri(h.matches,E);h.fetchers.delete(_),J({fetchers:new Map(h.fetchers),errors:{[De.route.id]:ae.error}});return}K(!hr(ae),"Unhandled fetcher deferred data");let _e=Ur(ae.data);h.fetchers.set(_,_e),J({fetchers:new Map(h.fetchers)})}async function Qi(_,E,O){let{submission:$,replace:W,isFetchActionRedirect:U}=O===void 0?{}:O;E.revalidate&&(q=!0);let V=qo(_.location,E.location,me({_isRedirect:!0},U?{_isFetchActionRedirect:!0}:{}));if(K(V,"Expected a location on the redirect navigation"),n){let le=!1;if(E.reloadDocument)le=!0;else if(Vv.test(E.location)){const Ie=e.history.createURL(E.location);le=Ie.origin!==t.location.origin||Mi(Ie.pathname,l)==null}if(le){W?t.location.replace(E.location):t.location.assign(E.location);return}}C=null;let M=W===!0?ke.Replace:ke.Push,z=$||kh(_.navigation);if(G_.has(E.status)&&z&&Lt(z.formMethod))await yt(M,V,{submission:me({},z,{formAction:E.location}),preventScrollReset:R});else if(U)await yt(M,V,{overrideNavigation:Ua(V),fetcherSubmission:z,preventScrollReset:R});else{let le=Ua(V,z);await yt(M,V,{overrideNavigation:le,preventScrollReset:R})}}async function Df(_,E,O,$,W){let U=await Promise.all([...O.map(z=>so("loader",W,z,E,o,i,l)),...$.map(z=>z.matches&&z.match&&z.controller?so("loader",lo(e.history,z.path,z.controller.signal),z.match,z.matches,o,i,l):{type:Se.error,error:xt(404,{pathname:z.path})})]),V=U.slice(0,O.length),M=U.slice(O.length);return await Promise.all([Eh(_,O,V,V.map(()=>W.signal),!1,h.loaderData),Eh(_,$.map(z=>z.match),M,$.map(z=>z.controller?z.controller.signal:null),!0)]),{results:U,loaderResults:V,fetcherResults:M}}function Ul(){q=!0,B.push(...Hl()),Re.forEach((_,E)=>{oe.has(E)&&(Ee.push(E),On(E))})}function _a(_,E,O){let $=ri(h.matches,E);Vl(_),J({errors:{[$.route.id]:O},fetchers:new Map(h.fetchers)})}function Vl(_){let E=h.fetchers.get(_);oe.has(_)&&!(E&&E.state==="loading"&&Gt.has(_))&&On(_),Re.delete(_),Gt.delete(_),Fe.delete(_),h.fetchers.delete(_)}function On(_){let E=oe.get(_);K(E,"Expected fetch controller: "+_),E.abort(),oe.delete(_)}function Lf(_){for(let E of _){let O=Tf(E),$=Ur(O.data);h.fetchers.set(E,$)}}function $f(){let _=[],E=!1;for(let O of Fe){let $=h.fetchers.get(O);K($,"Expected fetcher: "+O),$.state==="loading"&&(Fe.delete(O),_.push(O),E=!0)}return Lf(_),E}function zf(_){let E=[];for(let[O,$]of Gt)if($<_){let W=h.fetchers.get(O);K(W,"Expected fetcher: "+O),W.state==="loading"&&(On(O),Gt.delete(O),E.push(O))}return Lf(E),E.length>0}function D0(_,E){let O=h.blockers.get(_)||ao;return F.get(_)!==E&&F.set(_,E),O}function Ff(_){h.blockers.delete(_),F.delete(_)}function Sa(_,E){let O=h.blockers.get(_)||ao;K(O.state==="unblocked"&&E.state==="blocked"||O.state==="blocked"&&E.state==="blocked"||O.state==="blocked"&&E.state==="proceeding"||O.state==="blocked"&&E.state==="unblocked"||O.state==="proceeding"&&E.state==="unblocked","Invalid blocker state transition: "+O.state+" -> "+E.state);let $=new Map(h.blockers);$.set(_,E),J({blockers:$})}function If(_){let{currentLocation:E,nextLocation:O,historyAction:$}=_;if(F.size===0)return;F.size>1&&Ci(!1,"A router only supports one blocker at a time");let W=Array.from(F.entries()),[U,V]=W[W.length-1],M=h.blockers.get(U);if(!(M&&M.state==="proceeding")&&V({currentLocation:E,nextLocation:O,historyAction:$}))return U}function Hl(_){let E=[];return T.forEach((O,$)=>{(!_||_($))&&(O.cancel(),E.push($),T.delete($))}),E}function L0(_,E,O){if(m=_,y=E,x=O||null,!w&&h.navigation===ju){w=!0;let $=Bf(h.location,h.matches);$!=null&&J({restoreScrollPosition:$})}return()=>{m=null,y=null,x=null}}function Mf(_,E){return x&&x(_,E.map($=>oS($,h.loaderData)))||_.key}function $0(_,E){if(m&&y){let O=Mf(_,E);m[O]=y()}}function Bf(_,E){if(m){let O=Mf(_,E),$=m[O];if(typeof $=="number")return $}return null}function z0(_){o={},s=Hc(_,i,void 0,o)}return v={get basename(){return l},get state(){return h},get routes(){return a},initialize:ue,subscribe:Ot,enableScrollRestoration:L0,navigate:He,fetch:P0,revalidate:nt,createHref:_=>e.history.createHref(_),encodeLocation:_=>e.history.encodeLocation(_),getFetcher:Tf,deleteFetcher:Vl,dispose:he,getBlocker:D0,deleteBlocker:Ff,_internalFetchControllers:oe,_internalActiveDeferreds:T,_internalSetRoutes:z0},v}function X_(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Wc(e,t,n,r,i,o,a){let s,l;if(o!=null&&a!=="path"){s=[];for(let d of t)if(s.push(d),d.route.id===o){l=d;break}}else s=t,l=t[t.length-1];let u=Cl(i||".",aa(s).map(d=>d.pathnameBase),Mi(e.pathname,n)||e.pathname,a==="path");return i==null&&(u.search=e.search,u.hash=e.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!lf(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:yn([n,u.pathname])),Cr(u)}function mh(e,t,n,r){if(!r||!X_(r))return{path:n};if(r.formMethod&&!iS(r.formMethod))return{path:n,error:xt(405,{method:r.formMethod})};let i=()=>({path:n,error:xt(400,{type:"invalid-body"})}),o=r.formMethod||"get",a=e?o.toUpperCase():o.toLowerCase(),s=Wv(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Lt(a))return i();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((x,y)=>{let[w,j]=y;return""+x+w+"="+j+`
`},""):String(r.body);return{path:n,submission:{formMethod:a,formAction:s,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!Lt(a))return i();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:a,formAction:s,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return i()}}}K(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=Kc(r.formData),u=r.formData;else if(r.body instanceof FormData)l=Kc(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=xh(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=xh(l)}catch{return i()}let d={formMethod:a,formAction:s,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Lt(d.formMethod))return{path:n,submission:d};let f=An(n);return t&&f.search&&lf(f.search)&&l.append("index",""),f.search="?"+l,{path:Cr(f),submission:d}}function J_(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function gh(e,t,n,r,i,o,a,s,l,u,d,f,m,x){let y=x?Object.values(x)[0]:m?Object.values(m)[0]:void 0,w=e.createURL(t.location),j=e.createURL(i),g=x?Object.keys(x)[0]:void 0,v=J_(n,g).filter((b,R)=>{if(b.route.lazy)return!0;if(b.route.loader==null)return!1;if(Z_(t.loaderData,t.matches[R],b)||a.some(q=>q===b.route.id))return!0;let C=t.matches[R],D=b;return vh(b,me({currentUrl:w,currentParams:C.params,nextUrl:j,nextParams:D.params},r,{actionResult:y,defaultShouldRevalidate:o||w.pathname+w.search===j.pathname+j.search||w.search!==j.search||Hv(C,D)}))}),h=[];return l.forEach((b,R)=>{if(!n.some(Ee=>Ee.route.id===b.routeId))return;let C=ni(d,b.path,f);if(!C){h.push({key:R,routeId:b.routeId,path:b.path,matches:null,match:null,controller:null});return}let D=t.fetchers.get(R),q=Gc(C,b.path),B=!1;u.has(R)?B=!1:s.includes(R)?B=!0:D&&D.state!=="idle"&&D.data===void 0?B=o:B=vh(q,me({currentUrl:w,currentParams:t.matches[t.matches.length-1].params,nextUrl:j,nextParams:n[n.length-1].params},r,{actionResult:y,defaultShouldRevalidate:o})),B&&h.push({key:R,routeId:b.routeId,path:b.path,matches:C,match:q,controller:new AbortController})}),[v,h]}function Z_(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function Hv(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function vh(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function yh(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];K(i,"No route found in manifest");let o={};for(let a in r){let l=i[a]!==void 0&&a!=="hasErrorBoundary";Ci(!l,'Route "'+i.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!l&&!S_.has(a)&&(o[a]=r[a])}Object.assign(i,o),Object.assign(i,me({},t(i),{lazy:void 0}))}async function so(e,t,n,r,i,o,a,s){s===void 0&&(s={});let l,u,d,f=y=>{let w,j=new Promise((g,p)=>w=p);return d=()=>w(),t.signal.addEventListener("abort",d),Promise.race([y({request:t,params:n.params,context:s.requestContext}),j])};try{let y=n.route[e];if(n.route.lazy)if(y)u=(await Promise.all([f(y),yh(n.route,o,i)]))[0];else if(await yh(n.route,o,i),y=n.route[e],y)u=await f(y);else if(e==="action"){let w=new URL(t.url),j=w.pathname+w.search;throw xt(405,{method:t.method,pathname:j,routeId:n.route.id})}else return{type:Se.data,data:void 0};else if(y)u=await f(y);else{let w=new URL(t.url),j=w.pathname+w.search;throw xt(404,{pathname:j})}K(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(y){l=Se.error,u=y}finally{d&&t.signal.removeEventListener("abort",d)}if(rS(u)){let y=u.status;if(K_.has(y)){let g=u.headers.get("Location");if(K(g,"Redirects returned/thrown from loaders/actions must have a Location header"),!Vv.test(g))g=Wc(new URL(t.url),r.slice(0,r.indexOf(n)+1),a,!0,g);else if(!s.isStaticRequest){let p=new URL(t.url),v=g.startsWith("//")?new URL(p.protocol+g):new URL(g),h=Mi(v.pathname,a)!=null;v.origin===p.origin&&h&&(g=v.pathname+v.search+v.hash)}if(s.isStaticRequest)throw u.headers.set("Location",g),u;return{type:Se.redirect,status:y,location:g,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(s.isRouteRequest)throw{type:l===Se.error?Se.error:Se.data,response:u};let w,j=u.headers.get("Content-Type");return j&&/\bapplication\/json\b/.test(j)?w=await u.json():w=await u.text(),l===Se.error?{type:l,error:new sf(y,u.statusText,w),headers:u.headers}:{type:Se.data,data:w,statusCode:u.status,headers:u.headers}}if(l===Se.error)return{type:l,error:u};if(nS(u)){var m,x;return{type:Se.deferred,deferredData:u,statusCode:(m=u.init)==null?void 0:m.status,headers:((x=u.init)==null?void 0:x.headers)&&new Headers(u.init.headers)}}return{type:Se.data,data:u}}function lo(e,t,n,r){let i=e.createURL(Wv(t)).toString(),o={signal:n};if(r&&Lt(r.formMethod)){let{formMethod:a,formEncType:s}=r;o.method=a.toUpperCase(),s==="application/json"?(o.headers=new Headers({"Content-Type":s}),o.body=JSON.stringify(r.json)):s==="text/plain"?o.body=r.text:s==="application/x-www-form-urlencoded"&&r.formData?o.body=Kc(r.formData):o.body=r.formData}return new Request(i,o)}function Kc(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function xh(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function eS(e,t,n,r,i){let o={},a=null,s,l=!1,u={};return n.forEach((d,f)=>{let m=t[f].route.id;if(K(!pi(d),"Cannot handle redirect results in processLoaderData"),Ao(d)){let x=ri(e,m),y=d.error;r&&(y=Object.values(r)[0],r=void 0),a=a||{},a[x.route.id]==null&&(a[x.route.id]=y),o[m]=void 0,l||(l=!0,s=Bv(d.error)?d.error.status:500),d.headers&&(u[m]=d.headers)}else hr(d)?(i.set(m,d.deferredData),o[m]=d.deferredData.data):o[m]=d.data,d.statusCode!=null&&d.statusCode!==200&&!l&&(s=d.statusCode),d.headers&&(u[m]=d.headers)}),r&&(a=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:a,statusCode:s||200,loaderHeaders:u}}function wh(e,t,n,r,i,o,a,s){let{loaderData:l,errors:u}=eS(t,n,r,i,s);for(let d=0;d<o.length;d++){let{key:f,match:m,controller:x}=o[d];K(a!==void 0&&a[d]!==void 0,"Did not find corresponding fetcher result");let y=a[d];if(!(x&&x.signal.aborted))if(Ao(y)){let w=ri(e.matches,m==null?void 0:m.route.id);u&&u[w.route.id]||(u=me({},u,{[w.route.id]:y.error})),e.fetchers.delete(f)}else if(pi(y))K(!1,"Unhandled fetcher revalidation redirect");else if(hr(y))K(!1,"Unhandled fetcher deferred data");else{let w=Ur(y.data);e.fetchers.set(f,w)}}return{loaderData:l,errors:u}}function _h(e,t,n,r){let i=me({},t);for(let o of n){let a=o.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(i[a]=t[a]):e[a]!==void 0&&o.route.loader&&(i[a]=e[a]),r&&r.hasOwnProperty(a))break}return i}function ri(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Sh(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function xt(e,t){let{pathname:n,routeId:r,method:i,type:o}=t===void 0?{}:t,a="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(a="Bad Request",i&&n&&r?s="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"?s="defer() is not supported in actions":o==="invalid-body"&&(s="Unable to encode submission body")):e===403?(a="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(a="Not Found",s='No route matches URL "'+n+'"'):e===405&&(a="Method Not Allowed",i&&n&&r?s="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(s='Invalid request method "'+i.toUpperCase()+'"')),new sf(e||500,a,new Error(s),!0)}function bh(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(pi(n))return{result:n,idx:t}}}function Wv(e){let t=typeof e=="string"?An(e):e;return Cr(me({},t,{hash:""}))}function tS(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function hr(e){return e.type===Se.deferred}function Ao(e){return e.type===Se.error}function pi(e){return(e&&e.type)===Se.redirect}function nS(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function rS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function iS(e){return W_.has(e.toLowerCase())}function Lt(e){return V_.has(e.toLowerCase())}async function Eh(e,t,n,r,i,o){for(let a=0;a<n.length;a++){let s=n[a],l=t[a];if(!l)continue;let u=e.find(f=>f.route.id===l.route.id),d=u!=null&&!Hv(u,l)&&(o&&o[l.route.id])!==void 0;if(hr(s)&&(i||d)){let f=r[a];K(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await Kv(s,f,i).then(m=>{m&&(n[a]=m||n[a])})}}}async function Kv(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Se.data,data:e.deferredData.unwrappedData}}catch(i){return{type:Se.error,error:i}}return{type:Se.data,data:e.deferredData.data}}}function lf(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function oS(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function Gc(e,t){let n=typeof t=="string"?An(t).search:t.search;if(e[e.length-1].route.index&&lf(n||""))return e[e.length-1];let r=aa(e);return r[r.length-1]}function kh(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:o,json:a}=e;if(!(!t||!n||!r)){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:o,json:void 0,text:void 0};if(a!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:a,text:void 0}}}function Ua(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function aS(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function uo(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}function sS(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0," _hasFetcherDoneAnything ":!0}}function Ur(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ks(){return Ks=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ks.apply(this,arguments)}const Al=S.createContext(null),uf=S.createContext(null),Nr=S.createContext(null),jl=S.createContext(null),an=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Gv=S.createContext(null);function lS(e,t){let{relative:n}=t===void 0?{}:t;Bi()||K(!1);let{basename:r,navigator:i}=S.useContext(Nr),{hash:o,pathname:a,search:s}=df(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:yn([r,a])),i.createHref({pathname:l,search:s,hash:o})}function Bi(){return S.useContext(jl)!=null}function Ui(){return Bi()||K(!1),S.useContext(jl).location}function qv(e){S.useContext(Nr).static||S.useLayoutEffect(e)}function cf(){let{isDataRoute:e}=S.useContext(an);return e?bS():uS()}function uS(){Bi()||K(!1);let e=S.useContext(Al),{basename:t,navigator:n}=S.useContext(Nr),{matches:r}=S.useContext(an),{pathname:i}=Ui(),o=JSON.stringify(aa(r).map(l=>l.pathnameBase)),a=S.useRef(!1);return qv(()=>{a.current=!0}),S.useCallback(function(l,u){if(u===void 0&&(u={}),!a.current)return;if(typeof l=="number"){n.go(l);return}let d=Cl(l,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:yn([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,o,i,e])}const cS=S.createContext(null);function dS(e){let t=S.useContext(an).outlet;return t&&S.createElement(cS.Provider,{value:e},t)}function fS(){let{matches:e}=S.useContext(an),t=e[e.length-1];return t?t.params:{}}function df(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=S.useContext(an),{pathname:i}=Ui(),o=JSON.stringify(aa(r).map(a=>a.pathnameBase));return S.useMemo(()=>Cl(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function pS(e,t,n){Bi()||K(!1);let{navigator:r}=S.useContext(Nr),{matches:i}=S.useContext(an),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let l=Ui(),u;if(t){var d;let w=typeof t=="string"?An(t):t;s==="/"||(d=w.pathname)!=null&&d.startsWith(s)||K(!1),u=w}else u=l;let f=u.pathname||"/",m=s==="/"?f:f.slice(s.length)||"/",x=ni(e,{pathname:m}),y=yS(x&&x.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:yn([s,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?s:yn([s,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return t&&y?S.createElement(jl.Provider,{value:{location:Ks({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ke.Pop}},y):y}function hS(){let e=SS(),t=Bv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,o)}const mS=S.createElement(hS,null);class gS extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?S.createElement(an.Provider,{value:this.props.routeContext},S.createElement(Gv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vS(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(Al);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(an.Provider,{value:t},r)}function yS(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let s=o.findIndex(l=>l.route.id&&(a==null?void 0:a[l.route.id]));s>=0||K(!1),o=o.slice(0,Math.min(o.length,s+1))}return o.reduceRight((s,l,u)=>{let d=l.route.id?a==null?void 0:a[l.route.id]:null,f=null;n&&(f=l.route.errorElement||mS);let m=t.concat(o.slice(0,u+1)),x=()=>{let y;return d?y=f:l.route.Component?y=S.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=s,S.createElement(vS,{match:l,routeContext:{outlet:s,matches:m,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?S.createElement(gS,{location:n.location,revalidation:n.revalidation,component:f,error:d,children:x(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):x()},null)}var Qv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Qv||{}),Gs=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Gs||{});function xS(e){let t=S.useContext(Al);return t||K(!1),t}function wS(e){let t=S.useContext(uf);return t||K(!1),t}function _S(e){let t=S.useContext(an);return t||K(!1),t}function Yv(e){let t=_S(),n=t.matches[t.matches.length-1];return n.route.id||K(!1),n.route.id}function SS(){var e;let t=S.useContext(Gv),n=wS(Gs.UseRouteError),r=Yv(Gs.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function bS(){let{router:e}=xS(Qv.UseNavigateStable),t=Yv(Gs.UseNavigateStable),n=S.useRef(!1);return qv(()=>{n.current=!0}),S.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ks({fromRouteId:t},o)))},[e,t])}const ES="startTransition",Ch=ix[ES];function kS(e){let{fallbackElement:t,router:n,future:r}=e,[i,o]=S.useState(n.state),{v7_startTransition:a}=r||{},s=S.useCallback(f=>{a&&Ch?Ch(()=>o(f)):o(f)},[o,a]);S.useLayoutEffect(()=>n.subscribe(s),[n,s]);let l=S.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:f=>n.navigate(f),push:(f,m,x)=>n.navigate(f,{state:m,preventScrollReset:x==null?void 0:x.preventScrollReset}),replace:(f,m,x)=>n.navigate(f,{replace:!0,state:m,preventScrollReset:x==null?void 0:x.preventScrollReset})}),[n]),u=n.basename||"/",d=S.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return S.createElement(S.Fragment,null,S.createElement(Al.Provider,{value:d},S.createElement(uf.Provider,{value:i},S.createElement(AS,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?S.createElement(CS,{routes:n.routes,state:i}):t))),null)}function CS(e){let{routes:t,state:n}=e;return pS(t,void 0,n)}function Ah(e){let{to:t,replace:n,state:r,relative:i}=e;Bi()||K(!1);let{matches:o}=S.useContext(an),{pathname:a}=Ui(),s=cf(),l=Cl(t,aa(o).map(d=>d.pathnameBase),a,i==="path"),u=JSON.stringify(l);return S.useEffect(()=>s(JSON.parse(u),{replace:n,state:r,relative:i}),[s,u,i,n,r]),null}function Xv(e){return dS(e.context)}function re(e){K(!1)}function AS(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ke.Pop,navigator:o,static:a=!1}=e;Bi()&&K(!1);let s=t.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:s,navigator:o,static:a}),[s,o,a]);typeof r=="string"&&(r=An(r));let{pathname:u="/",search:d="",hash:f="",state:m=null,key:x="default"}=r,y=S.useMemo(()=>{let w=Mi(u,s);return w==null?null:{location:{pathname:w,search:d,hash:f,state:m,key:x},navigationType:i}},[s,u,d,f,m,x,i]);return y==null?null:S.createElement(Nr.Provider,{value:l},S.createElement(jl.Provider,{children:n,value:y}))}new Promise(()=>{});function qc(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let o=[...t,i];if(r.type===S.Fragment){n.push.apply(n,qc(r.props.children,o));return}r.type!==re&&K(!1),!r.props.index||!r.props.children||K(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=qc(r.props.children,o)),n.push(a)}),n}function jS(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:S.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:S.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ai(){return Ai=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ai.apply(this,arguments)}function Jv(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function RS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function OS(e,t){return e.button===0&&(!t||t==="_self")&&!RS(e)}const PS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],NS=["aria-current","caseSensitive","className","end","style","to","children"];function TS(e,t){return Y_({basename:t==null?void 0:t.basename,future:Ai({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:x_({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||DS(),routes:e,mapRouteProperties:jS}).initialize()}function DS(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Ai({},t,{errors:LS(t.errors)})),t}function LS(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new sf(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let o=window[i.__subType];if(typeof o=="function")try{let a=new o(i.message);a.stack="",n[r]=a}catch{}}if(n[r]==null){let o=new Error(i.message);o.stack="",n[r]=o}}else n[r]=i;return n}const $S=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jn=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:u,preventScrollReset:d}=t,f=Jv(t,PS),{basename:m}=S.useContext(Nr),x,y=!1;if(typeof u=="string"&&zS.test(u)&&(x=u,$S))try{let p=new URL(window.location.href),v=u.startsWith("//")?new URL(p.protocol+u):new URL(u),h=Mi(v.pathname,m);v.origin===p.origin&&h!=null?u=h+v.search+v.hash:y=!0}catch{}let w=lS(u,{relative:i}),j=FS(u,{replace:a,state:s,target:l,preventScrollReset:d,relative:i});function g(p){r&&r(p),p.defaultPrevented||j(p)}return S.createElement("a",Ai({},f,{href:x||w,onClick:y||o?r:g,ref:n,target:l}))}),Tr=S.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:s,to:l,children:u}=t,d=Jv(t,NS),f=df(l,{relative:d.relative}),m=Ui(),x=S.useContext(uf),{navigator:y}=S.useContext(Nr),w=y.encodeLocation?y.encodeLocation(f).pathname:f.pathname,j=m.pathname,g=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;i||(j=j.toLowerCase(),g=g?g.toLowerCase():null,w=w.toLowerCase());let p=j===w||!a&&j.startsWith(w)&&j.charAt(w.length)==="/",v=g!=null&&(g===w||!a&&g.startsWith(w)&&g.charAt(w.length)==="/"),h=p?r:void 0,b;typeof o=="function"?b=o({isActive:p,isPending:v}):b=[o,p?"active":null,v?"pending":null].filter(Boolean).join(" ");let R=typeof s=="function"?s({isActive:p,isPending:v}):s;return S.createElement(jn,Ai({},d,{"aria-current":h,className:b,ref:n,style:R,to:l}),typeof u=="function"?u({isActive:p,isPending:v}):u)});var jh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(jh||(jh={}));var Rh;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Rh||(Rh={}));function FS(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,s=cf(),l=Ui(),u=df(e,{relative:a});return S.useCallback(d=>{if(OS(d,n)){d.preventDefault();let f=r!==void 0?r:Cr(l)===Cr(u);s(e,{replace:f,state:i,preventScrollReset:o,relative:a})}},[l,s,u,r,i,n,e,o,a])}function te(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error(typeof e=="number"?"[MobX] minified error nr: "+e+(n.length?" "+n.map(String).join(","):"")+". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts":"[MobX] "+e)}var IS={};function ff(){return typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:IS}var Zv=Object.assign,qs=Object.getOwnPropertyDescriptor,nn=Object.defineProperty,Rl=Object.prototype,Qc=[];Object.freeze(Qc);var ey={};Object.freeze(ey);var MS=typeof Proxy<"u",BS=Object.toString();function ty(){MS||te("Proxy not available")}function ny(e){var t=!1;return function(){if(!t)return t=!0,e.apply(this,arguments)}}var ii=function(){};function Wt(e){return typeof e=="function"}function Ar(e){var t=typeof e;switch(t){case"string":case"symbol":case"number":return!0}return!1}function Ol(e){return e!==null&&typeof e=="object"}function kn(e){if(!Ol(e))return!1;var t=Object.getPrototypeOf(e);if(t==null)return!0;var n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n.toString()===BS}function ry(e){var t=e==null?void 0:e.constructor;return t?t.name==="GeneratorFunction"||t.displayName==="GeneratorFunction":!1}function sa(e,t,n){nn(e,t,{enumerable:!1,writable:!0,configurable:!0,value:n})}function iy(e,t,n){nn(e,t,{enumerable:!1,writable:!1,configurable:!0,value:n})}function Dr(e,t){var n="isMobX"+e;return t.prototype[n]=!0,function(r){return Ol(r)&&r[n]===!0}}function Vi(e){return e instanceof Map}function la(e){return e instanceof Set}var oy=typeof Object.getOwnPropertySymbols<"u";function US(e){var t=Object.keys(e);if(!oy)return t;var n=Object.getOwnPropertySymbols(e);return n.length?[].concat(t,n.filter(function(r){return Rl.propertyIsEnumerable.call(e,r)})):t}var ji=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:oy?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames;function ay(e){return e===null?null:typeof e=="object"?""+e:e}function xn(e,t){return Rl.hasOwnProperty.call(e,t)}var VS=Object.getOwnPropertyDescriptors||function(t){var n={};return ji(t).forEach(function(r){n[r]=qs(t,r)}),n};function Oh(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,KS(r.key),r)}}function pf(e,t,n){return t&&Oh(e.prototype,t),n&&Oh(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ri(){return Ri=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ri.apply(this,arguments)}function sy(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Yc(e,t)}function Yc(e,t){return Yc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Yc(e,t)}function Ru(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function HS(e,t){if(e){if(typeof e=="string")return Ph(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ph(e,t)}}function Ph(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function oi(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=HS(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function WS(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function KS(e){var t=WS(e,"string");return typeof t=="symbol"?t:String(t)}var Zt=Symbol("mobx-stored-annotations");function rn(e){function t(n,r){ua(n,r,e)}return Object.assign(t,e)}function ua(e,t,n){xn(e,Zt)||sa(e,Zt,Ri({},e[Zt])),tb(n)||(e[Zt][t]=n)}function GS(e){return xn(e,Zt)||sa(e,Zt,Ri({},e[Zt])),e[Zt]}var H=Symbol("mobx administration"),ca=function(){function e(n){n===void 0&&(n="Atom"),this.name_=void 0,this.isPendingUnobservation_=!1,this.isBeingObserved_=!1,this.observers_=new Set,this.diffValue_=0,this.lastAccessedBy_=0,this.lowestObserverState_=Z.NOT_TRACKING_,this.onBOL=void 0,this.onBUOL=void 0,this.name_=n}var t=e.prototype;return t.onBO=function(){this.onBOL&&this.onBOL.forEach(function(r){return r()})},t.onBUO=function(){this.onBUOL&&this.onBUOL.forEach(function(r){return r()})},t.reportObserved=function(){return Ay(this)},t.reportChanged=function(){ot(),jy(this),N.stateVersion=N.stateVersion<Number.MAX_SAFE_INTEGER?N.stateVersion+1:Number.MIN_SAFE_INTEGER,at()},t.toString=function(){return this.name_},e}(),hf=Dr("Atom",ca);function ly(e,t,n){t===void 0&&(t=ii),n===void 0&&(n=ii);var r=new ca(e);return t!==ii&&nE(r,t),n!==ii&&Ly(r,n),r}function qS(e,t){return e===t}function QS(e,t){return wf(e,t)}function YS(e,t){return wf(e,t,1)}function XS(e,t){return Object.is?Object.is(e,t):e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Qs={identity:qS,structural:QS,default:XS,shallow:YS};function Oi(e,t,n){return My(e)?e:Array.isArray(e)?Be.array(e,{name:n}):kn(e)?Be.object(e,void 0,{name:n}):Vi(e)?Be.map(e,{name:n}):la(e)?Be.set(e,{name:n}):typeof e=="function"&&!vf(e)&&!tl(e)?ry(e)?Xo(e):Yo(n,e):e}function JS(e,t,n){if(e==null||Jo(e)||Ll(e)||Lr(e)||Wi(e))return e;if(Array.isArray(e))return Be.array(e,{name:n,deep:!1});if(kn(e))return Be.object(e,void 0,{name:n,deep:!1});if(Vi(e))return Be.map(e,{name:n,deep:!1});if(la(e))return Be.set(e,{name:n,deep:!1})}function Pl(e){return e}function ZS(e,t){return wf(e,t)?t:e}var eb="override";function tb(e){return e.annotationType_===eb}function da(e,t){return{annotationType_:e,options_:t,make_:nb,extend_:rb}}function nb(e,t,n,r){var i;if((i=this.options_)!=null&&i.bound)return this.extend_(e,t,n,!1)===null?0:1;if(r===e.target_)return this.extend_(e,t,n,!1)===null?0:2;if(vf(n.value))return 1;var o=uy(e,this,t,n,!1);return nn(r,t,o),2}function rb(e,t,n,r){var i=uy(e,this,t,n);return e.defineProperty_(t,i,r)}function ib(e,t,n,r){t.annotationType_,r.value}function uy(e,t,n,r,i){var o,a,s,l,u,d,f;i===void 0&&(i=N.safeDescriptors),ib(e,t,n,r);var m=r.value;if((o=t.options_)!=null&&o.bound){var x;m=m.bind((x=e.proxy_)!=null?x:e.target_)}return{value:Pi((a=(s=t.options_)==null?void 0:s.name)!=null?a:n.toString(),m,(l=(u=t.options_)==null?void 0:u.autoAction)!=null?l:!1,(d=t.options_)!=null&&d.bound?(f=e.proxy_)!=null?f:e.target_:void 0),configurable:i?e.isPlainObject_:!0,enumerable:!1,writable:!i}}function cy(e,t){return{annotationType_:e,options_:t,make_:ob,extend_:ab}}function ob(e,t,n,r){var i;if(r===e.target_)return this.extend_(e,t,n,!1)===null?0:2;if((i=this.options_)!=null&&i.bound&&(!xn(e.target_,t)||!tl(e.target_[t]))&&this.extend_(e,t,n,!1)===null)return 0;if(tl(n.value))return 1;var o=dy(e,this,t,n,!1,!1);return nn(r,t,o),2}function ab(e,t,n,r){var i,o=dy(e,this,t,n,(i=this.options_)==null?void 0:i.bound);return e.defineProperty_(t,o,r)}function sb(e,t,n,r){t.annotationType_,r.value}function dy(e,t,n,r,i,o){o===void 0&&(o=N.safeDescriptors),sb(e,t,n,r);var a=r.value;if(tl(a)||(a=Xo(a)),i){var s;a=a.bind((s=e.proxy_)!=null?s:e.target_),a.isMobXFlow=!0}return{value:a,configurable:o?e.isPlainObject_:!0,enumerable:!1,writable:!o}}function mf(e,t){return{annotationType_:e,options_:t,make_:lb,extend_:ub}}function lb(e,t,n){return this.extend_(e,t,n,!1)===null?0:1}function ub(e,t,n,r){return cb(e,this,t,n),e.defineComputedProperty_(t,Ri({},this.options_,{get:n.get,set:n.set}),r)}function cb(e,t,n,r){t.annotationType_,r.get}function Nl(e,t){return{annotationType_:e,options_:t,make_:db,extend_:fb}}function db(e,t,n){return this.extend_(e,t,n,!1)===null?0:1}function fb(e,t,n,r){var i,o;return pb(e,this),e.defineObservableProperty_(t,n.value,(i=(o=this.options_)==null?void 0:o.enhancer)!=null?i:Oi,r)}function pb(e,t,n,r){t.annotationType_}var hb="true",mb=fy();function fy(e){return{annotationType_:hb,options_:e,make_:gb,extend_:vb}}function gb(e,t,n,r){var i,o;if(n.get)return Tl.make_(e,t,n,r);if(n.set){var a=Pi(t.toString(),n.set);return r===e.target_?e.defineProperty_(t,{configurable:N.safeDescriptors?e.isPlainObject_:!0,set:a})===null?0:2:(nn(r,t,{configurable:!0,set:a}),2)}if(r!==e.target_&&typeof n.value=="function"){var s;if(ry(n.value)){var l,u=(l=this.options_)!=null&&l.autoBind?Xo.bound:Xo;return u.make_(e,t,n,r)}var d=(s=this.options_)!=null&&s.autoBind?Yo.bound:Yo;return d.make_(e,t,n,r)}var f=((i=this.options_)==null?void 0:i.deep)===!1?Be.ref:Be;if(typeof n.value=="function"&&(o=this.options_)!=null&&o.autoBind){var m;n.value=n.value.bind((m=e.proxy_)!=null?m:e.target_)}return f.make_(e,t,n,r)}function vb(e,t,n,r){var i,o;if(n.get)return Tl.extend_(e,t,n,r);if(n.set)return e.defineProperty_(t,{configurable:N.safeDescriptors?e.isPlainObject_:!0,set:Pi(t.toString(),n.set)},r);if(typeof n.value=="function"&&(i=this.options_)!=null&&i.autoBind){var a;n.value=n.value.bind((a=e.proxy_)!=null?a:e.target_)}var s=((o=this.options_)==null?void 0:o.deep)===!1?Be.ref:Be;return s.extend_(e,t,n,r)}var yb="observable",xb="observable.ref",wb="observable.shallow",_b="observable.struct",py={deep:!0,name:void 0,defaultDecorator:void 0,proxy:!0};Object.freeze(py);function Va(e){return e||py}var hy=Nl(yb),Sb=Nl(xb,{enhancer:Pl}),bb=Nl(wb,{enhancer:JS}),Eb=Nl(_b,{enhancer:ZS}),my=rn(hy);function Ha(e){return e.deep===!0?Oi:e.deep===!1?Pl:Cb(e.defaultDecorator)}function kb(e){var t;return e?(t=e.defaultDecorator)!=null?t:fy(e):void 0}function Cb(e){var t,n;return e&&(t=(n=e.options_)==null?void 0:n.enhancer)!=null?t:Oi}function gy(e,t,n){if(Ar(t)){ua(e,t,hy);return}return My(e)?e:kn(e)?Be.object(e,t,n):Array.isArray(e)?Be.array(e,t):Vi(e)?Be.map(e,t):la(e)?Be.set(e,t):typeof e=="object"&&e!==null?e:Be.box(e,t)}Zv(gy,my);var Ab={box:function(t,n){var r=Va(n);return new hi(t,Ha(r),r.name,!0,r.equals)},array:function(t,n){var r=Va(n);return(N.useProxies===!1||r.proxy===!1?kE:gE)(t,Ha(r),r.name)},map:function(t,n){var r=Va(n);return new Hy(t,Ha(r),r.name)},set:function(t,n){var r=Va(n);return new Gy(t,Ha(r),r.name)},object:function(t,n,r){return zy(N.useProxies===!1||(r==null?void 0:r.proxy)===!1?va({},r):fE({},r),t,n)},ref:rn(Sb),shallow:rn(bb),deep:my,struct:rn(Eb)},Be=Zv(gy,Ab),vy="computed",jb="computed.struct",yy=mf(vy),Rb=mf(jb,{equals:Qs.structural}),Tl=function(t,n){if(Ar(n))return ua(t,n,yy);if(kn(t))return rn(mf(vy,t));var r=kn(n)?n:{};return r.get=t,r.name||(r.name=t.name||""),new Qo(r)};Object.assign(Tl,yy);Tl.struct=rn(Rb);var Nh,Th,Ys=0,Ob=1,Pb=(Nh=(Th=qs(function(){},"name"))==null?void 0:Th.configurable)!=null?Nh:!1,Dh={value:"action",configurable:!0,writable:!1,enumerable:!1};function Pi(e,t,n,r){n===void 0&&(n=!1);function i(){return Nb(e,n,t,r||this,arguments)}return i.isMobxAction=!0,Pb&&(Dh.value=e,nn(i,"name",Dh)),i}function Nb(e,t,n,r,i){var o=Tb(e,t);try{return n.apply(r,i)}catch(a){throw o.error_=a,a}finally{Db(o)}}function Tb(e,t,n,r){var i=!1,o=0,a=N.trackingDerivation,s=!t||!a;ot();var l=N.allowStateChanges;s&&(Hi(),l=fa(!0));var u=gf(!0),d={runAsAction_:s,prevDerivation_:a,prevAllowStateChanges_:l,prevAllowStateReads_:u,notifySpy_:i,startTime_:o,actionId_:Ob++,parentActionId_:Ys};return Ys=d.actionId_,d}function Db(e){Ys!==e.actionId_&&te(30),Ys=e.parentActionId_,e.error_!==void 0&&(N.suppressReactionErrors=!0),pa(e.prevAllowStateChanges_),jo(e.prevAllowStateReads_),at(),e.runAsAction_&&Xn(e.prevDerivation_),N.suppressReactionErrors=!1}function Lb(e,t){var n=fa(e);try{return t()}finally{pa(n)}}function fa(e){var t=N.allowStateChanges;return N.allowStateChanges=e,t}function pa(e){N.allowStateChanges=e}var xy;xy=Symbol.toPrimitive;var hi=function(e){sy(t,e);function t(r,i,o,a,s){var l;return o===void 0&&(o="ObservableValue"),s===void 0&&(s=Qs.default),l=e.call(this,o)||this,l.enhancer=void 0,l.name_=void 0,l.equals=void 0,l.hasUnreportedChange_=!1,l.interceptors_=void 0,l.changeListeners_=void 0,l.value_=void 0,l.dehancer=void 0,l.enhancer=i,l.name_=o,l.equals=s,l.value_=i(r,void 0,o),l}var n=t.prototype;return n.dehanceValue=function(i){return this.dehancer!==void 0?this.dehancer(i):i},n.set=function(i){this.value_,i=this.prepareNewValue_(i),i!==N.UNCHANGED&&this.setNewValue_(i)},n.prepareNewValue_=function(i){if(St(this)){var o=bt(this,{object:this,type:on,newValue:i});if(!o)return N.UNCHANGED;i=o.newValue}return i=this.enhancer(i,this.value_,this.name_),this.equals(this.value_,i)?N.UNCHANGED:i},n.setNewValue_=function(i){var o=this.value_;this.value_=i,this.reportChanged(),Ut(this)&&Vt(this,{type:on,object:this,newValue:i,oldValue:o})},n.get=function(){return this.reportObserved(),this.dehanceValue(this.value_)},n.intercept_=function(i){return ha(this,i)},n.observe_=function(i,o){return o&&i({observableKind:"value",debugObjectName:this.name_,object:this,type:on,newValue:this.value_,oldValue:void 0}),ma(this,i)},n.raw=function(){return this.value_},n.toJSON=function(){return this.get()},n.toString=function(){return this.name_+"["+this.value_+"]"},n.valueOf=function(){return ay(this.get())},n[xy]=function(){return this.valueOf()},t}(ca),wy;wy=Symbol.toPrimitive;var Qo=function(){function e(n){this.dependenciesState_=Z.NOT_TRACKING_,this.observing_=[],this.newObserving_=null,this.isBeingObserved_=!1,this.isPendingUnobservation_=!1,this.observers_=new Set,this.diffValue_=0,this.runId_=0,this.lastAccessedBy_=0,this.lowestObserverState_=Z.UP_TO_DATE_,this.unboundDepsCount_=0,this.value_=new Js(null),this.name_=void 0,this.triggeredBy_=void 0,this.isComputing_=!1,this.isRunningSetter_=!1,this.derivation=void 0,this.setter_=void 0,this.isTracing_=Xs.NONE,this.scope_=void 0,this.equals_=void 0,this.requiresReaction_=void 0,this.keepAlive_=void 0,this.onBOL=void 0,this.onBUOL=void 0,n.get||te(31),this.derivation=n.get,this.name_=n.name||"ComputedValue",n.set&&(this.setter_=Pi("ComputedValue-setter",n.set)),this.equals_=n.equals||(n.compareStructural||n.struct?Qs.structural:Qs.default),this.scope_=n.context,this.requiresReaction_=n.requiresReaction,this.keepAlive_=!!n.keepAlive}var t=e.prototype;return t.onBecomeStale_=function(){Bb(this)},t.onBO=function(){this.onBOL&&this.onBOL.forEach(function(r){return r()})},t.onBUO=function(){this.onBUOL&&this.onBUOL.forEach(function(r){return r()})},t.get=function(){if(this.isComputing_&&te(32,this.name_,this.derivation),N.inBatch===0&&this.observers_.size===0&&!this.keepAlive_)Xc(this)&&(this.warnAboutUntrackedRead_(),ot(),this.value_=this.computeValue_(!1),at());else if(Ay(this),Xc(this)){var r=N.trackingContext;this.keepAlive_&&!r&&(N.trackingContext=this),this.trackAndCompute()&&Mb(this),N.trackingContext=r}var i=this.value_;if(cs(i))throw i.cause;return i},t.set=function(r){if(this.setter_){this.isRunningSetter_&&te(33,this.name_),this.isRunningSetter_=!0;try{this.setter_.call(this.scope_,r)}finally{this.isRunningSetter_=!1}}else te(34,this.name_)},t.trackAndCompute=function(){var r=this.value_,i=this.dependenciesState_===Z.NOT_TRACKING_,o=this.computeValue_(!0),a=i||cs(r)||cs(o)||!this.equals_(r,o);return a&&(this.value_=o),a},t.computeValue_=function(r){this.isComputing_=!0;var i=fa(!1),o;if(r)o=_y(this,this.derivation,this.scope_);else if(N.disableErrorBoundaries===!0)o=this.derivation.call(this.scope_);else try{o=this.derivation.call(this.scope_)}catch(a){o=new Js(a)}return pa(i),this.isComputing_=!1,o},t.suspend_=function(){this.keepAlive_||(Jc(this),this.value_=void 0)},t.observe_=function(r,i){var o=this,a=!0,s=void 0;return Xb(function(){var l=o.get();if(!a||i){var u=Hi();r({observableKind:"computed",debugObjectName:o.name_,type:on,object:o,newValue:l,oldValue:s}),Xn(u)}a=!1,s=l})},t.warnAboutUntrackedRead_=function(){},t.toString=function(){return this.name_+"["+this.derivation.toString()+"]"},t.valueOf=function(){return ay(this.get())},t[wy]=function(){return this.valueOf()},e}(),Dl=Dr("ComputedValue",Qo),Z;(function(e){e[e.NOT_TRACKING_=-1]="NOT_TRACKING_",e[e.UP_TO_DATE_=0]="UP_TO_DATE_",e[e.POSSIBLY_STALE_=1]="POSSIBLY_STALE_",e[e.STALE_=2]="STALE_"})(Z||(Z={}));var Xs;(function(e){e[e.NONE=0]="NONE",e[e.LOG=1]="LOG",e[e.BREAK=2]="BREAK"})(Xs||(Xs={}));var Js=function(t){this.cause=void 0,this.cause=t};function cs(e){return e instanceof Js}function Xc(e){switch(e.dependenciesState_){case Z.UP_TO_DATE_:return!1;case Z.NOT_TRACKING_:case Z.STALE_:return!0;case Z.POSSIBLY_STALE_:{for(var t=gf(!0),n=Hi(),r=e.observing_,i=r.length,o=0;o<i;o++){var a=r[o];if(Dl(a)){if(N.disableErrorBoundaries)a.get();else try{a.get()}catch{return Xn(n),jo(t),!0}if(e.dependenciesState_===Z.STALE_)return Xn(n),jo(t),!0}}return by(e),Xn(n),jo(t),!1}}}function _y(e,t,n){var r=gf(!0);by(e),e.newObserving_=new Array(e.observing_.length+100),e.unboundDepsCount_=0,e.runId_=++N.runId;var i=N.trackingDerivation;N.trackingDerivation=e,N.inBatch++;var o;if(N.disableErrorBoundaries===!0)o=t.call(n);else try{o=t.call(n)}catch(a){o=new Js(a)}return N.inBatch--,N.trackingDerivation=i,$b(e),jo(r),o}function $b(e){for(var t=e.observing_,n=e.observing_=e.newObserving_,r=Z.UP_TO_DATE_,i=0,o=e.unboundDepsCount_,a=0;a<o;a++){var s=n[a];s.diffValue_===0&&(s.diffValue_=1,i!==a&&(n[i]=s),i++),s.dependenciesState_>r&&(r=s.dependenciesState_)}for(n.length=i,e.newObserving_=null,o=t.length;o--;){var l=t[o];l.diffValue_===0&&ky(l,e),l.diffValue_=0}for(;i--;){var u=n[i];u.diffValue_===1&&(u.diffValue_=0,Ib(u,e))}r!==Z.UP_TO_DATE_&&(e.dependenciesState_=r,e.onBecomeStale_())}function Jc(e){var t=e.observing_;e.observing_=[];for(var n=t.length;n--;)ky(t[n],e);e.dependenciesState_=Z.NOT_TRACKING_}function Sy(e){var t=Hi();try{return e()}finally{Xn(t)}}function Hi(){var e=N.trackingDerivation;return N.trackingDerivation=null,e}function Xn(e){N.trackingDerivation=e}function gf(e){var t=N.allowStateReads;return N.allowStateReads=e,t}function jo(e){N.allowStateReads=e}function by(e){if(e.dependenciesState_!==Z.UP_TO_DATE_){e.dependenciesState_=Z.UP_TO_DATE_;for(var t=e.observing_,n=t.length;n--;)t[n].lowestObserverState_=Z.UP_TO_DATE_}}var ds=function(){this.version=6,this.UNCHANGED={},this.trackingDerivation=null,this.trackingContext=null,this.runId=0,this.mobxGuid=0,this.inBatch=0,this.pendingUnobservations=[],this.pendingReactions=[],this.isRunningReactions=!1,this.allowStateChanges=!1,this.allowStateReads=!0,this.enforceActions=!0,this.spyListeners=[],this.globalReactionErrorHandlers=[],this.computedRequiresReaction=!1,this.reactionRequiresObservable=!1,this.observableRequiresReaction=!1,this.disableErrorBoundaries=!1,this.suppressReactionErrors=!1,this.useProxies=!0,this.verifyProxies=!1,this.safeDescriptors=!0,this.stateVersion=Number.MIN_SAFE_INTEGER},fs=!0,Ey=!1,N=function(){var e=ff();return e.__mobxInstanceCount>0&&!e.__mobxGlobals&&(fs=!1),e.__mobxGlobals&&e.__mobxGlobals.version!==new ds().version&&(fs=!1),fs?e.__mobxGlobals?(e.__mobxInstanceCount+=1,e.__mobxGlobals.UNCHANGED||(e.__mobxGlobals.UNCHANGED={}),e.__mobxGlobals):(e.__mobxInstanceCount=1,e.__mobxGlobals=new ds):(setTimeout(function(){Ey||te(35)},1),new ds)}();function zb(){if((N.pendingReactions.length||N.inBatch||N.isRunningReactions)&&te(36),Ey=!0,fs){var e=ff();--e.__mobxInstanceCount===0&&(e.__mobxGlobals=void 0),N=new ds}}function Fb(){return N}function Ib(e,t){e.observers_.add(t),e.lowestObserverState_>t.dependenciesState_&&(e.lowestObserverState_=t.dependenciesState_)}function ky(e,t){e.observers_.delete(t),e.observers_.size===0&&Cy(e)}function Cy(e){e.isPendingUnobservation_===!1&&(e.isPendingUnobservation_=!0,N.pendingUnobservations.push(e))}function ot(){N.inBatch++}function at(){if(--N.inBatch===0){Ry();for(var e=N.pendingUnobservations,t=0;t<e.length;t++){var n=e[t];n.isPendingUnobservation_=!1,n.observers_.size===0&&(n.isBeingObserved_&&(n.isBeingObserved_=!1,n.onBUO()),n instanceof Qo&&n.suspend_())}N.pendingUnobservations=[]}}function Ay(e){var t=N.trackingDerivation;return t!==null?(t.runId_!==e.lastAccessedBy_&&(e.lastAccessedBy_=t.runId_,t.newObserving_[t.unboundDepsCount_++]=e,!e.isBeingObserved_&&N.trackingContext&&(e.isBeingObserved_=!0,e.onBO())),e.isBeingObserved_):(e.observers_.size===0&&N.inBatch>0&&Cy(e),!1)}function jy(e){e.lowestObserverState_!==Z.STALE_&&(e.lowestObserverState_=Z.STALE_,e.observers_.forEach(function(t){t.dependenciesState_===Z.UP_TO_DATE_&&t.onBecomeStale_(),t.dependenciesState_=Z.STALE_}))}function Mb(e){e.lowestObserverState_!==Z.STALE_&&(e.lowestObserverState_=Z.STALE_,e.observers_.forEach(function(t){t.dependenciesState_===Z.POSSIBLY_STALE_?t.dependenciesState_=Z.STALE_:t.dependenciesState_===Z.UP_TO_DATE_&&(e.lowestObserverState_=Z.UP_TO_DATE_)}))}function Bb(e){e.lowestObserverState_===Z.UP_TO_DATE_&&(e.lowestObserverState_=Z.POSSIBLY_STALE_,e.observers_.forEach(function(t){t.dependenciesState_===Z.UP_TO_DATE_&&(t.dependenciesState_=Z.POSSIBLY_STALE_,t.onBecomeStale_())}))}var Zs=function(){function e(n,r,i,o){n===void 0&&(n="Reaction"),this.name_=void 0,this.onInvalidate_=void 0,this.errorHandler_=void 0,this.requiresObservable_=void 0,this.observing_=[],this.newObserving_=[],this.dependenciesState_=Z.NOT_TRACKING_,this.diffValue_=0,this.runId_=0,this.unboundDepsCount_=0,this.isDisposed_=!1,this.isScheduled_=!1,this.isTrackPending_=!1,this.isRunning_=!1,this.isTracing_=Xs.NONE,this.name_=n,this.onInvalidate_=r,this.errorHandler_=i,this.requiresObservable_=o}var t=e.prototype;return t.onBecomeStale_=function(){this.schedule_()},t.schedule_=function(){this.isScheduled_||(this.isScheduled_=!0,N.pendingReactions.push(this),Ry())},t.isScheduled=function(){return this.isScheduled_},t.runReaction_=function(){if(!this.isDisposed_){ot(),this.isScheduled_=!1;var r=N.trackingContext;if(N.trackingContext=this,Xc(this)){this.isTrackPending_=!0;try{this.onInvalidate_()}catch(i){this.reportExceptionInDerivation_(i)}}N.trackingContext=r,at()}},t.track=function(r){if(!this.isDisposed_){ot(),this.isRunning_=!0;var i=N.trackingContext;N.trackingContext=this;var o=_y(this,r,void 0);N.trackingContext=i,this.isRunning_=!1,this.isTrackPending_=!1,this.isDisposed_&&Jc(this),cs(o)&&this.reportExceptionInDerivation_(o.cause),at()}},t.reportExceptionInDerivation_=function(r){var i=this;if(this.errorHandler_){this.errorHandler_(r,this);return}if(N.disableErrorBoundaries)throw r;var o="[mobx] uncaught error in '"+this+"'";N.suppressReactionErrors||console.error(o,r),N.globalReactionErrorHandlers.forEach(function(a){return a(r,i)})},t.dispose=function(){this.isDisposed_||(this.isDisposed_=!0,this.isRunning_||(ot(),Jc(this),at()))},t.getDisposer_=function(r){var i=this,o=function a(){i.dispose(),r==null||r.removeEventListener==null||r.removeEventListener("abort",a)};return r==null||r.addEventListener==null||r.addEventListener("abort",o),o[H]=this,o},t.toString=function(){return"Reaction["+this.name_+"]"},t.trace=function(r){},e}(),Ub=100,Zc=function(t){return t()};function Ry(){N.inBatch>0||N.isRunningReactions||Zc(Vb)}function Vb(){N.isRunningReactions=!0;for(var e=N.pendingReactions,t=0;e.length>0;){++t===Ub&&(console.error("[mobx] cycle in reaction: "+e[0]),e.splice(0));for(var n=e.splice(0),r=0,i=n.length;r<i;r++)n[r].runReaction_()}N.isRunningReactions=!1}var el=Dr("Reaction",Zs);function Hb(e){var t=Zc;Zc=function(r){return e(function(){return t(r)})}}function Ro(){return!1}function Wb(e){return console.warn("[mobx.spy] Is a no-op in production builds"),function(){}}var Oy="action",Kb="action.bound",Py="autoAction",Gb="autoAction.bound",qb="<unnamed action>",Ny=da(Oy),Qb=da(Kb,{bound:!0}),Ty=da(Py,{autoAction:!0}),Yb=da(Gb,{autoAction:!0,bound:!0});function Dy(e){var t=function(r,i){if(Wt(r))return Pi(r.name||qb,r,e);if(Wt(i))return Pi(r,i,e);if(Ar(i))return ua(r,i,e?Ty:Ny);if(Ar(r))return rn(da(e?Py:Oy,{name:r,autoAction:e}))};return t}var ai=Dy(!1);Object.assign(ai,Ny);var Yo=Dy(!0);Object.assign(Yo,Ty);ai.bound=rn(Qb);Yo.bound=rn(Yb);function vf(e){return Wt(e)&&e.isMobxAction===!0}function Xb(e,t){var n,r,i,o,a;t===void 0&&(t=ey);var s=(n=(r=t)==null?void 0:r.name)!=null?n:"Autorun",l=!t.scheduler&&!t.delay,u;if(l)u=new Zs(s,function(){this.track(m)},t.onError,t.requiresObservable);else{var d=Zb(t),f=!1;u=new Zs(s,function(){f||(f=!0,d(function(){f=!1,u.isDisposed_||u.track(m)}))},t.onError,t.requiresObservable)}function m(){e(u)}return(i=t)!=null&&(o=i.signal)!=null&&o.aborted||u.schedule_(),u.getDisposer_((a=t)==null?void 0:a.signal)}var Jb=function(t){return t()};function Zb(e){return e.scheduler?e.scheduler:e.delay?function(t){return setTimeout(t,e.delay)}:Jb}var eE="onBO",tE="onBUO";function nE(e,t,n){return $y(eE,e,t,n)}function Ly(e,t,n){return $y(tE,e,t,n)}function $y(e,t,n,r){var i=typeof r=="function"?Ni(t,n):Ni(t),o=Wt(r)?r:n,a=e+"L";return i[a]?i[a].add(o):i[a]=new Set([o]),function(){var s=i[a];s&&(s.delete(o),s.size===0&&delete i[a])}}var rE="never",Wa="always",iE="observed";function oE(e){e.isolateGlobalState===!0&&zb();var t=e.useProxies,n=e.enforceActions;if(t!==void 0&&(N.useProxies=t===Wa?!0:t===rE?!1:typeof Proxy<"u"),t==="ifavailable"&&(N.verifyProxies=!0),n!==void 0){var r=n===Wa?Wa:n===iE;N.enforceActions=r,N.allowStateChanges=!(r===!0||r===Wa)}["computedRequiresReaction","reactionRequiresObservable","observableRequiresReaction","disableErrorBoundaries","safeDescriptors"].forEach(function(i){i in e&&(N[i]=!!e[i])}),N.allowStateReads=!N.observableRequiresReaction,e.reactionScheduler&&Hb(e.reactionScheduler)}function zy(e,t,n,r){var i=VS(t),o=va(e,r)[H];ot();try{ji(i).forEach(function(a){o.extend_(a,i[a],n&&a in n?n[a]:!0)})}finally{at()}return e}function aE(e,t){return Fy(Ni(e,t))}function Fy(e){var t={name:e.name_};return e.observing_&&e.observing_.length>0&&(t.dependencies=sE(e.observing_).map(Fy)),t}function sE(e){return Array.from(new Set(e))}var lE=0;function Iy(){this.message="FLOW_CANCELLED"}Iy.prototype=Object.create(Error.prototype);var Lh=cy("flow"),uE=cy("flow.bound",{bound:!0}),Xo=Object.assign(function(t,n){if(Ar(n))return ua(t,n,Lh);var r=t,i=r.name||"<unnamed flow>",o=function(){var s=this,l=arguments,u=++lE,d=ai(i+" - runid: "+u+" - init",r).apply(s,l),f,m=void 0,x=new Promise(function(y,w){var j=0;f=w;function g(h){m=void 0;var b;try{b=ai(i+" - runid: "+u+" - yield "+j++,d.next).call(d,h)}catch(R){return w(R)}v(b)}function p(h){m=void 0;var b;try{b=ai(i+" - runid: "+u+" - yield "+j++,d.throw).call(d,h)}catch(R){return w(R)}v(b)}function v(h){if(Wt(h==null?void 0:h.then)){h.then(v,w);return}return h.done?y(h.value):(m=Promise.resolve(h.value),m.then(g,p))}g(void 0)});return x.cancel=ai(i+" - runid: "+u+" - cancel",function(){try{m&&$h(m);var y=d.return(void 0),w=Promise.resolve(y.value);w.then(ii,ii),$h(w),f(new Iy)}catch(j){f(j)}}),x};return o.isMobXFlow=!0,o},Lh);Xo.bound=rn(uE);function $h(e){Wt(e.cancel)&&e.cancel()}function tl(e){return(e==null?void 0:e.isMobXFlow)===!0}function cE(e,t){return e?t!==void 0?Jo(e)?e[H].values_.has(t):!1:Jo(e)||!!e[H]||hf(e)||el(e)||Dl(e):!1}function My(e){return cE(e)}function hn(e,t){t===void 0&&(t=void 0),ot();try{return e.apply(t)}finally{at()}}function Ir(e){return e[H]}var dE={has:function(t,n){return Ir(t).has_(n)},get:function(t,n){return Ir(t).get_(n)},set:function(t,n,r){var i;return Ar(n)?(i=Ir(t).set_(n,r,!0))!=null?i:!0:!1},deleteProperty:function(t,n){var r;return Ar(n)?(r=Ir(t).delete_(n,!0))!=null?r:!0:!1},defineProperty:function(t,n,r){var i;return(i=Ir(t).defineProperty_(n,r))!=null?i:!0},ownKeys:function(t){return Ir(t).ownKeys_()},preventExtensions:function(t){te(13)}};function fE(e,t){var n,r;return ty(),e=va(e,t),(r=(n=e[H]).proxy_)!=null?r:n.proxy_=new Proxy(e,dE)}function St(e){return e.interceptors_!==void 0&&e.interceptors_.length>0}function ha(e,t){var n=e.interceptors_||(e.interceptors_=[]);return n.push(t),ny(function(){var r=n.indexOf(t);r!==-1&&n.splice(r,1)})}function bt(e,t){var n=Hi();try{for(var r=[].concat(e.interceptors_||[]),i=0,o=r.length;i<o&&(t=r[i](t),t&&!t.type&&te(14),!!t);i++);return t}finally{Xn(n)}}function Ut(e){return e.changeListeners_!==void 0&&e.changeListeners_.length>0}function ma(e,t){var n=e.changeListeners_||(e.changeListeners_=[]);return n.push(t),ny(function(){var r=n.indexOf(t);r!==-1&&n.splice(r,1)})}function Vt(e,t){var n=Hi(),r=e.changeListeners_;if(r){r=r.slice();for(var i=0,o=r.length;i<o;i++)r[i](t);Xn(n)}}function pE(e,t,n){var r=va(e,n)[H];ot();try{var i;(i=t)!=null||(t=GS(e)),ji(t).forEach(function(o){return r.make_(o,t[o])})}finally{at()}return e}var Ou=Symbol("mobx-keys");function ga(e,t,n){if(kn(e))return zy(e,e,t,n);var r=va(e,n)[H];if(!e[Ou]){var i=Object.getPrototypeOf(e),o=new Set([].concat(ji(e),ji(i)));o.delete("constructor"),o.delete(H),sa(i,Ou,o)}ot();try{e[Ou].forEach(function(a){return r.make_(a,t&&a in t?t[a]:!0)})}finally{at()}return e}var zh="splice",on="update",hE=1e4,mE={get:function(t,n){var r=t[H];return n===H?r:n==="length"?r.getArrayLength_():typeof n=="string"&&!isNaN(n)?r.get_(parseInt(n)):xn(nl,n)?nl[n]:t[n]},set:function(t,n,r){var i=t[H];return n==="length"&&i.setArrayLength_(r),typeof n=="symbol"||isNaN(n)?t[n]=r:i.set_(parseInt(n),r),!0},preventExtensions:function(){te(15)}},yf=function(){function e(n,r,i,o){n===void 0&&(n="ObservableArray"),this.owned_=void 0,this.legacyMode_=void 0,this.atom_=void 0,this.values_=[],this.interceptors_=void 0,this.changeListeners_=void 0,this.enhancer_=void 0,this.dehancer=void 0,this.proxy_=void 0,this.lastKnownLength_=0,this.owned_=i,this.legacyMode_=o,this.atom_=new ca(n),this.enhancer_=function(a,s){return r(a,s,"ObservableArray[..]")}}var t=e.prototype;return t.dehanceValue_=function(r){return this.dehancer!==void 0?this.dehancer(r):r},t.dehanceValues_=function(r){return this.dehancer!==void 0&&r.length>0?r.map(this.dehancer):r},t.intercept_=function(r){return ha(this,r)},t.observe_=function(r,i){return i===void 0&&(i=!1),i&&r({observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:"splice",index:0,added:this.values_.slice(),addedCount:this.values_.length,removed:[],removedCount:0}),ma(this,r)},t.getArrayLength_=function(){return this.atom_.reportObserved(),this.values_.length},t.setArrayLength_=function(r){(typeof r!="number"||isNaN(r)||r<0)&&te("Out of range: "+r);var i=this.values_.length;if(r!==i)if(r>i){for(var o=new Array(r-i),a=0;a<r-i;a++)o[a]=void 0;this.spliceWithArray_(i,0,o)}else this.spliceWithArray_(r,i-r)},t.updateArrayLength_=function(r,i){r!==this.lastKnownLength_&&te(16),this.lastKnownLength_+=i,this.legacyMode_&&i>0&&Xy(r+i+1)},t.spliceWithArray_=function(r,i,o){var a=this;this.atom_;var s=this.values_.length;if(r===void 0?r=0:r>s?r=s:r<0&&(r=Math.max(0,s+r)),arguments.length===1?i=s-r:i==null?i=0:i=Math.max(0,Math.min(i,s-r)),o===void 0&&(o=Qc),St(this)){var l=bt(this,{object:this.proxy_,type:zh,index:r,removedCount:i,added:o});if(!l)return Qc;i=l.removedCount,o=l.added}if(o=o.length===0?o:o.map(function(f){return a.enhancer_(f,void 0)}),this.legacyMode_){var u=o.length-i;this.updateArrayLength_(s,u)}var d=this.spliceItemsIntoValues_(r,i,o);return(i!==0||o.length!==0)&&this.notifyArraySplice_(r,o,d),this.dehanceValues_(d)},t.spliceItemsIntoValues_=function(r,i,o){if(o.length<hE){var a;return(a=this.values_).splice.apply(a,[r,i].concat(o))}else{var s=this.values_.slice(r,r+i),l=this.values_.slice(r+i);this.values_.length+=o.length-i;for(var u=0;u<o.length;u++)this.values_[r+u]=o[u];for(var d=0;d<l.length;d++)this.values_[r+o.length+d]=l[d];return s}},t.notifyArrayChildUpdate_=function(r,i,o){var a=!this.owned_&&Ro(),s=Ut(this),l=s||a?{observableKind:"array",object:this.proxy_,type:on,debugObjectName:this.atom_.name_,index:r,newValue:i,oldValue:o}:null;this.atom_.reportChanged(),s&&Vt(this,l)},t.notifyArraySplice_=function(r,i,o){var a=!this.owned_&&Ro(),s=Ut(this),l=s||a?{observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:zh,index:r,removed:o,added:i,removedCount:o.length,addedCount:i.length}:null;this.atom_.reportChanged(),s&&Vt(this,l)},t.get_=function(r){if(this.legacyMode_&&r>=this.values_.length){console.warn("[mobx] Out of bounds read: "+r);return}return this.atom_.reportObserved(),this.dehanceValue_(this.values_[r])},t.set_=function(r,i){var o=this.values_;if(this.legacyMode_&&r>o.length&&te(17,r,o.length),r<o.length){this.atom_;var a=o[r];if(St(this)){var s=bt(this,{type:on,object:this.proxy_,index:r,newValue:i});if(!s)return;i=s.newValue}i=this.enhancer_(i,a);var l=i!==a;l&&(o[r]=i,this.notifyArrayChildUpdate_(r,i,a))}else{for(var u=new Array(r+1-o.length),d=0;d<u.length-1;d++)u[d]=void 0;u[u.length-1]=i,this.spliceWithArray_(o.length,0,u)}},e}();function gE(e,t,n,r){n===void 0&&(n="ObservableArray"),r===void 0&&(r=!1),ty();var i=new yf(n,t,r,!1);iy(i.values_,H,i);var o=new Proxy(i.values_,mE);if(i.proxy_=o,e&&e.length){var a=fa(!0);i.spliceWithArray_(0,0,e),pa(a)}return o}var nl={clear:function(){return this.splice(0)},replace:function(t){var n=this[H];return n.spliceWithArray_(0,n.values_.length,t)},toJSON:function(){return this.slice()},splice:function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];var a=this[H];switch(arguments.length){case 0:return[];case 1:return a.spliceWithArray_(t);case 2:return a.spliceWithArray_(t,n)}return a.spliceWithArray_(t,n,i)},spliceWithArray:function(t,n,r){return this[H].spliceWithArray_(t,n,r)},push:function(){for(var t=this[H],n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.spliceWithArray_(t.values_.length,0,r),t.values_.length},pop:function(){return this.splice(Math.max(this[H].values_.length-1,0),1)[0]},shift:function(){return this.splice(0,1)[0]},unshift:function(){for(var t=this[H],n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.spliceWithArray_(0,0,r),t.values_.length},reverse:function(){return N.trackingDerivation&&te(37,"reverse"),this.replace(this.slice().reverse()),this},sort:function(){N.trackingDerivation&&te(37,"sort");var t=this.slice();return t.sort.apply(t,arguments),this.replace(t),this},remove:function(t){var n=this[H],r=n.dehanceValues_(n.values_).indexOf(t);return r>-1?(this.splice(r,1),!0):!1}};Te("concat",Rn);Te("flat",Rn);Te("includes",Rn);Te("indexOf",Rn);Te("join",Rn);Te("lastIndexOf",Rn);Te("slice",Rn);Te("toString",Rn);Te("toLocaleString",Rn);Te("every",rr);Te("filter",rr);Te("find",rr);Te("findIndex",rr);Te("flatMap",rr);Te("forEach",rr);Te("map",rr);Te("some",rr);Te("reduce",By);Te("reduceRight",By);function Te(e,t){typeof Array.prototype[e]=="function"&&(nl[e]=t(e))}function Rn(e){return function(){var t=this[H];t.atom_.reportObserved();var n=t.dehanceValues_(t.values_);return n[e].apply(n,arguments)}}function rr(e){return function(t,n){var r=this,i=this[H];i.atom_.reportObserved();var o=i.dehanceValues_(i.values_);return o[e](function(a,s){return t.call(n,a,s,r)})}}function By(e){return function(){var t=this,n=this[H];n.atom_.reportObserved();var r=n.dehanceValues_(n.values_),i=arguments[0];return arguments[0]=function(o,a,s){return i(o,a,s,t)},r[e].apply(r,arguments)}}var vE=Dr("ObservableArrayAdministration",yf);function Ll(e){return Ol(e)&&vE(e[H])}var Uy,Vy,yE={},Un="add",rl="delete";Uy=Symbol.iterator;Vy=Symbol.toStringTag;var Hy=function(){function e(n,r,i){var o=this;r===void 0&&(r=Oi),i===void 0&&(i="ObservableMap"),this.enhancer_=void 0,this.name_=void 0,this[H]=yE,this.data_=void 0,this.hasMap_=void 0,this.keysAtom_=void 0,this.interceptors_=void 0,this.changeListeners_=void 0,this.dehancer=void 0,this.enhancer_=r,this.name_=i,Wt(Map)||te(18),this.keysAtom_=ly("ObservableMap.keys()"),this.data_=new Map,this.hasMap_=new Map,Lb(!0,function(){o.merge(n)})}var t=e.prototype;return t.has_=function(r){return this.data_.has(r)},t.has=function(r){var i=this;if(!N.trackingDerivation)return this.has_(r);var o=this.hasMap_.get(r);if(!o){var a=o=new hi(this.has_(r),Pl,"ObservableMap.key?",!1);this.hasMap_.set(r,a),Ly(a,function(){return i.hasMap_.delete(r)})}return o.get()},t.set=function(r,i){var o=this.has_(r);if(St(this)){var a=bt(this,{type:o?on:Un,object:this,newValue:i,name:r});if(!a)return this;i=a.newValue}return o?this.updateValue_(r,i):this.addValue_(r,i),this},t.delete=function(r){var i=this;if(this.keysAtom_,St(this)){var o=bt(this,{type:rl,object:this,name:r});if(!o)return!1}if(this.has_(r)){var a=Ro(),s=Ut(this),l=s||a?{observableKind:"map",debugObjectName:this.name_,type:rl,object:this,oldValue:this.data_.get(r).value_,name:r}:null;return hn(function(){var u;i.keysAtom_.reportChanged(),(u=i.hasMap_.get(r))==null||u.setNewValue_(!1);var d=i.data_.get(r);d.setNewValue_(void 0),i.data_.delete(r)}),s&&Vt(this,l),!0}return!1},t.updateValue_=function(r,i){var o=this.data_.get(r);if(i=o.prepareNewValue_(i),i!==N.UNCHANGED){var a=Ro(),s=Ut(this),l=s||a?{observableKind:"map",debugObjectName:this.name_,type:on,object:this,oldValue:o.value_,name:r,newValue:i}:null;o.setNewValue_(i),s&&Vt(this,l)}},t.addValue_=function(r,i){var o=this;this.keysAtom_,hn(function(){var u,d=new hi(i,o.enhancer_,"ObservableMap.key",!1);o.data_.set(r,d),i=d.value_,(u=o.hasMap_.get(r))==null||u.setNewValue_(!0),o.keysAtom_.reportChanged()});var a=Ro(),s=Ut(this),l=s||a?{observableKind:"map",debugObjectName:this.name_,type:Un,object:this,name:r,newValue:i}:null;s&&Vt(this,l)},t.get=function(r){return this.has(r)?this.dehanceValue_(this.data_.get(r).get()):this.dehanceValue_(void 0)},t.dehanceValue_=function(r){return this.dehancer!==void 0?this.dehancer(r):r},t.keys=function(){return this.keysAtom_.reportObserved(),this.data_.keys()},t.values=function(){var r=this,i=this.keys();return Zo({next:function(){var a=i.next(),s=a.done,l=a.value;return{done:s,value:s?void 0:r.get(l)}}})},t.entries=function(){var r=this,i=this.keys();return Zo({next:function(){var a=i.next(),s=a.done,l=a.value;return{done:s,value:s?void 0:[l,r.get(l)]}}})},t[Uy]=function(){return this.entries()},t.forEach=function(r,i){for(var o=oi(this),a;!(a=o()).done;){var s=a.value,l=s[0],u=s[1];r.call(i,u,l,this)}},t.merge=function(r){var i=this;return Lr(r)&&(r=new Map(r)),hn(function(){kn(r)?US(r).forEach(function(o){return i.set(o,r[o])}):Array.isArray(r)?r.forEach(function(o){var a=o[0],s=o[1];return i.set(a,s)}):Vi(r)?(r.constructor!==Map&&te(19,r),r.forEach(function(o,a){return i.set(a,o)})):r!=null&&te(20,r)}),this},t.clear=function(){var r=this;hn(function(){Sy(function(){for(var i=oi(r.keys()),o;!(o=i()).done;){var a=o.value;r.delete(a)}})})},t.replace=function(r){var i=this;return hn(function(){for(var o=xE(r),a=new Map,s=!1,l=oi(i.data_.keys()),u;!(u=l()).done;){var d=u.value;if(!o.has(d)){var f=i.delete(d);if(f)s=!0;else{var m=i.data_.get(d);a.set(d,m)}}}for(var x=oi(o.entries()),y;!(y=x()).done;){var w=y.value,j=w[0],g=w[1],p=i.data_.has(j);if(i.set(j,g),i.data_.has(j)){var v=i.data_.get(j);a.set(j,v),p||(s=!0)}}if(!s)if(i.data_.size!==a.size)i.keysAtom_.reportChanged();else for(var h=i.data_.keys(),b=a.keys(),R=h.next(),C=b.next();!R.done;){if(R.value!==C.value){i.keysAtom_.reportChanged();break}R=h.next(),C=b.next()}i.data_=a}),this},t.toString=function(){return"[object ObservableMap]"},t.toJSON=function(){return Array.from(this)},t.observe_=function(r,i){return ma(this,r)},t.intercept_=function(r){return ha(this,r)},pf(e,[{key:"size",get:function(){return this.keysAtom_.reportObserved(),this.data_.size}},{key:Vy,get:function(){return"Map"}}]),e}(),Lr=Dr("ObservableMap",Hy);function xE(e){if(Vi(e)||Lr(e))return e;if(Array.isArray(e))return new Map(e);if(kn(e)){var t=new Map;for(var n in e)t.set(n,e[n]);return t}else return te(21,e)}var Wy,Ky,wE={};Wy=Symbol.iterator;Ky=Symbol.toStringTag;var Gy=function(){function e(n,r,i){r===void 0&&(r=Oi),i===void 0&&(i="ObservableSet"),this.name_=void 0,this[H]=wE,this.data_=new Set,this.atom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.dehancer=void 0,this.enhancer_=void 0,this.name_=i,Wt(Set)||te(22),this.atom_=ly(this.name_),this.enhancer_=function(o,a){return r(o,a,i)},n&&this.replace(n)}var t=e.prototype;return t.dehanceValue_=function(r){return this.dehancer!==void 0?this.dehancer(r):r},t.clear=function(){var r=this;hn(function(){Sy(function(){for(var i=oi(r.data_.values()),o;!(o=i()).done;){var a=o.value;r.delete(a)}})})},t.forEach=function(r,i){for(var o=oi(this),a;!(a=o()).done;){var s=a.value;r.call(i,s,s,this)}},t.add=function(r){var i=this;if(this.atom_,St(this)){var o=bt(this,{type:Un,object:this,newValue:r});if(!o)return this}if(!this.has(r)){hn(function(){i.data_.add(i.enhancer_(r,void 0)),i.atom_.reportChanged()});var a=!1,s=Ut(this),l=s||a?{observableKind:"set",debugObjectName:this.name_,type:Un,object:this,newValue:r}:null;s&&Vt(this,l)}return this},t.delete=function(r){var i=this;if(St(this)){var o=bt(this,{type:rl,object:this,oldValue:r});if(!o)return!1}if(this.has(r)){var a=!1,s=Ut(this),l=s||a?{observableKind:"set",debugObjectName:this.name_,type:rl,object:this,oldValue:r}:null;return hn(function(){i.atom_.reportChanged(),i.data_.delete(r)}),s&&Vt(this,l),!0}return!1},t.has=function(r){return this.atom_.reportObserved(),this.data_.has(this.dehanceValue_(r))},t.entries=function(){var r=0,i=Array.from(this.keys()),o=Array.from(this.values());return Zo({next:function(){var s=r;return r+=1,s<o.length?{value:[i[s],o[s]],done:!1}:{done:!0}}})},t.keys=function(){return this.values()},t.values=function(){this.atom_.reportObserved();var r=this,i=0,o=Array.from(this.data_.values());return Zo({next:function(){return i<o.length?{value:r.dehanceValue_(o[i++]),done:!1}:{done:!0}}})},t.replace=function(r){var i=this;return Wi(r)&&(r=new Set(r)),hn(function(){Array.isArray(r)?(i.clear(),r.forEach(function(o){return i.add(o)})):la(r)?(i.clear(),r.forEach(function(o){return i.add(o)})):r!=null&&te("Cannot initialize set from "+r)}),this},t.observe_=function(r,i){return ma(this,r)},t.intercept_=function(r){return ha(this,r)},t.toJSON=function(){return Array.from(this)},t.toString=function(){return"[object ObservableSet]"},t[Wy]=function(){return this.values()},pf(e,[{key:"size",get:function(){return this.atom_.reportObserved(),this.data_.size}},{key:Ky,get:function(){return"Set"}}]),e}(),Wi=Dr("ObservableSet",Gy),Fh=Object.create(null),Ih="remove",qy=function(){function e(n,r,i,o){r===void 0&&(r=new Map),o===void 0&&(o=mb),this.target_=void 0,this.values_=void 0,this.name_=void 0,this.defaultAnnotation_=void 0,this.keysAtom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.proxy_=void 0,this.isPlainObject_=void 0,this.appliedAnnotations_=void 0,this.pendingKeys_=void 0,this.target_=n,this.values_=r,this.name_=i,this.defaultAnnotation_=o,this.keysAtom_=new ca("ObservableObject.keys"),this.isPlainObject_=kn(this.target_)}var t=e.prototype;return t.getObservablePropValue_=function(r){return this.values_.get(r).get()},t.setObservablePropValue_=function(r,i){var o=this.values_.get(r);if(o instanceof Qo)return o.set(i),!0;if(St(this)){var a=bt(this,{type:on,object:this.proxy_||this.target_,name:r,newValue:i});if(!a)return null;i=a.newValue}if(i=o.prepareNewValue_(i),i!==N.UNCHANGED){var s=Ut(this),l=!1,u=s||l?{type:on,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,oldValue:o.value_,name:r,newValue:i}:null;o.setNewValue_(i),s&&Vt(this,u)}return!0},t.get_=function(r){return N.trackingDerivation&&!xn(this.target_,r)&&this.has_(r),this.target_[r]},t.set_=function(r,i,o){return o===void 0&&(o=!1),xn(this.target_,r)?this.values_.has(r)?this.setObservablePropValue_(r,i):o?Reflect.set(this.target_,r,i):(this.target_[r]=i,!0):this.extend_(r,{value:i,enumerable:!0,writable:!0,configurable:!0},this.defaultAnnotation_,o)},t.has_=function(r){if(!N.trackingDerivation)return r in this.target_;this.pendingKeys_||(this.pendingKeys_=new Map);var i=this.pendingKeys_.get(r);return i||(i=new hi(r in this.target_,Pl,"ObservableObject.key?",!1),this.pendingKeys_.set(r,i)),i.get()},t.make_=function(r,i){if(i===!0&&(i=this.defaultAnnotation_),i!==!1){if(!(r in this.target_)){var o;if((o=this.target_[Zt])!=null&&o[r])return;te(1,i.annotationType_,this.name_+"."+r.toString())}for(var a=this.target_;a&&a!==Rl;){var s=qs(a,r);if(s){var l=i.make_(this,r,s,a);if(l===0)return;if(l===1)break}a=Object.getPrototypeOf(a)}Bh(this,i,r)}},t.extend_=function(r,i,o,a){if(a===void 0&&(a=!1),o===!0&&(o=this.defaultAnnotation_),o===!1)return this.defineProperty_(r,i,a);var s=o.extend_(this,r,i,a);return s&&Bh(this,o,r),s},t.defineProperty_=function(r,i,o){o===void 0&&(o=!1);try{ot();var a=this.delete_(r);if(!a)return a;if(St(this)){var s=bt(this,{object:this.proxy_||this.target_,name:r,type:Un,newValue:i.value});if(!s)return null;var l=s.newValue;i.value!==l&&(i=Ri({},i,{value:l}))}if(o){if(!Reflect.defineProperty(this.target_,r,i))return!1}else nn(this.target_,r,i);this.notifyPropertyAddition_(r,i.value)}finally{at()}return!0},t.defineObservableProperty_=function(r,i,o,a){a===void 0&&(a=!1);try{ot();var s=this.delete_(r);if(!s)return s;if(St(this)){var l=bt(this,{object:this.proxy_||this.target_,name:r,type:Un,newValue:i});if(!l)return null;i=l.newValue}var u=Mh(r),d={configurable:N.safeDescriptors?this.isPlainObject_:!0,enumerable:!0,get:u.get,set:u.set};if(a){if(!Reflect.defineProperty(this.target_,r,d))return!1}else nn(this.target_,r,d);var f=new hi(i,o,"ObservableObject.key",!1);this.values_.set(r,f),this.notifyPropertyAddition_(r,f.value_)}finally{at()}return!0},t.defineComputedProperty_=function(r,i,o){o===void 0&&(o=!1);try{ot();var a=this.delete_(r);if(!a)return a;if(St(this)){var s=bt(this,{object:this.proxy_||this.target_,name:r,type:Un,newValue:void 0});if(!s)return null}i.name||(i.name="ObservableObject.key"),i.context=this.proxy_||this.target_;var l=Mh(r),u={configurable:N.safeDescriptors?this.isPlainObject_:!0,enumerable:!1,get:l.get,set:l.set};if(o){if(!Reflect.defineProperty(this.target_,r,u))return!1}else nn(this.target_,r,u);this.values_.set(r,new Qo(i)),this.notifyPropertyAddition_(r,void 0)}finally{at()}return!0},t.delete_=function(r,i){if(i===void 0&&(i=!1),!xn(this.target_,r))return!0;if(St(this)){var o=bt(this,{object:this.proxy_||this.target_,name:r,type:Ih});if(!o)return null}try{var a,s;ot();var l=Ut(this),u=!1,d=this.values_.get(r),f=void 0;if(!d&&(l||u)){var m;f=(m=qs(this.target_,r))==null?void 0:m.value}if(i){if(!Reflect.deleteProperty(this.target_,r))return!1}else delete this.target_[r];if(d&&(this.values_.delete(r),d instanceof hi&&(f=d.value_),jy(d)),this.keysAtom_.reportChanged(),(a=this.pendingKeys_)==null||(s=a.get(r))==null||s.set(r in this.target_),l||u){var x={type:Ih,observableKind:"object",object:this.proxy_||this.target_,debugObjectName:this.name_,oldValue:f,name:r};l&&Vt(this,x)}}finally{at()}return!0},t.observe_=function(r,i){return ma(this,r)},t.intercept_=function(r){return ha(this,r)},t.notifyPropertyAddition_=function(r,i){var o,a,s=Ut(this),l=!1;if(s||l){var u=s||l?{type:Un,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,name:r,newValue:i}:null;s&&Vt(this,u)}(o=this.pendingKeys_)==null||(a=o.get(r))==null||a.set(!0),this.keysAtom_.reportChanged()},t.ownKeys_=function(){return this.keysAtom_.reportObserved(),ji(this.target_)},t.keys_=function(){return this.keysAtom_.reportObserved(),Object.keys(this.target_)},e}();function va(e,t){var n;if(xn(e,H))return e;var r=(n=t==null?void 0:t.name)!=null?n:"ObservableObject",i=new qy(e,new Map,String(r),kb(t));return sa(e,H,i),e}var _E=Dr("ObservableObjectAdministration",qy);function Mh(e){return Fh[e]||(Fh[e]={get:function(){return this[H].getObservablePropValue_(e)},set:function(n){return this[H].setObservablePropValue_(e,n)}})}function Jo(e){return Ol(e)?_E(e[H]):!1}function Bh(e,t,n){var r;(r=e.target_[Zt])==null||delete r[n]}var SE=Yy(0),Pu=0,Qy=function(){};function bE(e,t){Object.setPrototypeOf?Object.setPrototypeOf(e.prototype,t):e.prototype.__proto__!==void 0?e.prototype.__proto__=t:e.prototype=t}bE(Qy,Array.prototype);var xf=function(e,t,n){sy(r,e);function r(o,a,s,l){var u;s===void 0&&(s="ObservableArray"),l===void 0&&(l=!1),u=e.call(this)||this;var d=new yf(s,a,l,!0);if(d.proxy_=Ru(u),iy(Ru(u),H,d),o&&o.length){var f=fa(!0);u.spliceWithArray(0,0,o),pa(f)}return Object.defineProperty(Ru(u),"0",SE),u}var i=r.prototype;return i.concat=function(){this[H].atom_.reportObserved();for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return Array.prototype.concat.apply(this.slice(),s.map(function(u){return Ll(u)?u.slice():u}))},i[n]=function(){var o=this,a=0;return Zo({next:function(){return a<o.length?{value:o[a++],done:!1}:{done:!0,value:void 0}}})},pf(r,[{key:"length",get:function(){return this[H].getArrayLength_()},set:function(a){this[H].setArrayLength_(a)}},{key:t,get:function(){return"Array"}}]),r}(Qy,Symbol.toStringTag,Symbol.iterator);Object.entries(nl).forEach(function(e){var t=e[0],n=e[1];t!=="concat"&&sa(xf.prototype,t,n)});function Yy(e){return{enumerable:!1,configurable:!0,get:function(){return this[H].get_(e)},set:function(n){this[H].set_(e,n)}}}function EE(e){nn(xf.prototype,""+e,Yy(e))}function Xy(e){if(e>Pu){for(var t=Pu;t<e+100;t++)EE(t);Pu=e}}Xy(1e3);function kE(e,t,n){return new xf(e,t,n)}function Ni(e,t){if(typeof e=="object"&&e!==null){if(Ll(e))return t!==void 0&&te(23),e[H].atom_;if(Wi(e))return e.atom_;if(Lr(e)){if(t===void 0)return e.keysAtom_;var n=e.data_.get(t)||e.hasMap_.get(t);return n||te(25,t,ed(e)),n}if(Jo(e)){if(!t)return te(26);var r=e[H].values_.get(t);return r||te(27,t,ed(e)),r}if(hf(e)||Dl(e)||el(e))return e}else if(Wt(e)&&el(e[H]))return e[H];te(28)}function Jy(e,t){if(e||te(29),t!==void 0)return Jy(Ni(e,t));if(hf(e)||Dl(e)||el(e)||Lr(e)||Wi(e))return e;if(e[H])return e[H];te(24,e)}function ed(e,t){var n;if(t!==void 0)n=Ni(e,t);else{if(vf(e))return e.name;Jo(e)||Lr(e)||Wi(e)?n=Jy(e):n=Ni(e)}return n.name_}var Uh=Rl.toString;function wf(e,t,n){return n===void 0&&(n=-1),td(e,t,n)}function td(e,t,n,r,i){if(e===t)return e!==0||1/e===1/t;if(e==null||t==null)return!1;if(e!==e)return t!==t;var o=typeof e;if(o!=="function"&&o!=="object"&&typeof t!="object")return!1;var a=Uh.call(e);if(a!==Uh.call(t))return!1;switch(a){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!=+e?+t!=+t:+e==0?1/+e===1/t:+e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object Symbol]":return typeof Symbol<"u"&&Symbol.valueOf.call(e)===Symbol.valueOf.call(t);case"[object Map]":case"[object Set]":n>=0&&n++;break}e=Vh(e),t=Vh(t);var s=a==="[object Array]";if(!s){if(typeof e!="object"||typeof t!="object")return!1;var l=e.constructor,u=t.constructor;if(l!==u&&!(Wt(l)&&l instanceof l&&Wt(u)&&u instanceof u)&&"constructor"in e&&"constructor"in t)return!1}if(n===0)return!1;n<0&&(n=-1),r=r||[],i=i||[];for(var d=r.length;d--;)if(r[d]===e)return i[d]===t;if(r.push(e),i.push(t),s){if(d=e.length,d!==t.length)return!1;for(;d--;)if(!td(e[d],t[d],n-1,r,i))return!1}else{var f=Object.keys(e),m;if(d=f.length,Object.keys(t).length!==d)return!1;for(;d--;)if(m=f[d],!(xn(t,m)&&td(e[m],t[m],n-1,r,i)))return!1}return r.pop(),i.pop(),!0}function Vh(e){return Ll(e)?e.slice():Vi(e)||Lr(e)||la(e)||Wi(e)?Array.from(e.entries()):e}function Zo(e){return e[Symbol.iterator]=CE,e}function CE(){return this}["Symbol","Map","Set"].forEach(function(e){var t=ff();typeof t[e]>"u"&&te("MobX requires global '"+e+"' to be available or polyfilled")});typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__=="object"&&__MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({spy:Wb,extras:{getDebugName:ed},$mobx:H});if(!S.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!pE)throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");function AE(e){e()}function jE(e){e||(e=AE),oE({reactionScheduler:e})}function RE(e){return aE(e)}var OE=1e4,PE=1e4,NE=function(){function e(t){var n=this;Object.defineProperty(this,"finalize",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"registrations",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"sweepTimeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sweep",{enumerable:!0,configurable:!0,writable:!0,value:function(r){r===void 0&&(r=OE),clearTimeout(n.sweepTimeout),n.sweepTimeout=void 0;var i=Date.now();n.registrations.forEach(function(o,a){i-o.registeredAt>=r&&(n.finalize(o.value),n.registrations.delete(a))}),n.registrations.size>0&&n.scheduleSweep()}}),Object.defineProperty(this,"finalizeAllImmediately",{enumerable:!0,configurable:!0,writable:!0,value:function(){n.sweep(0)}})}return Object.defineProperty(e.prototype,"register",{enumerable:!1,configurable:!0,writable:!0,value:function(t,n,r){this.registrations.set(r,{value:n,registeredAt:Date.now()}),this.scheduleSweep()}}),Object.defineProperty(e.prototype,"unregister",{enumerable:!1,configurable:!0,writable:!0,value:function(t){this.registrations.delete(t)}}),Object.defineProperty(e.prototype,"scheduleSweep",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.sweepTimeout===void 0&&(this.sweepTimeout=setTimeout(this.sweep,PE))}}),e}(),TE=typeof FinalizationRegistry<"u"?FinalizationRegistry:NE,nd=new TE(function(e){var t;(t=e.reaction)===null||t===void 0||t.dispose(),e.reaction=null}),Zy={exports:{}},e0={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ti=S;function DE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var LE=typeof Object.is=="function"?Object.is:DE,$E=Ti.useState,zE=Ti.useEffect,FE=Ti.useLayoutEffect,IE=Ti.useDebugValue;function ME(e,t){var n=t(),r=$E({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return FE(function(){i.value=n,i.getSnapshot=t,Nu(i)&&o({inst:i})},[e,n,t]),zE(function(){return Nu(i)&&o({inst:i}),e(function(){Nu(i)&&o({inst:i})})},[e]),IE(n),n}function Nu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!LE(e,n)}catch{return!0}}function BE(e,t){return t()}var UE=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?BE:ME;e0.useSyncExternalStore=Ti.useSyncExternalStore!==void 0?Ti.useSyncExternalStore:UE;Zy.exports=e0;var VE=Zy.exports,HE=globalThis&&globalThis.__read||function(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,o=[],a;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(s){a={error:s}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return o},WE=function(){},t0=Fb(),n0=typeof t0.stateVersion<"u";function Hh(e){e.reaction=new Zs("observer".concat(e.name),function(){var t;n0||(e.stateVersion=Symbol()),(t=e.onStoreChange)===null||t===void 0||t.call(e)})}function KE(e,t){t===void 0&&(t="observed");var n=Ft.useRef(null),r=HE(Ft.useState(),2),i=r[1];if(!n.current){var o={reaction:null,onStoreChange:null,stateVersion:Symbol(),name:t,subscribe:function(u){return nd.unregister(o),o.onStoreChange=u,o.reaction||(Hh(o),i(Symbol())),function(){var d;o.onStoreChange=null,(d=o.reaction)===null||d===void 0||d.dispose(),o.reaction=null}},getSnapshot:function(){return n0?t0.stateVersion:o.stateVersion}};n.current=o}var a=n.current;a.reaction||(Hh(a),nd.register(n,a,a)),Ft.useDebugValue(a.reaction,RE),VE.useSyncExternalStore(a.subscribe,a.getSnapshot,WE);var s,l;if(a.reaction.track(function(){try{s=e()}catch(u){l=u}}),l)throw l;return s}var r0=typeof Symbol=="function"&&Symbol.for,Wh=r0?Symbol.for("react.forward_ref"):typeof S.forwardRef=="function"&&S.forwardRef(function(e){return null}).$$typeof,Kh=r0?Symbol.for("react.memo"):typeof S.memo=="function"&&S.memo(function(e){return null}).$$typeof;function gt(e,t){var n;if(Kh&&e.$$typeof===Kh)throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");var r=(n=t==null?void 0:t.forwardRef)!==null&&n!==void 0?n:!1,i=e,o=e.displayName||e.name;if(Wh&&e.$$typeof===Wh&&(r=!0,i=e.render,typeof i!="function"))throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var a=function(s,l){return KE(function(){return i(s,l)},o)};return a.displayName=e.displayName,Object.defineProperty(a,"name",{value:e.name,writable:!0,configurable:!0}),e.contextTypes&&(a.contextTypes=e.contextTypes),r&&(a=S.forwardRef(a)),a=S.memo(a),qE(e,a),a}var GE={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};function qE(e,t){Object.keys(e).forEach(function(n){GE[n]||Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}globalThis&&globalThis.__read;var Tu;jE(xv.unstable_batchedUpdates);Tu=nd.finalizeAllImmediately;const QE=k.div`
  margin-bottom: 100px;

  @media screen and (max-width: 1169px) {
    width: 100%;

    margin-bottom: 46px;
  }

  @media screen and (max-width: 680px) {
    margin-bottom: 46px;
  }
`,YE=k.div`
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
`,XE=k.div`
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
`,JE=k.div`
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
`,ZE=k.div`
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
`,ek=k.div`
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
`;function Du(e){return e.color?c.jsx(XE,{bgcolor:e.bgcolor,color:e.color,children:e.children}):c.jsxs(JE,{percentage:e.percentage,children:[c.jsx(ZE,{children:"До перехода в новый статус осталось"}),c.jsxs(ek,{children:[e.percentage,"%",c.jsxs("span",{children:[" (",e.point," KZT)"]})]})]})}class tk{constructor(){ee(this,"current");ee(this,"next");ga(this)}setCurrent(t){this.current=t}setNext(t){this.next=t}}const ur=new tk;function i0(e,t){return function(){return e.apply(t,arguments)}}const{toString:nk}=Object.prototype,{getPrototypeOf:_f}=Object,$l=(e=>t=>{const n=nk.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),sn=e=>(e=e.toLowerCase(),t=>$l(t)===e),zl=e=>t=>typeof t===e,{isArray:Ki}=Array,ea=zl("undefined");function rk(e){return e!==null&&!ea(e)&&e.constructor!==null&&!ea(e.constructor)&&Ct(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const o0=sn("ArrayBuffer");function ik(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&o0(e.buffer),t}const ok=zl("string"),Ct=zl("function"),a0=zl("number"),Fl=e=>e!==null&&typeof e=="object",ak=e=>e===!0||e===!1,ps=e=>{if($l(e)!=="object")return!1;const t=_f(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},sk=sn("Date"),lk=sn("File"),uk=sn("Blob"),ck=sn("FileList"),dk=e=>Fl(e)&&Ct(e.pipe),fk=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Ct(e.append)&&((t=$l(e))==="formdata"||t==="object"&&Ct(e.toString)&&e.toString()==="[object FormData]"))},pk=sn("URLSearchParams"),hk=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ya(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Ki(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let s;for(r=0;r<a;r++)s=o[r],t.call(null,e[s],s,e)}}function s0(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const l0=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),u0=e=>!ea(e)&&e!==l0;function rd(){const{caseless:e}=u0(this)&&this||{},t={},n=(r,i)=>{const o=e&&s0(t,i)||i;ps(t[o])&&ps(r)?t[o]=rd(t[o],r):ps(r)?t[o]=rd({},r):Ki(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&ya(arguments[r],n);return t}const mk=(e,t,n,{allOwnKeys:r}={})=>(ya(t,(i,o)=>{n&&Ct(i)?e[o]=i0(i,n):e[o]=i},{allOwnKeys:r}),e),gk=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),vk=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},yk=(e,t,n,r)=>{let i,o,a;const s={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)a=i[o],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&_f(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},xk=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},wk=e=>{if(!e)return null;if(Ki(e))return e;let t=e.length;if(!a0(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},_k=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&_f(Uint8Array)),Sk=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},bk=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ek=sn("HTMLFormElement"),kk=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Gh=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ck=sn("RegExp"),c0=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ya(n,(i,o)=>{let a;(a=t(i,o,e))!==!1&&(r[o]=a||i)}),Object.defineProperties(e,r)},Ak=e=>{c0(e,(t,n)=>{if(Ct(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Ct(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},jk=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Ki(e)?r(e):r(String(e).split(t)),n},Rk=()=>{},Ok=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Lu="abcdefghijklmnopqrstuvwxyz",qh="0123456789",d0={DIGIT:qh,ALPHA:Lu,ALPHA_DIGIT:Lu+Lu.toUpperCase()+qh},Pk=(e=16,t=d0.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Nk(e){return!!(e&&Ct(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Tk=e=>{const t=new Array(10),n=(r,i)=>{if(Fl(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Ki(r)?[]:{};return ya(r,(a,s)=>{const l=n(a,i+1);!ea(l)&&(o[s]=l)}),t[i]=void 0,o}}return r};return n(e,0)},Dk=sn("AsyncFunction"),Lk=e=>e&&(Fl(e)||Ct(e))&&Ct(e.then)&&Ct(e.catch),A={isArray:Ki,isArrayBuffer:o0,isBuffer:rk,isFormData:fk,isArrayBufferView:ik,isString:ok,isNumber:a0,isBoolean:ak,isObject:Fl,isPlainObject:ps,isUndefined:ea,isDate:sk,isFile:lk,isBlob:uk,isRegExp:Ck,isFunction:Ct,isStream:dk,isURLSearchParams:pk,isTypedArray:_k,isFileList:ck,forEach:ya,merge:rd,extend:mk,trim:hk,stripBOM:gk,inherits:vk,toFlatObject:yk,kindOf:$l,kindOfTest:sn,endsWith:xk,toArray:wk,forEachEntry:Sk,matchAll:bk,isHTMLForm:Ek,hasOwnProperty:Gh,hasOwnProp:Gh,reduceDescriptors:c0,freezeMethods:Ak,toObjectSet:jk,toCamelCase:kk,noop:Rk,toFiniteNumber:Ok,findKey:s0,global:l0,isContextDefined:u0,ALPHABET:d0,generateString:Pk,isSpecCompliantForm:Nk,toJSONObject:Tk,isAsyncFn:Dk,isThenable:Lk};function Y(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}A.inherits(Y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:A.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const f0=Y.prototype,p0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{p0[e]={value:e}});Object.defineProperties(Y,p0);Object.defineProperty(f0,"isAxiosError",{value:!0});Y.from=(e,t,n,r,i,o)=>{const a=Object.create(f0);return A.toFlatObject(e,a,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),Y.call(a,e.message,t,n,r,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};const $k=null;function id(e){return A.isPlainObject(e)||A.isArray(e)}function h0(e){return A.endsWith(e,"[]")?e.slice(0,-2):e}function Qh(e,t,n){return e?e.concat(t).map(function(i,o){return i=h0(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function zk(e){return A.isArray(e)&&!e.some(id)}const Fk=A.toFlatObject(A,{},null,function(t){return/^is[A-Z]/.test(t)});function Il(e,t,n){if(!A.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=A.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,j){return!A.isUndefined(j[w])});const r=n.metaTokens,i=n.visitor||d,o=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&A.isSpecCompliantForm(t);if(!A.isFunction(i))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(A.isDate(y))return y.toISOString();if(!l&&A.isBlob(y))throw new Y("Blob is not supported. Use a Buffer instead.");return A.isArrayBuffer(y)||A.isTypedArray(y)?l&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function d(y,w,j){let g=y;if(y&&!j&&typeof y=="object"){if(A.endsWith(w,"{}"))w=r?w:w.slice(0,-2),y=JSON.stringify(y);else if(A.isArray(y)&&zk(y)||(A.isFileList(y)||A.endsWith(w,"[]"))&&(g=A.toArray(y)))return w=h0(w),g.forEach(function(v,h){!(A.isUndefined(v)||v===null)&&t.append(a===!0?Qh([w],h,o):a===null?w:w+"[]",u(v))}),!1}return id(y)?!0:(t.append(Qh(j,w,o),u(y)),!1)}const f=[],m=Object.assign(Fk,{defaultVisitor:d,convertValue:u,isVisitable:id});function x(y,w){if(!A.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+w.join("."));f.push(y),A.forEach(y,function(g,p){(!(A.isUndefined(g)||g===null)&&i.call(t,g,A.isString(p)?p.trim():p,w,m))===!0&&x(g,w?w.concat(p):[p])}),f.pop()}}if(!A.isObject(e))throw new TypeError("data must be an object");return x(e),t}function Yh(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Sf(e,t){this._pairs=[],e&&Il(e,this,t)}const m0=Sf.prototype;m0.append=function(t,n){this._pairs.push([t,n])};m0.toString=function(t){const n=t?function(r){return t.call(this,r,Yh)}:Yh;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function Ik(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function g0(e,t,n){if(!t)return e;const r=n&&n.encode||Ik,i=n&&n.serialize;let o;if(i?o=i(t,n):o=A.isURLSearchParams(t)?t.toString():new Sf(t,n).toString(r),o){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Mk{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){A.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Xh=Mk,v0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Bk=typeof URLSearchParams<"u"?URLSearchParams:Sf,Uk=typeof FormData<"u"?FormData:null,Vk=typeof Blob<"u"?Blob:null,Hk=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Wk=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),zt={isBrowser:!0,classes:{URLSearchParams:Bk,FormData:Uk,Blob:Vk},isStandardBrowserEnv:Hk,isStandardBrowserWebWorkerEnv:Wk,protocols:["http","https","file","blob","url","data"]};function Kk(e,t){return Il(e,new zt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return zt.isNode&&A.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Gk(e){return A.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function qk(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function y0(e){function t(n,r,i,o){let a=n[o++];const s=Number.isFinite(+a),l=o>=n.length;return a=!a&&A.isArray(i)?i.length:a,l?(A.hasOwnProp(i,a)?i[a]=[i[a],r]:i[a]=r,!s):((!i[a]||!A.isObject(i[a]))&&(i[a]=[]),t(n,r,i[a],o)&&A.isArray(i[a])&&(i[a]=qk(i[a])),!s)}if(A.isFormData(e)&&A.isFunction(e.entries)){const n={};return A.forEachEntry(e,(r,i)=>{t(Gk(r),i,n,0)}),n}return null}function Qk(e,t,n){if(A.isString(e))try{return(t||JSON.parse)(e),A.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const bf={transitional:v0,adapter:zt.isNode?"http":"xhr",transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=A.isObject(t);if(o&&A.isHTMLForm(t)&&(t=new FormData(t)),A.isFormData(t))return i&&i?JSON.stringify(y0(t)):t;if(A.isArrayBuffer(t)||A.isBuffer(t)||A.isStream(t)||A.isFile(t)||A.isBlob(t))return t;if(A.isArrayBufferView(t))return t.buffer;if(A.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Kk(t,this.formSerializer).toString();if((s=A.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Il(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),Qk(t)):t}],transformResponse:[function(t){const n=this.transitional||bf.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&A.isString(t)&&(r&&!this.responseType||i)){const a=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?Y.from(s,Y.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:zt.classes.FormData,Blob:zt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};A.forEach(["delete","get","head","post","put","patch"],e=>{bf.headers[e]={}});const Ef=bf,Yk=A.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Xk=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(a){i=a.indexOf(":"),n=a.substring(0,i).trim().toLowerCase(),r=a.substring(i+1).trim(),!(!n||t[n]&&Yk[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Jh=Symbol("internals");function co(e){return e&&String(e).trim().toLowerCase()}function hs(e){return e===!1||e==null?e:A.isArray(e)?e.map(hs):String(e)}function Jk(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Zk=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function $u(e,t,n,r,i){if(A.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!A.isString(t)){if(A.isString(r))return t.indexOf(r)!==-1;if(A.isRegExp(r))return r.test(t)}}function eC(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function tC(e,t){const n=A.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,a){return this[r].call(this,t,i,o,a)},configurable:!0})})}class Ml{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(s,l,u){const d=co(l);if(!d)throw new Error("header name must be a non-empty string");const f=A.findKey(i,d);(!f||i[f]===void 0||u===!0||u===void 0&&i[f]!==!1)&&(i[f||l]=hs(s))}const a=(s,l)=>A.forEach(s,(u,d)=>o(u,d,l));return A.isPlainObject(t)||t instanceof this.constructor?a(t,n):A.isString(t)&&(t=t.trim())&&!Zk(t)?a(Xk(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=co(t),t){const r=A.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return Jk(i);if(A.isFunction(n))return n.call(this,i,r);if(A.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=co(t),t){const r=A.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||$u(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(a){if(a=co(a),a){const s=A.findKey(r,a);s&&(!n||$u(r,r[s],s,n))&&(delete r[s],i=!0)}}return A.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||$u(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return A.forEach(this,(i,o)=>{const a=A.findKey(r,o);if(a){n[a]=hs(i),delete n[o];return}const s=t?eC(o):String(o).trim();s!==o&&delete n[o],n[s]=hs(i),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return A.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&A.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Jh]=this[Jh]={accessors:{}}).accessors,i=this.prototype;function o(a){const s=co(a);r[s]||(tC(i,a),r[s]=!0)}return A.isArray(t)?t.forEach(o):o(t),this}}Ml.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);A.reduceDescriptors(Ml.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});A.freezeMethods(Ml);const wn=Ml;function zu(e,t){const n=this||Ef,r=t||n,i=wn.from(r.headers);let o=r.data;return A.forEach(e,function(s){o=s.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function x0(e){return!!(e&&e.__CANCEL__)}function xa(e,t,n){Y.call(this,e??"canceled",Y.ERR_CANCELED,t,n),this.name="CanceledError"}A.inherits(xa,Y,{__CANCEL__:!0});function nC(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new Y("Request failed with status code "+n.status,[Y.ERR_BAD_REQUEST,Y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const rC=zt.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,a,s){const l=[];l.push(n+"="+encodeURIComponent(r)),A.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),A.isString(o)&&l.push("path="+o),A.isString(a)&&l.push("domain="+a),s===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function iC(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function oC(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function w0(e,t){return e&&!iC(t)?oC(e,t):t}const aC=zt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let a=o;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(a){const s=A.isString(a)?i(a):a;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function sC(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function lC(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,a;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),d=r[o];a||(a=u),n[i]=l,r[i]=u;let f=o,m=0;for(;f!==i;)m+=n[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-a<t)return;const x=d&&u-d;return x?Math.round(m*1e3/x):void 0}}function Zh(e,t){let n=0;const r=lC(50,250);return i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,s=o-n,l=r(s),u=o<=a;n=o;const d={loaded:o,total:a,progress:a?o/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:i};d[t?"download":"upload"]=!0,e(d)}}const uC=typeof XMLHttpRequest<"u",cC=uC&&function(e){return new Promise(function(n,r){let i=e.data;const o=wn.from(e.headers).normalize(),a=e.responseType;let s;function l(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}A.isFormData(i)&&(zt.isStandardBrowserEnv||zt.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(e.auth){const x=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(x+":"+y))}const d=w0(e.baseURL,e.url);u.open(e.method.toUpperCase(),g0(d,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function f(){if(!u)return;const x=wn.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),w={data:!a||a==="text"||a==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:x,config:e,request:u};nC(function(g){n(g),l()},function(g){r(g),l()},w),u=null}if("onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(f)},u.onabort=function(){u&&(r(new Y("Request aborted",Y.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new Y("Network Error",Y.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let y=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||v0;e.timeoutErrorMessage&&(y=e.timeoutErrorMessage),r(new Y(y,w.clarifyTimeoutError?Y.ETIMEDOUT:Y.ECONNABORTED,e,u)),u=null},zt.isStandardBrowserEnv){const x=(e.withCredentials||aC(d))&&e.xsrfCookieName&&rC.read(e.xsrfCookieName);x&&o.set(e.xsrfHeaderName,x)}i===void 0&&o.setContentType(null),"setRequestHeader"in u&&A.forEach(o.toJSON(),function(y,w){u.setRequestHeader(w,y)}),A.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Zh(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Zh(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=x=>{u&&(r(!x||x.type?new xa(null,e,u):x),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const m=sC(d);if(m&&zt.protocols.indexOf(m)===-1){r(new Y("Unsupported protocol "+m+":",Y.ERR_BAD_REQUEST,e));return}u.send(i||null)})},ms={http:$k,xhr:cC};A.forEach(ms,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const _0={getAdapter:e=>{e=A.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=A.isString(n)?ms[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new Y(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(A.hasOwnProp(ms,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!A.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:ms};function Fu(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new xa(null,e)}function em(e){return Fu(e),e.headers=wn.from(e.headers),e.data=zu.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),_0.getAdapter(e.adapter||Ef.adapter)(e).then(function(r){return Fu(e),r.data=zu.call(e,e.transformResponse,r),r.headers=wn.from(r.headers),r},function(r){return x0(r)||(Fu(e),r&&r.response&&(r.response.data=zu.call(e,e.transformResponse,r.response),r.response.headers=wn.from(r.response.headers))),Promise.reject(r)})}const tm=e=>e instanceof wn?e.toJSON():e;function Di(e,t){t=t||{};const n={};function r(u,d,f){return A.isPlainObject(u)&&A.isPlainObject(d)?A.merge.call({caseless:f},u,d):A.isPlainObject(d)?A.merge({},d):A.isArray(d)?d.slice():d}function i(u,d,f){if(A.isUndefined(d)){if(!A.isUndefined(u))return r(void 0,u,f)}else return r(u,d,f)}function o(u,d){if(!A.isUndefined(d))return r(void 0,d)}function a(u,d){if(A.isUndefined(d)){if(!A.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function s(u,d,f){if(f in t)return r(u,d);if(f in e)return r(void 0,u)}const l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(u,d)=>i(tm(u),tm(d),!0)};return A.forEach(Object.keys(Object.assign({},e,t)),function(d){const f=l[d]||i,m=f(e[d],t[d],d);A.isUndefined(m)&&f!==s||(n[d]=m)}),n}const S0="1.5.0",kf={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{kf[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const nm={};kf.transitional=function(t,n,r){function i(o,a){return"[Axios v"+S0+"] Transitional option '"+o+"'"+a+(r?". "+r:"")}return(o,a,s)=>{if(t===!1)throw new Y(i(a," has been removed"+(n?" in "+n:"")),Y.ERR_DEPRECATED);return n&&!nm[a]&&(nm[a]=!0,console.warn(i(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,s):!0}};function dC(e,t,n){if(typeof e!="object")throw new Y("options must be an object",Y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],a=t[o];if(a){const s=e[o],l=s===void 0||a(s,o,e);if(l!==!0)throw new Y("option "+o+" must be "+l,Y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Y("Unknown option "+o,Y.ERR_BAD_OPTION)}}const od={assertOptions:dC,validators:kf},Tn=od.validators;class il{constructor(t){this.defaults=t,this.interceptors={request:new Xh,response:new Xh}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Di(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&od.assertOptions(r,{silentJSONParsing:Tn.transitional(Tn.boolean),forcedJSONParsing:Tn.transitional(Tn.boolean),clarifyTimeoutError:Tn.transitional(Tn.boolean)},!1),i!=null&&(A.isFunction(i)?n.paramsSerializer={serialize:i}:od.assertOptions(i,{encode:Tn.function,serialize:Tn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=o&&A.merge(o.common,o[n.method]);o&&A.forEach(["delete","get","head","post","put","patch","common"],y=>{delete o[y]}),n.headers=wn.concat(a,o);const s=[];let l=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(l=l&&w.synchronous,s.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let d,f=0,m;if(!l){const y=[em.bind(this),void 0];for(y.unshift.apply(y,s),y.push.apply(y,u),m=y.length,d=Promise.resolve(n);f<m;)d=d.then(y[f++],y[f++]);return d}m=s.length;let x=n;for(f=0;f<m;){const y=s[f++],w=s[f++];try{x=y(x)}catch(j){w.call(this,j);break}}try{d=em.call(this,x)}catch(y){return Promise.reject(y)}for(f=0,m=u.length;f<m;)d=d.then(u[f++],u[f++]);return d}getUri(t){t=Di(this.defaults,t);const n=w0(t.baseURL,t.url);return g0(n,t.params,t.paramsSerializer)}}A.forEach(["delete","get","head","options"],function(t){il.prototype[t]=function(n,r){return this.request(Di(r||{},{method:t,url:n,data:(r||{}).data}))}});A.forEach(["post","put","patch"],function(t){function n(r){return function(o,a,s){return this.request(Di(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}il.prototype[t]=n(),il.prototype[t+"Form"]=n(!0)});const gs=il;class Cf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const a=new Promise(s=>{r.subscribe(s),o=s}).then(i);return a.cancel=function(){r.unsubscribe(o)},a},t(function(o,a,s){r.reason||(r.reason=new xa(o,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Cf(function(i){t=i}),cancel:t}}}const fC=Cf;function pC(e){return function(n){return e.apply(null,n)}}function hC(e){return A.isObject(e)&&e.isAxiosError===!0}const ad={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ad).forEach(([e,t])=>{ad[t]=e});const mC=ad;function b0(e){const t=new gs(e),n=i0(gs.prototype.request,t);return A.extend(n,gs.prototype,t,{allOwnKeys:!0}),A.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return b0(Di(e,i))},n}const je=b0(Ef);je.Axios=gs;je.CanceledError=xa;je.CancelToken=fC;je.isCancel=x0;je.VERSION=S0;je.toFormData=Il;je.AxiosError=Y;je.Cancel=je.CanceledError;je.all=function(t){return Promise.all(t)};je.spread=pC;je.isAxiosError=hC;je.mergeConfig=Di;je.AxiosHeaders=wn;je.formToJSON=e=>y0(A.isHTMLForm(e)?new FormData(e):e);je.getAdapter=_0.getAdapter;je.HttpStatusCode=mC;je.default=je;const gC=je,fn=gC.create({headers:{"Access-Control-Allow-Credentials":!0},baseURL:"https://api.airsyst.kz/"});fn.interceptors.request.use(e=>(e.headers.Authorization=localStorage.getItem("token"),e));fn.interceptors.response.use(e=>e,e=>(e.response.status===401&&(localStorage.removeItem("token"),localStorage.removeItem("user"),location.reload()),e));class jr{static async login(t,n){return fn.post("/profile/login",{email:t,password:n},{headers:{"Content-Type":"application/json"}})}static async getUser(){return fn.get("/profile/my_info")}static async register(t,n){return fn.post("/profile/register",{email:t,password:n})}static async checkAuth(){return fn.get("/profile/check_auth")}static async changeUserData(t){return fn.patch("profile/my_info",{phone:t.phone,name:t.name,company_name:t.companyName,legal_address:t.legalAddress,physical_address:t.physicalAddress,address_match:!1,company_number:t.inn,is_agent:t.isAgent})}static async getStatus(){return fn.get("/profile/my_status")}static async getMessages(){return fn.get("profile/messages")}}const vC=gt(()=>{var r,i,o;const{next:e,current:t}=ur,n=async()=>{const a=(await jr.getStatus()).data;console.log(a),a.current.name=a.current.name.charAt(0).toUpperCase()+a.current.name.slice(1),a.next.name=a.next.name.charAt(0).toUpperCase()+a.next.name.slice(1),a.current.name==="SILVER"?(ur.setCurrent({name:a.current.name,percentage:a.current.percent,condition:void 0,labelColor:"#000000",labelBackgroundColor:"#F6F7FC",backgroundColor:"#FFFFFF"}),ur.setNext({name:a.next.name,percentage:a.next.percent,condition:{percentage:a.user_amount,point:a.next.amount},labelColor:"#868686",labelBackgroundColor:"#FBF6E9",backgroundColor:"#FFFFFF"})):(ur.setCurrent({name:a.current.name,percentage:a.current.percent,condition:void 0,labelColor:"#000000",labelBackgroundColor:"#FBF6E9",backgroundColor:"linear-gradient(114deg, #E9D8A6 0%, #E9DCB7 49.48%, #EAD9A7 100%)"}),ur.setNext({name:a.next.name,percentage:a.next.percent,condition:{percentage:a.user_amount,point:a.next.amount},labelColor:"#A19D9D",labelBackgroundColor:"#181816",backgroundColor:"#FFFFFF"}))};return S.useEffect(()=>{n()},[]),!(t!=null&&t.percentage)||!(e!=null&&e.percentage)||!((r=e.condition)!=null&&r.percentage)?c.jsx("div",{children:"...loading"}):c.jsxs(YE,{children:[c.jsx(Du,{color:t==null?void 0:t.labelColor,bgcolor:t==null?void 0:t.labelBackgroundColor,percentage:t==null?void 0:t.percentage,children:`Текущая скидка ${t==null?void 0:t.percentage}%`}),c.jsx(Du,{percentage:(i=e==null?void 0:e.condition)==null?void 0:i.percentage,point:(o=e==null?void 0:e.condition)==null?void 0:o.point}),c.jsxs(Du,{color:e==null?void 0:e.labelColor,bgcolor:e==null?void 0:e.labelBackgroundColor,percentage:e==null?void 0:e.percentage,children:[e==null?void 0:e.name,`(скидка ${e==null?void 0:e.percentage}%)`]})]})});class yC{constructor(){ee(this,"info",{isVisible:!1,text:"",link:"",buttonText:""});ee(this,"setInfo",t=>{this.info={...t}});ee(this,"setVisible",t=>{this.info={...this.info,isVisible:t}});ga(this)}}const wa=new yC,xC=k(jn)`
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
`;function Af({to:e,children:t,onClick:n}){return c.jsx(xC,{to:e,onClick:n,children:t})}const jf="/assets/cross-52362f94.svg",wC=k.div`
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
`,_C=k.div`
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
`,SC=k.div`
  max-width: 560px;
  color: ${e=>e.theme.colors.text};
  text-align: center;
  font-family: "Rubik";
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 130.5%;
`,bC=k(jn)`
  position: absolute;
  top: 7px;
  right: 7px;
  width: 22px;
  height: 22px;
  transform: rotate(90deg);
  background-image: url(${jf});
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
`,Rf=gt(()=>{const{info:e,setInfo:t}=wa,n=()=>{t({isVisible:!1,text:"",link:"",buttonText:""})};return S.useEffect(()=>{console.log(e)},[e]),c.jsx(wC,{$visible:e.isVisible,children:c.jsxs(_C,{children:[c.jsx(SC,{children:e.text}),c.jsx(Af,{to:`/cab${e.link}`,onClick:n,children:e.buttonText}),c.jsx(bC,{to:e.link,onClick:n})]})})}),EC=gt(({user:e})=>{const t=cf();return e!=null&&e.data||t("/form"),c.jsxs(QE,{children:[c.jsx(Rf,{}),c.jsx(vC,{}),c.jsx(Xv,{})]})}),kC="/assets/sight-a2bf1ff0.svg",CC=k.div`
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
    background-image: url(${kC});
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
`;function Rr({children:e,id:t,isChecked:n,onChange:r}){return c.jsxs(CC,{children:[c.jsx("input",{type:"checkbox",name:t,id:t,checked:n,onChange:()=>{r(!n)}}),c.jsx("label",{htmlFor:t,children:e})]})}const AC=k.input`
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
`;function Xe({children:e,className:t,type:n,placeholder:r,value:i,required:o,name:a,minLength:s,maxLength:l,area:u,onChange:d}){return c.jsx(AC,{type:n,className:t,placeholder:r,value:i,required:o,name:a,minLength:s,maxLength:l,area:u,onChange:f=>{d(f.target.value)},children:e})}const jC=k.div`
  margin-bottom: 22px;
  display: flex;
  gap: 5px;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;

  @media screen and (max-width: 680px) {
    font-size: 13px;
  }
`,RC="/assets/hint-3cce6d49.svg";function E0({children:e,className:t}){return c.jsxs(jC,{className:t,children:[c.jsx("img",{src:RC,width:18,height:18,alt:""}),e]})}const OC=k.h2`
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 16px;
`,Iu=k.div`
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
`,PC=k.div`
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
`,NC=k.form`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 680px) {
    max-width: 340px;
  }
`,TC=k.button`
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
`,DC="/assets/loader-edfbca21.svg";function Gi({value:e,className:t,disabled:n,isLoading:r}){return c.jsxs(TC,{className:t,type:"submit",disabled:n,children:[!r&&e,r&&c.jsx("img",{src:DC,alt:""})]})}function LC(e){const t={result:!0,badFields:[]};return e.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)===null&&(t.result=!1,t.badFields.push("email")),t}function $C(e){const t={result:!0,badFields:[]};return e.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)===null&&(t.result=!1,t.badFields.push("email")),t}function zC(e){const t={result:!0,badFields:[]};return e.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)===null&&(t.result=!1,t.badFields.push("email")),e.password!==e.repeatedPassword&&(t.result=!1,t.badFields.push("repeatedPassword")),t}function k0(e){const t={result:!0,badFields:[]};return e.name.length<2&&(t.result=!1,t.badFields.push("name")),e.phone.match(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/)===null&&(t.result=!1,t.badFields.push("phone")),e.organization.length<3&&(t.result=!1,t.badFields.push("organization")),e.uAddress.length<4&&(t.result=!1,t.badFields.push("uAddress")),e.fAddress&&e.fAddress.length<4&&(t.result=!1,t.badFields.push("fAddress")),e.INN.length!==8&&(t.result=!1,t.badFields.push("inn")),t}function FC(e){const t={result:!0,badFields:[]};return e.inn.length!==8&&(t.result=!1,t.badFields.push("inn")),e.name.length<2&&(t.result=!1,t.badFields.push("name")),e.address.length<4&&(t.result=!1,t.badFields.push("address")),e.mark.length<2&&(t.result=!1,t.badFields.push("mark")),e.count<=0&&(t.result=!1,t.badFields.push("count")),e.dealerManager.length<2&&(t.result=!1,t.badFields.push("dealerManager")),e.dealerName.length<2&&(t.result=!1,t.badFields.push("dealerName")),e.manager.length<2&&(t.result=!1,t.badFields.push("manager")),e.phone.match(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/)===null&&(t.result=!1,t.badFields.push("phone")),t}class IC{constructor(){ee(this,"user");ee(this,"isAuthorized",!1);ee(this,"setUser",t=>{this.user={...t},localStorage.setItem("user",JSON.stringify(t))});ee(this,"removeUser",()=>{this.user=void 0});ee(this,"setUserData",(t,n)=>{this.user&&(this.user={...this.user,data:t,email:n},localStorage.setItem("user",JSON.stringify(this.user)))});ga(this)}}const qi=new IC;function MC(){const{setUserData:e,user:t}=qi,[n,r]=S.useState({name:"",phone:"",isAgent:!1,organization:"",uAddress:"",isAddressEquals:!1,fAddress:"",INN:""}),[i,o]=S.useState({result:!1,badFields:[]});S.useEffect(()=>{n.isAddressEquals&&n.fAddress&&(n.fAddress=null),console.log(n)},[n]);const a=u=>S.useCallback(d=>{r({...n,[u]:d})},[u,n]),s=a("fAddress"),l=async u=>{u.preventDefault();const d=k0(n);o(d),d.result&&(await jr.changeUserData({name:n.name,phone:n.phone,companyName:n.organization,legalAddress:n.uAddress,physicalAddress:n.fAddress?n.fAddress:n.uAddress,inn:n.INN,isAgent:n.isAgent}),e({name:n.name,phone:n.phone,companyName:n.organization,legalAddress:n.uAddress,physicalAddress:n.fAddress?n.fAddress:n.uAddress,inn:n.INN,isAgent:n.isAgent},t==null?void 0:t.email))};return c.jsxs(NC,{onSubmit:l,children:[c.jsx(OC,{children:"Введите контактные данные"}),c.jsxs(Iu,{children:[c.jsx(Xe,{type:"text",placeholder:"Имя",name:"firstName",required:!0,onChange:a("name"),className:i.badFields.find(u=>u==="name")?"error":""}),c.jsx(Xe,{type:"tel",placeholder:"Телефон",name:"phone",required:!0,onChange:a("phone"),className:i.badFields.find(u=>u==="phone")?"error":""})]}),c.jsx(Rr,{id:"agent",onChange:a("isAgent"),isChecked:n.isAgent,children:"Я представитель юридического лица или ИП"}),c.jsx(E0,{children:"Данной организации еше нет в нашей базе. Пожалуйста, введите по ней информацию."}),c.jsxs(Iu,{children:[c.jsx(Xe,{type:"text",placeholder:"Название организации*",name:"organization",required:!0,onChange:a("organization"),className:i.badFields.find(u=>u==="organization")?"error":""}),c.jsxs(PC,{children:[c.jsx(Xe,{type:"text",placeholder:"Юридический адрес*",name:"address",required:!0,onChange:a("uAddress"),className:i.badFields.find(u=>u==="uAddress")?"error":""}),c.jsx(Rr,{id:"isAddressEquals",isChecked:n.isAddressEquals,onChange:a("isAddressEquals"),children:"Совпадает с физическим"})]}),n.isAddressEquals?void 0:c.jsx(Xe,{type:"text",placeholder:"Физический адрес*",name:"address",required:!0,onChange:s,className:i.badFields.find(u=>u==="fAddress")?"error":""})]}),c.jsx(Iu,{children:c.jsx(Xe,{type:"number",placeholder:"ИНН*",name:"INN",required:!0,minLength:8,maxLength:8,onChange:a("INN"),className:i.badFields.find(u=>u==="inn")?"error":""})}),c.jsx(Gi,{value:"Продолжить"})]})}const BC=k.div`
  width: 100%;
  height: 100%;
  background: ${e=>e.bgcolor};
  position: relative;
`,UC=k.div`
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
    width: calc(100% - 60px);
    max-width: 970px;
    margin: auto;
    padding: 0 10px;
    padding-top: 25px;
    padding-bottom: 46px;
  }

  @media screen and (max-width: 680px) {
    width: calc(100% - 20px);
    margin: 0 10px;
    padding: 0;
    margin-top: 27px;
    padding-bottom: 46px;
    padding-top: 12px;
    display: flex;
    justify-content: center;
  }
`,VC=k.h1`
  margin-bottom: 30px;
  color: ${e=>e.theme.colors.text};
  font-family: "Rubik";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130.5%;
  text-transform: uppercase;
`,HC=k.div`
  display: flex;
  width: 100%;
  gap: 18px;

  @media screen and (max-width: 680px) {
    flex-direction: column;
  }
`,WC=k.div`
  width: 100%;
  height: fit-content;
`,KC=k.li`
  width: 270px;
  height: 70px;

  @media screen and (max-width: 1169px) {
    width: 170px;
  }

  @media screen and (max-width: 680px) {
    width: 166px;
    height: 47px;
  }
`,GC=k.a`
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
`;function qC(){return c.jsx(KC,{onClick:()=>{localStorage.removeItem("user"),localStorage.removeItem("token")},children:c.jsx(GC,{href:"/cab",children:"Выйти"})})}const QC=k.li`
  width: 270px;
  height: 70px;

  @media screen and (max-width: 1169px) {
    width: 170px;
  }

  @media screen and (max-width: 680px) {
    width: 166px;
    height: 47px;
  }
`,YC=k(Tr)`
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

  &:hover {
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
`;function Dn({children:e,to:t,end:n}){return c.jsx(QC,{children:c.jsx(YC,{to:t,end:n,children:e})})}const XC=k.ul`
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
`;function JC(){return c.jsxs(XC,{children:[c.jsx(Dn,{to:"/cab/",end:!0,children:"Сообщения"}),c.jsx(Dn,{to:"store",children:"Склад"}),c.jsx(Dn,{to:"documentation",children:"Документация"}),c.jsx(Dn,{to:"booking",children:"Бронирование"}),c.jsx(Dn,{to:"price",children:"Прайсы"}),c.jsx(Dn,{to:"my",children:"Моё оборудование"}),c.jsx(Dn,{to:"account",children:"Учётная запись"}),c.jsx(Dn,{to:"history",children:"История заказов"}),c.jsx(qC,{})]})}function ZC(){return c.jsxs("div",{children:[c.jsx(VC,{children:"Личный кабинет"}),c.jsxs(HC,{children:[c.jsx(JC,{}),c.jsx(WC,{children:c.jsx(Xv,{})})]})]})}const eA=k.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,tA=k.div`
  display: flex;
  flex-direction: column;
`,nA=k(jn)`
  display: flex;
  padding: 22px;
  gap: 22px;
  background-color: ${e=>e.theme.colors.primary};
  border-radius: ${e=>e.theme.borderRadius};

  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
  }

  @media screen and (max-width: 1169px) {
    gap: 10px;
    padding: 18px 14px;
  }

  @media screen and (max-width: 680px) {
    gap: 14px;
    padding: 6px;
    flex-direction: column;
  }
`,rA=k.img`
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
`,iA=k.div`
  flex: 1 1 520px;

  @media screen and (max-width: 1169px) {
    flex: 1 1 470px;
  }

  @media screen and (max-width: 680px) {
    flex: none;
  }
`,oA=k.h3`
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
`,aA=k.p`
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
`,sA=k.time`
  color: ${e=>e.theme.colors.text};
  font-family: "Rubik";
  font-size: 16px;
  font-style: italic;
  font-weight: 300;
  line-height: 130%;

  @media screen and (max-width: 1169px) {
    font-size: 15px;
  }
`;function lA({item:e,to:t}){return c.jsxs(nA,{to:t,children:[c.jsx(rA,{src:e.image,alt:""}),c.jsxs(iA,{children:[c.jsx(oA,{children:e.title}),c.jsx(aA,{children:e.text}),c.jsx(sA,{dateTime:e.date,children:e.date.split("-").reverse().join(".")})]})]})}const uA=k.button`
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
`;function cA({children:e,className:t}){return c.jsx(uA,{className:t,children:e})}function rm(){const[e,t]=S.useState([]),n=async()=>{const i=(await jr.getMessages()).data.messages.map(o=>({image:o.image_url,title:o.title,text:o.content,date:o.message_date,url:""}));t(i)};return S.useEffect(()=>{n()},[]),c.jsxs(tA,{children:[c.jsx(eA,{children:e.map((r,i)=>c.jsx(lA,{item:r,to:"?"},i))}),c.jsx(cA,{children:"Смотреть больше"})]})}const dA=k.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${e=>e.theme.colors.primary};
  border-radius: ${e=>e.theme.borderRadius};
`,fA=k.img`
  margin-bottom: 11px;
  width: 94px;
  height: 94px;
  object-fit: contain;
  object-position: center;
`,pA=k.div`
  color: ${e=>e.theme.colors.text};
  font-family: "Rubik";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 130.5%;
`,hA=k.a`
  text-decoration: underline;
  color: inherit;
`,mA="/assets/msexcel-f86bcc5f.svg";function C0({link:e,children:t}){return c.jsxs(dA,{children:[c.jsx(fA,{src:mA,alt:"Excel SpreadSheet"}),c.jsxs(pA,{children:[c.jsx(hA,{download:!0,href:e,children:"Скачать"})," ",t]})]})}function gA(){return c.jsx(C0,{link:"text.csv",children:"остатки"})}function vA(){return c.jsx(C0,{link:"text.csv",children:"прайс-лист"})}const yA=k(jn)`
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
`;function Ka({children:e,to:t}){return c.jsx(yA,{to:t,children:e})}const xA=k.div`
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
`;function wA(){return c.jsxs(xA,{children:[c.jsx(Ka,{to:"instructions",children:"Инструкции по эксплуатации"}),c.jsx(Ka,{to:"certificates",children:"Сертификаты"}),c.jsx(Ka,{to:"techinfo",children:"Техническая информация"}),c.jsx(Ka,{to:"typedcomertial",children:"Образцы коммерческих предложений"})]})}const _A=k.a`
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
`,SA=k.img`
  width: 15px;
  height: 15px;
  object-fit: contain;
  object-position: center;
`,bA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADfSURBVHgBlZMxDoJAEEU/xE4TKe3EE6iVsRILGyv0AuIp7IycwcrKwgPY2RpPoPECcgQ8gf51l0AQNrs/ecnuAH9nZhkHuVrkRN7kg38FZEoS1CgiK9TrTq7ELwbdwrqrc6dSsibHookLc7WJR2JyzkxsDJYkhOzDE6rchsGH4rQFZHk7FQvIxDQDT/dQZxCW9vOql3QljElPrbfEIRdYZLAhfTKEvOLYNgOhCPndw8ZggLx5L8iuC4mf6WFiMCKdiniiM0jVyTdygF6+Mvt1NpOYxj1Kw1KhJuTEzsTmC+hzH63aumPzAAAAAElFTkSuQmCC";function EA({title:e,link:t}){return c.jsxs(_A,{download:!0,href:t,children:[c.jsx("p",{children:e}),c.jsxs("p",{children:["Скачать ",c.jsx(SA,{src:bA})]})]})}const kA=[{title:"ins"},{title:"ins"},{title:"ins"},{title:"ins"},{title:"ins"},{title:"ins"},{title:"ins"},{title:"ins"},{title:"ins"},{title:"ins"}],CA=k.div`
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
`,AA=k.div`
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
`;function Ga({title:e}){return c.jsxs("div",{children:[c.jsxs(CA,{children:[c.jsx(jn,{to:"../../documentation",style:{textDecoration:"none",color:"inherit"},children:"Документация"})," ","/ ",c.jsx("span",{children:e})]}),c.jsx(AA,{children:kA.map((t,n)=>c.jsx(EA,{title:t.title,link:`/${n}`},n))})]})}const jA=k.div`
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
`,RA=k.div`
  width: 100%;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: ${e=>e.theme.colors.primary};
  border-radius: ${e=>e.theme.borderRadius};
`,OA=k.div`
  display: flex;
  gap: 36px;

  @media screen and (max-width: 680px) {
    font-size: 13px;
  }
`,PA=k.div`
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
`,NA=k.button`
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
`,TA=k.button`
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
`,DA=k.div`
  width: 25px;
  height: 25px;
  background: transparent;
  border: none;
  outline: none;
  background: url(${jf});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transform: rotate(90deg);
  cursor: pointer;
`;class LA{constructor(){ee(this,"items",[]);ee(this,"addItems",t=>{this.items=t});ee(this,"getCount",t=>t.filter(r=>r.isSelected===!0).reduce((r,i)=>i.count+r,0));ee(this,"setCount",(t,n)=>{const r=this.items.findIndex(o=>o.id===t.id),i={...t,count:n};this.items.splice(r,1,i)});ee(this,"getWeight",t=>t.filter(i=>i.isSelected===!0).reduce((i,o)=>o.weight*o.count+i,0)/1e3);ee(this,"getCost",t=>t.filter(r=>r.isSelected===!0).reduce((r,i)=>i.price*i.count+r,0));ee(this,"isItemSelected",t=>{const n=this.items.findIndex(r=>r.id===t.id);return this.items[n]?this.items[n].isSelected:!1});ee(this,"changeSelect",(t,n)=>{const r=this.items.findIndex(i=>i.id===t.id);this.items[r]={...this.items[r],isSelected:n}});ee(this,"getItem",t=>{const n=this.items.findIndex(r=>r.id===t);return this.items[n]});ee(this,"selectAll",()=>{this.items=this.items.map(t=>({...t,isSelected:!0}))});ee(this,"isAllSelected",()=>{let t=!0;return this.items.forEach(n=>{n.isSelected||(t=!1)}),t});ee(this,"onSelectAllClick",()=>{this.isAllSelected()?this.items=this.items.map(t=>({...t,isSelected:!1})):this.selectAll()});ee(this,"clearItems",()=>{this.items=[]});ee(this,"removeItem",t=>{this.items=this.items.filter(n=>n.id!==t.id)});ee(this,"removeSelected",()=>{this.items=this.items.filter(t=>t.isSelected===!1)});ga(this,{},{autoBind:!0})}}const Bl=new LA,$A=k.div`
  display: grid;
  grid-template-columns: 1fr 3.5fr 15fr 4.5fr 4.5fr 4.5fr 1fr;
  align-items: center;

  @media screen and (max-width: 680px) {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;
  }
`,zA=k.img`
  display: flex;
  object-fit: contain;
  object-position: center;

  width: 100%;
  height: 44px;

  @media screen and (max-width: 680px) {
    width: 72px;
  }
`,FA=k.div`
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
`,IA=k.div`
  text-align: center;
  color: ${e=>e.theme.colors.textGrayDark};
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "Raleway";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130.5%;
  text-transform: uppercase;
`,MA=k.div`
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
`,BA=k.button`
  width: 25px;
  height: 25px;
  background: transparent;
  border: none;
  outline: none;
  background: url(${jf});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transform: rotate(90deg);
  cursor: pointer;

  @media screen and (max-width: 680px) {
    display: none;
  }
`,UA=k.div`
  display: none;
  @media screen and (max-width: 680px) {
    display: block;
    flex-basis: 100%;
    width: 0;
  }
`,VA=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 680px) {
    width: 120px;
  }
`,HA=k.input`
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
`,im=k.button`
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
`;function WA({count:e,onChange:t}){return c.jsxs(VA,{children:[c.jsx(im,{onClick:()=>{t(e-1)},disabled:e===1,children:"-"}),c.jsx(HA,{type:"number",value:e,onChange:n=>{t(Number(n.target.value))}}),c.jsx(im,{onClick:()=>{t(e+1)},children:"+"})]})}const KA=gt(({item:e})=>{const{changeSelect:t,setCount:n,removeItem:r}=Bl,i=S.useCallback(()=>a=>{t(e,a)},[t,e]),o=S.useCallback(()=>a=>{n(e,a)},[n,e]);return c.jsxs($A,{children:[c.jsx(Rr,{onChange:i(),id:e.id,isChecked:e.isSelected},`${e.id} ${e.isSelected}`),c.jsx(zA,{src:e.image}),c.jsx(FA,{className:e.isAvailable?"":"disabled",children:e.name}),c.jsx(UA,{}),e.isAvailable?c.jsxs(c.Fragment,{children:[c.jsxs(IA,{children:[e.oldPrice," KZT"]}),c.jsx(WA,{count:e.count,onChange:o()},e.toString()),c.jsxs(MA,{children:[e.price," KZT"]})]}):c.jsxs(c.Fragment,{children:[c.jsx("div",{}),c.jsx("div",{}),c.jsx("div",{})]}),c.jsx(BA,{onClick:()=>{r(e)}})]})}),GA=k.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;function qA({items:e}){return c.jsx(GA,{children:e.map(t=>c.jsx(KA,{item:t},t.id))})}const QA=gt(()=>{const{items:e,onSelectAllClick:t,isAllSelected:n,removeSelected:r}=Bl;return S.useEffect(()=>{console.log(e)},[e]),c.jsxs(RA,{children:[c.jsxs(OA,{children:[c.jsx(NA,{children:c.jsx(Rr,{id:"selectAll",onChange:()=>{t()},isChecked:n(),children:"Выбрать все"})}),c.jsxs(TA,{onClick:()=>{r()},children:[c.jsx(DA,{}),"Удалить выбранное"]})]}),c.jsxs(PA,{children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{children:"Наименование"}),c.jsx("span",{children:"Цена"}),c.jsx("span",{children:"К-во"}),c.jsx("span",{children:"Стоимость"}),c.jsx("span",{})]}),c.jsx(qA,{items:e})]})}),YA=k.div`
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
`,Mu=k.div`
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
`,XA=k.button`
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
`,JA=k.div`
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
`;function ZA(){const{getCount:e,getCost:t,getWeight:n,items:r}=Bl;return S.useEffect(()=>{console.log(r)},[r]),c.jsxs(YA,{children:[c.jsx(JA,{children:"ваш заказ"}),c.jsxs(Mu,{children:[c.jsx("span",{children:"Выбрано товаров:"})," ",c.jsxs("span",{children:[e(r)," шт."]})]}),c.jsxs(Mu,{children:[c.jsx("span",{children:"Вес заказа:"})," ",c.jsxs("span",{children:[n(r)," кг."]})]}),c.jsxs(Mu,{children:[c.jsx("span",{children:"Итого:"})," ",c.jsxs("span",{children:[t(r)," KZT"]})]}),c.jsx(XA,{children:"Выставить счёт"})]})}const ej=gt(()=>{const{items:e}=Bl;return S.useEffect(()=>{},[]),c.jsxs(jA,{children:[c.jsx(ZA,{},e.toString()),c.jsx(QA,{})]})}),tj=k.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: transparent;
`,nj=k.h1`
  width: 100%;
  color: ${e=>e.theme.colors.text};
  font-family: "Rubik";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 130.5%;
`,rj=k.div`
  width: 100%;
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  grid-template-columns: 1fr 1fr;

  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.primary};
`,ij=k.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 14px;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.primary};
`,oj="/assets/edit-d03e6800.svg",aj=k.div`
  display: flex;
  align-items: center;
  gap: 5px;

  @media screen and (max-width: 1169px) {
    flex-direction: column;
  }

  @media screen and (max-width: 680px) {
  }
`,sj=k.div`
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
`,lj=k.div`
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
`;function vs({title:e,children:t,className:n}){return c.jsxs(aj,{className:n,children:[c.jsxs(sj,{children:[e,":"]}),c.jsx(lj,{children:t})]})}const uj=k.div`
  display: flex;
  height: 50px;
  gap: 5px;

  @media screen and (max-width: 680px) {
    height: max-content;
  }
`,cj=k.div`
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
`,dj=k.div`
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
`;function lr({title:e,children:t,className:n}){return c.jsxs(uj,{className:n,children:[c.jsxs(cj,{children:[e,":"]}),c.jsx(dj,{children:t})]})}const fj=k.div`
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
`,pj=k.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 2fr 2fr 1.7fr 0.3fr;

  @media screen and (max-width: 1169px) {
    gap: 5px;
  }

  @media screen and (max-width: 680px) {
    grid-template-columns: 1fr 2fr 0.3fr;
  }
`,hj=k.div`
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
`;k.div`
  display: flex;
  align-items: center;
`;const Bu=k.div`
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
`,mj=k.div`
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
`,gj=k(jn)`
  width: 30px;
  height: 30px;
  background-image: url(${oj});
  background-size: contain;
  background-position: center;
  cursor: pointer;

  @media screen and (max-width: 1169px) {
  }

  @media screen and (max-width: 680px) {
    grid-row-start: 1;
    grid-column-start: 3;
  }
`,vj=k(vs)`
  @media screen and (max-width: 680px) {
    grid-row-start: 2;
    grid-column-start: 2;
  }
`,yj=k(lr)`
  @media screen and (max-width: 680px) {
    word-break: break-all;
  }
`;function A0({item:e,pathToEdit:t}){const[n,r]=S.useState(!1),i=()=>{r(!n)};return c.jsxs(fj,{onClick:i,children:[c.jsxs(pj,{children:[c.jsx(vs,{title:"ИНН",children:e.inn}),c.jsx(vs,{title:"Конечный потребитель",children:e.name}),c.jsx(vj,{title:"Регион, Город потребителя",children:e.address}),c.jsx(vs,{title:"Дата бронирования",children:e.date}),c.jsx(gj,{to:`${t}/${e.id}`})]}),c.jsxs(hj,{$isopened:n,children:[c.jsxs(Bu,{children:[c.jsx(lr,{title:"Марка оборудования",children:e.mark}),c.jsx(lr,{title:"Количество",children:e.count})]}),c.jsxs(Bu,{children:[c.jsx(lr,{title:"Дилер",children:e.dealerName}),c.jsx(yj,{title:"Контактные данные дилера",children:e.phone})]}),c.jsxs(Bu,{children:[c.jsx(lr,{title:"Менеджер дилера",children:e.dealerManager}),c.jsx(lr,{title:"Менеджер AIRSYST",children:e.manager})]}),c.jsx(lr,{title:"Статус",children:e.status}),e.commentary.length>0&&c.jsx(mj,{children:e.commentary})]})]})}class xj{constructor(){ee(this,"list",[]);ee(this,"setBooking",t=>{this.list=t});ee(this,"clearBookings",()=>{this.list=[]});ee(this,"getBookingById",t=>this.list.find(n=>n.id==t));ee(this,"getBookingsByUser",t=>this.list.filter(r=>r.userID==t));ga(this)}}const Of=new xj,wj=k.div`
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
`;function j0({children:e}){return c.jsx(wj,{children:e})}const _j=gt(()=>{const{list:e}=Of,{current:t}=ur,{setInfo:n}=wa;return S.useEffect(()=>{(t==null?void 0:t.name)==="Silver"&&n({text:"Бронирование не доступно для текущего уровня. Необходимо повысить статус",link:"/",buttonText:"Понятно",isVisible:!0})},[t]),c.jsxs(tj,{children:[c.jsxs(rj,{children:[c.jsx(nj,{children:"Бронирование"}),c.jsxs(j0,{children:[c.jsx("span",{children:"Все бронирования"})," /"," ",c.jsx(jn,{to:"mybooking",style:{color:"#000",fontWeight:700},children:"Мои бронирования"})]}),c.jsx(Af,{to:"create",children:"Забронировать"})]}),c.jsx(ij,{children:e.map(r=>c.jsx(A0,{pathToEdit:"create",item:r},r.inn))})]})}),Sj=k.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 30px;
`,bj=k.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 14px;
  background: ${e=>e.theme.colors.primary};
  border-radius: ${e=>e.theme.borderRadius};
`,Ej=k.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  background: ${e=>e.theme.colors.primary};
  border-radius: ${e=>e.theme.borderRadius};
`,kj=k.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 14px;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.primary};
`,Cj=k.h1`
  color: ${e=>e.theme.colors.text};
  font-family: "Rubik";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 130.5%;
`,Aj=gt(()=>{const[e,t]=S.useState([]),{getBookingsByUser:n}=Of,{user:r}=qi;return S.useEffect(()=>{const i=n(r==null?void 0:r.id);t(i)},[]),c.jsxs(Sj,{children:[c.jsxs(bj,{children:[c.jsx(Cj,{children:"Мои бронирования"}),c.jsxs(j0,{children:[c.jsx(jn,{to:"../../booking",style:{color:"#000",fontWeight:700},children:"Все бронирования"})," ","/ ",c.jsx("span",{children:"Мои бронирования"})]}),c.jsx(Af,{to:"../../booking/create",children:"Забронировать"})]}),c.jsx(Ej,{children:c.jsx(kj,{children:e.map(i=>c.jsx(A0,{pathToEdit:"../create",item:i},i.inn))})})]})}),jj=k.div`
  padding: 20px 14px;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.primary};
`,Rj=k.form`
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
`,Uu=k(Xe)`
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
`,Mr=k(Xe)`
  max-width: 100%;

  @media screen and (max-width: 680px) {
    font-size: 14px;
    padding: 5px 7px;
    min-width: 120px;

    &::placeholder {
      font-size: 10px;
    }
  }
`,Oj=k.textarea`
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
`,Pj=k(Gi)`
  grid-area: submit;
  justify-self: center;
`,om=gt(()=>{const{setInfo:e}=wa,{id:t}=fS(),{user:n}=qi,{getBookingById:r,list:i}=Of,[o,a]=S.useState(),[s,l]=S.useState(!1),[u,d]=S.useState({id:i.length+1,userID:n?n.id:0,status:"pending",date:new Date().toISOString(),inn:"",name:"",address:"",mark:"",count:0,dealerManager:"",dealerName:"",manager:"",commentary:"",phone:""});S.useEffect(()=>{t!==void 0&&a(r(Number(t))),console.log(1)},[]),S.useEffect(()=>{o&&d({...o,id:u.id,userID:u.userID,status:u.status,date:u.date})},[o]),S.useEffect(()=>{u.inn.length===8?l(!0):l(!1),console.log(u)},[u]);const f=x=>y=>{d({...u,[x]:y})},m=x=>{x.preventDefault(),FC(u).result&&(console.log("request to server",u),e({text:"Заявка на бронирование принята в обработку",link:"/booking",buttonText:"Продолжить",isVisible:!0}))};return c.jsx(jj,{children:c.jsxs(Rj,{onSubmit:m,children:[c.jsx(Uu,{type:"number",minLength:8,maxLength:8,required:!0,placeholder:"ИНН",area:"inn",value:u.inn,onChange:f("inn")}),s?c.jsxs(c.Fragment,{children:[c.jsx(Mr,{type:"text",required:!0,placeholder:"Конечный потребитель",name:"company",area:"name",onChange:f("name"),value:u.name}),c.jsx(Mr,{type:"text",required:!0,placeholder:"Регион, город потребителя",name:"address",area:"address",onChange:f("address"),value:u.address})]}):"",c.jsx(Mr,{type:"text",required:!0,placeholder:"Марка оборудования",name:"mark",area:"mark",onChange:f("mark"),value:u.mark}),c.jsx(Uu,{type:"number",required:!0,placeholder:"Количество",name:"count",area:"count",onChange:f("count"),value:u.count.toString()}),c.jsx(Mr,{type:"text",required:!0,placeholder:"Дилер",name:"dName",area:"dName",onChange:f("dealerName"),value:u.dealerName}),c.jsx(Mr,{type:"text",required:!0,placeholder:"Отв. менеджер дилера",name:"dManager",area:"dManager",onChange:f("dealerManager"),value:u.dealerManager}),c.jsx(Uu,{type:"tel",required:!0,placeholder:"Номер телефона",name:"phone",area:"phone",onChange:f("phone"),value:u.phone}),c.jsx(Mr,{type:"text",required:!0,placeholder:"Отв. менеджер AIRSYST",name:"manager",area:"manager",onChange:f("manager"),value:u.manager}),c.jsx(Oj,{placeholder:"Комментарий",area:"commentary",value:u.commentary,onChange:x=>{d({...u,commentary:x.currentTarget.value})}}),c.jsx(Pj,{value:"Забронировать"})]})})}),Nj=k.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.primary};
`,Tj=k.h2`
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 16px;
`,Vu=k.div`
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
`,Dj=k.div`
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
`,Lj=k.form`
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
`,Br=k(Xe)`
  max-width: 270px;

  @media screen and (max-width: 1169px) {
    min-width: 190px;
    width: auto;
  }

  @media screen and (max-width: 680px) {
    max-width: 100%;
  }
`,$j=k(E0)`
  @media screen and (max-width: 680px) {
    font-size: 12px;
    display: inline-flex;
    justify-content: flex-start;
    gap: 3px;
  }
`;function zj(){const{user:e,setUserData:t}=qi,[n,r]=S.useState({name:"",phone:"",isAgent:!1,organization:"",uAddress:"",isAddressEquals:!1,fAddress:"",INN:""}),[i,o]=S.useState({result:!1,badFields:[]});S.useEffect(()=>{e&&e.data&&r({name:e.data.name,phone:e.data.phone,isAgent:e.data.isAgent,organization:e.data.companyName,uAddress:e.data.legalAddress,isAddressEquals:e.data.legalAddress===e.data.physicalAddress,fAddress:e.data.physicalAddress,INN:e.data.inn})},[]),S.useEffect(()=>{n.isAddressEquals&&n.fAddress&&(n.fAddress=null),console.log(n)},[n]);const a=u=>S.useCallback(d=>{r({...n,[u]:d})},[u,n]),s=a("fAddress"),l=async u=>{u.preventDefault();const d=k0(n);o(d),d.result&&(await jr.changeUserData({name:n.name,phone:n.phone,companyName:n.organization,legalAddress:n.uAddress,physicalAddress:n.fAddress?n.fAddress:n.uAddress,inn:n.INN,isAgent:n.isAgent}),t({name:n.name,phone:n.phone,companyName:n.organization,legalAddress:n.uAddress,physicalAddress:n.fAddress!==null?n.fAddress:n.uAddress,inn:n.INN,isAgent:n.isAgent},e==null?void 0:e.email))};return c.jsx(Nj,{children:c.jsxs(Lj,{onSubmit:l,children:[c.jsx(Tj,{children:"Введите контактные данные"}),c.jsxs(Vu,{children:[c.jsx(Br,{type:"text",placeholder:"Имя",name:"firstName",required:!0,onChange:a("name"),className:i.badFields.find(u=>u==="name")?"error":"",value:n.name}),c.jsx(Br,{type:"tel",placeholder:"Телефон",name:"phone",required:!0,onChange:a("phone"),className:i.badFields.find(u=>u==="phone")?"error":"",value:n.phone})]}),c.jsx(Rr,{id:"agent",onChange:a("isAgent"),isChecked:n.isAgent,children:"Я представитель юридического лица или ИП"}),c.jsx($j,{children:"Данной организации еше нет в нашей базе. Пожалуйста, введите по ней информацию."}),c.jsxs(Vu,{children:[c.jsx(Br,{type:"text",placeholder:"Название организации*",name:"organization",required:!0,onChange:a("organization"),className:i.badFields.find(u=>u==="organization")?"error":"",value:n.organization}),c.jsxs(Dj,{children:[c.jsx(Br,{type:"text",placeholder:"Юридический адрес*",name:"address",required:!0,onChange:a("uAddress"),className:i.badFields.find(u=>u==="uAddress")?"error":"",value:n.uAddress}),c.jsx(Rr,{id:"isAddressEquals",onChange:a("isAddressEquals"),isChecked:n.isAddressEquals,children:"Совпадает с физическим"})]}),n.isAddressEquals?void 0:c.jsx(Br,{type:"text",placeholder:"Физический адрес*",name:"address",required:!0,onChange:s,className:i.badFields.find(u=>u==="fAddress")?"error":"",value:n.fAddress!==null?n.fAddress:""})]}),c.jsx(Vu,{children:c.jsx(Br,{type:"number",placeholder:"ИНН*",name:"INN",required:!0,minLength:8,maxLength:8,onChange:a("INN"),className:i.badFields.find(u=>u==="inn")?"error":"",value:n.INN})}),c.jsx(Gi,{value:"Изменить"})]})})}const Fj=k.section`
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
`,Ij=k.h1`
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
`,Mj=k.p`
  margin-bottom: 18px;
`,Bj=k(Tr)`
  color: #195cdf;
  margin-bottom: 2px;
  text-align: center;
`,Uj=k(Tr)`
  color: #195cdf;
  text-transform: uppercase;
  text-align: center;
`,Vj=k.form`
  width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;

  @media screen and (max-width: 470px) {
    width: 100%;
    max-width: 370px;
  }
`,Hj=gt(()=>{const{setUser:e}=qi,[t,n]=S.useState(!1),[r,i]=S.useState({email:"",password:"",rememberMe:!1}),[o,a]=S.useState({result:!1,badFields:[]}),s=u=>S.useCallback(d=>{i({...r,[u]:d})},[u,r]),l=async u=>{u.preventDefault();const d=LC(r);if(a(d),d.result)try{n(!0);const f=await jr.login(r.email,r.password);n(!1);const m=f.data;localStorage.setItem("token",`Bearer ${m.access_token}`),n(!0);const x=(await jr.getUser()).data;e({id:x.id,email:x.email,data:x.phone===null?void 0:{name:x.name,phone:x.phone,companyName:x.company_name,legalAddress:x.legal_address,physicalAddress:x.physical_address,inn:x.company_number,isAgent:x.is_agent},token:m.access_token}),n(!1)}catch(f){console.log(f),n(!1),a({result:!1,badFields:["email","password"]})}};return c.jsxs(Fj,{children:[c.jsx(Ij,{children:"Авторизация"}),c.jsx(Mj,{children:"Пожалуйста, авторизуйтесь"}),c.jsxs(Vj,{onSubmit:l,children:[c.jsx(Xe,{type:"email",name:"email",placeholder:"Email",value:r.email,onChange:s("email"),required:!0,className:o.badFields.find(u=>u==="email")?"error":""}),c.jsx(Xe,{type:"password",name:"password",placeholder:"Пароль",value:r.password,onChange:s("password"),required:!0,className:o.badFields.find(u=>u==="password")?"error":""}),c.jsx(Rr,{id:"rememberMe",isChecked:r.rememberMe,onChange:s("rememberMe"),children:"Запомнить меня на этом компьютере"}),c.jsx(Gi,{value:"Войти",isLoading:t}),c.jsx(Bj,{to:"forgot",children:"Забыли пароль?"}),c.jsx(Uj,{to:"register",children:"Зарегистрироваться"})]})]})}),Wj=k.section`
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
`,Kj=k.h1`
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
`;k.p`
  margin-bottom: 18px;
`;k(Tr)`
  color: #195cdf;
  margin-bottom: 2px;
  text-align: center;
`;k(Tr)`
  color: #195cdf;
  text-transform: uppercase;
  text-align: center;
`;const Gj=k.form`
  width: 370px;
  display: flex;
  flex-direction: column;
  gap: 9px;
  align-items: center;

  @media screen and (max-width: 470px) {
    width: 100%;
    max-width: 370px;
  }
`,qj=gt(()=>{const{setInfo:e}=wa,[t,n]=S.useState({email:"",password:"",repeatedPassword:""}),[r,i]=S.useState({result:!1,badFields:[]}),o=s=>S.useCallback(l=>{n({...t,[s]:l})},[s,t]),a=s=>{s.preventDefault();const l=zC(t);i(l),l.result&&(console.log(l,t),jr.register(t.email,t.password),e({text:"Вам на почту было отправлено сообщения для завершения регистрации",link:"/",buttonText:"Понятно",isVisible:!0}))};return c.jsxs(Wj,{children:[c.jsx(Rf,{}),c.jsx(Kj,{children:"Зарегистрироваться"}),c.jsxs(Gj,{onSubmit:a,children:[c.jsx(Xe,{type:"email",name:"email",placeholder:"Email",value:t.email,onChange:o("email"),required:!0,className:r.badFields.find(s=>s==="email")?"error":""}),c.jsx(Xe,{type:"password",name:"password",placeholder:"Пароль",value:t.password,onChange:o("password"),required:!0}),c.jsx(Xe,{type:"password",name:"password",placeholder:"Пароль",value:t.repeatedPassword,onChange:o("repeatedPassword"),required:!0,className:r.badFields.find(s=>s==="repeatedPassword")?"error":""}),c.jsx(Gi,{value:"Зарегистрировтаься"})]})]})}),Qj=k.section`
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
`,Yj=k.h1`
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
`;k.p`
  margin-bottom: 18px;
`;k(Tr)`
  color: #195cdf;
  margin-bottom: 2px;
  text-align: center;
`;k(Tr)`
  color: #195cdf;
  text-transform: uppercase;
  text-align: center;
`;const Xj=k.form`
  width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;

  @media screen and (max-width: 470px) {
    width: 100%;
    max-width: 370px;
  }
`,Jj=k.p`
  margin-bottom: 23px;
  display: inline-flex;
  color: #868686;
  font-size: 14px;
  line-height: 120%;
`,Zj=gt(()=>{const{setInfo:e}=wa,[t,n]=S.useState({email:""}),[r,i]=S.useState({result:!1,badFields:[]}),o=s=>S.useCallback(l=>{n({...t,[s]:l})},[s,t]),a=s=>{s.preventDefault();const l=$C(t);i(l),l.result&&(console.log(l,t),e({text:"Вам на почту было отправлено сообщения для восстановления пароля",link:"/",buttonText:"Понятно",isVisible:!0}))};return c.jsxs(Qj,{children:[c.jsx(Rf,{}),c.jsx(Yj,{children:"Забыли свой пароль?"}),c.jsxs(Xj,{onSubmit:a,children:[c.jsx(Xe,{type:"email",name:"email",placeholder:"Email",value:t.email,onChange:o("email"),required:!0,className:r.badFields.find(s=>s==="email")?"error":""}),c.jsx(Jj,{children:"Контрольная строка для смены пароля, а также ваши регистрационные данные, будут высланы вам по Email"}),c.jsx(Gi,{value:"Выслать"})]})]})});const eR="/assets/telegram-3b377e92.svg",tR="/assets/whatsapp-bdc45d39.svg",nR="/assets/viber-7cb50281.svg";function Li({title:e,phones:t}){return c.jsxs("div",{className:"contacts",children:[c.jsxs("div",{className:"contacts__left",children:[c.jsx("div",{children:e}),c.jsxs("div",{className:"smm",children:[c.jsx("a",{target:"_blank",href:`https://t.me/${t[0]}`,className:"smm__item",children:c.jsx("img",{width:21,height:21,className:"lazyload",src:eR,alt:""})}),c.jsx("a",{target:"_blank",href:`https://wa.me/${t[0]}`,className:"smm__item",children:c.jsx("img",{width:21,height:21,className:"lazyload",src:tR,alt:""})}),c.jsx("a",{target:"_blank",href:`viber://chat?number=${t[0]}`,className:"smm__item",children:c.jsx("img",{width:21,height:21,className:"lazyload",src:nR,alt:""})})]})]}),c.jsx("div",{className:"contacts__right",children:t.map((n,r)=>c.jsx("a",{target:"_blank",href:`tel:${n}`,className:"tel",children:n},r))})]})}const rR="/assets/mail-5acc8481.svg";function Pf(){return c.jsxs("div",{className:"mail",children:[c.jsx("img",{width:25,height:19,src:rR,alt:""}),c.jsx("a",{target:"_blank",href:"mailto:",children:"info@airsyst.kz"})]})}const iR="/assets/time-e21e70d6.svg";function Nf(){return c.jsxs("div",{className:"time-work",children:[c.jsx("img",{width:26,height:26,className:"lazyload",src:iR,alt:"Время работы"}),c.jsxs("div",{className:"time-work__items",children:[c.jsxs("div",{className:"time-work__item",children:[c.jsx("strong",{children:"Пн-Пт: "}),"10:00-18:00"]}),c.jsxs("div",{className:"time-work__item",children:[c.jsx("strong",{children:"Сб-Вс: "}),"Выходной"]})]})]})}const R0="/assets/user-680933f9.svg";function oR(){return c.jsxs("a",{className:"mail cab",href:"/cab",children:[c.jsx("img",{width:25,height:19,src:R0,alt:""}),c.jsx("span",{children:"Личный кабинет"})]})}function aR(){return c.jsx("header",{className:"header",children:c.jsxs("div",{className:"wrap",children:[c.jsx(Nf,{}),c.jsx(Li,{title:"Отдел продаж",phones:["+7 702 660 20 47","+7 702 871 12 51"]}),c.jsx(Li,{title:"Отдел сервиса",phones:["+7 702 660 20 47"]}),c.jsx(Pf,{}),c.jsx(oR,{})]})})}const O0="/assets/airsyst-bd6a161e.svg",sR="/assets/nav-close-c3ca8ecc.svg",lR="/assets/nav-open-7fdb8a5f.svg",uR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAZCAYAAABQDyyRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJqSURBVHgBxVVNbtNAFH5vZgJdmgVSUjY2P+u6JyA5ASwRGKk3gBs0OUHgBkEExI7eoM4JCGuQ7C5KI7HASEhtkD3DN65MozQ/Vmyln5SMZ+bNm/fzvTdMwN3nkS9F6tAMJsNHIW0BfA+Xa0Ff5jcMpZ1tGCFOP3pjQ9SZ/eWWkXhKN4XWyyhqBdExbQFq0aLRZsTMT5yDyEkGXrKII9VvVvFk4MW8aK/1InqNHPQtD6RWySKOVIah+LxB+wsjIAyFGqaxET448qYZRB2qEWy0Tyz6O2nq8zKh3SD6ZYwZnX24XzsZZyOslgmhGsbE/LiY18GD/2XNZPUmdq6Wi+uvSEa7+SxypSDnkgeKqgBO7P9E2cM73zAcpJUaTYi/V9TI2qfvHw6q8kBqSuzleeNjcuHgu5UGmFSOWVnCsG/nk6EXUg3IKAPxJL50uNKAyScvBhETY9gt1qrwoMg/s2jb8UKpdSnIiRjiRH7g6s3YjAdF/tHg9izBbYNbawDCdAIiOpaI9s3YlAdF/l101mlKSKl+W+ytMeCSiOaW3MMYV+XBNM3aMIe0aByXMuC2kuHflBKhs24z+PabKoCJHTKyjw+aimx0tb4GRdeimmBI9ybDB93SBlhYDiBWLoQdKPARw5gExevOXZNPkUZU15xMOewGJ4dQ1p052P0x9HpV5ctF4CByOaUI8cP7QD0cgnLyzxXdKcppU3lRxgCEzrWDlrJ7NvSODGW5J/Y5rSpfqqvsKBqjfslWQyv4zmDzYR67VMVV5UtFIEbYEELrBTyQn6HMz9k8R6hN5EuT0KKohos/aKVH13O/ifw/1J5Hzlm/Ua8AAAAASUVORK5CYII=";function cR(){const[e,t]=S.useState(!1),[n,r]=S.useState(0),i=()=>{t(!1)};return S.useEffect(()=>{const o=localStorage.getItem("cart");if(o!=null){const a=JSON.parse(o).length;r(a)}else r(0)},[]),c.jsxs(c.Fragment,{children:[c.jsx("nav",{className:"nav",children:c.jsxs("div",{className:"wrap",children:[c.jsx("a",{href:"/",className:"logo",children:c.jsx("img",{width:170,height:38,className:"lazyload",src:O0,alt:"AirSyst"})}),c.jsxs("div",{className:"nav__items",children:[c.jsx("a",{className:"nav__item",href:"/products",children:"Наши продукты"}),c.jsx("a",{className:"nav__item",href:"/about",children:"О компании"}),c.jsx("a",{className:"nav__item",href:"/news",children:"Новости"}),c.jsx("a",{className:"nav__item",href:"/projects",children:"Наши проекты"}),c.jsx("a",{className:"nav__item",href:"/sertifikaty",children:"Сертификаты"}),c.jsx("a",{className:"nav__item",href:"/contacts",children:"Контакты"}),c.jsx("a",{className:"nav__item",href:"/diallers",children:"Дилерам"})]}),c.jsxs("a",{className:"mail cab",href:"/cab",children:[c.jsx("img",{width:25,height:19,src:R0,alt:""}),c.jsx("span",{children:"Личный кабинет"})]}),c.jsx("a",{href:"/cart",className:"shopping-cart","attr-count":n,children:c.jsx("img",{width:30,height:25,className:"lazyload",src:uR,alt:"cart"})}),c.jsxs("div",{className:`nav__open mobile ${e&&"active"}`,onClick:()=>t(!e),children:[c.jsx("img",{width:37,height:18,className:"lazyload nav__open-img",src:lR,alt:"menu"}),c.jsx("img",{width:37,height:18,className:"lazyload nav__open-close-img",src:sR,alt:"close"})]})]})}),c.jsxs("div",{className:`nav-mobile mobile ${e&&"active"}`,children:[c.jsxs("div",{className:"nav__items",children:[c.jsx("a",{className:"nav__item",href:"/products",onClick:i,children:"Наши продукты"}),c.jsx("a",{className:"nav__item",href:"/about",onClick:i,children:"О компании"}),c.jsx("a",{className:"nav__item",href:"/news",onClick:i,children:"Новости"}),c.jsx("a",{className:"nav__item",href:"/projects",onClick:i,children:"Наши проекты"}),c.jsx("a",{className:"nav__item",href:"/sertifikaty",onClick:i,children:"Сертификаты"}),c.jsx("a",{className:"nav__item",href:"/contacts",onClick:i,children:"Контакты"}),c.jsx("a",{className:"nav__item",href:"/diallers",onClick:i,children:"Дилерам"})]}),c.jsx(Li,{title:"Отдел продаж",phones:["+7 702 660 20 47","+7 702 871 12 51"]}),c.jsx(Li,{title:"Отдел сервиса",phones:["+7 702 660 20 47"]}),c.jsx(Nf,{}),c.jsx(Pf,{})]})]})}function dR(){return c.jsx("footer",{className:"footer",children:c.jsxs("div",{className:"wrap",children:[c.jsxs("div",{className:"footer__item",children:[c.jsx("a",{href:"/",className:"logo",children:c.jsx("img",{src:O0,width:170,height:38,alt:"Logo"})}),c.jsx("div",{className:"copyright",children:"© 2015-2023"})]}),c.jsxs("div",{className:"footer__item",children:[c.jsx("a",{className:"nav__item",href:"/products",children:"Наши продукты"}),c.jsx("a",{className:"nav__item",href:"/about",children:"О компании"}),c.jsx("a",{className:"nav__item",href:"/news",children:"Новости"}),c.jsx("a",{className:"nav__item",href:"/projects",children:"Наши проекты"}),c.jsx("a",{className:"nav__item",href:"/sertifikaty",children:"Сертификаты"}),c.jsx("a",{className:"nav__item",href:"/contacts",children:"Контакты"}),c.jsx("a",{className:"nav__item",href:"/diallers",children:"Дилерам"})]}),c.jsxs("div",{className:"footer__item",children:[c.jsx(Nf,{}),c.jsx(Pf,{})]}),c.jsxs("div",{className:"footer__item",children:[c.jsx(Li,{title:"Отдел продаж",phones:["+7 702 660 20 47","+7 702 871 12 51"]}),c.jsx(Li,{title:"Отдел сервиса",phones:["+7 702 660 20 47"]})]})]})})}function fR(e){const t=localStorage.getItem("user");return e||t!=null?e!=null&&e.data?c.jsx(re,{path:"/cab",element:c.jsx(EC,{user:e}),children:c.jsxs(re,{path:"/cab",element:c.jsx(ZC,{}),children:[c.jsx(re,{index:!0,element:c.jsx(rm,{})}),c.jsx(re,{path:"messages",element:c.jsx(rm,{})}),c.jsx(re,{path:"store",element:c.jsx(gA,{})}),c.jsxs(re,{path:"documentation",children:[c.jsx(re,{index:!0,element:c.jsx(wA,{})}),c.jsx(re,{path:"instructions",element:c.jsx(Ga,{itemsHref:"/",title:"Инструкции по эксплуатации"})}),c.jsx(re,{path:"certificates",element:c.jsx(Ga,{itemsHref:"/",title:"Сертификаты"})}),c.jsx(re,{path:"techinfo",element:c.jsx(Ga,{itemsHref:"/",title:"Техническая информация"})}),c.jsx(re,{path:"typedcomertial",element:c.jsx(Ga,{itemsHref:"/",title:"Образцы коммерческих предложений"})})]}),c.jsxs(re,{path:"booking",children:[c.jsx(re,{index:!0,element:c.jsx(_j,{})}),c.jsx(re,{path:"mybooking",element:c.jsx(Aj,{})}),c.jsx(re,{path:"create",element:c.jsx(om,{})}),c.jsx(re,{path:"create/:id",element:c.jsx(om,{})})]}),c.jsx(re,{path:"price",element:c.jsx(vA,{})}),c.jsx(re,{path:"my",element:c.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"700px"},children:"В разработке"})}),c.jsx(re,{path:"account",element:c.jsx(zj,{})}),c.jsx(re,{path:"history",element:c.jsx(ej,{})})]})}):c.jsxs(c.Fragment,{children:[c.jsx(re,{path:"/cab",element:c.jsx(MC,{})}),c.jsx(re,{path:"/cab/*",element:c.jsx(Ah,{to:"/cab"})})," "]}):c.jsxs(re,{path:"/cab",children:[c.jsx(re,{path:"/cab",element:c.jsx(Hj,{})}),c.jsx(re,{path:"forgot",element:c.jsx(Zj,{})}),c.jsx(re,{path:"*",element:c.jsx(Ah,{to:"/cab"})}),c.jsx(re,{path:"register",element:c.jsx(qj,{})})]})}const pR=gt(()=>{const{current:e}=ur,{user:t,setUser:n}=qi;S.useEffect(()=>{const i=localStorage.getItem("user");return console.log(i),i!=null&&n({...JSON.parse(i)}),()=>{t!=null&&localStorage.setItem("user",JSON.stringify(t))}},[]);const r=TS(qc(c.jsx(re,{path:"/",children:fR(t)})));return c.jsxs(c.Fragment,{children:[c.jsx(aR,{}),c.jsx(cR,{}),c.jsx(BC,{bgcolor:e==null?void 0:e.backgroundColor,children:c.jsx(m_,{theme:y_,children:c.jsx(UC,{bgcolor:e==null?void 0:e.backgroundColor,children:c.jsx(kS,{router:r})})})}),c.jsx(dR,{})]})});Hu.createRoot(document.getElementById("root")).render(c.jsx(pR,{}));
