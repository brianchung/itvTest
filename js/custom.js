$(document).on('click','#start',function(e) {
	$('#startpanel').toggle();
});

/*$('#slider-age').slider({
	formatter: function(value) {
		return value;
	}
});*/

$(function() {
    $( "#slider-age" ).slider({
      range: "max",
      min: 0,
      max: 100,
      value: 2,
      slide: function( event, ui ) {
        //$( "#amount" ).val( ui.value );
		
		$('#slider-age').tooltip(ui.value)
      }
    });
    //$( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
  });
