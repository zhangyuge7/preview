import{u as l,r as u,o as m,a as c,b as p,c as v,d as n,n as w,w as t,v as r,e as _}from"./index-d8c91cc1.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";const g={class:"login-body"},y={class:"login-box"},x=_('<div class="hand" data-v-08a78912></div><div class="hand hand-r" data-v-08a78912></div><div class="arms" data-v-08a78912><div class="arm" data-v-08a78912></div><div class="arm arm-r" data-v-08a78912></div></div>',3),b=[x],C={class:"input-box"},h={__name:"index",setup(B){const i=l(),o=u({loginLoading:!1,form:{username:"admin",password:"admin"},passwordClass:"owl"}),a={async onSubmit(){o.loginLoading=!0,a.doLogin()},async doLogin(){await i.login({...o.form}),o.loginLoading=!1},enterKey(e){(e.keyCode?e.keyCode:e.which?e.which:e.charCode)===13&&!loginLoading.value&&a.onSubmit()},onPasswordFocus(){o.passwordClass="owl password"},onPasswordBlur(){o.passwordClass="owl"}};return m(()=>{}),c(()=>{document.removeEventListener("keyup",a.enterKey)}),(e,s)=>(p(),v("div",g,[n("div",y,[n("div",{id:"owl",class:w(o.passwordClass)},b,2),n("div",C,[t(n("input",{"onUpdate:modelValue":s[0]||(s[0]=d=>o.form.username=d),type:"text",placeholder:"账号"},null,512),[[r,o.form.username]]),t(n("input",{id:"password","onUpdate:modelValue":s[1]||(s[1]=d=>o.form.password=d),type:"password",placeholder:"密码",onFocus:s[2]||(s[2]=(...d)=>a.onPasswordFocus&&a.onPasswordFocus(...d)),onBlur:s[3]||(s[3]=(...d)=>a.onPasswordBlur&&a.onPasswordBlur(...d))},null,544),[[r,o.form.password]]),n("button",{onClick:s[4]||(s[4]=(...d)=>a.onSubmit&&a.onSubmit(...d))}," 登录 ")])])]))}},P=f(h,[["__scopeId","data-v-08a78912"]]);export{P as default};
