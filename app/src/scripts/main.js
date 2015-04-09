$(document).ready(function() {	

	$('.slider__button').on('click', function(e) {
		e.preventDefault();

		var $that          = $(this);
		var $slider        = $that.closest('.slider');

		$('.slider__item').toggleClass('is-active');

		animateSlides();

	});

	var animateSlides = function() {

		if ( $('.slider__item--1').hasClass('is-active') ) {

			$('#line_04, #kinoutv, #sofa, #tv, #tv_picture').removeClass('is-active');

			$('#picture, #cloud, #picture, #lock').removeClass('is-translated');
			
			$('#char_blond, #line_01, #char_asian, #char_black').removeClass('is-hidden');

			$('#picture, #lock, #line_01, #line_02, #line_03').addClass('is-active');

		}
		else {

			$('#cloud, #picture, #lock').addClass('is-translated');

			$('#char_blond, #line_01, #char_asian, #char_black').addClass('is-hidden');

			$('#picture, #lock, #line_01, #line_02, #line_03').removeClass('is-active');

			$('#line_04, #kinoutv, #sofa, #tv, #tv_picture').addClass('is-active');
		}
	}

	imagesLoaded( '#container', function() {
		$('.slider__item').eq(0).addClass('is-active');
		animateSlides();
	});

});