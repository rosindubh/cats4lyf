(this.webpackJsonpcats4lyf=this.webpackJsonpcats4lyf||[]).push([[0],{32:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var a=c(1),i=c.n(a),r=c(17),n=c.n(r),s=(c(32),c(18)),l=c.n(s),j=c(24),o=c(13),d=c(25),h=c.n(d),b=c(7),m=c(2),u=c(0);var O=function(){return Object(u.jsx)("div",{className:"home",children:Object(u.jsxs)("div",{className:"home-text",children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Your PURRfect pet"}),Object(u.jsx)("h2",{children:"A home without a cat is only a house."})]}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[" ",Object(u.jsx)("p",{children:"Introducing your cat to their new home should be done slowly and carefully - don't rush it!"})]}),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)("p",{children:"Getting your cat microchipped is important. If they go missing, your details can be quickly traced"})]}),Object(u.jsx)("li",{children:Object(u.jsx)("p",{children:"Having your cat neutered reduces the risk of your cat fighting and sustaining injury, contracting diseases or becoming lost"})}),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)("p",{children:"Provide appropriate health care for your cat, including vaccination, flea and worming treatment and regular vet check-ups"})]}),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)("p",{children:"If you're keen on buying a cat, make sure it is from a reputable breeder or seller like cats4sale"})]})]})]}),Object(u.jsx)("div",{children:Object(u.jsx)("h2",{children:"The five welfare needs"})}),Object(u.jsx)("div",{children:Object(u.jsxs)("ol",{children:[Object(u.jsx)("li",{children:"to have a suitable environment"}),Object(u.jsx)("li",{children:"to have a suitable diet"}),Object(u.jsx)("li",{children:"to be able to exhibit normal behaviour patterns"}),Object(u.jsx)("li",{children:"to have the opportunity to be alone"}),Object(u.jsx)("li",{children:"to be protected from pain, suffering, injury and disease"})]})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Make your home cat safe"}),Object(u.jsx)("p",{className:"home-cat-safe",children:"Many people have no idea that certain normal household items can be deathly to cats. Bouquets containing lilies are a no-no for cat owners. The pollen is highly toxic and at our veterinary hospitals we do treat cats who have been poisoned by licking the pollen from their fur. Make sure to keep cleaning products and medicines stored safely away. Cats love to climb and walk across worktops and kitchen cupboards and may knock bottles or tubs off the shelves, resulting in spillages which they may then eat or lick. Antifreeze is also toxic to cats and can cause vomiting, seizures and breathing difficulties, among other health problems. Keep your cat inside when cars are being de-iced, and call your vet immediately if you think your pet has swallowed any."})]}),Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("div",{children:Object(u.jsx)("p",{children:"Copyright Cats4$ale \xa9 2021"})})})]})})},x=c(12);var p=function(e){var t=e.name,c=e.price,a=e.image,i=e.cart,r=e.setCart,n=e.id;return Object(u.jsxs)("div",{id:"cat-Card",children:[Object(u.jsx)("button",{onClick:function(e){e.preventDefault(),r([].concat(Object(x.a)(i),[{name:t,price:c,id:n,cartID:Math.floor(1e6*Math.random())}]))},children:"Add to Cart"}),Object(u.jsxs)("h3",{id:"cat-Price",children:["\xa3",c]}),Object(u.jsx)(b.b,{to:"/cats/".concat(t),children:Object(u.jsx)("h2",{id:"cat-Name",children:t})}),Object(u.jsx)("img",{src:a,alt:"",id:"cat-Image"})]})},f=c.p+"static/media/crossImage.2e09a284.svg",v=c.p+"static/media/minusImage.dfd53cf8.svg";var g=function(e){var t=e.cart,c=e.setCart,a=e.name,i=e.price,r=e.item;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"item-container",children:[Object(u.jsxs)("div",{className:"item-information",children:[Object(u.jsx)("img",{src:v,onClick:function(){c(t.filter((function(e){return e.cartID!==r.cartID})))},alt:""}),Object(u.jsx)("h3",{className:"item-name",children:a})]}),Object(u.jsx)("div",{className:"item-price",children:Object(u.jsxs)("h3",{children:["\xa3",i]})})]})})};var y=function(e){var t=e.cart,c=e.setCart,a=e.cartOpen,i=e.setCartOpen,r=t.reduce((function(e,t){return e+t.price}),0),n=function(){i(!a)},s=function(){return Object(u.jsx)(u.Fragment,{children:t.map((function(e){return Object(u.jsx)(g,{cartID:e.cartID,item:e,cart:t,setCart:c,price:e.price,name:e.name},e.id)}))})};return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"cart-container",children:[Object(u.jsxs)("div",{className:"cart-title",children:[Object(u.jsx)("h2",{children:"Your Cart"}),Object(u.jsx)("div",{className:"cart-close",children:Object(u.jsx)("img",{src:f,onClick:n,alt:""})})]}),Object(u.jsx)(s,{}),Object(u.jsxs)("div",{className:"cart-total",children:[Object(u.jsxs)("h2",{children:["Total Price: \xa3",r]}),Object(u.jsx)(b.b,{to:"/Checkout",children:Object(u.jsx)("button",{onClick:n,children:"checkout"})})]})]})})},N=c.p+"static/media/lnrCart6.0edb5901.png";var k=function(e){var t=e.name,c=e.image,a=e.temperament,i=e.childFriendly,r=e.description,n=e.intelligence,s=e.affection,l=e.price,j=e.cart,o=e.setCart,d=e.id;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"info-wrapper",children:Object(u.jsxs)("div",{className:"cat-container",children:[Object(u.jsx)("h1",{children:t}),Object(u.jsx)("img",{className:"cat-info-image",src:c,alt:""}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Price:"})," \xa3",l]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Temperament:"})," ",a]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Child Friendly Rating:"})," ",i,"/5"]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Intelligence Rating:"})," ",n,"/5"]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Affection Rating:"})," ",s,"/5"]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Description:"})," ",r]}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault(),o([].concat(Object(x.a)(j),[{name:t,price:l,id:d,cartID:Math.floor(1e6*Math.random())}]))},children:"Add to Cart"})]})})})},C=function(e){var t=e.cart,c=e.setCart,a=t.reduce((function(e,t){return e+t.price}),0);return Object(u.jsxs)("div",{className:"checkout-wrapper",children:[Object(u.jsx)("div",{className:"form-div",children:Object(u.jsxs)("form",{className:"add-form",children:[Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Name "}),Object(u.jsx)("input",{type:"text",placeholder:"Enter Name"})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Address "}),Object(u.jsx)("input",{type:"text",placeholder:"Enter Address"})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Email "}),Object(u.jsx)("input",{type:"text",placeholder:"Enter Email"})]}),Object(u.jsx)("input",{type:"submit",value:"Proceed to payment",className:"btn btn-block",onClick:function(){localStorage.setItem("cart",JSON.stringify([]))}})]})}),Object(u.jsxs)("div",{className:"checkout-div",children:[Object(u.jsx)("div",{className:"checkout-title",children:Object(u.jsx)("h2",{children:"Your Cart"})}),t.map((function(e){return Object(u.jsx)(g,{item:e,cart:t,setCart:c,price:e.price,name:e.name},e.id)})),Object(u.jsx)("div",{className:"checkout-total",children:Object(u.jsxs)("h2",{children:["Total Price: \xa3",a]})})]})]})};c(49);var w=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],i=t[1],r=Object(a.useState)([]),n=Object(o.a)(r,2),s=n[0],d=n[1],x=Object(a.useState)(!1),f=Object(o.a)(x,2),v=f[0],g=f[1],w=function(){var e=Object(j.a)(l.a.mark((function e(){var t,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.thecatapi.com/v1/breeds?limit=10");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a=c.map((function(e){return e.price=Math.floor(1e3*Math.random())+300,e})),i(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){w(),S()}),[]),Object(a.useEffect)((function(){I()}),[s]);var I=function(){localStorage.setItem("cart",JSON.stringify(s))},S=function(){if(null===localStorage.getItem("cart"))localStorage.setItem("cart",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("cart"));d(e)}};return Object(u.jsx)(b.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("header",{className:"navigation",children:[Object(u.jsx)(b.b,{to:"/",children:Object(u.jsx)("h1",{children:"Cats4Sale"})}),Object(u.jsxs)("div",{className:"navigation-sub",children:[Object(u.jsx)(b.b,{to:"/cats",className:"item",children:"Cats"}),Object(u.jsx)("img",{src:N,alt:"",className:"cart-image",onClick:function(){g(!v)}}),Object(u.jsx)(h.a,{isOpen:v,className:"Modal",overlayClassName:"Overlay",children:Object(u.jsx)(y,{cart:s,setCart:d,cartOpen:v,setCartOpen:g})})]})]}),Object(u.jsxs)("div",{className:"main",children:[Object(u.jsx)(m.a,{exact:!0,path:"/cart",children:Object(u.jsx)(y,{cart:s})}),Object(u.jsx)(m.a,{exact:!0,path:"/",component:O}),Object(u.jsx)(m.a,{exact:!0,path:"/cats",children:Object(u.jsx)("div",{className:"cat-wrapper",children:Object(u.jsx)("div",{id:"cat-Thumbnail",children:c.map((function(e){return Object(u.jsx)(p,{name:e.name,price:e.price,image:e.image.url,cart:s,setCart:d,id:e.reference_image_id},e.reference_image_id)}))})})}),c.map((function(e){return Object(u.jsx)(m.a,{path:"/cats/".concat(e.name),children:Object(u.jsx)(k,{name:e.name,image:e.image.url,temperament:e.temperament,childFriendly:e.child_friendly,description:e.description,intelligence:e.intelligence,affection:e.affection_level,price:e.price,cart:s,setCart:d,id:e.reference_image_id})})})),Object(u.jsx)(m.a,{path:"/checkout",children:Object(u.jsx)(C,{cart:s,setCart:d})})]})]})})};n.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.8483493d.chunk.js.map