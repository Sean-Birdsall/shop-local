angular.module('shopLocal', ['ngRoute']);

angular.module('shopLocal')
  .config(myRouter);

myRouter.$inject = ['$routeProvider'];

function myRouter($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: '../templates/home.html',
                controller: "mainController as main"
            })
            .otherwise({
                redirectTo: '/'
            })
        
}        