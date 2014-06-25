$('#fullScreen').click(function() {
	fullScreen();
})

$('#createNew').click(function() {
	createNew();
});

$('#saveFile').click(function() {
	saveLocalStorage($('#contents'));
});