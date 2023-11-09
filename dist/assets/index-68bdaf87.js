import{U as m,f as o,b as i,C as b,h as n,j,g as s,l as k,d as e,c,x as h,F as g,s as u}from"./index-d8c91cc1.js";const y="five-admin",D="1.0.0",F={dev:"vite",build:"vite build",preview:"vite preview",preinstall:"npx only-allow pnpm",lint:"eslint .","lint:fix":"eslint . --fix"},V={"@element-plus/icons-vue":"^2.1.0","@vueuse/core":"^10.5.0",axios:"^1.6.0",dayjs:"^1.11.10",echarts:"^5.4.3","element-plus":"^2.4.2",lodash:"^4.17.21",mitt:"^3.0.1",mockjs:"^1.1.0",nprogress:"^0.2.0",pinia:"^2.1.7","pinia-plugin-persistedstate":"^3.2.0",screenfull:"^6.0.2","tree-operate-j":"^1.3.9",vue:"^3.3.8","vue-i18n":"^9.6.5","vue-router":"^4.2.5"},B={"@antfu/eslint-config":"^0.39.8","@iconify/vue":"^4.1.1","@vitejs/plugin-vue":"^4.4.0",autoprefixer:"^10.4.16",eslint:"^8.53.0",postcss:"^8.4.31",sass:"^1.69.5",tailwindcss:"^3.3.5",vite:"^4.5.0","vite-plugin-mock":"2.9.6","vite-plugin-svg-icons":"^2.0.1","vite-plugin-vue-setup-extend-plus":"^0.1.0"},d={name:y,version:D,private:!0,scripts:F,dependencies:V,devDependencies:B},C=e("p",null," 项目基于 JavaScript、Vue3、Vite4、Pinia、ElementPlus、Tailwindcss 等技术栈开发。 为开发后台管理系统提供开箱即用的解决方案，使开发者可以轻松构建功能齐全的管理系统界面。 使用 FiveAdmin，开发者可以通过简单的配置，快速搭建后台管理系统，提高开发效率。 ",-1),E=e("br",null,null,-1),A=e("p",null," 作者在写FiveAdmin之前市面上已经有大量的同品优秀开源项目，FiveAdmin 可能并不比它们优秀。 但是作者在现有的优秀项目中没有找到一款满足自己要求的。 本着打造一款符合自己的技术栈要求的目的写的这么个项目，同时也为了深入学习并熟悉前端的通用技术。 ",-1),N=e("br",null,null,-1),O=e("p",null," 使用过程中如果有好的建议，欢迎指教。 ",-1),z=e("div",null,[e("span",null,"相关依赖")],-1),P=e("li",{style:{"margin-bottom":"20px","font-size":"20px"}},[e("strong",null,"dependencies")],-1),S={class:"ml-5"},T=e("li",{style:{"margin-bottom":"20px","font-size":"20px"}},[e("strong",null,"devDependencies")],-1),H={class:"ml-5"},J=j({name:"Home"}),q=Object.assign(J,{setup(L){const r=m([]),_=m([]);return Object.keys(d.dependencies).forEach(t=>{r.value.push({name:t,version:d.dependencies[t]})}),Object.keys(d.devDependencies).forEach(t=>{_.value.push({name:t,version:d.devDependencies[t]})}),(t,R)=>{const v=o("el-card"),a=o("el-col"),f=o("el-row"),x=o("el-main"),w=o("el-container");return i(),b(w,null,{default:n(()=>[s(x,null,{default:n(()=>[s(f,{gutter:20},{default:n(()=>[s(a,{span:10,offset:0},{default:n(()=>[s(v,{shadow:"never"},{header:n(()=>[k(" 简介 ")]),default:n(()=>[C,E,A,N,O]),_:1})]),_:1}),s(a,{span:14,offset:0},{default:n(()=>[s(v,{shadow:"never"},{header:n(()=>[z]),default:n(()=>[s(f,{gutter:20},{default:n(()=>[s(a,{span:12,offset:0},{default:n(()=>[e("ul",null,[P,(i(!0),c(g,null,h(r.value,(l,p)=>(i(),c("li",{key:p},[e("span",null,u(l.name),1),e("span",S,u(l.version),1)]))),128))])]),_:1}),s(a,{span:12,offset:0},{default:n(()=>[e("ul",null,[T,(i(!0),c(g,null,h(_.value,(l,p)=>(i(),c("li",{key:p},[e("span",null,u(l.name),1),e("span",H,u(l.version),1)]))),128))])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{q as default};
