"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{146:function(n,e,t){t.d(e,{Z:function(){return g}});var r,o,c,i,a=t(689),u=t(168),s=t(686),f=t(87),h=s.Z.ul(r||(r=(0,u.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n"]))),l=s.Z.li(o||(o=(0,u.Z)(["\n    display: flex;\n"]))),m=(0,s.Z)(f.Link)(c||(c=(0,u.Z)(["\n    display: flex;\n    gap: 24px;\n    align-items: center;\n    color: #000000;\n"]))),p=s.Z.h3(i||(i=(0,u.Z)(["\n    font-size: 32px;\n"]))),d=t(184),g=function(n){var e=n.movies,t=(0,a.TH)();return(0,d.jsx)(h,{children:e&&e.map((function(n){var e=n.id,r=n.title,o=n.poster_path;return(0,d.jsx)(l,{children:(0,d.jsxs)(m,{to:"/movies/".concat(e),state:{from:t},children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(o),alt:r,width:"80"}),(0,d.jsx)(p,{children:r})]})},e)}))})}},415:function(n,e,t){t.r(e);var r=t(439),o=t(791),c=t(146),i=t(390),a=t(184);e.default=function(){var n=(0,o.useState)([]),e=(0,r.Z)(n,2),t=e[0],u=e[1],s=(0,o.useState)(null),f=(0,r.Z)(s,2),h=f[0],l=f[1],m=(0,o.useState)(!1),p=(0,r.Z)(m,2),d=p[0],g=p[1];return(0,o.useEffect)((function(){g(!0),(0,i.Df)().then((function(n){u(n.results)})).catch((function(n){return l(n)})).finally((function(){g(!1)}))}),[]),(0,a.jsxs)(a.Fragment,{children:[d&&(0,a.jsx)("div",{children:"Loading..."}),h&&(0,a.jsx)("div",{children:h.message}),t&&(0,a.jsx)(c.Z,{movies:t})]})}},390:function(n,e,t){t.d(e,{Df:function(){return c},M1:function(){return u},XT:function(){return i},t2:function(){return a},tx:function(){return s}});var r="https://api.themoviedb.org/3/",o="1b503a470f760c92c3c57decdfe60ef0",c=function(){return fetch("".concat(r,"trending/movie/day?api_key=").concat(o)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Oops... Something went wrong"))}))},i=function(n){return fetch("".concat(r,"search/movie?query=").concat(n,"&api_key=").concat(o,"&include_adult=false&language=en-US&page=1")).then((function(n){return n.ok?n.json():Promise.reject(new Error("Oops... Something went wrong"))}))},a=function(n){return fetch("".concat(r,"movie/").concat(n,"?api_key=").concat(o,"&language=en-US")).then((function(n){return n.ok?n.json():Promise.reject(new Error("Oops... Something went wrong"))}))},u=function(n){return fetch("".concat(r,"movie/").concat(n,"/credits?api_key=").concat(o)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Oops... Something went wrong"))}))},s=function(n){return fetch("".concat(r,"movie/").concat(n,"/reviews?api_key=").concat(o)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Oops... Something went wrong"))}))}}}]);
//# sourceMappingURL=415.65b04e26.chunk.js.map