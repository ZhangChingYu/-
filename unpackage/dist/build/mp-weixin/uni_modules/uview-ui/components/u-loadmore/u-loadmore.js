(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-loadmore/u-loadmore"],{"095d":function(t,n,o){"use strict";o.r(n);var e=o("d8c0"),i=o.n(e);for(var u in e)"default"!==u&&function(t){o.d(n,t,(function(){return e[t]}))}(u);n["default"]=i.a},"300c":function(t,n,o){},7141:function(t,n,o){"use strict";o.d(n,"b",(function(){return i})),o.d(n,"c",(function(){return u})),o.d(n,"a",(function(){return e}));var e={uLine:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-line/u-line")]).then(o.bind(null,"83f8"))},uLoadingIcon:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-loading-icon/u-loading-icon")]).then(o.bind(null,"6bae"))}},i=function(){var t=this,n=t.$createElement,o=(t._self._c,t.__get_style([t.$u.addStyle(t.customStyle),{backgroundColor:t.bgColor,marginBottom:t.$u.addUnit(t.marginBottom),marginTop:t.$u.addUnit(t.marginTop),height:t.$u.addUnit(t.height)}])),e=t.__get_style([t.loadTextStyle]);t.$mp.data=Object.assign({},{$root:{s0:o,s1:e}})},u=[]},"78bf":function(t,n,o){"use strict";var e=o("300c"),i=o.n(e);i.a},a736:function(t,n,o){"use strict";o.r(n);var e=o("7141"),i=o("095d");for(var u in i)"default"!==u&&function(t){o.d(n,t,(function(){return i[t]}))}(u);o("78bf");var a,r=o("f0c5"),d=Object(r["a"])(i["default"],e["b"],e["c"],!1,null,"0f91d4e1",null,!1,e["a"],a);n["default"]=d.exports},d8c0:function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=i(o("bfbf"));function i(t){return t&&t.__esModule?t:{default:t}}var u={name:"u-loadmore",mixins:[t.$u.mpMixin,t.$u.mixin,e.default],data:function(){return{dotText:"●"}},computed:{loadTextStyle:function(){return{color:this.color,fontSize:t.$u.addUnit(this.fontSize),lineHeight:t.$u.addUnit(this.fontSize),backgroundColor:this.bgColor}},showText:function(){var t="";return t="loadmore"==this.status?this.loadmoreText:"loading"==this.status?this.loadingText:"nomore"==this.status&&this.isDot?this.dotText:this.nomoreText,t}},methods:{loadMore:function(){"loadmore"==this.status&&this.$emit("loadmore")}}};n.default=u}).call(this,o("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-loadmore/u-loadmore-create-component',
    {
        'uni_modules/uview-ui/components/u-loadmore/u-loadmore-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a736"))
        })
    },
    [['uni_modules/uview-ui/components/u-loadmore/u-loadmore-create-component']]
]);
