import{z as t,k as o,B as a,l as s,o as u,n as r,d as c,a as l,x as p}from"./index-BQUKEkB1.js";const m={__name:"Mitt2",setup(_){const e=t(0);return o(()=>{a.on("onCountChange",n=>{e.value=n})}),s(()=>{a.off("onCountChange")}),(n,d)=>(u(),r("div",null,[c(" 这是子组件2，监听数据 "),l("span",null,p(e.value),1)]))}};export{m as default};