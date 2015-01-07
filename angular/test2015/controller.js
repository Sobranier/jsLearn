var myApp = angular.module('myApp', []);

function emailrouteconfig($routeProvider) {
    $routeProvider.
        when('/', {
            controller: ListController,
            templateUrl: 'list.html'
        }).
        when('/view/:id', {
            controller:DetailController,
            templateUrl: 'detail.html'
        }).
        otherwise({
            redirectTo: '/'
        });
}

myApp.config(emailrouteconfig());

messages = [{
    id:0,sender:'nihao@gmail.com',subject:'Hi,Old',
    date:'Dec7, 2013 12:32:00', recipients:['dad@nihao.com'],
    message:'hey,heejriejrijriejriejreirjeirjijreirjeireirjei'
},{
    id:1,sender:'ihao@gail.com',subject:'Hi,Old',
    date:'Dec7, 2013 12:32:00', recipients:['dad@nihao.com'],
    message:'hey,heejriejrijriejriejreirjeirjijreirjeireirjei'
},{
    id:2,sender:'niao@gail.com',subject:'Hi,Old',
    date:'Dec7, 2013 12:32:00', recipients:['dad@nihao.com'],
    message:'hey,heejriejrijriejriejreirjeirjijreirjeireirjei'
},{
    id:3,sender:'nihao@gail.com',subject:'Hi,Old',
    date:'Dec7, 2013 12:32:00', recipients:['dad@nihao.com'],
    message:'hey,heejriejrijriejriejreirjeirjijreirjeireirjei'
}];

function ListController ($scope) {
    $scope.messages = messages;
}

function DetailController ($scope, $routeParams) {
    $scope.message = messages[$routeParams.id];
}
