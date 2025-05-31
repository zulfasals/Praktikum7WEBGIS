var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Jarak_1 = new ol.format.GeoJSON();
var features_Jarak_1 = format_Jarak_1.readFeatures(json_Jarak_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jarak_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jarak_1.addFeatures(features_Jarak_1);
var lyr_Jarak_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jarak_1, 
                style: style_Jarak_1,
                popuplayertitle: 'Jarak',
                interactive: false,
    title: 'Jarak<br />\
    <img src="styles/legend/Jarak_1_0.png" /> 500 m<br />\
    <img src="styles/legend/Jarak_1_1.png" /> 1000 m<br />\
    <img src="styles/legend/Jarak_1_2.png" /> 1500 m<br />\
    <img src="styles/legend/Jarak_1_3.png" /> 2000 m<br />\
    <img src="styles/legend/Jarak_1_4.png" /> 2500 m<br />\
    <img src="styles/legend/Jarak_1_5.png" /> 3000 m<br />\
    <img src="styles/legend/Jarak_1_6.png" /> <br />' });
var format_BusStop_2 = new ol.format.GeoJSON();
var features_BusStop_2 = format_BusStop_2.readFeatures(json_BusStop_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BusStop_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BusStop_2.addFeatures(features_BusStop_2);
var lyr_BusStop_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BusStop_2, 
                style: style_BusStop_2,
                popuplayertitle: 'Bus Stop',
                interactive: true,
    title: 'Bus Stop<br />\
    <img src="styles/legend/BusStop_2_0.png" /> Halte PENS<br />\
    <img src="styles/legend/BusStop_2_1.png" /> SB Galaxy 2<br />\
    <img src="styles/legend/BusStop_2_2.png" /> SB ITS<br />\
    <img src="styles/legend/BusStop_2_3.png" /> SB Kedung Baruk<br />\
    <img src="styles/legend/BusStop_2_4.png" /> SB KONI MERR<br />\
    <img src="styles/legend/BusStop_2_5.png" /> SB RS Haji 1<br />\
    <img src="styles/legend/BusStop_2_6.png" /> SB Semolowaru 2<br />\
    <img src="styles/legend/BusStop_2_7.png" /> SB Sentra UKM MERR<br />\
    <img src="styles/legend/BusStop_2_8.png" /> SB SMPN 19<br />\
    <img src="styles/legend/BusStop_2_9.png" /> SB UNAIR 1<br />\
    <img src="styles/legend/BusStop_2_10.png" /> <br />' });

lyr_Positron_0.setVisible(true);lyr_Jarak_1.setVisible(true);lyr_BusStop_2.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Jarak_1,lyr_BusStop_2];
lyr_Jarak_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'id': 'id', 'cost_level': 'cost_level', });
lyr_BusStop_2.set('fieldAliases', {'name': 'name', 'Foto': 'Foto', 'Jalan': 'Jalan', });
lyr_Jarak_1.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'id': 'TextEdit', 'cost_level': 'TextEdit', });
lyr_BusStop_2.set('fieldImages', {'name': 'TextEdit', 'Foto': 'ExternalResource', 'Jalan': '', });
lyr_Jarak_1.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'id': 'hidden field', 'cost_level': 'hidden field', });
lyr_BusStop_2.set('fieldLabels', {'name': 'header label - visible with data', 'Foto': 'header label - visible with data', 'Jalan': 'header label - always visible', });
lyr_BusStop_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});