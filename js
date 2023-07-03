$(".countdown-block copy").countdown("2023/08/10", function(event) {
	$('#days1').text(
		event.strftime('%D')
	);
  $('#hours1').text(
		event.strftime('%H')
	);
  $('#minutes1').text(
		event.strftime('%M')
	);
  $('#seconds1').text(
		event.strftime('%S')
	);
});