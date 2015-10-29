sbgSampleApplication.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
                .when('/', {
                    templateUrl: 'app/templates/login/login.html',
                    controller: 'logInCtrl'
                })

                .when('/dashboard', {                  
                    templateUrl: 'app/templates/dashboard/dashboard.html',
                    controller: function () {
                    }
                })

                .otherwise({
                    redirectTo: '/'
                });
    }]);