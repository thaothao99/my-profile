(this["webpackJsonpmy-profile"]=this["webpackJsonpmy-profile"]||[]).push([[6],{35:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n(0),a=n.n(r),c=n(76),o=n(77);function l(){return a.a.createElement("div",{className:"container skill-container"},a.a.createElement("h2",null,"A Little More About Me"),a.a.createElement(c.a,{className:"my-edu"},a.a.createElement(o.a,{span:18,push:6,className:"right"},a.a.createElement("h4",null,a.a.createElement("i",null,"Soft skills")),a.a.createElement("ul",null,a.a.createElement("li",null,"Confidence and eager to learn."),a.a.createElement("li",null,"Speaking in public and organizing activities."),a.a.createElement("li",null,"Work in partnership with experts and agencies."),a.a.createElement("li",null,"Approaching with professional enterprise environment to improve knowledge."))),a.a.createElement(o.a,{span:6,pull:18,className:"left"},a.a.createElement("div",null,a.a.createElement("h4",null,a.a.createElement("i",null,"Interest")),a.a.createElement("p",null,"Photography, Traveling, Volunteer, Reading, Listening, Dacing...")))))}},64:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)({});t.a=a},65:function(e,t,n){var r=n(68),a=n(69),c=n(30),o=n(70);e.exports=function(e,t){return r(e)||a(e,t)||c(e,t)||o()}},66:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t}},68:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},69:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(i){a=!0,c=i}finally{try{r||null==l.return||l.return()}finally{if(a)throw c}}return n}}},70:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},76:function(e,t,n){"use strict";var r=n(1),a=n.n(r),c=n(4),o=n.n(c),l=n(14),i=n.n(l),s=n(65),u=n.n(s),f=n(0),p=n(2),d=n.n(p),m=n(62),h=n(64),v=n(66),y=["xxl","xl","lg","md","sm","xs"],b={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},g=new Map,x=-1,E={},w={matchHandlers:{},dispatch:function(e){return E=e,g.forEach((function(e){return e(E)})),g.size>=1},subscribe:function(e){return g.size||this.register(),x+=1,g.set(x,e),e(E),x},unsubscribe:function(e){g.delete(e),g.size||this.unregister()},unregister:function(){var e=this;Object.keys(b).forEach((function(t){var n=b[t],r=e.matchHandlers[n];null===r||void 0===r||r.mql.removeListener(null===r||void 0===r?void 0:r.listener)})),g.clear()},register:function(){var e=this;Object.keys(b).forEach((function(t){var n=b[t],r=function(n){var r=n.matches;e.dispatch(a()(a()({},E),o()({},t,r)))},c=window.matchMedia(n);c.addListener(r),e.matchHandlers[n]={mql:c,listener:r},r(c)}))}},O=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},j=(Object(v.a)("top","middle","bottom","stretch"),Object(v.a)("start","end","center","space-around","space-between"),f.forwardRef((function(e,t){var n=f.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),r=u()(n,2),c=r[0],l=r[1],s=f.useRef();s.current=e.gutter,f.useEffect((function(){var e=w.subscribe((function(e){var t=s.current||0;(!Array.isArray(t)&&"object"===i()(t)||Array.isArray(t)&&("object"===i()(t[0])||"object"===i()(t[1])))&&l(e)}));return function(){w.unsubscribe(e)}}),[]);var p=function(n){var r,l=n.getPrefixCls,s=n.direction,u=e.prefixCls,p=e.justify,m=e.align,v=e.className,b=e.style,g=e.children,x=O(e,["prefixCls","justify","align","className","style","children"]),E=l("row",u),w=function(){var t=[0,0],n=e.gutter,r=void 0===n?0:n;return(Array.isArray(r)?r:[r,0]).forEach((function(e,n){if("object"===i()(e))for(var r=0;r<y.length;r++){var a=y[r];if(c[a]&&void 0!==e[a]){t[n]=e[a];break}}else t[n]=e||0})),t}(),j=d()(E,(r={},o()(r,"".concat(E,"-").concat(p),p),o()(r,"".concat(E,"-").concat(m),m),o()(r,"".concat(E,"-rtl"),"rtl"===s),r),v),A=a()(a()(a()({},w[0]>0?{marginLeft:w[0]/-2,marginRight:w[0]/-2}:{}),w[1]>0?{marginTop:w[1]/-2,marginBottom:w[1]/2}:{}),b),N=a()({},x);return delete N.gutter,f.createElement(h.a.Provider,{value:{gutter:w}},f.createElement("div",a()({},N,{className:j,style:A,ref:t}),g))};return f.createElement(m.a,null,p)})));j.displayName="Row";var A=j;t.a=A},77:function(e,t,n){"use strict";var r=n(4),a=n.n(r),c=n(1),o=n.n(c),l=n(14),i=n.n(l),s=n(0),u=n(2),f=n.n(u),p=n(64),d=n(62),m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var h=s.forwardRef((function(e,t){var n=function(n){var r,c=n.getPrefixCls,l=n.direction,u=e.prefixCls,d=e.span,h=e.order,v=e.offset,y=e.push,b=e.pull,g=e.className,x=e.children,E=e.flex,w=e.style,O=m(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),j=c("col",u),A={};["xs","sm","md","lg","xl","xxl"].forEach((function(t){var n,r={},c=e[t];"number"===typeof c?r.span=c:"object"===i()(c)&&(r=c||{}),delete O[t],A=o()(o()({},A),(n={},a()(n,"".concat(j,"-").concat(t,"-").concat(r.span),void 0!==r.span),a()(n,"".concat(j,"-").concat(t,"-order-").concat(r.order),r.order||0===r.order),a()(n,"".concat(j,"-").concat(t,"-offset-").concat(r.offset),r.offset||0===r.offset),a()(n,"".concat(j,"-").concat(t,"-push-").concat(r.push),r.push||0===r.push),a()(n,"".concat(j,"-").concat(t,"-pull-").concat(r.pull),r.pull||0===r.pull),a()(n,"".concat(j,"-rtl"),"rtl"===l),n))}));var N=f()(j,(r={},a()(r,"".concat(j,"-").concat(d),void 0!==d),a()(r,"".concat(j,"-order-").concat(h),h),a()(r,"".concat(j,"-offset-").concat(v),v),a()(r,"".concat(j,"-push-").concat(y),y),a()(r,"".concat(j,"-pull-").concat(b),b),r),g,A);return s.createElement(p.a.Consumer,null,(function(e){var n=e.gutter,r=o()({},w);return n&&(r=o()(o()(o()({},n[0]>0?{paddingLeft:n[0]/2,paddingRight:n[0]/2}:{}),n[1]>0?{paddingTop:n[1]/2,paddingBottom:n[1]/2}:{}),r)),E&&(r.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(E)),s.createElement("div",o()({},O,{style:r,className:N,ref:t}),x)}))};return s.createElement(d.a,null,n)}));h.displayName="Col";var v=h;t.a=v}}]);
//# sourceMappingURL=6.63b4c165.chunk.js.map