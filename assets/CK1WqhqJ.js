import{$ as a}from"./BGEmFRjK.js";const e=a("cart",{state:()=>({cart:[]}),actions:{addToCart(r){this.$patch(t=>{t.cart.find((i,n)=>i.product.id===r.product.id?(t.cart[n].quantity+=1,i):null)||t.cart.push(r)})},incrementQuantity(r){this.$patch(t=>{const c=t.cart.findIndex(i=>i.product.id===r);t.cart[c].quantity+=1})},decrementQuantity(r){this.$patch(t=>{const c=t.cart.findIndex(i=>i.product.id===r);t.cart[c].quantity>1&&(t.cart[c].quantity-=1)})},remove(r){this.$patch(t=>{const c=t.cart.findIndex(i=>i.product.id===r);t.cart.splice(c,1)})}},getters:{getTotal(){let r=0;return this.cart.forEach(t=>{r+=t.product.price*t.quantity}),r.toFixed(2)}}});export{e as u};
