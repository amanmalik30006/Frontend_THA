(this.webpackJsonptha21=this.webpackJsonptha21||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(6),s=n.n(i),r=(n(12),n(7)),u=n(2),l=(n(13),n(14),n(0)),o=function(e){var t=Object(c.useState)(""),n=Object(u.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)(0),r=Object(u.a)(s,2),o=r[0],d=r[1];return Object(l.jsxs)("form",{className:"CreateItem",children:[Object(l.jsxs)("div",{className:"inputs",children:[Object(l.jsx)("input",{type:"text",name:"item",placeholder:"Item name",value:a,onChange:function(e){i(e.target.value)},required:!0}),Object(l.jsx)("input",{type:"number",name:"calories",placeholder:"Calories",value:o,onChange:function(e){d(e.target.value)},required:!0})]}),Object(l.jsx)("button",{onClick:function(t){t.preventDefault(),e.addItem(a,o)},children:"Add Item"})]})},d=(n(16),function(e){var t=e.item,n=Object(c.useState)(!1),a=Object(u.a)(n,2),i=a[0],s=a[1],r=Object(c.useState)(""),o=Object(u.a)(r,2),d=o[0],j=o[1],m=Object(c.useState)(0),b=Object(u.a)(m,2),h=b[0],O=b[1];Object(c.useEffect)((function(){j(t.name),O(t.calories)}),[]);return Object(l.jsxs)("div",{className:"Item",children:[i?Object(l.jsxs)("div",{className:"input-header",children:[Object(l.jsx)("input",{type:"text",name:"item",placeholder:"Item name",value:d,onChange:function(e){j(e.target.value)},required:!0}),Object(l.jsx)("input",{type:"number",name:"calories",placeholder:"Calories",value:h,onChange:function(e){O(e.target.value)},required:!0})]}):Object(l.jsxs)("div",{className:"text-header",children:[Object(l.jsx)("h5",{children:t.name}),Object(l.jsx)("p",{children:"You have consumed ".concat(t.calories," calories")})]}),Object(l.jsxs)("div",{className:"actions",children:[i?Object(l.jsx)("button",{className:"done-button",onClick:function(){s(!i),e.updateItem(t.name,d,h)},children:"Save Item"}):Object(l.jsx)("button",{className:"edit-button",onClick:function(){s(!i)},children:"Edit Item"}),Object(l.jsx)("button",{className:"delete-button",onClick:function(){e.deleteItem(t.name)},children:"Delete Item"})]})]})}),j=function(e){var t=e.items;return Object(l.jsx)("div",{className:"ItemsList",children:0!==t.length?t.map((function(t){return Object(l.jsx)(d,{item:t,updateItem:e.updateItem,deleteItem:e.deleteItem},t.name)})):"Start adding items"})};var m=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("header",{className:"App-header",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(o,{addItem:function(e,t){a([].concat(Object(r.a)(n),[{name:e,calories:t}]))}}),Object(l.jsx)(j,{items:n,updateItem:function(e,t,c){var i=n.findIndex((function(t){return t.name===e}));n[i].name=t,n[i].calories=c,a(n)},deleteItem:function(e){a(n.filter((function(t){return t.name!==e})))}})]})})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),b()}],[[17,1,2]]]);
//# sourceMappingURL=main.b0ed0d9a.chunk.js.map