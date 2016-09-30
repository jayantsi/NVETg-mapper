function get_fusion_table_outline(layer){
	  return new google.maps.FusionTablesLayer({
		      map: map,
		      heatmap: { enabled: false },
		      query: {
			select: window.ftDefaults[layer][3],
			from: window.ftDefaults[layer][0],
			where: ""
		      },
		      options: 
			styles_ftOutlines[layer]
		 });
};

