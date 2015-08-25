
alert('app.js returned from Requirejs with AngularAMD');

define(['angularAMD', 'angularRoute'], function (angularAMD) {

    var app = angular.module("app", ['ngRoute']);
    alert('app-module defined');

    app.controller('topmenu', ['$scope', function ($scope) {
        alert('app-topmenu controller');
        $scope.topmenuitems = "/* TOP-MENU for all pages from controller */";
    }]);
   
    app.controller('footer', ['$scope', function ($scope) {
        alert('app-footer controller');
        $scope.footeritems = "/* FOOTER for all pages from controller */";
    }]);

    app.config(['$routeProvider',function ($routeProvider) {
        $routeProvider
            .when("/",angularAMD.route( {
                templateUrl: 'views/company.html',
                controller: 'CompanyCtrl',
                controllerUrl: 'CompanyCtrl'
                //controllerUrl: 'js/scripts/controller/companyCtrl'
            }))
            .when("/student",angularAMD.route({
                templateUrl: 'views/student.html',
                controller: 'StudentCtrl',
                 controllerUrl: 'js/scripts/controller/studentCtrl'
            }))
            .when("/customer", angularAMD.route({
                templateUrl: 'views/customer.html',
                controller: 'CustomerCtrl',
                controllerUrl: 'js/scripts/controller/customerCtrl',
                
            }))
            .otherwise({ redirectTo: '/' });
    }]);
    alert('app.config for routing');
    return angularAMD.bootstrap(app);
});