//LANDSAT5 Configuration File-Javascript

//==========================
// SOURCE DESCRIPTION
//==========================
var temp = {
    'NVET': 'Nevada ETg Collection'
};
addToDict1(source_desc, temp);

//==========================
// VALID_DATE_RANGES
//==========================
var temp = {
   
    'NVET':['2001-01-01','Present']
};
for (var key in temp) {
    if (temp.hasOwnProperty(key)) {
        valid_date_ranges[key] = new Array();
        valid_date_ranges[key][0] = temp[key][0]
        valid_date_ranges[key][1] = temp[key][1]
    }
}

//==========================
//   YEAR RANGES FOR CLIMATOLOGY CALCS
//==========================
//this is the range for the dropdown
var temp = {

    'NVET':['2001',currentYear]
};
addToDict1(yearRangeClim, temp);

//this is what it gets set to on default
var temp = {

    'NVET':['2010',currentYear]
};
addToDict1(default_yearRangeClim, temp);

//==========================
// SCALE
//==========================
var temp = {
    'NVET':'30'
};
addToDict1(scale_list, temp);
var ScalesLandsat = {
    '30':'30 m'
};
var temp = {

    'NVET':window.ScalesLandsat
};
addToDict1(scaleListList, temp);

//==========================
// VARIABLESLANDSAT
//==========================
var VariablesLandsatSR = {
    'EVI':'EVI (Enhanced Vegetation Index)',
    'NDSI':'NDSI (Snow Index)',
    'NDVI':'NDVI (Vegetation Index)',
    'NDWI':'NDWI (Water Index)',
    'TrueColor':'True Color (Red/Green/Blue)',
    'FalseColor':'False Color (NIR/Red/Green)',
    'Blue':'Blue band',
    'Green':'Green band'
};
var temp = {
   
    'NVET':window.VariablesLandsatSR1,
};
addToDict1(variableListList, temp);



//==========================
// VARIABLESLANDSAT
//==========================
var VariablesLandsatSR1 = {
    'EVI':'EVI (Enhanced Vegetation Index)',
    'ET':'ET (Evapotranspiration)',
    'ET *':'ET *',
    'ET-UCI':'ET-UCI',
    'ET-LCI':'ET-LCI',
    'ETg':'ETg (Ground ET)',
    'ETg-UCI':'ETg-UCI',
    'ETg-LCI':'ETg-LCI',
    'PPT':'PPT (Precipitation)',
};
var temp = {
   
    'NVET':window.VariablesLandsatSR1,
};
addToDict1(variableListList, temp);


//=======================
// VARIABLE SHORT NAME
//=======================
var temp = {
    'NDVI':'NDVI',
    'EVI':'EVI',
    'NDSI':'NDSI',
    'NDWI':'NDWI',
    'TrueColor':'True Color',
    'FalseColor':'False Color',
    'Blue':'Blue',
    'Green':'Green',
  


    'ET':'ET',
    'ET *':'ET *',
    'ET-UCI':'ET-UCI',
    'ET-LCI':'ET-LCI',
    'ETg':'ETg',
    'ETg-UCI':'ETg-UCI',
    'ETg-LCI':'ETg-LCI',
    'PPT':'PPT'
};
addToDict1(variableShortName_list, temp);

//=======================
//  UNITS
//=======================
var temp = {

    'NDVI':'',
    'EVI':'',
    'NDSI':'',
    'NDWI':'',
    'TrueColor':'',
    'FalseColor':'',
    'Blue':'',
    'Green':'',

    'ET':'',
    'ET *':'',
    'ET-UCI':'',
    'ET-LCI':'',
    'ETg':'',
    'ETg-UCI':'',
    'ETg-LCI':'',
    'PPT':''

};
addToDict1(units_metric, temp);
var temp = {
    
    'NDVI':'',
    'EVI':'',
    'NDSI':'',
    'NDWI':'',
    'TrueColor':'',
    'FalseColor':'',
    'Blue':'',
    'Green':'',

    'ET':'',
    'ET *':'',
    'ET-UCI':'',
    'ET-LCI':'',
    'ETg':'',
    'ETg-UCI':'',
    'ETg-LCI':'',
    'PPT':''


};
addToDict1(units_english, temp);

//==========================
// DEFAULTS
//==========================
var temp = {
 
    'NVET':'EVI'
};
addToDict1(default_variable, temp);

//==========================
// THRESHOLD_COLORS
//==========================
var temp = {
    'NDVI':['green', 'orange'],
    'EVI':['green', 'orange'],
    'NDSI':['blue', 'red'],
    'NDWI':['blue', 'red'],
    'TrueColor':['red', 'blue'],
    'FalseColor':['red', 'blue'],

    'ET':['green', 'orange'],
    'ET *':['green', 'orange'],
    'ET-UCI':['green', 'orange'],
    'ET-LCI':['green', 'orange'],
    'ETg':['green', 'orange'],
    'ETg-UCI':['green', 'orange'],
    'ETg-LCI':['green', 'orange'],
    'PPT':['blue', 'red']




};
for (var key in temp) {
    if (temp.hasOwnProperty(key)) {
        threshold_colors[key] = new Array();
        threshold_colors[key][0] = temp[key][0]
        threshold_colors[key][1] = temp[key][1]
    }
}

//==========================
// COLORBAR MIN/MAX VALUES
//==========================
temp = {
   
    'NDVI':{
        'anom':{'metric':{'min':-.4,'max':.4},'english':{'min':-.4,'max':.4}},
        'value':{'metric':{'min':-.1,'max':.9},'english':{'min':-.1,'max':.9}},
        'clim':{'metric':{'min':-.1,'max':.9},'english':{'min':-.1,'max':.9}},
        'anompercentchange':{'metric':{'min':-30,'max':30},'english':{'min':-30,'max':30}},
        'anompercentof':{'metric':{'min':75,'max':125},'english':{'min':75,'max':125}}},
    'EVI':{
        'anom':{'metric':{'min':-.4,'max':.4},'english':{'min':-.4,'max':.4}},
        'value':{'metric':{'min':-.1,'max':.9},'english':{'min':-.1,'max':.9}},
        'clim':{'metric':{'min':-.1,'max':.9},'english':{'min':-.1,'max':.9}},
        'anompercentchange':{'metric':{'min':-30,'max':30},'english':{'min':-30,'max':30}},
        'anompercentof':{'metric':{'min':75,'max':125},'english':{'min':75,'max':125}}},
    'NDSI':{
        'anom':{'metric':{'min':-0.5,'max':0.5},'english':{'min':-0.5,'max':0.5}},
        'value':{'metric':{'min':-0.2,'max':.7},'english':{'min':-0.2,'max':0.7}},
        'clim':{'metric':{'min':-0.2,'max':.7},'english':{'min':-0.2,'max':0.7}},
        'anompercentchange':{'metric':{'min':-30,'max':30},'english':{'min':-30,'max':30}},
        'anompercentof':{'metric':{'min':75,'max':125},'english':{'min':75,'max':125}}},
    'NDWI':{
        'anom':{'metric':{'min':-0.5,'max':0.5},'english':{'min':-0.5,'max':0.5}},
        'value':{'metric':{'min':-0.2,'max':.7},'english':{'min':-0.2,'max':0.7}},
        'clim':{'metric':{'min':-0.2,'max':.7},'english':{'min':-0.2,'max':0.7}},
        'anompercentchange':{'metric':{'min':-30,'max':30},'english':{'min':-30,'max':30}},
        'anompercentof':{'metric':{'min':75,'max':125},'english':{'min':75,'max':125}}},
    'TrueColor':{
        'anom':{'metric':{'min':-0.1,'max':0.1},'english':{'min':-0.1,'max':0.1}},
        'value':{'metric':{'min':0,'max':0.3},'english':{'min':0,'max':0.3}},
        'clim':{'metric':{'min':0,'max':0.3},'english':{'min':0,'max':0.3}}},
    'FalseColor':{
        'anom':{'metric':{'min':-0.1,'max':0.1},'english':{'min':-0.1,'max':0.1}},
        'value':{'metric':{'min':0,'max':0.3},'english':{'min':0,'max':0.3}},
        'clim':{'metric':{'min':0,'max':0.3},'english':{'min':0,'max':0.3}}},
    'Blue':{
        'anom':{'metric':{'min':-0.1,'max':0.1},'english':{'min':-0.1,'max':0.1}},
        'value':{'metric':{'min':0,'max':0.3},'english':{'min':0.0,'max':0.3}},
        'clim':{'metric':{'min':0,'max':0.3},'english':{'min':0.0,'max':0.3}}},
    'Green':{
        'anom':{'metric':{'min':-0.1,'max':0.1},'english':{'min':-0.1,'max':0.1}},
        'value':{'metric':{'min':0,'max':0.3},'english':{'min':0,'max':0.3}},
        'clim':{'metric':{'min':0,'max':0.3},'english':{'min':0,'max':0.3}}},



    'ET':{
        'anom':{'metric':{'min':-.4,'max':.4},'english':{'min':-.4,'max':.4}},
        'value':{'metric':{'min':-.1,'max':.9},'english':{'min':-.1,'max':.9}},
        'clim':{'metric':{'min':-.1,'max':.9},'english':{'min':-.1,'max':.9}},
        'anompercentchange':{'metric':{'min':-30,'max':30},'english':{'min':-30,'max':30}},
        'anompercentof':{'metric':{'min':75,'max':125},'english':{'min':75,'max':125}}},
    'ET *':{
        'anom':{'metric':{'min':-.4,'max':.4},'english':{'min':-.4,'max':.4}},
        'value':{'metric':{'min':-.1,'max':.9},'english':{'min':-.1,'max':.9}},
        'clim':{'metric':{'min':-.1,'max':.9},'english':{'min':-.1,'max':.9}},
        'anompercentchange':{'metric':{'min':-30,'max':30},'english':{'min':-30,'max':30}},
        'anompercentof':{'metric':{'min':75,'max':125},'english':{'min':75,'max':125}}},
    'ET-UCI':{
        'anom':{'metric':{'min':-.4,'max':.4},'english':{'min':-.4,'max':.4}},
        'value':{'metric':{'min':-.1,'max':.9},'english':{'min':-.1,'max':.9}},
        'clim':{'metric':{'min':-.1,'max':.9},'english':{'min':-.1,'max':.9}},
        'anompercentchange':{'metric':{'min':-30,'max':30},'english':{'min':-30,'max':30}},
        'anompercentof':{'metric':{'min':75,'max':125},'english':{'min':75,'max':125}}},
    'ET-LCI':{
        'anom':{'metric':{'min':-.4,'max':.4},'english':{'min':-.4,'max':.4}},
        'value':{'metric':{'min':-.1,'max':.9},'english':{'min':-.1,'max':.9}},
        'clim':{'metric':{'min':-.1,'max':.9},'english':{'min':-.1,'max':.9}},
        'anompercentchange':{'metric':{'min':-30,'max':30},'english':{'min':-30,'max':30}},
        'anompercentof':{'metric':{'min':75,'max':125},'english':{'min':75,'max':125}}},

    'ETg':{
        'anom':{'metric':{'min':-.4,'max':.4},'english':{'min':-.4,'max':.4}},
        'value':{'metric':{'min':-.1,'max':.9},'english':{'min':-.1,'max':.9}},
        'clim':{'metric':{'min':-.1,'max':.9},'english':{'min':-.1,'max':.9}},
        'anompercentchange':{'metric':{'min':-30,'max':30},'english':{'min':-30,'max':30}},
        'anompercentof':{'metric':{'min':75,'max':125},'english':{'min':75,'max':125}}},
    'ETg-UCI':{
        'anom':{'metric':{'min':-.4,'max':.4},'english':{'min':-.4,'max':.4}},
        'value':{'metric':{'min':-.1,'max':.9},'english':{'min':-.1,'max':.9}},
        'clim':{'metric':{'min':-.1,'max':.9},'english':{'min':-.1,'max':.9}},
        'anompercentchange':{'metric':{'min':-30,'max':30},'english':{'min':-30,'max':30}},
        'anompercentof':{'metric':{'min':75,'max':125},'english':{'min':75,'max':125}}},
 
    'ETg-LCI':{
        'anom':{'metric':{'min':-.4,'max':.4},'english':{'min':-.4,'max':.4}},
        'value':{'metric':{'min':-.1,'max':.9},'english':{'min':-.1,'max':.9}},
        'clim':{'metric':{'min':-.1,'max':.9},'english':{'min':-.1,'max':.9}},
        'anompercentchange':{'metric':{'min':-30,'max':30},'english':{'min':-30,'max':30}},
        'anompercentof':{'metric':{'min':75,'max':125},'english':{'min':75,'max':125}}},

    'PPT':{
        'anom':{'metric':{'min':-0.5,'max':0.5},'english':{'min':-0.5,'max':0.5}},
        'value':{'metric':{'min':-0.2,'max':.7},'english':{'min':-0.2,'max':0.7}},
        'clim':{'metric':{'min':-0.2,'max':.7},'english':{'min':-0.2,'max':0.7}},
        'anompercentchange':{'metric':{'min':-30,'max':30},'english':{'min':-30,'max':30}},
        'anompercentof':{'metric':{'min':75,'max':125},'english':{'min':75,'max':125}}}


};
$.extend(colorbarMinMax_list1, temp);

//==========================
// COLORBAR MAP
//==========================
//note that anompercentof defaults are getting overwritten by /collections/set_formDefaults.js
var temp = {
  
    'EVI':{
        'anom':'RdYlGn','value':'YlGn','clim':'YlGn',
        'anompercentchange':'RdYlGn','anompercentof':'invUSDMwWest'},

    'ET':{
        'anom':'RdYlGn','value':'YlGn','clim':'YlGn',
        'anompercentchange':'RdYlGn','anompercentof':'invUSDMwWest'},
    'ET *':{
        'anom':'RdYlGn','value':'YlGn','clim':'YlGn',
        'anompercentchange':'RdYlGn','anompercentof':'invUSDMwWest'},
    'ET-UCI':{
        'anom':'RdYlGn','value':'YlGn','clim':'YlGn',
        'anompercentchange':'RdYlGn','anompercentof':'invUSDMwWest'},
    'ET-LCI':{
        'anom':'RdYlGn','value':'YlGn','clim':'YlGn',
        'anompercentchange':'RdYlGn','anompercentof':'invUSDMwWest'},
    'ETg':{
        'anom':'RdYlGn','value':'YlGn','clim':'YlGn',
        'anompercentchange':'RdYlGn','anompercentof':'invUSDMwWest'},
    'ETg-UCI':{
        'anom':'RdYlGn','value':'YlGn','clim':'YlGn',
        'anompercentchange':'RdYlGn','anompercentof':'invUSDMwWest'},
    'ETg-LCI':{
        'anom':'RdYlGn','value':'YlGn','clim':'YlGn',
        'anompercentchange':'RdYlGn','anompercentof':'invUSDMwWest'},
    'PPT':{'anom':'RdYlBu','value':'invBlues','clim':'invBlues',
    'anompercentchange':'RdYlBu','anompercentof':'invUSDMwWet'},

  
};
$.extend(colorbarMap_list1, temp);

//==========================
// COLORBAR SIZE
//==========================
 var temp = {
  
    'NDVI':{'anom':8,'value':9,'clim':9,'anompercentchange':8,'anompercentof':11},
    'EVI':{'anom':8,'value':9,'clim':9,'anompercentchange':8,'anompercentof':11},
    'NDSI':{'anom':8,'value':8,'clim':8,'anompercentchange':8,'anompercentof':11},
    'NDWI':{'anom':8,'value':8,'clim':8,'anompercentchange':8,'anompercentof':11},
    'TrueColor':{'anom':8,'value':8,'clim':8},
    'FalseColor':{'anom':8,'value':8,'clim':8},
    'Blue':{'anom':8,'value':8,'clim':8},
    'Green':{'anom':8,'value':8,'clim':8},

    'ET':{'anom':8,'value':9,'clim':9,'anompercentchange':8,'anompercentof':11},
    'ET *':{'anom':8,'value':9,'clim':9,'anompercentchange':8,'anompercentof':11},
    'ET-UCI':{'anom':8,'value':9,'clim':9,'anompercentchange':8,'anompercentof':11},
    'ET-LCI':{'anom':8,'value':9,'clim':9,'anompercentchange':8,'anompercentof':11},
    'ETg':{'anom':8,'value':9,'clim':9,'anompercentchange':8,'anompercentof':11},
    'ETg-UCI':{'anom':8,'value':9,'clim':9,'anompercentchange':8,'anompercentof':11},
    'ETg-LCI':{'anom':8,'value':9,'clim':9,'anompercentchange':8,'anompercentof':11},
    'PPT':{'anom':8,'value':8,'clim':8,'anompercentchange':8,'anompercentof':11}
  
};
$.extend(colorbarSize_list1, temp);

