import{r as f,i as l,c as p,G as N,k as t,j as e,f as m,d as v,F as y,A as F,L as A}from"./index-2133a5e5.js";const w=A({name:"SystemMenu"}),g=Object.assign(w,{setup(k){const _=[{id:"menuName",label:"菜单名称"},{id:"sort",label:"排序"},{id:"path",label:"访问路径"},{id:"describe",label:"描述"}],o=f({form:{menuName:"",path:""},tableData:[{menuName:"首页1",path:"/home1",sort:1,describe:"FiveAdmin页面示例"},{menuName:"首页2",path:"/home2",sort:2,describe:"FiveAdmin页面示例"},{menuName:"首页3",path:"/home3",sort:3,describe:"FiveAdmin页面示例"},{menuName:"首页4",path:"/home4",sort:4,describe:"FiveAdmin页面示例"},{menuName:"首页5",path:"/home5",sort:5,describe:"FiveAdmin页面示例"},{menuName:"首页6",path:"/home6",sort:6,describe:"FiveAdmin页面示例"},{menuName:"首页7",path:"/home7",sort:7,describe:"FiveAdmin页面示例"},{menuName:"首页8",path:"/home8",sort:8,describe:"FiveAdmin页面示例"},{menuName:"首页9",path:"/home9",sort:9,describe:"FiveAdmin页面示例"},{menuName:"首页10",path:"/home10",sort:10,describe:"FiveAdmin页面示例"}]});return(V,i)=>{const s=l("el-input"),d=l("el-form-item"),n=l("el-button"),c=l("el-form"),u=l("el-card"),r=l("el-table-column"),h=l("el-table"),b=l("el-main");return p(),N(b,null,{default:t(()=>[e(u,{shadow:"never"},{default:t(()=>[e(c,{inline:""},{default:t(()=>[e(d,{label:"菜单名称："},{default:t(()=>[e(s,{modelValue:o.form.menuName,"onUpdate:modelValue":i[0]||(i[0]=a=>o.form.menuName=a),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(d,{label:"路径："},{default:t(()=>[e(s,{modelValue:o.form.path,"onUpdate:modelValue":i[1]||(i[1]=a=>o.form.path=a),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(d,null,{default:t(()=>[e(n,{type:"primary"},{default:t(()=>[m(" 查询 ")]),_:1}),e(n,{type:"success"},{default:t(()=>[m(" 新增 ")]),_:1}),e(n,{type:"warning"},{default:t(()=>[m(" 导出 ")]),_:1})]),_:1})]),_:1})]),_:1}),e(u,{shadow:"never",class:"mt-5"},{default:t(()=>[e(h,{data:o.tableData,border:"",stripe:""},{default:t(()=>[e(r,{type:"index",width:"50"}),(p(),v(y,null,F(_,a=>e(r,{key:a.id,prop:a.id,label:a.label,width:a.width},null,8,["prop","label","width"])),64)),e(r,{label:"操作",width:"150",align:"center",fixed:"right"},{default:t(()=>[e(n,{type:"primary",size:"small",link:""},{default:t(()=>[m(" 查看 ")]),_:1}),e(n,{type:"primary",size:"small",link:""},{default:t(()=>[m(" 修改 ")]),_:1}),e(n,{type:"primary",size:"small",link:""},{default:t(()=>[m(" 删除 ")]),_:1})]),_:1})]),_:1},8,["data"])]),_:1})]),_:1})}}});export{g as default};