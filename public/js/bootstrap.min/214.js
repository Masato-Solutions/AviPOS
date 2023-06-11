"use strict";(self.webpackChunkAviPOS_4x=self.webpackChunkAviPOS_4x||[]).push([[214],{9763:(e,t,i)=>{function s(e){POS.changeVisibleSection(e)}i.d(t,{Z:()=>s})},214:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var s=i(9671),r=i(9763),l=i(8603),n=i(7389);const o={name:"ns-pos-search-product",data:function(){return{searchValue:"",products:[],isLoading:!1}},mounted:function(){this.$refs.searchField.focus(),this.popupCloser()},methods:{__:n.__,popupCloser:l.Z,addToCart:function(e){POS.addToCart(e),this.$popup.close()},search:function(){var e=this;this.isLoading=!0,s.ih.post("/api/nexopos/v4/products/search",{search:this.searchValue}).subscribe((function(t){e.isLoading=!1,e.products=t,1===e.products.length&&e.addToCart(e.products[0])}),(function(t){e.isLoading=!1,s.kX.error(t.message).subscribe()}))}}};var a=i(1900);const c=(0,a.Z)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"bg-surface-tertiary shadow-lg w-95vw h-95vh md:h-3/5-screen md:w-2/4-screen flex flex-col overflow-hidden"},[i("div",{staticClass:"p-2 border-b border-surface-secondary flex justify-between items-center"},[i("h3",{staticClass:"text-primary"},[e._v(e._s(e.__("Search Product")))]),e._v(" "),i("div",[i("ns-close-button",{on:{click:function(t){return e.$popup.close()}}})],1)]),e._v(" "),i("div",{staticClass:"flex-auto overflow-hidden flex flex-col"},[i("div",{staticClass:"p-2 border-b border-surface-secondary"},[i("div",{staticClass:"flex input-group ns-info-secondary border-2 rounded overflow-hidden"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],ref:"searchField",staticClass:"p-2  outline-none flex-auto text-primary",attrs:{type:"text"},domProps:{value:e.searchValue},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search()},input:function(t){t.target.composing||(e.searchValue=t.target.value)}}}),e._v(" "),i("button",{staticClass:"px-2",on:{click:function(t){return e.search()}}},[e._v(e._s(e.__("Search")))])])]),e._v(" "),i("div",{staticClass:"overflow-y-auto flex-auto relative"},[i("ul",[e._l(e.products,(function(t){return i("li",{key:t.id,staticClass:"hover:bg-surface-primary cursor-pointer p-2 flex justify-between border-b border-surface-secondary",on:{click:function(i){return e.addToCart(t)}}},[i("div",{staticClass:"text-primary"},[e._v("\n                        "+e._s(t.name)+"\n                    ")]),e._v(" "),i("div")])})),e._v(" "),0===e.products.length?i("li",{staticClass:"text-primary text-center p-2"},[e._v(e._s(e.__("There is nothing to display. Have you started the search ?")))]):e._e()],2),e._v(" "),e.isLoading?i("div",{staticClass:"absolute h-full w-full flex items-center justify-center z-10 top-0",staticStyle:{background:"rgb(187 203 214 / 29%)"}},[i("ns-spinner")],1):e._e()])])])}),[],!1,null,null,null).exports,u={name:"ns-pos-grid",data:function(){return{items:Array.from({length:1e3},(function(e,t){return{data:"#"+t}})),products:[],categories:[],breadcrumbs:[],autoFocus:!1,barcode:"",previousCategory:null,order:null,visibleSection:null,breadcrumbsSubsribe:null,orderSubscription:null,visibleSectionSubscriber:null,currentCategory:null,interval:null,searchTimeout:null,gridItemsWidth:0,gridItemsHeight:0,screenSubscriber:null,rebuildGridTimeout:null,rebuildGridComplete:!1}},computed:{hasCategories:function(){return this.categories.length>0}},watch:{barcode:function(){var e=this;clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout((function(){e.submitSearch(e.barcode)}),200)}},mounted:function(){var e=this;this.loadCategories(),this.breadcrumbsSubsribe=POS.breadcrumbs.subscribe((function(t){e.breadcrumbs=t})),this.visibleSectionSubscriber=POS.visibleSection.subscribe((function(t){e.visibleSection=t})),this.screenSubscriber=POS.screen.subscribe((function(t){clearTimeout(e.rebuildGridTimeout),e.rebuildGridComplete=!1,e.rebuildGridTimeout=setTimeout((function(){e.rebuildGridComplete=!0,e.computeGridWidth()}),500)})),this.orderSubscription=POS.order.subscribe((function(t){return e.order=t})),this.interval=setInterval((function(){return e.checkFocus()}),500)},destroyed:function(){this.orderSubscription.unsubscribe(),this.breadcrumbsSubsribe.unsubscribe(),this.visibleSectionSubscriber.unsubscribe(),this.screenSubscriber.unsubscribe(),clearInterval(this.interval)},methods:{__:n.__,switchTo:r.Z,computeGridWidth:function(){null!==document.getElementById("grid-items")&&(this.gridItemsWidth=document.getElementById("grid-items").offsetWidth,this.gridItemsHeight=document.getElementById("grid-items").offsetHeight)},cellSizeAndPositionGetter:function(e,t){var i={xs:{width:this.gridItemsWidth/2,items:2,height:200},sm:{width:this.gridItemsWidth/2,items:2,height:200},md:{width:this.gridItemsWidth/3,items:3,height:150},lg:{width:this.gridItemsWidth/4,items:4,height:150},xl:{width:this.gridItemsWidth/6,items:6,height:150}},s=i[POS.responsive.screenIs].width,r=i[POS.responsive.screenIs].height;return{width:s-0,height:r,x:t%i[POS.responsive.screenIs].items*s-0,y:parseInt(t/i[POS.responsive.screenIs].items)*r}},openSearchPopup:function(){Popup.show(c)},submitSearch:function(e){var t=this;e.length>0&&s.ih.get("/api/nexopos/v4/products/search/using-barcode/".concat(e)).subscribe((function(e){t.barcode="",POS.addToCart(e.product)}),(function(e){t.barcode="",s.kX.error(e.message).subscribe()}))},checkFocus:function(){this.autoFocus&&(0===document.querySelectorAll(".is-popup").length&&this.$refs.search.focus())},loadCategories:function(e){var t=this;s.ih.get("/api/nexopos/v4/categories/pos/".concat(e?e.id:"")).subscribe((function(e){t.categories=e.categories.map((function(e){return{data:e}})),t.products=e.products.map((function(e){return{data:e}})),t.previousCategory=e.previousCategory,t.currentCategory=e.currentCategory,t.updateBreadCrumb(t.currentCategory)}))},updateBreadCrumb:function(e){if(e){var t=this.breadcrumb.filter((function(t){return t.id===e.id}));if(t.length>0){var i=!0,s=this.breadcrumb.filter((function(e){return e.id===t[0].id&&i?(i=!1,!0):i}));this.breadcrumb=s}else this.breadcrumb.push(e)}else this.breadcrumb=[];POS.breadcrumbs.next(this.breadcrumb)},addToTheCart:function(e){POS.addToCart(e)}}};const d=(0,a.Z)(u,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"flex-auto flex flex-col",attrs:{id:"pos-grid"}},["grid"===e.visibleSection?i("div",{staticClass:"flex pl-2",attrs:{id:"tools"}},[i("div",{staticClass:"switch-cart flex cursor-pointer rounded-tl-lg rounded-tr-lg px-3 py-2 border-t border-r border-l",on:{click:function(t){return e.switchTo("cart")}}},[i("span",[e._v(e._s(e.__("Cart")))]),e._v(" "),e.order?i("span",{staticClass:"products-count flex items-center justify-center text-sm rounded-full h-6 w-6 ml-1"},[e._v(e._s(e.order.products.length))]):e._e()]),e._v(" "),i("div",{staticClass:"switch-grid cursor-pointer rounded-tl-lg rounded-tr-lg px-3 py-2 font-semibold",on:{click:function(t){return e.switchTo("grid")}}},[e._v("\n            "+e._s(e.__("Products"))+"\n        ")])]):e._e(),e._v(" "),i("div",{staticClass:"rounded shadow  overflow-hidden flex-auto flex flex-col",attrs:{id:"grid-container"}},[i("div",{staticClass:"p-2 border-b ",attrs:{id:"grid-header"}},[i("div",{staticClass:"border rounded flex  overflow-hidden"},[i("button",{staticClass:"w-10 h-10 border-r  outline-none",on:{click:function(t){return e.openSearchPopup()}}},[i("i",{staticClass:"las la-search"})]),e._v(" "),i("button",{staticClass:"outline-none w-10 h-10 border-r ",class:e.autoFocus?"pos-button-clicked":"",on:{click:function(t){e.autoFocus=!e.autoFocus}}},[i("i",{staticClass:"las la-barcode"})]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.barcode,expression:"barcode"}],ref:"search",staticClass:"flex-auto outline-none px-2 ",attrs:{type:"text"},domProps:{value:e.barcode},on:{input:function(t){t.target.composing||(e.barcode=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"p-2",attrs:{id:"grid-breadscrumb"}},[i("ul",{staticClass:"flex"},[i("li",[i("a",{staticClass:"px-3 ",attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.loadCategories()}}},[e._v(e._s(e.__("Home"))+" ")]),e._v(" "),i("i",{staticClass:"las la-angle-right"})]),e._v(" "),i("li",e._l(e.breadcrumbs,(function(t){return i("a",{key:t.id,staticClass:"px-3",attrs:{href:"javascript:void(0)"},on:{click:function(i){return e.loadCategories(t)}}},[e._v(e._s(t.name)+" "),i("i",{staticClass:"las la-angle-right"})])})),0)])]),e._v(" "),i("div",{staticClass:"overflow-hidden h-full flex-col flex",attrs:{id:"grid-items"}},[e.rebuildGridComplete?e._e():i("div",{staticClass:"h-full w-full flex-col flex items-center justify-center"},[i("ns-spinner"),e._v(" "),i("span",{staticClass:"my-2"},[e._v("Rebuilding...")])],1),e._v(" "),e.rebuildGridComplete?[e.hasCategories?i("VirtualCollection",{attrs:{cellSizeAndPositionGetter:e.cellSizeAndPositionGetter,collection:e.categories,height:e.gridItemsHeight,width:e.gridItemsWidth},scopedSlots:e._u([{key:"cell",fn:function(t){var s=t.data;return i("div",{staticClass:"w-full h-full"},[i("div",{key:s.id,staticClass:"cell-item w-full h-full cursor-pointer border flex flex-col items-center justify-center overflow-hidden",on:{click:function(t){return e.loadCategories(s)}}},[i("div",{staticClass:"h-full w-full flex items-center justify-center"},[s.preview_url?i("img",{staticClass:"object-cover h-full",attrs:{src:s.preview_url,alt:s.name}}):e._e(),e._v(" "),s.preview_url?e._e():i("i",{staticClass:"las la-image text-6xl"})]),e._v(" "),i("div",{staticClass:"h-0 w-full"},[i("div",{staticClass:"cell-item-label relative w-full flex items-center justify-center -top-10 h-20 py-2"},[i("h3",{staticClass:"text-sm font-bold py-2 text-center"},[e._v(e._s(s.name))])])])])])}}],null,!1,3907117767)}):e._e(),e._v(" "),e.hasCategories?e._e():i("VirtualCollection",{attrs:{cellSizeAndPositionGetter:e.cellSizeAndPositionGetter,collection:e.products,height:e.gridItemsHeight,width:e.gridItemsWidth},scopedSlots:e._u([{key:"cell",fn:function(t){var s=t.data;return i("div",{staticClass:"w-full h-full"},[i("div",{key:s.id,staticClass:"cell-item w-full h-full cursor-pointer border flex flex-col items-center justify-center overflow-hidden",on:{click:function(t){return e.addToTheCart(s)}}},[i("div",{staticClass:"h-full w-full flex items-center justify-center overflow-hidden"},[s.galleries&&s.galleries.filter((function(e){return 1===e.featured})).length>0?i("img",{staticClass:"object-cover h-full",attrs:{src:s.galleries.filter((function(e){return 1===e.featured}))[0].url,alt:s.name}}):e._e(),e._v(" "),s.galleries&&0!==s.galleries.filter((function(e){return 1===e.featured})).length?e._e():i("i",{staticClass:"las la-image text-6xl"})]),e._v(" "),i("div",{staticClass:"h-0 w-full"},[i("div",{staticClass:"cell-item-label relative w-full flex flex-col items-center justify-center -top-10 h-20 p-2"},[i("h3",{staticClass:"text-sm text-center w-full"},[e._v(e._s(s.name))]),e._v(" "),s.unit_quantities&&1===s.unit_quantities.length?i("span",{staticClass:"text-sm"},[e._v(e._s(e._f("currency")(s.unit_quantities[0].sale_price)))]):e._e()])])])])}}],null,!1,724140536)})]:e._e()],2)])])}),[],!1,null,null,null).exports}}]);