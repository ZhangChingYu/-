(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my-realname/realname"],{237:function(e,n,t){"use strict";(function(e){t(5);o(t(4));var n=o(t(238));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},238:function(e,n,t){"use strict";t.r(n);var o=t(239),r=t(241);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);t(243);var i,c=t(11),u=Object(c["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"3c8f1667",null,!1,o["components"],i);u.options.__file="pages/my-realname/realname.vue",n["default"]=u.exports},239:function(e,n,t){"use strict";t.r(n);var o=t(240);t.d(n,"render",(function(){return o["render"]})),t.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(n,"components",(function(){return o["components"]}))},240:function(e,n,t){"use strict";var o;t.r(n),t.d(n,"render",(function(){return r})),t.d(n,"staticRenderFns",(function(){return i})),t.d(n,"recyclableRender",(function(){return a})),t.d(n,"components",(function(){return o}));var r=function(){var e=this,n=e.$createElement;e._self._c},a=!1,i=[];r._withStripped=!0},241:function(e,n,t){"use strict";t.r(n);var o=t(242),r=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n["default"]=r.a},242:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{imgSrc:"",phone:"",realName:"",idCard:""}},mounted:function(){this.phone=e.getStorageSync("user").phone},methods:{onGetImgClick:function(){var n=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){console.log("chooseImage-----》》》》》》》》",t);var o=t.tempFilePaths[0].split("."),r=o[1].toLowerCase();"png"==r||"jpg"===r||"jpeg"===r?(console.log(t.tempFiles,"beforre--------"),t.tempFiles[0]["size"]>20971520?e.showToast({title:"图片大小不能超过20M",icon:"none",duration:3e3}):t.tempFiles[0]["size"]<5242880?(console.log(t.tempFilePaths[0],"imginfo"),n.imgSrc=t.tempFilePaths[0]):e.compressImage({src:t.tempFilePaths[0],quality:80,success:function(e){console.log(e,"=========res"),n.imgSrc=e.tempFilePaths[0]}})):e.showToast({title:"请上传PNG、JPG、JPEG格式的图片",icon:"none",duration:3e3})}})},uploadImgFile:function(n,t){e.uploadFile({url:"http://localhost:8080//setting/authentication",filePath:n,name:"idCardPic",formData:{idCardPic:n,phone:t.phone,realName:t.realName,idNumber:t.idCard},header:{"Content-Type":"multipart/form-data",token:e.getStorageSync("token")},success:function(n){var o=JSON.parse(n.data);console.log(o,"----res"),200==o&&(t.showInfo=o.data,console.log("请求成功_______________",o),e.navigateBack({delta:1}))},fail:function(e){console.log("请求失败_______________",e),console.log(t.formData)}})},commit:function(){console.log("点击提交");var e=this;e.uploadImgFile(this.imgSrc,e)}}};n.default=t}).call(this,t(1)["default"])},243:function(e,n,t){"use strict";t.r(n);var o=t(244),r=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n["default"]=r.a},244:function(e,n,t){}},[[237,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my-realname/realname.js.map