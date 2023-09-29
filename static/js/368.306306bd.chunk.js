"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[368],{368:function(A,n,e){e.r(n),e.d(n,{default:function(){return F}});var o,i,c,t,r,a,h,x,s,Q,g=e(439),B=e(168),p=e(686),w=e(87),m=p.Z.div(o||(o=(0,B.Z)(["\n    --min: 30ch;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));\n    gap: 2rem;\n    margin-top: 40px;\n    margin-bottom: 40px;\n    padding: 40px;\n    color: #FFFFFF;\n"]))),E=p.Z.div(i||(i=(0,B.Z)(["\n    width: 100%;\n    height: 100%;    \n"]))),l=p.Z.img(c||(c=(0,B.Z)(["\n    display: inline-block;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;  \n    border-radius: 8px;\n"]))),C=p.Z.div(t||(t=(0,B.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n"]))),j=p.Z.h2(r||(r=(0,B.Z)(["\n    font-size: 40px;\n"]))),u=p.Z.p(a||(a=(0,B.Z)(["\n    font-size: 20px;\n"]))),f=p.Z.h3(h||(h=(0,B.Z)(["\n    font-size: 24px;\n    margin-bottom: 12px;\n"]))),d=(0,p.Z)(w.Link)(x||(x=(0,B.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 160px;\n    height: 36px;\n    background-color: #a30101;\n    color: #ffffff;\n    /* padding: 8px 24px; */\n    border-radius: 8px;\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover {\n        background-color: #530202;\n    }\n"]))),G=p.Z.ul(s||(s=(0,B.Z)(["\n    display: flex;\n    gap: 40px;\n    margin-bottom: 40px;\n"]))),D=(0,p.Z)(w.Link)(Q||(Q=(0,B.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #a30101;\n    color: #ffffff;\n    width: 160px;\n    height: 36px;\n    border-radius: 8px;\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover {\n        background-color: #530202;\n    }\n"]))),Z=e(966),Y=e(184),M=function(A){var n=A.movie,e=n.genres,o=n.title,i=n.overview,c=n.runtime,t=n.vote_average,r=n.poster_path,a=n.release_date;return console.log(n),(0,Y.jsxs)(m,{children:[(0,Y.jsx)(E,{children:(0,Y.jsx)(l,{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):Z,alt:o})}),(0,Y.jsxs)(C,{children:[(0,Y.jsx)(j,{children:"".concat(o," (").concat(a.slice(0,4),")")}),(0,Y.jsx)(u,{style:{color:"#FFFFFF80"},children:e.map((function(A){return A.name})).join(", ")}),(0,Y.jsxs)(u,{children:[c," m"]}),(0,Y.jsxs)(u,{children:["User Score: ",(0,Y.jsxs)("b",{style:{color:"#a30101",fontSize:"26px"},children:[(10*t).toFixed(0)," %"]})]}),(0,Y.jsxs)("div",{children:[(0,Y.jsx)(f,{children:"Overview"}),(0,Y.jsx)(u,{children:i})]})]})]})},U=e(791),H=e(355),v=e(689),k=e(390),F=function(){var A,n,e=(0,U.useState)(null),o=(0,g.Z)(e,2),i=o[0],c=o[1],t=(0,U.useState)(null),r=(0,g.Z)(t,2),a=r[0],h=r[1],x=(0,U.useState)(!1),s=(0,g.Z)(x,2),Q=s[0],B=s[1],p=(0,v.UO)().movieId,w=(0,v.TH)(),m=(0,U.useRef)(null!==(A=null===(n=w.state)||void 0===n?void 0:n.from)&&void 0!==A?A:"/movies");return(0,U.useEffect)((function(){B(!0),(0,k.t2)(p).then((function(A){c(A)})).catch((function(A){return h(A)})).finally((function(){B(!1)}))}),[p]),(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(d,{to:m.current,children:[(0,Y.jsx)(H.x_l,{width:"24",height:"24",style:{marginRight:"6px"}}),"GO BACK"]}),Q&&(0,Y.jsx)("div",{children:"Loading..."}),a&&(0,Y.jsx)("div",{children:a.message}),i&&(0,Y.jsx)(M,{movie:i}),(0,Y.jsxs)(G,{children:[(0,Y.jsx)("li",{children:(0,Y.jsx)(D,{to:"cast",children:"CAST"})}),(0,Y.jsx)("li",{children:(0,Y.jsx)(D,{to:"reviews",children:"REVIEWS"})})]}),(0,Y.jsx)(U.Suspense,{fallback:(0,Y.jsx)("div",{children:"Loading..."}),children:(0,Y.jsx)(v.j3,{})})]})}},390:function(A,n,e){e.d(n,{Df:function(){return c},M1:function(){return a},XT:function(){return t},t2:function(){return r},tx:function(){return h}});var o="https://api.themoviedb.org/3/",i="1b503a470f760c92c3c57decdfe60ef0",c=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return fetch("".concat(o,"trending/movie/day?api_key=").concat(i,"&page=").concat(A)).then((function(A){return A.ok?A.json():Promise.reject(new Error("Oops... Something went wrong"))}))},t=function(A){return fetch("".concat(o,"search/movie?query=").concat(A,"&api_key=").concat(i,"&include_adult=false&language=en-US&page=1")).then((function(A){return A.ok?A.json():Promise.reject(new Error("Oops... Something went wrong"))}))},r=function(A){return fetch("".concat(o,"movie/").concat(A,"?api_key=").concat(i,"&language=en-US")).then((function(A){return A.ok?A.json():Promise.reject(new Error("Oops... Something went wrong"))}))},a=function(A){return fetch("".concat(o,"movie/").concat(A,"/credits?api_key=").concat(i)).then((function(A){return A.ok?A.json():Promise.reject(new Error("Oops... Something went wrong"))}))},h=function(A){return fetch("".concat(o,"movie/").concat(A,"/reviews?api_key=").concat(i)).then((function(A){return A.ok?A.json():Promise.reject(new Error("Oops... Something went wrong"))}))}},966:function(A){A.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABAMDBAMDBAQDBAUEBAUGCgcGBgYGDQkKCAoPDRAQDw0PDhETGBQREhcSDg8VHBUXGRkbGxsQFB0fHRofGBobGv/bAEMBBAUFBgUGDAcHDBoRDxEaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGv/CABEIAfQB9AMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAABAUDAgEH/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB/bQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwe0PM0maNJmjSZo0maNJmjSZo0maNJmjSZo0maNJmjSZo0maNJmjSS1AAAAAAAAAAAAAAAHjMolD3WQrhCuEK4QrhCuEK4QrhCuEK4QrhCuEK4QrhCu8ElE42HLqAAAAAAAAAAAAAAZvHryLqpqQAAAAAAAAAAAAADN49uJfTNSAAAAAAAAAAAAAAZnLryL6ZqQAAAAAAAAAAAAADN49uJfTNSAAAAAAAAAAAAAAZnLryL6ZqQAAAD5D7jNTpmaYAAAAAAABm8e3EvpmpAAAAAAAAAAAAAAMzl15F9M1IAAA8+oiX4C2L6a7n0AAAAAAAM3j24l9M1IAAAAAAAAAAAAABmcuvIvpmpAAAPGXRMAAd9HHvKQAAAAAAZvHtxL6ZqQAAAAAAAAAAAAADM5deRfTNSAAPHvPJwAAPXka3qC8A8Z3vgaFGTqn0AAGbx7cS+makAAAAAAAAAAAAAAzOXXkX0zUgAHLM7cQAAABp5+ofZu2YeQK5BsPHsAAzePbiX0zUgAAAAAAAAAAAAAGZy68i+makAce2YcgAAAAXVZXU+cAAAo0MfSOwAM3j24l9M1IAAAAAAAAAAAAABmcuvIvpmpB8OGf78AAAAAAAAADryGwmpAM3j24l9M1IAAAAAAAAAAAAABmcuvIvpmpE1OWcwAAAAAAAAAAetXItKwZvHtxL6ZqQAAAAAAAAAAAAADM5deRfTNSOHcRrBGsEawRrBGsEawRrBGsEawRrBGsEnfoAM3j24l9M1IAAAAAAAAAAAAABncLoSyzH6GoyxqMsajLGoyxqMsajLGoyxqMsajLGoyxqMsajLGoyxqfMzyffD6X0efQAAAAAAAAAAAAAAgvGO1ORAvEC8QLxAvEC8QLxAvEC8QLxAvEC8QLxAvEC/6QaHX0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/xAAjEAABBAICAwEBAQEAAAAAAAAAAQIDEzJAEiAQETAhMaBQ/9oACAEBAAEFAv8AB85yNFmUtcWuLXFri1xa4tcWuLXFri1xa4tcWuLXFri1xa4tcWuLXFri1xa4tcWuLXFri1w2bfc7iiryXfif6XdmX9Gt5LQhQhQhQhQhQhQhQhQhQhQhQhQhQhQhQhQhQhQhQhQhQhQhQhQhQhQhQg6HyxfbdyXMhx3ZcyHHclzIcN2XMhx3JcyHDdlzIcdyXMhw3ZcyHHclzIcPksy+2O5poy5kOO5LmQ4fGZ3hjuK6MuZDjuS5kOHwVfSKvtfEL9GXMhx3JcyHD4TO6J+DXck+8uZDjuS5kOHdy8U6xv4r95cyHHclzIcO8zv3tE/2n2lzIcdyXMhw7Pdxb3avFUX2nly8UV7lWJ/L4S5kOO5LmQ4dpXe1+ET/AEvmR/JRq8VT9TtLmQ47kuZDh1e7i35RryaSv9J5hd3lzIcdyXMhw6yO5O+LG8lHLxRV9r0a7knWXMhx3JcyHDpI7i35QfwlfyXrE70vWXMhx3JcyHDo93J3ya5WqsrlTvG7k3pLmQ47kuZDh5ld6TUY7i7pLmQ47kuZDh5e7k7Vhd7TzLmQ47kuZDh4md+azV4qn6niXMhx3JcyHDw/9drwL+eJcyHHclzIcPDokcUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFA1qNTxLmQ47kuZDhuy5kOO5LmQu3f4PXk4hw3Jm/njm4scWOLHFjixxY4scWOLHFjixxY4scWOLHFjixxY4scWOLHFjixxY4scWOLHCuVfCfqonpN18XrfT9I4+P/AViKUoUtKWlLSlpS0paUtKWlLSlpS0paUtKWlLSlpS0paUtKWlLSlpS0paUtKWlLSpoiIn+ED//xAAUEQEAAAAAAAAAAAAAAAAAAACg/9oACAEDAQE/AQAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAoP/aAAgBAgEBPwEAH//EACMQAAIBBAIDAQEBAQAAAAAAAAAxARBAQYERISAwUGEioBL/2gAIAQEABj8C/wAH3Z0MYxjGMYxjGMYxjGMYxjGMYx0/r4HfwOJV9xTocjkcjkcjkcjkcjkcjkcjkcjkcjkcjkcjkcjkcjkcjk/nusXs/Amm72ab+Bu9mm/gbvZpv4G72ab9XZ1a7vZpv1cU/LTd7NN+nnw4s93s036eLfd7NN+jm43ezTfo48+LHd7NN2HXhyM4n1bvZpuw48PyvPp3ezTdnxnw/wCfTu9mm7Diw3ezTdhNPzy49G72absOrDd7NN/A3ezTd1x5bvZpuvFvzBz47vZpus3Ex47vZpuvKGMYxjGMYxjGMYxjGMYxnXju9mm/gbv+L7m/5q5GMYxjGMYxjGMYxjGMYxjGMZ3PPwf5V/12fvwEZMmTJkyZMmTJkyZMmTJkyZMmTJkyZMmTJmTrr/CB/8QAKxAAAQEHAwUAAgMBAQAAAAAAAQARITFhcbHwEEDhIDBBUZGBwVCh0aDx/9oACAEBAAE/If8Ag+CtJnoeUdCwTesY4WMcLGOFjHCxjhYxwsY4WMcLGOFjHCxjhYxwsY4WMcLGOFjHCxjhYxwsY4WMcLGOFjHCxjhYxwsY4WMcLGOFjHCZxLZMQC5yfhNBg9sN8AhPiAmjkLxP9fwBWw9Cu+bgHp9dCsvyPhi9hDJgWIFiBYgWIFiBYgWIFiBYgWIFiBYgWIFiBYgWIFiBYgWIFiBYgWIFiBYgWIFiBYgTEPOe0xjjHQ5xj5rvba2ggEfJL/m+BjDyy2ker9b2zsNIm+RqDSPVYb2zsNIm+RqDSPVYb2zsNIm+RqDSPVYb2zsNInaEgAkmMDynsDB4BT0DvYnso1BpHqsN7Z2GkTtGLBLzGngaHnoiSa14eDDYxqDSPVYb2zsNInZAMUAEQxPk6tA2YQp62Mag0j1WG9s7DSJ2UES4Rr46CJNBYQXJhkeYj0dhGoNI9VhvbOw0idgEpeIVRLS0lpJeel0mBjX3sI1BpHqsN7Z2GkTsGoDARr1vMXi3fjUGkeqw3tnYaROsAx+CaaS1ryYnrK0ER49oDaA9ASF4hVNQWPTCxMJiC3YjUGkeqw3tnYaROs7xAX89l8S4wkeh1CCEz70YhERZEAA8EO641BpHqsN7Z2GkTqN4iJhXtlASH+T7no4kUadDF6Bh+x1xqDSPVYb2zsNInUbgBcIfs9pjhUn0EAwABzIJqEwHj2U8jE9AJBBDiC4oQyPMRPqjUGkeqw3tnYaROlDC8w/Z7YCc19GO0cALkK++p7oH+j46o1BpHqsN7Z2GkTpP4QEKdtqvyHtHQDgYnsMZsRH/AHpjUGkeqw3tnYaROg5xE287U4j4MaJoLxDojUGkeqw3tnYaRNTQGtcBEppHx4Ets9JeIU6I1BpHqsN7Z2GkTUxAYmNNuxIgRAAPBDtY1BpHqsN7Z2GkTUT37PzcNCPBDNY1BpHqsN7Z2GkTUYLTRj6KxYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYmP/KYryifesag0j1WG9s7DSJvkag0j1WG9Eg5gM+caMWmWEl3+b0kA0ljIkpqexdTQCKiSLfrelIDERpqygyqplTKmVMqZUyplTKmVMqZUyplTKmVMqZUyplTKmVMqZUyplTKmV/Qg6A4D2lyZQEAN6wFxgnwg3ylvwJAPD6USXl/AP8AL3sOKpvyP8U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774QFH8hTlBj/AIQP/9oADAMBAAIAAwAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAQAAAAAAAAAAAAAAACggAAAAAAAAAAAAABggAAAAAAAAAAAAAAigAAAAAAAAAAAAAAiAAAAAAAAAAAAAACigAAAAAAAAAAAAACgAAAAAAAAAAAAAACigAAABgAAAAAAAACgAAAAAAAAAAAAAACigAAAABAgAAAAAACgAAAAAAAAAAAAAACigAACgAAQAAAAAACgAAAAAAAAAAAAAACigAACAAACgDgAAACgAAAAAAAAAAAAAACigAAgAAAAggAQAACgAAAAAAAAAAAAAACigAAAAAAACAAAQACgAAAAAAAAAAAAAACigQgAAAAAAAAAAACgAAAAAAAAAAAAAACigAAAAAAAAAAAAQCgAAAAAAAAAAAAAACigDDDDDDDDDDDDACgAAAAAAAAAAAAAAAAQwwwwwwwwwwwwwySgAAAAAAAAAAAAAAAQwwwwwwwwwwwwwigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAACg/9oACAEDAQE/EAAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAoP/aAAgBAgEBPxAAH//EACoQAAAEAgsBAAMBAQAAAAAAAAABUfARcRAgITAxQEFQocHxYaCx0YHh/9oACAEBAAE/EPwPv2XALMLWtAwQGCAwQGCAwQGCAwQGCAwQGCAwQGCAwQGCAwQGCAwQGCAwQGCAwQGCAwQGCAwQGCAwQGCARix+hAfwI0ARCNhiZ7uLAHx7ABK/SmeH4MKKg/lMAUDOABCEIQhCEIQhCEIQhCEIQhCEMiRWgDoB83nBnWnxsCchP3ig/JnyHMdZ58TYXCHMdZ58TYXCHMdZ58TYXCHMdXUNoiAsRhBGLCsQyR8TYXCHMdXUJqxQBRP4AEQmRAfE2FwhzHVzrqoY68SnU9kcfE2FwhzHVzGPVipCXbkArIKA+JsLhDmOriScAefbgqls+n8ZAfE2FwhzHVxEzXz/ALC78+JsLhDmOq+qPAAzBtQrhLGBaqRJJFCOqhAEDTX91uD4mwuEOY6ryu70pYtnowNk8DFRKufE2FwhzHVb5CrsRPKAtr/WqIwzdSvHxNhcIcx1WSA7oGYIACy3BYICQsB51TT27QB1HCsfE2FwhzHVWMFod2Iiow/o5Vi23TrB8TYXCHMdVYwlXZEnb/gBaRYQxuJQVUfE2FwhzHVSV3lT4BgEQqB8TYXCHMdUmQNqADJGzQNY+JsLhDmOs0YQ2TgYqJUnxNhcIcx1SeeRZgbgY5SfE2FwhzHVMZrRAQqaYhU0xCppiFTTEKmmIVNMQqaYhU0xCppiFTTEKmmIVNMQqaYhU0xCppiFTTEKmmIVNMQqaYhU0xCppiFTTH2BOGMxpPibC4Q5jrPPiZ9weKigFEtYM6HmGAEToCKNgwDKEWhnAZmZmZmZmZmZmZmZmZmYzkoDSrdCAvTyzpkADjog1z4ns9EBJP5jYLPYAa4B5QPKB5QPKB5QPKB5QPKB5QPKB5QPKB5QPKB5QPKB5QPKB5QPKB5QPKB5QPKB5QPKB5ShwC+D+H4IH//Z"}}]);
//# sourceMappingURL=368.306306bd.chunk.js.map