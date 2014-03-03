// api key AIzaSyB6kH2StZAjEtyxdbCW-eZ5MoEGlqzLZkA
// you're going to want to delete this later 

function initialize() {
	var mapOptions = {
		zoom: 8, 
		center: new google.maps.LatLng(-34.397, 150.644);
	}

	var map = new google.maps.Map(document.getElementById('mapDiv'), mapOptions);


}

google.maps.event.addDomListener(window, 'load', initialize);