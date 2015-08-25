
alert('main.js in RequireJS first Loads');
require.config({
    baseUrl: "../",
    paths: {
        'angular':'bower_components/angular/angular',
        'angularRoute': 'bower_components/angular-route/angular-route',
        'angularAMD': 'bower_components/angularAMD/angularAMD',
        'CompanyCtrl': 'js/scripts/controller/companyCtrl',
        'CustomerCtrl': 'js/scripts/controller/customerCtrl',
        'StudentCtrl': 'js/scripts/controller/studentCtrl',
        'app': 'js/scripts/app'
    },
    shim: {
        'angularAMD': ['angular'],
        'angularRoute': ['angular']
    },
    deps:['app']
});


//require(['app'], function (app) {
//    angular.element().ready(function () {
//        // bootstrap the app manually
//        angular.bootstrap(document, ['studentapp']);
//    });

//});
//require(['app'], function (app) {
//        angular.bootstrap(document, ['app']);
//});