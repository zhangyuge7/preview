import{_ as x,i as b,C as h,y as I,r as t,o as f,n as k,b as e,w as o,u as n,P as y,a as _,O as d,Q as U,d as B,T as N,c as S,H as V,R as T,U as D,f as $}from"./index-fe45e52b.js";const A={class:"pl-5 pr-5 flex items-center"},E={class:"el-dropdown-link text-[16px]"},H={__name:"UserInfo",setup(O){const r=b(),{appConfig:m}=h(),u=I(!1);function g(s){s==="logout"?r.logout():s==="userinfo"&&$.push("/user-info")}return(s,c)=>{const v=t("el-avatar"),l=t("el-icon"),i=t("el-dropdown-item"),w=t("el-dropdown-menu"),C=t("el-dropdown");return f(),k("div",A,[e(C,{trigger:n(m).trigger,onVisibleChange:c[0]||(c[0]=a=>u.value=a),onCommand:g},{dropdown:o(()=>[e(w,null,{default:o(()=>[e(i,{command:"userinfo"},{default:o(()=>[e(l,null,{default:o(()=>[e(n(y))]),_:1}),_("span",null,d(s.$t("user.personalCenter")),1)]),_:1}),e(i,{divided:"",command:"logout"},{default:o(()=>[e(l,null,{default:o(()=>[e(n(U))]),_:1}),_("span",null,d(s.$t("user.logout")),1)]),_:1})]),_:1})]),default:o(()=>{var a,p;return[_("span",E,[e(v,{class:"mr-3",src:((a=n(r).userInfo)==null?void 0:a.avatar)||"/src/assets/images/default-avatar.png"},null,8,["src"]),B(" "+d((p=n(r).userInfo)==null?void 0:p.nickName)+" ",1),e(l,{class:"el-icon--right"},{default:o(()=>[e(N,{name:"scale",mode:"out-in"},{default:o(()=>[(f(),S(V(u.value?n(T):n(D))))]),_:1})]),_:1})])]}),_:1},8,["trigger"])])}}},Q=x(H,[["__scopeId","data-v-1c085548"]]);export{Q as default};
