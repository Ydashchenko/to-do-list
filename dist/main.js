(()=>{"use strict";var n,e,t,r,o,i,a,c,s,l,p,d,u,f,g={426:(n,e,t)=>{t.d(e,{Z:()=>u});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),s=t.n(c),l=new URL(t(660),t.b),p=a()(o()),d=s()(l);p.push([n.id,"@font-face {\n    font-family: 'Horizon';\n    src: url("+d+") format('opentype');\n}\n  \n* {\n    margin: 0;\n    padding: 0;\n    font-weight: 100;\n}\n\nmain, footer {\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    font-weight: 100;\n}\n\n\nbody {\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    \n}\n\nheader {\n    font-family: 'Horizon';\n    background-color: darkslateblue;\n    color: white;\n    padding-left: 20px;\n    display: flex;\n    gap: 20px;\n    font-size: 25px;\n    align-items: center;\n    height: 100px;\n}\n\n#todo-logo {\n    width: 50px;\n    height: 50px;\n}\n\nmain {\n    display: grid;\n    grid-template-columns: auto 1fr;\n\n}\n\nmain img {\n    width: 30px;\n}\n\nnav {\n    border-right: darkslateblue 1px solid;\n    padding: 50px;\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n}\n\n#first, #project-div, #note-div {\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    gap: 20px;\n}\n\n#first {\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    align-items: center;\n}\n\n#first img {\n    width: 25px;\n}\n\n#first button {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n}\n\n.project {\n    display: grid;\n    grid-template-columns: auto 3fr auto auto 1fr;\n    gap: 20px;\n    align-items: center;\n}\n\n.project-logo {\n    width: 25px;\n}\n\n.edit-project, .remove-project {\n    width: 20px;\n}\n\n#project-header, #notes-header {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 20px;\n}\n\n#project-list {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#project-div, #note-div {\n    display: grid;\n}\n\n.task {\n    display: grid;\n    grid-template-columns: auto 1fr repeat(3, auto);\n    gap: 20px;\n    align-items: center;\n    \n}\n\n#task-list {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#main-container {\n    padding: 40px;\n    background-color: rgb(254, 243, 227);\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\nfooter  {\n    background-color: darkslateblue;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n    padding: 10px;\n    font-weight: 400;\n}\n\nfooter a {\n    font-weight: 400;\n    text-decoration: none;\n    color: inherit;\n}\n\nfooter img {\n    width: 25px;\n    height: 25px;\n}\n\nbutton {\n    background-color: inherit;\n    border: none;\n    font-size: 30px;\n}\n\nh4, button {\n    font-size: 25px;\n    font-weight: 50;\n}\n\nh3, h2 {\n    font-size: 30px;\n    font-weight: 600;\n}\n\n.add-button {\n    text-align: start;\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    font-weight: 500;\n}\n\n.add-button img {\n    width: 20px;\n    height: 20px;\n}\n\n.checkbox {\n    width: 20px;\n    height: 20px;\n    cursor: pointer;\n}\n\n.checkbox {\n    accent-color:  darkslateblue;\n}\n\n.counter {\n    font-size: 20px;\n    font-weight: 600;\n    color: darkslateblue;\n    text-align: end;\n    align-self: center;\n}\n\n\n\n",""]);const u=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);r&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],p=i[l]||0,d="".concat(l," ").concat(p);i[l]=p+1;var u=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var g=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:g,references:1})}a.push(d)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),l=0;l<i.length;l++){var p=t(i[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},660:(n,e,t)=>{n.exports=t.p+"2ecdaee4a5d44762c253.otf"}},h={};function m(n){var e=h[n];if(void 0!==e)return e.exports;var t=h[n]={id:n,exports:{}};return g[n](t,t.exports,m),t.exports}m.m=g,m.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return m.d(e,{a:e}),e},m.d=(n,e)=>{for(var t in e)m.o(e,t)&&!m.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},m.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),m.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;m.g.importScripts&&(n=m.g.location+"");var e=m.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!n;)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),m.p=n})(),m.b=document.baseURI||self.location.href,m.nc=void 0,n=m(379),e=m.n(n),t=m(795),r=m.n(t),o=m(569),i=m.n(o),a=m(565),c=m.n(a),s=m(216),l=m.n(s),p=m(589),d=m.n(p),u=m(426),(f={}).styleTagTransform=d(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals})();