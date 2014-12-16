angular.module('GH.Home')
	.directive('hellmagic', function() {
		return {
			restrict: 'EA',
			templateUrl: 'home/partials/d-hellmagic.tpl.html',
			link: function(scope, ele, attrs) {
				console.log('hellmagic directive link');
			}
		}
	})