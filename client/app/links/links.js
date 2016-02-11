angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
	
	$scope.data = [];
	
	$scope.addVisit = function(link){
		Links.addVisit(link)
			.then(function (data){
				console.log(data);
			})
			.catch(function (err){
				console.log(err);
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
