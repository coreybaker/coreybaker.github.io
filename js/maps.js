require(["esri/map", "esri/symbols/PictureMarkerSymbol","dojo/domReady!"], 

function(Map,PMS){


var map = new Map("mapDiv", {
	center: [-88.985918, 40.509185],
	zoom: 16, 
	basemap: "osm"


}); //end map creation

var pinPoint = new PMS({

});



}); // end all requires