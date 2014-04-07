window.views = window.views || {};

(function (scope) {
	'use strict';

	function initView() {
		return loader.loadView('home')
			.then(function (viewHTML) {
				var viewModel = kendo.observable({
					title: 'Hello, MVVM!',
					content: 'I am content bound to a Kendo.View'
				}),
					view = new kendo.View(viewHTML, {
						model: viewModel
					});
				return view;
			});
	}

	scope.home = {
		init: initView
	};
}(window.views));