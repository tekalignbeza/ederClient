'use strict';

angular.module('myApp', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    'myApp.controllers',
    'myApp.restServices'
]).
    config(['$routeProvider', function ($routeProvider) {

        //For Member
        $routeProvider.when('/member', {
            templateUrl: 'partials/member/members.html',
            controller: 'MemberListCtrl'
        });

        $routeProvider.when('/member/:memberId', {
            templateUrl: 'partials/member/memberDetail.html',
            controller: 'MemberListCtrl'
        });

        $routeProvider.when('/memberReg', {
            templateUrl: 'partials/member/registration.html',
            controller: 'MemberListCtrl'
        });

        $routeProvider.when('/login', {
            templateUrl: 'partials/login.html'
        });


        //For Payment
        $routeProvider.when('/payment', {
            templateUrl: 'partials/process/payment/payments.html'
            //,            controller: 'paymentListCtrl'
        });
        $routeProvider.when('/newpayment/:memberId', {
            templateUrl: 'partials/process/payment/newPayment.html',
            controller: 'paymentDetailCtrl'
        });

        //For Expense
        $routeProvider.when('/expense', {
            templateUrl: 'partials/process/expense/expenses.html',
            controller: 'expenseListCtrl'
        });
        $routeProvider.when('/newexpense/:memberId', {
            templateUrl: 'partials/process/expense/newExpense.html',
            controller: 'expenseDetailCtrl'
        });


        //For ContactUs
        $routeProvider.when('/contactUs', {
            templateUrl: 'partials/contactUs.html'
        });

        $routeProvider.otherwise({
            templateUrl: 'partials/home.html'
        });
    }]);