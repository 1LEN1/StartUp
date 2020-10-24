$(document).ready(function () {
	$('.menu__icon').click(function (event) {
		$('.icon-menu, .menu__body').toggleClass('active')
		$('body').toggleClass('lock')
		$('.welcome__link, .item-row__icon').toggleClass('z-index__hiden')
	})
});
//---------------подложка під хедер-----------------//
let windowHeight;
let header = document.querySelector(".header__rec");
window.addEventListener('scroll', function () {
	windowHeight = pageYOffset;
	console.log(windowHeight)
	if (windowHeight >= 100) {
		header.classList.add("show")
	}
	else {
		header.classList.remove("show")
	}
});