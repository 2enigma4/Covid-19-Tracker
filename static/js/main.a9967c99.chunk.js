(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{124:function(e,t,a){},126:function(e,t,a){},128:function(e,t,a){},134:function(e,t,a){},259:function(e,t,a){},261:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(11),s=a.n(n),i=(a(124),a(37)),d=a.n(i),o=a(54),l=a(14),j=(a(126),a(127),a(297)),h=a(294),u=a(293),b=a(295),v=a(296),O=a(298),m=a(13),f={AP:"Andhra Pradesh",AR:"Arunachal Pradesh",AS:"Assam",BR:"Bihar",CT:"Chattisgarh",DL:"Delhi",GA:"Goa",GJ:"Gujrat",HR:"Haryana",HP:"Himachal Pradesh",JK:"Jammu and Kashmir",JH:"Jharkhand",KA:"Karnataka",KL:"Kerala",LD:"Lakshadweep",MP:"Madhya Pradesh",MH:"Maharashtra",MN:"Manipur",ML:"Meghalaya",MZ:"Mizoram",NL:"Nagaland",OR:"Odisha",PY:"Pondicherry",PB:"Punjab",RJ:"Rajasthan",SK:"Sikkim",TN:"Tamil Nadu",TG:"Telangana",TR:"Tripura",UP:"Uttar Pradesh",UT:"Uttarakhand",WB:"West Bengal",AN:"Andaman and Nicobar Islands",CH:"Chandigarh",LA:"Ladakh",DN:"Dadra and Nagar",TT:"India"};function p(e){var t=new Array;return t[0]="January",t[1]="February",t[2]="March",t[3]="April",t[4]="May",t[5]="June",t[6]="July",t[7]="August",t[8]="September",t[9]="October",t[10]="November",t[11]="December",t[e]}var x=function(e){var t=new Date(e),a=t.getHours()>12?t.getHours()-12:t.getHours(),c=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),r=t.getHours()>=12?"PM":"AM";return"".concat(t.getDate()," ").concat(p(t.getMonth()),", ").concat(0==a?"12":a,":").concat(c," ").concat(r," IST")},g=function(e){return f[e]},_=function(e){var t=Object(m.a)(e);return t.sort((function(e,t){return e.confirm>t.confirm?-1:1})),t},N=function(e){return new Intl.NumberFormat("en-IN").format(e)},y=a(288),T=a(292),S=(a(128),a(2));var A=function(e){var t,a=e.title,c=e.cases;return"Confirmed"==a?t="rgb(102, 217, 255,0.2)":"Recovered"==a?t="\trgb(204, 255, 153)":"Active"==a?t="rgba(255, 0, 0, 0.3)":"Deceased"==a&&(t="rgb(204, 204, 204)"),Object(S.jsx)(y.a,{className:"infoBox",style:{backgroundColor:t},children:Object(S.jsxs)(T.a,{children:[Object(S.jsx)(u.a,{className:"infoBox__title",color:"textSecondary",children:a}),Object(S.jsx)("h2",{className:"infoBox__cases",children:N(c)})]})})};a(134);var C=function(e){return Object(S.jsx)("div",{className:"table",children:Object(S.jsxs)("table",{children:[Object(S.jsxs)("tr",{className:"header",children:[Object(S.jsx)("th",{className:"table__names",children:"State/UT or District"}),Object(S.jsx)("th",{children:"Confirmed"}),Object(S.jsx)("th",{children:"Active"}),Object(S.jsx)("th",{children:"Recovered"}),Object(S.jsx)("th",{children:"Deceased"}),Object(S.jsx)("th",{children:"Tested"}),Object(S.jsx)("th",{children:"Vaccinated[At Least One Dose]"}),Object(S.jsx)("th",{children:"Fully Vaccinated"})]}),e.casesTable.map((function(e){return Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{className:"table__names",children:Object(S.jsx)("strong",{children:e.name?e.name:"-"})}),Object(S.jsx)("td",{children:e.confirm?N(e.confirm):"-"}),Object(S.jsx)("td",{children:e.active?N(e.active):"-"}),Object(S.jsx)("td",{children:e.recover?N(e.recover):"-"}),Object(S.jsx)("td",{children:e.death?N(e.death):"-"}),Object(S.jsx)("td",{children:e.tested?N(e.tested):"-"}),Object(S.jsx)("td",{children:e.vaccine1?N(e.vaccine1):"-"}),Object(S.jsx)("td",{children:e.vaccine2?N(e.vaccine2):"-"})]})}))]})})},k=a(74),M=a.n(k),D=a(114),P=(a(259),function(e,t){var a=[],c=[],r=e.cases_time_series;for(var n in e.cases_time_series)"confirm"==t?a.push(r[n].dailyconfirmed):"recover"==t?a.push(r[n].dailyrecovered):"death"==t&&a.push(r[n].dailydeceased),c.push(r[n].date);return a}),w=function(e){var t=[],a=e.cases_time_series;for(var c in e.cases_time_series){var r=new Date(a[c].dateymd),n=p(r.getMonth()).slice(0,3)+" "+r.getFullYear();t.push(n)}return t},I=function(e){return"confirm"==e?Object(S.jsx)("h5",{style:{color:"\trgb(0, 153, 204)"},children:"Confirmed Cases"}):"recover"==e?Object(S.jsx)("h5",{style:{color:"\trgba(75,192,192)"},children:"Recovered Cases"}):"death"==e?Object(S.jsx)("h5",{style:{color:"\trgb(204, 0, 0)"},children:"Deceased Cases"}):void 0};var L=function(e){var t,a,r=Object(c.useState)([]),n=Object(l.a)(r,2),s=n[0],i=n[1],j=Object(c.useState)([]),h=Object(l.a)(j,2),b=h[0],v=h[1],O=e.casetype;Object(c.useEffect)((function(){(function(){var e=Object(o.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19india.org/data.json").then((function(e){return e.json()})).then((function(e){var t=P(e,O);i(t);var a=w(e);v(a)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),"confirm"==O?(t="\trgb(0, 153, 204,0.2)",a="\trgb(0, 153, 204)"):"recover"==O?(t="\trgb(0, 204, 0,0.2)",a="rgba(75,192,192)"):"death"==O&&(t="rgb(204, 0, 0,0.2)",a="\trgb(204, 0, 0)");var m={labels:b,datasets:[{data:s,fill:!0,backgroundColor:t,borderColor:a,pointRadius:0,borderWidth:2,tension:0,pointHoverRadius:5}]};return Object(S.jsxs)("div",{className:"line_graph",children:[Object(S.jsxs)("div",{className:"graph_header",children:[I(O),Object(S.jsx)(u.a,{style:{color:"gray"},children:"India, Total"})]}),Object(S.jsx)("hr",{className:"graph_divider"}),Object(S.jsx)(D.a,{data:m,options:{responsive:!0,plugins:{legend:{display:!1}},scales:{x:{ticks:{maxTicksLimit:10},grid:{display:!1}},y:{grid:{display:!1}}}}})]})};var R=function(){var e=Object(c.useState)({}),t=Object(l.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)([]),s=Object(l.a)(n,2),i=s[0],m=s[1],f=Object(c.useState)("TT"),p=Object(l.a)(f,2),N=p[0],y=p[1],T=Object(c.useState)([]),k=Object(l.a)(T,2),D=k[0],P=k[1],w=Object(c.useState)([]),I=Object(l.a)(w,2),R=I[0],H=I[1],B=Object(c.useState)([]),F=Object(l.a)(B,2),J=F[0],K=F[1],E=Object(c.useState)([]),U=Object(l.a)(E,2),G=U[0],V=U[1],W=Object(c.useState)([]),Y=Object(l.a)(W,2),Z=Y[0],z=Y[1],q=function(e,t){return e[t].total.other?e[t].total.other:0},Q=function(e){var t=i.map((function(t){return{name:t.name,confirm:e[t.value].total.confirmed,active:e[t.value].total.confirmed-e[t.value].total.recovered-e[t.value].total.deceased-q(a,t.value),recover:e[t.value].total.recovered,death:e[t.value].total.deceased,tested:e[t.value].total.tested,vaccine1:e[t.value].total.vaccinated1,vaccine2:e[t.value].total.vaccinated2}})),c=_(t);K(c)};Object(c.useEffect)((function(){M.a.get("https://api.covid19india.org/v4/min/data.min.json").then((function(e){var t=e.data;r(t),P(t[N].total),H(t[N].meta);var a=function(e){var t=Object.keys(e).map((function(e){return{name:g(e),value:e}}));return t.splice(33,1),t}(t);m(a)})).catch((function(e){return alert("OOps! Something went wrong.")}))}),[]),Object(c.useEffect)((function(){M.a.get("https://api.covid19india.org/v4/min/data.min.json").then((function(e){var t=e.data;Q(t)})).catch((function(e){return alert("OOps! Something went wrong.")}))}),[i]),Object(c.useEffect)((function(){V(Object.keys(Z))}),[Z]),Object(c.useEffect)((function(){!function(e){var t=G.map((function(t){return{name:t,confirm:e[t].total.confirmed,active:e[t].total.confirmed-e[t].total.recovered-e[t].total.deceased-q(Z,t),recover:e[t].total.recovered,death:e[t].total.deceased,tested:e[t].total.tested,vaccine1:e[t].total.vaccinated1,vaccine2:e[t].total.vaccinated2}})),a=_(t);K(a)}(Z)}),[G]);var X,$=function(){var e=Object(o.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=t.target.value,y(c),P(a[c].total),H(a[c].meta),"TT"!=c?z(a[c].districts):Q(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(j.a,{bg:"dark",variant:"dark",children:Object(S.jsx)(h.a,{children:Object(S.jsx)(j.a.Brand,{children:"Covid-19"})})}),Object(S.jsx)("div",{className:"app__header",children:Object(S.jsx)("h1",{className:"app__headertext",children:"COVID19 INDIA"})}),Object(S.jsxs)("div",{className:"app__container",children:[Object(S.jsxs)("div",{className:"container__left",children:[Object(S.jsxs)("div",{className:"left_search",children:[Object(S.jsxs)("div",{className:"left_header",children:[Object(S.jsx)("div",{children:Object(S.jsx)("h3",{className:"app__headertext",children:g(N)})}),Object(S.jsxs)("div",{className:"app__popheader",children:[Object(S.jsx)("h3",{className:"app__poptext",children:"Population"}),Object(S.jsx)("h5",{className:"app__popvalue",children:(X=R.population,X>=1e7?X=(X/1e7).toFixed(2)+" Cr":X>=1e5?X=(X/1e5).toFixed(2)+" Lac":X>=1e3&&(X=(X/1e3).toFixed(2)+" K"),X)})]})]}),Object(S.jsx)("div",{className:"search__text",children:Object(S.jsx)(u.a,{children:"search your state"})}),Object(S.jsx)("div",{children:Object(S.jsx)(b.a,{className:"app__form",children:Object(S.jsxs)(v.a,{onChange:$,value:N,children:[Object(S.jsx)(O.a,{value:"TT",children:"India"}),i.map((function(e){return Object(S.jsx)(O.a,{value:e.value,children:e.name})}))]})})})]}),Object(S.jsxs)("div",{className:"app__stats",children:[Object(S.jsx)(A,{title:"Confirmed",cases:D.confirmed}),Object(S.jsx)(A,{title:"Active",cases:D.other?D.confirmed-D.deceased-D.recovered-D.other:D.confirmed-D.deceased-D.recovered}),Object(S.jsx)(A,{title:"Recovered",cases:D.recovered}),Object(S.jsx)(A,{title:"Deceased",cases:D.deceased})]}),Object(S.jsx)("div",{className:"app__update",children:Object(S.jsxs)(u.a,{children:["Last Updated on ",x(R.last_updated)]})}),Object(S.jsx)("div",{className:"app__table",children:Object(S.jsx)(C,{casesTable:J})})]}),Object(S.jsxs)("div",{className:"container__right",children:[Object(S.jsx)("div",{className:"app__update",children:Object(S.jsx)(u.a,{children:"CASES VISUALIZATIONS"})}),Object(S.jsxs)("div",{className:"app__charts",children:[Object(S.jsx)(L,{casetype:"confirm"}),Object(S.jsx)(L,{casetype:"recover"}),Object(S.jsx)(L,{casetype:"death"})]})]})]})]})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,300)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),r(e),n(e),s(e)}))};s.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(R,{})}),document.getElementById("root")),H()}},[[261,1,2]]]);
//# sourceMappingURL=main.a9967c99.chunk.js.map