import{a as ut}from"./chunk-3LC27TTW.js";import{b as Et,d as Ut,e as lt,f as ct,g as pt,h as Ft,k as mt,m as dt,n as gt}from"./chunk-2KV674TH.js";import{a as st,b as at}from"./chunk-AIE6UAMA.js";import{a as ft}from"./chunk-FEB3EEY3.js";import"./chunk-NIOITRYI.js";import{a as z,b as G,c as N,d as Q,e as Z,k as Y}from"./chunk-I3DCLCOT.js";import{B as it,C as rt,i as C,j as tt,k as et,l as nt,p as ot}from"./chunk-THNYKMS3.js";import{n as I}from"./chunk-5U55M7MB.js";import"./chunk-U2Z3FNKK.js";import{$ as u,Aa as F,Ba as U,Ea as R,Fa as T,Ga as W,H as S,Ha as l,Ia as K,Ja as v,Ka as H,La as L,Ma as $,Oa as x,Qa as j,Ra as m,Sa as d,U as A,_a as q,aa as y,ab as k,d as M,ha as a,ia as B,na as _,ob as P,pa as c,ra as h,sa as X,ta as J,u as V,ua as b,va as D,wa as s,xa as r,ya as p,za as w}from"./chunk-E4N7TYRQ.js";var yt=[C.DEFAULT,C.A_TO_Z,C.Z_TO_A,C.RATING_HIGH_TO_LOW,C.RATING_LOW_TO_HIGH];var Ct=["dropdown"],At=(e,n)=>({filter__star_filled:e,filter__star_empty:n});function Bt(e,n){if(e&1){let f=w();s(0,"div",null,0)(2,"app-dropdown",9),m(3,"async"),F("chosenOption",function(i){u(f);let o=U();return y(o.onSelectSortTypeHandler(i))}),r()()}if(e&2){let f=U();a(2),c("options",f.sortParameters)("selectedOption",d(3,2,f.sortType$))}}function bt(e,n){if(e&1){let f=w();s(0,"li",6)(1,"label",10)(2,"input",11),m(3,"async"),F("input",function(){let i=u(f).$implicit,o=U();return y(o.onSelectGenreHandler(i))}),r(),s(4,"span",12),p(5,"svg-icon",13),r(),s(6,"span"),l(7),r()()()}if(e&2){let f,t=n.$implicit,i=U();a(),c("for",t),a(),c("id",t)("checked",(f=d(3,4,i.genres$))==null?null:f.includes(t)),a(5),K(t)}}function Dt(e,n){if(e&1&&(s(0,"span",16),p(1,"svg-icon",17),r()),e&2){let f=n.$implicit;c("ngClass",j(1,At,f,!f))}}function vt(e,n){if(e&1){let f=w();s(0,"li",6)(1,"label",10)(2,"input",14),m(3,"async"),F("input",function(){let i=u(f).$index,o=U();return y(o.onSelectRatingHandler(i))}),r(),s(4,"span",12),p(5,"svg-icon",13),r(),s(6,"span",15),b(7,Dt,2,4,"span",16,X),r()()()}if(e&2){let f,t=n.$implicit,i=n.$index,o=U();a(),c("for",i),a(),c("id",i)("checked",(f=d(3,3,o.rating$))==null?null:f.includes(i+1)),a(5),D(t)}}var _t=(()=>{let n=class n{constructor(t){this.store=t,this.sortParameters=yt,this.genres=Object.values(ot),this.ratingList=this.generateArrays(5),this.isDropdownOpened=!1,this.sortType$=this.store.select(nt),this.genres$=this.store.select(tt),this.rating$=this.store.select(et)}ngOnInit(){document.addEventListener("click",this.onClickOutsideHandler.bind(this))}generateArrays(t){return Array.from({length:t},(i,o)=>Array.from({length:t},(E,g)=>g<=o?1:0))}onDropdownHandler(t){let i=t instanceof MouseEvent,o=t instanceof KeyboardEvent;i&&t.stopPropagation(),!(o&&(t.preventDefault(),t.code!=="Enter"&&t.code!=="Space"))&&(this.isDropdownOpened=!this.isDropdownOpened)}onClickOutsideHandler(t){this.dropdown&&(this.dropdown.nativeElement.contains(t.target)||(this.isDropdownOpened=!1))}onSelectSortTypeHandler(t){this.store.dispatch(Q({sortType:t}))}onSelectGenreHandler(t){this.store.dispatch(G({genre:t}))}onSelectRatingHandler(t){this.store.dispatch(N({rating:t+1}))}onResetFiltersHandler(){this.store.dispatch(Z())}ngOnDestroy(){document.removeEventListener("click",this.onClickOutsideHandler.bind(this))}};n.\u0275fac=function(i){return new(i||n)(B(I))},n.\u0275cmp=A({type:n,selectors:[["app-filter"]],viewQuery:function(i,o){if(i&1&&R(Ct,5),i&2){let E;T(E=W())&&(o.dropdown=E.first)}},standalone:!0,features:[x],decls:20,vars:4,consts:[["dropdown",""],[1,"filter"],[1,"filter__content"],["tabindex","0","aria-haspopup","true","aria-expanded","false",1,"filter__heading","sorting__heading",3,"click","keydown"],[1,"filter__heading"],[1,"filter__list"],[1,"filter__item"],[1,"filter__list","rating__list"],["type","button",1,"filter__button",3,"click"],[3,"chosenOption","options","selectedOption"],[1,"filter__label",3,"for"],["type","checkbox","name","genre",1,"filter__input",3,"input","id","checked"],[1,"filter__checkbox"],["src","assets/svg/check.svg"],["type","checkbox",1,"filter__input",3,"input","id","checked"],[1,"filter__star-list"],[1,"filter__star",3,"ngClass"],["src","assets/svg/star.svg"]],template:function(i,o){i&1&&(s(0,"div",1)(1,"div",2)(2,"h2",3),F("click",function(g){return o.onDropdownHandler(g)})("keydown",function(g){return o.onDropdownHandler(g)}),l(3),m(4,"async"),r(),_(5,Bt,4,4,"div"),r(),s(6,"div",2)(7,"h2",4),l(8,"Genres"),r(),s(9,"ul",5),b(10,bt,8,6,"li",6,J),r()(),s(12,"div",2)(13,"h2",4),l(14,"Rating"),r(),s(15,"ul",7),b(16,vt,9,5,"li",6,X),r()(),s(18,"button",8),F("click",function(){return o.onResetFiltersHandler()}),l(19," Reset filters "),r()()),i&2&&(a(3),v(" Sort by: ",d(4,2,o.sortType$)," "),a(2),h(5,o.isDropdownOpened?5:-1),a(5),D(o.genres),a(6),D(o.ratingList))},dependencies:[P,q,ut,k],styles:['@font-face{font-family:Poppins;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJnecmNE.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJfecg.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLGT9Z1JlFc-K.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLEj6Z1JlFc-K.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Rubik;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nErXyi0A.woff2) format("woff2");unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:Rubik;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nMrXyi0A.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Rubik;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nFrXyi0A.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Rubik;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nDrXyi0A.woff2) format("woff2");unicode-range:U+0590-05FF,U+200C-2010,U+20AA,U+25CC,U+FB1D-FB4F}@font-face{font-family:Rubik;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nPrXyi0A.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Rubik;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nBrXw.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Rubik;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nErXyi0A.woff2) format("woff2");unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:Rubik;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nMrXyi0A.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Rubik;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nFrXyi0A.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Rubik;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nDrXyi0A.woff2) format("woff2");unicode-range:U+0590-05FF,U+200C-2010,U+20AA,U+25CC,U+FB1D-FB4F}@font-face{font-family:Rubik;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nPrXyi0A.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Rubik;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nBrXw.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Rubik;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nErXyi0A.woff2) format("woff2");unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:Rubik;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nMrXyi0A.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Rubik;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nFrXyi0A.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Rubik;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nDrXyi0A.woff2) format("woff2");unicode-range:U+0590-05FF,U+200C-2010,U+20AA,U+25CC,U+FB1D-FB4F}@font-face{font-family:Rubik;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nPrXyi0A.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Rubik;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nBrXw.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.filter__button[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:0;font-family:inherit;font-weight:500;font-size:16px;line-height:1.25;background:transparent;border:none;border-radius:8px;outline:none;cursor:pointer}.filter[_ngcontent-%COMP%]{position:sticky;top:0;display:flex;flex-direction:column;gap:24px;width:300px;padding:16px 32px}.filter__content[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column}.filter[_ngcontent-%COMP%]   .sorting__heading[_ngcontent-%COMP%]{margin-bottom:0;padding:12px 16px;font-family:Poppins,sans-serif;font-weight:400;font-size:14px;line-height:1.4;color:#121212;background-color:#f9f9f9;border:1px solid #ebebeb;border-radius:12px;outline:none;cursor:pointer}.filter__heading[_ngcontent-%COMP%]{margin-bottom:16px;font-size:22px;font-weight:700;line-height:1.4}.filter__list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.filter__item[_ngcontent-%COMP%]{display:flex;align-items:center;font-family:Poppins,sans-serif;font-weight:400;font-size:14px;line-height:1.4}.filter[_ngcontent-%COMP%]   .category__list[_ngcontent-%COMP%]{flex-direction:row;flex-wrap:wrap}.filter[_ngcontent-%COMP%]   .category__item[_ngcontent-%COMP%]{width:auto;padding:4px 8px;text-transform:lowercase;color:#00a698;background:#00a6984d;border-radius:12px;cursor:pointer}.filter[_ngcontent-%COMP%]   .category__item_active[_ngcontent-%COMP%]{color:#fff;background-color:#00a698;cursor:default}.filter[_ngcontent-%COMP%]   .category__item[_ngcontent-%COMP%]:hover:not(.category__item_active){color:#fff;background-color:#00a698}.filter__input[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;white-space:nowrap;clip-path:inset(100%);clip:rect(0 0 0 0);overflow:hidden}.filter__input[_ngcontent-%COMP%]:checked + .filter__checkbox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{opacity:1}.filter__label[_ngcontent-%COMP%]{display:flex;gap:10px;font-family:Poppins,sans-serif;font-weight:400;font-size:14px;line-height:1.4}.filter__checkbox[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-shrink:0;width:20px;height:20px;background-color:transparent;border:1.5px solid #ebebeb;border-radius:4px;cursor:pointer}.filter__checkbox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:36px;height:36px;fill:#00a698;opacity:0;transition:opacity .25s cubic-bezier(.4,0,.2,1)}.filter__star-list[_ngcontent-%COMP%]{display:flex}.filter__star[_ngcontent-%COMP%]{width:24px;height:24px}.filter__star[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:20px;height:20px;fill:transparent;stroke:#ebebeb}.filter__star_filled[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#ffb800;stroke:#ffb800}.filter[_ngcontent-%COMP%]   .rating__list[_ngcontent-%COMP%]{flex-direction:column-reverse}.filter__button[_ngcontent-%COMP%]{margin-left:auto;width:140px;height:54px;font-family:Poppins,sans-serif;font-weight:400;font-size:14px;line-height:1.4;color:#121212;background-color:#f9f9f9;border:1px solid #ebebeb;border-radius:12px}'],changeDetection:0});let e=n;return e})();function xt(e,n){if(e&1&&(s(0,"p",7),l(1),r()),e&2){let f=U();a(),v(" ",f.error," ")}}function kt(e,n){if(e&1&&(s(0,"div",10),p(1,"app-movies-list",11)(2,"app-pagination"),r()),e&2){let f=U();a(),c("movies",f)}}function Pt(e,n){e&1&&(s(0,"div"),l(1,"We couldn't find any results for your search. Please try again with different keywords"),r())}function It(e,n){e&1&&(s(0,"div"),l(1,"Unlock movies by typing in the search box above!"),r())}function Ot(e,n){if(e&1&&(_(0,kt,3,1,"div",10),m(1,"async"),_(2,Pt,2,0)(3,It,2,0)),e&2){let f=n,t=U();h(0,f.length?0:d(1,1,t.isLoading$)&&!f.length&&t.query?2:3)}}function Mt(e,n){e&1&&p(0,"app-loader")}var oe=(()=>{let n=class n{constructor(t){this.store=t,this.query="",this.error=null,this.querySubject=new M,this.destroy$=new M,this.movies$=this.store.select(rt),this.isLoading$=this.store.select(it)}ngOnInit(){this.querySubject.pipe(V(300),S(this.destroy$)).subscribe(t=>{t.length>=3?(this.error=null,this.store.dispatch(z({query:t}))):this.error="You need to type at least 3 characters"})}ngOnDestroy(){this.store.dispatch(Y()),this.destroy$.next(),this.destroy$.complete()}onSubmitHandler(){this.query.trim().length?this.querySubject.next(this.query):this.error="We can not find something that is empty :("}};n.\u0275fac=function(i){return new(i||n)(B(I))},n.\u0275cmp=A({type:n,selectors:[["app-search-page"]],standalone:!0,features:[x],decls:16,vars:8,consts:[["searchForm","ngForm"],[1,"search"],[1,"search__content"],["autocomplete","off",1,"search__form",3,"ngSubmit"],[1,"search__field"],["id","query","type","text","name","query","placeholder"," ","required","",1,"search__input",3,"ngModelChange","input","ngModel"],["for","query",1,"search__label"],[1,"search__error"],[1,"search__button"],["src","assets/svg/search.svg"],[1,"search__movies"],[3,"movies"]],template:function(i,o){if(i&1){let E=w();s(0,"section",1),p(1,"app-filter"),s(2,"div",2)(3,"form",3,0),F("ngSubmit",function(){return u(E),y(o.onSubmitHandler())}),s(5,"div",4)(6,"input",5),$("ngModelChange",function(O){return u(E),L(o.query,O)||(o.query=O),y(O)}),F("input",function(){return u(E),y(o.onSubmitHandler())}),r(),s(7,"label",6),l(8,"Search movies"),r(),_(9,xt,2,1,"p",7),r(),s(10,"button",8),p(11,"svg-icon",9),r()(),_(12,Ot,4,3),m(13,"async"),_(14,Mt,1,0,"app-loader"),m(15,"async"),r()()}if(i&2){let E;a(6),H("ngModel",o.query),a(3),h(9,o.error?9:-1),a(3),h(12,(E=d(13,4,o.movies$))?12:-1,E),a(2),h(14,d(15,6,o.isLoading$)?14:-1)}},dependencies:[P,gt,Ft,Et,Ut,lt,mt,_t,st,k,ft,dt,pt,ct,at],styles:['@font-face{font-family:Poppins;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJnecmNE.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJfecg.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLGT9Z1JlFc-K.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Poppins;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLEj6Z1JlFc-K.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Poppins;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Rubik;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nErXyi0A.woff2) format("woff2");unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:Rubik;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nMrXyi0A.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Rubik;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nFrXyi0A.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Rubik;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nDrXyi0A.woff2) format("woff2");unicode-range:U+0590-05FF,U+200C-2010,U+20AA,U+25CC,U+FB1D-FB4F}@font-face{font-family:Rubik;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nPrXyi0A.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Rubik;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nBrXw.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Rubik;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nErXyi0A.woff2) format("woff2");unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:Rubik;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nMrXyi0A.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Rubik;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nFrXyi0A.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Rubik;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nDrXyi0A.woff2) format("woff2");unicode-range:U+0590-05FF,U+200C-2010,U+20AA,U+25CC,U+FB1D-FB4F}@font-face{font-family:Rubik;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nPrXyi0A.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Rubik;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nBrXw.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Rubik;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nErXyi0A.woff2) format("woff2");unicode-range:U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC,U+102E0-102FB,U+10E60-10E7E,U+10EFD-10EFF,U+1EE00-1EE03,U+1EE05-1EE1F,U+1EE21-1EE22,U+1EE24,U+1EE27,U+1EE29-1EE32,U+1EE34-1EE37,U+1EE39,U+1EE3B,U+1EE42,U+1EE47,U+1EE49,U+1EE4B,U+1EE4D-1EE4F,U+1EE51-1EE52,U+1EE54,U+1EE57,U+1EE59,U+1EE5B,U+1EE5D,U+1EE5F,U+1EE61-1EE62,U+1EE64,U+1EE67-1EE6A,U+1EE6C-1EE72,U+1EE74-1EE77,U+1EE79-1EE7C,U+1EE7E,U+1EE80-1EE89,U+1EE8B-1EE9B,U+1EEA1-1EEA3,U+1EEA5-1EEA9,U+1EEAB-1EEBB,U+1EEF0-1EEF1}@font-face{font-family:Rubik;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nMrXyi0A.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Rubik;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nFrXyi0A.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Rubik;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nDrXyi0A.woff2) format("woff2");unicode-range:U+0590-05FF,U+200C-2010,U+20AA,U+25CC,U+FB1D-FB4F}@font-face{font-family:Rubik;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nPrXyi0A.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Rubik;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/rubik/v28/iJWKBXyIfDnIV7nBrXw.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.search__button[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:0;font-family:inherit;font-weight:500;font-size:16px;line-height:1.25;background:transparent;border:none;border-radius:8px;outline:none;cursor:pointer}.search[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center;gap:20px;padding:24px 96px}.search__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:36px;width:100%}.search__form[_ngcontent-%COMP%]{position:relative;width:100%;max-width:540px;margin:0 auto}.search__field[_ngcontent-%COMP%]{position:relative;width:100%}.search__label[_ngcontent-%COMP%]{position:absolute;top:50%;left:16px;transform:translateY(-50%);padding:4px;font-family:Poppins,sans-serif;font-size:16px;color:#121212;background:#fdfdfd;pointer-events:none;transition:transform .25s cubic-bezier(.4,0,.2,1)}.search__input[_ngcontent-%COMP%]{width:100%;padding:16px;font-size:18px;font-weight:400;line-height:1.5;color:#121212;background:transparent;border:1px solid #121212;outline:none;border-radius:6px;transition:border-color .25s cubic-bezier(.4,0,.2,1)}.search__input[_ngcontent-%COMP%]::placeholder{font-size:18px;font-weight:400;line-height:1.5;color:#121212}.search__input[_ngcontent-%COMP%]:focus ~ .search__label[_ngcontent-%COMP%], .search__input[_ngcontent-%COMP%]:not(:placeholder-shown) ~ .search__label[_ngcontent-%COMP%]{transform:translateY(-46px) scale(.8)}.search__input[_ngcontent-%COMP%]:focus, .search__input[_ngcontent-%COMP%]:not(:placeholder-shown){border-color:#00a698}.search__input[_ngcontent-%COMP%]:not(:focus){border-color:#121212}.search__error[_ngcontent-%COMP%]{position:absolute;bottom:-16px;left:0;font-size:12px;color:#ea552b}.search__button[_ngcontent-%COMP%]{position:absolute;top:12px;right:16px}.search__button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:36px;height:36px;fill:#121212;transition:fill .25s cubic-bezier(.4,0,.2,1)}.search__button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{fill:#00a698}.search__movies[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:36px;height:100%}'],changeDetection:0});let e=n;return e})();export{oe as SearchPageComponent};
