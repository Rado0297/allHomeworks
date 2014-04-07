(function (scope) {
	'use strict';
	var layoutHTML = '<header><h1>Site header</h1><nav id="main-nav"></nav><div id="page"></div>',
		layout = new kendo.Layout(layoutHTML),
		router = new kendo.Router(),
		navItems = [{
			title: 'Home',
			url: 'home',
		}, {
			title: 'About',
			url: 'about'
		}];

	router.route('/', function () {
		views.home.init()
			.then(function (view) {
				layout.showIn('#page', view);
			}, function (err) {
				console.error(err);
			});
	});
	router.route('/home', function () {
		views.home.init()
			.then(function (view) {
				layout.showIn('#page', view);
			}, function (err) {
			console.error(err);
		});
	});

	router.route('/about', function () {
		views.about.init()
			.then(function (view) {
				layout.showIn('#page', view);
			}, function (err) {
				console.error(err);
			});
	});

	function appStart() {
		layout.render('#root');
		views.nav.init(navItems)
			.then(function (view) {
				layout.showIn('#main-nav', view);
			}, function (err) {
				console.error(err);
			});
		router.start();
	}

	scope.app = {
		start: appStart
	};
}(window));