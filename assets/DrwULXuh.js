import{_ as C}from"./DaYCxCuv.js";import{d as f,t as s,v as n,x as t,c as $,r as k,B as g,z as l,y as m,K as w,W as B,H as R,I as S,E as M,X as j}from"./BGEmFRjK.js";import{b as L,a as P,_ as T}from"./oB9kXiH9.js";import{_ as E}from"./Dah7yivg.js";import{u as H}from"./CK1WqhqJ.js";import{u as I}from"./Cg8XdFfJ.js";import{u as N}from"./C-w6kZrm.js";import"./C87nsBHc.js";const V={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},A=["fill"],q=["fill"],z=f({__name:"ArrowRight",props:["color"],setup(o){return(c,a)=>(s(),n("svg",V,[t("path",{d:"M14.4301 18.82C14.2401 18.82 14.0501 18.75 13.9001 18.6C13.6101 18.31 13.6101 17.83 13.9001 17.54L19.4401 12L13.9001 6.46C13.6101 6.17 13.6101 5.69 13.9001 5.4C14.1901 5.11 14.6701 5.11 14.9601 5.4L21.0301 11.47C21.3201 11.76 21.3201 12.24 21.0301 12.53L14.9601 18.6C14.8101 18.75 14.6201 18.82 14.4301 18.82Z",fill:o.color},null,8,A),t("path",{d:"M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z",fill:o.color},null,8,q)]))}}),D={key:1},Z={key:0,class:"my-4 flex items-center justify-between border border-black rounded bg-black text-white"},F=t("div",{class:"p-4"},"REMOVE?",-1),K={class:"uppercase flex"},O={key:1,class:"my-4 flex items-center justify-between border rounded"},Q={class:"border-r"},W={class:"text-2xl"},X=f({__name:"ProductButton",props:["product"],setup(o){const c=o,a=H(),p=_=>{a.addToCart({product:_,quantity:1})},d=$(()=>a.cart.find(_=>{var e;return _.product.id===((e=c.product)==null?void 0:e.id)})),i=k(!1),u=()=>{i.value=!0},r=()=>{i.value=!1},h=()=>{a.remove(c.product.id),r()};return(_,e)=>{const x=E,b=L,y=P;return d.value?(s(),n("div",D,[i.value?(s(),n("div",Z,[F,t("div",K,[t("div",{class:"p-4 cursor-pointer border-l",onClick:e[1]||(e[1]=v=>h())},"Yes"),t("div",{class:"p-4 cursor-pointer border-l",onClick:e[2]||(e[2]=v=>r())}," No ")])])):(s(),n("div",O,[t("div",Q,[l(b,{cartItem:d.value},null,8,["cartItem"])]),t("div",W,m(d.value.quantity),1),t("div",{class:"mx-4 cursor-pointer",onClick:e[3]||(e[3]=v=>u())},[l(y)])]))])):(s(),n("button",{key:0,onClick:e[0]||(e[0]=v=>p(o.product)),class:"group w-full bg-white border text-black rounded p-4 my-4 hover:border-black flex items-center justify-center gap-2"},[g(" Add To Cart "),l(x)]))}}}),Y={class:"w-full group"},G={class:"relative aspect-[1/1] flex flex-col gap-4 items-center justify-center p-5 pt-10 overflow-hidden border rounded"},J=["src","alt"],U={class:"items-center justify-center bg-black absolute top-0 right-0 left-0 bottom-0 z-10 hidden group-hover:flex flex-col bg-opacity-70 p-8 text-gray-200 text-[14px] uppercase"},tt={class:"text-white line-clamp-6 mt-4"},ot={class:"flex mt-5 text-gray-200 cursor-pointer"},et={class:"w-full mt-4 pr-2"},st={class:"truncate"},rt={class:"font-bold text-[18px]"},nt=f({__name:"Product",props:["product"],setup(o){return(c,a)=>{var u,r;const p=z,d=T,i=X;return s(),n("div",Y,[t("div",G,[t("img",{class:"max-h-[100%] group-hover:scale-110 transition-all",src:o.product.image,alt:o.product.title},null,8,J),t("div",U,[t("p",tt,m((u=o.product)==null?void 0:u.description),1),t("div",ot,[g(" More Details "),l(p,{color:"#e4e7eb"})])]),l(d,{rating:(r=o.product)==null?void 0:r.rating,class:"absolute top-3 right-3"},null,8,["rating"])]),t("div",et,[t("h1",st,m(o.product.title),1),t("h5",rt,m(o.product.price)+" €",1)]),l(i,{product:o.product},null,8,["product"])])}}}),ct={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-8 my-8"},ft=f({__name:"[category]",setup(o){const c=N(),a=w();return B(()=>{c.fetchProductsByCategory(a.params.category)}),I({title:"products"}),(p,d)=>{const i=C,u=nt;return s(),n("section",null,[l(i),t("div",ct,[(s(!0),n(R,null,S(M(c).products,r=>(s(),j(u,{key:r,product:r},null,8,["product"]))),128))])])}}});export{ft as default};
