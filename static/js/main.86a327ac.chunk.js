(this["webpackJsonpshift-schedule"]=this["webpackJsonpshift-schedule"]||[]).push([[0],{13:function(e,n,t){e.exports=t(25)},18:function(e,n,t){},19:function(e,n,t){},22:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),a=t(6),i=t.n(a),c=(t(18),t(4)),l=(t(19),t(7)),s=t(8),u=t(11),d=t(12),f=t(10),m=["\u4f11\u5047","\u65e9\u73ed","\u65e9\u73ed","\u65e9\u73ed","\u65e9\u73ed","\u65e9\u73ed","\u4f11\u5047","\u4f11\u5047","\u665a\u73ed","\u665a\u73ed","\u665a\u73ed","\u665a\u73ed","\u665a\u73ed","\u4f11\u5047","\u4f11\u5047","\u4e2d\u73ed","\u4e2d\u73ed","\u4e2d\u73ed","\u4e2d\u73ed","\u4e2d\u73ed"],p=["\u65e9\u73ed","\u4f11\u5047","\u4f11\u5047","\u665a\u73ed","\u665a\u73ed","\u665a\u73ed","\u665a\u73ed","\u665a\u73ed","\u4f11\u5047","\u4f11\u5047","\u4e2d\u73ed","\u4e2d\u73ed","\u4e2d\u73ed","\u4e2d\u73ed","\u4e2d\u73ed","\u4f11\u5047","\u65e9\u73ed","\u65e9\u73ed","\u65e9\u73ed","\u65e9\u73ed"],h=["\u665a\u73ed","\u665a\u73ed","\u665a\u73ed","\u4f11\u5047","\u4f11\u5047","\u4e2d\u73ed","\u4e2d\u73ed","\u4e2d\u73ed","\u4e2d\u73ed","\u4e2d\u73ed","\u4f11\u5047","\u65e9\u73ed","\u65e9\u73ed","\u65e9\u73ed","\u65e9\u73ed","\u65e9\u73ed","\u4f11\u5047","\u4f11\u5047","\u665a\u73ed","\u665a\u73ed"],v=["\u4e2d\u73ed","\u4e2d\u73ed","\u4e2d\u73ed","\u4e2d\u73ed","\u4e2d\u73ed","\u4f11\u5047","\u65e9\u73ed","\u65e9\u73ed","\u65e9\u73ed","\u65e9\u73ed","\u65e9\u73ed","\u4f11\u5047","\u4f11\u5047","\u665a\u73ed","\u665a\u73ed","\u665a\u73ed","\u665a\u73ed","\u665a\u73ed","\u4f11\u5047","\u4f11\u5047"],w=t(2),b={A:function(){return m},B:function(){return p},C:function(){return h},D:function(){return v}};function g(e,n){return function(e){return b[e]()}(n)[function(e){var n=new Date(e),t=w("2020-01-06");return w(n).diff(t,"days")}(e)%20]}function y(e,n){return g(e,n)}var k=["\u4e00\u6708","\u4e8c\u6708","\u4e09\u6708","\u56db\u6708","\u4e94\u6708","\u516d\u6708","\u4e03\u6708","\u516b\u6708","\u4e5d\u6708","\u5341\u6708","\u5341\u4e00\u6708","\u5341\u4e8c\u6708"],C=(t(21),t(22),function(e){Object(d.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=n.call.apply(n,[this].concat(a))).renderDate=function(n){var t=Date.parse(n);if(!(new Date(t).getFullYear()<2020))return y(t,e.props.department)},e.renderMonthName=function(e){var n=Date.parse(e),t=new Date(n);return k[t.getMonth()]},e.renderTileContent=function(n){var t=n.date,r=n.view;return"month"===r?o.a.createElement("p",null,e.renderDate(t)):"year"===r&&o.a.createElement("p",null,e.renderMonthName(t))},e.renderTileClass=function(n){var t=n.date;return"month"===n.view&&"\u4f11\u5047"===e.renderDate(t)?"holidayCalendarStyle":"nonHolidayCalendarStyle"},e}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"calendar-container"}," ",o.a.createElement(f.a,{tileClassName:this.renderTileClass,tileContent:this.renderTileContent,calendarType:"US"}))}}]),t}(r.Component)),E=t(9),A=t.n(E);var S,D=function(){var e=Object(r.useState)(!1),n=Object(c.a)(e,2),t=n[0],a=n[1],i=Object(r.useState)(),l=Object(c.a)(i,2),s=l[0],u=l[1],d=function(e){s!==e.target.id&&a(!1),console.log("show",t),u(e.target.id),setTimeout((function(){a(!0)}),0)};return o.a.createElement("div",{className:"App"}," ",o.a.createElement("h2",null,"\u8acb\u9078\u5247\u4f60\u7684\u80a1"),o.a.createElement(A.a,{onAddToHomescreenClick:function(){alert('\n      1. Open Share menu\n      2. Tap on "Add to Home Screen" button')}}),o.a.createElement("div",{className:"buttons-container"},o.a.createElement("button",{className:"department-button",id:"A",onClick:d},"A"),o.a.createElement("button",{className:"department-button",id:"B",onClick:d},"B"),o.a.createElement("button",{className:"department-button",id:"C",onClick:d},"C"),o.a.createElement("button",{className:"department-button",id:"D",onClick:function(e){return d(e)}},"D")),t&&o.a.createElement(C,{department:s}))},N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(D,null),o.a.createElement("button",{class:"add-button"},"Add to home screen")),document.getElementById("root"));var O=document.querySelector(".add-button");O.style.display="none",window.addEventListener("beforeinstallprompt",(function(e){e.preventDefault(),S=e,O.style.display="block",O.addEventListener("click",(function(e){O.style.display="none",S.prompt(),S.userChoice.then((function(e){"accepted"===e.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),S=null}))}))})),function(e){if("serviceWorker"in navigator){if(new URL("/work-shift-calendar",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/work-shift-calendar","/service-worker.js");N?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(n,e)}))}}()}},[[13,1,2]]]);
//# sourceMappingURL=main.86a327ac.chunk.js.map