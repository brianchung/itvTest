$(document).on('click','#start',function(e) {
	$('#startpanel').slideToggle(); //.toggle();
});

$(function() {
	$( "#slider-age" ).slider({
      range: "max",
      min: 0,
      max: 100,
      value: 2,
      slide: function( event, ui ) {

      }
    });
});
