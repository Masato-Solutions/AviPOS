"use strict";(self.webpackChunkAviPOS_4x=self.webpackChunkAviPOS_4x||[]).push([[9740],{8810:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var n=r(7757),o=r.n(n),s=r(381),a=r.n(s),i=r(1544),c=r(7587),u=r(9671),l=r(7389),p=r(9362);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t,r,n,o,s,a){try{var i=e[s](a),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,o)}const b={name:"ns-sale-report",data:function(){return{startDate:a()(),endDate:a()(),result:[],summary:{},reportType:{label:(0,l.__)("Report Type"),name:"reportType",type:"select",value:"categories_report",options:[{label:(0,l.__)("Categories Detailed"),name:"categories_report"},{label:(0,l.__)("Categories Summary"),name:"categories_summary"},{label:(0,l.__)("Products"),name:"products_report"}],description:(0,l.__)("Allow you to choose the report type.")},field:{type:"datetimepicker",value:"2021-02-07",name:"date"}}},components:{nsDatepicker:i.Z,nsDateTimePicker:c.Z},computed:{},methods:{printSaleReport:function(){this.$htmlToPaper("sale-report")},setStartDate:function(e){this.startDate=e.format()},openSettings:function(){var e,t=this;return(e=o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e,r){Popup.show(p.Z,d(d({},t.reportType),{},{resolve:e,reject:r}))}));case 3:r=e.sent,t.reportType.value=r[0].name,t.result=[],t.loadReport(),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var s=e.apply(t,r);function a(e){h(s,n,o,a,i,"next",e)}function i(e){h(s,n,o,a,i,"throw",e)}a(void 0)}))})()},getType:function(e){var t=this.reportType.options.filter((function(t){return t.name===e}));return t.length>0?t[0].label:(0,l.__)("Unknown")},loadReport:function(){var e=this;if(null===this.startDate||null===this.endDate)return u.kX.error((0,l.__)("Unable to proceed. Select a correct time range.")).subscribe();var t=a()(this.startDate);if(a()(this.endDate).isBefore(t))return u.kX.error((0,l.__)("Unable to proceed. The current time range is not valid.")).subscribe();u.ih.post("/api/nexopos/v4/reports/sale-report",{startDate:this.startDate,endDate:this.endDate,type:this.reportType.value}).subscribe({next:function(t){e.result=t.result,e.summary=t.summary},error:function(e){u.kX.error(e.message).subscribe()}})},computeTotal:function(e,t){return e.length>0?(console.log("computes"),e.map((function(e){return parseFloat(e[t])})).reduce((function(e,t){return e+t}))):0},setEndDate:function(e){this.endDate=e.format()}}},m=b;const y=(0,r(1900).Z)(m,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null).exports},9362:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(8603),o=r(7389);const s={data:function(){return{value:[],options:[],label:null,type:"select"}},computed:{},mounted:function(){this.popupCloser(),this.value=this.$popupParams.value||[],this.options=this.$popupParams.options,this.label=this.$popupParams.label,this.type=this.$popupParams.type||this.type},methods:{popupCloser:n.Z,__:o.__,toggle:function(e){var t=this.value.indexOf(e);-1===t?this.value.unshift(e):this.value.splice(t,1)},isSelected:function(e){return this.value.indexOf(e)>=0},close:function(){this.$popupParams.reject(!1),this.$popup.close()},select:function(e){void 0!==e&&(this.value=[e]),this.$popupParams.resolve(this.value),this.close()}}};const a=(0,r(1900).Z)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"shadow-xl bg-surface-tertiary w-6/7-screen md:w-4/7-screen lg:w-3/7-screen overflow-hidden"},[r("div",{staticClass:"p-2 flex justify-between border-b border-surface-secondary"},[r("span",{staticClass:"text-semibold text-primary"},[e._v("\n            "+e._s(e.label)+"\n        ")]),e._v(" "),r("div",[r("ns-close-button",{on:{click:function(t){return e.close()}}})],1)]),e._v(" "),r("div",{staticClass:"flex-auto overflow-y-auto"},[r("ul",["select"===e.type?e._l(e.options,(function(t){return r("li",{key:t.value,staticClass:"p-2 border-b border-surface-secondary text-primary cursor-pointer hover:bg-surface-secondary",on:{click:function(r){return e.select(t)}}},[e._v(e._s(t.label))])})):e._e(),e._v(" "),"multiselect"===e.type?e._l(e.options,(function(t){return r("li",{key:t.value,staticClass:"p-2 border-b text-primary cursor-pointer hover:bg-surface-secondary",class:e.isSelected(t)?"bg-surface-secondary border-surface-secondary":"border-surface-secondary",on:{click:function(r){return e.toggle(t)}}},[e._v(e._s(t.label))])})):e._e()],2)]),e._v(" "),"multiselect"===e.type?r("div",{staticClass:"flex justify-between"},[r("div"),e._v(" "),r("div",[r("ns-button",{attrs:{type:"info"},on:{click:function(t){return e.select()}}},[e._v(e._s(e.__("Select")))])],1)]):e._e()])}),[],!1,null,null,null).exports}}]);