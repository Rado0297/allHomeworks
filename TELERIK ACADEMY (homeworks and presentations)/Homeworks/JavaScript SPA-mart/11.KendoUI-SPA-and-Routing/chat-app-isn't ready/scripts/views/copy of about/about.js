window.views = window.views || {};

(function (scope) {
	'use strict';

	function initView() {
		return loader.loadView('about')
			.then(function (viewHTML) {
				var viewModel = kendo.observable({
				    title: 'Login',
					items: [{
						title: 'Join us in Facebook',
						url: 'http://www.facebook.com/TelerikAcademy',
						img: 'images/facebook.png'
					}, {
						title: 'Follow us on Twitter',
						url: 'https://twitter.com/@telerikacademy',
						img: 'images/twitter.png'
					}]
				}),
					view = new kendo.View(viewHTML, {
						model: viewModel
					});
				return view;
			});
	}

	scope.about = {
		init: initView
	};
}(window.views));