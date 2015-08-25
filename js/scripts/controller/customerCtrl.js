alert('customer Controller');
define(['app'], function (app) {
    app.controller('CustomerCtrl', ['$scope', function ($scope) { $scope.customertitle = "This message from customer control"; }]);
});