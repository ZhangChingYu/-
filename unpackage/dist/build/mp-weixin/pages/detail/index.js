(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/index"],{"06f3":function(e,t,n){"use strict";(function(e){n("df27");r(n("66fd"));var t=r(n("74b4"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"177e":function(e,t,n){"use strict";var r=n("bd05"),u=n.n(r);u.a},"74b4":function(e,t,n){"use strict";n.r(t);var r=n("b8c7"),u=n("ed76");for(var a in u)"default"!==a&&function(e){n.d(t,e,(function(){return u[e]}))}(a);n("177e");var o,s=n("f0c5"),c=Object(s["a"])(u["default"],r["b"],r["c"],!1,null,"9d4bdaa2",null,!1,r["a"],o);t["default"]=c.exports},"9a32":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("a34a")),u=n("a1fa");function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,r,u,a,o){try{var s=e[a](o),c=s.value}catch(i){return void n(i)}s.done?t(c):Promise.resolve(c).then(r,u)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,u){var a=e.apply(t,n);function s(e){o(a,r,u,s,c,"next",e)}function c(e){o(a,r,u,s,c,"throw",e)}s(void 0)}))}}var c=function(){n.e("components/evaluation/index").then(function(){return resolve(n("34de"))}.bind(null,n)).catch(n.oe)},i={mixins:[u.mixin],components:{Evaluation:c},data:function(){return{number:"",product:"",evaluationList:[],user:{},isLike:!1,priceType:"一口价",reportText:"举报",exit:"返回",evaluation:"",storage:4,show:!1,isBooked:!1,bookNumber:"",Bnumber:"",sellerId:"",showR:!1,replyContent:"",replyFatherId:"",reportReason:[{reason:"广告或垃圾信息"},{reason:"违法或政治敏感信息"},{reason:"色情类信息"},{reason:"欺诈类信息"},{reason:"不举报了"}],oneReport:""}},onLoad:function(e){this.number=e.number},mounted:function(){var t=this;this.user=e.getStorageSync("user"),this.getMessage(),this.getBooked(),this.getEvaluation(),this.$bus.$on("reply",(function(e){t.replyFatherId=e,t.showR=!0,console.log(t.replyFatherId)}))},methods:{replyEvaluation:function(){var e=this;return s(r.default.mark((function t(){var n,u;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,""==e.replyContent||""==e.replyFatherId){t.next=23;break}return e.close(),t.next=5,e.api.post("/product/reply",{number:e.number,phone:e.user.phone,father:e.replyFatherId,content:e.replyContent});case 5:n=t.sent,e.replyContent="",e.replyFatherId="",u="请稍后重试！",t.t0=n,t.next=201===t.t0?12:400===t.t0?16:422===t.t0?18:404===t.t0?20:22;break;case 12:return console.log(12345),u="回复成功！",e.getEvaluation(),t.abrupt("break",22);case 16:return u="回复失败：无权限！",t.abrupt("break",22);case 18:return u="回复失败：商品不存在！",t.abrupt("break",22);case 20:return u="回复失败：数据库更新失败！",t.abrupt("break",22);case 22:e.$toast(u);case 23:t.next=28;break;case 25:t.prev=25,t.t1=t["catch"](0),e.$toast(t.t1);case 28:case"end":return t.stop()}}),t,null,[[0,25]])})))()},sentEvaluation:function(){var e=this;return s(r.default.mark((function t(){var n,u;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("发布的内容："+e.evaluation),t.prev=1,""!=e.evaluation){t.next=5;break}return e.$toast("请输入内容！"),t.abrupt("return");case 5:return t.next=7,e.api.post("/product/comment",{number:e.number,phone:e.user.phone,content:e.evaluation});case 7:n=t.sent,e.evaluation="",u="请稍后重试！",t.t0=n,t.next=201===t.t0?13:400===t.t0?16:422===t.t0?18:404===t.t0?20:22;break;case 13:return u="发布成功！",e.getEvaluation(),t.abrupt("break",22);case 16:return u="发布失败：无权限！",t.abrupt("break",22);case 18:return u="发布失败：商品不存在！",t.abrupt("break",22);case 20:return u="发布失败：数据库更新失败！",t.abrupt("break",22);case 22:e.$toast(u),t.next=28;break;case 25:t.prev=25,t.t1=t["catch"](1),e.$toast(t.t1);case 28:case"end":return t.stop()}}),t,null,[[1,25]])})))()},getEvaluation:function(){var e=this;return s(r.default.mark((function t(){var n;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.api.get("/product/comment",{number:e.number});case 3:n=t.sent,e.evaluationList=[],e.evaluationList=n,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$toast(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},close:function(){this.show=!1,this.showR=!1},back1:function(){e.navigateBack({delta:1})},getMessage:function(){var e=this;return s(r.default.mark((function t(){var n,u;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e,t.prev=1,t.next=4,e.api.get("/product/detail",{number:e.number});case 4:return n=t.sent,t.next=7,e.api.get("/like",{number:e.number,phone:e.user.phone});case 7:for(e.isLike=t.sent,n.seller_pic=e.imageSrcformat(n.seller_pic,"jpg"),u=0;u<n.pictures.length;u++)n.pictures[u]=e.imageSrcformat(n.pictures[u],n.pictureFormats[u]);e.product=n,t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](1),e.$toast(t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})))()},report:function(){this.$refs.popdown.open("bottom")},setReason:function(e){this.oneReport=this.reportReason[e].reason,this.$refs.popdown.close(),"不举报了"!=this.oneReport&&""!=this.oneReport&&this.postReport()},postReport:function(){var e=this;return s(r.default.mark((function t(){var n,u,a;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,t.prev=1,t.next=4,e.api.post("/product/report",{number:e.number,phone:e.user.phone,content:e.oneReport});case 4:u=t.sent,a="",t.t0=u,t.next=201===t.t0?9:400===t.t0?11:422===t.t0?13:15;break;case 9:return a="举报发送成功！",t.abrupt("break",15);case 11:return a="举报失败！",t.abrupt("break",15);case 13:return a="发送失败！",t.abrupt("break",15);case 15:n.$toast(a),t.next=21;break;case 18:t.prev=18,t.t1=t["catch"](1),n.$toast(t.t1);case 21:case"end":return t.stop()}}),t,null,[[1,18]])})))()},getBooked:function(){var e=this;return s(r.default.mark((function t(){var n;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.api.get("/booking/buyer/judgment",{phone:e.user.phone,number:e.number});case 3:n=t.sent,e.isBooked=n.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.$toast(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},like:function(){var e=this;return s(r.default.mark((function t(){var n,u,a;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,e.isLike=!e.isLike,t.prev=2,t.next=5,e.api.post("/like",{number:e.number,phone:e.user.phone});case 5:u=t.sent,a="",t.t0=u,t.next=201===t.t0?10:204===t.t0?12:403===t.t0?14:404===t.t0?17:20;break;case 10:return a="收藏成功！",t.abrupt("break",20);case 12:return a="取消收藏成功！",t.abrupt("break",20);case 14:return a="用户无权限！",e.isLike=!e.isLike,t.abrupt("break",20);case 17:return a="收藏失败！",e.isLike=!e.isLike,t.abrupt("break",20);case 20:n.$toast(a),t.next=26;break;case 23:t.prev=23,t.t1=t["catch"](2),n.$toast(t.t1);case 26:case"end":return t.stop()}}),t,null,[[2,23]])})))()},contact:function(){var t=this;return s(r.default.mark((function n(){var u;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.api.get("/booking/seller/info",{number:t.number});case 3:u=n.sent,"666"==u.code&&(t.sellerId=u.data.phone),e.navigateTo({url:"/pages/message/chat?phone=".concat(t.sellerId,"&userName=").concat(t.product.seller_name,"&avatar=").concat(t.product.seller_pic)}),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](0),t.$toast(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()},showBook:function(){this.show=!0},book:function(){var e=this;return s(r.default.mark((function t(){var n;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.bookNumber&&!(e.bookNumber>e.product.storage)){t.next=5;break}e.bookNumber="",e.$toast("请输入合法的数量"),t.next=25;break;case 5:return e.close(),t.prev=6,t.next=9,e.api.get("/booking/seller/info",{number:e.number});case 9:if(n=t.sent,"666"==n.code&&(e.sellerId=n.data.phone),console.log(e.sellerId),""!=e.sellerId){t.next=15;break}return e.$toast("预约失败"),t.abrupt("return");case 15:return t.next=17,e.api.post("/booking/add",{sellerId:e.sellerId,buyerId:e.user.phone,productId:e.number,productName:e.product.name,ordersNum:e.bookNumber,price:e.product.price});case 17:t.sent,"666"==n.code&&"操作成功！"==n.msg&&(e.$toast("预约成功！"),e.isBooked=!0),t.next=25;break;case 21:t.prev=21,t.t0=t["catch"](6),e.$toast("预约失败"),e.isBooked=!1;case 25:case"end":return t.stop()}}),t,null,[[6,21]])})))()},cancelBook:function(){e.navigateTo({url:"/pages/myAppointment/index"})}}};t.default=i}).call(this,n("543d")["default"])},b8c7:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var r={uSkeleton:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-skeleton/u-skeleton")]).then(n.bind(null,"1f07"))},uSwiper:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-swiper/u-swiper")]).then(n.bind(null,"3604"))},uniPopup:function(){return n.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(n.bind(null,"aa77"))},"u-Input":function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u--input/u--input")]).then(n.bind(null,"b5169"))},uButton:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-button/u-button")]).then(n.bind(null,"7735"))},uEmpty:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-empty/u-empty")]).then(n.bind(null,"e2ff"))},uPopup:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-popup/u-popup")]).then(n.bind(null,"56cc"))}},u=function(){var e=this,t=e.$createElement,n=(e._self._c,""!==e.product&&e.product.price?e.product.price.toFixed(2):null);e.$mp.data=Object.assign({},{$root:{g0:n}})},a=[]},bd05:function(e,t,n){},ed76:function(e,t,n){"use strict";n.r(t);var r=n("9a32"),u=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=u.a}},[["06f3","common/runtime","common/vendor"]]]);