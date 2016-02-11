angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {

	$scope.link = {};

	$scope.addLink = function(link){
		Links.create({ 'url': link }).then(function (shortened, err){
			if (err) throw err;
			$location = $location.path('/links');
		})
	};

});
