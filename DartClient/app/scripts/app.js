'use strict';

/* Enman App */
var EnmanApp = angular.module('Dartapp',[]);

/* Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
//EnmanApp.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
//    $ocLazyLoadProvider.config({
//        cssFilesInsertBefore: 'ng_load_plugins_before' // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
//    });
//}]);

//EnmanApp.config(['$httpProvider', function($httpProvider) {
//    $httpProvider.defaults.withCredentials = true;
//    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//}]);


/* Setup global settings */
//EnmanApp.factory('settings', ['$rootScope', function($rootScope) {
//    // supported languages
//    var settings = {
//        layout: {
//            pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
//        },
//        ngViewPath: 'views/'
//    };
//    $rootScope.settings = settings;
//    return settings;
//}]);

