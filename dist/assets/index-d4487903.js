import{r as C,f as r,b as c,C as N,h as l,g as e,l as a,c as v,F as y,x as F,j as A}from"./index-d8c91cc1.js";const h=A({name:"SystemRole"}),x=Object.assign(h,{setup(w){const u=[{id:"roleName",label:"角色名称"},{id:"roleCode",label:"角色编码"},{id:"sort",label:"排序"},{id:"describe",label:"描述"}],d=C({form:{roleName:"",roleCode:""},tableData:[{roleName:"角色1",roleCode:"role1",sort:1,describe:"FiveAdmin页面示例"},{roleName:"角色2",roleCode:"role2",sort:2,describe:"FiveAdmin页面示例"},{roleName:"角色3",roleCode:"role3",sort:3,describe:"FiveAdmin页面示例"},{roleName:"角色4",roleCode:"role4",sort:4,describe:"FiveAdmin页面示例"},{roleName:"角色5",roleCode:"role5",sort:5,describe:"FiveAdmin页面示例"},{roleName:"角色6",roleCode:"role6",sort:6,describe:"FiveAdmin页面示例"},{roleName:"角色7",roleCode:"role7",sort:7,describe:"FiveAdmin页面示例"},{roleName:"角色8",roleCode:"role8",sort:8,describe:"FiveAdmin页面示例"},{roleName:"角色9",roleCode:"role9",sort:9,describe:"FiveAdmin页面示例"},{roleName:"角色10",roleCode:"role10",sort:10,describe:"FiveAdmin页面示例"}]});return(V,n)=>{const s=r("el-input"),i=r("el-form-item"),t=r("el-button"),p=r("el-form"),_=r("el-card"),m=r("el-table-column"),b=r("el-table"),f=r("el-main");return c(),N(f,null,{default:l(()=>[e(_,{shadow:"never"},{default:l(()=>[e(p,{inline:""},{default:l(()=>[e(i,{label:"角色名称："},{default:l(()=>[e(s,{modelValue:d.form.roleName,"onUpdate:modelValue":n[0]||(n[0]=o=>d.form.roleName=o),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(i,{label:"角色编码："},{default:l(()=>[e(s,{modelValue:d.form.roleCode,"onUpdate:modelValue":n[1]||(n[1]=o=>d.form.roleCode=o),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(i,null,{default:l(()=>[e(t,{type:"primary"},{default:l(()=>[a(" 查询 ")]),_:1}),e(t,{type:"success"},{default:l(()=>[a(" 新增 ")]),_:1}),e(t,{type:"warning"},{default:l(()=>[a(" 导出 ")]),_:1})]),_:1})]),_:1})]),_:1}),e(_,{shadow:"never",class:"mt-5"},{default:l(()=>[e(b,{data:d.tableData,border:"",stripe:""},{default:l(()=>[e(m,{type:"index",width:"50"}),(c(),v(y,null,F(u,o=>e(m,{key:o.id,prop:o.id,label:o.label,width:o.width},null,8,["prop","label","width"])),64)),e(m,{label:"操作",width:"150",align:"center",fixed:"right"},{default:l(()=>[e(t,{type:"primary",size:"small",link:""},{default:l(()=>[a(" 查看 ")]),_:1}),e(t,{type:"primary",size:"small",link:""},{default:l(()=>[a(" 修改 ")]),_:1}),e(t,{type:"primary",size:"small",link:""},{default:l(()=>[a(" 删除 ")]),_:1})]),_:1})]),_:1},8,["data"])]),_:1})]),_:1})}}});export{x as default};
