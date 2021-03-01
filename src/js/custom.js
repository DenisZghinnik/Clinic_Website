document.addEventListener("DOMContentLoaded", function() {

	$(function(){
		$('.login__btn').on('click', function(){
			$(".login-form-box").toggleClass('is-active');
			event.stopPropagation();
		})
		$('.login-form').on('click', function(){
			event.stopPropagation();
		})
		$(document.body).on('click', function(){
			$(".login-form-box").removeClass('is-active')
		})
	});


	$(function(){
		$('#header-carousel').carousel({
		interval: 5000
		});

	$('.carousel-control-next').html('<a href="#" class="arrows"><i class="fas fa-long-arrow-alt-right"></i></a>');
	$('.carousel-control-prev').html('<a href="#" class="arrows"><i class="fas fa-long-arrow-alt-left"></i></a>');
	});


	$('.hover').on('mouseover', function(){
			$(this).children('.btn').css({'padding-right': '45px'});
			$(this).children('.btn').children('i').addClass('is-active');

			$('.hover').on('mouseout', function(){
			$(this).children('.btn').css({'padding-right': '0'});
			$(this).children('.btn').children('i').removeClass('is-active');
		});
	});

	$('.header-menu li, .menu-aside').on('mouseover', function(){
		$('li').css({'color':'#fff'});
		$(this).children('.menu-aside').addClass('is-active');
		$('.header-menu li, .menu-aside').on('mouseout', function(){
			$('.menu-aside').removeClass('is-active');
		});
	});

	$(function(){

		$('.all-menu').on('click', function(){
		$('.menu-all-box').toggleClass('is-active');
			event.stopPropagation();
		});
		$('.menu-all').on('click', function(){
			event.stopPropagation();
		})
		$(document.body).on('click', function(){
				$(".menu-all-box").removeClass('is-active')
		});
	});


	$('.departments__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }

  ]
});


	$(function() {
      $('.socials, .header-social, .location').children($('a[href]')).attr('target', '_blank');
    });

	function sendData() {
		const data = form.serializeArray();
		var text = `Your email is: ${data[0].value} Your password is: ${data[1].value}`
		data.map(function(a){return a.value}).join('');

	}


	const form = $('#forma');
		form.on('submit', function(event){
			event.preventDefault();
			sendData();
			window.open('../news.html', '_self');
		});


});