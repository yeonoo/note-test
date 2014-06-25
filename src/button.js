/*
var bb = new BlobBuilder();
bb.append(content);
var fileSaver = window.saveAs(bb.getBlob("text/plain;charset=UTF-8"), "filename.txt");
*/
$('#fullscreen').click(function () {
	screenfull.toggle($('#container')[0]);
});

$('#createNew').click(function() {
	createNew()
});

$('#saveFile').click(function() {
	saveLocalStorage($('#contents'));
});