$(document).on('click','#start',function(e) {
	$('#startpanel').toggle();
});

$('#age').slider({
	formatter: function(value) {
		return value;
	}
});
