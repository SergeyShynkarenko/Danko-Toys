// // Import jQuery module (npm i jquery)
import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
require('../libs/slick.min.js')

document.addEventListener('DOMContentLoaded', () => {
	const btn = document.querySelector(".mobile__search");
	const form = document.querySelector(".header__form");
	const burger = document.querySelector(".hamburger");
	const catalogBtn = document.querySelector(".sidebar");
	const catalogContent = document.querySelector(".sidebar__list");
	const menu = document.querySelector(".menu__list");
	const arrowPrev = '<button type="button" class="slick-prev"><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.21914 10.4984C5.27502 10.4984 5.33384 10.4984 5.38972 10.4984C9.7306 10.4984 14.0715 10.4984 18.4124 10.4984C19.1594 10.4984 19.7388 10.0789 19.9387 9.39834C20.2211 8.43614 19.4917 7.46808 18.483 7.46808C14.1185 7.46808 9.75119 7.46808 5.38678 7.46808C5.3309 7.46808 5.27502 7.46808 5.18973 7.46808C5.23678 7.41821 5.26031 7.38887 5.28678 7.36247C6.06026 6.59095 6.8308 5.8165 7.60722 5.04792C8.34834 4.31454 9.09241 3.58702 9.83354 2.85364C10.2982 2.39601 10.4335 1.74477 10.1923 1.18153C9.93647 0.586028 9.38945 0.231071 8.72479 0.248672C8.31893 0.260406 7.97778 0.424684 7.6925 0.712169C6.32789 2.07626 4.96033 3.44035 3.59278 4.8015C2.55755 5.83117 1.51645 6.85204 0.48122 7.87877C-0.159914 8.51241 -0.159916 9.45701 0.478277 10.0936C2.88106 12.4903 5.28384 14.8899 7.68956 17.2837C8.11012 17.7031 8.62774 17.8469 9.20417 17.6826C9.7806 17.5183 10.1453 17.134 10.2717 16.5473C10.3776 16.0457 10.2629 15.5851 9.90118 15.2184C8.9336 14.2387 7.95425 13.2706 6.98079 12.2996C6.42494 11.7452 5.87204 11.1907 5.31325 10.6422C5.27796 10.6069 5.2162 10.5952 5.1662 10.5717C5.18091 10.5453 5.20149 10.5219 5.21914 10.4984Z"/></svg></button>';

	const arrowNext = '<button type="button" class="slick-next"><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.7809 7.50159C14.725 7.50159 14.6662 7.50159 14.6103 7.50159C10.2694 7.50159 5.92851 7.50159 1.58762 7.50159C0.840611 7.50159 0.261237 7.92109 0.0612507 8.60166C-0.221084 9.56386 0.50828 10.5319 1.51704 10.5319C5.88145 10.5319 10.2488 10.5319 14.6132 10.5319C14.6691 10.5319 14.725 10.5319 14.8103 10.5319C14.7632 10.5818 14.7397 10.6111 14.7132 10.6375C13.9397 11.409 13.1692 12.1835 12.3928 12.9521C11.6517 13.6855 10.9076 14.413 10.1665 15.1464C9.70179 15.604 9.5665 16.2552 9.80766 16.8185C10.0635 17.414 10.6105 17.7689 11.2752 17.7513C11.6811 17.7396 12.0222 17.5753 12.3075 17.2878C13.6721 15.9237 15.0397 14.5597 16.4072 13.1985C17.4424 12.1688 18.4836 11.148 19.5188 10.1212C20.1599 9.48759 20.1599 8.54299 19.5217 7.90642C17.1189 5.50973 14.7162 3.1101 12.3104 0.716349C11.8899 0.296854 11.3723 0.153112 10.7958 0.31739C10.2194 0.481667 9.85472 0.865959 9.72826 1.45267C9.62238 1.9543 9.73708 2.41486 10.0988 2.78155C11.0664 3.76135 12.0457 4.72941 13.0192 5.70041C13.5751 6.25484 14.128 6.80928 14.6867 7.35785C14.722 7.39305 14.7838 7.40479 14.8338 7.42825C14.8191 7.45465 14.7985 7.47812 14.7809 7.50159Z"/></svg></button>'

	btn.addEventListener("click", function() {
		form.classList.toggle("active");
	});

	burger.addEventListener("click", function() {
		catalogContent.classList.remove("active")
		menu.classList.toggle("active");
	});

	catalogBtn.addEventListener("click", function() {
		menu.classList.remove("active");
		catalogContent.classList.toggle("active");
	});


	$('.menu__slider').slick({
		infinite: false,
		slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: true,
 		prevArrow: arrowPrev,
		nextArrow: arrowNext,
		responsive: [
	    {
	      breakpoint: 480,
	      settings: {
	      	arrows: false,
	      	dots: true
	      }
	    },
	  ]
	});

	$('.catalog__slider').slick({
		infinite: false,
		slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: true,
 		prevArrow: arrowPrev,
		nextArrow: arrowNext,
		responsive: [
	    {
	      breakpoint: 480,
	      settings: {
	      	arrows: false,
	      	dots: true
	      }
	    },
	  ]
	});

	$('.card__slider').slick({
		infinite: false,
		slidesToShow: 4,
  	slidesToScroll: 1,
  	variableWidth: true,
  	arrows: true,
 		prevArrow: arrowPrev,
		nextArrow: arrowNext,
		responsive: [
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 3,
  				slidesToScroll: 1,
				}
			},
	    {
	      breakpoint: 480,
	      settings: {
	      	slidesToShow: 1,
  				slidesToScroll: 1,
	      	arrows: false,
	      	dots: true
	      }
	    },
		]
	});

});
