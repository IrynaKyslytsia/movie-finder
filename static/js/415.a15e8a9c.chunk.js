"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{573:function(A,n,o){o.d(n,{Z:function(){return m}});var e,Q,c,t,i,h=o(689),B=o(168),a=o(686),r=o(87),w=a.Z.ul(e||(e=(0,B.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n"]))),g=a.Z.li(Q||(Q=(0,B.Z)(["\n    display: flex;\n"]))),E=(0,a.Z)(r.Link)(c||(c=(0,B.Z)(["\n    display: flex;\n    gap: 24px;\n    align-items: center;\n    color: #000000;\n"]))),s=a.Z.img(t||(t=(0,B.Z)(["\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 100%;\n    height: 120px;\n    object-fit: cover;\n"]))),x=a.Z.h3(i||(i=(0,B.Z)(["\n    font-size: 32px;\n"]))),C=o(184),m=function(A){var n=A.movies,o=(0,h.TH)();return(0,C.jsx)(w,{children:n&&n.map((function(A){var n=A.id,e=A.title,Q=A.poster_path;return(0,C.jsx)(g,{children:(0,C.jsxs)(E,{to:"/movies/".concat(n),state:{from:o},children:[(0,C.jsx)(s,{src:Q?"https://image.tmdb.org/t/p/w500/".concat(Q):"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABAMDBAMDBAQDBAUEBAUGCgcGBgYGDQkKCAoPDRAQDw0PDhETGBQREhcSDg8VHBUXGRkbGxsQFB0fHRofGBobGv/bAEMBBAUFBgUGDAcHDBoRDxEaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGv/CABEIAfQB9AMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAABAUDAgEH/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB/bQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwe0PM0maNJmjSZo0maNJmjSZo0maNJmjSZo0maNJmjSZo0maNJmjSS1AAAAAAAAAAAAAAAHjMolD3WQrhCuEK4QrhCuEK4QrhCuEK4QrhCuEK4QrhCu8ElE42HLqAAAAAAAAAAAAAAZvHryLqpqQAAAAAAAAAAAAADN49uJfTNSAAAAAAAAAAAAAAZnLryL6ZqQAAAAAAAAAAAAADN49uJfTNSAAAAAAAAAAAAAAZnLryL6ZqQAAAD5D7jNTpmaYAAAAAAABm8e3EvpmpAAAAAAAAAAAAAAMzl15F9M1IAAA8+oiX4C2L6a7n0AAAAAAAM3j24l9M1IAAAAAAAAAAAAABmcuvIvpmpAAAPGXRMAAd9HHvKQAAAAAAZvHtxL6ZqQAAAAAAAAAAAAADM5deRfTNSAAPHvPJwAAPXka3qC8A8Z3vgaFGTqn0AAGbx7cS+makAAAAAAAAAAAAAAzOXXkX0zUgAHLM7cQAAABp5+ofZu2YeQK5BsPHsAAzePbiX0zUgAAAAAAAAAAAAAGZy68i+makAce2YcgAAAAXVZXU+cAAAo0MfSOwAM3j24l9M1IAAAAAAAAAAAAABmcuvIvpmpB8OGf78AAAAAAAAADryGwmpAM3j24l9M1IAAAAAAAAAAAAABmcuvIvpmpE1OWcwAAAAAAAAAAetXItKwZvHtxL6ZqQAAAAAAAAAAAAADM5deRfTNSOHcRrBGsEawRrBGsEawRrBGsEawRrBGsEnfoAM3j24l9M1IAAAAAAAAAAAAABncLoSyzH6GoyxqMsajLGoyxqMsajLGoyxqMsajLGoyxqMsajLGoyxqfMzyffD6X0efQAAAAAAAAAAAAAAgvGO1ORAvEC8QLxAvEC8QLxAvEC8QLxAvEC8QLxAvEC/6QaHX0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/xAAjEAABBAICAwEBAQEAAAAAAAAAAQIDEzJAEiAQETAhMaBQ/9oACAEBAAEFAv8AB85yNFmUtcWuLXFri1xa4tcWuLXFri1xa4tcWuLXFri1xa4tcWuLXFri1xa4tcWuLXFri1w2bfc7iiryXfif6XdmX9Gt5LQhQhQhQhQhQhQhQhQhQhQhQhQhQhQhQhQhQhQhQhQhQhQhQhQhQhQhQg6HyxfbdyXMhx3ZcyHHclzIcN2XMhx3JcyHDdlzIcdyXMhw3ZcyHHclzIcPksy+2O5poy5kOO5LmQ4fGZ3hjuK6MuZDjuS5kOHwVfSKvtfEL9GXMhx3JcyHD4TO6J+DXck+8uZDjuS5kOHdy8U6xv4r95cyHHclzIcO8zv3tE/2n2lzIcdyXMhw7Pdxb3avFUX2nly8UV7lWJ/L4S5kOO5LmQ4dpXe1+ET/AEvmR/JRq8VT9TtLmQ47kuZDh1e7i35RryaSv9J5hd3lzIcdyXMhw6yO5O+LG8lHLxRV9r0a7knWXMhx3JcyHDpI7i35QfwlfyXrE70vWXMhx3JcyHDo93J3ya5WqsrlTvG7k3pLmQ47kuZDh5ld6TUY7i7pLmQ47kuZDh5e7k7Vhd7TzLmQ47kuZDh4md+azV4qn6niXMhx3JcyHDw/9drwL+eJcyHHclzIcPDokcUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFA1qNTxLmQ47kuZDhuy5kOO5LmQu3f4PXk4hw3Jm/njm4scWOLHFjixxY4scWOLHFjixxY4scWOLHFjixxY4scWOLHFjixxY4scWOLHCuVfCfqonpN18XrfT9I4+P/AViKUoUtKWlLSlpS0paUtKWlLSlpS0paUtKWlLSlpS0paUtKWlLSlpS0paUtKWlLSpoiIn+ED//xAAUEQEAAAAAAAAAAAAAAAAAAACg/9oACAEDAQE/AQAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAoP/aAAgBAgEBPwEAH//EACMQAAIBBAIDAQEBAQAAAAAAAAAxARBAQYERISAwUGEioBL/2gAIAQEABj8C/wAH3Z0MYxjGMYxjGMYxjGMYxjGMYx0/r4HfwOJV9xTocjkcjkcjkcjkcjkcjkcjkcjkcjkcjkcjkcjkcjkcjk/nusXs/Amm72ab+Bu9mm/gbvZpv4G72ab9XZ1a7vZpv1cU/LTd7NN+nnw4s93s036eLfd7NN+jm43ezTfo48+LHd7NN2HXhyM4n1bvZpuw48PyvPp3ezTdnxnw/wCfTu9mm7Diw3ezTdhNPzy49G72absOrDd7NN/A3ezTd1x5bvZpuvFvzBz47vZpus3Ex47vZpuvKGMYxjGMYxjGMYxjGMYxnXju9mm/gbv+L7m/5q5GMYxjGMYxjGMYxjGMYxjGMZ3PPwf5V/12fvwEZMmTJkyZMmTJkyZMmTJkyZMmTJkyZMmTJmTrr/CB/8QAKxAAAQEHAwUAAgMBAQAAAAAAAQARITFhcbHwEEDhIDBBUZGBwVCh0aDx/9oACAEBAAE/If8Ag+CtJnoeUdCwTesY4WMcLGOFjHCxjhYxwsY4WMcLGOFjHCxjhYxwsY4WMcLGOFjHCxjhYxwsY4WMcLGOFjHCxjhYxwsY4WMcLGOFjHCZxLZMQC5yfhNBg9sN8AhPiAmjkLxP9fwBWw9Cu+bgHp9dCsvyPhi9hDJgWIFiBYgWIFiBYgWIFiBYgWIFiBYgWIFiBYgWIFiBYgWIFiBYgWIFiBYgWIFiBYgTEPOe0xjjHQ5xj5rvba2ggEfJL/m+BjDyy2ker9b2zsNIm+RqDSPVYb2zsNIm+RqDSPVYb2zsNIm+RqDSPVYb2zsNInaEgAkmMDynsDB4BT0DvYnso1BpHqsN7Z2GkTtGLBLzGngaHnoiSa14eDDYxqDSPVYb2zsNInZAMUAEQxPk6tA2YQp62Mag0j1WG9s7DSJ2UES4Rr46CJNBYQXJhkeYj0dhGoNI9VhvbOw0idgEpeIVRLS0lpJeel0mBjX3sI1BpHqsN7Z2GkTsGoDARr1vMXi3fjUGkeqw3tnYaROsAx+CaaS1ryYnrK0ER49oDaA9ASF4hVNQWPTCxMJiC3YjUGkeqw3tnYaROs7xAX89l8S4wkeh1CCEz70YhERZEAA8EO641BpHqsN7Z2GkTqN4iJhXtlASH+T7no4kUadDF6Bh+x1xqDSPVYb2zsNInUbgBcIfs9pjhUn0EAwABzIJqEwHj2U8jE9AJBBDiC4oQyPMRPqjUGkeqw3tnYaROlDC8w/Z7YCc19GO0cALkK++p7oH+j46o1BpHqsN7Z2GkTpP4QEKdtqvyHtHQDgYnsMZsRH/AHpjUGkeqw3tnYaROg5xE287U4j4MaJoLxDojUGkeqw3tnYaRNTQGtcBEppHx4Ets9JeIU6I1BpHqsN7Z2GkTUxAYmNNuxIgRAAPBDtY1BpHqsN7Z2GkTUT37PzcNCPBDNY1BpHqsN7Z2GkTUYLTRj6KxYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYmP/KYryifesag0j1WG9s7DSJvkag0j1WG9Eg5gM+caMWmWEl3+b0kA0ljIkpqexdTQCKiSLfrelIDERpqygyqplTKmVMqZUyplTKmVMqZUyplTKmVMqZUyplTKmVMqZUyplTKmV/Qg6A4D2lyZQEAN6wFxgnwg3ylvwJAPD6USXl/AP8AL3sOKpvyP8U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774U774QFH8hTlBj/AIQP/9oADAMBAAIAAwAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAQAAAAAAAAAAAAAAACggAAAAAAAAAAAAABggAAAAAAAAAAAAAAigAAAAAAAAAAAAAAiAAAAAAAAAAAAAACigAAAAAAAAAAAAACgAAAAAAAAAAAAAACigAAABgAAAAAAAACgAAAAAAAAAAAAAACigAAAABAgAAAAAACgAAAAAAAAAAAAAACigAACgAAQAAAAAACgAAAAAAAAAAAAAACigAACAAACgDgAAACgAAAAAAAAAAAAAACigAAgAAAAggAQAACgAAAAAAAAAAAAAACigAAAAAAACAAAQACgAAAAAAAAAAAAAACigQgAAAAAAAAAAACgAAAAAAAAAAAAAACigAAAAAAAAAAAAQCgAAAAAAAAAAAAAACigDDDDDDDDDDDDACgAAAAAAAAAAAAAAAAQwwwwwwwwwwwwwySgAAAAAAAAAAAAAAAQwwwwwwwwwwwwwigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAACg/9oACAEDAQE/EAAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAoP/aAAgBAgEBPxAAH//EACoQAAAEAgsBAAMBAQAAAAAAAAABUfARcRAgITAxQEFQocHxYaCx0YHh/9oACAEBAAE/EPwPv2XALMLWtAwQGCAwQGCAwQGCAwQGCAwQGCAwQGCAwQGCAwQGCAwQGCAwQGCAwQGCAwQGCAwQGCAwQGCARix+hAfwI0ARCNhiZ7uLAHx7ABK/SmeH4MKKg/lMAUDOABCEIQhCEIQhCEIQhCEIQhCEMiRWgDoB83nBnWnxsCchP3ig/JnyHMdZ58TYXCHMdZ58TYXCHMdZ58TYXCHMdXUNoiAsRhBGLCsQyR8TYXCHMdXUJqxQBRP4AEQmRAfE2FwhzHVzrqoY68SnU9kcfE2FwhzHVzGPVipCXbkArIKA+JsLhDmOriScAefbgqls+n8ZAfE2FwhzHVxEzXz/ALC78+JsLhDmOq+qPAAzBtQrhLGBaqRJJFCOqhAEDTX91uD4mwuEOY6ryu70pYtnowNk8DFRKufE2FwhzHVb5CrsRPKAtr/WqIwzdSvHxNhcIcx1WSA7oGYIACy3BYICQsB51TT27QB1HCsfE2FwhzHVWMFod2Iiow/o5Vi23TrB8TYXCHMdVYwlXZEnb/gBaRYQxuJQVUfE2FwhzHVSV3lT4BgEQqB8TYXCHMdUmQNqADJGzQNY+JsLhDmOs0YQ2TgYqJUnxNhcIcx1SeeRZgbgY5SfE2FwhzHVMZrRAQqaYhU0xCppiFTTEKmmIVNMQqaYhU0xCppiFTTEKmmIVNMQqaYhU0xCppiFTTEKmmIVNMQqaYhU0xCppiFTTH2BOGMxpPibC4Q5jrPPiZ9weKigFEtYM6HmGAEToCKNgwDKEWhnAZmZmZmZmZmZmZmZmZmYzkoDSrdCAvTyzpkADjog1z4ns9EBJP5jYLPYAa4B5QPKB5QPKB5QPKB5QPKB5QPKB5QPKB5QPKB5QPKB5QPKB5QPKB5QPKB5QPKB5QPKB5ShwC+D+H4IH//Z",alt:e,width:"80"}),(0,C.jsx)(x,{children:e})]})},n)}))})}},415:function(A,n,o){o.r(n);var e=o(439),Q=o(791),c=o(573),t=o(390),i=o(184);n.default=function(){var A=(0,Q.useState)([]),n=(0,e.Z)(A,2),o=n[0],h=n[1],B=(0,Q.useState)(null),a=(0,e.Z)(B,2),r=a[0],w=a[1],g=(0,Q.useState)(!1),E=(0,e.Z)(g,2),s=E[0],x=E[1];return(0,Q.useEffect)((function(){x(!0),(0,t.Df)().then((function(A){h(A.results)})).catch((function(A){return w(A)})).finally((function(){x(!1)}))}),[]),(0,i.jsxs)(i.Fragment,{children:[s&&(0,i.jsx)("div",{children:"Loading..."}),r&&(0,i.jsx)("div",{children:r.message}),o&&(0,i.jsx)(c.Z,{movies:o})]})}},390:function(A,n,o){o.d(n,{Df:function(){return c},M1:function(){return h},XT:function(){return t},t2:function(){return i},tx:function(){return B}});var e="https://api.themoviedb.org/3/",Q="1b503a470f760c92c3c57decdfe60ef0",c=function(){return fetch("".concat(e,"trending/movie/day?api_key=").concat(Q)).then((function(A){return A.ok?A.json():Promise.reject(new Error("Oops... Something went wrong"))}))},t=function(A){return fetch("".concat(e,"search/movie?query=").concat(A,"&api_key=").concat(Q,"&include_adult=false&language=en-US&page=1")).then((function(A){return A.ok?A.json():Promise.reject(new Error("Oops... Something went wrong"))}))},i=function(A){return fetch("".concat(e,"movie/").concat(A,"?api_key=").concat(Q,"&language=en-US")).then((function(A){return A.ok?A.json():Promise.reject(new Error("Oops... Something went wrong"))}))},h=function(A){return fetch("".concat(e,"movie/").concat(A,"/credits?api_key=").concat(Q)).then((function(A){return A.ok?A.json():Promise.reject(new Error("Oops... Something went wrong"))}))},B=function(A){return fetch("".concat(e,"movie/").concat(A,"/reviews?api_key=").concat(Q)).then((function(A){return A.ok?A.json():Promise.reject(new Error("Oops... Something went wrong"))}))}}}]);
//# sourceMappingURL=415.a15e8a9c.chunk.js.map