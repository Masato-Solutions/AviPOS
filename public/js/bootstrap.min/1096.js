"use strict";(self.webpackChunkAviPOS_4x=self.webpackChunkAviPOS_4x||[]).push([[1096],{1096:(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});const i={data:function(){return{title:"",message:""}},computed:{size:function(){return this.$popupParams.size||"h-full w-full"}},mounted:function(){var t=this;this.title=this.$popupParams.title,this.message=this.$popupParams.message,this.$popup.event.subscribe((function(e){"click-overlay"===e.event&&(t.$popupParams.onAction(!1),t.$popup.close())}))},methods:{__:s(7389).__,emitAction:function(t){this.$popupParams.onAction(t),this.$popup.close()}}};const n=(0,s(1900).Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-col shadow-lg w-5/7-screen md:w-4/7-screen lg:w-2/7-screen",class:t.size,attrs:{id:"confirm-popup"}},[s("div",{staticClass:"flex items-center justify-center flex-col flex-auto p-4"},[s("h2",{staticClass:"text-xl md:text-3xl font-body text-center"},[t._v(t._s(t.title))]),t._v(" "),s("p",{staticClass:"py-4 text-sm md:text-base text-center"},[t._v(t._s(t.message))])]),t._v(" "),s("div",{staticClass:"action-buttons flex border-t"},[s("button",{staticClass:"flex-auto w-1/2 h-16 flex items-center justify-center uppercase",on:{click:function(e){return t.emitAction(!0)}}},[t._v(t._s(t.__("Yes")))]),t._v(" "),s("hr",{staticClass:"border-r"}),t._v(" "),s("button",{staticClass:"flex-auto w-1/2 h-16 flex items-center justify-center uppercase",on:{click:function(e){return t.emitAction(!1)}}},[t._v(t._s(t.__("No")))])])])}),[],!1,null,null,null).exports}}]);