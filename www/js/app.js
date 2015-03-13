// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('defaultCtrl', function($scope) {

  $scope.billAmount = 0;
  $scope.tipAmount = 0;
  $scope.total = 0;

  //$scope.percentages = {};
  $scope.percentages = [
    { id:'10%', value:'0.10' },
    { id:'15%', value:'0.15' },
    { id:'20%', value:'0.20'}
    ];
  $scope.myPercentage = $scope.percentages[0]; // default

  $scope.update = function() {
    console.log('pctage selected : ' + $scope.myPercentage.value);
    $scope.tipAmount = $scope.billAmount * $scope.myPercentage.value;
    $scope.total = $scope.billAmount + $scope.tipAmount;
    console.log('montant total : ' + $scope.total);
  }

  // $scope.tipAmount = $scope.myPercentage.value;




})
