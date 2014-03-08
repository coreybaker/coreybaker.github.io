var _map; 
var _layers; 
var _targetLayer;
var WEBMAPID = "1f619a0e47d64d42a592f5821754ba93"; 

require(["esri/map", "esri/arcgis/utils","dojo/domReady!"], 

function(Map, arcgisUtils){


arcgisUtils.createMap(WEBMAPID, "mapDiv",{
	mapOptions: {
		slider:false,
		wrapAround180: false
	},
}).then(function(response){
			_map = response.map; 

		_layers = response.itemInfo.itemData.operationalLayers;

		//holy cow this actually returned what I was looking for
		console.log(_layers);

		_targetLayer = _layers[0];


		// var what = $("#map-header").append(_targetLayer.popupInfo.title);

		// var otherElemtns = $("<p>test</p>").appendTo("#map-header");

		// var elements = _targetLayer.popupInfo.fieldInfos[1].fieldName;

		// for (var i = 0; i < elements.length; i++) {
		// 	console.log(elements); 
		// }



	}); 


}); // end all requires