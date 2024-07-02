var mapView = new ol.View ({
    center : ol.proj.fromLonLat([127.485717, 37.421245]),
    zoom: 8,
})

var map = new ol.Map ({
    target: 'map',
    view: mapView,
})

var osmTile = new ol.layer.Tile ({
    title: 'Open Street Map',
    visible: true,
    source: new ol.source.OSM()
})

map.addLayer(osmTile);

var WorldTiles = new ol.layer.Tile({
    title: "Open World Map",
    source: new ol.source.TileWMS({
        url: "http://localhost:8081/geoserver/ne/wms",
        params: {'LAYERS': 'ne:world', 'TILED': true},
        serverType: 'geoserver',
        visible: true
    })
})

map.addLayer(WorldTiles)

// var layerSwitcher = new ol.control.LayerSwitcher({
//     activationMode: 'click',
//     startActive: false,
//     groupSelectStyle: 'children',
// });

// map.addControl(layerSwitcher);

function toggleLayer(event) {
    var lyrname = event.target.value;
    var checkedStatus = event.target.checked;
    var lyrList = map.getLayers();

    lyrList.forEach(function (element) {
        if (lyrname == element.get('title')) {
            element.setVisible(checkedStatus);
        }
        
    });
}