(this["webpackJsonp10-days"]=this["webpackJsonp10-days"]||[]).push([[0],{52:function(t,n,e){t.exports=e(64)},64:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),i=e(31),c=e.n(i),o=e(7),u=e(6),l=e(22),m="/",d="/pantry",s="/pantry/edit/:id",p="/pantry/delete/:id",f="/shopping-list",g="/shopping-list/edit/:id",h="/shopping-list/delete/:id",b="/add",y="/settings",v=e(28),j=e(35),x=e(27),O={data:[{id:0,name:"ciasto czekoladowe",quantity:200,category:"desserts",limit:40,j:"kg"},{id:1,name:"ciasto orzechowe",quantity:200,category:"desserts",limit:40,j:"kg"},{id:2,name:"salami",quantity:22,category:"meat",limit:40,j:"kg"},{id:3,name:"bia\u0142a kie\u0142basa",quantity:22,category:"meat",limit:40,j:"kg"},{id:4,name:"mleko",quantity:33,category:"dairy_products",limit:33,j:"kg"},{id:5,name:"jaja",quantity:33,category:"dairy_products",limit:33,j:"kg"},{id:6,name:"mas\u0142o",quantity:33,category:"dairy_products",limit:40,j:"kg"},{id:7,name:"chleb \u017cytni",quantity:33,category:"breads",limit:40,j:"kg"},{id:8,name:"bu\u0142ki",quantity:2,category:"breads",limit:40,j:"kg"},{id:9,name:"bagietka",quantity:33,category:"breads",limit:40,j:"kg"},{id:10,name:"curry",quantity:33,category:"spices",limit:45,j:"kg"},{id:11,name:"pieprz",quantity:10,category:"spices",limit:40,j:"kg"},{id:12,name:"s\xf3l",quantity:33,category:"spices",limit:40,j:"kg"},{id:13,name:"banany",quantity:33,category:"fruits",limit:38,j:"kg"},{id:14,name:"cytryna",quantity:33,category:"fruits",limit:40,j:"kg"},{id:15,name:"jab\u0142ka",quantity:33,category:"fruits",limit:40,j:"kg"},{id:16,name:"ziemniaki",quantity:33,category:"vegetables",limit:40,j:"kg"},{id:17,name:"marchew",quantity:43,category:"vegetables",limit:40,j:"kg"},{id:18,name:"og\xf3rki",quantity:15,category:"vegetables",limit:40,j:"kg"}],notification:{isOpen:!0,day:3}},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,n=arguments.length>1?arguments[1]:void 0,e=n.type,a=n.payload;switch(e){case"REMOVE_ITEM":return Object(x.a)({},t,{data:Object(j.a)(t.data.filter((function(t){return t.id!==a})))});case"ADD_ITEM":return Object(x.a)({},t,{data:[].concat(Object(j.a)(t.data),[Object(x.a)({id:t.data.length},a)])});case"EDIT_ITEM":return Object(x.a)({},t,{data:Object(j.a)(t.data.map((function(t,n){return n===a.id?a:t})))});case"NOTIFICATION":return Object(x.a)({},t,{notification:a});default:return t}},k=e(44),w=function(){try{var t=localStorage.getItem("state");if(null===t)return;return JSON.parse(t)}catch(n){return}}(),q=Object(v.createStore)(E,w,Object(k.composeWithDevTools)());q.subscribe((function(){!function(t){try{var n=JSON.stringify(t);localStorage.setItem("state",n)}catch(e){}}(q.getState())}));var C=q,S=e(1),I=e(2),z=function(t){return"".concat(t/16,"rem")},N=function(t){return"".concat(t/16,"em")};function D(){var t=Object(S.a)(["\n      background-color: #ffd82b;\n      width: ",";\n      height: ",";\n      font-size: ",";\n    "]);return D=function(){return t},t}function T(){var t=Object(S.a)(["\n  padding: 0;\n  background-color: #e6e6e6;\n  /* width: ","; */\n  width: ",";\n  height: ",";\n  border: none;\n  border-radius: ",";\n  font-family: 'Montserrat';\n  font-weight: 600;\n  font-size: ",";\n  text-transform: uppercase;\n  ","\n"]);return T=function(){return t},t}var B=I.c.button(T(),(function(t){var n=t.width;return z(n)||z(200)}),z(105),z(30),z(50),N(10),(function(t){return t.secondary&&Object(I.b)(D(),z(105),z(30),N(10))}));function R(){var t=Object(S.a)(["\n  line-height: ",";\n"]);return R=function(){return t},t}var M=I.c.div(R(),z(60)),A=e(9),F=e(10);function P(){var t=Object(S.a)(["\n  justify-self: right;\n  align-self: center;\n  width: 50px;\n  height: 50px;\n  line-height: 57px;\n  font-weight: 300;\n  border-radius: 50%;\n"]);return P=function(){return t},t}function _(){var t=Object(S.a)(["\n  padding: 10px 20px;\n  color: black;\n  &:first-child {\n    padding-left: 0;\n  }\n  @media (max-width: 580px) {\n    padding: 0;\n    margin: 0;\n    height: auto;\n    line-height: 20px;\n  }\n"]);return _=function(){return t},t}function V(){var t=Object(S.a)(["\n  @media (max-width: 580px) {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n  }\n"]);return V=function(){return t},t}function J(){var t=Object(S.a)(["\n  margin: 0;\n  align-self: center;\n"]);return J=function(){return t},t}function L(){var t=Object(S.a)(["\n  margin-right: 6px;\n"]);return L=function(){return t},t}function Q(){var t=Object(S.a)(["\n  max-height: 90px;\n  max-width: 1024px;\n  margin: 0 auto;\n  background-color: #ffd82b;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  padding: 10px 20px;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  display: grid;\n  grid-template-columns: 185px auto 50px;\n"]);return Q=function(){return t},t}var U=I.c.div(Q()),W=Object(I.c)(A.a)(L()),X=I.c.h2(J()),G=I.c.div(V()),H=Object(I.c)(M)(_()),K=Object(I.c)(B)(P()),Y=function(){return r.a.createElement(U,null,r.a.createElement(X,null,r.a.createElement(W,{icon:F.f,size:"1x"})," PantryApp"),r.a.createElement(G,null,r.a.createElement(H,{as:u.b,to:"/pantry"},"Pantry"),r.a.createElement(H,{as:u.b,to:"/shopping-list"},"Shopping List"),r.a.createElement(H,{as:u.b,to:"/settings"},"Settings")),r.a.createElement(K,{as:u.b,to:"/add"},r.a.createElement(A.a,{icon:F.e,size:"2x"})))};function Z(){var t=Object(S.a)(['\n  \n  *, *::before, *::after {\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  \n  html {\n    font-size: 62.5%; \n  }\n  \n  body {\n    margin: 0;\n    padding: 0;\n    font-size: 16px;\n    font-family: "Montserrat", sans-serif;\n  }\n  li {\n    list-style: none;\n  }\n  select {\n  -webkit-appearance: none;\n  background: transparent;\n}\n\nselect:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 #000;\n}\n  div {\n    margin: 0;\n    padding: 0;\n  }\n\n  button, a {\n  display: inline-block;\n  appearance: none;\n  margin: 10px 0;\n  padding: 0px;\n  height: 50px;\n  border-width: 0;\n  color: #000;\n  font-family: sans-serif;\n  text-decoration: none;\n  line-height: 22px;\n  text-align: center;\n  cursor: pointer;\n\n}\n']);return Z=function(){return t},t}var $=Object(I.a)(Z()),tt=e(15),nt=e(16),et=e(17),at=e(18);function rt(){var t=Object(S.a)(["\n  position: fixed;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  bottom: 10px;\n  padding: 5px 10px;\n  border-radius: 8px;\n  border: 2px dashed black;\n  background-color: #ffd82a;\n"]);return rt=function(){return t},t}var it=I.c.div(rt()),ct=function(t){Object(at.a)(e,t);var n=Object(et.a)(e);function e(){var t;Object(tt.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=n.call.apply(n,[this].concat(r))).pushNotification=function(){var n=t.props.changeNotification,e=new Date,a=new Date(e),r=a.setDate(a.getDate()+3);n({isOpen:!1,day:new Date(r).getDay()})},t}return Object(nt.a)(e,[{key:"componentDidMount",value:function(){var t=this;setInterval((function(){var n=t.props,e=n.changeNotification,a=n.notification;(new Date).getDay()===a.day&&e({isOpen:!0,day:a.day})}),3e5)}},{key:"render",value:function(){var t=this.props.notification;return r.a.createElement(r.a.Fragment,null,t.isOpen&&r.a.createElement(it,null,"When was the last time you updated the state?"," ",r.a.createElement(B,{type:"button",onClick:this.pushNotification},"close")))}}]),e}(a.Component),ot=Object(o.b)((function(t){return{notification:t.notification}}),(function(t){return{changeNotification:function(n){return t(function(t){return{type:"NOTIFICATION",payload:t}}(n))}}}))(ct);function ut(){var t=Object(S.a)(["\n  max-width: 1024px;\n  padding: 0;\n  margin: 0 auto;\n  margin-top: 96px;\n"]);return ut=function(){return t},t}var lt=I.c.div(ut()),mt=function(t){var n=t.children;return r.a.createElement(lt,null,r.a.createElement($,null),r.a.createElement(Y,null),n,r.a.createElement(ot,null))};function dt(){var t=Object(S.a)(["\n  display: grid;\n  grid-template-columns: 2fr 1fr 2fr 1fr 1fr;\n  border: "," solid #e6e6e6;\n  border-radius: ",";\n  margin: ",";\n  padding: "," ",";\n  transition: background-color 0.2s;\n  transition: border-color 0.2s;\n  @media (max-width: 999px) {\n    display: grid;\n    grid-template-rows: repeat(5, 1fr);\n    grid-template-columns: inherit;\n  }\n\n  &:hover {\n    background-color: #f1f1f1;\n    transition: background-color 1s;\n    transition: border-color 1.8s;\n    border: "," solid #5f5f5f;\n  }\n  &:nth-child(2n + 1) {\n    background-color: #f7f7f7;\n    &:hover {\n      background-color: #f1f1f1;\n      transition: background-color 1s;\n      transition: border-color 1.8s;\n      border: "," solid #5f5f5f;\n    }\n  }\n"]);return dt=function(){return t},t}var st=I.c.li(dt(),z(1),z(8),z(10),z(10),z(20),z(1),z(1)),pt=e(3),ft=e.n(pt);function gt(){var t=Object(S.a)(["\n  line-height: 20px;\n  &:first-child {\n    margin-right: 6px;\n  }\n"]);return gt=function(){return t},t}function ht(){var t=Object(S.a)(["\n  justify-self: right;\n  align-self: center;\n"]);return ht=function(){return t},t}function bt(){var t=Object(S.a)(["\n  max-width: 1024px;\n  padding: 0;\n  margin: 0 auto;\n  margin-top: 76px;\n"]);return bt=function(){return t},t}var yt=I.c.ul(bt()),vt=Object(I.c)(M)(ht()),jt=Object(I.c)(B)(gt()),xt=function(t){var n=t.data,e=t.page;return r.a.createElement(yt,null,n.map((function(t,n){var a=t.name,i=t.quantity,c=t.category,o=t.limit,l=t.j;return r.a.createElement(st,{key:a},r.a.createElement(M,{className:"red"},r.a.createElement("strong",null,"Name: "),a.toUpperCase()),r.a.createElement(M,null,r.a.createElement("strong",null," Quantity: "),i,l),r.a.createElement(M,null,r.a.createElement("strong",null," Category: "),c.toUpperCase()),r.a.createElement(M,null,r.a.createElement("strong",null," Limit: "),o,l),r.a.createElement(vt,null,r.a.createElement(jt,{as:u.b,to:"".concat(e,"/delete/").concat("pantry"===e?t.id:n),secondary:1},"Remove"),r.a.createElement(jt,{as:u.b,to:"".concat(e,"/edit/").concat("pantry"===e?t.id:n)},"Edit")))})))};xt.defaultProps={data:ft.a.arrayOf(ft.a.shape({name:"name",quantity:0,category:"category",limit:0})),page:"404"};var Ot=xt,Et=Object(o.b)((function(t){return{data:t.data}}))((function(t){var n=t.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ot,{data:n,page:"pantry"}))})),kt=function(t){Object(at.a)(e,t);var n=Object(et.a)(e);function e(){var t;Object(tt.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=n.call.apply(n,[this].concat(r))).state={data:"",limits:[]},t}return Object(nt.a)(e,[{key:"componentDidMount",value:function(){var t=this,n=this.props.data;this.setState({data:n},(function(){var n=t.state.data.filter((function(t){return t.quantity<t.limit/2}));t.setState({limits:n})}))}},{key:"render",value:function(){var t=this.state.limits;return r.a.createElement(Ot,{data:t,page:"shopping-list"})}}]),e}(a.Component),wt=Object(o.b)((function(t){return{data:t.data}}))(kt);function qt(){var t=Object(S.a)(["\n  margin: 0;\n  margin-top: 108px;\n  margin-left: 18px;\n  align-self: center;\n"]);return qt=function(){return t},t}function Ct(){var t=Object(S.a)(["\n  margin-right: 6px;\n"]);return Ct=function(){return t},t}var St=Object(I.c)(A.a)(Ct()),It=I.c.h2(qt()),zt=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(It,null,r.a.createElement(St,{icon:F.b,size:"1x"})," Settings"))},Nt=e(26);function Dt(){var t=Object(S.a)(["\n  max-width: 600px;\n  padding: 0 20px;\n  margin: 0 auto;\n  margin-top: 96px;\n"]);return Dt=function(){return t},t}var Tt=I.c.div(Dt()),Bt=function(t){var n=t.children;return r.a.createElement(Tt,null,n)},Rt=e(25);function Mt(){var t=Object(S.a)(["\n  padding: 15px 30px;\n  font-size: 16px;\n  font-weight: 600;\n  background-color: #e6e6e6;\n  border: none;\n  border-radius: 50px;\n  outline: none;\n  ::placeholder {\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    color: gray;\n  }\n"]);return Mt=function(){return t},t}var At=I.c.input(Mt());function Ft(){var t=Object(S.a)(["\n  margin-top: 6px;\n  margin-bottom: 2px;\n  padding: 15px 30px;\n  font-size: 16px;\n  font-weight: 600;\n  background-color: #e6e6e6;\n  border: none;\n  border-radius: 50px;\n  outline: none;\n  ::placeholder {\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    color: gray;\n  }\n"]);return Ft=function(){return t},t}var Pt=I.c.select(Ft()),_t=["kg","g","l","szt"],Vt=function(t){var n=t.options,e=void 0===n?_t:n,a=t.name,i=t.values,c=t.handleChange,o=t.handleBlur;return r.a.createElement(Pt,{name:a,value:i,onChange:c,onBlur:o},e.map((function(t){return r.a.createElement("option",{key:t,value:t,label:t},t)})))};Vt.defaultProps={options:_t,name:"name",values:"value",handleChange:function(){return"onChange"},handleBlur:function(){return"handleBlur"}};var Jt=Vt;function Lt(){var t=Object(S.a)(["\n  display: none;\n"]);return Lt=function(){return t},t}function Qt(){var t=Object(S.a)(["\n  justify-self: right;\n  align-self: center;\n  height: 42px;\n  width: 246px;\n  font-size: 16px;\n  outline: none;\n"]);return Qt=function(){return t},t}function Ut(){var t=Object(S.a)(["\n  text-align: right;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n"]);return Ut=function(){return t},t}function Wt(){var t=Object(S.a)(["\n  padding-top: 15px;\n  display: grid;\n"]);return Wt=function(){return t},t}function Xt(){var t=Object(S.a)(["\n  margin: 0;\n  margin-top: 108px;\n"]);return Xt=function(){return t},t}function Gt(){var t=Object(S.a)(["\n  margin-right: 6px;\n"]);return Gt=function(){return t},t}function Ht(){var t=Object(S.a)(["\n  justify-self: left;\n  align-self: center;\n  width: 50px;\n  height: 50px;\n  line-height: 67px;\n  font-weight: 300;\n  border-radius: 50%;\n  margin: 0;\n"]);return Ht=function(){return t},t}function Kt(){var t=Object(S.a)(["\n  margin: 6px 0;\n"]);return Kt=function(){return t},t}var Yt=Object(I.c)(At)(Kt()),Zt=Object(I.c)(u.b)(Ht()),$t=Object(I.c)(A.a)(Gt()),tn=I.c.h2(Xt()),nn=Object(I.c)(Rt.a)(Wt()),en=I.c.div(Ut()),an=Object(I.c)(B)(Qt()),rn=Object(I.c)(Yt)(Lt()),cn=function(t){Object(at.a)(e,t);var n=Object(et.a)(e);function e(){var t;Object(tt.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=n.call.apply(n,[this].concat(r))).state={item:[""],limited:"",limitedRes:"",redirectToPantry:!1},t.initValues=function(){var n=t.state,e=n.item,a=n.limitedRes;return"/shopping-list/edit/:id"===t.props.match.path?{id:a.id,name:a.name,quantity:Number(a.quantity),category:a.category,limit:Number(a.limit),j:a.j}:{id:e.id,name:e.name,quantity:Number(e.quantity),category:e.category,limit:Number(e.limit),j:e.j}},t.handleRedirect=function(){t.setState({redirectToPantry:!0})},t}return Object(nt.a)(e,[{key:"componentDidMount",value:function(){var t=this,n=this.props,e=n.match,a=n.data,r=a.filter((function(t){return Number(t.id)===Number(e.params.id)})),i=Object(Nt.a)(r,1)[0],c=a.filter((function(t){return Number(t.quantity)<Number(t.limit)/2}));this.setState({limited:c},(function(){var n=t.state.limited.splice(e.params.id,1),a=Object(Nt.a)(n,1)[0];t.setState({limitedRes:a})}));var o=this.state.limitedRes;switch(e.path){case s:this.setState({item:i});break;case g:this.setState({item:o})}}},{key:"render",value:function(){var t=this,n=this.props.editItem;return!0===this.state.redirectToPantry?r.a.createElement(l.a,{to:"/pantry"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(Bt,null,r.a.createElement(tn,null,r.a.createElement($t,{icon:F.c,size:"1x"}),"Edit Item"),r.a.createElement(Rt.b,{enableReinitialize:!0,initialValues:this.initValues(),onSubmit:function(e,a){var r=a.setSubmitting;n(e),r(!1),t.handleRedirect()}},(function(t){var n=t.values,e=t.handleChange,a=t.handleBlur,i=t.isSubmitting;return r.a.createElement(nn,null,r.a.createElement(rn,{type:"text",name:"id",onChange:e,onBlur:a,value:n.id||"",disabled:!0,required:!0}),r.a.createElement(Yt,{type:"text",name:"name",onChange:e,onBlur:a,value:n.name||"",required:!0}),r.a.createElement(Yt,{type:"text",name:"quantity",onChange:e,onBlur:a,value:n.quantity||"",required:!0}),r.a.createElement(Yt,{type:"text",name:"category",onChange:e,onBlur:a,value:n.category||"",required:!0}),r.a.createElement(Yt,{type:"text",name:"limit",onChange:e,onBlur:a,value:n.limit||"",required:!0}),r.a.createElement(Jt,{name:"j",values:n.j,handleChange:e,handleBlur:a}),r.a.createElement(en,null,r.a.createElement(Zt,{to:"/"},r.a.createElement(A.a,{icon:F.a,size:"2x"})),r.a.createElement(an,{type:"submit",secondary:1,disabled:i},"Submit")))}))))}}]),e}(a.Component),on=Object(o.b)((function(t){return{data:t.data}}),(function(t){return{editItem:function(n){return t(function(t){return{type:"EDIT_ITEM",payload:t}}(n))}}}))(cn);function un(){var t=Object(S.a)(["\n  margin-right: 6px;\n"]);return un=function(){return t},t}function ln(){var t=Object(S.a)(["\n  height: 42px;\n  width: 246px;\n  font-size: 16px;\n  line-height: 40px;\n  margin-right: 6px;\n  outline: none;\n"]);return ln=function(){return t},t}function mn(){var t=Object(S.a)(["\n  margin: 0;\n  margin-top: 108px;\n"]);return mn=function(){return t},t}var dn=I.c.h2(mn()),sn=Object(I.c)(B)(ln()),pn=Object(I.c)(A.a)(un()),fn=function(t){Object(at.a)(e,t);var n=Object(et.a)(e);function e(){var t;Object(tt.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=n.call.apply(n,[this].concat(r))).state={page:"pantry",item:[],limited:"",limitedRes:""},t}return Object(nt.a)(e,[{key:"componentDidMount",value:function(){var t=this,n=this.props,e=n.match,a=n.data,r=a.filter((function(t){return Number(t.id)===Number(e.params.id)})),i=Object(Nt.a)(r,1)[0],c=a.filter((function(t){return t.quantity<t.limit/2}));this.setState({limited:c},(function(){var n=t.state.limited.splice(e.params.id,1),a=Object(Nt.a)(n,1)[0];t.setState({limitedRes:a})}));var o=this.state.limitedRes;switch(e.path){case p:this.setState({item:i});break;case h:this.setState({item:o})}}},{key:"render",value:function(){var t=this.state,n=t.item,e=t.limitedRes,a=this.props,i=a.match,c=a.removeItem;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Bt,null,r.a.createElement(dn,null,r.a.createElement(pn,{icon:F.g,size:"1x"}),"Delete Item"),i.path===h?r.a.createElement(r.a.Fragment,null,r.a.createElement("pre",null,e.name," ",e.quantity," ",e.category," ",e.limit),r.a.createElement(sn,{as:u.b,to:"/shopping-list",onClick:function(){return c(e.id)}},"Confirm"),r.a.createElement(sn,{as:u.b,to:"/shopping-list",secondary:1},"Cancel")):r.a.createElement(r.a.Fragment,null,r.a.createElement("pre",null,n.name," ",n.quantity," ",n.category," ",n.limit),r.a.createElement(sn,{as:u.b,to:"/pantry",onClick:function(){return c(n.id)}},"Confirm"),r.a.createElement(sn,{as:u.b,to:"/pantry",secondary:1},"Cancel"))))}}]),e}(a.Component);fn.defaultProps={data:ft.a.arrayOf(ft.a.shape({name:null,quantity:null,category:null,limit:null}))};var gn=Object(o.b)((function(t){return{data:t.data}}),(function(t){return{removeItem:function(n){return t(function(t){return{type:"REMOVE_ITEM",payload:t}}(n))}}}))(fn);function hn(){var t=Object(S.a)(["\n  text-align: center;\n"]);return hn=function(){return t},t}function bn(){var t=Object(S.a)(["\n  margin: 6px 0;\n"]);return bn=function(){return t},t}function yn(){var t=Object(S.a)(["\n  padding-top: 15px;\n  display: grid;\n"]);return yn=function(){return t},t}function vn(){var t=Object(S.a)(["\n  margin: 0;\n  margin-top: 108px;\n"]);return vn=function(){return t},t}function jn(){var t=Object(S.a)(["\n  text-align: right;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n"]);return jn=function(){return t},t}function xn(){var t=Object(S.a)(["\n  justify-self: left;\n  align-self: center;\n  width: 50px;\n  height: 50px;\n  line-height: 67px;\n  font-weight: 300;\n  border-radius: 50%;\n  margin: 0;\n"]);return xn=function(){return t},t}function On(){var t=Object(S.a)(["\n  margin-right: 6px;\n  line-height: 67px;\n"]);return On=function(){return t},t}function En(){var t=Object(S.a)(["\n  justify-self: right;\n  align-self: center;\n  height: 42px;\n  width: 246px;\n  font-size: 16px;\n  outline: none;\n"]);return En=function(){return t},t}var kn=Object(I.c)(B)(En()),wn=Object(I.c)(A.a)(On()),qn=Object(I.c)(u.b)(xn()),Cn=I.c.div(jn()),Sn=I.c.h2(vn()),In=Object(I.c)(Rt.a)(yn()),zn=Object(I.c)(At)(bn()),Nn=Object(I.c)(Bt)(hn()),Dn=function(t){Object(at.a)(e,t);var n=Object(et.a)(e);function e(){var t;Object(tt.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=n.call.apply(n,[this].concat(r))).state={redirectToPantry:!1},t.handleRedirect=function(){t.setState({redirectToPantry:!0})},t}return Object(nt.a)(e,[{key:"render",value:function(){var t=this,n=this.state.redirectToPantry,e=this.props.addItem;return!0===n?r.a.createElement(l.a,{to:"/pantry"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(Nn,null,r.a.createElement(Sn,null,r.a.createElement(wn,{icon:F.d,size:"1x"}),"Add Item"),r.a.createElement(Rt.b,{initialValues:{name:"",quantity:"",category:"",limit:"",j:""},onSubmit:function(n,a){var r=a.setSubmitting;e(n),r(!1),t.handleRedirect()}},(function(t){var n=t.values,e=t.handleChange,a=t.handleBlur,i=t.isSubmitting;return r.a.createElement(In,null,r.a.createElement(zn,{type:"text",name:"name",placeholder:"Name",onChange:e,onBlur:a,value:n.name,required:!0}),r.a.createElement(zn,{type:"text",name:"quantity",placeholder:"Quantity",onChange:e,onBlur:a,value:n.quantity,required:!0}),r.a.createElement(zn,{type:"text",name:"category",placeholder:"Category",onChange:e,onBlur:a,value:n.category,required:!0}),r.a.createElement(zn,{type:"text",name:"limit",placeholder:"Limit",onChange:e,onBlur:a,value:n.limit,required:!0}),r.a.createElement(Jt,{name:"j",values:n.j,handleChange:e,handleBlur:a}),r.a.createElement(Cn,null,r.a.createElement(qn,{to:"/"},r.a.createElement(A.a,{icon:F.a,size:"2x"})),r.a.createElement(kn,{type:"submit",secondary:1,disabled:i},"Submit")))}))))}}]),e}(a.Component),Tn=Object(o.b)(null,(function(t){return{addItem:function(n){return t(function(t){return{type:"ADD_ITEM",payload:t}}(n))}}}))(Dn),Bn=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{store:C},r.a.createElement(u.a,null,r.a.createElement(mt,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:m,render:function(){return r.a.createElement(l.a,{to:d})}}),r.a.createElement(l.b,{exact:!0,path:d,component:Et}),r.a.createElement(l.b,{exact:!0,path:s,component:on}),r.a.createElement(l.b,{exact:!0,path:p,component:gn}),r.a.createElement(l.b,{exact:!0,path:f,component:wt}),r.a.createElement(l.b,{exact:!0,path:g,component:on}),r.a.createElement(l.b,{exact:!0,path:h,component:gn}),r.a.createElement(l.b,{exact:!0,path:y,component:zt}),r.a.createElement(l.b,{exact:!0,path:b,component:Tn}))))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Bn,null)),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.414543a5.chunk.js.map