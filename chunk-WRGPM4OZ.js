import{b as H,c as h,d as N,e as z,h as $,i as j,j as Q,l as q,n as G}from"./chunk-5HXPI5LQ.js";import{b as S,c as W,d as L,e as T}from"./chunk-QZDBUJUG.js";import"./chunk-AGVFSACB.js";import{n as R}from"./chunk-575EQO77.js";import{a as O}from"./chunk-U2Z3FNKK.js";import{$ as A,Aa as y,Ba as m,Ha as a,Ia as w,Oa as _,Pa as I,Qa as P,Ra as l,Sa as p,U as u,_ as B,_a as X,aa as b,ab as M,ha as e,ia as d,ib as V,kb as J,na as F,ob as K,pa as U,ra as c,ta as D,ua as v,va as k,wa as f,xa as E,ya as g,za as x}from"./chunk-3UEVSDC7.js";var Z=[{id:"username",for:"username",label:"Username",type:"text",formControlName:"username",placeholder:" ",required:!0,icon:"username"},{id:"password",for:"password",label:"Password",type:"password",formControlName:"password",placeholder:" ",required:!0,icon:"password"}];function nt(n,o){if(n&1&&(f(0,"div",0)(1,"p",1),a(2),E()()),n&2){let r=m();e(2),w(r.message)}}var Y=(()=>{let o=class o{constructor(){this.message=null}ngOnChanges(t){t.message&&t.message.currentValue&&this.clearMessage()}clearMessage(){setTimeout(()=>{this.message=null},3e3)}};o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=u({type:o,selectors:[["app-error"]],inputs:{message:"message"},standalone:!0,features:[B,_],decls:1,vars:1,consts:[[1,"error"],[1,"error__description"]],template:function(i,s){i&1&&F(0,nt,3,1,"div",0),i&2&&c(0,s.message?0:-1)},styles:['@font-face{font-family:Poppins;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJnecmNE.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJfecg.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLGT9Z1JlFc-K.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLEj6Z1JlFc-K.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Rubik;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nErXyi0A.woff2) format("woff2");unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:Rubik;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nMrXyi0A.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Rubik;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nFrXyi0A.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Rubik;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nDrXyi0A.woff2) format("woff2");unicode-range:U+0590-05FF,U+200C-2010,U+20AA,U+25CC,U+FB1D-FB4F}@font-face{font-family:Rubik;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nPrXyi0A.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Rubik;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nBrXw.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Rubik;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nErXyi0A.woff2) format("woff2");unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:Rubik;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nMrXyi0A.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Rubik;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nFrXyi0A.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Rubik;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nDrXyi0A.woff2) format("woff2");unicode-range:U+0590-05FF,U+200C-2010,U+20AA,U+25CC,U+FB1D-FB4F}@font-face{font-family:Rubik;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nPrXyi0A.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Rubik;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nBrXw.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Rubik;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nErXyi0A.woff2) format("woff2");unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:Rubik;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nMrXyi0A.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Rubik;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nFrXyi0A.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Rubik;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nDrXyi0A.woff2) format("woff2");unicode-range:U+0590-05FF,U+200C-2010,U+20AA,U+25CC,U+FB1D-FB4F}@font-face{font-family:Rubik;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nPrXyi0A.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Rubik;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nBrXw.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.error[_ngcontent-%COMP%]{position:absolute;top:24px;left:50%;transform:translate(-50%);width:480px;padding:16px;background:#ea552b;border-radius:12px}.error__description[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-size:16px;font-weight:400;line-height:1.4;color:#fff}']});let n=o;return n})();var ot=n=>({login_disabled:n}),it=(n,o)=>({"login__eye-icon_closed":n,"login__eye-icon_open":o});function et(n,o){if(n&1){let r=x();f(0,"button",20),y("click",function(){A(r);let i=m(2);return b(i.onShowPasswordHandler())}),g(1,"svg-icon",21),E()}if(n&2){let r=m(2);e(),U("src",r.isPasswordVisible?"assets/svg/open-eye.svg":"assets/svg/closed-eye.svg")("ngClass",P(2,it,!r.isPasswordVisible,r.isPasswordVisible))}}function st(n,o){n&1&&(f(0,"p",19),a(1," This field is required "),E())}function ft(n,o){if(n&1&&(f(0,"div",8),g(1,"input",15),l(2,"async"),f(3,"label",16),a(4),E(),g(5,"svg-icon",17),F(6,et,2,5,"button",18)(7,st,2,0,"p",19),E()),n&2){let r,t=o.$implicit,i=m();e(),U("id",t.id)("type",t.type)("formControlName",t.formControlName)("placeholder",t.placeholder)("readonly",p(2,10,i.isLoading$)),e(2),U("for",t.for),e(),w(t.label),e(),U("src","assets/svg/"+t.icon+".svg"),e(),c(6,t.formControlName==="password"?6:-1),e(),c(7,(r=i.loginForm.get(t.formControlName))!=null&&r.invalid&&((r=i.loginForm.get(t.formControlName))!=null&&r.touched)?7:-1)}}function Et(n,o){n&1&&(f(0,"span"),a(1,"Sign in"),E())}function rt(n,o){n&1&&g(0,"span",11)}function at(n,o){n&1&&(f(0,"span"),a(1,"Quick Sign in \u{1F680}"),E())}function Ut(n,o){n&1&&g(0,"span",14)}var bt=(()=>{let o=class o{constructor(t,i,s,C){this.formBuilder=t,this.store=i,this.router=s,this.route=C,this.fields=Z,this.isQuickSignIn=!1,this.loginForm=this.formBuilder.group({username:["",h.required],password:["",h.required]}),this.isPasswordVisible=!1,this.isAuthorized$=this.store.select(S),this.isLoading$=this.store.select(L),this.error$=this.store.select(W)}onSubmitHandler(){if(this.loginForm.valid){let{username:t,password:i}=this.loginForm.value;t&&i&&this.signIn({username:t,password:i})}else this.loginForm.markAllAsTouched()}onQuickSignInHandler(){this.isQuickSignIn=!0;let t={username:"sofidorosh",password:"5@53M?xeFuw9"};this.signIn(t)}signIn(t){this.store.dispatch(T(t)),this.redirectToHome()}redirectToHome(){this.isAuthorized$.subscribe(t=>{if(t){let i=this.route.snapshot.queryParams.returnUrl||O.DEFAULT;this.router.navigate([i])}})}onShowPasswordHandler(){this.isPasswordVisible=!this.isPasswordVisible;let t=this.fields.find(i=>i.formControlName==="password");t&&(t.type=this.isPasswordVisible?"text":"password")}};o.\u0275fac=function(i){return new(i||o)(d(q),d(R),d(J),d(V))},o.\u0275cmp=u({type:o,selectors:[["app-login-page"]],standalone:!0,features:[_],decls:31,vars:27,consts:[[3,"message"],[1,"login",3,"ngClass"],[1,"login__content"],["src","assets/svg/tmdb.svg",1,"login__picture"],[1,"login__heading"],[1,"login__subheading"],[1,"login__subheading","login__subheading_last"],["autocomplete","off",1,"login__form",3,"ngSubmit","formGroup"],[1,"login__field"],[1,"login__button-wrapper"],["type","submit",1,"login__button",3,"disabled"],[1,"login__loader","login__loader_inverted"],[1,"login__separator"],["type","button",1,"login__button","login__button_outlined",3,"click","disabled"],[1,"login__loader"],[1,"login__input",3,"id","type","formControlName","placeholder","readonly"],[1,"login__label",3,"for"],[1,"login__icon",3,"src"],["type","button",1,"login__eye"],[1,"login__error"],["type","button",1,"login__eye",3,"click"],[1,"login__eye-icon",3,"src","ngClass"]],template:function(i,s){i&1&&(g(0,"app-error",0),l(1,"async"),f(2,"section",1),l(3,"async"),f(4,"div",2),g(5,"svg-icon",3),f(6,"h1",4),a(7,"Authorization required"),E(),f(8,"h2",5),a(9,"Please sign in to TMDB to continue and unlock all features \u2728"),E(),f(10,"h2",6),a(11,"Or press quick sign in to use default credentials"),E(),f(12,"form",7),y("ngSubmit",function(){return s.onSubmitHandler()}),v(13,ft,8,12,"div",8,D),f(15,"div",9)(16,"button",10),l(17,"async"),F(18,Et,2,0,"span"),l(19,"async"),F(20,rt,1,0,"span",11),l(21,"async"),E(),f(22,"div")(23,"span",12),a(24,"or"),E()(),f(25,"button",13),l(26,"async"),y("click",function(){return s.onQuickSignInHandler()}),F(27,at,2,0,"span"),l(28,"async"),F(29,Ut,1,0,"span",14),l(30,"async"),E()()()()()),i&2&&(U("message",p(1,9,s.error$)),e(2),U("ngClass",I(25,ot,p(3,11,s.isLoading$))),e(10),U("formGroup",s.loginForm),e(),k(s.fields),e(3),U("disabled",p(17,13,s.isLoading$)),e(2),c(18,p(19,15,s.isLoading$)===!1?18:-1),e(2),c(20,p(21,17,s.isLoading$)&&!s.isQuickSignIn?20:-1),e(5),U("disabled",p(26,19,s.isLoading$)),e(2),c(27,p(28,21,s.isLoading$)===!1?27:-1),e(2),c(29,p(30,23,s.isLoading$)&&s.isQuickSignIn?29:-1))},dependencies:[K,G,$,H,N,z,j,Q,M,X,Y],styles:['@font-face{font-family:Poppins;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJnecmNE.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJfecg.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLGT9Z1JlFc-K.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLEj6Z1JlFc-K.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Rubik;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nErXyi0A.woff2) format("woff2");unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:Rubik;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nMrXyi0A.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Rubik;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nFrXyi0A.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Rubik;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nDrXyi0A.woff2) format("woff2");unicode-range:U+0590-05FF,U+200C-2010,U+20AA,U+25CC,U+FB1D-FB4F}@font-face{font-family:Rubik;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nPrXyi0A.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Rubik;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nBrXw.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Rubik;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nErXyi0A.woff2) format("woff2");unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:Rubik;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nMrXyi0A.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Rubik;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nFrXyi0A.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Rubik;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nDrXyi0A.woff2) format("woff2");unicode-range:U+0590-05FF,U+200C-2010,U+20AA,U+25CC,U+FB1D-FB4F}@font-face{font-family:Rubik;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nPrXyi0A.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Rubik;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nBrXw.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Rubik;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nErXyi0A.woff2) format("woff2");unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:Rubik;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nMrXyi0A.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Rubik;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nFrXyi0A.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Rubik;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nDrXyi0A.woff2) format("woff2");unicode-range:U+0590-05FF,U+200C-2010,U+20AA,U+25CC,U+FB1D-FB4F}@font-face{font-family:Rubik;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nPrXyi0A.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Rubik;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nBrXw.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.login__eye[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:36px;height:36px;padding:0;background:transparent;border:none;outline:none;cursor:pointer}.login__button[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:0;font-family:inherit;font-weight:500;font-size:16px;line-height:1.25;background:transparent;border:none;border-radius:8px;outline:none;cursor:pointer}.login[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100vh}.login_disabled[_ngcontent-%COMP%]   .login__button[_ngcontent-%COMP%]:disabled{cursor:default}.login__content[_ngcontent-%COMP%]{width:100%;max-width:600px;padding:48px 32px;background:#fdfdfd;border-radius:16px;box-shadow:0 4px 48px #0000001a}.login__picture[_ngcontent-%COMP%]{display:block;margin-bottom:12px}.login__heading[_ngcontent-%COMP%]{margin-bottom:12px;font-size:20px;font-weight:700;line-height:1.4;text-align:center}.login__subheading[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-size:16px;font-weight:400;line-height:1.4;text-align:center}.login__subheading_last[_ngcontent-%COMP%]{margin-bottom:24px}.login__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:32px;width:100%}.login__field[_ngcontent-%COMP%]{position:relative;width:100%}.login__label[_ngcontent-%COMP%]{position:absolute;top:50%;left:48px;transform:translateY(-50%);padding:4px;font-family:Poppins,sans-serif;font-size:16px;color:#121212;background:#fdfdfd;pointer-events:none;transition:transform .25s cubic-bezier(.4,0,.2,1)}.login__input[_ngcontent-%COMP%]{width:100%;padding:16px 52px;font-size:18px;font-weight:400;line-height:1.5;color:#121212;background:transparent;border:1px solid #121212;outline:none;border-radius:6px;transition:border-color .25s cubic-bezier(.4,0,.2,1)}.login__input[_ngcontent-%COMP%]::placeholder{font-size:18px;font-weight:400;line-height:1.5;color:#121212}.login__input[_ngcontent-%COMP%]:focus ~ .login__label[_ngcontent-%COMP%], .login__input[_ngcontent-%COMP%]:not(:placeholder-shown) ~ .login__label[_ngcontent-%COMP%]{transform:translateY(-46px) scale(.8)}.login__input[_ngcontent-%COMP%]:focus, .login__input[_ngcontent-%COMP%]:not(:placeholder-shown){border-color:#00a698}.login__input[_ngcontent-%COMP%]:not(:focus){border-color:#121212}.login__icon[_ngcontent-%COMP%]{position:absolute;top:50%;left:16px;transform:translateY(-50%);width:28px;height:28px;stroke:#00a698}.login__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:28px;height:28px}.login__error[_ngcontent-%COMP%]{position:absolute;bottom:-16px;left:0;font-size:12px;color:#ea552b}.login__eye[_ngcontent-%COMP%]{position:absolute;top:50%;right:16px;transform:translateY(-50%);width:28px;height:28px}.login__eye-icon[_ngcontent-%COMP%]{width:28px;height:28px}.login__eye-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:28px;height:28px}.login__eye-icon_open[_ngcontent-%COMP%]{position:absolute;top:0;left:0}.login__eye-icon_open[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{stroke:#00a698}.login__eye-icon_closed[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#00a698}.login__button-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:36px}.login__button-wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:relative;width:100%;height:1px;background:#d1c7b8}.login__separator[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);padding:8px 24px;color:#d1c7b8;background:#fff}.login__button[_ngcontent-%COMP%]{width:100%;height:65px;font-size:18px;color:#fff;background-color:#00a698;border:2px solid #00a698;border-radius:16px}.login__button_outlined[_ngcontent-%COMP%]{color:#00a698;background:#fff;border-color:#00a698}.login__loader[_ngcontent-%COMP%]{display:block;width:32px;height:32px;border:4px solid #00a698;border-radius:100px;border-top-color:#fff;border-left-color:#fff;animation:_ngcontent-%COMP%_spin 1s linear infinite}.login__loader_inverted[_ngcontent-%COMP%]{border-color:#fff;border-top-color:#00a698;border-left-color:#00a698}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}'],changeDetection:0});let n=o;return n})();export{bt as LoginPageComponent};