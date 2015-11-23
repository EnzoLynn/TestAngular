var userInfoModule = angular.module('UserInfoModule', ['ui.router', 'ui.bootstrap']);

userInfoModule.directive('testdir',function(){
	return {
		restrict:'E',		 
		replace:true,
		template:'<div>hi everyone</div>',
		// compile:function(element,attributes){
		// 	element.addClass('btn');
		// },
		link:function(scope,element,attributes){
 			element.bind('mouseenter',function(){
 				if (scope.userInfo && scope.userInfo.password) {
 					element.text(scope.userInfo.password);
 				}else{
 					element.text('change test');

 					 
 					scope.$apply(function(){
						scope.yourName = 'get';
 					});
 					 
 					//angular.element($("#helloName")).text('get {{yourName}}');
 				}
 			});
		}
	};
});

userInfoModule.controller('UserInfoCtrl', ['$scope','$http',
    function($scope,$http) {
        $scope.userInfo = {
            email: '253444@qq.com',
            password: '2222',
            autoLogin: true
        };

        $scope.getFormData = function() {
            console.log($scope.userInfo);
        };

        $scope.setFormData = function() {
            $scope.userInfo = {
                email: 'dddd@qq.com',
                password: '23ddd',
                autoLogin: false
            };
        };

        $scope.resetFormData = function() {
            $scope.userInfo = {
                email: '253444@qq.com',
                password: '2222',
                autoLogin: true
            };
        };
        $scope.loadFormData = function() {
            $http({
                method: 'GET',
                url: '/testData.json'
            }).
            success(function(data, status, headers, config,statusText ) {
            	var dt = data['data'];
            	for (var i = 0; i < dt.length; i++) {
            		console.log(JSON.stringify(dt[i]));//);
            	};			
				
                 $scope.userInfo = {
	                email: dt[1].email,
	                password: dt[1].password,
	                autoLogin: dt[1].autoLogin
	            };
            }).
            error(function(data, status, headers, config,statusText ) {
                alert('error');
            });
        };

        $scope.checkFormData = function(ngModelController,error){
        	//return ngModelController.$error[error];

        };
    }
]);


angular.element(document).ready(function(){

	angular.bootstrap(document,['UserInfoModule']);
});