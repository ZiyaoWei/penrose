var A=Object.defineProperty;var c=(e,o)=>A(e,"name",{value:o,configurable:!0});import{g as D}from"./iframe-db756ec9.js";var re={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function te(e){var o=Object.create(null);return function(i){return o[i]===void 0&&(o[i]=e(i)),o[i]}}c(te,"memoize");var j={exports:{}},r={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=typeof Symbol=="function"&&Symbol.for,x=t?Symbol.for("react.element"):60103,O=t?Symbol.for("react.portal"):60106,s=t?Symbol.for("react.fragment"):60107,a=t?Symbol.for("react.strict_mode"):60108,p=t?Symbol.for("react.profiler"):60114,l=t?Symbol.for("react.provider"):60109,y=t?Symbol.for("react.context"):60110,P=t?Symbol.for("react.async_mode"):60111,m=t?Symbol.for("react.concurrent_mode"):60111,d=t?Symbol.for("react.forward_ref"):60112,S=t?Symbol.for("react.suspense"):60113,z=t?Symbol.for("react.suspense_list"):60120,b=t?Symbol.for("react.memo"):60115,v=t?Symbol.for("react.lazy"):60116,G=t?Symbol.for("react.block"):60121,W=t?Symbol.for("react.fundamental"):60117,L=t?Symbol.for("react.responder"):60118,K=t?Symbol.for("react.scope"):60119;function n(e){if(typeof e=="object"&&e!==null){var o=e.$$typeof;switch(o){case x:switch(e=e.type,e){case P:case m:case s:case p:case a:case S:return e;default:switch(e=e&&e.$$typeof,e){case y:case d:case v:case b:case l:return e;default:return o}}case O:return o}}}c(n,"z");function M(e){return n(e)===m}c(M,"A");r.AsyncMode=P;r.ConcurrentMode=m;r.ContextConsumer=y;r.ContextProvider=l;r.Element=x;r.ForwardRef=d;r.Fragment=s;r.Lazy=v;r.Memo=b;r.Portal=O;r.Profiler=p;r.StrictMode=a;r.Suspense=S;r.isAsyncMode=function(e){return M(e)||n(e)===P};r.isConcurrentMode=M;r.isContextConsumer=function(e){return n(e)===y};r.isContextProvider=function(e){return n(e)===l};r.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===x};r.isForwardRef=function(e){return n(e)===d};r.isFragment=function(e){return n(e)===s};r.isLazy=function(e){return n(e)===v};r.isMemo=function(e){return n(e)===b};r.isPortal=function(e){return n(e)===O};r.isProfiler=function(e){return n(e)===p};r.isStrictMode=function(e){return n(e)===a};r.isSuspense=function(e){return n(e)===S};r.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===s||e===m||e===p||e===a||e===S||e===z||typeof e=="object"&&e!==null&&(e.$$typeof===v||e.$$typeof===b||e.$$typeof===l||e.$$typeof===y||e.$$typeof===d||e.$$typeof===W||e.$$typeof===L||e.$$typeof===K||e.$$typeof===G)};r.typeOf=n;j.exports=r;var q=j.exports,w=q,H={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},V={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Y={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},E={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},h={};h[w.ForwardRef]=Y;h[w.Memo]=E;function C(e){return w.isMemo(e)?E:h[e.$$typeof]||H}c(C,"getStatics");var B=Object.defineProperty,J=Object.getOwnPropertyNames,I=Object.getOwnPropertySymbols,Q=Object.getOwnPropertyDescriptor,U=Object.getPrototypeOf,_=Object.prototype;function F(e,o,i){if(typeof o!="string"){if(_){var $=U(o);$&&$!==_&&F(e,$,i)}var u=J(o);I&&(u=u.concat(I(o)));for(var T=C(e),R=C(o),g=0;g<u.length;++g){var f=u[g];if(!V[f]&&!(i&&i[f])&&!(R&&R[f])&&!(T&&T[f])){var N=Q(o,f);try{B(e,f,N)}catch{}}}}return e}c(F,"hoistNonReactStatics");var X=F;const oe=D(X);export{oe as h,te as m,re as u};
//# sourceMappingURL=hoist-non-react-statics.cjs-f739bd48.js.map
