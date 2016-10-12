/*
	The following code setup was borrowed from Stack Overflow
	link: http://stackoverflow.com/questions/28452235/make-a-nav-bar-stick-to-the-top-when-scrolling-with-css 
	
	This code is used to fix the navbar to the top of the webpage after scrolling
*/

$(document).ready(function() {
	$(window).scroll(function () {
      	if (window.innerWidth < 1024 && window.innerWidth > 768) {
			if ($(window).scrollTop() > 170) {
			  $('#nav').addClass('navbar-fixed-top');
			}
			if ($(window).scrollTop() < 171) {
			  $('#nav').removeClass('navbar-fixed-top');
			}
		} else if (window.innerWidth < 769) {
			if ($(window).scrollTop() > 120) {
			  $('#nav').addClass('navbar-fixed-top');
			}
			if ($(window).scrollTop() < 121) {
			  $('#nav').removeClass('navbar-fixed-top');
			}
		} else {
			if ($(window).scrollTop() > 212) {
			  $('#nav').addClass('navbar-fixed-top');
			}
			if ($(window).scrollTop() < 213) {
			  $('#nav').removeClass('navbar-fixed-top');
			}
		}
	});
});

/* End borrowed code */