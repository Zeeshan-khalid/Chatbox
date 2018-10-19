$(document).ready(function() {

$('.pw-em_btn_wrp a.pw-em_btn').on('click', function() {
	$('.acc-options-nav a').removeClass('opt-tab_active');
	$(this).addClass('opt-tab_active');
	$('.login-and-name').removeClass('active-opts');
	$('.pass-and-email').addClass('active-opts');
});

$('.log-dn_btn_wrp a.log-dn_btn').on('click', function() {
	$('.acc-options-nav a').removeClass('opt-tab_active');
	$(this).addClass('opt-tab_active');
	$('.pass-and-email').removeClass('active-opts');
	$('.login-and-name').addClass('active-opts');
});

$('.profile-title span').on('click', function() {
	$(this).closest('li.profile').children('.profile-options-sub').slideToggle(300);
});

$('a.toggle-client').on('click', function() {
	$('.client-wrapper').stop().slideToggle(300);
	$(this).children('span').children('i').toggleClass('fa-minus-square fa-plus-square');
});

$('.redeem-code').on('click', function() {
	$('.code-dropdown').stop().slideToggle(150);
	$(this).toggleClass('code-window-open');
});

$('a.curr-select').on('click', function() {
	var currSelect = $(this).attr('title');

	$('a.curr-select').removeClass('active-curr');
	$('a.curr-select[title='+currSelect+']').addClass('active-curr');
	$('.xph-tokens-section .package-price').removeClass('price-active');
	$('.xph-tokens-section .price-'+currSelect).addClass('price-active');

});

$('a.copy-address-btn').on('click', function(event) {
	event.preventDefault();

	$('input.code-input').focus().select();
	document.execCommand('copy');
});

$('a#x-menu_mobile_btn').on('click', function(event) {

	event.preventDefault();

		if ($(this).children('i').hasClass('fa-bars')) {
		
			$(this).children('i').removeClass('fa-bars').addClass('fa-times');
			
		} else {
			$(this).children('i').removeClass('fa-times').addClass('fa-bars');
		}

		if ($('nav.x-menu_top').hasClass('x-menu_top_hide')) {
		
			$('nav.x-menu_top').removeClass('x-menu_top_hide');
			
		} else {
			$('nav.x-menu_top').addClass('x-menu_top_hide');
		}
});

});