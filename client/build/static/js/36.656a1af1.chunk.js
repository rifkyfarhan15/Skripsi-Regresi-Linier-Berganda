(this["webpackJsonp@jazaa/jazaa-payment-gateway"]=this["webpackJsonp@jazaa/jazaa-payment-gateway"]||[]).push([[36],{1305:function(t,e,r){},1476:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return D}));var n=r(550),a=r.n(n),o=r(551),i=r(545),c=r(0),l=r.n(c),u=r(115),s=r(791),h=r.n(s),d=r(562),f=r.n(d),p=r(1444),v=r(1473),m=r(1474),g=r(851),y=(r(1305),r(1059)),b=r(1064),w=r(795),E=r.n(w),x=function(t){var e=Object(c.useState)(!1),r=Object(i.a)(e,2),n=r[0],a=r[1];return l.a.createElement(p.a,{isOpen:n,toggle:function(){return a(!n)}},l.a.createElement(v.a,{style:{backgroundColor:"white",border:"none"},caret:!0},l.a.createElement(b.a,{title:"Tambah Data User (Operation)"},l.a.createElement(y.a,null,l.a.createElement(E.a,null)))),l.a.createElement(m.a,{style:{marginLeft:-80}},l.a.createElement(u.Link,{to:"/add-user"},l.a.createElement(g.a,null,"Tambah Data User"))))},O=r(1472),k=r(1413),j=r(1414),L=r(1415),C=r(799),T=r(871),_=r(1432),N=r(572),I=(r(571),r(167));function D(t){var e=Object(c.useState)([]),r=Object(i.a)(e,2),n=r[0],s=r[1],d=Object(c.useState)(!1),p=Object(i.a)(d,2),v=p[0],m=p[1];Object(c.useEffect)((function(){var t;f.a.get("".concat(I.a,"/users"),{headers:{Authorization:"Bearer ".concat(I.b)}}).then((function(e){t=e.data.data,s(t)})).catch((function(t){return console.log(t)}))}),[]);var g=function(){return m(!v)},y=function(t){N.b.error("".concat(t),{onClose:function(){return window.location.href="/operational"},autoClose:2e3})},b=function(){var t=Object(o.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(!v),t.next=4,f.a.delete("".concat(I.a,"/users/").concat(e),{headers:{Authorization:"Bearer ".concat(I.b)}});case 4:"OK"===t.sent.data.status?(r="Data berhasil dihapus",N.b.success("".concat(r),{onClose:function(){return window.location.href="/operational"},autoClose:2e3})):y("Data gagal dihapus, terdapat kesalahan pada server"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var r}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),w=function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,{isOpen:v,toggle:g},l.a.createElement(k.a,{toggle:g},"Delete Merchant"),l.a.createElement(j.a,null,"Apakah anda yakin akan menghapus data ini?"),l.a.createElement(L.a,null,l.a.createElement(C.a,{color:"primary",onClick:function(){return b(t)}},"Delete")," ",l.a.createElement(C.a,{color:"secondary",onClick:g},"Cancel"))))},E={search:!1,filterType:"dropdown",print:!1,download:!1,responsive:"scroll",selectableRows:!1,customToolbar:function(){return l.a.createElement(x,null)}};return console.log(n),l.a.createElement("div",{className:"animated fadeIn",style:{marginBottom:30,marginRight:20}},l.a.createElement(N.a,{position:N.b.POSITION.TOP_CENTER}),l.a.createElement(_.a,{theme:Object(T.a)({overrides:{MuiTableCell:{head:{"&:nth-child(1)":{width:"10px"},"&:nth-child(5)":{width:"220px"}}},MUIDataTableBodyRow:{root:{"&:nth-child(odd)":{backgroundColor:"rgba(0,0,0,.05)"}}},MUIDataTableBodyCell:{root:{}}}})},l.a.createElement(h.a,{title:"Data User (Operation)",options:E,columns:["Role","Username/Email","Action"],data:n.map((function(t,e){return[1===t.group_id?"Admin":"Operational",t.username,l.a.createElement(l.a.Fragment,null,l.a.createElement(u.Link,{to:"/user-operational/"+t.id},l.a.createElement(C.a,{size:"sm",color:"primary",style:{marginRight:5}},"Edit")),l.a.createElement(C.a,{size:"sm",color:"danger",onClick:g},"Delete"),w(t.id))]}))})))}},550:function(t,e,r){t.exports=r(552)},551:function(t,e,r){"use strict";function n(t,e,r,n,a,o,i){try{var c=t[o](i),l=c.value}catch(u){return void r(u)}c.done?e(l):Promise.resolve(l).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function c(t){n(i,a,o,c,l,"next",t)}function l(t){n(i,a,o,c,l,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return a}))},552:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r,n){var a=e&&e.prototype instanceof s?e:s,o=Object.create(a.prototype),i=new x(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var u={};function s(){}function h(){}function d(){}var f={};f[a]=function(){return this};var p=Object.getPrototypeOf,v=p&&p(p(O([])));v&&v!==e&&r.call(v,a)&&(f=v);var m=d.prototype=s.prototype=Object.create(f);function g(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function y(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=m.constructor=d,d.constructor=h,d[i]=h.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(y.prototype),y.prototype[o]=function(){return this},t.AsyncIterator=y,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new y(c(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(m),m[i]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},795:function(t,e,r){"use strict";var n=r(430);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(r(0)),o=(0,n(r(560)).default)(a.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");e.default=o},851:function(t,e,r){"use strict";var n=r(9),a=r(19),o=r(541),i=r(42),c=r(0),l=r.n(c),u=r(2),s=r.n(u),h=r(23),d=r.n(h),f=r(756),p=r(11),v={children:s.a.node,active:s.a.bool,disabled:s.a.bool,divider:s.a.bool,tag:p.o,header:s.a.bool,onClick:s.a.func,className:s.a.string,cssModule:s.a.object,toggle:s.a.bool},m=function(t){function e(e){var r;return(r=t.call(this,e)||this).onClick=r.onClick.bind(Object(o.a)(r)),r.getTabIndex=r.getTabIndex.bind(Object(o.a)(r)),r}Object(i.a)(e,t);var r=e.prototype;return r.onClick=function(t){this.props.disabled||this.props.header||this.props.divider?t.preventDefault():(this.props.onClick&&this.props.onClick(t),this.props.toggle&&this.context.toggle(t))},r.getTabIndex=function(){return this.props.disabled||this.props.header||this.props.divider?"-1":"0"},r.render=function(){var t=this.getTabIndex(),e=t>-1?"menuitem":void 0,r=Object(p.l)(this.props,["toggle"]),o=r.className,i=r.cssModule,c=r.divider,u=r.tag,s=r.header,h=r.active,f=Object(a.a)(r,["className","cssModule","divider","tag","header","active"]),v=Object(p.k)(d()(o,{disabled:f.disabled,"dropdown-item":!c&&!s,active:h,"dropdown-header":s,"dropdown-divider":c}),i);return"button"===u&&(s?u="h6":c?u="div":f.href&&(u="a")),l.a.createElement(u,Object(n.a)({type:"button"===u&&(f.onClick||this.props.toggle)?"button":void 0},f,{tabIndex:t,role:e,className:v,onClick:this.onClick}))},e}(l.a.Component);m.propTypes=v,m.defaultProps={tag:"button",toggle:!0},m.contextType=f.a,e.a=m}}]);