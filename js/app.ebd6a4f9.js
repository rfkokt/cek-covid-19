(function(t){function a(a){for(var s,r,i=a[0],c=a[1],l=a[2],d=0,u=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);f&&f(a);while(u.length)u.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],s=!0,r=1;r<e.length;r++){var i=e[r];0!==n[i]&&(s=!1)}s&&(o.splice(a--,1),t=c(c.s=e[0]))}return t}var s={},r={app:0},n={app:0},o=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"eebf7d9e"}[t]+".js"}function c(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.e=function(t){var a=[],e={about:1};r[t]?a.push(r[t]):0!==r[t]&&e[t]&&a.push(r[t]=new Promise((function(a,e){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"1c359ccf"}[t]+".css",n=c.p+s,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===s||d===n))return a()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){l=u[i],d=l.getAttribute("data-href");if(d===s||d===n)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var s=a&&a.target&&a.target.src||n,o=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete r[t],f.parentNode.removeChild(f),e(o)},f.href=n;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){r[t]=0})));var s=n[t];if(0!==s)if(s)a.push(s[2]);else{var o=new Promise((function(a,e){s=n[t]=[a,e]}));a.push(s[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=i(t);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(f);var e=n[t];if(0!==e){if(e){var s=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;u.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",u.name="ChunkLoadError",u.type=s,u.request=r,e[1](u)}n[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},c.m=t,c.c=s,c.d=function(t,a,e){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)c.d(e,s,function(a){return t[a]}.bind(null,s));return e},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="/Covid-19/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var f=d;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var s=e("8a23"),r=e.n(s);r.a},"0bdf":function(t,a,e){"use strict";var s=e("6959"),r=e.n(s);r.a},"1eb7":function(t,a,e){},3657:function(t,a,e){"use strict";var s=e("9099"),r=e.n(s);r.a},4678:function(t,a,e){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var a=n(t);return e(a)}function n(t){if(!e.o(s,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=n,t.exports=r,r.id="4678"},5307:function(t,a,e){t.exports=e.p+"img/facebook.87e2de9c.png"},5645:function(t,a,e){t.exports=e.p+"img/indonesia.343ee3e7.png"},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("b-navbar",{staticClass:"background-nav posisi",attrs:{toggleable:"lg",type:"dark"}},[s("div",{staticClass:"container"},[s("b-navbar-brand",{attrs:{to:"/"}},[s("img",{attrs:{src:e("87c6"),width:"100",alt:""}})]),s("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),s("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[s("b-navbar-nav",{staticClass:"ml-auto text-uppercase text-white"},[s("b-nav-item",{attrs:{to:"/contact"}},[t._v("Contact |")]),s("b-nav-item",{attrs:{to:"/about"}},[t._v("About |")]),s("b-nav-item",{attrs:{to:"/about"}},[t._v("Donasi")])],1)],1)],1)]),s("div",[s("router-view")],1),s("div",[s("div",[s("v-card",{staticClass:"turun mx-auto text-center footerr"},[s("br"),s("v-avatar",{staticClass:"ma-3 mr-2",attrs:{size:"20",tile:""}},[s("a",{attrs:{href:"https://www.facebook.com/ikkiieee/",target:"_blank"}},[s("img",{attrs:{src:e("5307"),alt:""}})])]),s("v-avatar",{staticClass:"ma-3 mr-2",attrs:{size:"20",tile:""}},[s("a",{attrs:{href:"https://www.instagram.com/rfkokt/",target:"_blank"}},[s("img",{attrs:{src:e("c7f8"),alt:""}})])]),s("v-avatar",{staticClass:"ma-3 mr-2",attrs:{size:"20",tile:""}},[s("a",{attrs:{href:"https://github.com/rfkokt",target:"_blank"}},[s("img",{attrs:{src:e("7dd2"),alt:""}})])]),s("v-avatar",{staticClass:"ma-3",attrs:{size:"20",tile:""}},[s("a",{attrs:{href:"https://www.linkedin.com/in/rifkiokta/",target:"_blank"}},[s("img",{attrs:{src:e("dd32"),alt:""}})])]),s("br"),s("br"),s("img",{attrs:{src:e("e8a1"),width:"150",alt:""}}),s("br"),s("br"),s("p",[t._v(" Made with ❤ by Rifki Okta Pratama")])],1)],1)])],1)},n=[],o={name:"App",components:{},data:function(){return{}}},i=o,c=(e("034f"),e("2877")),l=e("6544"),d=e.n(l),u=e("8212"),f=e("b0af"),b=Object(c["a"])(i,r,n,!1,null,null,null),m=b.exports;d()(b,{VAvatar:u["a"],VCard:f["a"]});e("d3b7");var p=e("8c4f"),v=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("b-jumbotron",{staticClass:"background"},[s("div",{staticClass:"container"},[s("b-row",[s("b-col",{staticClass:"text-white",attrs:{sm:"12",md:"6"}},[s("h1",{staticClass:"display-4 text-white judul"},[t._v(" Together we can fight Covid 19.")]),s("p",[t._v(" Coronavirus adalah suatu kelompok virus yang dapat menyebabkan penyakit pada hewan atau manusia. Beberapa jenis coronavirus diketahui menyebabkan infeksi saluran nafas pada manusia mulai dari batuk pilek hingga yang lebih serius seperti Middle East Respiratory Syndrome (MERS) dan Severe Acute Respiratory Syndrome (SARS). Coronavirus jenis baru yang ditemukan menyebabkan penyakit COVID-19. ")]),s("b-button",{attrs:{variant:"danger",href:"https://www.youtube.com/watch?v=kdl4D1RFMo8"}},[s("font-awesome-icon",{attrs:{icon:"play"}}),t._v(" Cara Pencegahan ")],1),s("br"),s("br"),s("br")],1),s("b-col",{attrs:{sm:"12",md:"6"}},[s("img",{attrs:{src:e("b8b8"),alt:""}})])],1)],1)]),s("Isi"),s("Grafik"),s("Table")],1)},h=[],g=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("v-card",{staticClass:"naik mx-auto container"},[s("div",{staticClass:"text-center"},[s("h1",[t._v("Coronavirus Global & Indonesia Live Data")]),s("p",[t._v(" Sumber data : Kementerian Kesehatan & JHU. Update terakhirs : "),s("span",[t._v(t._s(t._f("moment")(new Date,"Do MMMM YYYY, H:mm:ss")))]),t._v(" WIB")])]),s("b-row",[s("b-col",{staticClass:"text-white",attrs:{sm:"12",md:"6",lg:"6"}},[s("v-card",{staticClass:"mx-auto indonesia",attrs:{dark:""}},[s("b-row",{staticClass:"mx-auto"},[s("b-col",{attrs:{sm:"7",md:"12",lg:"7"}},[s("v-card-title",{staticClass:"headline "},[t._v("Total Positif")]),s("h1",{staticClass:"headline ml-3 orang"},[t._v(t._s(t.indonesia.confirmed)+" ")]),s("h5",{staticClass:"orang"},[t._v("Orang")])],1),s("b-col",{staticClass:"text-center",attrs:{sm:"5",md:"12",lg:"5"}},[s("v-avatar",{staticClass:"ma-3",attrs:{size:"150",tile:""}},[s("img",{attrs:{src:e("5645"),alt:""}})])],1)],1)],1)],1),s("b-col",{staticClass:"text-white",attrs:{sm:"12",md:"6",lg:"6"}},[s("v-card",{staticClass:"mx-auto sembuh",attrs:{dark:""}},[s("b-row",{staticClass:"mx-auto"},[s("b-col",{attrs:{sm:"7",md:"12",lg:"7"}},[s("v-card-title",{staticClass:"headline "},[t._v("Total Sembuh")]),s("h1",{staticClass:"headline ml-3 orang"},[t._v(t._s(t.indonesia.recovered)+" ")]),s("h5",{staticClass:"orang"},[t._v("Orang")])],1),s("b-col",{staticClass:"text-center",attrs:{sm:"5",md:"12",lg:"5"}},[s("v-avatar",{staticClass:"ma-3",attrs:{size:"150",tile:""}},[s("img",{attrs:{src:e("84b1"),alt:""}})])],1)],1)],1)],1),s("b-col",{staticClass:"text-white",attrs:{sm:"12",md:"6",lg:"6"}},[s("v-card",{staticClass:"mx-auto meniggal",attrs:{dark:""}},[s("b-row",{staticClass:"mx-auto"},[s("b-col",{attrs:{sm:"7",md:"12",lg:"7"}},[s("v-card-title",{staticClass:"headline "},[t._v("Total Meninggal")]),s("h1",{staticClass:"headline ml-3 orang"},[t._v(t._s(t.indonesia.deaths)+" ")]),s("h5",{staticClass:"orang"},[t._v("Orang")])],1),s("b-col",{staticClass:"text-center",attrs:{sm:"5",md:"12",lg:"5"}},[s("v-avatar",{staticClass:"ma-3",attrs:{size:"150",tile:""}},[s("img",{attrs:{src:e("b92b"),alt:""}})])],1)],1)],1)],1),s("b-col",{staticClass:"text-white",attrs:{sm:"12",md:"6",lg:"6"}},[s("v-card",{staticClass:"mx-auto dunia",attrs:{dark:""}},[s("b-row",{staticClass:"mx-auto"},[s("b-col",{attrs:{sm:"7",md:"12",lg:"7"}},[s("v-card-title",{staticClass:"headline "},[t._v("Data Global Positif")]),s("h1",{staticClass:"headline ml-3 orang"},[t._v(t._s(t.global.confirmed.value)+" ")]),s("h5",{staticClass:"orang"},[t._v("Orang")])],1),s("b-col",{staticClass:"text-center",attrs:{sm:"5",md:"12",lg:"5"}},[s("v-avatar",{staticClass:"ma-3",attrs:{size:"150",tile:""}},[s("img",{attrs:{src:e("7be2"),alt:""}})])],1)],1)],1)],1)],1)],1)],1)},j=[],C=(e("96cf"),e("1da1")),k=e("bc3a"),y=e.n(k),w={name:"Isi",data:function(){return{indonesia:[],global:[]}},mounted:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function a(){var e,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,y.a.get("https://covid19.mathdro.id/api/countries/ID/confirmed");case 2:return e=a.sent,t.indonesia=e.data[0],console.log(e.data[0]),a.next=7,y.a.get("https://covid19.mathdro.id/api/");case 7:s=a.sent,t.global=s.data,console.log(s.data);case 10:case"end":return a.stop()}}),a)})))()}},x=w,_=(e("6730"),e("99d9")),O=Object(c["a"])(x,g,j,!1,null,"1cf13890",null),z=O.exports;d()(O,{VAvatar:u["a"],VCard:f["a"],VCardTitle:_["a"]});var D,S,M=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.arrPositive.length>0?e("v-card",{staticClass:"turun mx-auto container"},[e("div",{staticClass:"text-center"},[e("h1",[t._v("Statistik Indonesia Live Data")]),e("p",[t._v(" Sumber data : Kementerian Kesehatan & JHU. Update terakhirs : "),e("span",[t._v(t._s(t._f("moment")(new Date,"Do MMMM YYYY, H:mm:ss")))]),t._v(" WIB")])]),e("line-chart",{attrs:{chartData:t.arrPositive,options:t.chartOptions,chartColors:t.positiveChartColors,label:"Positive"}})],1):t._e()],1)},P=[],T=(e("4160"),e("159b"),e("c1df")),E=e.n(T),A=(e("d81d"),e("1fca")),R={extends:A["a"],props:{label:{type:String},chartData:{type:Array},options:{type:Object},chartColors:{type:Object}},mounted:function(){var t=this.chartData.map((function(t){return t.date})),a=this.chartData.map((function(t){return t.total})),e=this.chartColors,s=e.borderColor,r=e.pointBorderColor,n=e.pointBackgroundColor,o=e.backgroundColor;this.renderChart({labels:t,datasets:[{label:this.label,data:a,borderColor:s,pointBorderColor:r,pointBackgroundColor:n,backgroundColor:o}]},this.options)}},B=R,V=Object(c["a"])(B,D,S,!1,null,null,null),I=V.exports,L={name:"Grafik",components:{LineChart:I},data:function(){return{arrPositive:[],positiveChartColors:{borderColor:"#000000",pointBorderColor:"#ff0000",pointBackgroundColor:"#ff0000",backgroundColor:"rgba(255,255,255,0)"},chartOptions:{responsive:!0,maintainAspectRatio:!1,legend:!1}}},created:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function a(){var e,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,y.a.get("https://api.covid19api.com/dayone/country/indonesia/status/confirmed/live");case 2:e=a.sent,s=e.data,s.forEach((function(a){var e=E()(a.Date).format("DD/MM"),s=a.Cases;console.log(e),t.arrPositive.push({date:e,total:s})}));case 5:case"end":return a.stop()}}),a)})))()}},N=L,Y=(e("0bdf"),Object(c["a"])(N,M,P,!1,null,null,null)),H=Y.exports;d()(Y,{VCard:f["a"]});var U=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-card",{staticClass:"container turun"},[e("v-card-title",[t._v(" Negara "),e("v-spacer"),e("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1),e("v-data-table",{attrs:{headers:t.headers,items:t.datanegara,search:t.search}})],1)],1)},$=[],G={name:"Table",data:function(){return{search:"",headers:[{text:"ID",align:"start",sortable:!1,value:"iso2"},{text:"Negara",align:"start",sortable:!1,value:"countryRegion"},{text:"Positif",value:"confirmed"},{text:"Sembuh",value:"recovered"},{text:"Meninggal",value:"deaths"},{text:"Dirawat",value:"active"}],datanegara:[]}},mounted:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,y.a.get("https://covid19.mathdro.id/api/confirmed");case 2:e=a.sent,t.datanegara=e.data,console.log(e.data);case 5:case"end":return a.stop()}}),a)})))()}},K=G,q=(e("3657"),e("8fea")),F=e("2fa4"),J=e("8654"),W=Object(c["a"])(K,U,$,!1,null,"8087cc4a",null),Q=W.exports;d()(W,{VCard:f["a"],VCardTitle:_["a"],VDataTable:q["a"],VSpacer:F["a"],VTextField:J["a"]});var X={name:"Home",components:{Table:Q,Grafik:H,Isi:z}},Z=X,tt=(e("89b6"),Object(c["a"])(Z,v,h,!1,null,"361d84ce",null)),at=tt.exports;s["default"].use(p["a"]);var et=[{path:"/",name:"Home",component:at},{path:"/about",name:"About",component:function(){return e.e("about").then(e.bind(null,"f820"))}},{path:"/contact",name:"Contact",component:function(){return e.e("about").then(e.bind(null,"b8fa"))}}],st=new p["a"]({routes:et}),rt=st,nt=e("5f5b"),ot=e("43f9"),it=e.n(ot),ct=(e("51de"),e("f309"));s["default"].use(ct["a"]);var lt=new ct["a"]({}),dt=(e("ab8b"),e("2dd8"),e("f9e3"),e("ecee")),ut=e("c074"),ft=e("ad3d"),bt=e("c1df");e("5038"),dt["c"].add(ut["b"],ut["a"]),s["default"].component("font-awesome-icon",ft["a"]),s["default"].config.productionTip=!1,s["default"].use(it.a),s["default"].use(nt["a"]),s["default"].use(e("2ead"),{moment:bt}),new s["default"]({router:rt,vuetify:lt,render:function(t){return t(m)}}).$mount("#app")},6730:function(t,a,e){"use strict";var s=e("7e97"),r=e.n(s);r.a},6959:function(t,a,e){},"7be2":function(t,a,e){t.exports=e.p+"img/globe.ff0fe3e9.png"},"7dd2":function(t,a,e){t.exports=e.p+"img/github-sign.a29dc369.png"},"7e97":function(t,a,e){},"84b1":function(t,a,e){t.exports=e.p+"img/smile.764c6194.png"},"87c6":function(t,a,e){t.exports=e.p+"img/corona.97f396d3.png"},"89b6":function(t,a,e){"use strict";var s=e("1eb7"),r=e.n(s);r.a},"8a23":function(t,a,e){},9099:function(t,a,e){},b8b8:function(t,a,e){t.exports=e.p+"img/coba.4f237852.png"},b92b:function(t,a,e){t.exports=e.p+"img/sad.2cd79dfd.png"},c7f8:function(t,a,e){t.exports=e.p+"img/instagram.8290266a.png"},dd32:function(t,a,e){t.exports=e.p+"img/linkedin.0f7c2987.png"},e8a1:function(t,a,e){t.exports=e.p+"img/starsone.902ada73.png"}});
//# sourceMappingURL=app.ebd6a4f9.js.map