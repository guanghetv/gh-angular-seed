angular.module('GH.CommonHttpServices', [])
	.run(function() {
		console.log('GH.CommonHttpServices running...');
	})
	.factory('CommonUser', function CommonUser($http, $q, $timeout) {
		var me = function me() {
			var deferred = $q.defer();
			var mePromise = deferred.promise;
			console.log("CommonUser me");
			$timeout(function () {
				console.log('User getOne');
				deferred.resolve({ name: 'HellMagic' });				
			}, 100);
			return mePromise;
		};

		return {
			me: me
		}
	})

;

/*angular.module('GH.CommonHttpServices', [])
	.run(function() {
		console.log('GH.CommonHttpServices running...');
	})
	.factory('CommonUser', ['$http', '$q', '$timeout', function CommonUser($http, $q, $timeout) {
		var me = function me() {
			var deferred = $q.defer();
			var mePromise = deferred.promise;
			console.log("CommonUser me");
			$timeout(function () {
				console.log('User getOne');
				deferred.resolve({ name: 'HellMagic' });				
			}, 100);
			return mePromise;
		};

		return {
			me: me
		}
	}])

;*/