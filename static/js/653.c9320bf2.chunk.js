"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[653],{653:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var a=r(861),n=r(439),s=r(757),c=r.n(s),i=r(791),o={},u=r(340),l=r(87),h=r(184),p=function(){var e=(0,i.useState)(""),t=(0,n.Z)(e,2),r=t[0],s=t[1],p=(0,i.useState)([]),m=(0,n.Z)(p,2),v=m[0],d=m[1],f=function(){var e=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"beda84c819c00c5674b5621b8ea274af",query:r}});case 3:t=e.sent,d(t.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error searching movies:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,h.jsxs)("div",{className:o.movies,children:[(0,h.jsx)("h2",{children:"Search Movies"}),(0,h.jsx)("input",{type:"text",placeholder:"Search for movies...",value:r,onChange:function(e){return s(e.target.value)}}),(0,h.jsx)("button",{onClick:f,children:"Search"}),(0,h.jsx)("ul",{className:o.movieList,children:v.map((function(e){return(0,h.jsx)("li",{className:o.movieItem,children:(0,h.jsxs)(l.rU,{to:"/movies/".concat(e.id),children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:e.title}),(0,h.jsx)("p",{children:e.title})]})},e.id)}))})]})}}}]);
//# sourceMappingURL=653.c9320bf2.chunk.js.map