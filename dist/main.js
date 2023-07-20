(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(81),o=n.n(r),i=n(645),a=n.n(i),l=n(667),s=n.n(l),c=new URL(n(660),n.b),d=a()(o()),u=s()(c);d.push([e.id,"@font-face {\n    font-family: 'Horizon';\n    src: url("+u+") format('opentype');\n}\n  \n* {\n    margin: 0;\n    padding: 0;\n    font-weight: 100;\n}\n\nmain, footer {\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    font-weight: 100;\n}\n\n\nbody {\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    \n}\n\nheader {\n    font-family: 'Horizon';\n    background-color: darkslateblue;\n    color: white;\n    padding-left: 20px;\n    display: flex;\n    gap: 20px;\n    font-size: 25px;\n    align-items: center;\n    height: 100px;\n}\n\n#todo-logo {\n    width: 50px;\n    height: 50px;\n}\n\nmain {\n    display: grid;\n    grid-template-columns: auto 1fr;\n\n}\n\nmain img {\n    width: 30px;\n}\n\nnav {\n    border-right: darkslateblue 1px solid;\n    padding: 20px 50px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#first div {\n    display: flex;\n    gap: 20px;\n}\n\n#first div h4 {\n    flex: 1;\n    text-align: start;\n}\n\n#first div img {\n    width: 25px;\n}\n\n.project {\n    display: grid;\n    grid-template-columns: auto 3fr auto auto 1fr;\n    gap: 20px;\n    align-items: center;\n}\n\n.project-logo {\n    width: 25px;\n}\n\n.edit-project, .remove-project {\n    width: 20px;\n}\n\n#project-header, #notes-header {\n    display: grid;\n    grid-template-columns: 1fr auto;\n    gap: 20px;\n}\n\n#project-list {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#first, #project-div, #note-div {\n    display: grid;\n    gap: 10px;\n}\n\n.task {\n    display: grid;\n    grid-template-columns: auto 1fr repeat(3, auto);\n    gap: 20px;\n    align-items: center;\n    background-color: rgba(71, 61, 139, 0.12);\n    padding: 10px 15px;\n    transition: 0.2s;\n}\n\n.task:hover {\n    box-shadow: 5px 5px 5px rgba(71, 61, 139, 0.342);\n    transition: 0.2s;\n    transform: scale(1.01);\n}\n\n#task-list {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#main-container {\n    padding: 40px;\n    background-color: rgb(254, 243, 227);\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\nfooter  {\n    background-color: darkslateblue;\n    color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n    padding: 10px;\n    font-weight: 400;\n}\n\nfooter a {\n    font-weight: 400;\n    text-decoration: none;\n    color: inherit;\n}\n\nfooter img {\n    width: 25px;\n    height: 25px;\n}\n\nbutton {\n    background-color: inherit;\n    border: none;\n    font-size: 30px;\n}\n\nh4, button {\n    font-size: 25px;\n    font-weight: 50;\n}\n\nh3, h2 {\n    font-size: 30px;\n    font-weight: 600;\n}\n\n.add-button {\n    text-align: start;\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    font-weight: 500;\n    border-radius: 10px;\n    transition: 0.2s;\n}\n\n.add-button, #first div, .project {\n    padding: 10px 15px;\n}\n\n#project-header, #notes-header {\n    padding: 10px 0px;\n    padding-right: 15px;\n}\n\n.add-button:hover img, .edit-project:hover,\n .remove-project:hover, .edit-task:hover, .remove-task:hover{\n    animation: rotation 1s infinite linear;\n    transition: 0.2s;\n}\n\n.add-button:hover, .project:hover, #first div:hover {\n    background-color: rgba(71, 61, 139, 0.12);\n    transition: 0.2s;\n}\n\n\n.add-button img {\n    width: 20px;\n    height: 20px;\n    transition: 0.2s;\n}\n  \n@keyframes rotation {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(359deg);\n    }\n}\n\n.checkbox {\n    width: 20px;\n    height: 20px;\n    cursor: pointer;\n}\n\n.checkbox {\n    accent-color:  darkslateblue;\n}\n\n.counter {\n    font-size: 20px;\n    font-weight: 600;\n    color: darkslateblue;\n    text-align: end;\n    align-self: center;\n}\n\n#add-task-form, #add-project-form {\n    background-color: white;\n    padding: 20px;\n    display: none;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 30px;\n}\n\n#add-task-form *, #add-project-form * {\n    font-size: 20px;\n    padding: 5px 20px;\n}\n\n#input-title, #input-description {\n    border: 0px;\n}\n\n#input-title:focus, #input-description:focus {\n    outline: none;\n}\n\n#input-date {\n    border-radius: 5px;\n}\n\n#add-task-form input {\n    background-color: white;\n}\n\n\n#priority {\n    display: flex;\n    gap: 10px;\n    justify-content: stretch;\n}\n\n#low {\n    border: 2px green solid;\n    color: green;\n}\n\n#low:hover {\n    background-color: green;\n    color: white;\n}\n\n#medium {\n    border: 2px rgb(255, 208, 0) solid;\n    color: rgb(255, 208, 0);\n}\n\n#medium:hover {\n    background-color: rgb(255, 208, 0);\n    color: white;\n}\n\n#high {\n    border: 2px red solid;\n    color: red;\n}\n\n#high:hover {\n    background-color: red;\n    color: white;\n}\n\n#priority option {\n    font-weight: 500;\n    border-radius: 5px;\n}\n",""]);const p=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],l=0;l<e.length;l++){var s=e[l],c=r.base?s[0]+r.base:s[0],d=i[c]||0,u="".concat(c," ").concat(d);i[c]=d+1;var p=n(u),g={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(g);else{var m=o(g,r);r.byIndex=l,t.splice(l,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var l=n(i[a]);t[l].references--}for(var s=r(e,o),c=0;c<i.length;c++){var d=n(i[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},660:(e,t,n)=>{e.exports=n.p+"2ecdaee4a5d44762c253.otf"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0;var r={};(()=>{n.d(r,{m:()=>G}),Math.pow(10,8);var e=36e5;function t(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function o(n,r){var o;t(1,arguments);var g=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}(null!==(o=null==r?void 0:r.additionalDigits)&&void 0!==o?o:2);if(2!==g&&1!==g&&0!==g)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof n&&"[object String]"!==Object.prototype.toString.call(n))return new Date(NaN);var m,f=function(e){var t,n={},r=e.split(i.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?t=r[0]:(n.date=r[0],t=r[1],i.timeZoneDelimiter.test(n.date)&&(n.date=e.split(i.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var o=i.timezone.exec(t);o?(n.time=t.replace(o[1],""),n.timezone=o[1]):n.time=t}return n}(n);if(f.date){var h=function(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};var o=r[1]?parseInt(r[1]):null,i=r[2]?parseInt(r[2]):null;return{year:null===i?o:100*i,restDateString:e.slice((r[1]||r[2]).length)}}(f.date,g);m=function(e,t){if(null===t)return new Date(NaN);var n=e.match(a);if(!n)return new Date(NaN);var r=!!n[4],o=c(n[1]),i=c(n[2])-1,l=c(n[3]),s=c(n[4]),d=c(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,s,d)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var o=7*(t-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+o),r}(t,s,d):new Date(NaN);var g=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(u[t]||(p(e)?29:28))}(t,i,l)&&function(e,t){return t>=1&&t<=(p(e)?366:365)}(t,o)?(g.setUTCFullYear(t,i,Math.max(o,l)),g):new Date(NaN)}(h.restDateString,h.year)}if(!m||isNaN(m.getTime()))return new Date(NaN);var y,v=m.getTime(),x=0;if(f.time&&(x=function(t){var n=t.match(l);if(!n)return NaN;var r=d(n[1]),o=d(n[2]),i=d(n[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(r,o,i)?r*e+6e4*o+1e3*i:NaN}(f.time),isNaN(x)))return new Date(NaN);if(!f.timezone){var b=new Date(v+x),k=new Date(0);return k.setFullYear(b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()),k.setHours(b.getUTCHours(),b.getUTCMinutes(),b.getUTCSeconds(),b.getUTCMilliseconds()),k}return y=function(t){if("Z"===t)return 0;var n=t.match(s);if(!n)return 0;var r="+"===n[1]?-1:1,o=parseInt(n[2]),i=n[3]&&parseInt(n[3])||0;return function(e,t){return t>=0&&t<=59}(0,i)?r*(o*e+6e4*i):NaN}(f.timezone),isNaN(y)?new Date(NaN):new Date(v+x+y)}var i={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},a=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,l=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,s=/^([+-])(\d{2})(?::?(\d{2}))?$/;function c(e){return e?parseInt(e):1}function d(e){return e&&parseFloat(e.replace(",","."))||0}var u=[31,null,31,30,31,30,31,31,30,31,30,31];function p(e){return e%400==0||e%4==0&&e%100!=0}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function m(){return function(e){t(1,arguments);var n=function(e){t(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"===g(e)&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}(e);return n.setHours(0,0,0,0),n}(Date.now())}let f=[];function h(e,t,n,r,o,i){return{title:e,description:t,dueDate:n,priority:r,project:o,done:i}}const y=()=>{let e=document.getElementById("input-title").value,t=document.getElementById("input-description").value,n=document.getElementById("input-date").value,r=document.getElementById("input-priority").value,i=document.getElementById("Project").value,a=h(e,t,n,r,i,!1);if(""!=e&&""!=t&&""!=n)return o(n)<m()?(alert("You have entered a date that has already passed!"),console.log("Due date: ",o(n)),void console.log("Date now: ",m())):(f.push(a),console.log(f),b(),w(),document.getElementById("input-title").value="",document.getElementById("input-description").value="",document.getElementById("input-date").value="",document.getElementById("add-task").style.display="flex",document.getElementById("add-task-form").style.display="none","All tasks"==G?D():"Today"==G?E():"This week"==G&&j(),{title:e,description:t,dueDate:n,priority:r,project:i,done:!1,toDoArray:f});alert("All the fields are required, please try again!")};function v(){document.getElementById("add-task-form").style.display="grid",document.getElementById("add-task").style.display="none"}function x(){document.getElementById("add-project-form").style.display="grid",document.getElementById("add-project").style.display="none"}function b(){for(let e in T){let t=0;console.log(T[e]);for(let n in f)f[n].project===T[e].projectTitle&&(t+=1);T[e].tasksInProject=t}}function k(){let e=document.getElementById("task-list");e.innerHTML="";for(let t in f){let n=document.createElement("div");n.classList.add("task");let r="";f[t].done&&(r="checked"),n.innerHTML=`\n        <input type="checkbox" class="checkbox" ${r}>\n        <h4>${f[t].title}</h4>\n        <p>${f[t].dueDate}</p>\n        <img class="edit-task" src="../src/images/edit-logo.png" alt="Edit logo">\n        <img class="remove-task" src="../src/images/delete.png" alt="Delete logo">\n        `,console.log(f[t].priority),n.style.border=`${f[t].priority} solid 3px`,console.log(n.style.border),console.log(f[t].project),e.appendChild(n)}console.log(f)}function w(){let e=document.getElementById("project-list");e.innerHTML="";for(let t in T){let n=document.createElement("div");n.classList.add("project"),n.innerHTML=`\n        <img class="project-logo" src="../src/images/project-logo.png" alt="Project Logo">\n        <h4>${T[t].projectTitle}</h4>\n        <img class="edit-project" src="../src/images/edit-logo.png" alt="Edit logo">\n        <img class="remove-project" src="../src/images/delete.png" alt="Delete logo">\n        <p class="counter">${T[t].tasksInProject}</p>\n        `,e.appendChild(n)}let t=document.getElementById("Project");t.innerHTML="";for(let e in T){let n=document.createElement("option");n.value=T[e].projectTitle,n.innerHTML=T[e].projectTitle,t.appendChild(n)}!function(){let e=document.getElementById("all-tasks-counter"),t=(document.getElementById("today-counter"),document.getElementById("this-week-counter"),document.getElementById("project-counter")),n=[];for(let e in f)0==f[e].done&&n.push(f[e]);e.innerHTML=n.length,t.innerHTML=T.length}()}function D(){document.getElementById("content-h2").innerHTML="All tasks",G="All tasks",k(),w()}function E(){document.getElementById("content-h2").innerHTML="Today",G="Today",function(){let e=document.getElementById("task-list");e.innerHTML="";for(let t in f){const n=new Date;let r="";f[t].done&&(r="checked");let o=String(n.getDate()).padStart(2,"0"),i=String(n.getMonth()+1).padStart(2,"0");if(`${n.getFullYear()}-${i}-${o}`===f[t].dueDate){let n=document.createElement("div");n.classList.add("task"),n.innerHTML=`\n            <input type="checkbox" class="checkbox" ${r}>\n            <h4>${f[t].title}</h4>\n            <p>${f[t].dueDate}</p>\n            <img class="edit-task" src="../src/images/edit-logo.png" alt="Edit logo">\n            <img class="remove-task" src="../src/images/delete.png" alt="Delete logo">\n            `,console.log(f[t].priority),n.style.border=`${f[t].priority} solid 3px`,console.log(n.style.border),console.log(f[t].project),e.appendChild(n)}}}(),w()}function j(){document.getElementById("content-h2").innerHTML="This week",G="This week",function(){let e=document.getElementById("task-list");e.innerHTML="";for(let n in f){let r="";f[n].done&&(r="checked"),Date.prototype.GetFirstDayOfWeek=function(){return new Date(this.setDate(this.getDate()-this.getDay()+(0==this.getDay()?-6:1)))},Date.prototype.GetLastDayOfWeek=function(){return new Date(this.setDate(this.getDate()-this.getDay()+7))};var t=new Date;let o=new Date(`${f[n].dueDate}`);if(console.log(o>=t.GetFirstDayOfWeek()&&o<=t.GetLastDayOfWeek()),o>=t.GetFirstDayOfWeek()&&o<=t.GetLastDayOfWeek()){let t=document.createElement("div");t.classList.add("task"),t.innerHTML=`\n            <input type="checkbox" class="checkbox" ${r}>\n            <h4>${f[n].title}</h4>\n            <p>${f[n].dueDate}</p>\n            <img class="edit-task" src="../src/images/edit-logo.png" alt="Edit logo">\n            <img class="remove-task" src="../src/images/delete.png" alt="Delete logo">\n            `,t.style.border=`${f[n].priority} solid 3px`,e.appendChild(t)}}}(),w()}let T=[];function I(e,t){return{projectTitle:e,tasksInProject:t}}const N=()=>{let e=document.getElementById("input-project-name").value,t=I(e,0);if(""!=e)return T.push(t),console.log(T),document.getElementById("input-project-name").value="",document.getElementById("add-project").style.display="flex",document.getElementById("add-project-form").style.display="none",b(),w(),{projectTitle:e,tasksInProject,projectsArray:T};alert("Input the project name, please!")};var B=n(379),S=n.n(B),L=n(795),M=n.n(L),C=n(569),$=n.n(C),H=n(565),U=n.n(H),z=n(216),A=n.n(z),P=n(589),O=n.n(P),F=n(426),Z={};Z.styleTagTransform=O(),Z.setAttributes=U(),Z.insert=$().bind(null,"head"),Z.domAPI=M(),Z.insertStyleElement=A(),S()(F.Z,Z),F.Z&&F.Z.locals&&F.Z.locals,(()=>{const e=I("Chores",0);T.push(e),console.log(T)})(),function(){const e=h("Wash the dishes","Just wash the dishes lol","2023-07-30","high","Chores",!0);f.push(e);const t=h("See friends","Spend some time with friends cuz your a hikka now","2023-12-14","medium","",!1);f.push(t),console.log(f)}(),b(),k(),w(),document.getElementById("add-task").addEventListener("click",v),document.getElementById("submit-add-task").addEventListener("click",y),document.getElementById("add-project").addEventListener("click",x),document.getElementById("submit-add-project").addEventListener("click",N),document.getElementById("all-tasks").addEventListener("click",D),document.getElementById("today").addEventListener("click",E),document.getElementById("this-week").addEventListener("click",j),document.querySelectorAll(".task").forEach((e=>{e.addEventListener("click",(()=>{console.log(f[e])}))}));let G="All tasks";const W=document.getElementsByClassName("task");console.log(W)})()})();