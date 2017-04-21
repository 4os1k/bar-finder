(function() {
  "use strict";
  
  angular
    .module("starter")
    .service("PlaceholderService", PlaceholderService);

  PlaceholderService.$inject = [];


  function PlaceholderService() {
    return {
      nearbyPlacesList: []
    }
  };
})();
