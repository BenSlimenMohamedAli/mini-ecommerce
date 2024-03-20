import{d as _,t as p,v as d,E as i,F as k,x as l,G as b,H as w,I as S,y,q as g,_ as $,z as f,J as P,K as L,L as j,c as T,r as N,u as H,M as m,N as B,O as M,m as O,P as R,g as h,T as A,Q as z,R as E,S as D,U as V,V as Z,W as F,X as I,A as q,Y as G}from"./BGEmFRjK.js";import{u as v}from"./C-w6kZrm.js";import{u as C}from"./C87nsBHc.js";import{_ as J}from"./Dah7yivg.js";import{u as K}from"./CK1WqhqJ.js";const Q=l("h1",{class:"font-bold text-center text-[20px] p-4 border-b shadow py-8 pt-9 uppercase"}," Mini E-Commerce ",-1),U=["onClick"],W=_({__name:"Sidebar",setup(s){const o=v(),e=C(),t=n=>{e.closeSidebar(),g(n)};return(n,a)=>(p(),d("section",null,[i(e).sidebarOpened?(p(),d("div",{key:0,class:"fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 z-30 transition-all",onClick:a[0]||(a[0]=r=>i(e).closeSidebar())})):k("",!0),l("aside",{class:b(["fixed top-0 bottom-0 left-0 w-[260px] bg-white z-30 transition-all duration-500 border-r",{"-left-[260px]":!i(e).sidebarOpened}])},[Q,l("div",{class:b(["uppercase p-4 cursor-pointer flex justify-between items-center hover:bg-black hover:text-white",{"bg-black text-white":i(e).pageTitle==="home"}]),onClick:a[1]||(a[1]=r=>t("/"))}," Home ",2),(p(!0),d(w,null,S(i(o).categories,r=>(p(),d("div",{class:b(["uppercase p-4 cursor-pointer flex justify-between items-center hover:bg-black hover:text-white",{"bg-black text-white":i(e).pageTitle===r}]),key:r,onClick:u=>t("/products/"+r)},y(r),11,U))),128))],2)]))}}),X={},Y={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ee=l("path",{d:"M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z",fill:"#292D32"},null,-1),te=l("path",{d:"M21 12.75H3C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75Z",fill:"#292D32"},null,-1),oe=l("path",{d:"M21 17.75H3C2.59 17.75 2.25 17.41 2.25 17C2.25 16.59 2.59 16.25 3 16.25H21C21.41 16.25 21.75 16.59 21.75 17C21.75 17.41 21.41 17.75 21 17.75Z",fill:"#292D32"},null,-1),se=[ee,te,oe];function ne(s,o){return p(),d("svg",Y,se)}const ae=$(X,[["render",ne]]),re={class:"flex gap-4 justify-between text-center px-8 py-5 bg-white border-b z-20 shadow"},ie={class:"flex-1 uppercase text-black flex items-center justify-center text-[20px]"},le={class:"absolute -top-3 -left-3 bg-black text-white rounded-full text-[10px] w-6 h-6 flex items-center justify-center"},ce=_({__name:"Navbar",setup(s){v();const o=C(),e=K();return(t,n)=>{const a=ae,r=J;return p(),d("div",re,[l("div",{class:"p-4 border rounded cursor-pointer flex items-center justify-center",onClick:n[0]||(n[0]=u=>i(o).openSidebar())},[f(a)]),l("div",ie,y(i(o).pageTitle),1),l("div",{class:"p-4 border rounded cursor-pointer flex items-center justify-center relative",onClick:n[1]||(n[1]=u=>("navigateTo"in t?t.navigateTo:i(g))("/cart"))},[f(r),l("div",le,y(i(e).cart.length),1)])])}}}),ue=_({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(s,o){const e=await m[s.name]().then(t=>t.default||t);return()=>h(e,s.layoutProps,o.slots)}}),pe=_({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(s,o){const e=O(),t=P(R),n=t===L()?j():t,a=T(()=>{let c=i(s.name)??n.meta.layout??"default";return c&&!(c in m)&&s.fallback&&(c=i(s.fallback)),c}),r=N();o.expose({layoutRef:r});const u=e.deferHydration();if(e.isHydrating){const c=e.hooks.hookOnce("app:error",u);H().beforeEach(c)}return()=>{const c=a.value&&a.value in m,x=n.meta.layoutTransition??B;return M(A,c&&x,{default:()=>h(D,{suspensible:!0,onResolve:()=>{E(u)}},{default:()=>h(de,{layoutProps:z(o.attrs,{ref:r}),key:a.value||void 0,name:a.value,shouldProvide:!s.name,hasTransition:!!x},o.slots)})}).default()}}}),de=_({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(s,o){const e=s.name;return s.shouldProvide&&V(Z,{isCurrent:t=>e===(t.meta.layout??"default")}),()=>{var t,n;return!e||typeof e=="string"&&!(e in m)?(n=(t=o.slots).default)==null?void 0:n.call(t):h(ue,{key:e,layoutProps:s.layoutProps,name:e},o.slots)}}}),_e={class:"flex flex-col max-h-screen"},fe={class:"overflow-y-scroll"},xe=_({__name:"index",setup(s){const o=v();return F(()=>{o.fetchCategories().then(()=>{})}),(e,t)=>{const n=W,a=ce,r=G,u=pe;return p(),I(u,null,{default:q(()=>[l("section",_e,[f(n),f(a),l("div",fe,[f(r)])])]),_:1})}}});export{xe as default};
