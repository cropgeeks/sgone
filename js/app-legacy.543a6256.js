(function(){var e={7422:function(e,n,t){"use strict";var r=t(144),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"secondary",id:"main-navigation"}},[t("b-navbar-brand",{staticClass:"d-flex align-items-center",attrs:{to:{name:"home"}}},[t("img",{staticClass:"d-inline-block align-top mr-3",attrs:{src:"img/logo.svg",height:"40px",alt:"SGONE"}}),e._v(" SGONE ")]),t("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t("b-navbar-nav",{staticClass:"ml-auto"},[t("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[t("BIconFlag"),t("span",[e._v(" "+e._s(e.$t("menuLocale")))])]},proxy:!0}])},e._l(e.languages,(function(n){return t("b-dropdown-item",{key:"locale-"+n.locale,on:{click:function(t){return e.onLocaleChanged(n)}}},[t("span",{staticClass:"mr-2"},[e._v(e._s(n.icon))]),t("span",[e._v(e._s(n.name))])])})),1),t("b-nav-item",{attrs:{to:{name:"about"}}},[t("BIconInfoCircle"),e._v(" "+e._s(e.$t("menuAbout")))],1)],1)],1)],1),t("router-view",{key:e.$route.path})],1)},i=[],a=(t(7941),t(2526),t(7327),t(1539),t(5003),t(4747),t(9337),t(8019)),s=t(629),l=(t(8674),t(6699),t(6992),t(8783),t(3948),t(7152)),u=t(7980),c=t(8034);r.Z.use(l.Z);var d={en_GB:c,de_DE:u},f=new l.Z({locale:"en_GB",fallbackLocale:"en_GB",messages:d}),m=["en_GB"];function p(e){return f.locale=e,document.querySelector("html").setAttribute("lang",e),e}function h(e){return f.locale===e||m.includes(e)?Promise.resolve(p(e)):t(8420)("./".concat(e,".json")).then((function(n){return f.setLocaleMessage(e,n.default),m.push(e),p(e)}))}function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){v(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var w={components:{BIconInfoCircle:a.gjx,BIconFlag:a.G49},computed:b({},(0,s.Se)(["storeLocale"])),data:function(){return{languages:[{locale:"en_GB",name:"British English",icon:"🇬🇧"},{locale:"de_DE",name:"Deutsch - Deutschland",icon:"🇩🇪"}]}},methods:{onLocaleChanged:function(e){var n=this;h(e.locale).then((function(){n.$i18n.locale=e.locale,n.$store.dispatch("setLocale",e.locale)}))}},mounted:function(){h(this.storeLocale)}},y=w,k=t(1001),O=(0,k.Z)(y,o,i,!1,null,null,null),D=O.exports,E=(t(7042),t(8309),t(1038),t(4916),t(1817),t(2165),t(5205));function I(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=N(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==t.return||t.return()}finally{if(s)throw i}}}}function N(e,n){if(e){if("string"===typeof e)return C(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?C(e,n):void 0}}function C(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}(0,E.z)("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then((function(e){var n,t=I(e);try{for(t.s();!(n=t.n()).done;){var r=n.value;r.update()}}catch(o){t.e(o)}finally{t.f()}})),setTimeout((function(){window.location.reload(!0)}),1e3)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var S=t(8345);r.Z.use(S.Z);var G=[{path:"/",name:"home",component:function(){return t.e(315).then(t.bind(t,315))}},{path:"/about",name:"about",component:function(){return t.e(856).then(t.bind(t,1856))}}],L=new S.Z({routes:G}),T=L,A=t(4702);r.Z.use(s.ZP);var _={NODE_ENV:"production",BASE_URL:""}.VUE_APP_INSTANCE_NAME;_||(_="sgone-"+window.location.pathname);var j=new s.ZP.Store({state:{locale:"en_GB"},getters:{storeLocale:function(e){return e.locale}},mutations:{ON_LOCALE_CHANGED_MUTATION:function(e,n){e.locale=n}},actions:{setLocale:function(e,n){var t=e.commit;t("ON_LOCALE_CHANGED_MUTATION",n)}},modules:{},plugins:[(0,A.Z)({key:_})]}),P=t(7772),Z=t(1869),B=t(7563),z=t(9301),U=t(7419),x=t(6152),R=t(794),F=t(9204),q=t(2135),K=t(7192),M=t(8525),V=t(4055),H=t(8141),$=t(3661),Y=t(326),J=t(4869),W=t(9306),Q=t(7723),X=t(4851),ee=t(295),ne=t(2749),te=t(7968);r.Z.use(P.A6),r.Z.use(Z.SY),r.Z.use(B.w6),r.Z.use(z.E),r.Z.use(U.g),r.Z.use(x.s),r.Z.use(R.v5),r.Z.use(F.Rt),r.Z.use(q.WA),r.Z.use(K.F),r.Z.use(M.dg),r.Z.use(V.u3),r.Z.use(H.iH),r.Z.use($.lF),r.Z.use(Y.F),r.Z.use(J.T),r.Z.use(W.k),r.Z.use(Q.kH),r.Z.use(X.PI),r.Z.use(ee.xL),r.Z.use(ne._s),r.Z.use(te.k),r.Z.config.productionTip=!1,new r.Z({router:T,store:j,i18n:f,render:function(e){return e(D)}}).$mount("#app")},8420:function(e,n,t){var r={"./de_DE.json":7980,"./en_GB.json":8034};function o(e){return Promise.resolve().then((function(){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}var o=r[e];return t.t(o,19)}))}o.keys=function(){return Object.keys(r)},o.id=8420,e.exports=o},7980:function(e){"use strict";e.exports=JSON.parse('{"buttonCancel":"Abbrechen","buttonDownload":"Herunterladen","buttonGo":"Los!","buttonImport":"Importieren","buttonImportFromGerminate":"Von Germinate","formDescriptionGerminateUrl":"Die URL vom Germinate von dem Daten importiert werden sollen.","formDescriptionGerminateRequiresCredentials":"Germinate könnte Anmeldedaten verlangen.","formDescriptionUsername":"Der Benutzername von dem System von dem Daten angefragt werden. SGONE wird diese Daten nicht speichern.","formDescriptionPassword":"Das Passwort von dem System von dem Daten angefragt werden. SGONE wird diese Daten nicht speichern.","formDropdownPlaceholderIdColumn":"-- Bitte Id-Spalte auswählen --","formDropdownPlaceholderNameColumn":"-- Bitte Name-Spalte auswählen --","formLabelInput":"Eingabe","formLabelIdColumn":"Id-Spalte","formLabelNameColumn":"Name-Spalte","formLabelGerminateUrl":"Germinate URL","formLabelGerminateRequiresCredentials":"Anmeldedaten nötig","formLabelUsername":"Benutzername","formLabelPassword":"Passwort","formSelectOptionGermplasm":"Keimplasma","formSelectOptionTraits":"Merkmale","genericNo":"Nein","genericYes":"Ja","jumbotronLead":"Duplikate in deinen Daten einfach identifizieren.","menuAbout":"Über","menuLocale":"Sprache","modalTitleImportGerminate":"Importieren von Germinate","modalTextImportGerminate":"Keimplasma und Merkmalsdefinitionen können von Germinate importiert werden um nach Duplikaten zu suchen. Germinate URL unten eingeben und optional Anmeldedaten angeben.","pageTitleAbout":"Über","pageHtmlAbout":"<p>SGONE ist ein Tool welches versucht mögliche Duplikate in deinen Daten zu finden die nicht direkt offensichtlich sind. Dies beinhaltet Fehler wie Rechtschreibfehler, unterschiedliche Zeichensetzung oder Unterschiede in der Groß-Klein-Schreibung.</p> <p>Kurz gesagt, SGONE hilt dabei sicherzustellen, dass Duplikate verschwinden!</p> <p>Um dies zu erreichen, verfolgt SGONE den folgenden Ansatz:</p> <ul> <li>Entferne alle nicht alphanumerischen Zeichen.</li> <li>Umwandlung von allen zeichen in Kleinschreibung.</li> <li>Berechnung der <a href=\'https://de.wikipedia.org/wiki/Levenshtein-Distanz\'>Levenshtein Distanz</a> zwischen allen Paaren an Bezeichnungen.</li> <li>Berechnung eines Schwellenwertes für die Distanz basierend auf der durchschnittlichen Länge der Bezeichnungen eines Vergleichs.</li> <li>Falls die Distanz gleich Null ist, wurde ein exaktes Duplikat gefunden.</li> <li>Falls die Distanz nicht gleich Null ist, aber unterhalb des Schwellenwertes liegt, überprüfe die folgenden Kriterien:</li> <ul> <li>Ist eine Bezeichnung ein Teilwort des anderen?</li> <li>Wenn nur die Zahlen in den Bezeichnungen berücksichtig werden, sind diese verschieden?</li> <li>Falls eine der oberen Fragen wahr ist, handelt es sich wahrscheinlich nicht um ein Duplikat. Andernfalls, markiere die Bezeichnungen als mögliche Duplikate.</li> </ul> </ul> <p>Die Ergebnisse werden in einer Tabelle dargestellt und entweder mit einer <span class=\'badge badge-success\'>exakt</span> oder <span class=\'badge badge-warning\'>wahrscheinlich</span> Markierung versehen.</p>","pageTextAboutDeveloper":"SGONE wurde entwickelt von <a href=\'https: //www.hutton.ac.uk/staff/sebastian-raubach\'>Sebastian Raubach</a>. Bei Fragen, Vorschlägen oder genereller Rückmeldung, bitte mit <a href=\'mailto:sebastian.raubach@hutton.ac.uk\'>Sebastian</a> in Kontakt setzen.","popoverTitleInput":"Eingabeformat","popoverHtmlInput":"Die Eingabe muss in Tab-getrenntem Format mit Spaltenkopfzeilen angegeben werden, z.B. <pre>id&#9;name\\n1&#9;Albert\\n2&#9;Barbara\\n3&#9;Catherine\\n4&#9;Katherine</pre>","progressInfoComparisons":"Keine Vergleiche bisher abgeschlossen. | Ein Vergleich bisher abgeschlossen. | {count} Vergleiche bisher abgeschlossen.","progressInfoDuplicates":"Keine Duplikate bisher gefunden. | Ein Duplikat bisher gefunden. | {count} Duplikate bisher gefunden.","resultsInfoDuplicates":"<strong>Keine Duplikate</strong> wurden gefunden. | <strong>Ein mögliches Duplikat</strong> wurde gefunden. | <strong>{count} mögliche Duplikate</strong> wurden gefunden.","resultsInfoRuntime":"<strong>0 Sekunden</strong> waren nötig um dieses Ergebnis zu berechnen. | <strong>Eine Sekunde</strong> war nötig um dieses Ergebnis zu berechnen. | <strong>{count} Sekunden</strong> waren nötig um dieses Ergebnis zu berechnen.","resultsInfoComparisons":"<strong>Keine Vergleiche</strong> wurden gemacht. | <strong>Ein Vergleich</strong> wurde gemacht. | <strong>{count} Vergleiche</strong> wurden gemacht.","tabTitleResults":"Ergebnisse","tableColumnDuplicateType":"Duplikat-Typ","tableColumnOneId":"Erste Id","tableColumnOneName":"Erster Name","tableColumnTwoId":"Zweite Id","tableColumnTwoName":"Zweiter Name"}')},8034:function(e){"use strict";e.exports=JSON.parse('{"buttonCancel":"Cancel","buttonDownload":"Download","buttonGo":"Go!","buttonImport":"Import","buttonImportFromGerminate":"From Germinate","formDropdownPlaceholderIdColumn":"-- Please select the id column --","formDropdownPlaceholderNameColumn":"-- Please select the name column --","formDescriptionGerminateUrl":"The URL of the Germinate you want to request the data from.","formDescriptionGerminateRequiresCredentials":"Germinate may require login credentials to access the data.","formDescriptionUsername":"The username of the system you\'re trying to log into. SGONE will not save this information.","formDescriptionPassword":"The password of the system you\'re trying to log into. SGONE will not save this information.","formLabelInput":"Input","formLabelIdColumn":"Id column","formLabelNameColumn":"Name column","formLabelGerminateUrl":"Germinate URL","formLabelGerminateRequiresCredentials":"Requires credentials","formLabelUsername":"Username","formLabelPassword":"Password","formSelectOptionGermplasm":"Germplasm","formSelectOptionTraits":"Traits","genericNo":"No","genericYes":"Yes","jumbotronLead":"Easily identify possible duplicates in your data.","menuAbout":"About","menuLocale":"Locale","modalTitleImportGerminate":"Import from Germinate","modalTextImportGerminate":"You can import germplasm and trait definitions from Germinate to check for duplicates. Enter the Germinate URL and optionally credentials below.","pageTitleAbout":"About","pageHtmlAbout":"<p>SGONE is a tool that tries to find possible duplicates in your data that aren\'t immediately obvious. This includes errors like typos, different punctuation or differences in upper- and lowercase letters.</p> <p>In short, SGONE will help you make sure your duplicate<strong>S</strong> are <strong>GONE</strong>!</p> <p>To achieve this, SGONE utilises the following appoach:</p> <ul> <li>Remove all non-alphanumeric characters.</li> <li>Convert the text to lowercase.</li> <li>Calculate the <a href=\'https://en.wikipedia.org/wiki/Levenshtein_distance\'>Levenshtein Distance</a> between any pair of identifiers.</li> <li>Calculate a threshold for the distance value based on the average identifier length of the comparison.</li> <li>If the distance is zero, we have an exact match.</li> <li>If the distance is not zero, but below the threshold, check the following:</li> <ul> <li>Is one identifier a substring of the other?</li> <li>Just looking at the numeric values in the identifiers, are they different?</li> <li>If either of these are true, then we\'re likely not dealing with a duplicate. Otherwise, mark them as possible duplicates.</li> </ul> </ul> <p>The results are presented in tabular form with either an <span class=\'badge badge-success\'>exact</span> or a <span class=\'badge badge-warning\'>likely</span> match tag.</p>","pageTextAboutDeveloper":"SGONE has been developed by <a href=\'https: //www.hutton.ac.uk/staff/sebastian-raubach\'>Sebastian Raubach</a>. If you have any questions, suggestions or general feedback, please contact <a href=\'mailto:sebastian.raubach@hutton.ac.uk\'>Sebastian</a>.","popoverTitleInput":"Input format","popoverHtmlInput":"The input needs to be provided in tab-delimited format with column headers, e.g. <pre>id&#9;name\\n1&#9;Albert\\n2&#9;Barbara\\n3&#9;Catherine\\n4&#9;Katherine</pre>","progressInfoComparisons":"No comparisons done yet. | 1 comparison done. | {count} comparisons done.","progressInfoDuplicates":"No duplicates found so far. | 1 duplicate found so far. | {count} duplicates found so far.","resultsInfoDuplicates":"<strong>No duplicates</strong> have been found. | <strong>1 possible duplicate</strong> has been found. | <strong>{count} possible duplicates</strong> have been found.","resultsInfoRuntime":"<strong>0 seconds</strong> were required to produce this result. | <strong>1 second</strong> was required to produce this result. | <strong>{count} seconds</strong> were required to produce this result.","resultsInfoComparisons":"<strong>0 comparisons</strong> have been made. | <strong>1 comparison</strong> has been made. | <strong>{count} comparisons</strong> have been made.","tabTitleResults":"Results","tableColumnDuplicateType":"Duplicate type","tableColumnOneId":"Id one","tableColumnOneName":"Name one","tableColumnTwoId":"Id two","tableColumnTwoName":"Name two"}')}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],i=e[c][2];for(var s=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[l])}))?r.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(c--,1);var u=o();void 0!==u&&(n=u)}}return n}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]}}(),function(){var e,n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};t.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);t.r(i);var a={};e=e||[null,n({}),n([]),n(n)];for(var s=2&o&&r;"object"==typeof s&&!~e.indexOf(s);s=n(s))Object.getOwnPropertyNames(s).forEach((function(e){a[e]=function(){return r[e]}}));return a["default"]=function(){return r},t.d(i,a),i}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"-legacy."+{315:"daf732e9",856:"65300824"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{315:"03284d7d",856:"f1356052"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="sgone:";t.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var s,l;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+i){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+i),s.src=r),e[r]=[o];var f=function(n,t){s.onerror=s.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p=""}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)t();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||n,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=s,o.parentNode.removeChild(o),r(l)}};return o.onerror=o.onload=i,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var a=t.miniCssF(r),s=t.p+a;if(n(a,s))return o();e(r,s,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={315:1,856:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var a=t.p+t.u(n),s=new Error,l=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}};t.l(a,l,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,a=r[0],s=r[1],l=r[2],u=0;if(a.some((function(n){return 0!==e[n]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(l)var c=l(t)}for(n&&n(r);u<a.length;u++)i=a[u],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(c)},r=self["webpackChunksgone"]=self["webpackChunksgone"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(7422)}));r=t.O(r)})();
//# sourceMappingURL=app-legacy.543a6256.js.map