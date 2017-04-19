(function() {
  angular
    .module("starter")
    .factory("PlaceholderService", PlaceholderService);

  PlaceholderService.$inject = [];
  

  function PlaceholderService() {
    return {
      nearbyPlacesList: []
    }
  }
})();
