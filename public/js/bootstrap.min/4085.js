"use strict";(self.webpackChunkAviPOS_4x=self.webpackChunkAviPOS_4x||[]).push([[4085,2848],{2848:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var i=r(7266),a=r(9671),s=r(4864),n=r(7389);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const l={data:function(){return{formValidation:new i.Z,nsSnackBar:a.kX,nsHttpClient:a.ih,_sampleVariation:null,form:""}},computed:{defaultVariation:function(){var e=new Object;for(var t in this._sampleVariation.tabs)e[t]=new Object,e[t].label=this._sampleVariation.tabs[t].label,e[t].active=this._sampleVariation.tabs[t].active,e[t].fields=this._sampleVariation.tabs[t].fields.filter((function(e){return console.log(e),!["category_id","product_type","stock_management","expires"].includes(e.name)})).map((function(e){return e.value="",e}));return{id:"",tabs:e}}},props:["submit-method","submit-url","return-url","src","units-url"],methods:{__:n.__,getUnitQuantity:function(e){var t=e.filter((function(e){return"quantity"===e.name})).map((function(e){return e.value}));return t.length>0?t[0]:0},removeUnitPriceGroup:function(e,t){var r=this,i=e.filter((function(e){return"id"===e.name&&void 0!==e.value}));Popup.show(s.default,{title:(0,n.__)("Confirm Your Action"),message:(0,n.__)("Would you like to delete this group ?"),onAction:function(a){if(a)if(i.length>0)r.confirmUnitQuantityDeletion({group_fields:e,group:t});else{var s=t.indexOf(e);t.splice(s,1)}}})},confirmUnitQuantityDeletion:function(e){var t=e.group_fields,r=e.group;Popup.show(s.default,{title:(0,n.__)("Your Attention Is Required"),size:"w-3/4-screen h-2/5-screen",message:(0,n.__)("The current unit you're about to delete has a reference on the database and it might have already procured stock. Deleting that reference will remove procured stock. Would you proceed ?"),onAction:function(e){if(e){var i=t.filter((function(e){return"id"===e.name})).map((function(e){return e.value}))[0];a.ih.delete("/api/nexopos/v4/products/units/quantity/".concat(i)).subscribe((function(e){var i=r.indexOf(t);r.splice(i,1),a.kX.success(e.message).subscribe()}),(function(e){nsSnackbar.error(e.message).subscribe()}))}}})},addUnitGroup:function(e){if(0===e.options.length)return a.kX.error((0,n.__)("Please select at least one unit group before you proceed.")).subscribe();e.options.length>e.groups.length?e.groups.push(JSON.parse(JSON.stringify(e.fields))):a.kX.error((0,n.__)("There shoulnd't be more option than there are units.")).subscribe()},loadAvailableUnits:function(e){var t=this;a.ih.get(this.unitsUrl.replace("{id}",e.fields.filter((function(e){return"unit_group"===e.name}))[0].value)).subscribe((function(r){e.fields.forEach((function(e){"group"===e.type&&(e.options=r,e.fields.forEach((function(e){"unit_id"===e.name&&(console.log(e),e.options=r.map((function(e){return{label:e.name,value:e.id}})))})))})),t.$forceUpdate()}))},loadOptionsFor:function(e,t,r){var i=this;a.ih.get(this.unitsUrl.replace("{id}",t)).subscribe((function(t){i.form.variations[r].tabs.units.fields.forEach((function(r){r.name===e&&(r.options=t.map((function(e){return{label:e.name,value:e.id,selected:!1}})))})),i.$forceUpdate()}))},submit:function(){var e=this;if(this.formValidation.validateFields([this.form.main]),this.form.variations.map((function(t){return e.formValidation.validateForm(t)})).filter((function(e){return e.length>0})).length>0||Object.values(this.form.main.errors).length>0)return a.kX.error(this.$slots["error-form-invalid"]?this.$slots["error-form-invalid"][0].text:(0,n.__)("Unable to proceed the form is not valid.")).subscribe();var t=this.form.variations.map((function(e,t){return e.tabs.images.groups.filter((function(e){return e.filter((function(e){return"primary"===e.name&&1===e.value})).length>0}))}));if(t[0]&&t[0].length>1)return a.kX.error(this.$slots["error-multiple-primary"]?this.$slots["error-multiple-primary"][0].text:(0,n.__)("Unable to proceed, more than one product is set as primary")).subscribe();var r=[];if(this.form.variations.map((function(t,i){return t.tabs.units.fields.filter((function(e){return"group"===e.type})).forEach((function(t){new Object;t.groups.forEach((function(t){r.push(e.formValidation.validateFields(t))}))}))})),0===r.length)return a.kX.error(this.$slots["error-no-units-groups"]?this.$slots["error-no-units-groups"][0].text:(0,n.__)("Either Selling or Purchase unit isn't defined. Unable to proceed.")).subscribe();if(r.filter((function(e){return!1===e})).length>0)return this.$forceUpdate(),a.kX.error(this.$slots["error-invalid-unit-group"]?this.$slots["error-invalid-unit-group"][0].text:(0,n.__)("Unable to proceed as one of the unit group field is invalid")).subscribe();var i=u(u({},this.formValidation.extractForm(this.form)),{},{variations:this.form.variations.map((function(t,r){var i=e.formValidation.extractForm(t);0===r&&(i.$primary=!0),i.images=t.tabs.images.groups.map((function(t){return e.formValidation.extractFields(t)}));var a=new Object;return t.tabs.units.fields.filter((function(e){return"group"===e.type})).forEach((function(t){a[t.name]=t.groups.map((function(t){return e.formValidation.extractFields(t)}))})),i.units=u(u({},i.units),a),i}))});this.formValidation.disableForm(this.form),a.ih[this.submitMethod?this.submitMethod.toLowerCase():"post"](this.submitUrl,i).subscribe((function(t){if("success"===t.status){if(!1!==e.returnUrl)return document.location=e.returnUrl;e.$emit("save")}e.formValidation.enableForm(e.form)}),(function(t){a.kX.error(t.message,void 0,{duration:5e3}).subscribe(),e.formValidation.enableForm(e.form),t.response&&e.formValidation.triggerError(e.form,t.response.data)}))},deleteVariation:function(e){confirm(this.$slots["delete-variation"]?this.$slots["delete-variation"][0].text:(0,n.__)("Would you like to delete this variation ?"))&&this.form.variations.splice(e,1)},setTabActive:function(e,t){for(var r in t)r!==e&&(t[r].active=!1);t[e].active=!0,"units"===e&&this.loadAvailableUnits(t[e])},duplicate:function(e){this.form.variations.push(Object.assign({},e))},newVariation:function(){this.form.variations.push(this.defaultVariation)},getActiveTab:function(e){for(var t in e)if(e[t].active)return e[t];return!1},getActiveTabKey:function(e){for(var t in e)if(e[t].active)return t;return!1},parseForm:function(e){var t=this;return e.main.value=void 0===e.main.value?"":e.main.value,e.main=this.formValidation.createFields([e.main])[0],e.variations.forEach((function(e,r){var i=0;for(var a in e.tabs)0===i&&void 0===e.tabs[a].active?(e.tabs[a].active=!0,t._sampleVariation=Object.assign({},e),e.tabs[a].fields&&(e.tabs[a].fields=t.formValidation.createFields(e.tabs[a].fields.filter((function(e){return"name"!==e.name}))))):e.tabs[a].fields&&(e.tabs[a].fields=t.formValidation.createFields(e.tabs[a].fields)),e.tabs[a].active=void 0!==e.tabs[a].active&&e.tabs[a].active,i++})),e},loadForm:function(){var e=this;a.ih.get("".concat(this.src)).subscribe((function(t){e.form=e.parseForm(t.form)}))},addImage:function(e){e.tabs.images.groups.push(this.formValidation.createFields(JSON.parse(JSON.stringify(e.tabs.images.fields))))},removeImage:function(e,t){var r=e.tabs.images.groups.indexOf(t);e.tabs.images.groups.splice(r,1)}},mounted:function(){this.loadForm()},name:"ns-manage-products"};const d=(0,r(1900).Z)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form flex-auto",attrs:{id:"crud-form"}},[0===Object.values(e.form).length?r("div",{staticClass:"flex items-center h-full justify-center flex-auto"},[r("ns-spinner")],1):e._e(),e._v(" "),Object.values(e.form).length>0?[r("div",{staticClass:"flex flex-col"},[r("div",{staticClass:"flex justify-between items-center"},[r("label",{staticClass:"font-bold my-2 text-gray-700",attrs:{for:"title"}},[e._v(e._s(e.form.main.label))]),e._v(" "),r("div",{staticClass:"text-sm my-2 text-gray-700",attrs:{for:"title"}},[e.returnUrl?r("a",{staticClass:"rounded-full border border-gray-400 hover:bg-red-600 hover:text-white bg-white px-2 py-1",attrs:{href:e.returnUrl}},[e._v("Return")]):e._e()])]),e._v(" "),r("div",{staticClass:"flex border-2 rounded overflow-hidden",class:e.form.main.disabled?"border-gray-500":e.form.main.errors.length>0?"border-red-600":"border-blue-500"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.main.value,expression:"form.main.value"}],staticClass:"flex-auto text-gray-700 outline-none h-10 px-2",class:e.form.main.disabled?"bg-gray-400":"",attrs:{disabled:e.form.main.disabled,type:"text"},domProps:{value:e.form.main.value},on:{blur:function(t){return e.formValidation.checkField(e.form.main)},change:function(t){return e.formValidation.checkField(e.form.main)},input:function(t){t.target.composing||e.$set(e.form.main,"value",t.target.value)}}}),e._v(" "),r("button",{staticClass:"outline-none px-4 h-10 text-white border-l border-gray-400",class:e.form.main.disabled?"bg-gray-500":e.form.main.errors.length>0?"bg-red-500":"bg-blue-500",attrs:{disabled:e.form.main.disabled},on:{click:function(t){return e.submit()}}},[e._t("save",(function(){return[e._v(e._s(e.__("Save")))]}))],2)]),e._v(" "),e.form.main.description&&0===e.form.main.errors.length?r("p",{staticClass:"text-xs text-gray-600 py-1"},[e._v(e._s(e.form.main.description))]):e._e(),e._v(" "),e._l(e.form.main.errors,(function(t,i){return r("p",{key:i,staticClass:"text-xs py-1 text-red-500"},[r("span",[e._t("error-required",(function(){return[e._v(e._s(t.identifier))]}))],2)])}))],2),e._v(" "),r("div",{staticClass:"-mx-4 flex flex-wrap mt-4",attrs:{id:"form-container"}},[r("div",{staticClass:"px-4 w-full"},e._l(e.form.variations,(function(t,i){return r("div",{key:i,staticClass:"mb-8",attrs:{id:"tabbed-card"}},[r("div",{staticClass:"flex flex-wrap justify-between",attrs:{id:"card-header"}},[r("div",{staticClass:"flex flex-wrap"},e._l(t.tabs,(function(i,a){return r("div",{key:a,staticClass:"cursor-pointer text-gray-700 px-4 py-2 rounded-tl-lg rounded-tr-lg flex justify-between",class:i.active?"bg-white":"bg-gray-100",on:{click:function(r){return e.setTabActive(a,t.tabs)}}},[r("span",{staticClass:"block mr-2"},[e._v(e._s(i.label))]),e._v(" "),i.errors&&i.errors.length>0?r("span",{staticClass:"rounded-full bg-red-400 text-white h-6 w-6 flex font-semibold items-center justify-center"},[e._v(e._s(i.errors.length))]):e._e()])})),0),e._v(" "),r("div",{staticClass:"flex items-center justify-center -mx-1"})]),e._v(" "),r("div",{staticClass:"card-body bg-white rounded-br-lg rounded-bl-lg shadow p-2"},[["images","units"].includes(e.getActiveTabKey(t.tabs))?e._e():r("div",{staticClass:"-mx-4 flex flex-wrap"},[e._l(e.getActiveTab(t.tabs).fields,(function(e,t){return[r("div",{key:t,staticClass:"flex flex-col px-4 w-full md:w-1/2 lg:w-1/3"},[r("ns-field",{attrs:{field:e}})],1)]}))],2),e._v(" "),"images"===e.getActiveTabKey(t.tabs)?r("div",{staticClass:"-mx-4 flex flex-wrap"},[r("div",{staticClass:"flex flex-col px-4 w-full md:w-1/2 lg:w-1/3"},[r("div",{staticClass:"rounded border flex bg-white justify-between p-2 items-center"},[r("span",[e._v(e._s(e.__("Add Images")))]),e._v(" "),r("button",{staticClass:"rounded-full border flex items-center justify-center w-8 h-8 bg-white hover:bg-blue-400 hover:text-white",on:{click:function(r){return e.addImage(t)}}},[r("i",{staticClass:"las la-plus-circle"})])])]),e._v(" "),e._l(e.getActiveTab(t.tabs).groups,(function(i,a){return r("div",{key:a,staticClass:"flex flex-col px-4 w-full md:w-1/2 lg:w-1/3 mb-4"},[r("div",{staticClass:"rounded border flex flex-col bg-white overflow-hidden"},[r("div",{staticClass:"p-2"},e._l(i,(function(e,t){return r("ns-field",{key:t,attrs:{field:e}})})),1),e._v(" "),r("div",{staticClass:"text-center py-2 border-t text-sm cursor-pointer",on:{click:function(r){return e.removeImage(t,i)}}},[e._v("\n                                        "+e._s(e.__("Remove Image"))+"\n                                    ")])])])}))],2):e._e(),e._v(" "),"units"===e.getActiveTabKey(t.tabs)?r("div",{staticClass:"-mx-4 flex flex-wrap"},[r("div",{staticClass:"px-4 w-full md:w-1/2 lg:w-1/3"},[r("ns-field",{attrs:{field:e.getActiveTab(t.tabs).fields[0]},on:{change:function(r){e.loadAvailableUnits(e.getActiveTab(t.tabs))}}}),e._v(" "),r("ns-field",{attrs:{field:e.getActiveTab(t.tabs).fields[1]},on:{change:function(r){e.loadAvailableUnits(e.getActiveTab(t.tabs))}}})],1),e._v(" "),e._l(e.getActiveTab(t.tabs).fields,(function(t,i){return["group"===t.type?r("div",{key:i,staticClass:"px-4 w-full lg:w-2/3"},[r("div",{staticClass:"mb-2"},[r("label",{staticClass:"font-medium text-gray-700"},[e._v(e._s(t.label))]),e._v(" "),r("p",{staticClass:"py-1 text-sm text-gray-600"},[e._v(e._s(t.description))])]),e._v(" "),r("div",{staticClass:"mb-2"},[r("div",{staticClass:"border-dashed border-2 border-gray-200 p-1 bg-gray-100 flex justify-between items-center text-gray-700 cursor-pointer rounded-lg",on:{click:function(r){return e.addUnitGroup(t)}}},[e._m(0,!0),e._v(" "),r("span",[e._v(e._s(e.__("New Group")))])])]),e._v(" "),r("div",{staticClass:"-mx-4 flex flex-wrap"},e._l(t.groups,(function(i,a){return r("div",{key:a,staticClass:"px-4 w-full md:w-1/2 mb-4"},[r("div",{staticClass:"shadow rounded overflow-hidden"},[r("div",{staticClass:"border-b text-sm bg-blue-400 text-white  border-blue-300 p-2 flex justify-between"},[r("span",[e._v(e._s(e.__("Available Quantity")))]),e._v(" "),r("span",[e._v(e._s(e.getUnitQuantity(i)))])]),e._v(" "),r("div",{staticClass:"p-2 mb-2"},e._l(i,(function(e,t){return r("ns-field",{key:t,attrs:{field:e}})})),1),e._v(" "),r("div",{staticClass:"p-1 text-red-800 hover:bg-red-200 border-t border-red-200 flex items-center justify-center cursor-pointer font-medium",on:{click:function(r){return e.removeUnitPriceGroup(i,t.groups)}}},[e._v("\n                                                    "+e._s(e.__("Delete"))+"\n                                                ")])])])})),0)]):e._e()]}))],2):e._e()])])})),0)])]:e._e()],2)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"rounded-full border-2 border-gray-300 bg-white h-8 w-8 flex items-center justify-center"},[t("i",{staticClass:"las la-plus-circle"})])}],!1,null,null,null).exports},4085:(e,t,r)=>{r.r(t),r.d(t,{default:()=>_});var i=r(7266),a=r(2277),s=r(9671),n=r(2848);function o(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,i;return t=e,i=[{key:"compute",value:function(t,r,i){switch(t){case"inclusive":return e.computeInclusive(r,i);case"exclusive":return e.computeExclusive(r,i)}}},{key:"computeInclusive",value:function(e,t){return e/(t+100)*100}},{key:"computeExclusive",value:function(e,t){return e/100*(t+100)}},{key:"getTaxValue",value:function(t,r,i){switch(t){case"inclusive":return r-e.compute(t,r,i);case"exclusive":return e.compute(t,r,i)-r}return 0}}],(r=null)&&o(t.prototype,r),i&&o(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}(),c=r(7389);const l={name:"ns-procurement-product-options",data:function(){return{validation:new i.Z,fields:[],rawFields:[{label:(0,c.__)("Expiration Date"),name:"expiration_date",description:(0,c.__)("Define when that specific product should expire."),type:"datetimepicker"},{label:(0,c.__)("Barcode"),name:"barcode",description:(0,c.__)("Renders the automatically generated barcode."),type:"text",disabled:!0},{label:(0,c.__)("Tax Type"),name:"tax_type",description:(0,c.__)("Adjust how tax is calculated on the item."),type:"select",options:[{label:(0,c.__)("Inclusive"),value:"inclusive"},{label:(0,c.__)("Exclusive"),value:"exclusive"}]}]}},methods:{__:c.__,applyChanges:function(){if(this.validation.validateFields(this.fields)){var e=this.validation.extractFields(this.fields);return this.$popupParams.resolve(e),this.$popup.close()}return s.kX.error((0,c.__)("Unable to proceed. The form is not valid.")).subscribe()}},mounted:function(){var e=this;this.$popup.event.subscribe((function(t){"click-overlay"===t.event&&e.$popup.close()}));var t=this.rawFields.map((function(t){return"expiration_date"===t.name&&(t.value=e.$popupParams.product.procurement.expiration_date),"tax_type"===t.name&&(t.value=e.$popupParams.product.procurement.tax_type),"barcode"===t.name&&(t.value=e.$popupParams.product.procurement.barcode),t}));this.fields=this.validation.createFields(t)}};var d=r(1900);const p=(0,d.Z)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bg-surface-tertiary shadow-lg w-6/7-screen md:w-5/7-screen lg:w-3/7-screen"},[e._m(0),e._v(" "),r("div",{staticClass:"p-2 border-b border-surface-secondary"},e._l(e.fields,(function(e,t){return r("ns-field",{key:t,staticClass:"w-full",attrs:{field:e}})})),1),e._v(" "),r("div",{staticClass:"p-2 flex justify-end"},[r("ns-button",{attrs:{type:"info"},on:{click:function(t){return e.applyChanges()}}},[e._v("Save")])],1)])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"p-2 border-b border-surface-secondary"},[r("h5",{staticClass:"font-semibold"},[e._v("Options")])])}],!1,null,null,null).exports;function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const b={name:"ns-procurement",mounted:function(){this.reloadEntities()},computed:{activeTab:function(){return this.validTabs.filter((function(e){return e.active})).length>0&&this.validTabs.filter((function(e){return e.active}))[0]}},data:function(){return{totalTaxValues:0,totalPurchasePrice:0,formValidation:new i.Z,form:{},nsSnackBar:s.kX,fields:[],searchResult:[],searchValue:"",debounceSearch:null,nsHttpClient:s.ih,taxes:[],validTabs:[{label:(0,c.__)("Details"),identifier:"details",active:!0},{label:(0,c.__)("Products"),identifier:"products",active:!1}],reloading:!1}},watch:{searchValue:function(e){var t=this;e&&(clearTimeout(this.debounceSearch),this.debounceSearch=setTimeout((function(){t.doSearch(e)}),500))}},components:{NsManageProducts:n.default},props:["submit-method","submit-url","return-url","src","rules"],methods:{__:c.__,computeTotal:function(){this.totalTaxValues=0,this.form.products.length>0&&(this.totalTaxValues=this.form.products.map((function(e){return e.procurement.tax_value})).reduce((function(e,t){return e+t}))),this.totalPurchasePrice=0,this.form.products.length>0&&(this.totalPurchasePrice=this.form.products.map((function(e){return parseFloat(e.procurement.total_purchase_price)})).reduce((function(e,t){return e+t})))},updateLine:function(e){var t=this.form.products[e],r=this.taxes.filter((function(e){return e.id===t.procurement.tax_group_id}));if(parseFloat(t.procurement.purchase_price_edit)>0&&parseFloat(t.procurement.quantity)>0){if(r.length>0){var i=r[0].taxes.map((function(e){return u.getTaxValue(t.procurement.tax_type,t.procurement.purchase_price_edit,parseFloat(e.rate))}));t.procurement.tax_value=i.reduce((function(e,t){return e+t})),"inclusive"===t.procurement.tax_type?(t.procurement.net_purchase_price=parseFloat(t.procurement.purchase_price_edit)-t.procurement.tax_value,t.procurement.gross_purchase_price=parseFloat(t.procurement.purchase_price_edit),t.procurement.purchase_price=parseFloat(t.procurement.gross_purchase_price)):(t.procurement.gross_purchase_price=parseFloat(t.procurement.purchase_price_edit)+t.procurement.tax_value,t.procurement.net_purchase_price=parseFloat(t.procurement.purchase_price_edit),t.procurement.purchase_price=parseFloat(t.procurement.gross_purchase_price))}else t.procurement.gross_purchase_price=parseFloat(t.procurement.purchase_price_edit),t.procurement.purchase_price=parseFloat(t.procurement.purchase_price_edit),t.procurement.net_purchase_price=parseFloat(t.procurement.purchase_price_edit),t.procurement.tax_value=0;t.procurement.tax_value=t.procurement.tax_value*parseFloat(t.procurement.quantity),t.procurement.total_purchase_price=t.procurement.purchase_price*parseFloat(t.procurement.quantity)}this.computeTotal(),this.$forceUpdate()},fetchLastPurchasePrice:function(e){var t=this.form.products[e],r=t.unit_quantities.filter((function(e){return t.procurement.unit_id===e.unit_id}));r.length>0&&(t.procurement.purchase_price_edit=r[0].last_purchase_price||0),this.updateLine(e)},switchTaxType:function(e,t){e.procurement.tax_type="inclusive"===e.procurement.tax_type?"exclusive":"inclusive",this.updateLine(t)},doSearch:function(e){var t=this;s.ih.post("/api/nexopos/v4/procurements/products/search-product",{search:e}).subscribe((function(e){1===e.length?t.addProductList(e[0]):e.length>1?t.searchResult=e:s.kX.error((0,c.__)("No result match your query.")).subscribe()}))},reloadEntities:function(){var e=this;this.reloading=!0,(0,a.D)([s.ih.get("/api/nexopos/v4/categories"),s.ih.get("/api/nexopos/v4/products"),s.ih.get(this.src),s.ih.get("/api/nexopos/v4/taxes/groups")]).subscribe((function(t){e.reloading=!1,e.categories=t[0],e.products=t[1],e.taxes=t[3],e.form.general&&t[2].tabs.general.fieds.forEach((function(t,r){t.value=e.form.tabs.general.fields[r].value||""})),e.form=Object.assign(JSON.parse(JSON.stringify(t[2])),e.form),e.form=e.formValidation.createForm(e.form),e.form.tabs&&e.form.tabs.general.fields.forEach((function(e,r){e.options&&(e.options=t[2].tabs.general.fields[r].options)})),0===e.form.products.length&&(e.form.products=e.form.products.map((function(e){return["gross_purchase_price","purchase_price_edit","tax_value","net_purchase_price","purchase_price","total_price","total_purchase_price","quantity","tax_group_id"].forEach((function(t){void 0===e[t]&&(e[t]=void 0===e[t]?0:e[t])})),e.$invalid=e.$invalid||!1,e.purchase_price_edit=e.purchase_price,{name:e.name,purchase_units:e.purchase_units,procurement:e,unit_quantities:e.unit_quantities||[]}}))),e.$forceUpdate()}))},setTabActive:function(e){this.validTabs.forEach((function(e){return e.active=!1})),this.$forceUpdate(),this.$nextTick().then((function(){e.active=!0}))},addProductList:function(e){if(void 0===e.unit_quantities)return s.kX.error((0,c.__)("Unable to add product which doesn't unit quantities defined.")).subscribe();e.procurement=new Object,e.procurement.gross_purchase_price=0,e.procurement.purchase_price_edit=0,e.procurement.tax_value=0,e.procurement.net_purchase_price=0,e.procurement.purchase_price=0,e.procurement.total_price=0,e.procurement.total_purchase_price=0,e.procurement.quantity=1,e.procurement.expiration_date=null,e.procurement.tax_group_id=0,e.procurement.tax_type="inclusive",e.procurement.unit_id=0,e.procurement.product_id=e.id,e.procurement.procurement_id=null,e.procurement.$invalid=!1,this.searchResult=[],this.searchValue="",this.form.products.push(e)},submit:function(){var e=this;if(0===this.form.products.length)return s.kX.error(this.$slots["error-no-products"]?this.$slots["error-no-products"][0].text:(0,c.__)("Unable to proceed, no product were provided."),this.$slots.okay?this.$slots.okay[0].text:(0,c.__)("OK")).subscribe();if(this.form.products.forEach((function(e){!parseFloat(e.procurement.quantity)>=1||0===e.procurement.unit_id?e.procurement.$invalid=!0:e.procurement.$invalid=!1})),this.form.products.filter((function(e){return e.procurement.$invalid})).length>0)return s.kX.error(this.$slots["error-invalid-products"]?this.$slots["error-invalid-products"][0].text:(0,c.__)("Unable to proceed, one or more product has incorrect values."),this.$slots.okay?this.$slots.okay[0].text:(0,c.__)("OK")).subscribe();if(this.formValidation.validateForm(this.form).length>0)return this.setTabActive(this.activeTab),s.kX.error(this.$slots["error-invalid-form"]?this.$slots["error-invalid-form"][0].text:(0,c.__)("Unable to proceed, the procurement form is not valid."),this.$slots.okay?this.$slots.okay[0].text:(0,c.__)("OK")).subscribe();if(void 0===this.submitUrl)return s.kX.error(this.$slots["error-no-submit-url"]?this.$slots["error-no-submit-url"][0].text:(0,c.__)("Unable to submit, no valid submit URL were provided."),this.$slots.okay?this.$slots.okay[0].text:(0,c.__)("OK")).subscribe();this.formValidation.disableForm(this.form);var t=m(m({},this.formValidation.extractForm(this.form)),{products:this.form.products.map((function(e){return e.procurement}))});s.ih[this.submitMethod?this.submitMethod.toLowerCase():"post"](this.submitUrl,t).subscribe((function(t){if("success"===t.status)return document.location=e.returnUrl;e.formValidation.enableForm(e.form)}),(function(t){s.kX.error(t.message,void 0,{duration:5e3}).subscribe(),e.formValidation.enableForm(e.form),t.errors&&e.formValidation.triggerError(e.form,t.errors)}))},deleteProduct:function(e){this.form.products.splice(e,1),this.$forceUpdate()},handleGlobalChange:function(e){this.globallyChecked=e,this.rows.forEach((function(t){return t.$checked=e}))},setProductOptions:function(e){var t=this;new Promise((function(r,i){Popup.show(p,{product:t.form.products[e],resolve:r,reject:i})})).then((function(r){for(var i in r)t.form.products[e].procurement[i]=r[i];t.updateLine(e)}))}}};const _=(0,d.Z)(b,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form flex-auto flex flex-col",attrs:{id:"crud-form"}},[e.form.main?[r("div",{staticClass:"flex flex-col"},[r("div",{staticClass:"flex justify-between items-center"},[r("label",{staticClass:"font-bold my-2 text-gray-700",attrs:{for:"title"}},[e._v(e._s(e.form.main.label||e.__("No title is provided")))]),e._v(" "),r("div",{staticClass:"text-sm my-2 text-gray-700",attrs:{for:"title"}},[e.returnUrl?r("a",{staticClass:"rounded-full border border-gray-400 hover:bg-red-600 hover:text-white bg-white px-2 py-1",attrs:{href:e.returnUrl}},[e._v(e._s(e.__("Go Back")))]):e._e()])]),e._v(" "),r("div",{staticClass:"flex border-2 rounded overflow-hidden",class:e.form.main.disabled?"border-gray-500":e.form.main.errors.length>0?"border-red-600":"border-blue-500"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.main.value,expression:"form.main.value"}],staticClass:"flex-auto text-gray-700 outline-none h-10 px-2",class:e.form.main.disabled?"bg-gray-400":"",attrs:{disabled:e.form.main.disabled,type:"text"},domProps:{value:e.form.main.value},on:{blur:function(t){return e.formValidation.checkField(e.form.main)},change:function(t){return e.formValidation.checkField(e.form.main)},input:function(t){t.target.composing||e.$set(e.form.main,"value",t.target.value)}}}),e._v(" "),r("button",{staticClass:"outline-none px-4 h-10 text-white border-l border-gray-400",class:e.form.main.disabled?"bg-gray-500":e.form.main.errors.length>0?"bg-red-500":"bg-blue-500",attrs:{disabled:e.form.main.disabled},on:{click:function(t){return e.submit()}}},[e._t("save",(function(){return[e._v(e._s(e.__("Save")))]}))],2),e._v(" "),r("button",{staticClass:"bg-white text-gray-700 outline-none px-4 h-10 border-gray-400",on:{click:function(t){return e.reloadEntities()}}},[r("i",{staticClass:"las la-sync",class:e.reloading?"animate animate-spin":""})])]),e._v(" "),e.form.main.description&&0===e.form.main.errors.length?r("p",{staticClass:"text-xs text-gray-600 py-1"},[e._v(e._s(e.form.main.description))]):e._e(),e._v(" "),e._l(e.form.main.errors,(function(t,i){return r("p",{key:i,staticClass:"text-xs py-1 text-red-500"},[r("span",[e._t("error-required",(function(){return[e._v(e._s(t.identifier))]}))],2)])}))],2),e._v(" "),r("div",{staticClass:"-mx-4 flex flex-wrap mt-4",attrs:{id:"form-container"}},[r("div",{staticClass:"px-4 w-full"},[r("div",{attrs:{id:"tabbed-card"}},[r("div",{staticClass:"flex flex-wrap",attrs:{id:"card-header"}},e._l(e.validTabs,(function(t,i){return r("div",{key:i,staticClass:"cursor-pointer px-4 py-2 rounded-tl-lg rounded-tr-lg text-gray-700",class:t.active?"bg-white":"bg-gray-100",on:{click:function(r){return e.setTabActive(t)}}},[e._v("\n                            "+e._s(t.label)+"\n                        ")])})),0),e._v(" "),"details"===e.activeTab.identifier?r("div",{staticClass:"card-body bg-white rounded-br-lg rounded-bl-lg shadow p-2"},[e.form.tabs?r("div",{staticClass:"-mx-4 flex flex-wrap"},e._l(e.form.tabs.general.fields,(function(e,t){return r("div",{key:t,staticClass:"flex px-4 w-full md:w-1/2 lg:w-1/3"},[r("ns-field",{attrs:{field:e}})],1)})),0):e._e()]):e._e(),e._v(" "),"products"===e.activeTab.identifier?r("div",{staticClass:"card-body bg-white rounded-br-lg rounded-bl-lg shadow p-2 "},[r("div",{staticClass:"mb-2"},[r("div",{staticClass:"border-blue-500 flex border-2 rounded overflow-hidden"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],staticClass:"flex-auto text-gray-700 outline-none h-10 px-2",attrs:{type:"text",placeholder:e.$slots["search-placeholder"]?e.$slots["search-placeholder"][0].text:"SKU, Barcode, Name"},domProps:{value:e.searchValue},on:{input:function(t){t.target.composing||(e.searchValue=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"h-0"},[r("div",{staticClass:"shadow bg-white relative z-10"},e._l(e.searchResult,(function(t,i){return r("div",{key:i,staticClass:"cursor-pointer border border-b border-gray-300 p-2 text-gray-700",on:{click:function(r){return e.addProductList(t)}}},[r("span",{staticClass:"block font-bold text-gray-700"},[e._v(e._s(t.name))]),e._v(" "),r("span",{staticClass:"block text-sm text-gray-600"},[e._v(e._s(e.__("SKU"))+" : "+e._s(t.sku))]),e._v(" "),r("span",{staticClass:"block text-sm text-gray-600"},[e._v(e._s(e.__("Barcode"))+" : "+e._s(t.barcode))])])})),0)])]),e._v(" "),r("div",{staticClass:"overflow-x-auto"},[r("table",{staticClass:"w-full"},[r("thead",[r("tr",e._l(e.form.columns,(function(t,i){return r("td",{key:i,staticClass:"text-gray-700 p-2 border border-gray-300 bg-gray-200",attrs:{width:"200"}},[e._v(e._s(t.label))])})),0)]),e._v(" "),r("tbody",[e._l(e.form.products,(function(t,i){return r("tr",{key:i,class:t.procurement.$invalid?"bg-red-200 border-2 border-red-500":"bg-gray-100"},[e._l(e.form.columns,(function(a,s){return["name"===a.type?r("td",{key:s,staticClass:"p-2 text-gray-600 border border-gray-300"},[r("span",{staticClass:"font-semibold"},[e._v(e._s(t.name))]),e._v(" "),r("div",{staticClass:"flex justify-between"},[r("div",{staticClass:"flex -mx-1 flex-col"},[r("div",{staticClass:"px-1"},[r("span",{staticClass:"text-xs text-red-500 cursor-pointer underline px-1",on:{click:function(t){return e.deleteProduct(i)}}},[e._v(e._s(e.__("Delete")))])])]),e._v(" "),r("div",{staticClass:"flex -mx-1 flex-col"},[r("div",{staticClass:"px-1"},[r("span",{staticClass:"text-xs text-red-500 cursor-pointer underline px-1",on:{click:function(t){return e.setProductOptions(i)}}},[e._v(e._s(e.__("Options")))])])])])]):e._e(),e._v(" "),"text"===a.type?r("td",{key:s,staticClass:"p-2 w-3 text-gray-600 border border-gray-300"},[r("div",{staticClass:"flex items-start"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.procurement[s],expression:"product.procurement[ key ]"}],staticClass:"w-24 border-2 p-2 border-blue-400 rounded",attrs:{type:"text"},domProps:{value:t.procurement[s]},on:{change:function(t){return e.updateLine(i)},input:function(r){r.target.composing||e.$set(t.procurement,s,r.target.value)}}})])]):e._e(),e._v(" "),"tax_group_id"===a.type?r("td",{key:s,staticClass:"p-2 text-gray-600 border border-gray-300"},[r("div",{staticClass:"flex items-start"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.procurement.tax_group_id,expression:"product.procurement.tax_group_id"}],staticClass:"rounded border-blue-500 border-2 p-2",on:{change:[function(r){var i=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(t.procurement,"tax_group_id",r.target.multiple?i:i[0])},function(t){return e.updateLine(i)}]}},e._l(e.taxes,(function(t){return r("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])})),0)])]):e._e(),e._v(" "),"custom_select"===a.type?r("td",{key:s,staticClass:"p-2 text-gray-600 border border-gray-300"},[r("div",{staticClass:"flex items-start"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.procurement[s],expression:"product.procurement[ key ]"}],staticClass:"rounded border-blue-500 border-2 p-2",on:{change:[function(r){var i=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(t.procurement,s,r.target.multiple?i:i[0])},function(t){return e.updateLine(i)}]}},e._l(a.options,(function(t){return r("option",{key:t.value,domProps:{value:t.value}},[e._v(e._s(t.label))])})),0)])]):e._e(),e._v(" "),"currency"===a.type?r("td",{key:s,staticClass:"p-2 text-gray-600 border border-gray-300"},[r("div",{staticClass:"flex items-start flex-col justify-end"},[r("span",{staticClass:"text-sm text-gray-600"},[e._v(e._s(e._f("currency")(t.procurement[s])))])])]):e._e(),e._v(" "),"unit_quantities"===a.type?r("td",{key:s,staticClass:"p-2 text-gray-600 border border-gray-300"},[r("div",{staticClass:"flex items-start"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.procurement.unit_id,expression:"product.procurement.unit_id"}],staticClass:"rounded border-blue-500 border-2 p-2 w-32",on:{change:[function(r){var i=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(t.procurement,"unit_id",r.target.multiple?i:i[0])},function(t){return e.fetchLastPurchasePrice(i)}]}},e._l(t.unit_quantities,(function(t){return r("option",{key:t.id,domProps:{value:t.unit.id}},[e._v(e._s(t.unit.name))])})),0)])]):e._e()]}))],2)})),e._v(" "),r("tr",{staticClass:"bg-gray-100"},[r("td",{staticClass:"p-2 text-gray-600 border border-gray-300",attrs:{colspan:Object.keys(e.form.columns).indexOf("tax_value")}}),e._v(" "),r("td",{staticClass:"p-2 text-gray-600 border border-gray-300"},[e._v(e._s(e._f("currency")(e.totalTaxValues)))]),e._v(" "),r("td",{staticClass:"p-2 text-gray-600 border border-gray-300",attrs:{colspan:Object.keys(e.form.columns).indexOf("total_purchase_price")-(Object.keys(e.form.columns).indexOf("tax_value")+1)}}),e._v(" "),r("td",{staticClass:"p-2 text-gray-600 border border-gray-300"},[e._v(e._s(e._f("currency")(e.totalPurchasePrice)))])])],2)])])]):e._e()])])])]:e._e()],2)}),[],!1,null,null,null).exports}}]);