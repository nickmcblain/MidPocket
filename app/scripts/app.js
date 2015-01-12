'use strict';

/**
 * @ngdoc overview
 * @name midpocketApp
 * @description
 * # midpocketApp
 *
 * Main module of the application.
 */
var app = angular.module('midpocketApp', []);

  app.controller('MainController', function($scope) {
  	$('.collapsible').collapsible({ "accordion" : false });
  });
