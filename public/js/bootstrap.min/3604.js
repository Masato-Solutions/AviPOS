"use strict";(self.webpackChunkAviPOS_4x=self.webpackChunkAviPOS_4x||[]).push([[3604],{3604:(t,s,e)=>{e.r(s),e.d(s,{default:()=>r});e(9671);const a={name:"ns-best-customers",mounted:function(){var t=this;this.hasLoaded=!1,this.subscription=Dashboard.bestCustomers.subscribe((function(s){t.hasLoaded=!0,t.customers=s}))},methods:{__:e(7389).__},data:function(){return{customers:[],subscription:null,hasLoaded:!1}},destroyed:function(){this.subscription.unsubscribe()}};const r=(0,e(1900).Z)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"flex flex-auto flex-col shadow rounded-lg overflow-hidden"},[e("div",{staticClass:"head bg-white flex-auto"},[e("div",{staticClass:"head text-center border-b border-gray-200 text-gray-700 w-full py-2"},[e("h5",[t._v(t._s(t.__("Best Customers")))])]),t._v(" "),e("div",{staticClass:"body"},[t.hasLoaded?t._e():e("div",{staticClass:"h-56 w-full flex items-center justify-center"},[e("ns-spinner",{attrs:{size:"12",border:"4"}})],1),t._v(" "),t.hasLoaded&&0===t.customers.length?e("div",{staticClass:"h-56 flex items-center justify-center flex-col"},[e("i",{staticClass:"las la-grin-beam-sweat text-6xl text-gray-700"}),t._v(" "),e("p",{staticClass:"text-gray-600 text-sm"},[t._v(t._s(t.__("Well.. nothing to show for the meantime")))])]):t._e(),t._v(" "),t.customers.length>0?e("table",{staticClass:"table w-full"},[e("thead",t._l(t.customers,(function(s){return e("tr",{key:s.id,staticClass:"border-gray-300 border-b text-sm"},[e("th",{staticClass:"p-2"},[e("div",{staticClass:"-mx-1 flex justify-start items-center"},[t._m(0,!0),t._v(" "),e("div",{staticClass:"px-1 justify-center"},[e("h3",{staticClass:"font-semibold text-gray-600 items-center"},[t._v(t._s(s.name))])])])]),t._v(" "),e("th",{staticClass:"flex justify-end text-green-700 p-2"},[t._v(t._s(t._f("currency")(s.purchases_amount)))])])})),0)]):t._e()])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"px-1"},[s("div",{staticClass:"rounded-full bg-gray-200 h-6 w-6 "},[s("img",{attrs:{src:"/images/user.png"}})])])}],!1,null,null,null).exports}}]);