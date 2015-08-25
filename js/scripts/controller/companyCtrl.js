alert('Company Controller');
define(['app'], function (app) {
    app.controller('CompanyCtrl', ['$scope', function ($scope) { $scope.companytitle = "This message from Company control"; }]);
});