alert('student Controller');
define(['app'], function (app) {
    app.controller('StudentCtrl', ['$scope', function ($scope) { $scope.studenttitle = "This message from student control"; }]);
});