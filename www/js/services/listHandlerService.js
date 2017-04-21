(function() {
  "use strict";
  
  angular
    .module("starter")
    .service("ListHandlerService", ListHandlerService);

  ListHandlerService.$inject = [];


  function ListHandlerService() {

    this.isOpen = function(someBoolean) {
      if (someBoolean) {
        return 'Open'
      } else {
        return 'Closed'
      }
    };

    this.isRating = function(rating) {
      if (rating !== undefined) {
        return rating
      } else {
        return 'Rating is not available'
      }
    };



  }


})();
