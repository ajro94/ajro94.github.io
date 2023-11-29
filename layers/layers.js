var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BatasAdministrasiKabupatenKota_1 = new ol.format.GeoJSON();
var features_BatasAdministrasiKabupatenKota_1 = format_BatasAdministrasiKabupatenKota_1.readFeatures(json_BatasAdministrasiKabupatenKota_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiKabupatenKota_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKabupatenKota_1.addFeatures(features_BatasAdministrasiKabupatenKota_1);
var lyr_BatasAdministrasiKabupatenKota_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasAdministrasiKabupatenKota_1, 
                style: style_BatasAdministrasiKabupatenKota_1,
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiKabupatenKota_1.png" /> Batas Administrasi Kabupaten/Kota'
            });
var format_JaringanRelKeretaApi_2 = new ol.format.GeoJSON();
var features_JaringanRelKeretaApi_2 = format_JaringanRelKeretaApi_2.readFeatures(json_JaringanRelKeretaApi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanRelKeretaApi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanRelKeretaApi_2.addFeatures(features_JaringanRelKeretaApi_2);
var lyr_JaringanRelKeretaApi_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JaringanRelKeretaApi_2, 
                style: style_JaringanRelKeretaApi_2,
                interactive: true,
                title: '<img src="styles/legend/JaringanRelKeretaApi_2.png" /> Jaringan Rel Kereta Api'
            });
var format_StasiunKeretaApi_3 = new ol.format.GeoJSON();
var features_StasiunKeretaApi_3 = format_StasiunKeretaApi_3.readFeatures(json_StasiunKeretaApi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StasiunKeretaApi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StasiunKeretaApi_3.addFeatures(features_StasiunKeretaApi_3);
var lyr_StasiunKeretaApi_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StasiunKeretaApi_3, 
                style: style_StasiunKeretaApi_3,
                interactive: true,
                title: '<img src="styles/legend/StasiunKeretaApi_3.png" /> Stasiun Kereta Api'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BatasAdministrasiKabupatenKota_1.setVisible(true);lyr_JaringanRelKeretaApi_2.setVisible(true);lyr_StasiunKeretaApi_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BatasAdministrasiKabupatenKota_1,lyr_JaringanRelKeretaApi_2,lyr_StasiunKeretaApi_3];
lyr_BatasAdministrasiKabupatenKota_1.set('fieldAliases', {'qc_id': 'qc_id', 'fid_batas_': 'fid_batas_', 'a1code': 'a1code', 'a2code': 'a2code', 'a2name': 'a2name', 'a1name': 'a1name', 'kode_bps': 'kode_bps', 'fid_dakkab': 'fid_dakkab', 'dak_kprov': 'dak_kprov', 'dak_nprov': 'dak_nprov', 'dak_kkab': 'dak_kkab', 'dak_nkab': 'dak_nkab', 'dakk': 'dakk', 'kode_dagri': 'kode_dagri', 'coba': 'coba', 'zona': 'zona', });
lyr_JaringanRelKeretaApi_2.set('fieldAliases', {'qc_id': 'qc_id', 'fid_1': 'fid_1', 'kode_unsur': 'kode_unsur', 'toponim': 'toponim', 'pelaksana': 'pelaksana', 'updated': 'updated', 'keterangan': 'keterangan', 'rel_ka': 'rel_ka', 'length': 'length', 'pengembang': 'pengembang', });
lyr_StasiunKeretaApi_3.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'stasiun': 'stasiun', 'pengembang': 'pengembang', });
lyr_BatasAdministrasiKabupatenKota_1.set('fieldImages', {'qc_id': '', 'fid_batas_': 'Range', 'a1code': 'TextEdit', 'a2code': 'TextEdit', 'a2name': 'TextEdit', 'a1name': 'TextEdit', 'kode_bps': 'Range', 'fid_dakkab': 'Range', 'dak_kprov': 'TextEdit', 'dak_nprov': 'TextEdit', 'dak_kkab': 'TextEdit', 'dak_nkab': 'TextEdit', 'dakk': 'Range', 'kode_dagri': 'Range', 'coba': 'Range', 'zona': 'Range', });
lyr_JaringanRelKeretaApi_2.set('fieldImages', {'qc_id': 'TextEdit', 'fid_1': 'TextEdit', 'kode_unsur': 'TextEdit', 'toponim': 'TextEdit', 'pelaksana': 'TextEdit', 'updated': 'TextEdit', 'keterangan': 'TextEdit', 'rel_ka': 'TextEdit', 'length': 'TextEdit', 'pengembang': 'TextEdit', });
lyr_StasiunKeretaApi_3.set('fieldImages', {'qc_id': 'TextEdit', 'id': 'Range', 'stasiun': 'TextEdit', 'pengembang': 'TextEdit', });
lyr_BatasAdministrasiKabupatenKota_1.set('fieldLabels', {'qc_id': 'no label', 'fid_batas_': 'no label', 'a1code': 'no label', 'a2code': 'no label', 'a2name': 'no label', 'a1name': 'no label', 'kode_bps': 'no label', 'fid_dakkab': 'no label', 'dak_kprov': 'no label', 'dak_nprov': 'no label', 'dak_kkab': 'no label', 'dak_nkab': 'no label', 'dakk': 'no label', 'kode_dagri': 'no label', 'coba': 'no label', 'zona': 'no label', });
lyr_JaringanRelKeretaApi_2.set('fieldLabels', {'qc_id': 'no label', 'fid_1': 'no label', 'kode_unsur': 'no label', 'toponim': 'no label', 'pelaksana': 'no label', 'updated': 'no label', 'keterangan': 'no label', 'rel_ka': 'no label', 'length': 'no label', 'pengembang': 'no label', });
lyr_StasiunKeretaApi_3.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'stasiun': 'no label', 'pengembang': 'no label', });
lyr_StasiunKeretaApi_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});