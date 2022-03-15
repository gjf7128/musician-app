(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,a,t){e.exports=t(61)},35:function(e,a,t){},36:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),s=t(25),c=t.n(s),r=(t(34),t(35),t(4)),l=t(5),u=t(7),m=t(6),o=t(8),d=t(64),p=t(66),h=t(65),v=(t(36),function(e){function a(){return Object(r.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement("a",{className:"navbar-item",href:"/"},i.a.createElement("img",{src:"notes-logo.jpg",width:"400",height:"50",alt:"logo"}))),i.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},i.a.createElement("div",{className:"navbar-start"}),i.a.createElement("div",{className:"navbar-end"},i.a.createElement("div",{className:"navbar-item"},i.a.createElement("div",{className:"buttons"},i.a.createElement("a",{href:"/register",className:"button is-primary"},i.a.createElement("strong",null,"Sign up")),i.a.createElement("a",{href:"/login",className:"button is-light"},"Log in"))))))}}]),a}(n.Component));function f(){return i.a.createElement("section",{className:"hero is-primary"},i.a.createElement("div",{className:"hero-body"},i.a.createElement("div",{className:"container"},"Musician App - Modified by Gabriel FitzPatrick, Twice!")))}var E=t(16),b=t(9),N=t.n(b),g=t(11),w=t(14),j=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={isEditMode:!1,updatedmusicianname:t.props.name},t.handleMusicianEdit=function(e){e.preventDefault(), t.setState({isEditMode:!0})},t.handleEditSave=function(e){e.preventDefault(),t.setState({isEditMode:!1}),t.props.handleUpdateMusician(t.props.id,t.state.updatedmusicianname)},t.onAddMusicianNameChange=function(e){return t.setState({updatedmusicianname:e.target.value})},t}return Object(o.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"box musician-card notification is-success"},this.props.isAdmin&&i.a.createElement(n.Fragment,null,i.a.createElement("button",{onClick:function(a){return e.props.handleDeleteMusician(e.props.id,a)},className:"delete"})),this.state.isEditMode?i.a.createElement("div",null,i.a.createElement("p",null,"Edit musician name"),i.a.createElement("input",{className:"input is-medium",type:"text",placeholder:"Enter name",value:this.state.updatedmusicianname,onChange:this.onAddMusicianNameChange}),i.a.createElement("p",{className:"musician-id"},"id: ",this.props.id),i.a.createElement("button",{type:"submit",className:"button is-info is-small",onClick:this.handleEditSave},"save")):i.a.createElement("div",null,i.a.createElement("p",{className:"musician-title"},this.props.firstname," ",this.props.lastname),i.a.createElement("p",{className:"musician-id"},"genre: ",this.props.genre)))}}]),a}(n.Component),O=t(15),M=t.n(O),y=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={newmusician:{firstName:"",lastName:"",genre:""},musicians:[]},t.outputHTML="",t.handleAddMusician=function(){var e=Object(w.a)(N.a.mark(function e(a,n){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,M.a.put("/musician/".concat(a),t.state.newmusician);case 4:t.setState({musicians:[].concat(Object(g.a)(t.state.musicians),[t.state.newmusician])}),t.setState({newmusician:{firstName:"",lastName:"",genre:""}}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(a,t){return e.apply(this,arguments)}}(),t.handleUpdateMusician=function(e,a){var n=Object(g.a)(t.state.musicians).find(function(a){return a.id===e}),i=Object(g.a)(t.state.musicians).filter(function(a){return a.id!==e});n.musicianname=a,i.push(n),t.setState({musicians:i})},t.handleDeleteMusician=function(){var e=Object(w.a)(N.a.mark(function e(a,n){var i;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,M.a.delete("/musician/".concat(a));case 4:return e.next=6,Object(g.a)(t.state.musicians).filter(function(e){return e.firstName.toLowerCase()!==a});case 6:i=e.sent,t.setState({musicians:i}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(a,t){return e.apply(this,arguments)}}(),t.fetchMusicians=Object(w.a)(N.a.mark(function e(){var a,n;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.get("/musician/all");case 3:a=e.sent,n=Object.keys(a.data).map(function(e){return a.data[e]}),t.setState({musicians:Object(g.a)(n)}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])})),t.onAddMusicianFirstNameChange=function(e){return t.setState({newmusician:Object(E.a)({},t.state.newmusician,{firstName:e.target.value})})},t.onAddMusicianLastNameChange=function(e){return t.setState({newmusician:Object(E.a)({},t.state.newmusician,{lastName:e.target.value})})},t.onAddMusicianGenreChange=function(e){return t.setState({newmusician:Object(E.a)({},t.state.newmusician,{genre:e.target.value})})},t.componentDidMount=function(){t.fetchMusicians()},t}return Object(o.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(n.Fragment,null,i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:"container"},i.a.createElement("p",{className:"subtitle is-5"},"Add and remove musicians using the form below:"),i.a.createElement("br",null),i.a.createElement("div",{className:"columns"},i.a.createElement("div",{className:"column is-one-third"},i.a.createElement("form",{onSubmit:function(a){return e.handleAddMusician(e.state.newmusician.firstName.toLowerCase(),a)}},i.a.createElement("div",{className:"field"},i.a.createElement("div",{className:"control"},i.a.createElement("input",{className:"input is-medium",type:"text",placeholder:"Enter first name",value:this.state.newmusician.firstName,onChange:this.onAddMusicianFirstNameChange}))),i.a.createElement("div",{className:"field"},i.a.createElement("div",{className:"control"},i.a.createElement("input",{className:"input is-medium",type:"text",placeholder:"Enter last name",value:this.state.newmusician.lastName,onChange:this.onAddMusicianLastNameChange}))),i.a.createElement("div",{className:"field"},i.a.createElement("div",{className:"control"},i.a.createElement("input",{className:"input is-medium",type:"text",placeholder:"Enter genre",value:this.state.newmusician.genre,onChange:this.onAddMusicianGenreChange}))),i.a.createElement("div",{className:"field"},i.a.createElement("div",{className:"control"},i.a.createElement("button",{type:"submit",className:"button is-primary is-medium"},"Add musician"))))),i.a.createElement("div",{className:"column is-two-thirds"},this.state.musicians.map(function(a,t){return i.a.createElement(j,{isAdmin:!0,handleUpdateMusician:e.handleUpdateMusician,handleDeleteMusician:e.handleDeleteMusician,firstname:a.firstName,lastname:a.lastName,genre:a.genre,key:a.lastName.toLowerCase(),id:a.firstName.toLowerCase(),index:t})}))))))}}]),a}(n.Component);function C(){return i.a.createElement(n.Fragment,null,i.a.createElement(f,null),i.a.createElement(y,null))}function x(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"content has-text-centered"},i.a.createElement("p",null,"Musician App 2019. The source code is licensed MIT. The website content is licensed CC BY NC SA 4.0.")))}var A=t(26),k=t(27);A.a.add(k.a);var S=function(e){function a(){return Object(r.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(d.a,null,i.a.createElement("div",null,i.a.createElement(v,null),i.a.createElement(p.a,null,i.a.createElement(h.a,{exact:!0,path:"/",component:C})),i.a.createElement(x,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.7aabff24.chunk.js.map
