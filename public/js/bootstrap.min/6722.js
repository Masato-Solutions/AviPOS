"use strict";(self.webpackChunkAviPOS_4x=self.webpackChunkAviPOS_4x||[]).push([[6722],{6722:(t,e,r)=>{r.r(e),r.d(e,{default:()=>d});var s=r(7266),i=r(9671),o=r(7389);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const u={name:"ns-rewards-system",mounted:function(){this.loadForm(),console.log(this.rules)},data:function(){return{formValidation:new s.Z,form:{},nsSnackBar:i.kX,nsHttpClient:i.ih}},props:["submit-method","submit-url","return-url","src","rules"],methods:{__:o.__,submit:function(){var t=this;if(0===this.form.rules.length)return i.kX.error(this.$slots["error-no-rules"]?this.$slots["error-no-rules"]:(0,o.__)("No rules has been provided.")).subscribe();if(this.form.rules.filter((function(t){return t.filter((function(t){return!(t.value>=0)&&"hidden"!==t.type})).length>0})).length>0)return i.kX.error(this.$slots["error-no-valid-rules"]?this.$slots["error-no-valid-rules"]:(0,o.__)("No valid run were provided.")).subscribe();if(this.formValidation.validateForm(this.form).length>0)return i.kX.error(this.$slots["error-invalid-form"]?this.$slots["error-invalid-form"][0].text:(0,o.__)("Unable to proceed, the form is invalid."),this.$slots.okay?this.$slots.okay[0].text:(0,o.__)("OK")).subscribe();if(this.formValidation.disableForm(this.form),void 0===this.submitUrl)return i.kX.error(this.$slots["error-no-submit-url"]?this.$slots["error-no-submit-url"][0].text:(0,o.__)("Unable to proceed, no valid submit URL is defined."),this.$slots.okay?this.$slots.okay[0].text:(0,o.__)("OK")).subscribe();var e=n(n({},this.formValidation.extractForm(this.form)),{},{rules:this.form.rules.map((function(t){var e={};return t.forEach((function(t){e[t.name]=t.value})),e}))});i.ih[this.submitMethod?this.submitMethod.toLowerCase():"post"](this.submitUrl,e).subscribe((function(e){if("success"===e.status)return document.location=t.returnUrl;t.formValidation.enableForm(t.form)}),(function(e){t.formValidation.triggerError(t.form,e.response.data),t.formValidation.enableForm(t.form),i.kX.error(e.data.message||(0,o.__)("An unexpected error has occured"),void 0,{duration:5e3}).subscribe()}))},handleGlobalChange:function(t){this.globallyChecked=t,this.rows.forEach((function(e){return e.$checked=t}))},loadForm:function(){var t=this;i.ih.get("".concat(this.src)).subscribe((function(e){t.form=t.parseForm(e.form)}))},parseForm:function(t){t.main.value=void 0===t.main.value?"":t.main.value,t.main=this.formValidation.createFields([t.main])[0];var e=0;for(var r in t.tabs)0===e&&(t.tabs[r].active=!0),t.tabs[r].active=void 0!==t.tabs[r].active&&t.tabs[r].active,t.tabs[r].fields=this.formValidation.createFields(t.tabs[r].fields),e++;return t},getRuleForm:function(){return JSON.parse(JSON.stringify(this.form.ruleForm))},addRule:function(){this.form.rules.push(this.getRuleForm())},removeRule:function(t){this.form.rules.splice(t,1)}}};const d=(0,r(1900).Z)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form flex-auto flex flex-col",attrs:{id:"crud-form"}},[0===Object.values(t.form).length?r("div",{staticClass:"flex items-center justify-center flex-auto"},[r("ns-spinner")],1):t._e(),t._v(" "),Object.values(t.form).length>0?[r("div",{staticClass:"flex flex-col"},[r("div",{staticClass:"flex justify-between items-center"},[r("label",{staticClass:"font-bold my-2 text-gray-700",attrs:{for:"title"}},[t._t("title",(function(){return[t._v(t._s(t.__("No title Provided")))]}))],2),t._v(" "),r("div",{staticClass:"text-sm my-2 text-gray-700",attrs:{for:"title"}},[t.returnUrl?r("a",{staticClass:"rounded-full border border-gray-400 hover:bg-red-600 hover:text-white bg-white px-2 py-1",attrs:{href:t.returnUrl}},[t._v("Return")]):t._e()])]),t._v(" "),r("div",{staticClass:"flex border-2 rounded overflow-hidden",class:t.form.main.disabled?"border-gray-500":t.form.main.errors.length>0?"border-red-600":"border-blue-500"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.main.value,expression:"form.main.value"}],staticClass:"flex-auto text-gray-700 outline-none h-10 px-2",class:t.form.main.disabled?"bg-gray-400":"",attrs:{disabled:t.form.main.disabled,type:"text"},domProps:{value:t.form.main.value},on:{blur:function(e){return t.formValidation.checkField(t.form.main)},change:function(e){return t.formValidation.checkField(t.form.main)},input:function(e){e.target.composing||t.$set(t.form.main,"value",e.target.value)}}}),t._v(" "),r("button",{staticClass:"outline-none px-4 h-10 text-white border-l border-gray-400",class:t.form.main.disabled?"bg-gray-500":t.form.main.errors.length>0?"bg-red-500":"bg-blue-500",attrs:{disabled:t.form.main.disabled},on:{click:function(e){return t.submit()}}},[t._t("save",(function(){return[t._v(t._s(t.__("Save")))]}))],2)]),t._v(" "),t.form.main.description&&0===t.form.main.errors.length?r("p",{staticClass:"text-xs text-gray-600 py-1"},[t._v(t._s(t.form.main.description))]):t._e(),t._v(" "),t._l(t.form.main.errors,(function(e,s){return r("p",{key:s,staticClass:"text-xs py-1 text-red-500"},[r("span",[t._t("error-required",(function(){return[t._v(t._s(e.identifier))]}))],2)])}))],2),t._v(" "),r("div",{staticClass:"flex -mx-4 mt-4",attrs:{id:"points-wrapper"}},[r("div",{staticClass:"w-full md:w-1/3 lg:1/4 px-4"},[r("div",{staticClass:"bg-white rounded shadow"},[r("div",{staticClass:"header border-b border-gray-200 p-2"},[t._v(t._s(t.__("General")))]),t._v(" "),r("div",{staticClass:"body p-2"},t._l(t.form.tabs.general.fields,(function(t,e){return r("ns-field",{key:e,staticClass:"mb-2",attrs:{field:t}})})),1)]),t._v(" "),r("div",{staticClass:"rounded bg-gray-100 border border-gray-400 p-2 flex justify-between items-center my-3"},[t._t("add",(function(){return[r("span",{staticClass:"text-gray-700"},[t._v(t._s(t.__("Add Rule")))])]})),t._v(" "),r("button",{staticClass:"rounded bg-blue-500 text-white font-semibold flex items-center justify-center h-10 w-10",on:{click:function(e){return t.addRule()}}},[r("i",{staticClass:"las la-plus"})])],2)]),t._v(" "),r("div",{staticClass:"w-full md:w-2/3 lg:3/4 px-4 -m-3 flex flex-wrap items-start justify-start"},t._l(t.form.rules,(function(e,s){return r("div",{key:s,staticClass:"w-full md:w-1/2 p-3"},[r("div",{staticClass:"rounded shadow bg-white flex-auto"},[r("div",{staticClass:"body p-2"},t._l(e,(function(t,e){return r("ns-field",{key:e,staticClass:"mb-2",attrs:{field:t}})})),1),t._v(" "),r("div",{staticClass:"header border-t border-gray-200 p-2 flex justify-end"},[r("ns-button",{attrs:{type:"danger"},on:{click:function(e){return t.removeRule(s)}}},[r("i",{staticClass:"las la-times"})])],1)])])})),0)])]:t._e()],2)}),[],!1,null,null,null).exports}}]);