(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{163:function(e,t,a){e.exports=a(266)},168:function(e,t,a){},170:function(e,t,a){},266:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(30),s=a.n(l),o=(a(168),a(18)),c=a(19),i=a(21),m=a(20),u=a(22),p=a(131),d=(a(170),a(154)),h=a(34),E=a(153),g=a(274),f=a(229),b=a(228),v=a(31),y=a(13),S=a(108),O=a(271),w=a(270),j=(a(86),a(33)),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).setValue=function(e,t,n,r){var l=Object.assign({},a.state);l.model[r]=t,a.setState(l)},a.state={model:e.model},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.handleSubmit,t=this.state.model,a=this.props.isLogged?null:r.a.createElement("center",null,r.a.createElement("label",{className:"text-center"}," Unable to authenticate. Try Again"));return r.a.createElement("div",{className:"login-form"},r.a.createElement("form",{href:"#",onSubmit:function(t){t.preventDefault(),e()}},r.a.createElement("h2",{className:"text-center"}," Login"),r.a.createElement("hr",null),r.a.createElement(O.a,{className:"form-control",value:t.email,name:"email",component:"input",type:"text",placeholder:"Username",onChange:this.setValue}),r.a.createElement(O.a,{className:"form-control",value:t.password,name:"password",component:"input",type:"password",placeholder:"Password",onChange:this.setValue}),a,r.a.createElement("div",null,r.a.createElement("p",{className:"text-center"},"Not a Member? ",r.a.createElement(j.a,{to:"/sign-up"},"Sign Up."))),r.a.createElement("div",null,r.a.createElement("button",{className:"buttonCustom",type:"submit",label:"submit"},"Login"))))}}]),t}(n.Component),k=Object(w.a)({form:"login"})(N),C="https://cors-anywhere.herokuapp.com/",L="https://www.beenverified.com/hk/dd/email?email=",x=function(e){var t=JSON.parse(localStorage.getItem("users"));if(!t)return{type:"LOGIN__FAIL"};var a=!1;return t.map(function(t){return t.email===e.email&&t.password===e.password&&(a=!0),a}),a?(localStorage.setItem("userLogged",e.email),{type:"LOGIN_SUCCESS",payload:e.email}):{type:"LOGIN__FAIL"}},U=function(e){var t=JSON.parse(localStorage.getItem("users"));if(!t)return(t=[]).push(e),localStorage.setItem("users",JSON.stringify(t)),{type:"SIGNUP_SUCCESS",payload:e};var a=!1;return t.map(function(t){return t.email===e.email&&(a=!0),a}),a?{type:"SIGNUP__FAIL"}:(t.push(e),localStorage.setItem("users",JSON.stringify(t)),{type:"SIGNUP_SUCCESS",payload:e.email})},I=function(){return localStorage.removeItem("userLogged"),{type:"USER_NOT_LOGGED"}},_={email:null,password:null},A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(){a.props.login(a.state.model)},a.state={model:_,isLogged:!0,redirect:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){if(!0===e.response.loginSuccess)return this.setState({redirect:!0}),void this.props.setUserLoggedEmail(!0);this.setState({isLogged:!this.state.isLogged})}},{key:"render",value:function(){return this.state.redirect?r.a.createElement(E.a,{to:"/reports"}):r.a.createElement(k,{isLogged:this.state.isLogged,model:this.state.model,handleSubmit:this.handleSubmit})}}]),t}(n.Component),R=Object(v.b)(function(e){return{response:e.login}},function(e){return Object(y.b)({login:x},e)})(A),G=a(37),P=a.n(G),J=a(55),M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).setValue=function(e,t,n,r){var l=Object.assign({},a.state);l.model[r]=t,a.setState(l)},a.state={model:e.model},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleSubmit,a=e.isSignUp,n=this.state.model,l=a?null:r.a.createElement("center",null,r.a.createElement("label",{className:"text-center"},"Already Registered. Try Again"));return r.a.createElement("div",{className:"login-form"},r.a.createElement("form",{href:"#",onSubmit:function(e){e.preventDefault(),t()}},r.a.createElement("h2",{className:"text-center"}," Sign Up"),r.a.createElement("p",{className:"text-center"},"It's free and only takes a minute."),r.a.createElement("hr",null),r.a.createElement(O.a,{className:"form-control",value:n.email,name:"email",component:"input",type:"text",placeholder:"Username",onChange:this.setValue}),r.a.createElement(O.a,{className:"form-control",value:n.password,name:"password",component:"input",type:"password",placeholder:"Password",onChange:this.setValue}),l,r.a.createElement("div",null,r.a.createElement("p",{style:{textAlign:"center"}},"Already a member? ",r.a.createElement(j.a,{to:"/login"},"Login."))),r.a.createElement("div",null,r.a.createElement("button",{className:"buttonCustom",type:"submit",label:"submit"},"Create Account")),r.a.createElement("p",{className:"small text-center"},"By clicking the Create Account, you agree to our ",r.a.createElement("br",null),r.a.createElement("a",null,"Terms & Conditions"),", and ",r.a.createElement("a",null,"Privacy Policy"))))}}]),t}(n.Component),K=Object(w.a)({form:"signup"})(M),B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=Object(J.a)(P.a.mark(function e(){return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.signUp(a.state.model);case 2:case"end":return e.stop()}},e,this)})),a.state={model:_,isSignUp:!0,redirect:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){!0!==e.response.signUpSuccess?this.setState({isSignUp:!this.state.isSignUp}):this.setState({redirect:!0})}},{key:"render",value:function(){return this.state.redirect?r.a.createElement(E.a,{to:"/login"}):r.a.createElement(K,{isSignUp:this.state.isSignUp,model:this.state.model,handleSubmit:this.handleSubmit})}}]),t}(n.Component),T=Object(v.b)(function(e){return{response:e.signUp}},function(e){return Object(y.b)({signUp:U},e)})(B),F=a(66),V=a.n(F),D=a(273),W=a(267),q=a(276),z=a(268),H=a(230),$=a(36),Q=a.n($),X=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.reports;return e?r.a.createElement("center",null,r.a.createElement(D.a,{bsStyle:"info",style:{display:"inline-block"}},r.a.createElement(D.a.Heading,null,r.a.createElement(D.a.Title,{componentClass:"h3",style:{textAlign:"center"}},"Report: ",e.emails[0].email_address)),r.a.createElement(D.a.Body,null,r.a.createElement("center",null,r.a.createElement(W.a,{style:{display:"inline-block"},defaultActiveKey:1,id:"tab"},r.a.createElement(q.a,{eventKey:1,title:"Names"},r.a.createElement(z.a,{style:{textAlign:"center"}},e.names&&e.names.map(function(e){return r.a.createElement(H.a,{key:Q.a.v4()},e.full)}))),r.a.createElement(q.a,{eventKey:2,title:"Emails"},r.a.createElement(z.a,{style:{textAlign:"center"}},e.emails&&e.emails.map(function(e){return r.a.createElement(H.a,{key:Q.a.v4()},e.email_address)}))),r.a.createElement(q.a,{eventKey:3,title:"Social"},r.a.createElement(z.a,{style:{textAlign:"center"}},e.social&&e.social.map(function(e,t){return e.type?r.a.createElement(H.a,{key:Q.a.v4()},r.a.createElement("a",{style:{textTransform:"capitalize"},href:e.url},e.type)):null}))),r.a.createElement(q.a,{eventKey:4,title:"Address"},r.a.createElement(z.a,{style:{textAlign:"center"}},e.addresses&&e.addresses.map(function(e){return r.a.createElement(H.a,{key:Q.a.v4()},e.full)}))),r.a.createElement(q.a,{eventKey:5,title:"Jobs"},r.a.createElement(z.a,{style:{textAlign:"center"}},e.jobs&&e.jobs.map(function(e){return e.title?r.a.createElement(H.a,{key:Q.a.v4()},e.title," at ",e.company):r.a.createElement(H.a,{key:Q.a.v4()},e.company)}))),r.a.createElement(q.a,{eventKey:6,title:"Nicks"},r.a.createElement(z.a,{style:{textAlign:"center"}},e.usernames&&e.usernames.map(function(e){return r.a.createElement(H.a,{key:Q.a.v4()},e)})))))))):null}}]),t}(n.Component),Y=a(272),Z=a(269),ee=a(74),te=a.n(ee),ae=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).getReportsByUser=Object(J.a)(P.a.mark(function e(){var t,n,r;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,JSON.parse(localStorage.getItem("reports"));case 2:t=e.sent,n=localStorage.getItem("userLogged"),r=[],t&&(t.map(function(e){return e.user===n&&r.push(e.report),r}),a.setState({reports:r}));case 6:case"end":return e.stop()}},e,this)})),a.handleClick=function(e){a.setState({show:!0,reportInfo:e,showModal:!0})},a.state={reports:null,show:!1,reportInfo:null,showModal:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(J.a)(P.a.mark(function e(){return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getReportsByUser();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.show?r.a.createElement("div",null,r.a.createElement(te.a,{query:"(min-width: 765px)"},r.a.createElement(X,{key:Q.a.v4(),reports:this.state.reportInfo})),r.a.createElement(te.a,{query:"(max-device-width: 765px)"},r.a.createElement("div",{className:"static-modal"},r.a.createElement(Y.a,{show:this.state.showModal},r.a.createElement(Y.a.Body,null,r.a.createElement(X,{key:Q.a.v4(),reports:this.state.reportInfo})),r.a.createElement(Y.a.Footer,null,r.a.createElement(Z.a,{onClick:function(){return e.setState({showModal:!1})}},"Close")))),";")):null;return r.a.createElement("div",{className:"onCenter"},r.a.createElement("div",{className:V.a},r.a.createElement("h2",{className:"text-center"},"My Reports"),r.a.createElement("hr",{style:{width:"95%"}}),r.a.createElement("center",null,r.a.createElement(z.a,{className:"list-group col-sm-4"},this.state.reports&&this.state.reports.map(function(t){return r.a.createElement("details",{key:Q.a.v4()},r.a.createElement("summary",{className:"text-center",onClick:function(){return e.handleClick(t)}},t.emails&&t.emails[0].email_address))}))),t))}}]),t}(n.Component),ne=a(162),re=a.n(ne),le=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).setValue=function(e,t,n,r){a.setState({newEmailSearch:t})},a.setAndSaveReport=function(e){var t=!1,a=JSON.parse(localStorage.getItem("reports")),n=localStorage.getItem("userLogged"),r={user:n,report:e};a?(a.map(function(e){return e.user===n&&e.report.emails[0].email_address===r.report.emails[0].email_address&&(t=!0),t}),t||(a.push(r),localStorage.setItem("reports",JSON.stringify(a)))):((a=[]).push(r),localStorage.setItem("reports",JSON.stringify(a)))},a.handleSubmit=Object(J.a)(P.a.mark(function e(){var t,n,r,l;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loader:!0}),t=C,n=L,r=a.state.newEmailSearch,e.next=5,re.a.get("".concat(t).concat(n).concat(r));case 5:(l=e.sent)&&(a.setState({loader:!1,report:l.data,showModal:!0}),a.setAndSaveReport(l.data));case 7:case"end":return e.stop()}},e,this)})),a.state={newEmailSearch:"",loader:!1,report:null,showModal:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.loader?null:r.a.createElement("button",{className:"buttonCustom",type:"submit",label:"submit"},"Search"),a=this.state.loader?r.a.createElement("center",null,r.a.createElement("i",{className:"fa fa-spinner fa-spin",style:{color:"#3b5998",fontSize:"30px"}})):null;return r.a.createElement("div",null,r.a.createElement("div",{className:V.a},r.a.createElement("h2",{className:"text-center"},"New Search "),r.a.createElement("hr",{style:{width:"75%"}})),r.a.createElement("div",{className:"login-form"},r.a.createElement("p",{className:"text-center"},"Looking to find out about someone?"),r.a.createElement("form",{href:"#",onSubmit:function(t){t.preventDefault(),e.handleSubmit()}},r.a.createElement(O.a,{className:"form-control",value:this.state.newEmailSearch,name:"newEmailSearch",component:"input",type:"text",placeholder:"Email",onChange:this.setValue}),r.a.createElement("div",null,a,t))),this.state.report&&r.a.createElement("div",{className:V.a},r.a.createElement("hr",{style:{width:"75%"}}),r.a.createElement(te.a,{query:"(min-width: 765px)"},r.a.createElement("div",{className:"onCenter"},r.a.createElement(X,{reports:this.state.report}))),r.a.createElement(te.a,{query:"(max-device-width: 765px)"},r.a.createElement("div",{className:"static-modal"},r.a.createElement(Y.a,{show:this.state.showModal},r.a.createElement(Y.a.Body,null,r.a.createElement(X,{reports:this.state.report})),r.a.createElement(Y.a.Footer,null,r.a.createElement(Z.a,{onClick:function(){return e.setState({showModal:!1})}},"Close")))),";")))}}]),t}(n.Component),se=Object(w.a)({form:"search"})(le),oe=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).setUserLoggedEmail=function(e){a.setState({userLoggedEmail:e,logout:!1})},a.logout=function(){a.props.logout()},a.loginPage=function(){return r.a.createElement(R,{setUserLoggedEmail:a.setUserLoggedEmail})},a.state={isLogged:!0,redirect:!1,userLoggedEmail:null},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){!1!==e.response.isUserLogged||this.setState({logout:!0,userLoggedEmail:!1})}},{key:"render",value:function(){var e=this.state.userLoggedEmail;return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(g.a,{fluid:!0,collapseOnSelect:!0,style:{zIndex:2}},r.a.createElement(g.a.Header,null,r.a.createElement(g.a.Brand,null,r.a.createElement("a",{href:"/"},"React FE Test")),r.a.createElement(g.a.Toggle,null)),r.a.createElement(g.a.Collapse,null,r.a.createElement(f.a,null,e&&r.a.createElement(S.LinkContainer,{to:"/reports"},r.a.createElement(b.a,{eventKey:1,href:"#"},"Reports")),e&&r.a.createElement(S.LinkContainer,{to:"/search"},r.a.createElement(b.a,{eventKey:2,href:"#"},"New Search"))),r.a.createElement(f.a,{pullRight:!0},e&&r.a.createElement(S.LinkContainer,{to:"/login"},r.a.createElement(b.a,{eventKey:1,href:"#",onClick:this.logout}," Logout"))))),r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(h.a,{path:"/login",render:this.loginPage}),r.a.createElement(h.a,{path:"/sign-up",component:T}),r.a.createElement(h.a,{path:"/reports",component:ae}),r.a.createElement(h.a,{path:"/search",component:se}),r.a.createElement(h.a,{path:"/report",component:X}),r.a.createElement(E.a,{from:"*",to:"/login"})))))}}]),t}(n.Component),ce=Object(v.b)(function(e){return{response:e.userLogout}},function(e){return Object(y.b)({logout:I},e)})(oe),ie=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(ce,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=a(275),ue=Object(y.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"LOGIN_SUCCESS":return{loginSuccess:!0,response:t.payload};case"LOGIN__FAIL":return{loginSuccess:!1};default:return e}},signUp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SIGNUP_SUCCESS":return{signUpSuccess:!0,response:t.payload};case"SIGNUP__FAIL":return{signUpSuccess:!1};default:return e}},form:me.a,userLogout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).type){case"USER_NOT_LOGGED":return{isUserLogged:!1};default:return e}}}),pe=Object(y.a)()(y.d);s.a.render(r.a.createElement(v.a,{store:pe(ue)},r.a.createElement(ie,{key:"key-".concat(Date.now())})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},66:function(e,t,a){},86:function(e,t,a){}},[[163,2,1]]]);
//# sourceMappingURL=main.4b20990e.chunk.js.map