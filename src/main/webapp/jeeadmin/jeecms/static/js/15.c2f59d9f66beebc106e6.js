webpackJsonp([15],{"0Kzi":function(t,a,e){"use strict";function n(t){e("11na")}Object.defineProperty(a,"__esModule",{value:!0});var i=e("2sCs"),s=e.n(i),l=e("x1ym"),o=e("lcoF"),c={mixins:[o.a],data:function(){var t=l.a.required("此项必填");l.a.number("必须为数字");return{dataInfo:{},typeDisabled:[!1,!1,!1],intervalUnitDisabled:[!0,!1,!1,!1,!1,!1],jobClass:["com.jeecms.cms.task.job.IndexStaticJob","com.jeecms.cms.task.job.ChannelStaticJob","com.jeecms.cms.task.job.ContentStaticJob","com.jeecms.cms.task.job.AcquisiteJob","com.jeecms.cms.task.job.DistributeJob"],execycleDisplay:!0,channels:[{hasChild:!0,id:"",name:"所有栏目"}],ftps:[],ftpForld:[],collections:[],selectChannels:[],rules:{type:[t],name:[t],enable:[t]}}},methods:{clickType:function(t){var a=this;this.typeDisabled=this.typeDisabled.map(function(t){return!1}),2==t||3==t?(this.selectChannels=[""],this.typeDisabled[0]=!0,1==this.channels.length&&(this.loading=!0,s.a.post(this.$api.fullTextSearchChannelList,{hasContentOnly:!1}).then(function(t){a.loading=!1,a.channels=a.channels.concat(t.body)}).catch(function(t){a.loading=!1}))):4==t?(this.typeDisabled[1]=!0,0==this.collections.length&&(this.loading=!0,s.a.post(this.$api.acquisitionList).then(function(t){"200"==t.code&&(a.dataInfo.attr_acqu_id=t.body.length>0?t.body[0].id:"",a.loading=!1,a.collections=t.body)}).catch(function(t){a.loading=!1}))):5==t&&(this.typeDisabled[2]=!0,0==this.ftpForld.length&&(this.ftpForld=[""]),0==this.ftps.length&&(this.loading=!0,s.a.post(this.$api.ftpList).then(function(t){(t.code="200")&&(a.dataInfo.attr_ftp_id=t.body.length>0?t.body[0].id:"",a.loading=!1,a.ftps=t.body)}).catch(function(t){a.loading=!1})))},interValUnitClick:function(t){this.intervalUnitDisabled=this.intervalUnitDisabled.map(function(t){return!1}),1==t?this.intervalUnitDisabled[0]=!0:2==t?this.intervalUnitDisabled[1]=!0:3==t?(this.intervalUnitDisabled[4]=!0,this.intervalUnitDisabled[5]=!0):4==t?(this.intervalUnitDisabled[2]=!0,this.intervalUnitDisabled[4]=!0,this.intervalUnitDisabled[5]=!0):5==t&&(this.intervalUnitDisabled[3]=!0,this.intervalUnitDisabled[4]=!0,this.intervalUnitDisabled[5]=!0)},execyClick:function(t){1==t?(this.execycleDisplay=!0,this.dataInfo.intervalUnit=1,this.interValUnitClick(this.dataInfo.intervalUnit)):this.execycleDisplay=!1},getDataInfo:function(t){var a=this;this.$api;s.a.post(this.$api.crontabGet,{id:t}).then(function(e){if(a.loading=!1,a.dataInfo=e.body,0==t)a.dataInfo.type=1,a.dataInfo.execycle=1,a.dataInfo.intervalUnit=1,a.selectChannels=[""],a.ftpForld=[""];else{if(2!=a.dataInfo.type&&3!=a.dataInfo.type||s.a.post(a.$api.channelGet,{id:a.dataInfo.attr_channel_id}).then(function(t){"200"==t.code&&(a.selectChannels=t.body.nodeIds)}),null!=e.body.attr_ftp_id&&void 0!==e.body.attr_ftp_id)for(var n in e.body)n.indexOf("attr_floder")>=0&&a.ftpForld.push(e.body[n]);a.execyClick(a.dataInfo.execycle),a.clickType(a.dataInfo.type),a.interValUnitClick(a.dataInfo.intervalUnit)}}).catch(function(t){a.loading=!1})},getParam:function(){switch(this.dataInfo.type){case 2:case 3:this.ftpForld=[],this.dataInfo.attr_acqu_id="",this.dataInfo.attr_ftp_id="";break;case 4:this.ftpForld=[],this.dataInfo.attr_channel_id="",this.dataInfo.attr_ftp_id="";break;case 5:this.dataInfo.attr_channel_id="",this.dataInfo.attr_acqu_id="";break;default:this.ftpForld=[],this.dataInfo.attr_ftp_id="",this.dataInfo.attr_acqu_id="",this.dataInfo.attr_channel_id=""}if(1==this.dataInfo.execycle)switch(this.dataInfo.cronExpression="",this.dataInfo.intervalUnit){case 1:this.dataInfo.hour="",this.dataInfo.dayOfWeek="",this.dataInfo.dayOfMonth="",this.dataInfo.intervalHour="",this.dataInfo.minute="";break;case 2:this.dataInfo.hour="",this.dataInfo.dayOfWeek="",this.dataInfo.dayOfMonth="",this.dataInfo.intervalMinute="",this.dataInfo.minute="";break;case 3:this.dataInfo.dayOfWeek="",this.dataInfo.dayOfMonth="",this.dataInfo.intervalMinute="",this.dataInfo.intervalHour="";break;case 4:this.dataInfo.dayOfMonth="",this.dataInfo.intervalMinute="",this.dataInfo.intervalHour="";break;case 5:this.dataInfo.dayOfWeek="",this.dataInfo.intervalMinute="",this.dataInfo.intervalHour=""}else this.dataInfo.intervalMinute="",this.dataInfo.intervalHour="",this.dataInfo.dayOfMonth="",this.dataInfo.dayOfWeek="",this.dataInfo.dayOfWeek="",this.dataInfo.minute="";if(null!=this.dataInfo.attr_ftp_id&&void 0!==this.dataInfo.attr_ftp_id)for(var t in this.dataInfo)t.indexOf("attr_floder")>=0&&delete this.dataInfo[t];for(var a in this.ftpForld)this.dataInfo["attr_floder_"+a]=this.ftpForld[a];this.selectChannels.length>0&&(this.dataInfo.attr_channel_id=this.selectChannels[this.selectChannels.length-1]),this.dataInfo.jobClass=this.jobClass[this.dataInfo.type-1]},update:function(t){this.getParam(),this.updateDataInfo(this.$api.crontabUpdate,this.dataInfo,"list")},add:function(t){this.getParam(),this.saveDataInfo(t,this.$api.crontabSave,this.dataInfo,"list")},ftpDelete:function(t){this.ftpForld.splice(t,1)},ftpAdd:function(){this.ftpForld.push("")}},created:function(){this.getDataInfo(this.id)}},d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"cms-body"},[e("cms-back"),t._v(" "),e("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:t.dataInfo,rules:t.rules,"label-width":"162px"}},[e("el-form-item",{staticClass:"flex-100 flex-no-border",attrs:{label:"任务类型",prop:"type"}},[e("el-select",{staticClass:"cms-col3",on:{change:t.clickType},model:{value:t.dataInfo.type,callback:function(a){t.$set(t.dataInfo,"type",a)},expression:"dataInfo.type"}},[e("el-option",{attrs:{label:"首页静态化",value:1}}),t._v(" "),e("el-option",{attrs:{label:"栏目静态化",value:2}}),t._v(" "),e("el-option",{attrs:{label:"内容静态化",value:3}}),t._v(" "),e("el-option",{attrs:{label:"采集",value:4}}),t._v(" "),e("el-option",{attrs:{label:"分发",value:5}})],1)],1),t._v(" "),t.typeDisabled[0]?e("el-form-item",{staticClass:"flex-100 ",attrs:{label:"栏目"}},[e("el-cascader",{staticClass:"cms-col3",attrs:{props:{value:"id",label:"name",children:"child"},options:t.channels,"change-on-select":"",filterable:""},model:{value:t.selectChannels,callback:function(a){t.selectChannels=a},expression:"selectChannels"}})],1):t._e(),t._v(" "),t.typeDisabled[1]?e("el-form-item",{staticClass:"flex-100 ",attrs:{label:"采集"}},[e("el-select",{staticClass:"cms-col3",model:{value:t.dataInfo.attr_acqu_id,callback:function(a){t.$set(t.dataInfo,"attr_acqu_id",a)},expression:"dataInfo.attr_acqu_id"}},t._l(t.collections,function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1):t._e(),t._v(" "),t.typeDisabled[2]?e("el-form-item",{staticClass:"flex-100 ",attrs:{label:"FTP"}},[e("el-select",{staticClass:"cms-col3",model:{value:t.dataInfo.attr_ftp_id,callback:function(a){t.$set(t.dataInfo,"attr_ftp_id",a)},expression:"dataInfo.attr_ftp_id"}},t._l(t.ftps,function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),t._v(" "),e("el-button",{on:{click:t.ftpAdd}},[t._v("增加")]),t._v(" "),e("div",{staticClass:"ftp-div cms-col2"},[e("span",[t._v("分发文件夹 相对根目录(例/Main/Channel)")])]),t._v(" "),t._l(t.ftpForld,function(a,n){return e("div",{key:n,staticClass:"ftp-div cms-col3"},[e("el-input",{staticClass:"cms-col6",model:{value:t.ftpForld[n],callback:function(a){t.$set(t.ftpForld,n,a)},expression:"ftpForld[index]"}}),t._v(" "),e("el-button",{staticClass:"cms-col1",on:{click:function(a){t.ftpDelete(n)}}},[t._v(" 删除")])],1)})],2):t._e(),t._v(" "),e("el-form-item",{staticClass:"flex-100",attrs:{label:"任务名称",prop:"name"}},[e("el-input",{staticClass:"cms-col3",model:{value:t.dataInfo.name,callback:function(a){t.$set(t.dataInfo,"name",a)},expression:"dataInfo.name"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-100",attrs:{label:"执行方式"}},[e("el-radio-group",{staticClass:"cms-col10",on:{change:t.execyClick},model:{value:t.dataInfo.execycle,callback:function(a){t.$set(t.dataInfo,"execycle",a)},expression:"dataInfo.execycle"}},[e("el-radio",{attrs:{label:1}},[t._v("执行周期")]),t._v(" "),e("el-radio",{attrs:{label:2}},[t._v("执行方式")])],1)],1),t._v(" "),t.execycleDisplay?e("el-form-item",{staticClass:"flex-100",attrs:{label:"执行周期"}},[e("el-select",{staticClass:"cms-col1",on:{change:t.interValUnitClick},model:{value:t.dataInfo.intervalUnit,callback:function(a){t.$set(t.dataInfo,"intervalUnit",a)},expression:"dataInfo.intervalUnit"}},[e("el-option",{attrs:{label:"分",value:1}}),t._v(" "),e("el-option",{attrs:{label:"时",value:2}}),t._v(" "),e("el-option",{attrs:{label:"天",value:3}}),t._v(" "),e("el-option",{attrs:{label:"周",value:4}}),t._v(" "),e("el-option",{attrs:{label:"月",value:5}})],1),t._v(" "),t.intervalUnitDisabled[0]?e("el-input",{attrs:{type:"number"},model:{value:t.dataInfo.intervalMinute,callback:function(a){t.$set(t.dataInfo,"intervalMinute",a)},expression:"dataInfo.intervalMinute"}},[e("template",{slot:"prepend"},[t._v("每隔")]),t._v(" "),e("template",{slot:"append"},[t._v("分钟")])],2):t._e(),t._v(" "),t.intervalUnitDisabled[1]?e("el-input",{attrs:{type:"number"},model:{value:t.dataInfo.intervalHour,callback:function(a){t.$set(t.dataInfo,"intervalHour",a)},expression:"dataInfo.intervalHour"}},[e("template",{slot:"prepend"},[t._v("每隔")]),t._v(" "),e("template",{slot:"append"},[t._v("小时")])],2):t._e(),t._v(" "),t.intervalUnitDisabled[2]?e("el-input",{attrs:{type:"number"},model:{value:t.dataInfo.dayOfWeek,callback:function(a){t.$set(t.dataInfo,"dayOfWeek",a)},expression:"dataInfo.dayOfWeek"}},[e("template",{slot:"append"},[t._v("星期")])],2):t._e(),t._v(" "),t.intervalUnitDisabled[3]?e("el-input",{attrs:{type:"number"},model:{value:t.dataInfo.dayOfMonth,callback:function(a){t.$set(t.dataInfo,"dayOfMonth",a)},expression:"dataInfo.dayOfMonth"}},[e("template",{slot:"append"},[t._v("日")])],2):t._e(),t._v(" "),t.intervalUnitDisabled[4]?e("el-input",{attrs:{type:"number"},model:{value:t.dataInfo.hour,callback:function(a){t.$set(t.dataInfo,"hour",a)},expression:"dataInfo.hour"}},[e("template",{slot:"append"},[t._v("时")])],2):t._e(),t._v(" "),t.intervalUnitDisabled[5]?e("el-input",{attrs:{type:"number"},model:{value:t.dataInfo.minute,callback:function(a){t.$set(t.dataInfo,"minute",a)},expression:"dataInfo.minute"}},[e("template",{slot:"append"},[t._v("分")])],2):t._e()],1):t._e(),t._v(" "),t.execycleDisplay?t._e():e("el-form-item",{staticClass:"flex-100",attrs:{label:"cron表达式"}},[e("el-input",{staticClass:"cms-col2",model:{value:t.dataInfo.cronExpression,callback:function(a){t.$set(t.dataInfo,"cronExpression",a)},expression:"dataInfo.cronExpression"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"状态",prop:"enable"}},[e("el-switch",{attrs:{"active-text":"启用","inactive-text":"禁用"},model:{value:t.dataInfo.enable,callback:function(a){t.$set(t.dataInfo,"enable",a)},expression:"dataInfo.enable"}})],1),t._v(" "),e("el-form-item",{staticClass:"flex-50"}),t._v(" "),e("el-form-item",{staticClass:"flex-100",attrs:{label:"备注"}},[e("el-input",{staticClass:"cms-col3",attrs:{type:"textarea"},model:{value:t.dataInfo.remark,callback:function(a){t.$set(t.dataInfo,"remark",a)},expression:"dataInfo.remark"}})],1),t._v(" "),e("div",{staticClass:"form-footer"},[t.isType("save")?e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/crontab/save",expression:"'/crontab/save'"}],attrs:{type:"warning"},on:{click:function(a){t.add(!0)}}},[t._v("\n              提交并继续添加\n            ")]):t._e(),t._v(" "),t.isType("save")?e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/crontab/save",expression:"'/crontab/save'"}],attrs:{type:"primary"},on:{click:function(a){t.add(!1)}}},[t._v("\n              提交\n            ")]):t._e(),t._v(" "),t.isType("update")?e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/crontab/update",expression:"'/crontab/update'"}],attrs:{type:"primary"},on:{click:function(a){t.update()}}},[t._v("\n             修改\n            ")]):t._e(),t._v(" "),e("el-button",{attrs:{type:"info"},on:{click:t.reset}},[t._v("重置")]),t._v(" "),t.isType("save")?e("span",{staticClass:"gray"},[t._v("选择“提交并继续添加”按钮会停留在添加页面；选择“提交”按钮后将跳转到对应的列表页")]):t._e()],1)],1)],1)},r=[],f={render:d,staticRenderFns:r},p=f,h=e("Z0/y"),v=n,u=h(c,p,!1,v,"data-v-3b0c2762",null);a.default=u.exports},"11na":function(t,a,e){var n=e("Snl8");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("FIqI")("33012756",n,!0,{})},Snl8:function(t,a,e){a=t.exports=e("I71c")(!1),a.push([t.i,"\n.el-input-group[data-v-3b0c2762]{\r\n  width: 20%;\n}\n.cms-body .cms-form .flex-100[data-v-3b0c2762],.cms-body .cms-form .flex-50[data-v-3b0c2762]{\r\n  border-top: 1px dashed #eee;\n}\n.cms-body .cms-form .flex-no-border[data-v-3b0c2762]{\r\n border-top: 0px dashed #eee;\n}\n.cms-body .cms-col1[data-v-3b0c2762]{\r\n  width: 10%\n}\n.cms-body .cms-col2[data-v-3b0c2762]{\r\n  width: 20%\n}\n.cms-body .cms-col3[data-v-3b0c2762]{\r\n  width: 30%\n}\n.cms-body .cms-col4[data-v-3b0c2762]{\r\n  width: 40%\n}\n.cms-body .cms-col5[data-v-3b0c2762]{\r\n  width: 50%\n}\n.cms-body .cms-col6[data-v-3b0c2762]{\r\n  width: 60%\n}\n.cms-body .cms-col7[data-v-3b0c2762]{\r\n  width: 70%\n}\n.cms-body .cms-col8[data-v-3b0c2762]{\r\n  width: 80%\n}\n.cms-body .cms-col9[data-v-3b0c2762]{\r\n  width: 90%\n}\n.cms-body .cms-col10[data-v-3b0c2762]{\r\n  width: 100%\n}\n.el-form-item__error[data-v-3b0c2762] {\r\n left:35%;\n}\n.ftp-div[data-v-3b0c2762]{\r\n  margin-top: 16px;\n}\r\n",""])}});