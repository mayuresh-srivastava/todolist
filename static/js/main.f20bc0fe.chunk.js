(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{20:function(t,e,n){},24:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(2),a=n.n(r),i=n(7),s=n.n(i),u=(n(20),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))}),o=n(12),d=n(8),l=n(9),m=n(14),j=n(13),h=n(3),b=n(10);h.b.add(b.a);var f=function(t){var e=t.handleInput,n=t.currentItem,r=t.addItem;return Object(c.jsx)("header",{children:Object(c.jsxs)("form",{id:"to-do-form",onSubmit:r,children:[Object(c.jsx)("input",{type:"text",placeholder:"Enter Text",value:n.text,onChange:e}),Object(c.jsx)("button",{type:"sumbit",children:"Add Item"})]})})},I=(n(24),n(11)),x=function(t){var e=t.list,n=t.deleteItem;return e.map((function(t){return Object(c.jsx)("div",{className:"list",children:Object(c.jsxs)("p",{children:[t.text,Object(c.jsx)("span",{children:Object(c.jsx)(I.a,{className:"faicons",icon:"trash",onClick:function(){return n(t.key)}})})]})},t.key)}))},p=(n(6),function(t){Object(m.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(d.a)(this,n),(t=e.call(this)).handleInput=function(e){t.setState({currentItem:{text:e.target.value,key:Date.now()}})},t.addItem=function(e){e.preventDefault();var n=t.state.currentItem;if(""!==n){var c=[].concat(Object(o.a)(t.state.items),[n]);t.setState({items:c,currentItem:{text:"",key:""}})}},t.deleteItem=function(e){var n=t.state.items.filter((function(t){return t.key!==e}));t.setState({items:n})},t.state={items:[],currentItem:{text:""}},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.items;return Object(c.jsxs)("div",{className:"Todo",children:[Object(c.jsx)(f,{handleInput:this.handleInput,addItem:this.addItem,currentItem:this.state.currentItem}),Object(c.jsx)(x,{list:t,deleteItem:this.deleteItem})]})}}]),n}(r.Component));s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),u()},6:function(t,e,n){}},[[27,1,2]]]);
//# sourceMappingURL=main.f20bc0fe.chunk.js.map