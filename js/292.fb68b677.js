(self["webpackChunksgone"]=self["webpackChunksgone"]||[]).push([[292],{1928:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},2012:(e,t,n)=>{"use strict";var r=n(9516),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,i={};return e?(r.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),n=r.trim(e.substr(s+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}})),i):i}},2505:(e,t,n)=>{e.exports=n(8015)},2881:(e,t,n)=>{"use strict";var r=n(9516),o=n(7412);e.exports=function(e,t,n){var s=this||o;return r.forEach(n,(function(n){e=n.call(s,e,t)})),e}},3191:(e,t,n)=>{"use strict";var r=n(1928);function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},o.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},o.source=function(){var e,t=new o((function(t){e=t}));return{token:t,cancel:e}},e.exports=o},3471:(e,t,n)=>{"use strict";var r=n(9516);function o(){this.handlers=[]}o.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},3864:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},3948:(e,t,n)=>{"use strict";var r=n(9516);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,s,i){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},4202:(e,t,n)=>{"use strict";var r=n(9516);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},4292:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>R});var r=function(){var e=this,t=e._self._c;return t("b-container",{staticClass:"mt-3"},[t("b-jumbotron",[t("b-row",[t("b-col",{staticClass:"text-center text-sm-right",attrs:{cols:"12",sm:"4",order:"1","order-sm":"2"}},[t("b-img",{attrs:{fluid:"",src:"img/logo.svg",alt:"SGONE logo"}})],1),t("b-col",{attrs:{cols:"12",sm:"8",order:"2","order-sm":"1"}},[t("h1",{staticClass:"display-3 text-center text-sm-left"},[e._v("SGONE")]),t("p",{staticClass:"lead text-center text-sm-left"},[e._v(e._s(e.$t("jumbotronLead")))])])],1)],1),e.supportsWorker?[t("b-button-group",{staticClass:"mb-3"},[t("b-dropdown",{scopedSlots:e._u([{key:"button-content",fn:function(){return[t("BIconBoxArrowInDown"),e._v(" "+e._s(e.$t("buttonImport"))+" ")]},proxy:!0}],null,!1,82081017)},[t("b-dropdown-item",{on:{click:function(t){return e.$refs.germinateModal.show()}}},[e._v(e._s(e.$t("buttonImportFromGerminate")))]),t("b-dropdown-item",{on:{click:function(t){return e.$refs.brapiModal.show()}}},[e._v(e._s(e.$t("buttonImportFromBrapi")))])],1),t("b-button",{on:{click:e.loadExample}},[t("BIconFileEarmarkRuled"),e._v(" "+e._s(e.$t("buttonLoadExample")))],1)],1),t("b-form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[t("b-form-group",{attrs:{"label-for":"input"},scopedSlots:e._u([{key:"label",fn:function(){return[t("span",[e._v(e._s(e.$t("formLabelInput"))+" ")]),t("BIconQuestionCircle",{attrs:{id:"input-help"}}),t("b-popover",{attrs:{target:"input-help",triggers:"hover",placement:"bottom"},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(e._s(e.$t("popoverTitleInput")))]},proxy:!0}],null,!1,2011926038)},[t("div",{domProps:{innerHTML:e._s(e.$t("popoverHtmlInput"))}})])]},proxy:!0}],null,!1,528786271)},[t("b-form-textarea",{attrs:{id:"input",placeholder:e.$t("formPlaceholderInput"),rows:6},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:(t.preventDefault(),e.tabber(t))}},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1),t("b-row",[t("b-col",{attrs:{cols:"12",sm:"6"}},[t("b-form-group",{attrs:{label:e.$t("formLabelIdColumn"),"label-for":"id-column"}},[t("b-form-select",{attrs:{options:e.columnOptions},scopedSlots:e._u([{key:"first",fn:function(){return[t("b-form-select-option",{attrs:{value:null,disabled:"",id:"id-column"}},[e._v(e._s(e.$t("formDropdownPlaceholderIdColumn")))])]},proxy:!0}],null,!1,4050823292),model:{value:e.idColumn,callback:function(t){e.idColumn=t},expression:"idColumn"}})],1)],1),t("b-col",{attrs:{cols:"12",sm:"6"}},[t("b-form-group",{attrs:{label:e.$t("formLabelNameColumn"),"label-for":"name-column"}},[t("b-form-select",{attrs:{options:e.columnOptions},scopedSlots:e._u([{key:"first",fn:function(){return[t("b-form-select-option",{attrs:{value:null,disabled:"",id:"name-column"}},[e._v(e._s(e.$t("formDropdownPlaceholderNameColumn")))])]},proxy:!0}],null,!1,3982375356),model:{value:e.nameColumn,callback:function(t){e.nameColumn=t},expression:"nameColumn"}})],1)],1)],1),e.progress?[t("b-progress",{attrs:{value:e.progress.done/e.progress.total*100,variant:"info",striped:"",animated:""}}),t("p",[e.progress.done?[e._v(e._s(e.$tc("progressInfoComparisons",e.progress.done,{count:`${e.progress.done.toLocaleString()} / ${e.progress.total.toLocaleString()}`}))+" "+e._s(e.$tc("progressInfoDuplicates",e.progress.duplicateCount,{count:e.progress.duplicateCount.toLocaleString()})))]:e._e()],2)]:e._e(),null===e.progress?t("b-button",{attrs:{type:"submit",disabled:!e.input||!e.idColumn}},[t("BIconPlayFill"),e._v(" "+e._s(e.$t("buttonGo")))],1):t("b-button",{on:{click:function(t){return t.preventDefault(),e.cancel.apply(null,arguments)}}},[t("BIconStopFill"),e._v(" "+e._s(e.$t("buttonCancel")))],1)],2),e.duplicates&&e.duplicates.length>0?t("b-card",{staticClass:"mt-3",attrs:{"no-body":""}},[t("b-tabs",{attrs:{card:"","content-class":"mt-3","no-fade":""},on:{changed:e.updateIndex},model:{value:e.tabIndex,callback:function(t){e.tabIndex=t},expression:"tabIndex"}},e._l(e.duplicates,(function(n,r){return t("b-tab",{key:n.uuid,scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" "+e._s(e.$t("tabTitleResults"))+" "),t("button",{staticClass:"close ml-2",attrs:{type:"button","aria-label":"Close"},on:{click:function(t){return t.stopPropagation(),e.deleteTab(r)}}},[e._v("×")])]},proxy:!0}],null,!0)},[t("Results",{attrs:{duplicates:n}})],1)})),1)],1):e._e()]:t("h1",[e._v("Please use a browser that supports Web Workers")]),t("GerminateModal",{ref:"germinateModal",on:{"data-loaded":e.setGerminateData}}),t("BrapiModal",{ref:"brapiModal",on:{"data-loaded":e.setGerminateData}})],2)},o=[],s=function(){var e=this,t=e._self._c;return t("b-modal",{ref:"brapiModal",attrs:{title:e.$t("modalTitleImportBrapi"),"ok-title":e.$t("buttonImport"),"ok-disabled":!e.canContinue,"cancel-title":e.$t("buttonCancel")},on:{ok:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[t("p",[e._v(e._s(e.$t("modalTextImportBrapi")))]),t("b-form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[t("b-form-group",{attrs:{label:e.$t("formLabelBrapiUrl"),"label-for":"url",description:e.$t("formDescriptionBrapiUrl")}},[t("b-form-input",{attrs:{id:"url"},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}})],1)],1)],1)},i=[];const a=n(2505)["default"],u={},l=async function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"get",s=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];return s&&!u[e]&&await d(),!s||u[e]&&u[e].some((e=>e.service===n&&-1!==e.versions.indexOf("2.0")))?a({baseURL:e,url:t,params:r,method:o,crossDomain:!0,headers:{"Content-Type":"application/json; charset=utf-8"}}):Promise.reject(new Error(`BrAPI call not available for the given URL: ${n}`))},c=e=>l(e,"germplasm","germplasm",null,"get",!1).then((e=>e&&e.data&&e.data.result&&e.data.result.data?e.data.result.data:[])),d=async e=>{await l(e,"serverinfo","serverinfo",null,"get",!1).then((t=>{t&&t.data&&t.data.result?u[e]=t.data.result.calls:u[e]=null}))},p={data:function(){return{url:null}},computed:{canContinue:function(){return this.url}},methods:{show:function(e){this.url=e,this.$refs.brapiModal.show()},hide:function(){this.$nextTick((()=>this.$refs.brapiModal.hide()))},onSubmit:function(){this.getData()},getData:function(){c(this.url).then((e=>{let t="id\tname\n";e.forEach((e=>{t+=`${e.germplasmDbId}\t${e.germplasmName}\n`})),this.$emit("data-loaded",t),this.hide()}))}}},f=p;var m=n(1656),h=(0,m.A)(f,s,i,!1,null,null,null);const b=h.exports;var g=function(){var e=this,t=e._self._c;return t("b-modal",{ref:"germinateModal",attrs:{title:e.$t("modalTitleImportGerminate"),"ok-title":e.$t("buttonImport"),"ok-disabled":!e.canContinue,"cancel-title":e.$t("buttonCancel")},on:{ok:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[t("p",[e._v(e._s(e.$t("modalTextImportGerminate")))]),t("b-form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[t("b-form-radio-group",{staticClass:"mb-3",attrs:{buttons:"",options:e.importTypeOptions,"button-variant":"outline-secondary"},model:{value:e.importType,callback:function(t){e.importType=t},expression:"importType"}}),t("b-form-group",{attrs:{label:e.$t("formLabelGerminateUrl"),"label-for":"url",description:e.$t("formDescriptionGerminateUrl")}},[t("b-form-input",{attrs:{id:"url"},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}})],1),t("b-form-group",{attrs:{label:e.$t("formLabelGerminateRequiresCredentials"),"label-for":"credentials",description:e.$t("formDescriptionGerminateRequiresCredentials")}},[t("b-form-radio-group",{staticClass:"mb-3",attrs:{buttons:"",options:e.credentialOptions,"button-variant":"outline-secondary",id:"credentials"},model:{value:e.needsCredentials,callback:function(t){e.needsCredentials=t},expression:"needsCredentials"}})],1),e.needsCredentials?[t("b-form-group",{attrs:{label:e.$t("formLabelUsername"),"label-for":"username",description:e.$t("formDescriptionUsername")}},[t("b-form-input",{attrs:{id:"username"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),t("b-form-group",{attrs:{label:e.$t("formLabelPassword"),"label-for":"password",description:e.$t("formDescriptionPassword")}},[t("b-form-input",{attrs:{id:"password",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)]:e._e()],2)],1)},v=[];const x=n(2505)["default"],y={data:function(){return{username:null,password:null,needsCredentials:!1,url:null,token:null,importType:"germplasm"}},computed:{canContinue:function(){return this.url&&(!this.needsCredentials||null!==this.username&&null!==this.password)},credentialOptions:function(){return[{text:this.$t("genericYes"),value:!0},{text:this.$t("genericNo"),value:!1}]},importTypeOptions:function(){return[{text:this.$t("formSelectOptionGermplasm"),value:"germplasm"},{text:this.$t("formSelectOptionTraits"),value:"traits"}]}},methods:{show:function(e){this.username=null,this.password=null,this.needsCredentials=!1,this.token=null,this.url=e,this.importType="germplasm",this.$refs.germinateModal.show()},hide:function(){this.$nextTick((()=>this.$refs.germinateModal.hide()))},onSubmit:function(){this.needsCredentials?this.getToken():this.getData()},getToken:function(){x({baseURL:this.url,url:"api/token",method:"post",data:{username:this.username,password:this.password}}).then((e=>{e&&e.data&&e.data.token&&(this.token=e.data.token,this.getData())}))},getData:function(){const e={baseURL:this.url,url:"germplasm"===this.importType?"api/germplasm/table":"api/trait/table",method:"post",headers:{"Content-Type":"application/json; charset=utf-8"},data:{page:0,limit:2147483647}};this.token&&(e.withCredentials=!0,e.headers.Authorization=`Bearer ${this.token}`),x(e).then((e=>{if(e&&e.data&&e.data.data){let t="id\tname\n";e.data.data.forEach((e=>{"germplasm"===this.importType?t+=`${e.germplasmId}\t${e.germplasmName}\n`:t+=`${e.traitId}\t${e.traitName}\n`})),this.$emit("data-loaded",t),this.hide()}}))}}},w=y;var C=(0,m.A)(w,g,v,!1,null,null,null);const k=C.exports;var _=function(){var e=this,t=e._self._c;return e.duplicates.duplicates&&e.duplicates.duplicates.length>0?t("div",[t("p",{domProps:{innerHTML:e._s(e.$tc("resultsInfoDuplicates",e.duplicates.duplicates.length,{count:e.duplicates.duplicates.length.toLocaleString()}))}}),e.duplicates.runtime?t("p",{domProps:{innerHTML:e._s(e.$tc("resultsInfoRuntime",e.duplicates.runtime,{count:e.duplicates.runtime.toLocaleString()}))}}):e._e(),e.duplicates.total?t("p",{domProps:{innerHTML:e._s(e.$tc("resultsInfoComparisons",e.duplicates.total,{count:e.duplicates.total.toLocaleString()}))}}):e._e(),t("b-button",{staticClass:"mb-3",on:{click:e.downloadDuplicates}},[t("BIconDownload"),e._v(" "+e._s(e.$t("buttonDownload")))],1),t("div",{staticClass:"mb-3"},[null===e.progress?t("b-button",{attrs:{disabled:!e.duplicates||!e.duplicates.duplicates},on:{click:e.group}},[t("BIconDiagram3",{attrs:{rotate:90}}),e._v(" "+e._s(e.$t("buttonGroupResults")))],1):t("b-button",{on:{click:function(t){return t.preventDefault(),e.cancel.apply(null,arguments)}}},[e._v(e._s(e.$t("buttonCancel")))])],1),e.progress?[t("b-progress",{attrs:{value:e.progress.done/e.progress.total*100,variant:"info",striped:"",animated:""}})]:e._e(),t("h2",[e._v(e._s(e.$t("pageTitleDuplicates")))]),t("p",{domProps:{innerHTML:e._s(e.$t("pageTextDuplicates"))}}),t("b-table",{attrs:{items:e.duplicates.duplicates,fields:e.duplicateColumns,"per-page":100,"current-page":e.duplicateCurrentPage,responsive:"",striped:"",hover:""},scopedSlots:e._u([{key:"cell(type)",fn:function(n){return[t("b-badge",{attrs:{variant:"exact"===n.value?"success":"warning"}},[e._v(e._s(n.value))])]}}],null,!1,2684915919)}),e.duplicates.duplicates.length>100?t("b-pagination",{attrs:{"total-rows":e.duplicates.duplicates.length,"per-page":100},model:{value:e.duplicateCurrentPage,callback:function(t){e.duplicateCurrentPage=t},expression:"duplicateCurrentPage"}}):e._e(),e.joined?[t("h2",{ref:"joinedSection"},[e._v(e._s(e.$t("pageTitleJoined")))]),t("p",{domProps:{innerHTML:e._s(e.$t("pageTextJoined"))}}),t("b-table",{attrs:{items:e.joined,fields:e.joinedColumns,"per-page":100,"current-page":e.joinedCurrentPage,"primary-key":"uuid",responsive:"",striped:"",hover:""},scopedSlots:e._u([{key:"head(uuid)",fn:function(){return[t("b-form-checkbox",{attrs:{checked:e.allSelected},on:{change:e.onSelectionHeaderClicked}})]},proxy:!0},{key:"cell(uuid)",fn:function(n){return[t("b-form-checkbox",{attrs:{value:n.item.uuid},model:{value:e.selectedItems,callback:function(t){e.selectedItems=t},expression:"selectedItems"}})]}},{key:"cell(preferred)",fn:function(n){return[t("b-badge",{attrs:{href:"#",variant:"success"},on:{click:function(t){return t.preventDefault(),e.selectRow(n.item.uuid)}}},[e._v(e._s(n.item.preferred.name))])]}},{key:"cell(others)",fn:function(n){return e._l(n.item.others,(function(r,o){return t("b-badge",{key:`other-${r.id}`,staticClass:"mr-2",attrs:{href:"#",variant:"info"},on:{click:function(t){return t.preventDefault(),e.swapPreferred(n.item.uuid,o)}}},[e._v(e._s(r.name))])}))}}],null,!1,4221391212)}),e.joined.length>100?t("b-pagination",{attrs:{"total-rows":e.joined.length,"per-page":100},model:{value:e.joinedCurrentPage,callback:function(t){e.joinedCurrentPage=t},expression:"joinedCurrentPage"}}):e._e(),t("b-button",{attrs:{disabled:!e.selectedItems||e.selectedItems.length<1},on:{click:e.downloadGrouped}},[t("BIconDownload"),e._v(" "+e._s(e.$t("buttonExportGrouped")))],1)]:e._e()],2):e._e()},S=[],$=n(5471),j=n(2948);const I={components:{BIconDownload:j.AXN,BIconDiagram3:j.Iwj},props:{duplicates:{type:Object,default:()=>({duplicates:[]})}},data:function(){return{duplicateCurrentPage:1,joinedCurrentPage:1,joinerWorker:null,joined:null,progress:null,selectedItems:[]}},computed:{duplicateColumns:function(){return[{key:"type",sortable:!0,label:this.$t("tableColumnDuplicateType")},{key:"one.id",sortable:!0,label:this.$t("tableColumnOneId")},{key:"one.name",sortable:!0,label:this.$t("tableColumnOneName")},{key:"two.id",sortable:!0,label:this.$t("tableColumnTwoId")},{key:"two.name",sortable:!0,label:this.$t("tableColumnTwoName")}]},joinedColumns:function(){return[{key:"uuid",sortable:!1,label:""},{key:"preferred",sortable:!1,label:this.$t("tableColumnPreferred")},{key:"others",sortable:!1,label:this.$t("tableColumnOthers")}]},allSelected:function(){return this.selectedItems.length>0&&this.selectedItems.length===this.joined.length}},methods:{onSelectionHeaderClicked:function(e){this.selectedItems=e?this.joined.map((e=>e.uuid)):[]},selectRow:function(e){this.selectedItems.includes(e)||this.selectedItems.push(e)},swapPreferred:function(e,t){const n=this.joined.findIndex((t=>t.uuid===e)),r=JSON.parse(JSON.stringify(this.joined[n])),o=r.preferred;r.preferred=r.others.splice(t,1)[0],r.others.push(o),$.Ay.set(this.joined,n,r),this.selectRow(e)},cancel:function(){this.joinerWorker&&(this.joinerWorker.terminate(),this.progress=null)},group:function(){this.progress={running:!1,done:0,total:1},this.joinerWorker=new Worker("./joiner.worker.js"),this.joinerWorker.postMessage({data:this.duplicates.duplicates}),this.joinerWorker.onmessage=e=>{if(e.data)if(e.data.running)this.progress=e.data;else{const t=e.data.duplicates;this.selectedItems=[],this.joined=t.map((e=>({uuid:this.uuidv4(),preferred:e.shift(),others:e}))),this.progress=null,this.$nextTick((()=>{this.$refs.joinedSection&&this.$refs.joinedSection.scrollIntoView({behavior:"smooth"})}))}}},downloadDuplicates:function(){const e=`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(this.duplicates.duplicates))}`,t=document.createElement("a");t.href=e,t.download="sgone.json",t.click()},downloadGrouped:function(){const e=`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(this.joined.filter((e=>this.selectedItems.includes(e.uuid))).map((e=>{const t=JSON.parse(JSON.stringify(e));return delete t.uuid,delete t.preferred.reduced,t.others.forEach((e=>{delete e.reduced})),t}))))}`,t=document.createElement("a");t.href=e,t.download="sgone-grouped.json",t.click()},uuidv4:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){const t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)}))}}},T=I;var E=(0,m.A)(T,_,S,!1,null,null,null);const O=E.exports,P="id\tname\n1\tKatherine\n2\tCatherine\n3\tKahterine\n5\tBanana\n6\tBananna\n7\tBarber\n8\tBARBER\n9\tPrisma-1\n10\tPrisma 1\n11\tPrisma_1\n12\tPrisma(1)\n13\tPrisma-2\n14\tPrisma-3",D={components:{BIconQuestionCircle:j._Qy,BIconPlayFill:j.$ug,BIconStopFill:j.BO8,BIconBoxArrowInDown:j.tM7,BIconFileEarmarkRuled:j.rsl,BrapiModal:b,GerminateModal:k,Results:O},data:function(){return{input:null,progress:null,tabIndex:0,duplicates:[],headers:null,idColumn:null,nameColumn:null}},computed:{supportsWorker:function(){return window.Worker},columnOptions:function(){return this.headers?this.headers.map((e=>({value:e,text:e}))):null}},watch:{input:function(e){e?(this.headers=e.split(/\r?\n/)[0].split("\t"),this.idColumn=this.headers.includes("id")?"id":this.headers[0],this.nameColumn=this.headers.includes("name")?"name":this.headers[0]):(this.headers=null,this.idColumn=null,this.nameColumn=null)}},methods:{loadExample:function(){this.input=P},tabber:function(e){const t=this.input,n=e.target.selectionStart,r=t.slice(0,n),o=t.slice(n);this.input=`${r}\t${o}`,e.target.value=this.varieties,e.target.selectionEnd=e.target.selectionStart=n+1},updateIndex:function(e,t){e.length>=t.length&&(this.tabIndex=e.length-1)},deleteTab:function(e){this.duplicates.splice(e,1)},setGerminateData:function(e){this.input=e},cancel:function(){this.levenshteinWorker&&(this.levenshteinWorker.terminate(),this.progress=null)},onSubmit:function(){this.progress={running:!1,done:0,total:1,duplicateCount:0},this.levenshteinWorker=new Worker("./levenshtein.worker.js");const e=Date.now();this.levenshteinWorker.postMessage({data:this.input.split(/\r?\n/),idColumn:this.idColumn,nameColumn:this.nameColumn}),this.levenshteinWorker.onmessage=t=>{if(t.data)if(t.data.running)this.progress=t.data;else{const n=Date.now(),r=t.data.duplicates;r.forEach((e=>{Object.freeze(e)})),Object.freeze(r);const o={uuid:this.uuidv4(),duplicates:r,runtime:Math.ceil((n-e)/1e3),total:t.data.total};Object.freeze(o),this.duplicates.push(o),this.progress=null}}},uuidv4:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){const t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)}))}},mounted:function(){this.$route.query&&this.$route.query.germinateUrl&&this.$refs.germinateModal.show(this.$route.query.germinateUrl)}},B=D;var N=(0,m.A)(B,r,o,!1,null,null,null);const R=N.exports},4490:(e,t,n)=>{"use strict";var r=n(9516),o=n(2881),s=n(3864),i=n(7412),a=n(1928);function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a("canceled")}e.exports=function(e){u(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||i.adapter;return t(e).then((function(t){return u(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(u(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},4680:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},4841:(e,t,n)=>{"use strict";var r=n(9641).version,o={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){o[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var s={};function i(e,t,n){if("object"!==typeof e)throw new TypeError("options must be an object");var r=Object.keys(e),o=r.length;while(o-- >0){var s=r[o],i=t[s];if(i){var a=e[s],u=void 0===a||i(a,s,e);if(!0!==u)throw new TypeError("option "+s+" must be "+u)}else if(!0!==n)throw Error("Unknown option "+s)}}o.transitional=function(e,t,n){function o(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,i){if(!1===e)throw new Error(o(r," has been removed"+(t?" in "+t:"")));return t&&!s[r]&&(s[r]=!0,console.warn(o(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,i)}},e.exports={assertOptions:i,validators:o}},4896:e=>{"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},5019:(e,t,n)=>{"use strict";var r=n(9516);e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}},5155:(e,t,n)=>{"use strict";var r=n(9516),o=n(9106),s=n(3471),i=n(4490),a=n(5343),u=n(4841),l=u.validators;function c(e){this.defaults=e,this.interceptors={request:new s,response:new s}}c.prototype.request=function(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=a(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&u.assertOptions(n,{silentJSONParsing:l.transitional(l.boolean),forcedJSONParsing:l.transitional(l.boolean),clarifyTimeoutError:l.transitional(l.boolean)},!1);var r=[],o=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var s,c=[];if(this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)})),!o){var d=[i,void 0];Array.prototype.unshift.apply(d,r),d=d.concat(c),s=Promise.resolve(t);while(d.length)s=s.then(d.shift(),d.shift());return s}var p=t;while(r.length){var f=r.shift(),m=r.shift();try{p=f(p)}catch(h){m(h);break}}try{s=i(p)}catch(h){return Promise.reject(h)}while(c.length)s=s.then(c.shift(),c.shift());return s},c.prototype.getUri=function(e){return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(a(r||{},{method:e,url:t,data:n}))}})),e.exports=c},5343:(e,t,n)=>{"use strict";var r=n(9516);e.exports=function(e,t){t=t||{};var n={};function o(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function s(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(e[n],t[n])}function i(e){if(!r.isUndefined(t[e]))return o(void 0,t[e])}function a(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(void 0,t[n])}function u(n){return n in t?o(e[n],t[n]):n in e?o(void 0,e[n]):void 0}var l={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=l[e]||s,o=t(e);r.isUndefined(o)&&t!==u||(n[e]=o)})),n}},5449:e=>{"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},5592:(e,t,n)=>{"use strict";var r=n(9516),o=n(7522),s=n(3948),i=n(9106),a=n(9615),u=n(2012),l=n(4202),c=n(7763),d=n(4896),p=n(1928);e.exports=function(e){return new Promise((function(t,n){var f,m=e.data,h=e.headers,b=e.responseType;function g(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}r.isFormData(m)&&delete h["Content-Type"];var v=new XMLHttpRequest;if(e.auth){var x=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";h.Authorization="Basic "+btoa(x+":"+y)}var w=a(e.baseURL,e.url);function C(){if(v){var r="getAllResponseHeaders"in v?u(v.getAllResponseHeaders()):null,s=b&&"text"!==b&&"json"!==b?v.response:v.responseText,i={data:s,status:v.status,statusText:v.statusText,headers:r,config:e,request:v};o((function(e){t(e),g()}),(function(e){n(e),g()}),i),v=null}}if(v.open(e.method.toUpperCase(),i(w,e.params,e.paramsSerializer),!0),v.timeout=e.timeout,"onloadend"in v?v.onloadend=C:v.onreadystatechange=function(){v&&4===v.readyState&&(0!==v.status||v.responseURL&&0===v.responseURL.indexOf("file:"))&&setTimeout(C)},v.onabort=function(){v&&(n(c("Request aborted",e,"ECONNABORTED",v)),v=null)},v.onerror=function(){n(c("Network Error",e,null,v)),v=null},v.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||d;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(c(t,e,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",v)),v=null},r.isStandardBrowserEnv()){var k=(e.withCredentials||l(w))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;k&&(h[e.xsrfHeaderName]=k)}"setRequestHeader"in v&&r.forEach(h,(function(e,t){"undefined"===typeof m&&"content-type"===t.toLowerCase()?delete h[t]:v.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(v.withCredentials=!!e.withCredentials),b&&"json"!==b&&(v.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&v.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&v.upload&&v.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(e){v&&(n(!e||e&&e.type?new p("canceled"):e),v.abort(),v=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),m||(m=null),v.send(m)}))}},7018:(e,t,n)=>{"use strict";var r=n(9516);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},7412:(e,t,n)=>{"use strict";var r=n(9516),o=n(7018),s=n(5449),i=n(4896),a={"Content-Type":"application/x-www-form-urlencoded"};function u(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function l(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(e=n(5592)),e}function c(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(o){if("SyntaxError"!==o.name)throw o}return(n||JSON.stringify)(e)}var d={transitional:i,adapter:l(),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(u(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)||t&&"application/json"===t["Content-Type"]?(u(t,"application/json"),c(e)):e}],transformResponse:[function(e){var t=this.transitional||d.transitional,n=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,i=!n&&"json"===this.responseType;if(i||o&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(a){if(i){if("SyntaxError"===a.name)throw s(a,this,"E_JSON_PARSE");throw a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){d.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){d.headers[e]=r.merge(a)})),e.exports=d},7522:(e,t,n)=>{"use strict";var r=n(7763);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},7763:(e,t,n)=>{"use strict";var r=n(5449);e.exports=function(e,t,n,o,s){var i=new Error(e);return r(i,t,n,o,s)}},7980:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},8015:(e,t,n)=>{"use strict";var r=n(9516),o=n(9012),s=n(5155),i=n(5343),a=n(7412);function u(e){var t=new s(e),n=o(s.prototype.request,t);return r.extend(n,s.prototype,t),r.extend(n,t),n.create=function(t){return u(i(e,t))},n}var l=u(a);l.Axios=s,l.Cancel=n(1928),l.CancelToken=n(3191),l.isCancel=n(3864),l.VERSION=n(9641).version,l.all=function(e){return Promise.all(e)},l.spread=n(7980),l.isAxiosError=n(5019),e.exports=l,e.exports["default"]=l},9012:e=>{"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},9106:(e,t,n)=>{"use strict";var r=n(9516);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(r.isURLSearchParams(t))s=t.toString();else{var i=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),s=i.join("&")}if(s){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},9137:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},9516:(e,t,n)=>{"use strict";var r=n(9012),o=Object.prototype.toString;function s(e){return Array.isArray(e)}function i(e){return"undefined"===typeof e}function a(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function u(e){return"[object ArrayBuffer]"===o.call(e)}function l(e){return"[object FormData]"===o.call(e)}function c(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&u(e.buffer),t}function d(e){return"string"===typeof e}function p(e){return"number"===typeof e}function f(e){return null!==e&&"object"===typeof e}function m(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function h(e){return"[object Date]"===o.call(e)}function b(e){return"[object File]"===o.call(e)}function g(e){return"[object Blob]"===o.call(e)}function v(e){return"[object Function]"===o.call(e)}function x(e){return f(e)&&v(e.pipe)}function y(e){return"[object URLSearchParams]"===o.call(e)}function w(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function C(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function k(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function _(){var e={};function t(t,n){m(e[n])&&m(t)?e[n]=_(e[n],t):m(t)?e[n]=_({},t):s(t)?e[n]=t.slice():e[n]=t}for(var n=0,r=arguments.length;n<r;n++)k(arguments[n],t);return e}function S(e,t,n){return k(t,(function(t,o){e[o]=n&&"function"===typeof t?r(t,n):t})),e}function $(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}e.exports={isArray:s,isArrayBuffer:u,isBuffer:a,isFormData:l,isArrayBufferView:c,isString:d,isNumber:p,isObject:f,isPlainObject:m,isUndefined:i,isDate:h,isFile:b,isBlob:g,isFunction:v,isStream:x,isURLSearchParams:y,isStandardBrowserEnv:C,forEach:k,merge:_,extend:S,trim:w,stripBOM:$}},9615:(e,t,n)=>{"use strict";var r=n(9137),o=n(4680);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},9641:e=>{e.exports={version:"0.26.1"}}}]);
//# sourceMappingURL=292.fb68b677.js.map