(function(e){function t(t){for(var i,u,o=t[0],d=t[1],s=t[2],m=0,l=[];m<o.length;m++)u=o[m],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&l.push(a[u][0]),a[u]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(e[i]=d[i]);c&&c(t);while(l.length)l.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,o=1;o<n.length;o++){var d=n[o];0!==a[d]&&(i=!1)}i&&(r.splice(t--,1),e=u(u.s=n[0]))}return e}var i={},a={app:0},r=[];function u(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=i,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)u.d(n,i,function(t){return e[t]}.bind(null,i));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var c=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("85ec"),a=n.n(i);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"App",attrs:{id:"app"}},[n("header",{staticClass:"App-header"},[n("div",{staticClass:"form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"date"}],attrs:{type:"text"},domProps:{value:e.date},on:{input:function(t){t.target.composing||(e.date=t.target.value)}}}),n("button",{on:{click:e.handleSubmit}},[n("span",[e._v("🔍")])])]),e.tournaments.length>0?n("Events",{attrs:{tournaments:e.tournaments}}):e._e()],1)])},r=[],u=(n("fb6a"),n("ac1f"),n("466d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("table",[n("tbody",e._l(e.tournaments,(function(t){return n("tr",{key:t.customId},["error"!==t.customId?n("td",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.startTime))]):e._e(),"error"===t.customId?n("td",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.name))]):e._e(),"error"!==t.customId?n("td",[e._v(e._s(t.name))]):e._e(),"error"!==t.customId?n("td",{staticStyle:{"text-align":"center"}},[e._v(e._s(t.tournamentName))]):e._e(),"error"!==t.customId?n("td",[e.submitted.includes(t.customId)?e._e():n("span",{staticClass:"sub",on:{click:function(n){return e.submit(t,t.uniqueTournamentId)}}},[e._v("Submit")]),e.submitted.includes(t.customId)?n("span",{staticClass:"n sub"},[e._v("Submitted "),n("button",{on:{click:function(n){return e.clear(t.customId)}}},[n("span",[e._v("✗")])])]):e._e()]):e._e()])})),0)])])}),o=[],d=(n("c975"),n("a434"),n("4de4"),n("7db0"),n("4160"),n("caad"),n("a15b"),n("d81d"),n("b0c0"),n("d3b7"),n("2532"),n("1276"),n("159b"),n("d4ec")),s=n("bee2"),c=n("bc3a"),m=n.n(c),l=[{id:124,name:"NFL",uid:9464},{id:124,name:"NBA",uid:132},{id:124,name:"MLB",uid:11205},{id:124,name:"NHL",uid:234},{id:211,name:"Africa Cup Of Nations",uid:270},{id:207,name:"Brasileiro Série A",uid:325},{id:27,name:"Bundesliga",uid:35},{id:33,name:"Championship",uid:18},{id:210,name:"Copa America",uid:133},{id:20,name:"Copa del Rey",uid:329},{id:208,name:"Copa do Brasil",uid:373},{id:4,name:"Coppa Italia",uid:328},{id:206,name:"DFB Cup",uid:217},{id:222,name:"EFL Cup",uid:21},{id:216,name:"England Community Shield",uid:346},{id:77,name:"EURO 2020",uid:1},{id:30,name:"FA Cup",uid:19},{id:217,name:"France Super Cup",uid:339},{id:22,name:"French Cup",uid:335},{id:218,name:"Germany Super Cup",uid:799},{id:214,name:"Inernational Audi Cup",uid:886},{id:100,name:"International",uid:1337},{id:215,name:"International Audi Cup",uid:886},{id:212,name:"International Champions Cup",uid:1337},{id:24,name:"La Liga",uid:8},{id:25,name:"Ligue 1",uid:34},{id:32,name:"MLS",uid:242},{id:2,name:"Premier League",uid:17},{id:213,name:"Premier League Asia Trophy",uid:1325},{id:223,name:"Scottish Premiership",uid:36},{id:26,name:"Serie A",uid:23},{id:224,name:"Spain Super Cup",uid:213},{id:220,name:"Turkey Super Cup",uid:505},{id:221,name:"Turkey Super Lig",uid:52},{id:28,name:"UEFA Champions League",uid:7},{id:29,name:"UEFA Europa League",uid:679},{id:209,name:"UEFA Nations League",uid:10783},{id:219,name:"UEFA Super Cup",uid:465},{id:1,name:"Uncategorized",uid:null}],p=function(){function e(){Object(d["a"])(this,e)}return Object(s["a"])(e,null,[{key:"getEvents",value:function(e){return new Promise((function(t,n){m.a.get("https://jsonp.afeld.me/?url=https://www.sofascore.com/american-football/usa/"+e+"/json").then((function(n){var i=n.data.sportItem.tournaments.filter((function(e){return l.map((function(e){return e.uid})).includes(e.tournament.uniqueId)})),a=[];i.forEach((function(t){t.events.forEach((function(n){if(n.formatedStartDate===e.split("-").reverse().join(".")+"."){var i=n;i.tournamentName=t.tournament.name,a.push(i)}}))})),t(a.length>0?a.sort((function(e,t){return e.startTimestamp-t.startTimestamp})):[{name:"There is no events for this date , please select another date",customId:"error"}])})).catch((function(e){n(e)}))}))}},{key:"insertGame",value:function(e,t){return new Promise((function(n,i){m.a.post("https://www.nflstreams100.com/wp-json/addp/"+l.find((function(e){return e.uid===t})).id,{game:e}).then((function(e){n(e.data)})).catch((function(e){i(e)}))}))}}]),e}(),f=p,h={name:"Events",data:function(){return{submitted:[],error:""}},props:{tournaments:{type:Array}},mounted:function(){localStorage.getItem("submitted")&&(this.submitted=JSON.parse(localStorage.getItem("submitted")))},methods:{submit:function(e,t){var n=this;f.insertGame(e,t).then((function(){n.submitted.push(e.customId),localStorage.setItem("submitted",JSON.stringify(n.submitted))})).catch((function(e){n.error=e.message,alert("there is an error please try again")}))},clear:function(e){this.submitted.splice(this.submitted.indexOf(e),1),localStorage.setItem("submitted",JSON.stringify(this.submitted))}}},b=h,v=(n("eeca"),n("2877")),g=Object(v["a"])(b,u,o,!1,null,"8476c422",null),y=g.exports,S={name:"App",data:function(){return{tournaments:[],date:null,error:null}},components:{Events:y},methods:{handleSubmit:function(){var e=this;e.isValidDate(e.date)?f.getEvents(e.date).then((function(t){e.tournaments=t})).catch((function(t){e.error=t.message,alert("there is an error please try again")})):alert("select a valide date")},isValidDate:function(e){if(!e)return!1;var t=/^\d{4}-\d{2}-\d{2}$/;if(!e.match(t))return!1;var n=new Date(e),i=n.getTime();return!(!i&&0!==i)&&n.toISOString().slice(0,10)===e}}},_=S,C=(n("034f"),Object(v["a"])(_,a,r,!1,null,null,null)),I=C.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(I)}}).$mount("#app")},"85ec":function(e,t,n){},c04d:function(e,t,n){},eeca:function(e,t,n){"use strict";var i=n("c04d"),a=n.n(i);a.a}});
//# sourceMappingURL=app.87141576.js.map