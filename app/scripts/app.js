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

  app.controller('NavController', function($scope, $timeout) {
  	$scope.menuItems = [
  		{
  			header: 'Sticks',
  			subheaders: [
  				{	
  					header: 'Mens',
	  				subheaders: [
	  					{header: 'Strung'},
	  					{header: 'Unstrung'}
	  				]
  				},
  				{
  					header: 'Womens',
	  				subheaders: [
	  					{header: 'Strung'},
	  					{header: 'Unstrung'}
	  				]
  				}
  			]
  		},
  		{
  			header: 'Helmets',
  			subheaders: [
  				{	
  					header: 'Mens',
	  				subheaders: [
	  					{header: 'Big'},
	  					{header: 'Small'}
	  				]
  				},
  				{
  					header: 'Womens',
	  				subheaders: [
	  					{header: 'Big'},
	  					{header: 'Small'}
	  				]
  				}
  			]
  		}
  	];

  	$timeout(function() {
  		$('.collapsible').collapsible({ "accordion" : false });
  	}, 10);
  });
