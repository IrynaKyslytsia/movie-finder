"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[244],{573:function(A,n,e){e.d(n,{Z:function(){return p}});var o,t,i,r,a,c=e(689),h=e(168),Q=e(686),s=e(87),B=Q.Z.ul(o||(o=(0,h.Z)(["\n    --min: 30ch;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));\n    gap: 1rem;\n"]))),g=Q.Z.li(t||(t=(0,h.Z)(["\n    border-radius: 4px;\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover {\n        transform: scale(1.03);\n        cursor: zoom-in;\n    }\n"]))),x=(0,Q.Z)(s.Link)(i||(i=(0,h.Z)(["\n    gap: 24px;\n    align-items: center;\n    color: #000000;\n    \n"]))),m=Q.Z.img(r||(r=(0,h.Z)(["\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 100%;\n    object-fit: cover;   \n"]))),u=Q.Z.h3(a||(a=(0,h.Z)(["\n    display: block;\n    padding: 12px;\n    font-size: 16px;\n"]))),w=e(184),p=function(A){var n=A.movies,e=(0,c.TH)();return(0,w.jsx)(B,{children:n&&n.map((function(A){var n=A.id,o=A.title,t=A.poster_path;return(0,w.jsx)(g,{children:(0,w.jsxs)(x,{to:"/movies/".concat(n),state:{from:e},children:[(0,w.jsx)(m,{src:t?"https://image.tmdb.org/t/p/w500/".concat(t):"data:image/jpeg;base64,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OlDC8w/Z7YCc19GO0cALkK++p7oH+j46o1BpHqsN7Z2GkTpP4QEKdtqvyHtHQDgYnsMZsRH/AHpjUGkeqw3tnYaROg5xE287U4j4MaJoLxDojUGkeqw3tnYaRNTQGtcBEppHx4Ets9JeIU6I1BpHqsN7Z2GkTUxAYmNNuxIgRAAPBDtY1BpHqsN7Z2GkTUT37PzcNCPBDNY1BpHqsN7Z2GkTUYLTRj6KxYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYmP/KYryifesag0j1WG9s7DSJvkag0j1WG9Eg5gM+caMWmWEl3+b0kA0ljIkpqexdTQCKiSLfrelIDERpqygyqplTKmVMqZUyplTKmVMqZUyplTKmVMqZUyplTKmVMqZUyplTKmV/Qg6A4D2lyZQEAN6wFxgnwg3ylvwJAPD6USXl/AP8AL3sOKpvyP8U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774QFH8hTlBj/AIQP/9oADAMBAAIAAwAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAQAAAAAAAAAAAAAAACggAAAAAAAAAAAAABggAAAAAAAAAAAAAAigAAAAAAAAAAAAAAiAAAAAAAAAAAAAACigAAAAAAAAAAAAACgAAAAAAAAAAAAAACigAAABgAAAAAAAACgAAAAAAAAAAAAAACigAAAABAgAAAAAACgAAAAAAAAAAAAAACigAACgAAQAAAAAACgAAAAAAAAAAAAAACigAACAAACgDgAAACgAAAAAAAAAAAAAACigAAgAAAAggAQAACgAAAAAAAAAAAAAACigAAAAAAACAAAQACgAAAAAAAAAAAAAACigQgAAAAAAAAAAACgAAAAAAAAAAAAAACigAAAAAAAAAAAAQCgAAAAAAAAAAAAAACigDDDDDDDDDDDDACgAAAAAAAAAAAAAAAAQwwwwwwwwwwwwwySgAAAAAAAAAAAAAAAQwwwwwwwwwwwwwigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAACg/9oACAEDAQE/EAAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAoP/aAAgBAgEBPxAAH//EACoQAAAEAgsBAAMBAQAAAAAAAAABUfARcRAgITAxQEFQocHxYaCx0YHh/9oACAEBAAE/EPwPv2XALMLWtAwQGCAwQGCAwQGCAwQGCAwQGCAwQGCAwQGCAwQGCAwQGCAwQGCAwQGCAwQGCAwQGCAwQGCARix+hAfwI0ARCNhiZ7uLAHx7ABK/SmeH4MKKg/lMAUDOABCEIQhCEIQhCEIQhCEIQhCEMiRWgDoB83nBnWnxsCchP3ig/JnyHMdZ58TYXCHMdZ58TYXCHMdZ58TYXCHMdXUNoiAsRhBGLCsQyR8TYXCHMdXUJqxQBRP4AEQmRAfE2FwhzHVzrqoY68SnU9kcfE2FwhzHVzGPVipCXbkArIKA+JsLhDmOriScAefbgqls+n8ZAfE2FwhzHVxEzXz/ALC78+JsLhDmOq+qPAAzBtQrhLGBaqRJJFCOqhAEDTX91uD4mwuEOY6ryu70pYtnowNk8DFRKufE2FwhzHVb5CrsRPKAtr/WqIwzdSvHxNhcIcx1WSA7oGYIACy3BYICQsB51TT27QB1HCsfE2FwhzHVWMFod2Iiow/o5Vi23TrB8TYXCHMdVYwlXZEnb/gBaRYQxuJQVUfE2FwhzHVSV3lT4BgEQqB8TYXCHMdUmQNqADJGzQNY+JsLhDmOs0YQ2TgYqJUnxNhcIcx1SeeRZgbgY5SfE2FwhzHVMZrRAQqaYhU0xCppiFTTEKmmIVNMQqaYhU0xCppiFTTEKmmIVNMQqaYhU0xCppiFTTEKmmIVNMQqaYhU0xCppiFTTH2BOGMxpPibC4Q5jrPPiZ9weKigFEtYM6HmGAEToCKNgwDKEWhnAZmZmZmZmZmZmZmZmZmYzkoDSrdCAvTyzpkADjog1z4ns9EBJP5jYLPYAa4B5QPKB5QPKB5QPKB5QPKB5QPKB5QPKB5QPKB5QPKB5QPKB5QPKB5QPKB5QPKB5QPKB5ShwC+D+H4IH//Z",alt:o}),(0,w.jsx)(u,{children:o})]})},n)}))})}},244:function(A,n,e){e.r(n),e.d(n,{default:function(){return f}});var o,t,i,r=e(439),a=e(791),c=e(87),h=e(919),Q=e.n(h),s=e(390),B=e(494),g=e(168),x=e(686),m=x.Z.form(o||(o=(0,g.Z)(["\n    display: flex;\n    align-items: center;\n    width: 100%;\n    max-width: 600px;\n    border: 1px solid #002077; \n    border-radius: 8px;\n    overflow: hidden;\n    margin-bottom: 40px;\n    margin-left: auto;\n    margin-right: auto;\n"]))),u=x.Z.button(t||(t=(0,g.Z)(["\n    display: inline-block;\n    width: 40px;\n    height: 40px;\n    border: 0;\n    background-size: 40%;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n\n    &:hover {\n        opacity: 1;\n    };\n"]))),w=x.Z.input(i||(i=(0,g.Z)(["\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 18px;\n    border: none;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n"]))),p=e(184),E=function(A){var n=A.onSubmit,e=(0,a.useState)(""),o=(0,r.Z)(e,2),t=o[0],i=o[1];return(0,p.jsxs)(m,{onSubmit:function(A){A.preventDefault(),""!==t.trim()?(n(t),i("")):Q().Notify.info("Please enter something!")},children:[(0,p.jsx)(u,{type:"submit",children:(0,p.jsx)(B.Yfv,{width:"18",height:"18"})}),(0,p.jsx)(w,{type:"text",value:t,onChange:function(A){var n=A.target.value;i(n.toLowerCase())},autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})]})},C=e(573),f=function(){var A,n=(0,a.useState)([]),e=(0,r.Z)(n,2),o=e[0],t=e[1],i=(0,a.useState)(null),h=(0,r.Z)(i,2),B=h[0],g=h[1],x=(0,a.useState)(!1),m=(0,r.Z)(x,2),u=m[0],w=m[1],f=(0,c.useSearchParams)(),l=(0,r.Z)(f,2),j=l[0],G=l[1],D=null!==(A=j.get("query"))&&void 0!==A?A:"";(0,a.useEffect)((function(){""!==D&&(w(!0),(0,s.XT)(D).then((function(A){0===A.results.length&&Q().Notify.failure("There are no movies..."),t(A.results)})).catch((function(A){return g(A)})).finally((function(){w(!1)})))}),[D]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(E,{onSubmit:function(A){G({query:A})}}),u&&(0,p.jsx)("div",{children:"Loading..."}),B&&(0,p.jsx)("div",{children:B.message}),o&&(0,p.jsx)(C.Z,{movies:o})]})}},390:function(A,n,e){e.d(n,{Df:function(){return i},M1:function(){return c},XT:function(){return r},t2:function(){return a},tx:function(){return h}});var o="https://api.themoviedb.org/3/",t="1b503a470f760c92c3c57decdfe60ef0",i=function(){return fetch("".concat(o,"trending/movie/day?api_key=").concat(t)).then((function(A){return A.ok?A.json():Promise.reject(new Error("Oops... Something went wrong"))}))},r=function(A){return fetch("".concat(o,"search/movie?query=").concat(A,"&api_key=").concat(t,"&include_adult=false&language=en-US&page=1")).then((function(A){return A.ok?A.json():Promise.reject(new Error("Oops... Something went wrong"))}))},a=function(A){return fetch("".concat(o,"movie/").concat(A,"?api_key=").concat(t,"&language=en-US")).then((function(A){return A.ok?A.json():Promise.reject(new Error("Oops... Something went wrong"))}))},c=function(A){return fetch("".concat(o,"movie/").concat(A,"/credits?api_key=").concat(t)).then((function(A){return A.ok?A.json():Promise.reject(new Error("Oops... Something went wrong"))}))},h=function(A){return fetch("".concat(o,"movie/").concat(A,"/reviews?api_key=").concat(t)).then((function(A){return A.ok?A.json():Promise.reject(new Error("Oops... Something went wrong"))}))}}}]);
//# sourceMappingURL=244.dba1b612.chunk.js.map