function carouselControls(){
  let background = window.getComputedStyle(document.querySelector('.carousel-item.active')).background
  if(background.indexOf('zion2.gif') != -1){
    document.querySelectorAll('a.nav-link').forEach(link => link.style.color = 'white')
    document.querySelector('#cta-btn').style.backgroundColor = 'blue';
    document.querySelector('.content p').textContent = 'More Than Your Average Engineering Company'
  } else{
    document.querySelectorAll('a.nav-link').forEach(link => link.style.color = 'rgb(2, 0, 116)')
    document.querySelector('#cta-btn').style.backgroundColor = 'green';
    document.querySelector('.content p').textContent = 'Where Quality and Integrity is our drive...'
  }
}
document.querySelector('.carousel-control-next').onclick = carouselControls
document.querySelector('.carousel-control-prev').onclick = carouselControls

;(function () {
	
	'use strict';

	var owlCarousel = function(){

        new WOW().init();

        $('.owl-carousel').owlCarousel({
            items : 4,
            loop  : true,
            margin : 170,
            center : true,
            smartSpeed :900,
            nav:true,
            navText: [
                "<i class='fa carousel-left-arrow fa-chevron-left'></i>",
                "<i class='fa carousel-right-arrow fa-chevron-right'></i>"
            ],responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:true,
                    margin : 120,
                },
                1000:{
                    items:3,
                    nav:true,
                    loop:true,
                    autoplay: true,
                    autoplayTimeout: 1500,
                    navText: [
                        "<i class='fa carousel-left-arrow fa-chevron-left'></i>",
                        "<i class='fa carousel-right-arrow fa-chevron-right'></i>"
                    ],
                }
            }
        });

	};

    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'slow');
        return this; // for chaining...
    }

	$(function(){
		owlCarousel();
	});
}());

TweenMax.from(".content", 0.2, {
    delay: 0.5,
    x:"100%",
    ease: Expo.easeInOut
});
TweenMax.from(".test", 0.5, {
    delay: 2,
    x:"-200%",
    ease: Expo.easeInOut
});

