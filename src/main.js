angular.module( 'YCMath', [
	'templates-app',
	'templates-common',
	'ngRoute',
	'GH.Home'
])

.config(function mainConfig ($routeProvider) {
	$routeProvider
		.otherwise('/home');
})

.run( function mainRun () {
	console.log('main runing...');
})


;




/*angular.module( 'YCMath', [
	'templates-app',
	'templates-common',
	'ngRoute',
	'GH.Home'
])

.config( ['$routeProvider', function mainConfig ($routeProvider) {
	$routeProvider
		.otherwise('/home');
}])

.run( function mainRun () {
	console.log('main runing...');
})


;

*/