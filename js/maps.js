 // var WEBMAPID = "1f619a0e47d64d42a592f5821754ba93"; 
var WEBMAPID = "1a40fa5cc1ab4569b79f45444d728067"; 


require(["esri/map", "esri/arcgis/utils", "dojo/domReady!"], function(map, utils){

utils.createMap(WEBMAPID, "mapDiv").then(function(response){
	map = response.map; 
}); //end map

//repo https://github.com/coreybaker/coreybaker.github.io.git


}); //end all requires