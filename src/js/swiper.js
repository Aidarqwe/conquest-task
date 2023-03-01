import Swiper, {Navigation, Pagination} from "swiper";

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
	direction: "horizontal",
	loop: true,
	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next',
	},
	pagination: {
		el: "swiper-pagination",
		type: "fraction",
	},
})