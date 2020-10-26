$(document).ready(function () {
	$('.menu__icon, .menu__link').click(function (event) {
		$('body').toggleClass('lock')
		$('.icon-menu, .menu__body').toggleClass('active')
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
//----------------прокрутука до блока---------------
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		const blockID = anchor.getAttribute('href');
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}
//----------------tabs------------------------------
var tabNavs = document.querySelectorAll(".tabs__item");
var tabPanes = document.querySelectorAll(".tabs__pane");
for (var i = 0; i < tabNavs.length; i++) {
	tabNavs[i].addEventListener("click", function (e) {
		e.preventDefault();
		var activeTabAttr = e.target.getAttribute("data-tab");
		for (var j = 0; j < tabNavs.length; j++) {
			var contentAttr = tabPanes[j].getAttribute("data-tab-content");
			if (activeTabAttr === contentAttr) {
				tabNavs[j].classList.add("active");
				tabPanes[j].classList.add("active");
			} else {
				tabNavs[j].classList.remove("active");
				tabPanes[j].classList.remove("active");
			}
		};
	});
}