(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/classify/index"],{"0426":function(t,e,n){},"0e0d":function(t,e,n){"use strict";var s=n("0426"),o=n.n(s);o.a},"13ca":function(t,e,n){"use strict";n.r(e);var s=n("8a4c"),o=n.n(s);for(var c in s)"default"!==c&&function(t){n.d(e,t,(function(){return s[t]}))}(c);e["default"]=o.a},"59f2":function(t,e,n){"use strict";(function(t){n("df27");s(n("66fd"));var e=s(n("88ef"));function s(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"623a":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return s}));var s={uEmpty:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-empty/u-empty")]).then(n.bind(null,"e2ff"))}},o=function(){var t=this,e=t.$createElement;t._self._c},c=[]},"88ef":function(t,e,n){"use strict";n.r(e);var s=n("623a"),o=n("13ca");for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);n("0e0d");var i,r=n("f0c5"),u=Object(r["a"])(o["default"],s["b"],s["c"],!1,null,"f96d2b62",null,!1,s["a"],i);e["default"]=u.exports},"8a4c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=o(n("a34a"));function o(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n,s,o,c,i){try{var r=t[c](i),u=r.value}catch(a){return void n(a)}r.done?e(u):Promise.resolve(u).then(s,o)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(s,o){var i=t.apply(e,n);function r(t){c(i,s,o,r,u,"next",t)}function u(t){c(i,s,o,r,u,"throw",t)}r(void 0)}))}}n("9111");var r=function(){n.e("components/classitem/index").then(function(){return resolve(n("1759"))}.bind(null,n)).catch(n.oe)},u=function(){n.e("components/nomore/index").then(function(){return resolve(n("888d"))}.bind(null,n)).catch(n.oe)},a=function(){n.e("components/goods/index").then(function(){return resolve(n("823f"))}.bind(null,n)).catch(n.oe)},l={components:{Goods:a,Classitem:r,Nomore:u},data:function(){return{user:{},classify:!1,sort:!1,isGet:!1,class_selected:-2,sort_selected:1,productList:[],showProductList:[],classList:[]}},onShow:function(){var e=t.getStorageSync("choosedCatalog");console.log(e),this.getProductList(e),this.getClassList()},onHide:function(){console.log("App Hide"),t.setStorageSync("choosedCatalog",-1)},onPullDownRefresh:function(){var t=this.class_selected;this.class_selected=-2,console.log(t),this.getProductList(t),this.getClassList()},mounted:function(){this.user=t.getStorageSync("user")},computed:{showModel:function(){return this.classify||this.sort}},onLoad:function(t){t.cnumber&&(this.defaultClass=t.cnumber)},methods:{getSort:function(t){var e=this;this.sort=!1,this.sort_selected!=t&&(this.sort_selected=t,this.loading(),1==t?this.showProductList=this.productList:2==t?this.showProductList.sort((function(t,e){return console.log(1),t.price-e.price})):3==t&&this.showProductList.sort((function(t,e){return e.price-t.price})),console.log(this.showProductList),this.$forceUpdate(),this.$nextTick((function(){e.loaded()})))},switchClass:function(t,e){this.classify=!1,this.class_selected!=t&&(this.isGet=!1,this.getProductList(t),this.isGet=!0)},closeModel:function(){this.classify=!1,this.sort=!1},getProductList:function(t){var e=this;return i(s.default.mark((function n(){return s.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.sort_selected=1,e.class_selected!=t&&(e.class_selected=t),e.loading(),e.productList=[],e.showProductList=[],n.prev=5,-1==t){n.next=12;break}return n.next=9,e.api.get("/catalog/products",{catalog:t});case 9:e.productList=n.sent,n.next=15;break;case 12:return n.next=14,e.api.get("/homepage",{phone:e.user.phone});case 14:e.productList=n.sent;case 15:e.showProductList=e.productList,console.log(e.showProductList),n.next=22;break;case 19:n.prev=19,n.t0=n["catch"](5),e.$toast(n.t0);case 22:e.$nextTick((function(){e.loaded()}));case 23:case"end":return n.stop()}}),n,null,[[5,19]])})))()},getClassList:function(){var t=this;return i(s.default.mark((function e(){return s.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/catalogs");case 3:t.classList=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),t.$toast(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},classTitle:function(){this.sort=!1,this.classify=!this.classify},sortTitle:function(){this.classify=!1,this.sort=!this.sort},loading:function(){t.showLoading({title:"加载中..."})},loaded:function(){t.hideLoading()}}};e.default=l}).call(this,n("543d")["default"])}},[["59f2","common/runtime","common/vendor"]]]);