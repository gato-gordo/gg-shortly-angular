angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {

	if( !Auth.isAuth() ){
		$location = $location.path('/signin');
	}

	$scope.link = {};

	$scope.addLink = function(link){
		Links.create({ 'url': link }).then(function (shortened, err){
			if (err) throw err;
			$location = $location.path('/links');
		})
	};

});
