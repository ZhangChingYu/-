(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/index"],{205:function(e,n,t){"use strict";(function(e){t(5);r(t(4));var n=r(t(206));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},206:function(e,n,t){"use strict";t.r(n);var r=t(207),a=t(209);for(var o in a)"default"!==o&&function(e){t.d(n,e,(function(){return a[e]}))}(o);t(211);var u,i=t(11),s=Object(i["default"])(a["default"],r["render"],r["staticRenderFns"],!1,null,"4dcceeb0",null,!1,r["components"],u);s.options.__file="pages/my/index.vue",n["default"]=s.exports},207:function(e,n,t){"use strict";t.r(n);var r=t(208);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},208:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return a})),t.d(n,"staticRenderFns",(function(){return u})),t.d(n,"recyclableRender",(function(){return o})),t.d(n,"components",(function(){return r}));var a=function(){var e=this,n=e.$createElement,t=(e._self._c,e.user.userName.length>10?e.user.userName.substr(0,10):null);e.$mp.data=Object.assign({},{$root:{g0:t}})},o=!1,u=[];a._withStripped=!0},209:function(e,n,t){"use strict";t.r(n);var r=t(210),a=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(n,e,(function(){return r[e]}))}(o);n["default"]=a.a},210:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;t(4),t(13);var r={data:function(){return{user:{userName:"",avatar:""},avatar:"",buy:"",sell:"",phone:"",unreadCount:""}},onLoad:function(){var n=e.getStorageSync("user");console.log(123),this.user.userName=n.userName,this.user.avatar=n.avatar,this.phone=n.phone;var t=this,r=n.phone;t.api.get("/manage/user",{phone:r}).then((function(e){t.buy=e.data.buy,t.sell=e.data.sell,console.log(data),console.log(123456789)})),this.getUnread()},methods:{collect:function(){wx.navigateTo({url:"../my-like/like"})},setup:function(){wx.navigateTo({url:"../my-setup/setup"})},realname:function(){var e=this,n=this.phone;this.api.get("/setting/authentication",{phone:n}).then((function(n){console.log(n),202==n?e.$toast("您的实名认证请求正在审核中，请耐心等待"):201==n?e.$toast("您已通过实名认证，无需再次认证"):203==n&&wx.navigateTo({url:"../my-realname/realname"})}))},address:function(){wx.navigateTo({url:"../my-address/address"})},products:function(){wx.navigateTo({url:"/pages/myItem/index"})},pre:function(){wx.navigateTo({url:"/pages/myAppointment/index"})},report:function(){wx.navigateTo({url:"/pages/report/index"})},exchange:function(){wx.navigateTo({url:"/pages/purchased/index"})},info:function(){wx.navigateTo({url:"../my-info/info"})},userDetail:function(e){console.log("phone:",e),wx.navigateTo({url:"../userInfo/userInfo?phone="+e})},getUnread:function(){var e=this,n=this.phone;this.api.get("/setting/unread/count",{phone:n}).then((function(n){e.unreadCount=n}))}}};n.default=r}).call(this,t(1)["default"])},211:function(e,n,t){"use strict";t.r(n);var r=t(212),a=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(n,e,(function(){return r[e]}))}(o);n["default"]=a.a},212:function(e,n,t){}},[[205,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/index.js.map