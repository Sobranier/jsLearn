var myApp = angular.module('myApp',['ngRoute', 'bookCtrls']);
myApp.directive('hello', function() {
    return {
        restrict: 'E',
        template:'<h1>Hi nihao</h1>',
        replace:true
    }
});
myApp.config(function($routeProvider) {
    $routeProvider.when('/hello',{
        templateUrl:'hi.html',
        controller:'HelloCtrl'
    }).when('/list',{
        templateUrl:'list.html',
        controller:'ListCtrl'
    }).otherwise({
        redirectTo:'/hello'
    });
});



