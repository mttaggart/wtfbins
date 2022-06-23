import{o as c,c as l,p as h,a as f,b as n,d as v,e as p,f as d,w,u,R as $,g as L,F as _,r as T,t as m,M as F,h as b,i as V,j as H,k as E,l as R,m as A,n as D,q as M}from"./vendor.bdf76ac8.js";const N=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}};N();var g=(t,e)=>{const r=t.__vccOpts||t;for(const[o,s]of e)r[o]=s;return r};const P={},U=t=>(h("data-v-46ae3c6a"),t=t(),f(),t),j=U(()=>n("p",null,[n("a",{href:"https://github.com/mttaggart/wtfbins"},"Made"),v(" with \u{1F499} by "),n("a",{href:"https://taggart-tech.com"},"Taggart Tech")],-1)),q=[j];function J(t,e){return c(),l("footer",null,q)}var K=g(P,[["render",J],["__scopeId","data-v-46ae3c6a"]]);const z={class:"wrapper"},G=n("h1",null,"WTFBins",-1),Q=v("Home"),X=v("About"),Y=v("Contribute"),Z=p({setup(t){return(e,r)=>(c(),l(_,null,[n("header",null,[n("div",z,[G,n("nav",null,[d(u($),{to:"/"},{default:w(()=>[Q]),_:1}),d(u($),{to:"/about"},{default:w(()=>[X]),_:1}),d(u($),{to:"/contribute"},{default:w(()=>[Y]),_:1})])])]),d(u(L)),d(K)],64))}}),tt="modulepreload",C={},et="/",k=function(e,r){return!r||r.length===0?e():Promise.all(r.map(o=>{if(o=`${et}${o}`,o in C)return;C[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${a}`))return;const i=document.createElement("link");if(i.rel=s?"stylesheet":tt,s||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),s)return new Promise((y,x)=>{i.addEventListener("load",y),i.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())};const nt=t=>(h("data-v-66f84842"),t=t(),f(),t),ot={class:"tag-container"},st=nt(()=>n("h3",null,"Tags",-1)),rt=["onClick"],at=p({props:{tags:null,addTag:null},setup(t){return(e,r)=>(c(),l("div",ot,[st,n("ul",null,[(c(!0),l(_,null,T(t.tags,(o,s)=>(c(),l("li",{key:s,onClick:()=>t.addTag(o),class:"wtfbin-tag"},m(o),9,rt))),128))])]))}});var S=g(at,[["__scopeId","data-v-66f84842"]]);const W=t=>(h("data-v-308503a2"),t=t(),f(),t),it={class:"bin-item"},ct=W(()=>n("hr",null,null,-1)),lt=W(()=>n("b",null,"Contributed By:",-1)),ut=["innerHTML"],dt=["href"],_t=p({props:{wtfbin:null,addTag:null},setup(t){return(e,r)=>(c(),l("li",it,[d(u($),{to:{name:"bin",params:{id:t.wtfbin.id.toString()}}},{default:w(()=>[n("h2",null,m(t.wtfbin.name),1)]),_:1},8,["to"]),ct,n("p",null,[lt,v(" "+m(t.wtfbin.contributor),1)]),n("div",{class:"markdown",innerHTML:u(F).parse(t.wtfbin.preview)},null,8,ut),n("footer",null,[n("a",{href:t.wtfbin.documentation},"Documentation",8,dt),d(S,{tags:t.wtfbin.tags,"add-tag":t.addTag},null,8,["tags","add-tag"])])]))}});var ht=g(_t,[["__scopeId","data-v-308503a2"]]);const ft=t=>(h("data-v-906ebd78"),t=t(),f(),t),pt={class:"search-form"},gt=ft(()=>n("label",null,"Search",-1)),mt=p({props:{updateHandler:null},setup(t){return(e,r)=>(c(),l("div",pt,[gt,n("input",{type:"text",onInput:r[0]||(r[0]=(...o)=>t.updateHandler&&t.updateHandler(...o))},null,32)]))}});var vt=g(mt,[["__scopeId","data-v-906ebd78"]]);const bt=t=>(h("data-v-3845a03a"),t=t(),f(),t),yt={key:0},wt=bt(()=>n("h4",null," Active Tags ",-1)),$t=[wt],Tt=["onClick"],xt=p({props:{tags:null,removeTag:null},setup(t){return(e,r)=>(c(),l(_,null,[t.tags.length>0?(c(),l("div",yt,$t)):b("",!0),n("ul",null,[(c(!0),l(_,null,T(t.tags,o=>(c(),l("li",{class:"active-tag",onClick:()=>t.removeTag(o)},m(o)+" [x] ",9,Tt))),256))])],64))}});var It=g(xt,[["__scopeId","data-v-3845a03a"]]);const Bt="https://raw.githubusercontent.com/mttaggart/wtfbins/main/wtfbins.json",Ct=(t,e)=>e.length==0?!0:t.some(r=>e.indexOf(r)>=0),kt=(t,e)=>{if(e=="")return!0;const r=t.name.toLowerCase(),o=t.description.toLowerCase(),s=t.contributor.toLowerCase();return r.indexOf(e)>=0||o.toLowerCase().indexOf(e)>=0||s.toLowerCase().indexOf(e)>=0},O=V({id:"wtfbin",state:()=>({wtfbins:[],textFilter:"",tagFilter:[]}),getters:{filterBins:t=>t.wtfbins.filter(e=>kt(e,t.textFilter)&&Ct(e.tags,t.tagFilter)),binById:t=>e=>t.wtfbins.filter(r=>r.id==e)},actions:{async retrieveWtfBins(){let e=await(await fetch(Bt)).json();console.log(e),this.wtfbins=e},updateTextFilter(t){this.textFilter=t},addTagFilter(t){this.tagFilter.push(t)},removeTagFilter(t){const e=this.tagFilter.indexOf(t);e>=0&&this.tagFilter.splice(e,1)}}});const Lt=t=>(h("data-v-676123d0"),t=t(),f(),t),Ft={key:0,class:"bins-container"},St=Lt(()=>n("p",{class:"tagline"},"WTF, Bin?!",-1)),Wt={class:"bin-container"},Ot={key:0,class:".no-bins"},Vt=p({setup(t){const e=O();e.retrieveWtfBins();const r=a=>{let i=a.target.value.toLowerCase();e.updateTextFilter(i)},o=a=>{e.addTagFilter(a)},s=a=>{e.removeTagFilter(a)};return(a,i)=>(c(),l("main",null,[d(u(L)),a.$route.params.id==null?(c(),l("div",Ft,[St,d(vt,{"update-handler":r}),d(It,{"remove-tag":s,tags:u(e).tagFilter},null,8,["tags"]),n("ul",Wt,[(c(!0),l(_,null,T(u(e).filterBins,(y,x)=>(c(),H(ht,{key:x,wtfbin:y,"add-tag":o},null,8,["wtfbin"]))),128))]),u(e).filterBins.length==0?(c(),l("div",Ot," I got no bins for ya! ")):b("",!0)])):b("",!0)]))}});var Ht=g(Vt,[["__scopeId","data-v-676123d0"]]);const I=t=>(h("data-v-af53104a"),t=t(),f(),t),Et={class:"bin-item"},Rt=I(()=>n("hr",null,null,-1)),At=I(()=>n("b",null,"Contributed By:",-1)),Dt=["innerHTML"],Mt=["src"],Nt=["href"],Pt={key:0},Ut=I(()=>n("h2",null,"No such WTFbin!",-1)),jt=[Ut],qt=p({setup(t){const e=E(),r=O();r.retrieveWtfBins();const o=parseInt(e.params.id);return console.log(o),(s,a)=>(c(),l(_,null,[(c(!0),l(_,null,T(u(r).binById(u(o)),(i,y)=>(c(),l("div",null,[n("li",Et,[n("h2",null,m(i.name),1),Rt,n("p",null,[At,v(" "+m(i.contributor),1)]),n("div",{class:"markdown",innerHTML:u(F).parse(i.description)},null,8,Dt),i.imageURL!=""?(c(),l("img",{key:0,src:i.imageURL},null,8,Mt)):b("",!0),n("footer",null,[n("a",{href:i.documentation},"Documentation",8,Nt),d(S,{tags:i.tags,"add-tag":()=>{}},null,8,["tags","add-tag"])])])]))),256)),u(r).binById(u(o)).length==0?(c(),l("div",Pt,jt)):b("",!0)],64))}});var Jt=g(qt,[["__scopeId","data-v-af53104a"]]);const Kt=R({history:A("/"),routes:[{path:"/",name:"home",component:Ht,children:[{path:":id",name:"bin",component:Jt}]},{path:"/about",name:"about",component:()=>k(()=>import("./AboutView.680a51a9.js"),["assets/AboutView.680a51a9.js","assets/vendor.bdf76ac8.js"])},{path:"/contribute",name:"contribute",component:()=>k(()=>import("./ContributeView.989594aa.js"),["assets/ContributeView.989594aa.js","assets/vendor.bdf76ac8.js"])}]}),B=D(Z);B.use(M());B.use(Kt);B.mount("#app");export{g as _};
