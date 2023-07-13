(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>p});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),s=t(667),l=t.n(s),c=new URL(t(660),t.b),d=a()(o()),u=l()(c);d.push([n.id,"@font-face {\n    font-family: 'Horizon';\n    src: url("+u+") format('opentype');\n}\n  \n* {\n    margin: 0;\n    padding: 0;\n    font-weight: 100;\n}\n\nmain, footer {\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    font-weight: 100;\n}\n\n\nbody {\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    \n}\n\nheader {\n    font-family: 'Horizon';\n    background-color: darkslateblue;\n    color: white;\n    padding-left: 20px;\n    display: flex;\n    gap: 20px;\n    font-size: 25px;\n    align-items: center;\n    height: 100px;\n}\n\n#todo-logo {\n    width: 50px;\n    height: 50px;\n}\n\nmain {\n    display: grid;\n    grid-template-columns: auto 1fr;\n\n}\n\nmain img {\n    width: 30px;\n}\n\nnav {\n    border-right: darkslateblue 1px solid;\n    padding: 20px 50px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#first div {\n    display: flex;\n    gap: 20px;\n}\n\n#first div h4 {\n    flex: 1;\n    text-align: start;\n}\n\n#first div img {\n    width: 25px;\n}\n\n.project {\n    display: grid;\n    grid-template-columns: auto 3fr auto auto 1fr;\n    gap: 20px;\n    align-items: center;\n}\n\n.project-logo {\n    width: 25px;\n}\n\n.edit-project, .remove-project {\n    width: 20px;\n}\n\n#project-header, #notes-header {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 20px;\n}\n\n#project-list {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#first, #project-div, #note-div {\n    display: grid;\n    gap: 10px;\n}\n\n.task {\n    display: grid;\n    grid-template-columns: auto 1fr repeat(3, auto);\n    gap: 20px;\n    align-items: center;\n    background-color: rgba(71, 61, 139, 0.12);\n    padding: 10px 15px;\n    transition: 0.2s;\n}\n\n.task:hover {\n    box-shadow: 5px 5px 5px rgba(71, 61, 139, 0.342);\n    transition: 0.2s;\n    transform: scale(1.01);\n}\n\n#task-list {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#main-container {\n    padding: 40px;\n    background-color: rgb(254, 243, 227);\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\nfooter  {\n    background-color: darkslateblue;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n    padding: 10px;\n    font-weight: 400;\n}\n\nfooter a {\n    font-weight: 400;\n    text-decoration: none;\n    color: inherit;\n}\n\nfooter img {\n    width: 25px;\n    height: 25px;\n}\n\nbutton {\n    background-color: inherit;\n    border: none;\n    font-size: 30px;\n}\n\nh4, button {\n    font-size: 25px;\n    font-weight: 50;\n}\n\nh3, h2 {\n    font-size: 30px;\n    font-weight: 600;\n}\n\n.add-button {\n    text-align: start;\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    font-weight: 500;\n    border-radius: 10px;\n    transition: 0.2s;\n}\n\n.add-button, #first div, .project {\n    padding: 10px 15px;\n}\n\n#project-header, #notes-header {\n    padding: 10px 0px;\n    padding-right: 15px;\n}\n\n.add-button:hover img, .edit-project:hover,\n .remove-project:hover, .edit-task:hover, .remove-task:hover{\n    animation: rotation 1s infinite linear;\n    transition: 0.2s;\n}\n\n.add-button:hover, .project:hover, #first div:hover {\n    background-color: rgba(71, 61, 139, 0.12);\n    transition: 0.2s;\n}\n\n\n.add-button img {\n    width: 20px;\n    height: 20px;\n    transition: 0.2s;\n}\n  \n@keyframes rotation {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(359deg);\n    }\n}\n\n.checkbox {\n    width: 20px;\n    height: 20px;\n    cursor: pointer;\n}\n\n.checkbox {\n    accent-color:  darkslateblue;\n}\n\n.counter {\n    font-size: 20px;\n    font-weight: 600;\n    color: darkslateblue;\n    text-align: end;\n    align-self: center;\n}\n\n#add-task-form {\n    background-color: white;\n    padding: 20px;\n    display: none;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 30px;\n}\n\n#add-task-form * {\n    font-size: 20px;\n    padding: 5px 20px;\n}\n\n#input-title, #input-description {\n    border: 0px;\n}\n\n#input-title:focus, #input-description:focus {\n    outline: none;\n}\n\n#input-date {\n    border-radius: 5px;\n}\n\n#add-task-form input {\n    background-color: white;\n}\n\n\n#priority {\n    display: flex;\n    gap: 10px;\n    justify-content: stretch;\n}\n\n#low {\n    border: 2px green solid;\n    color: green;\n}\n\n#low:hover {\n    background-color: green;\n    color: white;\n}\n\n#medium {\n    border: 2px rgb(255, 208, 0) solid;\n    color: rgb(255, 208, 0);\n}\n\n#medium:hover {\n    background-color: rgb(255, 208, 0);\n    color: white;\n}\n\n#high {\n    border: 2px red solid;\n    color: red;\n}\n\n#high:hover {\n    background-color: red;\n    color: white;\n}\n\n#priority option {\n    font-weight: 500;\n    border-radius: 5px;\n}\n",""]);const p=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var l=n[s],c=r.base?l[0]+r.base:l[0],d=i[c]||0,u="".concat(c," ").concat(d);i[c]=d+1;var p=t(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var g=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:g,references:1})}a.push(u)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var l=r(n,o),c=0;c<i.length;c++){var d=t(i[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=l}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},660:(n,e,t)=>{n.exports=t.p+"2ecdaee4a5d44762c253.otf"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{let n=[];Math.pow(10,8);var e=36e5;function r(n,e){if(e.length<n)throw new TypeError(n+" argument"+(n>1?"s":"")+" required, but only "+e.length+" present")}function o(n,t){var o;r(1,arguments);var f=function(n){if(null===n||!0===n||!1===n)return NaN;var e=Number(n);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}(null!==(o=null==t?void 0:t.additionalDigits)&&void 0!==o?o:2);if(2!==f&&1!==f&&0!==f)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof n&&"[object String]"!==Object.prototype.toString.call(n))return new Date(NaN);var g,m=function(n){var e,t={},r=n.split(i.dateTimeDelimiter);if(r.length>2)return t;if(/:/.test(r[0])?e=r[0]:(t.date=r[0],e=r[1],i.timeZoneDelimiter.test(t.date)&&(t.date=n.split(i.timeZoneDelimiter)[0],e=n.substr(t.date.length,n.length))),e){var o=i.timezone.exec(e);o?(t.time=e.replace(o[1],""),t.timezone=o[1]):t.time=e}return t}(n);if(m.date){var h=function(n,e){var t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=n.match(t);if(!r)return{year:NaN,restDateString:""};var o=r[1]?parseInt(r[1]):null,i=r[2]?parseInt(r[2]):null;return{year:null===i?o:100*i,restDateString:n.slice((r[1]||r[2]).length)}}(m.date,f);g=function(n,e){if(null===e)return new Date(NaN);var t=n.match(a);if(!t)return new Date(NaN);var r=!!t[4],o=c(t[1]),i=c(t[2])-1,s=c(t[3]),l=c(t[4]),d=c(t[5])-1;if(r)return function(n,e,t){return e>=1&&e<=53&&t>=0&&t<=6}(0,l,d)?function(n,e,t){var r=new Date(0);r.setUTCFullYear(n,0,4);var o=7*(e-1)+t+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+o),r}(e,l,d):new Date(NaN);var f=new Date(0);return function(n,e,t){return e>=0&&e<=11&&t>=1&&t<=(u[e]||(p(n)?29:28))}(e,i,s)&&function(n,e){return e>=1&&e<=(p(n)?366:365)}(e,o)?(f.setUTCFullYear(e,i,Math.max(o,s)),f):new Date(NaN)}(h.restDateString,h.year)}if(!g||isNaN(g.getTime()))return new Date(NaN);var v,y=g.getTime(),x=0;if(m.time&&(x=function(n){var t=n.match(s);if(!t)return NaN;var r=d(t[1]),o=d(t[2]),i=d(t[3]);return function(n,e,t){return 24===n?0===e&&0===t:t>=0&&t<60&&e>=0&&e<60&&n>=0&&n<25}(r,o,i)?r*e+6e4*o+1e3*i:NaN}(m.time),isNaN(x)))return new Date(NaN);if(!m.timezone){var b=new Date(y+x),w=new Date(0);return w.setFullYear(b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()),w.setHours(b.getUTCHours(),b.getUTCMinutes(),b.getUTCSeconds(),b.getUTCMilliseconds()),w}return v=function(n){if("Z"===n)return 0;var t=n.match(l);if(!t)return 0;var r="+"===t[1]?-1:1,o=parseInt(t[2]),i=t[3]&&parseInt(t[3])||0;return function(n,e){return e>=0&&e<=59}(0,i)?r*(o*e+6e4*i):NaN}(m.timezone),isNaN(v)?new Date(NaN):new Date(y+x+v)}var i={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},a=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,s=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,l=/^([+-])(\d{2})(?::?(\d{2}))?$/;function c(n){return n?parseInt(n):1}function d(n){return n&&parseFloat(n.replace(",","."))||0}var u=[31,null,31,30,31,30,31,31,30,31,30,31];function p(n){return n%400==0||n%4==0&&n%100!=0}function f(n){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},f(n)}function g(){return function(n){r(1,arguments);var e=function(n){r(1,arguments);var e=Object.prototype.toString.call(n);return n instanceof Date||"object"===f(n)&&"[object Date]"===e?new Date(n.getTime()):"number"==typeof n||"[object Number]"===e?new Date(n):("string"!=typeof n&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}(n);return e.setHours(0,0,0,0),e}(Date.now())}function m(){document.getElementById("add-task-form").style.display="grid",document.getElementById("add-task").style.display="none"}function h(){for(let e in n){let t=0;console.log(n[e]);for(let r in y)y[r].project===n[e].projectTitle&&(t+=1);n[e].tasksInProject=t}}function v(){let e=document.getElementById("project-list");e.innerHTML="";for(let t in n){let r=document.createElement("div");r.classList.add("project"),r.innerHTML=`\n        <img class="project-logo" src="../src/images/project-logo.png" alt="Project Logo">\n        <h4>${n[t].projectTitle}</h4>\n        <img class="edit-project" src="../src/images/edit-logo.png" alt="Edit logo">\n        <img class="remove-project" src="../src/images/delete.png" alt="Delete logo">\n        <p class="counter">${n[t].tasksInProject}</p>\n        `,e.appendChild(r)}let t=document.getElementById("Project");t.innerHTML="";for(let e in n){let r=document.createElement("option");r.value=n[e].projectTitle,r.innerHTML=n[e].projectTitle,t.appendChild(r)}let r=document.getElementById("task-list");r.innerHTML="";for(let n in y){let e=document.createElement("div");e.classList.add("task"),e.innerHTML=`\n        <input type="checkbox" class="checkbox">\n        <h4>${y[n].title}</h4>\n        <p>${y[n].dueDate}</p>\n        <img class="edit-task" src="../src/images/edit-logo.png" alt="Edit logo">\n        <img class="remove-task" src="../src/images/delete.png" alt="Delete logo">\n        `,console.log(y[n].project),r.appendChild(e)}console.log(y);let o=document.getElementById("all-tasks-counter"),i=(document.getElementById("today-counter"),document.getElementById("this-week-counter"),document.getElementById("project-counter"));o.innerHTML=y.length,i.innerHTML=n.length}let y=[];function x(n,e,t,r,o,i){return{title:n,description:e,dueDate:t,priority:r,project:o,done:i}}const b=()=>{let n=document.getElementById("input-title").value,e=document.getElementById("input-description").value,t=document.getElementById("input-date").value,r=document.getElementById("input-priority").value,i=document.getElementById("Project").value,a=x(n,e,t,r,i,!1);if(""!=n&&""!=e&&""!=t)return o(t)<g()?(alert("You have entered a date that has already passed!"),console.log("Due date: ",o(t)),void console.log("Date now: ",g())):(y.push(a),console.log(y),document.getElementById("input-title").value="",document.getElementById("input-description").value="",document.getElementById("input-date").value="",document.getElementById("add-task").style.display="flex",document.getElementById("add-task-form").style.display="none",h(),v(),{title:n,description:e,dueDate:t,priority:r,project:i,done:!1,toDoArray:y});alert("All the fields are required, please try again!")};var w=t(379),k=t.n(w),j=t(795),T=t.n(j),N=t(569),D=t.n(N),E=t(565),I=t.n(E),S=t(216),C=t.n(S),M=t(589),B=t.n(M),L=t(426),U={};U.styleTagTransform=B(),U.setAttributes=I(),U.insert=D().bind(null,"head"),U.domAPI=T(),U.insertStyleElement=C(),k()(L.Z,U),L.Z&&L.Z.locals&&L.Z.locals,n.push({projectTitle:"Chores",tasksInProject:0}),console.log(n),function(){const n=x("Wash the dishes","Just wash the dishes lol","Feb 27th","high","Chores",!1);y.push(n);const e=x("See friends","Spend some time with friends cuz your a hikka now","June 2nd","medium","",!1);y.push(e),console.log(y)}(),h(),v(),document.getElementById("add-task").addEventListener("click",m),document.getElementById("submit-add-task").addEventListener("click",b)})()})();