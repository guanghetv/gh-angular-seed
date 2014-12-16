angular.module('GH.Home', ['ngRoute', 'GH.CommonHttpServices'])
	.config(function homeConfig($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'home/partials/home.tpl.html',
				controller: 'HomeController',
				resolve: {
					me: ['User', function(User) {
						return User.getMe();
					}]
				}
			})
	})

	.run(function homeRun() {
		console.log('home runing...');
	})

;


/*angular.module('GH.Home', ['ngRoute', 'GH.CommonHttpServices'])
	.config(['$routeProvider', function homeConfig($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'home/partials/home.tpl.html',
				controller: 'HomeController',
				resolve: {
					me: ['User', function(User) {
						return User.getMe();
					}]
				}
			})
	}])

	.run(function homeRun() {
		console.log('home runing...');
	})

;*/