import{m as t}from"./mitt-4d5f3f5b.js";import{K as a,o as n,a as s,b as r,c as u,l as c,d as l,s as m}from"./index-abc5645d.js";const f={__name:"Mitt2",setup(p){const e=a(0);return n(()=>{t.on("onCountChange",o=>{e.value=o})}),s(()=>{t.off("onCountChange")}),(o,i)=>(r(),u("div",null,[c(" 这是子组件2，监听数据 "),l("span",null,m(e.value),1)]))}};export{f as default};