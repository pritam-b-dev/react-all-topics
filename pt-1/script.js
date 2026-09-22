const productPrice = 5000;
const button = document.getElementById("button");
const price = document.getElementById("price");
const total = document.getElementById("total");

let totalPrice = 0;
price.innerText = `TK ${productPrice}`;
total.innerText = `0`;
button.addEventListener("click", () => {
  totalPrice += productPrice;
  total.innerText = `TK ${totalPrice}`;
});
