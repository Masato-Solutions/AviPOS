import"./bootstrap-08ba1d91.js";import{_ as h,n as f}from"./currency-ab26e44d.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{ak as c,ac as o,A as r,D as s,c as d,z as m,F as b,ai as v}from"./npm~@vue~runtime-core_-ff0546fa.js";import{U as t,z as _}from"./npm~@vue~shared_-3ce114fe.js";import"./npm~lodash-9a4afe3d.js";import"./npm~@ckeditor~ckeditor5-build-classic_-27365139.js";import"./npm~laravel-echo-198fd56d.js";import"./npm~pusher-js-a179ff58.js";import"./npm~axios-28bc18a3.js";import"./npm~chart.js-3fed1729.js";import"./npm~rxjs-eeb06f17.js";import"./npm~tslib-8dbab242.js";import"./npm~moment-fbc5633a.js";import"./npm~vue-4c913503.js";import"./npm~@vue~runtime-dom_-aa3a306b.js";import"./npm~@vue~reactivity_-547540a3.js";import"./npm~@vue~compiler-dom_-85e36bcf.js";import"./npm~@vue~compiler-core_-be14e06b.js";import"./npm~rx-da74c705.js";import"./npm~@wordpress~hooks_-bd0b7221.js";import"./npm~mathjs-d162420d.js";import"./npm~@babel~runtime_-57eb5ba4.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-2f8f27d8.js";import"./npm~fraction.js-704ae1f4.js";import"./npm~typed-function-de33f2d8.js";import"./npm~seedrandom-4e17e537.js";import"./npm~javascript-natural-sort-82d7d2c3.js";import"./npm~escape-latex-6c71499e.js";import"./npm~numeral-85b533a7.js";import"./npm~currency.js-57f74176.js";const y={name:"ns-orders-summary",data(){return{orders:[],subscription:null,hasLoaded:!1}},mounted(){this.hasLoaded=!1,this.subscription=Dashboard.recentOrders.subscribe(l=>{this.hasLoaded=!0,this.orders=l})},methods:{__:h,nsCurrency:f},unmounted(){this.subscription.unsubscribe()}},g={id:"ns-orders-summary",class:"flex flex-auto flex-col shadow rounded-lg overflow-hidden"},k={class:"p-2 flex title items-center justify-between border-b"},w={class:"font-semibold"},C={class:"head flex-auto flex-col flex h-64 overflow-y-auto ns-scrollbar"},L={key:0,class:"h-full flex items-center justify-center"},j={key:1,class:"h-full flex items-center justify-center flex-col"},z=s("i",{class:"las la-grin-beam-sweat text-6xl"},null,-1),O={class:"text-sm"},B={class:"text-lg font-semibold"},D={class:"flex -mx-2"},N={class:"px-1"},V={class:"text-semibold text-xs"},F=s("i",{class:"lar la-user-circle"},null,-1),R=s("div",{class:"divide-y-4"},null,-1),S={class:"px-1"},A={class:"text-semibold text-xs"},E=s("i",{class:"las la-clock"},null,-1);function U(l,a,W,q,i,n){const p=c("ns-close-button"),u=c("ns-spinner");return o(),r("div",g,[s("div",k,[s("h3",w,t(n.__("Recents Orders")),1),s("div",null,[d(p,{onClick:a[0]||(a[0]=e=>l.$emit("onRemove"))})])]),s("div",C,[i.hasLoaded?m("",!0):(o(),r("div",L,[d(u,{size:"8",border:"4"})])),i.hasLoaded&&i.orders.length===0?(o(),r("div",j,[z,s("p",O,t(n.__("Well.. nothing to show for the meantime.")),1)])):m("",!0),(o(!0),r(b,null,v(i.orders,e=>(o(),r("div",{key:e.id,class:_([e.payment_status==="paid"?"paid-order":"other-order","border-b single-order p-2 flex justify-between"])},[s("div",null,[s("h3",B,t(n.__("Order"))+" : "+t(e.code),1),s("div",D,[s("div",N,[s("h4",V,[F,s("span",null,t(e.user.username),1)])]),R,s("div",S,[s("h4",A,[E,s("span",null,t(e.created_at),1)])])])]),s("div",null,[s("h2",{class:_([e.payment_status==="paid"?"paid-currency":"unpaid-currency","text-xl font-bold"])},t(n.nsCurrency(e.total)),3)])],2))),128))])])}const vs=x(y,[["render",U]]);export{vs as default};
