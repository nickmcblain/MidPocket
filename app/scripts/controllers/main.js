'use strict';

/**
 * @ngdoc function
 * @name midpocketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the midpocketApp
 */
angular.module('midpocketApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
