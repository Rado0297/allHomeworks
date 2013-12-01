$(document).ready(function ()
	{
		$('#wrapper_body').fadeIn(500);
		$("div.calc_shortcut").click(function () {
		$('#wrapper_body').fadeIn(500);
		});
		$('ul.main li ul.sub li').hover(function () {
			$(this).find('.hover_menu_border, .hover_menu').show();
		}, function () {
			$(this).find('.hover_menu_border, .hover_menu').hide();
		});
	    $("div.close, div.minimize").click(function () {
		  $('#wrapper_body').fadeOut(500);
		});
		$('#wrapper_body').draggable();
		$('.sub li:has(ul) > a').addClass('more');
		$('.main li').hover(function () {
			$(this).find('ul:first').stop(true, true).animate({opacity: 'toggle', height: 'toggle'}, 200).addClass('active_list');
		}, function () {
			$(this).children('ul.active_list').stop(true, true).animate({opacity: 'toggle', height: 'toggle'}, 200).removeClass('active_list');
		});
	});
	
