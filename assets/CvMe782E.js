import{_ as T}from"./DaYCxCuv.js";import{_ as P,a as R,b as B}from"./oB9kXiH9.js";import{u as S}from"./CK1WqhqJ.js";import{d as I,r as N,c as j,t as s,v as n,x as t,z as x,F as E,y as a,B as w,E as u,H as $,I as y,q as V,X as Y}from"./BGEmFRjK.js";import{u as F}from"./Cg8XdFfJ.js";import{u as M}from"./C-w6kZrm.js";import{u as O}from"./C87nsBHc.js";const q={class:"border rounded p-4 mb-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"},H={class:"relative aspect-[1/1] flex flex-col gap-4 items-center justify-center p-5 pt-10 overflow-hidden sm:border-r"},A=["src","alt"],D={class:"lg:col-span-2 relative"},U={key:0,class:"absolute -top-4 -right-4 -left-4 -bottom-4 rounded-r bg-opacity-80 bg-black flex justify-center items-center"},z={class:"text-white"},G=t("h1",{class:"text-center"},"REMOVE FROM CART?",-1),L={class:"uppercase border flex text-center mt-5"},Q={class:"flex flex-col justify-between h-full"},X={class:"text-3xl"},J={class:"font-bold"},K={class:"flex justify-between items-center pt-4"},W={class:"border rounded"},Z={class:"text-3xl mt-auto font-bold"},tt=I({__name:"CartProductCard",props:["cartItem"],setup(c){const r=c,f=S(),m=N(!1),_=()=>{m.value=!0},i=()=>{m.value=!1},p=()=>{f.remove(r.cartItem.product.id),i()},h=j(()=>{var l,e;return(((e=(l=r.cartItem)==null?void 0:l.product)==null?void 0:e.price)*r.cartItem.quantity).toFixed(2)});return(l,e)=>{var g,b,k;const v=P,o=R,d=B;return s(),n("div",q,[t("div",H,[t("img",{class:"max-h-[100%] group-hover:scale-110 transition-all",src:c.cartItem.product.image,alt:c.cartItem.product.title},null,8,A),x(v,{rating:(g=c.cartItem.product)==null?void 0:g.rating,class:"absolute top-3 right-3"},null,8,["rating"])]),t("div",D,[m.value?(s(),n("div",U,[t("div",z,[G,t("div",L,[t("div",{class:"border-r flex-1 p-2 px-8 cursor-pointer",onClick:e[0]||(e[0]=C=>p())}," Yes "),t("div",{class:"flex-1 p-2 px-8 cursor-pointer",onClick:e[1]||(e[1]=C=>i())}," No ")])])])):E("",!0),t("div",Q,[t("div",null,[t("div",{class:"flex justify-end mb-4",onClick:e[2]||(e[2]=C=>_())},[x(o,{class:"cursor-pointer hover:scale-125"})]),t("h1",X,[t("span",J,a(c.cartItem.quantity),1),w(" x "+a((k=(b=c.cartItem)==null?void 0:b.product)==null?void 0:k.title),1)])]),t("div",K,[t("div",W,[x(d,{cartItem:c.cartItem},null,8,["cartItem"])]),t("h5",Z,a(h.value)+" €",1)])])])])}}}),et={class:"h-full"},ot={key:0,class:"mx-8 mt-8"},st={class:"text-3xl uppercase font-bold"},ct={class:"lg:grid lg:grid-cols-3 lg:gap-4 mt-8"},rt={class:"lg:col-span-2"},nt={class:"w-full p-4 lg:sticky lg:top-0"},at={class:"text-2xl mb-2"},it={class:"font-bold"},lt={key:1,class:"pt-16"},dt=t("h1",{class:"text-4xl text-center"},"YOUR SHOPPING CART IS EMPTY",-1),ut=t("p",{class:"text-center mt-8"},"Discover Your Perfect Product with Us!",-1),mt={class:"grid grid-cols-2 px-8 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto mt-4"},_t=["onClick"],kt=I({__name:"cart",setup(c){const r=S(),f=M();O().changePageTitle("cart"),F({title:"cart"});const _=i=>{V(i)};return(i,p)=>{var e,v;const h=T,l=tt;return s(),n("section",et,[x(h),u(r).cart.length?(s(),n("div",ot,[t("h1",st," Your Cart : "+a((e=u(r))==null?void 0:e.getTotal)+" € ",1),t("div",ct,[t("div",rt,[(s(!0),n($,null,y(u(r).cart,o=>{var d;return s(),Y(l,{key:(d=o==null?void 0:o.product)==null?void 0:d.id,cartItem:o},null,8,["cartItem"])}),128))]),t("div",null,[t("div",nt,[t("h2",at,[w(" Total : "),t("span",it,a((v=u(r))==null?void 0:v.getTotal)+" €",1)]),t("button",{class:"text-center border w-full p-4 rounded hover:opacity-80 bg-black text-white text-2xl",onClick:p[0]||(p[0]=o=>_("checkout"))}," Checkout ")])])])])):(s(),n("div",lt,[dt,ut,t("div",mt,[(s(!0),n($,null,y(u(f).categories,o=>(s(),n("div",{key:o,onClick:d=>_("/products/"+o),class:"p-4 border text-center uppercase cursor-pointer hover:border-black"},a(o),9,_t))),128))])]))])}}});export{kt as default};
