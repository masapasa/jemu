(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{391:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(1),l=n.n(r),c=n(10),d=n(12),s=n(13),o=n(91);function u(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}var p=i.a.lazy(function(){return u(this,void 0),Promise.resolve().then(n.bind(null,99))}.bind(void 0)),m=Object(s.c)(c.a),E=function(e){u(this,void 0);var t=e.title,n=e.description,r=e.content,l=e.createdAt,c=e.updatedAt,s=e.id;return i.a.createElement("div",null,i.a.createElement("div",{className:"gist-title"},i.a.createElement("h3",null,t),i.a.createElement(m,{to:"/gists/".concat(s,"/edit")},i.a.createElement("h3",null,i.a.createElement(d.a,null,"Edit")))),i.a.createElement("p",null,i.a.createElement("b",null,"Created At: "),new Date(l).toLocaleDateString()),i.a.createElement("p",null,i.a.createElement("b",null,"Updated At: "),new Date(c).toLocaleDateString()),i.a.createElement("h4",null,n),i.a.createElement(a.Suspense,{fallback:i.a.createElement(o.a,null)},i.a.createElement(p,{data:r})))}.bind(void 0);E.propTypes={id:l.a.string.isRequired,title:l.a.string.isRequired,createdAt:l.a.string.isRequired,updatedAt:l.a.string.isRequired,description:l.a.string.isRequired,content:l.a.string.isRequired},t.default=E}}]);