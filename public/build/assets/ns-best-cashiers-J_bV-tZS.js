import{_ as m,n as f}from"./currency-Dtag6qPd.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as e,c as t,a as s,t as n,f as _,F as p,b as x,e as c}from"./runtime-core.esm-bundler-DWZrwskR.js";const y={name:"ns-best-customers",data(){return{subscription:null,cashiers:[],hasLoaded:!1}},mounted(){this.hasLoaded=!1,this.subscription=Dashboard.bestCashiers.subscribe(l=>{this.hasLoaded=!0,this.cashiers=l})},methods:{__:m,nsCurrency:f},unmounted(){this.subscription.unsubscribe()}},v={id:"ns-best-cashiers",class:"flex flex-auto flex-col shadow rounded-lg overflow-hidden"},g={class:"flex-auto"},k={class:"head text-center border-b w-full flex justify-between items-center p-2"},C={class:"body"},w={key:0,class:"table w-full"},j={class:"p-2"},L={class:"-mx-1 flex justify-start items-center"},B=s("div",{class:"px-1"},[s("div",{class:"rounded-full"},[s("i",{class:"las la-user-circle text-xl"})])],-1),N={class:"px-1 justify-center"},V={class:"font-semibold items-center"},D={class:"flex justify-end p-2"},F={key:0},z={colspan:"2"},E={key:1,class:"h-56 flex items-center justify-center"},R={key:2,class:"h-56 flex items-center justify-center flex-col"},S=s("i",{class:"las la-grin-beam-sweat text-6xl"},null,-1),W={class:"text-sm text-center"};function q(l,a,A,G,o,r){const h=d("ns-close-button"),u=d("ns-spinner");return e(),t("div",v,[s("div",g,[s("div",k,[s("h5",null,n(r.__("Best Cashiers")),1),s("div",null,[_(h,{onClick:a[0]||(a[0]=i=>l.$emit("onRemove"))})])]),s("div",C,[o.cashiers.length>0?(e(),t("table",w,[s("thead",null,[(e(!0),t(p,null,x(o.cashiers,i=>(e(),t("tr",{key:i.id,class:"entry border-b text-sm"},[s("th",j,[s("div",L,[B,s("div",N,[s("h3",V,n(i.username),1)])])]),s("th",D,n(r.nsCurrency(i.total_sales,"abbreviate")),1)]))),128)),o.cashiers.length===0?(e(),t("tr",F,[s("th",z,n(r.__("No result to display.")),1)])):c("",!0)])])):c("",!0),o.hasLoaded?c("",!0):(e(),t("div",E,[_(u,{size:"8",border:"4"})])),o.hasLoaded&&o.cashiers.length===0?(e(),t("div",R,[S,s("p",W,n(r.__("Well.. nothing to show for the meantime.")),1)])):c("",!0)])])])}const K=b(y,[["render",q]]);export{K as default};
