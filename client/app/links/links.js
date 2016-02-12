angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links) {
	
	$scope.data = [];

	$scope.buildLink = function(url, code){
		return url + '/' + code;
	};
	
	$scope.addVisit = function(code){
		Links.addVisit(code)
			.then(function (res){
				$location = res.data;
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
				console.log($scope.data);
			})
			.catch(function(err){
				console.log(err);
			})
	};

	$scope.getLinks();

});
