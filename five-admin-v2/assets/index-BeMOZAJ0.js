import{_ as m,i as p,j as v,k as f,l as w,m as g,o as r,n as i,a as t,q as _,s as n,v as l,d as y,f as x,t as b}from"./index-BQUKEkB1.js";const h={class:"login-body"},C={class:"login-box"},k=b('<div class="hand" data-v-1fed13de></div><div class="hand hand-r" data-v-1fed13de></div><div class="arms" data-v-1fed13de><div class="arm" data-v-1fed13de></div><div class="arm arm-r" data-v-1fed13de></div></div>',3),B=[k],L={class:"input-box"},P={__name:"index",setup(S){const u=p(),o=v({loginLoading:!1,form:{username:"admin",password:"admin"},passwordClass:"owl"}),e={async onSubmit(){o.loginLoading=!0;try{await u.login({...o.form},x.currentRoute.value.query.replace||"/")}catch{}o.loginLoading=!1},enterKey(d){(d.keyCode?d.keyCode:d.which?d.which:d.charCode)===13&&!o.loginLoading&&e.onSubmit()},onPasswordFocus(){o.passwordClass="owl password"},onPasswordBlur(){o.passwordClass="owl"}};return f(()=>{document.addEventListener("keyup",e.enterKey)}),w(()=>{document.removeEventListener("keyup",e.enterKey)}),(d,s)=>{const c=g("loading");return r(),i("div",h,[t("div",C,[t("div",{id:"owl",class:_(o.passwordClass)},B,2),t("form",L,[n(t("input",{id:"username","onUpdate:modelValue":s[0]||(s[0]=a=>o.form.username=a),autocomplete:"off",type:"text",placeholder:"账号"},null,512),[[l,o.form.username]]),n(t("input",{id:"password","onUpdate:modelValue":s[1]||(s[1]=a=>o.form.password=a),autocomplete:"off",type:"password",placeholder:"密码",onFocus:s[2]||(s[2]=(...a)=>e.onPasswordFocus&&e.onPasswordFocus(...a)),onBlur:s[3]||(s[3]=(...a)=>e.onPasswordBlur&&e.onPasswordBlur(...a))},null,544),[[l,o.form.password]]),n((r(),i("button",{type:"button",onClick:s[4]||(s[4]=(...a)=>e.onSubmit&&e.onSubmit(...a))},[y(" 登录 ")])),[[c,o.loginLoading]])])])])}}},V=m(P,[["__scopeId","data-v-1fed13de"]]);export{V as default};