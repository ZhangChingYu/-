(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my-address/add-address"],{221:function(e,t,n){"use strict";(function(e){n(5);r(n(4));var t=r(n(222));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},222:function(e,t,n){"use strict";n.r(t);var r=n(223),i=n(225);for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);n(227);var o,a=n(11),c=Object(a["default"])(i["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],o);c.options.__file="pages/my-address/add-address.vue",t["default"]=c.exports},223:function(e,t,n){"use strict";n.r(t);var r=n(224);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},224:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return i})),n.d(t,"staticRenderFns",(function(){return o})),n.d(t,"recyclableRender",(function(){return s})),n.d(t,"components",(function(){return r}));var i=function(){var e=this,t=e.$createElement;e._self._c},s=!1,o=[];i._withStripped=!0},225:function(e,t,n){"use strict";n.r(t);var r=n(226),i=n.n(r);for(var s in r)"default"!==s&&function(e){n.d(t,e,(function(){return r[e]}))}(s);t["default"]=i.a},226:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n(4);var r=n(13);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){Promise.all([n.e("common/vendor"),n.e("components/uni/mpvue-citypicker/mpvueCityPicker")]).then(function(){return resolve(n(508))}.bind(null,n)).catch(n.oe)},c={data:function(){return{cityPickerValueDefault:[0,0,1],addressObj:{receiverName:"",receiverPhone:"",region:"请选择",addressDetail:"",rank:"",isDefault:!1},i:-1,isStatus:!1}},onLoad:function(t){if(t.data){e.setNavigationBarTitle({title:"修改地址"});var n=JSON.parse(t.data);this.addressObj=n.item,this.i=n.index,this.isStatus=!0}},components:{mpvueCityPicker:a},methods:s(s({},(0,r.mapActions)(["createAddressFn","updateAddressFn"])),{},{deleteAdd:function(){var t=this,n=this,r=e.getStorageSync("user").phone,i=this.addressObj.rank;n.api.del("/setting/address",{phone:r,rank:i}).then((function(n){t.$toast("删除成功"),e.navigateTo({url:"/pages/my-address/address"})})).catch((function(e){console.log(e)}))},showCityPicker:function(){this.$refs.mpvueCityPicker.show()},onConfirm:function(e){this.pickerText=JSON.stringify(e),this.addressObj.region=e.label},select:function(){this.addressObj.isDefault=!this.addressObj.isDefault},commit:function(){var t,n=this,r=e.getStorageSync("user").phone,i=this.addressObj;(this.$set(i,"phone",r),console.log(i),this.isStatus)?(n.api.put("/setting/address",i).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),e.navigateTo({url:"/pages/my-address/address"})):(t=1==i.isDefault?1:0,n.api.post("/setting/address",{phone:r,isDefaultAddress:t,receiverName:i.receiverName,receiverPhone:i.receiverPhone,region:i.region,addressDetail:i.addressDetail}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),e.navigateTo({url:"/pages/my-address/address"}))}})};t.default=c}).call(this,n(1)["default"])},227:function(e,t,n){"use strict";n.r(t);var r=n(228),i=n.n(r);for(var s in r)"default"!==s&&function(e){n.d(t,e,(function(){return r[e]}))}(s);t["default"]=i.a},228:function(e,t,n){}},[[221,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my-address/add-address.js.map