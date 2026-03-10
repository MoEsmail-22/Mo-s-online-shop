"use strict";

const productsSliders = document.querySelectorAll(".slider_Products");
const cartItmes = document.querySelector(".items_in_cart");
const inCartCount = document.querySelectorAll(".count_item_cart");
const totalPrice = document.querySelector(".price_total");

let idArr = [];
let products = [];

function setLocalStorage() {
  localStorage.setItem("idArray", JSON.stringify(idArr));
}

function getFromLocalStorage() {
  const storedIds = JSON.parse(localStorage.getItem("idArray"));

  if (!storedIds) return;

  idArr = storedIds;

  idArr.forEach((id) => {
    addToCart(id);

    const productBtn = document
      .querySelector(`.product[data-id="${id}"]`)
      ?.querySelector(".btn-add-cart");

    if (productBtn) productBtn.classList.add("active");
  });

  inCartCount.forEach((el) => (el.innerHTML = idArr.length));
}

fetch("products.json")
  .then((res) => res.json())
  .then((data) => {
    products = data;
    getFromLocalStorage();
  });

productsSliders.forEach((slider) =>
  slider.addEventListener("click", function (e) {
    if (e.target.closest("a")) e.preventDefault();
  }),
);

productsSliders.forEach((slider) =>
  slider.addEventListener("click", function (e) {
    const btn = e.target.closest(".btn-add-cart");
    if (!btn) return;

    btn.classList.add("active");

    const id = +e.target.closest(".product").dataset.id;

    checkIdArray(id);
  }),
);

cartItmes.addEventListener("click", function (e) {
  const deleteBtn = e.target.closest(".delete_itme");
  if (deleteBtn) {
    const id = +deleteBtn.closest(".item_cart").dataset.id;
    deleteItemCart(id);
    return;
  }

  const quantityBtn = e.target.closest(".change_quintity");
  if (!quantityBtn) return;

  const item = quantityBtn.closest(".item_cart");
  const quantityEl = item.querySelector(".quantity");

  const id = +item.dataset.id;

  let quantity = Number(quantityEl.textContent);
  quantity += Number(quantityBtn.dataset.cahnge);

  if (quantity <= 0) {
    deleteItemCart(id);
    return;
  }

  quantityEl.textContent = quantity;

  const priceEl = item.querySelector(".price_cart");
  const basePrice = Number(priceEl.dataset.price);

  priceEl.textContent = basePrice * quantity + "$";

  updateTotal();
});

function checkIdArray(id) {
  if (idArr.includes(id)) {
    console.log("already in cart");
    return;
  }

  idArr.push(id);

  addToCart(id);

  setLocalStorage();

  inCartCount.forEach((el) => (el.innerHTML = idArr.length));
}

function addToCart(id) {
  const product = products.find((p) => p.id == id);
  if (!product) return;

  const markup = `
  <div class="item_cart" data-id="${product.id}">
      <img src="${product.img}" alt="">

      <div class="content">
          <h4>${product.name}</h4>

          <p class="price_cart" data-price="${product.price}">
            ${product.price}$
          </p>

          <div class="quantity_control">

              <button class="decrase_quantity change_quintity" data-cahnge="-1">
              -
              </button>

              <span class="quantity">1</span>

              <button class="increase_quantity change_quintity" data-cahnge="1">
              +
              </button>

          </div>
      </div>

      <button class="delete_itme">
        <i class="fa-solid fa-trash-can"></i>
      </button>
  </div>`;

  cartItmes.insertAdjacentHTML("beforeend", markup);

  updateTotal();
}

function deleteItemCart(id) {
  const cartItem = document.querySelector(`.item_cart[data-id="${id}"]`);

  if (cartItem) cartItem.remove();

  idArr = idArr.filter((productId) => productId !== id);

  setLocalStorage();

  inCartCount.forEach((el) => (el.innerHTML = idArr.length));

  const productBtn = document
    .querySelector(`.product[data-id="${id}"]`)
    ?.querySelector(".btn-add-cart");

  if (productBtn) productBtn.classList.remove("active");

  updateTotal();
}

function updateTotal() {
  let total = 0;

  const cartItems = document.querySelectorAll(".item_cart");

  cartItems.forEach((item) => {
    const priceEl = item.querySelector(".price_cart");

    const basePrice = Number(priceEl.dataset.price) || 0;

    const quantity = Number(item.querySelector(".quantity").textContent) || 0;

    total += basePrice * quantity;
  });

  totalPrice.textContent = total + "$";
}
