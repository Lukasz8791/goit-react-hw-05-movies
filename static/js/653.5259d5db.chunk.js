"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[653],{653:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var a=r(861),n=r(439),s=r(757),c=r.n(s),i=r(791),o={},u=r(340),l=r(184),h=function(){var e=(0,i.useState)(""),t=(0,n.Z)(e,2),r=t[0],s=t[1],h=(0,i.useState)([]),p=(0,n.Z)(h,2),m=p[0],v=p[1],d=function(){var e=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"beda84c819c00c5674b5621b8ea274af",query:r}});case 3:t=e.sent,v(t.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error searching movies:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,l.jsxs)("div",{className:o.movies,children:[(0,l.jsx)("h2",{children:"Search Movies"}),(0,l.jsx)("input",{type:"text",placeholder:"Search for movies...",value:r,onChange:function(e){return s(e.target.value)}}),(0,l.jsx)("button",{onClick:d,children:"Search"}),(0,l.jsx)("ul",{className:o.movieList,children:m.map((function(e){return(0,l.jsxs)("li",{className:o.movieItem,children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:e.title}),(0,l.jsx)("p",{children:e.title})]},e.id)}))})]})}}}]);
//# sourceMappingURL=653.5259d5db.chunk.js.map