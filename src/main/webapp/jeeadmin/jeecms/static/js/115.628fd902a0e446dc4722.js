webpackJsonp([115],{"0VNa":function(e,a,t){var r=t("nwxk");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t("FIqI")("4b1dd24e",r,!0,{})},nwxk:function(e,a,t){a=e.exports=t("I71c")(!1),a.push([e.i,"\n.el-dialog__body[data-v-34024830]{\n    min-height: 150px;\n}\n",""])},uAPT:function(e,a,t){"use strict";function r(e){t("0VNa")}Object.defineProperty(a,"__esModule",{value:!0});var l=t("5HJ5"),o=t("x1ym"),i=(t("2sCs"),{mixins:[l.a],data:function(){var e=o.a.required("该项必填");return{params:{pageNo:"",pageSize:"",qname:"",qrecommend:"",orderBy:""},rules:{name:[e],priority:[e],recommend:[e]},addParam:{name:"",priority:"",recommend:""},updateParam:{id:"",name:"",recommend:"",priority:""},dialogVisible:!1,dialogVisible1:!1,tapTipSave:!1}},methods:{save:function(){var e=this;this.$refs.form.validate(function(a){if(!a)return!1;e.$http.post(e.$api.wordSearchwordsSave,e.addParam).then(function(a){"200"==a.code&&(e.dialogVisible=!1,e.successMessage("添加成功"),e.initTableData(e.$api.wordSearchwordsList,e.params),e.addParam.name="",e.addParam.priority="",e.addParam.recommend=""),e.loading=!1}).catch(function(a){e.dialogVisible=!1,e.loading=!1})})},edit:function(e,a,t,r){this.updateParam.name="",this.updateParam.name=e,this.updateParam.priority="",this.updateParam.priority=a,this.updateParam.recommend="",this.updateParam.recommend=t,this.updateParam.id=r,this.tapTipSave=!1,this.dialogVisible1=!0},update:function(){var e=this;this.$refs.form1.validate(function(a){if(!a)return!1;e.$http.post(e.$api.wordSearchwordsUpdate,e.updateParam).then(function(a){"200"==a.code&&(e.dialogVisible1=!1,e.successMessage("修改成功"),e.initTableData(e.$api.wordSearchwordsList,e.params)),e.loading=!1}).catch(function(a){e.dialogVisible=!1,e.loading=!1})})},handleClose:function(e){this.$confirm("你确定要关闭吗?").then(function(a){e()}).catch(function(e){})}},created:function(){this.initTableData(this.$api.wordSearchwordsList,this.params)}}),s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"cms-body"},[t("div",{staticClass:"cms-list-header"},[t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/word/searchwords/add",expression:"'/word/searchwords/add'"}],attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(a){e.dialogVisible=!0}}},[e._v("添加")]),e._v(" "),t("cms-input",{attrs:{label:"热词"},model:{value:e.params.qname,callback:function(a){e.$set(e.params,"qname",a)},expression:"params.qname"}}),e._v(" "),t("label",{staticClass:"cms-label"},[e._v("是否推荐")]),e._v(" "),t("el-select",{on:{change:e.query},model:{value:e.params.qrecommend,callback:function(a){e.$set(e.params,"qrecommend",a)},expression:"params.qrecommend"}},[t("el-option",{attrs:{label:"所有",value:2}}),e._v(" "),t("el-option",{attrs:{label:"是",value:1}}),e._v(" "),t("el-option",{attrs:{label:"否",value:0}})],1),e._v(" "),t("label",{staticClass:"cms-label"},[e._v("排列顺序")]),e._v(" "),t("el-select",{on:{change:e.query},model:{value:e.params.orderBy,callback:function(a){e.$set(e.params,"orderBy",a)},expression:"params.orderBy"}},[t("el-option",{attrs:{label:"搜索次数降序",value:1}}),e._v(" "),t("el-option",{attrs:{label:"搜索次数升序",value:2}}),e._v(" "),t("el-option",{attrs:{label:"排序降序",value:3}}),e._v(" "),t("el-option",{attrs:{label:"排序升序",value:4}})],1),e._v(" "),t("el-button",{on:{click:e.query}},[e._v("查询")])],1),e._v(" "),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""},on:{"selection-change":e.checkIds}},[t("el-table-column",{attrs:{type:"selection",width:"65",align:"right"}}),e._v(" "),t("el-table-column",{attrs:{prop:"id",label:"ID",width:"50",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"name",label:"热词",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"hitCount",label:"搜索次数",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"priority",label:"排列顺序",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"recommend",label:"是否推荐",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return t("div",{},[a.row.recommend?t("span",[e._v("是")]):t("span",[e._v("否")])])}}])}),e._v(" "),t("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return t("div",{},[t("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/word/searchwords/edit",expression:"'/word/searchwords/edit'"}],attrs:{type:"edit"},nativeOn:{click:function(t){e.edit(a.row.name,a.row.priority,a.row.recommend,a.row.id)}}}),e._v(" "),t("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/word/searchwords/delete",expression:"'/word/searchwords/delete'"}],attrs:{type:"delete"},nativeOn:{click:function(t){e.deleteBatch(e.$api.wordSearchwordsDelete,a.row.id)}}})],1)}}])})],1),e._v(" "),t("div",{staticClass:"cms-list-footer "},[t("div",{staticClass:"cms-left"},[t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/word/searchwords/delete",expression:"'/word/searchwords/delete'"}],attrs:{disabled:e.disabled},on:{click:function(a){e.deleteBatch(e.$api.wordSearchwordsDelete,e.ids)}}},[e._v("批量删除")])],1),e._v(" "),t("cms-pagination",{attrs:{total:e.total},on:{change:e.getPages}})],1),e._v(" "),t("el-dialog",{attrs:{title:"热词管理 - 添加",visible:e.dialogVisible,width:"30%","before-close":e.handleClose},on:{"update:visible":function(a){e.dialogVisible=a}}},[t("span",[t("el-form",{ref:"form",attrs:{model:e.addParam,rules:e.rules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"热词",prop:"name"}},[t("el-input",{model:{value:e.addParam.name,callback:function(a){e.$set(e.addParam,"name",a)},expression:"addParam.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"排序",prop:"priority"}},[t("el-input",{attrs:{type:"number"},model:{value:e.addParam.priority,callback:function(a){e.$set(e.addParam,"priority",a)},expression:"addParam.priority"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"是否推荐",prop:"recommend"}},[t("el-radio",{attrs:{label:"true"},model:{value:e.addParam.recommend,callback:function(a){e.$set(e.addParam,"recommend",a)},expression:"addParam.recommend"}},[e._v("是")]),e._v(" "),t("el-radio",{attrs:{label:"false"},model:{value:e.addParam.recommend,callback:function(a){e.$set(e.addParam,"recommend",a)},expression:"addParam.recommend"}},[e._v("否")])],1)],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确定")])],1)]),e._v(" "),t("el-dialog",{attrs:{title:"热词管理 - 修改",visible:e.dialogVisible1,width:"30%","close-on-click-modal":!1,"before-close":e.handleClose},on:{"update:visible":function(a){e.dialogVisible1=a}}},[t("span",[t("el-form",{ref:"form1",attrs:{model:e.updateParam,rules:e.rules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"热词",prop:"name"}},[t("el-input",{model:{value:e.updateParam.name,callback:function(a){e.$set(e.updateParam,"name",a)},expression:"updateParam.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"排序",prop:"priority"}},[t("el-input",{attrs:{type:"number"},model:{value:e.updateParam.priority,callback:function(a){e.$set(e.updateParam,"priority",a)},expression:"updateParam.priority"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"是否推荐",prop:"recommend"}},[t("el-radio",{attrs:{label:!0},model:{value:e.updateParam.recommend,callback:function(a){e.$set(e.updateParam,"recommend",a)},expression:"updateParam.recommend"}},[e._v("是")]),e._v(" "),t("el-radio",{attrs:{label:!1},model:{value:e.updateParam.recommend,callback:function(a){e.$set(e.updateParam,"recommend",a)},expression:"updateParam.recommend"}},[e._v("否")])],1)],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.dialogVisible1=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.update}},[e._v("确定")])],1)])],1)},n=[],d={render:s,staticRenderFns:n},m=d,c=t("Z0/y"),p=r,u=c(i,m,!1,p,"data-v-34024830",null);a.default=u.exports}});