// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('ionicApp', ['ionic', 'ui.router']);

app.controller('MapCtrl', function ($scope, $ionicLoading) {

    google.maps.event.addDomListener(window, 'load', function () {
        var myLatlng = new google.maps.LatLng(33.7838235, -118.1140904);

        var mapOptions = {
            center: myLatlng,
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        navigator.geolocation.getCurrentPosition(function (pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        });
        $scope.map = map;
    });
});

app.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');

    $stateProvider
        .state('list', {
            url: '/',
            templateUrl: 'list.html',
            controller: 'ListCtrl'
        })
        .state('view', {
            url: '/movie/:movieid',
            templateUrl: 'settings.html',
            controller: 'ViewCtrl'
        })
        .state('view2', {
            url: '/movie2/:movieid2',
            templateUrl: 'profile.html',
            controller: 'ViewCtrl'
        })
        .state('view3', {
            url: '/movie3/:movieid3',
            templateUrl: 'active_min.html',
            controller: 'ViewCtrl'
        })
        .state('view4', {
            url: '/movie4/:movieid4',
            templateUrl: 'calories.html',
            controller: 'ViewCtrl'
        })
        .state('view5', {
            url: '/movie5/:movieid5',
            templateUrl: 'steps.html',
            controller: 'ViewCtrl'
        });

    $urlRouterProvider.otherwise("/");

});

app.controller('ListCtrl', function ($scope, $state, $timeout) {

    $scope.changePage = function () {
        $state.go('view', {
            movieid: 1
        });
        $state.go('view2', {
            movieid: 1
        })
        $state.go('view3', {
            movieid: 1
        })
        $state.go('view4', {
            movieid: 1
        })
        $state.go('view5', {
            movieid: 1
        });
    }
});

app.controller('ViewCtrl', function ($scope, $stateParams, $ionicHistory) {
    console.log($stateParams.movieid);
    $scope.goBack = function () {
        $ionicHistory.goBack();
    }
});

app.controller('LoginCtrl', function ($scope) {
    $scope.show = true;
});
