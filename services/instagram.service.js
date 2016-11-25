(function () {
	angular.module('galPhoto')

		.factory('instagram', function ($resource) {
			return {
				fetchPopular: function (callback) {
					var api = $resource('https://api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK', {
						client_id: 'CLIENT_ID'
					}, {
							fetch: { method: 'JSONP' }
						});

					api.fetch(function (response) {
						console.log(response);
						callback(response.data);
					});
				}
			}
		});
})();