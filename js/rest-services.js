'use strict';

angular.module('myApp.restServices', ['ngResource'])

    //For Member
    .factory('MemberDetail', ['$resource',
        function ($resource) {
            return $resource('http://localhost:8080/eder/member/:employeeId', {});
        }])

    .factory('MemberDelete', ['$resource',
        function ($resource) {
            return $resource('http://localhost:8080/eder/member/delete/:employeeId', {});
        }])

    .factory('MemberList', ['$resource',
        function ($resource) {
            return $resource('http://localhost:8080/eder/member/', {}, {action1: {isArray: true}});
        }])

    //For Report
    .factory('Report', ['$resource',
        function ($resource) {
            return $resource('http://localhost:3000/employees/:employeeId/reports', {});
        }]);