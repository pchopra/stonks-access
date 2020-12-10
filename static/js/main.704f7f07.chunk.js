(this["webpackJsonpstonks-access"]=this["webpackJsonpstonks-access"]||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n(0),i=n.n(c),o=n(10),r=n.n(o),s=(n(78),n(79),n(63)),l=n(149),u=n(12),j=n(34),d=n.n(j),b=n(56),h=n(141),g=n(28),O=n(62),f=n.n(O),p=n(57),m=n.n(p),x=n(108),v=n(150),y=n(146),S=n(145),k=n(153),w=n(144),C=n(152),E=n(147),I=n(151),A=n(148),F=function(e){var t=e.advanceStep,n=Object(c.useState)(""),i=Object(u.a)(n,2),o=i[0],r=i[1],s=Object(c.useState)(!1),l=Object(u.a)(s,2),j=l[0],b=l[1],O=Object(g.a)(),f=function(){b(!0)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(h.a,{}),Object(a.jsx)(x.a,{variant:"h4",children:"Enter your early access code"}),Object(a.jsxs)("form",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},children:[Object(a.jsx)(v.a,{label:"Early Access Code",error:j,value:o,onChange:function(e){return r(e.target.value)},placeholder:"OPEN SESAME",helperText:j&&"Invalid access code. Please try again :)"}),Object(a.jsx)(y.a,{style:{backgroundImage:"linear-gradient(to top right, #A01A7D, #EC4067)",color:"white",marginLeft:O.spacing(4)},onClick:function(e){b(!1),d.a.get("https://api.withlaguna.com/stonks/access/code/".concat(o)).then((function(e){e.data.allow?t():f()})).catch((function(){f()}))},children:"Enter"})]})]})},T=function(e){var t=e.advanceStep,n=e.setUserId,i=Object(g.a)(),o=Object(c.useState)(!1),r=Object(u.a)(o,2),s=r[0],l=r[1],j=function(){l(!0)},b=Object(c.useState)(""),h=Object(u.a)(b,2),O=h[0],f=h[1],p=Object(c.useState)(""),m=Object(u.a)(p,2),A=m[0],F=m[1],T=Object(c.useState)(""),P=Object(u.a)(T,2),W=P[0],D=P[1],z=Object(c.useState)(""),B=Object(u.a)(z,2),L=B[0],N=B[1],U=Object(c.useState)(""),_=Object(u.a)(U,2),R=_[0],Y=_[1],J=Object(c.useState)(""),M=Object(u.a)(J,2),H=M[0],V=M[1],q=Object(c.useState)(""),G=Object(u.a)(q,2),K=G[0],Q=G[1],X=Object(c.useState)("no"),Z=Object(u.a)(X,2),$=Z[0],ee=Z[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(x.a,{variant:"h4",children:"Account creation and configuration"}),Object(a.jsxs)("form",{children:[Object(a.jsxs)(S.a,{style:{padding:i.spacing(6),marginBottom:i.spacing(2)},children:[Object(a.jsx)(x.a,{variant:"h6",children:"Your page information"}),Object(a.jsx)(x.a,{variant:"caption",children:"Used to customize your page :)"}),Object(a.jsx)(v.a,{value:O,onChange:function(e){return f(e.target.value)},label:"Title",helperText:"Rob's Stonks",fullWidth:!0}),Object(a.jsx)(v.a,{value:A,onChange:function(e){return F(e.target.value)},label:"Description",helperText:"Trading on long-term horizons",fullWidth:!0}),Object(a.jsx)(v.a,{value:W,onChange:function(e){return D(e.target.value)},label:"Link (optional)",helperText:"https://withterra.com",fullWidth:!0}),Object(a.jsx)(v.a,{value:L,onChange:function(e){return N(e.target.value)},label:"Desired domain",helperText:"i.e enter 'rob' if you want, rob.withlaguna.com",fullWidth:!0}),Object(a.jsxs)(k.a,{component:"fieldset",margin:"none",fullWidth:!0,size:"small",style:{textAlign:"left",marginTop:i.spacing(1)},children:[Object(a.jsx)(w.a,{component:"legend",children:"Portfolio privacy setting"}),Object(a.jsxs)(C.a,{"aria-label":"show amounts",name:"Show portfolio amounts",value:$,onChange:function(e){return ee(e.target.value)},children:[Object(a.jsx)(E.a,{value:"no",control:Object(a.jsx)(I.a,{color:"primary",size:"small"}),label:"Show portfolio percentage only"}),Object(a.jsx)(E.a,{value:"yes",control:Object(a.jsx)(I.a,{color:"primary",size:"small"}),label:"Show portfolio amounts in USD"})]})]})]}),Object(a.jsxs)(S.a,{style:{padding:i.spacing(6),marginBottom:i.spacing(2)},children:[Object(a.jsx)(x.a,{variant:"h6",children:"Confidential information"}),Object(a.jsx)(x.a,{variant:"caption",children:"Information entered in this section will NEVER be revealed on your site"}),Object(a.jsx)(v.a,{value:R,onChange:function(e){return Y(e.target.value)},label:"Full name",fullWidth:!0}),Object(a.jsx)(v.a,{value:H,onChange:function(e){return V(e.target.value)},label:"Email",fullWidth:!0}),Object(a.jsx)(v.a,{value:K,onChange:function(e){return Q(e.target.value)},label:"Phone",fullWidth:!0})]}),s&&Object(a.jsx)(x.a,{color:"red",children:"Something went wrong :(. Please double check your information"}),Object(a.jsx)(y.a,{style:{backgroundImage:"linear-gradient(to top right, #A01A7D, #EC4067)",color:"white"},onClick:function(e){l(!1),d.a.post("https://api.withlaguna.com/stonks/access/form",{title:O,description:A,link:W,subdomain:L,name:R,email:H,phone:K,show_amounts:"yes"===$}).then((function(e){e.data.allow?(n(e.data.id),t()):j()})).catch((function(){j()}))},children:"Submit Information"})]})]})},P=function(e){var t=e.advanceStep,n=e.userId,i=Object(c.useState)(""),o=Object(u.a)(i,2),r=o[0],s=o[1],l=Object(c.useState)(!1),j=Object(u.a)(l,2),h=j[0],O=j[1],f=Object(g.a)();Object(c.useEffect)((function(){d.a.get("https://api.withlaguna.com/stonks/access/plaid_token/".concat(n)).then((function(e){e.data.link_token?s(e.data.link_token):p()})).catch((function(){p()}))}),[]);var p=function(){O(!0)},m={token:r,onSuccess:Object(c.useCallback)((function(e,a){d.a.post("https://api.withlaguna.com/stonks/access/plaid/".concat(n),{token:e,metadata:a}).then((function(e){e.data.allow?t():p()}))}))},v=Object(b.usePlaidLink)(m),S=v.open,k=(v.ready,v.plaidError);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(x.a,{variant:"h4",children:"Connect your investment brokerage"}),Object(a.jsx)(x.a,{children:"Your portfolio is automatically monitored, and trades are immediately updated using Plaid, the standard in banking connections."}),Object(a.jsx)(x.a,{variant:"caption",children:"Only read access is allowed"}),(h||k)&&Object(a.jsx)(x.a,{children:" Something went wrong :( "}),Object(a.jsx)(y.a,{onClick:function(){S()},style:{backgroundImage:"linear-gradient(to top right, #A01A7D, #EC4067)",color:"white",display:"flex",margin:"auto",marginTop:f.spacing(2)},children:"Connect bank account"})]})},W=function(){var e=f()(),t=e.width,n=e.height;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m.a,{width:t,height:n}),Object(a.jsx)(x.a,{variant:"h4",children:"Your page is building! We'll send you an email when it's ready"}),Object(a.jsx)(x.a,{variant:"caption",children:"Feedback? Email team@withlaguna.com"})]})},D=function(){var e=Object(c.useState)(0),t=Object(u.a)(e,2),n=t[0],i=t[1],o=Object(c.useState)(),r=Object(u.a)(o,2),s=r[0],l=r[1],j=Object(g.a)();return Object(a.jsx)(A.a,{container:!0,justify:"center",alignItems:"center",style:{height:"100vh",backgroundImage:"linear-gradient(to top right, #669bbc, #ecd1e5)"},children:Object(a.jsx)(A.a,{item:!0,xs:11,sm:8,md:6,children:Object(a.jsx)(S.a,{style:{paddingTop:j.spacing(12),paddingBottom:j.spacing(12)},children:n>=0&&(0===n?Object(a.jsx)(F,{advanceStep:function(){return i(1)}}):1===n?Object(a.jsx)(T,{advanceStep:function(){return i(2)},setUserId:l}):2===n?Object(a.jsx)(P,{userId:s,advanceStep:function(){return i(3)}}):3===n?Object(a.jsx)(W,{}):Object(a.jsx)(a.Fragment,{}))})})})},z=Object(s.a)({typography:{fontFamily:["Nunito","Roboto",'"Helvetica Neue"',"Arial","sans-serif"].join(",")},palette:{secondary:{main:"#ffffff"}}});var B=function(){return Object(a.jsx)(l.a,{theme:z,children:Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(D,{})})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,154)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(B,{})}),document.getElementById("root")),L()},78:function(e,t,n){},79:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.704f7f07.chunk.js.map