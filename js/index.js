userInfoModule.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('testAg', {
            url: '/testAg',
            views: {
                '': {
                    template: "<h1>testAg!</h1>"
                }
            }
        })
        .state('hello', {
            url: '/hello',
            template: "<h1>hello!</h1>"
        }).state('main', {
            url: '/main',
            views: {
                '': {
                    templateUrl: 'main.html'
                },
                'left@main': {
                    templateUrl: 'testAg.html'
                },
                'right@main': {
                    templateUrl: 'hello.html',
                    controller: function($scope,$location,$window){
                      //console.log($scope.yourName);
				      $scope.yourName = 'new Name';
				      //console.log($location.path());
				      //$location.replace().path('http://localhost:806/#/index');
				      //$window.location.href = $location.protocol() +'://'+ $window.location.host;
				    }

                },
                'left@main.testAg': {
                    templateUrl: 'hello.html'
                }

            }
        });

});



userInfoModule.controller('AlertDemoCtrl', function($scope) {
    $scope.alerts = [{
        type: 'danger',
        msg: 'Oh snap! Change a few things up and try submitting again.'
    }, {
        type: 'success',
        msg: 'Well done! You successfully read this important alert message.'
    }];

    $scope.addAlert = function() {
        $scope.alerts.push({
            msg: 'Another alert!'
        });
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
});


userInfoModule.controller('CarouselDemoCtrl', function($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: 'http://placekitten.com/' + newWidth + '/300',
            text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
    };
    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    }
});