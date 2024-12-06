const TOTAL_PRICE = document.getElementById("total-price");
const SHOE_PRICE = document.getElementById("shoe-price");
const SOCKS_PRICE = document.getElementById("socks-price");
const BAG_PRICE = document.getElementById("bag-price");
const SHOE_QUANTITY = document.getElementById("shoe-quantity");
const SOCKS_QUANTITY = document.getElementById("socks-quantity");
const BAG_QUANTITY = document.getElementById("bag-quantity");
const INCREASE_SHOE = document.getElementById("increase-shoe");
const INCREASE_SOCKS = document.getElementById("increase-socks");
const INCREASE_BAG = document.getElementById("increase-bag");
const DECREASE_SHOE = document.getElementById("decrease-shoe");
const DECREASE_SOCKS = document.getElementById("decrease-socks");
const DECREASE_BAG = document.getElementById("decrease-bag");
const REMOVE_SHOE = document.getElementById("remove-shoe");
const REMOVE_SOCKS = document.getElementById("remove-socks");
const REMOVE_BAG = document.getElementById("remove-bag");
// const LIKE = document.querySelectorAll(".fa-heart");
// const REMOVE = document.querySelectorAll(".fa-trash-alt");
const LIKE_SHOE = document.getElementById("like-shoe");
const LIKE_SOCKS = document.getElementById("like-socks");
const LIKE_BAG = document.getElementById("like-bag");
const SHOE_CONTAINER = document.getElementById("shoe-container");
const SOCKS_CONTAINER = document.getElementById("socks-container");
const BAG_CONTAINER = document.getElementById("bag-container");

// LIKING PRODUCTS TO ADD TO WISHLIST

function likeProduct(event) {
  if (event.target.classList.contains("text-danger")) {
    alert(`${event.target.title} removed from wishlist`);
  } else {
    alert(`${event.target.title} added to wishlist`);
  }
  event.target.classList.toggle("text-danger");
}

function removeProduct(event) {
  if (event.target.classList.contains("text-danger")) {
    alert("Product removed from wishlist");
  } else {
    alert("Product added to wishlist");
  }
  event.target.classList.toggle("text-danger");
}

LIKE_SHOE.addEventListener("click", removeProduct);
LIKE_SOCKS.addEventListener("click", removeProduct);
LIKE_BAG.addEventListener("click", removeProduct);

// LIKE.forEach((button) => {
//   button.addEventListener("click", likeProduct);
// });

// REMOVE.forEach((button) => {
//     button.addEventListener("click", removeProduct);
// });

const DEFAULT_SHOE_PRICE = parseInt(SHOE_PRICE.innerHTML);
const DEFAULT_SOCKS_PRICE = parseInt(SOCKS_PRICE.innerHTML);
const DEFAULT_BAG_PRICE = parseInt(BAG_PRICE.innerHTML);

// INCREASE PRODUCTS

function increaseShoe() {
  let shoeCount = parseInt(SHOE_QUANTITY.innerHTML);
  shoeCount = shoeCount + 1;
  SHOE_QUANTITY.innerHTML = shoeCount;

  //increase shoe price per count
  let updatedShoePrice = DEFAULT_SHOE_PRICE * shoeCount;
  SHOE_PRICE.innerHTML = `${updatedShoePrice} $`;
  updateTotal();
}

function increaseSocks() {
  let socksCount = parseInt(SOCKS_QUANTITY.innerHTML);
  socksCount = socksCount + 1;
  SOCKS_QUANTITY.innerHTML = socksCount;

  //increase socks price per count
  let updatedSocksPrice = DEFAULT_SOCKS_PRICE * socksCount;
  SOCKS_PRICE.innerHTML = `${updatedSocksPrice} $`;
  updateTotal();
}

function increaseBag() {
  let bagCount = parseInt(BAG_QUANTITY.innerHTML);
  bagCount = bagCount + 1;
  BAG_QUANTITY.innerHTML = bagCount;

  //increase bag price per count
  let updatedBagPrice = DEFAULT_BAG_PRICE * bagCount;
  BAG_PRICE.innerHTML = `${updatedBagPrice} $`;
  updateTotal();
}

INCREASE_SHOE.addEventListener("click", increaseShoe);
INCREASE_SOCKS.addEventListener("click", increaseSocks);
INCREASE_BAG.addEventListener("click", increaseBag);

// DECREASE PRODUCTS

function decreaseShoe() {
  let shoeCount = parseInt(SHOE_QUANTITY.innerHTML);
  if (shoeCount === 1) {
    if (confirm("Remove product from cart?")) {
      SHOE_CONTAINER.remove();
    } else {
      return;
    }
  }
  shoeCount = shoeCount - 1;
  SHOE_QUANTITY.innerHTML = shoeCount;

  //decrease shoe price per count
  let shoePrice = parseInt(SHOE_PRICE.innerHTML);
  let updatedShoePrice = shoePrice - DEFAULT_SHOE_PRICE;
  SHOE_PRICE.innerHTML = `${updatedShoePrice} $`;
  updateTotal();
}

function decreaseSocks() {
  let socksCount = parseInt(SOCKS_QUANTITY.innerHTML);
  if (socksCount === 1) {
    if (confirm("Remove product from cart?")) {
      SOCKS_CONTAINER.remove();
    } else {
      return;
    }
  }
  socksCount = socksCount - 1;
  SOCKS_QUANTITY.innerHTML = socksCount;

  //decrease socks price per count
  let socksPrice = parseInt(SOCKS_PRICE.innerHTML);
  let updatedSocksPrice = socksPrice - DEFAULT_SOCKS_PRICE;
  SOCKS_PRICE.innerHTML = `${updatedSocksPrice} $`;
  updateTotal();
}

function decreaseBag() {
  let bagCount = parseInt(BAG_QUANTITY.innerHTML);
  if (bagCount === 1) {
    if (confirm("Remove product from cart?")) {
      BAG_CONTAINER.remove();
    } else {
      return;
    }
  }
  bagCount = bagCount - 1;
  BAG_QUANTITY.innerHTML = bagCount;

  //decrease bag price per count
  let bagPrice = parseInt(BAG_PRICE.innerHTML);
  let updatedBagPrice = bagPrice - DEFAULT_BAG_PRICE;
  BAG_PRICE.innerHTML = `${updatedBagPrice} $`;
  updateTotal();
}

// TOTAL PRICE CALCULATION

TOTAL_PRICE.addEventListener("load", updateTotal());

function updateTotal() {
  let total =
    parseInt(SHOE_PRICE.innerHTML) +
    parseInt(SOCKS_PRICE.innerHTML) +
    parseInt(BAG_PRICE.innerHTML);

  TOTAL_PRICE.innerHTML = `${total} $`;
}

DECREASE_SHOE.addEventListener("click", decreaseShoe);
DECREASE_SOCKS.addEventListener("click", decreaseSocks);
DECREASE_BAG.addEventListener("click", decreaseBag);

// REMOVE PRODUCT

function removeShoe() {
  SHOE_PRICE.innerHTML = 0;
  updateTotal();
  SHOE_CONTAINER.remove();
}

function removeSocks() {
  SOCKS_PRICE.innerHTML = 0;
  updateTotal();
  SOCKS_CONTAINER.remove();
}

function removeBag() {
  BAG_PRICE.innerHTML = 0;
  updateTotal();
  BAG_CONTAINER.remove();
}

REMOVE_SHOE.addEventListener("click", removeShoe);
REMOVE_SOCKS.addEventListener("click", removeSocks);
REMOVE_BAG.addEventListener("click", removeBag);
