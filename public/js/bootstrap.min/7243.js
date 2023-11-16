"use strict";(self.webpackChunkAviPOS_4x=self.webpackChunkAviPOS_4x||[]).push([[7243],{7243:(t,e,s)=>{s.r(e),s.d(e,{default:()=>a});const l={name:"ns-cashier-dashboard",props:["showCommission"],data:function(){return{report:{}}},methods:{__,refreshReport:function(){Cashier.refreshReport()},getOrderStatus:function(t){switch(t){case"paid":return __("Paid");case"partially_paid":return __("Partially Paid");case"unpaid":return __("Unpaid");case"hold":return __("Hold");case"order_void":return __("Void");case"refunded":return __("Refunded");case"partially_refunded":return __("Partially Refunded");default:return $status}}},mounted:function(){var t=this;Cashier.mysales.subscribe((function(e){t.report=e}));var e=document.createRange().createContextualFragment('<div clss="px-2">\n            <div class="mr-2">\n                <div \n                    id="refresh-button" \n                    class="hover:bg-white hover:text-gray-700 hover:shadow-lg hover:border-opacity-0 rounded-full h-12 w-12 cursor-pointer font-bold text-2xl justify-center items-center flex text-gray-800 border border-gray-400">\n                    <i class="las la-sync-alt"></i>\n                </div>             \n            </div>\n        </div>');document.querySelector(".top-tools-side").prepend(e),document.querySelector("#refresh-button").addEventListener("click",(function(){return t.refreshReport()}))}};const a=(0,s(1900).Z)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"flex -mx-4 flex-wrap"},[s("div",{staticClass:"px-4 w-full mb-6",class:t.showCommission?"md:w-1/2 lg:w-1/4":"md:w-1/3"},[s("div",{staticClass:"flex flex-auto flex-col rounded-lg shadow-lg bg-gradient-to-br from-purple-400 to-purple-600 text-white px-3 py-5"},[s("div",{staticClass:"flex flex-row md:flex-col flex-auto"},[s("div",{staticClass:"w-1/2 md:w-full flex md:flex-col md:items-start items-center justify-center"},[s("h6",{staticClass:"font-bold hidden text-right md:inline-block"},[t._v(t._s(t.__("Total Sales")))]),t._v(" "),s("h3",{staticClass:"text-2xl font-black"},[t._v("\n                            "+t._s(t._f("currency")(t.report.total_sales_amount,"abbreviate"))+"\n                        ")])]),t._v(" "),s("div",{staticClass:"w-1/2 md:w-full flex flex-col px-2 justify-end items-end"},[s("h6",{staticClass:"font-bold inline-block text-right md:hidden"},[t._v(t._s(t.__("Total Sales")))]),t._v(" "),s("h4",{staticClass:"text-xs text-right"},[t._v("+"+t._s(t._f("currency")(t.report.total_sales_amount))+" "+t._s(t.__("Today")))])])])])]),t._v(" "),s("div",{staticClass:"px-4 w-full mb-6",class:t.showCommission?"md:w-1/2 lg:w-1/4":"md:w-1/3"},[s("div",{staticClass:"flex flex-auto flex-col rounded-lg shadow-lg bg-gradient-to-br from-red-400 to-red-600 text-white px-3 py-5"},[s("div",{staticClass:"flex flex-row md:flex-col flex-auto"},[s("div",{staticClass:"w-1/2 md:w-full flex md:flex-col md:items-start items-center justify-center"},[s("h6",{staticClass:"font-bold hidden text-right md:inline-block"},[t._v(t._s(t.__("Total Refunds")))]),t._v(" "),s("h3",{staticClass:"text-2xl font-black"},[t._v("\n                            "+t._s(t._f("currency")(t.report.total_refunds_amount,"abbreviate"))+"\n                        ")])]),t._v(" "),s("div",{staticClass:"w-1/2 md:w-full flex flex-col px-2 justify-end items-end"},[s("h6",{staticClass:"font-bold inline-block text-right md:hidden"},[t._v(t._s(t.__("Total Refunds")))]),t._v(" "),s("h4",{staticClass:"text-xs text-right"},[t._v("+"+t._s(t._f("currency")(t.report.today_refunds_amount))+" "+t._s(t.__("Today")))])])])])]),t._v(" "),s("div",{staticClass:"px-4 w-full mb-6",class:t.showCommission?"md:w-1/2 lg:w-1/4":"md:w-1/3"},[s("div",{staticClass:"flex flex-auto flex-col rounded-lg shadow-lg bg-gradient-to-br from-blue-400 to-blue-600 text-white px-3 py-5"},[s("div",{staticClass:"flex flex-row md:flex-col flex-auto"},[s("div",{staticClass:"w-1/2 md:w-full flex md:flex-col md:items-start items-center justify-center"},[s("h6",{staticClass:"font-bold hidden text-right md:inline-block"},[t._v(t._s(t.__("Clients Registered")))]),t._v(" "),s("h3",{staticClass:"text-2xl font-black"},[t._v("\n                            "+t._s(t.report.total_customers)+"\n                        ")])]),t._v(" "),s("div",{staticClass:"w-1/2 md:w-full flex flex-col px-2 justify-end items-end"},[s("h6",{staticClass:"font-bold inline-block text-right md:hidden"},[t._v(t._s(t.__("Clients Registered")))]),t._v(" "),s("h4",{staticClass:"text-xs text-right"},[t._v("+"+t._s(t.report.today_customers)+" "+t._s(t.__("Today")))])])])])]),t._v(" "),t.showCommission?s("div",{staticClass:"px-4 w-full mb-6",class:t.showCommission?"md:w-1/2 lg:w-1/4":"md:w-1/3"},[s("div",{staticClass:"flex flex-auto flex-col rounded-lg shadow-lg bg-gradient-to-br from-green-400 to-green-600 text-white px-3 py-5"},[s("div",{staticClass:"flex flex-row md:flex-col flex-auto"},[s("div",{staticClass:"w-1/2 md:w-full flex md:flex-col md:items-start items-center justify-center"},[s("h6",{staticClass:"font-bold hidden text-right md:inline-block"},[t._v(t._s(t.__("Commissions")))]),t._v(" "),s("h3",{staticClass:"text-2xl font-black"},[t._v("\n                            "+t._s(t._f("currency")(t.report.total_commissions))+"\n                        ")])]),t._v(" "),s("div",{staticClass:"w-1/2 md:w-full flex flex-col px-2 justify-end items-end"},[s("h6",{staticClass:"font-bold inline-block text-right md:hidden"},[t._v(t._s(t.__("Commissions")))]),t._v(" "),s("h4",{staticClass:"text-xs text-right"},[t._v("+"+t._s(t._f("currency")(t.report.today_commissions))+" "+t._s(t.__("Today")))])])])])]):t._e()]),t._v(" "),s("div",{staticClass:"py-4"},[t.report.today_orders&&t.report.today_orders.length>0?s("ul",{staticClass:"bg-white shadow-lg rounded overflow-hidden"},t._l(t.report.today_orders,(function(e){return s("li",{key:e.id,staticClass:"p-2 border-b-2 border-blue-400"},[s("h3",{staticClass:"font-semibold text-lg flex justify-between"},[s("span",[t._v(t._s(t.__("Total"))+" : "+t._s(t._f("currency")(e.total)))]),t._v(" "),s("span",[t._v(t._s(e.code))])]),t._v(" "),s("ul",{staticClass:"pt-2 flex -mx-1 text-sm text-gray-700"},[s("li",{staticClass:"px-1"},[t._v(t._s(t.__("Discount"))+" : "+t._s(t._f("currency")(e.discount)))]),t._v(" "),s("li",{staticClass:"px-1"},[t._v(t._s(t.__("Status"))+" : "+t._s(t.getOrderStatus(e.payment_status)))])])])})),0):t._e(),t._v(" "),t.report.today_orders&&0===t.report.today_orders.length?s("div",{staticClass:"flex items-center justify-center"},[s("i",{staticClass:"las la-frown"})]):t._e()])])}),[],!1,null,null,null).exports}}]);