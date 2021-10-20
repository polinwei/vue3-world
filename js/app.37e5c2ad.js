(function(e){function t(t){for(var c,r,l=t[0],i=t[1],u=t[2],b=0,v=[];b<l.length;b++)r=l[b],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&v.push(a[r][0]),a[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);s&&s(t);while(v.length)v.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,l=1;l<n.length;l++){var i=n[l];0!==a[i]&&(c=!1)}c&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var c={},a={app:0},o=[];function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=c,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/vue3-world/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1a93":function(e,t,n){"use strict";n("2887")},2887:function(e,t,n){},"29e3":function(e,t,n){"use strict";n("46bf")},"2d3a":function(e,t,n){"use strict";n("9e3a")},"46bf":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),a={id:"nav"},o=Object(c["i"])("Home"),r=Object(c["i"])(" | "),l=Object(c["i"])("About"),i=Object(c["i"])(" | "),u={id:"lang"},s={for:"locale"},b=Object(c["h"])("option",{value:"en-US"},"英文 (English)",-1),v=Object(c["h"])("option",{value:"zh-TW"},"中文 (Chinese)",-1),d=[b,v],j=Object(c["i"])(" | "),f=Object(c["h"])("a",{href:"https://github.com/polinwei/vue3-world"},"polinwei/vue3-world",-1);function p(e,t){var n=Object(c["B"])("router-link"),b=Object(c["B"])("router-view");return Object(c["u"])(),Object(c["g"])(c["a"],null,[Object(c["h"])("div",a,[Object(c["j"])(n,{to:{name:"EventList"}},{default:Object(c["H"])((function(){return[o]})),_:1}),r,Object(c["j"])(n,{to:{name:"About"}},{default:Object(c["H"])((function(){return[l]})),_:1}),i,Object(c["h"])("span",u,[Object(c["h"])("label",s,Object(c["D"])(e.$t("common.language"))+": ",1),Object(c["I"])(Object(c["h"])("select",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.$i18n.locale=t})},d,512),[[c["F"],e.$i18n.locale]])]),j,f]),Object(c["j"])(b)],64)}n("29e3");var O=n("6b0d"),h=n.n(O);const g={},m=h()(g,[["render",p]]);var y=m,w=n("6c02"),D={class:"events"};function E(e,t,n,a,o,r){var l=Object(c["B"])("EventCard");return Object(c["u"])(),Object(c["g"])("div",D,[(Object(c["u"])(!0),Object(c["g"])(c["a"],null,Object(c["A"])(o.events,(function(e){return Object(c["u"])(),Object(c["e"])(l,{key:e.id,event:e},null,8,["event"])})),128))])}var _={class:"event-card"};function k(e,t,n,a,o,r){var l=Object(c["B"])("router-link");return Object(c["u"])(),Object(c["e"])(l,{class:"event-link",to:{name:"EventDetails",params:{id:n.event.id}}},{default:Object(c["H"])((function(){return[Object(c["h"])("div",_,[Object(c["h"])("h3",null,Object(c["D"])(e.$t("event.id"))+" #"+Object(c["D"])(n.event.id),1),Object(c["h"])("span",null,"@"+Object(c["D"])(n.event.time)+" on "+Object(c["D"])(n.event.date),1),Object(c["h"])("h4",null,Object(c["D"])(n.event.title),1)])]})),_:1},8,["to"])}var L={props:{event:{type:Object,required:!0}}};n("2d3a");const S=h()(L,[["render",k],["__scopeId","data-v-1e0ab19c"]]);var T=S,x=n("bc3a"),P=n.n(x),U=P.a.create({baseURL:"https://my-json-server.typicode.com/polinwei/vuex4-events-demo",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),A={getEvents:function(){return U.get("/events")},getEvent:function(e){return U.get("/events/"+e)}},$={name:"EventList",components:{EventCard:T},data:function(){return{events:null}},created:function(){var e=this;A.getEvents().then((function(t){e.events=t.data})).catch((function(e){console.log(e)}))}};n("1a93");const C=h()($,[["render",E],["__scopeId","data-v-e1cf47e0"]]);var I=C,B=(n("a4d3"),n("e01a"),{key:0});function H(e,t,n,a,o,r){return o.event?(Object(c["u"])(),Object(c["g"])("div",B,[Object(c["h"])("h2",null,Object(c["D"])(e.$t("event.id"))+" #"+Object(c["D"])(e.$route.params.id),1),Object(c["h"])("h1",null,Object(c["D"])(o.event.title),1),Object(c["h"])("p",null,Object(c["D"])(o.event.time)+" on "+Object(c["D"])(o.event.date)+" @ "+Object(c["D"])(o.event.location),1),Object(c["h"])("p",null,Object(c["D"])(o.event.description),1)])):Object(c["f"])("",!0)}var M={props:["id"],data:function(){return{event:null}},created:function(){var e=this;A.getEvent(this.id).then((function(t){e.event=t.data})).catch((function(e){console.log(e)}))}};const z=h()(M,[["render",H]]);var W=z,J={class:"about"},q=Object(c["h"])("p",null,"A site for events to better the world.",-1),F=[q];function R(e,t){return Object(c["u"])(),Object(c["g"])("div",J,F)}const V={},G=h()(V,[["render",R]]);var K=G,N=[{path:"/",name:"EventList",component:I},{path:"/event/:id",name:"EventDetails",props:!0,component:W},{path:"/about",name:"About",component:K}],Q=Object(w["a"])({history:Object(w["b"])("/vue3-world/"),routes:N}),X=Q,Y=n("5502"),Z=Object(Y["a"])({state:{},mutations:{},actions:{},modules:{}}),ee=(n("159b"),n("caad"),{common:{id:"Id",language:"Language"},event:{id:"Event ID",title:"Title",time:"Time",date:"Date"}}),te={common:{id:"編號",language:"語系"},event:{id:"事件編號",title:"事件標題",time:"事件時間",date:"事件日期"}},ne=["en-US","zh-TW"],ce="en-US";try{var ae=navigator.language;ne.includes(ae)&&(ce=ae)}catch(fe){console.log(fe)}var oe={locale:ce,fallbackLocale:"en-US",availableLocales:[{code:"en-US",flag:"us",label:"English",messages:ee},{code:"zh-TW",flag:"tw",label:"中文-繁",messages:te}]},re={locales:oe},le=n("47e2"),ie=re.locales,ue=ie.locale,se=ie.availableLocales,be=ie.fallbackLocale,ve={};se.forEach((function(e){ve[e.code]=e.messages}));var de=Object(le["a"])({locale:ue,fallbackLocale:be,messages:ve});de.locales=se;var je=de;Object(c["d"])(y).use(Z).use(X).use(je).mount("#app")},"9e3a":function(e,t,n){}});
//# sourceMappingURL=app.37e5c2ad.js.map