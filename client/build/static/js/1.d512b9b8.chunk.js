(this["webpackJsonp@jazaa/jazaa-payment-gateway"]=this["webpackJsonp@jazaa/jazaa-payment-gateway"]||[]).push([[1],{571:function(t,e,n){},572:function(t,e,n){"use strict";n.d(e,"a",(function(){return K})),n.d(e,"b",(function(){return ct}));var o=n(9),s=n(19),a=n(42),i=n(0),r=n.n(i),l=n(2),u=n.n(l),c=n(23),p=n.n(c);function d(t,e){if(null==t)return{};var n,o,s={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(s[n]=t[n]);return s}function f(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var h=n(90),g=n.n(h),m=!1,b=r.a.createContext(null),y=function(t){function e(e,n){var o;o=t.call(this,e,n)||this;var s,a=n&&!n.isMounting?e.enter:e.appear;return o.appearStatus=null,e.in?a?(s="exited",o.appearStatus="entering"):s="entered":s=e.unmountOnExit||e.mountOnEnter?"unmounted":"exited",o.state={status:s},o.nextCallback=null,o}f(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&"unmounted"===e.status?{status:"exited"}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(e="entering"):"entering"!==n&&"entered"!==n||(e="exiting")}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,o=this.props.timeout;return t=e=n=o,null!=o&&"number"!==typeof o&&(t=o.exit,e=o.enter,n=void 0!==o.appear?o.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e){this.cancelNextCallback();var n=g.a.findDOMNode(this);"entering"===e?this.performEnter(n,t):this.performExit(n)}else this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(t,e){var n=this,o=this.props.enter,s=this.context?this.context.isMounting:e,a=this.getTimeouts(),i=s?a.appear:a.enter;!e&&!o||m?this.safeSetState({status:"entered"},(function(){n.props.onEntered(t)})):(this.props.onEnter(t,s),this.safeSetState({status:"entering"},(function(){n.props.onEntering(t,s),n.onTransitionEnd(t,i,(function(){n.safeSetState({status:"entered"},(function(){n.props.onEntered(t,s)}))}))})))},n.performExit=function(t){var e=this,n=this.props.exit,o=this.getTimeouts();n&&!m?(this.props.onExit(t),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(t),e.onTransitionEnd(t,o.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(t)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(t)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,e.nextCallback=null,t(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e,n){this.setNextCallback(n);var o=null==e&&!this.props.addEndListener;t&&!o?(this.props.addEndListener&&this.props.addEndListener(t,this.nextCallback),null!=e&&setTimeout(this.nextCallback,e)):setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if("unmounted"===t)return null;var e=this.props,n=e.children,o=d(e,["children"]);if(delete o.in,delete o.mountOnEnter,delete o.unmountOnExit,delete o.appear,delete o.enter,delete o.exit,delete o.timeout,delete o.addEndListener,delete o.onEnter,delete o.onEntering,delete o.onEntered,delete o.onExit,delete o.onExiting,delete o.onExited,"function"===typeof n)return r.a.createElement(b.Provider,{value:null},n(t,o));var s=r.a.Children.only(n);return r.a.createElement(b.Provider,{value:null},r.a.cloneElement(s,o))},e}(r.a.Component);function v(){}y.contextType=b,y.propTypes={},y.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:v,onEntering:v,onEntered:v,onExit:v,onExiting:v,onExited:v},y.UNMOUNTED=0,y.EXITED=1,y.ENTERING=2,y.ENTERED=3,y.EXITING=4;var E=y;function T(){return(T=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function x(t,e){var n=Object.create(null);return t&&i.Children.map(t,(function(t){return t})).forEach((function(t){n[t.key]=function(t){return e&&Object(i.isValidElement)(t)?e(t):t}(t)})),n}function C(t,e,n){return null!=n[e]?n[e]:t.props[e]}function N(t,e,n){var o=x(t.children),s=function(t,e){function n(n){return n in e?e[n]:t[n]}t=t||{},e=e||{};var o,s=Object.create(null),a=[];for(var i in t)i in e?a.length&&(s[i]=a,a=[]):a.push(i);var r={};for(var l in e){if(s[l])for(o=0;o<s[l].length;o++){var u=s[l][o];r[s[l][o]]=n(u)}r[l]=n(l)}for(o=0;o<a.length;o++)r[a[o]]=n(a[o]);return r}(e,o);return Object.keys(s).forEach((function(a){var r=s[a];if(Object(i.isValidElement)(r)){var l=a in e,u=a in o,c=e[a],p=Object(i.isValidElement)(c)&&!c.props.in;!u||l&&!p?u||!l||p?u&&l&&Object(i.isValidElement)(c)&&(s[a]=Object(i.cloneElement)(r,{onExited:n.bind(null,r),in:c.props.in,exit:C(r,"exit",t),enter:C(r,"enter",t)})):s[a]=Object(i.cloneElement)(r,{in:!1}):s[a]=Object(i.cloneElement)(r,{onExited:n.bind(null,r),in:!0,exit:C(r,"exit",t),enter:C(r,"enter",t)})}})),s}var j=Object.values||function(t){return Object.keys(t).map((function(e){return t[e]}))},k=function(t){function e(e,n){var o,s=(o=t.call(this,e,n)||this).handleExited.bind(O(O(o)));return o.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},o}f(e,t);var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(t,e){var n,o,s=e.children,a=e.handleExited;return{children:e.firstRender?(n=t,o=a,x(n.children,(function(t){return Object(i.cloneElement)(t,{onExited:o.bind(null,t),in:!0,appear:C(t,"appear",n),enter:C(t,"enter",n),exit:C(t,"exit",n)})}))):N(t,s,a),firstRender:!1}},n.handleExited=function(t,e){var n=x(this.props.children);t.key in n||(t.props.onExited&&t.props.onExited(e),this.mounted&&this.setState((function(e){var n=T({},e.children);return delete n[t.key],{children:n}})))},n.render=function(){var t=this.props,e=t.component,n=t.childFactory,o=d(t,["component","childFactory"]),s=this.state.contextValue,a=j(this.state.children).map(n);return delete o.appear,delete o.enter,delete o.exit,null===e?r.a.createElement(b.Provider,{value:s},a):r.a.createElement(b.Provider,{value:s},r.a.createElement(e,o,a))},e}(r.a.Component);k.propTypes={},k.defaultProps={component:"div",childFactory:function(t){return t}};var D=k,_={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},S={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},R=0,L=1,P=2,w=3,I=4,F=function(){};function M(t){return"number"===typeof t&&!isNaN(t)&&t>0}function B(t){return Object.keys(t).map((function(e){return t[e]}))}var q=!("undefined"===typeof window||!window.document||!window.document.createElement);var A,H=((A=function(t,e,n){var o=t[e];return!1===o||M(o)?null:new Error(n+" expect "+e+" \n      to be a valid Number > 0 or equal to false. "+o+" given.")}).isRequired=function(t,e,n){if("undefined"===typeof t[e])return new Error("The prop "+e+" is marked as required in \n      "+n+", but its value is undefined.");A(t,e,n)},A),U={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t){return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach((function(t){return clearTimeout(t)})),this.emitQueue.delete(t)),this},emit:function(t){for(var e=this,n=arguments.length,o=new Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];this.list.has(t)&&this.list.get(t).forEach((function(n){var s=setTimeout((function(){n.apply(void 0,o)}),0);e.emitQueue.has(t)||e.emitQueue.set(t,[]),e.emitQueue.get(t).push(s)}))}};function X(t){var e=t.enter,n=t.exit,a=t.duration,i=void 0===a?750:a,l=t.appendPosition,u=void 0!==l&&l;return function(t){var a,l,c=t.children,p=t.position,d=t.preventExitTransition,f=Object(s.a)(t,["children","position","preventExitTransition"]),h=u?e+"--"+p:e,g=u?n+"--"+p:n;Array.isArray(i)&&2===i.length?(a=i[0],l=i[1]):a=l=i;return r.a.createElement(E,Object(o.a)({},f,{timeout:d?0:{enter:a,exit:l},onEnter:function(t){t.classList.add(h),t.style.animationFillMode="forwards",t.style.animationDuration=.001*a+"s"},onEntered:function(t){t.classList.remove(h),t.style.cssText=""},onExit:d?F:function(t){t.classList.add(g),t.style.animationFillMode="forwards",t.style.animationDuration=.001*l+"s"}}),c)}}function V(t){var e,n,s=t.delay,a=t.isRunning,i=t.closeToast,l=t.type,u=t.hide,c=t.className,d=t.style,f=t.controlledProgress,h=t.progress,g=t.rtl,m=Object(o.a)({},d,{animationDuration:s+"ms",animationPlayState:a?"running":"paused",opacity:u?0:1,transform:f?"scaleX("+h+")":null}),b=p()("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar--"+l,((e={})["Toastify__progress-bar--rtl"]=g,e),c),y=((n={})[f&&h>=1?"onTransitionEnd":"onAnimationEnd"]=f&&h<1?null:i,n);return r.a.createElement("div",Object(o.a)({className:b,style:m},y))}function z(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function G(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}V.propTypes={delay:H.isRequired,isRunning:u.a.bool.isRequired,closeToast:u.a.func.isRequired,rtl:u.a.bool.isRequired,type:u.a.string,hide:u.a.bool,className:u.a.oneOfType([u.a.string,u.a.object]),progress:u.a.number,controlledProgress:u.a.bool},V.defaultProps={type:S.DEFAULT,hide:!1};var Q=q&&/(msie|trident)/i.test(navigator.userAgent),W=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))||this).state={isRunning:!0,preventExitTransition:!1},e.flag={canCloseOnClick:!0,canDrag:!1},e.drag={start:0,x:0,y:0,deltaX:0,removalDistance:0},e.boundingRect=null,e.ref=null,e.pauseToast=function(){e.props.autoClose&&e.setState({isRunning:!1})},e.playToast=function(){e.props.autoClose&&e.setState({isRunning:!0})},e.onDragStart=function(t){e.flag.canCloseOnClick=!0,e.flag.canDrag=!0,e.boundingRect=e.ref.getBoundingClientRect(),e.ref.style.transition="",e.drag.start=e.drag.x=z(t.nativeEvent),e.drag.removalDistance=e.ref.offsetWidth*(e.props.draggablePercent/100)},e.onDragMove=function(t){e.flag.canDrag&&(e.state.isRunning&&e.pauseToast(),e.drag.x=z(t),e.drag.deltaX=e.drag.x-e.drag.start,e.drag.y=G(t),e.drag.start!==e.drag.x&&(e.flag.canCloseOnClick=!1),e.ref.style.transform="translateX("+e.drag.deltaX+"px)",e.ref.style.opacity=1-Math.abs(e.drag.deltaX/e.drag.removalDistance))},e.onDragEnd=function(t){if(e.flag.canDrag){if(e.flag.canDrag=!1,Math.abs(e.drag.deltaX)>e.drag.removalDistance)return void e.setState({preventExitTransition:!0},e.props.closeToast);e.ref.style.transition="transform 0.2s, opacity 0.2s",e.ref.style.transform="translateX(0)",e.ref.style.opacity=1}},e.onDragTransitionEnd=function(){if(e.boundingRect){var t=e.boundingRect,n=t.top,o=t.bottom,s=t.left,a=t.right;e.props.pauseOnHover&&e.drag.x>=s&&e.drag.x<=a&&e.drag.y>=n&&e.drag.y<=o?e.pauseToast():e.playToast()}},e.onExitTransitionEnd=function(){if(Q)e.props.onExited();else{var t=e.ref.scrollHeight,n=e.ref.style;requestAnimationFrame((function(){n.minHeight="initial",n.height=t+"px",n.transition="all 0.4s ",requestAnimationFrame((function(){n.height=0,n.padding=0,n.margin=0})),setTimeout((function(){return e.props.onExited()}),400)}))}},e}Object(a.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.props.onOpen(this.props.children.props),this.props.draggable&&this.bindDragEvents(),this.props.pauseOnFocusLoss&&this.bindFocusEvents()},n.componentDidUpdate=function(t){t.draggable!==this.props.draggable&&(this.props.draggable?this.bindDragEvents():this.unbindDragEvents()),t.pauseOnFocusLoss!==this.props.pauseOnFocusLoss&&(this.props.pauseOnFocusLoss?this.bindFocusEvents():this.unbindFocusEvents())},n.componentWillUnmount=function(){this.props.onClose(this.props.children.props),this.props.draggable&&this.unbindDragEvents(),this.props.pauseOnFocusLoss&&this.unbindFocusEvents()},n.bindFocusEvents=function(){window.addEventListener("focus",this.playToast),window.addEventListener("blur",this.pauseToast)},n.unbindFocusEvents=function(){window.removeEventListener("focus",this.playToast),window.removeEventListener("blur",this.pauseToast)},n.bindDragEvents=function(){document.addEventListener("mousemove",this.onDragMove),document.addEventListener("mouseup",this.onDragEnd),document.addEventListener("touchmove",this.onDragMove),document.addEventListener("touchend",this.onDragEnd)},n.unbindDragEvents=function(){document.removeEventListener("mousemove",this.onDragMove),document.removeEventListener("mouseup",this.onDragEnd),document.removeEventListener("touchmove",this.onDragMove),document.removeEventListener("touchend",this.onDragEnd)},n.render=function(){var t,e=this,n=this.props,s=n.closeButton,a=n.children,i=n.autoClose,l=n.pauseOnHover,u=n.onClick,c=n.closeOnClick,d=n.type,f=n.hideProgressBar,h=n.closeToast,g=n.transition,m=n.position,b=n.className,y=n.bodyClassName,v=n.progressClassName,E=n.progressStyle,T=n.updateId,O=n.role,x=n.progress,C=n.rtl,N={className:p()("Toastify__toast","Toastify__toast--"+d,(t={},t["Toastify__toast--rtl"]=C,t),b)};i&&l&&(N.onMouseEnter=this.pauseToast,N.onMouseLeave=this.playToast),c&&(N.onClick=function(t){u&&u(t),e.flag.canCloseOnClick&&h()});var j=parseFloat(x)===x;return r.a.createElement(g,{in:this.props.in,appear:!0,onExited:this.onExitTransitionEnd,position:m,preventExitTransition:this.state.preventExitTransition},r.a.createElement("div",Object(o.a)({onClick:u},N,{ref:function(t){return e.ref=t},onMouseDown:this.onDragStart,onTouchStart:this.onDragStart,onMouseUp:this.onDragTransitionEnd,onTouchEnd:this.onDragTransitionEnd}),r.a.createElement("div",Object(o.a)({},this.props.in&&{role:O},{className:p()("Toastify__toast-body",y)}),a),s&&s,(i||j)&&r.a.createElement(V,Object(o.a)({},T&&!j?{key:"pb-"+T}:{},{rtl:C,delay:i,isRunning:this.state.isRunning,closeToast:h,hide:f,type:d,style:E,className:v,controlledProgress:j,progress:x}))))},e}(i.Component);function Y(t){var e=t.closeToast,n=t.type,o=t.ariaLabel;return r.a.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":o},"\u2716\ufe0e")}W.propTypes={closeButton:u.a.oneOfType([u.a.node,u.a.bool]).isRequired,autoClose:H.isRequired,children:u.a.node.isRequired,closeToast:u.a.func.isRequired,position:u.a.oneOf(B(_)).isRequired,pauseOnHover:u.a.bool.isRequired,pauseOnFocusLoss:u.a.bool.isRequired,closeOnClick:u.a.bool.isRequired,transition:u.a.func.isRequired,rtl:u.a.bool.isRequired,hideProgressBar:u.a.bool.isRequired,draggable:u.a.bool.isRequired,draggablePercent:u.a.number.isRequired,in:u.a.bool,onExited:u.a.func,onOpen:u.a.func,onClose:u.a.func,type:u.a.oneOf(B(S)),className:u.a.oneOfType([u.a.string,u.a.object]),bodyClassName:u.a.oneOfType([u.a.string,u.a.object]),progressClassName:u.a.oneOfType([u.a.string,u.a.object]),progressStyle:u.a.object,progress:u.a.number,updateId:u.a.oneOfType([u.a.string,u.a.number]),ariaLabel:u.a.string,containerId:u.a.oneOfType([u.a.string,u.a.number]),role:u.a.string},W.defaultProps={type:S.DEFAULT,in:!0,onOpen:F,onClose:F,className:null,bodyClassName:null,progressClassName:null,updateId:null},Y.propTypes={closeToast:u.a.func,arialLabel:u.a.string},Y.defaultProps={ariaLabel:"close"};var J=X({enter:"Toastify__bounce-enter",exit:"Toastify__bounce-exit",appendPosition:!0}),K=(X({enter:"Toastify__slide-enter",exit:"Toastify__slide-exit",duration:[450,750],appendPosition:!0}),X({enter:"Toastify__zoom-enter",exit:"Toastify__zoom-exit"}),X({enter:"Toastify__flip-enter",exit:"Toastify__flip-exit"}),function(t){function e(){for(var e,n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))||this).state={toast:[]},e.toastKey=1,e.collection={},e.isToastActive=function(t){return-1!==e.state.toast.indexOf(t)},e}Object(a.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;U.cancelEmit(w).on(R,(function(e,n){return t.ref?t.buildToast(e,n):null})).on(L,(function(e){return t.ref?null==e?t.clear():t.removeToast(e):null})).emit(P,this)},n.componentWillUnmount=function(){U.emit(w,this)},n.removeToast=function(t){this.setState({toast:this.state.toast.filter((function(e){return e!==t}))},this.dispatchChange)},n.dispatchChange=function(){U.emit(I,this.state.toast.length,this.props.containerId)},n.makeCloseButton=function(t,e,n){var o=this,s=this.props.closeButton;return Object(i.isValidElement)(t)||!1===t?s=t:!0===t&&(s=this.props.closeButton&&"boolean"!==typeof this.props.closeButton?this.props.closeButton:r.a.createElement(Y,null)),!1!==s&&Object(i.cloneElement)(s,{closeToast:function(){return o.removeToast(e)},type:n})},n.getAutoCloseDelay=function(t){return!1===t||M(t)?t:this.props.autoClose},n.canBeRendered=function(t){return Object(i.isValidElement)(t)||"string"===typeof t||"number"===typeof t||"function"===typeof t},n.parseClassName=function(t){return"string"===typeof t?t:null!==t&&"object"===typeof t&&"toString"in t?t.toString():null},n.belongToContainer=function(t){return t.containerId===this.props.containerId},n.buildToast=function(t,e){var n=this,o=e.delay,a=Object(s.a)(e,["delay"]);if(!this.canBeRendered(t))throw new Error("The element you provided cannot be rendered. You provided an element of type "+typeof t);var r=a.toastId,l=a.updateId;if(!(this.props.enableMultiContainer&&!this.belongToContainer(a)||this.isToastActive(r)&&null==l)){var u=function(){return n.removeToast(r)},c={id:r,key:a.key||this.toastKey++,type:a.type,closeToast:u,updateId:a.updateId,rtl:this.props.rtl,position:a.position||this.props.position,transition:a.transition||this.props.transition,className:this.parseClassName(a.className||this.props.toastClassName),bodyClassName:this.parseClassName(a.bodyClassName||this.props.bodyClassName),onClick:a.onClick||this.props.onClick,closeButton:this.makeCloseButton(a.closeButton,r,a.type),pauseOnHover:"boolean"===typeof a.pauseOnHover?a.pauseOnHover:this.props.pauseOnHover,pauseOnFocusLoss:"boolean"===typeof a.pauseOnFocusLoss?a.pauseOnFocusLoss:this.props.pauseOnFocusLoss,draggable:"boolean"===typeof a.draggable?a.draggable:this.props.draggable,draggablePercent:"number"!==typeof a.draggablePercent||isNaN(a.draggablePercent)?this.props.draggablePercent:a.draggablePercent,closeOnClick:"boolean"===typeof a.closeOnClick?a.closeOnClick:this.props.closeOnClick,progressClassName:this.parseClassName(a.progressClassName||this.props.progressClassName),progressStyle:this.props.progressStyle,autoClose:this.getAutoCloseDelay(a.autoClose),hideProgressBar:"boolean"===typeof a.hideProgressBar?a.hideProgressBar:this.props.hideProgressBar,progress:parseFloat(a.progress),role:"string"===typeof a.role?a.role:this.props.role};"function"===typeof a.onOpen&&(c.onOpen=a.onOpen),"function"===typeof a.onClose&&(c.onClose=a.onClose),Object(i.isValidElement)(t)&&"string"!==typeof t.type&&"number"!==typeof t.type?t=Object(i.cloneElement)(t,{closeToast:u}):"function"===typeof t&&(t=t({closeToast:u})),M(o)?setTimeout((function(){n.appendToast(c,t,a.staleToastId)}),o):this.appendToast(c,t,a.staleToastId)}},n.appendToast=function(t,e,n){var s,a=t.id,i=t.updateId;this.collection=Object(o.a)({},this.collection,((s={})[a]={options:t,content:e,position:t.position},s)),this.setState({toast:(i?[].concat(this.state.toast):[].concat(this.state.toast,[a])).filter((function(t){return t!==n}))},this.dispatchChange)},n.clear=function(){this.setState({toast:[]})},n.renderToast=function(){var t=this,e={},n=this.props,s=n.className,a=n.style;return(n.newestOnTop?Object.keys(this.collection).reverse():Object.keys(this.collection)).forEach((function(n){var s=t.collection[n],a=s.position,i=s.options,l=s.content;e[a]||(e[a]=[]),-1!==t.state.toast.indexOf(i.id)?e[a].push(r.a.createElement(W,Object(o.a)({},i,{isDocumentHidden:t.state.isDocumentHidden,key:"toast-"+i.key}),l)):(e[a].push(null),delete t.collection[n])})),Object.keys(e).map((function(n){var i,l=1===e[n].length&&null===e[n][0],u={className:p()("Toastify__toast-container","Toastify__toast-container--"+n,(i={},i["Toastify__toast-container--rtl"]=t.props.rtl,i),t.parseClassName(s)),style:l?Object(o.a)({},a,{pointerEvents:"none"}):Object(o.a)({},a)};return r.a.createElement(D,Object(o.a)({},u,{key:"container-"+n}),e[n])}))},n.render=function(){var t=this;return r.a.createElement("div",{ref:function(e){return t.ref=e},className:"Toastify"},this.renderToast())},e}(i.Component));K.propTypes={position:u.a.oneOf(B(_)),autoClose:H,closeButton:u.a.oneOfType([u.a.node,u.a.bool]),hideProgressBar:u.a.bool,pauseOnHover:u.a.bool,closeOnClick:u.a.bool,newestOnTop:u.a.bool,className:u.a.oneOfType([u.a.string,u.a.object]),style:u.a.object,toastClassName:u.a.oneOfType([u.a.string,u.a.object]),bodyClassName:u.a.oneOfType([u.a.string,u.a.object]),progressClassName:u.a.oneOfType([u.a.string,u.a.object]),progressStyle:u.a.object,transition:u.a.func,rtl:u.a.bool,draggable:u.a.bool,draggablePercent:u.a.number,pauseOnFocusLoss:u.a.bool,enableMultiContainer:u.a.bool,containerId:u.a.oneOfType([u.a.string,u.a.number]),role:u.a.string,onClick:u.a.func},K.defaultProps={position:_.TOP_RIGHT,transition:J,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:r.a.createElement(Y,null),pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,className:null,style:null,toastClassName:null,bodyClassName:null,progressClassName:null,progressStyle:null,role:"alert"};var Z=new Map,$=null,tt=null,et={},nt=[],ot=!1;function st(){return Z.size>0}function at(t,e){var n=function(t){return st()?t?Z.get(t):Z.get($):null}(e.containerId);if(!n)return null;var o=n.collection[t];return"undefined"===typeof o?null:o}function it(t,e){return Object(o.a)({},t,{type:e,toastId:lt(t)})}function rt(){return(Math.random().toString(36)+Date.now().toString(36)).substr(2,10)}function lt(t){return t&&("string"===typeof t.toastId||"number"===typeof t.toastId&&!isNaN(t.toastId))?t.toastId:rt()}function ut(t,e){return st()?U.emit(R,t,e):(nt.push({action:R,content:t,options:e}),ot&&q&&(ot=!1,tt=document.createElement("div"),document.body.appendChild(tt),Object(h.render)(r.a.createElement(K,et),tt))),e.toastId}var ct=function(t,e){return ut(t,it(e,e&&e.type||S.DEFAULT))},pt=function(t){S[t]!==S.DEFAULT&&(ct[S[t].toLowerCase()]=function(e,n){return ut(e,it(n,n&&n.type||S[t]))})};for(var dt in S)pt(dt);ct.warn=ct.warning,ct.dismiss=function(t){return void 0===t&&(t=null),st()&&U.emit(L,t)},ct.isActive=function(t){var e=!1;return Z.size>0&&Z.forEach((function(n){n.isToastActive(t)&&(e=!0)})),e},ct.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=at(t,e);if(n){var s=n.options,a=n.content,i=Object(o.a)({},s,{},e,{toastId:e.toastId||t});e.toastId&&e.toastId!==t?i.staleToastId=t:i.updateId=rt();var r="undefined"!==typeof i.render?i.render:a;delete i.render,ut(r,i)}}),0)},ct.done=function(t){ct.update(t,{progress:1})},ct.onChange=function(t){"function"===typeof t&&U.on(I,t)},ct.configure=function(t){ot=!0,et=t},ct.POSITION=_,ct.TYPE=S,U.on(P,(function(t){$=t.props.containerId||t,Z.set($,t),nt.forEach((function(t){U.emit(t.action,t.content,t.options)})),nt=[]})).on(w,(function(t){t?Z.delete(t.props.containerId||t):Z.clear(),0===Z.size&&U.off(R).off(L),q&&tt&&document.body.removeChild(tt)}))}}]);