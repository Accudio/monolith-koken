jQuery(function($) {

	//Preloader
	var preloader = $('.preloader');
	$(window).load(function(){
		preloader.remove();
	});
});

$(function() {

	// Pulse Slideshow Pause/Play Button
	if ($("#slider").length > 0){
		pulse.on( 'playing', function(isPlaying) {
			var el = $('#pulse-play');
			if (isPlaying) {
				el.html('<i class="fa fa-pause"></i><span class="sr-only">Pause</span>');
			} else {
				el.html('<i class="fa fa-play"></i><span class="sr-only">Play</span>');
			}
		});
	};

	// back to top button
	var $backToTopBtn = $('.js-back-to-top');

	$(window).scroll(function() {
		if ($(window).scrollTop() > 200) {
			$backToTopBtn.addClass('on');
		} else {
			$backToTopBtn.removeClass('on');
		}
	});

	$backToTopBtn.on('click', function(e){
		$('html, body').animate({
			scrollTop: 0
		}, 'fast');
	})

	// Changes Facebook, Twitter and Google plus links to Icons
	if ( document.querySelector('[title="Facebook"]') ) {
		var fbnav = document.querySelector('[title="Facebook"]');
		fbnav.innerHTML = '<i class="fa fa-facebook-official"></i><span class="sr-only">Facebook</span>'
		fbnav.title = 'Facebook'
		fbnav.target = '_blank'
	};
	if ( document.querySelector('[title="Twitter"]') ) {
		var twnav = document.querySelector('[title="Twitter"]');
		twnav.innerHTML = '<i class="fa fa-twitter"></i><span class="sr-only">Twitter</span>'
		twnav.title = 'Twitter'
		twnav.target = '_blank'
	};
	if ( document.querySelector('[title="Google+"]') ) {
		var gpnav = document.querySelector('[title="Google+"]');
		gpnav.innerHTML = '<i class="fa fa-google-plus"></i><span class="sr-only">Google+</span>'
		gpnav.title = 'Google+'
		gpnav.target = '_blank'
	};
});

