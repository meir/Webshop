webpackJsonp([1],{ELya:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},a,!1,function(t){n("ELya")},null,null).exports,i=n("/ocq"),o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full border-b border-solid border-0 border-gray-200",attrs:{id:"nav"}},[e("ul",{staticClass:"flex flex-1 list-none m-0 pt-4 pb-4"},[e("a",{attrs:{href:"/"}},[e("li",[this._v("HOME")])]),this._v(" "),e("a",{attrs:{href:"/products"}},[e("li",[this._v("PRODUCTS")])]),this._v(" "),e("a",{attrs:{href:"/categories"}},[e("li",[this._v("CATEGORIES")])])])])}]};var l=n("VU/8")(null,o,!1,function(t){n("dgo5")},null,null).exports,c={name:"Index",components:{navbar:l}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full h-full"},[e("navbar")],1)},staticRenderFns:[]},d=n("VU/8")(c,u,!1,null,null,null).exports,p={name:"ProductImage",props:["product","image_id"],data:function(){return{image_data:""}},mounted:function(){var t=this;axios.get("http://localhost/api/products/image?id="+this.image_id).then(function(e){t.image_data=e.data})}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n    "+t._s(t.product.Name)+"\n    "),n("span",{staticClass:"text-gray-400"},[t._v(t._s(t.product.Description))]),t._v(" "),n("img",{attrs:{src:t.image_data}})])},staticRenderFns:[]},h={name:"Index",mounted:function(){var t=this;axios.get("http://localhost/api/products/all").then(function(e){t.products=e.data})},data:function(){return{products:[]}},methods:{},components:{navbar:l,"product-tile":n("VU/8")(p,f,!1,null,null,null).exports}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full h-full"},[e("navbar"),this._v(" "),e("div",{staticClass:"flex flex-1 flex-wrap"},this._l(this.products,function(t,n){return e("div",{key:n,staticClass:"product my-2 h-32 border-b border-solid border-0 border-gray-200"},[e("product-tile",{attrs:{product:t,image_id:JSON.parse(t.Images)[0]}})],1)}),0)],1)},staticRenderFns:[]};var v=n("VU/8")(h,m,!1,function(t){n("kfRQ")},null,null).exports,_={name:"Index",components:{navbar:l}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full h-full"},[e("navbar")],1)},staticRenderFns:[]},b=n("VU/8")(_,g,!1,null,null,null).exports;r.a.use(i.a);var x=new i.a({mode:"history",routes:[{path:"/",name:"Index",component:d},{path:"/products",name:"Products",component:v},{path:"/categories",name:"Categories",component:b}]}),E=n("mtWM"),w=n.n(E);window.axios=w.a,r.a.config.productionTip=!1,new r.a({el:"#app",router:x,components:{App:s},template:"<App/>"})},dgo5:function(t,e){},kfRQ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f56d2c1ca2e2bb115da0.js.map