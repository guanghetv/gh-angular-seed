angular.module('GH.Home')
	.factory('User', function User(CommonUser) {
		var getMe = function() {
			console.log('User getMe');
			return CommonUser.me();
		};

		return {
			getMe: getMe
		}
	})

;



/*angular.module('GH.Home')
	.factory('User', ['CommonUser', function User(CommonUser) {
		var getMe = function() {
			console.log('User getMe');
			return CommonUser.me();
		};

		return {
			getMe: getMe
		}
	}])

;*/