"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[943],{943:function(n,e,t){t.r(e);var r=t(439),o=t(791),c=t(390),i=t(184),u=t(87).useParams;e.default=function(){var n=(0,o.useState)([]),e=(0,r.Z)(n,2),t=e[0],a=e[1],s=(0,o.useState)(null),f=(0,r.Z)(s,2),h=f[0],m=f[1],l=(0,o.useState)(!1),d=(0,r.Z)(l,2),p=d[0],g=d[1],w=u().movieId;return(0,o.useEffect)((function(){g(!0),(0,c.tx)(w).then((function(n){a(n.results)})).catch((function(n){return m(n)})).finally((function(){g(!1)}))}),[w]),(0,i.jsxs)(i.Fragment,{children:[p&&(0,i.jsx)("div",{children:"Loading..."}),h&&(0,i.jsx)("div",{children:h.message}),(0,i.jsx)("ul",{children:t&&t.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,i.jsxs)("li",{children:[(0,i.jsxs)("p",{children:["Author: ",t]}),(0,i.jsx)("p",{children:r})]},e)}))})]})}},390:function(n,e,t){t.d(e,{Df:function(){return c},M1:function(){return a},XT:function(){return i},t2:function(){return u},tx:function(){return s}});var r="https://api.themoviedb.org/3/",o="1b503a470f760c92c3c57decdfe60ef0",c=function(){return fetch("".concat(r,"trending/movie/day?api_key=").concat(o)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Oops... Something went wrong"))}))},i=function(n){return fetch("".concat(r,"search/movie?query=").concat(n,"&api_key=").concat(o,"&include_adult=false&language=en-US&page=1")).then((function(n){return n.ok?n.json():Promise.reject(new Error("Oops... Something went wrong"))}))},u=function(n){return fetch("".concat(r,"movie/").concat(n,"?api_key=").concat(o,"&language=en-US")).then((function(n){return n.ok?n.json():Promise.reject(new Error("Oops... Something went wrong"))}))},a=function(n){return fetch("".concat(r,"movie/").concat(n,"/credits?api_key=").concat(o)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Oops... Something went wrong"))}))},s=function(n){return fetch("".concat(r,"movie/").concat(n,"/reviews?api_key=").concat(o)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Oops... Something went wrong"))}))}}}]);
//# sourceMappingURL=943.1d51b5c5.chunk.js.map