(function() {
  "use strict";

  angular
    .module('starter')
    .controller('SettingsCtrl', SettingsCtrl);

  SettingsCtrl.$inject = ["$scope", "$state", "PlaceholderService", "MapDrawerService", "ListHandlerService"];

  function SettingsCtrl($scope, $state, PlaceholderService, MapDrawerService, ListHandlerService) {

    // $scope.ListHandlerService = ListHandlerService;
    $scope.nearbyPlacesList = PlaceholderService.nearbyPlacesList;
    $scope.PhS = PlaceholderService;
    $scope.LS = ListHandlerService;
    $scope.isOpen = ListHandlerService.isOpen;
    
    function placesInList() {
      for (var i = 0; i < PlaceholderService.nearbyPlacesList.length; i++) {
        console.log(PlaceholderService.nearbyPlacesList[i].name);
      }
    }

    placesInList();


    // function (someBoolean) {
    //   if (someBoolean) {
    //     console.log('Open');
    //     return 'Open'
    //   } else {
    //     console.log('Closed');
    //     return 'Closed'
    //   }
    // };

    // function isOpen(someBoolean) {
    //   if (someBoolean) {
    //     console.log('Open');
    //     return 'Open'
    //   } else {
    //     console.log('Closed');
    //     return 'Closed'
    //   }
    // };

  };
})();
