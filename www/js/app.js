// Ionic Starter App

angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

  .controller('loginController', function($scope){
    $scope.firstName = '';
    $scope.lastName = '';
    $scope.email = '';

    $scope.submittedFirstName = '';
    $scope.submittedLastName = '';
    $scope.submittedEmail = '';
    $scope.isSubmitted = false;

    this.$onInit = function(){
      // This event fires when the keyboard will be shown
      window.addEventListener('native.keyboardshow', function(e){
          $scope.keyboardShowTime = new Date();
      });

      // This event fires when the keyboard will hide
      window.addEventListener('native.keyboardhide', function(e){
          $scope.keyboardHideTime = new Date();
      });
    }

    $scope.submit = function(){
      $scope.submittedFirstName = $scope.firstName;
      $scope.submittedLastName = $scope.lastName;
      $scope.submittedEmail = $scope.email;
      $scope.isSubmitted = true;
    }
  });