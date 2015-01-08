var bookCtrls = angular.module('bookCtrls',[]);

bookCtrls.controller('HelloCtrl',['$scope',
    function($scope) {
        $scope.greeting = {
            text:'hello'
        };
    }       
]);

bookCtrls.controller('ListCtrl',['$scope',
    function($scope) {
        $scope.books = [
            {title:"XEDD", author:"打磨请求"},
            {title:"XEDD", author:"打磨请求"},
            {title:"XEDD", author:"打磨请求"}
        ];
    }        
]);
