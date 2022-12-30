(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-upload/u-upload"],{449:function(e,t,i){"use strict";i.r(t);var n=i(450),s=i(452);for(var u in s)"default"!==u&&function(e){i.d(t,e,(function(){return s[e]}))}(u);i(457);var a,r=i(11),o=Object(r["default"])(s["default"],n["render"],n["staticRenderFns"],!1,null,"69e2a36e",null,!1,n["components"],a);o.options.__file="uni_modules/uview-ui/components/u-upload/u-upload.vue",t["default"]=o.exports},450:function(e,t,i){"use strict";i.r(t);var n=i(451);i.d(t,"render",(function(){return n["render"]})),i.d(t,"staticRenderFns",(function(){return n["staticRenderFns"]})),i.d(t,"recyclableRender",(function(){return n["recyclableRender"]})),i.d(t,"components",(function(){return n["components"]}))},451:function(e,t,i){"use strict";var n;i.r(t),i.d(t,"render",(function(){return s})),i.d(t,"staticRenderFns",(function(){return a})),i.d(t,"recyclableRender",(function(){return u})),i.d(t,"components",(function(){return n}));try{n={uIcon:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(i.bind(null,459))},uLoadingIcon:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/uview-ui/components/u-loading-icon/u-loading-icon")]).then(i.bind(null,557))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var s=function(){var e=this,t=e.$createElement,i=(e._self._c,e.__get_style([e.$u.addStyle(e.customStyle)])),n=e.previewImage?e.__map(e.lists,(function(t,i){var n=e.__get_orig(t),s=t.isImage||t.type&&"image"===t.type?e.$u.addUnit(e.width):null,u=t.isImage||t.type&&"image"===t.type?e.$u.addUnit(e.height):null;return{$orig:n,g0:s,g1:u}})):null,s=!e.isInCount||e.$slots.default||e.$slots.$default?null:e.$u.addUnit(e.width),u=!e.isInCount||e.$slots.default||e.$slots.$default?null:e.$u.addUnit(e.height);e.$mp.data=Object.assign({},{$root:{s0:i,l0:n,g2:s,g3:u}})},u=!1,a=[];s._withStripped=!0},452:function(e,t,i){"use strict";i.r(t);var n=i(453),s=i.n(n);for(var u in n)"default"!==u&&function(e){i.d(t,e,(function(){return n[e]}))}(u);t["default"]=s.a},453:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(454),s=a(i(455)),u=a(i(456));function a(e){return e&&e.__esModule?e:{default:e}}var r={name:"u-upload",mixins:[e.$u.mpMixin,e.$u.mixin,s.default,u.default],data:function(){return{lists:[],isInCount:!0}},watch:{fileList:{immediate:!0,handler:function(){this.formatFileList()}}},methods:{formatFileList:function(){var t=this,i=this.fileList,n=void 0===i?[]:i,s=this.maxCount,u=n.map((function(i){return Object.assign(Object.assign({},i),{isImage:"image"===t.accept||e.$u.test.image(i.url||i.thumb),isVideo:"video"===t.accept||e.$u.test.video(i.url||i.thumb),deletable:"boolean"===typeof i.deletable?i.deletable:t.deletable})}));this.lists=u,this.isInCount=u.length<s},chooseFile:function(){var t=this,i=this.maxCount,s=this.multiple,u=this.lists,a=this.disabled;if(!a){var r;try{r=e.$u.test.array(this.capture)?this.capture:this.capture.split(",")}catch(o){r=[]}(0,n.chooseFile)(Object.assign({accept:this.accept,multiple:this.multiple,capture:r,compressed:this.compressed,maxDuration:this.maxDuration,sizeType:this.sizeType,camera:this.camera},{maxCount:i-u.length})).then((function(e){t.onBeforeRead(s?e:e[0])})).catch((function(e){t.$emit("error",e)}))}},onBeforeRead:function(t){var i=this,n=this.beforeRead,s=this.useBeforeRead,u=!0;e.$u.test.func(n)&&(u=n(t,this.getDetail())),s&&(u=new Promise((function(e,n){i.$emit("beforeRead",Object.assign(Object.assign({file:t},i.getDetail()),{callback:function(t){t?e():n()}}))}))),u&&(e.$u.test.promise(u)?u.then((function(e){return i.onAfterRead(e||t)})):this.onAfterRead(t))},getDetail:function(e){return{name:this.name,index:null==e?this.fileList.length:e}},onAfterRead:function(e){var t=this.maxSize,i=this.afterRead,n=Array.isArray(e)?e.some((function(e){return e.size>t})):e.size>t;n?this.$emit("oversize",Object.assign({file:e},this.getDetail())):("function"===typeof i&&i(e,this.getDetail()),this.$emit("afterRead",Object.assign({file:e},this.getDetail())))},deleteItem:function(e){this.$emit("delete",Object.assign(Object.assign({},this.getDetail(e)),{file:this.fileList[e]}))},onPreviewImage:function(t){var i=this;t.isImage&&this.previewFullImage&&e.previewImage({urls:this.lists.filter((function(t){return"image"===i.accept||e.$u.test.image(t.url||t.thumb)})).map((function(e){return e.url||e.thumb})),current:t.url||t.thumb,fail:function(){e.$u.toast("预览图片失败")}})},onPreviewVideo:function(t){if(this.data.previewFullImage){var i=t.currentTarget.dataset.index,n=this.data.lists;wx.previewMedia({sources:n.filter((function(e){return isVideoFile(e)})).map((function(e){return Object.assign(Object.assign({},e),{type:"video"})})),current:i,fail:function(){e.$u.toast("预览视频失败")}})}},onClickPreview:function(e){var t=e.currentTarget.dataset.index,i=this.data.lists[t];this.$emit("clickPreview",Object.assign(Object.assign({},i),this.getDetail(t)))}}};t.default=r}).call(this,i(1)["default"])},457:function(e,t,i){"use strict";i.r(t);var n=i(458),s=i.n(n);for(var u in n)"default"!==u&&function(e){i.d(t,e,(function(){return n[e]}))}(u);t["default"]=s.a},458:function(e,t,i){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ui/components/u-upload/u-upload.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-upload/u-upload-create-component',
    {
        'uni_modules/uview-ui/components/u-upload/u-upload-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(449))
        })
    },
    [['uni_modules/uview-ui/components/u-upload/u-upload-create-component']]
]);
