(this["webpackJsonp@jazaa/jazaa-payment-gateway"]=this["webpackJsonp@jazaa/jazaa-payment-gateway"]||[]).push([[35],{1291:function(e,t,a){},1465:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return L}));var n=a(545),r=a(0),c=a.n(r),l=a(791),o=a.n(l),i=a(562),u=a.n(i),s=a(1444),d=a(1473),m=a(1474),f=a(1064),p=a(837),b=a.n(p),g=a(603),h=a(896),v=a(799),E=(a(1291),function(e){var t=Object(r.useState)(!1),a=Object(n.a)(t,2),l=a[0],o=a[1],i=function(){return o(!l)};return c.a.createElement(s.a,{isOpen:l,toggle:i},c.a.createElement(d.a,{style:{backgroundColor:"white",border:"none",marginRight:30},caret:!0},c.a.createElement(f.a,{title:"Search All Data Transaction"},c.a.createElement(b.a,null))),c.a.createElement(m.a,{style:{marginLeft:-150,marginTop:-10,width:250}},c.a.createElement("div",null,c.a.createElement(g.a,{style:{marginTop:10,marginLeft:10,display:"flex",flexDirection:"column"}},c.a.createElement(h.a,{onChange:function(t){return e.addFilterBy(t.target.value)},style:{width:210},type:"select",name:"select",id:"exampleSelect"},c.a.createElement("option",{value:"",disabled:!0,selected:!0},"Filter"),c.a.createElement("option",{value:"bill_id"},"Bill_ID"),c.a.createElement("option",{value:"ref_id"},"Ref_ID"),c.a.createElement("option",{value:"ref_id2"},"Ref_ID2"),c.a.createElement("option",{value:"subscribe_id"},"Subscribe_ID")),c.a.createElement(h.a,{onChange:function(t){return e.addFilterValue(t.target.value)},style:{width:210,marginTop:10},type:"text",placeholder:"Data yang dicari"}))),c.a.createElement(v.a,{onClick:function(){e.addFilterTrue(),i()},style:{marginLeft:10,marginBottom:10,width:100},color:"primary"},"Filter")))}),y=a(52),O=a(53),j=a(55),w=a(54),_=a(1066),k=a(1058),C=a(658),T=a.n(C),D=a(659),S=a.n(D),I=function(e){Object(j.a)(a,e);var t=Object(w.a)(a);function a(e){var n;return Object(y.a)(this,a),(n=t.call(this,e)).state={page:1},n}return Object(O.a)(a,[{key:"render",value:function(){return c.a.createElement(_.a,null,c.a.createElement(k.a,{style:{textAlign:"center",height:"40px"}},c.a.createElement("div",{style:{margin:"auto",marginTop:5}},c.a.createElement("div",null,c.a.createElement("span",null,"Page \xa0",c.a.createElement("button",{onClick:this.props.substract,disabled:1===this.props.page,style:{border:"none",backgroundColor:"white"}},c.a.createElement(T.a,{style:{fontSize:13,fontWeight:"bold",cursor:"pointer"}})),c.a.createElement("input",{value:this.props.page,style:{width:20,textAlign:"center",marginLeft:5,marginRight:5}}),c.a.createElement("button",{onClick:this.props.add,style:{border:"none",backgroundColor:"white"}},c.a.createElement(S.a,{style:{fontSize:13,fontWeight:"bold",cursor:"pointer"}})))))))}}]),a}(r.Component),P=a(1472),F=a(1413),M=a(1414),R=a(1415),z=a(871),N=a(1432),B=a(572),x=(a(571),a(167)),A=a(921);function L(e){var t=Object(r.useState)([]),a=Object(n.a)(t,2),l=a[0],i=a[1],s=Object(r.useState)(1),d=Object(n.a)(s,2),m=d[0],f=d[1],p=Object(r.useState)(!1),b=Object(n.a)(p,2),g=b[0],y=b[1],O=Object(r.useState)(""),j=Object(n.a)(O,2),w=j[0],_=j[1],k=Object(r.useState)(!1),C=Object(n.a)(k,2),T=C[0],D=C[1],S=Object(r.useState)(""),L=Object(n.a)(S,2),U=L[0],H=L[1],J=Object(r.useState)(""),V=Object(n.a)(J,2),q=V[0],W=V[1],G=x.b.split(".")[1],K=JSON.parse(window.atob(G)),Q="";1===K.group&&(Q="".concat(x.a,"/transaction?page=").concat(m)),3===K.group&&(Q="".concat(x.a,"/transaction-operational?page=").concat(m)),T&&(Q="".concat(x.a,"/filter-transaction?filterBy=").concat(U,"&value=").concat(q)),Object(r.useEffect)((function(){var e;u.a.get(Q,{headers:{Authorization:"Bearer ".concat(x.b)}}).then((function(t){console.log(t.data),t.data.data.page&&(e=t.data.data.values),t.data.data.page||(e=[t.data.data]),"Data not found"===t.data.data&&(e=[]),i(e)})).catch((function(e){return console.log(e)}))}),[m,Q]);var X=function(){return f(m+1)},Y=function(){return f(m-1)},Z=function(){return y(!g)},$=function(e){return H(e)},ee=function(e){return W(e)},te=function(){return D(!0)},ae=function(e){if(e)return"".concat(e.slice(0,10)," ").concat(e.slice(11,19))},ne=function(e){u.a.put("".concat(x.a,"/transaction/").concat(e),{status:w},{headers:{Authorization:"Bearer ".concat(x.b)}}).then((function(e){var t;y(!g),1===e.data.data.length?(t="Data berhasil diupdate",B.b.success("".concat(t),{onClose:function(){return window.location.href="/transactions"},autoClose:1e3})):function(e){B.b.error("".concat(e),{autoClose:1e3})}("Gagal update data, terdapat kesalahan pada server")})).catch((function(e){return console.log(e)}))},re=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(P.a,{isOpen:g,toggle:Z},c.a.createElement(F.a,{toggle:Z},"Update Transaction"),c.a.createElement(M.a,null,c.a.createElement("div",null,"Update Status Transaction"),c.a.createElement("div",null,c.a.createElement(h.a,{onChange:function(e){return _(e.target.value)},type:"select",name:"select"},c.a.createElement("option",{value:"inquiry"},"Inquiry"),c.a.createElement("option",{value:"reversal"},"Reversal"),c.a.createElement("option",{value:"paid"},"Paid"),c.a.createElement("option",{value:"expired"},"Expired")))),c.a.createElement(R.a,null,c.a.createElement(v.a,{color:"primary",onClick:function(){return ne(e)}},"Update Data")," ",c.a.createElement(v.a,{color:"secondary",onClick:Z},"Cancel"))))},ce={search:!1,filterType:"dropdown",print:!1,download:!1,responsive:"scroll",rowsPerPage:15,selectableRows:!1,rowsPerPageOptions:[10,25,50,100],customToolbar:function(){return c.a.createElement(E,{addFilterBy:$,addFilterValue:ee,addFilterTrue:te})},customFooter:function(e){return c.a.createElement(I,{page:m,add:X,substract:Y,rowsPerPage:e})}};return c.a.createElement("div",{className:"animated fadeIn",style:{marginBottom:30,marginRight:20}},c.a.createElement(B.a,{position:B.b.POSITION.TOP_CENTER}),c.a.createElement(N.a,{theme:Object(z.a)({overrides:{MuiTableCell:{head:{"&:nth-child(1)":{width:"10px"},"&:nth-child(5)":{width:"220px"}}},MUIDataTableBodyRow:{root:{"&:nth-child(odd)":{backgroundColor:"rgba(0,0,0,.05)"}}},MUIDataTableBodyCell:{root:{}}}})},c.a.createElement(o.a,{title:"Data Transaction",options:ce,columns:["Ref_ID","Bill_ID","Amount","Admin_Fee","Status","Params","Ref_ID2","Date_Time","Merchant_Name","Rekening Number","Rekening_Name","Subscriber_ID","Name","Action","Status_Message"],data:function(){if(void 0!==l||null!==l)return l.map((function(e,t){return[e.ref_id,e.bill_id,Object(A.a)(e.amount),Object(A.a)(e.admin_fee),e.status,e.params.map((function(e,t){return c.a.createElement("div",{key:t},e.key," ",e.value)})),e.ref_id2,ae(e.date_time),e.merchant.name,e.rekening.number,e.rekening.name,e.subscribe_id,e.name,c.a.createElement(c.a.Fragment,null,c.a.createElement(v.a,{key:t,size:"md",color:"success",onClick:Z},"Update"),re(e.id))]}))}()})))}},603:function(e,t,a){"use strict";var n=a(9),r=a(19),c=a(0),l=a.n(c),o=a(2),i=a.n(o),u=a(23),s=a.n(u),d=a(11),m={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:d.o,className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,a=e.cssModule,c=e.row,o=e.disabled,i=e.check,u=e.inline,m=e.tag,f=Object(r.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),p=Object(d.k)(s()(t,!!c&&"row",i?"form-check":"form-group",!(!i||!u)&&"form-check-inline",!(!i||!o)&&"disabled"),a);return"fieldset"===m&&(f.disabled=o),l.a.createElement(m,Object(n.a)({},f,{className:p}))};f.propTypes=m,f.defaultProps={tag:"div"},t.a=f},658:function(e,t,a){"use strict";var n=a(430);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(560)).default)(r.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.default=c},659:function(e,t,a){"use strict";var n=a(430);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(560)).default)(r.default.createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");t.default=c},837:function(e,t,a){"use strict";var n=a(430);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(560)).default)(r.default.createElement("path",{d:"M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"}),"FindInPage");t.default=c},921:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){return new Intl.NumberFormat("id",{style:"currency",currency:"IDR"}).format(parseInt(e))}}}]);