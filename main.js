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


