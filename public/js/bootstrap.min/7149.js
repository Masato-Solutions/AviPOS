"use strict";(self.webpackChunkAviPOS_4x=self.webpackChunkAviPOS_4x||[]).push([[7149],{7149:(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var a=s(7389);const r={name:"ns-orders-chart",data:function(){return{totalWeeklySales:0,totalWeekTaxes:0,totalWeekExpenses:0,totalWeekIncome:0,chartOptions:{chart:{id:"vuechart-example",width:"100%",height:"100%"},stroke:{curve:"smooth",dashArray:[0,8]},xaxis:{categories:[]},colors:["#5f83f3","#AAA"]},series:[{name:(0,a.__)("Current Week"),data:[]},{name:(0,a.__)("Previous Week"),data:[]}],reportSubscription:null,report:null}},methods:{__:a.__},mounted:function(){var e=this;this.reportSubscription=Dashboard.weeksSummary.subscribe((function(t){void 0!==t.result&&(e.chartOptions.xaxis.categories=t.result.map((function(e){return e.label})),e.report=t,e.totalWeeklySales=0,e.totalWeekIncome=0,e.totalWeekExpenses=0,e.totalWeekTaxes=0,e.report.result.forEach((function(t,s){if(void 0!==t.current){var a=t.current.entries.map((function(e){return e.day_paid_orders})),r=0;a.length>0&&(r=a.reduce((function(e,t){return e+t}))),e.totalWeekExpenses+=t.current.entries.map((function(e){return parseFloat(e.day_expenses)})).reduce((function(e,t){return e+t})),e.totalWeekTaxes+=t.current.entries.map((function(e){return parseFloat(e.day_taxes)})).reduce((function(e,t){return e+t})),e.totalWeekIncome+=t.current.entries.map((function(e){return parseFloat(e.day_income)})).reduce((function(e,t){return e+t})),e.series[0].data.push(r)}else e.series[0].data.push(0);if(void 0!==t.previous){var l=t.previous.entries.map((function(e){return e.day_paid_orders})),n=0;l.length>0&&(n=l.reduce((function(e,t){return e+t}))),e.series[1].data.push(n)}else e.series[1].data.push(0)})),e.totalWeeklySales=e.series[0].data.reduce((function(e,t){return e+t})))}))}};const l=(0,s(1900).Z)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex flex-auto flex-col shadow rounded-lg overflow-hidden",attrs:{id:"ns-orders-chart"}},[s("div",{staticClass:"head flex-auto flex h-56"},[s("div",{staticClass:"w-full h-full pt-2"},[e.report?s("vue-apex-charts",{attrs:{height:"100%",type:"area",options:e.chartOptions,series:e.series}}):e._e()],1)]),e._v(" "),s("div",{staticClass:"foot p-2 -mx-4 flex flex-wrap"},[s("div",{staticClass:"flex w-full md:w-1/2 lg:w-full xl:w-1/2 lg:border-b lg:border-t xl:border-none lg:py-1 lg:my-1"},[s("div",{staticClass:"px-4 w-1/2 lg:w-1/2 flex flex-col items-center justify-center"},[s("span",{staticClass:"text-xs"},[e._v(e._s(e.__("Weekly Sales")))]),e._v(" "),s("h2",{staticClass:"text-lg xl:text-xl font-bold"},[e._v(e._s(e._f("currency")(e.totalWeeklySales,"abbreviate")))])]),e._v(" "),s("div",{staticClass:"px-4 w-1/2 lg:w-1/2 flex flex-col items-center justify-center"},[s("span",{staticClass:"text-xs"},[e._v(e._s(e.__("Week Taxes")))]),e._v(" "),s("h2",{staticClass:"text-lg xl:text-xl font-bold"},[e._v(e._s(e._f("currency")(e.totalWeekTaxes,"abbreviate")))])])]),e._v(" "),s("div",{staticClass:"flex w-full md:w-1/2 lg:w-full xl:w-1/2"},[s("div",{staticClass:"px-4 w-full lg:w-1/2 flex flex-col items-center justify-center"},[s("span",{staticClass:"text-xs"},[e._v(e._s(e.__("Net Income")))]),e._v(" "),s("h2",{staticClass:"text-lg xl:text-xl font-bold"},[e._v(e._s(e._f("currency")(e.totalWeekIncome,"abbreviate")))])]),e._v(" "),s("div",{staticClass:"px-4 w-full lg:w-1/2 flex flex-col items-center justify-center"},[s("span",{staticClass:"text-xs"},[e._v(e._s(e.__("Week Expenses")))]),e._v(" "),s("h2",{staticClass:"text-lg xl:text-xl font-bold"},[e._v(e._s(e._f("currency")(e.totalWeekExpenses,"abbreviate")))])])])])])}),[],!1,null,null,null).exports}}]);