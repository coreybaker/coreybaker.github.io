

require(["esri/map", "esri/geometry/Point","dojo/domReady!"], 

function(Map,Point){


var map = new Map("mapDiv", {
	center: [-88.985918, 40.509185],
	zoom: 16, 
	basemap: "osm"




}); //end map creation

var point = new Point( {"x": -88.98, "y": 40.509, "spatialReference": {"wkid": 4326 } });



}); // end all requires