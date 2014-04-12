window.views = window.views || {};

(function (scope) {
	'use strict';

	function initView() {
		return loader.loadView('home')
			.then(function (viewHTML) {
				var viewModel = kendo.observable({
				    title: 'Welcom in our chat app',
				    content:    'This is simple app for chatting.</br>' +
                                'It is made by Bootstrap and AngularJS libraries.</br>' +
                                'Enjoy it.'
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