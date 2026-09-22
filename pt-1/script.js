const productPrice = 5000;
const button = document.getElementById("button");
let totalPrice = 0;

button.addEventListener("click", () => {
  totalPrice += productPrice;
});
