"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[653],{687:function(n,t,e){e.d(t,{Df:function(){return s},TP:function(){return f},tx:function(){return v},z1:function(){return i},zv:function(){return p}});var r=e(861),c=e(757),u=e.n(c),a="beda84c819c00c5674b5621b8ea274af",o="https://api.themoviedb.org/3",s=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/trending/movie/day?api_key=").concat(a));case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,n.abrupt("return",e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/search/movie?api_key=").concat(a,"&query=").concat(t));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"?api_key=").concat(a));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(a));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(a));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},653:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r=e(861),c=e(439),u=e(757),a=e.n(u),o=e(791),s=e(689),i=e(687),f={},p=e(184),v=function(){var n=(0,o.useState)(""),t=(0,c.Z)(n,2),e=t[0],u=t[1],v=(0,o.useState)([]),h=(0,c.Z)(v,2),l=h[0],d=h[1],x=(0,s.s0)(),m=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.z1)(e);case 3:t=n.sent,d(t.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error("Error searching movies:",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return(0,p.jsxs)("div",{className:f.movies,children:[(0,p.jsx)("h1",{children:"Search Movies"}),(0,p.jsx)("input",{type:"text",value:e,onChange:function(n){return u(n.target.value)}}),(0,p.jsx)("button",{onClick:m,children:"Search"}),(0,p.jsx)("ul",{children:l.map((function(n){return(0,p.jsx)("li",{onClick:function(){return t=n.id,void x("/movies/".concat(t));var t},children:n.title},n.id)}))})]})}},861:function(n,t,e){function r(n,t,e,r,c,u,a){try{var o=n[u](a),s=o.value}catch(i){return void e(i)}o.done?t(s):Promise.resolve(s).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,u){var a=n.apply(t,e);function o(n){r(a,c,u,o,s,"next",n)}function s(n){r(a,c,u,o,s,"throw",n)}o(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=653.26807ebd.chunk.js.map