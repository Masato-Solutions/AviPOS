import{_ as n}from"./currency-d0508508.js";import{F as w,n as a,b as h,a as l}from"./bootstrap-9d0e4bdd.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";import{f as S}from"./npm~rxjs-a7e91008.js";import{ae as d,a6 as t,z as c,A as s,F as T,ac as V,x as b,y as m,c as p,ax as g,H as X}from"./npm~@vue~runtime-core_-c1400cf1.js";import{U as u}from"./npm~@vue~shared_-82b01912.js";import"./npm~numeral-b19ffe25.js";import"./npm~@ckeditor~ckeditor5-build-classic_-5cff4652.js";import"./npm~currency.js-57f74176.js";import"./npm~lodash-f5508214.js";import"./npm~laravel-echo-8b7e2b1d.js";import"./npm~pusher-js-244b366d.js";import"./npm~axios-4a70c6fc.js";import"./npm~chart.js-3fed1729.js";import"./npm~moment-fbc5633a.js";import"./npm~vue-d815d99e.js";import"./npm~@vue~runtime-dom_-3cadedeb.js";import"./npm~@vue~reactivity_-46d78a21.js";import"./npm~@vue~compiler-dom_-04241bb4.js";import"./npm~@vue~compiler-core_-2a2ce8c7.js";import"./npm~rx-812d4a49.js";import"./npm~@wordpress~hooks_-18172e20.js";import"./npm~mathjs-eae2cf2e.js";import"./npm~@babel~runtime_-57eb5ba4.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-3f247aa1.js";import"./npm~fraction.js-324b3911.js";import"./npm~typed-function-4896e4f1.js";import"./npm~seedrandom-852a687d.js";import"./npm~javascript-natural-sort-2161c071.js";import"./npm~escape-latex-137e2782.js";import"./npm~tslib-f3101d7c.js";const N={name:"ns-login",data(){return{fields:[],xXsrfToken:null,validation:new w,isSubitting:!1}},mounted(){S([a.get("/api/fields/ns.password-lost"),a.get("/sanctum/csrf-cookie")]).subscribe(i=>{this.fields=this.validation.createFields(i[0]),this.xXsrfToken=a.response.config.headers["X-XSRF-TOKEN"],setTimeout(()=>h.doAction("ns-login-mounted",this),100)},i=>{l.error(i.message||n("An unexpected error occurred."),n("OK"),{duration:0}).subscribe()})},methods:{__:n,requestRecovery(){if(!this.validation.validateFields(this.fields))return l.error(n("Unable to proceed the form is not valid.")).subscribe();this.validation.disableFields(this.fields),h.applyFilters("ns-password-lost-submit",!0)&&(this.isSubitting=!0,a.post("/auth/password-lost",this.validation.getValue(this.fields),{headers:{"X-XSRF-TOKEN":this.xXsrfToken}}).subscribe(e=>{l.success(e.message).subscribe(),setTimeout(()=>{document.location=e.data.redirectTo},500)},e=>{this.isSubitting=!1,this.validation.enableFields(this.fields),e.data&&this.validation.triggerFieldsErrors(this.fields,e.data),l.error(e.message).subscribe()}))}}},R={class:"bg-white rounded shadow overflow-hidden transition-all duration-100"},B={class:"p-3 -my-2"},C={key:0,class:"py-2 fade-in-entrance anim-duration-300"},j={key:0,class:"flex items-center justify-center py-10"},E={class:"flex w-full items-center justify-center py-4"},z={href:"/sign-in",class:"hover:underline text-blue-600 text-sm"},A={class:"flex justify-between items-center bg-gray-200 p-3"};function H(i,e,K,O,o,r){const v=d("ns-field"),f=d("ns-spinner"),y=d("ns-button"),k=d("ns-link");return t(),c("div",R,[s("div",B,[o.fields.length>0?(t(),c("div",C,[(t(!0),c(T,null,V(o.fields,(_,x)=>(t(),b(v,{key:x,field:_},null,8,["field"]))),128))])):m("",!0)]),o.fields.length===0?(t(),c("div",j,[p(f,{border:"4",size:"16"})])):m("",!0),s("div",E,[s("a",z,u(r.__("Remember Your Password ?")),1)]),s("div",A,[s("div",null,[p(y,{onClick:e[0]||(e[0]=_=>r.requestRecovery()),class:"justify-between",type:"info"},{default:g(()=>[o.isSubitting?(t(),b(f,{key:0,class:"mr-2",size:"6",border:"2"})):m("",!0),s("span",null,u(r.__("Submit")),1)]),_:1})]),s("div",null,[p(k,{href:"/sign-up",type:"success"},{default:g(()=>[X(u(r.__("Register")),1)]),_:1})])])])}const ge=F(N,[["render",H]]);export{ge as default};
