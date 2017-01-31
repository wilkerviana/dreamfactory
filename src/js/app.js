$(document).ready(function() {
	$(".menu li a[href^='#']").on('click', function(e) {

 // prevent default anchor click behavior
 e.preventDefault();

 // store hash
 var hash = this.hash;

		// animate
		$('html, body').animate({
			 scrollTop: $(hash).offset().top
		 }, 600, function(){

			 // when done, add hash to url
			 // (default click behaviour)
			 window.location.hash = hash;
		});
	});

	$(window).scroll(function(event) {
		var heightW = $(window).scrollTop();
		if (heightW !== 0 && heightW > 300) {
			$('.menu').addClass('active');
		} else{
			$('.menu').removeClass('active');
		}
		
		if (heightW !== 0 && heightW > 800) {
			$('.progress-bar,.toTop').addClass('active');
		} else{
			$('.progress-bar,.toTop').removeClass('active');
		}
		if (heightW !== 0 && heightW > 3100) {
			$('.blocks--diferentials').addClass('active');
		}
	});

	$('.close-feedback').click(function() {
		$('.form-feedback').removeClass('active');
	});

	$('.icon-menu-mobile').click(function() {
		$('.menu-mobile').addClass('active');
	});
	$('.close-menu-mobile , .link-mobile').click(function() {
		$('.menu-mobile').toggleClass('active');
	});
});