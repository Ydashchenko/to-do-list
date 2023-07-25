(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>p});var o=t(81),r=t.n(o),i=t(645),a=t.n(i),l=t(667),s=t.n(l),c=new URL(t(660),t.b),d=a()(r()),u=s()(c);d.push([e.id,"@font-face {\n    font-family: 'Horizon';\n    src: url("+u+") format('opentype');\n}\n  \n* {\n    margin: 0;\n    padding: 0;\n    font-weight: 100;\n}\n\nmain, footer {\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    font-weight: 100;\n}\n\n\nbody {\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    \n}\n\nheader {\n    font-family: 'Horizon';\n    background-color: darkslateblue;\n    color: white;\n    padding-left: 20px;\n    display: flex;\n    gap: 20px;\n    font-size: 25px;\n    align-items: center;\n    height: 100px;\n}\n\n#todo-logo {\n    width: 50px;\n    height: 50px;\n}\n\nmain {\n    display: grid;\n    grid-template-columns: auto 1fr;\n\n}\n\nmain img {\n    width: 30px;\n}\n\nnav {\n    border-right: darkslateblue 1px solid;\n    padding: 20px 50px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#first div {\n    display: flex;\n    gap: 20px;\n}\n\n#first div h4 {\n    flex: 1;\n    text-align: start;\n}\n\n#first div img {\n    width: 25px;\n}\n\n.project {\n    display: grid;\n    grid-template-columns: auto 4fr auto  1fr;\n    gap: 20px;\n    align-items: center;\n}\n\n.project-logo {\n    width: 25px;\n}\n\n.edit-project, .remove-project {\n    width: 20px;\n}\n\n#project-header, #notes-header {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 20px;\n}\n\n#project-list {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#first, #project-div, #note-div {\n    display: grid;\n    gap: 10px;\n}\n\n.task {\n    display: grid;\n    grid-template-columns: auto 1fr repeat(3, auto);\n    gap: 20px;\n    align-items: center;\n    background-color: rgba(71, 61, 139, 0.12);\n    padding: 10px 15px;\n    transition: 0.2s;\n}\n\n.task:hover {\n    box-shadow: 5px 5px 5px rgba(71, 61, 139, 0.342);\n    transition: 0.2s;\n    transform: scale(1.01);\n}\n\n#task-list {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#main-container {\n    padding: 40px;\n    background-color: rgb(254, 243, 227);\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\nfooter  {\n    background-color: darkslateblue;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n    padding: 10px;\n    font-weight: 400;\n}\n\nfooter a {\n    font-weight: 400;\n    text-decoration: none;\n    color: inherit;\n}\n\nfooter img {\n    width: 25px;\n    height: 25px;\n}\n\nbutton {\n    background-color: inherit;\n    border: none;\n    font-size: 30px;\n}\n\nh4, button {\n    font-size: 25px;\n    font-weight: 50;\n}\n\nh3, h2 {\n    font-size: 30px;\n    font-weight: 600;\n}\n\n.add-button {\n    text-align: start;\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    font-weight: 500;\n    border-radius: 10px;\n    transition: 0.2s;\n}\n\n.add-button, #first div, .project {\n    padding: 10px 15px;\n}\n\n#project-header, #notes-header {\n    padding: 10px 0px;\n    padding-right: 15px;\n}\n\n.add-button:hover img, .edit-project:hover,\n .remove-project:hover, .edit-task:hover, .remove-task:hover{\n    animation: rotation 1s infinite linear;\n    transition: 0.2s;\n}\n\n.add-button:hover, .project:hover, #first div:hover {\n    background-color: rgba(71, 61, 139, 0.12);\n    transition: 0.2s;\n}\n\n\n.add-button img {\n    width: 20px;\n    height: 20px;\n    transition: 0.2s;\n}\n  \n@keyframes rotation {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(359deg);\n    }\n}\n\n.checkbox {\n    width: 20px;\n    height: 20px;\n    cursor: pointer;\n}\n\n.checkbox {\n    accent-color:  darkslateblue;\n}\n\n.counter {\n    font-size: 20px;\n    font-weight: 600;\n    color: darkslateblue;\n    text-align: end;\n    align-self: center;\n}\n\n#add-task-form, #add-project-form {\n    background-color: white;\n    padding: 20px;\n    display: none;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 30px;\n}\n\n#add-task-form *, #add-project-form * {\n    font-size: 20px;\n    padding: 5px 20px;\n}\n\n#input-title, #input-description, input {\n    border: 0px;\n}\n\n#input-title:focus, #input-description:focus, input:focus {\n    outline: none;\n}\n\n#input-date {\n    border-radius: 5px;\n}\n\n#add-task-form input {\n    background-color: white;\n}\n\n\n#priority {\n    display: flex;\n    gap: 10px;\n    justify-content: stretch;\n}\n\n#low {\n    border: 2px green solid;\n    color: green;\n}\n\n#low:hover {\n    background-color: green;\n    color: white;\n}\n\n#medium {\n    border: 2px rgb(255, 208, 0) solid;\n    color: rgb(255, 208, 0);\n}\n\n#medium:hover {\n    background-color: rgb(255, 208, 0);\n    color: white;\n}\n\n#high {\n    border: 2px red solid;\n    color: red;\n}\n\n#high:hover {\n    background-color: red;\n    color: white;\n}\n\n#priority option {\n    font-weight: 500;\n    border-radius: 5px;\n}\n\n.input-new-project-name {\n    width: 100px;\n    font-size: 20px;\n}\n\n.High-priority {\n    border-left: solid 3px red;\n}\n\n.Medium-priority {\n    border-left: solid 3px  rgb(255, 208, 0);\n}\n\n.Low-priority {\n    border-left: solid 3px green;\n}\n\n.checked h4 {\n    text-decoration: line-through;\n    color: rgba(0, 0, 0, 0.5);\n}\n\n.overlay-details {\n    z-index: 2;\n    position: fixed;\n    top: 0;\n    left: 0;\n    padding: 10px;\n    width: 100vw;\n    height: 100vh;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    visibility: visible;\n    opacity: 1;\n    background-color: rgba(0, 0, 0, 0.6);\n    -webkit-transition: all .3s;\n    transition: all .3s;\n}\n\n.overlay-details-invisible {\n    visibility: hidden;\n    opacity: 0;\n}\n\n.details-popup{\n    background-color: rgb(254, 243, 227);\n    box-shadow: 0px 5px 6px 5px rgba(0, 0, 0, 0.2);\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n    min-width: 600px;  \n}\n\n.details-popup-close {\n    align-self: flex-end;\n    font-size: 35px;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    padding: 0 10px;\n}\n\n.details-popup-content {\n    padding: 0 2rem 2rem 2rem;\n    font-size: 18px;\n    display: grid;\n    gap: 3px;\n}\n\n.details-popup-grid {\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n}\n\n.details-popup-title {\n    font-size: 40px;\n    padding-bottom: 10px;\n}\n\n.details-popup::before {\n    /* This is the pseudo-element that creates the blur effect */\n    content: \"\";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    backdrop-filter: blur(8px); /* Adjust the blur amount as needed */\n    pointer-events: none; /* This ensures that clicks can still reach the content behind the blurred div */\n    z-index: -1; /* Place the pseudo-element behind the content */\n  }",""]);const p=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},a=[],l=0;l<e.length;l++){var s=e[l],c=o.base?s[0]+o.base:s[0],d=i[c]||0,u="".concat(c," ").concat(d);i[c]=d+1;var p=t(u),g={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(g);else{var f=r(g,o);o.byIndex=l,n.splice(l,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var l=t(i[a]);n[l].references--}for(var s=o(e,r),c=0;c<i.length;c++){var d=t(i[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},660:(e,n,t)=>{e.exports=t.p+"2ecdaee4a5d44762c253.otf"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o={};(()=>{t.d(o,{WD:()=>re,g0:()=>K,X3:()=>ee,uj:()=>te,mP:()=>ae}),Math.pow(10,8);var e=6e4,n=36e5;function r(e,n){if(n.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+n.length+" present")}function i(e){if(null===e||!0===e||!1===e)return NaN;var n=Number(e);return isNaN(n)?n:n<0?Math.ceil(n):Math.floor(n)}function a(t,o){var a;r(1,arguments);var m=i(null!==(a=null==o?void 0:o.additionalDigits)&&void 0!==a?a:2);if(2!==m&&1!==m&&0!==m)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var h,y=function(e){var n,t={},o=e.split(l.dateTimeDelimiter);if(o.length>2)return t;if(/:/.test(o[0])?n=o[0]:(t.date=o[0],n=o[1],l.timeZoneDelimiter.test(t.date)&&(t.date=e.split(l.timeZoneDelimiter)[0],n=e.substr(t.date.length,e.length))),n){var r=l.timezone.exec(n);r?(t.time=n.replace(r[1],""),t.timezone=r[1]):t.time=n}return t}(t);if(y.date){var v=function(e,n){var t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+n)+"})|(\\d{2}|[+-]\\d{"+(2+n)+"})$)"),o=e.match(t);if(!o)return{year:NaN,restDateString:""};var r=o[1]?parseInt(o[1]):null,i=o[2]?parseInt(o[2]):null;return{year:null===i?r:100*i,restDateString:e.slice((o[1]||o[2]).length)}}(y.date,m);h=function(e,n){if(null===n)return new Date(NaN);var t=e.match(s);if(!t)return new Date(NaN);var o=!!t[4],r=u(t[1]),i=u(t[2])-1,a=u(t[3]),l=u(t[4]),c=u(t[5])-1;if(o)return function(e,n,t){return n>=1&&n<=53&&t>=0&&t<=6}(0,l,c)?function(e,n,t){var o=new Date(0);o.setUTCFullYear(e,0,4);var r=7*(n-1)+t+1-(o.getUTCDay()||7);return o.setUTCDate(o.getUTCDate()+r),o}(n,l,c):new Date(NaN);var d=new Date(0);return function(e,n,t){return n>=0&&n<=11&&t>=1&&t<=(g[n]||(f(e)?29:28))}(n,i,a)&&function(e,n){return n>=1&&n<=(f(e)?366:365)}(n,r)?(d.setUTCFullYear(n,i,Math.max(r,a)),d):new Date(NaN)}(v.restDateString,v.year)}if(!h||isNaN(h.getTime()))return new Date(NaN);var x,b=h.getTime(),k=0;if(y.time&&(k=function(t){var o=t.match(c);if(!o)return NaN;var r=p(o[1]),i=p(o[2]),a=p(o[3]);return function(e,n,t){return 24===e?0===n&&0===t:t>=0&&t<60&&n>=0&&n<60&&e>=0&&e<25}(r,i,a)?r*n+i*e+1e3*a:NaN}(y.time),isNaN(k)))return new Date(NaN);if(!y.timezone){var w=new Date(b+k),T=new Date(0);return T.setFullYear(w.getUTCFullYear(),w.getUTCMonth(),w.getUTCDate()),T.setHours(w.getUTCHours(),w.getUTCMinutes(),w.getUTCSeconds(),w.getUTCMilliseconds()),T}return x=function(t){if("Z"===t)return 0;var o=t.match(d);if(!o)return 0;var r="+"===o[1]?-1:1,i=parseInt(o[2]),a=o[3]&&parseInt(o[3])||0;return function(e,n){return n>=0&&n<=59}(0,a)?r*(i*n+a*e):NaN}(y.timezone),isNaN(x)?new Date(NaN):new Date(b+k+x)}var l={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},s=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,c=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,d=/^([+-])(\d{2})(?::?(\d{2}))?$/;function u(e){return e?parseInt(e):1}function p(e){return e&&parseFloat(e.replace(",","."))||0}var g=[31,null,31,30,31,30,31,31,30,31,30,31];function f(e){return e%400==0||e%4==0&&e%100!=0}function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function h(e){r(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"===m(e)&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function y(e){r(1,arguments);var n=h(e);return n.setHours(0,0,0,0),n}let v=[],x=7;function b(e,n,t,o,r,i,a){return{id:e,title:n,description:t,dueDate:o,priority:r,project:i,done:a}}const k=()=>{x+=1;let e=x,n=document.getElementById("input-title").value,t=document.getElementById("input-description").value,o=document.getElementById("input-date").value,r=document.getElementById("input-priority").value,i=document.getElementById("Project").value,l=b(e,n,t,o,r,i,!1);if(""!=n&&""!=t&&""!=o){if(!(a(o)<y(Date.now())))return v.push(l),console.log(v),L(),M(),document.getElementById("input-title").value="",document.getElementById("input-description").value="",document.getElementById("input-date").value="",document.getElementById("add-task").style.display="flex",document.getElementById("add-task-form").style.display="none",$(ae),ee(),re(),te(),L(),{id:e,title:n,description:t,dueDate:o,priority:r,project:i,done:!1,toDoArray:v,idCounter:x};alert("You have entered a date that has already passed!")}else alert("All the fields are required, please try again!")};var w={};function T(){return w}function E(e,n){var t,o,a,l,s,c,d,u;r(1,arguments);var p=T(),g=i(null!==(t=null!==(o=null!==(a=null!==(l=null==n?void 0:n.weekStartsOn)&&void 0!==l?l:null==n||null===(s=n.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==a?a:p.weekStartsOn)&&void 0!==o?o:null===(d=p.locale)||void 0===d||null===(u=d.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==t?t:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=h(e),m=f.getDay(),y=(m<g?7:0)+m-g;return f.setDate(f.getDate()-y),f.setHours(0,0,0,0),f}function D(){document.getElementById("add-task-form").style.display="grid",document.getElementById("add-task").style.display="none"}function j(){document.getElementById("add-project-form").style.display="grid",document.getElementById("add-project").style.display="none"}function L(){for(let e in A){let n=0;console.log(A[e]);for(let t in v)v[t].project===A[e].projectTitle&&!1===v[t].done&&(n+=1);0===n&&(n=""),A[e].tasksInProject=n}}function S(){let e=document.getElementById("task-list");e.innerHTML="";for(let n in v){let t=document.createElement("div"),o="";v[n].done&&(o="checked",t.classList.add("checked")),t.classList.add("task"),t.innerHTML=`\n        <input type="checkbox" class="checkbox" ${o}>\n        <h4>${v[n].title}</h4>\n        <p>${v[n].dueDate}</p>\n        <img class="edit-task" src="../src/images/edit-logo.png" alt="Edit logo">\n        <img class="remove-task" src="../src/images/delete.png" alt="Delete logo">\n        `,t.classList.add(`${v[n].priority}-priority`),console.log(v[n].project),e.appendChild(t)}console.log(v)}function M(){let e=document.getElementById("project-list");e.innerHTML="";for(let n in A){let t=document.createElement("div");t.classList.add("project"),t.innerHTML=`\n        <img class="project-logo" src="../src/images/project-logo.png" alt="Project Logo">\n        <h4>${A[n].projectTitle}</h4>\n        \n        <img class="remove-project" src="../src/images/delete.png" alt="Delete logo">\n        <p class="counter">${A[n].tasksInProject}</p>\n        `,e.appendChild(t)}let n=document.getElementById("Project");n.innerHTML="";let t=document.createElement("option");t.value="",t.innerHTML="(No Project)",n.appendChild(t);for(let e in A){let t=document.createElement("option");t.value=A[e].projectTitle,t.innerHTML=A[e].projectTitle,n.appendChild(t)}I(),K(),te(),ee(),re()}function I(){const e=document.getElementById("all-tasks-counter"),n=document.getElementById("today-counter"),t=document.getElementById("this-week-counter"),o=(y(new Date),v.filter((e=>!e.done)));0===o.length?e.innerHTML="":e.innerHTML=o.length;const i=v.filter((e=>function(e){return r(1,arguments),function(e,n){r(2,arguments);var t=y(e),o=y(n);return t.getTime()===o.getTime()}(e,Date.now())}(a(e.dueDate))&&!e.done));0===i.length?n.innerHTML="":n.innerHTML=i.length;const l=v.filter((e=>function(e,n){return r(1,arguments),function(e,n,t){r(2,arguments);var o=E(e,t),i=E(n,t);return o.getTime()===i.getTime()}(e,Date.now(),n)}(a(e.dueDate))&&!e.done));0===l.length?t.innerHTML="":t.innerHTML=l.length}function H(){document.getElementById("content-h2").innerHTML="All tasks",ae="All tasks",S(),M(),ee()}function N(){document.getElementById("content-h2").innerHTML="Today",ae="Today",function(){let e=document.getElementById("task-list");e.innerHTML="";for(let n in v){const t=new Date;let o=String(t.getDate()).padStart(2,"0"),r=String(t.getMonth()+1).padStart(2,"0");if(`${t.getFullYear()}-${r}-${o}`===v[n].dueDate){let t=document.createElement("div"),o="";v[n].done&&(o="checked",t.classList.add("checked")),t.classList.add("task"),t.innerHTML=`\n            <input type="checkbox" class="checkbox" ${o}>\n            <h4>${v[n].title}</h4>\n            <p>${v[n].dueDate}</p>\n            <img class="edit-task" src="../src/images/edit-logo.png" alt="Edit logo">\n            <img class="remove-task" src="../src/images/delete.png" alt="Delete logo">\n            `,t.classList.add(`${v[n].priority}-priority`),e.appendChild(t),console.log(e)}}console.log("This is"),console.log(v)}(),M(),ee()}function B(){document.getElementById("content-h2").innerHTML="This week",ae="This week",function(){let e=document.getElementById("task-list");e.innerHTML="";for(let t in v){Date.prototype.GetFirstDayOfWeek=function(){return new Date(this.setDate(this.getDate()-this.getDay()+(0==this.getDay()?-6:1)))},Date.prototype.GetLastDayOfWeek=function(){return new Date(this.setDate(this.getDate()-this.getDay()+7))};var n=new Date;let o=new Date(`${v[t].dueDate}`);if(console.log(o>=n.GetFirstDayOfWeek()&&o<=n.GetLastDayOfWeek()),o>=n.GetFirstDayOfWeek()&&o<=n.GetLastDayOfWeek()){let n=document.createElement("div"),o="";v[t].done&&(o="checked",n.classList.add("checked")),n.classList.add("task"),n.innerHTML=`\n            <input type="checkbox" class="checkbox" ${o}>\n            <h4>${v[t].title}</h4>\n            <p>${v[t].dueDate}</p>\n            <img class="edit-task" src="../src/images/edit-logo.png" alt="Edit logo">\n            <img class="remove-task" src="../src/images/delete.png" alt="Delete logo">\n            `,n.classList.add(`${v[t].priority}-priority`),e.appendChild(n)}}}(),M(),ee()}function C(e){document.getElementById("content-h2").innerHTML=e,function(e){let n=document.getElementById("task-list");n.innerHTML="",ae=e;let t=v.filter((n=>n.project===e));for(let e in t){let o=document.createElement("div"),r="";t[e].done&&(r="checked",o.classList.add("checked")),o.classList.add("task"),o.innerHTML=`\n        <input type="checkbox" class="checkbox" ${r}>\n        <h4>${t[e].title}</h4>\n        <p>${t[e].dueDate}</p>\n        <img class="edit-task" src="../src/images/edit-logo.png" alt="Edit logo">\n        <img class="remove-task" src="../src/images/delete.png" alt="Delete logo">\n        `,o.classList.add(`${t[e].priority}-priority`),n.appendChild(o)}}(e),M(),ee()}function $(e){"All tasks"==e?H():"Today"==e?N():"This week"==e?B():C(e)}let A=[];function q(e,n){return{projectTitle:e,tasksInProject:n}}const z=()=>{let e=document.getElementById("input-project-name").value,n=q(e,0);if(""!=e)return A.push(n),console.log(A),document.getElementById("input-project-name").value="",document.getElementById("add-project").style.display="flex",document.getElementById("add-project-form").style.display="none",L(),M(),ee(),{projectTitle:e,tasksInProject:0,projectsArray:A};alert("Input the project name, please!")};var O=t(379),U=t.n(O),P=t(795),G=t.n(P),F=t(569),W=t.n(F),Z=t(565),R=t.n(Z),Y=t(216),_=t.n(Y),J=t(589),Q=t.n(J),V=t(426),X={};function K(){document.querySelectorAll(".project").forEach((e=>{e.addEventListener("click",(n=>{n.target.classList.contains("edit-project")||n.target.classList.contains("remove-project")||C(e.querySelector("h4").textContent)}))}))}function ee(){document.querySelectorAll(".remove-project").forEach((e=>{e.addEventListener("click",ne)}))}function ne(e){let n=e.target.closest(".project").querySelector("h4").innerHTML;console.log(n);const t=A.findIndex((e=>e.projectTitle===n));console.log(t),console.log(A),v=v.filter((e=>e.project!==n)),console.log(A),A.splice(t,1),$(ae),L(),M(),ee(),console.log("Here's toDoArray"),console.log(v)}function te(){document.querySelectorAll(".checkbox").forEach((e=>{e.addEventListener("click",oe)}))}function oe(e){let n=e.target.closest(".task").querySelector("h4").innerHTML;const t=v.find((e=>e.title===n));console.log(t);const o=t.id;v.forEach((e=>{e.id===o&&(e.done=!e.done)})),$(ae),L(),M(),I(),ee(),re()}function re(){document.querySelectorAll(".remove-task").forEach((e=>{e.addEventListener("click",ie)}))}function ie(e){let n=e.target.closest(".task").querySelector("h4").innerHTML;v=v.filter((e=>e.title!==n)),console.log(v),$(ae),L(),M(),I(),ee()}X.styleTagTransform=Q(),X.setAttributes=R(),X.insert=W().bind(null,"head"),X.domAPI=G(),X.insertStyleElement=_(),U()(V.Z,X),V.Z&&V.Z.locals&&V.Z.locals,(()=>{const e=q("Chores",0);A.push(e);const n=q("Gym",0);A.push(n);const t=q("Education",0);A.push(t);const o=q("Health",0);A.push(o)})(),function(){const e=b(0,"Wash the dishes","Just wash the dishes lol","2023-07-23","Medium","Chores",!0);v.push(e);const n=b(1,"See the doctor","Have to know if you need this surgery","2023-07-24","High","Health",!1);v.push(n);const t=b(2,"100 push ups","JUST DO IT","2023-07-28","Medium","Gym",!0);v.push(t);const o=b(3,"Make the bed","No one sees it except you so screw it","2023-07-25","Low","Chores",!0);v.push(o);const r=b(4,"Get to do list app done","You HAVE TO finish it","2023-07-31","High","Education",!1);v.push(r);const i=b(5,"Watch naruto again","WHAT?","2023-08-10","Low","",!1);v.push(i);const a=b(6,"Learn React","You need this","2023-08-30","High","Education",!1);v.push(a);const l=b(7,"See friends","Spend some time with friends cuz your a hikka now","2023-12-14","Medium","",!0);v.push(l),console.log(v)}(),L(),S(),M(),ee(),document.querySelectorAll(".task").forEach((e=>{e.addEventListener("click",(e=>{e.target.classList.contains("checkbox")||e.target.classList.contains("edit-task")||e.target.classList.contains("remove-task")||function(){let e=event.target.closest(".task").querySelector("h4").innerHTML,n=v.find((n=>n.title===e));console.log(n),document.querySelector(".details-popup-title").innerHTML=n.title,document.querySelector(".details-popup-project").innerHTML=n.project,document.querySelector(".details-popup-priority").innerHTML=n.priority,document.querySelector(".details-popup-duedate").innerHTML=n.dueDate,document.querySelector(".details-popup-details").innerHTML=n.description,document.querySelector(".details-popup-id").innerHTML=n.id,document.querySelector(".overlay-details").classList.remove("overlay-details-invisible")}()}))})),te(),re(),document.getElementById("add-task").addEventListener("click",D),document.getElementById("submit-add-task").addEventListener("click",k),document.getElementById("add-project").addEventListener("click",j),document.getElementById("submit-add-project").addEventListener("click",z),document.getElementById("all-tasks").addEventListener("click",H),document.getElementById("today").addEventListener("click",N),document.getElementById("this-week").addEventListener("click",B);let ae="All tasks"})()})();