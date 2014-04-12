window.views = window.views || {};

(function (scope) {
	'use strict';

	function initView() {
		return loader.loadView('about')
			.then(function (viewHTML) {
				var viewModel = kendo.observable({
				    title: 'Login',
					items: []
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