!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="./",r(r.s=6)}([function(t,e){Date.prototype.formatting=function(t){var e=this.getFullYear().toString();t=t.replace(/yyyy/g,e);var r=(this.getMonth()+1).toString();t=t.replace(/mm/g,r[1]?r:"0"+r[0]);var n=this.getDate().toString();t=t.replace(/dd/g,n[1]?n:"0"+n[0]);var o=this.getHours().toString();t=t.replace(/hh/g,o[1]?o:"0"+o[0]);var i=this.getMinutes().toString();t=t.replace(/ii/g,i[1]?i:"0"+i[0]);var a=this.getSeconds().toString();return t=t.replace(/ss/g,a[1]?a:"0"+a[0])},CanvasRenderingContext2D.prototype.roundRect=function(t,e,r,n,o){return r<2*o&&(o=r/2),n<2*o&&(o=n/2),this.beginPath(),this.moveTo(t+o,e),this.arcTo(t+r,e,t+r,e+n,o),this.arcTo(t+r,e+n,t,e+n,o),this.arcTo(t,e+n,t,e,o),this.arcTo(t,e,t+r,e,o),this.closePath(),this}},function(t,e,r){var n=r(2);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(4)(n,o);n.locals&&(t.exports=n.locals)},function(t,e,r){(t.exports=r(3)(!1)).push([t.i,"*{-webkit-box-sizing:border-box;box-sizing:border-box}body,html{margin:0 0;height:100%;width:100%;overflow:hidden}.container{height:100%;width:100%}.charts{height:100%;font-size:0}.chart{width:50%;height:50%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block}.chart canvas{height:100%;width:100%}\n",""])},function(t,e,r){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var o=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=n.sources.map((function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"}));return[r].concat(i).concat([o]).join("\n")}var a;return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r})).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(n[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];null!=a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(t,e,r){var n,o,i={},a=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),l=function(t,e){return e?e.querySelector(t):document.querySelector(t)},s=function(t){var e={};return function(t,r){if("function"==typeof t)return t();if(void 0===e[t]){var n=l.call(this,t,r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),f=null,c=0,u=[],h=r(5);function d(t,e){for(var r=0;r<t.length;r++){var n=t[r],o=i[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(m(n.parts[a],e))}else{var l=[];for(a=0;a<n.parts.length;a++)l.push(m(n.parts[a],e));i[n.id]={id:n.id,refs:1,parts:l}}}}function p(t,e){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],l={css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(l):r.push(n[a]={id:a,parts:[l]})}return r}function v(t,e){var r=s(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=u[u.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),u.push(e);else if("bottom"===t.insertAt)r.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertAt.before,r);r.insertBefore(e,o)}}function y(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function b(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return r.nc}();n&&(t.attrs.nonce=n)}return g(e,t.attrs),v(t,e),e}function g(t,e){Object.keys(e).forEach((function(r){t.setAttribute(r,e[r])}))}function m(t,e){var r,n,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=c++;r=f||(f=b(e)),n=S.bind(null,r,a,!1),o=S.bind(null,r,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),v(t,e),e}(e),n=O.bind(null,r,e),o=function(){y(r),r.href&&URL.revokeObjectURL(r.href)}):(r=b(e),n=P.bind(null,r),o=function(){y(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=p(t,e);return d(r,e),function(t){for(var n=[],o=0;o<r.length;o++){var a=r[o];(l=i[a.id]).refs--,n.push(l)}t&&d(p(t,e),e);for(o=0;o<n.length;o++){var l;if(0===(l=n[o]).refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete i[l.id]}}}};var w,x=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function S(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function P(t,e){var r=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}function O(t,e,r){var n=r.css,o=r.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(n=h(n)),o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),l=t.href;t.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,n=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(t,e,r){"use strict";r.r(e);r(0);function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=function t(e,r){for(var n in r)try{r[n].constructor==Object?e[n]=t(e[n],r[n]):e[n]=r[n]}catch(t){e[n]=r[n]}return e},i=function t(e){if("object"!=n(e))return e;if(!e)return e;var r=e instanceof Array?[]:{};for(var o in e)e.hasOwnProperty(o)&&(r[o]=t(e[o]));return r},a=function(){for(var t="#",e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t},l=function(t,e,r,n){return{x:t+Math.cos(n)*r,y:e+Math.sin(n)*r}},s=function(t,e){return e=parseInt(e),"#"+t.replace(/^#/,"").replace(/../g,(function(t){return("0"+Math.min(255,Math.max(0,parseInt(t,16)+e)).toString(16)).substr(-2)}))},f=function(t){return"[object Function]"==={}.toString.call(t)},c=function(t){if(4===t.length){for(var e="#",r=1;r<=t.length-1;r++)e+=t[r]+t[r];t=e}return t},u={offset:{top:20,right:20,bottom:40,left:60},grid:{enable:!0,offset:{top:20,right:0,bottom:20,left:0},styles:{background:"",borderColor:"#2b2a49",borderRadius:5,borderWidth:2},horizontal:{step:4,enable:!0},vertical:{step:10,enable:!0}},labels:{enable:!0,styles:{color:"#fff",fontSize:12}},values:{enable:!0,digits:2,styles:{color:"#fff",fontSize:12}},data:{enable:!0,offset:0,digits:2,line:{offset:{left:0,top:0,right:0,bottom:0},dots:{enable:!0,width:5,hover:{enable:!0,width:3}},styles:{lineWidth:2}},bar:{offset:10,hover:{enable:!0,value:50}}}},h={animated:!0,view:{styles:{background:"#1a1e30"}},data:{hover:{enable:!0}},tooltip:{enable:!0,styles:{color:"#ffffff",background:"#403f4c",borderColor:"#fff",borderWidth:0,borderRadius:3,fontSize:12,padding:{top:10,right:10,bottom:10,left:10}}}};function d(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var v=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var r=e.canvas,n=void 0!==r&&r,a=e.data,l=void 0===a?{}:a,s=e.defaultSettings,f=void 0===s?{}:s,c=e.settings,u=void 0===c?{}:c,d=e.actions,p=void 0===d?{}:d,v=e.type;this.type=v,this.actions=p,this.canvas={element:n,context:n.getContext("2d"),isCanvas:(n instanceof Element||n instanceof HTMLDocument)&&"canvas"===n.tagName.toLowerCase()},this.cursor={x:0,y:0},this.settings=o(i(h),i(f)),this.timeStamp=+new Date,this.setSettings(u),this.state={loading:this.settings.animated?0:1},this.data=this.prepareData(l),this.commonInit()}var e,r,n;return e=t,(r=[{key:"prepareData",value:function(t){return t}},{key:"setSettings",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this.settings,t),this.render({from:"setSettings"})}},{key:"getSettings",value:function(){return this.settings}},{key:"setData",value:function(t){this.data=this.prepareData(t),this.render({from:"setData"})}},{key:"getData",value:function(){return this.data}},{key:"setRatio",value:function(){var t=this.canvas,e=t.context,r=t.element,n=window.devicePixelRatio||1;r.width=r.clientWidth*n,r.height=r.clientHeight*n,e.scale(n,n)}},{key:"clearCanvas",value:function(){var t=this.canvas,e=t.context;t.element,e.clearRect(0,0,t.width,t.height)}},{key:"loading",value:function(){var t=this;this.state.loading>=1||setTimeout((function(){t.state.loading+=.03,t.state.loading=t.state.loading>1?1:t.state.loading,t.render({from:"loading"}),t.loading()}),1e3/60)}},{key:"commonInit",value:function(){this.render({from:"commonInit"}),this.loading(),this.commonListeners()}},{key:"commonListeners",value:function(){var t=this,e=this.canvas,r=(e.context,e.element);window.addEventListener("resize",(function(){t.render({from:"resize"})})),r.addEventListener("mousemove",(function(e){t.settings;var n=r.getBoundingClientRect(),o=e.clientX-n.left,i=e.clientY-n.top;t.cursor={x:o,y:i},t.render({from:"mousemove"})})),r.addEventListener("mouseout",(function(e){t.cursor={x:0,y:0},t.render({from:"mouseout"})}))}},{key:"drawTooltip",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.title,r=void 0===e?"":e,n=t.panels,o=void 0===n?[]:n,i=t.x,a=t.y,l=t.render,c=this.canvas,u=this.settings,h=(this.data,this.cursor),p=c.element,v=c.context,y=u.tooltip,b=y.styles;if(i||(i=h.x),a||(a=h.y),y&&y.enable){v.font="100 "+b.fontSize+"px arial",v.textAlign="left",v.textBaseline="middle";var g=function(){var t;r&&r.text?(r.width=v.measureText(r.text).width+b.padding.left+b.padding.right+b.borderWidth,r.height=2*b.padding.top+1.286*b.fontSize+b.borderWidth/2,r.x=b.padding.left+b.borderWidth/2,r.y=r.height/2+b.borderWidth/2):r={width:0,height:0},o.length&&o.forEach((function(t,e){if(t.width=0,t.height=0,t.x=function(){for(var t=0,r=e-1;r>=0;r--)t+=o[r].width;return t}(),t.y=r.height,t.colorPanel&&t.colorPanel.color&&(t.colorPanel.height=3,t.colorPanel.x=b.borderWidth/2,t.colorPanel.y=0,t.height+=t.colorPanel.height),t.texts&&t.texts.forEach((function(e,r){if(e.text){var n=v.measureText(e.text).width+b.borderWidth;t.width<n&&(t.width=n),e.height=1.286*b.fontSize,e.x=b.padding.left+b.borderWidth/2,e.y=t.height+e.height/2,r||(e.height+=b.padding.top,e.y+=b.padding.top),r===t.texts.length-1&&(e.height+=b.padding.bottom),t.height+=e.height}})),t.footer&&t.footer.text){var n=v.measureText(t.footer.text).width+b.borderWidth;t.width<n&&(t.width=n),t.footer.height=b.padding.bottom+1.286*b.fontSize,t.footer.x=b.padding.left+b.borderWidth/2,t.footer.y=t.height+t.footer.height/2-b.padding.bottom/2,t.height+=t.footer.height+b.borderWidth/2}t.width+=b.padding.left+b.padding.right}));var e=o.reduce((function(t,e){return t+e.width}),0);if(r.width>e){for(var n=r.width/o.length,i=0,a=0,l=0;l<=o.length-1;l++)o[l].width>=n?a+=o[l].width-n:i++;for(var s=function(t){o[t].width=o[t].width<n?n-a/i:o[t].width,o[t].x=function(){for(var e=0,r=t-1;r>=0;r--)e+=o[r].width;return e}()},f=0;f<=o.length-1;f++)s(f)}return t=r.height+(o.length?Math.max.apply(Math,d(o.map((function(t){return t.height})))):0),{width:Math.max(r.width,e),height:t}}(),m=g.width,w=g.height,x=i,S=10,P=i-m/2,O=!1,T=a-w-S;T<b.borderWidth&&(O=!0,T=a+S),P+m>p.clientWidth-b.borderWidth/2&&(P=p.clientWidth-m-b.borderWidth/2),P<b.borderWidth/2&&(P=b.borderWidth/2),v.fillStyle=b.background,v.strokeStyle=b.borderWidth>0?b.borderColor:"transparent",v.lineWidth=b.borderWidth,v.beginPath(),v.roundRect(P,T,m,w,b.borderRadius),v.closePath(),v.fill(),v.stroke(),O?(v.beginPath(),v.moveTo(x-5,T),v.lineTo(x,T-5),v.lineTo(x+5,T),v.fill(),v.stroke(),v.beginPath(),v.moveTo(x-5+b.borderWidth/4,T+b.borderWidth/2),v.lineTo(x,T-5+b.borderWidth/1.5),v.lineTo(x+5-b.borderWidth/4,T+b.borderWidth/2),v.fill()):(v.beginPath(),v.moveTo(x-5,T+w),v.lineTo(x,T+w+5),v.lineTo(x+5,T+w),v.fill(),v.stroke(),v.beginPath(),v.moveTo(x-5+b.borderWidth/4,T+w-b.borderWidth/2),v.lineTo(x,T+w+5-b.borderWidth/1.5),v.lineTo(x+5-b.borderWidth/4,T+w-b.borderWidth/2),v.fill()),v.fillStyle=b.color,r&&r.text&&v.fillText(r.text,P+r.x,T+r.y),o.forEach((function(t){v.fillStyle=b.color,t.colorPanel&&t.colorPanel.color&&(v.save(),v.fillStyle=t.colorPanel.color,v.beginPath(),v.rect(P+t.x+t.colorPanel.x,T+t.y+t.colorPanel.y,t.width-b.borderWidth,t.colorPanel.height),v.fill(),v.restore()),t.texts&&t.texts.forEach((function(e,r){e.text&&v.fillText(e.text,P+t.x+e.x,T+t.y+e.y)})),t.footer&&t.footer.text&&(v.fillStyle=s(b.color,-50),v.fillText(t.footer.text,P+t.x+t.footer.x,T+t.y+t.footer.y))})),l&&f(l)&&l({context:v,styles:b,box:{width:m,height:w,top:T,left:P,bottom:T+w,right:P+m}})}}},{key:"drawBackground",value:function(){var t=this.canvas,e=this.settings.view,r=t.context,n=t.element,o=e.styles.background;r.fillStyle=o,r.fillRect(0,0,n.width,n.height)}},{key:"hover",value:function(t){var e,r,n,o,i=t.item,a=t.isHovered,l=this.settings;a&&(null==l?void 0:null===(e=l.data)||void 0===e?void 0:null===(r=e.hover)||void 0===r?void 0:r.enable)?(i.hasOwnProperty("state")||(i.state=0),null==l||null===(n=l.data)||void 0===n||null===(o=n.hover)||void 0===o||o.value,l.animated?i.state<1&&(i.state+=.05,i.state>1&&(i.state=1),this.render({from:"Animated increase state"})):(i.state=1,this.render({from:"Increase state"}))):l.animated?i.state>0&&(i.state-=.05,i.state<0&&(i.state=0),this.render({from:"Animated decrease state"})):(i.state=0,this.render({from:"Decrease state"}))}},{key:"baseRender",value:function(){this.setRatio(),this.clearCanvas(),this.drawBackground()}}])&&p(e.prototype,r),n&&p(e,n),t}();function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(r,!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function w(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function x(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function S(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function P(t,e,r){return(P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(r):o.value}})(t,e,r||t)}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function T(t,e){return(T=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var j=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t.defaultSettings=u,S(this,O(e).call(this,t))}var r,n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&T(t,e)}(e,t),r=e,(n=[{key:"prepareData",value:function(t){var e=Math.max.apply(Math,w(t.datasets.map((function(t){return(t.values||[]).length}))));w(t.datasets.map((function(t){return t.values}))).map((function(t,r){if(t.length<e)for(var n=e-t.length-1,o=0;o<=n;o++)t.push(r?0:"")})),t.datasets.forEach((function(t){t.color||(t.color=a()),t.color=c(t.color),t.values.forEach((function(e,r){t.values[r]={name:t.name,color:c(t.color),index:r,value:e,state:0}}))})),t.labels.forEach((function(e,r){t.labels[r]={text:e}}));var r=t.datasets.filter((function(t){return"bar"===t.type}));if(r.forEach((function(t,e){t.count=r.length,t.index=e+1})),r.length){this.settings.data.initialValue=0;var n=this.getDrawRect("bar"),o=(n.left,n.width/e);this.settings.data.line.offset.left=o/2,this.settings.data.line.offset.right=o/2}return t}},{key:"getInterpolation",value:function(t,e){var r=this.canvas,n=this.settings,o=n.data,i=n.offset,a=n.grid,l=r.element,s=(r.context,o.line.styles.lineWidth,Math.max.apply(Math,w(e))),f=Math.min.apply(Math,w(e)),c=i.top+a.offset.top+a.styles.borderWidth,u=100*(t*this.state.loading-f*(f>0?this.state.loading:1))/(s-f)/100,h=l.clientHeight-i.top-a.offset.top-i.bottom-a.offset.bottom-2*a.styles.borderWidth;return c+h-h*u}},{key:"drawGrid",value:function(){var t=this.canvas,e=this.settings,r=e.grid,n=e.offset,o=t.element,i=t.context,a=r.enable,l=r.horizontal,s=r.vertical,f=r.styles;if(a){i.save();var c=0+n.left,u=o.clientWidth-n.right-n.left,h=0+n.top,d=o.clientHeight-n.bottom-n.top;if(i.lineWidth=f.borderWidth,i.strokeStyle=f.borderColor,i.fillStyle=f.background,f.dash&&i.setLineDash(f.dash),i.beginPath(),i.roundRect(c,h,u,d,f.borderRadius),i.fill(),i.closePath(),i.stroke(),i.restore(),l&&l.enable){i.save();var p=[],v=(o.clientHeight-n.top-n.bottom)/(l.step+1),y=(o.clientHeight-n.top-n.bottom)/l.step,b=n.top,m=g({},f,{},l.styles||{});if("px"===(l.type||r.type))for(var w=1;w<y;w++){var x=b+w*l.step;p.push(x)}else for(var S=1;S<l.step+1;S++){var P=b+S*v;p.push(P)}i.lineWidth=m.borderWidth,i.strokeStyle=m.borderColor,m.dash&&i.setLineDash(m.dash);for(var O=0;O<=p.length-1;O++)i.beginPath(),i.lineTo(0+n.left,p[O]),i.lineTo(o.clientWidth-n.right,p[O]),i.stroke();i.restore()}if(s&&s.enable){i.save();var T=[],j=(o.clientWidth-n.right-n.left)/(s.step+1),k=(o.clientWidth-n.right-n.left)/s.step,W=n.left,E=g({},f,{},s.styles||{});if("px"===(s.type||r.type))for(var M=1;M<k;M++){var R=W+M*s.step;T.push(R)}else for(var A=1;A<s.step+1;A++){var D=W+A*j;T.push(D)}i.lineWidth=E.borderWidth,i.strokeStyle=E.borderColor,E.dash&&i.setLineDash(E.dash);for(var L=0;L<=T.length-1;L++)i.beginPath(),i.lineTo(T[L],0+n.top),i.lineTo(T[L],o.clientHeight-n.bottom),i.stroke();i.restore()}i.restore()}}},{key:"drawLabels",value:function(){var t=this.canvas,e=this.settings,r=this.data,n=e.labels,o=e.offset,i=(e.grid,t.element),a=t.context,l=n.enable,s=n.styles;if(l){var f=this.getDrawRect("line"),c=f.left,u=f.width/(r.labels.length-1),h=i.clientHeight-o.bottom/2;r.labels.forEach((function(t,e){var r=c+(u?u*e:0);a.font="100 "+s.fontSize+"px arial",a.fillStyle=s.color,a.textAlign="center",a.textBaseline="middle",t.xStart=r-u/2,t.xEnd=r+u/2,a.fillText(t.text,r,h)}))}}},{key:"getDatasets",value:function(){return this.data.datasets}},{key:"getAllValues",value:function(){var t=this.settings.data,e=[];return(t.initialValue||0===t.initialValue)&&e.push(t.initialValue),this.getDatasets().reduce((function(t,e){return[].concat(w(t),w(e.values.map((function(t){return t.value}))))}),e)}},{key:"drawValues",value:function(){var t=this.canvas,e=this.settings,r=e.values,n=e.offset,o=(e.grid,t.element,t.context),i=r.enable,a=r.styles,l=r.digits;if(i){var s=n.left/2,f=this.getAllValues(),c=Math.max.apply(Math,w(f)),u=Math.min.apply(Math,w(f));o.font="100 "+a.fontSize+"px arial",o.fillStyle=a.color,o.textAlign="center",o.textBaseline="middle";for(var h=[],d=(c-u)/9,p=0;p<=9;p++){var v=c-d*p;h.push({value:0===p?c:9===p?u:v,x:s,y:this.getInterpolation(v,f)})}h.forEach((function(t){o.fillText(t.value.toFixed(l),t.x,t.y)}))}}},{key:"drawData",value:function(){var t=this,e=this.settings.data.enable,r=this.getDatasets();e&&(r.filter((function(t){return"bar"===t.type})).forEach((function(e){var r=e.type;r=r.toUpperCase(),t["draw"+r]&&t["draw"+r](e)})),r.filter((function(t){return"line"===t.type})).forEach((function(e){var r=e.type;r=r.toUpperCase(),t["draw"+r]&&t["draw"+r](e)})))}},{key:"getDrawRect",value:function(t){var e=this.canvas,r=this.settings,n=r.offset,o=r.grid,i=r.data,a=e.element,l=(e.context,{top:n.top+o.styles.borderWidth,left:n.left+o.styles.borderWidth,right:n.right+o.styles.borderWidth,bottom:n.bottom-o.styles.borderWidth,width:a.clientWidth-n.left-n.right-2*o.styles.borderWidth,height:a.clientHeight-n.top-n.bottom-2*o.styles.borderWidth}),s={top:l.top+o.offset.top,left:l.left+o.offset.left,right:l.right+o.offset.right,bottom:l.bottom-o.offset.bottom,width:l.width-o.offset.left-o.offset.right,height:l.height-o.offset.top-o.offset.bottom},f={view:l,grid:s,bar:s,line:g({},s,{left:s.left+i.line.offset.left,right:s.right+i.line.offset.right,width:s.width-i.line.offset.left-i.line.offset.right})};return t&&f[t]?f[t]:f}},{key:"drawLINE",value:function(t,e){var r,n=this,o=this.canvas,i=this.settings,a=i.data,l=(i.offset,i.grid,o.element),f=o.context,c=a.line,u=c.styles.lineWidth,h=t.values,d=(t.color,this.getDrawRect("line")),p=this.getDrawRect("view"),v=d.left,y=d.width/(1===h.length?1:h.length-1);f.strokeStyle=t.color,f.lineWidth=u,f.lineJoin="round",f.beginPath(),h.forEach((function(t,e){var r=v+y*e,o=n.getInterpolation(t.value,n.getAllValues());t.isFirst=!e,t.isLast=e===h.length-1,t.area={xStart:t.isFirst?p.left:r-y/2,yStart:d.top,xEnd:t.isLast?l.clientWidth-p.right:r+y/2,yEnd:d.top+d.height},n.checkIsHovered(t),e?f.lineTo(r,o):f.moveTo(r,o)})),f.stroke(),(null==c?void 0:null===(r=c.dots)||void 0===r?void 0:r.enable)&&(f.fillStyle=t.color,f.strokeStyle=s(t.color,-50),h.forEach((function(t,e){f.beginPath();var r=v+y*e,o=n.getInterpolation(t.value,n.getAllValues());f.arc(r,o,c.dots.width+(c.dots.hover.enable?c.dots.hover.width*t.state:0),0,2*Math.PI),f.fill(),f.closePath(),f.stroke()})))}},{key:"drawBAR",value:function(t,e){var r=this,n=this.canvas,o=this.settings,i=(this.cursor,o.data),a=n.element,l=n.context,f=i.bar,c=t.values,u=this.getDrawRect("bar"),h=this.getDrawRect("view"),d=u.left,p=u.width/c.length;i.line.offset.left=p/2,i.line.offset.right=p/2,c.forEach((function(e,n){var o;e.isFirst=!n,e.isLast=n===c.length-1,l.beginPath();var i=s(t.color,(null==f?void 0:null===(o=f.hover)||void 0===o?void 0:o.enable)?f.hover.value*e.state:1);l.strokeStyle=i,l.fillStyle=i;var v=p/t.count-f.offset/t.count,y=d+f.offset/2+p*n+v*(t.index-1),b=y,g=y+v,m=r.getInterpolation(e.value,r.getAllValues()),w=r.getInterpolation(0,r.getAllValues());e.area={xStart:e.isFirst?h.left:d+p*n,yStart:u.top,xEnd:e.isLast?a.clientWidth-h.right:d+p*n+v*t.count+f.offset,yEnd:u.top+u.height},r.checkIsHovered(e),l.moveTo(b,w),l.lineTo(b,m),l.lineTo(g,m),l.lineTo(g,w),l.fill()}))}},{key:"checkIsHovered",value:function(t){var r=this.cursor,n=t.area,o=r.x>=n.xStart&&r.x<n.xEnd&&r.y>=n.yStart&&r.y<n.yEnd;return t.isHovered=o,P(O(e.prototype),"hover",this).call(this,{item:t,isHovered:o}),o}},{key:"drawTooltip",value:function(){var t=this.settings,r=this.data,n=this.cursor,o=r.datasets.map((function(t){return t.values.filter((function(t){return t.isHovered}))}));if((o=o.reduce((function(t,e){return[].concat(w(t),w(e))}),[])).length){var i=r.labels.filter((function(t){return t.xStart<=n.x&&t.xEnd>=n.x})),a=i[i.length-1];P(O(e.prototype),"drawTooltip",this).call(this,{title:{text:(null==a?void 0:a.text)||""},panels:o.map((function(e){return{colorPanel:{color:e.color},texts:[{text:"Value: "+e.value.toFixed(t.data.digits)}],footer:{text:e.name}}})),render:function(t){}})}}},{key:"render",value:function(){var t=this,r=(arguments.length>0&&void 0!==arguments[0]&&arguments[0],300);this.renderTimeout&&clearTimeout(this.renderTimeout),this.renderTimeout=setTimeout((function(){P(O(e.prototype),"baseRender",t).call(t),t.drawGrid(),t.drawLabels(),t.drawData(),t.drawValues(),t.drawTooltip()}),r/60)}}])&&x(r.prototype,n),o&&x(r,o),e}(v),k={offset:{top:30,right:30,bottom:30,left:30},data:{volumed:!0,hover:{value:20},styles:{width:80,color:"#fff"}},texts:{center:{enable:!1,text:"100%",styles:{color:"#ffffff",fontSize:30}},slicePercent:{enable:!1,styles:{color:"#ffffff",fontSize:10}}}};function W(t){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function E(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function M(t,e){return!e||"object"!==W(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function R(t,e,r){return(R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=A(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(r):o.value}})(t,e,r||t)}function A(t){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function D(t,e){return(D=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var L=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t.defaultSettings=k,M(this,A(e).call(this,t))}var r,n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&D(t,e)}(e,t),r=e,(n=[{key:"prepareData",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=t.reduce((function(t,e){return t+(parseFloat(e.value)||0)}),0);return t.forEach((function(t){t.percent=100/e*t.value,t.total=e,t.color=t.color||a(),t.state=t.state||0})),t}},{key:"generatePolygon",value:function(t){var e=t.count,r=void 0===e?20:e,n=t.x,o=t.y,i=t.radius,a=t.sliceWidth,s=t.startPi,f=t.endPi,c=[],u=(f-s)/r;u=isFinite(u)?u:0;for(var h=0;h<=r;h++)c.push(l(n,o,i+a/2,s+u*h));for(var d=0;d<=r;d++)c.push(l(n,o,i-a/2,f-u*d));return c}},{key:"isPathHover",value:function(t){for(var e=t.x,r=t.y,n=t.polygon,o=!1,i=0,a=n.length-1;i<n.length;a=i++){var l=n[i].x,s=n[i].y,f=n[a].x,c=n[a].y;s>r!=c>r&&e<(f-l)*(r-s)/(c-s)+l&&(o=!o)}return o}},{key:"drawSlices",value:function(){var t,r,n=this.canvas,o=this.settings,i=this.data,a=this.cursor,f=this.type,c=this.state,u=n.context,h=n.element,d=Math.min(h.clientHeight-o.offset.top-o.offset.bottom-("donut"===f?o.data.styles.width:0),h.clientWidth-o.offset.left-o.offset.right-("donut"===f?o.data.styles.width:0))*c.loading,p=h.clientWidth/2+o.offset.left-o.offset.right,v=h.clientHeight/2+o.offset.top-o.offset.bottom,y=o.data.volumed,b=-Math.PI/2;i=this.prepareData(i),"pie"===f&&(t=d/2,r=d/4),"donut"===f&&(t=o.data.styles.width>=d?d:o.data.styles.width,r=d/2);for(var g=0;g<=i.length-1;g++){var m=b,w=2*Math.PI*c.loading*i[g].percent/100+b,x=o.data.hover.value*i[g].state;i[g].startPi=m,i[g].endPi=w,b=w;var S=this.generatePolygon({x:p,y:v,radius:r+x/2,sliceWidth:t+x,startPi:m,endPi:w}),P=this.isPathHover({x:a.x,y:a.y,polygon:S});i[g].polygon=S,i[g].hovered=P,R(A(e.prototype),"hover",this).call(this,{item:i[g],isHovered:i[g].hovered});var O=[];if(O.push({radius:r+x/2,width:t+x,color:s(i[g].color,x),x:p,y:v,startPi:m,endPi:w}),y){var T=void 0,j=void 0;"donut"===f&&(T=r-t/4+x/2,j=t/2+x),"pie"===f&&(j=2*(T=r-t/6+x/2)),O.push({radius:T,width:j,color:s(i[g].color,-50+x),x:p,y:v,startPi:m,endPi:w})}for(var k=0;k<=O.length-1;k++)u.save(),u.beginPath(),u.strokeStyle=O[k].color,u.lineWidth=O[k].width,u.fillStyle="transparent",u.arc(O[k].x,O[k].y,O[k].radius>0?O[k].radius:0,O[k].startPi,O[k].endPi),u.fill(),u.stroke(),u.restore()}if(o.texts.slicePercent.enable)for(var W=0;W<=i.length-1;W++){u.font="100 "+o.texts.slicePercent.styles.fontSize+"px arial",u.textAlign="center",u.textBaseline="middle",u.fillStyle=o.texts.slicePercent.styles.color;var E=r,M=o.data.hover.value*i[W].state;"donut"===f&&y&&(E+=t/4+M),"donut"!==f||y||(E+=M/2),"pie"===f&&y&&(E+=t/3+M),"pie"!==f||y||(E+=M/2);var D=parseFloat(i[W].percent.toFixed(2))+"%",L=l(p,v,E,(i[W].startPi+i[W].endPi)/2);u.fillText(D,L.x,L.y)}o.texts.center.enable&&(u.font="800 "+o.texts.center.styles.fontSize*c.loading+"px arial",u.textAlign="center",u.textBaseline="middle",u.fillStyle=o.texts.center.styles.color,u.fillText(o.texts.center.text,p,v))}},{key:"drawTooltip",value:function(){var t=this.data.find((function(t){return t.hovered}));t&&R(A(e.prototype),"drawTooltip",this).call(this,{title:{text:t.label},panels:[{colorPanel:{color:t.color},texts:[{text:"Value: "+t.value},{text:"Percent: "+t.percent.toFixed(2)+"%"}],footer:{text:"Total: "+t.total}}],render:function(t){}})}},{key:"render",value:function(){var t=this,r=(arguments.length>0&&void 0!==arguments[0]&&arguments[0],300);this.renderTimeout&&clearTimeout(this.renderTimeout),this.renderTimeout=setTimeout((function(){R(A(e.prototype),"baseRender",t).call(t),t.drawSlices(),t.drawTooltip()}),r/60)}}])&&E(r.prototype,n),o&&E(r,o),e}(v);function _(t){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function C(t,e){return!e||"object"!==_(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function I(t){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function H(t,e){return(H=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var U=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t.type="donut",C(this,I(e).call(this,t))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&H(t,e)}(e,t),e}(L);function z(t){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function B(t,e){return!e||"object"!==z(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function F(t){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function V(t,e){return(V=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var N=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t.type="pie",B(this,F(e).call(this,t))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&V(t,e)}(e,t),e}(L);window.bChart={Plot:j,Donut:U,Pie:N};r(1);window.addEventListener("load",(function(){document.querySelectorAll(".chart-line").forEach((function(t,e){var r=t.querySelector("canvas");new j({data:{labels:function(){for(var t=[],e=0;e<=3;e++)t.push("Label "+parseInt(e+1));return t}(),datasets:[{name:"Some bar data 1",type:"bar",values:function(){for(var t=[],e=0;e<=3;e++)t.push(Math.random()*(Math.random()>.5?1:-1));return t}()},{name:"Some bar data 2",type:"bar",values:function(){for(var t=[],e=0;e<=3;e++)t.push(Math.random()*(Math.random()>.5?1:-1));return t}()},{name:"Some bar data 2",type:"bar",values:function(){for(var t=[],e=0;e<=3;e++)t.push(Math.random()*(Math.random()>.5?1:-1));return t}()},{name:"Some line data line",type:"line",values:function(){for(var t=[],e=0;e<=3;e++)t.push(Math.random()*(Math.random()>.5?1:-1));return t}()},{name:"Some line data line 2",type:"line",values:function(){for(var t=[],e=0;e<=3;e++)t.push(Math.random()*(Math.random()>.5?1:-1));return t}()}]},canvas:r})})),document.querySelectorAll(".chart-donut").forEach((function(t,e){var r=t.querySelector("canvas");new U({canvas:r,settings:{texts:{center:{enable:!0,text:"users"},slicePercent:{enable:!0}}},data:function(){for(var t=[],e=0;e<=10*Math.random();e++)t.push({value:Math.random().toFixed(2),label:"Label "+e});return t}()})})),document.querySelectorAll(".chart-pie").forEach((function(t,e){var r=t.querySelector("canvas");new N({canvas:r,settings:{texts:{center:{enable:!0,text:"users"},slicePercent:{enable:!0}}},data:function(){for(var t=[],e=0;e<=10*Math.random();e++)t.push({value:Math.random().toFixed(2),label:"Label "+e});return t}()})}))}))}])}));