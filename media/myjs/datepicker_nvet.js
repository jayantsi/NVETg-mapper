//-------------------------
// DUPLICATE FOR TIME DATE (Listener sets change in either to the other)
//-------------------------


 $( "#dateStartTS" ).datepicker({
	      showOn: "button",
	      buttonImage: "images/calendar.gif",
	      buttonImageOnly: true,
	      buttonText: "Open Calendar",
	      changeMonth: false,
	      changeYear: true,
	      //numberOfMonths: 3,
	      //minDate: $('#minDate').val(),
	      //maxDate: $('#maxDate').val(),
	      //yearRange: $('#minYear').val() + ":+0",
	      //minDate: $('#minYear').val() + "-01-01",
	      //maxDate: "-2d",
	      yearRange: $('#minYear').val() + ":" + $('#maxYear').val(),
	      dateFormat: "yy-mm-dd",
	      altFormat: "yy",
	      altField: "#date_Start",

	      onClose: function( selectedDate ) {
		    var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
                    $(this).datepicker('setDate', new Date(year, 0, 1));	

		    //$( ".dateEndTS" ).datepicker( "option", "minDate", selectedDate );
		    document.getElementById('dateStart').value =document.getElementById('dateStartTS').value;
		    document.getElementById('mapid').value ='';
		    document.getElementById('token').value ='';
	      }
	    }).datepicker('setDate', $('#dateStartTS').val());
	    //}).datepicker('setDate', "{{ dateStartTS }}");

	    $( "#dateEndTS" ).datepicker({
	      showOn: "button",
	      buttonImage: "images/calendar.gif",
	      buttonImageOnly: true,
	      buttonText: "Open Calendar",
	      changeMonth: true,
	      changeYear: true,
	      //numberOfMonths: 3,
	      //minDate: $('#minDate').val(),
	      //maxDate: $('#maxDate').val(),
	      //yearRange: $('#minYear').val() + ":+0", 
	      yearRange: $('#minYear').val() + ":" + $('#maxYear').val(),
	      dateFormat: "yy-mm-dd",
	      altFormat: "yy",
	      altField: "#date_End",

	      onClose: function( selectedDate ) {
		    var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
                    $(this).datepicker('setDate', new Date(year, 0, 1));

		    //$( ".dateStartTS" ).datepicker( "option", "maxDate", selectedDate );
		    document.getElementById('dateEnd').value =document.getElementById('dateEndTS').value;
		    document.getElementById('mapid').value ='';
		   document.getElementById('token').value ='';
	      }
	   }).datepicker('setDate',$('#dateEndTS').val());
	   //}).datepicker('setDate', '{{ dateEndTS }}');

	$( "#dateStart2TS" ).datepicker({
              showOn: "button",
              buttonImage: "images/calendar.gif",
              buttonImageOnly: true,
              buttonText: "Open Calendar",
              changeMonth: true,
              changeYear: true,
              numberOfMonths: 3,
              minDate: $('#minDate2').val(),
              maxDate: $('#maxDate2').val(),
              //yearRange: $('#minYear2').val() + ":+0",
	      yearRange: $('#minYear2').val() + ":" + $('#maxYear2').val(),
              dateFormat: "yy-mm-dd",
              onClose: function( selectedDate ) {
                    $( ".dateEnd2TS" ).datepicker( "option", "minDate", selectedDate );
              }
            }).datepicker('setDate', $('#dateStart2TS').val());
            //}).datepicker('setDate', "{{ dateStart2TS }}");

            $( "#dateEnd2TS" ).datepicker({
              showOn: "button",
              buttonImage: "images/calendar.gif",
              buttonImageOnly: true,
              buttonText: "Open Calendar",
              changeMonth: true,
              changeYear: true,
              numberOfMonths: 3,
              minDate: $('#minDate2').val(),
              maxDate: $('#maxDate2').val(),
              //yearRange: $('#minYear2').val() + ":+0",
	      yearRange: $('#minYear2').val() + ":" + $('#maxYear2').val(),
              dateFormat: "yy-mm-dd",
              onClose: function( selectedDate ) {
                    $( ".dateStart2TS" ).datepicker( "option", "maxDate", selectedDate );
              }
           }).datepicker('setDate', $('#dateEnd2TS').val());
           //}).datepicker('setDate', '{{ dateEnd2TS }}');


        //-------------------------
        // DUPLICATE FOR MAP DATE(Listener sets change in either to the other)
        //-------------------------
     $(function() {
        $( "#dateStart" ).datepicker({
		  showOn: "button",
		  buttonImage: "images/calendar.gif",
		  buttonImageOnly: true,
		  buttonText: "Open Calendar",
		  //showButtonPanel: true,
		  changeMonth: false,
		  changeYear: true,
		  //minDate: $('#minDate').val(),
		  //maxDate: $('#maxDate').val(),
		  yearRange: $('#minYear').val() + ":" + $('#maxYear').val(), //can do :+0 for current day
		  dateFormat: "yy-mm-dd",
		  altFormat: "yy",
	 	  altField: "#date_Start",
		  onClose: function( selectedDate ) {

			var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
                        $(this).datepicker('setDate', new Date(year, 0, 1));			
	
			//$( ".dateEnd" ).datepicker( "option", "minDate", selectedDate(year, 1) );
			//$(".dateEnd").mask("9999");	
			//$(".dateEnd").mask("99", {placeholder: 'yy' });
			document.getElementById('dateStartTS').value =document.getElementById('dateStart').value;
		  }


        });



	$( "#dateStart" ).focus(function () {
		$(".ui-datepicker-month").hide();
		$(".ui-datepicker-calender").hide();
	}).datepicker('setDate', $('#dateStart').val());
        //}).datepicker('setDate', "{{ dateStart }}");

});

    $(function() {
        $( "#dateEnd" ).datepicker({
		    showOn: "button",
		    buttonImage: "images/calendar.gif",
		    buttonImageOnly: true,
		    buttonText: "Open Calendar",
		    //showButtonPanel: true,

		    changeMonth: false,
		    changeYear: true,
		    //minDate: $('#minDate').val(),
		    //maxDate: $('#maxDate').val(),
		    yearRange: $('#minYear').val() + ":" +$('#maxYear').val(),
		    dateFormat: "yy-mm-dd",
		    altFormat: "yy",
		    altField: "#date_End",
		    onClose: function( selectedDate ) {

			var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
                    	$(this).datepicker('setDate', new Date(year, 0, 1));	

			//$( ".dateStart" ).datepicker( "option", "maxDate", selectedDate(year, 1) );

			//$(".dateStart").mask("9999");
			//$(".dateEnd").mask("99", {placeholder: 'yy' });
			document.getElementById('dateEndTS').value =document.getElementById('dateEnd').value;
		    }
        });


	$( "#dateEnd" ).focus(function () {
			$(".ui-datepicker-month").hide();
			$(".ui-datepicker-calender").hide();
		}).datepicker('setDate', $('#dateEnd').val());
		//}).datepicker('setDate', "{{ dateStart }}");

});

