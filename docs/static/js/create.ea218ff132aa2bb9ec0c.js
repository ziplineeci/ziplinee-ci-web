"use strict";(self.webpackChunkestafette_ci_web=self.webpackChunkestafette_ci_web||[]).push([[886],{5193:function(t,e,a){a.d(e,{N:function(){return y},T:function(){return E}});var r=a(538),n=a(9558),s=a(4689),o=a(3663),i=a(2299),l=a(1572),c=a(6410),u=a(8415),p=a(3284),f=a(7040),d=a(451),m=a(488),b=a(7347);function v(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?v(Object(a),!0).forEach((function(e){_(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function _(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var g=(0,f.CE)(b.NQ,["event","routerTag"]);delete g.href.default,delete g.to.default;var y=(0,d.y2)((0,f.GE)(h(h({},g),{},{block:(0,d.pi)(i.U5,!1),disabled:(0,d.pi)(i.U5,!1),pill:(0,d.pi)(i.U5,!1),pressed:(0,d.pi)(i.U5,null),size:(0,d.pi)(i.N0),squared:(0,d.pi)(i.U5,!1),tag:(0,d.pi)(i.N0,"button"),type:(0,d.pi)(i.N0,"button"),variant:(0,d.pi)(i.N0,"secondary")})),s.MZ),C=function(t){"focusin"===t.type?(0,c.cn)(t.target,"focus"):"focusout"===t.type&&(0,c.IV)(t.target,"focus")},w=function(t){return(0,m.u$)(t)||(0,c.YR)(t.tag,"a")},x=function(t){return(0,p.jn)(t.pressed)},O=function(t){return!(w(t)||t.tag&&!(0,c.YR)(t.tag,"button"))},k=function(t){return!w(t)&&!O(t)},T=function(t){var e;return["btn-".concat(t.variant||"secondary"),(e={},_(e,"btn-".concat(t.size),t.size),_(e,"btn-block",t.block),_(e,"rounded-pill",t.pill),_(e,"rounded-0",t.squared&&!t.pill),_(e,"disabled",t.disabled),_(e,"active",t.pressed),e)]},S=function(t){return w(t)?(0,d.uj)(g,t):{}},j=function(t,e){var a=O(t),r=w(t),n=x(t),s=k(t),o=r&&"#"===t.href,i=e.attrs&&e.attrs.role?e.attrs.role:null,l=e.attrs?e.attrs.tabindex:null;return(s||o)&&(l="0"),{type:a&&!r?t.type:null,disabled:a?t.disabled:null,role:s||o?"button":i,"aria-disabled":s?String(t.disabled):null,"aria-pressed":n?String(t.pressed):null,autocomplete:n?"off":null,tabindex:t.disabled&&!a?"-1":l}},E=r.Z.extend({name:s.MZ,functional:!0,props:y,render:function(t,e){var a=e.props,r=e.data,s=e.listeners,i=e.children,c=x(a),f=w(a),d=k(a),m=f&&"#"===a.href,v={keydown:function(t){if(!a.disabled&&(d||m)){var e=t.keyCode;if(e===o.m5||e===o.K2&&d){var r=t.currentTarget||t.target;(0,u.p7)(t,{propagation:!1}),r.click()}}},click:function(t){a.disabled&&(0,p.cO)(t)?(0,u.p7)(t):c&&s&&s["update:pressed"]&&(0,l.zo)(s["update:pressed"]).forEach((function(t){(0,p.mf)(t)&&t(!a.pressed)}))}};c&&(v.focusin=C,v.focusout=C);var h={staticClass:"btn",class:T(a),props:S(a),attrs:j(a,r),on:v};return t(f?b.we:a.tag,(0,n.b)(r,h),i)}})},2061:function(t,e,a){a.d(e,{Z:function(){return s}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spinner-border estafette-spinner",class:t._f("bootstrapClass")(t.color,"text"),attrs:{role:"status"}},[a("span",{staticClass:"sr-only"},[t._v("Loading...")])])};r._withStripped=!0;var n={props:{color:{type:String,default:null}}},s=(0,a(1900).Z)(n,r,[],!1,null,null,null).exports},6088:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-form",{staticClass:"rounded border bg-white p-3",attrs:{autocomplete:"off"},on:{submit:t.onSubmit}},[a("b-form-group",{attrs:{label:"Template","label-for":"template-select"}},[t.templatesOptions.length>0?a("b-form-select",{staticClass:"border-primary text-primary",attrs:{id:"template-select",options:t.templatesOptions},on:{change:t.setTemplate},model:{value:t.form.template,callback:function(e){t.$set(t.form,"template",e)},expression:"form.template"}}):t._e()],1),t._v(" "),t._l(t.placeholders,(function(e){return a("div",{key:e.name,staticClass:"mt-3"},[a("b-form-group",{attrs:{label:t._f("splitCamelcase")(e.name),"label-for":"placeholder-"+e.name}},[a("b-form-input",{attrs:{id:"placeholder-"+e.name,type:"text",placeholder:"Enter "+t.$options.filters.splitCamelcase(e.name)},model:{value:t.form.placeholders[e.name],callback:function(a){t.$set(t.form.placeholders,e.name,a)},expression:"form.placeholders[placeholder.name]"}})],1)],1)})),t._v(" "),t.form.template?a("b-button",{staticClass:"mt-3",attrs:{type:"submit",variant:"primary"}},[t._v("\n      Generate\n    ")]):t._e()],2),t._v(" "),t.generating?a("div",[a("spinner",{attrs:{color:"secondary"}})],1):t._e(),t._v(" "),t.manifest?a("div",{staticClass:"mt-4"},[a("h5",[t._v("Manifest")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"pre-wrapper"},[a("pre",{staticClass:"bg-light p-3"},[a("code",[t._v(t._s(t.manifest))])]),t._v(" "),a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.click",modifiers:{click:!0}}],staticClass:"btn-clipboard",attrs:{title:"Copied!"},on:{click:t.copy}},[t._v("\n        Copy\n      ")])],1)]):t._e()],1)};r._withStripped=!0;var n=a(2061),s=a(4909),o=a(5343),i=a(2183),l=a(4058),c=a(5193),u=a(8365),p={components:{Spinner:n.Z,BForm:s.e,BFormSelect:o.K,BFormInput:i.e,BFormGroup:l.x,BButton:c.T},directives:{BTooltip:u.T},props:{query:{type:Object,default:null}},data:function(){return{form:{template:null,placeholders:{}},templates:null,templatesOptions:[],placeholders:[],manifest:null,generating:!1,refresh:!0}},created:function(){this.loadTemplates()},methods:{copy:function(){var t=document.createElement("textarea");t.value=this.manifest,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)},loadTemplates:function(){var t=this;this.axios.get("/api/manifest/templates").then((function(e){t.templates=e.data.templates;var a=[{value:null,text:"Please select a template"}];t.templates.forEach((function(t){a.push({value:t.template,text:t.template})})),t.templatesOptions=a})).catch((function(e){t.periodicallyRefreshTemplates(30)}))},setTemplate:function(t){var e=this.templates.find((function(e){return e.template===t}));if(e){var a=[];e.placeholders.forEach((function(t){a.push({name:t})})),this.placeholders=a,this.manifest=null}},onSubmit:function(t){var e=this;t.preventDefault(),this.generating=!0,this.manifest=null,this.axios.post("/api/manifest/generate",this.form).then((function(t){e.generating=!1,e.manifest=t.data.manifest})).catch((function(t){e.generating=!1,console.warn(t)}))}},beforeDestroy:function(){this.refresh=!1,this.refreshTimeout&&clearTimeout(this.refreshTimeout)}},f=(0,a(1900).Z)(p,r,[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Store the content below in file "),a("code",[t._v(".estafette.yaml")]),t._v(" in the root of your application repository, add it to git and push it to the origin and Estafette CI will automatically build your application, regardless of which branch you push.")])}],!1,null,null,null).exports},6920:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-form",{staticClass:"rounded border bg-white p-3",attrs:{autocomplete:"off"},on:{submit:t.onSubmit}},[a("b-form-group",{attrs:{label:"Manifest","label-for":"manifest"}},[a("b-form-textarea",{staticClass:"border bg-light",class:t._f("bootstrapClass")(t.status,"border"),attrs:{id:"manifest",placeholder:"Paste your manifest",rows:25},model:{value:t.form.manifest,callback:function(e){t.$set(t.form,"manifest",e)},expression:"form.manifest"}})],1),t._v(" "),a("b-button",{staticClass:"mt-3",attrs:{type:"submit",variant:"primary"}},[t._v("\n      Validate\n    ")])],1),t._v(" "),t.validating?a("div",[a("spinner",{attrs:{color:"secondary"}})],1):t._e(),t._v(" "),"succeeded"==t.status?a("div",{staticClass:"mt-4"},[a("h5",{staticClass:"text-success"},[t._v("\n      Your manifest is valid!\n    ")]),t._v(" "),t._m(0)]):t._e(),t._v(" "),"failed"==t.status?a("div",{staticClass:"mt-4"},[a("h5",{staticClass:"text-danger"},[t._v("\n      Validation errors\n    ")]),t._v(" "),a("p",[t._v("Please address the following errors and validate again!")]),t._v(" "),a("pre",{staticClass:"bg-light border-danger p-3"},[a("code",[t._v(t._s(t.errors))])])]):t._e()],1)};r._withStripped=!0;var n=a(2061),s=a(4909),o=a(5302),i=a(4058),l=a(5193),c={components:{Spinner:n.Z,BForm:s.e,BFormTextarea:o.y,BFormGroup:i.x,BButton:l.T},data:function(){return{form:{manifest:null},validating:!1,status:"secondary",errors:null}},methods:{onSubmit:function(t){var e=this;t.preventDefault(),this.validating=!0,this.axios.post("/api/manifest/validate",this.form).then((function(t){e.validating=!1,e.status=t.data.status,e.errors=t.data.errors,window.scrollTo(0,document.body.scrollHeight)})).catch((function(t){e.validating=!1}))}}},u=(0,a(1900).Z)(c,r,[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Store the manifest in file "),a("code",[t._v(".estafette.yaml")]),t._v(" in the root of your application repository.")])}],!1,null,null,null).exports}}]);