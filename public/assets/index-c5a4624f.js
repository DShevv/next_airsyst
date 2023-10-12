var _y=Object.defineProperty;var Sy=(e,t,n)=>t in e?_y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Z=(e,t,n)=>(Sy(e,typeof t!="symbol"?t+"":t,n),n);function Cy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Ey(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var dh={exports:{}},Ml={},fh={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ko=Symbol.for("react.element"),ky=Symbol.for("react.portal"),by=Symbol.for("react.fragment"),Ry=Symbol.for("react.strict_mode"),jy=Symbol.for("react.profiler"),Oy=Symbol.for("react.provider"),Py=Symbol.for("react.context"),Ny=Symbol.for("react.forward_ref"),Ty=Symbol.for("react.suspense"),Dy=Symbol.for("react.memo"),Ly=Symbol.for("react.lazy"),nf=Symbol.iterator;function zy(e){return e===null||typeof e!="object"?null:(e=nf&&e[nf]||e["@@iterator"],typeof e=="function"?e:null)}var ph={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hh=Object.assign,mh={};function Ci(e,t,n){this.props=e,this.context=t,this.refs=mh,this.updater=n||ph}Ci.prototype.isReactComponent={};Ci.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ci.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function gh(){}gh.prototype=Ci.prototype;function Oc(e,t,n){this.props=e,this.context=t,this.refs=mh,this.updater=n||ph}var Pc=Oc.prototype=new gh;Pc.constructor=Oc;hh(Pc,Ci.prototype);Pc.isPureReactComponent=!0;var rf=Array.isArray,vh=Object.prototype.hasOwnProperty,Nc={current:null},yh={key:!0,ref:!0,__self:!0,__source:!0};function xh(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)vh.call(t,r)&&!yh.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ko,type:e,key:o,ref:a,props:i,_owner:Nc.current}}function My(e,t){return{$$typeof:Ko,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Tc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ko}function Fy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var of=/\/+/g;function Cs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Fy(""+e.key):t.toString(36)}function Pa(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ko:case ky:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Cs(a,0):r,rf(i)?(n="",e!=null&&(n=e.replace(of,"$&/")+"/"),Pa(i,t,n,"",function(u){return u})):i!=null&&(Tc(i)&&(i=My(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(of,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",rf(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Cs(o,l);a+=Pa(o,t,n,s,i)}else if(s=zy(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Cs(o,l++),a+=Pa(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function la(e,t,n){if(e==null)return e;var r=[],i=0;return Pa(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Iy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var qe={current:null},Na={transition:null},Ky={ReactCurrentDispatcher:qe,ReactCurrentBatchConfig:Na,ReactCurrentOwner:Nc};G.Children={map:la,forEach:function(e,t,n){la(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return la(e,function(){t++}),t},toArray:function(e){return la(e,function(t){return t})||[]},only:function(e){if(!Tc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=Ci;G.Fragment=by;G.Profiler=jy;G.PureComponent=Oc;G.StrictMode=Ry;G.Suspense=Ty;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ky;G.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=hh({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Nc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)vh.call(t,s)&&!yh.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ko,type:e.type,key:i,ref:o,props:r,_owner:a}};G.createContext=function(e){return e={$$typeof:Py,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Oy,_context:e},e.Consumer=e};G.createElement=xh;G.createFactory=function(e){var t=xh.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:Ny,render:e}};G.isValidElement=Tc;G.lazy=function(e){return{$$typeof:Ly,_payload:{_status:-1,_result:e},_init:Iy}};G.memo=function(e,t){return{$$typeof:Dy,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=Na.transition;Na.transition={};try{e()}finally{Na.transition=t}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(e,t){return qe.current.useCallback(e,t)};G.useContext=function(e){return qe.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return qe.current.useDeferredValue(e)};G.useEffect=function(e,t){return qe.current.useEffect(e,t)};G.useId=function(){return qe.current.useId()};G.useImperativeHandle=function(e,t,n){return qe.current.useImperativeHandle(e,t,n)};G.useInsertionEffect=function(e,t){return qe.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return qe.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return qe.current.useMemo(e,t)};G.useReducer=function(e,t,n){return qe.current.useReducer(e,t,n)};G.useRef=function(e){return qe.current.useRef(e)};G.useState=function(e){return qe.current.useState(e)};G.useSyncExternalStore=function(e,t,n){return qe.current.useSyncExternalStore(e,t,n)};G.useTransition=function(){return qe.current.useTransition()};G.version="18.2.0";fh.exports=G;var E=fh.exports;const Tt=Ey(E),$y=Cy({__proto__:null,default:Tt},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var By=E,Uy=Symbol.for("react.element"),Vy=Symbol.for("react.fragment"),Wy=Object.prototype.hasOwnProperty,Qy=By.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hy={key:!0,ref:!0,__self:!0,__source:!0};function Ah(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Wy.call(t,r)&&!Hy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Uy,type:e,key:o,ref:a,props:i,_owner:Qy.current}}Ml.Fragment=Vy;Ml.jsx=Ah;Ml.jsxs=Ah;dh.exports=Ml;var c=dh.exports,gu={},wh={exports:{}},dt={},_h={exports:{}},Sh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,M){var F=N.length;N.push(M);e:for(;0<F;){var le=F-1>>>1,fe=N[le];if(0<i(fe,M))N[le]=M,N[F]=fe,F=le;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var M=N[0],F=N.pop();if(F!==M){N[0]=F;e:for(var le=0,fe=N.length,kt=fe>>>1;le<kt;){var q=2*(le+1)-1,Ze=N[q],$e=q+1,Je=N[$e];if(0>i(Ze,F))$e<fe&&0>i(Je,Ze)?(N[le]=Je,N[$e]=F,le=$e):(N[le]=Ze,N[q]=F,le=q);else if($e<fe&&0>i(Je,F))N[le]=Je,N[$e]=F,le=$e;else break e}}return M}function i(N,M){var F=N.sortIndex-M.sortIndex;return F!==0?F:N.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],d=1,h=null,g=3,y=!1,A=!1,x=!1,R=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=N)r(u),M.sortIndex=M.expirationTime,t(s,M);else break;M=n(u)}}function p(N){if(x=!1,v(N),!A)if(n(s)!==null)A=!0,Le(_);else{var M=n(u);M!==null&&ke(p,M.startTime-N)}}function _(N,M){A=!1,x&&(x=!1,m(T),T=-1),y=!0;var F=g;try{for(v(M),h=n(s);h!==null&&(!(h.expirationTime>M)||N&&!_e());){var le=h.callback;if(typeof le=="function"){h.callback=null,g=h.priorityLevel;var fe=le(h.expirationTime<=M);M=e.unstable_now(),typeof fe=="function"?h.callback=fe:h===n(s)&&r(s),v(M)}else r(s);h=n(s)}if(h!==null)var kt=!0;else{var q=n(u);q!==null&&ke(p,q.startTime-M),kt=!1}return kt}finally{h=null,g=F,y=!1}}var b=!1,k=null,T=-1,H=5,K=-1;function _e(){return!(e.unstable_now()-K<H)}function re(){if(k!==null){var N=e.unstable_now();K=N;var M=!0;try{M=k(!0,N)}finally{M?ht():(b=!1,k=null)}}else b=!1}var ht;if(typeof f=="function")ht=function(){f(re)};else if(typeof MessageChannel<"u"){var $t=new MessageChannel,Bt=$t.port2;$t.port1.onmessage=re,ht=function(){Bt.postMessage(null)}}else ht=function(){R(re,0)};function Le(N){k=N,b||(b=!0,ht())}function ke(N,M){T=R(function(){N(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){A||y||(A=!0,Le(_))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var M=3;break;default:M=g}var F=g;g=M;try{return N()}finally{g=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,M){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var F=g;g=N;try{return M()}finally{g=F}},e.unstable_scheduleCallback=function(N,M,F){var le=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?le+F:le):F=le,N){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=F+fe,N={id:d++,callback:M,priorityLevel:N,startTime:F,expirationTime:fe,sortIndex:-1},F>le?(N.sortIndex=F,t(u,N),n(s)===null&&N===n(u)&&(x?(m(T),T=-1):x=!0,ke(p,F-le))):(N.sortIndex=fe,t(s,N),A||y||(A=!0,Le(_))),N},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(N){var M=g;return function(){var F=g;g=M;try{return N.apply(this,arguments)}finally{g=F}}}})(Sh);_h.exports=Sh;var Gy=_h.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ch=E,ct=Gy;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Eh=new Set,go={};function Ar(e,t){oi(e,t),oi(e+"Capture",t)}function oi(e,t){for(go[e]=t,e=0;e<t.length;e++)Eh.add(t[e])}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vu=Object.prototype.hasOwnProperty,Yy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,af={},lf={};function qy(e){return vu.call(lf,e)?!0:vu.call(af,e)?!1:Yy.test(e)?lf[e]=!0:(af[e]=!0,!1)}function Xy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Zy(e,t,n,r){if(t===null||typeof t>"u"||Xy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Xe(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ke[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ke[t]=new Xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ke[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ke[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ke[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ke[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ke[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ke[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ke[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Dc=/[\-:]([a-z])/g;function Lc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Dc,Lc);Ke[t]=new Xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Dc,Lc);Ke[t]=new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Dc,Lc);Ke[t]=new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ke[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ke[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function zc(e,t,n,r){var i=Ke.hasOwnProperty(t)?Ke[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Zy(t,n,i,r)&&(n=null),r||i===null?qy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var xn=Ch.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=Symbol.for("react.element"),Tr=Symbol.for("react.portal"),Dr=Symbol.for("react.fragment"),Mc=Symbol.for("react.strict_mode"),yu=Symbol.for("react.profiler"),kh=Symbol.for("react.provider"),bh=Symbol.for("react.context"),Fc=Symbol.for("react.forward_ref"),xu=Symbol.for("react.suspense"),Au=Symbol.for("react.suspense_list"),Ic=Symbol.for("react.memo"),bn=Symbol.for("react.lazy"),Rh=Symbol.for("react.offscreen"),sf=Symbol.iterator;function Ii(e){return e===null||typeof e!="object"?null:(e=sf&&e[sf]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,Es;function Xi(e){if(Es===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Es=t&&t[1]||""}return`
`+Es+e}var ks=!1;function bs(e,t){if(!e||ks)return"";ks=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{ks=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Xi(e):""}function Jy(e){switch(e.tag){case 5:return Xi(e.type);case 16:return Xi("Lazy");case 13:return Xi("Suspense");case 19:return Xi("SuspenseList");case 0:case 2:case 15:return e=bs(e.type,!1),e;case 11:return e=bs(e.type.render,!1),e;case 1:return e=bs(e.type,!0),e;default:return""}}function wu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dr:return"Fragment";case Tr:return"Portal";case yu:return"Profiler";case Mc:return"StrictMode";case xu:return"Suspense";case Au:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bh:return(e.displayName||"Context")+".Consumer";case kh:return(e._context.displayName||"Context")+".Provider";case Fc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ic:return t=e.displayName||null,t!==null?t:wu(e.type)||"Memo";case bn:t=e._payload,e=e._init;try{return wu(e(t))}catch{}}return null}function e0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wu(t);case 8:return t===Mc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function t0(e){var t=jh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ua(e){e._valueTracker||(e._valueTracker=t0(e))}function Oh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=jh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Xa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _u(e,t){var n=t.checked;return ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function uf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Un(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ph(e,t){t=t.checked,t!=null&&zc(e,"checked",t,!1)}function Su(e,t){Ph(e,t);var n=Un(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Cu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Cu(e,t.type,Un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function cf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Cu(e,t,n){(t!=="number"||Xa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Zi=Array.isArray;function Xr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Un(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Eu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function df(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(O(92));if(Zi(n)){if(1<n.length)throw Error(O(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Un(n)}}function Nh(e,t){var n=Un(t.value),r=Un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ff(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Th(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ku(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Th(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ca,Dh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ca=ca||document.createElement("div"),ca.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ca.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var no={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},n0=["Webkit","ms","Moz","O"];Object.keys(no).forEach(function(e){n0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),no[t]=no[e]})});function Lh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||no.hasOwnProperty(e)&&no[e]?(""+t).trim():t+"px"}function zh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Lh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var r0=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bu(e,t){if(t){if(r0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function Ru(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ju=null;function Kc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ou=null,Zr=null,Jr=null;function pf(e){if(e=Uo(e)){if(typeof Ou!="function")throw Error(O(280));var t=e.stateNode;t&&(t=Bl(t),Ou(e.stateNode,e.type,t))}}function Mh(e){Zr?Jr?Jr.push(e):Jr=[e]:Zr=e}function Fh(){if(Zr){var e=Zr,t=Jr;if(Jr=Zr=null,pf(e),t)for(e=0;e<t.length;e++)pf(t[e])}}function Ih(e,t){return e(t)}function Kh(){}var Rs=!1;function $h(e,t,n){if(Rs)return e(t,n);Rs=!0;try{return Ih(e,t,n)}finally{Rs=!1,(Zr!==null||Jr!==null)&&(Kh(),Fh())}}function yo(e,t){var n=e.stateNode;if(n===null)return null;var r=Bl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(O(231,t,typeof n));return n}var Pu=!1;if(hn)try{var Ki={};Object.defineProperty(Ki,"passive",{get:function(){Pu=!0}}),window.addEventListener("test",Ki,Ki),window.removeEventListener("test",Ki,Ki)}catch{Pu=!1}function i0(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var ro=!1,Za=null,Ja=!1,Nu=null,o0={onError:function(e){ro=!0,Za=e}};function a0(e,t,n,r,i,o,a,l,s){ro=!1,Za=null,i0.apply(o0,arguments)}function l0(e,t,n,r,i,o,a,l,s){if(a0.apply(this,arguments),ro){if(ro){var u=Za;ro=!1,Za=null}else throw Error(O(198));Ja||(Ja=!0,Nu=u)}}function wr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Bh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hf(e){if(wr(e)!==e)throw Error(O(188))}function s0(e){var t=e.alternate;if(!t){if(t=wr(e),t===null)throw Error(O(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return hf(i),e;if(o===r)return hf(i),t;o=o.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?e:t}function Uh(e){return e=s0(e),e!==null?Vh(e):null}function Vh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Vh(e);if(t!==null)return t;e=e.sibling}return null}var Wh=ct.unstable_scheduleCallback,mf=ct.unstable_cancelCallback,u0=ct.unstable_shouldYield,c0=ct.unstable_requestPaint,we=ct.unstable_now,d0=ct.unstable_getCurrentPriorityLevel,$c=ct.unstable_ImmediatePriority,Qh=ct.unstable_UserBlockingPriority,el=ct.unstable_NormalPriority,f0=ct.unstable_LowPriority,Hh=ct.unstable_IdlePriority,Fl=null,Yt=null;function p0(e){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Fl,e,void 0,(e.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:g0,h0=Math.log,m0=Math.LN2;function g0(e){return e>>>=0,e===0?32:31-(h0(e)/m0|0)|0}var da=64,fa=4194304;function Ji(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function tl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Ji(l):(o&=a,o!==0&&(r=Ji(o)))}else a=n&~i,a!==0?r=Ji(a):o!==0&&(r=Ji(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Dt(t),i=1<<n,r|=e[n],t&=~i;return r}function v0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function y0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Dt(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=v0(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function Tu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Gh(){var e=da;return da<<=1,!(da&4194240)&&(da=64),e}function js(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $o(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Dt(t),e[t]=n}function x0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Dt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Bc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ne=0;function Yh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qh,Uc,Xh,Zh,Jh,Du=!1,pa=[],Dn=null,Ln=null,zn=null,xo=new Map,Ao=new Map,jn=[],A0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gf(e,t){switch(e){case"focusin":case"focusout":Dn=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":xo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(t.pointerId)}}function $i(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Uo(t),t!==null&&Uc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function w0(e,t,n,r,i){switch(t){case"focusin":return Dn=$i(Dn,e,t,n,r,i),!0;case"dragenter":return Ln=$i(Ln,e,t,n,r,i),!0;case"mouseover":return zn=$i(zn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return xo.set(o,$i(xo.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ao.set(o,$i(Ao.get(o)||null,e,t,n,r,i)),!0}return!1}function em(e){var t=tr(e.target);if(t!==null){var n=wr(t);if(n!==null){if(t=n.tag,t===13){if(t=Bh(n),t!==null){e.blockedOn=t,Jh(e.priority,function(){Xh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ta(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Lu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ju=r,n.target.dispatchEvent(r),ju=null}else return t=Uo(n),t!==null&&Uc(t),e.blockedOn=n,!1;t.shift()}return!0}function vf(e,t,n){Ta(e)&&n.delete(t)}function _0(){Du=!1,Dn!==null&&Ta(Dn)&&(Dn=null),Ln!==null&&Ta(Ln)&&(Ln=null),zn!==null&&Ta(zn)&&(zn=null),xo.forEach(vf),Ao.forEach(vf)}function Bi(e,t){e.blockedOn===t&&(e.blockedOn=null,Du||(Du=!0,ct.unstable_scheduleCallback(ct.unstable_NormalPriority,_0)))}function wo(e){function t(i){return Bi(i,e)}if(0<pa.length){Bi(pa[0],e);for(var n=1;n<pa.length;n++){var r=pa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Dn!==null&&Bi(Dn,e),Ln!==null&&Bi(Ln,e),zn!==null&&Bi(zn,e),xo.forEach(t),Ao.forEach(t),n=0;n<jn.length;n++)r=jn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<jn.length&&(n=jn[0],n.blockedOn===null);)em(n),n.blockedOn===null&&jn.shift()}var ei=xn.ReactCurrentBatchConfig,nl=!0;function S0(e,t,n,r){var i=ne,o=ei.transition;ei.transition=null;try{ne=1,Vc(e,t,n,r)}finally{ne=i,ei.transition=o}}function C0(e,t,n,r){var i=ne,o=ei.transition;ei.transition=null;try{ne=4,Vc(e,t,n,r)}finally{ne=i,ei.transition=o}}function Vc(e,t,n,r){if(nl){var i=Lu(e,t,n,r);if(i===null)Is(e,t,r,rl,n),gf(e,r);else if(w0(i,e,t,n,r))r.stopPropagation();else if(gf(e,r),t&4&&-1<A0.indexOf(e)){for(;i!==null;){var o=Uo(i);if(o!==null&&qh(o),o=Lu(e,t,n,r),o===null&&Is(e,t,r,rl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Is(e,t,r,null,n)}}var rl=null;function Lu(e,t,n,r){if(rl=null,e=Kc(r),e=tr(e),e!==null)if(t=wr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Bh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return rl=e,null}function tm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(d0()){case $c:return 1;case Qh:return 4;case el:case f0:return 16;case Hh:return 536870912;default:return 16}default:return 16}}var Pn=null,Wc=null,Da=null;function nm(){if(Da)return Da;var e,t=Wc,n=t.length,r,i="value"in Pn?Pn.value:Pn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Da=i.slice(e,1<r?1-r:void 0)}function La(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ha(){return!0}function yf(){return!1}function ft(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ha:yf,this.isPropagationStopped=yf,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ha)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ha)},persist:function(){},isPersistent:ha}),t}var Ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qc=ft(Ei),Bo=ve({},Ei,{view:0,detail:0}),E0=ft(Bo),Os,Ps,Ui,Il=ve({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ui&&(Ui&&e.type==="mousemove"?(Os=e.screenX-Ui.screenX,Ps=e.screenY-Ui.screenY):Ps=Os=0,Ui=e),Os)},movementY:function(e){return"movementY"in e?e.movementY:Ps}}),xf=ft(Il),k0=ve({},Il,{dataTransfer:0}),b0=ft(k0),R0=ve({},Bo,{relatedTarget:0}),Ns=ft(R0),j0=ve({},Ei,{animationName:0,elapsedTime:0,pseudoElement:0}),O0=ft(j0),P0=ve({},Ei,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),N0=ft(P0),T0=ve({},Ei,{data:0}),Af=ft(T0),D0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function M0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=z0[e])?!!t[e]:!1}function Hc(){return M0}var F0=ve({},Bo,{key:function(e){if(e.key){var t=D0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=La(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?L0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hc,charCode:function(e){return e.type==="keypress"?La(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?La(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),I0=ft(F0),K0=ve({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wf=ft(K0),$0=ve({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hc}),B0=ft($0),U0=ve({},Ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),V0=ft(U0),W0=ve({},Il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Q0=ft(W0),H0=[9,13,27,32],Gc=hn&&"CompositionEvent"in window,io=null;hn&&"documentMode"in document&&(io=document.documentMode);var G0=hn&&"TextEvent"in window&&!io,rm=hn&&(!Gc||io&&8<io&&11>=io),_f=String.fromCharCode(32),Sf=!1;function im(e,t){switch(e){case"keyup":return H0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function om(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lr=!1;function Y0(e,t){switch(e){case"compositionend":return om(t);case"keypress":return t.which!==32?null:(Sf=!0,_f);case"textInput":return e=t.data,e===_f&&Sf?null:e;default:return null}}function q0(e,t){if(Lr)return e==="compositionend"||!Gc&&im(e,t)?(e=nm(),Da=Wc=Pn=null,Lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return rm&&t.locale!=="ko"?null:t.data;default:return null}}var X0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!X0[e.type]:t==="textarea"}function am(e,t,n,r){Mh(r),t=il(t,"onChange"),0<t.length&&(n=new Qc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var oo=null,_o=null;function Z0(e){vm(e,0)}function Kl(e){var t=Fr(e);if(Oh(t))return e}function J0(e,t){if(e==="change")return t}var lm=!1;if(hn){var Ts;if(hn){var Ds="oninput"in document;if(!Ds){var Ef=document.createElement("div");Ef.setAttribute("oninput","return;"),Ds=typeof Ef.oninput=="function"}Ts=Ds}else Ts=!1;lm=Ts&&(!document.documentMode||9<document.documentMode)}function kf(){oo&&(oo.detachEvent("onpropertychange",sm),_o=oo=null)}function sm(e){if(e.propertyName==="value"&&Kl(_o)){var t=[];am(t,_o,e,Kc(e)),$h(Z0,t)}}function ex(e,t,n){e==="focusin"?(kf(),oo=t,_o=n,oo.attachEvent("onpropertychange",sm)):e==="focusout"&&kf()}function tx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Kl(_o)}function nx(e,t){if(e==="click")return Kl(t)}function rx(e,t){if(e==="input"||e==="change")return Kl(t)}function ix(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:ix;function So(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vu.call(t,i)||!It(e[i],t[i]))return!1}return!0}function bf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rf(e,t){var n=bf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bf(n)}}function um(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?um(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cm(){for(var e=window,t=Xa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xa(e.document)}return t}function Yc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ox(e){var t=cm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&um(n.ownerDocument.documentElement,n)){if(r!==null&&Yc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Rf(n,o);var a=Rf(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ax=hn&&"documentMode"in document&&11>=document.documentMode,zr=null,zu=null,ao=null,Mu=!1;function jf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mu||zr==null||zr!==Xa(r)||(r=zr,"selectionStart"in r&&Yc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ao&&So(ao,r)||(ao=r,r=il(zu,"onSelect"),0<r.length&&(t=new Qc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zr)))}function ma(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mr={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionend:ma("Transition","TransitionEnd")},Ls={},dm={};hn&&(dm=document.createElement("div").style,"AnimationEvent"in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),"TransitionEvent"in window||delete Mr.transitionend.transition);function $l(e){if(Ls[e])return Ls[e];if(!Mr[e])return e;var t=Mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in dm)return Ls[e]=t[n];return e}var fm=$l("animationend"),pm=$l("animationiteration"),hm=$l("animationstart"),mm=$l("transitionend"),gm=new Map,Of="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wn(e,t){gm.set(e,t),Ar(t,[e])}for(var zs=0;zs<Of.length;zs++){var Ms=Of[zs],lx=Ms.toLowerCase(),sx=Ms[0].toUpperCase()+Ms.slice(1);Wn(lx,"on"+sx)}Wn(fm,"onAnimationEnd");Wn(pm,"onAnimationIteration");Wn(hm,"onAnimationStart");Wn("dblclick","onDoubleClick");Wn("focusin","onFocus");Wn("focusout","onBlur");Wn(mm,"onTransitionEnd");oi("onMouseEnter",["mouseout","mouseover"]);oi("onMouseLeave",["mouseout","mouseover"]);oi("onPointerEnter",["pointerout","pointerover"]);oi("onPointerLeave",["pointerout","pointerover"]);Ar("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ar("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ar("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ar("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ar("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ar("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ux=new Set("cancel close invalid load scroll toggle".split(" ").concat(eo));function Pf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,l0(r,t,void 0,e),e.currentTarget=null}function vm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Pf(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Pf(i,l,u),o=s}}}if(Ja)throw e=Nu,Ja=!1,Nu=null,e}function ue(e,t){var n=t[Bu];n===void 0&&(n=t[Bu]=new Set);var r=e+"__bubble";n.has(r)||(ym(t,e,2,!1),n.add(r))}function Fs(e,t,n){var r=0;t&&(r|=4),ym(n,e,r,t)}var ga="_reactListening"+Math.random().toString(36).slice(2);function Co(e){if(!e[ga]){e[ga]=!0,Eh.forEach(function(n){n!=="selectionchange"&&(ux.has(n)||Fs(n,!1,e),Fs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ga]||(t[ga]=!0,Fs("selectionchange",!1,t))}}function ym(e,t,n,r){switch(tm(t)){case 1:var i=S0;break;case 4:i=C0;break;default:i=Vc}n=i.bind(null,t,n,e),i=void 0,!Pu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Is(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=tr(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}$h(function(){var u=o,d=Kc(n),h=[];e:{var g=gm.get(e);if(g!==void 0){var y=Qc,A=e;switch(e){case"keypress":if(La(n)===0)break e;case"keydown":case"keyup":y=I0;break;case"focusin":A="focus",y=Ns;break;case"focusout":A="blur",y=Ns;break;case"beforeblur":case"afterblur":y=Ns;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=xf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=b0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=B0;break;case fm:case pm:case hm:y=O0;break;case mm:y=V0;break;case"scroll":y=E0;break;case"wheel":y=Q0;break;case"copy":case"cut":case"paste":y=N0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=wf}var x=(t&4)!==0,R=!x&&e==="scroll",m=x?g!==null?g+"Capture":null:g;x=[];for(var f=u,v;f!==null;){v=f;var p=v.stateNode;if(v.tag===5&&p!==null&&(v=p,m!==null&&(p=yo(f,m),p!=null&&x.push(Eo(f,p,v)))),R)break;f=f.return}0<x.length&&(g=new y(g,A,null,n,d),h.push({event:g,listeners:x}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==ju&&(A=n.relatedTarget||n.fromElement)&&(tr(A)||A[mn]))break e;if((y||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,y?(A=n.relatedTarget||n.toElement,y=u,A=A?tr(A):null,A!==null&&(R=wr(A),A!==R||A.tag!==5&&A.tag!==6)&&(A=null)):(y=null,A=u),y!==A)){if(x=xf,p="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(x=wf,p="onPointerLeave",m="onPointerEnter",f="pointer"),R=y==null?g:Fr(y),v=A==null?g:Fr(A),g=new x(p,f+"leave",y,n,d),g.target=R,g.relatedTarget=v,p=null,tr(d)===u&&(x=new x(m,f+"enter",A,n,d),x.target=v,x.relatedTarget=R,p=x),R=p,y&&A)t:{for(x=y,m=A,f=0,v=x;v;v=Rr(v))f++;for(v=0,p=m;p;p=Rr(p))v++;for(;0<f-v;)x=Rr(x),f--;for(;0<v-f;)m=Rr(m),v--;for(;f--;){if(x===m||m!==null&&x===m.alternate)break t;x=Rr(x),m=Rr(m)}x=null}else x=null;y!==null&&Nf(h,g,y,x,!1),A!==null&&R!==null&&Nf(h,R,A,x,!0)}}e:{if(g=u?Fr(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var _=J0;else if(Cf(g))if(lm)_=rx;else{_=tx;var b=ex}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(_=nx);if(_&&(_=_(e,u))){am(h,_,n,d);break e}b&&b(e,g,u),e==="focusout"&&(b=g._wrapperState)&&b.controlled&&g.type==="number"&&Cu(g,"number",g.value)}switch(b=u?Fr(u):window,e){case"focusin":(Cf(b)||b.contentEditable==="true")&&(zr=b,zu=u,ao=null);break;case"focusout":ao=zu=zr=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,jf(h,n,d);break;case"selectionchange":if(ax)break;case"keydown":case"keyup":jf(h,n,d)}var k;if(Gc)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Lr?im(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(rm&&n.locale!=="ko"&&(Lr||T!=="onCompositionStart"?T==="onCompositionEnd"&&Lr&&(k=nm()):(Pn=d,Wc="value"in Pn?Pn.value:Pn.textContent,Lr=!0)),b=il(u,T),0<b.length&&(T=new Af(T,e,null,n,d),h.push({event:T,listeners:b}),k?T.data=k:(k=om(n),k!==null&&(T.data=k)))),(k=G0?Y0(e,n):q0(e,n))&&(u=il(u,"onBeforeInput"),0<u.length&&(d=new Af("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=k))}vm(h,t)})}function Eo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function il(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=yo(e,n),o!=null&&r.unshift(Eo(e,o,i)),o=yo(e,t),o!=null&&r.push(Eo(e,o,i))),e=e.return}return r}function Rr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nf(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=yo(n,o),s!=null&&a.unshift(Eo(n,s,l))):i||(s=yo(n,o),s!=null&&a.push(Eo(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var cx=/\r\n?/g,dx=/\u0000|\uFFFD/g;function Tf(e){return(typeof e=="string"?e:""+e).replace(cx,`
`).replace(dx,"")}function va(e,t,n){if(t=Tf(t),Tf(e)!==t&&n)throw Error(O(425))}function ol(){}var Fu=null,Iu=null;function Ku(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $u=typeof setTimeout=="function"?setTimeout:void 0,fx=typeof clearTimeout=="function"?clearTimeout:void 0,Df=typeof Promise=="function"?Promise:void 0,px=typeof queueMicrotask=="function"?queueMicrotask:typeof Df<"u"?function(e){return Df.resolve(null).then(e).catch(hx)}:$u;function hx(e){setTimeout(function(){throw e})}function Ks(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),wo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);wo(t)}function Mn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Lf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ki=Math.random().toString(36).slice(2),Ht="__reactFiber$"+ki,ko="__reactProps$"+ki,mn="__reactContainer$"+ki,Bu="__reactEvents$"+ki,mx="__reactListeners$"+ki,gx="__reactHandles$"+ki;function tr(e){var t=e[Ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mn]||n[Ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Lf(e);e!==null;){if(n=e[Ht])return n;e=Lf(e)}return t}e=n,n=e.parentNode}return null}function Uo(e){return e=e[Ht]||e[mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function Bl(e){return e[ko]||null}var Uu=[],Ir=-1;function Qn(e){return{current:e}}function de(e){0>Ir||(e.current=Uu[Ir],Uu[Ir]=null,Ir--)}function se(e,t){Ir++,Uu[Ir]=e.current,e.current=t}var Vn={},He=Qn(Vn),it=Qn(!1),cr=Vn;function ai(e,t){var n=e.type.contextTypes;if(!n)return Vn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ot(e){return e=e.childContextTypes,e!=null}function al(){de(it),de(He)}function zf(e,t,n){if(He.current!==Vn)throw Error(O(168));se(He,t),se(it,n)}function xm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(O(108,e0(e)||"Unknown",i));return ve({},n,r)}function ll(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vn,cr=He.current,se(He,e),se(it,it.current),!0}function Mf(e,t,n){var r=e.stateNode;if(!r)throw Error(O(169));n?(e=xm(e,t,cr),r.__reactInternalMemoizedMergedChildContext=e,de(it),de(He),se(He,e)):de(it),se(it,n)}var ln=null,Ul=!1,$s=!1;function Am(e){ln===null?ln=[e]:ln.push(e)}function vx(e){Ul=!0,Am(e)}function Hn(){if(!$s&&ln!==null){$s=!0;var e=0,t=ne;try{var n=ln;for(ne=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ln=null,Ul=!1}catch(i){throw ln!==null&&(ln=ln.slice(e+1)),Wh($c,Hn),i}finally{ne=t,$s=!1}}return null}var Kr=[],$r=0,sl=null,ul=0,vt=[],yt=0,dr=null,un=1,cn="";function Zn(e,t){Kr[$r++]=ul,Kr[$r++]=sl,sl=e,ul=t}function wm(e,t,n){vt[yt++]=un,vt[yt++]=cn,vt[yt++]=dr,dr=e;var r=un;e=cn;var i=32-Dt(r)-1;r&=~(1<<i),n+=1;var o=32-Dt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,un=1<<32-Dt(t)+i|n<<i|r,cn=o+e}else un=1<<o|n<<i|r,cn=e}function qc(e){e.return!==null&&(Zn(e,1),wm(e,1,0))}function Xc(e){for(;e===sl;)sl=Kr[--$r],Kr[$r]=null,ul=Kr[--$r],Kr[$r]=null;for(;e===dr;)dr=vt[--yt],vt[yt]=null,cn=vt[--yt],vt[yt]=null,un=vt[--yt],vt[yt]=null}var ut=null,st=null,he=!1,Nt=null;function _m(e,t){var n=wt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ff(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ut=e,st=Mn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ut=e,st=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dr!==null?{id:un,overflow:cn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=wt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ut=e,st=null,!0):!1;default:return!1}}function Vu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wu(e){if(he){var t=st;if(t){var n=t;if(!Ff(e,t)){if(Vu(e))throw Error(O(418));t=Mn(n.nextSibling);var r=ut;t&&Ff(e,t)?_m(r,n):(e.flags=e.flags&-4097|2,he=!1,ut=e)}}else{if(Vu(e))throw Error(O(418));e.flags=e.flags&-4097|2,he=!1,ut=e}}}function If(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ut=e}function ya(e){if(e!==ut)return!1;if(!he)return If(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ku(e.type,e.memoizedProps)),t&&(t=st)){if(Vu(e))throw Sm(),Error(O(418));for(;t;)_m(e,t),t=Mn(t.nextSibling)}if(If(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){st=Mn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}st=null}}else st=ut?Mn(e.stateNode.nextSibling):null;return!0}function Sm(){for(var e=st;e;)e=Mn(e.nextSibling)}function li(){st=ut=null,he=!1}function Zc(e){Nt===null?Nt=[e]:Nt.push(e)}var yx=xn.ReactCurrentBatchConfig;function jt(e,t){if(e&&e.defaultProps){t=ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var cl=Qn(null),dl=null,Br=null,Jc=null;function ed(){Jc=Br=dl=null}function td(e){var t=cl.current;de(cl),e._currentValue=t}function Qu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ti(e,t){dl=e,Jc=Br=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(tt=!0),e.firstContext=null)}function St(e){var t=e._currentValue;if(Jc!==e)if(e={context:e,memoizedValue:t,next:null},Br===null){if(dl===null)throw Error(O(308));Br=e,dl.dependencies={lanes:0,firstContext:e}}else Br=Br.next=e;return t}var nr=null;function nd(e){nr===null?nr=[e]:nr.push(e)}function Cm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,nd(t)):(n.next=i.next,i.next=n),t.interleaved=n,gn(e,r)}function gn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Rn=!1;function rd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Em(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,gn(e,n)}return i=r.interleaved,i===null?(t.next=t,nd(r)):(t.next=i.next,i.next=t),r.interleaved=t,gn(e,n)}function za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bc(e,n)}}function Kf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fl(e,t,n,r){var i=e.updateQueue;Rn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=s))}if(o!==null){var h=i.baseState;a=0,d=u=s=null,l=o;do{var g=l.lane,y=l.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=e,x=l;switch(g=t,y=n,x.tag){case 1:if(A=x.payload,typeof A=="function"){h=A.call(y,h,g);break e}h=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=x.payload,g=typeof A=="function"?A.call(y,h,g):A,g==null)break e;h=ve({},h,g);break e;case 2:Rn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else y={eventTime:y,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=y,s=h):d=d.next=y,a|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(d===null&&(s=h),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);pr|=a,e.lanes=a,e.memoizedState=h}}function $f(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var km=new Ch.Component().refs;function Hu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vl={isMounted:function(e){return(e=e._reactInternals)?wr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ye(),i=Kn(e),o=dn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Fn(e,o,i),t!==null&&(Lt(t,e,i,r),za(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ye(),i=Kn(e),o=dn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Fn(e,o,i),t!==null&&(Lt(t,e,i,r),za(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ye(),r=Kn(e),i=dn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Fn(e,i,r),t!==null&&(Lt(t,e,r,n),za(t,e,r))}};function Bf(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!So(n,r)||!So(i,o):!0}function bm(e,t,n){var r=!1,i=Vn,o=t.contextType;return typeof o=="object"&&o!==null?o=St(o):(i=ot(t)?cr:He.current,r=t.contextTypes,o=(r=r!=null)?ai(e,i):Vn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Vl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Uf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vl.enqueueReplaceState(t,t.state,null)}function Gu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=km,rd(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=St(o):(o=ot(t)?cr:He.current,i.context=ai(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Hu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Vl.enqueueReplaceState(i,i.state,null),fl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Vi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===km&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,e))}return e}function xa(e,t){throw e=Object.prototype.toString.call(t),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vf(e){var t=e._init;return t(e._payload)}function Rm(e){function t(m,f){if(e){var v=m.deletions;v===null?(m.deletions=[f],m.flags|=16):v.push(f)}}function n(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=$n(m,f),m.index=0,m.sibling=null,m}function o(m,f,v){return m.index=v,e?(v=m.alternate,v!==null?(v=v.index,v<f?(m.flags|=2,f):v):(m.flags|=2,f)):(m.flags|=1048576,f)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,f,v,p){return f===null||f.tag!==6?(f=Gs(v,m.mode,p),f.return=m,f):(f=i(f,v),f.return=m,f)}function s(m,f,v,p){var _=v.type;return _===Dr?d(m,f,v.props.children,p,v.key):f!==null&&(f.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===bn&&Vf(_)===f.type)?(p=i(f,v.props),p.ref=Vi(m,f,v),p.return=m,p):(p=Ba(v.type,v.key,v.props,null,m.mode,p),p.ref=Vi(m,f,v),p.return=m,p)}function u(m,f,v,p){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=Ys(v,m.mode,p),f.return=m,f):(f=i(f,v.children||[]),f.return=m,f)}function d(m,f,v,p,_){return f===null||f.tag!==7?(f=lr(v,m.mode,p,_),f.return=m,f):(f=i(f,v),f.return=m,f)}function h(m,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Gs(""+f,m.mode,v),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case sa:return v=Ba(f.type,f.key,f.props,null,m.mode,v),v.ref=Vi(m,null,f),v.return=m,v;case Tr:return f=Ys(f,m.mode,v),f.return=m,f;case bn:var p=f._init;return h(m,p(f._payload),v)}if(Zi(f)||Ii(f))return f=lr(f,m.mode,v,null),f.return=m,f;xa(m,f)}return null}function g(m,f,v,p){var _=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return _!==null?null:l(m,f,""+v,p);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case sa:return v.key===_?s(m,f,v,p):null;case Tr:return v.key===_?u(m,f,v,p):null;case bn:return _=v._init,g(m,f,_(v._payload),p)}if(Zi(v)||Ii(v))return _!==null?null:d(m,f,v,p,null);xa(m,v)}return null}function y(m,f,v,p,_){if(typeof p=="string"&&p!==""||typeof p=="number")return m=m.get(v)||null,l(f,m,""+p,_);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case sa:return m=m.get(p.key===null?v:p.key)||null,s(f,m,p,_);case Tr:return m=m.get(p.key===null?v:p.key)||null,u(f,m,p,_);case bn:var b=p._init;return y(m,f,v,b(p._payload),_)}if(Zi(p)||Ii(p))return m=m.get(v)||null,d(f,m,p,_,null);xa(f,p)}return null}function A(m,f,v,p){for(var _=null,b=null,k=f,T=f=0,H=null;k!==null&&T<v.length;T++){k.index>T?(H=k,k=null):H=k.sibling;var K=g(m,k,v[T],p);if(K===null){k===null&&(k=H);break}e&&k&&K.alternate===null&&t(m,k),f=o(K,f,T),b===null?_=K:b.sibling=K,b=K,k=H}if(T===v.length)return n(m,k),he&&Zn(m,T),_;if(k===null){for(;T<v.length;T++)k=h(m,v[T],p),k!==null&&(f=o(k,f,T),b===null?_=k:b.sibling=k,b=k);return he&&Zn(m,T),_}for(k=r(m,k);T<v.length;T++)H=y(k,m,T,v[T],p),H!==null&&(e&&H.alternate!==null&&k.delete(H.key===null?T:H.key),f=o(H,f,T),b===null?_=H:b.sibling=H,b=H);return e&&k.forEach(function(_e){return t(m,_e)}),he&&Zn(m,T),_}function x(m,f,v,p){var _=Ii(v);if(typeof _!="function")throw Error(O(150));if(v=_.call(v),v==null)throw Error(O(151));for(var b=_=null,k=f,T=f=0,H=null,K=v.next();k!==null&&!K.done;T++,K=v.next()){k.index>T?(H=k,k=null):H=k.sibling;var _e=g(m,k,K.value,p);if(_e===null){k===null&&(k=H);break}e&&k&&_e.alternate===null&&t(m,k),f=o(_e,f,T),b===null?_=_e:b.sibling=_e,b=_e,k=H}if(K.done)return n(m,k),he&&Zn(m,T),_;if(k===null){for(;!K.done;T++,K=v.next())K=h(m,K.value,p),K!==null&&(f=o(K,f,T),b===null?_=K:b.sibling=K,b=K);return he&&Zn(m,T),_}for(k=r(m,k);!K.done;T++,K=v.next())K=y(k,m,T,K.value,p),K!==null&&(e&&K.alternate!==null&&k.delete(K.key===null?T:K.key),f=o(K,f,T),b===null?_=K:b.sibling=K,b=K);return e&&k.forEach(function(re){return t(m,re)}),he&&Zn(m,T),_}function R(m,f,v,p){if(typeof v=="object"&&v!==null&&v.type===Dr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case sa:e:{for(var _=v.key,b=f;b!==null;){if(b.key===_){if(_=v.type,_===Dr){if(b.tag===7){n(m,b.sibling),f=i(b,v.props.children),f.return=m,m=f;break e}}else if(b.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===bn&&Vf(_)===b.type){n(m,b.sibling),f=i(b,v.props),f.ref=Vi(m,b,v),f.return=m,m=f;break e}n(m,b);break}else t(m,b);b=b.sibling}v.type===Dr?(f=lr(v.props.children,m.mode,p,v.key),f.return=m,m=f):(p=Ba(v.type,v.key,v.props,null,m.mode,p),p.ref=Vi(m,f,v),p.return=m,m=p)}return a(m);case Tr:e:{for(b=v.key;f!==null;){if(f.key===b)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(m,f.sibling),f=i(f,v.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else t(m,f);f=f.sibling}f=Ys(v,m.mode,p),f.return=m,m=f}return a(m);case bn:return b=v._init,R(m,f,b(v._payload),p)}if(Zi(v))return A(m,f,v,p);if(Ii(v))return x(m,f,v,p);xa(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,v),f.return=m,m=f):(n(m,f),f=Gs(v,m.mode,p),f.return=m,m=f),a(m)):n(m,f)}return R}var si=Rm(!0),jm=Rm(!1),Vo={},qt=Qn(Vo),bo=Qn(Vo),Ro=Qn(Vo);function rr(e){if(e===Vo)throw Error(O(174));return e}function id(e,t){switch(se(Ro,t),se(bo,e),se(qt,Vo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ku(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ku(t,e)}de(qt),se(qt,t)}function ui(){de(qt),de(bo),de(Ro)}function Om(e){rr(Ro.current);var t=rr(qt.current),n=ku(t,e.type);t!==n&&(se(bo,e),se(qt,n))}function od(e){bo.current===e&&(de(qt),de(bo))}var me=Qn(0);function pl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bs=[];function ad(){for(var e=0;e<Bs.length;e++)Bs[e]._workInProgressVersionPrimary=null;Bs.length=0}var Ma=xn.ReactCurrentDispatcher,Us=xn.ReactCurrentBatchConfig,fr=0,ge=null,Re=null,Ne=null,hl=!1,lo=!1,jo=0,xx=0;function Be(){throw Error(O(321))}function ld(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!It(e[n],t[n]))return!1;return!0}function sd(e,t,n,r,i,o){if(fr=o,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ma.current=e===null||e.memoizedState===null?Sx:Cx,e=n(r,i),lo){o=0;do{if(lo=!1,jo=0,25<=o)throw Error(O(301));o+=1,Ne=Re=null,t.updateQueue=null,Ma.current=Ex,e=n(r,i)}while(lo)}if(Ma.current=ml,t=Re!==null&&Re.next!==null,fr=0,Ne=Re=ge=null,hl=!1,t)throw Error(O(300));return e}function ud(){var e=jo!==0;return jo=0,e}function Wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?ge.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function Ct(){if(Re===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Ne===null?ge.memoizedState:Ne.next;if(t!==null)Ne=t,Re=e;else{if(e===null)throw Error(O(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Ne===null?ge.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function Oo(e,t){return typeof t=="function"?t(e):t}function Vs(e){var t=Ct(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=Re,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var d=u.lane;if((fr&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=h,a=r):s=s.next=h,ge.lanes|=d,pr|=d}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,It(r,t.memoizedState)||(tt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ge.lanes|=o,pr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ws(e){var t=Ct(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);It(o,t.memoizedState)||(tt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Pm(){}function Nm(e,t){var n=ge,r=Ct(),i=t(),o=!It(r.memoizedState,i);if(o&&(r.memoizedState=i,tt=!0),r=r.queue,cd(Lm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,Po(9,Dm.bind(null,n,r,i,t),void 0,null),De===null)throw Error(O(349));fr&30||Tm(n,t,i)}return i}function Tm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Dm(e,t,n,r){t.value=n,t.getSnapshot=r,zm(t)&&Mm(e)}function Lm(e,t,n){return n(function(){zm(t)&&Mm(e)})}function zm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!It(e,n)}catch{return!0}}function Mm(e){var t=gn(e,1);t!==null&&Lt(t,e,1,-1)}function Wf(e){var t=Wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:e},t.queue=e,e=e.dispatch=_x.bind(null,ge,e),[t.memoizedState,e]}function Po(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Fm(){return Ct().memoizedState}function Fa(e,t,n,r){var i=Wt();ge.flags|=e,i.memoizedState=Po(1|t,n,void 0,r===void 0?null:r)}function Wl(e,t,n,r){var i=Ct();r=r===void 0?null:r;var o=void 0;if(Re!==null){var a=Re.memoizedState;if(o=a.destroy,r!==null&&ld(r,a.deps)){i.memoizedState=Po(t,n,o,r);return}}ge.flags|=e,i.memoizedState=Po(1|t,n,o,r)}function Qf(e,t){return Fa(8390656,8,e,t)}function cd(e,t){return Wl(2048,8,e,t)}function Im(e,t){return Wl(4,2,e,t)}function Km(e,t){return Wl(4,4,e,t)}function $m(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bm(e,t,n){return n=n!=null?n.concat([e]):null,Wl(4,4,$m.bind(null,t,e),n)}function dd(){}function Um(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ld(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Vm(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ld(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wm(e,t,n){return fr&21?(It(n,t)||(n=Gh(),ge.lanes|=n,pr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n)}function Ax(e,t){var n=ne;ne=n!==0&&4>n?n:4,e(!0);var r=Us.transition;Us.transition={};try{e(!1),t()}finally{ne=n,Us.transition=r}}function Qm(){return Ct().memoizedState}function wx(e,t,n){var r=Kn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hm(e))Gm(t,n);else if(n=Cm(e,t,n,r),n!==null){var i=Ye();Lt(n,e,r,i),Ym(n,t,r)}}function _x(e,t,n){var r=Kn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hm(e))Gm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,It(l,a)){var s=t.interleaved;s===null?(i.next=i,nd(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Cm(e,t,i,r),n!==null&&(i=Ye(),Lt(n,e,r,i),Ym(n,t,r))}}function Hm(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function Gm(e,t){lo=hl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ym(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bc(e,n)}}var ml={readContext:St,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useInsertionEffect:Be,useLayoutEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useMutableSource:Be,useSyncExternalStore:Be,useId:Be,unstable_isNewReconciler:!1},Sx={readContext:St,useCallback:function(e,t){return Wt().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:Qf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fa(4194308,4,$m.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fa(4,2,e,t)},useMemo:function(e,t){var n=Wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=wx.bind(null,ge,e),[r.memoizedState,e]},useRef:function(e){var t=Wt();return e={current:e},t.memoizedState=e},useState:Wf,useDebugValue:dd,useDeferredValue:function(e){return Wt().memoizedState=e},useTransition:function(){var e=Wf(!1),t=e[0];return e=Ax.bind(null,e[1]),Wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ge,i=Wt();if(he){if(n===void 0)throw Error(O(407));n=n()}else{if(n=t(),De===null)throw Error(O(349));fr&30||Tm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Qf(Lm.bind(null,r,o,e),[e]),r.flags|=2048,Po(9,Dm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Wt(),t=De.identifierPrefix;if(he){var n=cn,r=un;n=(r&~(1<<32-Dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=jo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=xx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Cx={readContext:St,useCallback:Um,useContext:St,useEffect:cd,useImperativeHandle:Bm,useInsertionEffect:Im,useLayoutEffect:Km,useMemo:Vm,useReducer:Vs,useRef:Fm,useState:function(){return Vs(Oo)},useDebugValue:dd,useDeferredValue:function(e){var t=Ct();return Wm(t,Re.memoizedState,e)},useTransition:function(){var e=Vs(Oo)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:Pm,useSyncExternalStore:Nm,useId:Qm,unstable_isNewReconciler:!1},Ex={readContext:St,useCallback:Um,useContext:St,useEffect:cd,useImperativeHandle:Bm,useInsertionEffect:Im,useLayoutEffect:Km,useMemo:Vm,useReducer:Ws,useRef:Fm,useState:function(){return Ws(Oo)},useDebugValue:dd,useDeferredValue:function(e){var t=Ct();return Re===null?t.memoizedState=e:Wm(t,Re.memoizedState,e)},useTransition:function(){var e=Ws(Oo)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:Pm,useSyncExternalStore:Nm,useId:Qm,unstable_isNewReconciler:!1};function ci(e,t){try{var n="",r=t;do n+=Jy(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Qs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Yu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var kx=typeof WeakMap=="function"?WeakMap:Map;function qm(e,t,n){n=dn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vl||(vl=!0,oc=r),Yu(e,t)},n}function Xm(e,t,n){n=dn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Yu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Yu(e,t),typeof r!="function"&&(In===null?In=new Set([this]):In.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Hf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new kx;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Kx.bind(null,e,t,n),t.then(e,e))}function Gf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Yf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=dn(-1,1),t.tag=2,Fn(n,t,1))),n.lanes|=1),e)}var bx=xn.ReactCurrentOwner,tt=!1;function Ge(e,t,n,r){t.child=e===null?jm(t,null,n,r):si(t,e.child,n,r)}function qf(e,t,n,r,i){n=n.render;var o=t.ref;return ti(t,i),r=sd(e,t,n,r,o,i),n=ud(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vn(e,t,i)):(he&&n&&qc(t),t.flags|=1,Ge(e,t,r,i),t.child)}function Xf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!xd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Zm(e,t,o,r,i)):(e=Ba(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:So,n(a,r)&&e.ref===t.ref)return vn(e,t,i)}return t.flags|=1,e=$n(o,r),e.ref=t.ref,e.return=t,t.child=e}function Zm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(So(o,r)&&e.ref===t.ref)if(tt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(tt=!0);else return t.lanes=e.lanes,vn(e,t,i)}return qu(e,t,n,r,i)}function Jm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(Vr,lt),lt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(Vr,lt),lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,se(Vr,lt),lt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,se(Vr,lt),lt|=r;return Ge(e,t,i,n),t.child}function eg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function qu(e,t,n,r,i){var o=ot(n)?cr:He.current;return o=ai(t,o),ti(t,i),n=sd(e,t,n,r,o,i),r=ud(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,vn(e,t,i)):(he&&r&&qc(t),t.flags|=1,Ge(e,t,n,i),t.child)}function Zf(e,t,n,r,i){if(ot(n)){var o=!0;ll(t)}else o=!1;if(ti(t,i),t.stateNode===null)Ia(e,t),bm(t,n,r),Gu(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=St(u):(u=ot(n)?cr:He.current,u=ai(t,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Uf(t,a,r,u),Rn=!1;var g=t.memoizedState;a.state=g,fl(t,r,a,i),s=t.memoizedState,l!==r||g!==s||it.current||Rn?(typeof d=="function"&&(Hu(t,n,d,r),s=t.memoizedState),(l=Rn||Bf(t,n,l,r,g,s,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Em(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:jt(t.type,l),a.props=u,h=t.pendingProps,g=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=St(s):(s=ot(n)?cr:He.current,s=ai(t,s));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==h||g!==s)&&Uf(t,a,r,s),Rn=!1,g=t.memoizedState,a.state=g,fl(t,r,a,i);var A=t.memoizedState;l!==h||g!==A||it.current||Rn?(typeof y=="function"&&(Hu(t,n,y,r),A=t.memoizedState),(u=Rn||Bf(t,n,u,r,g,A,s)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,A,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,A,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=A),a.props=r,a.state=A,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Xu(e,t,n,r,o,i)}function Xu(e,t,n,r,i,o){eg(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Mf(t,n,!1),vn(e,t,o);r=t.stateNode,bx.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=si(t,e.child,null,o),t.child=si(t,null,l,o)):Ge(e,t,l,o),t.memoizedState=r.state,i&&Mf(t,n,!0),t.child}function tg(e){var t=e.stateNode;t.pendingContext?zf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&zf(e,t.context,!1),id(e,t.containerInfo)}function Jf(e,t,n,r,i){return li(),Zc(i),t.flags|=256,Ge(e,t,n,r),t.child}var Zu={dehydrated:null,treeContext:null,retryLane:0};function Ju(e){return{baseLanes:e,cachePool:null,transitions:null}}function ng(e,t,n){var r=t.pendingProps,i=me.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),se(me,i&1),e===null)return Wu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Gl(a,r,0,null),e=lr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ju(n),t.memoizedState=Zu,e):fd(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Rx(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=$n(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=$n(l,o):(o=lr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Ju(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Zu,r}return o=e.child,e=o.sibling,r=$n(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function fd(e,t){return t=Gl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Aa(e,t,n,r){return r!==null&&Zc(r),si(t,e.child,null,n),e=fd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rx(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Qs(Error(O(422))),Aa(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Gl({mode:"visible",children:r.children},i,0,null),o=lr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&si(t,e.child,null,a),t.child.memoizedState=Ju(a),t.memoizedState=Zu,o);if(!(t.mode&1))return Aa(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(O(419)),r=Qs(o,r,void 0),Aa(e,t,a,r)}if(l=(a&e.childLanes)!==0,tt||l){if(r=De,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,gn(e,i),Lt(r,e,i,-1))}return yd(),r=Qs(Error(O(421))),Aa(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=$x.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,st=Mn(i.nextSibling),ut=t,he=!0,Nt=null,e!==null&&(vt[yt++]=un,vt[yt++]=cn,vt[yt++]=dr,un=e.id,cn=e.overflow,dr=t),t=fd(t,r.children),t.flags|=4096,t)}function ep(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qu(e.return,t,n)}function Hs(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function rg(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ge(e,t,r.children,n),r=me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ep(e,n,t);else if(e.tag===19)ep(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(me,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&pl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Hs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&pl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Hs(t,!0,n,null,o);break;case"together":Hs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ia(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,n=$n(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$n(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jx(e,t,n){switch(t.tag){case 3:tg(t),li();break;case 5:Om(t);break;case 1:ot(t.type)&&ll(t);break;case 4:id(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;se(cl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(se(me,me.current&1),t.flags|=128,null):n&t.child.childLanes?ng(e,t,n):(se(me,me.current&1),e=vn(e,t,n),e!==null?e.sibling:null);se(me,me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return rg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(me,me.current),r)break;return null;case 22:case 23:return t.lanes=0,Jm(e,t,n)}return vn(e,t,n)}var ig,ec,og,ag;ig=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ec=function(){};og=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,rr(qt.current);var o=null;switch(n){case"input":i=_u(e,i),r=_u(e,r),o=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),o=[];break;case"textarea":i=Eu(e,i),r=Eu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ol)}bu(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(go.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(go.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ue("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};ag=function(e,t,n,r){n!==r&&(t.flags|=4)};function Wi(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ox(e,t,n){var r=t.pendingProps;switch(Xc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return ot(t.type)&&al(),Ue(t),null;case 3:return r=t.stateNode,ui(),de(it),de(He),ad(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ya(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Nt!==null&&(sc(Nt),Nt=null))),ec(e,t),Ue(t),null;case 5:od(t);var i=rr(Ro.current);if(n=t.type,e!==null&&t.stateNode!=null)og(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(O(166));return Ue(t),null}if(e=rr(qt.current),ya(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ht]=t,r[ko]=o,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<eo.length;i++)ue(eo[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":uf(r,o),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ue("invalid",r);break;case"textarea":df(r,o),ue("invalid",r)}bu(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&va(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&va(r.textContent,l,e),i=["children",""+l]):go.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ue("scroll",r)}switch(n){case"input":ua(r),cf(r,o,!0);break;case"textarea":ua(r),ff(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ol)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Th(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ht]=t,e[ko]=r,ig(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ru(n,r),n){case"dialog":ue("cancel",e),ue("close",e),i=r;break;case"iframe":case"object":case"embed":ue("load",e),i=r;break;case"video":case"audio":for(i=0;i<eo.length;i++)ue(eo[i],e);i=r;break;case"source":ue("error",e),i=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),i=r;break;case"details":ue("toggle",e),i=r;break;case"input":uf(e,r),i=_u(e,r),ue("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),ue("invalid",e);break;case"textarea":df(e,r),i=Eu(e,r),ue("invalid",e);break;default:i=r}bu(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?zh(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Dh(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&vo(e,s):typeof s=="number"&&vo(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(go.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ue("scroll",e):s!=null&&zc(e,o,s,a))}switch(n){case"input":ua(e),cf(e,r,!1);break;case"textarea":ua(e),ff(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Un(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Xr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Xr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ol)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ue(t),null;case 6:if(e&&t.stateNode!=null)ag(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(O(166));if(n=rr(Ro.current),rr(qt.current),ya(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ht]=t,(o=r.nodeValue!==n)&&(e=ut,e!==null))switch(e.tag){case 3:va(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&va(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ht]=t,t.stateNode=r}return Ue(t),null;case 13:if(de(me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&st!==null&&t.mode&1&&!(t.flags&128))Sm(),li(),t.flags|=98560,o=!1;else if(o=ya(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(O(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(O(317));o[Ht]=t}else li(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ue(t),o=!1}else Nt!==null&&(sc(Nt),Nt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||me.current&1?je===0&&(je=3):yd())),t.updateQueue!==null&&(t.flags|=4),Ue(t),null);case 4:return ui(),ec(e,t),e===null&&Co(t.stateNode.containerInfo),Ue(t),null;case 10:return td(t.type._context),Ue(t),null;case 17:return ot(t.type)&&al(),Ue(t),null;case 19:if(de(me),o=t.memoizedState,o===null)return Ue(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Wi(o,!1);else{if(je!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=pl(e),a!==null){for(t.flags|=128,Wi(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(me,me.current&1|2),t.child}e=e.sibling}o.tail!==null&&we()>di&&(t.flags|=128,r=!0,Wi(o,!1),t.lanes=4194304)}else{if(!r)if(e=pl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Wi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!he)return Ue(t),null}else 2*we()-o.renderingStartTime>di&&n!==1073741824&&(t.flags|=128,r=!0,Wi(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=we(),t.sibling=null,n=me.current,se(me,r?n&1|2:n&1),t):(Ue(t),null);case 22:case 23:return vd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?lt&1073741824&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),null;case 24:return null;case 25:return null}throw Error(O(156,t.tag))}function Px(e,t){switch(Xc(t),t.tag){case 1:return ot(t.type)&&al(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ui(),de(it),de(He),ad(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return od(t),null;case 13:if(de(me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(O(340));li()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(me),null;case 4:return ui(),null;case 10:return td(t.type._context),null;case 22:case 23:return vd(),null;case 24:return null;default:return null}}var wa=!1,We=!1,Nx=typeof WeakSet=="function"?WeakSet:Set,D=null;function Ur(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(e,t,r)}else n.current=null}function tc(e,t,n){try{n()}catch(r){ye(e,t,r)}}var tp=!1;function Tx(e,t){if(Fu=nl,e=cm(),Yc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,d=0,h=e,g=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(l=a+i),h!==o||r!==0&&h.nodeType!==3||(s=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(y=h.firstChild)!==null;)g=h,h=y;for(;;){if(h===e)break t;if(g===n&&++u===i&&(l=a),g===o&&++d===r&&(s=a),(y=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=y}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Iu={focusedElem:e,selectionRange:n},nl=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var A=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var x=A.memoizedProps,R=A.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:jt(t.type,x),R);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(p){ye(t,t.return,p)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return A=tp,tp=!1,A}function so(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&tc(t,n,o)}i=i.next}while(i!==r)}}function Ql(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function nc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function lg(e){var t=e.alternate;t!==null&&(e.alternate=null,lg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ht],delete t[ko],delete t[Bu],delete t[mx],delete t[gx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sg(e){return e.tag===5||e.tag===3||e.tag===4}function np(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ol));else if(r!==4&&(e=e.child,e!==null))for(rc(e,t,n),e=e.sibling;e!==null;)rc(e,t,n),e=e.sibling}function ic(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ic(e,t,n),e=e.sibling;e!==null;)ic(e,t,n),e=e.sibling}var Me=null,Ot=!1;function Cn(e,t,n){for(n=n.child;n!==null;)ug(e,t,n),n=n.sibling}function ug(e,t,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Fl,n)}catch{}switch(n.tag){case 5:We||Ur(n,t);case 6:var r=Me,i=Ot;Me=null,Cn(e,t,n),Me=r,Ot=i,Me!==null&&(Ot?(e=Me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(Ot?(e=Me,n=n.stateNode,e.nodeType===8?Ks(e.parentNode,n):e.nodeType===1&&Ks(e,n),wo(e)):Ks(Me,n.stateNode));break;case 4:r=Me,i=Ot,Me=n.stateNode.containerInfo,Ot=!0,Cn(e,t,n),Me=r,Ot=i;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&tc(n,t,a),i=i.next}while(i!==r)}Cn(e,t,n);break;case 1:if(!We&&(Ur(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ye(n,t,l)}Cn(e,t,n);break;case 21:Cn(e,t,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,Cn(e,t,n),We=r):Cn(e,t,n);break;default:Cn(e,t,n)}}function rp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Nx),t.forEach(function(r){var i=Bx.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Rt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Me=l.stateNode,Ot=!1;break e;case 3:Me=l.stateNode.containerInfo,Ot=!0;break e;case 4:Me=l.stateNode.containerInfo,Ot=!0;break e}l=l.return}if(Me===null)throw Error(O(160));ug(o,a,i),Me=null,Ot=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){ye(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)cg(t,e),t=t.sibling}function cg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Rt(t,e),Vt(e),r&4){try{so(3,e,e.return),Ql(3,e)}catch(x){ye(e,e.return,x)}try{so(5,e,e.return)}catch(x){ye(e,e.return,x)}}break;case 1:Rt(t,e),Vt(e),r&512&&n!==null&&Ur(n,n.return);break;case 5:if(Rt(t,e),Vt(e),r&512&&n!==null&&Ur(n,n.return),e.flags&32){var i=e.stateNode;try{vo(i,"")}catch(x){ye(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Ph(i,o),Ru(l,a);var u=Ru(l,o);for(a=0;a<s.length;a+=2){var d=s[a],h=s[a+1];d==="style"?zh(i,h):d==="dangerouslySetInnerHTML"?Dh(i,h):d==="children"?vo(i,h):zc(i,d,h,u)}switch(l){case"input":Su(i,o);break;case"textarea":Nh(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Xr(i,!!o.multiple,y,!1):g!==!!o.multiple&&(o.defaultValue!=null?Xr(i,!!o.multiple,o.defaultValue,!0):Xr(i,!!o.multiple,o.multiple?[]:"",!1))}i[ko]=o}catch(x){ye(e,e.return,x)}}break;case 6:if(Rt(t,e),Vt(e),r&4){if(e.stateNode===null)throw Error(O(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){ye(e,e.return,x)}}break;case 3:if(Rt(t,e),Vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wo(t.containerInfo)}catch(x){ye(e,e.return,x)}break;case 4:Rt(t,e),Vt(e);break;case 13:Rt(t,e),Vt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(md=we())),r&4&&rp(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(We=(u=We)||d,Rt(t,e),We=u):Rt(t,e),Vt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(D=e,d=e.child;d!==null;){for(h=D=d;D!==null;){switch(g=D,y=g.child,g.tag){case 0:case 11:case 14:case 15:so(4,g,g.return);break;case 1:Ur(g,g.return);var A=g.stateNode;if(typeof A.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,A.props=t.memoizedProps,A.state=t.memoizedState,A.componentWillUnmount()}catch(x){ye(r,n,x)}}break;case 5:Ur(g,g.return);break;case 22:if(g.memoizedState!==null){op(h);continue}}y!==null?(y.return=g,D=y):op(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=h.stateNode,s=h.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Lh("display",a))}catch(x){ye(e,e.return,x)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){ye(e,e.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Rt(t,e),Vt(e),r&4&&rp(e);break;case 21:break;default:Rt(t,e),Vt(e)}}function Vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(sg(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(vo(i,""),r.flags&=-33);var o=np(e);ic(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=np(e);rc(e,l,a);break;default:throw Error(O(161))}}catch(s){ye(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dx(e,t,n){D=e,dg(e)}function dg(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var i=D,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||wa;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||We;l=wa;var u=We;if(wa=a,(We=s)&&!u)for(D=i;D!==null;)a=D,s=a.child,a.tag===22&&a.memoizedState!==null?ap(i):s!==null?(s.return=a,D=s):ap(i);for(;o!==null;)D=o,dg(o),o=o.sibling;D=i,wa=l,We=u}ip(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,D=o):ip(e)}}function ip(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:We||Ql(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!We)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:jt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&$f(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}$f(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&wo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}We||t.flags&512&&nc(t)}catch(g){ye(t,t.return,g)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function op(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function ap(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ql(4,t)}catch(s){ye(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){ye(t,i,s)}}var o=t.return;try{nc(t)}catch(s){ye(t,o,s)}break;case 5:var a=t.return;try{nc(t)}catch(s){ye(t,a,s)}}}catch(s){ye(t,t.return,s)}if(t===e){D=null;break}var l=t.sibling;if(l!==null){l.return=t.return,D=l;break}D=t.return}}var Lx=Math.ceil,gl=xn.ReactCurrentDispatcher,pd=xn.ReactCurrentOwner,_t=xn.ReactCurrentBatchConfig,Y=0,De=null,Ee=null,Ie=0,lt=0,Vr=Qn(0),je=0,No=null,pr=0,Hl=0,hd=0,uo=null,et=null,md=0,di=1/0,on=null,vl=!1,oc=null,In=null,_a=!1,Nn=null,yl=0,co=0,ac=null,Ka=-1,$a=0;function Ye(){return Y&6?we():Ka!==-1?Ka:Ka=we()}function Kn(e){return e.mode&1?Y&2&&Ie!==0?Ie&-Ie:yx.transition!==null?($a===0&&($a=Gh()),$a):(e=ne,e!==0||(e=window.event,e=e===void 0?16:tm(e.type)),e):1}function Lt(e,t,n,r){if(50<co)throw co=0,ac=null,Error(O(185));$o(e,n,r),(!(Y&2)||e!==De)&&(e===De&&(!(Y&2)&&(Hl|=n),je===4&&On(e,Ie)),at(e,r),n===1&&Y===0&&!(t.mode&1)&&(di=we()+500,Ul&&Hn()))}function at(e,t){var n=e.callbackNode;y0(e,t);var r=tl(e,e===De?Ie:0);if(r===0)n!==null&&mf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&mf(n),t===1)e.tag===0?vx(lp.bind(null,e)):Am(lp.bind(null,e)),px(function(){!(Y&6)&&Hn()}),n=null;else{switch(Yh(r)){case 1:n=$c;break;case 4:n=Qh;break;case 16:n=el;break;case 536870912:n=Hh;break;default:n=el}n=xg(n,fg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function fg(e,t){if(Ka=-1,$a=0,Y&6)throw Error(O(327));var n=e.callbackNode;if(ni()&&e.callbackNode!==n)return null;var r=tl(e,e===De?Ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xl(e,r);else{t=r;var i=Y;Y|=2;var o=hg();(De!==e||Ie!==t)&&(on=null,di=we()+500,ar(e,t));do try{Fx();break}catch(l){pg(e,l)}while(1);ed(),gl.current=o,Y=i,Ee!==null?t=0:(De=null,Ie=0,t=je)}if(t!==0){if(t===2&&(i=Tu(e),i!==0&&(r=i,t=lc(e,i))),t===1)throw n=No,ar(e,0),On(e,r),at(e,we()),n;if(t===6)On(e,r);else{if(i=e.current.alternate,!(r&30)&&!zx(i)&&(t=xl(e,r),t===2&&(o=Tu(e),o!==0&&(r=o,t=lc(e,o))),t===1))throw n=No,ar(e,0),On(e,r),at(e,we()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(O(345));case 2:Jn(e,et,on);break;case 3:if(On(e,r),(r&130023424)===r&&(t=md+500-we(),10<t)){if(tl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ye(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=$u(Jn.bind(null,e,et,on),t);break}Jn(e,et,on);break;case 4:if(On(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Dt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lx(r/1960))-r,10<r){e.timeoutHandle=$u(Jn.bind(null,e,et,on),r);break}Jn(e,et,on);break;case 5:Jn(e,et,on);break;default:throw Error(O(329))}}}return at(e,we()),e.callbackNode===n?fg.bind(null,e):null}function lc(e,t){var n=uo;return e.current.memoizedState.isDehydrated&&(ar(e,t).flags|=256),e=xl(e,t),e!==2&&(t=et,et=n,t!==null&&sc(t)),e}function sc(e){et===null?et=e:et.push.apply(et,e)}function zx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!It(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function On(e,t){for(t&=~hd,t&=~Hl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Dt(t),r=1<<n;e[n]=-1,t&=~r}}function lp(e){if(Y&6)throw Error(O(327));ni();var t=tl(e,0);if(!(t&1))return at(e,we()),null;var n=xl(e,t);if(e.tag!==0&&n===2){var r=Tu(e);r!==0&&(t=r,n=lc(e,r))}if(n===1)throw n=No,ar(e,0),On(e,t),at(e,we()),n;if(n===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jn(e,et,on),at(e,we()),null}function gd(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(di=we()+500,Ul&&Hn())}}function hr(e){Nn!==null&&Nn.tag===0&&!(Y&6)&&ni();var t=Y;Y|=1;var n=_t.transition,r=ne;try{if(_t.transition=null,ne=1,e)return e()}finally{ne=r,_t.transition=n,Y=t,!(Y&6)&&Hn()}}function vd(){lt=Vr.current,de(Vr)}function ar(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,fx(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(Xc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&al();break;case 3:ui(),de(it),de(He),ad();break;case 5:od(r);break;case 4:ui();break;case 13:de(me);break;case 19:de(me);break;case 10:td(r.type._context);break;case 22:case 23:vd()}n=n.return}if(De=e,Ee=e=$n(e.current,null),Ie=lt=t,je=0,No=null,hd=Hl=pr=0,et=uo=null,nr!==null){for(t=0;t<nr.length;t++)if(n=nr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}nr=null}return e}function pg(e,t){do{var n=Ee;try{if(ed(),Ma.current=ml,hl){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}hl=!1}if(fr=0,Ne=Re=ge=null,lo=!1,jo=0,pd.current=null,n===null||n.return===null){je=1,No=t,Ee=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=Ie,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=l,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Gf(a);if(y!==null){y.flags&=-257,Yf(y,a,l,o,t),y.mode&1&&Hf(o,u,t),t=y,s=u;var A=t.updateQueue;if(A===null){var x=new Set;x.add(s),t.updateQueue=x}else A.add(s);break e}else{if(!(t&1)){Hf(o,u,t),yd();break e}s=Error(O(426))}}else if(he&&l.mode&1){var R=Gf(a);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Yf(R,a,l,o,t),Zc(ci(s,l));break e}}o=s=ci(s,l),je!==4&&(je=2),uo===null?uo=[o]:uo.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=qm(o,s,t);Kf(o,m);break e;case 1:l=s;var f=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(In===null||!In.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var p=Xm(o,l,t);Kf(o,p);break e}}o=o.return}while(o!==null)}gg(n)}catch(_){t=_,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(1)}function hg(){var e=gl.current;return gl.current=ml,e===null?ml:e}function yd(){(je===0||je===3||je===2)&&(je=4),De===null||!(pr&268435455)&&!(Hl&268435455)||On(De,Ie)}function xl(e,t){var n=Y;Y|=2;var r=hg();(De!==e||Ie!==t)&&(on=null,ar(e,t));do try{Mx();break}catch(i){pg(e,i)}while(1);if(ed(),Y=n,gl.current=r,Ee!==null)throw Error(O(261));return De=null,Ie=0,je}function Mx(){for(;Ee!==null;)mg(Ee)}function Fx(){for(;Ee!==null&&!u0();)mg(Ee)}function mg(e){var t=yg(e.alternate,e,lt);e.memoizedProps=e.pendingProps,t===null?gg(e):Ee=t,pd.current=null}function gg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Px(n,t),n!==null){n.flags&=32767,Ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{je=6,Ee=null;return}}else if(n=Ox(n,t,lt),n!==null){Ee=n;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);je===0&&(je=5)}function Jn(e,t,n){var r=ne,i=_t.transition;try{_t.transition=null,ne=1,Ix(e,t,n,r)}finally{_t.transition=i,ne=r}return null}function Ix(e,t,n,r){do ni();while(Nn!==null);if(Y&6)throw Error(O(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(x0(e,o),e===De&&(Ee=De=null,Ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_a||(_a=!0,xg(el,function(){return ni(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=_t.transition,_t.transition=null;var a=ne;ne=1;var l=Y;Y|=4,pd.current=null,Tx(e,n),cg(n,e),ox(Iu),nl=!!Fu,Iu=Fu=null,e.current=n,Dx(n),c0(),Y=l,ne=a,_t.transition=o}else e.current=n;if(_a&&(_a=!1,Nn=e,yl=i),o=e.pendingLanes,o===0&&(In=null),p0(n.stateNode),at(e,we()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(vl)throw vl=!1,e=oc,oc=null,e;return yl&1&&e.tag!==0&&ni(),o=e.pendingLanes,o&1?e===ac?co++:(co=0,ac=e):co=0,Hn(),null}function ni(){if(Nn!==null){var e=Yh(yl),t=_t.transition,n=ne;try{if(_t.transition=null,ne=16>e?16:e,Nn===null)var r=!1;else{if(e=Nn,Nn=null,yl=0,Y&6)throw Error(O(331));var i=Y;for(Y|=4,D=e.current;D!==null;){var o=D,a=o.child;if(D.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(D=u;D!==null;){var d=D;switch(d.tag){case 0:case 11:case 15:so(8,d,o)}var h=d.child;if(h!==null)h.return=d,D=h;else for(;D!==null;){d=D;var g=d.sibling,y=d.return;if(lg(d),d===u){D=null;break}if(g!==null){g.return=y,D=g;break}D=y}}}var A=o.alternate;if(A!==null){var x=A.child;if(x!==null){A.child=null;do{var R=x.sibling;x.sibling=null,x=R}while(x!==null)}}D=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,D=a;else e:for(;D!==null;){if(o=D,o.flags&2048)switch(o.tag){case 0:case 11:case 15:so(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,D=m;break e}D=o.return}}var f=e.current;for(D=f;D!==null;){a=D;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,D=v;else e:for(a=f;D!==null;){if(l=D,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ql(9,l)}}catch(_){ye(l,l.return,_)}if(l===a){D=null;break e}var p=l.sibling;if(p!==null){p.return=l.return,D=p;break e}D=l.return}}if(Y=i,Hn(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Fl,e)}catch{}r=!0}return r}finally{ne=n,_t.transition=t}}return!1}function sp(e,t,n){t=ci(n,t),t=qm(e,t,1),e=Fn(e,t,1),t=Ye(),e!==null&&($o(e,1,t),at(e,t))}function ye(e,t,n){if(e.tag===3)sp(e,e,n);else for(;t!==null;){if(t.tag===3){sp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(In===null||!In.has(r))){e=ci(n,e),e=Xm(t,e,1),t=Fn(t,e,1),e=Ye(),t!==null&&($o(t,1,e),at(t,e));break}}t=t.return}}function Kx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ye(),e.pingedLanes|=e.suspendedLanes&n,De===e&&(Ie&n)===n&&(je===4||je===3&&(Ie&130023424)===Ie&&500>we()-md?ar(e,0):hd|=n),at(e,t)}function vg(e,t){t===0&&(e.mode&1?(t=fa,fa<<=1,!(fa&130023424)&&(fa=4194304)):t=1);var n=Ye();e=gn(e,t),e!==null&&($o(e,t,n),at(e,n))}function $x(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vg(e,n)}function Bx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(t),vg(e,n)}var yg;yg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||it.current)tt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return tt=!1,jx(e,t,n);tt=!!(e.flags&131072)}else tt=!1,he&&t.flags&1048576&&wm(t,ul,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ia(e,t),e=t.pendingProps;var i=ai(t,He.current);ti(t,n),i=sd(null,t,r,e,i,n);var o=ud();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ot(r)?(o=!0,ll(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,rd(t),i.updater=Vl,t.stateNode=i,i._reactInternals=t,Gu(t,r,e,n),t=Xu(null,t,r,!0,o,n)):(t.tag=0,he&&o&&qc(t),Ge(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ia(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Vx(r),e=jt(r,e),i){case 0:t=qu(null,t,r,e,n);break e;case 1:t=Zf(null,t,r,e,n);break e;case 11:t=qf(null,t,r,e,n);break e;case 14:t=Xf(null,t,r,jt(r.type,e),n);break e}throw Error(O(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:jt(r,i),qu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:jt(r,i),Zf(e,t,r,i,n);case 3:e:{if(tg(t),e===null)throw Error(O(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Em(e,t),fl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=ci(Error(O(423)),t),t=Jf(e,t,r,n,i);break e}else if(r!==i){i=ci(Error(O(424)),t),t=Jf(e,t,r,n,i);break e}else for(st=Mn(t.stateNode.containerInfo.firstChild),ut=t,he=!0,Nt=null,n=jm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(li(),r===i){t=vn(e,t,n);break e}Ge(e,t,r,n)}t=t.child}return t;case 5:return Om(t),e===null&&Wu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Ku(r,i)?a=null:o!==null&&Ku(r,o)&&(t.flags|=32),eg(e,t),Ge(e,t,a,n),t.child;case 6:return e===null&&Wu(t),null;case 13:return ng(e,t,n);case 4:return id(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=si(t,null,r,n):Ge(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:jt(r,i),qf(e,t,r,i,n);case 7:return Ge(e,t,t.pendingProps,n),t.child;case 8:return Ge(e,t,t.pendingProps.children,n),t.child;case 12:return Ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,se(cl,r._currentValue),r._currentValue=a,o!==null)if(It(o.value,a)){if(o.children===i.children&&!it.current){t=vn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=dn(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Qu(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(O(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Qu(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ge(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ti(t,n),i=St(i),r=r(i),t.flags|=1,Ge(e,t,r,n),t.child;case 14:return r=t.type,i=jt(r,t.pendingProps),i=jt(r.type,i),Xf(e,t,r,i,n);case 15:return Zm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:jt(r,i),Ia(e,t),t.tag=1,ot(r)?(e=!0,ll(t)):e=!1,ti(t,n),bm(t,r,i),Gu(t,r,i,n),Xu(null,t,r,!0,e,n);case 19:return rg(e,t,n);case 22:return Jm(e,t,n)}throw Error(O(156,t.tag))};function xg(e,t){return Wh(e,t)}function Ux(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,n,r){return new Ux(e,t,n,r)}function xd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vx(e){if(typeof e=="function")return xd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Fc)return 11;if(e===Ic)return 14}return 2}function $n(e,t){var n=e.alternate;return n===null?(n=wt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ba(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")xd(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Dr:return lr(n.children,i,o,t);case Mc:a=8,i|=8;break;case yu:return e=wt(12,n,t,i|2),e.elementType=yu,e.lanes=o,e;case xu:return e=wt(13,n,t,i),e.elementType=xu,e.lanes=o,e;case Au:return e=wt(19,n,t,i),e.elementType=Au,e.lanes=o,e;case Rh:return Gl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case kh:a=10;break e;case bh:a=9;break e;case Fc:a=11;break e;case Ic:a=14;break e;case bn:a=16,r=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return t=wt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function lr(e,t,n,r){return e=wt(7,e,r,t),e.lanes=n,e}function Gl(e,t,n,r){return e=wt(22,e,r,t),e.elementType=Rh,e.lanes=n,e.stateNode={isHidden:!1},e}function Gs(e,t,n){return e=wt(6,e,null,t),e.lanes=n,e}function Ys(e,t,n){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Wx(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=js(0),this.expirationTimes=js(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=js(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ad(e,t,n,r,i,o,a,l,s){return e=new Wx(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=wt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rd(o),e}function Qx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ag(e){if(!e)return Vn;e=e._reactInternals;e:{if(wr(e)!==e||e.tag!==1)throw Error(O(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(O(171))}if(e.tag===1){var n=e.type;if(ot(n))return xm(e,n,t)}return t}function wg(e,t,n,r,i,o,a,l,s){return e=Ad(n,r,!0,e,i,o,a,l,s),e.context=Ag(null),n=e.current,r=Ye(),i=Kn(n),o=dn(r,i),o.callback=t??null,Fn(n,o,i),e.current.lanes=i,$o(e,i,r),at(e,r),e}function Yl(e,t,n,r){var i=t.current,o=Ye(),a=Kn(i);return n=Ag(n),t.context===null?t.context=n:t.pendingContext=n,t=dn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Fn(i,t,a),e!==null&&(Lt(e,i,a,o),za(e,i,a)),a}function Al(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function up(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wd(e,t){up(e,t),(e=e.alternate)&&up(e,t)}function Hx(){return null}var _g=typeof reportError=="function"?reportError:function(e){console.error(e)};function _d(e){this._internalRoot=e}ql.prototype.render=_d.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(O(409));Yl(e,t,null,null)};ql.prototype.unmount=_d.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hr(function(){Yl(null,e,null,null)}),t[mn]=null}};function ql(e){this._internalRoot=e}ql.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jn.length&&t!==0&&t<jn[n].priority;n++);jn.splice(n,0,e),n===0&&em(e)}};function Sd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cp(){}function Gx(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Al(a);o.call(u)}}var a=wg(t,r,e,0,null,!1,!1,"",cp);return e._reactRootContainer=a,e[mn]=a.current,Co(e.nodeType===8?e.parentNode:e),hr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Al(s);l.call(u)}}var s=Ad(e,0,!1,null,null,!1,!1,"",cp);return e._reactRootContainer=s,e[mn]=s.current,Co(e.nodeType===8?e.parentNode:e),hr(function(){Yl(t,s,n,r)}),s}function Zl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Al(a);l.call(s)}}Yl(t,a,e,i)}else a=Gx(n,t,e,i,r);return Al(a)}qh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ji(t.pendingLanes);n!==0&&(Bc(t,n|1),at(t,we()),!(Y&6)&&(di=we()+500,Hn()))}break;case 13:hr(function(){var r=gn(e,1);if(r!==null){var i=Ye();Lt(r,e,1,i)}}),wd(e,1)}};Uc=function(e){if(e.tag===13){var t=gn(e,134217728);if(t!==null){var n=Ye();Lt(t,e,134217728,n)}wd(e,134217728)}};Xh=function(e){if(e.tag===13){var t=Kn(e),n=gn(e,t);if(n!==null){var r=Ye();Lt(n,e,t,r)}wd(e,t)}};Zh=function(){return ne};Jh=function(e,t){var n=ne;try{return ne=e,t()}finally{ne=n}};Ou=function(e,t,n){switch(t){case"input":if(Su(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Bl(r);if(!i)throw Error(O(90));Oh(r),Su(r,i)}}}break;case"textarea":Nh(e,n);break;case"select":t=n.value,t!=null&&Xr(e,!!n.multiple,t,!1)}};Ih=gd;Kh=hr;var Yx={usingClientEntryPoint:!1,Events:[Uo,Fr,Bl,Mh,Fh,gd]},Qi={findFiberByHostInstance:tr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},qx={bundleType:Qi.bundleType,version:Qi.version,rendererPackageName:Qi.rendererPackageName,rendererConfig:Qi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Uh(e),e===null?null:e.stateNode},findFiberByHostInstance:Qi.findFiberByHostInstance||Hx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sa.isDisabled&&Sa.supportsFiber)try{Fl=Sa.inject(qx),Yt=Sa}catch{}}dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yx;dt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sd(t))throw Error(O(200));return Qx(e,t,null,n)};dt.createRoot=function(e,t){if(!Sd(e))throw Error(O(299));var n=!1,r="",i=_g;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ad(e,1,!1,null,null,n,!1,r,i),e[mn]=t.current,Co(e.nodeType===8?e.parentNode:e),new _d(t)};dt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=Uh(t),e=e===null?null:e.stateNode,e};dt.flushSync=function(e){return hr(e)};dt.hydrate=function(e,t,n){if(!Xl(t))throw Error(O(200));return Zl(null,e,t,!0,n)};dt.hydrateRoot=function(e,t,n){if(!Sd(e))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=_g;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=wg(t,null,e,1,n??null,i,!1,o,a),e[mn]=t.current,Co(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ql(t)};dt.render=function(e,t,n){if(!Xl(t))throw Error(O(200));return Zl(null,e,t,!1,n)};dt.unmountComponentAtNode=function(e){if(!Xl(e))throw Error(O(40));return e._reactRootContainer?(hr(function(){Zl(null,null,e,!1,function(){e._reactRootContainer=null,e[mn]=null})}),!0):!1};dt.unstable_batchedUpdates=gd;dt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xl(n))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return Zl(e,t,n,!1,r)};dt.version="18.2.0-next-9e3b772b8-20220608";function Sg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sg)}catch(e){console.error(e)}}Sg(),wh.exports=dt;var Cg=wh.exports,dp=Cg;gu.createRoot=dp.createRoot,gu.hydrateRoot=dp.hydrateRoot;var Qe=function(){return Qe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Qe.apply(this,arguments)};function wl(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var ce="-ms-",fo="-moz-",ee="-webkit-",Eg="comm",Jl="rule",Cd="decl",Xx="@import",kg="@keyframes",Zx="@layer",Jx=Math.abs,Ed=String.fromCharCode,uc=Object.assign;function e1(e,t){return Te(e,0)^45?(((t<<2^Te(e,0))<<2^Te(e,1))<<2^Te(e,2))<<2^Te(e,3):0}function bg(e){return e.trim()}function an(e,t){return(e=t.exec(e))?e[0]:e}function Q(e,t,n){return e.replace(t,n)}function Ua(e,t){return e.indexOf(t)}function Te(e,t){return e.charCodeAt(t)|0}function fi(e,t,n){return e.slice(t,n)}function Qt(e){return e.length}function Rg(e){return e.length}function to(e,t){return t.push(e),e}function t1(e,t){return e.map(t).join("")}function fp(e,t){return e.filter(function(n){return!an(n,t)})}var es=1,pi=1,jg=0,Et=0,Ce=0,bi="";function ts(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:es,column:pi,length:a,return:"",siblings:l}}function kn(e,t){return uc(ts("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function jr(e){for(;e.root;)e=kn(e.root,{children:[e]});to(e,e.siblings)}function n1(){return Ce}function r1(){return Ce=Et>0?Te(bi,--Et):0,pi--,Ce===10&&(pi=1,es--),Ce}function zt(){return Ce=Et<jg?Te(bi,Et++):0,pi++,Ce===10&&(pi=1,es++),Ce}function sr(){return Te(bi,Et)}function Va(){return Et}function ns(e,t){return fi(bi,e,t)}function cc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function i1(e){return es=pi=1,jg=Qt(bi=e),Et=0,[]}function o1(e){return bi="",e}function qs(e){return bg(ns(Et-1,dc(e===91?e+2:e===40?e+1:e)))}function a1(e){for(;(Ce=sr())&&Ce<33;)zt();return cc(e)>2||cc(Ce)>3?"":" "}function l1(e,t){for(;--t&&zt()&&!(Ce<48||Ce>102||Ce>57&&Ce<65||Ce>70&&Ce<97););return ns(e,Va()+(t<6&&sr()==32&&zt()==32))}function dc(e){for(;zt();)switch(Ce){case e:return Et;case 34:case 39:e!==34&&e!==39&&dc(Ce);break;case 40:e===41&&dc(e);break;case 92:zt();break}return Et}function s1(e,t){for(;zt()&&e+Ce!==47+10;)if(e+Ce===42+42&&sr()===47)break;return"/*"+ns(t,Et-1)+"*"+Ed(e===47?e:zt())}function u1(e){for(;!cc(sr());)zt();return ns(e,Et)}function c1(e){return o1(Wa("",null,null,null,[""],e=i1(e),0,[0],e))}function Wa(e,t,n,r,i,o,a,l,s){for(var u=0,d=0,h=a,g=0,y=0,A=0,x=1,R=1,m=1,f=0,v="",p=i,_=o,b=r,k=v;R;)switch(A=f,f=zt()){case 40:if(A!=108&&Te(k,h-1)==58){Ua(k+=Q(qs(f),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:k+=qs(f);break;case 9:case 10:case 13:case 32:k+=a1(A);break;case 92:k+=l1(Va()-1,7);continue;case 47:switch(sr()){case 42:case 47:to(d1(s1(zt(),Va()),t,n,s),s);break;default:k+="/"}break;case 123*x:l[u++]=Qt(k)*m;case 125*x:case 59:case 0:switch(f){case 0:case 125:R=0;case 59+d:m==-1&&(k=Q(k,/\f/g,"")),y>0&&Qt(k)-h&&to(y>32?hp(k+";",r,n,h-1,s):hp(Q(k," ","")+";",r,n,h-2,s),s);break;case 59:k+=";";default:if(to(b=pp(k,t,n,u,d,i,l,v,p=[],_=[],h,o),o),f===123)if(d===0)Wa(k,t,b,b,p,o,h,l,_);else switch(g===99&&Te(k,3)===110?100:g){case 100:case 108:case 109:case 115:Wa(e,b,b,r&&to(pp(e,b,b,0,0,i,l,v,i,p=[],h,_),_),i,_,h,l,r?p:_);break;default:Wa(k,b,b,b,[""],_,0,l,_)}}u=d=y=0,x=m=1,v=k="",h=a;break;case 58:h=1+Qt(k),y=A;default:if(x<1){if(f==123)--x;else if(f==125&&x++==0&&r1()==125)continue}switch(k+=Ed(f),f*x){case 38:m=d>0?1:(k+="\f",-1);break;case 44:l[u++]=(Qt(k)-1)*m,m=1;break;case 64:sr()===45&&(k+=qs(zt())),g=sr(),d=h=Qt(v=k+=u1(Va())),f++;break;case 45:A===45&&Qt(k)==2&&(x=0)}}return o}function pp(e,t,n,r,i,o,a,l,s,u,d,h){for(var g=i-1,y=i===0?o:[""],A=Rg(y),x=0,R=0,m=0;x<r;++x)for(var f=0,v=fi(e,g+1,g=Jx(R=a[x])),p=e;f<A;++f)(p=bg(R>0?y[f]+" "+v:Q(v,/&\f/g,y[f])))&&(s[m++]=p);return ts(e,t,n,i===0?Jl:l,s,u,d,h)}function d1(e,t,n,r){return ts(e,t,n,Eg,Ed(n1()),fi(e,2,-2),0,r)}function hp(e,t,n,r,i){return ts(e,t,n,Cd,fi(e,0,r),fi(e,r+1,-1),r,i)}function Og(e,t,n){switch(e1(e,t)){case 5103:return ee+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ee+e+e;case 4789:return fo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ee+e+fo+e+ce+e+e;case 5936:switch(Te(e,t+11)){case 114:return ee+e+ce+Q(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ee+e+ce+Q(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ee+e+ce+Q(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ee+e+ce+e+e;case 6165:return ee+e+ce+"flex-"+e+e;case 5187:return ee+e+Q(e,/(\w+).+(:[^]+)/,ee+"box-$1$2"+ce+"flex-$1$2")+e;case 5443:return ee+e+ce+"flex-item-"+Q(e,/flex-|-self/g,"")+(an(e,/flex-|baseline/)?"":ce+"grid-row-"+Q(e,/flex-|-self/g,""))+e;case 4675:return ee+e+ce+"flex-line-pack"+Q(e,/align-content|flex-|-self/g,"")+e;case 5548:return ee+e+ce+Q(e,"shrink","negative")+e;case 5292:return ee+e+ce+Q(e,"basis","preferred-size")+e;case 6060:return ee+"box-"+Q(e,"-grow","")+ee+e+ce+Q(e,"grow","positive")+e;case 4554:return ee+Q(e,/([^-])(transform)/g,"$1"+ee+"$2")+e;case 6187:return Q(Q(Q(e,/(zoom-|grab)/,ee+"$1"),/(image-set)/,ee+"$1"),e,"")+e;case 5495:case 3959:return Q(e,/(image-set\([^]*)/,ee+"$1$`$1");case 4968:return Q(Q(e,/(.+:)(flex-)?(.*)/,ee+"box-pack:$3"+ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ee+e+e;case 4200:if(!an(e,/flex-|baseline/))return ce+"grid-column-align"+fi(e,t)+e;break;case 2592:case 3360:return ce+Q(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,an(r.props,/grid-\w+-end/)})?~Ua(e+(n=n[t].value),"span")?e:ce+Q(e,"-start","")+e+ce+"grid-row-span:"+(~Ua(n,"span")?an(n,/\d+/):+an(n,/\d+/)-+an(e,/\d+/))+";":ce+Q(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return an(r.props,/grid-\w+-start/)})?e:ce+Q(Q(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Q(e,/(.+)-inline(.+)/,ee+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Qt(e)-1-t>6)switch(Te(e,t+1)){case 109:if(Te(e,t+4)!==45)break;case 102:return Q(e,/(.+:)(.+)-([^]+)/,"$1"+ee+"$2-$3$1"+fo+(Te(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ua(e,"stretch")?Og(Q(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Q(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,a,l,s,u){return ce+i+":"+o+u+(a?ce+i+"-span:"+(l?s:+s-+o)+u:"")+e});case 4949:if(Te(e,t+6)===121)return Q(e,":",":"+ee)+e;break;case 6444:switch(Te(e,Te(e,14)===45?18:11)){case 120:return Q(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ee+(Te(e,14)===45?"inline-":"")+"box$3$1"+ee+"$2$3$1"+ce+"$2box$3")+e;case 100:return Q(e,":",":"+ce)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Q(e,"scroll-","scroll-snap-")+e}return e}function _l(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function f1(e,t,n,r){switch(e.type){case Zx:if(e.children.length)break;case Xx:case Cd:return e.return=e.return||e.value;case Eg:return"";case kg:return e.return=e.value+"{"+_l(e.children,r)+"}";case Jl:if(!Qt(e.value=e.props.join(",")))return""}return Qt(n=_l(e.children,r))?e.return=e.value+"{"+n+"}":""}function p1(e){var t=Rg(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}function h1(e){return function(t){t.root||(t=t.return)&&e(t)}}function m1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Cd:e.return=Og(e.value,e.length,n);return;case kg:return _l([kn(e,{value:Q(e.value,"@","@"+ee)})],r);case Jl:if(e.length)return t1(n=e.props,function(i){switch(an(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":jr(kn(e,{props:[Q(i,/:(read-\w+)/,":"+fo+"$1")]})),jr(kn(e,{props:[i]})),uc(e,{props:fp(n,r)});break;case"::placeholder":jr(kn(e,{props:[Q(i,/:(plac\w+)/,":"+ee+"input-$1")]})),jr(kn(e,{props:[Q(i,/:(plac\w+)/,":"+fo+"$1")]})),jr(kn(e,{props:[Q(i,/:(plac\w+)/,ce+"input-$1")]})),jr(kn(e,{props:[i]})),uc(e,{props:fp(n,r)});break}return""})}}var g1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},hi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",kd=typeof window<"u"&&"HTMLElement"in window,v1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),rs=Object.freeze([]),mi=Object.freeze({});function y1(e,t,n){return n===void 0&&(n=mi),e.theme!==n.theme&&e.theme||t||n.theme}var Pg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),x1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,A1=/(^-|-$)/g;function mp(e){return e.replace(x1,"-").replace(A1,"")}var w1=/(a)(d)/gi,gp=function(e){return String.fromCharCode(e+(e>25?39:97))};function fc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=gp(t%52)+n;return(gp(t%52)+n).replace(w1,"$1-$2")}var Xs,Wr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ng=function(e){return Wr(5381,e)};function _1(e){return fc(Ng(e)>>>0)}function S1(e){return e.displayName||e.name||"Component"}function Zs(e){return typeof e=="string"&&!0}var Tg=typeof Symbol=="function"&&Symbol.for,Dg=Tg?Symbol.for("react.memo"):60115,C1=Tg?Symbol.for("react.forward_ref"):60112,E1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},k1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Lg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},b1=((Xs={})[C1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xs[Dg]=Lg,Xs);function vp(e){return("type"in(t=e)&&t.type.$$typeof)===Dg?Lg:"$$typeof"in e?b1[e.$$typeof]:E1;var t}var R1=Object.defineProperty,j1=Object.getOwnPropertyNames,yp=Object.getOwnPropertySymbols,O1=Object.getOwnPropertyDescriptor,P1=Object.getPrototypeOf,xp=Object.prototype;function zg(e,t,n){if(typeof t!="string"){if(xp){var r=P1(t);r&&r!==xp&&zg(e,r,n)}var i=j1(t);yp&&(i=i.concat(yp(t)));for(var o=vp(e),a=vp(t),l=0;l<i.length;++l){var s=i[l];if(!(s in k1||n&&n[s]||a&&s in a||o&&s in o)){var u=O1(t,s);try{R1(e,s,u)}catch{}}}}return e}function mr(e){return typeof e=="function"}function bd(e){return typeof e=="object"&&"styledComponentId"in e}function ir(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ap(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function To(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function pc(e,t,n){if(n===void 0&&(n=!1),!n&&!To(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=pc(e[r],t[r]);else if(To(t))for(var r in t)e[r]=pc(e[r],t[r]);return e}function Rd(e,t){Object.defineProperty(e,"toString",{value:t})}function gr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var N1=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw gr(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=i;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=(a=0,n.length);a<s;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,a=i;a<o;a++)n+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return n},e}(),Qa=new Map,Sl=new Map,Js=1,Ca=function(e){if(Qa.has(e))return Qa.get(e);for(;Sl.has(Js);)Js++;var t=Js++;return Qa.set(e,t),Sl.set(t,e),t},T1=function(e,t){Qa.set(e,t),Sl.set(t,e)},D1="style[".concat(hi,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),L1=new RegExp("^".concat(hi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),z1=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},M1=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(L1);if(s){var u=0|parseInt(s[1],10),d=s[2];u!==0&&(T1(d,u),z1(e,d,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}};function F1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Mg=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var s=Array.from(l.querySelectorAll("style[".concat(hi,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(hi,"active"),r.setAttribute("data-styled-version","6.0.7");var a=F1();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},I1=function(){function e(t){this.element=Mg(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var a=r[i];if(a.ownerNode===n)return a}throw gr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),K1=function(){function e(t){this.element=Mg(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),$1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),wp=kd,B1={isServer:!kd,useCSSOMInjection:!v1},Fg=function(){function e(t,n,r){t===void 0&&(t=mi),n===void 0&&(n={});var i=this;this.options=Qe(Qe({},B1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&kd&&wp&&(wp=!1,function(o){for(var a=document.querySelectorAll(D1),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(hi)!=="active"&&(M1(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Rd(this,function(){return function(o){for(var a=o.getTag(),l=a.length,s="",u=function(h){var g=function(m){return Sl.get(m)}(h);if(g===void 0)return"continue";var y=o.names.get(g),A=a.getGroup(h);if(y===void 0||A.length===0)return"continue";var x="".concat(hi,".g").concat(h,'[id="').concat(g,'"]'),R="";y!==void 0&&y.forEach(function(m){m.length>0&&(R+="".concat(m,","))}),s+="".concat(A).concat(x,'{content:"').concat(R,'"}').concat(`/*!sc*/
`)},d=0;d<l;d++)u(d);return s}(i)})}return e.registerId=function(t){return Ca(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Qe(Qe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new $1(i):r?new I1(i):new K1(i)}(this.options),new N1(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ca(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ca(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ca(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),U1=/&/g,V1=/^\s*\/\/.*$/gm;function Ig(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Ig(n.children,t)),n})}function W1(e){var t,n,r,i=e===void 0?mi:e,o=i.options,a=o===void 0?mi:o,l=i.plugins,s=l===void 0?rs:l,u=function(g,y,A){return A===n||A.startsWith(n)&&A.endsWith(n)&&A.replaceAll(n,"").length>0?".".concat(t):g},d=s.slice();d.push(function(g){g.type===Jl&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(U1,n).replace(r,u))}),a.prefix&&d.push(m1),d.push(f1);var h=function(g,y,A,x){y===void 0&&(y=""),A===void 0&&(A=""),x===void 0&&(x="&"),t=x,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var R=g.replace(V1,""),m=c1(A||y?"".concat(A," ").concat(y," { ").concat(R," }"):R);a.namespace&&(m=Ig(m,a.namespace));var f=[];return _l(m,p1(d.concat(h1(function(v){return f.push(v)})))),f};return h.hash=s.length?s.reduce(function(g,y){return y.name||gr(15),Wr(g,y.name)},5381).toString():"",h}var Q1=new Fg,hc=W1(),Kg=Tt.createContext({shouldForwardProp:void 0,styleSheet:Q1,stylis:hc});Kg.Consumer;Tt.createContext(void 0);function _p(){return E.useContext(Kg)}var H1=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=hc);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Rd(this,function(){throw gr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=hc),this.name+t.hash},e}(),G1=function(e){return e>="A"&&e<="Z"};function Sp(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;G1(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var $g=function(e){return e==null||e===!1||e===""},Bg=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!$g(o)&&(Array.isArray(o)&&o.isCss||mr(o)?r.push("".concat(Sp(i),":"),o,";"):To(o)?r.push.apply(r,wl(wl(["".concat(i," {")],Bg(o),!1),["}"],!1)):r.push("".concat(Sp(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in g1||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ur(e,t,n,r){if($g(e))return[];if(bd(e))return[".".concat(e.styledComponentId)];if(mr(e)){if(!mr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return ur(i,t,n,r)}var o;return e instanceof H1?n?(e.inject(n,r),[e.getName(r)]):[e]:To(e)?Bg(e):Array.isArray(e)?Array.prototype.concat.apply(rs,e.map(function(a){return ur(a,t,n,r)})):[e.toString()]}function Y1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(mr(n)&&!bd(n))return!1}return!0}var q1=Ng("6.0.7"),X1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Y1(t),this.componentId=n,this.baseHash=Wr(q1,n),this.baseStyle=r,Fg.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ir(i,this.staticRulesId);else{var o=Ap(ur(this.rules,t,n,r)),a=fc(Wr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(o,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}i=ir(i,a),this.staticRulesId=a}else{for(var s=Wr(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var h=this.rules[d];if(typeof h=="string")u+=h;else if(h){var g=Ap(ur(h,t,n,r));s=Wr(s,g),u+=g}}if(u){var y=fc(s>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),i=ir(i,y)}}return i},e}(),Cl=Tt.createContext(void 0);Cl.Consumer;function Z1(e){var t=Tt.useContext(Cl),n=E.useMemo(function(){return function(r,i){if(!r)throw gr(14);if(mr(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw gr(8);return i?Qe(Qe({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Tt.createElement(Cl.Provider,{value:n},e.children):null}var eu={};function J1(e,t,n){var r=bd(e),i=e,o=!Zs(e),a=t.attrs,l=a===void 0?rs:a,s=t.componentId,u=s===void 0?function(v,p){var _=typeof v!="string"?"sc":mp(v);eu[_]=(eu[_]||0)+1;var b="".concat(_,"-").concat(_1("6.0.7"+_+eu[_]));return p?"".concat(p,"-").concat(b):b}(t.displayName,t.parentComponentId):s,d=t.displayName;d===void 0&&function(v){return Zs(v)?"styled.".concat(v):"Styled(".concat(S1(v),")")}(e);var h=t.displayName&&t.componentId?"".concat(mp(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var A=i.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;y=function(v,p){return A(v,p)&&x(v,p)}}else y=A}var R=new X1(n,h,r?i.componentStyle:void 0);function m(v,p){return function(_,b,k){var T=_.attrs,H=_.componentStyle,K=_.defaultProps,_e=_.foldedComponentIds,re=_.styledComponentId,ht=_.target,$t=Tt.useContext(Cl),Bt=_p(),Le=_.shouldForwardProp||Bt.shouldForwardProp,ke=function(kt,q,Ze){for(var $e,Je=Qe(Qe({},q),{className:void 0,theme:Ze}),mt=0;mt<kt.length;mt+=1){var br=mr($e=kt[mt])?$e(Je):$e;for(var Ut in br)Je[Ut]=Ut==="className"?ir(Je[Ut],br[Ut]):Ut==="style"?Qe(Qe({},Je[Ut]),br[Ut]):br[Ut]}return q.className&&(Je.className=ir(Je.className,q.className)),Je}(T,b,y1(b,$t,K)||mi),N=ke.as||ht,M={};for(var F in ke)ke[F]===void 0||F[0]==="$"||F==="as"||F==="theme"||(F==="forwardedAs"?M.as=ke.forwardedAs:Le&&!Le(F,N)||(M[F]=ke[F]));var le=function(kt,q){var Ze=_p(),$e=kt.generateAndInjectStyles(q,Ze.styleSheet,Ze.stylis);return $e}(H,ke),fe=ir(_e,re);return le&&(fe+=" "+le),ke.className&&(fe+=" "+ke.className),M[Zs(N)&&!Pg.has(N)?"class":"className"]=fe,M.ref=k,E.createElement(N,M)}(f,v,p)}var f=Tt.forwardRef(m);return f.attrs=g,f.componentStyle=R,f.shouldForwardProp=y,f.foldedComponentIds=r?ir(i.foldedComponentIds,i.styledComponentId):"",f.styledComponentId=h,f.target=r?i.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(p){for(var _=[],b=1;b<arguments.length;b++)_[b-1]=arguments[b];for(var k=0,T=_;k<T.length;k++)pc(p,T[k],!0);return p}({},i.defaultProps,v):v}}),Rd(f,function(){return".".concat(f.styledComponentId)}),o&&zg(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function Cp(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Ep=function(e){return Object.assign(e,{isCss:!0})};function eA(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(mr(e)||To(e)){var r=e;return Ep(ur(Cp(rs,wl([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?ur(i):Ep(ur(Cp(i,t)))}function mc(e,t,n){if(n===void 0&&(n=mi),!t)throw gr(1,t);var r=function(i){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,eA.apply(void 0,wl([i],o,!1)))};return r.attrs=function(i){return mc(e,t,Qe(Qe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return mc(e,t,Qe(Qe({},n),i))},r}var Ug=function(e){return mc(J1,e)},C=Ug;Pg.forEach(function(e){C[e]=Ug(e)});const tA={borderRadius:"5px",colors:{primary:"#F6F7FC",primaryDark:"#E4E6EE",secondary:"#195CDF",secondaryLight:"#EFF4FF",secondaryDark:"#CBD5E9",background:"#FFFFFF",text:"#000000",textGrayDark:"#515151",textGray:"#868686",textGrayLight:"#6D6D6D",textWhite:"#FFFFFF"}};/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pe(){return pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pe.apply(this,arguments)}var Se;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Se||(Se={}));const kp="popstate";function nA(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Do("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:vr(i)}return iA(t,n,null,e)}function W(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function gi(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function rA(){return Math.random().toString(36).substr(2,8)}function bp(e,t){return{usr:e.state,key:e.key,idx:t}}function Do(e,t,n,r){return n===void 0&&(n=null),pe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?An(t):t,{state:n,key:t&&t.key||r||rA()})}function vr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function An(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function iA(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=Se.Pop,s=null,u=d();u==null&&(u=0,a.replaceState(pe({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function h(){l=Se.Pop;let R=d(),m=R==null?null:R-u;u=R,s&&s({action:l,location:x.location,delta:m})}function g(R,m){l=Se.Push;let f=Do(x.location,R,m);n&&n(f,R),u=d()+1;let v=bp(f,u),p=x.createHref(f);try{a.pushState(v,"",p)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;i.location.assign(p)}o&&s&&s({action:l,location:x.location,delta:1})}function y(R,m){l=Se.Replace;let f=Do(x.location,R,m);n&&n(f,R),u=d();let v=bp(f,u),p=x.createHref(f);a.replaceState(v,"",p),o&&s&&s({action:l,location:x.location,delta:0})}function A(R){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof R=="string"?R:vr(R);return W(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let x={get action(){return l},get location(){return e(i,a)},listen(R){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(kp,h),s=R,()=>{i.removeEventListener(kp,h),s=null}},createHref(R){return t(i,R)},createURL:A,encodeLocation(R){let m=A(R);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:y,go(R){return a.go(R)}};return x}var Ae;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ae||(Ae={}));const oA=new Set(["lazy","caseSensitive","path","id","index","children"]);function aA(e){return e.index===!0}function gc(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,o)=>{let a=[...n,o],l=typeof i.id=="string"?i.id:a.join("-");if(W(i.index!==!0||!i.children,"Cannot specify children on an index route"),W(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),aA(i)){let s=pe({},i,t(i),{id:l});return r[l]=s,s}else{let s=pe({},i,t(i),{id:l,children:void 0});return r[l]=s,i.children&&(s.children=gc(i.children,t,a,r)),s}})}function Qr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?An(t):t,i=Ri(r.pathname||"/",n);if(i==null)return null;let o=Vg(e);lA(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=gA(o[l],xA(i));return a}function Vg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(W(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=fn([r,s.relativePath]),d=n.concat(s);o.children&&o.children.length>0&&(W(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Vg(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:hA(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of Wg(o.path))i(o,a,s)}),t}function Wg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Wg(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function lA(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:mA(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const sA=/^:\w+$/,uA=3,cA=2,dA=1,fA=10,pA=-2,Rp=e=>e==="*";function hA(e,t){let n=e.split("/"),r=n.length;return n.some(Rp)&&(r+=pA),t&&(r+=cA),n.filter(i=>!Rp(i)).reduce((i,o)=>i+(sA.test(o)?uA:o===""?dA:fA),r)}function mA(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function gA(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=vA({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!d)return null;Object.assign(r,d.params);let h=l.route;o.push({params:r,pathname:fn([i,d.pathname]),pathnameBase:SA(fn([i,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(i=fn([i,d.pathnameBase]))}return o}function vA(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=yA(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,h)=>{if(d==="*"){let g=l[h]||"";a=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}return u[d]=AA(l[h]||"",d),u},{}),pathname:o,pathnameBase:a,pattern:e}}function yA(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),gi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function xA(e){try{return decodeURI(e)}catch(t){return gi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function AA(e,t){try{return decodeURIComponent(e)}catch(n){return gi(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Ri(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function wA(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?An(e):e;return{pathname:n?n.startsWith("/")?n:_A(n,t):t,search:CA(r),hash:EA(i)}}function _A(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function tu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Wo(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function is(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=An(e):(i=pe({},e),W(!i.pathname||!i.pathname.includes("?"),tu("?","pathname","search",i)),W(!i.pathname||!i.pathname.includes("#"),tu("#","pathname","hash",i)),W(!i.search||!i.search.includes("#"),tu("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let h=t.length-1;if(a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),h-=1;i.pathname=g.join("/")}l=h>=0?t[h]:"/"}let s=wA(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}const fn=e=>e.join("/").replace(/\/\/+/g,"/"),SA=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),CA=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,EA=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class jd{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Qg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Hg=["post","put","patch","delete"],kA=new Set(Hg),bA=["get",...Hg],RA=new Set(bA),jA=new Set([301,302,303,307,308]),OA=new Set([307,308]),nu={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},PA={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Hi={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Gg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,NA=e=>({hasErrorBoundary:!!e.hasErrorBoundary});function TA(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;W(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let w=e.detectErrorBoundary;i=S=>({hasErrorBoundary:w(S)})}else i=NA;let o={},a=gc(e.routes,i,void 0,o),l,s=e.basename||"/",u=pe({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),d=null,h=new Set,g=null,y=null,A=null,x=e.hydrationData!=null,R=Qr(a,e.history.location,s),m=null;if(R==null){let w=gt(404,{pathname:e.history.location.pathname}),{matches:S,route:j}=zp(a);R=S,m={[j.id]:w}}let f=!R.some(w=>w.route.lazy)&&(!R.some(w=>w.route.loader)||e.hydrationData!=null),v,p={historyAction:e.history.action,location:e.history.location,matches:R,initialized:f,navigation:nu,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||m,fetchers:new Map,blockers:new Map},_=Se.Pop,b=!1,k,T=!1,H=!1,K=[],_e=[],re=new Map,ht=0,$t=-1,Bt=new Map,Le=new Set,ke=new Map,N=new Map,M=new Map,F=!1;function le(){return d=e.history.listen(w=>{let{action:S,location:j,delta:L}=w;if(F){F=!1;return}gi(M.size===0||L!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let V=Zd({currentLocation:p.location,nextLocation:j,historyAction:S});if(V&&L!=null){F=!0,e.history.go(L*-1),oa(V,{state:"blocked",location:j,proceed(){oa(V,{state:"proceeding",proceed:void 0,reset:void 0,location:j}),e.history.go(L)},reset(){let $=new Map(p.blockers);$.set(V,Hi),q({blockers:$})}});return}return mt(S,j)}),p.initialized||mt(Se.Pop,p.location),v}function fe(){d&&d(),h.clear(),k&&k.abort(),p.fetchers.forEach((w,S)=>vs(S)),p.blockers.forEach((w,S)=>Xd(S))}function kt(w){return h.add(w),()=>h.delete(w)}function q(w){p=pe({},p,w),h.forEach(S=>S(p))}function Ze(w,S){var j,L;let V=p.actionData!=null&&p.navigation.formMethod!=null&&Pt(p.navigation.formMethod)&&p.navigation.state==="loading"&&((j=w.state)==null?void 0:j._isRedirect)!==!0,$;S.actionData?Object.keys(S.actionData).length>0?$=S.actionData:$=null:V?$=p.actionData:$=null;let B=S.loaderData?Lp(p.loaderData,S.loaderData,S.matches||[],S.errors):p.loaderData,I=p.blockers;I.size>0&&(I=new Map(I),I.forEach((ae,ze)=>I.set(ze,Hi)));let z=b===!0||p.navigation.formMethod!=null&&Pt(p.navigation.formMethod)&&((L=w.state)==null?void 0:L._isRedirect)!==!0;l&&(a=l,l=void 0),T||_===Se.Pop||(_===Se.Push?e.history.push(w,w.state):_===Se.Replace&&e.history.replace(w,w.state)),q(pe({},S,{actionData:$,loaderData:B,historyAction:_,location:w,initialized:!0,navigation:nu,revalidation:"idle",restoreScrollPosition:ef(w,S.matches||p.matches),preventScrollReset:z,blockers:I})),_=Se.Pop,b=!1,T=!1,H=!1,K=[],_e=[]}async function $e(w,S){if(typeof w=="number"){e.history.go(w);return}let j=vc(p.location,p.matches,s,u.v7_prependBasename,w,S==null?void 0:S.fromRouteId,S==null?void 0:S.relative),{path:L,submission:V,error:$}=jp(u.v7_normalizeFormMethod,!1,j,S),B=p.location,I=Do(p.location,L,S&&S.state);I=pe({},I,e.history.encodeLocation(I));let z=S&&S.replace!=null?S.replace:void 0,ae=Se.Push;z===!0?ae=Se.Replace:z===!1||V!=null&&Pt(V.formMethod)&&V.formAction===p.location.pathname+p.location.search&&(ae=Se.Replace);let ze=S&&"preventScrollReset"in S?S.preventScrollReset===!0:void 0,ie=Zd({currentLocation:B,nextLocation:I,historyAction:ae});if(ie){oa(ie,{state:"blocked",location:I,proceed(){oa(ie,{state:"proceeding",proceed:void 0,reset:void 0,location:I}),$e(w,S)},reset(){let xe=new Map(p.blockers);xe.set(ie,Hi),q({blockers:xe})}});return}return await mt(ae,I,{submission:V,pendingError:$,preventScrollReset:ze,replace:S&&S.replace})}function Je(){if(gs(),q({revalidation:"loading"}),p.navigation.state!=="submitting"){if(p.navigation.state==="idle"){mt(p.historyAction,p.location,{startUninterruptedRevalidation:!0});return}mt(_||p.historyAction,p.navigation.location,{overrideNavigation:p.navigation})}}async function mt(w,S,j){k&&k.abort(),k=null,_=w,T=(j&&j.startUninterruptedRevalidation)===!0,xy(p.location,p.matches),b=(j&&j.preventScrollReset)===!0;let L=l||a,V=j&&j.overrideNavigation,$=Qr(L,S,s);if(!$){let xe=gt(404,{pathname:S.pathname}),{matches:Pe,route:Yn}=zp(L);ys(),Ze(S,{matches:Pe,loaderData:{},errors:{[Yn.id]:xe}});return}if(p.initialized&&!H&&FA(p.location,S)&&!(j&&j.submission&&Pt(j.submission.formMethod))){Ze(S,{matches:$});return}k=new AbortController;let B=Yi(e.history,S,k.signal,j&&j.submission),I,z;if(j&&j.pendingError)z={[Hr($).route.id]:j.pendingError};else if(j&&j.submission&&Pt(j.submission.formMethod)){let xe=await br(B,S,j.submission,$,{replace:j.replace});if(xe.shortCircuited)return;I=xe.pendingActionData,z=xe.pendingActionError,V=Ea(S,j.submission),B=new Request(B.url,{signal:B.signal})}let{shortCircuited:ae,loaderData:ze,errors:ie}=await Ut(B,S,$,V,j&&j.submission,j&&j.fetcherSubmission,j&&j.replace,I,z);ae||(k=null,Ze(S,pe({matches:$},I?{actionData:I}:{},{loaderData:ze,errors:ie})))}async function br(w,S,j,L,V){V===void 0&&(V={}),gs();let $=UA(S,j);q({navigation:$});let B,I=xc(L,S);if(!I.route.action&&!I.route.lazy)B={type:Ae.error,error:gt(405,{method:w.method,pathname:S.pathname,routeId:I.route.id})};else if(B=await Gi("action",w,I,L,o,i,s),w.signal.aborted)return{shortCircuited:!0};if(ri(B)){let z;return V&&V.replace!=null?z=V.replace:z=B.location===p.location.pathname+p.location.search,await zi(p,B,{submission:j,replace:z}),{shortCircuited:!0}}if(po(B)){let z=Hr(L,I.route.id);return(V&&V.replace)!==!0&&(_=Se.Push),{pendingActionData:{},pendingActionError:{[z.route.id]:B.error}}}if(or(B))throw gt(400,{type:"defer-action"});return{pendingActionData:{[I.route.id]:B.data}}}async function Ut(w,S,j,L,V,$,B,I,z){let ae=L||Ea(S,V),ze=V||$||Ip(ae),ie=l||a,[xe,Pe]=Op(e.history,p,j,ze,S,H,K,_e,ke,Le,ie,s,I,z);if(ys(oe=>!(j&&j.some(bt=>bt.route.id===oe))||xe&&xe.some(bt=>bt.route.id===oe)),$t=++ht,xe.length===0&&Pe.length===0){let oe=Yd();return Ze(S,pe({matches:j,loaderData:{},errors:z||null},I?{actionData:I}:{},oe?{fetchers:new Map(p.fetchers)}:{})),{shortCircuited:!0}}if(!T){Pe.forEach(bt=>{let Sn=p.fetchers.get(bt.key),Ss=qi(void 0,Sn?Sn.data:void 0);p.fetchers.set(bt.key,Ss)});let oe=I||p.actionData;q(pe({navigation:ae},oe?Object.keys(oe).length===0?{actionData:null}:{actionData:oe}:{},Pe.length>0?{fetchers:new Map(p.fetchers)}:{}))}Pe.forEach(oe=>{re.has(oe.key)&&_n(oe.key),oe.controller&&re.set(oe.key,oe.controller)});let Yn=()=>Pe.forEach(oe=>_n(oe.key));k&&k.signal.addEventListener("abort",Yn);let{results:qn,loaderResults:Mi,fetcherResults:xs}=await Hd(p.matches,j,xe,Pe,w);if(w.signal.aborted)return{shortCircuited:!0};k&&k.signal.removeEventListener("abort",Yn),Pe.forEach(oe=>re.delete(oe.key));let nn=Mp(qn);if(nn){if(nn.idx>=xe.length){let oe=Pe[nn.idx-xe.length].key;Le.add(oe)}return await zi(p,nn.result,{replace:B}),{shortCircuited:!0}}let{loaderData:rn,errors:aa}=Dp(p,j,xe,Mi,z,Pe,xs,N);N.forEach((oe,bt)=>{oe.subscribe(Sn=>{(Sn||oe.done)&&N.delete(bt)})});let As=Yd(),ws=qd($t),_s=As||ws||Pe.length>0;return pe({loaderData:rn,errors:aa},_s?{fetchers:new Map(p.fetchers)}:{})}function Qd(w){return p.fetchers.get(w)||PA}function hy(w,S,j,L){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");re.has(w)&&_n(w);let V=l||a,$=vc(p.location,p.matches,s,u.v7_prependBasename,j,S,L==null?void 0:L.relative),B=Qr(V,$,s);if(!B){ia(w,S,gt(404,{pathname:$}));return}let{path:I,submission:z,error:ae}=jp(u.v7_normalizeFormMethod,!0,$,L);if(ae){ia(w,S,ae);return}let ze=xc(B,I);if(b=(L&&L.preventScrollReset)===!0,z&&Pt(z.formMethod)){my(w,S,I,ze,B,z);return}ke.set(w,{routeId:S,path:I}),gy(w,S,I,ze,B,z)}async function my(w,S,j,L,V,$){if(gs(),ke.delete(w),!L.route.action&&!L.route.lazy){let be=gt(405,{method:$.formMethod,pathname:j,routeId:S});ia(w,S,be);return}let B=p.fetchers.get(w),I=VA($,B);p.fetchers.set(w,I),q({fetchers:new Map(p.fetchers)});let z=new AbortController,ae=Yi(e.history,j,z.signal,$);re.set(w,z);let ze=ht,ie=await Gi("action",ae,L,V,o,i,s);if(ae.signal.aborted){re.get(w)===z&&re.delete(w);return}if(ri(ie))if(re.delete(w),$t>ze){let be=Nr(void 0);p.fetchers.set(w,be),q({fetchers:new Map(p.fetchers)});return}else{Le.add(w);let be=qi($);return p.fetchers.set(w,be),q({fetchers:new Map(p.fetchers)}),zi(p,ie,{submission:$,isFetchActionRedirect:!0})}if(po(ie)){ia(w,S,ie.error);return}if(or(ie))throw gt(400,{type:"defer-action"});let xe=p.navigation.location||p.location,Pe=Yi(e.history,xe,z.signal),Yn=l||a,qn=p.navigation.state!=="idle"?Qr(Yn,p.navigation.location,s):p.matches;W(qn,"Didn't find any matches after fetcher action");let Mi=++ht;Bt.set(w,Mi);let xs=qi($,ie.data);p.fetchers.set(w,xs);let[nn,rn]=Op(e.history,p,qn,$,xe,H,K,_e,ke,Le,Yn,s,{[L.route.id]:ie.data},void 0);rn.filter(be=>be.key!==w).forEach(be=>{let Fi=be.key,tf=p.fetchers.get(Fi),wy=qi(void 0,tf?tf.data:void 0);p.fetchers.set(Fi,wy),re.has(Fi)&&_n(Fi),be.controller&&re.set(Fi,be.controller)}),q({fetchers:new Map(p.fetchers)});let aa=()=>rn.forEach(be=>_n(be.key));z.signal.addEventListener("abort",aa);let{results:As,loaderResults:ws,fetcherResults:_s}=await Hd(p.matches,qn,nn,rn,Pe);if(z.signal.aborted)return;z.signal.removeEventListener("abort",aa),Bt.delete(w),re.delete(w),rn.forEach(be=>re.delete(be.key));let oe=Mp(As);if(oe){if(oe.idx>=nn.length){let be=rn[oe.idx-nn.length].key;Le.add(be)}return zi(p,oe.result)}let{loaderData:bt,errors:Sn}=Dp(p,p.matches,nn,ws,void 0,rn,_s,N);if(p.fetchers.has(w)){let be=Nr(ie.data);p.fetchers.set(w,be)}let Ss=qd(Mi);p.navigation.state==="loading"&&Mi>$t?(W(_,"Expected pending action"),k&&k.abort(),Ze(p.navigation.location,{matches:qn,loaderData:bt,errors:Sn,fetchers:new Map(p.fetchers)})):(q(pe({errors:Sn,loaderData:Lp(p.loaderData,bt,qn,Sn)},Ss||rn.length>0?{fetchers:new Map(p.fetchers)}:{})),H=!1)}async function gy(w,S,j,L,V,$){let B=p.fetchers.get(w),I=qi($,B?B.data:void 0);p.fetchers.set(w,I),q({fetchers:new Map(p.fetchers)});let z=new AbortController,ae=Yi(e.history,j,z.signal);re.set(w,z);let ze=ht,ie=await Gi("loader",ae,L,V,o,i,s);if(or(ie)&&(ie=await Xg(ie,ae.signal,!0)||ie),re.get(w)===z&&re.delete(w),ae.signal.aborted)return;if(ri(ie))if($t>ze){let Pe=Nr(void 0);p.fetchers.set(w,Pe),q({fetchers:new Map(p.fetchers)});return}else{Le.add(w),await zi(p,ie);return}if(po(ie)){let Pe=Hr(p.matches,S);p.fetchers.delete(w),q({fetchers:new Map(p.fetchers),errors:{[Pe.route.id]:ie.error}});return}W(!or(ie),"Unhandled fetcher deferred data");let xe=Nr(ie.data);p.fetchers.set(w,xe),q({fetchers:new Map(p.fetchers)})}async function zi(w,S,j){let{submission:L,replace:V,isFetchActionRedirect:$}=j===void 0?{}:j;S.revalidate&&(H=!0);let B=Do(w.location,S.location,pe({_isRedirect:!0},$?{_isFetchActionRedirect:!0}:{}));if(W(B,"Expected a location on the redirect navigation"),n){let ae=!1;if(S.reloadDocument)ae=!0;else if(Gg.test(S.location)){const ze=e.history.createURL(S.location);ae=ze.origin!==t.location.origin||Ri(ze.pathname,s)==null}if(ae){V?t.location.replace(S.location):t.location.assign(S.location);return}}k=null;let I=V===!0?Se.Replace:Se.Push,z=L||Ip(w.navigation);if(OA.has(S.status)&&z&&Pt(z.formMethod))await mt(I,B,{submission:pe({},z,{formAction:S.location}),preventScrollReset:b});else if($)await mt(I,B,{overrideNavigation:Ea(B),fetcherSubmission:z,preventScrollReset:b});else{let ae=Ea(B,z);await mt(I,B,{overrideNavigation:ae,preventScrollReset:b})}}async function Hd(w,S,j,L,V){let $=await Promise.all([...j.map(z=>Gi("loader",V,z,S,o,i,s)),...L.map(z=>z.matches&&z.match&&z.controller?Gi("loader",Yi(e.history,z.path,z.controller.signal),z.match,z.matches,o,i,s):{type:Ae.error,error:gt(404,{pathname:z.path})})]),B=$.slice(0,j.length),I=$.slice(j.length);return await Promise.all([Fp(w,j,B,B.map(()=>V.signal),!1,p.loaderData),Fp(w,L.map(z=>z.match),I,L.map(z=>z.controller?z.controller.signal:null),!0)]),{results:$,loaderResults:B,fetcherResults:I}}function gs(){H=!0,K.push(...ys()),ke.forEach((w,S)=>{re.has(S)&&(_e.push(S),_n(S))})}function ia(w,S,j){let L=Hr(p.matches,S);vs(w),q({errors:{[L.route.id]:j},fetchers:new Map(p.fetchers)})}function vs(w){let S=p.fetchers.get(w);re.has(w)&&!(S&&S.state==="loading"&&Bt.has(w))&&_n(w),ke.delete(w),Bt.delete(w),Le.delete(w),p.fetchers.delete(w)}function _n(w){let S=re.get(w);W(S,"Expected fetch controller: "+w),S.abort(),re.delete(w)}function Gd(w){for(let S of w){let j=Qd(S),L=Nr(j.data);p.fetchers.set(S,L)}}function Yd(){let w=[],S=!1;for(let j of Le){let L=p.fetchers.get(j);W(L,"Expected fetcher: "+j),L.state==="loading"&&(Le.delete(j),w.push(j),S=!0)}return Gd(w),S}function qd(w){let S=[];for(let[j,L]of Bt)if(L<w){let V=p.fetchers.get(j);W(V,"Expected fetcher: "+j),V.state==="loading"&&(_n(j),Bt.delete(j),S.push(j))}return Gd(S),S.length>0}function vy(w,S){let j=p.blockers.get(w)||Hi;return M.get(w)!==S&&M.set(w,S),j}function Xd(w){p.blockers.delete(w),M.delete(w)}function oa(w,S){let j=p.blockers.get(w)||Hi;W(j.state==="unblocked"&&S.state==="blocked"||j.state==="blocked"&&S.state==="blocked"||j.state==="blocked"&&S.state==="proceeding"||j.state==="blocked"&&S.state==="unblocked"||j.state==="proceeding"&&S.state==="unblocked","Invalid blocker state transition: "+j.state+" -> "+S.state);let L=new Map(p.blockers);L.set(w,S),q({blockers:L})}function Zd(w){let{currentLocation:S,nextLocation:j,historyAction:L}=w;if(M.size===0)return;M.size>1&&gi(!1,"A router only supports one blocker at a time");let V=Array.from(M.entries()),[$,B]=V[V.length-1],I=p.blockers.get($);if(!(I&&I.state==="proceeding")&&B({currentLocation:S,nextLocation:j,historyAction:L}))return $}function ys(w){let S=[];return N.forEach((j,L)=>{(!w||w(L))&&(j.cancel(),S.push(L),N.delete(L))}),S}function yy(w,S,j){if(g=w,A=S,y=j||null,!x&&p.navigation===nu){x=!0;let L=ef(p.location,p.matches);L!=null&&q({restoreScrollPosition:L})}return()=>{g=null,A=null,y=null}}function Jd(w,S){return y&&y(w,S.map(L=>BA(L,p.loaderData)))||w.key}function xy(w,S){if(g&&A){let j=Jd(w,S);g[j]=A()}}function ef(w,S){if(g){let j=Jd(w,S),L=g[j];if(typeof L=="number")return L}return null}function Ay(w){o={},l=gc(w,i,void 0,o)}return v={get basename(){return s},get state(){return p},get routes(){return a},initialize:le,subscribe:kt,enableScrollRestoration:yy,navigate:$e,fetch:hy,revalidate:Je,createHref:w=>e.history.createHref(w),encodeLocation:w=>e.history.encodeLocation(w),getFetcher:Qd,deleteFetcher:vs,dispose:fe,getBlocker:vy,deleteBlocker:Xd,_internalFetchControllers:re,_internalActiveDeferreds:N,_internalSetRoutes:Ay},v}function DA(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function vc(e,t,n,r,i,o,a){let l,s;if(o!=null&&a!=="path"){l=[];for(let d of t)if(l.push(d),d.route.id===o){s=d;break}}else l=t,s=t[t.length-1];let u=is(i||".",Wo(l).map(d=>d.pathnameBase),Ri(e.pathname,n)||e.pathname,a==="path");return i==null&&(u.search=e.search,u.hash=e.hash),(i==null||i===""||i===".")&&s&&s.route.index&&!Od(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:fn([n,u.pathname])),vr(u)}function jp(e,t,n,r){if(!r||!DA(r))return{path:n};if(r.formMethod&&!$A(r.formMethod))return{path:n,error:gt(405,{method:r.formMethod})};let i=()=>({path:n,error:gt(400,{type:"invalid-body"})}),o=r.formMethod||"get",a=e?o.toUpperCase():o.toLowerCase(),l=qg(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Pt(a))return i();let g=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((y,A)=>{let[x,R]=A;return""+y+x+"="+R+`
`},""):String(r.body);return{path:n,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:g}}}else if(r.formEncType==="application/json"){if(!Pt(a))return i();try{let g=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:g,text:void 0}}}catch{return i()}}}W(typeof FormData=="function","FormData is not available in this environment");let s,u;if(r.formData)s=yc(r.formData),u=r.formData;else if(r.body instanceof FormData)s=yc(r.body),u=r.body;else if(r.body instanceof URLSearchParams)s=r.body,u=Tp(s);else if(r.body==null)s=new URLSearchParams,u=new FormData;else try{s=new URLSearchParams(r.body),u=Tp(s)}catch{return i()}let d={formMethod:a,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Pt(d.formMethod))return{path:n,submission:d};let h=An(n);return t&&h.search&&Od(h.search)&&s.append("index",""),h.search="?"+s,{path:vr(h),submission:d}}function LA(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Op(e,t,n,r,i,o,a,l,s,u,d,h,g,y){let A=y?Object.values(y)[0]:g?Object.values(g)[0]:void 0,x=e.createURL(t.location),R=e.createURL(i),m=y?Object.keys(y)[0]:void 0,v=LA(n,m).filter((_,b)=>{if(_.route.lazy)return!0;if(_.route.loader==null)return!1;if(zA(t.loaderData,t.matches[b],_)||a.some(H=>H===_.route.id))return!0;let k=t.matches[b],T=_;return Pp(_,pe({currentUrl:x,currentParams:k.params,nextUrl:R,nextParams:T.params},r,{actionResult:A,defaultShouldRevalidate:o||x.pathname+x.search===R.pathname+R.search||x.search!==R.search||Yg(k,T)}))}),p=[];return s.forEach((_,b)=>{if(!n.some(_e=>_e.route.id===_.routeId))return;let k=Qr(d,_.path,h);if(!k){p.push({key:b,routeId:_.routeId,path:_.path,matches:null,match:null,controller:null});return}let T=t.fetchers.get(b),H=xc(k,_.path),K=!1;u.has(b)?K=!1:l.includes(b)?K=!0:T&&T.state!=="idle"&&T.data===void 0?K=o:K=Pp(H,pe({currentUrl:x,currentParams:t.matches[t.matches.length-1].params,nextUrl:R,nextParams:n[n.length-1].params},r,{actionResult:A,defaultShouldRevalidate:o})),K&&p.push({key:b,routeId:_.routeId,path:_.path,matches:k,match:H,controller:new AbortController})}),[v,p]}function zA(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function Yg(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Pp(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Np(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];W(i,"No route found in manifest");let o={};for(let a in r){let s=i[a]!==void 0&&a!=="hasErrorBoundary";gi(!s,'Route "'+i.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!s&&!oA.has(a)&&(o[a]=r[a])}Object.assign(i,o),Object.assign(i,pe({},t(i),{lazy:void 0}))}async function Gi(e,t,n,r,i,o,a,l){l===void 0&&(l={});let s,u,d,h=A=>{let x,R=new Promise((m,f)=>x=f);return d=()=>x(),t.signal.addEventListener("abort",d),Promise.race([A({request:t,params:n.params,context:l.requestContext}),R])};try{let A=n.route[e];if(n.route.lazy)if(A)u=(await Promise.all([h(A),Np(n.route,o,i)]))[0];else if(await Np(n.route,o,i),A=n.route[e],A)u=await h(A);else if(e==="action"){let x=new URL(t.url),R=x.pathname+x.search;throw gt(405,{method:t.method,pathname:R,routeId:n.route.id})}else return{type:Ae.data,data:void 0};else if(A)u=await h(A);else{let x=new URL(t.url),R=x.pathname+x.search;throw gt(404,{pathname:R})}W(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(A){s=Ae.error,u=A}finally{d&&t.signal.removeEventListener("abort",d)}if(KA(u)){let A=u.status;if(jA.has(A)){let m=u.headers.get("Location");if(W(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!Gg.test(m))m=vc(new URL(t.url),r.slice(0,r.indexOf(n)+1),a,!0,m);else if(!l.isStaticRequest){let f=new URL(t.url),v=m.startsWith("//")?new URL(f.protocol+m):new URL(m),p=Ri(v.pathname,a)!=null;v.origin===f.origin&&p&&(m=v.pathname+v.search+v.hash)}if(l.isStaticRequest)throw u.headers.set("Location",m),u;return{type:Ae.redirect,status:A,location:m,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(l.isRouteRequest)throw{type:s===Ae.error?Ae.error:Ae.data,response:u};let x,R=u.headers.get("Content-Type");return R&&/\bapplication\/json\b/.test(R)?x=await u.json():x=await u.text(),s===Ae.error?{type:s,error:new jd(A,u.statusText,x),headers:u.headers}:{type:Ae.data,data:x,statusCode:u.status,headers:u.headers}}if(s===Ae.error)return{type:s,error:u};if(IA(u)){var g,y;return{type:Ae.deferred,deferredData:u,statusCode:(g=u.init)==null?void 0:g.status,headers:((y=u.init)==null?void 0:y.headers)&&new Headers(u.init.headers)}}return{type:Ae.data,data:u}}function Yi(e,t,n,r){let i=e.createURL(qg(t)).toString(),o={signal:n};if(r&&Pt(r.formMethod)){let{formMethod:a,formEncType:l}=r;o.method=a.toUpperCase(),l==="application/json"?(o.headers=new Headers({"Content-Type":l}),o.body=JSON.stringify(r.json)):l==="text/plain"?o.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?o.body=yc(r.formData):o.body=r.formData}return new Request(i,o)}function yc(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function Tp(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function MA(e,t,n,r,i){let o={},a=null,l,s=!1,u={};return n.forEach((d,h)=>{let g=t[h].route.id;if(W(!ri(d),"Cannot handle redirect results in processLoaderData"),po(d)){let y=Hr(e,g),A=d.error;r&&(A=Object.values(r)[0],r=void 0),a=a||{},a[y.route.id]==null&&(a[y.route.id]=A),o[g]=void 0,s||(s=!0,l=Qg(d.error)?d.error.status:500),d.headers&&(u[g]=d.headers)}else or(d)?(i.set(g,d.deferredData),o[g]=d.deferredData.data):o[g]=d.data,d.statusCode!=null&&d.statusCode!==200&&!s&&(l=d.statusCode),d.headers&&(u[g]=d.headers)}),r&&(a=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:a,statusCode:l||200,loaderHeaders:u}}function Dp(e,t,n,r,i,o,a,l){let{loaderData:s,errors:u}=MA(t,n,r,i,l);for(let d=0;d<o.length;d++){let{key:h,match:g,controller:y}=o[d];W(a!==void 0&&a[d]!==void 0,"Did not find corresponding fetcher result");let A=a[d];if(!(y&&y.signal.aborted))if(po(A)){let x=Hr(e.matches,g==null?void 0:g.route.id);u&&u[x.route.id]||(u=pe({},u,{[x.route.id]:A.error})),e.fetchers.delete(h)}else if(ri(A))W(!1,"Unhandled fetcher revalidation redirect");else if(or(A))W(!1,"Unhandled fetcher deferred data");else{let x=Nr(A.data);e.fetchers.set(h,x)}}return{loaderData:s,errors:u}}function Lp(e,t,n,r){let i=pe({},t);for(let o of n){let a=o.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(i[a]=t[a]):e[a]!==void 0&&o.route.loader&&(i[a]=e[a]),r&&r.hasOwnProperty(a))break}return i}function Hr(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function zp(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function gt(e,t){let{pathname:n,routeId:r,method:i,type:o}=t===void 0?{}:t,a="Unknown Server Error",l="Unknown @remix-run/router error";return e===400?(a="Bad Request",i&&n&&r?l="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"?l="defer() is not supported in actions":o==="invalid-body"&&(l="Unable to encode submission body")):e===403?(a="Forbidden",l='Route "'+r+'" does not match URL "'+n+'"'):e===404?(a="Not Found",l='No route matches URL "'+n+'"'):e===405&&(a="Method Not Allowed",i&&n&&r?l="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(l='Invalid request method "'+i.toUpperCase()+'"')),new jd(e||500,a,new Error(l),!0)}function Mp(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(ri(n))return{result:n,idx:t}}}function qg(e){let t=typeof e=="string"?An(e):e;return vr(pe({},t,{hash:""}))}function FA(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function or(e){return e.type===Ae.deferred}function po(e){return e.type===Ae.error}function ri(e){return(e&&e.type)===Ae.redirect}function IA(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function KA(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function $A(e){return RA.has(e.toLowerCase())}function Pt(e){return kA.has(e.toLowerCase())}async function Fp(e,t,n,r,i,o){for(let a=0;a<n.length;a++){let l=n[a],s=t[a];if(!s)continue;let u=e.find(h=>h.route.id===s.route.id),d=u!=null&&!Yg(u,s)&&(o&&o[s.route.id])!==void 0;if(or(l)&&(i||d)){let h=r[a];W(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await Xg(l,h,i).then(g=>{g&&(n[a]=g||n[a])})}}}async function Xg(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Ae.data,data:e.deferredData.unwrappedData}}catch(i){return{type:Ae.error,error:i}}return{type:Ae.data,data:e.deferredData.data}}}function Od(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function BA(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function xc(e,t){let n=typeof t=="string"?An(t).search:t.search;if(e[e.length-1].route.index&&Od(n||""))return e[e.length-1];let r=Wo(e);return r[r.length-1]}function Ip(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:o,json:a}=e;if(!(!t||!n||!r)){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:o,json:void 0,text:void 0};if(a!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:a,text:void 0}}}function Ea(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function UA(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function qi(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}function VA(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0," _hasFetcherDoneAnything ":!0}}function Nr(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function El(){return El=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},El.apply(this,arguments)}const os=E.createContext(null),Pd=E.createContext(null),_r=E.createContext(null),as=E.createContext(null),en=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Zg=E.createContext(null);function WA(e,t){let{relative:n}=t===void 0?{}:t;ji()||W(!1);let{basename:r,navigator:i}=E.useContext(_r),{hash:o,pathname:a,search:l}=Td(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:fn([r,a])),i.createHref({pathname:s,search:l,hash:o})}function ji(){return E.useContext(as)!=null}function Oi(){return ji()||W(!1),E.useContext(as).location}function Jg(e){E.useContext(_r).static||E.useLayoutEffect(e)}function Nd(){let{isDataRoute:e}=E.useContext(en);return e?aw():QA()}function QA(){ji()||W(!1);let e=E.useContext(os),{basename:t,navigator:n}=E.useContext(_r),{matches:r}=E.useContext(en),{pathname:i}=Oi(),o=JSON.stringify(Wo(r).map(s=>s.pathnameBase)),a=E.useRef(!1);return Jg(()=>{a.current=!0}),E.useCallback(function(s,u){if(u===void 0&&(u={}),!a.current)return;if(typeof s=="number"){n.go(s);return}let d=is(s,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:fn([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,o,i,e])}const HA=E.createContext(null);function GA(e){let t=E.useContext(en).outlet;return t&&E.createElement(HA.Provider,{value:e},t)}function YA(){let{matches:e}=E.useContext(en),t=e[e.length-1];return t?t.params:{}}function Td(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=E.useContext(en),{pathname:i}=Oi(),o=JSON.stringify(Wo(r).map(a=>a.pathnameBase));return E.useMemo(()=>is(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function qA(e,t,n){ji()||W(!1);let{navigator:r}=E.useContext(_r),{matches:i}=E.useContext(en),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=Oi(),u;if(t){var d;let x=typeof t=="string"?An(t):t;l==="/"||(d=x.pathname)!=null&&d.startsWith(l)||W(!1),u=x}else u=s;let h=u.pathname||"/",g=l==="/"?h:h.slice(l.length)||"/",y=Qr(e,{pathname:g}),A=tw(y&&y.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:fn([l,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:fn([l,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n);return t&&A?E.createElement(as.Provider,{value:{location:El({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Se.Pop}},A):A}function XA(){let e=ow(),t=Qg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,o)}const ZA=E.createElement(XA,null);class JA extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?E.createElement(en.Provider,{value:this.props.routeContext},E.createElement(Zg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ew(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext(os);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(en.Provider,{value:t},r)}function tw(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||W(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,s,u)=>{let d=s.route.id?a==null?void 0:a[s.route.id]:null,h=null;n&&(h=s.route.errorElement||ZA);let g=t.concat(o.slice(0,u+1)),y=()=>{let A;return d?A=h:s.route.Component?A=E.createElement(s.route.Component,null):s.route.element?A=s.route.element:A=l,E.createElement(ew,{match:s,routeContext:{outlet:l,matches:g,isDataRoute:n!=null},children:A})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?E.createElement(JA,{location:n.location,revalidation:n.revalidation,component:h,error:d,children:y(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):y()},null)}var ev=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ev||{}),kl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(kl||{});function nw(e){let t=E.useContext(os);return t||W(!1),t}function rw(e){let t=E.useContext(Pd);return t||W(!1),t}function iw(e){let t=E.useContext(en);return t||W(!1),t}function tv(e){let t=iw(),n=t.matches[t.matches.length-1];return n.route.id||W(!1),n.route.id}function ow(){var e;let t=E.useContext(Zg),n=rw(kl.UseRouteError),r=tv(kl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function aw(){let{router:e}=nw(ev.UseNavigateStable),t=tv(kl.UseNavigateStable),n=E.useRef(!1);return Jg(()=>{n.current=!0}),E.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,El({fromRouteId:t},o)))},[e,t])}const lw="startTransition",Kp=$y[lw];function sw(e){let{fallbackElement:t,router:n,future:r}=e,[i,o]=E.useState(n.state),{v7_startTransition:a}=r||{},l=E.useCallback(h=>{a&&Kp?Kp(()=>o(h)):o(h)},[o,a]);E.useLayoutEffect(()=>n.subscribe(l),[n,l]);let s=E.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:h=>n.navigate(h),push:(h,g,y)=>n.navigate(h,{state:g,preventScrollReset:y==null?void 0:y.preventScrollReset}),replace:(h,g,y)=>n.navigate(h,{replace:!0,state:g,preventScrollReset:y==null?void 0:y.preventScrollReset})}),[n]),u=n.basename||"/",d=E.useMemo(()=>({router:n,navigator:s,static:!1,basename:u}),[n,s,u]);return E.createElement(E.Fragment,null,E.createElement(os.Provider,{value:d},E.createElement(Pd.Provider,{value:i},E.createElement(cw,{basename:u,location:i.location,navigationType:i.historyAction,navigator:s},i.initialized?E.createElement(uw,{routes:n.routes,state:i}):t))),null)}function uw(e){let{routes:t,state:n}=e;return qA(t,void 0,n)}function $p(e){let{to:t,replace:n,state:r,relative:i}=e;ji()||W(!1);let{matches:o}=E.useContext(en),{pathname:a}=Oi(),l=Nd(),s=is(t,Wo(o).map(d=>d.pathnameBase),a,i==="path"),u=JSON.stringify(s);return E.useEffect(()=>l(JSON.parse(u),{replace:n,state:r,relative:i}),[l,u,i,n,r]),null}function nv(e){return GA(e.context)}function te(e){W(!1)}function cw(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Se.Pop,navigator:o,static:a=!1}=e;ji()&&W(!1);let l=t.replace(/^\/*/,"/"),s=E.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=An(r));let{pathname:u="/",search:d="",hash:h="",state:g=null,key:y="default"}=r,A=E.useMemo(()=>{let x=Ri(u,l);return x==null?null:{location:{pathname:x,search:d,hash:h,state:g,key:y},navigationType:i}},[l,u,d,h,g,y,i]);return A==null?null:E.createElement(_r.Provider,{value:s},E.createElement(as.Provider,{children:n,value:A}))}new Promise(()=>{});function Ac(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;let o=[...t,i];if(r.type===E.Fragment){n.push.apply(n,Ac(r.props.children,o));return}r.type!==te&&W(!1),!r.props.index||!r.props.children||W(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Ac(r.props.children,o)),n.push(a)}),n}function dw(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:E.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:E.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vi(){return vi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vi.apply(this,arguments)}function rv(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function fw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function pw(e,t){return e.button===0&&(!t||t==="_self")&&!fw(e)}const hw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],mw=["aria-current","caseSensitive","className","end","style","to","children"];function gw(e,t){return TA({basename:t==null?void 0:t.basename,future:vi({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:nA({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||vw(),routes:e,mapRouteProperties:dw}).initialize()}function vw(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=vi({},t,{errors:yw(t.errors)})),t}function yw(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new jd(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let o=window[i.__subType];if(typeof o=="function")try{let a=new o(i.message);a.stack="",n[r]=a}catch{}}if(n[r]==null){let o=new Error(i.message);o.stack="",n[r]=o}}else n[r]=i;return n}const xw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Aw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tn=E.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:d}=t,h=rv(t,hw),{basename:g}=E.useContext(_r),y,A=!1;if(typeof u=="string"&&Aw.test(u)&&(y=u,xw))try{let f=new URL(window.location.href),v=u.startsWith("//")?new URL(f.protocol+u):new URL(u),p=Ri(v.pathname,g);v.origin===f.origin&&p!=null?u=p+v.search+v.hash:A=!0}catch{}let x=WA(u,{relative:i}),R=ww(u,{replace:a,state:l,target:s,preventScrollReset:d,relative:i});function m(f){r&&r(f),f.defaultPrevented||R(f)}return E.createElement("a",vi({},h,{href:y||x,onClick:A||o?r:m,ref:n,target:s}))}),Sr=E.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:a=!1,style:l,to:s,children:u}=t,d=rv(t,mw),h=Td(s,{relative:d.relative}),g=Oi(),y=E.useContext(Pd),{navigator:A}=E.useContext(_r),x=A.encodeLocation?A.encodeLocation(h).pathname:h.pathname,R=g.pathname,m=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(R=R.toLowerCase(),m=m?m.toLowerCase():null,x=x.toLowerCase());let f=R===x||!a&&R.startsWith(x)&&R.charAt(x.length)==="/",v=m!=null&&(m===x||!a&&m.startsWith(x)&&m.charAt(x.length)==="/"),p=f?r:void 0,_;typeof o=="function"?_=o({isActive:f,isPending:v}):_=[o,f?"active":null,v?"pending":null].filter(Boolean).join(" ");let b=typeof l=="function"?l({isActive:f,isPending:v}):l;return E.createElement(tn,vi({},d,{"aria-current":p,className:_,ref:n,style:b,to:s}),typeof u=="function"?u({isActive:f,isPending:v}):u)});var Bp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Bp||(Bp={}));var Up;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Up||(Up={}));function ww(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=Nd(),s=Oi(),u=Td(e,{relative:a});return E.useCallback(d=>{if(pw(d,n)){d.preventDefault();let h=r!==void 0?r:vr(s)===vr(u);l(e,{replace:h,state:i,preventScrollReset:o,relative:a})}},[s,l,u,r,i,n,e,o,a])}function J(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error(typeof e=="number"?"[MobX] minified error nr: "+e+(n.length?" "+n.map(String).join(","):"")+". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts":"[MobX] "+e)}var _w={};function Dd(){return typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:_w}var iv=Object.assign,bl=Object.getOwnPropertyDescriptor,Xt=Object.defineProperty,ls=Object.prototype,wc=[];Object.freeze(wc);var ov={};Object.freeze(ov);var Sw=typeof Proxy<"u",Cw=Object.toString();function av(){Sw||J("Proxy not available")}function lv(e){var t=!1;return function(){if(!t)return t=!0,e.apply(this,arguments)}}var Gr=function(){};function Kt(e){return typeof e=="function"}function yr(e){var t=typeof e;switch(t){case"string":case"symbol":case"number":return!0}return!1}function ss(e){return e!==null&&typeof e=="object"}function yn(e){if(!ss(e))return!1;var t=Object.getPrototypeOf(e);if(t==null)return!0;var n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n.toString()===Cw}function sv(e){var t=e==null?void 0:e.constructor;return t?t.name==="GeneratorFunction"||t.displayName==="GeneratorFunction":!1}function Qo(e,t,n){Xt(e,t,{enumerable:!1,writable:!0,configurable:!0,value:n})}function uv(e,t,n){Xt(e,t,{enumerable:!1,writable:!1,configurable:!0,value:n})}function Cr(e,t){var n="isMobX"+e;return t.prototype[n]=!0,function(r){return ss(r)&&r[n]===!0}}function Pi(e){return e instanceof Map}function Ho(e){return e instanceof Set}var cv=typeof Object.getOwnPropertySymbols<"u";function Ew(e){var t=Object.keys(e);if(!cv)return t;var n=Object.getOwnPropertySymbols(e);return n.length?[].concat(t,n.filter(function(r){return ls.propertyIsEnumerable.call(e,r)})):t}var yi=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:cv?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames;function dv(e){return e===null?null:typeof e=="object"?""+e:e}function pn(e,t){return ls.hasOwnProperty.call(e,t)}var kw=Object.getOwnPropertyDescriptors||function(t){var n={};return yi(t).forEach(function(r){n[r]=bl(t,r)}),n};function Vp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,jw(r.key),r)}}function Ld(e,t,n){return t&&Vp(e.prototype,t),n&&Vp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function xi(){return xi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xi.apply(this,arguments)}function fv(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,_c(e,t)}function _c(e,t){return _c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},_c(e,t)}function ru(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function bw(e,t){if(e){if(typeof e=="string")return Wp(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wp(e,t)}}function Wp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Yr(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=bw(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rw(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function jw(e){var t=Rw(e,"string");return typeof t=="symbol"?t:String(t)}var Gt=Symbol("mobx-stored-annotations");function Zt(e){function t(n,r){Go(n,r,e)}return Object.assign(t,e)}function Go(e,t,n){pn(e,Gt)||Qo(e,Gt,xi({},e[Gt])),Fw(n)||(e[Gt][t]=n)}function Ow(e){return pn(e,Gt)||Qo(e,Gt,xi({},e[Gt])),e[Gt]}var U=Symbol("mobx administration"),Yo=function(){function e(n){n===void 0&&(n="Atom"),this.name_=void 0,this.isPendingUnobservation_=!1,this.isBeingObserved_=!1,this.observers_=new Set,this.diffValue_=0,this.lastAccessedBy_=0,this.lowestObserverState_=X.NOT_TRACKING_,this.onBOL=void 0,this.onBUOL=void 0,this.name_=n}var t=e.prototype;return t.onBO=function(){this.onBOL&&this.onBOL.forEach(function(r){return r()})},t.onBUO=function(){this.onBUOL&&this.onBUOL.forEach(function(r){return r()})},t.reportObserved=function(){return Nv(this)},t.reportChanged=function(){nt(),Tv(this),P.stateVersion=P.stateVersion<Number.MAX_SAFE_INTEGER?P.stateVersion+1:Number.MIN_SAFE_INTEGER,rt()},t.toString=function(){return this.name_},e}(),zd=Cr("Atom",Yo);function pv(e,t,n){t===void 0&&(t=Gr),n===void 0&&(n=Gr);var r=new Yo(e);return t!==Gr&&I_(r,t),n!==Gr&&Kv(r,n),r}function Pw(e,t){return e===t}function Nw(e,t){return Bd(e,t)}function Tw(e,t){return Bd(e,t,1)}function Dw(e,t){return Object.is?Object.is(e,t):e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Rl={identity:Pw,structural:Nw,default:Dw,shallow:Tw};function Ai(e,t,n){return Wv(e)?e:Array.isArray(e)?Fe.array(e,{name:n}):yn(e)?Fe.object(e,void 0,{name:n}):Pi(e)?Fe.map(e,{name:n}):Ho(e)?Fe.set(e,{name:n}):typeof e=="function"&&!Id(e)&&!Dl(e)?sv(e)?Mo(e):zo(n,e):e}function Lw(e,t,n){if(e==null||Fo(e)||ps(e)||Er(e)||Ti(e))return e;if(Array.isArray(e))return Fe.array(e,{name:n,deep:!1});if(yn(e))return Fe.object(e,void 0,{name:n,deep:!1});if(Pi(e))return Fe.map(e,{name:n,deep:!1});if(Ho(e))return Fe.set(e,{name:n,deep:!1})}function us(e){return e}function zw(e,t){return Bd(e,t)?t:e}var Mw="override";function Fw(e){return e.annotationType_===Mw}function qo(e,t){return{annotationType_:e,options_:t,make_:Iw,extend_:Kw}}function Iw(e,t,n,r){var i;if((i=this.options_)!=null&&i.bound)return this.extend_(e,t,n,!1)===null?0:1;if(r===e.target_)return this.extend_(e,t,n,!1)===null?0:2;if(Id(n.value))return 1;var o=hv(e,this,t,n,!1);return Xt(r,t,o),2}function Kw(e,t,n,r){var i=hv(e,this,t,n);return e.defineProperty_(t,i,r)}function $w(e,t,n,r){t.annotationType_,r.value}function hv(e,t,n,r,i){var o,a,l,s,u,d,h;i===void 0&&(i=P.safeDescriptors),$w(e,t,n,r);var g=r.value;if((o=t.options_)!=null&&o.bound){var y;g=g.bind((y=e.proxy_)!=null?y:e.target_)}return{value:wi((a=(l=t.options_)==null?void 0:l.name)!=null?a:n.toString(),g,(s=(u=t.options_)==null?void 0:u.autoAction)!=null?s:!1,(d=t.options_)!=null&&d.bound?(h=e.proxy_)!=null?h:e.target_:void 0),configurable:i?e.isPlainObject_:!0,enumerable:!1,writable:!i}}function mv(e,t){return{annotationType_:e,options_:t,make_:Bw,extend_:Uw}}function Bw(e,t,n,r){var i;if(r===e.target_)return this.extend_(e,t,n,!1)===null?0:2;if((i=this.options_)!=null&&i.bound&&(!pn(e.target_,t)||!Dl(e.target_[t]))&&this.extend_(e,t,n,!1)===null)return 0;if(Dl(n.value))return 1;var o=gv(e,this,t,n,!1,!1);return Xt(r,t,o),2}function Uw(e,t,n,r){var i,o=gv(e,this,t,n,(i=this.options_)==null?void 0:i.bound);return e.defineProperty_(t,o,r)}function Vw(e,t,n,r){t.annotationType_,r.value}function gv(e,t,n,r,i,o){o===void 0&&(o=P.safeDescriptors),Vw(e,t,n,r);var a=r.value;if(Dl(a)||(a=Mo(a)),i){var l;a=a.bind((l=e.proxy_)!=null?l:e.target_),a.isMobXFlow=!0}return{value:a,configurable:o?e.isPlainObject_:!0,enumerable:!1,writable:!o}}function Md(e,t){return{annotationType_:e,options_:t,make_:Ww,extend_:Qw}}function Ww(e,t,n){return this.extend_(e,t,n,!1)===null?0:1}function Qw(e,t,n,r){return Hw(e,this,t,n),e.defineComputedProperty_(t,xi({},this.options_,{get:n.get,set:n.set}),r)}function Hw(e,t,n,r){t.annotationType_,r.get}function cs(e,t){return{annotationType_:e,options_:t,make_:Gw,extend_:Yw}}function Gw(e,t,n){return this.extend_(e,t,n,!1)===null?0:1}function Yw(e,t,n,r){var i,o;return qw(e,this),e.defineObservableProperty_(t,n.value,(i=(o=this.options_)==null?void 0:o.enhancer)!=null?i:Ai,r)}function qw(e,t,n,r){t.annotationType_}var Xw="true",Zw=vv();function vv(e){return{annotationType_:Xw,options_:e,make_:Jw,extend_:e_}}function Jw(e,t,n,r){var i,o;if(n.get)return ds.make_(e,t,n,r);if(n.set){var a=wi(t.toString(),n.set);return r===e.target_?e.defineProperty_(t,{configurable:P.safeDescriptors?e.isPlainObject_:!0,set:a})===null?0:2:(Xt(r,t,{configurable:!0,set:a}),2)}if(r!==e.target_&&typeof n.value=="function"){var l;if(sv(n.value)){var s,u=(s=this.options_)!=null&&s.autoBind?Mo.bound:Mo;return u.make_(e,t,n,r)}var d=(l=this.options_)!=null&&l.autoBind?zo.bound:zo;return d.make_(e,t,n,r)}var h=((i=this.options_)==null?void 0:i.deep)===!1?Fe.ref:Fe;if(typeof n.value=="function"&&(o=this.options_)!=null&&o.autoBind){var g;n.value=n.value.bind((g=e.proxy_)!=null?g:e.target_)}return h.make_(e,t,n,r)}function e_(e,t,n,r){var i,o;if(n.get)return ds.extend_(e,t,n,r);if(n.set)return e.defineProperty_(t,{configurable:P.safeDescriptors?e.isPlainObject_:!0,set:wi(t.toString(),n.set)},r);if(typeof n.value=="function"&&(i=this.options_)!=null&&i.autoBind){var a;n.value=n.value.bind((a=e.proxy_)!=null?a:e.target_)}var l=((o=this.options_)==null?void 0:o.deep)===!1?Fe.ref:Fe;return l.extend_(e,t,n,r)}var t_="observable",n_="observable.ref",r_="observable.shallow",i_="observable.struct",yv={deep:!0,name:void 0,defaultDecorator:void 0,proxy:!0};Object.freeze(yv);function ka(e){return e||yv}var xv=cs(t_),o_=cs(n_,{enhancer:us}),a_=cs(r_,{enhancer:Lw}),l_=cs(i_,{enhancer:zw}),Av=Zt(xv);function ba(e){return e.deep===!0?Ai:e.deep===!1?us:u_(e.defaultDecorator)}function s_(e){var t;return e?(t=e.defaultDecorator)!=null?t:vv(e):void 0}function u_(e){var t,n;return e&&(t=(n=e.options_)==null?void 0:n.enhancer)!=null?t:Ai}function wv(e,t,n){if(yr(t)){Go(e,t,xv);return}return Wv(e)?e:yn(e)?Fe.object(e,t,n):Array.isArray(e)?Fe.array(e,t):Pi(e)?Fe.map(e,t):Ho(e)?Fe.set(e,t):typeof e=="object"&&e!==null?e:Fe.box(e,t)}iv(wv,Av);var c_={box:function(t,n){var r=ka(n);return new ii(t,ba(r),r.name,!0,r.equals)},array:function(t,n){var r=ka(n);return(P.useProxies===!1||r.proxy===!1?sS:J_)(t,ba(r),r.name)},map:function(t,n){var r=ka(n);return new Yv(t,ba(r),r.name)},set:function(t,n){var r=ka(n);return new Zv(t,ba(r),r.name)},object:function(t,n,r){return Bv(P.useProxies===!1||(r==null?void 0:r.proxy)===!1?na({},r):Y_({},r),t,n)},ref:Zt(o_),shallow:Zt(a_),deep:Av,struct:Zt(l_)},Fe=iv(wv,c_),_v="computed",d_="computed.struct",Sv=Md(_v),f_=Md(d_,{equals:Rl.structural}),ds=function(t,n){if(yr(n))return Go(t,n,Sv);if(yn(t))return Zt(Md(_v,t));var r=yn(n)?n:{};return r.get=t,r.name||(r.name=t.name||""),new Lo(r)};Object.assign(ds,Sv);ds.struct=Zt(f_);var Qp,Hp,jl=0,p_=1,h_=(Qp=(Hp=bl(function(){},"name"))==null?void 0:Hp.configurable)!=null?Qp:!1,Gp={value:"action",configurable:!0,writable:!1,enumerable:!1};function wi(e,t,n,r){n===void 0&&(n=!1);function i(){return m_(e,n,t,r||this,arguments)}return i.isMobxAction=!0,h_&&(Gp.value=e,Xt(i,"name",Gp)),i}function m_(e,t,n,r,i){var o=g_(e,t);try{return n.apply(r,i)}catch(a){throw o.error_=a,a}finally{v_(o)}}function g_(e,t,n,r){var i=!1,o=0,a=P.trackingDerivation,l=!t||!a;nt();var s=P.allowStateChanges;l&&(Ni(),s=Xo(!0));var u=Fd(!0),d={runAsAction_:l,prevDerivation_:a,prevAllowStateChanges_:s,prevAllowStateReads_:u,notifySpy_:i,startTime_:o,actionId_:p_++,parentActionId_:jl};return jl=d.actionId_,d}function v_(e){jl!==e.actionId_&&J(30),jl=e.parentActionId_,e.error_!==void 0&&(P.suppressReactionErrors=!0),Zo(e.prevAllowStateChanges_),ho(e.prevAllowStateReads_),rt(),e.runAsAction_&&Bn(e.prevDerivation_),P.suppressReactionErrors=!1}function y_(e,t){var n=Xo(e);try{return t()}finally{Zo(n)}}function Xo(e){var t=P.allowStateChanges;return P.allowStateChanges=e,t}function Zo(e){P.allowStateChanges=e}var Cv;Cv=Symbol.toPrimitive;var ii=function(e){fv(t,e);function t(r,i,o,a,l){var s;return o===void 0&&(o="ObservableValue"),l===void 0&&(l=Rl.default),s=e.call(this,o)||this,s.enhancer=void 0,s.name_=void 0,s.equals=void 0,s.hasUnreportedChange_=!1,s.interceptors_=void 0,s.changeListeners_=void 0,s.value_=void 0,s.dehancer=void 0,s.enhancer=i,s.name_=o,s.equals=l,s.value_=i(r,void 0,o),s}var n=t.prototype;return n.dehanceValue=function(i){return this.dehancer!==void 0?this.dehancer(i):i},n.set=function(i){this.value_,i=this.prepareNewValue_(i),i!==P.UNCHANGED&&this.setNewValue_(i)},n.prepareNewValue_=function(i){if(xt(this)){var o=At(this,{object:this,type:Jt,newValue:i});if(!o)return P.UNCHANGED;i=o.newValue}return i=this.enhancer(i,this.value_,this.name_),this.equals(this.value_,i)?P.UNCHANGED:i},n.setNewValue_=function(i){var o=this.value_;this.value_=i,this.reportChanged(),Mt(this)&&Ft(this,{type:Jt,object:this,newValue:i,oldValue:o})},n.get=function(){return this.reportObserved(),this.dehanceValue(this.value_)},n.intercept_=function(i){return Jo(this,i)},n.observe_=function(i,o){return o&&i({observableKind:"value",debugObjectName:this.name_,object:this,type:Jt,newValue:this.value_,oldValue:void 0}),ea(this,i)},n.raw=function(){return this.value_},n.toJSON=function(){return this.get()},n.toString=function(){return this.name_+"["+this.value_+"]"},n.valueOf=function(){return dv(this.get())},n[Cv]=function(){return this.valueOf()},t}(Yo),Ev;Ev=Symbol.toPrimitive;var Lo=function(){function e(n){this.dependenciesState_=X.NOT_TRACKING_,this.observing_=[],this.newObserving_=null,this.isBeingObserved_=!1,this.isPendingUnobservation_=!1,this.observers_=new Set,this.diffValue_=0,this.runId_=0,this.lastAccessedBy_=0,this.lowestObserverState_=X.UP_TO_DATE_,this.unboundDepsCount_=0,this.value_=new Pl(null),this.name_=void 0,this.triggeredBy_=void 0,this.isComputing_=!1,this.isRunningSetter_=!1,this.derivation=void 0,this.setter_=void 0,this.isTracing_=Ol.NONE,this.scope_=void 0,this.equals_=void 0,this.requiresReaction_=void 0,this.keepAlive_=void 0,this.onBOL=void 0,this.onBUOL=void 0,n.get||J(31),this.derivation=n.get,this.name_=n.name||"ComputedValue",n.set&&(this.setter_=wi("ComputedValue-setter",n.set)),this.equals_=n.equals||(n.compareStructural||n.struct?Rl.structural:Rl.default),this.scope_=n.context,this.requiresReaction_=n.requiresReaction,this.keepAlive_=!!n.keepAlive}var t=e.prototype;return t.onBecomeStale_=function(){C_(this)},t.onBO=function(){this.onBOL&&this.onBOL.forEach(function(r){return r()})},t.onBUO=function(){this.onBUOL&&this.onBUOL.forEach(function(r){return r()})},t.get=function(){if(this.isComputing_&&J(32,this.name_,this.derivation),P.inBatch===0&&this.observers_.size===0&&!this.keepAlive_)Sc(this)&&(this.warnAboutUntrackedRead_(),nt(),this.value_=this.computeValue_(!1),rt());else if(Nv(this),Sc(this)){var r=P.trackingContext;this.keepAlive_&&!r&&(P.trackingContext=this),this.trackAndCompute()&&S_(this),P.trackingContext=r}var i=this.value_;if(Ha(i))throw i.cause;return i},t.set=function(r){if(this.setter_){this.isRunningSetter_&&J(33,this.name_),this.isRunningSetter_=!0;try{this.setter_.call(this.scope_,r)}finally{this.isRunningSetter_=!1}}else J(34,this.name_)},t.trackAndCompute=function(){var r=this.value_,i=this.dependenciesState_===X.NOT_TRACKING_,o=this.computeValue_(!0),a=i||Ha(r)||Ha(o)||!this.equals_(r,o);return a&&(this.value_=o),a},t.computeValue_=function(r){this.isComputing_=!0;var i=Xo(!1),o;if(r)o=kv(this,this.derivation,this.scope_);else if(P.disableErrorBoundaries===!0)o=this.derivation.call(this.scope_);else try{o=this.derivation.call(this.scope_)}catch(a){o=new Pl(a)}return Zo(i),this.isComputing_=!1,o},t.suspend_=function(){this.keepAlive_||(Cc(this),this.value_=void 0)},t.observe_=function(r,i){var o=this,a=!0,l=void 0;return D_(function(){var s=o.get();if(!a||i){var u=Ni();r({observableKind:"computed",debugObjectName:o.name_,type:Jt,object:o,newValue:s,oldValue:l}),Bn(u)}a=!1,l=s})},t.warnAboutUntrackedRead_=function(){},t.toString=function(){return this.name_+"["+this.derivation.toString()+"]"},t.valueOf=function(){return dv(this.get())},t[Ev]=function(){return this.valueOf()},e}(),fs=Cr("ComputedValue",Lo),X;(function(e){e[e.NOT_TRACKING_=-1]="NOT_TRACKING_",e[e.UP_TO_DATE_=0]="UP_TO_DATE_",e[e.POSSIBLY_STALE_=1]="POSSIBLY_STALE_",e[e.STALE_=2]="STALE_"})(X||(X={}));var Ol;(function(e){e[e.NONE=0]="NONE",e[e.LOG=1]="LOG",e[e.BREAK=2]="BREAK"})(Ol||(Ol={}));var Pl=function(t){this.cause=void 0,this.cause=t};function Ha(e){return e instanceof Pl}function Sc(e){switch(e.dependenciesState_){case X.UP_TO_DATE_:return!1;case X.NOT_TRACKING_:case X.STALE_:return!0;case X.POSSIBLY_STALE_:{for(var t=Fd(!0),n=Ni(),r=e.observing_,i=r.length,o=0;o<i;o++){var a=r[o];if(fs(a)){if(P.disableErrorBoundaries)a.get();else try{a.get()}catch{return Bn(n),ho(t),!0}if(e.dependenciesState_===X.STALE_)return Bn(n),ho(t),!0}}return Rv(e),Bn(n),ho(t),!1}}}function kv(e,t,n){var r=Fd(!0);Rv(e),e.newObserving_=new Array(e.observing_.length+100),e.unboundDepsCount_=0,e.runId_=++P.runId;var i=P.trackingDerivation;P.trackingDerivation=e,P.inBatch++;var o;if(P.disableErrorBoundaries===!0)o=t.call(n);else try{o=t.call(n)}catch(a){o=new Pl(a)}return P.inBatch--,P.trackingDerivation=i,x_(e),ho(r),o}function x_(e){for(var t=e.observing_,n=e.observing_=e.newObserving_,r=X.UP_TO_DATE_,i=0,o=e.unboundDepsCount_,a=0;a<o;a++){var l=n[a];l.diffValue_===0&&(l.diffValue_=1,i!==a&&(n[i]=l),i++),l.dependenciesState_>r&&(r=l.dependenciesState_)}for(n.length=i,e.newObserving_=null,o=t.length;o--;){var s=t[o];s.diffValue_===0&&Ov(s,e),s.diffValue_=0}for(;i--;){var u=n[i];u.diffValue_===1&&(u.diffValue_=0,__(u,e))}r!==X.UP_TO_DATE_&&(e.dependenciesState_=r,e.onBecomeStale_())}function Cc(e){var t=e.observing_;e.observing_=[];for(var n=t.length;n--;)Ov(t[n],e);e.dependenciesState_=X.NOT_TRACKING_}function bv(e){var t=Ni();try{return e()}finally{Bn(t)}}function Ni(){var e=P.trackingDerivation;return P.trackingDerivation=null,e}function Bn(e){P.trackingDerivation=e}function Fd(e){var t=P.allowStateReads;return P.allowStateReads=e,t}function ho(e){P.allowStateReads=e}function Rv(e){if(e.dependenciesState_!==X.UP_TO_DATE_){e.dependenciesState_=X.UP_TO_DATE_;for(var t=e.observing_,n=t.length;n--;)t[n].lowestObserverState_=X.UP_TO_DATE_}}var Ga=function(){this.version=6,this.UNCHANGED={},this.trackingDerivation=null,this.trackingContext=null,this.runId=0,this.mobxGuid=0,this.inBatch=0,this.pendingUnobservations=[],this.pendingReactions=[],this.isRunningReactions=!1,this.allowStateChanges=!1,this.allowStateReads=!0,this.enforceActions=!0,this.spyListeners=[],this.globalReactionErrorHandlers=[],this.computedRequiresReaction=!1,this.reactionRequiresObservable=!1,this.observableRequiresReaction=!1,this.disableErrorBoundaries=!1,this.suppressReactionErrors=!1,this.useProxies=!0,this.verifyProxies=!1,this.safeDescriptors=!0,this.stateVersion=Number.MIN_SAFE_INTEGER},Ya=!0,jv=!1,P=function(){var e=Dd();return e.__mobxInstanceCount>0&&!e.__mobxGlobals&&(Ya=!1),e.__mobxGlobals&&e.__mobxGlobals.version!==new Ga().version&&(Ya=!1),Ya?e.__mobxGlobals?(e.__mobxInstanceCount+=1,e.__mobxGlobals.UNCHANGED||(e.__mobxGlobals.UNCHANGED={}),e.__mobxGlobals):(e.__mobxInstanceCount=1,e.__mobxGlobals=new Ga):(setTimeout(function(){jv||J(35)},1),new Ga)}();function A_(){if((P.pendingReactions.length||P.inBatch||P.isRunningReactions)&&J(36),jv=!0,Ya){var e=Dd();--e.__mobxInstanceCount===0&&(e.__mobxGlobals=void 0),P=new Ga}}function w_(){return P}function __(e,t){e.observers_.add(t),e.lowestObserverState_>t.dependenciesState_&&(e.lowestObserverState_=t.dependenciesState_)}function Ov(e,t){e.observers_.delete(t),e.observers_.size===0&&Pv(e)}function Pv(e){e.isPendingUnobservation_===!1&&(e.isPendingUnobservation_=!0,P.pendingUnobservations.push(e))}function nt(){P.inBatch++}function rt(){if(--P.inBatch===0){Dv();for(var e=P.pendingUnobservations,t=0;t<e.length;t++){var n=e[t];n.isPendingUnobservation_=!1,n.observers_.size===0&&(n.isBeingObserved_&&(n.isBeingObserved_=!1,n.onBUO()),n instanceof Lo&&n.suspend_())}P.pendingUnobservations=[]}}function Nv(e){var t=P.trackingDerivation;return t!==null?(t.runId_!==e.lastAccessedBy_&&(e.lastAccessedBy_=t.runId_,t.newObserving_[t.unboundDepsCount_++]=e,!e.isBeingObserved_&&P.trackingContext&&(e.isBeingObserved_=!0,e.onBO())),e.isBeingObserved_):(e.observers_.size===0&&P.inBatch>0&&Pv(e),!1)}function Tv(e){e.lowestObserverState_!==X.STALE_&&(e.lowestObserverState_=X.STALE_,e.observers_.forEach(function(t){t.dependenciesState_===X.UP_TO_DATE_&&t.onBecomeStale_(),t.dependenciesState_=X.STALE_}))}function S_(e){e.lowestObserverState_!==X.STALE_&&(e.lowestObserverState_=X.STALE_,e.observers_.forEach(function(t){t.dependenciesState_===X.POSSIBLY_STALE_?t.dependenciesState_=X.STALE_:t.dependenciesState_===X.UP_TO_DATE_&&(e.lowestObserverState_=X.UP_TO_DATE_)}))}function C_(e){e.lowestObserverState_===X.UP_TO_DATE_&&(e.lowestObserverState_=X.POSSIBLY_STALE_,e.observers_.forEach(function(t){t.dependenciesState_===X.UP_TO_DATE_&&(t.dependenciesState_=X.POSSIBLY_STALE_,t.onBecomeStale_())}))}var Nl=function(){function e(n,r,i,o){n===void 0&&(n="Reaction"),this.name_=void 0,this.onInvalidate_=void 0,this.errorHandler_=void 0,this.requiresObservable_=void 0,this.observing_=[],this.newObserving_=[],this.dependenciesState_=X.NOT_TRACKING_,this.diffValue_=0,this.runId_=0,this.unboundDepsCount_=0,this.isDisposed_=!1,this.isScheduled_=!1,this.isTrackPending_=!1,this.isRunning_=!1,this.isTracing_=Ol.NONE,this.name_=n,this.onInvalidate_=r,this.errorHandler_=i,this.requiresObservable_=o}var t=e.prototype;return t.onBecomeStale_=function(){this.schedule_()},t.schedule_=function(){this.isScheduled_||(this.isScheduled_=!0,P.pendingReactions.push(this),Dv())},t.isScheduled=function(){return this.isScheduled_},t.runReaction_=function(){if(!this.isDisposed_){nt(),this.isScheduled_=!1;var r=P.trackingContext;if(P.trackingContext=this,Sc(this)){this.isTrackPending_=!0;try{this.onInvalidate_()}catch(i){this.reportExceptionInDerivation_(i)}}P.trackingContext=r,rt()}},t.track=function(r){if(!this.isDisposed_){nt(),this.isRunning_=!0;var i=P.trackingContext;P.trackingContext=this;var o=kv(this,r,void 0);P.trackingContext=i,this.isRunning_=!1,this.isTrackPending_=!1,this.isDisposed_&&Cc(this),Ha(o)&&this.reportExceptionInDerivation_(o.cause),rt()}},t.reportExceptionInDerivation_=function(r){var i=this;if(this.errorHandler_){this.errorHandler_(r,this);return}if(P.disableErrorBoundaries)throw r;var o="[mobx] uncaught error in '"+this+"'";P.suppressReactionErrors||console.error(o,r),P.globalReactionErrorHandlers.forEach(function(a){return a(r,i)})},t.dispose=function(){this.isDisposed_||(this.isDisposed_=!0,this.isRunning_||(nt(),Cc(this),rt()))},t.getDisposer_=function(r){var i=this,o=function a(){i.dispose(),r==null||r.removeEventListener==null||r.removeEventListener("abort",a)};return r==null||r.addEventListener==null||r.addEventListener("abort",o),o[U]=this,o},t.toString=function(){return"Reaction["+this.name_+"]"},t.trace=function(r){},e}(),E_=100,Ec=function(t){return t()};function Dv(){P.inBatch>0||P.isRunningReactions||Ec(k_)}function k_(){P.isRunningReactions=!0;for(var e=P.pendingReactions,t=0;e.length>0;){++t===E_&&(console.error("[mobx] cycle in reaction: "+e[0]),e.splice(0));for(var n=e.splice(0),r=0,i=n.length;r<i;r++)n[r].runReaction_()}P.isRunningReactions=!1}var Tl=Cr("Reaction",Nl);function b_(e){var t=Ec;Ec=function(r){return e(function(){return t(r)})}}function mo(){return!1}function R_(e){return console.warn("[mobx.spy] Is a no-op in production builds"),function(){}}var Lv="action",j_="action.bound",zv="autoAction",O_="autoAction.bound",P_="<unnamed action>",Mv=qo(Lv),N_=qo(j_,{bound:!0}),Fv=qo(zv,{autoAction:!0}),T_=qo(O_,{autoAction:!0,bound:!0});function Iv(e){var t=function(r,i){if(Kt(r))return wi(r.name||P_,r,e);if(Kt(i))return wi(r,i,e);if(yr(i))return Go(r,i,e?Fv:Mv);if(yr(r))return Zt(qo(e?zv:Lv,{name:r,autoAction:e}))};return t}var qr=Iv(!1);Object.assign(qr,Mv);var zo=Iv(!0);Object.assign(zo,Fv);qr.bound=Zt(N_);zo.bound=Zt(T_);function Id(e){return Kt(e)&&e.isMobxAction===!0}function D_(e,t){var n,r,i,o,a;t===void 0&&(t=ov);var l=(n=(r=t)==null?void 0:r.name)!=null?n:"Autorun",s=!t.scheduler&&!t.delay,u;if(s)u=new Nl(l,function(){this.track(g)},t.onError,t.requiresObservable);else{var d=z_(t),h=!1;u=new Nl(l,function(){h||(h=!0,d(function(){h=!1,u.isDisposed_||u.track(g)}))},t.onError,t.requiresObservable)}function g(){e(u)}return(i=t)!=null&&(o=i.signal)!=null&&o.aborted||u.schedule_(),u.getDisposer_((a=t)==null?void 0:a.signal)}var L_=function(t){return t()};function z_(e){return e.scheduler?e.scheduler:e.delay?function(t){return setTimeout(t,e.delay)}:L_}var M_="onBO",F_="onBUO";function I_(e,t,n){return $v(M_,e,t,n)}function Kv(e,t,n){return $v(F_,e,t,n)}function $v(e,t,n,r){var i=typeof r=="function"?_i(t,n):_i(t),o=Kt(r)?r:n,a=e+"L";return i[a]?i[a].add(o):i[a]=new Set([o]),function(){var l=i[a];l&&(l.delete(o),l.size===0&&delete i[a])}}var K_="never",Ra="always",$_="observed";function B_(e){e.isolateGlobalState===!0&&A_();var t=e.useProxies,n=e.enforceActions;if(t!==void 0&&(P.useProxies=t===Ra?!0:t===K_?!1:typeof Proxy<"u"),t==="ifavailable"&&(P.verifyProxies=!0),n!==void 0){var r=n===Ra?Ra:n===$_;P.enforceActions=r,P.allowStateChanges=!(r===!0||r===Ra)}["computedRequiresReaction","reactionRequiresObservable","observableRequiresReaction","disableErrorBoundaries","safeDescriptors"].forEach(function(i){i in e&&(P[i]=!!e[i])}),P.allowStateReads=!P.observableRequiresReaction,e.reactionScheduler&&b_(e.reactionScheduler)}function Bv(e,t,n,r){var i=kw(t),o=na(e,r)[U];nt();try{yi(i).forEach(function(a){o.extend_(a,i[a],n&&a in n?n[a]:!0)})}finally{rt()}return e}function U_(e,t){return Uv(_i(e,t))}function Uv(e){var t={name:e.name_};return e.observing_&&e.observing_.length>0&&(t.dependencies=V_(e.observing_).map(Uv)),t}function V_(e){return Array.from(new Set(e))}var W_=0;function Vv(){this.message="FLOW_CANCELLED"}Vv.prototype=Object.create(Error.prototype);var Yp=mv("flow"),Q_=mv("flow.bound",{bound:!0}),Mo=Object.assign(function(t,n){if(yr(n))return Go(t,n,Yp);var r=t,i=r.name||"<unnamed flow>",o=function(){var l=this,s=arguments,u=++W_,d=qr(i+" - runid: "+u+" - init",r).apply(l,s),h,g=void 0,y=new Promise(function(A,x){var R=0;h=x;function m(p){g=void 0;var _;try{_=qr(i+" - runid: "+u+" - yield "+R++,d.next).call(d,p)}catch(b){return x(b)}v(_)}function f(p){g=void 0;var _;try{_=qr(i+" - runid: "+u+" - yield "+R++,d.throw).call(d,p)}catch(b){return x(b)}v(_)}function v(p){if(Kt(p==null?void 0:p.then)){p.then(v,x);return}return p.done?A(p.value):(g=Promise.resolve(p.value),g.then(m,f))}m(void 0)});return y.cancel=qr(i+" - runid: "+u+" - cancel",function(){try{g&&qp(g);var A=d.return(void 0),x=Promise.resolve(A.value);x.then(Gr,Gr),qp(x),h(new Vv)}catch(R){h(R)}}),y};return o.isMobXFlow=!0,o},Yp);Mo.bound=Zt(Q_);function qp(e){Kt(e.cancel)&&e.cancel()}function Dl(e){return(e==null?void 0:e.isMobXFlow)===!0}function H_(e,t){return e?t!==void 0?Fo(e)?e[U].values_.has(t):!1:Fo(e)||!!e[U]||zd(e)||Tl(e)||fs(e):!1}function Wv(e){return H_(e)}function sn(e,t){t===void 0&&(t=void 0),nt();try{return e.apply(t)}finally{rt()}}function Or(e){return e[U]}var G_={has:function(t,n){return Or(t).has_(n)},get:function(t,n){return Or(t).get_(n)},set:function(t,n,r){var i;return yr(n)?(i=Or(t).set_(n,r,!0))!=null?i:!0:!1},deleteProperty:function(t,n){var r;return yr(n)?(r=Or(t).delete_(n,!0))!=null?r:!0:!1},defineProperty:function(t,n,r){var i;return(i=Or(t).defineProperty_(n,r))!=null?i:!0},ownKeys:function(t){return Or(t).ownKeys_()},preventExtensions:function(t){J(13)}};function Y_(e,t){var n,r;return av(),e=na(e,t),(r=(n=e[U]).proxy_)!=null?r:n.proxy_=new Proxy(e,G_)}function xt(e){return e.interceptors_!==void 0&&e.interceptors_.length>0}function Jo(e,t){var n=e.interceptors_||(e.interceptors_=[]);return n.push(t),lv(function(){var r=n.indexOf(t);r!==-1&&n.splice(r,1)})}function At(e,t){var n=Ni();try{for(var r=[].concat(e.interceptors_||[]),i=0,o=r.length;i<o&&(t=r[i](t),t&&!t.type&&J(14),!!t);i++);return t}finally{Bn(n)}}function Mt(e){return e.changeListeners_!==void 0&&e.changeListeners_.length>0}function ea(e,t){var n=e.changeListeners_||(e.changeListeners_=[]);return n.push(t),lv(function(){var r=n.indexOf(t);r!==-1&&n.splice(r,1)})}function Ft(e,t){var n=Ni(),r=e.changeListeners_;if(r){r=r.slice();for(var i=0,o=r.length;i<o;i++)r[i](t);Bn(n)}}function q_(e,t,n){var r=na(e,n)[U];nt();try{var i;(i=t)!=null||(t=Ow(e)),yi(t).forEach(function(o){return r.make_(o,t[o])})}finally{rt()}return e}var iu=Symbol("mobx-keys");function ta(e,t,n){if(yn(e))return Bv(e,e,t,n);var r=na(e,n)[U];if(!e[iu]){var i=Object.getPrototypeOf(e),o=new Set([].concat(yi(e),yi(i)));o.delete("constructor"),o.delete(U),Qo(i,iu,o)}nt();try{e[iu].forEach(function(a){return r.make_(a,t&&a in t?t[a]:!0)})}finally{rt()}return e}var Xp="splice",Jt="update",X_=1e4,Z_={get:function(t,n){var r=t[U];return n===U?r:n==="length"?r.getArrayLength_():typeof n=="string"&&!isNaN(n)?r.get_(parseInt(n)):pn(Ll,n)?Ll[n]:t[n]},set:function(t,n,r){var i=t[U];return n==="length"&&i.setArrayLength_(r),typeof n=="symbol"||isNaN(n)?t[n]=r:i.set_(parseInt(n),r),!0},preventExtensions:function(){J(15)}},Kd=function(){function e(n,r,i,o){n===void 0&&(n="ObservableArray"),this.owned_=void 0,this.legacyMode_=void 0,this.atom_=void 0,this.values_=[],this.interceptors_=void 0,this.changeListeners_=void 0,this.enhancer_=void 0,this.dehancer=void 0,this.proxy_=void 0,this.lastKnownLength_=0,this.owned_=i,this.legacyMode_=o,this.atom_=new Yo(n),this.enhancer_=function(a,l){return r(a,l,"ObservableArray[..]")}}var t=e.prototype;return t.dehanceValue_=function(r){return this.dehancer!==void 0?this.dehancer(r):r},t.dehanceValues_=function(r){return this.dehancer!==void 0&&r.length>0?r.map(this.dehancer):r},t.intercept_=function(r){return Jo(this,r)},t.observe_=function(r,i){return i===void 0&&(i=!1),i&&r({observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:"splice",index:0,added:this.values_.slice(),addedCount:this.values_.length,removed:[],removedCount:0}),ea(this,r)},t.getArrayLength_=function(){return this.atom_.reportObserved(),this.values_.length},t.setArrayLength_=function(r){(typeof r!="number"||isNaN(r)||r<0)&&J("Out of range: "+r);var i=this.values_.length;if(r!==i)if(r>i){for(var o=new Array(r-i),a=0;a<r-i;a++)o[a]=void 0;this.spliceWithArray_(i,0,o)}else this.spliceWithArray_(r,i-r)},t.updateArrayLength_=function(r,i){r!==this.lastKnownLength_&&J(16),this.lastKnownLength_+=i,this.legacyMode_&&i>0&&ny(r+i+1)},t.spliceWithArray_=function(r,i,o){var a=this;this.atom_;var l=this.values_.length;if(r===void 0?r=0:r>l?r=l:r<0&&(r=Math.max(0,l+r)),arguments.length===1?i=l-r:i==null?i=0:i=Math.max(0,Math.min(i,l-r)),o===void 0&&(o=wc),xt(this)){var s=At(this,{object:this.proxy_,type:Xp,index:r,removedCount:i,added:o});if(!s)return wc;i=s.removedCount,o=s.added}if(o=o.length===0?o:o.map(function(h){return a.enhancer_(h,void 0)}),this.legacyMode_){var u=o.length-i;this.updateArrayLength_(l,u)}var d=this.spliceItemsIntoValues_(r,i,o);return(i!==0||o.length!==0)&&this.notifyArraySplice_(r,o,d),this.dehanceValues_(d)},t.spliceItemsIntoValues_=function(r,i,o){if(o.length<X_){var a;return(a=this.values_).splice.apply(a,[r,i].concat(o))}else{var l=this.values_.slice(r,r+i),s=this.values_.slice(r+i);this.values_.length+=o.length-i;for(var u=0;u<o.length;u++)this.values_[r+u]=o[u];for(var d=0;d<s.length;d++)this.values_[r+o.length+d]=s[d];return l}},t.notifyArrayChildUpdate_=function(r,i,o){var a=!this.owned_&&mo(),l=Mt(this),s=l||a?{observableKind:"array",object:this.proxy_,type:Jt,debugObjectName:this.atom_.name_,index:r,newValue:i,oldValue:o}:null;this.atom_.reportChanged(),l&&Ft(this,s)},t.notifyArraySplice_=function(r,i,o){var a=!this.owned_&&mo(),l=Mt(this),s=l||a?{observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:Xp,index:r,removed:o,added:i,removedCount:o.length,addedCount:i.length}:null;this.atom_.reportChanged(),l&&Ft(this,s)},t.get_=function(r){if(this.legacyMode_&&r>=this.values_.length){console.warn("[mobx] Out of bounds read: "+r);return}return this.atom_.reportObserved(),this.dehanceValue_(this.values_[r])},t.set_=function(r,i){var o=this.values_;if(this.legacyMode_&&r>o.length&&J(17,r,o.length),r<o.length){this.atom_;var a=o[r];if(xt(this)){var l=At(this,{type:Jt,object:this.proxy_,index:r,newValue:i});if(!l)return;i=l.newValue}i=this.enhancer_(i,a);var s=i!==a;s&&(o[r]=i,this.notifyArrayChildUpdate_(r,i,a))}else{for(var u=new Array(r+1-o.length),d=0;d<u.length-1;d++)u[d]=void 0;u[u.length-1]=i,this.spliceWithArray_(o.length,0,u)}},e}();function J_(e,t,n,r){n===void 0&&(n="ObservableArray"),r===void 0&&(r=!1),av();var i=new Kd(n,t,r,!1);uv(i.values_,U,i);var o=new Proxy(i.values_,Z_);if(i.proxy_=o,e&&e.length){var a=Xo(!0);i.spliceWithArray_(0,0,e),Zo(a)}return o}var Ll={clear:function(){return this.splice(0)},replace:function(t){var n=this[U];return n.spliceWithArray_(0,n.values_.length,t)},toJSON:function(){return this.slice()},splice:function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];var a=this[U];switch(arguments.length){case 0:return[];case 1:return a.spliceWithArray_(t);case 2:return a.spliceWithArray_(t,n)}return a.spliceWithArray_(t,n,i)},spliceWithArray:function(t,n,r){return this[U].spliceWithArray_(t,n,r)},push:function(){for(var t=this[U],n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.spliceWithArray_(t.values_.length,0,r),t.values_.length},pop:function(){return this.splice(Math.max(this[U].values_.length-1,0),1)[0]},shift:function(){return this.splice(0,1)[0]},unshift:function(){for(var t=this[U],n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.spliceWithArray_(0,0,r),t.values_.length},reverse:function(){return P.trackingDerivation&&J(37,"reverse"),this.replace(this.slice().reverse()),this},sort:function(){P.trackingDerivation&&J(37,"sort");var t=this.slice();return t.sort.apply(t,arguments),this.replace(t),this},remove:function(t){var n=this[U],r=n.dehanceValues_(n.values_).indexOf(t);return r>-1?(this.splice(r,1),!0):!1}};Oe("concat",wn);Oe("flat",wn);Oe("includes",wn);Oe("indexOf",wn);Oe("join",wn);Oe("lastIndexOf",wn);Oe("slice",wn);Oe("toString",wn);Oe("toLocaleString",wn);Oe("every",Gn);Oe("filter",Gn);Oe("find",Gn);Oe("findIndex",Gn);Oe("flatMap",Gn);Oe("forEach",Gn);Oe("map",Gn);Oe("some",Gn);Oe("reduce",Qv);Oe("reduceRight",Qv);function Oe(e,t){typeof Array.prototype[e]=="function"&&(Ll[e]=t(e))}function wn(e){return function(){var t=this[U];t.atom_.reportObserved();var n=t.dehanceValues_(t.values_);return n[e].apply(n,arguments)}}function Gn(e){return function(t,n){var r=this,i=this[U];i.atom_.reportObserved();var o=i.dehanceValues_(i.values_);return o[e](function(a,l){return t.call(n,a,l,r)})}}function Qv(e){return function(){var t=this,n=this[U];n.atom_.reportObserved();var r=n.dehanceValues_(n.values_),i=arguments[0];return arguments[0]=function(o,a,l){return i(o,a,l,t)},r[e].apply(r,arguments)}}var eS=Cr("ObservableArrayAdministration",Kd);function ps(e){return ss(e)&&eS(e[U])}var Hv,Gv,tS={},Tn="add",zl="delete";Hv=Symbol.iterator;Gv=Symbol.toStringTag;var Yv=function(){function e(n,r,i){var o=this;r===void 0&&(r=Ai),i===void 0&&(i="ObservableMap"),this.enhancer_=void 0,this.name_=void 0,this[U]=tS,this.data_=void 0,this.hasMap_=void 0,this.keysAtom_=void 0,this.interceptors_=void 0,this.changeListeners_=void 0,this.dehancer=void 0,this.enhancer_=r,this.name_=i,Kt(Map)||J(18),this.keysAtom_=pv("ObservableMap.keys()"),this.data_=new Map,this.hasMap_=new Map,y_(!0,function(){o.merge(n)})}var t=e.prototype;return t.has_=function(r){return this.data_.has(r)},t.has=function(r){var i=this;if(!P.trackingDerivation)return this.has_(r);var o=this.hasMap_.get(r);if(!o){var a=o=new ii(this.has_(r),us,"ObservableMap.key?",!1);this.hasMap_.set(r,a),Kv(a,function(){return i.hasMap_.delete(r)})}return o.get()},t.set=function(r,i){var o=this.has_(r);if(xt(this)){var a=At(this,{type:o?Jt:Tn,object:this,newValue:i,name:r});if(!a)return this;i=a.newValue}return o?this.updateValue_(r,i):this.addValue_(r,i),this},t.delete=function(r){var i=this;if(this.keysAtom_,xt(this)){var o=At(this,{type:zl,object:this,name:r});if(!o)return!1}if(this.has_(r)){var a=mo(),l=Mt(this),s=l||a?{observableKind:"map",debugObjectName:this.name_,type:zl,object:this,oldValue:this.data_.get(r).value_,name:r}:null;return sn(function(){var u;i.keysAtom_.reportChanged(),(u=i.hasMap_.get(r))==null||u.setNewValue_(!1);var d=i.data_.get(r);d.setNewValue_(void 0),i.data_.delete(r)}),l&&Ft(this,s),!0}return!1},t.updateValue_=function(r,i){var o=this.data_.get(r);if(i=o.prepareNewValue_(i),i!==P.UNCHANGED){var a=mo(),l=Mt(this),s=l||a?{observableKind:"map",debugObjectName:this.name_,type:Jt,object:this,oldValue:o.value_,name:r,newValue:i}:null;o.setNewValue_(i),l&&Ft(this,s)}},t.addValue_=function(r,i){var o=this;this.keysAtom_,sn(function(){var u,d=new ii(i,o.enhancer_,"ObservableMap.key",!1);o.data_.set(r,d),i=d.value_,(u=o.hasMap_.get(r))==null||u.setNewValue_(!0),o.keysAtom_.reportChanged()});var a=mo(),l=Mt(this),s=l||a?{observableKind:"map",debugObjectName:this.name_,type:Tn,object:this,name:r,newValue:i}:null;l&&Ft(this,s)},t.get=function(r){return this.has(r)?this.dehanceValue_(this.data_.get(r).get()):this.dehanceValue_(void 0)},t.dehanceValue_=function(r){return this.dehancer!==void 0?this.dehancer(r):r},t.keys=function(){return this.keysAtom_.reportObserved(),this.data_.keys()},t.values=function(){var r=this,i=this.keys();return Io({next:function(){var a=i.next(),l=a.done,s=a.value;return{done:l,value:l?void 0:r.get(s)}}})},t.entries=function(){var r=this,i=this.keys();return Io({next:function(){var a=i.next(),l=a.done,s=a.value;return{done:l,value:l?void 0:[s,r.get(s)]}}})},t[Hv]=function(){return this.entries()},t.forEach=function(r,i){for(var o=Yr(this),a;!(a=o()).done;){var l=a.value,s=l[0],u=l[1];r.call(i,u,s,this)}},t.merge=function(r){var i=this;return Er(r)&&(r=new Map(r)),sn(function(){yn(r)?Ew(r).forEach(function(o){return i.set(o,r[o])}):Array.isArray(r)?r.forEach(function(o){var a=o[0],l=o[1];return i.set(a,l)}):Pi(r)?(r.constructor!==Map&&J(19,r),r.forEach(function(o,a){return i.set(a,o)})):r!=null&&J(20,r)}),this},t.clear=function(){var r=this;sn(function(){bv(function(){for(var i=Yr(r.keys()),o;!(o=i()).done;){var a=o.value;r.delete(a)}})})},t.replace=function(r){var i=this;return sn(function(){for(var o=nS(r),a=new Map,l=!1,s=Yr(i.data_.keys()),u;!(u=s()).done;){var d=u.value;if(!o.has(d)){var h=i.delete(d);if(h)l=!0;else{var g=i.data_.get(d);a.set(d,g)}}}for(var y=Yr(o.entries()),A;!(A=y()).done;){var x=A.value,R=x[0],m=x[1],f=i.data_.has(R);if(i.set(R,m),i.data_.has(R)){var v=i.data_.get(R);a.set(R,v),f||(l=!0)}}if(!l)if(i.data_.size!==a.size)i.keysAtom_.reportChanged();else for(var p=i.data_.keys(),_=a.keys(),b=p.next(),k=_.next();!b.done;){if(b.value!==k.value){i.keysAtom_.reportChanged();break}b=p.next(),k=_.next()}i.data_=a}),this},t.toString=function(){return"[object ObservableMap]"},t.toJSON=function(){return Array.from(this)},t.observe_=function(r,i){return ea(this,r)},t.intercept_=function(r){return Jo(this,r)},Ld(e,[{key:"size",get:function(){return this.keysAtom_.reportObserved(),this.data_.size}},{key:Gv,get:function(){return"Map"}}]),e}(),Er=Cr("ObservableMap",Yv);function nS(e){if(Pi(e)||Er(e))return e;if(Array.isArray(e))return new Map(e);if(yn(e)){var t=new Map;for(var n in e)t.set(n,e[n]);return t}else return J(21,e)}var qv,Xv,rS={};qv=Symbol.iterator;Xv=Symbol.toStringTag;var Zv=function(){function e(n,r,i){r===void 0&&(r=Ai),i===void 0&&(i="ObservableSet"),this.name_=void 0,this[U]=rS,this.data_=new Set,this.atom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.dehancer=void 0,this.enhancer_=void 0,this.name_=i,Kt(Set)||J(22),this.atom_=pv(this.name_),this.enhancer_=function(o,a){return r(o,a,i)},n&&this.replace(n)}var t=e.prototype;return t.dehanceValue_=function(r){return this.dehancer!==void 0?this.dehancer(r):r},t.clear=function(){var r=this;sn(function(){bv(function(){for(var i=Yr(r.data_.values()),o;!(o=i()).done;){var a=o.value;r.delete(a)}})})},t.forEach=function(r,i){for(var o=Yr(this),a;!(a=o()).done;){var l=a.value;r.call(i,l,l,this)}},t.add=function(r){var i=this;if(this.atom_,xt(this)){var o=At(this,{type:Tn,object:this,newValue:r});if(!o)return this}if(!this.has(r)){sn(function(){i.data_.add(i.enhancer_(r,void 0)),i.atom_.reportChanged()});var a=!1,l=Mt(this),s=l||a?{observableKind:"set",debugObjectName:this.name_,type:Tn,object:this,newValue:r}:null;l&&Ft(this,s)}return this},t.delete=function(r){var i=this;if(xt(this)){var o=At(this,{type:zl,object:this,oldValue:r});if(!o)return!1}if(this.has(r)){var a=!1,l=Mt(this),s=l||a?{observableKind:"set",debugObjectName:this.name_,type:zl,object:this,oldValue:r}:null;return sn(function(){i.atom_.reportChanged(),i.data_.delete(r)}),l&&Ft(this,s),!0}return!1},t.has=function(r){return this.atom_.reportObserved(),this.data_.has(this.dehanceValue_(r))},t.entries=function(){var r=0,i=Array.from(this.keys()),o=Array.from(this.values());return Io({next:function(){var l=r;return r+=1,l<o.length?{value:[i[l],o[l]],done:!1}:{done:!0}}})},t.keys=function(){return this.values()},t.values=function(){this.atom_.reportObserved();var r=this,i=0,o=Array.from(this.data_.values());return Io({next:function(){return i<o.length?{value:r.dehanceValue_(o[i++]),done:!1}:{done:!0}}})},t.replace=function(r){var i=this;return Ti(r)&&(r=new Set(r)),sn(function(){Array.isArray(r)?(i.clear(),r.forEach(function(o){return i.add(o)})):Ho(r)?(i.clear(),r.forEach(function(o){return i.add(o)})):r!=null&&J("Cannot initialize set from "+r)}),this},t.observe_=function(r,i){return ea(this,r)},t.intercept_=function(r){return Jo(this,r)},t.toJSON=function(){return Array.from(this)},t.toString=function(){return"[object ObservableSet]"},t[qv]=function(){return this.values()},Ld(e,[{key:"size",get:function(){return this.atom_.reportObserved(),this.data_.size}},{key:Xv,get:function(){return"Set"}}]),e}(),Ti=Cr("ObservableSet",Zv),Zp=Object.create(null),Jp="remove",Jv=function(){function e(n,r,i,o){r===void 0&&(r=new Map),o===void 0&&(o=Zw),this.target_=void 0,this.values_=void 0,this.name_=void 0,this.defaultAnnotation_=void 0,this.keysAtom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.proxy_=void 0,this.isPlainObject_=void 0,this.appliedAnnotations_=void 0,this.pendingKeys_=void 0,this.target_=n,this.values_=r,this.name_=i,this.defaultAnnotation_=o,this.keysAtom_=new Yo("ObservableObject.keys"),this.isPlainObject_=yn(this.target_)}var t=e.prototype;return t.getObservablePropValue_=function(r){return this.values_.get(r).get()},t.setObservablePropValue_=function(r,i){var o=this.values_.get(r);if(o instanceof Lo)return o.set(i),!0;if(xt(this)){var a=At(this,{type:Jt,object:this.proxy_||this.target_,name:r,newValue:i});if(!a)return null;i=a.newValue}if(i=o.prepareNewValue_(i),i!==P.UNCHANGED){var l=Mt(this),s=!1,u=l||s?{type:Jt,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,oldValue:o.value_,name:r,newValue:i}:null;o.setNewValue_(i),l&&Ft(this,u)}return!0},t.get_=function(r){return P.trackingDerivation&&!pn(this.target_,r)&&this.has_(r),this.target_[r]},t.set_=function(r,i,o){return o===void 0&&(o=!1),pn(this.target_,r)?this.values_.has(r)?this.setObservablePropValue_(r,i):o?Reflect.set(this.target_,r,i):(this.target_[r]=i,!0):this.extend_(r,{value:i,enumerable:!0,writable:!0,configurable:!0},this.defaultAnnotation_,o)},t.has_=function(r){if(!P.trackingDerivation)return r in this.target_;this.pendingKeys_||(this.pendingKeys_=new Map);var i=this.pendingKeys_.get(r);return i||(i=new ii(r in this.target_,us,"ObservableObject.key?",!1),this.pendingKeys_.set(r,i)),i.get()},t.make_=function(r,i){if(i===!0&&(i=this.defaultAnnotation_),i!==!1){if(!(r in this.target_)){var o;if((o=this.target_[Gt])!=null&&o[r])return;J(1,i.annotationType_,this.name_+"."+r.toString())}for(var a=this.target_;a&&a!==ls;){var l=bl(a,r);if(l){var s=i.make_(this,r,l,a);if(s===0)return;if(s===1)break}a=Object.getPrototypeOf(a)}th(this,i,r)}},t.extend_=function(r,i,o,a){if(a===void 0&&(a=!1),o===!0&&(o=this.defaultAnnotation_),o===!1)return this.defineProperty_(r,i,a);var l=o.extend_(this,r,i,a);return l&&th(this,o,r),l},t.defineProperty_=function(r,i,o){o===void 0&&(o=!1);try{nt();var a=this.delete_(r);if(!a)return a;if(xt(this)){var l=At(this,{object:this.proxy_||this.target_,name:r,type:Tn,newValue:i.value});if(!l)return null;var s=l.newValue;i.value!==s&&(i=xi({},i,{value:s}))}if(o){if(!Reflect.defineProperty(this.target_,r,i))return!1}else Xt(this.target_,r,i);this.notifyPropertyAddition_(r,i.value)}finally{rt()}return!0},t.defineObservableProperty_=function(r,i,o,a){a===void 0&&(a=!1);try{nt();var l=this.delete_(r);if(!l)return l;if(xt(this)){var s=At(this,{object:this.proxy_||this.target_,name:r,type:Tn,newValue:i});if(!s)return null;i=s.newValue}var u=eh(r),d={configurable:P.safeDescriptors?this.isPlainObject_:!0,enumerable:!0,get:u.get,set:u.set};if(a){if(!Reflect.defineProperty(this.target_,r,d))return!1}else Xt(this.target_,r,d);var h=new ii(i,o,"ObservableObject.key",!1);this.values_.set(r,h),this.notifyPropertyAddition_(r,h.value_)}finally{rt()}return!0},t.defineComputedProperty_=function(r,i,o){o===void 0&&(o=!1);try{nt();var a=this.delete_(r);if(!a)return a;if(xt(this)){var l=At(this,{object:this.proxy_||this.target_,name:r,type:Tn,newValue:void 0});if(!l)return null}i.name||(i.name="ObservableObject.key"),i.context=this.proxy_||this.target_;var s=eh(r),u={configurable:P.safeDescriptors?this.isPlainObject_:!0,enumerable:!1,get:s.get,set:s.set};if(o){if(!Reflect.defineProperty(this.target_,r,u))return!1}else Xt(this.target_,r,u);this.values_.set(r,new Lo(i)),this.notifyPropertyAddition_(r,void 0)}finally{rt()}return!0},t.delete_=function(r,i){if(i===void 0&&(i=!1),!pn(this.target_,r))return!0;if(xt(this)){var o=At(this,{object:this.proxy_||this.target_,name:r,type:Jp});if(!o)return null}try{var a,l;nt();var s=Mt(this),u=!1,d=this.values_.get(r),h=void 0;if(!d&&(s||u)){var g;h=(g=bl(this.target_,r))==null?void 0:g.value}if(i){if(!Reflect.deleteProperty(this.target_,r))return!1}else delete this.target_[r];if(d&&(this.values_.delete(r),d instanceof ii&&(h=d.value_),Tv(d)),this.keysAtom_.reportChanged(),(a=this.pendingKeys_)==null||(l=a.get(r))==null||l.set(r in this.target_),s||u){var y={type:Jp,observableKind:"object",object:this.proxy_||this.target_,debugObjectName:this.name_,oldValue:h,name:r};s&&Ft(this,y)}}finally{rt()}return!0},t.observe_=function(r,i){return ea(this,r)},t.intercept_=function(r){return Jo(this,r)},t.notifyPropertyAddition_=function(r,i){var o,a,l=Mt(this),s=!1;if(l||s){var u=l||s?{type:Tn,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,name:r,newValue:i}:null;l&&Ft(this,u)}(o=this.pendingKeys_)==null||(a=o.get(r))==null||a.set(!0),this.keysAtom_.reportChanged()},t.ownKeys_=function(){return this.keysAtom_.reportObserved(),yi(this.target_)},t.keys_=function(){return this.keysAtom_.reportObserved(),Object.keys(this.target_)},e}();function na(e,t){var n;if(pn(e,U))return e;var r=(n=t==null?void 0:t.name)!=null?n:"ObservableObject",i=new Jv(e,new Map,String(r),s_(t));return Qo(e,U,i),e}var iS=Cr("ObservableObjectAdministration",Jv);function eh(e){return Zp[e]||(Zp[e]={get:function(){return this[U].getObservablePropValue_(e)},set:function(n){return this[U].setObservablePropValue_(e,n)}})}function Fo(e){return ss(e)?iS(e[U]):!1}function th(e,t,n){var r;(r=e.target_[Gt])==null||delete r[n]}var oS=ty(0),ou=0,ey=function(){};function aS(e,t){Object.setPrototypeOf?Object.setPrototypeOf(e.prototype,t):e.prototype.__proto__!==void 0?e.prototype.__proto__=t:e.prototype=t}aS(ey,Array.prototype);var $d=function(e,t,n){fv(r,e);function r(o,a,l,s){var u;l===void 0&&(l="ObservableArray"),s===void 0&&(s=!1),u=e.call(this)||this;var d=new Kd(l,a,s,!0);if(d.proxy_=ru(u),uv(ru(u),U,d),o&&o.length){var h=Xo(!0);u.spliceWithArray(0,0,o),Zo(h)}return Object.defineProperty(ru(u),"0",oS),u}var i=r.prototype;return i.concat=function(){this[U].atom_.reportObserved();for(var a=arguments.length,l=new Array(a),s=0;s<a;s++)l[s]=arguments[s];return Array.prototype.concat.apply(this.slice(),l.map(function(u){return ps(u)?u.slice():u}))},i[n]=function(){var o=this,a=0;return Io({next:function(){return a<o.length?{value:o[a++],done:!1}:{done:!0,value:void 0}}})},Ld(r,[{key:"length",get:function(){return this[U].getArrayLength_()},set:function(a){this[U].setArrayLength_(a)}},{key:t,get:function(){return"Array"}}]),r}(ey,Symbol.toStringTag,Symbol.iterator);Object.entries(Ll).forEach(function(e){var t=e[0],n=e[1];t!=="concat"&&Qo($d.prototype,t,n)});function ty(e){return{enumerable:!1,configurable:!0,get:function(){return this[U].get_(e)},set:function(n){this[U].set_(e,n)}}}function lS(e){Xt($d.prototype,""+e,ty(e))}function ny(e){if(e>ou){for(var t=ou;t<e+100;t++)lS(t);ou=e}}ny(1e3);function sS(e,t,n){return new $d(e,t,n)}function _i(e,t){if(typeof e=="object"&&e!==null){if(ps(e))return t!==void 0&&J(23),e[U].atom_;if(Ti(e))return e.atom_;if(Er(e)){if(t===void 0)return e.keysAtom_;var n=e.data_.get(t)||e.hasMap_.get(t);return n||J(25,t,kc(e)),n}if(Fo(e)){if(!t)return J(26);var r=e[U].values_.get(t);return r||J(27,t,kc(e)),r}if(zd(e)||fs(e)||Tl(e))return e}else if(Kt(e)&&Tl(e[U]))return e[U];J(28)}function ry(e,t){if(e||J(29),t!==void 0)return ry(_i(e,t));if(zd(e)||fs(e)||Tl(e)||Er(e)||Ti(e))return e;if(e[U])return e[U];J(24,e)}function kc(e,t){var n;if(t!==void 0)n=_i(e,t);else{if(Id(e))return e.name;Fo(e)||Er(e)||Ti(e)?n=ry(e):n=_i(e)}return n.name_}var nh=ls.toString;function Bd(e,t,n){return n===void 0&&(n=-1),bc(e,t,n)}function bc(e,t,n,r,i){if(e===t)return e!==0||1/e===1/t;if(e==null||t==null)return!1;if(e!==e)return t!==t;var o=typeof e;if(o!=="function"&&o!=="object"&&typeof t!="object")return!1;var a=nh.call(e);if(a!==nh.call(t))return!1;switch(a){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!=+e?+t!=+t:+e==0?1/+e===1/t:+e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object Symbol]":return typeof Symbol<"u"&&Symbol.valueOf.call(e)===Symbol.valueOf.call(t);case"[object Map]":case"[object Set]":n>=0&&n++;break}e=rh(e),t=rh(t);var l=a==="[object Array]";if(!l){if(typeof e!="object"||typeof t!="object")return!1;var s=e.constructor,u=t.constructor;if(s!==u&&!(Kt(s)&&s instanceof s&&Kt(u)&&u instanceof u)&&"constructor"in e&&"constructor"in t)return!1}if(n===0)return!1;n<0&&(n=-1),r=r||[],i=i||[];for(var d=r.length;d--;)if(r[d]===e)return i[d]===t;if(r.push(e),i.push(t),l){if(d=e.length,d!==t.length)return!1;for(;d--;)if(!bc(e[d],t[d],n-1,r,i))return!1}else{var h=Object.keys(e),g;if(d=h.length,Object.keys(t).length!==d)return!1;for(;d--;)if(g=h[d],!(pn(t,g)&&bc(e[g],t[g],n-1,r,i)))return!1}return r.pop(),i.pop(),!0}function rh(e){return ps(e)?e.slice():Pi(e)||Er(e)||Ho(e)||Ti(e)?Array.from(e.entries()):e}function Io(e){return e[Symbol.iterator]=uS,e}function uS(){return this}["Symbol","Map","Set"].forEach(function(e){var t=Dd();typeof t[e]>"u"&&J("MobX requires global '"+e+"' to be available or polyfilled")});typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__=="object"&&__MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({spy:R_,extras:{getDebugName:kc},$mobx:U});if(!E.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!q_)throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");function cS(e){e()}function dS(e){e||(e=cS),B_({reactionScheduler:e})}function fS(e){return U_(e)}var pS=1e4,hS=1e4,mS=function(){function e(t){var n=this;Object.defineProperty(this,"finalize",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"registrations",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"sweepTimeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sweep",{enumerable:!0,configurable:!0,writable:!0,value:function(r){r===void 0&&(r=pS),clearTimeout(n.sweepTimeout),n.sweepTimeout=void 0;var i=Date.now();n.registrations.forEach(function(o,a){i-o.registeredAt>=r&&(n.finalize(o.value),n.registrations.delete(a))}),n.registrations.size>0&&n.scheduleSweep()}}),Object.defineProperty(this,"finalizeAllImmediately",{enumerable:!0,configurable:!0,writable:!0,value:function(){n.sweep(0)}})}return Object.defineProperty(e.prototype,"register",{enumerable:!1,configurable:!0,writable:!0,value:function(t,n,r){this.registrations.set(r,{value:n,registeredAt:Date.now()}),this.scheduleSweep()}}),Object.defineProperty(e.prototype,"unregister",{enumerable:!1,configurable:!0,writable:!0,value:function(t){this.registrations.delete(t)}}),Object.defineProperty(e.prototype,"scheduleSweep",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.sweepTimeout===void 0&&(this.sweepTimeout=setTimeout(this.sweep,hS))}}),e}(),gS=typeof FinalizationRegistry<"u"?FinalizationRegistry:mS,Rc=new gS(function(e){var t;(t=e.reaction)===null||t===void 0||t.dispose(),e.reaction=null}),iy={exports:{}},oy={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Si=E;function vS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yS=typeof Object.is=="function"?Object.is:vS,xS=Si.useState,AS=Si.useEffect,wS=Si.useLayoutEffect,_S=Si.useDebugValue;function SS(e,t){var n=t(),r=xS({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return wS(function(){i.value=n,i.getSnapshot=t,au(i)&&o({inst:i})},[e,n,t]),AS(function(){return au(i)&&o({inst:i}),e(function(){au(i)&&o({inst:i})})},[e]),_S(n),n}function au(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yS(e,n)}catch{return!0}}function CS(e,t){return t()}var ES=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?CS:SS;oy.useSyncExternalStore=Si.useSyncExternalStore!==void 0?Si.useSyncExternalStore:ES;iy.exports=oy;var kS=iy.exports,bS=globalThis&&globalThis.__read||function(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,o=[],a;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(l){a={error:l}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return o},RS=function(){},ay=w_(),ly=typeof ay.stateVersion<"u";function ih(e){e.reaction=new Nl("observer".concat(e.name),function(){var t;ly||(e.stateVersion=Symbol()),(t=e.onStoreChange)===null||t===void 0||t.call(e)})}function jS(e,t){t===void 0&&(t="observed");var n=Tt.useRef(null),r=bS(Tt.useState(),2),i=r[1];if(!n.current){var o={reaction:null,onStoreChange:null,stateVersion:Symbol(),name:t,subscribe:function(u){return Rc.unregister(o),o.onStoreChange=u,o.reaction||(ih(o),i(Symbol())),function(){var d;o.onStoreChange=null,(d=o.reaction)===null||d===void 0||d.dispose(),o.reaction=null}},getSnapshot:function(){return ly?ay.stateVersion:o.stateVersion}};n.current=o}var a=n.current;a.reaction||(ih(a),Rc.register(n,a,a)),Tt.useDebugValue(a.reaction,fS),kS.useSyncExternalStore(a.subscribe,a.getSnapshot,RS);var l,s;if(a.reaction.track(function(){try{l=e()}catch(u){s=u}}),s)throw s;return l}var sy=typeof Symbol=="function"&&Symbol.for,oh=sy?Symbol.for("react.forward_ref"):typeof E.forwardRef=="function"&&E.forwardRef(function(e){return null}).$$typeof,ah=sy?Symbol.for("react.memo"):typeof E.memo=="function"&&E.memo(function(e){return null}).$$typeof;function pt(e,t){var n;if(ah&&e.$$typeof===ah)throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");var r=(n=t==null?void 0:t.forwardRef)!==null&&n!==void 0?n:!1,i=e,o=e.displayName||e.name;if(oh&&e.$$typeof===oh&&(r=!0,i=e.render,typeof i!="function"))throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var a=function(l,s){return jS(function(){return i(l,s)},o)};return a.displayName=e.displayName,Object.defineProperty(a,"name",{value:e.name,writable:!0,configurable:!0}),e.contextTypes&&(a.contextTypes=e.contextTypes),r&&(a=E.forwardRef(a)),a=E.memo(a),PS(e,a),a}var OS={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};function PS(e,t){Object.keys(e).forEach(function(n){OS[n]||Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}globalThis&&globalThis.__read;var lu;dS(Cg.unstable_batchedUpdates);lu=Rc.finalizeAllImmediately;const NS=C.div`
  margin-bottom: 100px;

  @media screen and (max-width: 1169px) {
    width: 100%;

    margin-bottom: 46px;
  }

  @media screen and (max-width: 680px) {
    margin-bottom: 46px;
  }
`,TS=C.div`
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
`,DS=C.div`
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
`,LS=C.div`
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
`,zS=C.div`
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
`,MS=C.div`
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
`;function su(e){return e.color?c.jsx(DS,{bgcolor:e.bgcolor,color:e.color,children:e.children}):c.jsxs(LS,{percentage:e.percentage,children:[c.jsx(zS,{children:"До перехода в новый статус осталось"}),c.jsxs(MS,{children:[e.percentage,"%",c.jsxs("span",{children:[" (",e.point," BYN)"]})]})]})}class FS{constructor(){Z(this,"current");Z(this,"next");ta(this)}setCurrent(t){this.current=t}setNext(t){this.next=t}}const kr=new FS;kr.setCurrent({name:"Silver",percentage:5,condition:void 0,labelColor:"#000000",labelBackgroundColor:"#F6F7FC",backgroundColor:"#FFFFFF"});kr.setNext({name:"GOLD",percentage:20,condition:{percentage:60,point:15e4},labelColor:"#868686",labelBackgroundColor:"#FBF6E9",backgroundColor:"#FFFFFF"});kr.setCurrent({name:"Gold",percentage:20,condition:void 0,labelColor:"#000000",labelBackgroundColor:"#FBF6E9",backgroundColor:"linear-gradient(114deg, #E9D8A6 0%, #E9DCB7 49.48%, #EAD9A7 100%)"});kr.setNext({name:"Black",percentage:30,condition:{percentage:60,point:15e4},labelColor:"#A19D9D",labelBackgroundColor:"#181816",backgroundColor:"#FFFFFF"});const IS=pt(()=>{var n,r,i;const{next:e,current:t}=kr;return!(t!=null&&t.percentage)||!(e!=null&&e.percentage)||!((n=e.condition)!=null&&n.percentage)?c.jsx("div",{children:"...loading"}):c.jsxs(TS,{children:[c.jsx(su,{color:t==null?void 0:t.labelColor,bgcolor:t==null?void 0:t.labelBackgroundColor,percentage:t==null?void 0:t.percentage,children:`Текущая скидка ${t==null?void 0:t.percentage}%`}),c.jsx(su,{percentage:(r=e==null?void 0:e.condition)==null?void 0:r.percentage,point:(i=e==null?void 0:e.condition)==null?void 0:i.point}),c.jsxs(su,{color:e==null?void 0:e.labelColor,bgcolor:e==null?void 0:e.labelBackgroundColor,percentage:e==null?void 0:e.percentage,children:[e==null?void 0:e.name,`(скидка ${e==null?void 0:e.percentage}%)`]})]})});class KS{constructor(){Z(this,"info",{isVisible:!1,text:"",link:"",buttonText:""});Z(this,"setInfo",t=>{this.info={...t}});Z(this,"setVisible",t=>{this.info={...this.info,isVisible:t}});ta(this)}}const ra=new KS,$S=C(tn)`
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
  }

  &:focus {
    background: #1245a9;
    box-shadow: none;
  }
`;function Ud({to:e,children:t,onClick:n}){return c.jsx($S,{to:e,onClick:n,children:t})}const Vd="/assets/cross-52362f94.svg",BS=C.div`
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
`,US=C.div`
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
`,VS=C.div`
  max-width: 560px;
  color: ${e=>e.theme.colors.text};
  text-align: center;
  font-family: "Rubik";
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 130.5%;
`,WS=C(tn)`
  position: absolute;
  top: 7px;
  right: 7px;
  width: 22px;
  height: 22px;
  transform: rotate(90deg);
  background-image: url(${Vd});
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
`,Wd=pt(()=>{const{info:e,setInfo:t}=ra,n=()=>{t({isVisible:!1,text:"",link:"",buttonText:""})};return E.useEffect(()=>{console.log(e)},[e]),c.jsx(BS,{$visible:e.isVisible,children:c.jsxs(US,{children:[c.jsx(VS,{children:e.text}),c.jsx(Ud,{to:e.link,onClick:n,children:e.buttonText}),c.jsx(WS,{to:e.link,onClick:n})]})})}),QS=pt(({user:e})=>{const t=Nd();return e!=null&&e.data||t("/form"),c.jsxs(NS,{children:[c.jsx(Wd,{}),c.jsx(IS,{}),c.jsx(nv,{})]})}),HS="/assets/sight-a2bf1ff0.svg",GS=C.div`
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
    background-image: url(${HS});
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
`;function xr({children:e,id:t,isChecked:n,onChange:r}){return c.jsxs(GS,{children:[c.jsx("input",{type:"checkbox",name:t,id:t,checked:n,onChange:()=>{r(!n)}}),c.jsx("label",{htmlFor:t,children:e})]})}const YS=C.input`
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
`;function Ve({children:e,className:t,type:n,placeholder:r,value:i,required:o,name:a,minLength:l,maxLength:s,area:u,onChange:d}){return c.jsx(YS,{type:n,className:t,placeholder:r,value:i,required:o,name:a,minLength:l,maxLength:s,area:u,onChange:h=>{d(h.target.value)},children:e})}const qS=C.div`
  margin-bottom: 22px;
  display: flex;
  gap: 5px;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;

  @media screen and (max-width: 680px) {
    font-size: 13px;
  }
`,XS="/assets/hint-3cce6d49.svg";function jc({children:e,className:t}){return c.jsxs(qS,{className:t,children:[c.jsx("img",{src:XS,width:18,height:18,alt:""}),e]})}const ZS=C(tn)`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  text-decoration: none;
`;function uy({children:e,className:t,to:n}){return c.jsx(ZS,{to:n,className:t,children:e})}const JS=C.h2`
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 16px;
`,uu=C.div`
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
`,eC=C.div`
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
`,tC=C.form`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 680px) {
    max-width: 340px;
  }
`,nC=C.input`
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
`;function Di({value:e,className:t,disabled:n}){return c.jsx(nC,{className:t,type:"submit",value:e,disabled:n})}function rC(e){const t={result:!0,badFields:[]};return e.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)===null&&(t.result=!1,t.badFields.push("email")),t}function iC(e){const t={result:!0,badFields:[]};return e.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)===null&&(t.result=!1,t.badFields.push("email")),t}function oC(e){const t={result:!0,badFields:[]};return e.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)===null&&(t.result=!1,t.badFields.push("email")),e.password!==e.repeatedPassword&&(t.result=!1,t.badFields.push("repeatedPassword")),t}function cy(e){const t={result:!0,badFields:[]};return e.name.length<2&&(t.result=!1,t.badFields.push("name")),e.phone.match(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/)===null&&(t.result=!1,t.badFields.push("phone")),e.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)===null&&(t.result=!1,t.badFields.push("email")),e.organization.length<3&&(t.result=!1,t.badFields.push("organization")),e.uAddress.length<4&&(t.result=!1,t.badFields.push("uAddress")),e.fAddress&&e.fAddress.length<4&&(t.result=!1,t.badFields.push("fAddress")),e.INN.length!==8&&(t.result=!1,t.badFields.push("inn")),t}function aC(e){const t={result:!0,badFields:[]};return e.inn.length!==8&&(t.result=!1,t.badFields.push("inn")),e.name.length<2&&(t.result=!1,t.badFields.push("name")),e.address.length<4&&(t.result=!1,t.badFields.push("address")),e.mark.length<2&&(t.result=!1,t.badFields.push("mark")),e.count<=0&&(t.result=!1,t.badFields.push("count")),e.dealerManager.length<2&&(t.result=!1,t.badFields.push("dealerManager")),e.dealerName.length<2&&(t.result=!1,t.badFields.push("dealerName")),e.manager.length<2&&(t.result=!1,t.badFields.push("manager")),e.phone.match(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/)===null&&(t.result=!1,t.badFields.push("phone")),t}class lC{constructor(){Z(this,"user");Z(this,"isAuthorized",!1);Z(this,"setUser",t=>{this.user={...t},localStorage.setItem("user",JSON.stringify(t))});Z(this,"removeUser",()=>{this.user=void 0});Z(this,"setUserData",(t,n)=>{this.user&&(this.user={...this.user,data:t,email:n},localStorage.setItem("user",JSON.stringify(this.user)))});ta(this)}}const Li=new lC;function sC(){const{setUserData:e}=Li,[t,n]=E.useState({name:"",phone:"",email:"",isAgent:!1,organization:"",uAddress:"",isAddressEquals:!1,fAddress:"",INN:""}),[r,i]=E.useState({result:!1,badFields:[]});E.useEffect(()=>{t.isAddressEquals&&t.fAddress&&(t.fAddress=null),console.log(t)},[t]);const o=s=>E.useCallback(u=>{n({...t,[s]:u})},[s,t]),a=o("fAddress"),l=s=>{s.preventDefault();const u=cy(t);i(u),u.result&&(console.log("push to server"),e({name:t.name,phone:t.phone,companyName:t.organization,legalAddress:t.uAddress,physicalAddress:t.fAddress?t.fAddress:t.uAddress,inn:t.INN,isAgent:t.isAgent},t.email))};return c.jsxs(tC,{onSubmit:l,children:[c.jsx(JS,{children:"Введите контактные данные"}),c.jsxs(jc,{children:[" ","Уже покупаете у нас? Войдите в"," ",c.jsx(uy,{to:"/login",children:"личный кабинет"})]}),c.jsxs(uu,{children:[c.jsx(Ve,{type:"text",placeholder:"Имя",name:"firstName",required:!0,onChange:o("name"),className:r.badFields.find(s=>s==="name")?"error":""}),c.jsx(Ve,{type:"tel",placeholder:"Телефон",name:"phone",required:!0,onChange:o("phone"),className:r.badFields.find(s=>s==="phone")?"error":""}),c.jsx(Ve,{type:"email",placeholder:"Email",required:!0,onChange:o("email"),className:r.badFields.find(s=>s==="email")?"error":""})]}),c.jsx(xr,{id:"agent",onChange:o("isAgent"),isChecked:t.isAgent,children:"Я представитель юридического лица или ИП"}),c.jsx(jc,{children:"Данной организации еше нет в нашей базе. Пожалуйста, введите по ней информацию."}),c.jsxs(uu,{children:[c.jsx(Ve,{type:"text",placeholder:"Название организации*",name:"organization",required:!0,onChange:o("organization"),className:r.badFields.find(s=>s==="organization")?"error":""}),c.jsxs(eC,{children:[c.jsx(Ve,{type:"text",placeholder:"Юридический адрес*",name:"address",required:!0,onChange:o("uAddress"),className:r.badFields.find(s=>s==="uAddress")?"error":""}),c.jsx(xr,{id:"isAddressEquals",isChecked:t.isAddressEquals,onChange:o("isAddressEquals"),children:"Совпадает с физическим"})]}),t.isAddressEquals?void 0:c.jsx(Ve,{type:"text",placeholder:"Физический адрес*",name:"address",required:!0,onChange:a,className:r.badFields.find(s=>s==="fAddress")?"error":""})]}),c.jsx(uu,{children:c.jsx(Ve,{type:"number",placeholder:"ИНН*",name:"INN",required:!0,minLength:8,maxLength:8,onChange:o("INN"),className:r.badFields.find(s=>s==="inn")?"error":""})}),c.jsx(Di,{value:"Продолжить"})]})}const uC=C.div`
  width: 100%;
  height: 100%;
  background: ${e=>e.bgcolor};
  position: relative;
`,cC=C.div`
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
`,dC=C.h1`
  margin-bottom: 30px;
  color: ${e=>e.theme.colors.text};
  font-family: "Rubik";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130.5%;
  text-transform: uppercase;
`,fC=C.div`
  display: flex;
  width: 100%;
  gap: 18px;

  @media screen and (max-width: 680px) {
    flex-direction: column;
  }
`,pC=C.div`
  width: 100%;
  height: fit-content;
`,hC=C.li`
  width: 270px;
  height: 70px;

  @media screen and (max-width: 1169px) {
    width: 170px;
  }

  @media screen and (max-width: 680px) {
    width: 166px;
    height: 47px;
  }
`,mC=C(Sr)`
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
`;function En({children:e,to:t}){return c.jsx(hC,{children:c.jsx(mC,{to:t,children:e})})}const gC=C.ul`
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
`;function vC(){return c.jsxs(gC,{children:[c.jsx(En,{to:"messages",children:"Сообщения"}),c.jsx(En,{to:"store",children:"Склад"}),c.jsx(En,{to:"documentation",children:"Документация"}),c.jsx(En,{to:"booking",children:"Бронирование"}),c.jsx(En,{to:"price",children:"Прайсы"}),c.jsx(En,{to:"my",children:"Моё оборудование"}),c.jsx(En,{to:"account",children:"Учётная запись"}),c.jsx(En,{to:"history",children:"История заказов"})]})}function yC(){return c.jsxs("div",{children:[c.jsx(dC,{children:"Личный кабинет"}),c.jsxs(fC,{children:[c.jsx(vC,{}),c.jsx(pC,{children:c.jsx(nv,{})})]})]})}const xC=C.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,AC=C.div`
  display: flex;
  flex-direction: column;
`,cu="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAC2AS8DAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+sigAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAP/Z",wC=[{image:cu,title:"Toyota теперь предоставляет гарантию на автомобили до 10 лет",text:"Toyota запустила новую гарантию Toyota Relax для новых автомобилей и автомобилей с пробегом в Казахстане. Теперь у владельцев моделей Toyota есть уникальная возможность получить гарантию Toyota Relax до 10 лет. Toyota запустила новую гарантию Toyota Relax для новых автомобилей и автомобилей с пробегом в Казахстане. Теперь у владельцев моделей Toyota есть уникальная возможность получить гарантию Toyota Relax до 10 лет.",date:"2023-02-27",url:"google.com"},{image:cu,title:"Toyota теперь предоставляет гарантию на автомобили до 10 лет",text:"Toyota запустила новую гарантию Toyota Relax для новых автомобилей и автомобилей с пробегом в Казахстане. Теперь у владельцев моделей Toyota есть уникальная возможность получить гарантию Toyota Relax до 10 лет. Toyota запустила новую гарантию Toyota Relax для новых автомобилей и автомобилей с пробегом в Казахстане. Теперь у владельцев моделей Toyota есть уникальная возможность получить гарантию Toyota Relax до 10 лет.",url:"google.com",date:"2023-02-27"},{image:cu,title:"Toyota теперь предоставляет гарантию на автомобили до 10 лет",text:"Toyota запустила новую гарантию Toyota Relax для новых автомобилей и автомобилей с пробегом в Казахстане. Теперь у владельцев моделей Toyota есть уникальная возможность получить гарантию Toyota Relax до 10 лет. Toyota запустила новую гарантию Toyota Relax для новых автомобилей и автомобилей с пробегом в Казахстане. Теперь у владельцев моделей Toyota есть уникальная возможность получить гарантию Toyota Relax до 10 лет.",url:"google.com",date:"2023-02-27"}],_C=C(tn)`
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
`,SC=C.img`
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
`,CC=C.div`
  flex: 1 1 520px;

  @media screen and (max-width: 1169px) {
    flex: 1 1 470px;
  }

  @media screen and (max-width: 680px) {
    flex: none;
  }
`,EC=C.h3`
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
`,kC=C.p`
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
`,bC=C.time`
  color: ${e=>e.theme.colors.text};
  font-family: "Rubik";
  font-size: 16px;
  font-style: italic;
  font-weight: 300;
  line-height: 130%;

  @media screen and (max-width: 1169px) {
    font-size: 15px;
  }
`;function RC({item:e,to:t}){return c.jsxs(_C,{to:t,children:[c.jsx(SC,{src:e.image,alt:""}),c.jsxs(CC,{children:[c.jsx(EC,{children:e.title}),c.jsx(kC,{children:e.text}),c.jsx(bC,{dateTime:e.date,children:e.date.split("-").reverse().join(".")})]})]})}const jC=C.button`
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
`;function OC({children:e,className:t}){return c.jsx(jC,{className:t,children:e})}function lh(){return c.jsxs(AC,{children:[c.jsx(xC,{children:wC.map((e,t)=>c.jsx(RC,{item:e,to:"/message1"},t))}),c.jsx(OC,{children:"Смотреть больше"})]})}const PC=C.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${e=>e.theme.colors.primary};
  border-radius: ${e=>e.theme.borderRadius};
`,NC=C.img`
  margin-bottom: 11px;
  width: 94px;
  height: 94px;
  object-fit: contain;
  object-position: center;
`,TC=C.div`
  color: ${e=>e.theme.colors.text};
  font-family: "Rubik";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 130.5%;
`,DC=C.a`
  text-decoration: underline;
  color: inherit;
`,LC="/assets/msexcel-f86bcc5f.svg";function dy({link:e,children:t}){return c.jsxs(PC,{children:[c.jsx(NC,{src:LC,alt:"Excel SpreadSheet"}),c.jsxs(TC,{children:[c.jsx(DC,{download:!0,href:e,children:"Скачать"})," ",t]})]})}function zC(){return c.jsx(dy,{link:"text.csv",children:"остатки"})}function MC(){return c.jsx(dy,{link:"text.csv",children:"прайс-лист"})}const FC=C(tn)`
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
`;function ja({children:e,to:t}){return c.jsx(FC,{to:t,children:e})}const IC=C.div`
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
`;function KC(){return c.jsxs(IC,{children:[c.jsx(ja,{to:"instructions",children:"Инструкции по эксплуатации"}),c.jsx(ja,{to:"certificates",children:"Сертификаты"}),c.jsx(ja,{to:"techinfo",children:"Техническая информация"}),c.jsx(ja,{to:"typedcomertial",children:"Образцы коммерческих предложений"})]})}const $C=C.a`
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
`,BC=C.img`
  width: 15px;
  height: 15px;
  object-fit: contain;
  object-position: center;
`,UC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADfSURBVHgBlZMxDoJAEEU/xE4TKe3EE6iVsRILGyv0AuIp7IycwcrKwgPY2RpPoPECcgQ8gf51l0AQNrs/ecnuAH9nZhkHuVrkRN7kg38FZEoS1CgiK9TrTq7ELwbdwrqrc6dSsibHookLc7WJR2JyzkxsDJYkhOzDE6rchsGH4rQFZHk7FQvIxDQDT/dQZxCW9vOql3QljElPrbfEIRdYZLAhfTKEvOLYNgOhCPndw8ZggLx5L8iuC4mf6WFiMCKdiniiM0jVyTdygF6+Mvt1NpOYxj1Kw1KhJuTEzsTmC+hzH63aumPzAAAAAElFTkSuQmCC";function VC({title:e,link:t}){return c.jsxs($C,{download:!0,href:t,children:[c.jsx("p",{children:e}),c.jsxs("p",{children:["Скачать ",c.jsx(BC,{src:UC})]})]})}const WC=[{title:"ins"},{title:"ins"},{title:"ins"},{title:"ins"},{title:"ins"},{title:"ins"},{title:"ins"},{title:"ins"},{title:"ins"},{title:"ins"}],QC=C.div`
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
`,HC=C.div`
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
`;function Oa({title:e}){return c.jsxs("div",{children:[c.jsxs(QC,{children:[c.jsx(tn,{to:"../../documentation",style:{textDecoration:"none",color:"inherit"},children:"Документация"})," ","/ ",c.jsx("span",{children:e})]}),c.jsx(HC,{children:WC.map((t,n)=>c.jsx(VC,{title:t.title,link:`/${n}`},n))})]})}const GC=C.div`
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
`,YC=C.div`
  width: 100%;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: ${e=>e.theme.colors.primary};
  border-radius: ${e=>e.theme.borderRadius};
`,qC=C.div`
  display: flex;
  gap: 36px;

  @media screen and (max-width: 680px) {
    font-size: 13px;
  }
`,XC=C.div`
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
`,ZC=C.button`
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
`,JC=C.button`
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
`,eE=C.div`
  width: 25px;
  height: 25px;
  background: transparent;
  border: none;
  outline: none;
  background: url(${Vd});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transform: rotate(90deg);
  cursor: pointer;
`;class tE{constructor(){Z(this,"items",[]);Z(this,"addItems",t=>{this.items=t});Z(this,"getCount",t=>t.filter(r=>r.isSelected===!0).reduce((r,i)=>i.count+r,0));Z(this,"setCount",(t,n)=>{const r=this.items.findIndex(o=>o.id===t.id),i={...t,count:n};this.items.splice(r,1,i)});Z(this,"getWeight",t=>t.filter(i=>i.isSelected===!0).reduce((i,o)=>o.weight*o.count+i,0)/1e3);Z(this,"getCost",t=>t.filter(r=>r.isSelected===!0).reduce((r,i)=>i.price*i.count+r,0));Z(this,"isItemSelected",t=>{const n=this.items.findIndex(r=>r.id===t.id);return this.items[n]?this.items[n].isSelected:!1});Z(this,"changeSelect",(t,n)=>{const r=this.items.findIndex(i=>i.id===t.id);this.items[r]={...this.items[r],isSelected:n}});Z(this,"getItem",t=>{const n=this.items.findIndex(r=>r.id===t);return this.items[n]});Z(this,"selectAll",()=>{this.items=this.items.map(t=>({...t,isSelected:!0}))});Z(this,"isAllSelected",()=>{let t=!0;return this.items.forEach(n=>{n.isSelected||(t=!1)}),t});Z(this,"onSelectAllClick",()=>{this.isAllSelected()?this.items=this.items.map(t=>({...t,isSelected:!1})):this.selectAll()});Z(this,"clearItems",()=>{this.items=[]});Z(this,"removeItem",t=>{this.items=this.items.filter(n=>n.id!==t.id)});Z(this,"removeSelected",()=>{this.items=this.items.filter(t=>t.isSelected===!1)});ta(this,{},{autoBind:!0})}}const hs=new tE,nE=C.div`
  display: grid;
  grid-template-columns: 1fr 3.5fr 15fr 4.5fr 4.5fr 4.5fr 1fr;
  align-items: center;

  @media screen and (max-width: 680px) {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;
  }
`,rE=C.img`
  display: flex;
  object-fit: contain;
  object-position: center;

  width: 100%;
  height: 44px;

  @media screen and (max-width: 680px) {
    width: 72px;
  }
`,iE=C.div`
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
`,oE=C.div`
  text-align: center;
  color: ${e=>e.theme.colors.textGrayDark};
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "Raleway";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130.5%;
  text-transform: uppercase;
`,aE=C.div`
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
`,lE=C.button`
  width: 25px;
  height: 25px;
  background: transparent;
  border: none;
  outline: none;
  background: url(${Vd});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transform: rotate(90deg);
  cursor: pointer;

  @media screen and (max-width: 680px) {
    display: none;
  }
`,sE=C.div`
  display: none;
  @media screen and (max-width: 680px) {
    display: block;
    flex-basis: 100%;
    width: 0;
  }
`,uE=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 680px) {
    width: 120px;
  }
`,cE=C.input`
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
`,sh=C.button`
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
`;function dE({count:e,onChange:t}){return c.jsxs(uE,{children:[c.jsx(sh,{onClick:()=>{t(e-1)},disabled:e===1,children:"-"}),c.jsx(cE,{type:"number",value:e,onChange:n=>{t(Number(n.target.value))}}),c.jsx(sh,{onClick:()=>{t(e+1)},children:"+"})]})}const fE=pt(({item:e})=>{const{changeSelect:t,setCount:n,removeItem:r}=hs,i=E.useCallback(()=>a=>{t(e,a)},[t,e]),o=E.useCallback(()=>a=>{n(e,a)},[n,e]);return c.jsxs(nE,{children:[c.jsx(xr,{onChange:i(),id:e.id,isChecked:e.isSelected},`${e.id} ${e.isSelected}`),c.jsx(rE,{src:e.image}),c.jsx(iE,{className:e.isAvailable?"":"disabled",children:e.name}),c.jsx(sE,{}),e.isAvailable?c.jsxs(c.Fragment,{children:[c.jsxs(oE,{children:[e.oldPrice," BYN"]}),c.jsx(dE,{count:e.count,onChange:o()},e.toString()),c.jsxs(aE,{children:[e.price," BYN"]})]}):c.jsxs(c.Fragment,{children:[c.jsx("div",{}),c.jsx("div",{}),c.jsx("div",{})]}),c.jsx(lE,{onClick:()=>{r(e)}})]})}),pE=C.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;function hE({items:e}){return c.jsx(pE,{children:e.map(t=>c.jsx(fE,{item:t},t.id))})}const mE=pt(()=>{const{items:e,onSelectAllClick:t,isAllSelected:n,removeSelected:r}=hs;return E.useEffect(()=>{console.log(e)},[e]),c.jsxs(YC,{children:[c.jsxs(qC,{children:[c.jsx(ZC,{children:c.jsx(xr,{id:"selectAll",onChange:()=>{t()},isChecked:n(),children:"Выбрать все"})}),c.jsxs(JC,{onClick:()=>{r()},children:[c.jsx(eE,{}),"Удалить выбранное"]})]}),c.jsxs(XC,{children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{children:"Наименование"}),c.jsx("span",{children:"Цена"}),c.jsx("span",{children:"К-во"}),c.jsx("span",{children:"Стоимость"}),c.jsx("span",{})]}),c.jsx(hE,{items:e})]})}),gE=C.div`
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
`,du=C.div`
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
`,vE=C.button`
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
`,yE=C.div`
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
`;function xE(){const{getCount:e,getCost:t,getWeight:n,items:r}=hs;return E.useEffect(()=>{console.log(r)},[r]),c.jsxs(gE,{children:[c.jsx(yE,{children:"ваш заказ"}),c.jsxs(du,{children:[c.jsx("span",{children:"Выбрано товаров:"})," ",c.jsxs("span",{children:[e(r)," шт."]})]}),c.jsxs(du,{children:[c.jsx("span",{children:"Вес заказа:"})," ",c.jsxs("span",{children:[n(r)," кг."]})]}),c.jsxs(du,{children:[c.jsx("span",{children:"Итого:"})," ",c.jsxs("span",{children:[t(r)," BYN"]})]}),c.jsx(vE,{children:"Выставить счёт"})]})}const fu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAsCAYAAADGiP4LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA8rSURBVHgB5Vrrj1z3WX7O/Zy5z669u15fNnYcO3biOCRFJYQQt0loItILUJAQCPqh4gt8RIhvJAJRgdR/AAm1FXchFcSlNILgIAo0rh3Xjt04WV829l5nZ2bnes7MufK8v1n8gV7UZmZ3K/XnnOz9zJznPO/zPu/zOxq2V5Zl5/jh93g8zqOCH931Bo8vapr2JflCk/8RnFcwAueHbGXYfot7sV4lSK9oBOcz/OIL+CFZfD9IshTrWwHafoRU0+DaJg5NeXANAUtT/3YJt48IQOf5yTns4RqBkuGttT4uL/dxu95HmhnQdA1hmiLQLORtG3OOhqPFDB9eyONQ1YOu6djh9YYAlGEPV5omuLTew2tv3YUT+Zi1AlSKLnKWgZQlZtsu6oMUKwMLfmyjbRUQBBkeqgIvn65ioeyApUBG7QilWnsKUMxSeu3aCq5+6yY+NG+zhIByuUBKpUjIHCklw7TR6fWRy7kYZDpq3RCrfh5LSR69QYanDwA//8Q8XNPETqw9AyglAK9dfgedjQ0sTOdgWjqkYkxeaMafea4HPwhgWTYPA91uF6btwDJ0BEPgPZbhUrIPy76Nohbid184gipBnLQ27XgR//8l96PT6eDNCxegt1dxdK4A2zHgeS4MXScwrmpelB84FOckiRDFEQqFHAryOwQoTQLkwiYORbdxqtBBYHv4zb+6hnp/gEmvXWWQvNT169extbVFUY5RLBWhExSdiOQ8DzGB0AmAsKbVbsEmc3TDguM48Pt9RFGk9EZ+J001bNRauNcL0UyKeHs4hSlHx++/fBxlV8ptMlTaFYDkJZrNJhYXFwlFSl0xVNlYtoUsSZW+qu+zjQs4SZKRPQ6i0Of3DJbaQDHJtXPsbimGIZmimWix7BbvbMKr7MPNXoJ7+UcxE27i1U89Ase0MIm1oyWm2neS4Pq167h27ZpiS6lUgOtYBMJUzJALlnZezBfIkESB5RA4kGHhcAjf98kknRdss9R8ApPwY4zm1gZZ1SHrfGipj8qwicesGq5uAn/75hImtXZE+jNedERwbqx38MaVVdSHFGDrIHVDwxRb9FxJx4xOdoQhigUP/b6PYOCjVCwhjAbUIoMsGcLxHDkZYrKHpOKRoN1sk1U2hTxDIJoTDaHzbx5ZmEVidLExZeFvLgd46fHDmMq7YxfaxEosE2Xlf/W2jy9cqGElMnHpnU30qBEp21MmWsMSsh0bJdfCbDWPY9MGnpxNcGaKTAtaMCwNg8FAibZD/5NEsSqnjHoTDahBRClMYrS3GohToFHvoDo1Bdcz+LsaEiuHCzebqJUfw7F8hN/5+BkycrwimRxAPM3XFtfwh19ZxvuNEFYy4EXQx2i8Ek30gK5GM1gSMUgRGBTSfKGAKn3PsWkXHzkS4GSuB1NEWKce6fJR9KeD4SChXtmo1dZUmfr+gMCRfcUyXNdBr9snE8u8OW2khodv9XP4t5sa/u63fhxVsmicNRGAREf+6fI9/ME/LqG7RZ0gA+QWy90TkDRTV01FXsqQVxMm8YLlc5tg5SsFzO4rKrP40wcCFPS2ctjKHGcW2q01+ATEMhysrq1idvYgwpC/R4AHwximbrJEAzhuga/l4PLdLVwaHMEnT3j4hadOjFVmY4s0+YFLN2v4o3++TdEcqDJKWRrSigUXR8/ICoLFC9Z5SDeScozld/gzm1j69EVrK3X8+7ttfPG6hivNPIYRyynOUGvco6AXMQj6PHwsHHlQCb/n5gieSawt1QFdx2VZchRp1DHvZTjoRGT0Fsa9/2MDNGTJ/PE/XEe/R7HcnodclgZHTepCgpDdKOH3yAcKt4Eo1VkeCe/4AK3OAJ1hgmLOYbsP0aq3cHWphS9d7GCj1UWn3eCFF7F07yZm9i/AdsVVOwqQjOfr9doEgKCzanXdQqOxyZHEQSnvYI4zXT2Itm/hB19jd7H/fmcFt2ohNFFNLYbFdpzyc4kpMsGLYPGGkxGx6jwJSy7L5L6I59HRH0R4f83HVCXPhhTBYMkE7F5/cnMep0o9/FR5CceOnka7u47p6gGCWkOpUOF5Ir5WmS2f0JOJg+GAFqLMLhgrcXc1OvDURV9ugAx5ewXQVy6vEZBE6Y1FcZWWrNHnCGARZ6purUF/E7PExAiasDkvVadL6PkJYprAjAyUsaJFxtg8hy7jRBhRkH3ca1ioPHwEJb/HkirTXW9RlCuqxNKE034WKi/V6/kE2yIrh6rUbI4rRQLYaffJcAKED77GKjEB4MrtBrUgoTseEX9UZia6HA0ad5cx9Pv8MUGjJskh+hRzOi9oA5wsazg1XxyNDtSbYazBH4ZkAa0B27vOj19+18D1lrCSQPJfwPMKQ0VbJA/qdvoE3lJfl0qlkSvnzz0xnyVx3hhrjcWgXhDyGAWj2PZBUj0R77jfpK+pTMHiVK7zzXocLRJevOhSLyTT4hAbW+vKDx09uA93N8m2RBOseQ6WItlgE/Qsc/DX75lYeFID3QAGNIZhPOAYkpFNFg+P1SrsdGkHBorJ8n58stDSbOSd8YpkrL8OSV+dZcJbrsC5n1lxVNi/cIQaYcI0ZCKP4RV5N8kAn2Le4VxmSnsmc+otn3nPKvbvr6BHIxhEKRyZ5mkVAsYd4oVrLKevrhfxc/McYHk+k8B4rmhbqADROJcN+R7EOsgcJ0PtIAT2F1y41gfXn7EBIjwolC0CNWTX4t0mQgnfrMn6H9z5BozeIorZhjKGVuUQgsJR5A48CW9hDhpLL+gM0e50EfgBGpt1TM1MYyPUGbNmsNjprO2SzBPo19/z8ROk0GEvkBdm6QTUIbkXptI9kzdKZjTp6jFvSJ3nPXHwyCi/HmONpUEFW1OMoE/kifhWaNhYQ2hefxPtW1fhxS04Whf6oI5s821M117H/OKfYl/jKsolD2bewzAVYMksdpuQTthOOaTywmWsiOiaU5opFYMQ+K+uuQioVX0CGrJMTWrPkGwRoDT+rqSQKQW8x9lucaWJ58/M37ceewJQjvVdtpUdHx28iF69joStOOaFRKncUeqPl2N38VTJOWkbM43zyC2/zhlKQ65a4cVJGaRo0heVokCyWAS6eKbtRICl7JBJF++0EZhFVCsl+h2Ps5uhyspllpQQJUkp1zc2GYGs4vipszg2V8K4ayyAZFY6eYCdQ+iN0RTvsxUnsexS8M4ntmrDYuYkprAZaLn0OI6Twl77Orzb/0L/48GWqZ3+KKWp7LFLFfVIeSUJx7Rs5KekjJBaeHvL5kAbKnEWYCQvGtIDyZC72WhgjQC13MP41Y8+Qpc9fpoz1hmEvM88Ogs2G3aVUfAlZi/W5eJGuxA249ACs55cLk/g2GFSA5u1usqD5sN3UKxdxNRsGYmpqUG23w/og7rQGHck4qWoJ7JPJmKc5xjz1u02NPqcAQU8ojCLICcM3eS4c2sJ0fTD+Ni5J3CI890k1pgAafjwqTmCQIeSpqOBVLqa5ig9avbooKUP6VCt3qCehBw6hWlaFnF2yvBgdg1e1Ee+WFAsiqghW7QIJlmXZiPrYDMFSPh37AbYGlCU2foNGsO+PySzMtVJb7y7iHjfCbz4zBN49sRBdbMmEbqOzcE5JoRPP1xlmYmHieGQKRkBShmdspHjDk2ezVKQux2L/0mGmJnZpwAxmd/EQRtTravIcTJP2bVEs4QNtgQAjF1NMk0zDeUhxN8kHFA7saHctLBwq9nAxQuXcOiBk/jll87hscPTo32yCWXSYwMkY8KnnzrKbEYGzgRVXrxOu59xJtNMl+OCgdV2TunIkBFFpVJWHSeXz6PPMgk4oZfSFV4s8x8BQ8UizIv4u5kIdjIaU0xTZR+87BR9kknYVq9v4vKVq3jwoeP4xMc+iuNz1e3d1snt/Uwgk9Zw9sE5smgahAR5XrhVrvCCCrxgR0ZSfHMlwVCfRqlcVi3ZZK7ToU8RkZ+a2o+gvsxC7DFidaUWpS2yHAGP5zIZvlt6psRaV5mA+NJEzXcrK6s48dBJvPD8z9AP2WOnh99pTeSMBm/7Z58/jumCwxOmmDm8QCHNKQZlZFMcurhwS8PdLUMFXJ1OW7Vu6UBrq+tkE4dbBvQycEoZ6brMdg48ssaUwVddvLxSpvwTz4i7y8uYnprGJz/+CXjOeKnh91oTg/yBmQp+7bkjKiUUPSnOH4LuchC18zDYycLYxOWlFF+/k2FpI2RsOuRuqUzpNts0O5U5Kg1hQY6lpovHkdBNBhSJYGlKZZuo0+NGYa+BQq6Al178WdUhtZ3Zl1drYrsaUgCf/smTuLbcwetXG5g7NKuY1V67q0YQS1kAeaxlyJSQI4oXIW9TjDUfLscQzWK2M2jCzgaMUiv8G9YiZ62M5ZZJIMbOJz5pfrZCALt47tnnkM/lsNNrots+IgG//amznIO+gSvLPg4cOsDycbF2+44SZoutP8s6jCu43xUwERySJXTYMzMfgsuoQxt2UaoWYVfLLC1PvKUK6WUXNlNhvoXTcw5eePoZgpPfUebcv6ZJ76xK3tzo+viz/3off/8/y5BnNGQXolWjw61tIOWQqiU96OxOOvWleORhVA4+gKTXZZtnfk1RN3Pic1zRasUgk20+5cxWypn4/K+cxukD1Z163OXb1sQ3DsU87ivm8dlnj2Gz2cUbb28yI2agTjZ5+2cRcIsmTUMG+ows8jl4TBhjDp+yXOqKdCsOVlT+WI0wQ4q3xp0N6W7PndnPgK2K3Xwsb8f25oVJA44Bf/6fi/jL83fodwgKNw1liNW5MxoxEtHomzI6YUkIdYq0wblN5yGZsngqGUB1DrhiB548WcbnfvHHUHYns+f+/a4df3hBTn91qY7Pf/ki3ltjEsgRXZxxxHRRPb1BQylhrUSRhjwElbMRcqMwoYnMsQQjCtujR0v43C+dxUwlp2KV3VwC0BZ2/LHfTOXX/3p5CX9x/hZurPjyBBWZwm1lu0CmxOrJDkm7DGZEFreHJGMyaRBffmoOv3FOPFZO6c5uP/O66w9xxhTbS7fW8LUb67h4o4b3awHnM4bwDL8q3IaWeFa2nc+dmcWLZw/g8Qf2KbuwR0s9xHmOn5zHri71qIOarJrdAGtbPWbICc2fiRn1eIyJnKnvyOjwA67P/N+D5PIQ+SvYs3V/XwS7X0Tfdb1Cn/Xq/Xez/UD5r2OPn5ne49Xi8U2MwPkP+cb/An2aSrFJ7MGNAAAAAElFTkSuQmCC",AE=pt(()=>{const{addItems:e,items:t}=hs;return E.useEffect(()=>{e([{id:"1",image:fu,name:"ВОЗДУШНЫЙ ФИЛЬТР ECO AE-704-22 ВОЗДУШНЫЙ ФИЛЬТР ECO AE-704-22",count:1,price:120,oldPrice:110,weight:500,isSelected:!1,isAvailable:!0},{id:"2",image:fu,name:"ВОЗДУШНЫЙ ФИЛЬТР ECO AE-704-22 ВОЗДУШНЫЙ ФИЛЬТР ECO AE-704-22",count:2,price:120,oldPrice:110,weight:500,isSelected:!1,isAvailable:!0},{id:"3",image:fu,name:"ВОЗДУШНЫЙ ФИЛЬТР ECO AE-704-22 ВОЗДУШНЫЙ ФИЛЬТР ECO AE-704-22",count:2,price:120,oldPrice:110,weight:500,isSelected:!1,isAvailable:!1}])},[]),c.jsxs(GC,{children:[c.jsx(xE,{},t.toString()),c.jsx(mE,{})]})}),wE=C.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: transparent;
`,_E=C.h1`
  width: 100%;
  color: ${e=>e.theme.colors.text};
  font-family: "Rubik";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 130.5%;
`,SE=C.div`
  width: 100%;
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  grid-template-columns: 1fr 1fr;

  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.primary};
`,CE=C.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 14px;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.primary};
`,EE="/assets/edit-d03e6800.svg",kE=C.div`
  display: flex;
  align-items: center;
  gap: 5px;

  @media screen and (max-width: 1169px) {
    flex-direction: column;
  }

  @media screen and (max-width: 680px) {
  }
`,bE=C.div`
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
`,RE=C.div`
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
`;function qa({title:e,children:t,className:n}){return c.jsxs(kE,{className:n,children:[c.jsxs(bE,{children:[e,":"]}),c.jsx(RE,{children:t})]})}const jE=C.div`
  display: flex;
  height: 50px;
  gap: 5px;

  @media screen and (max-width: 680px) {
    height: max-content;
  }
`,OE=C.div`
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
`,PE=C.div`
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
`;function er({title:e,children:t,className:n}){return c.jsxs(jE,{className:n,children:[c.jsxs(OE,{children:[e,":"]}),c.jsx(PE,{children:t})]})}const NE=C.div`
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
`,TE=C.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 2fr 2fr 1.7fr 0.3fr;

  @media screen and (max-width: 1169px) {
    gap: 5px;
  }

  @media screen and (max-width: 680px) {
    grid-template-columns: 1fr 2fr 0.3fr;
  }
`,DE=C.div`
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
`;C.div`
  display: flex;
  align-items: center;
`;const pu=C.div`
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
`,LE=C.div`
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
`,zE=C(tn)`
  width: 30px;
  height: 30px;
  background-image: url(${EE});
  background-size: contain;
  background-position: center;
  cursor: pointer;

  @media screen and (max-width: 1169px) {
  }

  @media screen and (max-width: 680px) {
    grid-row-start: 1;
    grid-column-start: 3;
  }
`,ME=C(qa)`
  @media screen and (max-width: 680px) {
    grid-row-start: 2;
    grid-column-start: 2;
  }
`,FE=C(er)`
  @media screen and (max-width: 680px) {
    word-break: break-all;
  }
`;function fy({item:e,pathToEdit:t}){const[n,r]=E.useState(!1),i=()=>{r(!n)};return c.jsxs(NE,{onClick:i,children:[c.jsxs(TE,{children:[c.jsx(qa,{title:"ИНН",children:e.inn}),c.jsx(qa,{title:"Конечный потребитель",children:e.name}),c.jsx(ME,{title:"Регион, Город потребителя",children:e.address}),c.jsx(qa,{title:"Дата бронирования",children:e.date}),c.jsx(zE,{to:`${t}/${e.id}`})]}),c.jsxs(DE,{$isopened:n,children:[c.jsxs(pu,{children:[c.jsx(er,{title:"Марка оборудования",children:e.mark}),c.jsx(er,{title:"Количество",children:e.count})]}),c.jsxs(pu,{children:[c.jsx(er,{title:"Дилер",children:e.dealerName}),c.jsx(FE,{title:"Контактные данные дилера",children:e.phone})]}),c.jsxs(pu,{children:[c.jsx(er,{title:"Менеджер дилера",children:e.dealerManager}),c.jsx(er,{title:"Менеджер AIRSYST",children:e.manager})]}),c.jsx(er,{title:"Статус",children:e.status}),e.commentary.length>0&&c.jsx(LE,{children:e.commentary})]})]})}const IE=[{id:1,userID:1,inn:"12345678",name:"euroopt",address:"minks",mark:"aircool",count:2,date:"2014-09-11",dealerName:"Coollone",dealerManager:"Сапогов Михаил Петрович",manager:"Виктотров Михаил Петрович",phone:"375296388631",commentary:"lorem ipsum dolor sit ameter, consectetur adipiscing elit sed diam nonumy eirmod tempor invidunt ut labore et lorem ipsum dolor sit ameter, consectetur adipiscing elit sed diam nonumunt ut labore et",status:"pending"},{id:2,userID:2,inn:"12345679",name:"ООО Эйч Гэ Кондитион",address:"Ростовский регион, Шушары",mark:"aircool",count:2,date:"2014-09-11",dealerName:"Coollone",dealerManager:"Сапогов Михаил Петрович",manager:"Виктотров Михаил Петрович",phone:"375296388631",commentary:"",status:"pending"}];class KE{constructor(){Z(this,"list",[]);Z(this,"setBooking",t=>{this.list=t});Z(this,"clearBookings",()=>{this.list=[]});Z(this,"getBookingById",t=>this.list.find(n=>n.id==t));Z(this,"getBookingsByUser",t=>this.list.filter(r=>r.userID==t));ta(this)}}const ms=new KE;ms.setBooking(IE);const $E=C.div`
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
`;function py({children:e}){return c.jsx($E,{children:e})}const BE=pt(()=>{const{list:e}=ms,{current:t}=kr,{setInfo:n}=ra;return E.useEffect(()=>{(t==null?void 0:t.name)==="Silver"&&n({text:"Бронирование не доступно для текущего уровня. Необходимо повысить статус",link:"../",buttonText:"Понятно",isVisible:!0})},[t]),c.jsxs(wE,{children:[c.jsxs(SE,{children:[c.jsx(_E,{children:"Бронирование"}),c.jsxs(py,{children:[c.jsx("span",{children:"Все бронирования"})," /"," ",c.jsx(tn,{to:"mybooking",style:{color:"#000",fontWeight:700},children:"Мои бронирования"})]}),c.jsx(Ud,{to:"create",children:"Забронировать"})]}),c.jsx(CE,{children:e.map(r=>c.jsx(fy,{pathToEdit:"create",item:r},r.inn))})]})}),UE=C.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 30px;
`,VE=C.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 14px;
  background: ${e=>e.theme.colors.primary};
  border-radius: ${e=>e.theme.borderRadius};
`,WE=C.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  background: ${e=>e.theme.colors.primary};
  border-radius: ${e=>e.theme.borderRadius};
`,QE=C.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 14px;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.primary};
`,HE=C.h1`
  color: ${e=>e.theme.colors.text};
  font-family: "Rubik";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 130.5%;
`,GE=pt(()=>{const[e,t]=E.useState([]),{getBookingsByUser:n}=ms,{user:r}=Li;return E.useEffect(()=>{const i=n(r==null?void 0:r.id);t(i)},[]),c.jsxs(UE,{children:[c.jsxs(VE,{children:[c.jsx(HE,{children:"Мои бронирования"}),c.jsxs(py,{children:[c.jsx(tn,{to:"../../booking",style:{color:"#000",fontWeight:700},children:"Все бронирования"})," ","/ ",c.jsx("span",{children:"Мои бронирования"})]}),c.jsx(Ud,{to:"../../booking/create",children:"Забронировать"})]}),c.jsx(WE,{children:c.jsx(QE,{children:e.map(i=>c.jsx(fy,{pathToEdit:"../create",item:i},i.inn))})})]})}),YE=C.div`
  padding: 20px 14px;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.primary};
`,qE=C.form`
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
`,hu=C(Ve)`
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
`,Pr=C(Ve)`
  max-width: 100%;

  @media screen and (max-width: 680px) {
    font-size: 14px;
    padding: 5px 7px;
    min-width: 120px;

    &::placeholder {
      font-size: 10px;
    }
  }
`,XE=C.textarea`
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
`,ZE=C(Di)`
  grid-area: submit;
  justify-self: center;
`,uh=pt(()=>{const{setInfo:e}=ra,{id:t}=YA(),{user:n}=Li,{getBookingById:r,list:i}=ms,[o,a]=E.useState(),[l,s]=E.useState(!1),[u,d]=E.useState({id:i.length+1,userID:n?n.id:0,status:"pending",date:new Date().toISOString(),inn:"",name:"",address:"",mark:"",count:0,dealerManager:"",dealerName:"",manager:"",commentary:"",phone:""});E.useEffect(()=>{t!==void 0&&a(r(Number(t))),console.log(1)},[]),E.useEffect(()=>{o&&d({...o,id:u.id,userID:u.userID,status:u.status,date:u.date})},[o]),E.useEffect(()=>{u.inn.length===8?s(!0):s(!1),console.log(u)},[u]);const h=y=>A=>{d({...u,[y]:A})},g=y=>{y.preventDefault(),aC(u).result&&(console.log("request to server",u),e({text:"Заявка на бронирование принята в обработку",link:"../booking",buttonText:"Продолжить",isVisible:!0}))};return c.jsx(YE,{children:c.jsxs(qE,{onSubmit:g,children:[c.jsx(hu,{type:"number",minLength:8,maxLength:8,required:!0,placeholder:"ИНН",area:"inn",value:u.inn,onChange:h("inn")}),l?c.jsxs(c.Fragment,{children:[c.jsx(Pr,{type:"text",required:!0,placeholder:"Конечный потребитель",name:"company",area:"name",onChange:h("name"),value:u.name}),c.jsx(Pr,{type:"text",required:!0,placeholder:"Регион, город потребителя",name:"address",area:"address",onChange:h("address"),value:u.address})]}):"",c.jsx(Pr,{type:"text",required:!0,placeholder:"Марка оборудования",name:"mark",area:"mark",onChange:h("mark"),value:u.mark}),c.jsx(hu,{type:"number",required:!0,placeholder:"Количество",name:"count",area:"count",onChange:h("count"),value:u.count.toString()}),c.jsx(Pr,{type:"text",required:!0,placeholder:"Дилер",name:"dName",area:"dName",onChange:h("dealerName"),value:u.dealerName}),c.jsx(Pr,{type:"text",required:!0,placeholder:"Отв. менеджер дилера",name:"dManager",area:"dManager",onChange:h("dealerManager"),value:u.dealerManager}),c.jsx(hu,{type:"tel",required:!0,placeholder:"Номер телефона",name:"phone",area:"phone",onChange:h("phone"),value:u.phone}),c.jsx(Pr,{type:"text",required:!0,placeholder:"Отв. менеджер AIRSYST",name:"manager",area:"manager",onChange:h("manager"),value:u.manager}),c.jsx(XE,{placeholder:"Комментарий",area:"commentary",value:u.commentary,onChange:y=>{d({...u,commentary:y.currentTarget.value})}}),c.jsx(ZE,{})]})})}),JE=C.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.primary};
`,ek=C.h2`
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 16px;
`,mu=C.div`
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
`,tk=C.div`
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
`,nk=C.form`
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
`,Xn=C(Ve)`
  max-width: 270px;

  @media screen and (max-width: 1169px) {
    min-width: 190px;
    width: auto;
  }

  @media screen and (max-width: 680px) {
    max-width: 100%;
  }
`,ch=C(jc)`
  @media screen and (max-width: 680px) {
    font-size: 12px;
    display: inline-flex;
    justify-content: flex-start;
    gap: 3px;
  }
`;function rk(){const{user:e,setUserData:t}=Li,[n,r]=E.useState({name:"",phone:"",email:"",isAgent:!1,organization:"",uAddress:"",isAddressEquals:!1,fAddress:"",INN:""}),[i,o]=E.useState({result:!1,badFields:[]});E.useEffect(()=>{e&&e.data&&r({name:e.data.name,phone:e.data.phone,email:e.email,isAgent:e.data.isAgent,organization:e.data.companyName,uAddress:e.data.legalAddress,isAddressEquals:e.data.legalAddress===e.data.physicalAddress,fAddress:e.data.physicalAddress,INN:e.data.inn})},[]),E.useEffect(()=>{n.isAddressEquals&&n.fAddress&&(n.fAddress=null),console.log(n)},[n]);const a=u=>E.useCallback(d=>{r({...n,[u]:d})},[u,n]),l=a("fAddress"),s=u=>{u.preventDefault();const d=cy(n);o(d),d.result&&(console.log("push to server"),t({name:n.name,phone:n.phone,companyName:n.organization,legalAddress:n.uAddress,physicalAddress:n.fAddress!==null?n.fAddress:n.uAddress,inn:n.INN,isAgent:n.isAgent},n.email))};return c.jsx(JE,{children:c.jsxs(nk,{onSubmit:s,children:[c.jsx(ek,{children:"Введите контактные данные"}),c.jsxs(ch,{children:[" ","Уже покупаете у нас? Войдите в"," ",c.jsx(uy,{to:"/login",children:"личный кабинет"})]}),c.jsxs(mu,{children:[c.jsx(Xn,{type:"text",placeholder:"Имя",name:"firstName",required:!0,onChange:a("name"),className:i.badFields.find(u=>u==="name")?"error":"",value:n.name}),c.jsx(Xn,{type:"tel",placeholder:"Телефон",name:"phone",required:!0,onChange:a("phone"),className:i.badFields.find(u=>u==="phone")?"error":"",value:n.phone}),c.jsx(Xn,{type:"email",placeholder:"Email",required:!0,onChange:a("email"),className:i.badFields.find(u=>u==="email")?"error":"",value:n.email})]}),c.jsx(xr,{id:"agent",onChange:a("isAgent"),isChecked:n.isAgent,children:"Я представитель юридического лица или ИП"}),c.jsx(ch,{children:"Данной организации еше нет в нашей базе. Пожалуйста, введите по ней информацию."}),c.jsxs(mu,{children:[c.jsx(Xn,{type:"text",placeholder:"Название организации*",name:"organization",required:!0,onChange:a("organization"),className:i.badFields.find(u=>u==="organization")?"error":"",value:n.organization}),c.jsxs(tk,{children:[c.jsx(Xn,{type:"text",placeholder:"Юридический адрес*",name:"address",required:!0,onChange:a("uAddress"),className:i.badFields.find(u=>u==="uAddress")?"error":"",value:n.uAddress}),c.jsx(xr,{id:"isAddressEquals",onChange:a("isAddressEquals"),isChecked:n.isAddressEquals,children:"Совпадает с физическим"})]}),n.isAddressEquals?void 0:c.jsx(Xn,{type:"text",placeholder:"Физический адрес*",name:"address",required:!0,onChange:l,className:i.badFields.find(u=>u==="fAddress")?"error":"",value:n.fAddress!==null?n.fAddress:""})]}),c.jsx(mu,{children:c.jsx(Xn,{type:"number",placeholder:"ИНН*",name:"INN",required:!0,minLength:8,maxLength:8,onChange:a("INN"),className:i.badFields.find(u=>u==="inn")?"error":"",value:n.INN})}),c.jsx(Di,{value:"Изменить"})]})})}const ik=C.section`
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
`,ok=C.h1`
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
`,ak=C.p`
  margin-bottom: 18px;
`,lk=C(Sr)`
  color: #195cdf;
  margin-bottom: 2px;
  text-align: center;
`,sk=C(Sr)`
  color: #195cdf;
  text-transform: uppercase;
  text-align: center;
`,uk=C.form`
  width: 370px;
  display: flex;
  flex-direction: column;
  gap: 9px;

  @media screen and (max-width: 470px) {
    width: 100%;
    max-width: 370px;
  }
`,ck=pt(()=>{const{setUser:e}=Li,[t,n]=E.useState({email:"",password:"",rememberMe:!1}),[r,i]=E.useState({result:!1,badFields:[]}),o=l=>E.useCallback(s=>{n({...t,[l]:s})},[l,t]),a=l=>{l.preventDefault();const s=rC(t);i(s),s.result&&(console.log(s,t),e({id:1,login:"admin",email:t.email,data:void 0,token:"1"}))};return c.jsxs(ik,{children:[c.jsx(ok,{children:"Авторизация"}),c.jsx(ak,{children:"Пожалуйста, авторизуйтесь"}),c.jsxs(uk,{onSubmit:a,children:[c.jsx(Ve,{type:"email",name:"email",placeholder:"Email",value:t.email,onChange:o("email"),required:!0,className:r.badFields.find(l=>l==="email")?"error":""}),c.jsx(Ve,{type:"password",name:"password",placeholder:"Пароль",value:t.password,onChange:o("password"),required:!0}),c.jsx(xr,{id:"rememberMe",isChecked:t.rememberMe,onChange:o("rememberMe"),children:"Запомнить меня на этом компьютере"}),c.jsx(Di,{value:"Войти"}),c.jsx(lk,{to:"forgot",children:"Забыли пароль?"}),c.jsx(sk,{to:"register",children:"Зарегистрироваться"})]})]})}),dk=C.section`
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
`,fk=C.h1`
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
`;C.p`
  margin-bottom: 18px;
`;C(Sr)`
  color: #195cdf;
  margin-bottom: 2px;
  text-align: center;
`;C(Sr)`
  color: #195cdf;
  text-transform: uppercase;
  text-align: center;
`;const pk=C.form`
  width: 370px;
  display: flex;
  flex-direction: column;
  gap: 9px;

  @media screen and (max-width: 470px) {
    width: 100%;
    max-width: 370px;
  }
`,hk=pt(()=>{const{setInfo:e}=ra,[t,n]=E.useState({email:"",password:"",repeatedPassword:""}),[r,i]=E.useState({result:!1,badFields:[]}),o=l=>E.useCallback(s=>{n({...t,[l]:s})},[l,t]),a=l=>{l.preventDefault();const s=oC(t);i(s),s.result&&(console.log(s,t),e({text:"Вам на почту было отправлено сообщения для завершения регистрации",link:"/",buttonText:"Понятно",isVisible:!0}))};return c.jsxs(dk,{children:[c.jsx(Wd,{}),c.jsx(fk,{children:"Зарегистрироваться"}),c.jsxs(pk,{onSubmit:a,children:[c.jsx(Ve,{type:"email",name:"email",placeholder:"Email",value:t.email,onChange:o("email"),required:!0,className:r.badFields.find(l=>l==="email")?"error":""}),c.jsx(Ve,{type:"password",name:"password",placeholder:"Пароль",value:t.password,onChange:o("password"),required:!0}),c.jsx(Ve,{type:"password",name:"password",placeholder:"Пароль",value:t.repeatedPassword,onChange:o("repeatedPassword"),required:!0,className:r.badFields.find(l=>l==="repeatedPassword")?"error":""}),c.jsx(Di,{value:"Зарегистрировтаься"})]})]})}),mk=C.section`
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
`,gk=C.h1`
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
`;C.p`
  margin-bottom: 18px;
`;C(Sr)`
  color: #195cdf;
  margin-bottom: 2px;
  text-align: center;
`;C(Sr)`
  color: #195cdf;
  text-transform: uppercase;
  text-align: center;
`;const vk=C.form`
  width: 370px;
  display: flex;
  flex-direction: column;
  gap: 9px;

  @media screen and (max-width: 470px) {
    width: 100%;
    max-width: 370px;
  }
`,yk=C.p`
  margin-bottom: 23px;
  display: inline-flex;
  color: #868686;
  font-size: 14px;
  line-height: 120%;
`,xk=pt(()=>{const{setInfo:e}=ra,[t,n]=E.useState({email:""}),[r,i]=E.useState({result:!1,badFields:[]}),o=l=>E.useCallback(s=>{n({...t,[l]:s})},[l,t]),a=l=>{l.preventDefault();const s=iC(t);i(s),s.result&&(console.log(s,t),e({text:"Вам на почту было отправлено сообщения для восстановления пароля",link:"/",buttonText:"Понятно",isVisible:!0}))};return c.jsxs(mk,{children:[c.jsx(Wd,{}),c.jsx(gk,{children:"Забыли свой пароль?"}),c.jsxs(vk,{onSubmit:a,children:[c.jsx(Ve,{type:"email",name:"email",placeholder:"Email",value:t.email,onChange:o("email"),required:!0,className:r.badFields.find(l=>l==="email")?"error":""}),c.jsx(yk,{children:"Контрольная строка для смены пароля, а также ваши регистрационные данные, будут высланы вам по Email"}),c.jsx(Di,{value:"Выслать"})]})]})});function Ak(e){const t=localStorage.getItem("user");return e||t!=null?e!=null&&e.data?c.jsx(te,{path:"/",element:c.jsx(QS,{user:e}),children:c.jsxs(te,{path:"/",element:c.jsx(yC,{}),children:[c.jsx(te,{index:!0,element:c.jsx(lh,{})}),c.jsx(te,{path:"messages",element:c.jsx(lh,{})}),c.jsx(te,{path:"store",element:c.jsx(zC,{})}),c.jsxs(te,{path:"documentation",children:[c.jsx(te,{index:!0,element:c.jsx(KC,{})}),c.jsx(te,{path:"instructions",element:c.jsx(Oa,{itemsHref:"/",title:"Инструкции по эксплуатации"})}),c.jsx(te,{path:"certificates",element:c.jsx(Oa,{itemsHref:"/",title:"Сертификаты"})}),c.jsx(te,{path:"techinfo",element:c.jsx(Oa,{itemsHref:"/",title:"Техническая информация"})}),c.jsx(te,{path:"typedcomertial",element:c.jsx(Oa,{itemsHref:"/",title:"Образцы коммерческих предложений"})})]}),c.jsxs(te,{path:"booking",children:[c.jsx(te,{index:!0,element:c.jsx(BE,{})}),c.jsx(te,{path:"mybooking",element:c.jsx(GE,{})}),c.jsx(te,{path:"create",element:c.jsx(uh,{})}),c.jsx(te,{path:"create/:id",element:c.jsx(uh,{})})]}),c.jsx(te,{path:"price",element:c.jsx(MC,{})}),c.jsx(te,{path:"my",element:c.jsx(c.Fragment,{children:"my"})}),c.jsx(te,{path:"account",element:c.jsx(rk,{})}),c.jsx(te,{path:"history",element:c.jsx(AE,{})})]})}):c.jsxs(c.Fragment,{children:[c.jsx(te,{path:"/",element:c.jsx(sC,{})}),c.jsx(te,{path:"*",element:c.jsx($p,{to:"/"})})," "]}):c.jsxs(te,{path:"/",children:[c.jsx(te,{path:"/",element:c.jsx(ck,{})}),c.jsx(te,{path:"/forgot",element:c.jsx(xk,{})}),c.jsx(te,{path:"*",element:c.jsx($p,{to:"/"})}),c.jsx(te,{path:"/register",element:c.jsx(hk,{})})]})}const wk=pt(()=>{const{current:e}=kr,{user:t,setUser:n}=Li;E.useEffect(()=>{const i=localStorage.getItem("user");return console.log(i),i!=null&&n({...JSON.parse(i)}),()=>{t!=null&&localStorage.setItem("user",JSON.stringify(t))}},[]);const r=gw(Ac(c.jsx(te,{path:"/",children:Ak(t)})));return c.jsx(uC,{bgcolor:e==null?void 0:e.backgroundColor,children:c.jsx(Z1,{theme:tA,children:c.jsx(cC,{bgcolor:e==null?void 0:e.backgroundColor,children:c.jsx(sw,{router:r})})})})});gu.createRoot(document.getElementById("root")).render(c.jsx(wk,{}));
