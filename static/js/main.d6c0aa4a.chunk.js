(this["webpackJsonpclass3-redux-config-from-class1-redux-intro"]=this["webpackJsonpclass3-redux-config-from-class1-redux-intro"]||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(9),o=n(4),u=n(2),i="INCREMENT_COUNTER",s="DECREMENT_COUNTER";function a(t,e){localStorage.setItem(t,JSON.stringify(e))}var l={counter:function(t){try{var e=localStorage.getItem(t);return e=JSON.parse(e)}catch(n){return}}("counter")||0,todos:{id:1,title:"Buy Milk",status:!1}},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0,n=e.type,c=e.payload;switch(n){case i:var r=t.counter+c;return a("counter",r),Object(u.a)(Object(u.a)({},t),{},{counter:r,todos:Object(u.a)({},t.todos)});case s:return Object(u.a)(Object(u.a)({},t),{},{counter:t.counter-c});default:return t}},j="LOGIN_SUCCESS",O="LOGIN_FAILURE",b={isAuth:!1,token:""},f=Object(o.b)({mainApp:d,AuthReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0,n=e.type,c=e.payload;switch(n){case j:return Object(u.a)(Object(u.a)({},t),{},{isAuth:!0,token:c});case O:return Object(u.a)(Object(u.a)({},t),{},{isAuth:!1,token:""});default:return t}}}),h=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,g=Object(o.d)(f,h(Object(o.a)((function(t){return function(t){return function(e){console.log("Dispatching action 1 - a",t);var n=t(e);return console.log("After return 1 - b",n),n}}}),(function(t){return function(t){return function(e){console.log("Dispatching action 2 - c",e);var n=t(e);return console.log("After return 2 - d",n),n}}})))),p=n(3),v=n(1),x=function(){var t=Object(p.d)((function(t){return t.mainApp.counter})),e=Object(p.c)();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("h1",{children:["Counter ",t]}),Object(v.jsx)("button",{onClick:function(){var t={type:i,payload:10};e(t)},children:"Increment"}),Object(v.jsx)("button",{children:"Decrement"})]})},E=function(){var t=Object(p.d)((function(t){return t.todos}),p.b);return console.log("Rendering test component",t),Object(v.jsxs)("div",{children:["Test Component ",null!==t&&void 0!==t&&t.length?"true":"false"]})};n(25);function m(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(x,{}),Object(v.jsx)(E,{})]})}var N=document.getElementById("root"),S=Object(r.createRoot)(N);console.log(g.getState()),S.render(Object(v.jsx)(c.StrictMode,{children:Object(v.jsx)(p.a,{store:g,children:Object(v.jsx)(m,{})})}))}},[[26,1,2]]]);
//# sourceMappingURL=main.d6c0aa4a.chunk.js.map