import{i as k}from"./index-Ddg5t14L.js";import{_ as L,j as S,k as B,r as o,m as I,o as u,c as f,w as t,b as a,a as e,d as p,s as P,n as h,y as j,F as C,x as D,p as H,g as N}from"./index-JEJVI5Fw.js";const d=c=>(H("data-v-1b8e09b5"),c=c(),N(),c),V=d(()=>e("div",{class:"flex justify-between"},[e("div",{class:"box-item"},[e("div",{style:{background:"linear-gradient(to right, #1ed4a4, #8cffc8)"}},[e("span",null,"150"),e("span",null,"全部商品")])]),e("div",{class:"box-item"},[e("div",{style:{background:"linear-gradient(to right, #f7917e, #fcb3b3)"}},[e("span",null,"300"),e("span",null,"全部库存")])]),e("div",{class:"box-item"},[e("div",{style:{background:"linear-gradient(to right, #eea237, #ffca8b)"}},[e("span",null,"120"),e("span",null,"采购订单")])]),e("div",{class:"box-item"},[e("div",{style:{background:"linear-gradient(to right, #4d88ff, #8db3ff)"}},[e("span",null,"100"),e("span",null,"待采购订单")])])],-1)),z=d(()=>e("div",{id:"char1",class:"w-full h-full"},null,-1)),A={class:"flex justify-between"},E=d(()=>e("span",null,"火爆竞品",-1)),F=d(()=>e("span",null,"工具",-1)),O=Object.assign({name:"Workbench"},{__name:"index",setup(c){const n=S({tableLoading:!1,hotProductList:[],apps:[{name:"发货助手"},{name:"店铺监控"},{name:"所有订单"},{name:"更多应用"}]}),m={initChar(){const i=[{name:"02-11",value1:200,value2:100,value3:231,value4:13},{name:"02-12",value1:210,value2:100,value3:100,value4:20},{name:"02-13",value1:200,value2:120,value3:131,value4:4},{name:"02-14",value1:130,value2:110,value3:31,value4:8},{name:"02-15",value1:300,value2:80,value3:12,value4:1},{name:"02-16",value1:200,value2:60,value3:31,value4:69},{name:"02-17",value1:100,value2:100,value3:81,value4:23}],_=k(document.getElementById("char1")),r={grid:{top:"20%",left:"2%",right:"2%",bottom:"2%",containLabel:!0},tooltip:{trigger:"axis"},legend:[{top:"top",left:"center",data:["订单","完成","取消","差评"],itemWidth:15,itemHeight:10,itemGap:15,borderRadius:4}],xAxis:{type:"category",data:i.map(l=>l.name)},yAxis:[{type:"value"}],series:[{name:"订单",type:"line",data:i.map(l=>l.value1)},{name:"完成",type:"line",data:i.map(l=>l.value2)},{name:"取消",type:"line",data:i.map(l=>l.value3)},{name:"差评",type:"line",data:i.map(l=>l.value4)}]};_.setOption(r)},initHotProductList(){n.tableLoading=!0,setTimeout(()=>{n.hotProductList=[{title:"震震果实",store:"娜美的黑店",exposure:5e3,price:89.8,mSales:80},{title:"橡胶果实",store:"娜美的黑店",exposure:5e3,price:89.8,mSales:80},{title:"香香果实",store:"娜美的黑店",exposure:5e3,price:89.8,mSales:80},{title:"分裂果实",store:"娜美的黑店",exposure:5e3,price:89.8,mSales:80},{title:"香克斯的左手",store:"娜美的黑店",exposure:5e3,price:89.8,mSales:80},{title:"宾克斯的美酒",store:"娜美的黑店",exposure:5e3,price:89.8,mSales:80}],n.tableLoading=!1},1e3)}};return B(()=>{m.initChar(),m.initHotProductList()}),(i,_)=>{const r=o("el-card"),l=o("el-button"),s=o("el-table-column"),g=o("el-table"),v=o("el-col"),y=o("el-row"),x=o("el-main"),w=I("loading");return u(),f(x,null,{default:t(()=>[V,a(r,{shadow:"always","body-class":"h-[35vh]",class:"mt-5"},{default:t(()=>[z]),_:1}),a(y,{gutter:20,class:"mt-5"},{default:t(()=>[a(v,{span:18,offset:0},{default:t(()=>[a(r,{shadow:"always"},{header:t(()=>[e("div",A,[E,a(l,{type:"primary",link:""},{default:t(()=>[p(" 更多>> ")]),_:1})])]),default:t(()=>[P((u(),f(g,{data:n.hotProductList,style:{width:"100%"}},{default:t(()=>[a(s,{type:"index",label:"序号",width:"60"}),a(s,{prop:"title",label:"商品标题","show-overflow-tooltip":"",width:"280"}),a(s,{prop:"store",label:"所属店铺"}),a(s,{prop:"exposure",label:"曝光量",align:"right"}),a(s,{prop:"price",label:"价格(￥)",align:"right"}),a(s,{prop:"mSales",label:"月销量",align:"right"}),a(s,{label:"操作",align:"center"},{default:t(()=>[a(l,{type:"primary",link:"",size:"small"},{default:t(()=>[p(" 对比 ")]),_:1}),a(l,{type:"primary",link:"",size:"small"},{default:t(()=>[p(" 详情 ")]),_:1})]),_:1})]),_:1},8,["data"])),[[w,n.tableLoading]])]),_:1})]),_:1}),a(v,{span:6,offset:0},{default:t(()=>[a(r,{shadow:"always"},{header:t(()=>[F]),default:t(()=>[(u(!0),h(C,null,j(n.apps,b=>(u(),h("div",{key:b.name,class:"apps-box-item"},[e("span",null,D(b.name),1)]))),128))]),_:1})]),_:1})]),_:1})]),_:1})}}}),G=L(O,[["__scopeId","data-v-1b8e09b5"]]);export{G as default};
