/*! For license information please see 872.js.LICENSE.txt */
"use strict";(self.webpackChunknexopos_4x=self.webpackChunknexopos_4x||[]).push([[872],{4872:(t,e,r)=>{r.r(e),r.d(e,{default:()=>v});r(381);var n=r(9785),o=r(1487),i=r(3431),a=r(8094),s=r(3658),c=r(2909),u=r(5507);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function p(){p=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof b?e:b,a=Object.create(i.prototype),s=new C(n||[]);return o(a,"_invoke",{value:R(t,r,s)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var v="suspendedStart",d="suspendedYield",y="executing",m="completed",g={};function b(){}function w(){}function _(){}var x={};u(x,a,(function(){return this}));var k=Object.getPrototypeOf,L=k&&k(k(F([])));L&&L!==r&&n.call(L,a)&&(x=L);var E=_.prototype=b.prototype=Object.create(x);function P(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,i,a,s){var c=h(t[o],t,i);if("throw"!==c.type){var u=c.arg,p=u.value;return p&&"object"==l(p)&&n.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(p).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function R(e,r,n){var o=v;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var s=n.delegate;if(s){var c=T(s,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=h(e,r,n);if("normal"===u.type){if(o=n.done?m:d,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=m,n.method="throw",n.arg=u.arg)}}}function T(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,T(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function F(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(l(e)+" is not iterable")}return w.prototype=_,o(E,"constructor",{value:_,configurable:!0}),o(_,"constructor",{value:w,configurable:!0}),w.displayName=u(_,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},P(S.prototype),u(S.prototype,s,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new S(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},P(E),u(E,c,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=F,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:F(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function f(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}const h={name:"ns-low-stock-report",mounted:function(){this.reportType=this.options[0].value,this.loadRelevantReport()},components:{nsDatepicker:n.Z,nsDateTimePicker:i.Z,nsPaginate:u.Z},data:function(){return{products:[],options:[{label:(0,a.__)("Stock Report"),value:"stock_report"},{label:(0,a.__)("Low Stock Report"),value:"low_stock"}],stockReportResult:{},reportType:"",reportTypeName:"",validation:new s.Z}},watch:{reportType:function(){var t=this,e=this.options.filter((function(e){return e.value===t.reportType}));e.length>0?this.reportTypeName=e[0].label:this.reportTypeName=(0,a.__)("N/A")}},methods:{__:a.__,selectReport:function(){var t,e=this;return(t=p().mark((function t(){var r;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(t,r){Popup.show(c.Z,{label:(0,a.__)("Report Type"),options:e.options,resolve:t,reject:r})}));case 3:r=t.sent,e.reportType=r[0].value,e.loadRelevantReport(),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){f(i,n,o,a,s,"next",t)}function s(t){f(i,n,o,a,s,"throw",t)}a(void 0)}))})()},loadRelevantReport:function(){switch(this.reportType){case"stock_report":this.loadStockReport();break;case"low_stock":this.loadReport()}},printSaleReport:function(){this.$htmlToPaper("low-stock-report")},loadStockReport:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;o.ih.get(e||"/api/nexopos/v4/reports/stock-report").subscribe({next:function(e){t.stockReportResult=e},error:function(t){o.kX.error(t.message).subscribe()}})},totalSum:function(t,e,r){if(void 0!==t.data){var n=t.data.map((function(t){return t.unit_quantities})).map((function(t){var n=t.map((function(t){return t[e]*t[r]}));return n.length>0?n.reduce((function(t,e){return parseFloat(t)+parseFloat(e)})):0}));if(n.length>0)return n.reduce((function(t,e){return parseFloat(t)+parseFloat(e)}))}return 0},sum:function(t,e){if(void 0!==t.data){var r=t.data.map((function(t){return t.unit_quantities})).map((function(t){var r=t.map((function(t){return t[e]}));return r.length>0?r.reduce((function(t,e){return parseFloat(t)+parseFloat(e)})):0}));if(r.length>0)return r.reduce((function(t,e){return parseFloat(t)+parseFloat(e)}))}return 0},loadReport:function(){var t=this;o.ih.get("/api/nexopos/v4/reports/low-stock").subscribe({next:function(e){t.products=e},error:function(t){o.kX.error(t.message).subscribe()}})}}};const v=(0,r(1900).Z)(h,undefined,undefined,!1,null,null,null).exports},2909:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(2867),o=r(8094);const i={data:function(){return{value:[],options:[],description:"",label:null,type:"select"}},computed:{},mounted:function(){this.popupCloser(),this.value=this.$popupParams.value||[],this.options=this.$popupParams.options,this.label=this.$popupParams.label,this.description=this.$popupParams.description||"",this.type=this.$popupParams.type||this.type},methods:{popupCloser:n.Z,__:o.__,toggle:function(t){var e=this.value.indexOf(t);-1===e?this.value.unshift(t):this.value.splice(e,1)},isSelected:function(t){return this.value.indexOf(t)>=0},close:function(){this.$popupParams.reject(!1),this.$popup.close()},select:function(t){void 0!==t&&(this.value=[t]),this.$popupParams.resolve(this.value),this.close()}}};const a=(0,r(1900).Z)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"shadow-xl ns-box w-6/7-screen md:w-4/7-screen lg:w-3/7-screen max-h-5/6-screen overflow-hidden flex flex-col"},[e("div",{staticClass:"p-2 flex justify-between border-b items-center ns-box-header"},[e("span",{staticClass:"text-semibold text-primary"},[t._v("\n            "+t._s(t.label)+"\n        ")]),t._v(" "),e("div",[e("ns-close-button",{on:{click:function(e){return t.close()}}})],1)]),t._v(" "),e("div",{staticClass:"flex flex-col overflow-hidden"},[t.description.length>0?e("p",{staticClass:"p-2 text-center text-sm bg-info-primary"},[t._v(t._s(t.description))]):t._e(),t._v(" "),e("div",{staticClass:"overflow-y-auto"},[e("ul",{staticClass:"ns-vertical-menu"},["select"===t.type?t._l(t.options,(function(r){return e("li",{key:r.value,staticClass:"p-2 border-b border-box-edge text-primary cursor-pointer",on:{click:function(e){return t.select(r)}}},[t._v(t._s(r.label))])})):t._e(),t._v(" "),"multiselect"===t.type?t._l(t.options,(function(r){return e("li",{key:r.value,staticClass:"p-2 border-b text-primary cursor-pointer",class:t.isSelected(r)?"active":"",on:{click:function(e){return t.toggle(r)}}},[t._v(t._s(r.label))])})):t._e()],2)])]),t._v(" "),"multiselect"===t.type?e("div",{staticClass:"flex justify-between"},[e("div"),t._v(" "),e("div",[e("ns-button",{attrs:{type:"info"},on:{click:function(e){return t.select()}}},[t._v(t._s(t.__("Select")))])],1)]):t._e()])}),[],!1,null,null,null).exports}}]);