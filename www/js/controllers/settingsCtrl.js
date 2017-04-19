angular
  .module('starter')
  .controller('SettingsCtrl', function($scope, $state, PlaceholderService, MapDrawerService) {

    $scope.PlaceholderService = PlaceholderService;

    console.log('PlaceholderService', PlaceholderService);

    function placesInList() {
      for (var i = 0; i < PlaceholderService.nearbyPlacesList.length; i++) {
        console.log(PlaceholderService.nearbyPlacesList[i].name);
      }
    }
    placesInList();
  });
