var angular = require('angular');
var app = angular.module('MyApp', []);
var semver = require('semver');

app.controller('PostsCtrl', function($scope, $http) {
  $http.get('http://npm-registry-cors-proxy.herokuapp.com/npm').
    success(function(data, status, headers, config) {
      $scope.satisfies = semver.satisfies;
      $scope.versions = Object.keys(data.versions);
      $scope.range = '*'
    }).
    error(function(data, status, headers, config) {
      console.log('Sorry, could not load data.')
    });
});
