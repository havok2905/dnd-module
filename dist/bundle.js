!function(e,n){for(var t in n)e[t]=n[t]}(exports,function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=26)}([function(e,n,t){"use strict";e.exports=t(7)},function(e,n,t){e.exports=t(9)()},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[t].concat(a).concat([o]).join("\n")}var i;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];null!=i[0]&&r[i[0]]||(t&&!i[2]?i[2]=t:t&&(i[2]="("+i[2]+") and ("+t+")"),n.push(i))}},n}},function(e,n,t){var r,o,a={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),l=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var r=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}}(),s=null,c=0,u=[],f=t(12);function p(e,n){for(var t=0;t<e.length;t++){var r=e[t],o=a[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(g(r.parts[i],n))}else{var l=[];for(i=0;i<r.parts.length;i++)l.push(g(r.parts[i],n));a[r.id]={id:r.id,refs:1,parts:l}}}}function d(e,n){for(var t=[],r={},o=0;o<e.length;o++){var a=e[o],i=n.base?a[0]+n.base:a[0],l={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(l):t.push(r[i]={id:i,parts:[l]})}return t}function m(e,n){var t=l(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),u.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=l(e.insertAt.before,t);t.insertBefore(n,o)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=u.indexOf(e);n>=0&&u.splice(n,1)}function y(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return t.nc}();r&&(e.attrs.nonce=r)}return b(n,e.attrs),m(e,n),n}function b(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function g(e,n){var t,r,o,a;if(n.transform&&e.css){if(!(a="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=a}if(n.singleton){var i=c++;t=s||(s=y(n)),r=E.bind(null,t,i,!1),o=E.bind(null,t,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(n,e.attrs),m(e,n),n}(n),r=function(e,n,t){var r=t.css,o=t.sourceMap,a=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||a)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(i),l&&URL.revokeObjectURL(l)}.bind(null,t,n),o=function(){h(t),t.href&&URL.revokeObjectURL(t.href)}):(t=y(n),r=function(e,n){var t=n.css,r=n.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){h(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=i()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=d(e,n);return p(t,n),function(e){for(var r=[],o=0;o<t.length;o++){var i=t[o];(l=a[i.id]).refs--,r.push(l)}e&&p(d(e,n),n);for(o=0;o<r.length;o++){var l;if(0===(l=r[o]).refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete a[l.id]}}}};var v,x=(v=[],function(e,n){return v[e]=n,v.filter(Boolean).join("\n")});function E(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}},function(e,n,t){var r=t(11);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){var r=t(13);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){var r=t(20);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){"use strict";
/** @license React v16.8.3
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=t(8),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,s=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,u=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112,m=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,b="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var n=arguments.length-1,t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<n;r++)t+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,n,t,r,o,a,i,l){if(!e){if(e=void 0,void 0===n)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[t,r,o,a,i,l],c=0;(e=Error(n.replace(/%s/g,function(){return s[c++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",t)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x={};function E(e,n,t){this.props=e,this.context=n,this.refs=x,this.updater=t||v}function O(){}function w(e,n,t){this.props=e,this.context=n,this.refs=x,this.updater=t||v}E.prototype.isReactComponent={},E.prototype.setState=function(e,n){"object"!=typeof e&&"function"!=typeof e&&null!=e&&g("85"),this.updater.enqueueSetState(this,e,n,"setState")},E.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=E.prototype;var S=w.prototype=new O;S.constructor=w,r(S,E.prototype),S.isPureReactComponent=!0;var R={current:null},k={current:null},j=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function C(e,n,t){var r=void 0,o={},i=null,l=null;if(null!=n)for(r in void 0!==n.ref&&(l=n.ref),void 0!==n.key&&(i=""+n.key),n)j.call(n,r)&&!_.hasOwnProperty(r)&&(o[r]=n[r]);var s=arguments.length-2;if(1===s)o.children=t;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:a,type:e,key:i,ref:l,props:o,_owner:k.current}}function q(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var T=/\/+/g,P=[];function I(e,n,t,r){if(P.length){var o=P.pop();return o.result=e,o.keyPrefix=n,o.func=t,o.context=r,o.count=0,o}return{result:e,keyPrefix:n,func:t,context:r,count:0}}function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function N(e,n,t){return null==e?0:function e(n,t,r,o){var l=typeof n;"undefined"!==l&&"boolean"!==l||(n=null);var s=!1;if(null===n)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(n.$$typeof){case a:case i:s=!0}}if(s)return r(o,n,""===t?"."+U(n,0):t),1;if(s=0,t=""===t?".":t+":",Array.isArray(n))for(var c=0;c<n.length;c++){var u=t+U(l=n[c],c);s+=e(l,u,r,o)}else if(u=null===n||"object"!=typeof n?null:"function"==typeof(u=b&&n[b]||n["@@iterator"])?u:null,"function"==typeof u)for(n=u.call(n),c=0;!(l=n.next()).done;)s+=e(l=l.value,u=t+U(l,c++),r,o);else"object"===l&&g("31","[object Object]"==(r=""+n)?"object with keys {"+Object.keys(n).join(", ")+"}":r,"");return s}(e,"",n,t)}function U(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return n[e]})}(e.key):n.toString(36)}function L(e,n){e.func.call(e.context,n,e.count++)}function $(e,n,t){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,n,e.count++),Array.isArray(e)?A(e,r,t,function(e){return e}):null!=e&&(q(e)&&(e=function(e,n){return{$$typeof:a,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||n&&n.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+t)),r.push(e))}function A(e,n,t,r,o){var a="";null!=t&&(a=(""+t).replace(T,"$&/")+"/"),N(e,$,n=I(n,a,r,o)),M(n)}function z(){var e=R.current;return null===e&&g("307"),e}var D={Children:{map:function(e,n,t){if(null==e)return e;var r=[];return A(e,r,null,n,t),r},forEach:function(e,n,t){if(null==e)return e;N(e,L,n=I(null,null,n,t)),M(n)},count:function(e){return N(e,function(){return null},null)},toArray:function(e){var n=[];return A(e,n,null,function(e){return e}),n},only:function(e){return q(e)||g("143"),e}},createRef:function(){return{current:null}},Component:E,PureComponent:w,createContext:function(e,n){return void 0===n&&(n=null),(e={$$typeof:f,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:d,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,n){return{$$typeof:h,type:e,compare:void 0===n?null:n}},useCallback:function(e,n){return z().useCallback(e,n)},useContext:function(e,n){return z().useContext(e,n)},useEffect:function(e,n){return z().useEffect(e,n)},useImperativeHandle:function(e,n,t){return z().useImperativeHandle(e,n,t)},useDebugValue:function(){},useLayoutEffect:function(e,n){return z().useLayoutEffect(e,n)},useMemo:function(e,n){return z().useMemo(e,n)},useReducer:function(e,n,t){return z().useReducer(e,n,t)},useRef:function(e){return z().useRef(e)},useState:function(e){return z().useState(e)},Fragment:l,StrictMode:s,Suspense:m,createElement:C,cloneElement:function(e,n,t){null==e&&g("267",e);var o=void 0,i=r({},e.props),l=e.key,s=e.ref,c=e._owner;if(null!=n){void 0!==n.ref&&(s=n.ref,c=k.current),void 0!==n.key&&(l=""+n.key);var u=void 0;for(o in e.type&&e.type.defaultProps&&(u=e.type.defaultProps),n)j.call(n,o)&&!_.hasOwnProperty(o)&&(i[o]=void 0===n[o]&&void 0!==u?u[o]:n[o])}if(1===(o=arguments.length-2))i.children=t;else if(1<o){u=Array(o);for(var f=0;f<o;f++)u[f]=arguments[f+2];i.children=u}return{$$typeof:a,type:e.type,key:l,ref:s,props:i,_owner:c}},createFactory:function(e){var n=C.bind(null,e);return n.type=e,n},isValidElement:q,version:"16.8.3",unstable_ConcurrentMode:p,unstable_Profiler:c,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:R,ReactCurrentOwner:k,assign:r}},B={default:D},F=B&&D||B;e.exports=F.default||F},function(e,n,t){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map(function(e){return n[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,n){for(var t,i,l=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var c in t=Object(arguments[s]))o.call(t,c)&&(l[c]=t[c]);if(r){i=r(t);for(var u=0;u<i.length;u++)a.call(t,i[u])&&(l[i[u]]=t[i[u]])}}return l}},function(e,n,t){"use strict";var r=t(10);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,a,i){if(i!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:a,resetWarningCache:o};return t.PropTypes=t,t}},function(e,n,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,'html, body {\n  font-size: 16px;\n  font-family: "Open Sans", serif;\n  color: #444444;\n  line-height: 1.5;\n  background-color: #eeeeee; }\n\nh1 {\n  font-size: 49px;\n  font-family: "Open Sans", serif;\n  color: #444444; }\n\nh2 {\n  font-size: 39px;\n  font-family: "Open Sans", serif;\n  color: #444444;\n  border-bottom: solid 1px #eeeeee; }\n\na {\n  text-decoration: none;\n  color: #2196f3; }\n  a:hover {\n    color: #0069c0; }\n\nimg {\n  width: 100%; }\n\n.bordered-container {\n  margin: 20px 0px;\n  padding: 20px;\n  border-radius: 10px;\n  border: 1px solid #ddd; }\n',""])},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var o,a=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?t+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,'html, body {\n  font-size: 16px;\n  font-family: "Open Sans", serif;\n  color: #444444;\n  line-height: 1.5;\n  background-color: #eeeeee; }\n\nh1 {\n  font-size: 49px;\n  font-family: "Open Sans", serif;\n  color: #444444; }\n\nh2 {\n  font-size: 39px;\n  font-family: "Open Sans", serif;\n  color: #444444;\n  border-bottom: solid 1px #eeeeee; }\n\na {\n  text-decoration: none;\n  color: #2196f3; }\n  a:hover {\n    color: #0069c0; }\n\nimg {\n  width: 100%; }\n\n.button {\n  background-color: #2196f3;\n  border: none;\n  color: #ffffff;\n  font-size: 16px;\n  padding: 10px 40px;\n  border-radius: 5px;\n  outline: none;\n  cursor: pointer; }\n  .button:hover {\n    background-color: #0069c0; }\n  .button:active {\n    background-color: #6ec6ff; }\n',""])},function(e,n,t){var r=t(15);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,".columns {\n  display: flex; }\n  .columns > * {\n    width: 50%;\n    box-sizing: border-box;\n    padding: 0 20px; }\n",""])},function(e,n,t){var r=t(17);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,'html, body {\n  font-size: 16px;\n  font-family: "Open Sans", serif;\n  color: #444444;\n  line-height: 1.5;\n  background-color: #eeeeee; }\n\nh1 {\n  font-size: 49px;\n  font-family: "Open Sans", serif;\n  color: #444444; }\n\nh2 {\n  font-size: 39px;\n  font-family: "Open Sans", serif;\n  color: #444444;\n  border-bottom: solid 1px #eeeeee; }\n\na {\n  text-decoration: none;\n  color: #2196f3; }\n  a:hover {\n    color: #0069c0; }\n\nimg {\n  width: 100%; }\n\n.emphasis-block {\n  padding: 20px;\n  margin: 20px 0px;\n  border-radius: 10px;\n  background-color: #4caf50;\n  color: #ffffff; }\n',""])},function(e,n,t){var r=t(19);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,'html, body {\n  font-size: 16px;\n  font-family: "Open Sans", serif;\n  color: #444444;\n  line-height: 1.5;\n  background-color: #eeeeee; }\n\nh1 {\n  font-size: 49px;\n  font-family: "Open Sans", serif;\n  color: #444444; }\n\nh2 {\n  font-size: 39px;\n  font-family: "Open Sans", serif;\n  color: #444444;\n  border-bottom: solid 1px #eeeeee; }\n\na {\n  text-decoration: none;\n  color: #2196f3; }\n  a:hover {\n    color: #0069c0; }\n\nimg {\n  width: 100%; }\n\n.monster-block ul, .monster-block ol {\n  margin-left: -40px;\n  list-style-type: none; }\n\n.monster-block dt {\n  display: inline;\n  margin-right: 10px;\n  font-weight: 900; }\n\n.monster-block dd {\n  display: inline;\n  margin: 0; }\n\n.monster-block hr {\n  border-top: 1px solid #eeeeee;\n  border-bottom: none; }\n',""])},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,".table {\n  width: 100%;\n  text-align: left; }\n  .table td, .table th {\n    padding: 10px; }\n  .table--center {\n    text-align: center; }\n",""])},function(e,n,t){var r=t(22);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,'html, body {\n  font-size: 16px;\n  font-family: "Open Sans", serif;\n  color: #444444;\n  line-height: 1.5;\n  background-color: #eeeeee; }\n\nh1 {\n  font-size: 49px;\n  font-family: "Open Sans", serif;\n  color: #444444; }\n\nh2 {\n  font-size: 39px;\n  font-family: "Open Sans", serif;\n  color: #444444;\n  border-bottom: solid 1px #eeeeee; }\n\na {\n  text-decoration: none;\n  color: #2196f3; }\n  a:hover {\n    color: #0069c0; }\n\nimg {\n  width: 100%; }\n\n.page {\n  background-color: #ffffff;\n  box-shadow: 0px 0px 10px 0px #444444;\n  border-radius: 10px;\n  padding: 20px;\n  margin: 20px auto;\n  max-width: 1060px; }\n',""])},function(e,n,t){!function(){"use strict";var e={roll:function(n,t){var r=e.verboseRoll(n),o=0;if(t)return r;for(var a in r)o+=r[a];return o},verboseRoll:function(e){var n,t,r,o=1,a=0,i=[];if(!e)throw new Error("Missing dice parameter.");if("string"==typeof e)if(n=e.match(/^\s*(\d+)?\s*d\s*(\d+)\s*(.*?)\s*$/)){if(n[1]&&(o=parseInt(n[1])),n[2]&&(e=parseInt(n[2])),n[3]){r=n[3].match(/([+-]\s*\d+)/g);for(var l=0;l<r.length;l++)a+=parseInt(r[l].replace(/\s/g,""))}}else parseInt(e);if(isNaN(e))return[];for(l=0;l<o;l++)t=0!==e?Math.floor(Math.random()*e+1):0,i.push(t);return i=i.sort(function(e,n){return e-n}),0!=a&&i.push(a),i}};if("undefined"!=typeof window)window.d20=e;else for(var t in e)n[t]=e[t]}()},function(e,n,t){var r=t(25);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,'html, body {\n  font-size: 16px;\n  font-family: "Open Sans", serif;\n  color: #444444;\n  line-height: 1.5;\n  background-color: #eeeeee; }\n\nh1 {\n  font-size: 49px;\n  font-family: "Open Sans", serif;\n  color: #444444; }\n\nh2 {\n  font-size: 39px;\n  font-family: "Open Sans", serif;\n  color: #444444;\n  border-bottom: solid 1px #eeeeee; }\n\na {\n  text-decoration: none;\n  color: #2196f3; }\n  a:hover {\n    color: #0069c0; }\n\nimg {\n  width: 100%; }\n\n.roll-table__row--highlighted {\n  background-color: #4caf50;\n  color: #ffffff; }\n',""])},function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(1),i=t.n(a);t(4),t(5);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,n){return!n||"object"!==l(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,n){return(f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var p,d,m,h=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=c(this,u(n).call(this,e))).state={display:!1},t}var t,a,i;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&f(e,n)}(n,r["Component"]),t=n,(a=[{key:"toggleDisplay",value:function(){this.setState({display:!this.state.display})}},{key:"render",value:function(){return o.a.createElement("div",{className:"bordered-container"},o.a.createElement("h1",{id:this.props.idSlug,"data-qa-target":"collapsable-container-title"},this.props.title),o.a.createElement("button",{className:"button","data-qa-target":"collapsable-container-button",onClick:this.toggleDisplay.bind(this)},"Toggle"),o.a.createElement("div",{"data-qa-target":"collapsable-container-children"},this.state.display?this.props.children:null))}}])&&s(t.prototype,a),i&&s(t,i),n}();p=h,d="propTypes",m={title:i.a.string.isRequired,idSlug:i.a.string},d in p?Object.defineProperty(p,d,{value:m,enumerable:!0,configurable:!0,writable:!0}):p[d]=m;t(14);var y=function(e){var n=e.children;return o.a.createElement("div",{className:"columns"},n)},b=function(e){var n=e.title,t=e.idSlug,r=e.children;return o.a.createElement("div",{className:"bordered-container"},o.a.createElement("h1",{id:t},n),r)};b.propTypes={title:i.a.string.isRequired,idSlug:i.a.string};t(16);var g=function(e){var n=e.children,t=e.idSlug;return o.a.createElement("section",{id:t,className:"emphasis-block"},n)};g.propTypes={idSlug:i.a.string};t(18),t(6);var v={getModifier:function(e){return Math.floor((e-10)/2)}};var x={ac:i.a.number.isRequired,actions:i.a.arrayOf(i.a.shape({title:i.a.string.isRequired,description:i.a.string.isRequired})),alignment:i.a.string.isRequired,challenge:i.a.string.isRequired,conditionImmunities:i.a.arrayOf(i.a.string),damageImmunities:i.a.arrayOf(i.a.string),damageResistances:i.a.arrayOf(i.a.string),damageWeaknesses:i.a.arrayOf(i.a.string),description:i.a.string,features:i.a.arrayOf(i.a.shape({title:i.a.string.isRequired,description:i.a.string.isRequired})),hp:i.a.number.isRequired,languages:i.a.arrayOf(i.a.string),reactions:i.a.arrayOf(i.a.shape({title:i.a.string.isRequired,description:i.a.string.isRequired})),savingThrows:i.a.arrayOf(i.a.string),senses:i.a.arrayOf(i.a.string),size:i.a.string.isRequired,skills:i.a.arrayOf(i.a.string),speed:i.a.string.isRequired,stats:i.a.shape({str:i.a.number.isRequired,dex:i.a.number.isRequired,con:i.a.number.isRequired,int:i.a.number.isRequired,wis:i.a.number.isRequired,cha:i.a.number.isRequired}).isRequired,type:i.a.string.isRequired},E=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}({actions:[],conditionImmunities:[],damageImmunities:[],damageResistances:[],damageWeaknesses:[],features:[],reactions:[],savingThrows:[],senses:[],skills:[],languages:[]},"senses",[]),O=function(e){var n=e.ac,t=e.actions,a=e.alignment,i=e.challenge,l=e.conditionImmunities,s=e.damageImmunities,c=e.damageResistances,u=e.damageWeaknesses,f=e.description,p=e.features,d=e.hp,m=e.languages,h=e.reactions,y=e.savingThrows,b=e.senses,g=e.size,x=e.skills,E=e.speed,O=e.stats,w=e.type,S=function(e,n,t){if(t&&!(t.length<=0))return o.a.createElement(r.Fragment,null,o.a.createElement("p",null,o.a.createElement("strong",null,e)),o.a.createElement("ul",null,t.map(function(e){return o.a.createElement("li",{"data-qa-target":n},e)})))},R=function(e,n,t){if(t&&!(t.length<=0))return o.a.createElement(r.Fragment,null,o.a.createElement("h2",null,e),o.a.createElement("dl",{"data-qa-target":n},t.map(function(e){return o.a.createElement("div",null,o.a.createElement("dt",null,e.title),o.a.createElement("dd",null,e.description))})))};return o.a.createElement("section",{className:"monster-block"},o.a.createElement("p",{"data-qa-target":"sub-title"},g," ",w,", ",a),o.a.createElement("hr",null),o.a.createElement("dl",null,o.a.createElement("div",null,o.a.createElement("dt",null,"Armor Class"),o.a.createElement("dd",{"data-qa-target":"ac"},n)),o.a.createElement("div",null,o.a.createElement("dt",null,"Hit Points"),o.a.createElement("dd",{"data-qa-target":"hp"},d)),o.a.createElement("div",null,o.a.createElement("dt",null,"Speed"),o.a.createElement("dd",{"data-qa-target":"speed"},E))),o.a.createElement("hr",null),o.a.createElement("table",{className:"table table--center"},o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"STR"),o.a.createElement("th",{scope:"col"},"DEX"),o.a.createElement("th",{scope:"col"},"CON"),o.a.createElement("th",{scope:"col"},"INT"),o.a.createElement("th",{scope:"col"},"WIS"),o.a.createElement("th",{scope:"col"},"CHA")),o.a.createElement("tr",null,o.a.createElement("td",null,O.str),o.a.createElement("td",null,O.dex),o.a.createElement("td",null,O.con),o.a.createElement("td",null,O.int),o.a.createElement("td",null,O.wis),o.a.createElement("td",null,O.cha)),o.a.createElement("tr",null,o.a.createElement("td",null,v.getModifier(O.str)),o.a.createElement("td",null,v.getModifier(O.dex)),o.a.createElement("td",null,v.getModifier(O.con)),o.a.createElement("td",null,v.getModifier(O.int)),o.a.createElement("td",null,v.getModifier(O.wis)),o.a.createElement("td",null,v.getModifier(O.cha)))),o.a.createElement("hr",null),S("Saving Throws","saving-throws",y),S("Skills","skills",x),S("Condition Immunities","condition-immunities",l),S("Damage Immunities","damage-immunities",s),S("Damage Resistances","damage-resistances",c),S("Damage Weaknesses","damage-weaknesses",u),S("Languages","languages",m),S("Senses","senses",b),o.a.createElement("p",{"data-qa-target":"challenge"},o.a.createElement("strong",null,"Challenge")," ",i),function(){if(f)return o.a.createElement(r.Fragment,null,o.a.createElement("h2",null,"Description"),o.a.createElement("p",{"data-qaTarget":"description"},f))}(),R("Features","features",p),R("Reactions","reactions",h),R("Actions","actions",t))};O.propTypes=x,O.defaultProps=E;t(21);var w=function(e){var n=e.children;return o.a.createElement("article",{className:"page"},n)},S=(t(23),{rollDice:function(e,n){return d20.roll("".concat(e,"d").concat(n))}});t(24);function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,n){return!n||"object"!==R(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,n){return(C=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var q=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=j(this,_(n).call(this,e))).state={roll:null},t}var t,a,i;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&C(e,n)}(n,r["Component"]),t=n,(a=[{key:"findMax",value:function(){var e=1;return this.props.items.forEach(function(n){n.rollRange.forEach(function(n){n>e&&(e=n)})}),e}},{key:"roll",value:function(){var e=this.findMax(),n=S.rollDice(1,e);this.setState({roll:n})}},{key:"rollTableRows",value:function(){var e=this;return this.props.items.map(function(n,t){var r=n.rollRange[0],a=n.rollRange[1],i=e.state.roll,l=i===r||i>=r&&i<=a?"roll-table__row--highlighted":"";return o.a.createElement("tr",{key:t,className:l},o.a.createElement("td",null,n.rollRange.join(",")),o.a.createElement("td",null,n.description))})}},{key:"render",value:function(){return o.a.createElement("section",{className:"roll-table"},o.a.createElement("button",{className:"button",onClick:this.roll.bind(this)},"Roll"),o.a.createElement("p",null,"Roll: ",this.state.roll),o.a.createElement("table",{className:"table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"Roll"),o.a.createElement("th",{scope:"col"},"Description"))),o.a.createElement("tbody",null,this.rollTableRows())))}}])&&k(t.prototype,a),i&&k(t,i),n}();q.propTypes={items:i.a.arrayOf(i.a.shape({rollRange:i.a.arrayOf(i.a.number).isRequired,description:i.a.string.isRequired})).isRequired};var T=function e(n){var t=n.contentsList;return o.a.createElement("ol",{className:"table-of-contents-list"},t.map(function(n){return o.a.createElement("li",null,o.a.createElement("a",{href:n.link},n.title),n.children&&n.children.length>0&&o.a.createElement(e,{contentsList:n.children}))}))};T.propTypes={contentsList:i.a.arrayOf(i.a.shape({title:i.a.string.isRequired,link:i.a.string.isRequired,children:i.a.array}))},t.d(n,"CollapsableContainer",function(){return h}),t.d(n,"Columns",function(){return y}),t.d(n,"Container",function(){return b}),t.d(n,"EmphasisBlock",function(){return g}),t.d(n,"MonsterBlock",function(){return O}),t.d(n,"Page",function(){return w}),t.d(n,"RollTable",function(){return q}),t.d(n,"TableOfContents",function(){return T})}]));