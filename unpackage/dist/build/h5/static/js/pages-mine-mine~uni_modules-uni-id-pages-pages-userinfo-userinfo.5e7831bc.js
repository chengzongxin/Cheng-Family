(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-mine~uni_modules-uni-id-pages-pages-userinfo-userinfo"],{"092f":function(t,e,n){"use strict";n.r(e);var i=n("d051"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"0f1f":function(t,e,n){var i=n("abc0");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("5c8bc674",i,!0,{sourceMap:!1,shadowMode:!1})},"13c7":function(t,e,n){"use strict";var i=n("0f1f"),a=n.n(i);a.a},"17c8":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("7f2d")),o=i(n("e141")),u=i(n("a432")),r={en:a.default,"zh-Hans":o.default,"zh-Hant":u.default};e.default=r},"2f07":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-popup-dialog"},[n("v-uni-view",{staticClass:"uni-dialog-title"},[n("v-uni-text",{staticClass:"uni-dialog-title-text",class:["uni-popup__"+t.dialogType]},[t._v(t._s(t.titleText))])],1),"base"===t.mode?n("v-uni-view",{staticClass:"uni-dialog-content"},[t._t("default",[n("v-uni-text",{staticClass:"uni-dialog-content-text"},[t._v(t._s(t.content))])])],2):n("v-uni-view",{staticClass:"uni-dialog-content"},[t._t("default",["checkbox"===t.inputType?n("v-uni-input",{staticClass:"uni-dialog-input",attrs:{placeholder:t.placeholderText,focus:t.focus,type:"checkbox"},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}}):"radio"===t.inputType?n("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"uni-dialog-input",attrs:{placeholder:t.placeholderText,focus:t.focus,type:"radio"},domProps:{checked:t._q(t.val,null)},on:{change:function(e){t.val=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"uni-dialog-input",attrs:{placeholder:t.placeholderText,focus:t.focus,type:t.inputType},domProps:{value:t.val},on:{input:function(e){e.target.composing||(t.val=e.target.value)}}})])],2),n("v-uni-view",{staticClass:"uni-dialog-button-group"},[n("v-uni-view",{staticClass:"uni-dialog-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeDialog.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"uni-dialog-button-text"},[t._v(t._s(t.closeText))])],1),n("v-uni-view",{staticClass:"uni-dialog-button uni-border-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onOk.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"uni-dialog-button-text uni-button-color"},[t._v(t._s(t.okText))])],1)],1)],1)},a=[]},"49ad":function(t,e,n){"use strict";n.r(e);var i=n("5865"),a=n("9d72");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("9cd8");var u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"aa49a584",null,!1,i["a"],void 0);e["default"]=r.exports},"543c":function(t,e,n){"use strict";n.r(e);var i=n("d8ad"),a=n("092f");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=r.exports},"54bb":function(t,e,n){"use strict";n.r(e);var i=n("89a5"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},5865:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={cloudImage:n("543c").default,uniIcons:n("f8d5").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-button",{staticClass:"box",class:{showBorder:t.border},style:{width:t.width,height:t.height,lineHeight:t.height},attrs:{"open-type":"chooseAvatar"},on:{chooseavatar:function(e){arguments[0]=e=t.$handleEvent(e),t.bindchooseavatar.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadAvatarImg.apply(void 0,arguments)}}},[t.avatar_file?n("cloud-image",{attrs:{src:t.avatar_file.url,width:t.width,height:t.height}}):n("uni-icons",{staticClass:"chooseAvatar",style:{width:t.width,height:t.height,lineHeight:t.height},attrs:{type:"plusempty",size:"30",color:"#dddddd"}})],1)},o=[]},"6adf":function(t,e,n){"use strict";n.r(e);var i=n("2f07"),a=n("54bb");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("13c7");var u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"56681c50",null,!1,i["a"],void 0);e["default"]=r.exports},"7f2d":function(t){t.exports=JSON.parse('{"uni-popup.cancel":"cancel","uni-popup.ok":"ok","uni-popup.placeholder":"pleace enter","uni-popup.title":"Hint","uni-popup.shareTitle":"Share to"}')},"89a5":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var a=i(n("d090")),o=n("37dc"),u=i(n("17c8")),r=(0,o.initVueI18n)(u.default),l=r.t,c={name:"uniPopupDialog",mixins:[a.default],emits:["confirm","close"],props:{inputType:{type:String,default:"text"},value:{type:[String,Number],default:""},placeholder:{type:[String,Number],default:""},type:{type:String,default:"error"},mode:{type:String,default:"base"},title:{type:String,default:""},content:{type:String,default:""},beforeClose:{type:Boolean,default:!1},cancelText:{type:String,default:""},confirmText:{type:String,default:""}},data:function(){return{dialogType:"error",focus:!1,val:""}},computed:{okText:function(){return this.confirmText||l("uni-popup.ok")},closeText:function(){return this.cancelText||l("uni-popup.cancel")},placeholderText:function(){return this.placeholder||l("uni-popup.placeholder")},titleText:function(){return this.title||l("uni-popup.title")}},watch:{type:function(t){this.dialogType=t},mode:function(t){"input"===t&&(this.dialogType="info")},value:function(t){this.val=t}},created:function(){this.popup.disableMask(),"input"===this.mode?(this.dialogType="info",this.val=this.value):this.dialogType=this.type},mounted:function(){this.focus=!0},methods:{onOk:function(){"input"===this.mode?this.$emit("confirm",this.val):this.$emit("confirm"),this.beforeClose||this.popup.close()},closeDialog:function(){this.$emit("close"),this.beforeClose||this.popup.close()},close:function(){this.popup.close()}}};e.default=c},"934b":function(t,e,n){var i=n("e04d");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("06cbe80a",i,!0,{sourceMap:!1,shadowMode:!1})},"9cd8":function(t,e,n){"use strict";var i=n("934b"),a=n.n(i);a.a},"9d72":function(t,e,n){"use strict";n.r(e);var i=n("c01a"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},a432:function(t){t.exports=JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"確定","uni-popup.placeholder":"請輸入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')},abc0:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-popup-dialog[data-v-56681c50]{width:300px;border-radius:11px;background-color:#fff}.uni-dialog-title[data-v-56681c50]{display:flex;flex-direction:row;justify-content:center;padding-top:25px}.uni-dialog-title-text[data-v-56681c50]{font-size:16px;font-weight:500}.uni-dialog-content[data-v-56681c50]{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:20px}.uni-dialog-content-text[data-v-56681c50]{font-size:14px;color:#6c6c6c}.uni-dialog-button-group[data-v-56681c50]{display:flex;flex-direction:row;border-top-color:#f5f5f5;border-top-style:solid;border-top-width:1px}.uni-dialog-button[data-v-56681c50]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:45px}.uni-border-left[data-v-56681c50]{border-left-color:#f0f0f0;border-left-style:solid;border-left-width:1px}.uni-dialog-button-text[data-v-56681c50]{font-size:16px;color:#333}.uni-button-color[data-v-56681c50]{color:#007aff}.uni-dialog-input[data-v-56681c50]{flex:1;font-size:14px;border:1px #eee solid;height:40px;padding:0 10px;border-radius:5px;color:#555}.uni-popup__success[data-v-56681c50]{color:#4cd964}.uni-popup__warn[data-v-56681c50]{color:#f0ad4e}.uni-popup__error[data-v-56681c50]{color:#dd524d}.uni-popup__info[data-v-56681c50]{color:#909399}',""]),t.exports=e},c01a:function(t,e,n){"use strict";(function(t){n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("caad"),n("d3b7"),n("e9c4");var a=i(n("c7eb")),o=i(n("1da1")),u=n("da53"),r={data:function(){return{isPC:!1}},props:{width:{type:String,default:function(){return"50px"}},height:{type:String,default:function(){return"50px"}},border:{type:Boolean,default:function(){return!1}}},mounted:function(){var t=this;return(0,o.default)((0,a.default)().mark((function e(){return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.isPC=!["ios","android"].includes(uni.getSystemInfoSync().platform);case 1:case"end":return e.stop()}}),e)})))()},computed:{hasLogin:function(){return u.store.hasLogin},userInfo:function(){return u.store.userInfo},avatar_file:function(){return u.store.userInfo.avatar_file}},methods:{setAvatarFile:function(t){u.mutations.updateUserInfo({avatar_file:t})},bindchooseavatar:function(e){var n=this;return(0,o.default)((0,a.default)().mark((function i(){var o,u,r,l,c;return(0,a.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return o=e.detail.avatarUrl,u={extname:o.split(".")[o.split(".").length-1],name:"",url:""},r=n.userInfo._id+""+Date.now(),u.name=r,i.prev=4,uni.showLoading({title:"更新中",mask:!0}),i.next=8,t.uploadFile({filePath:o,cloudPath:r,fileType:"image"});case 8:l=i.sent,c=l.fileID,u.url=c,uni.hideLoading(),i.next=17;break;case 14:i.prev=14,i.t0=i["catch"](4),console.error(i.t0);case 17:console.log("avatar_file",u),n.setAvatarFile(u);case 19:case"end":return i.stop()}}),i,null,[[4,14]])})))()},uploadAvatarImg:function(e){var n=this;if(!this.hasLogin)return uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd"});var i={quality:100,width:600,height:600,resize:!0};uni.chooseImage({count:1,crop:i,success:function(){var e=(0,o.default)((0,a.default)().mark((function e(o){var u,r,l,c,s,d;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u=o.tempFiles[0],r={extname:u.name.split(".")[u.name.split(".").length-1]},l=o.tempFilePaths[0],e.next=3,new Promise((function(t){n.isPC||uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/userinfo/cropImage/cropImage?path="+l+"&options=".concat(JSON.stringify(i)),animationType:"fade-in",events:{success:function(e){t(e)}},complete:function(t){}})}));case 3:return l=e.sent,c=n.userInfo._id+""+Date.now(),r.name=c,uni.showLoading({title:"更新中",mask:!0}),e.next=9,t.uploadFile({filePath:l,cloudPath:c,fileType:"image"});case 9:s=e.sent,d=s.fileID,r.url=d,uni.hideLoading(),n.setAvatarFile(r);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})}}};e.default=r}).call(this,n("a9ff")["default"])},d051:function(t,e,n){"use strict";(function(t){n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"cloud-image",emits:["click"],props:{mode:{type:String,default:function(){return"widthFix"}},src:{default:function(){return""}},width:{type:String,default:function(){return"100rpx"}},height:{type:String,default:function(){return"100rpx"}}},watch:{src:{handler:function(e){var n=this;e&&"cloud://"==e.substring(0,8)?t.getTempFileURL({fileList:[e]}).then((function(t){n.cSrc=t.fileList[0].tempFileURL})):this.cSrc=e},immediate:!0}},methods:{onClick:function(){this.$emit("click")}},data:function(){return{cSrc:!1}}};e.default=i}).call(this,n("a9ff")["default"])},d090:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},created:function(){this.popup=this.getParent()},methods:{getParent:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniPopup",e=this.$parent,n=e.$options.name;while(n!==t){if(e=e.$parent,!e)return!1;n=e.$options.name}return e}}};e.default=i},d8ad:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{"justify-content":"center"},style:{width:t.width,height:t.height},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.cSrc?n("v-uni-image",{style:{width:t.width,height:t.height},attrs:{src:t.cSrc,mode:t.mode}}):t._e()],1)},a=[]},e04d:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"\n.box[data-v-aa49a584]{overflow:hidden}\n.box[data-v-aa49a584]{padding:0}.chooseAvatar[data-v-aa49a584]{\ndisplay:inline-block;box-sizing:border-box;\nborder-radius:10px;text-align:center;padding:1px}.showBorder[data-v-aa49a584]{border:solid 1px #ddd}",""]),t.exports=e},e141:function(t){t.exports=JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"确定","uni-popup.placeholder":"请输入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')}}]);