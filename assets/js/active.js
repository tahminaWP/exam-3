(function($){
	"use strict";
	
	jQuery(document).ready(function($){
		// code
		$(".menu-bar").click(function(){
			$(".menu").toggleClass("active");
		});

		$('.slider-area').owlCarousel({
			loop:true,
			dots:true,
			nav:false,
			autoplay:false,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});
		
	});
	
	
	jQuery(window).on("load", function(){
		// code
	});
	
})(jQuery);
