webpackJsonp([0],{"s6+2":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e={name:"HelloWorld",data:function(){return{tabs:[{tab:"首页",isActive:!0,path:{name:"home"},flag:["home"]},{tab:"分类",isActive:!1,path:{name:"yinger"},flag:["yinger","haixian"]},{tab:"购物车",isActive:!1,path:{name:"shopcart"},flag:["shopcart"]},{tab:"个人中心",isActive:!1,path:{name:"mine"},flag:["mine"]}]}},methods:{goPath:function(t,a,i){if(!a.isActive){for(var e=0;e<this.tabs.length;e++)if(this.tabs[e].isActive){this.tabs[e].isActive=!1;break}a.isActive=!0,this.$router.push(t)}}},created:function(){for(var t=location.hash.split("/")[1],a=0;a<this.tabs.length;a++)this.tabs[a].flag.indexOf(t)>-1?this.tabs[a].isActive=!0:this.tabs[a].isActive=!1}},s={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"hello"},[i("div",[i("router-view")],1),t._v(" "),i("div",{staticClass:"tabs"},t._l(t.tabs,function(a,e){return i("span",{key:e,class:{active:a.isActive},on:{click:function(i){t.goPath(a.path,a,i)}}},[t._v(t._s(a.tab))])}))])},staticRenderFns:[]};var n=i("VU/8")(e,s,!1,function(t){i("t9yY")},"data-v-27a96e78",null);a.default=n.exports},t9yY:function(t,a){}});
//# sourceMappingURL=0.7f49ad7790fcb91008f2.js.map