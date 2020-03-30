const productsCountEl = document.getElementById("products-count");
const addToCartButtons = document.querySelectorAll(".add-to-cart");


for(let i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener('click', function () {
		productsCountEl.textContent = +productsCountEl.textContent + 1;
	});
};


// console.log(addToCartButtons)

//////////////////// DZ ////////////////////
const likeOffEl = document.querySelectorAll(".device-like-blue");
const likeOnEl = document.querySelectorAll(".device-like-white");

// Like
for(let i = 0; i < likeOffEl.length; i++) {
	likeOffEl[i].addEventListener('click', function () {
		likeOnEl[i].style.display = 'block';
	});
};


// Remove like
for(let i = 0; i < likeOnEl.length; i++) {
	likeOnEl[i].addEventListener('click', function () {
		likeOnEl[i].style.display = 'none';
	});
};

// console.log(likeOnEl)
// console.log(likeOnEl.length)