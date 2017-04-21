(function() {
  "use strict";

  angular
    .module('starter')
    .controller('MapCtrl', MapCtrl);

  MapCtrl.$inject = ["$scope", "$state", "$cordovaGeolocation", "PlaceholderService", "MapDrawerService"];

  function MapCtrl($scope, $state, $cordovaGeolocation, PlaceholderService, MapDrawerService) {
    $scope.PlaceholderService = PlaceholderService;
  };

})();
