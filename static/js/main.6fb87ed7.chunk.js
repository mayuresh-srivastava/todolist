(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{132:function(e,t,n){},137:function(e,t,n){},139:function(e,t,n){},253:function(e,t,n){},256:function(e,t,n){},274:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),s=n.n(r),c=n(43),i=n.n(c),o=(n(132),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,277)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))}),u=n(15),l=n(9),p=n(120),j=n(121),d=n.n(j),b=n(4),h={page:1},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEXT_PAGE":case"PREVIOUS_PAGE":return Object(b.a)(Object(b.a)({},e),{},{page:t.payload});default:return e}},O={input:{username:"",password:""}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HANDLE_INPUT":return Object(b.a)(Object(b.a)({},e),{},{input:{username:t.payload.input.username,password:t.payload.input.password}});case"HANDLE_SUBMIT":return Object(b.a)({},e);default:return e}},v={loggedIn:!1},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HANDLE_AUTH":return Object(b.a)(Object(b.a)({},e),{},{loggedIn:t.payload});default:return e}},g={input:{username:"",task:""},users:[],tasks:[]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HANDLE_INPUT":return Object(b.a)(Object(b.a)({},e),{},{input:{username:t.payload.input.username,task:t.payload.input.task}});case"ADD_TASK":return Object(b.a)(Object(b.a)({},e),{},{users:t.payload.users,tasks:t.payload.tasks});case"COMPLETE_TASK":case"DELETE_TASK":return Object(b.a)(Object(b.a)({},e),{},{tasks:t.payload});case"SET_TASKS":return Object(b.a)(Object(b.a)({},e),{},{users:t.payload.users,tasks:t.payload.tasks});default:return e}},k={users:[]},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USERS":return Object(b.a)(Object(b.a)({},e),{},{users:t.payload});default:return e}},N={posts:[]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_POSTS":return Object(b.a)(Object(b.a)({},e),{},{posts:t.payload});default:return e}},I={items:[],item:{}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ITEMS":return Object(b.a)(Object(b.a)({},e),{},{items:t.payload});case"GET_ITEM":return Object(b.a)(Object(b.a)({},e),{},{item:t.payload});default:return e}},E=Object(l.combineReducers)({register:m,login:f,app:x,todo:y,user:S,post:T,item:A}),P=Object(l.applyMiddleware)(d.a),C=Object(l.createStore)(E,Object(p.composeWithDevTools)(P)),w=n(10),D=n(11),U=n(13),_=n(12),L=(n(136),n(137),n(17)),J=n(14),M=function(e){Object(U.a)(n,e);var t=Object(_.a)(n);function n(){return Object(w.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Home Page"})})}}]),n}(r.Component);var F=function(e){var t=JSON.parse(localStorage.getItem("isAuthenticated"));return Object(a.jsx)("nav",{className:"navbar navbar-expand navbar-primary fixed-top",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(L.b,{className:"navbar-brand",to:"/",children:"Todo App"}),Object(a.jsx)("div",{className:"collapse navbar-collapse",children:Object(a.jsx)("ul",{className:"navbar-nav ml-auto",children:t?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("li",{children:Object(a.jsx)(L.b,{to:"/theme",className:"nav-link",children:"Theme"})}),Object(a.jsx)("li",{children:Object(a.jsx)(L.b,{to:"/admin",className:"nav-link",children:"Admin"})}),Object(a.jsx)("li",{children:Object(a.jsx)(L.b,{to:"/todo",className:"nav-link",children:"Todo"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(L.b,{to:"/logout",className:"nav-link",children:"Logout"})})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(L.b,{to:"/login",className:"nav-link",children:"Login"}),Object(a.jsx)(L.b,{to:"/register",className:"nav-link",children:"Register"})]})})})]})})},G=n(29),H=n(125),R=(n(139),function(e){var t=e.loginFormProps,n=t.credentails,r=t.handleInput,s=t.handleSubmit;return Object(a.jsx)("div",{className:"Login",children:Object(a.jsxs)(G.a,{onSubmit:s,children:[Object(a.jsxs)(G.a.Group,{size:"lg",controlId:"username",children:[Object(a.jsx)(G.a.Label,{children:"Username"}),Object(a.jsx)(G.a.Control,{autoFocus:!0,type:"text",name:"username",value:n.input.username,onChange:r})]}),Object(a.jsxs)(G.a.Group,{size:"lg",controlId:"password",children:[Object(a.jsx)(G.a.Label,{children:"Password"}),Object(a.jsx)(G.a.Control,{type:"password",name:"password",value:n.input.password,onChange:r})]}),Object(a.jsx)(H.a,{block:!0,size:"lg",type:"submit",children:"Login"})]})})}),z=function(e){Object(U.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleInput=function(t){var n=e.props.input;n[t.target.name]=t.target.value,e.props.handleInput({input:n})},e.handleSubmit=function(t){var n=e.props.input.username,a=e.props.input.password;t.preventDefault(),"admin"===n&&"icreon"===a?(localStorage.setItem("isAuthenticated",!0),e.props.history.push("/admin"),e.props.handleAuth()):alert("Login not successful")},e}return Object(D.a)(n,[{key:"isAuthenticated",value:function(){if(JSON.parse(localStorage.getItem("isAuthenticated")))return!0}},{key:"render",value:function(){var e=this.isAuthenticated(),t={credentails:this.props,handleInput:this.handleInput,handleSubmit:this.handleSubmit};return Object(a.jsx)("div",{children:e?Object(a.jsx)(J.a,{to:"/admin"}):Object(a.jsx)(R,{loginFormProps:t})})}}]),n}(r.Component),B=Object(u.b)((function(e){return{input:e.login.input}}),(function(e){return{handleInput:function(t){return e(function(e){return{type:"HANDLE_INPUT",payload:e}}(t))},handleSubmit:function(t){return e(function(e){return{type:"HANDLE_SUBMIT",payload:e}}(t))}}}))(z),K=n(276),q=n(275),V=function(e){var t={};return e.firstName||(t.firstName="Required"),e.lastName||(t.lastName="Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.sex||(t.sex="Required"),e.favoriteColor||(t.favoriteColor="Required"),t},Z=function(e){var t=e.input,n=e.label,r=e.type,s=e.meta,c=s.touched,i=s.error;return Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:n}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",Object(b.a)(Object(b.a)({},t),{},{placeholder:n,type:r})),c&&i&&Object(a.jsx)("span",{children:i})]})]})},W=Object(q.a)({form:"wizard",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0,validate:V})((function(e){var t=e.handleSubmit;return Object(a.jsxs)("form",{onSubmit:t,children:[Object(a.jsx)(K.a,{name:"firstName",type:"text",component:Z,label:"First Name"}),Object(a.jsx)(K.a,{name:"lastName",type:"text",component:Z,label:"Last Name"}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{type:"submit",className:"next",children:"Next"})})]})})),X=function(e){var t=e.meta,n=t.touched,r=t.error;return!(!n||!r)&&Object(a.jsx)("span",{children:r})},Y=Object(q.a)({form:"wizard",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0,validate:V})((function(e){var t=e.handleSubmit,n=e.previousPage;return Object(a.jsxs)("form",{onSubmit:t,children:[Object(a.jsx)(K.a,{name:"email",type:"email",component:Z,label:"Email"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"Sex"}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("label",{children:[Object(a.jsx)(K.a,{name:"sex",component:"input",type:"radio",value:"male"})," ","Male"]}),Object(a.jsxs)("label",{children:[Object(a.jsx)(K.a,{name:"sex",component:"input",type:"radio",value:"female"})," ","Female"]}),Object(a.jsxs)("label",{children:[Object(a.jsx)(K.a,{name:"sex",component:"input",type:"radio",value:"other"})," ","Other"]}),Object(a.jsx)(K.a,{name:"sex",component:X})]})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{type:"button",className:"previous",onClick:n,children:"Previous"}),Object(a.jsx)("button",{type:"submit",className:"next",children:"Next"})]})]})})),$=["Red","Orange","Yellow","Green","Blue","Indigo","Violet"],Q=function(e){var t=e.input,n=e.meta,r=n.touched,s=n.error;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("select",Object(b.a)(Object(b.a)({},t),{},{children:[Object(a.jsx)("option",{value:"",children:"Select a color..."}),$.map((function(e){return Object(a.jsx)("option",{value:e,children:e},e)}))]})),r&&s&&Object(a.jsx)("span",{children:s})]})},ee=Object(q.a)({form:"wizard",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0,validate:V})((function(e){var t=e.handleSubmit,n=e.pristine,r=e.previousPage,s=e.submitting;return Object(a.jsxs)("form",{onSubmit:t,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"Favorite Color"}),Object(a.jsx)(K.a,{name:"favoriteColor",component:Q})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"employed",children:"Employed"}),Object(a.jsx)("div",{children:Object(a.jsx)(K.a,{name:"employed",id:"employed",component:"input",type:"checkbox"})})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"Notes"}),Object(a.jsx)("div",{children:Object(a.jsx)(K.a,{name:"notes",component:"textarea",placeholder:"Notes"})})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{type:"button",className:"previous",onClick:r,children:"Previous"}),Object(a.jsx)("button",{type:"submit",disabled:n||s,children:"Submit"})]})]})})),te=function(e){var t=e.wizardFormProps,n=t.page,r=t.nextPage,s=t.previousPage,c=t.onSubmit;return Object(a.jsxs)(a.Fragment,{children:[1===n&&Object(a.jsx)(W,{onSubmit:r}),2===n&&Object(a.jsx)(Y,{previousPage:s,onSubmit:r}),3===n&&Object(a.jsx)(ee,{previousPage:s,onSubmit:c})]})},ne=function(e){Object(U.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).nextPage=function(){e.props.nextPage(e.props.page+1)},e.previousPage=function(){e.props.previousPage(e.props.page-1)},e}return Object(D.a)(n,[{key:"isAuthenticated",value:function(){if(JSON.parse(localStorage.getItem("isAuthenticated")))return!0}},{key:"render",value:function(){var e=this.isAuthenticated(),t=this.props.page,n=this.props.onSubmit,r={page:t,nextPage:this.nextPage,previousPage:this.previousPage,onSubmit:n};return Object(a.jsx)(a.Fragment,{children:e?Object(a.jsx)(J.a,{to:"/admin"}):Object(a.jsx)("div",{style:{padding:15},children:Object(a.jsx)(te,{wizardFormProps:r})})})}}]),n}(r.Component),ae=Object(u.b)((function(e){return{page:e.register.page}}),(function(e){return{nextPage:function(t){return e(function(e){return{type:"NEXT_PAGE",payload:e}}(t))},previousPage:function(t){return e(function(e){return{type:"PREVIOUS_PAGE",payload:e}}(t))}}}))(ne),re=n(123),se=(n(253),function(){return Object(a.jsxs)(re.stack,{children:[Object(a.jsx)("a",{className:"menu-item",href:"/",children:"Home"}),Object(a.jsx)("a",{className:"menu-item",href:"/users",children:"Users"}),Object(a.jsx)("a",{className:"menu-item",href:"/posts",children:"Posts"}),Object(a.jsx)("a",{className:"menu-item",href:"/items",children:"Items"})]})}),ce=function(){var e=JSON.parse(localStorage.getItem("isAuthenticated"));return Object(a.jsx)("div",{children:e?Object(a.jsx)(se,{pageWrapId:"page-wrap",outerContainerId:"outer-container"}):Object(a.jsx)(J.a,{to:"/login"})})},ie=function(e){var t=e.theme,n=e.handleChange;return Object(a.jsxs)("form",{id:"theme-form",children:["Select Theme:\xa0",Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"radio",value:"dark",name:"theme",checked:!0===t,onChange:n}),"Dark"]}),"\xa0\xa0",Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"radio",value:"light",name:"theme",checked:!1===t,onChange:n}),"Light"]})]})},oe=function(e){Object(U.a)(n,e);var t=Object(_.a)(n);function n(e){var a;return Object(w.a)(this,n),(a=t.call(this,e)).toggleTheme=function(){a.setState({theme:!a.state.theme})},a.state={theme:!1},a}return Object(D.a)(n,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("theme"));e?this.setState({theme:e}):localStorage.setItem("theme",JSON.stringify(this.state.theme))}},{key:"componentDidUpdate",value:function(){localStorage.setItem("theme",JSON.stringify(this.state.theme))}},{key:"render",value:function(){var e,t=this.state.theme;return!0===this.state.theme?e={backgroundColor:"#3B3B3B"}:!1===this.state.theme&&(e={backgroundColor:"white"}),Object(a.jsx)("div",{style:e,children:Object(a.jsx)(ie,{theme:t,handleChange:this.toggleTheme})})}}]),n}(r.Component),ue=n(126),le=n(59),pe=n(47),je=n(83);pe.b.add(je.b,je.a);var de=function(e){var t=e.inputProps,n=t.input,r=t.handleInput,s=t.addTask;return Object(a.jsx)("header",{children:Object(a.jsxs)("form",{id:"to-do-form",onSubmit:s,children:[Object(a.jsx)("input",{type:"text",placeholder:"Enter User",name:"username",value:n.username,onChange:r}),Object(a.jsx)("input",{type:"text",placeholder:"Enter Task",name:"task",value:n.task,onChange:r}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{type:"sumbit",children:"Add Task"})]})})},be=(n(42),n(84)),he=function(e){var t=e.list,n=e.completeTask,r=e.deleteTask;return t.map((function(e){return Object(a.jsx)("div",{className:"list",children:Object(a.jsxs)("p",{children:["Task: ",e.task,", User: ",e.user.name,Object(a.jsxs)("span",{children:[!1===e.isCompleted?Object(a.jsx)(be.a,{className:"faicons",icon:"check-circle",onClick:function(){return n(e.key)}}):null,Object(a.jsx)(be.a,{className:"faicons",icon:"trash",onClick:function(){return r(e.key)}})]})]})},e.key)}))},me=(n(256),function(e){Object(U.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleInput=function(t){var n=e.props.input;n[t.target.name]=t.target.value,e.props.handleInput({input:n})},e.addTask=function(t){t.preventDefault();var n=e.props.input.task,a=e.props.input.username,r=e.props.users,s={id:Math.random().toString(36).substr(2,9),name:a},c={task:n,isCompleted:!1,key:Date.now(),user:s};if(""!==n){var i=[].concat(Object(le.a)(e.props.tasks),[c]);r=e.props.users.map((function(e){return e.id})).includes(s.id)?Object(le.a)(r):[].concat(Object(le.a)(r),[s]),e.props.addTask({tasks:i,users:r})}else alert("Please enter a task.")},e.completeTask=function(t){var n=e.props.tasks.map((function(e){e.isCompleted;var n=Object(ue.a)(e,["isCompleted"]);return Object(b.a)(Object(b.a)({},n),{},{isCompleted:n.key===t})}));e.props.completeTask(n)},e.deleteTask=function(t){var n=e.props.tasks.filter((function(e){return e.key!==t}));e.props.deleteTask(n)},e}return Object(D.a)(n,[{key:"isAuthenticated",value:function(){return!!JSON.parse(localStorage.getItem("isAuthenticated"))}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("users"),t=localStorage.getItem("tasks");t||e?this.props.setTasks({users:JSON.parse(e),tasks:JSON.parse(t)}):localStorage.setItem("tasks",JSON.stringify(this.props.tasks))}},{key:"componentDidUpdate",value:function(){localStorage.setItem("tasks",JSON.stringify(this.props.tasks)),localStorage.setItem("users",JSON.stringify(this.props.users))}},{key:"render",value:function(){var e=this.isAuthenticated(),t=this.props.tasks,n={input:this.props.input,handleInput:this.handleInput,addTask:this.addTask};return Object(a.jsx)("div",{children:e?Object(a.jsxs)("div",{className:"Todo",children:[Object(a.jsx)(de,{inputProps:n}),Object(a.jsx)(he,{list:t,completeTask:this.completeTask,deleteTask:this.deleteTask})]}):Object(a.jsx)(J.a,{to:"/"})})}}]),n}(r.Component)),Oe=Object(u.b)((function(e){var t=e.todo;return{input:t.input,tasks:t.tasks,users:t.users}}),(function(e){return{handleInput:function(t){return e(function(e){return{type:"HANDLE_INPUT",payload:e}}(t))},addTask:function(t){return e(function(e){return{type:"ADD_TASK",payload:e}}(t))},completeTask:function(t){return e(function(e){return{type:"COMPLETE_TASK",payload:e}}(t))},deleteTask:function(t){return e(function(e){return{type:"DELETE_TASK",payload:e}}(t))},setTasks:function(t){return e(function(e){return{type:"SET_TASKS",payload:e}}(t))}}}))(me),fe=function(e){Object(U.a)(n,e);var t=Object(_.a)(n);function n(){return Object(w.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"componentDidMount",value:function(){this.props.handleAuth()}},{key:"render",value:function(){var e=JSON.parse(localStorage.getItem("isAuthenticated"));return e&&localStorage.removeItem("isAuthenticated"),Object(a.jsx)("div",{children:e?Object(a.jsx)(J.a,{to:"/"}):Object(a.jsx)(J.a,{to:"/login"})})}}]),n}(r.Component),ve=function(e){return e.list.map((function(e){return Object(a.jsx)("div",{className:"list",children:Object(a.jsxs)("p",{children:["ID: ",e.id,", Name: ",e.name]})},e.id)}))},xe=function(e){Object(U.a)(n,e);var t=Object(_.a)(n);function n(){return Object(w.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("users");e?this.props.setUsers(JSON.parse(e)):localStorage.setItem("users",JSON.stringify(this.props.users))}},{key:"componentDidUpdate",value:function(){localStorage.setItem("users",JSON.stringify(this.props.users))}},{key:"render",value:function(){var e=this.props.users;return Object(a.jsx)("div",{className:"Todo",children:Object(a.jsx)(ve,{list:e})})}}]),n}(r.Component),ge=Object(u.b)((function(e){return{users:e.user.users}}),(function(e){return{setUsers:function(t){return e(function(e){return{type:"SET_USERS",payload:e}}(t))}}}))(xe),ye=function(e){return e.list.map((function(e){return Object(a.jsx)("div",{className:"post card",children:Object(a.jsxs)("div",{className:"card-content",children:[Object(a.jsx)("span",{className:"card-title",children:Object(a.jsx)("i",{children:e.title})}),Object(a.jsx)("p",{children:e.body})]})},e.id)}))},ke=n(124),Se=n.n(ke),Ne=function(e){Object(U.a)(n,e);var t=Object(_.a)(n);function n(){return Object(w.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"componentDidMount",value:function(){var e=this;Se.a.get("http://jsonplaceholder.typicode.com/posts").then((function(t){e.props.getPosts(t.data.slice(0,10))}))}},{key:"render",value:function(){var e=this.props.posts;return Object(a.jsx)("div",{className:"Todo",children:Object(a.jsx)(ye,{list:e})})}}]),n}(r.Component),Te=Object(u.b)((function(e){return{posts:e.post.posts}}),(function(e){return{getPosts:function(t){return e(function(e){return{type:"GET_POSTS",payload:e}}(t))}}}))(Ne),Ie=n(39),Ae=n.n(Ie),Ee=n(57),Pe=n(35),Ce=function(e){return e.list.map((function(e){return Object(a.jsx)("div",{className:"post card",children:Object(a.jsx)("div",{className:"card-content",children:Object(a.jsx)("span",{className:"card-title",children:Object(a.jsx)("b",{children:Object(a.jsx)(L.b,{to:"/items/".concat(e.id),children:e.title})})})})},e.id)}))},we=function(e){Object(U.a)(n,e);var t=Object(_.a)(n);function n(){var e;return Object(w.a)(this,n),(e=t.call(this)).fetchItems=e.fetchItems.bind(Object(Pe.a)(e)),e}return Object(D.a)(n,[{key:"componentDidMount",value:function(){this.fetchItems()}},{key:"fetchItems",value:function(){var e=Object(Ee.a)(Ae.a.mark((function e(){var t,n;return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://jsonplaceholder.typicode.com/photos");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.props.getItems(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.items;return Object(a.jsx)("div",{className:"Todo",children:Object(a.jsx)(Ce,{list:e})})}}]),n}(r.Component),De=Object(u.b)((function(e){var t=e.item;return{items:t.items,item:t.item}}),(function(e){return{getItems:function(t){return e(function(e){return{type:"GET_ITEMS",payload:e}}(t))},getItem:function(t){return e(function(e){return{type:"GET_ITEM",payload:e}}(t))}}}))(we),Ue=function(e){var t=e.item;return t?Object(a.jsx)("div",{className:"post card",children:Object(a.jsx)("div",{className:"card-content",children:Object(a.jsxs)("span",{className:"card-title",children:[Object(a.jsx)("h1",{children:t.title}),Object(a.jsx)("img",{src:t.url,alt:""})]})})}):null},_e=function(e){Object(U.a)(n,e);var t=Object(_.a)(n);function n(){var e;return Object(w.a)(this,n),(e=t.call(this)).fetchItem=e.fetchItem.bind(Object(Pe.a)(e)),e}return Object(D.a)(n,[{key:"componentDidMount",value:function(){this.fetchItem()}},{key:"fetchItem",value:function(){var e=Object(Ee.a)(Ae.a.mark((function e(){var t,n,a;return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match,e.prev=1,e.next=4,fetch("http://jsonplaceholder.typicode.com/photos/".concat(t.params.id));case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,this.props.getItem(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,this,[[1,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.item;return Object(a.jsx)("div",{className:"Todo",children:Object(a.jsx)(Ue,{list:e})})}}]),n}(r.Component),Le=function(e){Object(U.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleAuth=function(){var t=JSON.parse(localStorage.getItem("isAuthenticated"));e.props.handleAuth(t)},e}return Object(D.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)(L.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(F,{}),Object(a.jsx)("div",{className:"auth-wrapper",children:Object(a.jsx)("div",{className:"auth-inner",children:Object(a.jsxs)(J.d,{children:[Object(a.jsx)(J.b,{exact:!0,path:"/",component:M}),Object(a.jsx)(J.b,{path:"/login",component:function(t){return Object(a.jsx)(B,Object(b.a)(Object(b.a)({},t),{},{handleAuth:e.handleAuth}))}}),Object(a.jsx)(J.b,{path:"/register",component:ae}),Object(a.jsx)(J.b,{path:"/admin",component:ce}),Object(a.jsx)(J.b,{path:"/theme",component:oe}),Object(a.jsx)(J.b,{path:"/todo",component:Oe}),Object(a.jsx)(J.b,{path:"/users",component:ge}),Object(a.jsx)(J.b,{path:"/posts",component:Te}),Object(a.jsx)(J.b,{exact:!0,path:"/items",component:De}),Object(a.jsx)(J.b,{path:"/items/:id",component:_e}),Object(a.jsx)(J.b,{path:"/logout",component:function(t){return Object(a.jsx)(fe,Object(b.a)(Object(b.a)({},t),{},{handleAuth:e.handleAuth}))}})]})})})]})})}}]),n}(r.Component),Je=Object(u.b)((function(e){return{loggedIn:e.app.loggedIn}}),(function(e){return{handleAuth:function(t){return e(function(e){return{type:"HANDLE_AUTH",payload:e}}(t))}}}))(Le);i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(u.a,{store:C,children:Object(a.jsx)(Je,{})})}),document.getElementById("root")),o()},42:function(e,t,n){}},[[274,1,2]]]);
//# sourceMappingURL=main.6fb87ed7.chunk.js.map