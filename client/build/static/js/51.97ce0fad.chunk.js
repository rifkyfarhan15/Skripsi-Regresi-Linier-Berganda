(this["webpackJsonp@jazaa/jazaa-payment-gateway"]=this["webpackJsonp@jazaa/jazaa-payment-gateway"]||[]).push([[51],{1451:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return I}));var n=t(550),r=t.n(n),s=t(551),l=t(52),o=t(53),c=t(55),u=t(54),i=t(0),m=t.n(i),p=t(526),d=t(527),E=t(88),f=t(522),h=t(523),b=t(651),v=t(525),w=t(603),g=t(660),y=t(895),O=t(896),j=t(758),z=t(799),C=t(562),N=t.n(C),S=t(167),x=t(572),I=(t(571),function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).submitData=function(){var e=Object(s.a)(r.a.mark((function e(a){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,N.a.post("".concat(S.a,"/users"),{group_id:parseInt(n.state.group_id),username:n.state.username,password:n.state.password},{headers:{Authorization:"Bearer ".concat(S.b)}});case 3:(t=e.sent).data.messages==="Email ".concat(n.state.username," sudah terdaftar pada sistem kami.")&&x.b.error("Username atau email sudah ada",{onClose:function(){return window.location.href="/add-user"},autoClose:1e3}),null!==t.data.data&&x.b.success("Berhasil menambahkan user",{onClose:function(){return window.location.href="/operation"},autoClose:2e3});case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),n.state={collapse:!0,fadeIn:!0,timeout:300,group_id:1,username:"",password:""},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return m.a.createElement("div",null,m.a.createElement(p.a,null,m.a.createElement(x.a,{position:x.b.POSITION.TOP_CENTER}),m.a.createElement(d.a,{xs:"9"},m.a.createElement(E.a,{timeout:this.state.timeout,in:this.state.fadeIn},m.a.createElement(f.a,null,m.a.createElement(h.a,null,m.a.createElement("i",{className:"fa fa-edit"}),"Tambah Data User Operational"),m.a.createElement(b.a,{isOpen:this.state.collapse,id:"collapseExample"},m.a.createElement("form",{onSubmit:this.submitData,className:"form-horizontal"},m.a.createElement(v.a,null,m.a.createElement(w.a,null,m.a.createElement(g.a,{htmlFor:"prependedInput"},"Email"),m.a.createElement("div",{className:"controls"},m.a.createElement(y.a,{className:"input-prepend"},m.a.createElement(O.a,{onChange:function(a){return e.setState({username:a.target.value})},value:this.state.username,id:"prependedInput",size:"16",min:"8",type:"email",required:!0})))),m.a.createElement(w.a,null,m.a.createElement(g.a,{for:"exampleSelect"},"User Group"),m.a.createElement(O.a,{onChange:function(a){return e.setState({group_id:a.target.value})},type:"select",name:"select",id:"exampleSelect"},m.a.createElement("option",{value:"1"},"Admin"),m.a.createElement("option",{value:"3"},"Operational"))),m.a.createElement(w.a,null,m.a.createElement(g.a,{htmlFor:"inputPassword"},"Password"),m.a.createElement("div",{className:"controls"},m.a.createElement(y.a,null,m.a.createElement(O.a,{onChange:function(a){return e.setState({password:a.target.value})},id:"inputPassword",min:"8",size:"16",type:"password",required:!0}))))),m.a.createElement(j.a,null,m.a.createElement(z.a,{type:"submit",size:"sm",color:"success",style:{marginRight:"10px"}},m.a.createElement("i",{className:"fa fa-dot-circle-o"}),"Submit")))))))))}}]),t}(i.Component))}}]);