(function() {
  "use strict";

  angular
    .module('starter')
    .service('MapDrawerService', MapDrawerService);

  MapDrawerService.$inject = ["$state", "$cordovaGeolocation", "PlaceholderService"];


  function MapDrawerService($state, $cordovaGeolocation, PlaceholderService) {
    
    function DrawThatDamnMap() {

    var options = { timeout: 10000, enableHighAccuracy: true };

    $cordovaGeolocation.getCurrentPosition(options)
      .then(function(position) {
        
        // Finding your position
        var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        // var latLng = new google.maps.LatLng(46.966886, 32.068710);
        var pointB = new google.maps.LatLng(46.964278, 32.023154);
        var mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        // Map drawing
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        // Direction services
        var directionsService = new google.maps.DirectionsService,
          directionsDisplay = new google.maps.DirectionsRenderer({
            map: map
          });

        // Route creationand drawing
        calculateAndDisplayRoute(directionsService, directionsDisplay, latLng, pointB);

        function calculateAndDisplayRoute(directionsService, directionsDisplay, latLng, pointB) {
          directionsService.route({
            origin: latLng,
            destination: pointB,
            travelMode: google.maps.TravelMode.DRIVING
          }, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
              directionsDisplay.setDirections(response);
            } else {
              window.alert('Directions request failed due to ' + status);
            }
          });
        }
        // Creating marker for your position
        var myPosition = new google.maps.Marker({
          position: latLng,
          map: map,
          title: "You should be here"
        });
        myPosition.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');

        // Searching service
        var infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: latLng,
          radius: 500,
          type: ['bar']
        }, callback);

        var nearbyPlacesList = [];

        // Status Callback
        function callback(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              createMarker(results[i]);
              PlaceholderService.nearbyPlacesList.push(results[i]);
              // console.log(results[i]);
            }
          }
        }


        // Marker Creation for places
        function createMarker(place) {
          var placeLoc = place.geometry.location;
          var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
          });
          marker.setIcon('http://maps.google.com/mapfiles/kml/pal2/icon27.png')
          google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
          });
        }
      }, function(error) {
        console.log("Could not get location");
      });
}
    return DrawThatDamnMap();
  };
})();
