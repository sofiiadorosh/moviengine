import{a as _,b as L}from"./chunk-UNOUAOK3.js";import{a as x}from"./chunk-2BW26AF6.js";import"./chunk-FF7XKZWZ.js";import{j as M}from"./chunk-OJDAKNNU.js";import{B as T,a as C,q as P}from"./chunk-SHPD5XFG.js";import{n as w}from"./chunk-575EQO77.js";import"./chunk-U2Z3FNKK.js";import{Oa as y,Ra as r,Sa as l,U as d,ab as u,ha as n,ia as f,na as s,pa as g,ra as a,wa as v,xa as h,ya as p}from"./chunk-3UEVSDC7.js";function A(e,i){e&1&&p(0,"app-movies-list",1)(1,"app-pagination"),e&2&&g("movies",i)}function O(e,i){e&1&&p(0,"app-loader")}var E=(()=>{let i=class i{constructor(t){this.store=t,this.movies$=this.store.select(P),this.isLoading$=this.store.select(T)}ngOnInit(){this.loadMovies(),this.scrollToTop()}loadMovies(){this.store.dispatch(C.load())}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}ngOnDestroy(){this.store.dispatch(M())}};i.\u0275fac=function(o){return new(o||i)(f(w))},i.\u0275cmp=d({type:i,selectors:[["app-now-playing-movies-page"]],standalone:!0,features:[y],decls:5,vars:6,consts:[[1,"now-playing"],[3,"movies"]],template:function(o,m){if(o&1&&(v(0,"section",0),s(1,A,2,1),r(2,"async"),s(3,O,1,0,"app-loader"),r(4,"async"),h()),o&2){let c;n(),a(1,(c=l(2,2,m.movies$))?1:-1,c),n(2),a(3,l(4,4,m.isLoading$)?3:-1)}},dependencies:[_,u,x,L],styles:["[_nghost-%COMP%]{width:100%}.now-playing[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:36px;padding:24px 96px}"]});let e=i;return e})();export{E as NowPlayingMoviesPageComponent};