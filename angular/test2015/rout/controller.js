var AMS = angular.module('AM', ['ngRoute']);

AMS.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/', {
            templateUrl:'list.html',
            controller:ListController
        }).
        when('/view/:id', {
            templateUrl:'detail.html',
            controller:DetailController
        }).
        otherwise({
            redirectTo: '/'
        });
}]);

messages = [{
    id:0,sender:'1231214@qq.com',subject:'Hi Hi',
    date:'Dec7,2014 12:32:00',recipients:['12321421@qq.com','313123@gmail.com'],
    message:'热侮辱我讨厌我又突然我要提问人员太文艺我要提问与台湾以'
},{
    id:1,sender:'1231214@qq.com',subject:'Hi Hi',
    date:'Dec7,2014 12:32:00',recipients:['12321421@qq.com','313123@gmail.com'],
    message:'热侮辱我讨厌我又突然我要提问人员太文艺我要提问与台湾以'
},{
    id:2,sender:'1231214@qq.com',subject:'Hi Hi',
    date:'Dec7,2014 12:32:00',recipients:['12321421@qq.com','313123@gmail.com'],
    message:'热侮辱我讨厌我又突然我要提问人员太文艺我要提问与台湾以'
},];

function ListController($scope) {
    $scope.messages = messages;
}
function DetailController($scope,$routeParams) {
    $scope.message = messages[$routeParams.id];
}
