'use strict';

angular.module('myApp.controllers', [])
    .controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location', function ($scope, $rootScope, $window, $location) {
        $scope.slide = '';
        $rootScope.back = function() {
          $scope.slide = 'slide-right';
          $window.history.back();
        }
        $rootScope.go = function(path){
          $scope.slide = 'slide-left';
          $location.url(path);
        }
    }])

    //For Member
    .controller('MemberListCtrl', ['$scope', 'MemberDetail', function ($scope, MemberList) {
        $scope.members = MemberList.query();
    }])
    .controller('MemberDetailCtrl', ['$scope', '$routeParams', 'MemberDetail', function ($scope, $routeParams, MemberDetail,MemberDelete) {
        $scope.memberDetail = MemberDetail.get({employeeId: $routeParams.employeeId});
        $scope.create = function(){
            MemberDelete.get({employeeId: $routeParams.employeeId})
        }


    }])


    //For Processes(Payment)
    .controller('paymetListCtrl', ['$scope', 'MemberDetail', function ($scope, MemberList) {
        $scope.members = MemberList.query();
        $scope.path = 'payment';
    }])
    .controller('paymentDetailCtrl', ['$scope', '$routeParams', 'MemberDetail', function ($scope, $routeParams, MemberDetail) {
        $scope.memberDetail = MemberDetail.get({employeeId: $routeParams.employeeId});
        $scope.path = 'payment';
    }])

    //For Processes(expense)
    .controller('expenseListCtrl', ['$scope', 'MemberDetail', function ($scope, MemberList) {
        $scope.members = MemberList.query();
        $scope.path = 'expense';
    }])
    .controller('expenseDetailCtrl', ['$scope', '$routeParams', 'MemberDetail', function ($scope, $routeParams, MemberDetail) {
        $scope.memberDetail = MemberDetail.get({employeeId: $routeParams.employeeId});
        $scope.path = 'expense';
    }])


    //For Repaort
    .controller('ReportListCtrl', ['$scope', '$routeParams', 'Report', function ($scope, $routeParams, Report) {
        $scope.members = Report.query({employeeId: $routeParams.employeeId});
    }]);
