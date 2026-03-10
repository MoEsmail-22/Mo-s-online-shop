"use strict";

const productsSwiper = document.querySelector("#swiper-items-sale");
const electronicsSwiper = document.querySelector("#swiper-items-electronics");
const appliancesSwiper = document.querySelector("#swiper-items-appliances");
const mobilesSwiper = document.querySelector("#swiper-items-mobiles");

fetch("products.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((product) => {
      if (product.old_price) {
        productsSwiper.innerHTML += `<div class="swiper-slide product" data-id="${product.id}">
         <span class="sale-present">${Math.floor(((product.old_price - product.price) / product.old_price) * 100)}%</span>
         <div class="img-product">
           <a href="#"><img src="../${product.img}" alt=""></a>
         </div>

         <div class="stars">
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
         </div>

         <p class="product-name">
           <a href="#">${product.name}</a>
         </p>

         <div class="price">
           <p><span>${product.price}$</span></p>
           <p class="old-price">${product.old_price}$</p>
         </div>

         <div class="icons">
           <span class="btn-add-cart">
             <i class="fa-solid fa-cart-shopping"></i> Add to cart
           </span>

           <span class="icon_product">
             <i class="fa-regular fa-heart"></i>
           </span>
         </div>
       </div>
     `;
      }
      if (product.catetory === "electronics") {
        electronicsSwiper.innerHTML += `<div class="swiper-slide product" data-id="${product.id}">
${product.old_price ? `         <span class="sale-present">${Math.floor(((product.old_price - product.price) / product.old_price) * 100)}%</span>` : ``}
         <div class="img-product">
           <a href="#"><img src="../${product.img}" alt=""></a>
         </div>

         <div class="stars">
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
           <i class="fa-solid fa-star"></i>
         </div>

         <p class="product-name">
           <a href="#">${product.name}</a>
         </p>

         <div class="price">
           <p><span>${product.price}$</span></p>
           ${product.old_price ? `<p class="old-price">${product.old_price}$</p>` : ``}
         </div>

         <div class="icons">
           <span class="btn-add-cart ">
             <i class="fa-solid fa-cart-shopping"></i> Add to cart
           </span>

           <span class="icon_product">
             <i class="fa-regular fa-heart"></i>
           </span>
         </div>
       </div>
     `;
      }
      if (product.catetory === "appliances") {
        appliancesSwiper.innerHTML += `<div class="swiper-slide product" data-id="${product.id}">
        ${product.old_price ? `         <span class="sale-present">${Math.floor(((product.old_price - product.price) / product.old_price) * 100)}%</span>` : ``}
           <div class="img-product">
             <a href="#"><img src="../${product.img}" alt=""></a>
           </div>

           <div class="stars">
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
           </div>

           <p class="product-name">
             <a href="#">${product.name}</a>
           </p>

           <div class="price">
             <p><span>${product.price}$</span></p>
                        ${product.old_price ? `<p class="old-price">${product.old_price}$</p>` : ``}

           </div>

           <div class="icons">
             <span class="btn-add-cart">
               <i class="fa-solid fa-cart-shopping"></i> Add to cart
             </span>

             <span class="icon_product">
               <i class="fa-regular fa-heart"></i>
             </span>
           </div>
         </div>
       `;
      }
      if (product.catetory === "mobiles") {
        mobilesSwiper.innerHTML += `<div class="swiper-slide product" data-id="${product.id}">
        ${product.old_price ? `         <span class="sale-present">${Math.floor(((product.old_price - product.price) / product.old_price) * 100)}%</span>` : ``}
           <div class="img-product">
             <a href="#"><img src="../${product.img}" alt=""></a>
           </div>

           <div class="stars">
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
           </div>

           <p class="product-name">
             <a href="#">${product.name}</a>
           </p>

           <div class="price">
             <p><span>${product.price}$</span></p>
                        ${product.old_price ? `<p class="old-price">${product.old_price}$</p>` : ``}

           </div>

           <div class="icons">
             <span class="btn-add-cart">
               <i class="fa-solid fa-cart-shopping"></i> Add to cart
             </span>

             <span class="icon_product">
               <i class="fa-regular fa-heart"></i>
             </span>
           </div>
         </div>
       `;
      }
    });
  });
