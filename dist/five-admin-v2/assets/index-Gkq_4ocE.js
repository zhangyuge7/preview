import{A as M,B as W,u as c,z as j,_ as B,C as N,y as I,D as L,E as F,F as G,r as $,o as A,n as P,a as q,b as d,G as H,w as T,T as J,H as K,c as x,I as U,J as Q,K as p,L as m}from"./index-9SX9vvbj.js";function X(t){return M()?(W(t),!0):!1}function C(t){return typeof t=="function"?t():c(t)}const D=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Y=Object.prototype.toString,Z=t=>Y.call(t)==="[object Object]",O=()=>{},ee=te();function te(){var t,n;return D&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((n=window==null?void 0:window.navigator)==null?void 0:n.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function y(t){var n;const i=C(t);return(n=i==null?void 0:i.$el)!=null?n:i}const z=D?window:void 0;function k(...t){let n,i,s,f;if(typeof t[0]=="string"||Array.isArray(t[0])?([i,s,f]=t,n=z):[n,i,s,f]=t,!n)return O;Array.isArray(i)||(i=[i]),Array.isArray(s)||(s=[s]);const _=[],w=()=>{_.forEach(r=>r()),_.length=0},u=(r,l,e,o)=>(r.addEventListener(l,e,o),()=>r.removeEventListener(l,e,o)),E=j(()=>[y(n),C(f)],([r,l])=>{if(w(),!r)return;const e=Z(l)?{...l}:l;_.push(...i.flatMap(o=>s.map(a=>u(r,o,a,e))))},{immediate:!0,flush:"post"}),h=()=>{E(),w()};return X(h),h}let b=!1;function oe(t,n,i={}){const{window:s=z,ignore:f=[],capture:_=!0,detectIframe:w=!1}=i;if(!s)return O;ee&&!b&&(b=!0,Array.from(s.document.body.children).forEach(e=>e.addEventListener("click",O)),s.document.documentElement.addEventListener("click",O));let u=!0;const E=e=>f.some(o=>{if(typeof o=="string")return Array.from(s.document.querySelectorAll(o)).some(a=>a===e.target||e.composedPath().includes(a));{const a=y(o);return a&&(e.target===a||e.composedPath().includes(a))}}),r=[k(s,"click",e=>{const o=y(t);if(!(!o||o===e.target||e.composedPath().includes(o))){if(e.detail===0&&(u=!E(e)),!u){u=!0;return}n(e)}},{passive:!0,capture:_}),k(s,"pointerdown",e=>{const o=y(t);u=!E(e)&&!!(o&&!e.composedPath().includes(o))},{passive:!0}),w&&k(s,"blur",e=>{setTimeout(()=>{var o;const a=y(t);((o=s.document.activeElement)==null?void 0:o.tagName)==="IFRAME"&&!(a!=null&&a.contains(s.document.activeElement))&&n(e)},0)})].filter(Boolean);return()=>r.forEach(e=>e())}const ne={class:"h-full flex items-center"},v="18",se=Object.assign({name:"Tools"},{__name:"index",setup(t){const{appConfig:n}=N(),i=I(),s=p(()=>m(()=>import("./Dark-ABoywSIv.js"),__vite__mapDeps([0,1,2,3]))),f=p(()=>m(()=>import("./Locale-lVPEtpx5.js"),__vite__mapDeps([4,1,2,5]))),_=p(()=>m(()=>import("./Settings-NR_vzxrg.js"),__vite__mapDeps([6,1,2,7]))),w=p(()=>m(()=>import("./ElSize-cFU2B9_e.js"),__vite__mapDeps([8,1,2,9]))),u=p(()=>m(()=>import("./FullScreen-hUxOLb6O.js"),__vite__mapDeps([10,11,1,2,12]))),E=p(()=>m(()=>import("./Refresh-707qlape.js"),__vite__mapDeps([13,1,2,14]))),h=p(()=>m(()=>import("./NavSearch-2v6Cv87G.js"),__vite__mapDeps([15,1,2,16]))),r=I(!1);oe(i,()=>{n.trigger==="click"&&r.value&&(r.value=!1)});function l(){n.trigger==="click"&&(r.value=!r.value)}function e(S){n.trigger==="hover"&&(r.value=S)}const o=L(()=>r.value?F:G),a=L(()=>n.headerToolsOmit?r.value?"300px":"32px":"initial");return(S,g)=>{const R=$("el-icon");return A(),P("div",ne,[q("div",{ref_key:"moreRef",ref:i,class:"h-full flex items-center tools justify-end",style:Q({maxWidth:a.value}),onMouseleave:g[1]||(g[1]=V=>e(!1))},[d(c(h),{size:v}),d(c(f),{size:v}),d(c(s),{size:v}),d(c(u),{size:v}),d(c(w),{size:v}),c(n).headerToolsOmit?(A(),P("div",{key:0,class:"tools-item",title:"展开",onClick:H(l,["stop"]),onMouseenter:g[0]||(g[0]=V=>e(!0))},[d(R,null,{default:T(()=>[d(J,{mode:"out-in",name:"scale"},{default:T(()=>[(A(),x(K(o.value)))]),_:1})]),_:1})],32)):U("",!0)],36),(A(),x(c(_),{key:0,size:v})),d(c(E),{size:v})])}}}),ie=B(se,[["__scopeId","data-v-d1c91eed"]]);export{ie as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Dark-ABoywSIv.js","assets/index-9SX9vvbj.js","assets/index-hUEg28ij.css","assets/Dark--jgMsWfm.css","assets/Locale-lVPEtpx5.js","assets/Locale-kgz9WGT6.css","assets/Settings-NR_vzxrg.js","assets/Settings--10dDMQL.css","assets/ElSize-cFU2B9_e.js","assets/ElSize-rqf9_k7i.css","assets/FullScreen-hUxOLb6O.js","assets/index-Ep-l9GRB.js","assets/FullScreen-FhnUzBis.css","assets/Refresh-707qlape.js","assets/Refresh-0aEacbhb.css","assets/NavSearch-2v6Cv87G.js","assets/NavSearch-TMCyea1m.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}