import{A as M,B as W,u as l,z as j,_ as B,C as N,y as I,D as L,E as F,F as G,r as $,o as w,n as x,a as q,b as d,G as H,w as T,T as J,c as C,H as K,I as U,J as Q,K as p,L as m}from"./index-fe45e52b.js";function X(t){return M()?(W(t),!0):!1}function D(t){return typeof t=="function"?t():l(t)}const b=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Y=Object.prototype.toString,Z=t=>Y.call(t)==="[object Object]",O=()=>{},ee=te();function te(){var t;return b&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function g(t){var r;const i=D(t);return(r=i==null?void 0:i.$el)!=null?r:i}const z=b?window:void 0;function k(...t){let r,i,n,f;if(typeof t[0]=="string"||Array.isArray(t[0])?([i,n,f]=t,r=z):[r,i,n,f]=t,!r)return O;Array.isArray(i)||(i=[i]),Array.isArray(n)||(n=[n]);const _=[],E=()=>{_.forEach(s=>s()),_.length=0},u=(s,c,e,o)=>(s.addEventListener(c,e,o),()=>s.removeEventListener(c,e,o)),y=j(()=>[g(r),D(f)],([s,c])=>{if(E(),!s)return;const e=Z(c)?{...c}:c;_.push(...i.flatMap(o=>n.map(a=>u(s,o,a,e))))},{immediate:!0,flush:"post"}),h=()=>{y(),E()};return X(h),h}let P=!1;function oe(t,r,i={}){const{window:n=z,ignore:f=[],capture:_=!0,detectIframe:E=!1}=i;if(!n)return;ee&&!P&&(P=!0,Array.from(n.document.body.children).forEach(e=>e.addEventListener("click",O)),n.document.documentElement.addEventListener("click",O));let u=!0;const y=e=>f.some(o=>{if(typeof o=="string")return Array.from(n.document.querySelectorAll(o)).some(a=>a===e.target||e.composedPath().includes(a));{const a=g(o);return a&&(e.target===a||e.composedPath().includes(a))}}),s=[k(n,"click",e=>{const o=g(t);if(!(!o||o===e.target||e.composedPath().includes(o))){if(e.detail===0&&(u=!y(e)),!u){u=!0;return}r(e)}},{passive:!0,capture:_}),k(n,"pointerdown",e=>{const o=g(t);u=!y(e)&&!!(o&&!e.composedPath().includes(o))},{passive:!0}),E&&k(n,"blur",e=>{setTimeout(()=>{var o;const a=g(t);((o=n.document.activeElement)==null?void 0:o.tagName)==="IFRAME"&&!(a!=null&&a.contains(n.document.activeElement))&&r(e)},0)})].filter(Boolean);return()=>s.forEach(e=>e())}const ne={class:"h-full flex items-center"},se=["onClick"],v="18",re=Object.assign({name:"Tools"},{__name:"index",setup(t){const{appConfig:r}=N(),i=I(),n=p(()=>m(()=>import("./Dark-4f52759b.js"),["assets/Dark-4f52759b.js","assets/index-fe45e52b.js","assets/index-d13d0e0b.css","assets/Dark-3b59e436.css"])),f=p(()=>m(()=>import("./Locale-9d6916c0.js"),["assets/Locale-9d6916c0.js","assets/index-fe45e52b.js","assets/index-d13d0e0b.css","assets/Locale-a646434c.css"])),_=p(()=>m(()=>import("./Settings-87e65a5d.js"),["assets/Settings-87e65a5d.js","assets/index-fe45e52b.js","assets/index-d13d0e0b.css","assets/Settings-e4210b46.css"])),E=p(()=>m(()=>import("./ElSize-b7f1b6d0.js"),["assets/ElSize-b7f1b6d0.js","assets/index-fe45e52b.js","assets/index-d13d0e0b.css","assets/ElSize-106abe03.css"])),u=p(()=>m(()=>import("./FullScreen-db465b88.js"),["assets/FullScreen-db465b88.js","assets/index-b3e6dc1f.js","assets/index-fe45e52b.js","assets/index-d13d0e0b.css","assets/FullScreen-0839b06e.css"])),y=p(()=>m(()=>import("./Refresh-678336c8.js"),["assets/Refresh-678336c8.js","assets/index-fe45e52b.js","assets/index-d13d0e0b.css","assets/Refresh-e6f05f51.css"])),h=p(()=>m(()=>import("./NavSearch-577cda86.js"),["assets/NavSearch-577cda86.js","assets/index-fe45e52b.js","assets/index-d13d0e0b.css","assets/NavSearch-d47dc1d3.css"])),s=I(!1);oe(i,()=>{r.trigger==="click"&&s.value&&(s.value=!1)});function c(){r.trigger==="click"&&(s.value=!s.value)}function e(S){r.trigger==="hover"&&(s.value=S)}const o=L(()=>s.value?F:G),a=L(()=>r.headerToolsOmit?s.value?"300px":"32px":"initial");return(S,A)=>{const R=$("el-icon");return w(),x("div",ne,[q("div",{ref_key:"moreRef",ref:i,class:"h-full flex items-center tools justify-end",style:Q({maxWidth:a.value}),onMouseleave:A[1]||(A[1]=V=>e(!1))},[d(l(h),{size:v}),d(l(f),{size:v}),d(l(n),{size:v}),d(l(u),{size:v}),d(l(E),{size:v}),l(r).headerToolsOmit?(w(),x("div",{key:0,class:"tools-item",title:"展开",onClick:H(c,["stop"]),onMouseenter:A[0]||(A[0]=V=>e(!0))},[d(R,null,{default:T(()=>[d(J,{mode:"out-in",name:"scale"},{default:T(()=>[(w(),C(K(o.value)))]),_:1})]),_:1})],40,se)):U("",!0)],36),(w(),C(l(_),{key:0,size:v})),d(l(y),{size:v})])}}}),ae=B(re,[["__scopeId","data-v-d1c91eed"]]);export{ae as default};
