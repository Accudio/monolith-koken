$(function() {
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

	$(".slide").click(function(e) {
	    e.preventDefault();
	    var aid = $(this).attr("href");
	    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
	});
});