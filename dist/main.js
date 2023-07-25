(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(81),r=n.n(o),i=n(645),a=n.n(i),s=n(667),l=n.n(s),c=new URL(n(660),n.b),d=a()(r()),p=l()(c);d.push([e.id,"@font-face {\n    font-family: 'Horizon';\n    src: url("+p+") format('opentype');\n}\n  \n* {\n    margin: 0;\n    padding: 0;\n    font-weight: 100;\n}\n\nmain, footer {\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    font-weight: 100;\n}\n\n\nbody {\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    \n}\n\nheader {\n    font-family: 'Horizon';\n    background-color: darkslateblue;\n    color: white;\n    padding-left: 20px;\n    display: flex;\n    gap: 20px;\n    font-size: 25px;\n    align-items: center;\n    height: 100px;\n}\n\n#todo-logo {\n    width: 50px;\n    height: 50px;\n}\n\nmain {\n    display: grid;\n    grid-template-columns: auto 1fr;\n\n}\n\nmain img {\n    width: 30px;\n}\n\nnav {\n    border-right: darkslateblue 1px solid;\n    padding: 20px 50px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#first div {\n    display: flex;\n    gap: 20px;\n}\n\n#first div h4 {\n    flex: 1;\n    text-align: start;\n}\n\n#first div img {\n    width: 25px;\n}\n\n.project {\n    display: grid;\n    grid-template-columns: auto 4fr auto  1fr;\n    gap: 20px;\n    align-items: center;\n}\n\n.project-logo {\n    width: 25px;\n}\n\n.edit-project, .remove-project {\n    width: 20px;\n}\n\n#project-header, #notes-header {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 20px;\n}\n\n#project-list {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#first, #project-div, #note-div {\n    display: grid;\n    gap: 10px;\n}\n\n.task {\n    display: grid;\n    grid-template-columns: auto 1fr repeat(3, auto);\n    gap: 20px;\n    align-items: center;\n    background-color: rgba(71, 61, 139, 0.12);\n    padding: 10px 15px;\n    transition: 0.2s;\n}\n\n.task:hover {\n    box-shadow: 5px 5px 5px rgba(71, 61, 139, 0.342);\n    transition: 0.2s;\n    transform: scale(1.01);\n}\n\n#task-list {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#main-container {\n    padding: 40px;\n    background-color: rgb(254, 243, 227);\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\nfooter  {\n    background-color: darkslateblue;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n    padding: 10px;\n    font-weight: 400;\n}\n\nfooter a {\n    font-weight: 400;\n    text-decoration: none;\n    color: inherit;\n}\n\nfooter img {\n    width: 25px;\n    height: 25px;\n}\n\nbutton {\n    background-color: inherit;\n    border: none;\n    font-size: 30px;\n}\n\nh4, button {\n    font-size: 25px;\n    font-weight: 50;\n}\n\nh3, h2 {\n    font-size: 30px;\n    font-weight: 600;\n}\n\n.add-button {\n    text-align: start;\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    font-weight: 500;\n    border-radius: 10px;\n    transition: 0.2s;\n}\n\n.add-button, #first div, .project {\n    padding: 10px 15px;\n}\n\n#project-header, #notes-header {\n    padding: 10px 0px;\n    padding-right: 15px;\n}\n\n.add-button:hover img, .edit-project:hover,\n .remove-project:hover, .edit-task:hover, .remove-task:hover{\n    animation: rotation 1s infinite linear;\n    transition: 0.2s;\n}\n\n.add-button:hover, .project:hover, #first div:hover, .edit-popup-close:hover {\n    background-color: rgba(71, 61, 139, 0.12);\n    transition: 0.2s;\n}\n\n\n.add-button img {\n    width: 20px;\n    height: 20px;\n    transition: 0.2s;\n}\n  \n@keyframes rotation {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(359deg);\n    }\n}\n\n.checkbox {\n    width: 20px;\n    height: 20px;\n    cursor: pointer;\n}\n\n.checkbox {\n    accent-color:  darkslateblue;\n}\n\n.counter {\n    font-size: 20px;\n    font-weight: 600;\n    color: darkslateblue;\n    text-align: end;\n    align-self: center;\n}\n\n#add-task-form, #add-project-form {\n    background-color: white;\n    padding: 20px;\n    display: none;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 30px;\n}\n\n#add-task-form *, #add-project-form * {\n    font-size: 20px;\n    padding: 5px 20px;\n}\n\n#input-title, #input-description, input {\n    border: 0px;\n}\n\n#input-title:focus, #input-description:focus, input:focus {\n    outline: none;\n}\n\n#input-date {\n    border-radius: 5px;\n}\n\n#add-task-form input {\n    background-color: white;\n}\n\n\n#priority {\n    display: flex;\n    gap: 10px;\n    justify-content: stretch;\n}\n\n#priority option {\n    font-weight: 500;\n    border-radius: 5px;\n}\n\n.input-new-project-name {\n    width: 100px;\n    font-size: 20px;\n}\n\n.High-priority {\n    border-left: solid 3px red;\n}\n\n.Medium-priority {\n    border-left: solid 3px  rgb(255, 208, 0);\n}\n\n.Low-priority {\n    border-left: solid 3px green;\n}\n\n.checked h4 {\n    text-decoration: line-through;\n    color: rgba(0, 0, 0, 0.5);\n}\n\n.overlay-details, .overlay-edit {\n    z-index: 2;\n    position: fixed;\n    top: 0;\n    left: 0;\n    padding: 10px;\n    width: 100vw;\n    height: 100vh;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    visibility: visible;\n    opacity: 1;\n    background-color: rgba(0, 0, 0, 0.6);\n    -webkit-transition: all .3s;\n    transition: all .3s;\n}\n\n\n\n.overlay-details-invisible, .overlay-edit-invisible {\n    visibility: hidden;\n    opacity: 0;\n}\n\n.details-popup, .edit-popup {\n    background-color: rgb(254, 243, 227);\n    box-shadow: 0px 5px 6px 5px rgba(0, 0, 0, 0.2);\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n    min-width: 600px;  \n    max-width: 800px;\n}\n\n#details-popup-close, .edit-popup-close {\n    align-self: flex-end;\n    font-size: 35px;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    padding: 0 10px;\n}\n\n.details-popup-content,#edit-popup-form {\n    padding: 0 2rem 2rem 2rem;\n    font-size: 20px;\n    display: grid;\n    gap: 3px;\n}\n\n#confirm-edit-task {\n    font-size: 20px;\n    padding: 2px 4px;\n    border-radius: 10px;\n    transition: 0.2s;\n}\n\n#confirm-edit-task:hover {\n    background-color: rgba(71, 61, 139, 0.12);\n    transition: 0.2s;\n}\n\n#edit-popup-row {\n    display: flex;\n    justify-content: space-around;\n}\n\n.details-popup-grid {\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n}\n\n.details-popup-title {\n    font-size: 40px;\n    padding-bottom: 10px;\n}\n\n.details-popup::before {\n    /* This is the pseudo-element that creates the blur effect */\n    content: \"\";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    backdrop-filter: blur(8px); /* Adjust the blur amount as needed */\n    pointer-events: none; /* This ensures that clicks can still reach the content behind the blurred div */\n    z-index: -1; /* Place the pseudo-element behind the content */\n}\n\n.details-popup-details {\n    max-height: 12rem;\n}\n",""]);const u=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],s=0;s<e.length;s++){var l=e[s],c=o.base?l[0]+o.base:l[0],d=i[c]||0,p="".concat(c," ").concat(d);i[c]=d+1;var u=n(p),g={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(g);else{var f=r(g,o);o.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var l=o(e,r),c=0;c<i.length;c++){var d=n(i[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=l}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},660:(e,t,n)=>{e.exports=n.p+"2ecdaee4a5d44762c253.otf"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0;var o={};(()=>{n.d(o,{WD:()=>ie,g0:()=>ee,X3:()=>te,uj:()=>oe,WY:()=>se,mP:()=>ce}),Math.pow(10,8);var e=6e4,t=36e5;function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function i(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function a(n,o){var a;r(1,arguments);var m=i(null!==(a=null==o?void 0:o.additionalDigits)&&void 0!==a?a:2);if(2!==m&&1!==m&&0!==m)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof n&&"[object String]"!==Object.prototype.toString.call(n))return new Date(NaN);var h,y=function(e){var t,n={},o=e.split(s.dateTimeDelimiter);if(o.length>2)return n;if(/:/.test(o[0])?t=o[0]:(n.date=o[0],t=o[1],s.timeZoneDelimiter.test(n.date)&&(n.date=e.split(s.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var r=s.timezone.exec(t);r?(n.time=t.replace(r[1],""),n.timezone=r[1]):n.time=t}return n}(n);if(y.date){var v=function(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),o=e.match(n);if(!o)return{year:NaN,restDateString:""};var r=o[1]?parseInt(o[1]):null,i=o[2]?parseInt(o[2]):null;return{year:null===i?r:100*i,restDateString:e.slice((o[1]||o[2]).length)}}(y.date,m);h=function(e,t){if(null===t)return new Date(NaN);var n=e.match(l);if(!n)return new Date(NaN);var o=!!n[4],r=p(n[1]),i=p(n[2])-1,a=p(n[3]),s=p(n[4]),c=p(n[5])-1;if(o)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,s,c)?function(e,t,n){var o=new Date(0);o.setUTCFullYear(e,0,4);var r=7*(t-1)+n+1-(o.getUTCDay()||7);return o.setUTCDate(o.getUTCDate()+r),o}(t,s,c):new Date(NaN);var d=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(g[t]||(f(e)?29:28))}(t,i,a)&&function(e,t){return t>=1&&t<=(f(e)?366:365)}(t,r)?(d.setUTCFullYear(t,i,Math.max(r,a)),d):new Date(NaN)}(v.restDateString,v.year)}if(!h||isNaN(h.getTime()))return new Date(NaN);var x,b=h.getTime(),k=0;if(y.time&&(k=function(n){var o=n.match(c);if(!o)return NaN;var r=u(o[1]),i=u(o[2]),a=u(o[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(r,i,a)?r*t+i*e+1e3*a:NaN}(y.time),isNaN(k)))return new Date(NaN);if(!y.timezone){var w=new Date(b+k),T=new Date(0);return T.setFullYear(w.getUTCFullYear(),w.getUTCMonth(),w.getUTCDate()),T.setHours(w.getUTCHours(),w.getUTCMinutes(),w.getUTCSeconds(),w.getUTCMilliseconds()),T}return x=function(n){if("Z"===n)return 0;var o=n.match(d);if(!o)return 0;var r="+"===o[1]?-1:1,i=parseInt(o[2]),a=o[3]&&parseInt(o[3])||0;return function(e,t){return t>=0&&t<=59}(0,a)?r*(i*t+a*e):NaN}(y.timezone),isNaN(x)?new Date(NaN):new Date(b+k+x)}var s={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},l=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,c=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,d=/^([+-])(\d{2})(?::?(\d{2}))?$/;function p(e){return e?parseInt(e):1}function u(e){return e&&parseFloat(e.replace(",","."))||0}var g=[31,null,31,30,31,30,31,31,30,31,30,31];function f(e){return e%400==0||e%4==0&&e%100!=0}function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function h(e){r(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===m(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function y(e){r(1,arguments);var t=h(e);return t.setHours(0,0,0,0),t}let v=[],x=7;function b(e,t,n,o,r,i,a){return{id:e,title:t,description:n,dueDate:o,priority:r,project:i,done:a}}const k=()=>{x+=1;let e=x,t=document.getElementById("input-title").value,n=document.getElementById("input-description").value,o=document.getElementById("input-date").value,r=document.getElementById("input-priority").value,i=document.getElementById("Project").value,s=b(e,t,n,o,r,i,!1);if(""!=t&&""!=n&&""!=o){if(!(a(o)<y(Date.now())))return v.push(s),console.log(v),j(),M(),document.getElementById("input-title").value="",document.getElementById("input-description").value="",document.getElementById("input-date").value="",document.getElementById("add-task").style.display="flex",document.getElementById("add-task-form").style.display="none",$(ce),te(),ie(),oe(),j(),se(),{id:e,title:t,description:n,dueDate:o,priority:r,project:i,done:!1,toDoArray:v,idCounter:x};alert("You have entered a date that has already passed!")}else alert("All the fields are required, please try again!")};var w={};function T(){return w}function E(e,t){var n,o,a,s,l,c,d,p;r(1,arguments);var u=T(),g=i(null!==(n=null!==(o=null!==(a=null!==(s=null==t?void 0:t.weekStartsOn)&&void 0!==s?s:null==t||null===(l=t.locale)||void 0===l||null===(c=l.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==a?a:u.weekStartsOn)&&void 0!==o?o:null===(d=u.locale)||void 0===d||null===(p=d.options)||void 0===p?void 0:p.weekStartsOn)&&void 0!==n?n:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=h(e),m=f.getDay(),y=(m<g?7:0)+m-g;return f.setDate(f.getDate()-y),f.setHours(0,0,0,0),f}function D(){document.getElementById("add-task-form").style.display="grid",document.getElementById("add-task").style.display="none"}function L(){document.getElementById("add-project-form").style.display="grid",document.getElementById("add-project").style.display="none"}function j(){for(let e in A){let t=0;console.log(A[e]);for(let n in v)v[n].project===A[e].projectTitle&&!1===v[n].done&&(t+=1);0===t&&(t=""),A[e].tasksInProject=t}}function S(){let e=document.getElementById("task-list");e.innerHTML="";for(let t in v){let n=document.createElement("div"),o="";v[t].done&&(o="checked",n.classList.add("checked")),n.classList.add("task"),n.innerHTML=`\n        <input type="checkbox" class="checkbox" ${o}>\n        <h4>${v[t].title}</h4>\n        <p>${v[t].dueDate}</p>\n        <img class="edit-task" src="../src/images/edit-logo.png" alt="Edit logo">\n        <img class="remove-task" src="../src/images/delete.png" alt="Delete logo">\n        `,n.classList.add(`${v[t].priority}-priority`),console.log(v[t].project),e.appendChild(n)}console.log(v)}function M(){let e=document.getElementById("project-list");e.innerHTML="";for(let t in A){let n=document.createElement("div");n.classList.add("project"),n.innerHTML=`\n        <img class="project-logo" src="../src/images/project-logo.png" alt="Project Logo">\n        <h4>${A[t].projectTitle}</h4>\n        \n        <img class="remove-project" src="../src/images/delete.png" alt="Delete logo">\n        <p class="counter">${A[t].tasksInProject}</p>\n        `,e.appendChild(n)}let t=document.getElementById("Project");t.innerHTML="";let n=document.createElement("option");n.value="",n.innerHTML="(No Project)",t.appendChild(n);for(let e in A){let n=document.createElement("option");n.value=A[e].projectTitle,n.innerHTML=A[e].projectTitle,t.appendChild(n)}I(),ee(),oe(),te(),ie(),se()}function I(){const e=document.getElementById("all-tasks-counter"),t=document.getElementById("today-counter"),n=document.getElementById("this-week-counter"),o=(y(new Date),v.filter((e=>!e.done)));0===o.length?e.innerHTML="":e.innerHTML=o.length;const i=v.filter((e=>function(e){return r(1,arguments),function(e,t){r(2,arguments);var n=y(e),o=y(t);return n.getTime()===o.getTime()}(e,Date.now())}(a(e.dueDate))&&!e.done));0===i.length?t.innerHTML="":t.innerHTML=i.length;const s=v.filter((e=>function(e,t){return r(1,arguments),function(e,t,n){r(2,arguments);var o=E(e,n),i=E(t,n);return o.getTime()===i.getTime()}(e,Date.now(),t)}(a(e.dueDate))&&!e.done));0===s.length?n.innerHTML="":n.innerHTML=s.length}function H(){document.getElementById("content-h2").innerHTML="All tasks",ce="All tasks",S(),M(),te(),se()}function N(){document.getElementById("content-h2").innerHTML="Today",ce="Today",function(){let e=document.getElementById("task-list");e.innerHTML="";for(let t in v){const n=new Date;let o=String(n.getDate()).padStart(2,"0"),r=String(n.getMonth()+1).padStart(2,"0");if(`${n.getFullYear()}-${r}-${o}`===v[t].dueDate){let n=document.createElement("div"),o="";v[t].done&&(o="checked",n.classList.add("checked")),n.classList.add("task"),n.innerHTML=`\n            <input type="checkbox" class="checkbox" ${o}>\n            <h4>${v[t].title}</h4>\n            <p>${v[t].dueDate}</p>\n            <img class="edit-task" src="../src/images/edit-logo.png" alt="Edit logo">\n            <img class="remove-task" src="../src/images/delete.png" alt="Delete logo">\n            `,n.classList.add(`${v[t].priority}-priority`),e.appendChild(n),console.log(e)}}console.log("This is"),console.log(v)}(),M(),te(),se()}function B(){document.getElementById("content-h2").innerHTML="This week",ce="This week",function(){let e=document.getElementById("task-list");e.innerHTML="";for(let n in v){Date.prototype.GetFirstDayOfWeek=function(){return new Date(this.setDate(this.getDate()-this.getDay()+(0==this.getDay()?-6:1)))},Date.prototype.GetLastDayOfWeek=function(){return new Date(this.setDate(this.getDate()-this.getDay()+7))};var t=new Date;let o=new Date(`${v[n].dueDate}`);if(console.log(o>=t.GetFirstDayOfWeek()&&o<=t.GetLastDayOfWeek()),o>=t.GetFirstDayOfWeek()&&o<=t.GetLastDayOfWeek()){let t=document.createElement("div"),o="";v[n].done&&(o="checked",t.classList.add("checked")),t.classList.add("task"),t.innerHTML=`\n            <input type="checkbox" class="checkbox" ${o}>\n            <h4>${v[n].title}</h4>\n            <p>${v[n].dueDate}</p>\n            <img class="edit-task" src="../src/images/edit-logo.png" alt="Edit logo">\n            <img class="remove-task" src="../src/images/delete.png" alt="Delete logo">\n            `,t.classList.add(`${v[n].priority}-priority`),e.appendChild(t)}}}(),M(),te(),se()}function C(e){document.getElementById("content-h2").innerHTML=e,function(e){let t=document.getElementById("task-list");t.innerHTML="",ce=e;let n=v.filter((t=>t.project===e));for(let e in n){let o=document.createElement("div"),r="";n[e].done&&(r="checked",o.classList.add("checked")),o.classList.add("task"),o.innerHTML=`\n        <input type="checkbox" class="checkbox" ${r}>\n        <h4>${n[e].title}</h4>\n        <p>${n[e].dueDate}</p>\n        <img class="edit-task" src="../src/images/edit-logo.png" alt="Edit logo">\n        <img class="remove-task" src="../src/images/delete.png" alt="Delete logo">\n        `,o.classList.add(`${n[e].priority}-priority`),t.appendChild(o)}}(e),M(),te(),se()}function $(e){"All tasks"==e?H():"Today"==e?N():"This week"==e?B():C(e)}function q(){document.querySelector(".overlay-details").classList.add("overlay-details-invisible")}let A=[];function z(e,t){return{projectTitle:e,tasksInProject:t}}const O=()=>{let e=document.getElementById("input-project-name").value,t=z(e,0);if(""!=e)return A.push(t),console.log(A),document.getElementById("input-project-name").value="",document.getElementById("add-project").style.display="flex",document.getElementById("add-project-form").style.display="none",j(),M(),te(),{projectTitle:e,tasksInProject:0,projectsArray:A};alert("Input the project name, please!")};var U=n(379),P=n.n(U),G=n(795),F=n.n(G),W=n(569),Z=n.n(W),Y=n(565),R=n.n(Y),_=n(216),J=n.n(_),Q=n(589),V=n.n(Q),X=n(426),K={};function ee(){document.querySelectorAll(".project").forEach((e=>{e.addEventListener("click",(t=>{t.target.classList.contains("edit-project")||t.target.classList.contains("remove-project")||C(e.querySelector("h4").textContent)}))}))}function te(){document.querySelectorAll(".remove-project").forEach((e=>{e.addEventListener("click",ne)}))}function ne(e){let t=e.target.closest(".project").querySelector("h4").innerHTML;console.log(t);const n=A.findIndex((e=>e.projectTitle===t));console.log(n),console.log(A),v=v.filter((e=>e.project!==t)),console.log(A),A.splice(n,1),$(ce),j(),M(),te(),se(),console.log("Here's toDoArray"),console.log(v)}function oe(){document.querySelectorAll(".checkbox").forEach((e=>{e.addEventListener("click",re)}))}function re(e){let t=e.target.closest(".task").querySelector("h4").innerHTML;const n=v.find((e=>e.title===t));console.log(n);const o=n.id;v.forEach((e=>{e.id===o&&(e.done=!e.done)})),$(ce),j(),M(),I(),te(),ie(),se()}function ie(){document.querySelectorAll(".remove-task").forEach((e=>{e.addEventListener("click",ae)}))}function ae(e){let t=e.target.closest(".task").querySelector("h4").innerHTML;v=v.filter((e=>e.title!==t)),console.log(v),$(ce),j(),M(),I(),te(),se()}function se(){document.querySelectorAll(".task").forEach((e=>{e.addEventListener("click",(e=>{e.target.classList.contains("checkbox")||e.target.classList.contains("edit-task")||e.target.classList.contains("remove-task")||function(){let e=event.target.closest(".task").querySelector("h4").innerHTML,t=v.find((t=>t.title===e));console.log(t),document.querySelector(".details-popup-title").innerHTML=t.title,""===t.project?document.querySelector(".details-popup-project").innerHTML="(No project)":document.querySelector(".details-popup-project").innerHTML=t.project,document.querySelector(".details-popup-priority").innerHTML=t.priority,document.querySelector(".details-popup-duedate").innerHTML=t.dueDate,document.querySelector(".details-popup-details").innerHTML=t.description,document.querySelector(".details-popup-id").innerHTML=t.id,document.querySelector(".overlay-details").classList.remove("overlay-details-invisible")}()}))}))}function le(){event.target.closest(".task").querySelector("h4").innerHTML,console.log("edit task")}K.styleTagTransform=V(),K.setAttributes=R(),K.insert=Z().bind(null,"head"),K.domAPI=F(),K.insertStyleElement=J(),P()(X.Z,K),X.Z&&X.Z.locals&&X.Z.locals,(()=>{const e=z("Chores",0);A.push(e);const t=z("Gym",0);A.push(t);const n=z("Education",0);A.push(n);const o=z("Health",0);A.push(o)})(),function(){const e=b(0,"Wash the dishes","Just wash the dishes lol","2023-07-23","Medium","Chores",!0);v.push(e);const t=b(1,"See the doctor","Have to know if you need this surgery","2023-07-24","High","Health",!1);v.push(t);const n=b(2,"100 push ups","JUST DO IT","2023-07-28","Medium","Gym",!0);v.push(n);const o=b(3,"Make the bed","No one sees it except you so screw it","2023-07-25","Low","Chores",!0);v.push(o);const r=b(4,"Get to do list app done","You HAVE TO finish it","2023-07-31","High","Education",!1);v.push(r);const i=b(5,"Watch naruto again","WHAT?","2023-08-10","Low","",!1);v.push(i);const a=b(6,"Learn React","You need this","2023-08-30","High","Education",!1);v.push(a);const s=b(7,"See friends","Spend some time with friends cuz your a hikka now","2023-12-14","Medium","",!0);v.push(s),console.log(v)}(),j(),S(),M(),te(),se(),oe(),ie(),function(){const e=document.getElementById("details-popup-close");console.log(e),e.addEventListener("click",q)}(),document.querySelectorAll(".edit-task").forEach((e=>{e.addEventListener("click",le)})),document.getElementById("add-task").addEventListener("click",D),document.getElementById("submit-add-task").addEventListener("click",k),document.getElementById("add-project").addEventListener("click",L),document.getElementById("submit-add-project").addEventListener("click",O),document.getElementById("all-tasks").addEventListener("click",H),document.getElementById("today").addEventListener("click",N),document.getElementById("this-week").addEventListener("click",B);let ce="All tasks"})()})();