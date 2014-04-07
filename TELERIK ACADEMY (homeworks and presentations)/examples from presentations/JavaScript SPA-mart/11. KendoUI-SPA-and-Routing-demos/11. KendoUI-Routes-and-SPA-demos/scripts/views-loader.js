(function (scope) {
	var cachedViews = {};


	function loadView(name) {
		var path = 'scripts/views/' + name + '/' + name + '.html',
			promise = new RSVP.Promise(function (resolve, reject) {
				if (cachedViews[name]) {
					resolve(cachedViews[name]);
					return;
				}
				$.ajax({
					url: path,
					success: function (html) {
						cachedViews[name] = html;
						resolve(html);
					},
					error: function (err) {
						reject(err);
					}
				});
			});
		return promise;
	}

	scope.loader = {
		loadView: loadView
	};
}(window));