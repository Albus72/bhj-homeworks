const cart = document.querySelector('.cart');
const cartProducts = document.querySelector('.cart__products');
const product = Array.from(document.querySelectorAll('.product'));
const localCart = JSON.parse(localStorage.getItem("cart"));
