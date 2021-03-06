angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links, Auth) {
	
	if( !Auth.isAuth() ){
		$location = $location.path('/signin');
	}


	$scope.data = [];

	$scope.buildLink = function(url, code){
		return url + '/' + code;
	};
	
	$scope.addVisit = function(code){
		Links.addVisit(code)
			.then(function (res){
				window.location = res.data;
			})
			.catch(function (err){
				console.log(err);
				$location = $location.path('/links');
			})
	};
	
	$scope.getLinks = function(){
		Links.index()
			.then(function(data){
				data.forEach( datum => $scope.data.push(datum) );
			})
			.catch(function(err){
				console.log(err);
			})
	};

	$scope.getLinks();

});
