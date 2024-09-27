import{_ as o}from"./currency-Dtag6qPd.js";import{_ as u}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as g,c as f,a as e,t as s,f as r,i as n,w as h}from"./runtime-core.esm-bundler-DWZrwskR.js";const m={data(){return{field:{label:o("Language Selection"),description:o("Select what will be the default language of NexoPOS."),name:"language",value:nsLang||"en",options:Object.values(nsLanguages).map((l,a)=>({value:Object.keys(nsLanguages)[a],label:l}))}}},methods:{__:o,updateSelectedLanguage(){document.location=`?lang=${this.field.value}`}},mounted(){}},p={class:"w-full md:w-3/5 lg:w-3/5 self-center"},b={class:"bg-white rounded shadow my-2 overflow-hidden"},x={class:"welcome-box border-b border-gray-300 p-3 text-gray-700"},y={class:"text-gray-600 text-sm"},w=e("br",null,null,-1),v={class:"text-gray-600 text-sm"},S={class:"py-2"},C={class:"text-xl font-body text-gray-700"},k={class:"text-gray-600 text-sm"},L=e("i",{class:"las la-arrow-right"},null,-1),N=e("i",{class:"las la-arrow-right"},null,-1),O={class:"bg-gray-200 p-3 flex justify-end"},j={type:"button",class:"rounded cursor-pointer py-2 px-3 font-semibold"},B=e("i",{class:"las la-database"},null,-1);function D(l,a,P,T,c,t){const d=i("ns-select"),_=i("router-link");return g(),f("div",p,[e("div",b,[e("div",x,[e("p",y,s(t.__("Thank you for using NexoPOS to manage your store. This installation wizard will help you running NexoPOS in no time.")),1),w,e("p",v,s(t.__("Choose your language to get started.")),1),r(d,{onChange:a[0]||(a[0]=V=>t.updateSelectedLanguage()),field:c.field},null,8,["field"]),e("div",S,[e("h2",C,s(t.__("Remaining Steps")),1),e("ul",k,[e("li",null,[L,n(" "+s(t.__("Database Configuration")),1)]),e("li",null,[N,n(" "+s(t.__("Application Configuration")),1)])])])]),e("div",O,[r(_,{to:"/database",class:"ns-button info"},{default:h(()=>[e("button",j,[B,n(" "+s(t.__("Database Configuration")),1)])]),_:1})])])])}const R=u(m,[["render",D]]);export{R as default};
