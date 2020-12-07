(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{34:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},50:function(e,t,a){},67:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(0),c=a.n(s),r=a(25),i=a.n(r),o=(a(43),a(19)),l=a(8),u=a(9),d=a(11),j=a(10),h=(a(44),a(45),a(12)),b=a(7),m=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Home Page"})})}}]),a}(s.Component);var p=function(e){var t=JSON.parse(localStorage.getItem("isAuthenticated"));return Object(n.jsx)("nav",{className:"navbar navbar-expand navbar-primary fixed-top",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(h.b,{className:"navbar-brand",to:"/",children:"Todo App"}),Object(n.jsx)("div",{className:"collapse navbar-collapse",children:Object(n.jsx)("ul",{className:"navbar-nav ml-auto",children:t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("li",{children:Object(n.jsx)(h.b,{to:"/theme",className:"nav-link",children:"Theme"})}),Object(n.jsx)("li",{children:Object(n.jsx)(h.b,{to:"/admin",className:"nav-link",children:"Admin"})}),Object(n.jsx)("li",{children:Object(n.jsx)(h.b,{to:"/todo",className:"nav-link",children:"Todo"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(h.b,{to:"/logout",className:"nav-link",children:"Logout"})})]}):Object(n.jsx)(h.b,{to:"/login",className:"nav-link",children:"Login"})})})]})})},O=a(17),v=a(37),x=(a(50),function(e){var t=e.loginFormProps,a=t.credentails,s=t.handleInput,c=(t.validateForm,t.handleSubmit);return Object(n.jsx)("div",{className:"Login",children:Object(n.jsxs)(O.a,{onSubmit:c,children:[Object(n.jsxs)(O.a.Group,{size:"lg",controlId:"username",children:[Object(n.jsx)(O.a.Label,{children:"Username"}),Object(n.jsx)(O.a.Control,{autoFocus:!0,type:"text",name:"username",value:a.input.username,onChange:s})]}),Object(n.jsxs)(O.a.Group,{size:"lg",controlId:"password",children:[Object(n.jsx)(O.a.Label,{children:"Password"}),Object(n.jsx)(O.a.Control,{type:"password",name:"password",value:a.input.password,onChange:s})]}),Object(n.jsx)(v.a,{block:!0,size:"lg",type:"submit",children:"Login"})]})})}),f=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleInput=function(t){var a=e.state.input;a[t.target.name]=t.target.value,e.setState({input:a})},e.validateForm=function(){},e.handleSubmit=function(t){var a=e.state.input.username,n=e.state.input.password;t.preventDefault(),"admin"===a&&"icreon"===n?(localStorage.setItem("isAuthenticated",!0),e.props.history.push("/admin"),e.props.handleAuth()):alert("Login not successful")},e.state={input:{username:"",password:""}},e}return Object(u.a)(a,[{key:"isAuthenticated",value:function(){if(JSON.parse(localStorage.getItem("isAuthenticated")))return!0}},{key:"render",value:function(){var e=this.isAuthenticated(),t={credentails:this.state,handleInput:this.handleInput,validateForm:this.validateForm,handleSubmit:this.handleSubmit};return Object(n.jsx)("div",{children:e?Object(n.jsx)(b.a,{to:"/admin"}):Object(n.jsx)(x,{loginFormProps:t})})}}]),a}(s.Component),g=a(36),k=(a(67),function(){return Object(n.jsxs)(g.stack,{children:[Object(n.jsx)("a",{className:"menu-item",href:"/",children:"Home"}),Object(n.jsx)("a",{className:"menu-item",href:"/users",children:"User"})]})}),S=function(){var e=JSON.parse(localStorage.getItem("isAuthenticated"));return Object(n.jsx)("div",{children:e?Object(n.jsx)(k,{pageWrapId:"page-wrap",outerContainerId:"outer-container"}):Object(n.jsx)(b.a,{to:"/login"})})},y=function(e){var t=e.theme,a=e.handleChange;return Object(n.jsxs)("form",{id:"theme-form",children:["Select Theme:\xa0",Object(n.jsxs)("label",{children:[Object(n.jsx)("input",{type:"radio",value:"dark",checked:!0===t,onChange:a}),"Dark"]}),"\xa0",Object(n.jsxs)("label",{children:[Object(n.jsx)("input",{type:"radio",value:"blue",checked:!1===t,onChange:a}),"Blue"]})]})},N=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).toggleTheme=function(){n.setState({theme:!n.state.theme})},n.state={theme:!0},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("theme"));this.setState({theme:e})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("theme",this.state.theme)}},{key:"render",value:function(){var e,t=this.state.theme;return!0===this.state.theme?e={backgroundColor:"#3B3B3B"}:!1===this.state.theme&&(e={backgroundColor:"blue"}),Object(n.jsx)("div",{style:e,children:Object(n.jsx)(y,{theme:t,handleChange:this.toggleTheme})})}}]),a}(s.Component),I=a(21),C=a(18),T=a(28);C.b.add(T.b,T.a);var A=function(e){var t=e.inputProps,a=t.input,s=t.handleInput,c=t.addTask;return Object(n.jsx)("header",{children:Object(n.jsxs)("form",{id:"to-do-form",onSubmit:c,children:[Object(n.jsx)("input",{type:"text",placeholder:"Enter User",name:"username",value:a.username,onChange:s}),Object(n.jsx)("input",{type:"text",placeholder:"Enter Task",name:"task",value:a.task,onChange:s}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{type:"sumbit",children:"Add Task"})]})})},J=(a(34),a(29)),D=function(e){var t=e.list,a=e.completeTask,s=e.deleteTask;return t.map((function(e){return Object(n.jsx)("div",{className:"list",children:Object(n.jsxs)("p",{children:["Task: ",e.task,", User: ",e.user.name,Object(n.jsxs)("span",{children:[!1===e.isCompleted?Object(n.jsx)(J.a,{className:"faicons",icon:"check-circle",onClick:function(){return a(e.key)}}):null,Object(n.jsx)(J.a,{className:"faicons",icon:"trash",onClick:function(){return s(e.key)}})]})]})},e.key)}))},w=(a(71),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleInput=function(t){var a=e.state.input;a[t.target.name]=t.target.value,e.setState({input:a})},e.addTask=function(t){t.preventDefault();var a=e.state.input.task,n=e.state.input.username,s=e.state.users,c={id:Math.random().toString(36).substr(2,9),name:n},r={task:a,isCompleted:!1,key:Date.now(),user:c};if(""!==a){var i=[].concat(Object(I.a)(e.state.tasks),[r]);s=e.state.users.map((function(e){return e.id})).includes(c.id)?[].concat(Object(I.a)(s),[c]):Object(I.a)(s),e.setState({tasks:i,users:s})}else alert("Please enter a task.")},e.completeTask=function(t){var a=e.state.tasks;a.map((function(e){return e.key===t?e.isCompleted=!0:e})),e.setState({tasks:a})},e.deleteTask=function(t){var a=e.state.tasks.filter((function(e){return e.key!==t}));e.setState({tasks:a})},e.state={input:{username:"",task:""},users:[],tasks:[]},e}return Object(u.a)(a,[{key:"isAuthenticated",value:function(){return!!JSON.parse(localStorage.getItem("isAuthenticated"))}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("users"),t=localStorage.getItem("tasks");t||e?this.setState({users:JSON.parse(e),tasks:JSON.parse(t)}):localStorage.setItem("tasks",JSON.stringify(this.state.tasks))}},{key:"componentDidUpdate",value:function(){localStorage.setItem("tasks",JSON.stringify(this.state.tasks)),localStorage.setItem("users",JSON.stringify(this.state.users))}},{key:"render",value:function(){var e=this.isAuthenticated(),t=this.state.tasks,a={input:this.state.input,handleInput:this.handleInput,addTask:this.addTask};return Object(n.jsx)("div",{children:e?Object(n.jsxs)("div",{className:"Todo",children:[Object(n.jsx)(A,{inputProps:a}),Object(n.jsx)(D,{list:t,completeTask:this.completeTask,deleteTask:this.deleteTask})]}):Object(n.jsx)(b.a,{to:"/"})})}}]),a}(s.Component)),F=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.handleAuth()}},{key:"render",value:function(){var e=JSON.parse(localStorage.getItem("isAuthenticated"));return e&&localStorage.removeItem("isAuthenticated"),Object(n.jsx)("div",{children:e?Object(n.jsx)(b.a,{to:"/"}):Object(n.jsx)(b.a,{to:"/login"})})}}]),a}(s.Component),L=function(e){return e.list.map((function(e){return Object(n.jsx)("div",{className:"list",children:Object(n.jsxs)("p",{children:["ID: ",e.id,", Name: ",e.name]})},e.id)}))},P=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={users:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("users");e?this.setState({users:JSON.parse(e)}):localStorage.setItem("users",JSON.stringify(this.state.users))}},{key:"componentDidUpdate",value:function(){localStorage.setItem("users",JSON.stringify(this.state.users))}},{key:"render",value:function(){var e=this.state.users;return Object(n.jsx)("div",{className:"Todo",children:Object(n.jsx)(L,{list:e})})}}]),a}(s.Component),U=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleAuth=function(){var t=JSON.parse(localStorage.getItem("isAuthenticated"));e.setState({loggedIn:t})},e.state={loggedIn:!1},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)(h.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(p,{handleLogout:this.handleLogout}),Object(n.jsx)("div",{className:"auth-wrapper",children:Object(n.jsx)("div",{className:"auth-inner",children:Object(n.jsxs)(b.d,{children:[Object(n.jsx)(b.b,{exact:!0,path:"/",component:m}),Object(n.jsx)(b.b,{path:"/login",component:function(t){return Object(n.jsx)(f,Object(o.a)(Object(o.a)({},t),{},{handleAuth:e.handleAuth}))}}),Object(n.jsx)(b.b,{path:"/admin",component:S}),Object(n.jsx)(b.b,{path:"/theme",component:N}),Object(n.jsx)(b.b,{path:"/todo",component:w}),Object(n.jsx)(b.b,{path:"/users",component:P}),Object(n.jsx)(b.b,{path:"/logout",component:function(t){return Object(n.jsx)(F,Object(o.a)(Object(o.a)({},t),{},{handleAuth:e.handleAuth}))}})]})})})]})})}}]),a}(s.Component),B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,73)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(U,{})}),document.getElementById("root")),B()}},[[72,1,2]]]);
//# sourceMappingURL=main.975d6221.chunk.js.map