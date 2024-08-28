const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggle class active search-form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};
// toggle class active shopping-cart
const shoppingCartButton = document.querySelector("#shopping-cart-button");
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

const menu = document.querySelector("#menu");
const searchButton = document.querySelector("#search-button");

// Klik diluar element maka hilangkan search bar,nav menu,dan shopping cart item
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) navbarNav.classList.remove("active");

  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) searchForm.classList.remove("active");
  if (!shoppingCartButton.contains(e.target) && !shoppingCart.contains(e.target)) shoppingCart.classList.remove("active");
});
// modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButton = document.querySelectorAll(".item-detail-button");

itemDetailButton.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});
// klik tombol close
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik dimanapun modal hilang
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
