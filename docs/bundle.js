!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s=6)}([function(t,e){Date.prototype.formatting=function(t){var e=this.getFullYear().toString();t=t.replace(/yyyy/g,e);var n=(this.getMonth()+1).toString();t=t.replace(/mm/g,n[1]?n:"0"+n[0]);var r=this.getDate().toString();t=t.replace(/dd/g,r[1]?r:"0"+r[0]);var o=this.getHours().toString();t=t.replace(/hh/g,o[1]?o:"0"+o[0]);var i=this.getMinutes().toString();t=t.replace(/ii/g,i[1]?i:"0"+i[0]);var s=this.getSeconds().toString();return t=t.replace(/ss/g,s[1]?s:"0"+s[0])},CanvasRenderingContext2D.prototype.roundRect=function(t,e,n,r,o){return n<2*o&&(o=n/2),r<2*o&&(o=r/2),this.beginPath(),this.moveTo(t+o,e),this.arcTo(t+n,e,t+n,e+r,o),this.arcTo(t+n,e+r,t,e+r,o),this.arcTo(t,e+r,t,e,o),this.arcTo(t,e,t+n,e,o),this.closePath(),this}},function(t,e,n){var r=n(2);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"*{-webkit-box-sizing:border-box;box-sizing:border-box}body,html{margin:0 0;height:100%;width:100%;overflow:hidden}canvas{width:100%;height:100%}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[n].concat(i).concat([o]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(t,e){return e?e.querySelector(t):document.querySelector(t)},c=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=a.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),f=null,u=0,l=[],d=n(5);function h(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(b(r.parts[s],e))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(b(r.parts[s],e));i[r.id]={id:r.id,refs:1,parts:a}}}}function v(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function p(t,e){var n=c(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(t.insertAt.before,n);n.insertBefore(e,o)}}function g(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function y(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return m(e,t.attrs),p(t,e),e}function m(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function b(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var s=u++;n=f||(f=y(e)),r=S.bind(null,n,s,!1),o=S.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),p(t,e),e}(e),r=k.bind(null,n,e),o=function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(e),r=j.bind(null,n),o=function(){g(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=v(t,e);return h(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var s=n[o];(a=i[s.id]).refs--,r.push(a)}t&&h(v(t,e),e);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}};var w,x=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function S(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function j(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function k(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=d(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(t,e,n){"use strict";n.r(e);n(0);var r=function t(e,n){for(var r in n)try{n[r].constructor==Object?e[r]=t(e[r],n[r]):e[r]=n[r]}catch(t){e[r]=n[r]}return e},o=function(t,e){return Math.floor(Math.random()*(e-t))+t};function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n=e.canvas,r=void 0!==n&&n,o=e.settings,i=void 0===o?{}:o;this.canvas={element:r,context:r.getContext("2d"),isCanvas:(r instanceof Element||r instanceof HTMLDocument)&&"canvas"===r.tagName.toLowerCase()},this.settings={view:{styles:{background:"#101010"}},dots:{styles:{background:"#ffffff"},offset:{top:0,right:0,bottom:0,left:0}}},this.data=this.generateData(),this.cursor={x:0,y:0},this.setSettings(i),this.init()}var e,n,s;return e=t,(n=[{key:"generateData",value:function(){for(var t=this.canvas,e=this.settings,n=(t.element,e.dots.offset),r=void 0===n?{}:n,i=r.top,s=void 0===i?0:i,a=r.right,c=void 0===a?0:a,f=r.bottom,u=void 0===f?0:f,l=r.left,d=void 0===l?0:l,h=[],v=0;v<=499;v++){var p=o(0+d,100-c),g=o(0+s,100-u),y=2*Math.random();h.push({x:p,y:g,size:y,offsetX:0,offsetY:0})}return h}},{key:"setSettings",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this.settings,t),this.render({from:"setSettings"})}},{key:"getSettings",value:function(){return this.settings}},{key:"setRatio",value:function(){var t=this.canvas,e=t.context,n=t.element,r=window.devicePixelRatio||1;n.width=n.clientWidth*r,n.height=n.clientHeight*r,e.scale(r,r)}},{key:"clearCanvas",value:function(){var t=this.canvas,e=t.context;t.element,e.clearRect(0,0,t.width,t.height)}},{key:"listeners",value:function(){var t=this,e=this.canvas,n=(e.context,e.element);window.addEventListener("resize",(function(){t.render({from:"resize"})})),n.addEventListener("mousemove",(function(e){t.settings;var r=n.getBoundingClientRect(),o=e.clientX-r.left,i=e.clientY-r.top;t.cursor={x:o/n.clientWidth*100,y:i/n.clientHeight*100},t.offsetDots(e),t.render({from:"mousemove"})})),n.addEventListener("mouseout",(function(e){t.cursor={x:0,y:0},t.render({from:"mouseout"})}))}},{key:"offsetDots",value:function(t){for(var e=this.cursor,n=this.data,r=0;r<=n.length-1;r++){var o=n[r];e.x-7.5<=o.x&&e.x+7.5>=o.x&&e.y-7.5<=o.y&&e.y+7.5>=o.y&&(o.offsetX=t.movementX,o.offsetY=t.movementY)}}},{key:"drawBackground",value:function(){var t=this.canvas,e=this.settings.view,n=t.context,r=t.element,o=e.styles.background;n.fillStyle=o,n.fillRect(0,0,r.width,r.height)}},{key:"drawDots",value:function(){var t=this.canvas,e=this.settings,n=this.data,r=e.dots,o=t.context,i=t.element,s=r.styles.background;o.fillStyle=s;for(var a=0;a<=n.length-1;a++){var c=n[a];o.beginPath(),o.arc(i.clientWidth*(c.x/100)+c.offsetX,i.clientHeight*(c.y/100)+c.offsetY,c.size,0,2*Math.PI),o.fill()}}},{key:"render",value:function(){this.setRatio(),this.clearCanvas(),this.drawBackground(),this.drawDots()}},{key:"init",value:function(){this.listeners(),this.render()}}])&&i(e.prototype,n),s&&i(e,s),t}();window.bDots={Flat:s};n(1);window.addEventListener("load",(function(){document.querySelectorAll("canvas").forEach((function(t,e){new s({canvas:t,settings:{}})}))}))}])}));