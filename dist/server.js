require("source-map-support").install(),function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("express")},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),u=r(2),i=r.n(u),c=r(1),a=[{path:"/",component:function(){return o.a.createElement("div",null,"Home")}}];function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s=function(){return o.a.createElement(c.Switch,null,a.map((function(e,t){return o.a.createElement(c.Route,l({key:t,exact:!0},e))})))},f=r(3),p=f();p.set("view engine","ejs"),p.set("views","src/views"),p.use("/static",f.static("public")),p.get("*",(function(e,t){t.render("layout",{content:i.a.renderToString(o.a.createElement(c.StaticRouter,{location:e.url,context:{}},o.a.createElement(s,null)))})}));var d=process.env.PORT||4e3;p.listen(d,(function(){console.log("Your node js server is running on ".concat(d," "))}))}]);
//# sourceMappingURL=server.js.map