(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(3),i=n.n(a),s=(n(9),n(10),n(0));var c=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(s.jsxs)("div",{className:"expense-date",children:[Object(s.jsx)("div",{className:"expense-date__month",children:t}),Object(s.jsx)("div",{className:"expense-date__year",children:a}),Object(s.jsx)("div",{className:"expense-date__day",children:n})]})},d=n(4),l=(n(12),n(1)),m=function(e){var t=Object(l.useState)(e.title),n=Object(d.a)(t,2),a=n[0],i=n[1];return Object(s.jsxs)("div",{className:"expense-item",children:[Object(s.jsx)(c,{date:e.date}),Object(s.jsxs)("div",{className:"expense-item__description",children:[Object(s.jsx)("h2",{children:a}),Object(s.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]}),Object(s.jsx)("button",{onClick:function(){i("Updated")},children:"Change values "})]})},o=(n(13),function(e){return Object(s.jsxs)("div",{className:"expenses",children:[Object(s.jsx)(m,{title:e.items[0].title,amount:e.items[0].amount,date:e.items[0].date}),Object(s.jsx)(m,{title:e.items[1].title,amount:e.items[1].amount,date:e.items[1].date}),Object(s.jsx)(m,{title:e.items[2].title,amount:e.items[2].amount,date:e.items[2].date}),Object(s.jsx)(m,{title:e.items[3].title,amount:e.items[3].amount,date:e.items[3].date})]})}),r=function(){var e=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];return Object(s.jsx)("div",{children:Object(s.jsx)(o,{items:e})})};i.a.render(Object(s.jsx)(r,{}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.8c0d1258.chunk.js.map