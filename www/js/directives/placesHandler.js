(function() {
    "use strict";

    angular
      .module('starter')
      .directive('PlacesHandler', PlacesHandler);

    PlacesHandler.$inject = ["PlaceholderService"];

    function PlacesHandler(PlaceholderService) {
      var directive = {
        restrict: "EA",
        scope: true,
        link: linker,
      };
      return directive;

      
    }

  }

})();
