(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/applyRefund/index"],{373:function(e,t,n){"use strict";(function(e){n(5);r(n(4));var t=r(n(374));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},374:function(e,t,n){"use strict";n.r(t);var r=n(375),o=n(377);for(var s in o)"default"!==s&&function(e){n.d(t,e,(function(){return o[e]}))}(s);n(379);var a,i=n(11),u=Object(i["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],a);u.options.__file="pages/applyRefund/index.vue",t["default"]=u.exports},375:function(e,t,n){"use strict";n.r(t);var r=n(376);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},376:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return o})),n.d(t,"staticRenderFns",(function(){return a})),n.d(t,"recyclableRender",(function(){return s})),n.d(t,"components",(function(){return r}));var o=function(){var e=this,t=e.$createElement,n=(e._self._c,e.order.price.toFixed(2)),r=e.total.toFixed(2);e.$mp.data=Object.assign({},{$root:{g0:n,g1:r}})},s=!1,a=[];o._withStripped=!0},377:function(e,t,n){"use strict";n.r(t);var r=n(378),o=n.n(r);for(var s in r)"default"!==s&&function(e){n.d(t,e,(function(){return r[e]}))}(s);t["default"]=o.a},378:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(39)),o=n(155);function s(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,r,o,s,a){try{var i=e[s](a),u=i.value}catch(c){return void n(c)}i.done?t(u):Promise.resolve(u).then(r,o)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var s=e.apply(t,n);function i(e){a(s,r,o,i,u,"next",e)}function u(e){a(s,r,o,i,u,"throw",e)}i(void 0)}))}}var u={mixins:[o.mixin],data:function(){return{user:{},coverPic:"",order:{price:0},total:0,goodsState:[{state:"未收到货"},{state:"已收到货"}],select1:"请选择货物状态",refundReason:[{reason:"不喜欢/不想要"},{reason:"与卖家协商一致退款"},{reason:"商品与描述不符"},{reason:"质量问题"},{reason:"卖家发错货"},{reason:"发票问题"}],select2:"请选择退款原因",refundRequest:{goodsState:"",refundReason:"",description:""},noGoodsState:!0,isState:!1,isReason:!1}},mounted:function(){this.user=e.getStorageSync("user"),this.getCoverPic()},onLoad:function(e){this.order=JSON.parse(e.orderGoods),this.total=e.total,console.log(this.order.price),console.log(this.total)},methods:{getCoverPic:function(){var e=this;return i(r.default.mark((function t(){var n,o;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,t.prev=1,t.next=4,e.api.get("/orders/product/pic",{number:e.order.proNumber});case 4:o=t.sent,n.coverPic=o.data,e.coverPic=e.imageSrcformat(n.coverPic,"jpg"),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),n.$toast(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()},toSubmit:function(){this.isReason&&this.isState?(this.refundRequest.goodsState=this.select1,this.refundRequest.refundReason=this.select2,this.applyRefund()):this.$toast("请完善退款信息！")},open1:function(){this.$refs.popup.open("bottom")},open2:function(){this.$refs.popdown.open("bottom")},setState:function(e){this.select1=this.goodsState[e].state,this.$refs.popup.close(),"请选择货物状态"!=this.select1&&(this.noGoodsState=!1,this.isState=!0)},setReason:function(e){this.select2=this.refundReason[e].reason,this.$refs.popdown.close(),"请选择退款原因"!=this.select2&&"请先选择货物状态"!=this.select2&&(this.isReason=!0)},applyRefund:function(){var t=this;return i(r.default.mark((function n(){var o;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.api.put("/orders/after",{state:t.order.state,number:t.order.ordNumber,refundRequest:t.refundRequest});case 3:o=n.sent,"666"==o.code&&(e.showToast({title:"已成功提交退款申请！",icon:"success",duration:3e4}),e.navigateBack({delta:2})),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),that.$toast(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}}};t.default=u}).call(this,n(1)["default"])},379:function(e,t,n){"use strict";n.r(t);var r=n(380),o=n.n(r);for(var s in r)"default"!==s&&function(e){n.d(t,e,(function(){return r[e]}))}(s);t["default"]=o.a},380:function(e,t,n){}},[[373,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/applyRefund/index.js.map