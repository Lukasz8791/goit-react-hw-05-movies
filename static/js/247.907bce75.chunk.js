"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(e,t,n){n.r(t);var r=n(861),c=n(439),a=n(757),o=n.n(a),i=n(791),s=n(689),u=n(184);t.default=function(){var e=(0,s.UO)().movieId,t=(0,i.useState)([]),n=(0,c.Z)(t,2),a=n[0],f=n[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(o().mark((function t(){var n,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"beda84c819c00c5674b5621b8ea274af",t.next=4,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat("beda84c819c00c5674b5621b8ea274af"));case 4:if((n=t.sent).ok){t.next=7;break}throw new Error("Failed to fetch cast");case 7:return t.next=9,n.json();case 9:r=t.sent,f(r.cast),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.error("Error fetching cast:",t.t0.message);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"Cast"}),(0,u.jsx)("ul",{children:a.map((function(e){return(0,u.jsx)("li",{children:e.name},e.id)}))})]})}},861:function(e,t,n){function r(e,t,n,r,c,a,o){try{var i=e[a](o),s=i.value}catch(u){return void n(u)}i.done?t(s):Promise.resolve(s).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,a){var o=e.apply(t,n);function i(e){r(o,c,a,i,s,"next",e)}function s(e){r(o,c,a,i,s,"throw",e)}i(void 0)}))}}n.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=247.907bce75.chunk.js.map