"use strict";
const categoryList = document.querySelector(".category_nav_list");
const categoryBtn = document.querySelector(".category_btn");
const categoryNav = document.querySelector(".category_nav");
const cart = document.querySelector(".cart");
const cartOpenBtn = document.querySelector(".cart_btn");
const cartClouseBtn = document.querySelector(".close-cart");
const shopMore = document.querySelector(".trans_bg");

categoryNav.addEventListener("click", function (e) {
  if (e.target.closest(".category_btn") || e.target.closest(".category_item")) {
    activeCategory();
  }
});

function activeCategory() {
  categoryList.classList.toggle("active");
  categoryBtn.querySelector(".fa-angle-down").classList.toggle("rotate180");
}

// Cart functionality
cartOpenBtn.addEventListener("click", function (e) {
  e.preventDefault();
  cart.classList.remove("hidde_cart");
});

[cartClouseBtn, shopMore].forEach((el) =>
  el.addEventListener("click", function () {
    cart.classList.add("hidde_cart");
  }),
);
