import{d,o as c,c as u,a as i,b as _,w as f,u as l,R as m,e as x,F as v,f as y,t as h,r as I,p as P,g as L,h as S,i as B,j as C,k as E,l as $}from"./vendor.d4e20b79.js";const O=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};O();const V={class:"wrapper"},W=i("h1",null,"WTFBins",-1),A=y("Home"),F=y("About"),H=d({setup(r){return(o,s)=>(c(),u(v,null,[i("header",null,[i("div",V,[W,i("nav",null,[_(l(m),{to:"/"},{default:f(()=>[A]),_:1}),_(l(m),{to:"/about"},{default:f(()=>[F]),_:1})])])]),_(l(x))],64))}}),N="modulepreload",w={},R="/wtfbins/",T=function(o,s){return!s||s.length===0?o():Promise.all(s.map(n=>{if(n=`${R}${n}`,n in w)return;w[n]=!0;const e=n.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${t}`))return;const a=document.createElement("link");if(a.rel=e?"stylesheet":N,e||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),e)return new Promise((g,k)=>{a.addEventListener("load",g),a.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>o())};var b=(r,o)=>{const s=r.__vccOpts||r;for(const[n,e]of o)s[n]=e;return s};const q=d({props:{wtfbin:null},setup(r){return(o,s)=>(c(),u("li",null,[i("h2",null,h(r.wtfbin.name),1),i("p",null,h(r.wtfbin.description),1)]))}});var D=b(q,[["__scopeId","data-v-4a1cb496"]]);const G=r=>(P("data-v-43a0005f"),r=r(),L(),r),M=G(()=>i("p",null,"These are WTFBins. I don't know what anyone was thinking.",-1)),j=d({setup(r){let o=[{id:1,name:"SCCM",description:"Windows Config Manager runs b64-encoded powershell."},{id:2,name:"PanGpHip.exe",description:"Palo Alto GP Firewall HIP check runs whoami.exe"}];return(s,n)=>(c(),u("main",null,[M,i("ul",null,[(c(!0),u(v,null,I(l(o),(e,t)=>(c(),S(D,{key:t,wtfbin:e,wtf:""},null,8,["wtfbin"]))),128))])]))}});var K=b(j,[["__scopeId","data-v-43a0005f"]]);const U=B({history:C("/wtfbins/"),routes:[{path:"/",name:"home",component:K},{path:"/about",name:"about",component:()=>T(()=>import("./AboutView.f3542610.js"),["assets/AboutView.f3542610.js","assets/AboutView.ab071ea6.css","assets/vendor.d4e20b79.js"])}]}),p=E(H);p.use($());p.use(U);p.mount("#app");export{b as _};
