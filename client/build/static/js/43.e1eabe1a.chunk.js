(this["webpackJsonp@jazaa/jazaa-payment-gateway"]=this["webpackJsonp@jazaa/jazaa-payment-gateway"]||[]).push([[43],{1161:function(e,a,t){e.exports=t.p+"static/media/jazaa.30c49454.png"},1471:function(e,a,t){"use strict";t.r(a);var n=t(171),o=t(0),i=t.n(o),r=t(115),l=t(1412),s=t(1410),c=t(64),d=t(9),p=t(541),g=t(42),m=t(2),u=t.n(m),h=t(991),b=t(11),v=["defaultOpen"],f=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isOpen:a.defaultOpen||!1},t.toggle=t.toggle.bind(Object(p.a)(t)),t}Object(g.a)(a,e);var t=a.prototype;return t.toggle=function(e){this.setState({isOpen:!this.state.isOpen}),this.props.onToggle&&this.props.onToggle(e,!this.state.isOpen)},t.render=function(){return i.a.createElement(h.a,Object(d.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(b.l)(this.props,v)))},a}(o.Component);f.propTypes=Object(c.a)({defaultOpen:u.a.bool,onToggle:u.a.func},h.a.propTypes);var E,O=t(1473),j=t(1474),k=t(851),w=t(92),N=t.n(w),y=t(167),C=t(924),x=t(1161),T=t.n(x),z=t(1014),L=t(1477),I=t(1024);try{var J=y.b.split(".")[1];E=JSON.parse(window.atob(J)),N.a.get("code")||(window.location.href="/login")}catch(P){window.location.href="/login"}var S=Object(z.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},orange:{color:e.palette.getContrastText(I.a[500]),backgroundColor:I.a[500],marginRight:15,textTransform:"capitalize"}}}));function M(e){var a=N.a.get("name"),t=function(){return 1===E.group?"admin":2===E.group?a:3===E.group?"operational":void 0},o=(e.children,Object(n.a)(e,["children"]),S());return i.a.createElement(i.a.Fragment,null,i.a.createElement(C.l,{className:"d-lg-none",display:"md",mobile:!0}),i.a.createElement(r.NavLink,{to:"/dashboard",className:"nav-link"},i.a.createElement(C.e,{full:{src:T.a,width:89,height:25,alt:"Jazaa Logo"},minimized:{src:T.a,width:20,height:20,marginLeft:20,alt:"Jazaa Logo"}})),i.a.createElement(C.l,{className:"d-md-down-none",display:"lg"}),i.a.createElement(l.a,{className:"d-md-down-none",navbar:!0},i.a.createElement(s.a,{className:"px-3"},i.a.createElement(r.NavLink,{to:"/dashboard",className:"nav-link"},"Dashboard"))),i.a.createElement(l.a,{className:"ml-auto",navbar:!0},i.a.createElement("div",{style:{fontSize:13,marginRight:10,marginBottom:10}},i.a.createElement("span",null,"Hi"),i.a.createElement("br",null)," ",t(),"!"),i.a.createElement(f,{nav:!0,direction:"down"},i.a.createElement(O.a,{nav:!0},i.a.createElement(L.a,{style:{marginBottom:5},className:o.orange},t().substring(0,1))),i.a.createElement(j.a,{right:!0},i.a.createElement(k.a,{header:!0,tag:"div",className:"text-center"},i.a.createElement("strong",null,"Settings")),i.a.createElement(r.NavLink,{to:"/profile",className:"nav-link"},i.a.createElement(k.a,null,i.a.createElement("i",{className:"fa fa-user"}),"Profile")),i.a.createElement(k.a,{onClick:function(){N.a.remove("jzid"),N.a.remove("jztkn"),N.a.remove("code"),N.a.remove("name"),window.location.href="/login"}},i.a.createElement("i",{className:"fa fa-lock"})," Logout")))))}M.defaultProps={};a.default=M},851:function(e,a,t){"use strict";var n=t(9),o=t(19),i=t(541),r=t(42),l=t(0),s=t.n(l),c=t(2),d=t.n(c),p=t(23),g=t.n(p),m=t(756),u=t(11),h={children:d.a.node,active:d.a.bool,disabled:d.a.bool,divider:d.a.bool,tag:u.o,header:d.a.bool,onClick:d.a.func,className:d.a.string,cssModule:d.a.object,toggle:d.a.bool},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(i.a)(t)),t.getTabIndex=t.getTabIndex.bind(Object(i.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled||this.props.header||this.props.divider?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},t.getTabIndex=function(){return this.props.disabled||this.props.header||this.props.divider?"-1":"0"},t.render=function(){var e=this.getTabIndex(),a=e>-1?"menuitem":void 0,t=Object(u.l)(this.props,["toggle"]),i=t.className,r=t.cssModule,l=t.divider,c=t.tag,d=t.header,p=t.active,m=Object(o.a)(t,["className","cssModule","divider","tag","header","active"]),h=Object(u.k)(g()(i,{disabled:m.disabled,"dropdown-item":!l&&!d,active:p,"dropdown-header":d,"dropdown-divider":l}),r);return"button"===c&&(d?c="h6":l?c="div":m.href&&(c="a")),s.a.createElement(c,Object(n.a)({type:"button"===c&&(m.onClick||this.props.toggle)?"button":void 0},m,{tabIndex:e,role:a,className:h,onClick:this.onClick}))},a}(s.a.Component);b.propTypes=h,b.defaultProps={tag:"button",toggle:!0},b.contextType=m.a,a.a=b}}]);