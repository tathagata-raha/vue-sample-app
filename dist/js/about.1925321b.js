(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0a06":function(e,t,r){"use strict";var n=r("c532"),i=r("30b5"),o=r("f6b4"),a=r("5270"),s=r("4a7b");function c(e){this.defaults=e,this.interceptors={request:new o,response:new o}}c.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=s(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],r=Promise.resolve(e);this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));while(t.length)r=r.then(t.shift(),t.shift());return r},c.prototype.getUri=function(e){return e=s(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,r){return this.request(n.merge(r||{},{method:e,url:t}))}})),n.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,r,i){return this.request(n.merge(i||{},{method:e,url:t,data:r}))}})),e.exports=c},"0df6":function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"1d2b":function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},2444:function(e,t,r){"use strict";(function(t){var n=r("c532"),i=r("c8af"),o={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function s(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t))&&(e=r("b50d")),e}var c={adapter:s(),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){c.headers[e]=n.merge(o)})),e.exports=c}).call(this,r("4362"))},"2d83":function(e,t,r){"use strict";var n=r("387f");e.exports=function(e,t,r,i,o){var a=new Error(e);return n(a,t,r,i,o)}},"2e67":function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"30b5":function(e,t,r){"use strict";var n=r("c532");function i(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var o;if(r)o=r(t);else if(n.isURLSearchParams(t))o=t.toString();else{var a=[];n.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),a.push(i(t)+"="+i(e))})))})),o=a.join("&")}if(o){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},"387f":function(e,t,r){"use strict";e.exports=function(e,t,r,n,i){return e.config=t,r&&(e.code=r),e.request=n,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},3934:function(e,t,r){"use strict";var n=r("c532");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function i(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=i(window.location.href),function(t){var r=n.isString(t)?i(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return function(){return!0}}()},4362:function(e,t,r){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,n="/";t.cwd=function(){return n},t.chdir=function(t){e||(e=r("df7c")),n=e.resolve(t,n)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"467f":function(e,t,r){"use strict";var n=r("2d83");e.exports=function(e,t,r){var i=r.config.validateStatus;!i||i(r.status)?e(r):t(n("Request failed with status code "+r.status,r.config,null,r.request,r))}},"4a7b":function(e,t,r){"use strict";var n=r("c532");e.exports=function(e,t){t=t||{};var r={},i=["url","method","params","data"],o=["headers","auth","proxy"],a=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];n.forEach(i,(function(e){"undefined"!==typeof t[e]&&(r[e]=t[e])})),n.forEach(o,(function(i){n.isObject(t[i])?r[i]=n.deepMerge(e[i],t[i]):"undefined"!==typeof t[i]?r[i]=t[i]:n.isObject(e[i])?r[i]=n.deepMerge(e[i]):"undefined"!==typeof e[i]&&(r[i]=e[i])})),n.forEach(a,(function(n){"undefined"!==typeof t[n]?r[n]=t[n]:"undefined"!==typeof e[n]&&(r[n]=e[n])}));var s=i.concat(o).concat(a),c=Object.keys(t).filter((function(e){return-1===s.indexOf(e)}));return n.forEach(c,(function(n){"undefined"!==typeof t[n]?r[n]=t[n]:"undefined"!==typeof e[n]&&(r[n]=e[n])})),r}},"4de9":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"mx-auto"},e._l(e.cards,(function(t){return r("v-row",{key:t[0].title,attrs:{dense:""}},e._l(t,(function(e){return r("v-col",{key:e.title,attrs:{cols:3}},[r("Card",{attrs:{card:e}})],1)})),1)})),1)},i=[],o=(r("a4d3"),r("e01a"),r("bc3a")),a=r.n(o),s=r("ae8d"),c={data:function(){return{cards:[],selected_title:null}},components:{Card:s["a"]},methods:{show_desp:function(e){this.selected_title===e?this.selected_title=null:this.selected_title=e}},mounted:function(){var e=this,t=null;a.a.get("https://www.googleapis.com/books/v1/volumes?q=+subject:thriller&maxResults=20").then((function(r){t=r.data.items;for(var n=0;n<t.length/4;n++){for(var i=[],o=0;o<4;o++){if(4*n+o>t.length-1)break;var a={title:t[4*n+o].volumeInfo.title,image:t[4*n+o].volumeInfo.imageLinks.thumbnail,description:t[4*n+o].volumeInfo.description};i.push(a)}e.cards.push(i)}console.log(e.cards)}))}},u=c,l=r("2877"),f=r("6544"),d=r.n(f),h=r("b0af"),p=r("62ad"),m=r("0fd9"),v=Object(l["a"])(u,n,i,!1,null,null,null);t["default"]=v.exports;d()(v,{VCard:h["a"],VCol:p["a"],VRow:m["a"]})},5270:function(e,t,r){"use strict";var n=r("c532"),i=r("c401"),o=r("2e67"),a=r("2444");function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){s(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||a.adapter;return t(e).then((function(t){return s(e),t.data=i(t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(s(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},"615b":function(e,t,r){},"6ece":function(e,t,r){},"7a77":function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},"7aac":function(e,t,r){"use strict";var n=r("c532");e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,t,r,i,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(i)&&s.push("path="+i),n.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"83b9":function(e,t,r){"use strict";var n=r("d925"),i=r("e683");e.exports=function(e,t){return e&&!n(t)?i(e,t):t}},"8ce9":function(e,t,r){},"8df4":function(e,t,r){"use strict";var n=r("7a77");function i(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var e,t=new i((function(t){e=t}));return{token:t,cancel:e}},e.exports=i},"99d9":function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return c}));var n=r("b0af"),i=r("80d2"),o=Object(i["g"])("v-card__actions"),a=Object(i["g"])("v-card__subtitle"),s=Object(i["g"])("v-card__text"),c=Object(i["g"])("v-card__title");n["a"]},ae8d:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-img",{staticClass:"white--text align-end",attrs:{src:e.card.image,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"500px",contain:""}},[r("v-card-title",{domProps:{textContent:e._s(e.card.title)}})],1),r("v-card-actions",[r("v-btn",{attrs:{icon:""},on:{click:function(t){e.show=!e.show}}},[r("v-icon",[e._v(e._s(e.show?"mdi-chevron-up":"mdi-chevron-down"))])],1),r("v-spacer"),r("v-btn",{attrs:{icon:""}},[r("v-icon",[e._v("mdi-heart")])],1),r("v-btn",{attrs:{icon:""}},[r("v-icon",[e._v("mdi-bookmark")])],1),r("v-btn",{attrs:{icon:""}},[r("v-icon",[e._v("mdi-share-variant")])],1)],1),r("v-expand-transition",[r("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[r("v-divider"),r("v-card-subtitle",{staticClass:"pb-0"},[e._v("Description")]),r("v-card-text",{staticClass:"text--primary"},[r("div",[e._v(e._s(e.card.description))])])],1)])],1)},i=[],o={name:"Card",props:{card:Object},data:function(){return{show:!1}}},a=o,s=r("2877"),c=r("6544"),u=r.n(c),l=r("8336"),f=r("b0af"),d=r("99d9"),h=r("5530"),p=(r("8ce9"),r("7560")),m=p["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){var t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:Object(h["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(h["a"])({role:"separator","aria-orientation":t},this.$attrs),on:this.$listeners})}}),v=r("0789"),g=r("132d"),b=r("adda"),y=(r("20f6"),r("80d2")),w=Object(y["g"])("spacer","div","v-spacer"),_=Object(s["a"])(a,n,i,!1,null,null,null);t["a"]=_.exports;u()(_,{VBtn:l["a"],VCard:f["a"],VCardActions:d["a"],VCardSubtitle:d["b"],VCardText:d["c"],VCardTitle:d["d"],VDivider:m,VExpandTransition:v["a"],VIcon:g["a"],VImg:b["a"],VSpacer:w})},b0af:function(e,t,r){"use strict";r("0481"),r("4069"),r("a9e3");var n=r("5530"),i=(r("615b"),r("10d2")),o=r("2b0e"),a=(r("c7cd"),r("ade3")),s=(r("6ece"),r("0789")),c=r("a9ad"),u=r("fe6c"),l=r("a452"),f=r("7560"),d=r("80d2"),h=r("58df"),p=Object(h["a"])(c["a"],Object(u["b"])(["absolute","fixed","top","bottom"]),l["a"],f["a"]),m=p.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(d["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(d["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e,t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return e={opacity:t},Object(a["a"])(e,this.$vuetify.rtl?"right":"left",Object(d["f"])(this.normalizedValue,"%")),Object(a["a"])(e,"width",Object(d["f"])(this.normalizedBuffer-this.normalizedValue,"%")),e},classes:function(){return Object(n["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?s["b"]:s["c"]},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(d["f"])(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var e=Object(d["j"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(a["a"])({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect(),r=t.width;this.internalValue=e.offsetX/r*100}},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){var t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(d["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),v=m,g=o["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(v,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),b=r("1c87");t["a"]=Object(h["a"])(g,b["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({"v-card":!0},b["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},i["a"].options.computed.classes.call(this))},styles:function(){var e=Object(n["a"])({},i["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=g.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),r=t.tag,n=t.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),e(r,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},b50d:function(e,t,r){"use strict";var n=r("c532"),i=r("467f"),o=r("30b5"),a=r("83b9"),s=r("c345"),c=r("3934"),u=r("2d83");e.exports=function(e){return new Promise((function(t,l){var f=e.data,d=e.headers;n.isFormData(f)&&delete d["Content-Type"];var h=new XMLHttpRequest;if(e.auth){var p=e.auth.username||"",m=e.auth.password||"";d.Authorization="Basic "+btoa(p+":"+m)}var v=a(e.baseURL,e.url);if(h.open(e.method.toUpperCase(),o(v,e.params,e.paramsSerializer),!0),h.timeout=e.timeout,h.onreadystatechange=function(){if(h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in h?s(h.getAllResponseHeaders()):null,n=e.responseType&&"text"!==e.responseType?h.response:h.responseText,o={data:n,status:h.status,statusText:h.statusText,headers:r,config:e,request:h};i(t,l,o),h=null}},h.onabort=function(){h&&(l(u("Request aborted",e,"ECONNABORTED",h)),h=null)},h.onerror=function(){l(u("Network Error",e,null,h)),h=null},h.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),l(u(t,e,"ECONNABORTED",h)),h=null},n.isStandardBrowserEnv()){var g=r("7aac"),b=(e.withCredentials||c(v))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;b&&(d[e.xsrfHeaderName]=b)}if("setRequestHeader"in h&&n.forEach(d,(function(e,t){"undefined"===typeof f&&"content-type"===t.toLowerCase()?delete d[t]:h.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(h.withCredentials=!!e.withCredentials),e.responseType)try{h.responseType=e.responseType}catch(y){if("json"!==e.responseType)throw y}"function"===typeof e.onDownloadProgress&&h.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){h&&(h.abort(),l(e),h=null)})),void 0===f&&(f=null),h.send(f)}))}},bc3a:function(e,t,r){e.exports=r("cee4")},c345:function(e,t,r){"use strict";var n=r("c532"),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,o,a={};return e?(n.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),r=n.trim(e.substr(o+1)),t){if(a[t]&&i.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([r]):a[t]?a[t]+", "+r:r}})),a):a}},c401:function(e,t,r){"use strict";var n=r("c532");e.exports=function(e,t,r){return n.forEach(r,(function(r){e=r(e,t)})),e}},c532:function(e,t,r){"use strict";var n=r("1d2b"),i=Object.prototype.toString;function o(e){return"[object Array]"===i.call(e)}function a(e){return"undefined"===typeof e}function s(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function c(e){return"[object ArrayBuffer]"===i.call(e)}function u(e){return"undefined"!==typeof FormData&&e instanceof FormData}function l(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function f(e){return"string"===typeof e}function d(e){return"number"===typeof e}function h(e){return null!==e&&"object"===typeof e}function p(e){return"[object Date]"===i.call(e)}function m(e){return"[object File]"===i.call(e)}function v(e){return"[object Blob]"===i.call(e)}function g(e){return"[object Function]"===i.call(e)}function b(e){return h(e)&&g(e.pipe)}function y(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function w(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function _(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function x(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),o(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function C(){var e={};function t(t,r){"object"===typeof e[r]&&"object"===typeof t?e[r]=C(e[r],t):e[r]=t}for(var r=0,n=arguments.length;r<n;r++)x(arguments[r],t);return e}function j(){var e={};function t(t,r){"object"===typeof e[r]&&"object"===typeof t?e[r]=j(e[r],t):e[r]="object"===typeof t?j({},t):t}for(var r=0,n=arguments.length;r<n;r++)x(arguments[r],t);return e}function k(e,t,r){return x(t,(function(t,i){e[i]=r&&"function"===typeof t?n(t,r):t})),e}e.exports={isArray:o,isArrayBuffer:c,isBuffer:s,isFormData:u,isArrayBufferView:l,isString:f,isNumber:d,isObject:h,isUndefined:a,isDate:p,isFile:m,isBlob:v,isFunction:g,isStream:b,isURLSearchParams:y,isStandardBrowserEnv:_,forEach:x,merge:C,deepMerge:j,extend:k,trim:w}},c8af:function(e,t,r){"use strict";var n=r("c532");e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},cee4:function(e,t,r){"use strict";var n=r("c532"),i=r("1d2b"),o=r("0a06"),a=r("4a7b"),s=r("2444");function c(e){var t=new o(e),r=i(o.prototype.request,t);return n.extend(r,o.prototype,t),n.extend(r,t),r}var u=c(s);u.Axios=o,u.create=function(e){return c(a(u.defaults,e))},u.Cancel=r("7a77"),u.CancelToken=r("8df4"),u.isCancel=r("2e67"),u.all=function(e){return Promise.all(e)},u.spread=r("0df6"),e.exports=u,e.exports.default=u},d925:function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},da27:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"mx-auto"},e._l(e.cards,(function(t){return r("v-row",{key:t[0].title,attrs:{dense:""}},e._l(t,(function(e){return r("v-col",{key:e.title,attrs:{cols:3}},[r("Card",{attrs:{card:e}})],1)})),1)})),1)},i=[],o=r("bc3a"),a=r.n(o),s=r("ae8d"),c={data:function(){return{cards:[],selected_title:null}},components:{Card:s["a"]},methods:{show_desp:function(e){this.selected_title===e?this.selected_title=null:this.selected_title=e}},mounted:function(){var e=this,t=null;a.a.get("https://api.themoviedb.org/3/discover/movie?api_key=7c2fb09b13aa4c7e484a90c663253330&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1").then((function(r){t=r.data.results;for(var n=0;n<t.length/4;n++){for(var i=[],o=0;o<4;o++){if(4*n+o>t.length-1)break;var a={title:t[4*n+o].title,image:"https://image.tmdb.org/t/p/w500"+t[4*n+o].poster_path,description:t[4*n+o].overview};i.push(a)}e.cards.push(i)}console.log(e.cards)}))}},u=c,l=r("2877"),f=r("6544"),d=r.n(f),h=r("b0af"),p=r("62ad"),m=r("0fd9"),v=Object(l["a"])(u,n,i,!1,null,null,null);t["default"]=v.exports;d()(v,{VCard:h["a"],VCol:p["a"],VRow:m["a"]})},df7c:function(e,t,r){(function(e){function r(e,t){for(var r=0,n=e.length-1;n>=0;n--){var i=e[n];"."===i?e.splice(n,1):".."===i?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}function n(e){"string"!==typeof e&&(e+="");var t,r=0,n=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){r=t+1;break}}else-1===n&&(i=!1,n=t+1);return-1===n?"":e.slice(r,n)}function i(e,t){if(e.filter)return e.filter(t);for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}t.resolve=function(){for(var t="",n=!1,o=arguments.length-1;o>=-1&&!n;o--){var a=o>=0?arguments[o]:e.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(t=a+"/"+t,n="/"===a.charAt(0))}return t=r(i(t.split("/"),(function(e){return!!e})),!n).join("/"),(n?"/":"")+t||"."},t.normalize=function(e){var n=t.isAbsolute(e),a="/"===o(e,-1);return e=r(i(e.split("/"),(function(e){return!!e})),!n).join("/"),e||n||(e="."),e&&a&&(e+="/"),(n?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,r){function n(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var r=e.length-1;r>=0;r--)if(""!==e[r])break;return t>r?[]:e.slice(t,r-t+1)}e=t.resolve(e).substr(1),r=t.resolve(r).substr(1);for(var i=n(e.split("/")),o=n(r.split("/")),a=Math.min(i.length,o.length),s=a,c=0;c<a;c++)if(i[c]!==o[c]){s=c;break}var u=[];for(c=s;c<i.length;c++)u.push("..");return u=u.concat(o.slice(s)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),r=47===t,n=-1,i=!0,o=e.length-1;o>=1;--o)if(t=e.charCodeAt(o),47===t){if(!i){n=o;break}}else i=!1;return-1===n?r?"/":".":r&&1===n?"/":e.slice(0,n)},t.basename=function(e,t){var r=n(e);return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,r=0,n=-1,i=!0,o=0,a=e.length-1;a>=0;--a){var s=e.charCodeAt(a);if(47!==s)-1===n&&(i=!1,n=a+1),46===s?-1===t?t=a:1!==o&&(o=1):-1!==t&&(o=-1);else if(!i){r=a+1;break}}return-1===t||-1===n||0===o||1===o&&t===n-1&&t===r+1?"":e.slice(t,n)};var o="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return t<0&&(t=e.length+t),e.substr(t,r)}}).call(this,r("4362"))},e683:function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},f6b4:function(e,t,r){"use strict";var n=r("c532");function i(){this.handlers=[]}i.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=i}}]);
//# sourceMappingURL=about.1925321b.js.map