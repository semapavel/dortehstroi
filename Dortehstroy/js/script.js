$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__row').toggleClass('active');
		

	});
});
$(document).ready(function (){
	$('.header__link').click(function (event) {
		$('.header__burger,.header__row').removeClass('active');
		$('body').removeClass('lock');
	});
});
$(document).ready(function(){
	$('.history__slider').slick({
		arrows:false,
		dots:true,
		speed:1000,
	});
	$('.mtb__sliderbig').slick({
		fade: true,
		asNavFor:'.mtb__slider'
	});
	$('.mtb__slider').slick({
		arrows: false,
		dots:true,
		centerMode: true,
		slidesToShow: 5,
		asNavFor:'.mtb__sliderbig',
		responsive:[
			{
				breakpoint: 1150,
				settings: {
					slidesToShow: 3
				}
			}
		]
	});
	$('.object__slider').slick({
		dots:true,
		speed:1000,
	});
});
$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		document.querySelector('.header__menu').classList.add('black__backrgound');}
	else {
		document.querySelector('.header__menu').classList.remove('black__backrgound');
	}
	
 });