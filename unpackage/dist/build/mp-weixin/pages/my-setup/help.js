(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my-setup/help"],{2061:function(t,e,n){"use strict";n.r(e);var o=n("5a63"),a=n("74e1");for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);n("b47e");var u,i=n("f0c5"),s=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);e["default"]=s.exports},"5a63":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement;t._self._c},c=[]},6147:function(t,e,n){"use strict";(function(t){n("df27");o(n("66fd"));var e=o(n("2061"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"74e1":function(t,e,n){"use strict";n.r(e);var o=n("d443"),a=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);e["default"]=a.a},b47e:function(t,e,n){"use strict";var o=n("d436"),a=n.n(o);a.a},d436:function(t,e,n){},d443:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{catalog:[],secCatelog:[],popText:"",show:-1}},mounted:function(){var t=this,e=this;e.api.get("/setting/help").then((function(e){t.catalog=e,console.log("catalog:",t.catalog)}))},methods:{helpFor:function(t){var e=this;if(t==this.show)this.show=-1;else{this.show=t;var n=this.catalog[t],o=this;o.api.get("/setting/help/catalog",{catalog:n}).then((function(t){e.secCatelog=t,console.log("sec:",e.secCatelog)}))}console.log(this.show)},showHelp:function(e){var n=this,o=e;n.api.get("/setting/help/catalog/question",{question:o}).then((function(e){t.showModal({content:e,showCancel:!1})}))}}};e.default=n}).call(this,n("543d")["default"])}},[["6147","common/runtime","common/vendor"]]]);