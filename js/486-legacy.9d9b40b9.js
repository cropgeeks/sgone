(self["webpackChunksgone"]=self["webpackChunksgone"]||[]).push([[486],{4486:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return k}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"mt-3"},[n("b-jumbotron",[n("b-row",[n("b-col",{staticClass:"text-center text-sm-right",attrs:{cols:"12",sm:"4",order:"1","order-sm":"2"}},[n("b-img",{attrs:{fluid:"",src:"img/logo.svg"}})],1),n("b-col",{attrs:{cols:"12",sm:"8",order:"2","order-sm":"1"}},[n("h1",{staticClass:"display-3 text-center text-sm-left"},[t._v("SGONE")]),n("p",{staticClass:"lead text-center text-sm-left"},[t._v(t._s(t.$t("jumbotronLead")))])])],1)],1),t.supportsWorker?[n("b-dropdown",{staticClass:"mb-3",attrs:{text:t.$t("buttonImport")}},[n("b-dropdown-item",{on:{click:function(e){return t.$refs.germinateModal.show()}}},[t._v(t._s(t.$t("buttonImportFromGerminate")))])],1),n("b-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[n("b-form-group",{attrs:{"label-for":"input"},scopedSlots:t._u([{key:"label",fn:function(){return[n("span",[t._v(t._s(t.$t("formLabelInput"))+" ")]),n("BIconQuestionCircle",{attrs:{id:"input-help"}}),n("b-popover",{attrs:{target:"input-help",triggers:"hover",placement:"bottom"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.$t("popoverTitleInput")))]},proxy:!0}],null,!1,2011926038)},[n("div",{domProps:{innerHTML:t._s(t.$t("popoverHtmlInput"))}})])]},proxy:!0}],null,!1,528786271)},[n("b-form-textarea",{attrs:{id:"input",rows:6},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"tab",9,e.key,"Tab")?null:(e.preventDefault(),t.tabber(e))}},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),n("b-row",[n("b-col",{attrs:{cols:"12",sm:"6"}},[n("b-form-group",{attrs:{label:t.$t("formLabelIdColumn"),"label-for":"id-column"}},[n("b-form-select",{attrs:{options:t.columnOptions},scopedSlots:t._u([{key:"first",fn:function(){return[n("b-form-select-option",{attrs:{value:null,disabled:"",id:"id-column"}},[t._v(t._s(t.$t("formDropdownPlaceholderIdColumn")))])]},proxy:!0}],null,!1,4050823292),model:{value:t.idColumn,callback:function(e){t.idColumn=e},expression:"idColumn"}})],1)],1),n("b-col",{attrs:{cols:"12",sm:"6"}},[n("b-form-group",{attrs:{label:t.$t("formLabelNameColumn"),"label-for":"name-column"}},[n("b-form-select",{attrs:{options:t.columnOptions},scopedSlots:t._u([{key:"first",fn:function(){return[n("b-form-select-option",{attrs:{value:null,disabled:"",id:"name-column"}},[t._v(t._s(t.$t("formDropdownPlaceholderNameColumn")))])]},proxy:!0}],null,!1,3982375356),model:{value:t.nameColumn,callback:function(e){t.nameColumn=e},expression:"nameColumn"}})],1)],1)],1),t.progress?[n("b-progress",{attrs:{value:t.progress.done/t.progress.total*100,variant:"info",striped:"",animated:""}}),n("p",[t.progress.done?[t._v(t._s(t.$tc("progressInfoComparisons",t.progress.done,{count:t.progress.done.toLocaleString()+" / "+t.progress.total.toLocaleString()}))+" "+t._s(t.$tc("progressInfoDuplicates",t.progress.duplicateCount,{count:t.progress.duplicateCount.toLocaleString()})))]:t._e()],2)]:t._e(),null===t.progress?n("b-button",{attrs:{type:"submit",disabled:!t.input||!t.idColumn}},[t._v(t._s(t.$t("buttonGo")))]):n("b-button",{on:{click:function(e){return e.preventDefault(),t.cancel.apply(null,arguments)}}},[t._v(t._s(t.$t("buttonCancel")))])],2),t.duplicates&&t.duplicates.length>0?n("b-card",{staticClass:"mt-3",attrs:{"no-body":""}},[n("b-tabs",{attrs:{card:"","content-class":"mt-3","no-fade":""},on:{changed:t.updateIndex},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},t._l(t.duplicates,(function(e,r){return n("b-tab",{key:e.uuid,scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" "+t._s(t.$t("tabTitleResults"))+" "),n("button",{staticClass:"close ml-2",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return e.stopPropagation(),t.deleteTab(r)}}},[t._v("×")])]},proxy:!0}],null,!0)},[n("Results",{attrs:{duplicates:e}})],1)})),1)],1):t._e()]:n("h1",[t._v("Please use a browser that supports Web Workers")]),n("GerminateModal",{ref:"germinateModal",on:{"data-loaded":t.setGerminateData}})],2)},o=[],i=(n(1249),n(4916),n(3123),n(6699),n(5684),n(7042),n(2222),n(561),n(1539),n(4747),n(3371),n(5306),n(9714),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{ref:"germinateModal",attrs:{title:t.$t("modalTitleImportGerminate"),"ok-title":t.$t("buttonImport"),"ok-disabled":!t.canContinue,"cancel-title":t.$t("buttonCancel")},on:{ok:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[n("p",[t._v(t._s(t.$t("modalTextImportGerminate")))]),n("b-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[n("b-form-radio-group",{staticClass:"mb-3",attrs:{buttons:"",options:t.importTypeOptions,"button-variant":"outline-secondary"},model:{value:t.importType,callback:function(e){t.importType=e},expression:"importType"}}),n("b-form-group",{attrs:{label:t.$t("formLabelGerminateUrl"),"label-for":"url",description:t.$t("formDescriptionGerminateUrl")}},[n("b-form-input",{attrs:{id:"url"},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}})],1),n("b-form-group",{attrs:{label:t.$t("formLabelGerminateRequiresCredentials"),"label-for":"credentials",description:t.$t("formDescriptionGerminateRequiresCredentials")}},[n("b-form-radio-group",{staticClass:"mb-3",attrs:{buttons:"",options:t.credentialOptions,"button-variant":"outline-secondary",id:"credentials"},model:{value:t.needsCredentials,callback:function(e){t.needsCredentials=e},expression:"needsCredentials"}})],1),t.needsCredentials?[n("b-form-group",{attrs:{label:t.$t("formLabelUsername"),"label-for":"username",description:t.$t("formDescriptionUsername")}},[n("b-form-input",{attrs:{id:"username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),n("b-form-group",{attrs:{label:t.$t("formLabelPassword"),"label-for":"password",description:t.$t("formDescriptionPassword")}},[n("b-form-input",{attrs:{id:"password",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)]:t._e()],2)],1)}),s=[],a=n(9669)["default"],u={data:function(){return{username:null,password:null,needsCredentials:!1,url:null,token:null,importType:"germplasm"}},computed:{canContinue:function(){return this.url&&(!this.needsCredentials||null!==this.username&&null!==this.password)},credentialOptions:function(){return[{text:this.$t("genericYes"),value:!0},{text:this.$t("genericNo"),value:!1}]},importTypeOptions:function(){return[{text:this.$t("formSelectOptionGermplasm"),value:"germplasm"},{text:this.$t("formSelectOptionTraits"),value:"traits"}]}},methods:{show:function(t){this.url=null,this.username=null,this.password=null,this.needsCredentials=!1,this.token=null,this.url=t,this.importType="germplasm",this.$refs.germinateModal.show()},hide:function(){var t=this;this.$nextTick((function(){return t.$refs.germinateModal.hide()}))},onSubmit:function(){this.needsCredentials?this.getToken():this.getData()},getToken:function(){var t=this;a({baseURL:this.url,url:"api/token",method:"post",data:{username:this.username,password:this.password}}).then((function(e){e&&e.data&&e.data.token&&(t.token=e.data.token,t.getData())}))},getData:function(){var t=this,e={baseURL:this.url,url:"germplasm"===this.importType?"api/germplasm/table":"api/trait/table",method:"post",headers:{"Content-Type":"application/json; charset=utf-8"},data:{page:0,limit:2147483647}};this.token&&(e.withCredentials=!0,e.headers.Authorization="Bearer ".concat(this.token)),a(e).then((function(e){if(e&&e.data&&e.data.data){var n="id\tname\n";e.data.data.forEach((function(e){"germplasm"===t.importType?n+="".concat(e.germplasmId,"\t").concat(e.germplasmName,"\n"):n+="".concat(e.traitId,"\t").concat(e.traitName,"\n")})),t.$emit("data-loaded",n),t.hide()}}))}}},c=u,l=n(1001),f=(0,l.Z)(c,i,s,!1,null,null,null),p=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.duplicates.duplicates&&t.duplicates.duplicates.length>0?n("div",[n("p",{domProps:{innerHTML:t._s(t.$tc("resultsInfoDuplicates",t.duplicates.duplicates.length,{count:t.duplicates.duplicates.length.toLocaleString()}))}}),t.duplicates.runtime?n("p",{domProps:{innerHTML:t._s(t.$tc("resultsInfoRuntime",t.duplicates.runtime,{count:t.duplicates.runtime.toLocaleString()}))}}):t._e(),t.duplicates.total?n("p",{domProps:{innerHTML:t._s(t.$tc("resultsInfoComparisons",t.duplicates.total,{count:t.duplicates.total.toLocaleString()}))}}):t._e(),n("b-button",{staticClass:"mb-3",on:{click:function(e){return t.download(t.index)}}},[t._v(t._s(t.$t("buttonDownload")))]),n("b-table",{attrs:{items:t.duplicates.duplicates,fields:t.columns,"per-page":100,"current-page":t.currentPage,responsive:"",striped:"",hover:""},scopedSlots:t._u([{key:"cell(type)",fn:function(e){return[n("b-badge",{attrs:{variant:"exact"===e.value?"success":"warning"}},[t._v(t._s(e.value))])]}}],null,!1,2684915919)}),n("b-pagination",{attrs:{"total-rows":t.duplicates.duplicates.length,"per-page":100},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1):t._e()},h=[],m={props:{duplicates:{type:Object,default:function(){return{duplicates:[]}}}},data:function(){return{currentPage:1}},computed:{columns:function(){return[{key:"type",sortable:!0,label:this.$t("tableColumnDuplicateType")},{key:"one.id",sortable:!0,label:this.$t("tableColumnOneId")},{key:"one.name",sortable:!0,label:this.$t("tableColumnOneName")},{key:"two.id",sortable:!0,label:this.$t("tableColumnTwoId")},{key:"two.name",sortable:!0,label:this.$t("tableColumnTwoName")}]}}},v=m,g=(0,l.Z)(v,d,h,!1,null,null,null),b=g.exports,x=n(8019),y={components:{BIconQuestionCircle:x.POT,GerminateModal:p,Results:b},data:function(){return{input:null,progress:null,tabIndex:0,duplicates:[],headers:null,idColumn:null,nameColumn:null}},computed:{supportsWorker:function(){return window.Worker},columnOptions:function(){return this.headers?this.headers.map((function(t){return{value:t,text:t}})):null}},watch:{input:function(t){t?(this.headers=t.split(/\r?\n/)[0].split("\t"),this.idColumn=this.headers.includes("id")?"id":this.headers[0],this.nameColumn=this.headers.includes("name")?"name":this.headers[0]):(this.headers=null,this.idColumn=null,this.nameColumn=null)}},methods:{tabber:function(t){var e=this.input,n=t.target.selectionStart,r=e.slice(0,n),o=e.slice(n);this.input="".concat(r,"\t").concat(o),t.target.value=this.varieties,t.target.selectionEnd=t.target.selectionStart=n+1},download:function(t){var e="data:text/json;charset=utf-8,".concat(encodeURIComponent(JSON.stringify(this.duplicates[t].duplicates))),n=document.createElement("a");n.href=e,n.download="sgone.json",n.click()},updateIndex:function(t,e){t.length>=e.length&&(this.tabIndex=t.length-1)},deleteTab:function(t){this.duplicates.splice(t,1)},setGerminateData:function(t){this.input=t},cancel:function(){this.worker&&(this.worker.terminate(),this.progress=null)},onSubmit:function(){var t=this;this.progress={running:!1,done:0,total:1,duplicateCount:0},this.worker=new Worker("./levenshtein.worker.js");var e=Date.now();this.worker.postMessage({data:this.input.split(/\r?\n/),idColumn:this.idColumn,nameColumn:this.nameColumn}),this.worker.onmessage=function(n){if(n.data)if(n.data.running)t.progress=n.data;else{var r=Date.now(),o=n.data.duplicates;o.forEach((function(t){Object.freeze(t)})),Object.freeze(o);var i={uuid:t.uuidv4(),duplicates:o,runtime:Math.ceil((r-e)/1e3),total:n.data.total};Object.freeze(i),t.duplicates.push(i),t.progress=null}}},uuidv4:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0,n="x"===t?e:3&e|8;return n.toString(16)}))}},mounted:function(){this.$route.query&&this.$route.query.germinateUrl&&this.$refs.germinateModal.show(this.$route.query.germinateUrl)}},w=y,C=(0,l.Z)(w,r,o,!1,null,null,null),k=C.exports},9669:function(t,e,n){t.exports=n(1609)},5448:function(t,e,n){"use strict";var r=n(4867),o=n(6026),i=n(4372),s=n(5327),a=n(4097),u=n(4109),c=n(7985),l=n(5061),f=n(7874),p=n(5263);t.exports=function(t){return new Promise((function(e,n){var d,h=t.data,m=t.headers,v=t.responseType;function g(){t.cancelToken&&t.cancelToken.unsubscribe(d),t.signal&&t.signal.removeEventListener("abort",d)}r.isFormData(h)&&delete m["Content-Type"];var b=new XMLHttpRequest;if(t.auth){var x=t.auth.username||"",y=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";m.Authorization="Basic "+btoa(x+":"+y)}var w=a(t.baseURL,t.url);function C(){if(b){var r="getAllResponseHeaders"in b?u(b.getAllResponseHeaders()):null,i=v&&"text"!==v&&"json"!==v?b.response:b.responseText,s={data:i,status:b.status,statusText:b.statusText,headers:r,config:t,request:b};o((function(t){e(t),g()}),(function(t){n(t),g()}),s),b=null}}if(b.open(t.method.toUpperCase(),s(w,t.params,t.paramsSerializer),!0),b.timeout=t.timeout,"onloadend"in b?b.onloadend=C:b.onreadystatechange=function(){b&&4===b.readyState&&(0!==b.status||b.responseURL&&0===b.responseURL.indexOf("file:"))&&setTimeout(C)},b.onabort=function(){b&&(n(l("Request aborted",t,"ECONNABORTED",b)),b=null)},b.onerror=function(){n(l("Network Error",t,null,b)),b=null},b.ontimeout=function(){var e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",r=t.transitional||f;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(l(e,t,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",b)),b=null},r.isStandardBrowserEnv()){var k=(t.withCredentials||c(w))&&t.xsrfCookieName?i.read(t.xsrfCookieName):void 0;k&&(m[t.xsrfHeaderName]=k)}"setRequestHeader"in b&&r.forEach(m,(function(t,e){"undefined"===typeof h&&"content-type"===e.toLowerCase()?delete m[e]:b.setRequestHeader(e,t)})),r.isUndefined(t.withCredentials)||(b.withCredentials=!!t.withCredentials),v&&"json"!==v&&(b.responseType=t.responseType),"function"===typeof t.onDownloadProgress&&b.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&b.upload&&b.upload.addEventListener("progress",t.onUploadProgress),(t.cancelToken||t.signal)&&(d=function(t){b&&(n(!t||t&&t.type?new p("canceled"):t),b.abort(),b=null)},t.cancelToken&&t.cancelToken.subscribe(d),t.signal&&(t.signal.aborted?d():t.signal.addEventListener("abort",d))),h||(h=null),b.send(h)}))}},1609:function(t,e,n){"use strict";var r=n(4867),o=n(1849),i=n(321),s=n(7185),a=n(5546);function u(t){var e=new i(t),n=o(i.prototype.request,e);return r.extend(n,i.prototype,e),r.extend(n,e),n.create=function(e){return u(s(t,e))},n}var c=u(a);c.Axios=i,c.Cancel=n(5263),c.CancelToken=n(4972),c.isCancel=n(6502),c.VERSION=n(7288).version,c.all=function(t){return Promise.all(t)},c.spread=n(8713),c.isAxiosError=n(6268),t.exports=c,t.exports["default"]=c},5263:function(t){"use strict";function e(t){this.message=t}e.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},e.prototype.__CANCEL__=!0,t.exports=e},4972:function(t,e,n){"use strict";var r=n(5263);function o(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;this.promise.then((function(t){if(n._listeners){var e,r=n._listeners.length;for(e=0;e<r;e++)n._listeners[e](t);n._listeners=null}})),this.promise.then=function(t){var e,r=new Promise((function(t){n.subscribe(t),e=t})).then(t);return r.cancel=function(){n.unsubscribe(e)},r},t((function(t){n.reason||(n.reason=new r(t),e(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]},o.prototype.unsubscribe=function(t){if(this._listeners){var e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}},o.source=function(){var t,e=new o((function(e){t=e}));return{token:e,cancel:t}},t.exports=o},6502:function(t){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},321:function(t,e,n){"use strict";var r=n(4867),o=n(5327),i=n(782),s=n(3572),a=n(7185),u=n(4875),c=u.validators;function l(t){this.defaults=t,this.interceptors={request:new i,response:new i}}l.prototype.request=function(t,e){"string"===typeof t?(e=e||{},e.url=t):e=t||{},e=a(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var n=e.transitional;void 0!==n&&u.assertOptions(n,{silentJSONParsing:c.transitional(c.boolean),forcedJSONParsing:c.transitional(c.boolean),clarifyTimeoutError:c.transitional(c.boolean)},!1);var r=[],o=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(o=o&&t.synchronous,r.unshift(t.fulfilled,t.rejected))}));var i,l=[];if(this.interceptors.response.forEach((function(t){l.push(t.fulfilled,t.rejected)})),!o){var f=[s,void 0];Array.prototype.unshift.apply(f,r),f=f.concat(l),i=Promise.resolve(e);while(f.length)i=i.then(f.shift(),f.shift());return i}var p=e;while(r.length){var d=r.shift(),h=r.shift();try{p=d(p)}catch(m){h(m);break}}try{i=s(p)}catch(m){return Promise.reject(m)}while(l.length)i=i.then(l.shift(),l.shift());return i},l.prototype.getUri=function(t){return t=a(this.defaults,t),o(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(t){l.prototype[t]=function(e,n){return this.request(a(n||{},{method:t,url:e,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(t){l.prototype[t]=function(e,n,r){return this.request(a(r||{},{method:t,url:e,data:n}))}})),t.exports=l},782:function(t,e,n){"use strict";var r=n(4867);function o(){this.handlers=[]}o.prototype.use=function(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=o},4097:function(t,e,n){"use strict";var r=n(1793),o=n(7303);t.exports=function(t,e){return t&&!r(e)?o(t,e):e}},5061:function(t,e,n){"use strict";var r=n(481);t.exports=function(t,e,n,o,i){var s=new Error(t);return r(s,e,n,o,i)}},3572:function(t,e,n){"use strict";var r=n(4867),o=n(8527),i=n(6502),s=n(5546),a=n(5263);function u(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new a("canceled")}t.exports=function(t){u(t),t.headers=t.headers||{},t.data=o.call(t,t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]}));var e=t.adapter||s.adapter;return e(t).then((function(e){return u(t),e.data=o.call(t,e.data,e.headers,t.transformResponse),e}),(function(e){return i(e)||(u(t),e&&e.response&&(e.response.data=o.call(t,e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},481:function(t){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},t}},7185:function(t,e,n){"use strict";var r=n(4867);t.exports=function(t,e){e=e||{};var n={};function o(t,e){return r.isPlainObject(t)&&r.isPlainObject(e)?r.merge(t,e):r.isPlainObject(e)?r.merge({},e):r.isArray(e)?e.slice():e}function i(n){return r.isUndefined(e[n])?r.isUndefined(t[n])?void 0:o(void 0,t[n]):o(t[n],e[n])}function s(t){if(!r.isUndefined(e[t]))return o(void 0,e[t])}function a(n){return r.isUndefined(e[n])?r.isUndefined(t[n])?void 0:o(void 0,t[n]):o(void 0,e[n])}function u(n){return n in e?o(t[n],e[n]):n in t?o(void 0,t[n]):void 0}var c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u};return r.forEach(Object.keys(t).concat(Object.keys(e)),(function(t){var e=c[t]||i,o=e(t);r.isUndefined(o)&&e!==u||(n[t]=o)})),n}},6026:function(t,e,n){"use strict";var r=n(5061);t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},8527:function(t,e,n){"use strict";var r=n(4867),o=n(5546);t.exports=function(t,e,n){var i=this||o;return r.forEach(n,(function(n){t=n.call(i,t,e)})),t}},5546:function(t,e,n){"use strict";var r=n(4867),o=n(6016),i=n(481),s=n(7874),a={"Content-Type":"application/x-www-form-urlencoded"};function u(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function c(){var t;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(t=n(5448)),t}function l(t,e,n){if(r.isString(t))try{return(e||JSON.parse)(t),r.trim(t)}catch(o){if("SyntaxError"!==o.name)throw o}return(n||JSON.stringify)(t)}var f={transitional:s,adapter:c(),transformRequest:[function(t,e){return o(e,"Accept"),o(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(u(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)||e&&"application/json"===e["Content-Type"]?(u(e,"application/json"),l(t)):t}],transformResponse:[function(t){var e=this.transitional||f.transitional,n=e&&e.silentJSONParsing,o=e&&e.forcedJSONParsing,s=!n&&"json"===this.responseType;if(s||o&&r.isString(t)&&t.length)try{return JSON.parse(t)}catch(a){if(s){if("SyntaxError"===a.name)throw i(a,this,"E_JSON_PARSE");throw a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(t){f.headers[t]={}})),r.forEach(["post","put","patch"],(function(t){f.headers[t]=r.merge(a)})),t.exports=f},7874:function(t){"use strict";t.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},7288:function(t){t.exports={version:"0.26.1"}},1849:function(t){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},5327:function(t,e,n){"use strict";var r=n(4867);function o(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(r.isURLSearchParams(e))i=e.toString();else{var s=[];r.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,(function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),s.push(o(e)+"="+o(t))})))})),i=s.join("&")}if(i){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}},7303:function(t){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},4372:function(t,e,n){"use strict";var r=n(4867);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,o,i,s){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},1793:function(t){"use strict";t.exports=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}},6268:function(t,e,n){"use strict";var r=n(4867);t.exports=function(t){return r.isObject(t)&&!0===t.isAxiosError}},7985:function(t,e,n){"use strict";var r=n(4867);t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(e){var n=r.isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return function(){return!0}}()},6016:function(t,e,n){"use strict";var r=n(4867);t.exports=function(t,e){r.forEach(t,(function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])}))}},4109:function(t,e,n){"use strict";var r=n(4867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,i,s={};return t?(r.forEach(t.split("\n"),(function(t){if(i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),n=r.trim(t.substr(i+1)),e){if(s[e]&&o.indexOf(e)>=0)return;s[e]="set-cookie"===e?(s[e]?s[e]:[]).concat([n]):s[e]?s[e]+", "+n:n}})),s):s}},8713:function(t){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},4875:function(t,e,n){"use strict";var r=n(7288).version,o={};["object","boolean","number","function","string","symbol"].forEach((function(t,e){o[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));var i={};function s(t,e,n){if("object"!==typeof t)throw new TypeError("options must be an object");var r=Object.keys(t),o=r.length;while(o-- >0){var i=r[o],s=e[i];if(s){var a=t[i],u=void 0===a||s(a,i,t);if(!0!==u)throw new TypeError("option "+i+" must be "+u)}else if(!0!==n)throw Error("Unknown option "+i)}}o.transitional=function(t,e,n){function o(t,e){return"[Axios v"+r+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}return function(n,r,s){if(!1===t)throw new Error(o(r," has been removed"+(e?" in "+e:"")));return e&&!i[r]&&(i[r]=!0,console.warn(o(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,s)}},t.exports={assertOptions:s,validators:o}},4867:function(t,e,n){"use strict";var r=n(1849),o=Object.prototype.toString;function i(t){return Array.isArray(t)}function s(t){return"undefined"===typeof t}function a(t){return null!==t&&!s(t)&&null!==t.constructor&&!s(t.constructor)&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function u(t){return"[object ArrayBuffer]"===o.call(t)}function c(t){return"[object FormData]"===o.call(t)}function l(t){var e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&u(t.buffer),e}function f(t){return"string"===typeof t}function p(t){return"number"===typeof t}function d(t){return null!==t&&"object"===typeof t}function h(t){if("[object Object]"!==o.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function m(t){return"[object Date]"===o.call(t)}function v(t){return"[object File]"===o.call(t)}function g(t){return"[object Blob]"===o.call(t)}function b(t){return"[object Function]"===o.call(t)}function x(t){return d(t)&&b(t.pipe)}function y(t){return"[object URLSearchParams]"===o.call(t)}function w(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function C(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function k(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),i(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}function E(){var t={};function e(e,n){h(t[n])&&h(e)?t[n]=E(t[n],e):h(e)?t[n]=E({},e):i(e)?t[n]=e.slice():t[n]=e}for(var n=0,r=arguments.length;n<r;n++)k(arguments[n],e);return t}function O(t,e,n){return k(e,(function(e,o){t[o]=n&&"function"===typeof e?r(e,n):e})),t}function S(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}t.exports={isArray:i,isArrayBuffer:u,isBuffer:a,isFormData:c,isArrayBufferView:l,isString:f,isNumber:p,isObject:d,isPlainObject:h,isUndefined:s,isDate:m,isFile:v,isBlob:g,isFunction:b,isStream:x,isURLSearchParams:y,isStandardBrowserEnv:C,forEach:k,merge:E,extend:O,trim:w,stripBOM:S}},1530:function(t,e,n){"use strict";var r=n(8710).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},7556:function(t,e,n){var r=n(7293);t.exports=r((function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}}))},4964:function(t,e,n){var r=n(5112),o=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[o]=!1,"/./"[t](e)}catch(r){}}return!1}},7007:function(t,e,n){"use strict";n(4916);var r=n(1702),o=n(1320),i=n(2261),s=n(7293),a=n(5112),u=n(8880),c=a("species"),l=RegExp.prototype;t.exports=function(t,e,n,f){var p=a(t),d=!s((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),h=d&&!s((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!d||!h||n){var m=r(/./[p]),v=e(p,""[t],(function(t,e,n,o,s){var a=r(t),u=e.exec;return u===i||u===l.exec?d&&!s?{done:!0,value:m(e,n,o)}:{done:!0,value:a(n,e,o)}:{done:!1}}));o(String.prototype,t,v[0]),o(l,p,v[1])}f&&u(l[p],"sham",!0)}},2767:function(t,e,n){var r=n(7293);t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},647:function(t,e,n){var r=n(1702),o=n(7908),i=Math.floor,s=r("".charAt),a=r("".replace),u=r("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,r,f,p){var d=n+t.length,h=r.length,m=l;return void 0!==f&&(f=o(f),m=c),a(p,m,(function(o,a){var c;switch(s(a,0)){case"$":return"$";case"&":return t;case"`":return u(e,0,n);case"'":return u(e,d);case"<":c=f[u(a,1,-1)];break;default:var l=+a;if(0===l)return o;if(l>h){var p=i(l/10);return 0===p?o:p<=h?void 0===r[p-1]?s(a,1):r[p-1]+s(a,1):o}c=r[l-1]}return void 0===c?"":c}))}},2423:function(t,e,n){var r=n(2109),o=n(1702),i=n(3501),s=n(111),a=n(2597),u=n(3070).f,c=n(8006),l=n(1156),f=n(2050),p=n(9711),d=n(2767),h=!1,m=p("meta"),v=0,g=function(t){u(t,m,{value:{objectID:"O"+v++,weakData:{}}})},b=function(t,e){if(!s(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,m)){if(!f(t))return"F";if(!e)return"E";g(t)}return t[m].objectID},x=function(t,e){if(!a(t,m)){if(!f(t))return!0;if(!e)return!1;g(t)}return t[m].weakData},y=function(t){return d&&h&&f(t)&&!a(t,m)&&g(t),t},w=function(){C.enable=function(){},h=!0;var t=c.f,e=o([].splice),n={};n[m]=1,t(n).length&&(c.f=function(n){for(var r=t(n),o=0,i=r.length;o<i;o++)if(r[o]===m){e(r,o,1);break}return r},r({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:l.f}))},C=t.exports={enable:w,fastKey:b,getWeakData:x,onFreeze:y};i[m]=!0},7850:function(t,e,n){var r=n(111),o=n(4326),i=n(5112),s=i("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==o(t))}},3929:function(t,e,n){var r=n(7854),o=n(7850),i=r.TypeError;t.exports=function(t){if(o(t))throw i("The method doesn't accept regular expressions");return t}},2050:function(t,e,n){var r=n(7293),o=n(111),i=n(4326),s=n(7556),a=Object.isExtensible,u=r((function(){a(1)}));t.exports=u||s?function(t){return!!o(t)&&((!s||"ArrayBuffer"!=i(t))&&(!a||a(t)))}:a},7651:function(t,e,n){var r=n(7854),o=n(6916),i=n(9670),s=n(614),a=n(4326),u=n(2261),c=r.TypeError;t.exports=function(t,e){var n=t.exec;if(s(n)){var r=o(n,t,e);return null!==r&&i(r),r}if("RegExp"===a(t))return o(u,t,e);throw c("RegExp#exec called on incompatible receiver")}},2222:function(t,e,n){"use strict";var r=n(2109),o=n(7854),i=n(7293),s=n(3157),a=n(111),u=n(7908),c=n(6244),l=n(6135),f=n(5417),p=n(1194),d=n(5112),h=n(7392),m=d("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",b=o.TypeError,x=h>=51||!i((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),y=p("concat"),w=function(t){if(!a(t))return!1;var e=t[m];return void 0!==e?!!e:s(t)},C=!x||!y;r({target:"Array",proto:!0,forced:C},{concat:function(t){var e,n,r,o,i,s=u(this),a=f(s,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?s:arguments[e],w(i)){if(o=c(i),p+o>v)throw b(g);for(n=0;n<o;n++,p++)n in i&&l(a,p,i[n])}else{if(p>=v)throw b(g);l(a,p++,i)}return a.length=p,a}})},1249:function(t,e,n){"use strict";var r=n(2109),o=n(2092).map,i=n(1194),s=i("map");r({target:"Array",proto:!0,forced:!s},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},561:function(t,e,n){"use strict";var r=n(2109),o=n(7854),i=n(1400),s=n(9303),a=n(6244),u=n(7908),c=n(5417),l=n(6135),f=n(1194),p=f("splice"),d=o.TypeError,h=Math.max,m=Math.min,v=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!p},{splice:function(t,e){var n,r,o,f,p,b,x=u(this),y=a(x),w=i(t,y),C=arguments.length;if(0===C?n=r=0:1===C?(n=0,r=y-w):(n=C-2,r=m(h(s(e),0),y-w)),y+n-r>v)throw d(g);for(o=c(x,r),f=0;f<r;f++)p=w+f,p in x&&l(o,f,x[p]);if(o.length=r,n<r){for(f=w;f<y-r;f++)p=f+r,b=f+n,p in x?x[b]=x[p]:delete x[b];for(f=y;f>y-r+n;f--)delete x[f-1]}else if(n>r)for(f=y-r;f>w;f--)p=f+r-1,b=f+n-1,p in x?x[b]=x[p]:delete x[b];for(f=0;f<n;f++)x[f+w]=arguments[f+2];return x.length=y-r+n,o}})},3371:function(t,e,n){var r=n(2109),o=n(2767),i=n(7293),s=n(111),a=n(2423).onFreeze,u=Object.freeze,c=i((function(){u(1)}));r({target:"Object",stat:!0,forced:c,sham:!o},{freeze:function(t){return u&&s(t)?u(a(t)):t}})},9714:function(t,e,n){"use strict";var r=n(1702),o=n(6530).PROPER,i=n(1320),s=n(9670),a=n(7976),u=n(1340),c=n(7293),l=n(7066),f="toString",p=RegExp.prototype,d=p[f],h=r(l),m=c((function(){return"/a/b"!=d.call({source:"a",flags:"b"})})),v=o&&d.name!=f;(m||v)&&i(RegExp.prototype,f,(function(){var t=s(this),e=u(t.source),n=t.flags,r=u(void 0===n&&a(p,t)&&!("flags"in p)?h(t):n);return"/"+e+"/"+r}),{unsafe:!0})},5684:function(t,e,n){"use strict";var r=n(2109),o=n(1702),i=n(3929),s=n(4488),a=n(1340),u=n(4964),c=o("".indexOf);r({target:"String",proto:!0,forced:!u("includes")},{includes:function(t){return!!~c(a(s(this)),a(i(t)),arguments.length>1?arguments[1]:void 0)}})},5306:function(t,e,n){"use strict";var r=n(2104),o=n(6916),i=n(1702),s=n(7007),a=n(7293),u=n(9670),c=n(614),l=n(9303),f=n(7466),p=n(1340),d=n(4488),h=n(1530),m=n(8173),v=n(647),g=n(7651),b=n(5112),x=b("replace"),y=Math.max,w=Math.min,C=i([].concat),k=i([].push),E=i("".indexOf),O=i("".slice),S=function(t){return void 0===t?t:String(t)},_=function(){return"$0"==="a".replace(/./,"$0")}(),T=function(){return!!/./[x]&&""===/./[x]("a","$0")}(),$=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));s("replace",(function(t,e,n){var i=T?"$":"$0";return[function(t,n){var r=d(this),i=void 0==t?void 0:m(t,x);return i?o(i,t,r,n):o(e,p(r),t,n)},function(t,o){var s=u(this),a=p(t);if("string"==typeof o&&-1===E(o,i)&&-1===E(o,"$<")){var d=n(e,s,a,o);if(d.done)return d.value}var m=c(o);m||(o=p(o));var b=s.global;if(b){var x=s.unicode;s.lastIndex=0}var _=[];while(1){var T=g(s,a);if(null===T)break;if(k(_,T),!b)break;var $=p(T[0]);""===$&&(s.lastIndex=h(a,f(s.lastIndex),x))}for(var j="",R=0,P=0;P<_.length;P++){T=_[P];for(var N=p(T[0]),I=y(w(l(T.index),a.length),0),A=[],D=1;D<T.length;D++)k(A,S(T[D]));var L=T.groups;if(m){var U=C([N],A,I,a);void 0!==L&&k(U,L);var B=p(r(o,void 0,U))}else B=v(N,a,I,A,L,o);I>=R&&(j+=O(a,R,I)+B,R=I+N.length)}return j+O(a,R)}]}),!$||!_||T)},3123:function(t,e,n){"use strict";var r=n(2104),o=n(6916),i=n(1702),s=n(7007),a=n(7850),u=n(9670),c=n(4488),l=n(6707),f=n(1530),p=n(7466),d=n(1340),h=n(8173),m=n(1589),v=n(7651),g=n(2261),b=n(2999),x=n(7293),y=b.UNSUPPORTED_Y,w=4294967295,C=Math.min,k=[].push,E=i(/./.exec),O=i(k),S=i("".slice),_=!x((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));s("split",(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=d(c(this)),s=void 0===n?w:n>>>0;if(0===s)return[];if(void 0===t)return[i];if(!a(t))return o(e,i,t,s);var u,l,f,p=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,b=new RegExp(t.source,h+"g");while(u=o(g,b,i)){if(l=b.lastIndex,l>v&&(O(p,S(i,v,u.index)),u.length>1&&u.index<i.length&&r(k,p,m(u,1)),f=u[0].length,v=l,p.length>=s))break;b.lastIndex===u.index&&b.lastIndex++}return v===i.length?!f&&E(b,"")||O(p,""):O(p,S(i,v)),p.length>s?m(p,0,s):p}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:o(e,this,t,n)}:e,[function(e,n){var r=c(this),s=void 0==e?void 0:h(e,t);return s?o(s,e,r,n):o(i,d(r),e,n)},function(t,r){var o=u(this),s=d(t),a=n(i,o,s,r,i!==e);if(a.done)return a.value;var c=l(o,RegExp),h=o.unicode,m=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(y?"g":"y"),g=new c(y?"^(?:"+o.source+")":o,m),b=void 0===r?w:r>>>0;if(0===b)return[];if(0===s.length)return null===v(g,s)?[s]:[];var x=0,k=0,E=[];while(k<s.length){g.lastIndex=y?0:k;var _,T=v(g,y?S(s,k):s);if(null===T||(_=C(p(g.lastIndex+(y?k:0)),s.length))===x)k=f(s,k,h);else{if(O(E,S(s,x,k)),E.length===b)return E;for(var $=1;$<=T.length-1;$++)if(O(E,T[$]),E.length===b)return E;k=x=_}}return O(E,S(s,x)),E}]}),!_,y)}}]);
//# sourceMappingURL=486-legacy.9d9b40b9.js.map