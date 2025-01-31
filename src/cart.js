import {Cart} from "./classes/Cart.js";

document.addEventListener('DOMContentLoaded', () => {
	if (localStorage.getItem('cart')) {
		const cart = JSON.parse(localStorage.getItem('cart'));
		const shopCart = new Cart(cart);
		document.querySelector(".cart-out").innerHTML = '';
		document.querySelector(".cart-out").append(shopCart.render());
		
		document.querySelector(".cart-out").addEventListener("click", (event) => {
			const currentTarget = event.target;
			if (currentTarget.classList.contains('delete')) {
				shopCart.goodsDelete(currentTarget.dataset["articul"]);
				document.querySelector(".cart-out").innerHTML = '';
				document.querySelector(".cart-out").append(shopCart.render());
				
				localStorage.setItem("cart", JSON.stringify(shopCart.items));
				return
			}
			if (currentTarget.classList.contains('plus')) {
				shopCart.goodsPlus(currentTarget.dataset["articul"]);
				document.querySelector(".cart-out").innerHTML = '';
				document.querySelector(".cart-out").append(shopCart.render());
				localStorage.setItem("cart", JSON.stringify(shopCart.items));
				return
			}
			if (currentTarget.classList.contains('minus')) {
				shopCart.goodsMinus(currentTarget.dataset["articul"]);
				document.querySelector(".cart-out").innerHTML = '';
				document.querySelector(".cart-out").append(shopCart.render());
				localStorage.setItem("cart", JSON.stringify(shopCart.items));
			}
		});
	}
})