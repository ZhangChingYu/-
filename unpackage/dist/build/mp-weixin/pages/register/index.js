(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/index"],{"3c01":function(e,t,r){"use strict";var s=r("baab"),o=r.n(s);o.a},"58db":function(e,t,r){"use strict";(function(e){r("df27");s(r("66fd"));var t=s(r("d790"));function s(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=r,e(t.default)}).call(this,r("543d")["createPage"])},"693b":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{title:"欢迎注册闲置虫虫",agree:!1,agreement:"《软件许可及服务协议》",forms:{userName:"",phone:"",email:"",password:""},err:{password:!1,email:!1,userName:!1,phone:!1},bgcolor:"gainsboro",color:"gray"}},methods:{toLogin:function(){e.redirectTo({url:"/pages/login/index"})},checkName:function(){var e=/^\S*$/;return!e.test(this.forms.userName)||(""==this.forms.userName?(this.err.userName=!1,!0):(this.err.userName=!0,this.$toast("昵称不能包含空格！"),this.forms.userName="",!1))},checkPhone:function(){var e=/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;return!!e.test(this.forms.phone)||(""==this.forms.phone?(this.err.phone=!0,!1):(this.err.phone=!0,this.$toast("手机号码格式输入错误！"),!1))},checkEmail:function(){var e=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;return!!e.test(this.forms.email)||(""==this.forms.email?(this.err.email=!1,!0):(this.err.email=!0,this.$toast("邮箱格式输入错误！"),!1))},checkPsd:function(){var e=/^\w{8,16}$/;return!!e.test(this.forms.password)||(""==this.forms.password?(this.err.password=!0,!1):(this.err.password=!0,this.$toast("密码格式输入错误！8-16位字母、数字和下划线组合"),!1))},handleChange:function(e){this.agree=!this.agree,this.agree?(this.bgcolor="limegreen",this.color="white"):(this.bgcolor="gainsboro",this.color="gray")},toAgreement:function(){e.navigateTo({url:"/pages/agreement/index"})},MessSubmit:function(){var t=this;""==this.forms.phone||""==this.forms.password?this.$toast("请完善注册信息！"):this.agree||this.$toast("请勾选同意相关协议！"),!this.agree||this.err.userName||this.err.phone||this.err.email||this.err.password||t.api.post("/user",t.forms).then((function(e){t.getRegister(e)})).catch((function(r){e.hideToast(),t.$toast(r)}))},getRegister:function(t){var r=this;console.log(t),e.hideToast(),201==t?(e.showToast({title:"注册成功！",icon:"success",duration:3e4}),setTimeout((function(){e.redirectTo({url:"/pages/login/index?username="+r.forms.phone})}),500)):422==t?this.$toast("该手机号已注册！"):421==t?this.$toast("昵称不可包含空格！"):this.$toast("注册失败，信息未成功添加！")}}};t.default=r}).call(this,r("543d")["default"])},"7ccf":function(e,t,r){"use strict";var s;r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return s}));var o=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.err.name=!1},e.e1=function(t){e.err.username=!1},e.e2=function(t){e.err.email=!1},e.e3=function(t){e.err.password=!1})},i=[]},8208:function(e,t,r){"use strict";r.r(t);var s=r("693b"),o=r.n(s);for(var i in s)"default"!==i&&function(e){r.d(t,e,(function(){return s[e]}))}(i);t["default"]=o.a},baab:function(e,t,r){},d790:function(e,t,r){"use strict";r.r(t);var s=r("7ccf"),o=r("8208");for(var i in o)"default"!==i&&function(e){r.d(t,e,(function(){return o[e]}))}(i);r("3c01");var n,a=r("f0c5"),u=Object(a["a"])(o["default"],s["b"],s["c"],!1,null,"080fd97c",null,!1,s["a"],n);t["default"]=u.exports}},[["58db","common/runtime","common/vendor"]]]);