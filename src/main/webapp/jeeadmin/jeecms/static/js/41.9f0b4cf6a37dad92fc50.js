webpackJsonp([41],{RES6:function(e,n,a){"use strict";function t(e){a("eryG")}Object.defineProperty(n,"__esModule",{value:!0});var s=a("lcoF"),r=a("2sCs"),l=a.n(r),o=a("x1ym"),i={mixins:[s.a],data:function(){var e=o.a.required(),n=o.a.number();o.a.email(),o.a.validateName(),o.a.tel(),o.a.mobile();return{params:{queryUsername:"",https:""},rules:{memberOn:[e],checkOn:[e],registerOn:[e],usernameMinLen:[e,n],passwordMinLen:[e,n],userImgWidth:[e,n],userImgHeight:[e,n]}}},methods:{getDataInfo:function(){var e=this,n=this.$api;l.a.all([l.a.post(n.configMemberGet)]).then(l.a.spread(function(n){e.dataInfo=n.body,e.$refs.form.resetFields(),e.loading=!1})).catch(function(n){e.loading=!1})},update:function(){this.updateDataInfo(this.$api.configMemberUpdate,this.dataInfo,"")}},created:function(){this.getDataInfo(this.id)}},c=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"cms-body"},[a("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:e.dataInfo,rules:e.rules,"label-width":"162px"}},[a("el-form-item",{staticClass:"flex-50",attrs:{label:"开启会员功能",prop:"memberOn"}},[a("el-radio",{attrs:{label:!0},model:{value:e.dataInfo.memberOn,callback:function(n){e.$set(e.dataInfo,"memberOn",n)},expression:"dataInfo.memberOn"}},[e._v("是")]),e._v(" "),a("el-radio",{attrs:{label:!1},model:{value:e.dataInfo.memberOn,callback:function(n){e.$set(e.dataInfo,"memberOn",n)},expression:"dataInfo.memberOn"}},[e._v("否")])],1),e._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"开启会员注册",prop:"registerOn"}},[a("el-radio",{attrs:{label:!0},model:{value:e.dataInfo.registerOn,callback:function(n){e.$set(e.dataInfo,"registerOn",n)},expression:"dataInfo.registerOn"}},[e._v("是")]),e._v(" "),a("el-radio",{attrs:{label:!1},model:{value:e.dataInfo.registerOn,callback:function(n){e.$set(e.dataInfo,"registerOn",n)},expression:"dataInfo.registerOn"}},[e._v("否")])],1),e._v(" "),a("el-form-item",{staticClass:"flex-100",attrs:{label:"注册审核",prop:"checkOn"}},[a("el-radio",{attrs:{label:!0},model:{value:e.dataInfo.checkOn,callback:function(n){e.$set(e.dataInfo,"checkOn",n)},expression:"dataInfo.checkOn"}},[e._v("是")]),e._v(" "),a("el-radio",{attrs:{label:!1},model:{value:e.dataInfo.checkOn,callback:function(n){e.$set(e.dataInfo,"checkOn",n)},expression:"dataInfo.checkOn"}},[e._v("否")])],1),e._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"用户名最小长度",prop:"usernameMinLen"}},[a("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:e.dataInfo.usernameMinLen,callback:function(n){e.$set(e.dataInfo,"usernameMinLen",n)},expression:"dataInfo.usernameMinLen"}})],1),e._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"密码最小长度",prop:"passwordMinLen"}},[a("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:e.dataInfo.passwordMinLen,callback:function(n){e.$set(e.dataInfo,"passwordMinLen",n)},expression:"dataInfo.passwordMinLen"}})],1),e._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"用户头像宽度",prop:"userImgWidth"}},[a("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:e.dataInfo.userImgWidth,callback:function(n){e.$set(e.dataInfo,"userImgWidth",n)},expression:"dataInfo.userImgWidth"}})],1),e._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"用户头像高度",prop:"userImgHeight"}},[a("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:e.dataInfo.userImgHeight,callback:function(n){e.$set(e.dataInfo,"userImgHeight",n)},expression:"dataInfo.userImgHeight"}})],1),e._v(" "),a("el-form-item",{staticClass:"flex-100",attrs:{label:"用户名保留字",prop:"usernameReserved"}},[a("el-input",{staticClass:"cms-width",attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:e.dataInfo.usernameReserved,callback:function(n){e.$set(e.dataInfo,"usernameReserved",n)},expression:"dataInfo.usernameReserved"}}),e._v(" "),a("span",{staticClass:"gray"},[e._v("可以使用 * 作为通配符，如: *Admin*")])],1),e._v(" "),a("div",{staticClass:"form-footer"},[a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/globel/memberUpdate",expression:"'/globel/memberUpdate'"}],attrs:{type:"primary"},on:{click:function(n){e.update()}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"info"},on:{click:e.reset}},[e._v("重置")])],1)],1)],1)},d=[],m={render:c,staticRenderFns:d},f=m,u=a("Z0/y"),p=t,b=u(i,f,!1,p,null,null);n.default=b.exports},eryG:function(e,n,a){var t=a("r3be");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);a("FIqI")("6f5855cc",t,!0,{})},r3be:function(e,n,a){n=e.exports=a("l95E")(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}});