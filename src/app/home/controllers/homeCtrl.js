angular.module('GH.Home')
	.controller('HomeController', function HomeController($scope, me) {
		console.log('HomeController');
		$scope.me = me;
	})

;


/*angular.module('GH.Home')
	.controller('HomeController', ['$scope', 'me', function HomeController($scope, me) {
		console.log('HomeController');
		$scope.me = me;
	}])

;*/