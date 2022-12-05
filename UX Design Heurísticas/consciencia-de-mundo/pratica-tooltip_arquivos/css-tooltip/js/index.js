$('.tooltip').on('mouseover', function() {
	var mouse = event.pageX;
	$(this).append("<style>.tooltip::after { left: " + mouse + "px; }</style>");
});

$('.tooltip').on('mouseout', function() {
	$('.tooltip style').remove();
});