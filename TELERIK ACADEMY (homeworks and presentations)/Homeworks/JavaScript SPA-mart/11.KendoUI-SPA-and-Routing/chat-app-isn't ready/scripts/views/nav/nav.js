window.views = window.views || {};

(function (scope) {
	'use strict';

	function initView(items) {
		return loader.loadView('nav')
			.then(function (viewHTML) {
				//	debugger;
				var viewModel = {
					items: items
				},
					view = new kendo.View(viewHTML, {
						model: viewModel
					});
				return view;
			});
	}

	scope.nav = {
		init: initView
	};
}(window.views));