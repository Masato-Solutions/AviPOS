"use strict";(self.webpackChunkAviPOS_4x=self.webpackChunkAviPOS_4x||[]).push([[3278],{3278:(s,t,e)=>{e.r(t),e.d(t,{default:()=>i});const a={name:"ns-best-customers",data:function(){return{subscription:null,cashiers:[],hasLoaded:!1}},mounted:function(){var s=this;this.hasLoaded=!1,this.subscription=Dashboard.bestCashiers.subscribe((function(t){s.hasLoaded=!0,s.cashiers=t}))},methods:{__:e(7389).__},destroyed:function(){this.subscription.unsubscribe()}};const i=(0,e(1900).Z)(a,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"flex flex-auto flex-col shadow rounded-lg overflow-hidden",attrs:{id:"ns-best-cashiers"}},[e("div",{staticClass:"flex-auto"},[e("div",{staticClass:"head text-center border-b w-full py-2"},[e("h5",[s._v(s._s(s.__("Best Cashiers")))])]),s._v(" "),e("div",{staticClass:"body"},[s.cashiers.length>0?e("table",{staticClass:"table w-full"},[e("thead",[s._l(s.cashiers,(function(t){return e("tr",{key:t.id,staticClass:"border-b text-sm"},[e("th",{staticClass:"p-2"},[e("div",{staticClass:"-mx-1 flex justify-start items-center"},[s._m(0,!0),s._v(" "),e("div",{staticClass:"px-1 justify-center"},[e("h3",{staticClass:"font-semibold items-center"},[s._v(s._s(t.username))])])])]),s._v(" "),e("th",{staticClass:"flex justify-end p-2"},[s._v(s._s(s._f("currency")(t.total_sales,"abbreviate")))])])})),s._v(" "),0===s.cashiers.length?e("tr",[e("th",{attrs:{colspan:"2"}},[s._v(s._s(s.__("No result to display.")))])]):s._e()],2)]):s._e(),s._v(" "),s.hasLoaded?s._e():e("div",{staticClass:"h-56 flex items-center justify-center"},[e("ns-spinner",{attrs:{size:"8",border:"4"}})],1),s._v(" "),s.hasLoaded&&0===s.cashiers.length?e("div",{staticClass:"h-56 flex items-center justify-center flex-col"},[e("i",{staticClass:"las la-grin-beam-sweat text-6xl"}),s._v(" "),e("p",{staticClass:"text-sm"},[s._v(s._s(s.__("Well.. nothing to show for the meantime.")))])]):s._e()])])])}),[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"px-1"},[t("div",{staticClass:"rounded-full h-6 w-6 "},[t("img",{attrs:{src:"/images/user.png"}})])])}],!1,null,null,null).exports}}]);